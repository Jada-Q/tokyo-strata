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

---

## 2026-05-02 — Pivot A executed: form strata (height × fireproof)

**Coverage on 38833 buildings**:

| Field | Coverage |
|---|---|
| `bldg:measuredHeight` | 100% |
| `uro:fireproofStructureType` | 100% |
| `bldg:usage` | 100% |

**Fireproof distribution** (千代田 2023):
- 60.9% 耐火 (1001) — RC/SRC/钢造主导
- 7.4% 準耐火造 (1002)
- 14.0% その他 (1003) — 木造系
- 17.8% 不明 (1011)

**Height distribution**:
- 0–3 m: 0.1% (mostly noise/sentinels — `-9999` exists as missing-value marker)
- 3–10 m: 26.2% (低層)
- 10–30 m: 50.7% (中層 — modal)
- 30–100 m: 18.1% (高層)
- ≥100 m: 0.4% (156 buildings, 超高層)

**Color palette** (Japanese traditional colors, 4-tier):
| Stratum | Rule | Color | Era proxy |
|---|---|---|---|
| 老町 | fp ∈ {1003, 1011} ∧ h<10m | 朽葉 #6e4c30 | 戦前〜戦後早期 |
| 戦後小楼 | fp ∈ {1001, 1002} ∧ h<10m | 利休茶 #b19a55 | 戦後高度成長前 |
| 中高層 | 10 ≤ h < 30m | 銀鼠 #9d9c9d | 高度成長期 |
| 高/超高層 | h ≥ 30m | 月白 #e8ecef | バブル後〜現代 |

See `screenshots/chiyoda-overview.png` for first render. Imperial Palace (皇居) shows naturally as the central black void — verifies geographic alignment. Surrounding high-density white = modern office strata; sparse 朽葉/利休茶 dots = 残存的老町/小楼 layer.

## 2026-05-02 — Minato added (2 wards)

**Parser run on Minato (港区) 2023**: 53783 buildings, 100% fireproof + height coverage (same as Chiyoda).
**Combined**: 92,616 buildings across two wards.

`yearOfConstruction` again 0% — confirms Tokyo 23 wards have collectively chosen not to publish that field. Form-strata pivot is the only viable path on PLATEAU alone.

Viewer now config-driven: `REGIONS = [{id, name}]` array; ward subdir convention `data/<id>/buildings.geojson`. Adding a ward = download + parse + push to array.

See `screenshots/chiyoda-minato.png`. Visual story holds: 皇居 anchors the north, 港区's 中部・東南 retains pockets of 朽葉 (old town) layer, 西側 (赤坂/六本木) is dominated by 銀鼠/月白 (modern strata).

## 2026-05-02 — 7 wards loaded (都心圏)

| Ward | Buildings | GeoJSON |
|---|---:|---:|
| 千代田 | 38,833 | 16 MB |
| 中央 | 37,193 | 15 MB |
| 港 | 53,783 | 23 MB |
| 新宿 | 106,588 | 42 MB |
| 文京 | 79,455 | 31 MB |
| 渋谷 | 90,299 | 37 MB |
| 荒川 | 84,869 | 31 MB |
| **Total** | **491,020** | **~195 MB** |

(Note: PLATEAU does *not* publish a standalone Taito ward 2023 dataset; substituted Arakawa as the lower-east 下町 representative.)

All 7 wards confirmed `yearOfConstruction = 0%`. Form strata (height × fireproof) maintains 100% coverage across all.

`scripts/add-ward.sh <id> <citygml-zip-url>` is the one-command pipeline (download → unzip → parse). Adding a new ward = one shell call + one `REGIONS` array entry in `index.html`.

See `screenshots/seven-wards.png`. The cross-ward comparison brings out the strata story:
- **北部** (荒川 / 文京) — 朽葉/利休茶 dominant, lowest-rise 残存的下町 layer
- **中央** (千代田・中央) — uniform white-grey 高層 office strata, sharpest geometric grid
- **西部** (新宿) — bipolar: 西新宿 superhighs + 神楽坂/早稲田 朽葉 pockets
- **南西** (渋谷・港) — mixed mid + high, scattered 朽葉 残存
- **皇居** anchors center as the natural void; gray river arteries (神田川 / 隅田川 / 目黒川) emerge between strata.

Performance: 491k features as merged GeoJSON (~195 MB) loads in ~5-10s on M-series Mac. For 23-ward expansion (~2M features), tile-ization (PMTiles or vector tiles) will be required.
