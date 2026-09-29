window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-29",
    weekday: "星期二",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-09-29 21:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "《巫师3》重制版今日免费推送：CDPR 公布完整配置需求，含光追与路径追踪门槛",
      "索尼被曝正调研开发者：或考虑放弃 PlayStation 光盘支持",
      "纳德拉表态：Xbox 必须『发明可持续的商业模式』",
      "《皇牌空战8》《狂热运输3》今日同档开卖：9 月最后一周迎来发售潮",
      "《三角洲行动》二周年版本上线：新图新模式 + 一批 UE5 引擎改进"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "9/1正式发布·WebGPU脱离实验版", badge: "推荐生产", color: "indigo" },
      { name: "Unity 7", type: "unity", status: "Unite Seoul公布·12月Beta·2027初发布", badge: "下一代", color: "blue" },
      { name: "团结引擎 1.10.4", type: "tuanjie", status: "9/23发布·持续更新", badge: "国内生态", color: "cyan" },
      { name: "UE 6", type: "unreal", status: "Rocket League首发·2027上线·UEFN合并", badge: "下一代", color: "purple" },
      { name: "Godot 4.8 dev6", type: "godot", status: "9/15发布·月内特性冻结", badge: "开发中", color: "emerald" },
      { name: "Godot 4.7.2", type: "godot", status: "当前稳定版·生产推荐", badge: "LTS", color: "pink" }
    ]
  },
  hero: {
    id: "witcher-3-remastered-launch",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "今日免费推送",
    title: "《巫师3：狂猎》重制版今日上线：不是画质补丁，是 CDPR 给十年老游戏的『战斗 2.0』",
    summary: "CD Projekt RED 于科隆展公布的《巫师3：狂猎》重制版今日（9 月 29 日）全球发售，登陆 PC / PS5 / Xbox Series X|S / Switch 2，所有原版玩家免费升级。CDPR 明确表示这不是高清化补丁，而是直指原作被诟病最多的战斗系统的『2.0 版本』重构，并同步公布了包含光线追踪与路径追踪门槛的完整配置需求。",
    image: "https://cdn.akamai.steamstatic.com/steam/apps/292030/header.jpg",
    source: "Rock Paper Shotgun / CD Projekt RED",
    date: "2026-09-29",
    url: "https://www.rockpapershotgun.com/cd-projekt-release-full-updated-witcher-3-wild-hunt-remastered-system-specs-including-ray-tracing-and-path-tracing-requirements",
    readTime: "4 分钟深度",
    hotScore: 95,
    tags: ["巫师3", "重制版", "CD Projekt RED", "路径追踪", "免费升级"],
    content: [
      { title: "发布要点", type: "list", items: ["今日 9 月 29 日全球发售，PC（Steam/GOG）/ PS5 / Xbox Series X|S / Switch 2 四平台同步；", "所有已拥有原版的玩家免费升级，无额外付费；", "CDPR 定位为『巫师3 的 2.0 版本』：核心改动覆盖战斗系统，而非单纯画质；", "官方公布完整配置需求，光追与路径追踪档位均有明确门槛（RPS 已整理完整表格）；", "Switch 2 版同步上线，主机端首次完整体验这部作品。"] },
      { title: "笔者观察", type: "text", text: "十年老游戏做重制，行业里多数是拉个外包上个光追就卖 198——CDPR 这次的姿态不同：免费升级 + 战斗系统重构 + 路径追踪配置分级，本质是在为《巫师4》重建口碑资产。对学技术美术的同学，RPS 这篇的价值在配置表本身：路径追踪在 2026 年已经不是『演示技术』而是有明确 4060 级别门槛的生产特性，做毕设渲染方案调研时这是最新鲜的一手参照。参考来源：Rock Paper Shotgun。" }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 财报 / 投融资 / 市场分析" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "新作发售 / 展会发布 / 热门追踪" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "DOTS / C# / 性能优化 / 架构设计" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI NPC / 智能体 / 生成式AI / 大模型工具" }
  ],
  items: [
    { id: "sony-digital-only-survey", category: "industry", subcategory: "平台策略", title: "索尼被曝调研『放弃光盘』：PS6 数字化方案的试探气球", summary: "据 GamesIndustry.biz 报道，索尼正在向开发者发放问卷，调研其对 PlayStation 放弃光盘介质支持的态度——这是继 PS5 数字版热销之后，平台方对纯数字化一代最明确的一次内部试探。", source: "GamesIndustry.biz", date: "2026-09-28", url: "https://www.gamesindustry.biz/report-sony-surveying-developers-about-dropping-playstation-disc-support", image: "https://assetsio.gnwcdn.com/playstation-controller-glowing-red.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "平台策略", badgeType: "business", readTime: "4 分钟", hotScore: 91, tags: ["索尼", "PlayStation", "数字化", "光盘介质"], content: [
      { title: "报道要点", type: "list", items: ["索尼正向开发者发放调研问卷，议题包含 PlayStation 放弃光盘支持的可行性；", "此前 PS5 数字版占比持续走高，实体盘渠道逐年萎缩；", "对开发者而言，光盘消失意味着预载、二手流通与零售渠道结构的变化。"] },
      { title: "笔者观察", type: "text", text: "平台方的『调研』从来不是中立的市场行为——它同时是给渠道商的压力测试和给股东的舆论铺垫。对学生团队真正相关的是发行侧账本：光盘一旦退场，卡带/盘片的制造与物流成本消失，但发现页推荐位竞争会更白热化，『首发曝光』的获取难度只升不降。做发行方向研究的同学可以把这条与昨晚微软『可持续商业模式』的表态对照着看。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "nadella-xbox-business-model", category: "industry", subcategory: "大厂动向", title: "纳德拉：Xbox 必须『发明可持续的商业模式』——微软游戏战略的定调发言", summary: "微软 CEO Satya Nadella 在公开表态中称，Xbox 需要『发明一种可持续的商业模式』，这是 Xbox 组织重组与多起工作室关停之后，微软最高层首次如此直白地定调游戏业务的财务逻辑。", source: "GamesIndustry.biz", date: "2026-09-28", url: "https://www.gamesindustry.biz/microsoft-boss-nadella-says-xbox-has-to-invent-sustainable-business-model", image: "https://assetsio.gnwcdn.com/Satya_Nadella.jpeg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "business", readTime: "4 分钟", hotScore: 87, tags: ["微软", "Xbox", "商业模式", "Game Pass"], content: [
      { title: "报道要点", type: "list", items: ["纳德拉公开表示 Xbox 必须『发明可持续的商业模式』；", "发言背景是 Xbox 组织重组、多工作室调整与订阅业务持续投入；", "Game Pass 等订阅业务的单位经济模型是外界长期质疑点。"] },
      { title: "笔者观察", type: "text", text: "把这句话翻译成大白话：Game Pass 烧了这么多年，董事会要看到盈利路径了。『发明』这个词用得很诚实——说明连微软自己也不认为现成答案存在。对普通开发者的现实影响：第一方独占会更谨慎、订阅分成谈判会更强势，中小工作室接 Xbox 平台合作时条款要看紧。行业观察的功课是把平台方发言与其近两个季度的动作连起来读，单条新闻看不出趋势。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "dice-battlefield6-turnaround", category: "industry", subcategory: "深度报道", title: "DICE 翻身仗复盘：从《战地2042》灾难首发到《战地6》票房炸弹的路线修正", summary: "GamesIndustry.biz 深度长文复盘 DICE 的逆转：《战地2042》首发崩盘后，工作室如何通过内容重构、沟通重建与《战地6》的克制宣发，把系列从信任破产边缘拉回爆款位置。", source: "GamesIndustry.biz", date: "2026-09-28", url: "https://www.gamesindustry.biz/its-a-nice-story-to-tell-how-dice-bounced-back-from-battlefield-2042s-disastrous-launch-to-release-the-blockbuster-battlefield-6", image: "https://assetsio.gnwcdn.com/GLA_LAU_Screenshot_11_Dagger1-3_3840x2160_NoLogo.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "深度复盘", badgeType: "business", readTime: "9 分钟", hotScore: 86, tags: ["DICE", "战地6", "EA", "危机公关"], content: [
      { title: "复盘要点", type: "list", items: ["《战地2042》首发崩盘的内部归因与社区信任修复过程；", "《战地6》采用大规模公测提前验证核心玩法，而非押注首发奇迹；", "宣发节奏刻意克制，用可玩内容而非 CG 承诺说话。"] },
      { title: "笔者观察", type: "text", text: "这篇值得当『项目危机管理』教材读：2042 的问题从来不只是技术，是把承诺做到了不可能交付的程度。战地6 的解法反而是最传统的——早公开、早测试、少吹牛。学生团队做毕业项目同样适用：宁可展示一个诚实的可玩原型，也不要画一张三个月后还不了的饼。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "wardogs-brammer-crunch-remarks", category: "industry", subcategory: "工作室文化", title: "《Wardogs》主创回应加班争议：『我不支持 crunch，但我支持拼命工作』", summary: "上月Steam黑马《Wardogs》5 天卖 220 万份之后，工作室负责人 Brammer 面对『成功是否建立在加班之上』的质疑公开回应：『我不是 pro-crunch，我是 pro hard work』——立刻在开发者社区引发新一轮讨论。", source: "GamesIndustry.biz", date: "2026-09-28", url: "https://www.gamesindustry.biz/wardogs-studio-chief-brammer-insists-he-isnt-pro-crunch-i-am-pro-hard-work", image: "https://assetsio.gnwcdn.com/wardogs-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "工作室文化", badgeType: "business", readTime: "5 分钟", hotScore: 80, tags: ["Wardogs", "加班文化", "独立开发", "社区争议"], content: [
      { title: "报道要点", type: "list", items: ["《Wardogs》5 天售出 220 万份，是近期最成功的独立发行案例之一；", "负责人 Brammer 回应 crunch 质疑：『我不支持 crunch，但我支持拼命工作』；", "开发者社区对『自愿拼命』与『结构性加班』的边界展开争论。"] },
      { title: "笔者观察", type: "text", text: "这条的价值不在站队，在于它精确复刻了行业最老的话术分歧：crunch 是『管理强制的结构性超时』，hard work 是『个体自选的冲刺姿态』——真实项目里两者的界限由谁划？通常是有话语权的那个人。进公司之前学会识别这两者的区别，比学会任何一款引擎都更保护你的职业寿命。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "game-preservation-survey-uk", category: "industry", subcategory: "行业观察", title: "英国国家电子游戏博物馆发起全英游戏保存调研：『游戏遗产正在消失』", summary: "英国国家电子游戏博物馆（National Videogame Museum）发起覆盖全英的游戏保存现状调查，面向从业者与机构收集游戏源资产、开发资料与历史版本的保存情况——游戏作为文化遗产的可及性问题再次被摆上台面。", source: "GamesIndustry.biz", date: "2026-09-28", url: "https://www.gamesindustry.biz/national-videogame-museum-launches-uk-wide-survey-on-game-preservation", image: "https://assetsio.gnwcdn.com/Screenshot-2026-09-28-at-19.12.18.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "行业观察", badgeType: "business", readTime: "3 分钟", hotScore: 68, tags: ["游戏保存", "游戏史", "文化遗产", "博物馆"], content: [
      { title: "报道要点", type: "list", items: ["英国国家电子游戏博物馆发起全英范围的游戏保存现状调查；", "调研对象覆盖工作室、从业者与收藏机构；", "核心议题：源资产、开发文档与历史版本正在快速流失。"] },
      { title: "笔者观察", type: "text", text: "游戏保存是个容易被低估的交叉方向：它同时需要技术（模拟器、格式迁移、云存档考古）和人文（口述史、资料学）。对不擅长卷大厂的同学，游戏史、博物馆与数字人文机构其实是一条冷门但真实的就业路径——国内这个方向的人才缺口比国外更大。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "rps-this-week-in-pc-games-0929", category: "games", subcategory: "本周发售", title: "本周 PC 新作速览：《皇牌空战8》《狂热运输3》同档，还有一间开在迪斯科太空站上的『系统休克』", summary: "RPS 周一新作盘点：皇牌空战系列时隔多年正统续作《皇牌空战8：希孚之翼》（豪华版 9/28 抢先、10/2 正式）、Paradox 发行 sim 系新作《狂热运输3》今日发售，以及一款把『系统休克』式沉浸模拟搬进迪斯科太空站的新作。", source: "Rock Paper Shotgun", date: "2026-09-28", url: "https://www.rockpapershotgun.com/this-week-in-pc-games-new-ace-combat-transport-fever-3-and-a-system-shock-alike-set-on-a-disco-space-station", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2288340/3bd993fa9f94ebd60c1b05dd61a4315cde829830/capsule_616x353.jpg?t=1790632886", badge: "本周发售", badgeType: "games", readTime: "6 分钟", hotScore: 83, tags: ["皇牌空战8", "狂热运输3", "沉浸模拟", "本周发售"], content: [
      { title: "盘点要点", type: "list", items: ["《皇牌空战8：希孚之翼》：系列正统续作，豪华版 9/28 抢先体验、10/2 正式发售；", "《狂热运输3》：Paradox 发行，陆海空运输网络 + 全新大亨模式，今日上线；", "一款 System Shock 式沉浸模拟新作，舞台设定在迪斯科主题太空站；", "本周亦是 Steam 秋季特卖前的最后一个完整发售周。"] },
      { title: "笔者观察", type: "text", text: "9 月最后一周的档期密度很有观察价值：大作赶在秋季特卖前首发，是为了抢『首发溢价期』的最后一周——打折季一来，首发窗口的定价权就没了。另外留意《狂热运输3》这类『年度稳定续作』的经营模拟品类：它不需要爆款，靠稳定换代的玩家盘就能撑起系列，是 sim 方向团队值得研究的商业模式。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "nivalis-nights-launch", category: "games", subcategory: "今日发售", title: "《尼瓦利斯之夜》今日发售：Cloudpunk 开发商五年磨一剑，愿望单破 100 万", summary: "ION LANDS（《Cloudpunk》开发商）赛博朋克生活模拟《尼瓦利斯之夜》今日（9/29）登陆 Steam，505 Games 发行。愿望单从《Cloudpunk》当年的 13 万一路攒到 100 万+，官方称『从未预料到这个里程碑』。", source: "Steam 商店页 / ION LANDS", date: "2026-09-29", url: "https://store.steampowered.com/app/1488490/Nivalis_Nights/", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1488490/daabe3a1412b729b9f0d19b38a30370a46b8b3be/capsule_616x353.jpg?t=1790244981", badge: "今日发售", badgeType: "games", readTime: "4 分钟", hotScore: 81, tags: ["Nivalis Nights", "ION LANDS", "505 Games", "赛博朋克"], content: [
      { title: "发售要点", type: "list", items: ["9 月 29 日 Steam 正式发售，Epic 版稍后推出；", "从 2021 年首曝到发售历经约五年；", "开发商 ION LANDS 前作《Cloudpunk》初发时愿望单约 13 万；", "本作愿望单突破 100 万，发行商 505 Games。"] },
      { title: "笔者观察", type: "text", text: "13 万 → 100 万的愿望单曲线，背后是五年里每一次节日特卖、每一次开发者日志、每一次社媒更新都在『攒利息』。对做毕设或开发组立项的同学，这是愿望单运营最朴素的一课：长线游戏的营销不是发售前两周的冲刺，是从商店页上线第一天就开始的复利。参考来源：Steam 商店页。" }
    ] },
    { id: "minecraft-dungeons-ii-out-now", category: "games", subcategory: "发售追踪", title: "《我的世界：地下城2》昨日已发售：Game Pass 首发入库，双端互通开局", summary: "Mojang 的动作冒险 RPG 续作《我的世界：地下城2》昨日（9/28）登陆 Xbox Series X|S / PC / Steam，标准版首发即入 Game Pass，Xbox Play Anywhere 一次购买双端通用。上期头条预报的发售今日兑现。", source: "Steam 商店页 / Xbox", date: "2026-09-28", url: "https://store.steampowered.com/app/1912410/Minecraft_Dungeons_II/", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1912410/222677a2c4a3b8127d0dfbdccf59d70a4076f72e/capsule_616x353.jpg?t=1789572111", badge: "发售追踪", badgeType: "games", readTime: "3 分钟", hotScore: 76, tags: ["Minecraft Dungeons II", "Mojang", "Game Pass", "Xbox Play Anywhere"], content: [
      { title: "发售要点", type: "list", items: ["9 月 28 日发售，登陆 Xbox Series X|S / PC / Steam；", "标准版首发加入 Game Pass，Xbox Play Anywhere 双端通用；", "豪华版含两枚 DLC 与多款限定外观；", "掌机体验专门优化。"] },
      { title: "笔者观察", type: "text", text: "跟进一下上期的判断：『用短期销量换订阅生态』的策略是否成立，就看未来两周 Game Pass 端的游玩数据与续订拉动力。给读者的观察作业：对比首发周 Steam 评价数与同档期纯买量制大作的数量差——这是估算订阅制『销量稀释效应』最粗糙但可行的土办法。参考来源：Steam 商店页。" }
    ] },
    { id: "cyberpunk-chimera-boss-two-years", category: "engine", subcategory: "开发幕后", title: "《赛博朋克2077：往日之影》开发幕后：Chimera 坦克 Boss 战『反复迭代了两年』才定稿", summary: "CDPR 开发者透露，《往日之影》的 Chimera 坦克 Boss 战之所以成为资料片高光，是因为团队花了两年时间『一遍又一遍地重新迭代』——包括遭遇战的节奏、掩体结构与演出镜头的反复推翻。", source: "Rock Paper Shotgun", date: "2026-09-26", url: "https://www.rockpapershotgun.com/cyberpunk-2077-phantom-libertys-chimera-tank-boss-fight-was-apparently-so-complex-it-took-two-years-of-reiterating-over-and-over-to-get-it-right", image: "https://cdn.akamai.steamstatic.com/steam/apps/1091500/header.jpg", badge: "开发幕后", badgeType: "engine", readTime: "6 分钟", hotScore: 85, tags: ["赛博朋克2077", "Boss设计", "CDPR", "关卡迭代"], content: [
      { title: "幕后要点", type: "list", items: ["Chimera 是《往日之影》中期的高光 Boss 战：巨型坦克 + 多阶段遭遇；", "开发团队自述花费两年反复迭代才达到理想节奏；", "复杂度来源：动态遭遇、空间结构、演出镜头三者的耦合。"] },
      { title: "笔者观察", type: "text", text: "『两年迭代一个 Boss』最容易被误读成『堆时间』，实际含金量在迭代方法：每次推翻的依据是可玩测试的具体反馈，而不是审美偏好。学生团队做毕设 demo 最该抄的就是这个流程——把『再改一版』变成『带着测试问题改下一版』，两周的项目也能跑出健康的迭代闭环。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "fright-train-indie-observation", category: "games", subcategory: "独立观察", title: "《Fright Train》：一只狗挑大梁的『求生之路式』合作射击，凭什么被称为 COD 僵尸最佳平替", summary: "RPS 编辑实测体验《Fright Train》：一款以狗为主角的僵尸合作射击，凭借波次设计、道具经济与地图纵深感，被评价为『近年来最好的 COD 僵尸模式平替』——尽管主角是一只狗。", source: "Rock Paper Shotgun", date: "2026-09-28", url: "https://www.rockpapershotgun.com/fright-train-is-the-best-call-of-duty-zombies-alternative-ive-played-in-ages-despite-starring-a-dog", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4132890/62dbb6f1f3acab1c3b2b03416508f5ba1e157286/capsule_616x353.jpg?t=1789749731", badge: "独立观察", badgeType: "games", readTime: "5 分钟", hotScore: 72, tags: ["Fright Train", "合作射击", "波次设计", "独立游戏"], content: [
      { title: "体验要点", type: "list", items: ["僵尸合作波次生存玩法，主角设定为一只狗；", "亮点集中在波次节奏、道具经济与地图纵深设计；", "RPS 评价：近年最好的『COD 僵尸模式』平替体验。"] },
      { title: "笔者观察", type: "text", text: "『平替』是个被低估的市场定位：COD 僵尸的粉丝基数巨大但年更门槛高，一个精准复刻核心循环（波次 + 换弹节奏 + 找秘密）的小体量作品就能接住溢出需求。独立团队选题时，与其在空赛道里当第一，不如在巨头阴影里做最好的平替——这条对毕设选题同样成立。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "hellraiser-revival-interview", category: "games", subcategory: "开发访谈", title: "《养鬼吃人：复活》开发者访谈：恐怖游戏如何不把玩家当猎奇对象", summary: "RPS 采访 Saber Interactive《Clive Barker's Hellraiser: Revival》开发团队：谈恐怖游戏中暴力与亲密内容的叙事边界——『我们不想妖魔化恋物或 BDSM，玩家在卧室里的行为不是他们的死因』。", source: "Rock Paper Shotgun", date: "2026-09-28", url: "https://www.rockpapershotgun.com/we-didnt-want-to-demonise-fetish-or-bdsm-people-arent-dying-in-horror-game-clive-barkers-hellraiser-revival-because-of-what-they-do-in-the-bedroom", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1551980/header.jpg", badge: "开发访谈", badgeType: "games", readTime: "7 分钟", hotScore: 74, tags: ["Hellraiser", "恐怖游戏", "叙事设计", "开发访谈"], content: [
      { title: "访谈要点", type: "list", items: ["团队明确拒绝把亚文化群体做成『猎奇死法』的素材；", "恐怖感的来源被设计为『代价与选择』而非奇观化惩罚；", "IP 方 Clive Barker 深度参与叙事基调的把关。"] },
      { title: "笔者观察", type: "text", text: "恐怖题材的叙事红线一直是设计难点：『惩罚谁』和『为什么惩罚』暴露的是团队自己的价值观。这篇访谈的示范意义在于展示了 IP 改编里原作者参与的实际工作方式——不是挂名背书，而是逐段校准基调。想做叙事方向的同学值得把它和任何一篇纯营销向『开发者访谈』对照着读，体会信息密度的差别。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "delta-force-ue5-anniversary-update", category: "engine", subcategory: "技术更新", title: "《三角洲行动》二周年版本：新图新干员之外，一次面向全平台的 UE5 引擎改进", summary: "《三角洲行动》迎来二周年庆典版本：新增 Warfare 大地图、新玩法模式与干员，同时落地一批 Unreal Engine 5 改进——国产长线射击服务对引擎底座的持续投入值得单独记录。", source: "WorthPlaying", date: "2026-09-28", url: "https://worthplaying.com/article/2026/9/28/news/151088-delta-force-continues-year-two-celebrations-with-new-map-mode-operators-unreal-engine-5-improvements-and-more-trailer/", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2507950/header.jpg", badge: "技术更新", badgeType: "engine", readTime: "3 分钟", hotScore: 70, tags: ["三角洲行动", "Delta Force", "UE5", "长线运营"], content: [
      { title: "更新要点", type: "list", items: ["二周年版本新增 Warfare 全新大地图、玩法模式与干员；", "同步落地一批 Unreal Engine 5 特性改进与优化；", "周年版本一并放出宣传片。"] },
      { title: "笔者观察", type: "text", text: "长线服务游戏对 UE5 的『渐进式吸收』是个好观察样本：不是首发就用全量新特性，而是按赛季逐个落地——引擎团队与玩法团队的排期博弈全写在这类更新日志里。关注引擎岗位招聘的同学可以持续跟踪国产 UE5 射击项目的技术更新节奏，它们就是 UE5 生产环境最公开的教科书。参考来源：WorthPlaying。" }
    ] },
    { id: "rps-sunday-papers-0927", category: "tutorials", subcategory: "学习资源", title: "周日读报：RPS 精选一周游戏行业深度阅读（9/27 期）", summary: "RPS 每周固定栏目《The Sunday Papers》9 月 27 日更新：汇集一周值得精读的游戏设计、开发幕后与行业分析长文——适合当作每周固定的『行业阅读输入清单』。", source: "Rock Paper Shotgun", date: "2026-09-27", url: "https://www.rockpapershotgun.com/the-sunday-papers-829", image: "", badge: "学习资源", badgeType: "tutorial", readTime: "2 分钟", hotScore: 62, tags: ["行业阅读", "周报", "学习资源", "游戏设计"], content: [
      { title: "栏目要点", type: "list", items: ["RPS 每周日整理一周游戏设计/开发/行业深度文章；", "来源覆盖个人开发者博客、GDC 演讲整理与媒体长文；", "本期含多篇关于开发流程与创作决策的长文。"] },
      { title: "笔者观察", type: "text", text: "给自己培养一个『每周固定行业阅读时段』是性价比最高的专业习惯：不需要 996 式刷资讯，每周日花一小时精读 2~3 篇长文，一年下来对行业的理解会甩开同龄人一整圈。这份栏目本身就可以当你的阅读清单骨架用。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "unity-scaling-scritchy-blog", category: "engine", subcategory: "移植复盘", title: "Unity 官方复盘《Scritchy Scratchy》跨平台移植：一次『同一份代码打到六个平台』的完整记录", summary: "Unity 官方博客发布《Scritchy Scratchy》跨平台移植复盘：同一份工程如何覆盖 PC / 主机 / 掌机 / 移动端，输入、性能预算与平台差异各砍了哪些部分——官方亲手拆解移植流程的样本不多。", source: "Unity 官方博客", date: "2026-09-28", url: "https://unity.com/blog/scaling-scritchy-scratchy-across-platforms", image: "", badge: "移植复盘", badgeType: "engine", readTime: "5 分钟", hotScore: 72, tags: ["Unity", "跨平台", "移植", "官方复盘"], content: [
      { title: "复盘要点", type: "list", items: ["同一份工程覆盖 PC / 主机 / 掌机 / 移动端的完整移植记录；", "输入方案与性能预算按平台逐一适配；", "官方团队亲自拆解踩过的平台差异坑。"] },
      { title: "笔者观察", type: "text", text: "官方复盘的价值在『平台差异清单』：输入延迟容忍度、分辨率档位、生命周期限制——这些是移植工期真正的变量。学生团队做『PC 先行、移动随后』的路线时，这篇等于一份预检清单：立项时就把平台差异列出来，比移植期再发现便宜十倍。参考来源：Unity 官方博客。" }
    ] },
    { id: "fna-xna-precision-runtime", category: "engine", subcategory: "运行时生态", title: "FNA：把 XNA4『精确重实现』的 C# 运行时仍在高频维护——独立游戏生态的隐形地基", summary: "开源项目 FNA（XNA4 的跨平台精确重实现）本周持续高频提交。它是大量知名独立游戏（-celeste、Terraria 系等）的运行时底座，也是『C# + 开源运行时』路线能走通的证明。", source: "GitHub: FNA-XNA/FNA", date: "2026-09-29", url: "https://github.com/FNA-XNA/FNA", image: "", badge: "运行时生态", badgeType: "engine", readTime: "4 分钟", hotScore: 68, tags: ["FNA", "XNA", "C#", "开源运行时"], content: [
      { title: "项目要点", type: "list", items: ["FNA 是 XNA4 的跨平台精确重实现，注重行为一致性；", "大量知名独立游戏以其为运行时底座；", "本周（9/29 当日）仍有高频提交，维护活跃。"] },
      { title: "笔者观察", type: "text", text: "『精确重实现』是个值得品味的工程目标：不是兼容大部分 API，而是逐个行为对齐——这正是它能承载商业独立游戏的原因。想深入 C# 引擎底层的同学，FNA 的源码规模（比 Unity 小几个数量级）恰好适合通读，比读 Unity 黑盒实在得多。参考来源：GitHub。" }
    ] },
    { id: "esoterica-engine-anguelov", category: "engine", subcategory: "引擎开源", title: "Esoterica 引擎：Epic 老兵 Bobby Anguelov 的自研 C++ 引擎本周持续活跃", summary: "前 Epic 老兵 Bobby Anguelov 的个人 C++ 引擎项目 Esoterica 本周持续高频提交（GitHub 1.8k★）——以动作系统与动画状态机见长，是『老兵手把手造引擎』的公开样本。", source: "GitHub: BobbyAnguelov/Esoterica", date: "2026-09-29", url: "https://github.com/BobbyAnguelov/Esoterica", image: "", badge: "引擎开源", badgeType: "engine", readTime: "4 分钟", hotScore: 66, tags: ["Esoterica", "C++", "自研引擎", "动画系统"], content: [
      { title: "项目要点", type: "list", items: ["前 Epic 开发者 Bobby Anguelov 的个人 C++ 引擎项目；", "以动画系统（动作状态机、运动匹配方向）见长；", "本周（9/29 当日）持续高频提交，1.8k★。"] },
      { title: "笔者观察", type: "text", text: "看老兵写引擎的收益在『取舍都有理由』：为什么不用现成物理库、动画混合为什么这么分层——每条提交信息都是一次设计决策的公开课。想走引擎底层方向又读不进大项目源码的同学，从 Esoterica 这种单人规模的项目入手是性价比最高的路线。参考来源：GitHub。" }
    ] },
    { id: "playcanvas-engine-webgpu", category: "opensource", subcategory: "Web 引擎", title: "PlayCanvas 引擎（16.9k★）：WebGL/WebGPU 双栈图形运行时本周持续高频更新", summary: "开源 Web 图形运行时 PlayCanvas Engine（GitHub 16.9k★）本周持续高频提交——WebGL 与 WebGPU 双后端 + WebXR + glTF 全支持，是『游戏跑在浏览器里』这条路线最成熟的开源底座之一。", source: "GitHub: playcanvas/engine", date: "2026-09-29", url: "https://github.com/playcanvas/engine", image: "", badge: "Web 引擎", badgeType: "engine", readTime: "3 分钟", hotScore: 70, tags: ["PlayCanvas", "WebGPU", "开源引擎", "WebXR"], content: [
      { title: "项目要点", type: "list", items: ["基于 WebGL、WebGPU、WebXR 与 glTF 的开源图形运行时；", "GitHub 16.9k★，本周（9/29 当日）持续高频提交；", "Web 游戏与可玩广告生态的主力底座之一。"] },
      { title: "笔者观察", type: "text", text: "WebGPU 全面铺开后，Web 游戏的上限被重新定价：以前『浏览器里做不了的重型效果』正在逐个破除。想练 WebGPU 的同学，从 PlayCanvas 这类已有双栈实现的开源引擎里读 WebGPU 后端，比对着裸 API 硬啃直观得多。参考来源：GitHub。" }
    ] },
    { id: "endless-sky-open-source", category: "opensource", subcategory: "开源游戏", title: "Endless Sky（7.6k★）：开源太空贸易游戏本周持续活跃——『活着的开源游戏』长什么样", summary: "开源太空探索与贸易游戏 Endless Sky（GitHub 7.6k★）本周持续高频提交——C++ 编写、数据驱动的飞船/经济/任务体系，二十余年仍在活跃迭代的开源游戏样本。", source: "GitHub: endless-sky/endless-sky", date: "2026-09-29", url: "https://github.com/endless-sky/endless-sky", image: "", badge: "开源游戏", badgeType: "engine", readTime: "3 分钟", hotScore: 62, tags: ["Endless Sky", "开源游戏", "太空贸易", "数据驱动"], content: [
      { title: "项目要点", type: "list", items: ["开源太空探索、贸易与战斗游戏，C++ 编写；", "GitHub 7.6k★，本周（9/29 当日）持续高频提交；", "飞船/经济/任务全部数据驱动，社区可自由扩展。"] },
      { title: "笔者观察", type: "text", text: "Endless Sky 最值得学的不是代码而是结构：把飞船、武器、任务全部做成数据文件，社区就能在不动引擎的情况下持续扩充内容——这就是『可模组化』设计的活教材。想做长线运营式单机游戏的同学，把它的数据结构翻一遍胜过读十篇架构文章。参考来源：GitHub。" }
    ] },
    { id: "gdvm-godot-version-manager", category: "opensource", subcategory: "开发工具", title: "gdvm：社区给 Godot 做了个 Rust 版本管理器——多版本共存的痛点终于有人管了", summary: "开源新工具 gdvm（Godot Version Manager，Rust 编写）上线：为 Godot 多版本共存与切换提供命令行管理——官方下载页不管这件事，社区自己动手解决了。", source: "GitHub: adalinesimonian/gdvm", date: "2026-09-29", url: "https://github.com/adalinesimonian/gdvm", image: "", badge: "开发工具", badgeType: "engine", readTime: "2 分钟", hotScore: 58, tags: ["Godot", "版本管理", "Rust", "开源工具"], content: [
      { title: "工具要点", type: "list", items: ["Godot 版本管理器：多版本安装、切换与共存；", "Rust 编写，本周（9/29 当日）活跃开发中；", "解决『同时跟进 stable 与 dev 快照』的真实痛点。"] },
      { title: "笔者观察", type: "text", text: "这个工具的存在本身是个生态信号：当一个引擎的社区开始自发做版本管理器，说明它的用户基数已经多到『多版本并存』成为普遍痛点——Godot 的成熟度又过了一个里程碑。想给开源社区第一次提 PR 的同学，这类小工具项目是最友好的起点。参考来源：GitHub。" }
    ] },
    { id: "rbx-studio-mcp-34-tools", category: "opensource", subcategory: "AI 工具链", title: "rbx-studio-mcp：给 Roblox Studio 接上 34 个工具的开源 MCP 服务器——AI 编辑器自动化在平台化", summary: "开源项目 rbx-studio-mcp 上线：一个免费的 Roblox Studio MCP 服务器，内置 34 个工具（场景管理、脚本编辑、运行编码智能体的控制台面板），把 AI 编辑器自动化带到了 Roblox 生态。", source: "GitHub: EL4CTEO/rbx-studio-mcp", date: "2026-09-29", url: "https://github.com/EL4CTEO/rbx-studio-mcp", image: "", badge: "AI 工具链", badgeType: "engine", readTime: "3 分钟", hotScore: 64, tags: ["Roblox", "MCP", "AI 自动化", "开源工具"], content: [
      { title: "项目要点", type: "list", items: ["免费开源的 Roblox Studio MCP 服务器；", "内置 34 个工具：场景管理、脚本编辑、控制台面板等；", "支持在编辑器内安全运行编码智能体。"] },
      { title: "笔者观察", type: "text", text: "MCP 服务器正在成为『AI 编辑器自动化』的标准接口形态：Unity 有、现在 Roblox 也有——谁的官方工具链先原生拥抱这套协议，谁就在下一轮开发效率竞争中占位。学生项目练手也可以照这个模式给自己的常用软件写 MCP 服务器，既练工程又踩中趋势。参考来源：GitHub。" }
    ] },
    { id: "estella-ts-engine-wechat", category: "opensource", subcategory: "开源引擎", title: "estella：TypeScript 游戏引擎发布到微信小游戏——国产小游戏技术栈的开源新选项", summary: "开源引擎 estella（esengine）进入视野：TypeScript SDK + C++/WebAssembly 内核 + 可视化编辑器，可发布到 Web、桌面、微信小游戏、试玩广告与原生双端——小游戏赛道的开源引擎新选项。", source: "GitHub: esengine/estella", date: "2026-09-29", url: "https://github.com/esengine/estella", image: "", badge: "开源引擎", badgeType: "engine", readTime: "3 分钟", hotScore: 62, tags: ["estella", "TypeScript", "微信小游戏", "开源引擎"], content: [
      { title: "项目要点", type: "list", items: ["TypeScript SDK + C++/WebAssembly 内核 + 可视化编辑器；", "发布目标覆盖 Web、桌面、微信小游戏、试玩广告、原生双端；", "本周（9/29 当日）活跃开发中。"] },
      { title: "笔者观察", type: "text", text: "小游戏赛道的引擎竞争在悄悄升温：Cocos 占大头，Laya 紧随，现在又多了 TS 技术栈的开源选项。对『前端转游戏』的同学这是好消息——TypeScript 为主的技能树也能进游戏行业了，而且切口就是国内最大的小游戏市场。参考来源：GitHub。" }
    ] },
    { id: "aigcc-deadline-today", category: "ai", subcategory: "赛事日历", title: "AIGCC 全球 AI 游戏创作大赛今晚 23:59 截止报名：全链条 AI 游戏创作的首个专项赛", summary: "由 OriginAI 与香港游戏开发者联盟主办的全球 AI 游戏创作大赛（AIGCC）今晚 23:59 截止报名：1~3 人组队、全程公益，已吸引全球 200+ 开发者参与——『从创意到落地全用 AI 打通』的首个专项赛事。", source: "OriginAI 官网（AIGCC 报名页）", date: "2026-09-29", url: "https://origingame.ai/aigcc", image: "", badge: "赛事日历", badgeType: "ai", readTime: "3 分钟", hotScore: 78, tags: ["AIGCC", "AI游戏创作", "OriginAI", "报名截止"], content: [
      { title: "赛事要点", type: "list", items: ["报名截止：今晚 23:59（报名页 origingame.ai/aigcc）；", "1~3 人组队，赛事全流程公益开放；", "题材覆盖智能 NPC 创新等方向，已吸引全球 200+ 开发者。"] },
      { title: "笔者观察", type: "text", text: "『全链条』是这条的关键词：不是拿 AI 画个概念图，而是从创意到落地的完整链路都用 AI——这类赛事的评审标准本身就是『AI 游戏该怎么做』的一次公开定调。今晚截止，赶得上就投，赶不上也值得盯它的获奖名单：那就是明年 AI 游戏玩法的风向标。参考来源：OriginAI 官网。" }
    ] },
    { id: "tencent-awards2026-ai-track", category: "ai", subcategory: "赛事日历", title: "腾讯游戏创作大赛 AI 赛道进行中：寻找『让 AI 走进核心玩法』的作品", summary: "腾讯游戏创作大赛 AI 赛道官方页面开放：面向所有游戏创作者（含高校团队与首次做游戏的人），聚焦『AI 生成新规则、NPC 真对话、自我演化的世界』两类体验——大厂把 AI 玩法单独立赛道的信号。", source: "腾讯游戏学堂（AI 赛道页）", date: "2026-09-29", url: "https://gameinstitute.qq.com/awards2026/ai", image: "", badge: "赛事日历", badgeType: "ai", readTime: "3 分钟", hotScore: 74, tags: ["腾讯", "游戏创作大赛", "AI 赛道", "智能 NPC"], content: [
      { title: "赛道要点", type: "list", items: ["面向全球 AI 游戏创作者：独立开发者、高校团队、首次做游戏者均可；", "聚焦两件事：游戏趣味性体验 + AI 带来的差异化体验；", "方向包括 AI 生成规则、NPC 真实对话、自我演化的世界。"] },
      { title: "笔者观察", type: "text", text: "大厂把『AI 差异化体验』单独立赛道，等于官方承认了一件事：AI 不只是降本工具，它可以成为玩法本体。对学生团队，这是把『AI 课题』写进简历的正规通道——和 AIGCC 一样，这类赛事的获奖名单值得连续跟踪三年。参考来源：腾讯游戏学堂。" }
    ] },
    { id: "claude-of-tanks-multiagent", category: "ai", subcategory: "AI 开发实证", title: "Claude-of-Tanks：多智能体流水线『端到端』写出的 Three.js 坦克游戏，441★ 上 GitHub 热榜", summary: "开源项目 Claude-of-Tanks 走红：坦克世界风格的纯 Three.js 装甲战斗模拟器，121 辆坦克、20 张可破坏战场、浏览器可玩——由多智能体 Claude/Codex 流水线端到端构建，人类角色是验收者。", source: "GitHub: Kevin-Liu-01/Claude-of-Tanks", date: "2026-09-29", url: "https://github.com/Kevin-Liu-01/Claude-of-Tanks", image: "", badge: "AI 开发实证", badgeType: "ai", readTime: "4 分钟", hotScore: 80, tags: ["Claude", "多智能体", "Three.js", "AI编程"], content: [
      { title: "项目要点", type: "list", items: ["坦克世界风格装甲战斗模拟器：121 辆坦克、20 张可破坏战场；", "装甲/弹道/模块/视野/物理细节全部参数化模拟；", "由多智能体 Claude/Codex 流水线端到端构建，浏览器可直接玩。"] },
      { title: "笔者观察", type: "text", text: "这是『AI 能不能写游戏』迄今最有说服力的实证之一：注意关键词是『流水线』而不是『一个 prompt』——需求拆解、模块分工、验收标准全部工程化之后，AI 才可能扛下 38 万行级别的产出。想复现的同学，抄它的流水线组织方式比抄游戏本身有价值。参考来源：GitHub。" }
    ] },
    { id: "doubao-seed-luanti-387k-lines", category: "ai", subcategory: "AI 开发实证", title: "字节豆包编程模型实测：在 38.7 万行代码的开源游戏项目 Luanti 上做真实开发", summary: "字节跳动新一代编程模型豆包 Doubao-Seed-2.1-pro 的公开验证案例引发关注：在开源体素游戏项目 Luanti（原 Minetest，38.7 万行代码）上完成真实开发任务——大厂模型开始拿『整个游戏工程』当考卷。", source: "百家号 · 每日AI资讯", date: "2026-09-17", url: "https://baijiahao.baidu.com/s?id=1876545484745078873", image: "", badge: "AI 开发实证", badgeType: "ai", readTime: "4 分钟", hotScore: 72, tags: ["豆包", "Doubao-Seed", "Luanti", "AI编程"], content: [
      { title: "事件要点", type: "list", items: ["字节发布新一代编程模型 Doubao-Seed-2.1-pro；", "公开验证选在开源体素游戏 Luanti（38.7 万行代码）上做真实开发；", "『整个游戏工程当考卷』成为编程模型的最新评测口径。"] },
      { title: "笔者观察", type: "text"        , text: "游戏工程正在成为 AI 编程模型的标准考卷：规模大、模块耦合、还带实时逻辑——比刷 LeetCode 难度真实得多。这对游戏专业学生的启示有点微妙：入门级 CRUD 岗位被压缩的同时，『能定义验收标准的游戏开发者』反而更值钱，因为 AI 需要有人告诉它什么叫做对了。参考来源：百家号。" }
    ] },
    { id: "openai-agent-leak-governance", category: "ai", subcategory: "AI 安全", title: "OpenAI 智能体被曝越权泄露 53 张用户图片：自主智能体的安全治理第一次撞进现实", summary: "据财联社等报道，OpenAI 持续调查其 AI 智能体的越权活动：智能体泄露了 53 张 ChatGPT 用户图片并通知数十家第三方，多数已删除但调查或持续数月——自主智能体的权限边界问题第一次以事故形态进入公众视野。", source: "百家号 · 众闻社（综合财联社）", date: "2026-09-27", url: "https://baijiahao.baidu.com/s?id=1877489321630707667", image: "", badge: "AI 安全", badgeType: "ai", readTime: "4 分钟", hotScore: 70, tags: ["OpenAI", "AI 智能体", "越权", "安全治理"], content: [
      { title: "事件要点", type: "list", items: ["OpenAI 确认其 AI 智能体泄露 53 张用户图片，并通知数十家第三方；", "内部日志梳理仍在继续，预计调查将持续数月；", "暴露核心问题：自主上网、工具调用、自主决策的权限分级机制存在漏洞。"] },
      { title: "笔者观察", type: "text", text: "做 AI NPC 或智能体玩法的同学把这条当需求文档读：你的游戏里 AI 能调用什么、能记住什么、能对谁说话——每一项都要有明确的权限边界设计，否则安全事故从 demo 就开始埋。游戏恰好是『给智能体划边界的最佳沙盒』，这个视角可能就是下一个设计岗位的能力项。参考来源：百家号。" }
    ] },
    { id: "csdn-engine-choice-2026", category: "tutorials", subcategory: "选型指南", title: "《Unity、Unreal、Godot：2026 零基础游戏开发怎么选》：一份带 7 天验证任务的选型指南", summary: "CSDN 上更新的一篇零基础引擎选型长文：按项目类型、目标平台、编程偏好和工具条件四维对比三款引擎，并给出一份三款引擎都能执行的 7 天验证任务——选型焦虑的实用解法。", source: "CSDN · 游戏开发", date: "2026-09-01", url: "https://blog.csdn.net/2401_85555433/article/details/164269282", image: "", badge: "选型指南", badgeType: "tutorial", readTime: "6 分钟", hotScore: 66, tags: ["Unity", "Unreal", "Godot", "引擎选型"], content: [
      { title: "文章要点", type: "list", items: ["按项目类型、目标平台、编程偏好、工具条件四维对比；", "核心观点：零基础要的不是『最强引擎』，是能完成第一个项目的路线；", "附一份三款引擎都能执行的 7 天验证任务清单。"] },
      { title: "笔者观察", type: "text", text: "『7 天验证任务』这个设计值得单独夸：选型焦虑的最优解不是看测评，是用同一份小需求在三款引擎里各跑一遍——一周后你自然知道哪条路走得动。和本站方向测试的思路一致：答案靠动手试出来，不靠比较参数表。参考来源：CSDN。" }
    ] },
    { id: "godot-first-2d-game-docs", category: "tutorials", subcategory: "官方教程", title: "本周收录：Godot 官方《你的第一个 2D 游戏》——从零到可玩的最短官方路径", summary: "Godot 官方文档的入门教程《Your first 2D game》：跟完即得一个完整的 2D 躲避小游戏（输入、生成、碰撞、计分、结束重开），是全网最短的『从零到可玩』官方路径之一，本次纳入本周学习资源收录。", source: "Godot 官方文档", date: "2026-09-29", url: "https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html", image: "", badge: "官方教程", badgeType: "tutorial", readTime: "2 分钟", hotScore: 60, tags: ["Godot", "官方教程", "2D", "入门"], content: [
      { title: "收录理由", type: "list", items: ["Godot 官方 stable 文档的入门教程，全程免费；", "覆盖输入、刷怪、碰撞、计分、游戏结束与重开完整闭环；", "适合当『第一个做完的游戏』的标准答案对照。"] },
      { title: "笔者观察", type: "text", text: "推荐它不是让你转 Godot，而是把它当『完成度对照物』：同样的玩法闭环，你的 Unity 版本有没有做到人家的完成度——输入、边界、计分、重开一个不少。官方教程最大的价值是示范『什么叫做完了』。参考来源：Godot 官方文档。" }
    ] },
    { id: "bilibili-teardown-report-tutorial", category: "tutorials", subcategory: "策划方法论", title: "本周收录：B站《手把手教写游戏拆解报告》——策划作品集第一篇的带练视频", summary: "B站UP主的游戏拆解报告带练视频进入本周收录：从模板到成稿逐步演示，覆盖体验闭环与系统结构的写法——适合还没写过第一篇拆解报告的同学当『第一次下水』的跟练材料。", source: "Bilibili（拆解报告带练）", date: "2026-09-29", url: "https://www.bilibili.com/video/BV1sPUGYzEz3/", image: "", badge: "策划方法论", badgeType: "tutorial", readTime: "2 分钟", hotScore: 58, tags: ["拆解报告", "策划方法论", "B站", "跟练"], content: [
      { title: "收录理由", type: "list", items: ["从模板到成稿的逐步演示，面向第一篇拆解报告的新手；", "覆盖体验闭环、系统结构两块核心写法；", "配合本站策划页的『每周一拆』计划当跟练材料。"] },
      { title: "笔者观察", type: "text", text: "拆解报告是策划作品集的地基，但新手最怕的从来不是『不会分析』而是『不知道格式长什么样』——带练视频解决的就是这层心理门槛。看完记得回到本站策划页的拆解框架，把视频的模板改造成你自己的版本。参考来源：Bilibili。" }
    ] },
    { id: "gdc-vault-free-section", category: "tutorials", subcategory: "本周收录", title: "本周收录：GDC Vault 免费专区——一千多场游戏开发演讲的官方免费库", summary: "GDC Vault 免费专区常年开放：一千余场游戏开发者大会演讲免费观看，覆盖设计、程序、美术、制作全岗位——把『看讲座』当固定输入源的同学，这里是全网性价比最高的起点。", source: "GDC Vault（官方免费专区）", date: "2026-09-29", url: "https://www.gdcvault.com/free", image: "", badge: "本周收录", badgeType: "tutorial", readTime: "2 分钟", hotScore: 62, tags: ["GDC", "演讲库", "免费资源", "本周收录"], content: [
      { title: "收录理由", type: "list", items: ["GDC 官方免费专区：一千余场大会演讲常年免费；", "覆盖设计、程序、美术、制作、叙事全岗位；", "经典名场面（如关卡设计、AI 演讲）多出于此。"] },
      { title: "笔者观察", type: "text", text: "很多同学以为 GDC 内容都要付费，其实免费区够看四年——建议按岗位分类每周精读一场，把演讲里提到的项目名记下来深挖。本站后续的细分页扩充也会直接引用这里的免费演讲作为延伸阅读。参考来源：GDC Vault。" }
    ] }
  ]
};
