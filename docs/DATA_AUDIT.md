# Data audit

## Scope and source inventory

This audit covers all files in `data/raw`: `.DS_Store`, `displaced2017_2023_clean.csv`, `mexico-municipalities.geojson`, `mexico-municipalities.qmd`.
The CSV contains **158 records and 24 columns** for 2017, 2018, 2019, 2020, 2022, 2023. There are no 2021 observations. The geographic layer contains **2457 municipality features** in longitude/latitude coordinates. The `.qmd` file is QGIS metadata, despite its extension; its recorded extent is empty/invalid and was not used analytically.

## Schema, types, missingness and duplicates

- Geographic identifiers are normalized from numeric-looking source values to five-character strings (`SSMMM`). `state_id` is the first two characters.
- `year` is integer. Coordinates are numeric. Fourteen event/condition fields are nullable binary indicators. `persons_reported`, `persons_estimated`, and `families_displaced` are nullable numeric counts. Text fields are nullable strings.
- Exact duplicate rows: **0**.
- Missing values by column:

| Variable | Missing / blank | Total |
|---|---:|---:|
| `munID_orig` | 0 | 158 |
| `lat_orig` | 0 | 158 |
| `long_orig` | 0 | 158 |
| `year` | 0 | 158 |
| `origin_state` | 0 | 158 |
| `origin_municipality` | 0 | 158 |
| `destination_municipality` | 99 | 158 |
| `return_status` | 29 | 158 |
| `indigenous_population` | 124 | 158 |
| `armed_attack` | 74 | 158 |
| `clashes` | 64 | 158 |
| `weapons_presence` | 56 | 158 |
| `threats_intimidation` | 40 | 158 |
| `property_destruction` | 56 | 158 |
| `forced_recruitment` | 74 | 158 |
| `detentions` | 76 | 158 |
| `killings` | 46 | 158 |
| `extortion` | 46 | 158 |
| `disappearances` | 46 | 158 |
| `intentional_eviction` | 49 | 158 |
| `multiple_displacement` | 46 | 158 |
| `persons_reported` | 0 | 158 |
| `persons_estimated` | 0 | 158 |
| `families_displaced` | 0 | 158 |

Blank strings become JSON `null`. A reported `0` remains numeric zero. Positive values remain numeric. Aggregates are `null` only when all contributing values are missing; otherwise known values are summed. Companion `*_status` fields explicitly label `missing`, `zero`, or `positive`.

## Geographic join and official naming

The origin join uses only the normalized geographic code—never a municipality name. Official municipality names come from `NOM_MUN` in the geographic layer. Official state names are assigned by the layer's two-digit `CVE_ENT` using the standard 32-entity code list.

Unmatched origin codes: **0 records across 0 codes**.

- None.

## Text repair

Text is trimmed, Unicode-normalized (NFC), whitespace-normalized, curly punctuation standardized, and known UTF-8-as-MacRoman mojibake repaired. Representative corrections:

- `Chalchihuit√°n` → `Chalchihuitán`
- `T√©cpan de Galeana` → `Técpan de Galeana`
- `Chilapa de √Ålvarez` → `Chilapa de Álvarez`
- `Michoac√°n y Guerrero` → `Michoacán y Guerrero`
- `Mat√≠as Romero Avenda√±o` → `Matías Romero Avendaño`
- `Oaxaca de Ju√°rez` → `Oaxaca de Juárez`
- `Mazatl√°n` → `Mazatlán`
- `Guerrero y Michoac√°n` → `Guerrero y Michoacán`
- `Chenalh√≥` → `Chenalhó`
- `Chicomuselo (al menos 600 personas)  y 792 personas en refugios temporales de protecci√≥n civil en Tuxtla Gutierrez y Chapa de Corzo` → `Chicomuselo (al menos 600 personas) y 792 personas en refugios temporales de protección civil en Tuxtla Gutierrez y Chapa de Corzo`
- `Maravilla Tenejapa, Las Margaritas y Comit√°n` → `Maravilla Tenejapa, Las Margaritas y Comitán`
- `Sin informaci√≥n` → `Sin información`
- `Estado de M√©xico` → `Estado de México`
- `Xaltianguis, despu√©s Atoyac de √Ålvarez` → `Xaltianguis, después Atoyac de Álvarez`
- `Primer movimiento: Acapulco
Segundo movimiento: Morelia` → `Primer movimiento: Acapulco Segundo movimiento: Morelia`
- `T√©cpan de Galeana, otros puntos de la Costa Grande` → `Técpan de Galeana, otros puntos de la Costa Grande`
- `Petatl√°n` → `Petatlán`
- `Hu√©tamo` → `Huétamo`
- `Michoac√°n` → `Michoacán`
- `Apatzing√°n` → `Apatzingán`
- `Santa Mar√≠a Chimalapa` → `Santa María Chimalapa`
- `San Luis Potos√≠` → `San Luis Potosí`
- `Cabecera municipal de Miguel Alem√°n y ciudades de Nuevo Le√≥n` → `Cabecera municipal de Miguel Alemán y ciudades de Nuevo León`

## Destination review

The source provides destination municipality names but no destination state or code. A destination code is assigned only when the repaired, accent-insensitive official name has exactly one match nationwide. **31 of 59 nonblank destination values** meet that conservative standard. The remainder cannot be reliably coded without additional state/context and are retained as text with a match status.

Ambiguous destination names:

- `Venustiano Carranza`: 07106, 09017, 16103, 21194
- `Hidalgo`: 05013, 10010, 16034, 19047, 28016
- `Matamoros`: 05017, 08044, 28022

Unmatched/non-municipality destination values:

- `No especificado`: 6 record(s)
- `San Pedro Ocatepec`: 1 record(s)
- `Chicomuselo (al menos 600 personas) y 792 personas en refugios temporales de protección civil en Tuxtla Gutierrez y Chapa de Corzo`: 1 record(s)
- `Maravilla Tenejapa, Las Margaritas y Comitán`: 1 record(s)
- `Sin información`: 6 record(s)
- `Municipio de Oxchuc`: 1 record(s)
- `Parral`: 1 record(s)
- `Xaltianguis, después Atoyac de Álvarez`: 1 record(s)
- `Cocula y General Heliodoro Castillo`: 1 record(s)
- `Primer movimiento: Acapulco Segundo movimiento: Morelia`: 1 record(s)
- `Técpan de Galeana, otros puntos de la Costa Grande`: 1 record(s)
- `Heliodoro Castillo`: 1 record(s)
- `Santo Domingo Petlapa`: 1 record(s)
- `Santiago Ixtlayutla`: 1 record(s)
- `Cabecera municipal de Miguel Alemán y ciudades de Nuevo León`: 1 record(s)

## Display filtering and aggregation

- A record is hidden from the dashboard only when all 17 substantive analytical variables are zero or missing. **0 source records** meet this rule. They remain in `records.json` with `display: false` for auditability.
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
