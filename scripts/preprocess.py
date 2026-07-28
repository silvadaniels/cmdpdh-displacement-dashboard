#!/usr/bin/env python3
"""Audit and preprocess the CMDPDH municipal displacement dataset."""
from __future__ import annotations

import argparse
import csv
import json
import re
import unicodedata
from collections import Counter, defaultdict
from pathlib import Path
from shapely import make_valid, union_all
from shapely.geometry import GeometryCollection, MultiPolygon, Polygon, mapping, shape

YEARS = [2017, 2018, 2019, 2020, 2021, 2022, 2023]
AVAILABLE_YEARS = [2017, 2018, 2019, 2020, 2022, 2023]
ID_VARS = {"return_status", "indigenous_population", "armed_attack", "clashes",
           "weapons_presence", "threats_intimidation", "property_destruction",
           "forced_recruitment", "detentions", "killings", "extortion",
           "disappearances", "intentional_eviction", "multiple_displacement"}
COUNT_VARS = {"persons_reported", "persons_estimated", "families_displaced"}
ANALYTICAL = sorted(ID_VARS | COUNT_VARS)
PERCENT_VARS = [
    "return_status", "indigenous_population", "armed_attack", "clashes",
    "weapons_presence", "threats_intimidation", "property_destruction",
    "forced_recruitment", "detentions", "killings", "extortion",
    "disappearances", "intentional_eviction",
]
STATE_NAMES = {
    "01":"Aguascalientes","02":"Baja California","03":"Baja California Sur",
    "04":"Campeche","05":"Coahuila de Zaragoza","06":"Colima","07":"Chiapas",
    "08":"Chihuahua","09":"Ciudad de México","10":"Durango","11":"Guanajuato",
    "12":"Guerrero","13":"Hidalgo","14":"Jalisco","15":"México",
    "16":"Michoacán de Ocampo","17":"Morelos","18":"Nayarit","19":"Nuevo León",
    "20":"Oaxaca","21":"Puebla","22":"Querétaro","23":"Quintana Roo",
    "24":"San Luis Potosí","25":"Sinaloa","26":"Sonora","27":"Tabasco",
    "28":"Tamaulipas","29":"Tlaxcala","30":"Veracruz de Ignacio de la Llave",
    "31":"Yucatán","32":"Zacatecas",
}

def repair_text(value: str | None) -> str | None:
    if value is None or not value.strip():
        return None
    text = value.strip()
    # Recover the common UTF-8-as-MacRoman corruption visible in this source.
    if any(mark in text for mark in ("√", "¬", "√©", "√°", "√Å")):
        try:
            text = text.encode("mac_roman").decode("utf-8")
        except (UnicodeEncodeError, UnicodeDecodeError):
            pass
    text = unicodedata.normalize("NFC", text)
    text = (text.replace("\u2018", "'").replace("\u2019", "'")
                .replace("\u201c", '"').replace("\u201d", '"')
                .replace("\u2013", "-").replace("\u2014", "-"))
    return re.sub(r"\s+", " ", text).strip()

def norm_name(value: str | None) -> str:
    if not value:
        return ""
    value = repair_text(value) or ""
    value = "".join(c for c in unicodedata.normalize("NFD", value)
                    if unicodedata.category(c) != "Mn")
    value = re.sub(r"[^a-z0-9 ]+", " ", value.casefold())
    return re.sub(r"\s+", " ", value).strip()

def parse_number(value: str) -> int | float | None:
    if value is None or not value.strip():
        return None
    number = float(value)
    return int(number) if number.is_integer() else number

def aggregate(values):
    known = [v for v in values if v is not None]
    return sum(known) if known else None

def summarize_records(rows):
    """Summarize counts and nullable dummy averages for one place/year."""
    result = {"event_records": len(rows)}
    for var in COUNT_VARS:
        result[var] = aggregate(r[var] for r in rows)
    for var in PERCENT_VARS:
        valid = [r[var] for r in rows if r[var] in (0, 1)]
        yes_count = sum(value == 1 for value in valid)
        no_count = sum(value == 0 for value in valid)
        valid_count = yes_count + no_count
        result[f"{var}_pct"] = (yes_count / valid_count * 100) if valid_count else None
        result[f"{var}_yes"] = yes_count
        result[f"{var}_no"] = no_count
        result[f"{var}_known"] = valid_count
        result[f"{var}_missing"] = len(rows) - valid_count
    return result

