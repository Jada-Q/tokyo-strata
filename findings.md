# Tokyo Strata — PoC Findings

## 2026-05-02 — Chiyoda PLATEAU 2023: yearOfConstruction = 0%

**Hypothesis (entering PoC)**: PLATEAU 23-ward CityGML includes `yearOfConstruction` per building → can color-code buildings by era → "time strata map" of Tokyo.

**Test**: Downloaded full Chiyoda 2023 CityGML v4 (1.8 GB zip, 38833 buildings).

**Result**:

```
Zip:                       chiyoda-citygml.zip
Total buildings:           38833
With yearOfConstruction:   0
Coverage:                  0.00%
Decision:                  NO-GO (< 40%)
```

**What actually exists in PLATEAU Chiyoda 2023 LOD1**:

- `bldg:measuredHeight` — height in meters
- `bldg:storeysAboveGround` / `storeysBelowGround` — floor count
- `bldg:class` / `bldg:usage` / `uro:detailedUsage` — building classification
- `uro:fireproofStructureType` — fire resistance class (proxy for era)
- `uro:specifiedFloorAreaRate` / `specifiedBuildingCoverageRate` — zoning ratios
- `uro:surveyYear` — *survey year* (data collection date, NOT construction year)
- `core:creationDate` — dataset creation date

**Confirmation**: full-zip grep on every `udx/bldg/*.gml` file → 0 occurrences of `yearOfConstruction`. Not sparse; absent.

**Why the search results misled**: PLATEAU schema *defines* yearOfConstruction as an optional attribute. Per PLATEAU docs ("attribute information varies by city"), each municipality decides which attributes to publish. **Chiyoda chose not to publish it.** Other wards likely identical (central business wards usually have the most attribute coverage; if Chiyoda is empty, peripheral wards unlikely to be richer).

**Implication**: The "color buildings by year built" idea cannot be done with PLATEAU alone.

## Possible pivots

| Pivot | What | Cost | Visual fidelity |
|---|---|---|---|
| A. Form strata (recommended) | Color by *height × usage × fireproof type* — still city archaeology, just different axis | low (data already in hand) | high (multi-dim color story) |
| B. Cultural Properties only | Only ~50-200 登録有形文化財 in Chiyoda — tiny but precise | low (free CSV) | low (sparse dots, not a strata) |
| C. Buy real data | 登記簿謄本 / ZENRIN GIS — every building's construction year exists, paid | high (¥¥¥) | full |
| D. Kill #1 idea | Pick another from earlier brainstorm | zero | n/a |

## Reusable artifact

`scripts/check-year-coverage.sh <citygml.zip>` — re-run on any PLATEAU zip to test yearOfConstruction coverage. Exit 0 = GO (≥40%), exit 2 = NO-GO.
