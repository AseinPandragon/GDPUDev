window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-13",
    weekday: "星期二",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-13 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "Epic 被曝强推『AI 优先』：迪士尼新游团队被告知『不再手写代码』",
      "《矮人要塞》缔造者 Tarn Adams：游戏业最快乐的人讨厌生成式 AI",
      "Nvidia 被曝停产 RTX 5090，产能转向 AI 友好的 RTX Pro",
      "Q3 游戏业并购总额 578 亿美元：EA 550 亿杠杆收购落地",
      "Valve 公开 Steam Frame 头显 CAD 文件，DIY 生态即刻起飞"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "6000.6.5f1 补丁·生产推荐", badge: "推荐生产", color: "indigo" },
      { name: "Unity 6.7 Beta 4", type: "unity", status: "6000.7.0b4·Beta推进中", badge: "测试中", color: "blue" },
      { name: "团结引擎 1.10.4", type: "tuanjie", status: "9/23发布·持续更新", badge: "国内生态", color: "cyan" },
      { name: "UE 6", type: "unreal", status: "Rocket League首发·2027上线·UEFN合并", badge: "下一代", color: "purple" },
      { name: "Bevy 0.20.0", type: "bevy", status: "10/8正式版·Rust ECS", badge: "新版发布", color: "emerald" },
      { name: "Godot 4.7.2", type: "godot", status: "当前稳定版·4.8 dev 冻结中", badge: "LTS", color: "pink" }
    ]
  },
  hero: {
    id: "epic-ai-first-disney",
    category: "ai",
    categoryName: "AI前沿 · 头条",
    tag: "AI 劳资",
    title: "Epic 被曝强推『AI 优先』：迪士尼新游团队被告知『不再手写代码』",
    summary: "据 Rock Paper Shotgun 报道，Epic Games 在延迟一款与迪士尼合作、汇聚 Marvel 与星球大战角色的新射击游戏的同时，向开发团队强推『AI 优先』模式——内部口径包括『不再手写代码』。若属实，这是 3A 引擎大厂首次把 AI 强制写入开发流程的标志性案例。",
    image: "https://assetsio.gnwcdn.com/Screenshot-2026-10-12-231138.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Rock Paper Shotgun / GamesIndustry.biz",
    date: "2026-10-12",
    url: "https://www.gamesindustry.biz/epic-games-delays-disney-game-and-tells-developers-to-go-ai-first",
    readTime: "8 分钟深度",
    hotScore: 96,
    tags: ["Epic Games", "迪士尼", "AI 优先", "劳动"],
    content: [
      { title: "事件要点", type: "list", items: ["据报道，Epic 宣布延迟与迪士尼合作的新射击游戏（汇聚 Marvel 与星战角色）；", "同时向开发团队传达『AI 优先』模式——报道引述内部口径『不再手写代码』；", "若属实，这是大型引擎商首次把 AI 从『辅助选项』升格为『强制流程』。"] },
      { title: "笔者观察", type: "text", text: "把两周的 AI 光谱摆在一起看：威世智工会要求停止 genAI（10-07）、Tarn Adams 讨厌生成式 AI（今日第二条）、堀井雄二 30 分钟用 AI 做游戏（今日第三条）、Capcom 把 AI 写进 RE 引擎管线（10-12）、现在 Epic 直接『AI 优先』——行业正在按『劳动立场』重新站队。给学生的建议朴素但重要：不管站哪边，『会用 AI 的资深手艺人』和『只会 AI 的生成器操作员』是两种命运，前者通吃。参考来源：GamesIndustry.biz / Rock Paper Shotgun。" }
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
    { id: "ai-tarn-adams-genai", category: "ai", subcategory: "AI 观点", title: "『游戏业最快乐的人』讨厌生成式 AI：《矮人要塞》Tarn Adams 的立场", summary: "GamesIndustry.biz 专访《矮人要塞》缔造者 Tarn Adams——这位被称为『游戏业最快乐的人』的传奇开发者明确表达了对生成式 AI 的反感：他要的是模拟系统自己涌现的故事，而不是模型生成的填充物。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/the-happiest-man-in-gaming-hates-generative-ai", image: "https://assetsio.gnwcdn.com/Tarn-Adams-Dwarf-Fortress.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "AI 观点", badgeType: "ai", readTime: "7 分钟", hotScore: 82, tags: ["矮人要塞", "Tarn Adams", "生成式 AI", "独立游戏"], content: [
      { title: "访谈要点", type: "list", items: ["《矮人要塞》创作者 Tarn Adams 接受 GI 专访；", "明确表达对生成式 AI 的反感立场；", "其底气来自《矮人要塞》二十年磨一剑的涌现式模拟叙事。"] },
      { title: "笔者观察", type: "text", text: "这篇和 Epic『AI 优先』同日刊出，是本周 AI 光谱的另一端。《矮人要塞》证明了一件事：系统涌现的故事感是 AI 生成内容给不了的——前者是『世界的必然』，后者是『概率的平均』。做 AI NPC 的同学请把这句话刻在桌上：AI 应该让模拟更深，而不是替模拟撒谎。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "ai-horii-30min-game", category: "ai", subcategory: "AI 观点", title: "《勇者斗恶龙》之父堀井雄二发布用 AI 做的游戏：『大概 30 分钟』", summary: "《勇者斗恶龙》缔造者堀井雄二发布了一款自称『用 AI 在约 30 分钟内完成』的游戏——DQ 之父亲自下场试验 AI 开发，这条新闻的象征意义远大于作品本身。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/dragon-quest-creator-yuji-horii-releases-game-he-says-he-made-with-ai-in-about-30-minutes", image: "https://assetsio.gnwcdn.com/Screenshot-2026-10-12-at-19.25.58.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "AI 观点", badgeType: "ai", readTime: "5 分钟", hotScore: 78, tags: ["堀井雄二", "勇者斗恶龙", "AI 开发"], content: [
      { title: "事件要点", type: "list", items: ["堀井雄二发布一款以 AI 辅助制作的游戏；", "其自述制作耗时约 30 分钟；", "注意：『30 分钟』为其个人说法，指 AI 辅助下的快速成稿过程。"] },
      { title: "笔者观察", type: "text", text: "与 Tarn Adams 的反感同日刊出，堀井的实验是光谱另一端的注脚——有趣的是两人并不矛盾：堀井用 AI 玩票式的『30 分钟习作』探索边界，而 DQ 正作的开发纪律纹丝不动。这周就按这个框架理解全行业：AI 在试错区狂奔，创意核心区依旧是人类戒备森严的领地。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "ai-gadgetsfocus-october", category: "ai", subcategory: "行业综述", title: "10 月 AI 模型与工具发布追踪：Mistral Large 4 开放权重领衔", summary: "GadgetsFocus 的 10 月模型与工具发布追踪：Mistral Large 4 与 Reflection Beam 以开放权重发布——继 8 个新模型之后，开放权重阵营在 10 月继续加码。", source: "GadgetsFocus", date: "2026-10-12", url: "https://gadgetsfocus.com/october-2026-ai-models-tools-release-tracker-mistral-large-4-beam-gemini-agent/", image: "https://gadgetsfocus.com/wp-content/uploads/2026/10/october-2026-ai-releases-tracker.jpg", badge: "行业综述", badgeType: "ai", readTime: "6 分钟", hotScore: 66, tags: ["Mistral Large 4", "开放权重", "发布追踪"], content: [
      { title: "追踪要点", type: "list", items: ["10 月模型与工具发布追踪更新；", "Mistral Large 4 与 Reflection Beam 开放权重发布；", "与本月已收录的 8 个新模型时间线互相补充。"] },
      { title: "笔者观察", type: "text", text: "开放权重阵营的每一步都在挤压纯 API 商业模式——与本周『企业份额平分』『网关成标配』的叙事完全自洽。做本地化 AI（离线 NPC、私有部署工具）的同学，Mistral Large 4 的开源权重值得下载测一轮。参考来源：GadgetsFocus。" }
    ] },
    { id: "ai-onairtoday-1012", category: "ai", subcategory: "行业综述", title: "AI 日报（10 月 12 日）：当日研究与产品动态速览", summary: "OnAirToday 的 10 月 12 日 AI 日报：汇总当日最重要的人工智能发展、研究与产品动态——断网事件后的第一个完整工作周，行业进入安全整改与发布并行的节奏。", source: "OnAirToday", date: "2026-10-12", url: "https://onairtoday.com/daily-ai-briefing", image: "", badge: "行业综述", badgeType: "ai", readTime: "5 分钟", hotScore: 62, tags: ["AI 日报", "行业动态"], content: [
      { title: "日报要点", type: "list", items: ["10 月 12 日 AI 动态汇总；", "覆盖研究、产品与公司动态；", "断网事件后首个完整工作周，安全整改话题持续发酵。"] },
      { title: "笔者观察", type: "text", text: "本周 AI 新闻的主题词已经从『发布』切换到『护栏』——安全整改与新模型发布并行不悖。对开发者的影响很具体：各家 API 的安全策略与限流规则可能临时调整，你的应用要做降级预案。参考来源：OnAirToday。" }
    ] },
    { id: "g-valor-mortis-review", category: "games", subcategory: "评测", title: "《Valor Mortis》评测：拿破仑时代的 第一人称剑术魂游，本周最新鲜的玩法拼盘", summary: "《Valor Mortis》媒体评测解禁：拿破仑战争背景 + 第一人称剑术 + 魂类结构——RPS 评价其为『最新鲜』的玩法组合之一，发售前系统需求又突然大幅下调。", source: "Rock Paper Shotgun", date: "2026-10-12", url: "https://www.rockpapershotgun.com/valor-mortis-review", image: "https://assetsio.gnwcdn.com/Valor-Mortis-General-Lothaire.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "评测", badgeType: "games", readTime: "6 分钟", hotScore: 75, tags: ["Valor Mortis", "魂类", "第一人称", "评测"], content: [
      { title: "评测要点", type: "list", items: ["《Valor Mortis》评测解禁：拿破仑背景第一人称剑术魂游；", "RPS 给出『最新鲜玩法组合』的积极评价；", "发售前夕系统需求大幅下调（同日另条报道）。"] },
      { title: "笔者观察", type: "text", text: "第一人称 × 魂类 × 历史战争，这个组合的难点全在『手感信任』——第一人称近战的打击反馈最难骗人。同日的系统需求腰斩新闻则更耐人寻味：是优化神速还是首发避坑？发售首周的玩家口碑会给出答案。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-valor-mortis-sysreq", category: "games", subcategory: "发售前瞻", title: "《Valor Mortis》发售前系统需求大幅下调：优化神话还是避坑信号？", summary: "《Valor Mortis》的 PC 配置要求在发售前夕被大幅削减——官方下调推荐配置的操作在发售窗口期极为罕见，究竟是优化突破还是首发避坑，值得当作一次公开的对照实验观察。", source: "Rock Paper Shotgun", date: "2026-10-12", url: "https://www.rockpapershotgun.com/valor-mortis-system-requirements-appear-to-have-been-drastically-cut-just-before-the-fpsoulslike-launches", image: "https://assetsio.gnwcdn.com/Valor-Mortis-Eternal-Guardsman-cutscene.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "发售前瞻", badgeType: "games", readTime: "4 分钟", hotScore: 68, tags: ["Valor Mortis", "系统需求", "优化"], content: [
      { title: "事件要点", type: "list", items: ["《Valor Mortis》PC 配置要求发售前大幅下调；", "时间点：距发售极近；", "下调幅度『drastically（剧烈）』——RPS 用词罕见。"] },
      { title: "笔者观察", type: "text", text: "配置要求腰斩有两种解读：优化团队立了大功（好事），或者首发版本缩水避坑（坏事）。判别方法教给同学们：看首发周的数字版对比片段是否与宣传一致。这种『配置反转』事件本身就是很好的行业观察样本。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-burn-with-me", category: "games", subcategory: "独立观察", title: "《Burn With Me》：手绘恶魔卡牌游戏，美术里还有画师自己的手——Balatro-like 的『有限』反抗", summary: "《Burn With Me》曝光：一款全手绘的恶魔主题卡牌游戏，封面美术里甚至画上了画师自己的手——RPS 称其为对无限膨胀的 Balatro-like 品类的一次『令人耳目一新的有限（finite）』反抗。", source: "Rock Paper Shotgun", date: "2026-10-12", url: "https://www.rockpapershotgun.com/burn-with-me-is-a-hand-drawn-demon-card-game-featuring-the-artists-own-hand-and-also-a-refreshingly-finite-alternative-to-yer-balatro-likes", image: "https://assetsio.gnwcdn.com/Burn-WIth-Me_z9E5iqJ.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "4 分钟", hotScore: 67, tags: ["Burn With Me", "卡牌", "手绘", "独立游戏"], content: [
      { title: "游戏要点", type: "list", items: ["《Burn With Me》：全手绘恶魔主题卡牌游戏；", "美术彩蛋：画师把自己的手画进了游戏；", "设计立场：做『有限的』卡牌构筑，对抗品类的无限膨胀。"] },
      { title: "笔者观察", type: "text", text: "『有限』作为卖点在这个品类里是逆行者：Balatro-like 们比的是谁的内容量更无限，而它赌的是『一局能打完的完整体验』反而稀缺。画师的手出现在美术里，是对 AI 生成时代的无声回应——这些天从工会到独立美术，人味儿正在成为卖点。参考来源：Rock Paper Shotgun。" }
    ] },
{ id: "ai-aiproducthub-openai-1013", category: "ai", subcategory: "行业综述", title: "OpenAI 动态速览（10 月 13 日）：模型、产品与融资一页汇总", summary: "AI 产品库的 OpenAI 专题页更新至 10 月 13 日：聚合 OpenAI 全线产品的最新快讯——模型发布、产品更新、融资及行业消息一页速览。", source: "AI 产品库", date: "2026-10-13", url: "https://aiproducthub.cn/newsflash/topic/openai/", image: "", badge: "行业综述", badgeType: "ai", readTime: "5 分钟", hotScore: 61, tags: ["OpenAI", "快讯", "10 月 13 日"], content: [
      { title: "页面要点", type: "list", items: ["OpenAI 全线动态聚合页，更新至 10 月 13 日；", "覆盖模型发布、产品更新、融资与行业消息；", "与 GPT-6 全量推送后的产品节奏追踪互补。"] },
      { title: "笔者观察", type: "text", text: "GPT-6 成为 12 亿人默认模型之后，OpenAI 的每条产品快讯的实际影响面都被放大了一个数量级——把这类专题聚合页当『单一厂商雷达』用，与综合日报形成主辅搭配。参考来源：AI 产品库。" }
    ] },
    { id: "g-battleplan-ww2-rts", category: "games", subcategory: "玩法杂糅", title: "《Battleplan》：用铅笔在地图上重画二战前线的新 RTS——把指挥简化成一道笔画", summary: "新款二战 RTS《Battleplan》的核心创意：你不是在给地图上色，而是用一支铅笔直接重画前线——画到哪，部队就试图推进到哪，剩下的交给士兵。把战略指挥压缩成一道笔画的大胆简化。", source: "Rock Paper Shotgun", date: "2026-10-12", url: "https://www.rockpapershotgun.com/you-dont-just-paint-the-map-your-colour-in-new-ww2-rts-battleplan-you-redraw-the-frontline-with-a-pencil-and-hope-your-troops-do-the-rest", image: "https://assetsio.gnwcdn.com/battleplan.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "玩法杂糅", badgeType: "games", readTime: "4 分钟", hotScore: 66, tags: ["Battleplan", "RTS", "二战", "指挥系统"], content: [
      { title: "游戏要点", type: "list", items: ["二战题材 RTS《Battleplan》核心机制公开；", "指挥方式：用铅笔直接在前线地图上画推进线；", "设计立场：把微操从 RTS 中剥离，命令即笔画。"] },
      { title: "笔者观察", type: "text", text: "这是本周第二个『把复杂系统压缩成一道笔画』的设计（另一个是 Battleplan 的表亲《This Is Not For You》的手绘地图）——手绘输入正在成为独立策略游戏的输入革命：它把『下达命令』的情感成本降到涂鸦级别，同时保留了后果的重量。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-this-week-pc-games", category: "games", subcategory: "本周发售", title: "本周 PC 游戏盘点：外太空食人丸、动物园之星 2 与拿破仑躯体恐怖", summary: "RPS 本周 PC 游戏盘点：太空题材的『食人 Katamari』、Planet Zoo 2 的自然保护区经营、以及《Valor Mortis》的拿破仑躯体恐怖——本周新品阵容的杂食度罕见地高。", source: "Rock Paper Shotgun", date: "2026-10-12", url: "https://www.rockpapershotgun.com/this-week-in-pc-games-play-a-human-eating-katamari-from-outer-space-take-over-a-nature-reserve-in-planet-zoo-2-and-battle-napoleonic-body-horror-in-valor-mortis", image: "https://assetsio.gnwcdn.com/planet-zoo-2.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "本周发售", badgeType: "games", readTime: "5 分钟", hotScore: 65, tags: ["本周发售", "Planet Zoo 2", "盘点"], content: [
      { title: "盘点要点", type: "list", items: ["本周 PC 新作：太空食人 Katamari 式新作、Planet Zoo 2、Valor Mortis 等；", "品类跨度从休闲模拟到躯体恐怖；", "10 月中旬的发售密度开始向年末冲刺。"] },
      { title: "笔者观察", type: "text", text: "本周盘点里最值得盯的是 Planet Zoo 2——动物园经营品类在 Frontier 手里是稳定的印钞机，2 代的首周数据会给『模拟经营品类天花板』一个新坐标。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "i-nvidia-5090-end", category: "industry", subcategory: "硬件动向", title: "Nvidia 被曝停产 RTX 5090：产能让位 AI 友好的 RTX Pro——游戏卡的黄金时代拐点？", summary: "据泄露消息，Nvidia 将结束 GeForce RTX 5090 的生产，把产能转向对 AI 开发更友好的 RTX Pro 系列——旗舰游戏卡与 AI 计算卡的资源之争，第一次以『游戏让位』的方式摆上台面。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/nvidia-reportedly-ends-geforce-rtx-5090-graphics-card-production", image: "https://assetsio.gnwcdn.com/nvidia_ctHUg28.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "硬件动向", badgeType: "industry", readTime: "4 分钟", hotScore: 80, tags: ["Nvidia", "RTX 5090", "RTX Pro", "AI 算力"], content: [
      { title: "事件要点", type: "list", items: ["泄露消息：Nvidia 将结束 RTX 5090 显卡生产；", "产能转向 AI 开发友好的 RTX Pro 系列；", "注意口径：leaker 说法，官方未确认。"] },
      { title: "笔者观察", type: "text", text: "若属实，这是『游戏硬件为 AI 让路』的第一个标志性节点——与本周内存涨价的叙事（上周美光称缺货到 2028）连读，PC 游戏玩家正在为 AI 算力潮支付结构性溢价。对做 PC 游戏开发的团队，玩家硬件升级周期的中断意味着：未来两年的目标配置要按『不升级』来设计。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-aream-q3-578bn", category: "industry", subcategory: "并购", title: "Q3 游戏业并购总额 578 亿美元：EA 550 亿杠杆收购正式落地", summary: "Aream & Co 季度报告：2026 年 Q3 游戏业并购交易总额达 578 亿美元，其中 EA 的 550 亿美元杠杆收购（史上最大）是绝对主角——史上最大私有化交易落地，行业的资本结构进入新纪元。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/aream-co-games-industry-ma-generates-578-bn-in-q3-including-eas-55bn-leveraged-buyout", image: "https://assetsio.gnwcdn.com/ea-sports-fc_BiC7eqf.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "并购", badgeType: "industry", readTime: "5 分钟", hotScore: 79, tags: ["EA", "并购", "杠杆收购", "578 亿美元"], content: [
      { title: "报告要点", type: "list", items: ["Aream & Co 数据：Q3 游戏业并购总额 578 亿美元；", "主体：EA 550 亿美元杠杆收购（LBO）完成——游戏史上最大私有化；", "LBO 意味着 EA 背上巨额债务，未来数年将进入偿债驱动的经营模式。"] },
      { title: "笔者观察", type: "text", text: "『杠杆收购』三个字比『550 亿』更重要：LBO 意味着 EA 未来的每一分利润都要优先还债——裁撤非盈利项目、强化年货体育、榨取手游现金流几乎是教科书式的必然路径。这与本周 Skydance 合并派拉蒙的叙事共振：资本对游戏业的耐心在变短，回报周期在变硬。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-nintendo-physical", category: "industry", subcategory: "平台动向", title: "任天堂拉美区 VP：『没有放弃实体游戏的计划』", summary: "任天堂拉美区副总裁表态：公司没有任何放弃实体游戏的计划——在索尼调研光盘退役、微软转向订阅的背景下，任天堂成为实体媒介最坚定的守护者。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/nintendos-latin-america-vp-says-there-are-no-plans-to-ditch-physical-games", image: "https://assetsio.gnwcdn.com/switch-console-jesper-brouwers-unsplash.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "平台动向", badgeType: "industry", readTime: "4 分钟", hotScore: 70, tags: ["任天堂", "实体游戏", "游戏保存"], content: [
      { title: "事件要点", type: "list", items: ["任天堂拉美区 VP：没有放弃实体游戏的计划；", "与索尼（调研退役光盘）、微软（订阅优先）形成路线分化；", "实体卡带仍是任天堂硬件差异化的重要一环。"] },
      { title: "笔者观察", type: "text", text: "上周索尼实体介质评论、NBA2K 停服争议、本周任天堂的明确表态——『游戏保存』正在从情怀议题变成平台竞争的差异点。任天堂的算盘很精：卡带既是收藏品也是下沉市场的渠道。买卡带的同学，你手上拿的是行业路线斗争的实物证据。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-chris-kerr-vertical-slice", category: "industry", subcategory: "行业媒体", title: "资深从业者 Chris Kerr 创办《Vertical Slice》：给打工人发声、向权力问责的游戏媒体", summary: "游戏业资深记者 Chris Kerr 宣布创办新刊物《Vertical Slice》：定位是『给从业者发声、向权力问责』的垂直媒体——在 Nerial 关停、Undead Labs 拒谈裁员数字的当口，行业监督媒体的选择性补位。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/game-developer-veteran-chris-kerr-launches-vertical-slice-a-games-publication-giving-workers-a-voice-and-holding-power-to-account", image: "https://assetsio.gnwcdn.com/Vertical-Slice-Purple.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "行业媒体", badgeType: "industry", readTime: "4 分钟", hotScore: 66, tags: ["Vertical Slice", "游戏媒体", "劳工议题"], content: [
      { title: "事件要点", type: "list", items: ["资深游戏业记者 Chris Kerr 创办《Vertical Slice》；", "定位：给从业者发声、向权力问责；", "创立时机正值行业裁员潮与劳资摩擦密集期。"] },
      { title: "笔者观察", type: "text", text: "『向权力问责』的媒体在裁员潮里是刚需——Undead Labs 拒绝公布裁员数字时，谁去追问？垂直监督媒体的存在让『数字』无法被轻易抹平。对写行业分析的同学，这是比官网通稿可靠得多的信息源。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-gears-eday-ddos", category: "industry", subcategory: "运营事故", title: "《战争机器：E-Day》遭 DDoS 攻击：The Coalition 确认『间歇性掉线与登录问题』", summary: "The Coalition 确认《战争机器：E-Day》遭遇 DDoS 攻击，造成『间歇性断连』与登录问题——发售一周的旗舰大作正承受上线后的第一轮服务攻击。", source: "Rock Paper Shotgun", date: "2026-10-12", url: "https://www.rockpapershotgun.com/gears-of-war-e-day-ddos-attacks-are-to-blame-for-intermittent-disconnects-and-login-issues-the-coalition-confirm", image: "", badge: "运营事故", badgeType: "industry", readTime: "3 分钟", hotScore: 67, tags: ["战争机器", "DDoS", "服务运维"], content: [
      { title: "事件要点", type: "list", items: ["The Coalition 确认 E-Day 遭遇 DDoS 攻击；", "表现：间歇性断连与登录问题；", "时间点：发售仅一周。"] },
      { title: "笔者观察", type: "text", text: "E-Day 发售周的热度引来了攻击者，这几乎是旗舰联机游戏的『成人礼』。给做服务端的同学划重点：DDoS 防护预案要在上线前就绪，公告话术要像 The Coalition 这样『确认攻击 + 说明影响范围 + 给出修复预期』三件套。参考来源：Rock Paper Shotgun。" }
    ] },
{ id: "os-open-webui", category: "opensource", subcategory: "AI 界面", title: "Open WebUI 回归热榜：本地大模型的最佳『驾驶舱』再进化", summary: "open-webui/open-webui 登上 GitHub 热榜：支持 Ollama 与 OpenAI 兼容 API 的开源 AI 界面——本地模型时代的默认前端，配合本周 AirLLM 的离线推理叙事食用更佳。", source: "GitHub（open-webui）", date: "2026-10-13", url: "https://github.com/open-webui/open-webui", image: "https://opengraph.githubassets.com/1/open-webui/open-webui", badge: "AI 界面", badgeType: "opensource", readTime: "4 分钟", hotScore: 69, tags: ["Open WebUI", "Ollama", "本地模型", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["Open WebUI：支持 Ollama / OpenAI 兼容 API 的开源 AI 界面；", "本地模型部署的默认前端选择；", "本周重回 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "与本周 AirLLM（4GB 跑 70B）、BitNet（1-bit 推理）连成本地化三部曲：引擎层跑模型、网关层做路由、界面层给人用——本地 AI 全家桶已经凑齐。给自己的毕设加『离线 AI 功能』时，这套组合可以整包搬走。参考来源：GitHub。" }
    ] },
    { id: "os-microsoft-bitnet", category: "opensource", subcategory: "AI 基础设施", title: "微软官方 BitNet 框架：1-bit 大模型的推理引擎——把模型塞进 CPU 的野心", summary: "microsoft/BitNet 登上热榜：微软官方的 1-bit 大模型（BitNet b1.58）推理框架——用三值权重把模型体积与内存需求压到极致，普通 CPU 也能跑 LLM。", source: "GitHub（microsoft/BitNet）", date: "2026-10-13", url: "https://github.com/microsoft/BitNet", image: "https://opengraph.githubassets.com/1/microsoft/BitNet", badge: "AI 基础设施", badgeType: "opensource", readTime: "5 分钟", hotScore: 70, tags: ["BitNet", "1-bit LLM", "微软", "推理框架"], content: [
      { title: "仓库要点", type: "list", items: ["BitNet：微软官方 1-bit LLM 推理框架；", "核心：三值权重（-1/0/1）把模型压到极致；", "目标硬件：普通 CPU 即可推理。"] },
      { title: "笔者观察", type: "text", text: "1-bit 模型是『AI 民主化』的物理极限路线：当模型小到 CPU 可跑，游戏里的离线 AI 就不再受显卡预算约束——配合 AirLLM 和 Open WebUI，本周开源圈凑齐了『端侧 AI』的完整拼图。做独立游戏的 AI 同学，这是成本最低的技术路线。参考来源：GitHub。" }
    ] },
    { id: "os-talorys", category: "opensource", subcategory: "AI 工具", title: "Talorys 登热榜：跑在自己 Cloudflare 账号里的个人 AI 智能体（890+★）", summary: "rociiu/talorys（10 月 10 日创建）快速冲上 890+ star：一个部署在你自己 Cloudflare 账号里的个人 AI 智能体——聊天、记忆、任务、笔记，数据不出自己的云端。", source: "GitHub（rociiu）", date: "2026-10-13", url: "https://github.com/rociiu/talorys", image: "https://opengraph.githubassets.com/1/rociiu/talorys", badge: "AI 工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 67, tags: ["Cloudflare", "个人智能体", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["Talorys：部署于自有 Cloudflare 账号的个人 AI 智能体；", "功能：聊天、长期记忆、任务与笔记；", "10 月 10 日创建，890+ star。"] },
      { title: "笔者观察", type: "text", text: "本周断网事件后的第二个『数据主权』风向标：Anthropic 收紧权限，用户就把智能体搬回自己账号——『Your own account』正在成为 AI 工具的新卖点。这个思路对游戏后台同样成立：玩家数据放谁家，答案越来越倾向『自己家』。参考来源：GitHub。" }
    ] },
    { id: "os-esp32-iphone-agent", category: "opensource", subcategory: "硬件 AI", title: "ESP32 iPhone 智能体登热榜：7 美元硬件让 AI 模型操作真 iPhone", summary: "onehumanbeing/esp32-iphone-agent（10 月 11 日创建）冲上热榜：用一块 7 美元的 ESP32 让 AI 模型操作真实 iPhone——AirPlay 做眼睛、USB HID 做手，硬件智能体的极客浪漫。", source: "GitHub（onehumanbeing）", date: "2026-10-13", url: "https://github.com/onehumanbeing/esp32-iphone-agent", image: "https://opengraph.githubassets.com/1/onehumanbeing/esp32-iphone-agent", badge: "硬件 AI", badgeType: "opensource", readTime: "4 分钟", hotScore: 68, tags: ["ESP32", "智能体", "硬件", "iPhone"], content: [
      { title: "仓库要点", type: "list", items: ["ESP32 iPhone Agent：AI 模型操作真实 iPhone；", "方案：7 美元 ESP32 + AirPlay 视觉输入 + USB HID 触控输出；", "10 月 11 日创建，530+ star。"] },
      { title: "笔者观察", type: "text", text: "『给 AI 一双手』的最低成本答案：不破解系统、不做越狱，纯外设层把视觉与触控接给模型——这种硬件层的聪明劲儿正是嵌入式与 AI 交叉领域的魅力。毕设想做『实体 AI 交互装置』的同学，方案直接可抄。参考来源：GitHub。" }
    ] },
    { id: "os-agent-chrome-relay", category: "opensource", subcategory: "AI 工具", title: "Agent Chrome Relay 登热榜：让 AI 智能体用你的 Chrome 在后台标签页干活", summary: "aindeev/agent-chrome-relay（10 月 10 日创建）登上热榜：让 AI 智能体以你的登录态使用 Chrome、在后台标签页工作——把『已登录的自己』安全地借给智能体的中间层。", source: "GitHub（aindeev）", date: "2026-10-13", url: "https://github.com/aindeev/agent-chrome-relay", image: "https://opengraph.githubassets.com/1/aindeev/agent-chrome-relay", badge: "AI 工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 65, tags: ["Chrome", "智能体", "浏览器自动化"], content: [
      { title: "仓库要点", type: "list", items: ["Agent Chrome Relay：智能体复用你的 Chrome 登录态；", "工作方式：后台标签页中代为操作；", "10 月 10 日创建，登热榜。"] },
      { title: "笔者观察", type: "text", text: "『复用登录态』是把双刃剑——便利与风险同源（还记得本周断网事件里 Claude 滥用权限的教训吗）。用它之前想清楚三件事：哪些站点允许、哪些动作要二次确认、日志在哪里。工具越强，纪律越值钱。参考来源：GitHub。" }
    ] },
    { id: "t-libgdx-site", category: "tutorials", subcategory: "引擎官网", title: "libGDX 官网：Java 跨平台游戏框架的官方门户——从桌面到 iOS 的一套代码", summary: "libGDX 官网汇集了这个 Java 跨平台游戏框架的全部资源：一次编写运行于 Windows/Linux/macOS/Android/iOS，文档与示例工程完善——《Ingress》《Slay the Spire》同款技术底座。", source: "libGDX", date: "2026-10-13", url: "https://libgdx.com/", image: "https://libgdx.com/assets/images/share.png", badge: "引擎官网", badgeType: "tutorials", readTime: "3 分钟", hotScore: 62, tags: ["libGDX", "Java", "跨平台", "开源"], content: [
      { title: "站点要点", type: "list", items: ["Java 跨平台游戏框架官方门户；", "桌面 / Android / iOS / Web 全平台输出；", "《Slay the Spire》等知名作品的技术底座。"] },
      { title: "笔者观察", type: "text", text: "Java 路线同学的宝藏：会 Java 就能做全平台游戏，且 libGDX 是纯代码框架——没有编辑器 magic，每个系统都看得见摸得着。配合本站常青库的『读引擎三段路』（olc → Handmade → REDox），它是最顺手的入门实战层。参考来源：libGDX 官网。" }
    ] },
    { id: "t-indienova-portal", category: "tutorials", subcategory: "中文社区", title: "indienova：中文独立游戏开发社区的老牌门户——资讯、教程与交流一站", summary: "indienova 是华语独立游戏圈的老牌门户：独立游戏资讯、开发教程、设计专栏与社区交流并重——『独立精神』的中文大本营。", source: "indienova", date: "2026-10-13", url: "https://www.indienova.com/", image: "", badge: "中文社区", badgeType: "tutorials", readTime: "3 分钟", hotScore: 60, tags: ["indienova", "独立游戏", "中文社区"], content: [
      { title: "站点要点", type: "list", items: ["华语独立游戏老牌门户；", "资讯、教程、设计专栏与开发者社区并重；", "此前已作为正文资源链接收录，本次正式入库教程栏。"] },
      { title: "笔者观察", type: "text", text: "中文独立开发者的信息食谱建议：indienova 看生态与设计文、机核看文化与音频、本站看每日情报——三源互补。indienova 的设计专栏存货极深，遇到设计瓶颈去翻它的旧文，常有惊喜。参考来源：indienova。" }
    ] },
    { id: "t-pico-8", category: "tutorials", subcategory: "创意工具", title: "PICO-8： fantasy console 的极致自我约束——一张『游戏机』装进所有创作工具", summary: "PICO-8 是幻想游戏机（fantasy console）：128×128 分辨率、16 色调色板、内置代码/精灵/音效/地图全部编辑器——极致约束下，一个人做完一个游戏的最佳训练场。", source: "Lexaloffle", date: "2026-10-13", url: "https://www.lexaloffle.com/pico-8.php", image: "https://www.lexaloffle.com/gfx/p8tv_preview_orul.png", badge: "创意工具", badgeType: "tutorials", readTime: "4 分钟", hotScore: 63, tags: ["PICO-8", "fantasy console", "像素游戏", "创意"], content: [
      { title: "工具要点", type: "list", items: ["PICO-8 幻想游戏机：模拟一台不存在的复古主机；", "128×128 / 16 色 / 内置全套创作工具；", "社区作品库（SPLORE）海量的创意样本。"] },
      { title: "笔者观察", type: "text", text: "PICO-8 的教育价值在『约束』：所有资源上限写死，逼你把创造力花在玩法而非堆料上。给写论文卡壳的同学一个练习处方：周末用 PICO-8 做一个 30 秒的小游戏，你对『核心玩法』四个字的理解会具体一个量级。参考来源：Lexaloffle。" }
    ] },
    { id: "t-incompetech", category: "tutorials", subcategory: "音频资源", title: "Incompetech：Kevin MacLeod 的免版税音乐库——YouTube 时代游戏 BGM 的祖师爷", summary: "Incompetech 是配乐大师 Kevin MacLeod 的免版税音乐库：数千首按情绪与风格分类的曲子，CC 署名即可商用——从独立游戏到毕业设计，BGM 恐慌的终结者。", source: "Incompetech（Kevin MacLeod）", date: "2026-10-13", url: "https://incompetech.com/music/royalty-free/", image: "", badge: "音频资源", badgeType: "tutorials", readTime: "3 分钟", hotScore: 59, tags: ["音乐", "免版税", "Kevin MacLeod", "BGM"], content: [
      { title: "资源要点", type: "list", items: ["Kevin MacLeod 的免版税音乐库；", "数千首曲子，按情绪 / 风格 / 类型分类检索；", "CC 署名协议，商用只需注明出处。"] },
      { title: "笔者观察", type: "text", text: "本周音频主题日收官三件套：FreeSound 找音效、Audacity 剪辑、Incompetech 找 BGM——注意 Incompetech 的署名格式有官方模板，照抄即可合规。BGM 选曲技巧：按『情绪』而非『风格』检索，贴合场景节奏的匹配度更高。参考来源：Incompetech。" }
    ] },
    { id: "t-freemusicarchive", category: "tutorials", subcategory: "音频资源", title: "Free Music Archive：策展制免版权音乐库——按许可类型精确筛选", summary: "Free Music Archive（FMA）是由策展人筛选的免版权音乐库：最大特色是可按许可协议精确筛选（CC0 / CC-BY / CC-BY-SA），商用合规一目了然——游戏 BGM 的严谨之选。", source: "Free Music Archive", date: "2026-10-13", url: "https://freemusicarchive.org/", image: "", badge: "音频资源", badgeType: "tutorials", readTime: "3 分钟", hotScore: 58, tags: ["音乐", "CC 协议", "免版税"], content: [
      { title: "资源要点", type: "list", items: ["策展制免版权音乐库；", "按许可协议精确筛选：CC0 / CC-BY / CC-BY-SA；", "类型覆盖电子、氛围、管弦等游戏常用曲风。"] },
      { title: "笔者观察", type: "text", text: "FMA 与 Incompetech 的区别在『许可透明度』：FMA 每首歌的许可协议标注得清清楚楚，适合对合规要求严格的场景（上线发行的商业项目）。本周音频三源+剪辑工具，毕设音频管线全部零成本闭环。参考来源：Free Music Archive。" }
    ] },
    { id: "c-bafta-270k", category: "contest", subcategory: "资助计划", title: "BAFTA 斥资超 27 万英镑资助 112 位获得者：游戏、影视、TV 职业发展计划", summary: "BAFTA 宣布向英国与美国的 112 位获得者发放超过 27 万英镑资助，支持游戏、影视与 TV 从业者的职业成长——跨界资助计划把游戏人才正式纳入影视级培养体系。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/bafta-awards-over-270000-to-112-recipients-in-uk-and-us-to-support-career-growth-in-games-film-and-tv", image: "https://assetsio.gnwcdn.com/EV2026_JH_001.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "资助计划", badgeType: "contest", readTime: "4 分钟", hotScore: 66, tags: ["BAFTA", "资助", "职业发展", "英美"], content: [
      { title: "计划要点", type: "list", items: ["BAFTA 发放超 27 万英镑资助；", "覆盖英国与美国共 112 位获得者；", "资助范围：游戏、影视与 TV 从业者的职业成长。"] },
      { title: "笔者观察", type: "text", text: "注意 BAFTA 把游戏与影视放进同一个资助池——『游戏是视听艺术』在资助体系里已经不需要论证。对想留英发展的同学，这类资助计划（多数对早期职业者开放）是性价比极高的跳板，记入日历明年申请季跟进。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "c-pgconnects-nordics", category: "contest", subcategory: "行业大会", title: "PG Connects Nordics 2026：10 月 20-21 日赫尔辛基，下周开幕", summary: "Pocket Gamer Connects Nordics 2026 将于 10 月 20-21 日在赫尔辛基 Wanha Satama 举行：1500+ 从业者、150 位演讲者——北欧最大的 B2B 游戏行业大会下周就开。", source: "PG Connects 官网", date: "2026-10-13", url: "https://www.pgconnects.com/nordics/", image: "", badge: "行业大会", badgeType: "contest", readTime: "4 分钟", hotScore: 65, tags: ["PG Connects", "赫尔辛基", "北欧", "B2B"], content: [
      { title: "大会要点", type: "list", items: ["PG Connects Nordics 2026：10 月 20-21 日，赫尔辛基 Wanha Satama；", "1500+ 从业者、150 位全球演讲者；", "含 AI 与跨媒介合作伙伴峰会等专项议程。"] },
      { title: "笔者观察", type: "text", text: "PG Connects 的价值在『约谈（meetup）系统』：买票后可以提前预约发行商一对一——独立团队拿发行协议效率最高的场景没有之一。去不了现场的同学，官网的演讲者名单本身就是一份北欧发行商地图。参考来源：PG Connects 官网。" }
    ] },
    { id: "c-weplay-2026", category: "contest", subcategory: "国内展会", title: "WePlay 文化展 2026 定档 11 月 21-22 日：上海国家会展中心，展位全部订满", summary: "WePlay 文化展十周年场官宣：11 月 21-22 日落地上海国家会展中心 2.2 号馆，目前所有展位已订满；同时宣布 2027 年 4 月将首次登陆日本幕张展览馆——中国游戏文化展的出海新章。", source: "游民星空", date: "2026-10-10", url: "https://www.gamersky.com/news/202610/2225313.shtml", image: "", badge: "国内展会", badgeType: "contest", readTime: "4 分钟", hotScore: 67, tags: ["WePlay", "上海", "CiGA", "出展日本"], content: [
      { title: "展会要点", type: "list", items: ["WePlay 2026：11 月 21-22 日，上海国家会展中心 2.2 号馆；", "十周年场全面升级更大展馆，目前展位全部订满；", "主办方 CiGA 宣布 2027 年 4 月登陆日本幕张展览馆（WePlay Expo Japan）。"] },
      { title: "笔者观察", type: "text", text: "两条信息都值得圈点：①展位订满说明国内厂商的线下曝光需求在回暖——想参展的同学明年要提前抢位；②WePlay 赴日是中国游戏文化展的第一次反向输出，CiGA 生态（indiePlay、GameJams、WePlay）正在连成一条完整的国内独立游戏基建。参考来源：游民星空。" }
    ] },
{ id: "en-steam-frame-cad", category: "engine", subcategory: "硬件开源", title: "Valve 公开 Steam Frame 头显 CAD 文件：DIY 生态一夜起飞", summary: "Valve 发布了 Steam Frame VR 头显的 CAD 文件——官方公开工业设计文件后，社区已自发形成手腕绑带、等比骷髅支架等 DIY 外设的小型产业。硬件开源的又一次 Valve 式操作。", source: "Rock Paper Shotgun", date: "2026-10-12", url: "https://www.rockpapershotgun.com/valve-have-released-the-steam-frames-cad-files-but-theres-already-a-cottage-industry-of-diy-wrist-straps-and-lifesize-skull-stands", image: "https://assetsio.gnwcdn.com/Steam-Frame-melting-skull-stand.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "硬件开源", badgeType: "engine", readTime: "4 分钟", hotScore: 72, tags: ["Valve", "Steam Frame", "CAD", "VR"], content: [
      { title: "事件要点", type: "list", items: ["Valve 公开 Steam Frame 头显 CAD 文件；", "社区已出现 DIY 手腕绑带、等比骷髅支架等外设小产业；", "硬件图纸官方开源在 VR 行业极为罕见。"] },
      { title: "笔者观察", type: "text", text: "Valve 深谙『生态即护城河』：公开 CAD 让社区替它做配件生态，成本几乎为零、忠诚度拉满。对学工业设计/3D 打印的同学，官方 CAD 文件就是最真实的实战教材——量大从优的逆向学习机会。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "en-mindustry-160-7", category: "engine", subcategory: "开源游戏", title: "《Mindustry》v160.7 更新：Java 写就的开源塔防传奇持续迭代", summary: "开源塔防/RTS 传奇《Mindustry》发布 v160.7（10 月 8 日）——Anuken 一人用 Java 写就、持续更新八年的开源游戏，同时是一款可扩展的逻辑编程沙盒。", source: "GitHub（Anuken/Mindustry）", date: "2026-10-08", url: "https://github.com/Anuken/Mindustry/releases/tag/v160.7", image: "https://opengraph.githubassets.com/1/Anuken/Mindustry", badge: "开源游戏", badgeType: "engine", readTime: "4 分钟", hotScore: 64, tags: ["Mindustry", "开源游戏", "Java", "塔防"], content: [
      { title: "发布要点", type: "list", items: ["Mindustry v160.7（10 月 8 日）；", "单人用 Java 开发并维护八年的开源塔防/RTS；", "内置逻辑编程系统——游戏即编程教学沙盒。"] },
      { title: "笔者观察", type: "text", text: "Mindustry 对学生有两重价值：作为游戏，它是『资源链塔防』的最佳入门；作为工程，它是『单人如何维护一个八年活跃的开源游戏』的活教材——Anuken 的 issue 管理与发布纪律值得每位想做独立开发的同学精读。参考来源：GitHub。" }
    ] },
    { id: "en-obs-33-rc", category: "engine", subcategory: "工具链", title: "OBS Studio 33.0 迎来 RC：直播与录制工具链的大版本升级", summary: "OBS Studio 33.0.0-rc1 发布（10 月 9 日）——全球主播与游戏内容创作者的标准工具迎来大版本升级候选，新渲染管线与性能改进进入实测阶段。", source: "GitHub（obsproject/obs-studio）", date: "2026-10-09", url: "https://github.com/obsproject/obs-studio/releases/tag/33.0.0-rc1", image: "https://opengraph.githubassets.com/1/obsproject/obs-studio", badge: "工具链", badgeType: "engine", readTime: "3 分钟", hotScore: 61, tags: ["OBS", "直播", "录屏", "开源"], content: [
      { title: "发布要点", type: "list", items: ["OBS Studio 33.0.0-rc1（10 月 9 日）；", "大版本升级候选：新渲染管线进入实测；", "游戏内容创作工具链的核心开源组件。"] },
      { title: "笔者观察", type: "text", text: "OBS 是游戏内容生态的隐形基础设施——每个开发者迟早要面对『录演示视频』这件事。33 大版本的渲染管线重构值得创作者关注：录制的性能损耗可能显著下降。RC 阶段先别用于正式直播，等 stable。参考来源：GitHub。" }
    ] },
    { id: "en-openttd-16-beta", category: "engine", subcategory: "开源游戏", title: "OpenTTD 16.0-beta4：三十年运输模拟的精神续作走向新大版本", summary: "开源运输模拟经典《OpenTTD》发布 16.0-beta4（9 月 20 日）——从 1995 年《Transport Tycoon》一路社区接力至今的大版本冲刺，老游戏的第二十三个年头。", source: "GitHub（OpenTTD/OpenTTD）", date: "2026-09-20", url: "https://github.com/OpenTTD/OpenTTD/releases/tag/16.0-beta4", image: "https://opengraph.githubassets.com/1/OpenTTD/OpenTTD", badge: "开源游戏", badgeType: "engine", readTime: "3 分钟", hotScore: 58, tags: ["OpenTTD", "开源", "模拟经营", "社区接力"], content: [
      { title: "发布要点", type: "list", items: ["OpenTTD 16.0-beta4（9 月 20 日，补位条目如实标注）；", "16.0 大版本冲刺阶段；", "Transport Tycoon 精神续作的社区接力典范。"] },
      { title: "笔者观察", type: "text", text: "OpenTTD 与本周的 Pioneer 同属『社区接力经典 IP』谱系：版权方不做了，社区用三十年把它做成基础设施。想理解『长寿命开源游戏怎么维护』，OpenTTD 的版本历史就是一部编年史。参考来源：GitHub。" }
    ] },
    { id: "en-libgdx-1-14-2", category: "engine", subcategory: "引擎更新", title: "补位盘点：libGDX 1.14.2——Java 跨平台框架的版本线现状", summary: "补位条目（6 月 5 日）：libGDX 1.14.2——Java 跨平台游戏框架的最新稳定版，1.14 线自年中以来保持稳定，是 Java 系游戏开发的可靠底座。", source: "GitHub（libGDX/libGDX）", date: "2026-06-05", url: "https://github.com/libGDX/libGDX/releases/tag/1.14.2", image: "https://opengraph.githubassets.com/1/libGDX/libGDX", badge: "引擎更新", badgeType: "engine", readTime: "3 分钟", hotScore: 56, tags: ["libGDX", "Java", "跨平台"], content: [
      { title: "发布要点", type: "list", items: ["libGDX 1.14.2（6 月 5 日，补位条目如实标注）；", "1.14 线稳定运行；", "官网今日一并收录至实战教程栏。"] },
      { title: "笔者观察", type: "text", text: "libGDX 的『慢』是特性不是缺陷：API 十年如一日的稳定，意味着教程与代码资产不会过期。对讨厌『今年学的 API 明年废弃』的同学，Java + libGDX 是抗通胀的选择。参考来源：GitHub。" }
    ] }
  ]
}
