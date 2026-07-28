# CMDPDH Mexico displacement dashboard

Static bilingual dashboard for municipal displacement records in Mexico, 2017–2023. The source contains no observations for 2021; all outputs preserve that year as unavailable.

Serve this directory with any static web server. GitHub Pages can publish directly from the repository root.

The full processing methodology and audit findings are in [`docs/DATA_AUDIT.md`](docs/DATA_AUDIT.md). Rebuild processed data with:

```sh
python3 -m pip install shapely
python3 scripts/preprocess.py .
```

See [`docs/REVISION_NOTES.md`](docs/REVISION_NOTES.md) for the state-dissolve,
indicator, time-selection, interaction, and annual-chart corrections.
