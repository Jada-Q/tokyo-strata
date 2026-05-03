# Tokyo Strata · 東京 22 区 形態地層

> **東京 22 区・290 万棟の建築物を 4 色の形態地層として描いた都市考古地図**
> A city archaeology map of Tokyo's 22 wards: 2.9 million buildings as a four-color form-strata.

🌐 **Live**: https://tokyo-strata.vercel.app
📄 **A3 PDF**: https://tokyo-strata.vercel.app/tokyo-strata.pdf
✍️ By **Jada Q** · 2026

---

![Cover](./screenshots/editorial-cover.png)

## What this is

Tokyo's [Project PLATEAU](https://www.mlit.go.jp/plateau/) publishes a 3D city
model of all buildings in Tokyo — but **does not publish year-of-construction**
data. Tokyo Strata works around this by treating **fire-resistance class × height
as a proxy for era**:

| Color | Rule | Era proxy |
|---|---|---|
| 🟫 **朽葉** (decay-leaf brown) | `fp ∈ {その他, 不明} ∧ h<10m` | Pre-war wooden 下町 |
| 🟨 **利休茶** (rikyū tea) | `fp ∈ {耐火, 準耐火} ∧ h<10m` | Post-war small structures |
| ⬜ **銀鼠** (silver-grey) | `10 ≤ h < 30m` | High-growth-era mid-rise |
| ⬜ **月白** (moon-white) | `h ≥ 30m` | Post-bubble towers |

The result is a single map showing the time-layered urban archaeology of Tokyo
— the **皇居** as a central void, 下町 patches in the periphery, modern towers
clustered in the central wards.

![Intro 22 wards](./screenshots/22wards-intro.png)

## Cross-analysis: form predicts the future

Crossing Tokyo Strata with two other personal projects:

