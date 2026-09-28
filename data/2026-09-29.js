window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-29",
    weekday: "星期二",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-09-29 07:40",
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
    ] }
  ]
}
