# tokyo-strata

PoC: visualize Tokyo's building strata as an editorial map (NHK-style city archaeology).

## Status

**2026-05-02**: Original direction (color by `yearOfConstruction`) **NO-GO** — PLATEAU Chiyoda 2023 has 0/38833 buildings with that attribute. See [findings.md](./findings.md) for full result and pivot options.

## Data sources tested

- [PLATEAU 千代田区 2023 CityGML v4](https://www.geospatial.jp/ckan/dataset/plateau-13101-chiyoda-ku-2023) — 1.8 GB zip, 38833 buildings, `yearOfConstruction` not published

## Run

```bash
# Test yearOfConstruction coverage on any PLATEAU CityGML zip
./scripts/check-year-coverage.sh data/chiyoda-citygml.zip
```

Exit 0 = ≥40% coverage (GO), exit 2 = NO-GO.

## Layout

```
data/                       gitignored — large zips/gml
scripts/
  check-year-coverage.sh    coverage probe
findings.md                 PoC results log
```