- **[UpgradeMap](https://upgrademap.vercel.app)** — Tokyo 23-ward real-estate
  upgrade signals (price + population YoY)
- **[ATLAS](https://github.com/Jada-Q/atlas)** — settlement extinction
  prediction via cohort-component projection

Headline finding: **月白 ratio × population YoY = r = +0.86** across the 22
wards. Tower density predicts where people are moving in.

The cross-analysis page identifies three trajectories:

- **若返り都心** (Rejuvenating Centers): 千代田 / 中央 / 文京 / 港 / 江戸川
- **安定郊外** (Stable Suburbs): 13 wards in the middle
- **緩慢成熟** (Slowing Mature): 足立 / 葛飾 / 北 / 墨田 / 台東

And one outlier worth reading: **葛飾 vs 江戸川** — same architectural age
(朽葉 ≈ 60%) but different mechanisms of renewal. 葛飾's capital prices run
ahead of population; 江戸川's population runs ahead of capital.

→ Full write-up: https://tokyo-strata.vercel.app/cross

## Pages

| Route | Purpose |
|---|---|
| `/` | Editorial scrolling magazine — cover · intro · 7 narrated wards · colophon |
| `/cross` | Cross-analysis (Strata × UpgradeMap × ATLAS) — scatter charts, classifications, red-team |
| `/about` | Project explanation, palette rationale, 22-ward stat table |
| `/explore` | Free zoom/pan over all 22 wards |
| `/tokyo-strata.pdf` | Print-ready A3 landscape, 10 pages, 6.9 MB |

## Stack

- **Map**: [MapLibre GL JS](https://maplibre.org) 4.7 + [PMTiles](https://github.com/protomaps/PMTiles) 4.3
- **Tiles**: [tippecanoe](https://github.com/felt/tippecanoe) → 48 MB single-file PMTiles for 2.9M building footprints
- **Data pipeline**: Python `xml.etree` (CityGML parser) + Nominatim API (landmark labels)
- **Hosting**: Vercel static (HTTP byte-range serves PMTiles)
- **PDF**: Headless Chrome via puppeteer-core + system Chrome

## Reproduce locally

```bash
git clone https://github.com/Jada-Q/tokyo-strata.git
cd tokyo-strata

# Run viewer (PMTiles is committed — works out of the box, but
# python3's http.server doesn't support byte-range. Use serve:)
npx serve -l 9877 .
# open http://localhost:9877/
```

## Rebuild tiles from scratch (~1 hour, ~30 GB temp disk)

```bash
# 1) Batch-download + parse all 22 wards (3-5 GB temp space cleared after each)
brew install tippecanoe pmtiles
while read ward url; do
  ./scripts/add-ward.sh "$ward" "$url" cleanup
done < scripts/all-wards.txt

# 2) Stats + tiles
python3 scripts/compute_stats.py
./scripts/build-tiles.sh   # → data/tokyo.pmtiles (48 MB)

# 3) (optional) Cross-analysis with UpgradeMap data
python3 scripts/cross_analyze.py

# 4) (optional) Cohort projection — ATLAS module
#    See https://github.com/Jada-Q/atlas
```

## Layout

```
index.html              editorial scrolling magazine (PMTiles)
cross.html              cross-analysis with UpgradeMap × ATLAS
explore.html            free interactive map (PMTiles)
about.html              project about (BRUTUS-style colophon)
about.md                shareable summary text (日 + 中)
findings.md             PoC log — what was tried, what failed, what pivoted
cross-report.md         cross-analysis findings in markdown
data/
  tokyo.pmtiles         48 MB vector tile (committed)
  stats.json            per-ward count/bbox/strata%/avg-max height
  cross.json            UpgradeMap × Strata joined values
  cohort.json           50-year cohort projection per ward
  landmarks.json        50 markers (palace/parks/rivers/etc) via Nominatim
scripts/
  add-ward.sh           one-shot ward pipeline
  all-wards.txt         22 ward URLs
  parse_to_geojson.py   CityGML → GeoJSON
  compute_stats.py      → data/stats.json
  build-tiles.sh        merge → tippecanoe → pmtiles
  cross_analyze.py      Strata × UpgradeMap join + Pearson r
  fetch-landmarks.py    Nominatim batch geocode
  generate-pdf.js       puppeteer-core → A3 PDF
social/                 ready-to-post copy (Twitter / note / 小红书)
```

## Findings

### Headline

| Metric | Value |
|---|---:|
| 22 ward 形態 coverage | 290 万棟 (100% fp + height) |
| `yearOfConstruction` coverage | **0%** (PLATEAU does not publish) |
| Strongest cross-correlation | 月白% × pop YoY = **r = +0.86** |
| Highest 古層率 | 練馬 73.9% |
| Highest 月白率 | 千代田 18.5% |
| Tallest building in dataset | 墨田 634 m (東京スカイツリー) |
| 50-year pop projection (highest) | 千代田 +24.5% |
| 50-year pop projection (lowest) | 台東 +2.0% |

### Surprises

- **Every Tokyo ward grows over 50 years** when you run the same cohort-component
  algorithm that predicts rural extinction in Akita. Tokyo doesn't shrink — it
  accelerates.
- **江戸川 vs 葛飾**: same form age (朽葉 ~60%), but 葛飾 sees capital first,
  江戸川 sees population first. Two distinct mechanisms of 下町 renewal.
- **Form ↔ migration**: tower ratio is the single best predictor of where
  people are actually moving to. Architecture isn't passive — it's a leading
  indicator.

## Caveats

- `n=22`, so r=+0.86 has wide confidence intervals
- Cross-section data only; "form predicts the future" needs longitudinal verification
- Cohort projection assumes 2015–2020 trends continue linearly for 50 years
- Selection bias in PLATEAU coverage (台東 ward absent from 2023 dataset)

Full red team: https://tokyo-strata.vercel.app/cross#redteam

## License

- **Code**: MIT — see [LICENSE](./LICENSE)
- **Editorial content** (Japanese narrative, screenshots): © Jada Q 2026, attribution preserved
- **Underlying data**: PLATEAU is CC BY 4.0 (国土交通省) — preserve attribution per CC BY terms
- **Cohort method**: public-domain demographic technique (cohort-component projection)

## Credits

- **Project PLATEAU** (国土交通省 + G空間情報センター) — open 3D city data
- **Reinfolib** (国交省 不動産取引価格) — transaction prices
- **e-Stat** (総務省 国勢調査) — population by age cohorts
- **MapLibre GL** + **PMTiles** + **tippecanoe** + **Hiragino Mincho ProN**
- **Cohort-component projection method** adapted from Project ATLAS
- Edited & developed by **Jada Q · 2026**