def status(value):
    if value is None:
        return "missing"
    return "zero" if value == 0 else "positive"

def polygonal_parts(geometry):
    """Return only valid polygonal parts from a repaired geometry."""
    fixed = make_valid(geometry)
    if isinstance(fixed, Polygon):
        return [fixed]
    if isinstance(fixed, MultiPolygon):
        return list(fixed.geoms)
    if isinstance(fixed, GeometryCollection):
        parts = []
        for child in fixed.geoms:
            parts.extend(polygonal_parts(child))
        return parts
    return []

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("repo", type=Path)
    args = ap.parse_args()
    raw = args.repo / "data/raw"
    out = args.repo / "data/processed"
    docs = args.repo / "docs"
    out.mkdir(parents=True, exist_ok=True)
    docs.mkdir(parents=True, exist_ok=True)

    raw_files = sorted(p.name for p in raw.iterdir())
    csv_path = raw / "displaced2017_2023_clean.csv"
    geo_path = raw / "mexico-municipalities.geojson"
    with csv_path.open(encoding="utf-8-sig", newline="") as f:
        reader = csv.DictReader(f)
        source_rows = list(reader)
        columns = reader.fieldnames or []
    with geo_path.open(encoding="utf-8") as f:
        geo = json.load(f)

    code_to_feature = {}
    name_index = defaultdict(list)
    for feature in geo["features"]:
        p = feature["properties"]
        code = f'{str(p["CVE_ENT"]).zfill(2)}{str(p["CVE_MUN"]).zfill(3)}'
        p["municipality_id"] = code
        p["state_id"] = code[:2]
        p["state_name"] = STATE_NAMES.get(code[:2])
        p["municipality_name"] = repair_text(str(p["NOM_MUN"]))
        code_to_feature[code] = feature
        name_index[norm_name(p["municipality_name"])].append(code)

    missing_by_col = {c: sum(not (r.get(c) or "").strip() for r in source_rows) for c in columns}
    exact_dupes = len(source_rows) - len({tuple((c, r.get(c, "")) for c in columns) for r in source_rows})
    repaired_examples = {}
    unmatched = Counter()
    ambiguous_destinations = {}
    unmatched_destinations = Counter()
    processed = []
    display_removed = 0

    for i, row in enumerate(source_rows, start=2):
        original_code = (row.get("munID_orig") or "").strip()
        try:
            code = str(int(float(original_code))).zfill(5)
        except ValueError:
            code = original_code.zfill(5)
        feature = code_to_feature.get(code)
        if not feature:
            unmatched[code] += 1
        cleaned = {}
        for key, value in row.items():
            if key in ANALYTICAL:
                cleaned[key] = parse_number(value)
            elif key in {"lat_orig", "long_orig"}:
                cleaned[key] = parse_number(value)
            elif key == "year":
                cleaned[key] = int(value)
            else:
                fixed = repair_text(value)
                cleaned[key] = fixed
                if fixed and value.strip() != fixed:
                    repaired_examples.setdefault(value.strip(), fixed)
        cleaned["municipality_id"] = code
        cleaned["state_id"] = code[:2]
        cleaned["municipality_name"] = feature["properties"]["municipality_name"] if feature else cleaned.get("origin_municipality")
        cleaned["state_name"] = feature["properties"]["state_name"] if feature else cleaned.get("origin_state")
        cleaned.pop("munID_orig", None)
        cleaned.pop("origin_state", None)
        cleaned.pop("origin_municipality", None)
        dest = cleaned.get("destination_municipality")
        dest_code = None
        dest_match = "missing"
        if dest:
            key = norm_name(dest)
            candidates = name_index.get(key, [])
            if len(candidates) == 1:
                dest_code, dest_match = candidates[0], "exact_unique"
                cleaned["destination_municipality"] = code_to_feature[dest_code]["properties"]["municipality_name"]
            elif len(candidates) > 1:
                dest_match = "ambiguous"
                ambiguous_destinations.setdefault(dest, candidates)
            else:
                dest_match = "unmatched"
                unmatched_destinations[dest] += 1
        cleaned["destination_municipality_id"] = dest_code
        cleaned["destination_match_status"] = dest_match
        cleaned["display"] = not all(cleaned[v] in (None, 0) for v in ANALYTICAL)
        if not cleaned["display"]:
            display_removed += 1
        processed.append(cleaned)

    # Municipal-year aggregates retain null when every source value is missing.
    groups = defaultdict(list)
    for row in processed:
        groups[(row["municipality_id"], row["year"])].append(row)
    municipal = []
    for (code, year), rows in sorted(groups.items()):
        first = rows[0]
        item = {
            "municipality_id": code, "state_id": first["state_id"],
            "municipality_name": first["municipality_name"], "state_name": first["state_name"],
            "year": year, "event_records": len(rows),
        }
        for var in ANALYTICAL:
            item[var] = aggregate(r[var] for r in rows)
            item[f"{var}_status"] = status(item[var])
        item["display"] = not all(item[v] in (None, 0) for v in ANALYTICAL)
        municipal.append(item)

    state_groups = defaultdict(list)
    for row in municipal:
        state_groups[(row["state_id"], row["year"])].append(row)
    states = []
    for (sid, year), rows in sorted(state_groups.items()):
        item = {"state_id": sid, "state_name": STATE_NAMES.get(sid), "year": year,
                "municipalities_with_records": len(rows),
                "event_records": sum(r["event_records"] for r in rows)}
        for var in ANALYTICAL:
            item[var] = aggregate(r[var] for r in rows)
            item[f"{var}_status"] = status(item[var])
        states.append(item)

    annual = []
    for year in YEARS:
        rows = [r for r in processed if r["year"] == year]
        if year == 2021:
            annual.append({"year": year, "availability": "data unavailable",
                           "availability_es": "datos no disponibles",
                           "event_records": None, "municipalities": None,
                           "states": None, **{v: None for v in COUNT_VARS}})
        else:
            annual.append({"year": year, "availability": "available",
                           "availability_es": "disponibles", "event_records": len(rows),
                           "municipalities": len({r["municipality_id"] for r in rows}),
                           "states": len({r["state_id"] for r in rows}),
                           **{v: aggregate(r[v] for r in rows) for v in COUNT_VARS}})

    # Directional summaries. Origin is authoritative for every source record.
    # Destination summaries use only exact, nationwide-unique code matches.
    origin_municipal_groups = defaultdict(list)
    destination_municipal_groups = defaultdict(list)
    origin_state_groups = defaultdict(list)
    destination_state_groups = defaultdict(list)
    for row in processed:
        origin_municipal_groups[(row["municipality_id"], row["year"])].append(row)
        origin_state_groups[(row["state_id"], row["year"])].append(row)
        destination_code = row["destination_municipality_id"]
        if destination_code:
            destination_municipal_groups[(destination_code, row["year"])].append(row)
            destination_state_groups[(destination_code[:2], row["year"])].append(row)

    def directional_years(groups, code):
        years = {}
        for year in AVAILABLE_YEARS:
            rows = groups.get((code, year), [])
            if rows:
                years[str(year)] = summarize_records(rows)
        return years

    # Join municipal aggregates into the complete municipal geography.
    agg_lookup = defaultdict(list)
    for row in municipal:
        agg_lookup[row["municipality_id"]].append(row)
    output_features = []
    for code, src in code_to_feature.items():
        yearly = agg_lookup.get(code, [])
        output_features.append({
            "type": "Feature",
            "properties": {
                "municipality_id": code, "state_id": code[:2],
                "municipality_name": src["properties"]["municipality_name"],
                "state_name": src["properties"]["state_name"],
                "years": {
                    "origin": directional_years(origin_municipal_groups, code),
                    "destination": directional_years(destination_municipal_groups, code),
                },
            },
            "geometry": src["geometry"],
        })
    geo_out = {"type": "FeatureCollection", "features": output_features}

    # Build a true dissolved state geography. Every municipality is repaired
    # first, then merged by the official two-digit entity code.
    state_year_lookup = defaultdict(list)
    for row in states:
        state_year_lookup[row["state_id"]].append(row)
    state_parts = defaultdict(list)
    invalid_before_repair = 0
    for code, src in code_to_feature.items():
        geometry = shape(src["geometry"])
        if not geometry.is_valid:
            invalid_before_repair += 1
        state_parts[code[:2]].extend(polygonal_parts(geometry))
    state_features = []
    dissolve_report = {}
    for sid in sorted(STATE_NAMES):
        yearly = state_year_lookup.get(sid, [])
        municipal_parts = state_parts[sid]
        dissolved = make_valid(union_all(municipal_parts))
        dissolved_parts = polygonal_parts(dissolved)
        final_geometry = dissolved_parts[0] if len(dissolved_parts) == 1 else MultiPolygon(dissolved_parts)
        dissolve_report[sid] = {
            "source_polygon_parts": len(municipal_parts),
            "dissolved_polygon_parts": len(dissolved_parts),
            "valid": final_geometry.is_valid,
            "geometry_type": final_geometry.geom_type,
        }
        state_features.append({
            "type": "Feature",
            "properties": {
                "state_id": sid, "state_name": STATE_NAMES[sid],
                "years": {
                    "origin": directional_years(origin_state_groups, sid),
                    "destination": directional_years(destination_state_groups, sid),
                },
            },
            "geometry": mapping(final_geometry),
        })
    state_geo_out = {"type": "FeatureCollection", "features": state_features}

    def dump(name, data):
        with (out / name).open("w", encoding="utf-8") as f:
            json.dump(data, f, ensure_ascii=False, separators=(",", ":"))
    dump("municipal.geojson", geo_out)
    dump("states.geojson", state_geo_out)
    dump("municipal.json", municipal)
    dump("state.json", states)
    dump("annual.json", annual)
    dump("records.json", processed)
    dump("quality_report.json", {
        "raw_files": raw_files, "source_rows": len(source_rows), "columns": columns,
        "missing_by_column": missing_by_col, "exact_duplicate_rows": exact_dupes,
        "unmatched_municipality_codes": dict(unmatched),
        "ambiguous_destination_names": ambiguous_destinations,
        "unmatched_destination_names": dict(unmatched_destinations),
        "text_repairs": repaired_examples, "display_removed_records": display_removed,
        "destination_geography_coverage": {
            "records_with_exact_unique_code": sum(
                r["destination_municipality_id"] is not None for r in processed
            ),
            "total_records": len(processed),
            "note": "Destination geography includes exact nationwide-unique official-name matches only.",
        },
        "state_dissolve": {
            "invalid_municipal_geometries_repaired": invalid_before_repair,
            "state_feature_count": len(state_features),
            "all_states_valid": all(x["valid"] for x in dissolve_report.values()),
            "states": dissolve_report,
        },
    })

    matched_dest = sum(r["destination_match_status"] == "exact_unique" for r in processed)
    present_dest = sum(r["destination_municipality"] is not None for r in processed)
    ambiguous_lines = "\n".join(
        f"- `{name}`: {', '.join(codes)}" for name, codes in ambiguous_destinations.items()
    ) or "- None."
    unmatched_destination_lines = "\n".join(
        f"- `{name}`: {count} record(s)" for name, count in unmatched_destinations.items()
    ) or "- None."
    audit = f"""# Data audit

## Scope and source inventory

This audit covers all files in `data/raw`: {", ".join(f"`{x}`" for x in raw_files)}.
The CSV contains **{len(source_rows)} records and {len(columns)} columns** for {", ".join(map(str, AVAILABLE_YEARS))}. There are no 2021 observations. The geographic layer contains **{len(geo["features"])} municipality features** in longitude/latitude coordinates. The `.qmd` file is QGIS metadata, despite its extension; its recorded extent is empty/invalid and was not used analytically.

## Schema, types, missingness and duplicates

- Geographic identifiers are normalized from numeric-looking source values to five-character strings (`SSMMM`). `state_id` is the first two characters.
- `year` is integer. Coordinates are numeric. Fourteen event/condition fields are nullable binary indicators. `persons_reported`, `persons_estimated`, and `families_displaced` are nullable numeric counts. Text fields are nullable strings.
- Exact duplicate rows: **{exact_dupes}**.
- Missing values by column:

| Variable | Missing / blank | Total |
|---|---:|---:|
{chr(10).join(f"| `{c}` | {missing_by_col[c]} | {len(source_rows)} |" for c in columns)}

Blank strings become JSON `null`. A reported `0` remains numeric zero. Positive values remain numeric. Aggregates are `null` only when all contributing values are missing; otherwise known values are summed. Companion `*_status` fields explicitly label `missing`, `zero`, or `positive`.

## Geographic join and official naming

The origin join uses only the normalized geographic code—never a municipality name. Official municipality names come from `NOM_MUN` in the geographic layer. Official state names are assigned by the layer's two-digit `CVE_ENT` using the standard 32-entity code list.

Unmatched origin codes: **{sum(unmatched.values())} records across {len(unmatched)} codes**.

{chr(10).join(f"- `{k}`: {v} record(s)" for k,v in unmatched.items()) if unmatched else "- None."}

## Text repair

Text is trimmed, Unicode-normalized (NFC), whitespace-normalized, curly punctuation standardized, and known UTF-8-as-MacRoman mojibake repaired. Representative corrections:

{chr(10).join(f"- `{k}` → `{v}`" for k,v in list(repaired_examples.items())[:30]) if repaired_examples else "- No repairs required."}

## Destination review

The source provides destination municipality names but no destination state or code. A destination code is assigned only when the repaired, accent-insensitive official name has exactly one match nationwide. **{matched_dest} of {present_dest} nonblank destination values** meet that conservative standard. The remainder cannot be reliably coded without additional state/context and are retained as text with a match status.

Ambiguous destination names:

{ambiguous_lines}

Unmatched/non-municipality destination values:

{unmatched_destination_lines}

## Display filtering and aggregation

- A record is hidden from the dashboard only when all 17 substantive analytical variables are zero or missing. **{display_removed} source records** meet this rule. They remain in `records.json` with `display: false` for auditability.
- Municipal-year data sum numeric counts and binary indicator occurrences by official origin municipality code.
- State-year data sum municipal results by the derived two-digit state code.
- Annual summaries cover 2017, 2018, 2019, 2020, 2022 and 2023.
- The 2021 row is explicitly present with `availability: "data unavailable"` / `"datos no disponibles"` and null metrics. It is neither zero-filled nor interpolated.

## Outputs

- `municipal.geojson`: complete municipal geography with yearly metrics embedded where source records exist.
- `states.geojson`: one valid dissolved feature per state, generated by repairing and unioning municipality polygons on the two-digit state code, with state-year aggregates.
- `municipal.json`: municipal-year analytical table.
- `state.json`: state-year analytical table.
- `annual.json`: complete 2017–2023 time series with the explicit 2021 unavailable marker.
- `records.json`: corrected record-level data with destination match evidence and display flag.
- `quality_report.json`: machine-readable audit findings.

## Assumptions and limitations

- The source's `persons_reported` and `persons_estimated` are preserved as separate measures and never substituted for each other.
- Binary indicators are aggregated as counts of records flagged `1`, not as counts of displaced people exposed.
- Missing indicator values are unknown, not false.
- Destination coding is conservative; ambiguous or descriptive destinations require additional source metadata before reliable municipality-level analysis.
- Directional destination summaries include only records with one exact, nationwide-unique official municipality-name match. The output reports this coverage explicitly.
- Return status, indigenous population, and cause variables are exported as percentages calculated from known 0/1 values only; missing values are excluded from the denominator.
- The geographic layer supplies no state-name attribute, so official state names are mapped from its entity code rather than copied from the CSV.
"""
    (docs / "DATA_AUDIT.md").write_text(audit, encoding="utf-8")
    print(json.dumps({"rows": len(source_rows), "municipal_year_rows": len(municipal),
                      "state_year_rows": len(states), "map_features": len(output_features),
                      "unmatched_origins": dict(unmatched), "ambiguous_destinations": ambiguous_destinations,
                      "unmatched_destinations": dict(unmatched_destinations),
                      "display_removed": display_removed}, ensure_ascii=False, indent=2))

if __name__ == "__main__":
    main()
