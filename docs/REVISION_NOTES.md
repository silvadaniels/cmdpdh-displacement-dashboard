# Revision notes

## Functional reference

The public ArcGIS dashboard **Population Displacements in Mexico** was reviewed as a functional reference. Its useful hierarchy—map, headline displaced-population indicator, annual bars, geographic and year filters, and a synchronized table—was retained without copying ArcGIS styling. The GitHub/Leaflet version keeps the cleaner bilingual interface, state/municipality views, ranking, detail panel, explicit missing-data treatment, and non-cumulative year comparison.

The ArcGIS configuration uses `persons_reported` as its headline statistic and groups a serial bar chart by year. This revision therefore defaults to **Reported persons** and uses discrete annual bars. Unlike the ArcGIS configuration, it never interpolates the missing 2021 observation.

## Geometry correction

- Replaced the prior state layer assembled from undissolved municipal parts.
- Each municipal geometry is repaired with Shapely `make_valid`.
- Geometries are dissolved with `union_all` using the official two-digit state code.
- The output contains exactly 32 unique, valid state features; multipart geometry is preserved where geographically required.
- Municipal boundaries are absent from the state output.
- Leaflet uses Canvas rendering. Normal state styling uses zero border weight and 0.82 fill opacity. Municipalities retain a 0.4-pixel boundary.
- No coordinate rounding or geometry simplification is applied.

Machine-readable dissolve diagnostics are stored in `data/processed/quality_report.json`.

## Interaction and synchronization

- One central `dashboardState` controls language, geography level, time mode, active year(s), indicator, state filter, selected feature, table search, and loaded data.
- The active indicator controls the map, classification, threshold legend, headline KPI, ranking, annual bars, table sorting/highlight, and selected-area detail.
- Available principal indicators are reported persons, estimated persons, displaced families, and displacement events.
- Selection can be cleared with the visible button, by clicking the selected polygon again, by pressing Escape, or by clicking the map background.
- Changing geography level, state filter, year, or time mode clears incompatible selections.
- Selecting a state exposes a direct pathway to its municipalities.

## Time and missing data

- Single-year mode shows only its year selector.
- Compare-years mode hides the single-year selector and permits arbitrary independent year combinations.
- 2021 is disabled and explicitly labeled unavailable.
- The annual chart is a vertical bar chart with an empty 2021 position; no zero bar or interpolation is used.
- Single-year mode highlights the selected bar while retaining historical context. Compare mode emphasizes selected years and mutes the others.
- Null aggregates remain null when every contributing observation is missing. Reported zero remains zero. Map and legend use a separate no-data category.

## Validation

Automated checks confirmed:

1. 32 unique and valid dissolved state geometries.
2. State aggregates equal the sum of municipal aggregates for every available year and principal metric.
3. 2021 remains null and unavailable.
4. Application JavaScript parses successfully.
5. All application and processed-data assets use relative paths suitable for a GitHub Pages repository subdirectory.

## Directional and binary-variable extension

- Added synchronized Origin and Destination modes.
- Origin uses every coded source record. Destination geography uses only the 31 records whose repaired destination name has exactly one nationwide official municipality match; ambiguous and descriptive destinations remain excluded rather than guessed.
- “People from” and “People to” use `persons_reported` and remain visible together in the table and summary panel.
- The no-selection detail panel now reports national or state-filtered totals instead of appearing empty.
- Return status, indigenous population, and displacement-cause indicators through intentional eviction are summarized as nullable dummy-variable percentages: the mean of known 0/1 observations multiplied by 100.
- The annual Plotly chart has an explicit responsive height and is resized with its containing panel.

### Annual-chart and map-layout follow-up

- Annual evolution always retains the complete 2017–2023 historical axis, uses the active indicator and direction, and responds to geographic scope. Year controls only highlight bars; they never remove years.
- 2021 remains a null value with a labeled placeholder and no interpolation.
- The map, ranking, and annual panels form one left-hand analysis stack. The Selected Area panel spans the full combined height on the right.
- Ranking bars select and clear geography through the same central state used by the map and table.
- Selected Area content is organized into collapsible Totals, Population, Causes, Return, and Metadata sections.

## Final control and percentage correction

- Binary percentages now use only numeric `0` and `1` observations: `count(1) / count(0 or 1)`. Invalid and missing values never enter the denominator.
- Detail summaries include the valid denominator. Fields with no valid observations display No disponible / No data available rather than 0%.
- Replaced the separate single/comparison modes with one checkbox-based year picker supporting one, many, all, or no selected years. The picker includes Select all and Clear; 2021 is disabled.
- Replaced indicator buttons with one compact dropdown.
- The top controls now contain only geography, direction, indicator, years, and state.
- Annual evolution is rebuilt directly from numeric `year` and `persons_reported` values in `records.json`. It always represents Origin · Reported persons for the complete historical series and changes only with geographic scope.

## Diagnostic stabilization

- Verified processed types: `year` and `persons_reported` are numeric; `state_id` is a two-character string; `municipality_id` is a five-character string.
- Added the standalone, independently tested `buildAnnualReportedPersons(records, geography)` function in `assets/js/annual.js`.
- The national reference series is 19,190; 9,284; 4,776; 4,234; null for 2021; 1,903; and 9,832.
- Annual rendering does not read selected years, indicator, direction, or comparison state.
- Controls use two explicit grid rows: geography/direction/indicator, then years/state/clear filters.
- Binary summaries now preserve `yes`, `no`, `valid`, and `missing` counts. Cause and return details display conditional yes percentage plus valid and missing coverage.
- Indigenous population is presented first as the absolute number of flagged events, followed by valid coverage and the conditional percentage.

## Annual-axis correction

- Removed the in-chart 2021 arrow annotation. On Plotly’s categorical x-axis, numeric `x: 2021` was interpreted as a distant category index, stretching the plot and compressing all bars against 2017.
- The series still includes 2021 with a null value, so its category position remains without drawing a zero bar.
- The bilingual footnote below the chart remains the sole no-data explanation.
