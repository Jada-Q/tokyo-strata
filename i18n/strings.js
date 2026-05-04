// Tokyo Strata · i18n dictionary
// keys are dot-grouped by page: common.* / index.* / about.* / cross.* / explore.*
// values: { ja, zh, en }. ja is canonical. zh = simplified Chinese. en = English.
// Strings whose JS consumer marks data-i18n-html="true" may contain inline <br>/<b>.

window.I18N_STRINGS = {

  // ============================================================
  // COMMON
  // ============================================================
  'common.crumb.home': {
    ja: '← TOKYO STRATA',
    zh: '← TOKYO STRATA',
    en: '← TOKYO STRATA',
  },
  'common.nav.about':   { ja: 'About',   zh: 'About',   en: 'About'   },
  'common.nav.cross':   { ja: 'Cross',   zh: 'Cross',   en: 'Cross'   },
  'common.nav.explore': { ja: 'Explore', zh: 'Explore', en: 'Explore' },

  // 4-color palette — names stay in kanji per the brand, descriptions translate
  'common.palette.kuchiba.name':    { ja: '朽葉',     zh: '朽叶',     en: 'KUCHIBA'    },
  'common.palette.kuchiba.desc':    { ja: '古き木造の街',         zh: '古老的木造街区',          en: 'old wooden townscape' },
  'common.palette.rikyu.name':      { ja: '利休茶',   zh: '利休茶',   en: 'RIKYŪ'      },
  'common.palette.rikyu.desc':      { ja: '戦後の小楼',           zh: '战后的小楼',              en: 'postwar low-rise'    },
  'common.palette.ginnezu.name':    { ja: '銀鼠',     zh: '银鼠',     en: 'GINNEZU'    },
  'common.palette.ginnezu.desc':    { ja: '高度成長の中層',       zh: '高度成长期的中层',        en: 'high-growth mid-rise' },
  'common.palette.tsukishiro.name': { ja: '月白',     zh: '月白',     en: 'TSUKISHIRO' },
  'common.palette.tsukishiro.desc': { ja: '現代の塔',             zh: '现代的塔',                en: 'modern towers'       },

  'common.footer.credit': {
    ja: 'Edited & developed by',
    zh: 'Edited & developed by',
    en: 'Edited & developed by',
  },

  // ============================================================
  // INDEX
  // ============================================================
  'index.title': {
    ja: 'Tokyo Strata · 東京 22 区 形態地層',
    zh: 'Tokyo Strata · 东京 22 区 形态地层',
    en: 'Tokyo Strata · 22 Wards, Morphological Strata',
  },
  'index.meta.description': {
    ja: '耐火構造×高度から読み解く東京の都市考古学。290 万棟の建築を 4 色の形態地層として可視化。',
    zh: '以耐火结构 × 高度二轴解读东京的都市考古学。290 万栋建筑物，4 色形态地层的可视化。',
    en: 'Tokyo as urban archaeology, read through fire-resistance × height. 2.9M buildings as four morphological strata.',
  },

  'index.toc.cover':    { ja: '表紙',   zh: '封面',   en: 'Cover' },
  'index.toc.intro':    { ja: '序',     zh: '序',     en: 'Intro' },
  'index.toc.colophon': { ja: '出典',   zh: '出处',   en: 'Sources' },

  'index.print.btn':    { ja: 'PRINT · A3', zh: 'PRINT · A3', en: 'PRINT · A3' },
  'index.print.loading':{ ja: 'LOADING ALL MAPS...', zh: 'LOADING ALL MAPS...', en: 'LOADING ALL MAPS...' },
  'index.print.printing':{ja: 'PRINTING...', zh: 'PRINTING...', en: 'PRINTING...' },

  'index.cover.super': {
    ja: 'TOKYO STRATA · 2026',
    zh: 'TOKYO STRATA · 2026',
    en: 'TOKYO STRATA · 2026',
  },
  'index.cover.title': {
    ja: '東京 22 区<br>形 態 地 層',
    zh: '东京 22 区<br>形 态 地 层',
    en: 'TOKYO<br>22 WARDS',
  },
  'index.cover.meta': {
    ja: '耐火構造 × 高度<br>290 万棟の建物から読み解く<br>東京の都市考古学',
    zh: '耐火结构 × 高度<br>由 290 万栋建筑物<br>解读出的都市考古学',
    en: 'FIRE-RESISTANCE × HEIGHT<br>READ FROM 2.9M BUILDINGS<br>TOKYO URBAN ARCHAEOLOGY',
  },
  'index.cover.scroll': { ja: 'SCROLL ↓', zh: 'SCROLL ↓', en: 'SCROLL ↓' },

  'index.intro.super': { ja: '序', zh: '序', en: 'INTRO' },
  'index.intro.h2': {
    ja: '形態は時代の<br>代理指標である',
    zh: '形态是时代的<br>代理指标',
    en: 'FORM IS A PROXY<br>FOR TIME',
  },
  'index.intro.p1': {
    ja: '東京 22 区、290 万棟の建築物を耐火構造と高度の二軸で読み解いた地層図。建築年は記録されていないが、形態が時代の代理として浮かび上がる。',
    zh: '东京 22 区、290 万栋建筑物，以耐火结构与高度为二轴，读出的地层图。建造年虽未被记录，但形态作为时代的代理浮现出来。',
    en: 'Tokyo’s 22 wards, 2.9 million buildings, read as a stratum map across two axes — fire-resistance and height. Construction year is not recorded, but form emerges as the proxy for era.',
  },
  'index.intro.p2': {
    ja: '朽葉が古層、月白が現代層。皇居を中心に、北は足立・葛飾の下町、南は大田の海岸、西は世田谷・練馬の郊外住宅地まで——一枚の地図に重なる東京の時間を読む。以下は焦点 7 区の編集の選。',
    zh: '朽叶为古层，月白为现代层。以皇居为中心，北至足立 · 葛饰的下町、南至大田的海岸、西至世田谷 · 练马的郊外住宅地——一张地图，叠出东京的时间。以下为焦点 7 区的编辑之选。',
    en: 'Kuchiba is the old stratum, tsukishiro the modern. Centered on the Imperial Palace — north through Adachi and Katsushika’s shitamachi, south to the Ōta coast, west to the suburban housing of Setagaya and Nerima — a single map layered with Tokyo’s time. The seven wards below are an editorial selection.',
  },

  // Ward sections — romaji label stays constant per design
  'index.ward.arakawa.romaji': { ja: 'ARAKAWA', zh: 'ARAKAWA', en: 'ARAKAWA' },
  'index.ward.arakawa.h2':     { ja: '荒 川', zh: '荒 川', en: 'Arakawa' },
  'index.ward.arakawa.index':  { ja: '第 一 区 · 北端の下町',   zh: '第 一 区 · 北端的下町',   en: 'Ward I · Northern Shitamachi' },
  'index.ward.arakawa.p1': {
    ja: '下町の北端、隅田川と荒川に挟まれた老町。朽葉色が最も濃く、形態地図上では低層の古層が連続する地層として浮かぶ。戦前の長屋と銭湯がいまなお路地に残り、明治・大正の街並みの輪郭がこの区では消えていない。',
    zh: '下町的北端，被隅田川与荒川夹住的老町。朽叶色最浓，在形态地图上以连续的低层古层浮现。战前的长屋与钱汤至今仍留在巷弄之中，明治 · 大正的街道轮廓在此区未曾消失。',
    en: 'Northern edge of the shitamachi, an old district wedged between the Sumida and Arakawa rivers. Kuchiba is at its densest here — on the morphological map it surfaces as an unbroken low-rise stratum. Prewar nagaya tenements and sentō bathhouses still line the alleys; the contours of Meiji- and Taishō-era streetscapes have not been erased.',
  },
  'index.ward.arakawa.moment': {
    ja: '7 区中、朽葉色 50.6% と最も高い古層率。最高高度 154m、平均 9.8m——下町スケールが保たれている。',
    zh: '7 区中朽叶色 50.6%，古层率最高。最高高度 154m，平均 9.8m——下町尺度被保留。',
    en: 'Highest old-stratum ratio of all seven wards — kuchiba at 50.6%. Tallest building 154m, mean 9.8m: shitamachi scale intact.',
  },

  'index.ward.bunkyo.romaji': { ja: 'BUNKYŌ', zh: 'BUNKYŌ', en: 'BUNKYŌ' },
  'index.ward.bunkyo.h2':     { ja: '文 京', zh: '文 京', en: 'Bunkyō' },
  'index.ward.bunkyo.index':  { ja: '第 二 区 · 本郷台地の屋敷町', zh: '第 二 区 · 本乡台地的住宅町', en: 'Ward II · Hongō Plateau Residences' },
  'index.ward.bunkyo.p1': {
    ja: '本郷台地の住宅地。旧帝大と図書館の街。形態は朽葉と利休茶が穏やかに混じる中層が支配的で、戦前から続く屋敷町の骨格が残る。新宿副都心のような塔は持たず、谷を挟んで低中層がゆるやかに重なる地層となる。',
    zh: '本乡台地的住宅地。旧帝大与图书馆的街区。形态以朽叶与利休茶平稳混合的中层为主，战前以来的屋敷町骨架仍然保留。没有新宿副都心式的高塔，跨越山谷的低中层缓缓叠成地层。',
    en: 'A residential ward on the Hongō plateau — the city of the old Imperial University and its libraries. Form is dominated by a quiet mid-rise blend of kuchiba and rikyū; the bones of the prewar yashiki-machi remain. No towers like Nishi-Shinjuku — only a soft layering of low- and mid-rises across the valleys.',
  },
  'index.ward.bunkyo.moment': {
    ja: '朽葉 39.8%、月白 5.0%——「中庸の地層」。後楽園・東大本郷の周囲に古層が均質に広がる。',
    zh: '朽叶 39.8%，月白 5.0%——「中庸的地层」。后乐园 · 东大本乡周围古层均质地铺开。',
    en: 'Kuchiba 39.8%, tsukishiro 5.0% — a stratum of the middle. The old layer spreads evenly around Kōrakuen and the Hongō campus.',
  },

  'index.ward.shinjuku.romaji': { ja: 'SHINJUKU', zh: 'SHINJUKU', en: 'SHINJUKU' },
  'index.ward.shinjuku.h2':     { ja: '新 宿', zh: '新 宿', en: 'Shinjuku' },
  'index.ward.shinjuku.index':  { ja: '第 三 区 · 両極の区',    zh: '第 三 区 · 两极并存之区',  en: 'Ward III · Ward of Two Poles' },
  'index.ward.shinjuku.p1': {
    ja: '西新宿の超高層ビル群と、神楽坂・早稲田の路地裏が同居する両極の区。形態地図上では月白の塔が西側に集中し、東側に朽葉の小さな点が散らばる。一つの区の中に「現代の塔」と「戦前の坂道」が、徒歩 30 分の距離で共存する。',
    zh: '西新宿的超高层楼群，与神乐坂 · 早稻田的小巷同居于一区，两极并存。形态地图上月白之塔集中于西，朽叶的小点散布于东。同一区内，「现代的塔」与「战前的坡道」以步行 30 分钟的距离共存。',
    en: 'A ward of two poles — the supertall cluster of Nishi-Shinjuku alongside the alleys of Kagurazaka and Waseda. On the map, tsukishiro towers concentrate to the west while kuchiba dots scatter to the east. Within thirty minutes on foot, modern towers and prewar slopes coexist.',
  },
  'index.ward.shinjuku.moment': {
    ja: '建物 10 万 6588 棟——7 区中最多。最高 243m（西新宿）と古層 37.9% が同居する稀有な構造。',
    zh: '建筑 106,588 栋——7 区中最多。最高 243m（西新宿）与古层 37.9% 并存的稀有结构。',
    en: 'A total of 106,588 buildings — most of any ward. A rare structure where 243m (Nishi-Shinjuku) and a 37.9% old layer share the same skin.',
  },

  'index.ward.chiyoda.romaji': { ja: 'CHIYODA', zh: 'CHIYODA', en: 'CHIYODA' },
  'index.ward.chiyoda.h2':     { ja: '千 代 田', zh: '千 代 田', en: 'Chiyoda' },
  'index.ward.chiyoda.index':  { ja: '第 四 区 · 都心の核', zh: '第 四 区 · 都心之核', en: 'Ward IV · The Civic Core' },
  'index.ward.chiyoda.p1': {
    ja: '皇居を中心とする都心の核。月白と銀鼠の高層が皇居周辺に整然と並び、丸の内・大手町は形態地図の最も明るい一角となる。番町・神田の一部に朽葉の残片が見えるが、戦後の都市計画によって地層は均質化されている。',
    zh: '以皇居为中心的都心之核。月白与银鼠的高层环绕皇居整齐排列，丸之内 · 大手町成为形态地图最明亮的一角。番町 · 神田一带尚可见朽叶残片，但战后都市规划已使地层趋于均质。',
    en: 'The civic core, centered on the Imperial Palace. Tsukishiro and ginnezu high-rises ring the palace in orderly rows; Marunouchi and Ōtemachi are the brightest corner of the morphological map. Fragments of kuchiba linger in Banchō and Kanda, but postwar planning has homogenized the strata.',
  },
  'index.ward.chiyoda.moment': {
    ja: '月白比率 18.5%——7 区中で最大。平均高度 19.4m と最高。皇居の void が地層に空白の核を作る。',
    zh: '月白比率 18.5%——7 区中最大。平均高度 19.4m，亦为最高。皇居之 void 为地层挖出空白之核。',
    en: 'Tsukishiro 18.5% — the highest of the seven. Mean height 19.4m, also tallest. The Palace void carves a hollow core into the stratum.',
  },

  'index.ward.shibuya.romaji': { ja: 'SHIBUYA', zh: 'SHIBUYA', en: 'SHIBUYA' },
  'index.ward.shibuya.h2':     { ja: '渋 谷', zh: '涩 谷', en: 'Shibuya' },
  'index.ward.shibuya.index':  { ja: '第 五 区 · 若い商業区', zh: '第 五 区 · 年轻的商业区', en: 'Ward V · Young Commercial Ward' },
  'index.ward.shibuya.p1': {
    ja: '青山・原宿・恵比寿を含む若い商業区。形態地図では銀鼠の中層が主体、月白の塔が点在する。明治神宮の森が大きな黒の void として浮かび、その輪郭がこの区の geographic identity を作っている。',
    zh: '包含青山 · 原宿 · 惠比寿的年轻商业区。形态地图上以银鼠的中层为主体，月白的塔点状分布。明治神宫之森作为巨大的黑色 void 浮起，其轮廓塑造了此区的地理身份。',
    en: 'The young commercial ward — Aoyama, Harajuku, Ebisu. On the map a ginnezu mid-rise body dominates, with tsukishiro towers scattered through it. The forest of Meiji Shrine surfaces as a great black void, and its outline gives the ward its geographic identity.',
  },
  'index.ward.shibuya.moment': {
    ja: '朽葉 42.3%、月白 4.0%——古層は残るが塔は控えめ。神宮の森の輪郭が南北に走る。',
    zh: '朽叶 42.3%，月白 4.0%——古层尚存，塔却克制。神宫之森的轮廓南北贯穿。',
    en: 'Kuchiba 42.3%, tsukishiro 4.0% — the old layer persists, towers stay restrained. The shrine forest cuts a contour from north to south.',
  },

  'index.ward.chuo.romaji': { ja: 'CHŪŌ', zh: 'CHŪŌ', en: 'CHŪŌ' },
  'index.ward.chuo.h2':     { ja: '中 央', zh: '中 央', en: 'Chūō' },
  'index.ward.chuo.index':  { ja: '第 六 区 · 江戸の中央', zh: '第 六 区 · 江户之中央', en: 'Ward VI · The Edo Center' },
  'index.ward.chuo.p1': {
    ja: '銀座・日本橋・築地・月島。江戸の中央。下町と高層が複雑に層を成す。月島・佃島には朽葉の長屋がいまも残り、隣接する豊洲・晴海は月白の超高層タワーが新たな地層を築きつつある。古層と最新層が一区内で対比される。',
    zh: '银座 · 日本桥 · 筑地 · 月岛。江户的中央。下町与高层复杂地交叠。月岛 · 佃岛仍残有朽叶之长屋，毗邻的丰洲 · 晴海则由月白的超高层塔楼正在筑起新地层。古层与最新层在同一区内对峙。',
    en: 'Ginza, Nihonbashi, Tsukiji, Tsukishima — the center of Edo. Shitamachi and high-rise interleave in complex layers. Kuchiba nagaya still survive on Tsukishima and Tsukudajima, while next door in Toyosu and Harumi tsukishiro supertalls are building a new stratum. Old and newest face off inside one ward.',
  },
  'index.ward.chuo.moment': {
    ja: '月白 16.7%——千代田に次ぐ高さ。古層 26.6% と銀鼠 45.0% が「江戸の骨格」を支える。',
    zh: '月白 16.7%——仅次于千代田。古层 26.6% 与银鼠 45.0% 撑起「江户的骨架」。',
    en: 'Tsukishiro 16.7% — second only to Chiyoda. Old layer 26.6% and ginnezu 45.0% hold up what could be called the bones of Edo.',
  },

  'index.ward.minato.romaji': { ja: 'MINATO', zh: 'MINATO', en: 'MINATO' },
  'index.ward.minato.h2':     { ja: '港', zh: '港', en: 'Minato' },
  'index.ward.minato.index':  { ja: '第 七 区 · 山手と海岸', zh: '第 七 区 · 山手与海岸', en: 'Ward VII · Yamanote & The Bay' },
  'index.ward.minato.p1': {
    ja: '赤坂・六本木・品川・台場。山手と海岸の両方を含む。西側の山手は月白と銀鼠の高層、東側の海岸エリアは月白の超高層タワー群。形態地図の南端には、お台場・湾岸の人工島が独立した地層として広がる。',
    zh: '赤坂 · 六本木 · 品川 · 台场。山手与海岸兼具。西侧山手由月白与银鼠的高层构成，东侧海岸为月白的超高层塔楼群。形态地图的南端，台场 · 湾岸的人工岛作为独立地层延展。',
    en: 'Akasaka, Roppongi, Shinagawa, Odaiba — both yamanote and bayfront in one ward. The western yamanote runs in tsukishiro and ginnezu high-rise; the eastern coastline rises into tsukishiro supertall clusters. At the south edge of the map, the man-made islands of Odaiba and the bay extend as their own stratum.',
  },
  'index.ward.minato.moment': {
    ja: '最高高度 332m——麻布台ヒルズ森 JP タワー、7 区中で最高。地層の最新の頂点。',
    zh: '最高高度 332m——麻布台 Hills 森 JP 塔，7 区中最高。地层最新的顶点。',
    en: 'Tallest 332m — Azabudai Hills Mori JP Tower, the highest of the seven. The latest peak of the stratum.',
  },

  // Data card labels (rendered in JS)
  'index.card.buildings':  { ja: '建物',     zh: '建筑',   en: 'Buildings' },
  'index.card.tou':        { ja: '棟',       zh: '栋',     en: '' },
  'index.card.avgheight':  { ja: '平均高',   zh: '平均高', en: 'Mean ht.' },
  'index.card.maxheight':  { ja: '最高棟',   zh: '最高栋', en: 'Tallest'  },

  // Colophon
  'index.colophon.super': { ja: '出 典 と 凡 例', zh: '出 典 与 凡 例', en: 'SOURCES & LEGEND' },
  'index.colophon.h2':    { ja: '形 態 地 層 と は', zh: '何 谓 形 态 地 层', en: 'WHAT IS A MORPHOLOGICAL STRATUM' },
  'index.colophon.p1': {
    ja: '色は耐火構造と高度の組み合わせから割り当てた、形態の世代を表す。朽葉は「その他・不明」分類かつ低層 10m 未満——多くは戦前から残る木造または準木造。利休茶は耐火・準耐火の同低層——戦後の小楼。銀鼠は中層 10–30m、高度成長期以降の中規模ビル。月白は高層 30m 以上、バブル期以降の塔状建築。',
    zh: '颜色由耐火结构与高度的组合分配，代表形态的世代。朽叶为「其他 · 不明」分类且低层 10m 未满——多为战前残留的木造或准木造。利休茶为耐火 · 准耐火的同低层——战后的小楼。银鼠为中层 10–30m，高度成长期以降的中等规模建筑。月白为高层 30m 以上，泡沫期以降的塔状建筑。',
    en: 'Colors are assigned from the pairing of fire-resistance class and height — a generation of form. Kuchiba is "other / unclassified" plus below 10m, mostly prewar wood and quasi-wood survivors. Rikyū is fire-resistant or semi-resistant at the same low height — postwar low-rises. Ginnezu spans 10–30m, the mid-scale buildings of the high-growth era and after. Tsukishiro is everything above 30m — the tower architecture of the bubble era and beyond.',
  },
  'index.colophon.p2': {
    ja: '建築年は PLATEAU には掲載されていないため、形態を時代の代理指標とした。一棟一棟の正確な建築年は分からないが、地層としての時代の重なりは見えてくる。',
    zh: '建造年未收录于 PLATEAU，故以形态作为时代的代理指标。逐栋的精确建造年虽不可得，但作为地层的时代叠层却清晰浮现。',
    en: 'Construction year is not published in PLATEAU, so form is taken as a proxy for time. The exact year of any single building remains unknown, yet the layering of eras as strata becomes visible.',
  },
  'index.colophon.small1': {
    ja: 'データ：Project PLATEAU 東京 22 区（千代田・中央・港・新宿・文京・墨田・江東・品川・目黒・大田・世田谷・渋谷・中野・杉並・豊島・北・荒川・板橋・練馬・足立・葛飾・江戸川）2023–2024 年度 CityGML（v4 / 一部 v3）／<a href="https://www.geospatial.jp/ckan/dataset?q=plateau" target="_blank">G 空間情報センター</a>／国土交通省／CC BY 4.0',
    zh: '数据：Project PLATEAU 东京 22 区（千代田 · 中央 · 港 · 新宿 · 文京 · 墨田 · 江东 · 品川 · 目黑 · 大田 · 世田谷 · 涩谷 · 中野 · 杉并 · 丰岛 · 北 · 荒川 · 板桥 · 练马 · 足立 · 葛饰 · 江户川）2023–2024 年度 CityGML（v4 / 部分 v3）／<a href="https://www.geospatial.jp/ckan/dataset?q=plateau" target="_blank">G 空间信息中心</a>／日本国土交通省／CC BY 4.0',
    en: 'Data: Project PLATEAU, 22 Tokyo wards (Chiyoda, Chūō, Minato, Shinjuku, Bunkyō, Sumida, Kōtō, Shinagawa, Meguro, Ōta, Setagaya, Shibuya, Nakano, Suginami, Toshima, Kita, Arakawa, Itabashi, Nerima, Adachi, Katsushika, Edogawa), 2023–2024 CityGML (v4 / partial v3) / <a href="https://www.geospatial.jp/ckan/dataset?q=plateau" target="_blank">G-Spatial Information Center</a> / MLIT / CC BY 4.0',
  },
  'index.colophon.small2': {
    ja: '配信：290 万棟 を PMTiles に圧縮（48 MB）。基礎図：MapLibre GL JS 4.7　·　明朝：Hiragino Mincho ProN　·　台東区は 2023 年度データセットが未公開のため除外。',
    zh: '配信：290 万栋压缩为 PMTiles（48 MB）。底图：MapLibre GL JS 4.7　·　明朝：Hiragino Mincho ProN　·　台东区因 2023 年度数据集未公开而除外。',
    en: 'Delivery: 2.9M buildings compressed to PMTiles (48 MB). Base: MapLibre GL JS 4.7 · Mincho: Hiragino Mincho ProN · Taitō ward excluded — 2023 PLATEAU dataset not published.',
  },
  'index.colophon.small3': {
    ja: 'プロジェクト概要は <a href="./about">about</a>。自由探索モードは <a href="./explore">explore</a>。データ交差分析（× UpgradeMap）は <a href="./cross">cross</a>。A3 横の印刷版 PDF：<a href="./tokyo-strata.pdf" download>tokyo-strata.pdf</a>（10 ページ・6.9 MB）',
    zh: '项目概述见 <a href="./about">about</a>。自由探索模式见 <a href="./explore">explore</a>。数据交叉分析（× UpgradeMap）见 <a href="./cross">cross</a>。A3 横向印刷版 PDF：<a href="./tokyo-strata.pdf" download>tokyo-strata.pdf</a>（10 页 · 6.9 MB）',
    en: 'Project overview at <a href="./about">about</a>. Free-explore mode at <a href="./explore">explore</a>. Cross-data analysis (× UpgradeMap) at <a href="./cross">cross</a>. A3 landscape print PDF: <a href="./tokyo-strata.pdf" download>tokyo-strata.pdf</a> (10 pages, 6.9 MB).',
  },

  // ============================================================
  // ABOUT
  // ============================================================
  'about.title': { ja: 'About · Tokyo Strata', zh: 'About · Tokyo Strata', en: 'About · Tokyo Strata' },
  'about.meta.description': {
    ja: 'Tokyo Strata について——東京 22 区・290 万棟の建築物を 4 色の形態地層として読み解いた都市考古地図。',
    zh: '关于 Tokyo Strata——将东京 22 区、290 万栋建筑物以 4 色形态地层解读的都市考古地图。',
    en: 'About Tokyo Strata — an urban-archaeology map of Tokyo’s 22 wards, 2.9M buildings rendered as four morphological strata.',
  },
  'about.super': { ja: 'ABOUT', zh: 'ABOUT', en: 'ABOUT' },
  'about.h1': {
    ja: '形 態 地 層 と は',
    zh: '何 谓 形 态 地 层',
    en: 'WHAT IS A MORPHOLOGICAL STRATUM',
  },
  'about.lead': {
    ja: 'Tokyo Strata は、東京 22 区・290 万棟の建築物を「耐火構造 × 高度」の二軸で読み解いた都市考古地図です。',
    zh: 'Tokyo Strata 是一张东京 22 区、290 万栋建筑物以「耐火结构 × 高度」二轴解读的都市考古地图。',
    en: 'Tokyo Strata is an urban-archaeology map that reads Tokyo’s 22 wards and 2.9 million buildings along two axes — fire-resistance class and height.',
  },
  'about.p1': {
    ja: 'Project PLATEAU 2023–24 の 3D 都市モデルから footprint・用途・構造・高度を抽出し、4 色の形態地層として描きました——朽葉が古層、月白が現代層。建築年は記録されていませんが、形態が時代の代理として浮かび上がります。',
    zh: '从 Project PLATEAU 2023–24 的 3D 都市模型中抽取每栋建筑的轮廓、用途、结构与高度，绘制为 4 色形态地层——朽叶为古层，月白为现代层。建造年未公开，但形态作为时代的代理浮现而出。',
    en: 'From the Project PLATEAU 2023–24 3D city model we pulled footprint, use, structure, and height for every building, then drew them as four morphological strata — kuchiba as old, tsukishiro as modern. Construction year is unpublished, but form surfaces as a proxy for era.',
  },
  'about.p2': {
    ja: '皇居を中心に、北は荒川・足立の下町、南は大田の海岸、西は世田谷・練馬の郊外住宅地まで——一枚の地図に重なる東京の時間を読む試みです。',
    zh: '以皇居为中心，北至荒川 · 足立的下町、南至大田的海岸、西至世田谷 · 练马的郊外住宅地——一张地图，叠出东京的时间。',
    en: 'Centered on the Imperial Palace — north to the shitamachi of Arakawa and Adachi, south to the Ōta coast, west to the suburban housing of Setagaya and Nerima — an attempt to read the layered time of Tokyo on a single map.',
  },
  'about.h2.legend': { ja: '4 色 の 凡 例', zh: '4 色 凡 例', en: 'THE FOUR COLORS' },

  'about.palette.kuchiba.desc': {
    ja: '「その他・不明」分類かつ低層 10m 未満——多くは戦前から残る木造または準木造の街。',
    zh: '「其他 · 不明」分类，且低层 10m 未满——多为战前残留之木造或准木造街区。',
    en: '"Other / unknown" classification at less than 10m — mostly the wood and quasi-wood streets that survived from before the war.',
  },
  'about.palette.rikyu.desc': {
    ja: '耐火・準耐火の同低層——戦後の小楼に対応する。',
    zh: '耐火 · 准耐火的同低层——对应战后的小楼。',
    en: 'Fire-resistant and semi-resistant at the same low height — the postwar low-rise.',
  },
  'about.palette.ginnezu.desc': {
    ja: '中層 10–30m、高度成長期以降の中規模ビル。',
    zh: '中层 10–30m，高度成长期以降的中等规模建筑。',
    en: 'Mid-rise at 10–30m, the medium-scale buildings of the high-growth era and after.',
  },
  'about.palette.tsukishiro.desc': {
    ja: '高層 30m 以上、バブル期以降の塔状建築。',
    zh: '高层 30m 以上，泡沫期以降的塔状建筑。',
    en: 'High-rise above 30m, the tower architecture of the bubble era and beyond.',
  },

  'about.h2.proxy': { ja: '形態 を 時代 の 代理 と す る 理由', zh: '何以 形态 为 时代 之 代理', en: 'WHY FORM AS A PROXY FOR TIME' },
  'about.proxy.p1': {
    ja: '本来であれば建築年を直接プロットするのが理想ですが、PLATEAU の公開データには yearOfConstruction の値が記載されていません（schema 上は存在するものの、東京 22 区いずれも非公開）。一棟一棟の正確な建築年は分からないが、地層としての時代の重なりは見えてくる——耐火構造の有無と高度を組み合わせると、おおよその建築世代が推測できるからです。',
    zh: '理想做法本是直接绘出建造年，但 PLATEAU 的公开数据中并未填入 yearOfConstruction 字段（schema 上虽然存在，22 区皆未公开）。逐栋的精确建造年虽不可得，但作为地层的时代叠层依然浮现——结合耐火结构有无与高度，建筑世代可被大致推测。',
    en: 'Plotting construction year directly would be ideal, but PLATEAU’s published data does not populate yearOfConstruction — the schema field exists, but no Tokyo ward fills it. The exact year of any one building stays unknown, yet the layering of eras still becomes visible: pair fire-resistance with height and you can infer roughly which generation a building belongs to.',
  },
  'about.proxy.p2': {
    ja: '木造低層は戦前〜戦後早期、耐火低層は戦後復興、中層 RC は高度成長、超高層はバブル期以降。決して厳密な分類ではありませんが、街全体を一枚の地図として眺めると、時代の地層がはっきりと現れます。',
    zh: '木造低层为战前至战后早期，耐火低层为战后复兴，中层 RC 为高度成长，超高层为泡沫期以降。绝非严密分类，但当一整座城市作为一张地图展开，时代的地层便清晰可见。',
    en: 'Wood low-rises read as prewar through early postwar; fire-resistant low-rises as postwar reconstruction; mid-rise RC as the high-growth era; supertalls as bubble-era and after. The classification is not strict, but seen as a single map, the strata of time are unmistakable.',
  },

  'about.h2.bias': { ja: '区 ご と の 強 い 偏 り', zh: '各区 之 强 偏 倚', en: 'SHARP BIASES BY WARD' },
  'about.bias.th.ward':       { ja: '区',      zh: '区',      en: 'Ward'    },
  'about.bias.th.kuchiba':    { ja: '朽葉%',   zh: '朽叶%',   en: 'Kuchiba %' },
  'about.bias.th.tsukishiro': { ja: '月白%',   zh: '月白%',   en: 'Tsukishiro %' },
  'about.bias.th.avgh':       { ja: '平均高',  zh: '平均高',  en: 'Mean ht.' },
  'about.bias.row.nerima':    { ja: '練馬',    zh: '练马',    en: 'Nerima'   },
  'about.bias.row.suginami':  { ja: '杉並',    zh: '杉并',    en: 'Suginami' },
  'about.bias.row.setagaya':  { ja: '世田谷',  zh: '世田谷',  en: 'Setagaya' },
  'about.bias.row.shibuya':   { ja: '渋谷',    zh: '涩谷',    en: 'Shibuya'  },
  'about.bias.row.shinjuku':  { ja: '新宿',    zh: '新宿',    en: 'Shinjuku' },
  'about.bias.row.minato':    { ja: '港',      zh: '港',      en: 'Minato'   },
  'about.bias.row.chuo':      { ja: '中央',    zh: '中央',    en: 'Chūō' },
  'about.bias.row.chiyoda':   { ja: '千代田',  zh: '千代田',  en: 'Chiyoda'  },
  'about.bias.caption': {
    ja: '都心 3 区（千代田・中央・港）は月白比率が最高で、朽葉が最低。郊外住宅区（練馬・杉並・世田谷）は逆の極にある。緩やかな勾配が皇居から外周に向かって広がり、東京の都市発展の年輪を可視化する。',
    zh: '都心 3 区（千代田 · 中央 · 港）月白比率最高，朽叶最低。郊外住宅区（练马 · 杉并 · 世田谷）位居反极。缓缓的梯度自皇居向外周延展，将东京都市发展的年轮可视化。',
    en: 'The three core wards — Chiyoda, Chūō, Minato — top the tsukishiro ratio and bottom the kuchiba. The suburban housing wards (Nerima, Suginami, Setagaya) sit at the opposite pole. A slow gradient runs outward from the Imperial Palace, making visible the growth rings of Tokyo’s development.',
  },

  'about.h2.peaks': { ja: '記 録 さ れ た 最 高 点', zh: '已 记 录 之 最 高 点', en: 'TALLEST POINTS ON RECORD' },
  'about.peaks.body': {
    ja: '<b>墨田区</b> 634m = <b>東京スカイツリー</b>。22 区中で最も高い構造物として、形態地図の北東に屹立する。<br><b>港区</b> 332m = <b>麻布台ヒルズ森 JP タワー</b>（2023 年竣工）。地層の最新の頂点。',
    zh: '<b>墨田区</b> 634m = <b>东京晴空塔</b>。作为 22 区中最高之构造物，屹立于形态地图的东北。<br><b>港区</b> 332m = <b>麻布台 Hills 森 JP 塔</b>（2023 年竣工）。地层最新的顶点。',
    en: '<b>Sumida</b> 634m = <b>Tokyo Skytree</b>. The tallest structure in the 22 wards, standing in the northeast of the map.<br><b>Minato</b> 332m = <b>Azabudai Hills Mori JP Tower</b> (completed 2023). The latest peak of the stratum.',
  },

  'about.h2.production': { ja: '制 作', zh: '制 作', en: 'PRODUCTION' },
  'about.production.body': {
    ja: '<b>データ</b>　Project PLATEAU 2023–24 CityGML（v4 / 一部 v3）。19 区は 2023 年度、墨田・品川・杉並は 2024 年度を使用。台東区は PLATEAU 2023 年度データセットが未公開のため除外。<br><b>ライセンス</b>　国土交通省／<a href="https://www.geospatial.jp/ckan/dataset?q=plateau" target="_blank">G 空間情報センター</a>／CC BY 4.0<br><b>配信</b>　290 万棟を PMTiles に圧縮（48 MB、HTTP 範囲リクエストで配信）<br><b>基礎図</b>　MapLibre GL JS 4.7　·　PMTiles 4.3　·　明朝：Hiragino Mincho ProN<br><b>印刷</b>　<a href="./tokyo-strata.pdf" download>tokyo-strata.pdf</a>（A3 横・10 ページ・6.9 MB）<br><b>自由探索</b>　<a href="./explore">explore mode</a>',
    zh: '<b>数据</b>　Project PLATEAU 2023–24 CityGML（v4 / 部分 v3）。19 区使用 2023 年度，墨田 · 品川 · 杉并使用 2024 年度。台东区因 PLATEAU 2023 年度数据集未公开而除外。<br><b>许可</b>　日本国土交通省／<a href="https://www.geospatial.jp/ckan/dataset?q=plateau" target="_blank">G 空间信息中心</a>／CC BY 4.0<br><b>配信</b>　290 万栋压缩为 PMTiles（48 MB，以 HTTP 范围请求配信）<br><b>底图</b>　MapLibre GL JS 4.7　·　PMTiles 4.3　·　明朝：Hiragino Mincho ProN<br><b>印刷</b>　<a href="./tokyo-strata.pdf" download>tokyo-strata.pdf</a>（A3 横向 · 10 页 · 6.9 MB）<br><b>自由探索</b>　<a href="./explore">explore mode</a>',
    en: '<b>Data</b>  Project PLATEAU 2023–24 CityGML (v4 / partial v3). 19 wards from FY2023, Sumida / Shinagawa / Suginami from FY2024. Taitō ward excluded — its FY2023 dataset is unpublished.<br><b>License</b>  MLIT / <a href="https://www.geospatial.jp/ckan/dataset?q=plateau" target="_blank">G-Spatial Information Center</a> / CC BY 4.0<br><b>Delivery</b>  2.9M buildings compressed to PMTiles (48 MB, served via HTTP range requests)<br><b>Base</b>  MapLibre GL JS 4.7 · PMTiles 4.3 · Mincho: Hiragino Mincho ProN<br><b>Print</b>  <a href="./tokyo-strata.pdf" download>tokyo-strata.pdf</a> (A3 landscape, 10 pages, 6.9 MB)<br><b>Free explore</b>  <a href="./explore">explore mode</a>',
  },

  // ============================================================
  // CROSS
  // ============================================================
  'cross.title': {
    ja: 'Cross · Tokyo Strata × UpgradeMap',
    zh: 'Cross · Tokyo Strata × UpgradeMap',
    en: 'Cross · Tokyo Strata × UpgradeMap',
  },
  'cross.meta.description': {
    ja: '形態地層 × 上昇シグナル——東京 22 区の建築形態が現代の都市更新を予測する。月白% × 人口 YoY r=+0.86。',
    zh: '形态地层 × 上升信号——东京 22 区的建筑形态预测当下的都市更新。月白% × 人口 YoY r=+0.86。',
    en: 'Morphological strata × upgrade signals — Tokyo’s built form predicts present-day urban renewal. Tsukishiro % × population YoY r=+0.86.',
  },

  'cross.toc.cover':        { ja: '表紙',         zh: '封面',         en: 'Cover' },
  'cross.toc.intro':        { ja: '序',           zh: '序',           en: 'Intro' },
  'cross.toc.scatter':      { ja: '主散布図',     zh: '主散布图',     en: 'Scatter' },
  'cross.toc.corr':         { ja: '相関表',       zh: '相关表',       en: 'Correlation' },
  'cross.toc.categories':   { ja: '3 類分類',     zh: '3 类分类',     en: 'Categories' },
  'cross.toc.hypothesis':   { ja: '仮説',         zh: '假说',         en: 'Hypothesis' },
  'cross.toc.katsushika':   { ja: '葛飾',         zh: '葛饰',         en: 'Katsushika' },
  'cross.toc.twomech':      { ja: '東部下町',     zh: '东部下町',     en: 'East Shitamachi' },
  'cross.toc.cohort':       { ja: '50 年後',      zh: '50 年后',      en: '50 yrs out' },
  'cross.toc.redteam':      { ja: '紅隊',         zh: '红队',         en: 'Red team' },
  'cross.toc.colophon':     { ja: '出典',         zh: '出处',         en: 'Sources' },

  'cross.cover.super': { ja: 'CROSS · 2026', zh: 'CROSS · 2026', en: 'CROSS · 2026' },
  'cross.cover.h1': {
    ja: '形 態 地 層<br>×<br>上 昇 シ グ ナ ル',
    zh: '形 态 地 层<br>×<br>上 升 信 号',
    en: 'MORPHOLOGICAL STRATA<br>×<br>UPGRADE SIGNALS',
  },
  'cross.cover.meta': {
    ja: 'Tokyo Strata × UpgradeMap<br>22 区・290 万棟 × 不動産価格 × 人口動態',
    zh: 'Tokyo Strata × UpgradeMap<br>22 区 · 290 万栋 × 不动产价格 × 人口动态',
    en: 'Tokyo Strata × UpgradeMap<br>22 wards · 2.9M buildings × prices × demographics',
  },
  'cross.cover.scroll': { ja: 'SCROLL ↓', zh: 'SCROLL ↓', en: 'SCROLL ↓' },

  'cross.intro.super': { ja: '序', zh: '序', en: 'INTRO' },
  'cross.intro.h2': {
    ja: '形態は時代を<br>予測する',
    zh: '形态预测<br>时代',
    en: 'FORM PREDICTS<br>THE FUTURE',
  },
  'cross.intro.lead': {
    ja: 'Tokyo Strata の 4 色形態地層と UpgradeMap の上昇シグナルを 22 区で交差させたところ、形態が現在進行形の都市変容と統計的に強く相関することが判明した。',
    zh: '将 Tokyo Strata 的 4 色形态地层与 UpgradeMap 的上升信号在 22 区交叉，结果显示：形态与正在进行中的都市变容存在统计上的强相关。',
    en: 'Crossing the four-color strata of Tokyo Strata with the upgrade signals of UpgradeMap across 22 wards, form turns out to correlate strongly — statistically — with present-tense urban transformation.',
  },
  'cross.intro.p1': {
    ja: 'もっとも強い軸：<b>月白比率 × 人口 YoY、Pearson r = +0.86</b>。現代塔の多い区ほど、人口流入が著しい。',
    zh: '最强之轴：<b>月白比率 × 人口 YoY，Pearson r = +0.86</b>。现代塔越多的区，人口流入越显著。',
    en: 'The strongest axis: <b>tsukishiro share × population YoY, Pearson r = +0.86</b>. The more modern towers a ward holds, the more people are flowing in.',
  },
  'cross.intro.p2': {
    ja: '形態地層は単なる「過去の積層」ではなく、現代の不動産・人口動態を予測する代理指標として機能する——それが今回の発見である。',
    zh: '形态地层不仅是「过去的累积」，还作为预测当下不动产 · 人口动态的代理指标发挥作用——这是本次的发现。',
    en: 'The morphological stratum is not merely "the layering of the past" — it operates as a proxy that predicts current real-estate and population dynamics. That is the finding.',
  },

  'cross.scatter.super': { ja: '主散布図', zh: '主散布图', en: 'PRIMARY SCATTER' },
  'cross.scatter.h2':    { ja: '月白% × 人口 YoY', zh: '月白% × 人口 YoY', en: 'Tsukishiro % × Population YoY' },
  'cross.scatter.p1': {
    ja: '横軸：月白（高層 30m+）の比率。縦軸：人口の年次増減率。',
    zh: '横轴：月白（高层 30m+）比率。纵轴：人口的年度增减率。',
    en: 'X axis: tsukishiro (30m+) share. Y axis: annual population change.',
  },
  'cross.scatter.x': { ja: '月白% (高層 30m+)', zh: '月白% (高层 30m+)', en: 'Tsukishiro % (30m+)' },
  'cross.scatter.y': { ja: '人口 YoY %',         zh: '人口 YoY %',          en: 'Population YoY %' },
  'cross.scatter.moment': {
    ja: '皇居周辺の都心 3 区（千代田・中央・港）が右上に集中、郊外大区（練馬・世田谷・杉並）が左下に集中する。月白の存在自体が「人を呼ぶ建築物」になっているのか、それとも人口流入が塔を建てさせているのか——相関は因果を語らない。',
    zh: '皇居周围的都心 3 区（千代田 · 中央 · 港）集中于右上，郊外大区（练马 · 世田谷 · 杉并）集中于左下。月白本身是否就是「召唤人群的建筑」，还是人口流入引发了塔的建设——相关并不言因果。',
    en: 'The three central wards around the Palace — Chiyoda, Chūō, Minato — cluster at upper right; the large suburban wards (Nerima, Setagaya, Suginami) cluster at lower left. Whether tsukishiro itself draws people, or population inflow summons the towers — correlation does not speak causation.',
  },
  'cross.scatter.foot': {
    ja: '※ Pearson r ∈ [−1, +1]。社会科学では |r| > 0.5 を中等、> 0.7 を強相関とする。n=22 のため信頼区間は広い。',
    zh: '※ Pearson r ∈ [−1, +1]。社会科学中 |r| > 0.5 视为中等、> 0.7 为强相关。n=22 故信赖区间较宽。',
    en: '* Pearson r ∈ [−1, +1]. In social science |r| > 0.5 is moderate, > 0.7 is strong. With n=22, confidence intervals are wide.',
  },

  'cross.corr.super': { ja: '相関表', zh: '相关表', en: 'CORRELATION TABLE' },
  'cross.corr.h2':    { ja: 'Pearson r ランキング', zh: 'Pearson r 排序', en: 'Pearson r Ranking' },
  'cross.corr.p1': {
    ja: 'Strata 軸（朽葉・利休茶・銀鼠・月白・平均高）と UpgradeMap 軸（upgrade score・price YoY・pop YoY）の全組み合わせの Pearson 相関係数。22 区サンプル。',
    zh: 'Strata 轴（朽叶 · 利休茶 · 银鼠 · 月白 · 平均高）与 UpgradeMap 轴（upgrade score · price YoY · pop YoY）所有组合的 Pearson 相关系数。22 区样本。',
    en: 'Pearson correlations between every pair of Strata axes (kuchiba / rikyū / ginnezu / tsukishiro / mean height) and UpgradeMap axes (upgrade score / price YoY / population YoY). 22-ward sample.',
  },
  'cross.corr.th.axis': { ja: '軸', zh: '轴', en: 'Axis' },
  'cross.corr.moment': {
    ja: '月白系（現代塔）はすべての UpgradeMap 軸と正相関、朽葉系（古層）はすべて負相関。形態地層のグラデーションが、そのまま都市更新のグラデーションに対応する。',
    zh: '月白系（现代塔）与所有 UpgradeMap 轴正相关，朽叶系（古层）则全为负相关。形态地层的渐层即对应都市更新的渐层。',
    en: 'Tsukishiro (modern towers) correlates positively with every UpgradeMap axis; kuchiba (old layer) negatively with all. The gradient of the strata is the gradient of urban renewal.',
  },

  'cross.cat.super': { ja: '3 類 分 類', zh: '3 类 分 类', en: 'THREE CATEGORIES' },
  'cross.cat.h2':    { ja: '22 区を 3 つに 分 け る', zh: '将 22 区 分 作 三 类', en: 'TOKYO’S 22 WARDS, IN THREE GROUPS' },
  'cross.cat.p1': {
    ja: '形態と signal の組み合わせから、22 区はおおよそ 3 つに分類できる。',
    zh: '由形态与 signal 的组合，22 区大致可分为三类。',
    en: 'Combining form with signal, the 22 wards fall into three rough groups.',
  },
  'cross.cat.mature.h3': { ja: '成熟した都心', zh: '成熟的都心', en: 'Mature core' },
  'cross.cat.mature.p': {
    ja: '月白比率 11–18%、active signal、価格上昇 +11〜19%、人口流入 +7〜20%。すでに升级した区——投资窗口は収斂。',
    zh: '月白比率 11–18%，active signal，价格上涨 +11~19%，人口流入 +7~20%。已升级之区——投资窗口正在收敛。',
    en: 'Tsukishiro 11–18%, active signal, price +11–19%, population +7–20%. Already upgraded — the investment window is closing.',
  },
  'cross.cat.rising.h3': { ja: '上昇中の下町', zh: '上升中的下町', en: 'Rising shitamachi' },
  'cross.cat.rising.p': {
    ja: '朽葉比率 40〜74% という古層の多さに反して、upgrade score > 65、価格上昇 > 6%。朽葉的城市基盤に新しい資本が注入されている。投资 sweet spot 候補。',
    zh: '朽叶比率 40~74% 之古层占比甚高，但 upgrade score > 65、价格上涨 > 6%。朽叶式之都市基盘正被新的资本注入。投资 sweet spot 候选。',
    en: 'Despite an old-layer share of 40–74%, upgrade score > 65 and prices > 6% YoY. New capital is being injected into a kuchiba-grade urban base — candidate sweet spots.',
  },
  'cross.cat.forgotten.h3': { ja: '忘れられた下町', zh: '被遗忘的下町', en: 'Forgotten shitamachi' },
  'cross.cat.forgotten.p': {
    ja: '朽葉比率 57〜61%、score < 65、価格上昇 < 5%。古層が支配的だが UpgradeMap シグナルは弱い。「進化を待っている」区——あるいは中立に「低 momentum 高古層」と読むべき。',
    zh: '朽叶比率 57~61%，score < 65，价格上涨 < 5%。古层占主导但 UpgradeMap 信号偏弱。「等待进化」之区——或更中立地读作「低 momentum 高古层」。',
    en: 'Kuchiba 57–61%, score < 65, prices < 5%. The old layer dominates but UpgradeMap signals are weak. Wards "waiting to evolve" — or, more neutrally, low-momentum / high-old-layer.',
  },

  'cross.hypothesis.super': { ja: '投资 仮説', zh: '投资 假说', en: 'INVESTMENT HYPOTHESIS' },
  'cross.hypothesis.h2': {
    ja: '下 町 に 資 本 が 流 入 す る 初 期',
    zh: '资 本 流 入 下 町 之 初 期',
    en: 'EARLY STAGES OF CAPITAL ENTERING THE SHITAMACHI',
  },
  'cross.hypothesis.p1': {
    ja: 'もっとも興味深いのは <b>葛飾</b>——朽葉 59.5%（22 区中 6 番目に古い）、にもかかわらず price YoY +12.6%（22 区中前列）。形態がもっとも古い街に資本が入りつつある。',
    zh: '最具趣味的当属 <b>葛饰</b>——朽叶 59.5%（22 区中第 6 古），却价格 YoY +12.6%（22 区前列）。资本正向形态最古之街进入。',
    en: 'The most striking case is <b>Katsushika</b> — kuchiba 59.5% (the 6th oldest of 22), yet price YoY +12.6% (front of the pack). Capital is entering one of the morphologically oldest districts.',
  },
  'cross.hypothesis.p2': {
    ja: '<b>練馬</b> は朽葉 73.9% で 22 区中もっとも古層率高い区が「early upgrade」signal を出している。郊外住宅地に新しい流れが見えるか。',
    zh: '<b>练马</b> 朽叶 73.9%，22 区中古层率最高，却发出「early upgrade」信号。郊外住宅地能否看到新潮流。',
    en: '<b>Nerima</b>, with the highest old-layer share of any ward at 73.9%, is putting out an "early upgrade" signal. Is a new current visible in suburban housing?',
  },
  'cross.hypothesis.moment': {
    ja: '仮説：月白比率 < 5% ＋ price YoY > 6% ＋ early/active signal = 老町に資本が流入する初期段階。該当：葛飾・練馬・杉並・墨田。',
    zh: '假说：月白比率 < 5% ＋ price YoY > 6% ＋ early/active signal = 资本流入老町的初期阶段。命中：葛饰 · 练马 · 杉并 · 墨田。',
    en: 'Hypothesis: tsukishiro < 5% + price YoY > 6% + early/active signal = capital entering an old district at its early stage. Matches: Katsushika, Nerima, Suginami, Sumida.',
  },

  'cross.case.super': { ja: 'CASE STUDY · 葛飾', zh: 'CASE STUDY · 葛饰', en: 'CASE STUDY · KATSUSHIKA' },
  'cross.case.h2': {
    ja: '形 態 が 変 わ る 前 に<br>価 格 が 動 く',
    zh: '形 态 未 变<br>价 格 先 动',
    en: 'PRICES MOVE<br>BEFORE FORM DOES',
  },
  'cross.case.p1': {
    ja: '22 区の中で、形態と価格の解離がもっとも大きい区は <b>葛飾</b>。',
    zh: '22 区之中，形态与价格背离最大者，乃 <b>葛饰</b>。',
    en: 'Across the 22 wards, the largest gap between form and price belongs to <b>Katsushika</b>.',
  },

  'cross.case.row.kuchiba':  { ja: '朽葉率',     zh: '朽叶率',     en: 'Kuchiba ratio' },
  'cross.case.row.kuchiba.v':{
    ja: '59.5% （22 区中 6 番目に古い）',
    zh: '59.5%（22 区中第 6 古）',
    en: '59.5% (6th oldest of 22)',
  },
  'cross.case.row.price':    { ja: '価格 YoY',  zh: '价格 YoY',  en: 'Price YoY' },
  'cross.case.row.price.v':  {
    ja: '+12.6% （23 区中 4 番目に高い）',
    zh: '+12.6%（23 区中第 4 高）',
    en: '+12.6% (4th highest of 23)',
  },
  'cross.case.row.tsuki':    { ja: '月白率',    zh: '月白率',    en: 'Tsukishiro ratio' },
  'cross.case.row.tsuki.v':  {
    ja: '0.5% （22 区中 4 番目に低い）',
    zh: '0.5%（22 区中第 4 低）',
    en: '0.5% (4th lowest of 22)',
  },
  'cross.case.row.signal':   { ja: 'signal', zh: 'signal', en: 'signal' },
  'cross.case.row.signal.v': { ja: 'early upgrade', zh: 'early upgrade', en: 'early upgrade' },

  'cross.case.contradict': {
    ja: '<b>矛盾点</b>——形態は最も古い下町の一つ、しかし価格上昇率は都心のタワー区（中央 +19.3%、港 +16.2%、渋谷 +15.4%）に追いつく勢い。建物はまだ変わっていないのに、価格が先に動いている。',
    zh: '<b>矛盾点</b>——形态属于最古下町之一，但价格上涨率几乎追上都心高塔区（中央 +19.3%，港 +16.2%，涩谷 +15.4%）。建筑仍未改变，价格已先一步动起。',
    en: '<b>The contradiction</b> — morphologically one of the oldest shitamachi, yet price growth is closing in on the central tower wards (Chūō +19.3%, Minato +16.2%, Shibuya +15.4%). The buildings have not changed, yet the prices already have.',
  },
  'cross.case.h3.4hyp': { ja: '4 つの仮説（推測・未検証）', zh: '4 个 假说（推测 · 未检证）', en: 'FOUR HYPOTHESES (SPECULATIVE, UNVERIFIED)' },
  'cross.case.4hyp.body': {
    ja: '① <b>都心高価の外溢</b>——千代田・中央・港 はすでに上昇しきり、資本が「比較的安い」下町を発見した可能性。<br>② <b>民泊・短期賃貸の収益期待</b>——柴又は『男はつらいよ』の聖地で観光地。短期賃貸の収益見込みが取得価格を押し上げる。<br>③ <b>外国人買い手の参入</b>——下町は entry barrier が低く、新規移民・海外投資家が買いやすい。<br>④ <b>形態先行のリーディングシグナル</b>——朽葉率が高い = まだ建て替わっていない = 12〜24 ヶ月後の月白塔建設の前兆かもしれない。',
    zh: '① <b>都心高价的外溢</b>——千代田 · 中央 · 港 已上升至顶，资本可能发现了「相对便宜」的下町。<br>② <b>民宿 · 短租收益的期待</b>——柴又乃《寅次郎》圣地，观光地。短租预期的收益推升取得价格。<br>③ <b>外国买家参入</b>——下町 entry barrier 低，新移民 · 海外投资家更易买入。<br>④ <b>形态先行的领先信号</b>——朽叶率高 = 尚未重建 = 或为 12~24 个月后月白塔建设的前兆。',
    en: '① <b>Spillover from the central core</b> — Chiyoda, Chūō, Minato have already topped out; capital may have discovered "relatively cheap" shitamachi.<br>② <b>Short-term rental yield expectations</b> — Shibamata, sacred ground of <i>Tora-san</i>, is a tourist site. Expected nightly-rental income lifts acquisition prices.<br>③ <b>Foreign buyers entering</b> — entry barriers in the shitamachi are low, easier for new immigrants and overseas investors to buy.<br>④ <b>Form as a leading signal</b> — high kuchiba = not yet rebuilt = possibly the 12–24 month leading edge of future tsukishiro tower construction.',
  },
  'cross.case.moment': {
    ja: '「上昇中の下町」6 区（葛飾・練馬・杉並・品川・渋谷・豊島）の中で、葛飾は<b>形態 / 価格 gap がもっとも大きい</b>——価格は先に動き、形態の更新はこれから。投资視角では early window、文化保育視角では「下町が静かに資本に書き換えられつつある」前兆。',
    zh: '「上升中的下町」6 区（葛饰 · 练马 · 杉并 · 品川 · 涩谷 · 丰岛）中，葛饰之 <b>形态 / 价格 gap 最大</b>——价格先行，形态更新尚未到来。投资视角为 early window，文化保育视角则是「下町正被资本静静改写」之前兆。',
    en: 'Among the six "rising shitamachi" (Katsushika, Nerima, Suginami, Shinagawa, Shibuya, Toshima), Katsushika holds <b>the largest form-price gap</b> — prices move first, the morphological update is yet to come. From an investment angle: an early window. From a preservation angle: an early sign that the shitamachi is quietly being rewritten by capital.',
  },
  'cross.case.foot': {
    ja: '※ 仮説 ①〜④ は cross-section データと一般的な不動産論からの推測であり、各仮説の検証には登記情報・取引内訳・買い手国籍データなど追加調査が必要。',
    zh: '※ 假说 ①~④ 系基于 cross-section 数据与一般不动产论的推测；每条假说的验证均需登记信息 · 交易明细 · 买家国籍等追加调查。',
    en: '* Hypotheses ①–④ are inferences from cross-sectional data and general real-estate logic. Verifying each requires further work — registry records, transaction breakdowns, buyer nationality data.',
  },

  'cross.twomech.super': { ja: '東 部 下 町 の 二 つ の 発 見', zh: '东部下町的 两 个 发 现', en: 'TWO FINDINGS IN THE EAST SHITAMACHI' },
  'cross.twomech.h2': {
    ja: '葛 飾 と 江 戸 川<br>同 じ 古 さ 、<br>違 う 未 来 軌 跡',
    zh: '葛 饰 与 江 户 川<br>同 等 之 古 ，<br>不 同 之 未 来',
    en: 'KATSUSHIKA AND EDOGAWA<br>SAME OLDNESS,<br>DIFFERENT FUTURES',
  },
  'cross.twomech.lead': {
    ja: '朽葉率がほぼ等しい二つの東部下町——葛飾 (59.5%) と江戸川 (61.4%)——が、別々のデータ軸で別々の outlier として浮かび上がる。',
    zh: '朽叶率几乎相等的两个东部下町——葛饰（59.5%）与江户川（61.4%）——在不同的数据轴上分别成为 outlier。',
    en: 'Two east-shitamachi wards with almost the same old-layer share — Katsushika (59.5%) and Edogawa (61.4%) — surface as outliers, but on different data axes.',
  },
  'cross.twomech.th.katsu':   { ja: '葛飾',     zh: '葛饰',     en: 'Katsushika' },
  'cross.twomech.th.edogawa': { ja: '江戸川',   zh: '江户川',   en: 'Edogawa'    },
  'cross.twomech.row.kuchiba':{ ja: '朽葉率（形態古）', zh: '朽叶率（形态古）', en: 'Kuchiba (old form)' },
  'cross.twomech.row.price':  { ja: '当下 価格 YoY',     zh: '当下 价格 YoY',     en: 'Current price YoY'  },
  'cross.twomech.row.50yr':   { ja: '50 年後 人口予測', zh: '50 年后 人口预测', en: '50-yr pop. forecast' },
  'cross.twomech.row.cat':    { ja: '該当カテゴリー',   zh: '所属类别',          en: 'Category'           },
  'cross.twomech.cell.katsu.price':  { ja: '+12.6% （高）', zh: '+12.6%（高）', en: '+12.6% (high)' },
  'cross.twomech.cell.edo.price':    { ja: '+3.6% （低）',  zh: '+3.6%（低）',  en: '+3.6% (low)'   },
  'cross.twomech.cell.katsu.50yr':   { ja: '+8.9% （緩慢）', zh: '+8.9%（缓慢）', en: '+8.9% (slow)'   },
  'cross.twomech.cell.edo.50yr':     { ja: '+18.8% （若返り）', zh: '+18.8%（年轻化）', en: '+18.8% (rejuvenating)' },
  'cross.twomech.cell.katsu.cat':    { ja: '上昇中の下町', zh: '上升中的下町', en: 'Rising shitamachi' },
  'cross.twomech.cell.edo.cat':      { ja: '若返り都心',   zh: '年轻化都心',   en: 'Rejuvenating core' },

  'cross.twomech.h3.katsu': { ja: '葛飾型——資本が先に動く', zh: '葛饰型——资本先动', en: 'Katsushika type — capital moves first' },
  'cross.twomech.p.katsu': {
    ja: '不動産価格が先行して上昇しているが、cohort projection（2015–2020 実人口データ基準）の長期人口予測は緩慢。「投資資金 vs 実際居住人口」が乖離している——価格は上がったが人はそれほど来ていない。<b>投機・民泊・海外買い手のシグナル</b>。',
    zh: '不动产价格先行上扬，但 cohort projection（基于 2015–2020 实际人口数据）的长期人口预测却缓慢。「投资资金 vs 实际居住人口」出现背离——价格已上，但人未必至。<b>投机 · 民宿 · 海外买家之信号</b>。',
    en: 'Real-estate prices are climbing first, yet the cohort projection (anchored on 2015–2020 real population data) shows only slow long-term population growth. "Investment money vs. actual residents" diverges — prices rose, but people have not arrived in proportion. <b>A signal of speculation, short-term rentals, foreign buyers.</b>',
  },
  'cross.twomech.h3.edo': { ja: '江戸川型——人口が先に動く', zh: '江户川型——人口先动', en: 'Edogawa type — population moves first' },
  'cross.twomech.p.edo': {
    ja: '当下の価格は 23 区中ほぼ最低レンジだが、cohort 算法は 2015–2020 の実人口流入トレンドを 50 年後 +18.8% と外推する。<b>湾岸・篠崎・葛西駅周辺の再開発が真の居住人口を取り込んでいる</b>が、資本市場はまだ反応していない——価格はこれから動くかもしれない。',
    zh: '当下价格几乎位于 23 区最低区间，但 cohort 算法将 2015–2020 的实际人口流入趋势外推至 50 年后 +18.8%。<b>湾岸 · 筱崎 · 葛西站周边的再开发正在吸纳真正的居住人口</b>，但资本市场尚未反应——价格或许将后到。',
    en: 'Today’s prices sit in the lowest range of the 23 wards, yet the cohort algorithm extrapolates a 2015–2020 inflow trend out to +18.8% over 50 years. <b>Redevelopment around the bay, Shinozaki, and Kasai stations is absorbing real residents</b> — but the capital market has not reacted. Prices may follow.',
  },
  'cross.twomech.moment': {
    ja: 'どちらか一つのデータ軸だけ見ると一方の outlier を見落とす。<b>東京東北・東部の下町は、二つの独立した機構によって同時に書き換えられつつある</b>——葛飾は資本入口、江戸川は人口入口。形態は同じく古いが、入ってくるものが違う。',
    zh: '若只看一条数据轴，便会错过另一处 outlier。<b>东京东北 · 东部之下町正被两套独立机构同时改写</b>——葛饰为资本入口，江户川为人口入口。形态同古，进来的东西不同。',
    en: 'Look at only one data axis and you miss the outlier on the other. <b>The shitamachi of Tokyo’s northeast and east are being rewritten simultaneously by two independent mechanisms</b> — Katsushika as a capital gateway, Edogawa as a population gateway. Same old form, different things flowing in.',
  },
  'cross.twomech.foot': {
    ja: '※ ATLAS cohort projection は 2015→2020 の survival ratio を線形外推する単純モデル。湾岸再開発の具体的な人口効果は時点ごとに変動するため、50 年予測には大きな不確実性を伴う。',
    zh: '※ ATLAS cohort projection 是将 2015→2020 的 survival ratio 线性外推的简易模型。湾岸再开发对人口的具体效果各时点变动，故 50 年预测存在较大不确定性。',
    en: '* The ATLAS cohort projection is a simple model that linearly extrapolates the 2015→2020 survival ratio. Population effects of bay-area redevelopment shift over time, so the 50-year forecast carries large uncertainty.',
  },

  'cross.cohort.super': { ja: '50 年 後 の 地 層', zh: '50 年 后 之 地 层', en: 'THE STRATUM IN 50 YEARS' },
  'cross.cohort.h2': {
    ja: '東 京 は<br>消 滅 し な い<br>—— 加 速 す る だ け',
    zh: '东 京 不 会 消 灭<br>—— 只 是 加 速',
    en: 'TOKYO DOES NOT VANISH<br>— IT ONLY ACCELERATES',
  },
  'cross.cohort.lead': {
    ja: '秋田県の集落消滅予測アルゴリズム（ATLAS Project）を東京 23 区に適用すると、別の事実が浮かぶ——東京 22 区はすべて 50 年後に人口が増える。日本全国の縮小トレンドと真逆。',
    zh: '将秋田县的村落消灭预测算法（ATLAS Project）应用于东京 23 区，浮现出另一事实——东京 22 区在 50 年后人口皆增。与日本全国之收缩趋势恰好相反。',
    en: 'Apply the village-extinction algorithm of Akita Prefecture (the ATLAS Project) to Tokyo’s 23 wards and a different fact emerges — every one of Tokyo’s 22 wards gains population over the next 50 years. The opposite of Japan’s nationwide decline.',
  },
  'cross.cohort.p1': {
    ja: '2015 → 2020 の cohort survival ratio から推計したところ、千代田は +24.5%、文京 +21.6%、中央 +18.5%——都心は加速。最も停滞する台東でも +2.0% で「消滅」のスケールには遠い。',
    zh: '基于 2015 → 2020 的 cohort survival ratio 推算：千代田 +24.5%，文京 +21.6%，中央 +18.5%——都心在加速。最为停滞的台东也有 +2.0%，距「消灭」之尺度遥远。',
    en: 'Estimated from the 2015 → 2020 cohort survival ratio: Chiyoda +24.5%, Bunkyō +21.6%, Chūō +18.5% — the core accelerates. Even the most stagnant ward, Taitō, comes in at +2.0%, far from anything that could be called "extinction."',
  },
  'cross.cohort.p2': {
    ja: '言い換えれば、ATLAS の「集落消滅」概念は東京には適用されない。代わりに「加速増の都心 vs 緩慢成熟の下町」という別の二極が現れる。',
    zh: '换言之，ATLAS 的「村落消灭」概念并不适用于东京。代之而起的，是「加速增长之都心 vs 缓慢成熟之下町」此一新二极。',
    en: 'In other words, ATLAS’s "village extinction" concept does not apply to Tokyo. In its place a different polarity arises: an accelerating central core versus a slowly maturing shitamachi.',
  },
  'cross.cohort.x':       { ja: '朽葉% (古層率)', zh: '朽叶% (古层率)', en: 'Kuchiba % (old-layer share)' },
  'cross.cohort.y':       { ja: '2070 人口変化 % (vs 2020)', zh: '2070 人口变化 % (vs 2020)', en: '2070 population change % (vs 2020)' },
  'cross.cohort.caption': {
    ja: '横軸：朽葉率 (古層率) ／ 縦軸：50 年後の人口変化率（cohort projection 2020 → 2070）。 朽葉率が低い区ほど人口加速、高い区ほど緩慢——形態が未来の人口軌跡と相関する。',
    zh: '横轴：朽叶率（古层率） / 纵轴：50 年后人口变化率（cohort projection 2020 → 2070）。朽叶率低之区人口加速，高之区缓慢——形态与未来人口轨迹相关。',
    en: 'X axis: kuchiba (old-layer share). Y axis: population change at 50 years (cohort projection 2020 → 2070). The lower the kuchiba, the faster the population growth; the higher, the slower. Form correlates with the future trajectory.',
  },
  'cross.cohort.h3.tracks': { ja: '3 つの未来軌跡', zh: '3 条未来轨迹', en: 'THREE FUTURE TRACKS' },

  'cross.cohort.rejuv.h3': { ja: '若返り都心（人口 +17〜25%）', zh: '年轻化的都心（人口 +17~25%）', en: 'Rejuvenating core (+17–25%)' },
  'cross.cohort.rejuv.p': {
    ja: '千代田・中央・文京・港・江戸川。都心 + 都心隣接 + 大規模再開発が進む湾岸下流。50 年後人口がもっとも伸びる。',
    zh: '千代田 · 中央 · 文京 · 港 · 江户川。都心 + 邻近都心 + 大规模再开发进行中的湾岸下游。50 年后人口增速最强。',
    en: 'Chiyoda, Chūō, Bunkyō, Minato, Edogawa. Core, core-adjacent, and the bay-front where large-scale redevelopment is underway. The strongest growth at 50 years.',
  },
  'cross.cohort.stable.h3': { ja: '安定郊外（人口 +10〜17%）', zh: '稳定郊外（人口 +10~17%）', en: 'Stable suburbs (+10–17%)' },
  'cross.cohort.stable.p': {
    ja: '練馬・世田谷・杉並・中野・大田・品川・目黒・江東・板橋・豊島・新宿・渋谷・荒川。郊外住宅地と中間層の区。穏やかに増える「中庸の地層」。',
    zh: '练马 · 世田谷 · 杉并 · 中野 · 大田 · 品川 · 目黑 · 江东 · 板桥 · 丰岛 · 新宿 · 涩谷 · 荒川。郊外住宅地与中间层之区。平稳增长的「中庸地层」。',
    en: 'Nerima, Setagaya, Suginami, Nakano, Ōta, Shinagawa, Meguro, Kōtō, Itabashi, Toshima, Shinjuku, Shibuya, Arakawa. Suburban housing and middle-strata wards. The "middle stratum," growing gently.',
  },
  'cross.cohort.slow.h3': { ja: '緩慢成熟（人口 +2〜10%）', zh: '缓慢成熟（人口 +2~10%）', en: 'Slow maturing (+2–10%)' },
  'cross.cohort.slow.p': {
    ja: '足立・葛飾・北・墨田・台東。下町中心の北部・東部。人口は微増だが速度は最も緩い。形態の朽葉率も高く「形態と未来軌跡が両方とも保守的」な層。',
    zh: '足立 · 葛饰 · 北 · 墨田 · 台东。以下町为中心的北部 · 东部。人口微增，速度最缓。形态的朽叶率亦高，是「形态与未来轨迹皆保守」之层。',
    en: 'Adachi, Katsushika, Kita, Sumida, Taitō. The northern and eastern shitamachi. Population grows slightly but slowest. Old-layer share is also high — a stratum where both form and future are conservative.',
  },
  'cross.cohort.moment': {
    ja: '注：cohort projection は 2015→2020 の survival ratio + fertility が今後 50 年継続すると仮定する単純モデル。経済変動・出生率反転・移民政策・自然災害は未モデル化。',
    zh: '注：cohort projection 是假设 2015→2020 的 survival ratio + fertility 在未来 50 年持续的简易模型。经济波动 · 生育率反转 · 移民政策 · 自然灾害皆未建模。',
    en: 'Note: the cohort projection assumes the 2015→2020 survival ratio and fertility continue for 50 years. Economic shifts, fertility reversals, immigration policy, and natural disasters are not modeled.',
  },

  'cross.redteam.super': { ja: '紅隊（自検）', zh: '红队（自检）', en: 'RED TEAM (SELF-CHECK)' },
  'cross.redteam.h2':    { ja: 'こ の 分 析 の 限 界', zh: '此 分 析 之 局 限', en: 'LIMITS OF THIS ANALYSIS' },
  'cross.redteam.h3':    { ja: '5 つの caveat', zh: '5 条 caveat', en: 'FIVE CAVEATS' },
  'cross.redteam.li1': {
    ja: '<b>時間窓不一致</b>——Strata は PLATEAU 2023–24 の静的形態、UpgradeMap は最新の価格・人口動態。「形態が升值を予測する」と言うには時系列追跡が必要。今回は cross-section。',
    zh: '<b>时间窗不一致</b>——Strata 取自 PLATEAU 2023–24 之静态形态，UpgradeMap 为最新之价格 · 人口动态。要言「形态预测升值」需时序追踪。本次为 cross-section。',
    en: '<b>Mismatched time windows</b> — Strata reflects the static form of PLATEAU 2023–24; UpgradeMap reflects the latest prices and demographics. To claim "form predicts price rises" properly requires longitudinal tracking. This run is cross-sectional.',
  },
  'cross.redteam.li2': {
    ja: '<b>base effect</b>——朽葉率高い郊外大区は人口絶対数も多く、価格が低い base から％増加が高く見える。「老町升级」と読むより「低価帯の自然な成長」の可能性。',
    zh: '<b>base effect</b>——朽叶率高之郊外大区人口绝对数亦多，价格自低 base 起算，％增显得偏高。比起「老町升级」，或更应读为「低价带的自然成长」。',
    en: '<b>Base effect</b> — large suburban wards with high kuchiba also have high raw population, and price growth from a low base looks larger in percent. "Old districts upgrading" may instead be the natural growth of the low-price band.',
  },
  'cross.redteam.li3': {
    ja: '<b>n=22 の統計力</b>——r=+0.86 は強相関だが、n=22 では信頼区間が広い。複数年データで再検証が必要。',
    zh: '<b>n=22 之统计力</b>——r=+0.86 虽为强相关，n=22 信赖区间偏宽。需多年数据再行检证。',
    en: '<b>Statistical power at n=22</b> — r=+0.86 is strong, but the confidence interval is wide at this sample size. Multi-year data is needed to retest.',
  },
  'cross.redteam.li4': {
    ja: '<b>「忘れられた」のラベル恣意性</b>——大田・江戸川は元々住宅密度高い「成熟した郊外」。「忘れられた」と読むのは余計な物語化。中立に「低 momentum 高古層」と呼ぶべき。',
    zh: '<b>「被遗忘」标签的恣意性</b>——大田 · 江户川本为住宅密度颇高之「成熟郊外」。读作「被遗忘」乃多余的叙事化，应中立地称为「低 momentum 高古层」。',
    en: '<b>The "forgotten" label is arbitrary</b> — Ōta and Edogawa were already high-density "mature suburbs." Calling them "forgotten" is unnecessary narrative; "low-momentum, high-old-layer" is the more neutral name.',
  },
  'cross.redteam.li5': {
    ja: '<b>causation ≠ correlation</b>——r=+0.86 は「塔が人を呼ぶ」とも「人が塔を建てる」とも、「両者が共通の第三因子（駅近・再開発計画）の結果」とも読める。',
    zh: '<b>causation ≠ correlation</b>——r=+0.86 既可读为「塔召唤人」，亦可为「人建造塔」，或两者皆为某共同第三因素（车站接近 · 再开发规划）之结果。',
    en: '<b>Causation ≠ correlation</b> — r=+0.86 reads equally well as "towers attract people," "people build towers," or "both are downstream of a common third factor (station proximity, redevelopment plans)."',
  },

  'cross.colophon.super': { ja: '出典', zh: '出处', en: 'SOURCES' },
  'cross.colophon.h2':    { ja: 'データ と 手 法', zh: '数据 与 方 法', en: 'DATA & METHOD' },
  'cross.colophon.body': {
    ja: '<b>Tokyo Strata</b>: PLATEAU 2023–24 CityGML, 22 区, 290 万棟（form classification by 耐火構造 × 高度）<br><b>UpgradeMap</b>: reinfolib 成交价 + e-Stat 人口統計, 23 区<br><b>交差</b>: 22 区（台東は Strata 未収）<br><b>手法</b>: Pearson 相関 + threshold 分類',
    zh: '<b>Tokyo Strata</b>：PLATEAU 2023–24 CityGML，22 区，290 万栋（form classification by 耐火结构 × 高度）<br><b>UpgradeMap</b>：reinfolib 成交价 + e-Stat 人口统计，23 区<br><b>交叉</b>：22 区（台东未收入 Strata）<br><b>手法</b>：Pearson 相关 + threshold 分类',
    en: '<b>Tokyo Strata</b>: PLATEAU 2023–24 CityGML, 22 wards, 2.9M buildings (form classification: fire-resistance × height)<br><b>UpgradeMap</b>: reinfolib transaction prices + e-Stat population statistics, 23 wards<br><b>Cross</b>: 22 wards (Taitō not in Strata)<br><b>Method</b>: Pearson correlation + threshold classification',
  },
  'cross.colophon.small1': {
    ja: '詳細: <a href="https://github.com/...">cross-report.md</a> · <a href="./data/cross.json">cross.json</a> · <a href="./tokyo-strata.pdf">PDF</a>',
    zh: '详细：<a href="https://github.com/...">cross-report.md</a> · <a href="./data/cross.json">cross.json</a> · <a href="./tokyo-strata.pdf">PDF</a>',
    en: 'Details: <a href="https://github.com/...">cross-report.md</a> · <a href="./data/cross.json">cross.json</a> · <a href="./tokyo-strata.pdf">PDF</a>',
  },
  'cross.colophon.small2': {
    ja: '<a href="/">主編集 →</a> · <a href="/about">about</a> · <a href="/explore">explore</a> · <a href="https://upgrademap.vercel.app/" target="_blank">UpgradeMap →</a>',
    zh: '<a href="/">主编辑 →</a> · <a href="/about">about</a> · <a href="/explore">explore</a> · <a href="https://upgrademap.vercel.app/" target="_blank">UpgradeMap →</a>',
    en: '<a href="/">main edit →</a> · <a href="/about">about</a> · <a href="/explore">explore</a> · <a href="https://upgrademap.vercel.app/" target="_blank">UpgradeMap →</a>',
  },

  // ============================================================
  // EXPLORE
  // ============================================================
  'explore.title': {
    ja: 'Tokyo Strata · 東京 22 区 EXPLORE',
    zh: 'Tokyo Strata · 东京 22 区 EXPLORE',
    en: 'Tokyo Strata · 22 Wards · EXPLORE',
  },
  'explore.meta.description': {
    ja: '東京 22 区 290 万棟の建築物を耐火構造×高度の二軸で可視化した都市考古地図。自由探索モード。',
    zh: '将东京 22 区 290 万栋建筑物以耐火结构 × 高度二轴可视化的都市考古地图。自由探索模式。',
    en: 'A free-explore urban-archaeology map of 2.9M buildings across Tokyo’s 22 wards, visualized by fire-resistance × height.',
  },
  'explore.title.label': { ja: 'TOKYO STRATA', zh: 'TOKYO STRATA', en: 'TOKYO STRATA' },
  'explore.title.b': {
    ja: '東京 22 区 形態地層',
    zh: '东京 22 区 形态地层',
    en: '22 Wards · Morphological Strata',
  },
  'explore.subtitle': {
    ja: '耐火構造と高度の組み合わせから、東京の地層を読み解く。朽葉が古層、月白が現代層。',
    zh: '由耐火结构与高度的组合，读解东京之地层。朽叶为古层，月白为现代层。',
    en: 'Read Tokyo’s strata from the pairing of fire-resistance and height. Kuchiba is the old layer; tsukishiro the modern.',
  },
  'explore.count.html': {
    ja: '<b>290 万棟</b><br>PLATEAU 東京 22 区 2023–24<br><span style="font-size:9px;letter-spacing:3px;color:#666;">by Jada Q · 2026</span>',
    zh: '<b>290 万栋</b><br>PLATEAU 东京 22 区 2023–24<br><span style="font-size:9px;letter-spacing:3px;color:#666;">by Jada Q · 2026</span>',
    en: '<b>2.9M buildings</b><br>PLATEAU · Tokyo 22 wards · 2023–24<br><span style="font-size:9px;letter-spacing:3px;color:#666;">by Jada Q · 2026</span>',
  },

};
