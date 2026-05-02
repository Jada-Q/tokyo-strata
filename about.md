# Tokyo Strata

> 東京 22 区・290 万棟の建築物を 4 色の形態地層として描いた都市考古地図。
> A city archaeology map of Tokyo's 22 wards: 2.9 million buildings as a four-color form-strata.

**Live**: https://tokyo-strata.vercel.app
**A3 PDF**: https://tokyo-strata.vercel.app/tokyo-strata.pdf
**Explore mode** (free zoom): https://tokyo-strata.vercel.app/explore

---

## 日本語

Tokyo Strata は、東京 22 区・290 万棟の建築物を「耐火構造 × 高度」の二軸で読み解いた都市考古地図です。Project PLATEAU 2023–24 の 3D 都市モデルから footprint・用途・構造・高度を抽出し、4 色の形態地層として描きました——朽葉が古層、月白が現代層。建築年は記録されていませんが、形態が時代の代理として浮かび上がります。皇居を中心に、北は荒川・足立の下町、南は大田の海岸、西は世田谷・練馬の郊外住宅地まで——一枚の地図に重なる東京の時間を読む試みです。

## 中文

Tokyo Strata 是一张东京 22 区、290 万栋建筑物的城市考古地图，以「耐火结构 × 高度」为二轴。从 Project PLATEAU 2023–24 的 3D 都市模型中抽取每栋建筑的轮廓、用途、结构和高度，绘制成 4 色形态地层——朽叶为古层、月白为现代层。虽然建造年未公开，但形态作为时代的代理浮现出来。以皇居为中心，北至荒川 · 足立的下町、南至大田的海岸、西至世田谷 · 练马的郊外住宅地——一张地图，叠出东京千层的时间。

---

## Data

- **Source**: Project PLATEAU 2023–24（19 区 2023 年度 + 3 区 2024 年度）
- **Format**: CityGML 2.0 + i-UR ADE
- **License**: CC BY 4.0（国土交通省）
- **Coverage**: 22 of 23 wards（台東区 PLATEAU 2023 dataset 未公開のため除外）

## Method

```
PLATEAU CityGML zips → bldg/*.gml → parse footprint + measuredHeight + fireproofStructureType + usage
  ↓ 22 buildings.geojson
  ↓ tippecanoe -Z9 -z14 --drop-densest-as-needed --simplification=8
tokyo.pmtiles (48 MB, 2.9M features)
  ↓ MapLibre GL + PMTiles browser protocol
editorial scrolling magazine
```

## Color palette

| Color | Rule | Era proxy |
|---|---|---|
| 朽葉 #6e4c30 | fp ∈ {その他, 不明} ∧ h<10m | 戦前〜戦後早期の木造街 |
| 利休茶 #b19a55 | fp ∈ {耐火, 準耐火} ∧ h<10m | 戦後の小楼 |
| 銀鼠 #9d9c9d | 10 ≤ h < 30m | 高度成長期の中層 |
| 月白 #e8ecef | h ≥ 30m | バブル期以降の塔 |

## Notable

- **練馬区** 73.9% 朽葉（最も古層率の高い区）
- **千代田区** 18.5% 月白（最も現代層率の高い区）
- **墨田区** max 634m = **東京スカイツリー**
- **港区** max 332m = 麻布台ヒルズ森 JP タワー

## Source

GitHub: see project repo (single-file editorial + PMTiles pipeline).
