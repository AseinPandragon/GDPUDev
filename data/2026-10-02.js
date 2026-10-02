window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-02",
    weekday: "星期五",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-02 11:30",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "Capcom 不愁生化危机『没得重制』：时间线交汇的神秘 crossover 已在筹划",
      "欧盟消费者保护网络对 9 家公司就游戏内货币问题发起联合行动",
      "《王权》《纸牌鲨》开发商 Nerial 宣布关停：创始人『回到根源』",
      "《巫师3》叙事总监谈新 DLC：这个设定『感觉是非常自然的选择』",
      "《No Law》：一款立志做出 Arkane 式反应性的高墙之城潜行新作",
      "OpenAI DevDay 2026：GPT-6.1 Sol 与智能体产品 Dot 同期亮相"
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
    id: "capcom-re-crossover-timelines",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "官方预告",
    title: "Capcom 的重制账本：『没得重制』不慌，时间线交汇的神秘 crossover 才是下一手",
    summary: "RPS 剖析 Capcom 的生化危机重制策略：表面上『原作快重制完了』，实际上 Capcom 正在把这件事当成新机会——一个时间线交汇的神秘 crossover 项目已在计划中，重制宇宙的下一阶段不是重制，而是合流。",
    image: "https://assetsio.gnwcdn.com/claire-redfield-remake-original.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Rock Paper Shotgun / Capcom",
    date: "2026-10-01",
    url: "https://www.rockpapershotgun.com/capcom-arent-just-running-out-of-resident-evil-games-to-remake-theyre-banking-on-it-with-a-mysterious-crossover-planned-when-the-timelines-collide",
    readTime: "5 分钟深度",
    hotScore: 90,
    tags: ["Capcom", "生化危机", "重制版", "crossover", "IP 运营"],
    content: [
      { title: "报道要点", type: "list", items: ["生化危机系列的可重制原作存量已接近见底；", "Capcom 反而将此视为机会：筹划一个时间线交汇的神秘 crossover 项目；", "重制计划实为 IP 现代化的长线工程，而非单点翻新。"] },
      { title: "笔者观察", type: "text", text: "『重制完然后呢』是所有老 IP 迟早要答的题，Capcom 的答案是把重制期攒下的现代化设定当成新的叙事资产——时间线交汇意味着重制不再是复刻，而是重启世界观的后门。对做 IP 研究的同学，这是『重制经济学』的下一章：重制的终点不是怀旧，是合流。参考来源：Rock Paper Shotgun。" }
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
    { id: "eu-consumer-protection-in-game-currency", category: "industry", subcategory: "监管合规", title: "欧盟消费者保护网络出手：就游戏内货币问题对 9 家公司发起联合行动", summary: "欧盟消费者保护合作网络（CPC）宣布对 9 家游戏公司就游戏内货币相关问题启动协调行动——虚拟货币定价、退款与信息披露正在从『行业惯例』变成『监管议题』。", source: "GamesIndustry.biz", date: "2026-10-01", url: "https://www.gamesindustry.biz/consumer-protection-cooperation-network-launches-coordinated-actions-against-nine-companies-on-in-game-currency", image: "https://assetsio.gnwcdn.com/clash-of-clans_VxMdTAs.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "监管合规", badgeType: "business", readTime: "5 分钟", hotScore: 87, tags: ["欧盟", "游戏内货币", "消费者保护", "监管"], content: [
      { title: "事件要点", type: "list", items: ["欧盟 CPC 网络对 9 家公司发起关于游戏内货币的协调行动；", "焦点：虚拟货币的定价透明度、退款机制与信息披露；", "被点名公司与其合规整改要求预计将陆续公布。"] },
      { title: "笔者观察", type: "text", text: "游戏内货币的『汇率设计』（充值档位诱导、代币兑换模糊化）是免费游戏商业化的核心杠杆，也是监管迟早要碰的环节——欧盟先动手，其他市场大概率跟进。对将来做发行或运营的同学，这条是职业知识：货币体系设计文档里要留出『合规调整』的余地，别把诱导结构焊死在系统里。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "nerial-studio-closing", category: "industry", subcategory: "工作室动态", title: "《王权》《纸牌鲨》开发商 Nerial 宣布关停：创始人『回到我们的根源』", summary: "以叙事卡牌游戏《王权》（Reigns）与《纸牌鲨》（Card Shark）闻名的英国工作室 Nerial 宣布关停并裁减员工，创始人表示将『回到我们的根源』——以更小的形态继续创作。又一个中型独立团队的收缩样本。", source: "Rock Paper Shotgun", date: "2026-10-01", url: "https://www.rockpapershotgun.com/reigns-and-card-shark-developers-nerial-are-closing-down-laying-staff-off-while-the-founders-go-back-to-our-roots", image: "https://assetsio.gnwcdn.com/card-shark-preview-2.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "工作室动态", badgeType: "business", readTime: "4 分钟", hotScore: 82, tags: ["Nerial", "王权", "工作室关停", "独立游戏"], content: [
      { title: "事件要点", type: "list", items: ["Nerial（《王权》《纸牌鲨》开发商）宣布关停并裁员；", "创始人表示将『回到根源』，以更小形态继续开发；", "背景是独立工作室融资与发行环境持续收紧。"] },
      { title: "笔者观察", type: "text", text: "Nerial 不是做砸了——《王权》是千万级下载的爆款系列——它只是没能把『一次爆款』变成『可持续的组织』。这与本周 GI.biz 那篇独立生存指南正好互为注脚：团队规模一旦超过现金流模型，关停就不是意外而是排期。对学生团队：先想清楚你要的是『一群人的公司』还是『几个人的作者团队』，这两者的生存策略完全不同。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ubisoft-montreal-hybrid-work-petition", category: "industry", subcategory: "劳工观察", title: "育碧蒙特利尔员工请愿保留混合办公：300+ 签名背后的远程权博弈", summary: "育碧蒙特利尔的员工发起请愿，要求保留混合办公安排，已获超过 300 人签名——游戏行业大规模回归办公室的浪潮下，远程权正成为劳工议题的新前线。", source: "GamesIndustry.biz", date: "2026-10-01", url: "https://www.gamesindustry.biz/ubisoft-workers-of-montreal-union-petition-to-preserve-hybrid-work-secures-over-300-signatures", image: "https://assetsio.gnwcdn.com/ubisoft-dennis-zhang-eomfnamQM38-unsplash.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "劳工观察", badgeType: "business", readTime: "4 分钟", hotScore: 74, tags: ["育碧", "混合办公", "工会", "劳工权益"], content: [
      { title: "事件要点", type: "list", items: ["育碧蒙特利尔员工请愿保留混合办公，签名超 300；", "诉求由当地工会组织推动；", "背景是游戏行业 2026 年以来普遍的 RTO（重返办公室）政策。"] },
      { title: "笔者观察", type: "text", text: "选工作的时候，『办公政策』是比薪资更容易被忽略的隐藏条款——混合办公与否直接决定你住在哪、能接什么样的生活节奏。行业观察角度：工会化的育碧蒙特利尔开始用请愿而非离职表达诉求，说明北美游戏劳工组织化程度已过了临界点，这个趋势会持续影响各家的用人政策。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "newzoo-august-pc-console-charts", category: "industry", subcategory: "市场数据", title: "Newzoo 8 月 PC/主机收入榜：新作包揽头部，档期威力的又一次验证", summary: "Newzoo 公布 8 月 PC 与主机收入榜：新发售作品包揽头部位置——在老游戏长青叙事盛行的 2026，8 月的数据给了『新内容依然是收入引擎』的直接证据。", source: "GamesIndustry.biz", date: "2026-10-01", url: "https://www.gamesindustry.biz/pc-and-console-revenue-charts-led-by-new-releases-in-august-newzoo-charts", image: "https://assetsio.gnwcdn.com/big-walk_WjHYVBm.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "市场数据", badgeType: "business", readTime: "4 分钟", hotScore: 73, tags: ["Newzoo", "收入榜", "市场数据", "PC/主机"], content: [
      { title: "数据要点", type: "list", items: ["8 月 PC/主机收入榜由新发售作品领跑；", "榜单同时反映 PC 与主机两端的新内容拉动效应；", "与近期『长青服务游戏霸榜』的叙事形成对照。"] },
      { title: "笔者观察", type: "text", text: "把这条和昨天巫师3『重制拉动历史峰值』放在一起读很有意思：市场同时奖励两种东西——全新的内容，和被认真翻新过的旧内容。真正被淘汰的是中间态：既不是新作、也没被诚意向上的旧作。做市场研究的同学，写报告时记得 always 对照两个相反的样本，结论才站得住。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "witcher3-songs-past-story-interview", category: "games", subcategory: "开发访谈", title: "《巫师3》叙事总监谈《Songs of the Past》：这个设定『感觉是非常自然的选择』", summary: "CD Projekt RED 叙事总监接受 RPS 访谈，解释新 DLC《Songs of the Past》为何选在主线之外的时代与基调展开——以及为什么团队认为这是巫师宇宙『最自然的延伸方向』。", source: "Rock Paper Shotgun", date: "2026-10-01", url: "https://www.rockpapershotgun.com/the-witcher-3-songs-of-the-pasts-setting-felt-like-a-really-natural-way-to-go-cd-projekt-red-story-director-says-while-parrying-my-attempts-to-breach-the-dlcs-guard", image: "https://assetsio.gnwcdn.com/witcher-3-songs-of-the-past-04.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发访谈", badgeType: "games", readTime: "6 分钟", hotScore: 79, tags: ["巫师3", "Songs of the Past", "CDPR", "叙事设计"], content: [
      { title: "访谈要点", type: "list", items: ["叙事总监详解 DLC 选址与基调的决策过程；", "关键词：『自然的选择』——延续而非重复主线的叙事逻辑；", "对剧透问题的防守严实（RPS 自嘲被『格挡』了追问）。"] },
      { title: "笔者观察", type: "text", text: "注意访谈里反复出现的决策句式：不是『玩家想要什么』而是『这个世界的逻辑会自然长出什么』——长线 IP 的叙事决策正在从需求驱动转向世界观驱动。做叙事的同学可以对比昨天那条 Marvel Tōkon 的改编取舍，两种相反的路径（世界观优先 vs 系统优先）都成立，但混着用就会两头不讨好。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "control-resonant-ngpp-update", category: "games", subcategory: "内容更新", title: "《Control：Resonant》New Game++ 上线：顺手修掉『魔法门换我裤子』级别的古怪 Bug", summary: "Remedy 为《Control：Resonant》推送 New Game++ 更新：除了二周目内容与平衡调整，还修掉了一批社区最爱吐槽的古怪 Bug——包括那扇会把主角裤子换掉的魔法门。", source: "Rock Paper Shotgun", date: "2026-10-01", url: "https://www.rockpapershotgun.com/control-resonants-new-game-update-also-squashes-some-of-my-least-favourite-bugs-including-the-one-where-magic-doors-change-my-trousers", image: "https://assetsio.gnwcdn.com/Control-Resonant-Dylan-and-Jesse-cutscene.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "内容更新", badgeType: "games", readTime: "3 分钟", hotScore: 71, tags: ["Control Resonant", "Remedy", "New Game++", "Bug 修复"], content: [
      { title: "更新要点", type: "list", items: ["New Game++ 二周目模式上线；", "一批高关注度 Bug 修复，含『魔法门换裤子』等社区名场面；", "平衡性调整同步落地。"] },
      { title: "笔者观察", type: "text", text: "把『修了什么奇怪的 Bug』写进更新公告，是 Remedy 式的社区运营小聪明：Bug 修复本是枯燥的工程新闻，但『魔法门换裤子』这种细节自带传播力。发每周构建日志的 student 团队可以直接抄这个思路——把最离谱的那个 Bug 写成人话，你的更新公告就有人看。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "no-law-arkane-reactivity", category: "games", subcategory: "新作观察", title: "《No Law》：在一座危险的高墙之城里，立志做出 Arkane 式的系统反应性", summary: "新作《No Law》开发团队接受 RPS 访谈：『我们希望玩家试着智取游戏』——这款以危险高墙之城为舞台的潜行动作新作，明确把 Arkane 式的多解法反应性当作设计目标。", source: "Rock Paper Shotgun", date: "2026-10-01", url: "https://www.rockpapershotgun.com/we-want-people-to-try-and-outsmart-the-game-no-law-aims-for-arkane-style-reactivity-within-a-dangerous-walled-city", image: "https://assetsio.gnwcdn.com/No-Law-kick.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作观察", badgeType: "games", readTime: "5 分钟", hotScore: 75, tags: ["No Law", "沉浸模拟", "Arkane", "系统反应性"], content: [
      { title: "报道要点", type: "list", items: ["《No Law》定位为高反应性潜行动作游戏；", "舞台是一座危险的高墙之城；", "设计目标直指 Arkane 血统的多解法涌现玩法。"] },
      { title: "笔者观察", type: "text", text: "『让玩家智取游戏』翻译成工程语言就是：每个问题至少准备三条系统层面的解法，且解法之间要能意外组合。这是沉浸模拟最贵的部分——不是美术也不是 AI，是规则之间允许交叉。想做玩法系统的同学，试着把你的 demo 场景里每个障碍列出『暴力/规避/利用』三解，缺哪条补哪条，就是最朴素的设计自检。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "retrospace-immersive-sim-impressions", category: "games", subcategory: "独立观察", title: "《RetroSpace》：给好奇的太空清洁工准备的巨大科幻游乐场——但工具箱还不够『系统休克』", summary: "RPS 体验了沉浸模拟新作《RetroSpace》：巨大的科幻空间站舞台对『爱翻箱倒柜的太空清洁工』很友好，但编辑认为工具系统的深度还差一口气——离《系统休克》式的震撼尚有距离。", source: "Rock Paper Shotgun", date: "2026-10-01", url: "https://www.rockpapershotgun.com/retrospace-offers-a-huge-sci-fi-playground-for-inquisitive-space-janitors-but-im-not-that-system-shocked-by-the-tools-at-your-disposal", image: "https://assetsio.gnwcdn.com/retrospace-1.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "5 分钟", hotScore: 68, tags: ["RetroSpace", "沉浸模拟", "独立游戏", "系统设计"], content: [
      { title: "体验要点", type: "list", items: ["大型科幻空间站舞台，鼓励探索与翻找；", "编辑认可世界构建与空间设计；", "批评点：玩家工具的系统性深度不足，交互解法偏少。"] },
      { title: "笔者观察", "type": "text", "text": "把这条和《No Law》那条对着读，正好是沉浸模拟的一体两面：前者有世界没工具，后者立誓补工具。沉浸模拟的『模拟』二字就藏在工具箱里——世界再大，玩家手里只有锤子，一切就都是钉子。做毕设的同学记住这条评价公式：评价一个 demo 的玩法深度，数『玩家可用的动词』就够了。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "zynga-supercell-2012-deal", category: "tutorials", subcategory: "商业研究", title: "商业史复盘：2012 年 Zynga 差点 4 亿美元买下 Supercell，因 OMGPOP 之败告吹", summary: "GamesIndustry.biz 商业史专栏复盘一桩尘封交易：2012 年 Zynga 曾计划以约 4 亿美元收购 Supercell，却因《你画我猜》开发商 OMGPOP 收购后的急速贬值而告吹——如今 Supercell 的价值已是当年报价的百倍量级。", source: "GamesIndustry.biz", date: "2026-09-30", url: "https://www.gamesindustry.biz/zynga-reportedly-almost-acquired-supercell-for-400m-in-2012-but-deal-fell-through-following-failure-of-omgpop", image: "https://assetsio.gnwcdn.com/zynga-supercell.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "商业研究", badgeType: "tutorial", readTime: "6 分钟", hotScore: 72, tags: ["Zynga", "Supercell", "商业史", "并购"], content: [
      { title: "事件要点", type: "list", items: ["2012 年 Zynga 曾筹划以约 4 亿美元收购 Supercell；", "交易因 OMGPOP（花 1.8 亿收购后迅速贬值）的失败而告吹；", "Supercell 后成手游巨头，价值与当年报价已不可同日而语。"] },
      { title: "笔者观察", type: "text", text: "这桩交易史的最佳教训是『用最近的失败给下一个机会定价』有多危险：Zynga 因为上一笔收购的伤口，错过了手游时代最重要的标的。做行业分析的同学记住这个偏差的学名（可得性启发），它在面试聊行业格局时非常好用——顺便也解释了为什么大厂总在犯错之后矫枉过正。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "tower-of-zeldaga-fan-game", category: "games", subcategory: "独立观察", title: "《The Tower of Zeldaga》：免费玩到的塞尔达×多鲁阿嘎复古混搭，这回轮到你去救魔王", summary: "一款免费的复古混搭同人游戏《The Tower of Zeldaga》：把《塞尔达》的探索与街机《多鲁阿嘎塔》的爬塔结构缝在一起——而且这次的救人目标是魔王加农，绑架犯换成了一位邪恶的金发女王。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/the-tower-of-zeldaga-is-a-free-retro-mash-up-of-zelda-and-druaga-in-which-you-rescue-ganondorf-from-some-evil-blonde-queen", image: "https://assetsio.gnwcdn.com/Screenshot-2026-09-29-133458.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "3 分钟", hotScore: 66, tags: ["同人游戏", "塞尔达", "复古", "免费游戏"], content: [
      { title: "作品要点", type: "list", items: ["免费发布的复古混搭同人作品；", "结构：塞尔达式探索 × 《多鲁阿嘎塔》式楼层攀爬；", "叙事反转：救援对象是魔王加农，反派为邪恶金发女王。"] },
      { title: "笔者观察", type: "text", text: "『把经典公式各取一半』是同人游戏最稳的配方——比原创保险，比复刻有趣。这条值得注意的还有叙事反转的小技巧：救魔王 = 把系列最有名的绑架结构倒过来讲，一句话就能让人记住。毕设 pitching 时练这种『结构倒置』的表达，比堆画面更省力。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "openai-gpt-6-1-sol", category: "ai", subcategory: "大模型", title: "OpenAI 发布 GPT-6.1 Sol：DevDay 2026 期间亮相的新一代模型", summary: "OpenAI 官方新闻页确认推出 GPT-6.1 Sol，与 DevDay 2026 回顾同日（9 月 29 日）发布，并同步上线部署安全附录文档——新一代模型的全部口径以官方一手渠道为准。", source: "OpenAI 官方", date: "2026-09-29", url: "https://openai.com/index/introducing-gpt-6-1-sol/", image: "", badge: "大模型", badgeType: "ai", readTime: "5 分钟", hotScore: 88, tags: ["OpenAI", "GPT-6.1 Sol", "大模型", "DevDay"], content: [
      { title: "动态要点", type: "list", items: ["OpenAI 官方宣布推出 GPT-6.1 Sol，归类为产品发布；", "与 DevDay 2026 回顾、Dot 等公告集中出现在 9 月 29 日前后；", "官方同步在部署安全站点发布 GPT-6.1 Sol 附录（安全评估类文档）。"] },
      { title: "笔者观察", type: "text", text: "发布会周期的信息战里，最值钱的习惯是『只认一手』：官方页没写的参数、没给的对比，二手转述一律存疑。对游戏开发者的实际问题是——它的多模态与智能体能力什么时候进引擎工具链，那才是影响工作方式的部分。参考来源：OpenAI 官方新闻页。" }
    ] },
    { id: "openai-devday-2026-recap", category: "ai", subcategory: "开发者生态", title: "OpenAI DevDay 2026 官方回顾：把发布会当目录用", summary: "OpenAI 发布 DevDay 2026 官方回顾页：GPT-6.1 Sol、智能体产品 Dot 等一整批公告集中在 9 月 29 日前后落地——官方回顾页是这波发布最完整的一手清单。", source: "OpenAI 官方", date: "2026-09-29", url: "https://openai.com/index/devday-2026-recap/", image: "", badge: "开发者生态", badgeType: "ai", readTime: "6 分钟", hotScore: 84, tags: ["OpenAI", "DevDay", "开发者大会", "AI 工具链"], content: [
      { title: "动态要点", type: "list", items: ["DevDay 2026 官方回顾页上线；", "模型（GPT-6.1 Sol）与智能体产品（Dot）同期密集发布；", "回顾页按分类整理全部公告，可当发布会目录检索。"] },
      { title: "笔者观察", type: "text", text: "看发布会别刷二手总结，直接翻官方回顾页按图索骥——哪些进 API、哪些只进产品、哪些附带安全附录，这些分类本身就是信号。做工具选型的同学建议养成习惯：把官方目录页存档，三个月后回头验证当初的判断哪些兑现了。参考来源：OpenAI 官方新闻页。" }
    ] },
    { id: "openai-distillation-defense", category: "ai", subcategory: "AI 安全", title: "OpenAI 披露阻断一起有组织的模型蒸馏行动：攻防进入常态化", summary: "OpenAI 安全团队 9 月 30 日发布安全防护公告：已阻断一起有组织的模型蒸馏（distillation）行动——前沿模型的『知识窃取与反窃取』正在成为公开化的常态攻防。", source: "OpenAI 官方", date: "2026-09-30", url: "https://openai.com/index/disrupting-a-coordinated-model-distillation-campaign/", image: "", badge: "AI 安全", badgeType: "ai", readTime: "5 分钟", hotScore: 80, tags: ["OpenAI", "模型蒸馏", "AI 安全", "攻防"], content: [
      { title: "动态要点", type: "list", items: ["OpenAI 官方披露并阻断一起有组织的模型蒸馏行动；", "公告归类为安全防护（Safety）；", "模型蒸馏攻防从前端传闻进入官方公告层面。"] },
      { title: "笔者观察", type: "text", text: "蒸馏本身是中性技术（小模型确实靠它学能力），被官方公告点名的永远是『越权的蒸馏』。这与你做毕设没关系，但与你将来入职的公司有关系：模型资产的保护策略会成为 AI 公司的安全基建。顺带一句：这类公告的措辞（有组织、协调行动）值得逐字读——它们通常比标题克制得多。参考来源：OpenAI 官方新闻页。" }
    ] },
    { id: "openai-dots-agent", category: "ai", subcategory: "智能体", title: "OpenAI 推出 Dot：智能体产品线的又一步", summary: "OpenAI 9 月 29 日发布新产品 Dot，与 GPT-6.1 Sol 同期亮相——官方页归类为产品发布，细节以官方渠道为准，智能体产品线的节奏明显在加快。", source: "OpenAI 官方", date: "2026-09-29", url: "https://openai.com/index/introducing-dots/", image: "", badge: "智能体", badgeType: "ai", readTime: "4 分钟", hotScore: 76, tags: ["OpenAI", "Dot", "智能体", "AI 产品"], content: [
      { title: "动态要点", type: "list", items: ["OpenAI 官方发布新产品 Dot；", "与 GPT-6.1 Sol、DevDay 回顾同窗口发布；", "官方分类标注为产品（Product），更多信息待官方渠道更新。"] },
      { title: "笔者观察", type: "text", text: "智能体产品从『框架』走向『产品』是今年最清晰的产业趋势——GitHub 热榜一整页 agent 项目就是另一面镜子。对游戏团队，值得试验的方向是把重复性管线（批量导入、配置校验、日志归类）交给智能体跑，先从最不怕它犯错的环节开始。参考来源：OpenAI 官方新闻页。" }
    ] },
    { id: "claude-sonnet-5-5", category: "ai", subcategory: "大模型", title: "Anthropic 发布 Claude Sonnet 5.5：快 30%，多数任务成本降 30%", summary: "Anthropic 官方 9 月 28 日公告 Claude Sonnet 5.5：较 Sonnet 5 明显升级，运行速度提升 30%，多数任务成本最高降低 30%——紧接 9/22 的 Opus 5.5，Anthropic 完成主力模型线更新。", source: "Anthropic 官方", date: "2026-09-28", url: "https://www.anthropic.com/claude-sonnet-5-5", image: "https://www-cdn.anthropic.com/images/4zrzovbb/website/eaa6046f4ae8c88e368c3c530c4c1312f7ff6f2e-1200x630.jpg", badge: "大模型", badgeType: "ai", readTime: "5 分钟", hotScore: 83, tags: ["Anthropic", "Claude", "Sonnet 5.5", "大模型"], content: [
      { title: "公告要点", type: "list", items: ["Claude Sonnet 5.5 较 Sonnet 5 明显升级；", "运行速度提升 30%，多数任务成本最高降低 30%；", "此前 9 月 22 日已发布 Claude Opus 5.5，两条产品线接连更新。"] },
      { title: "笔者观察", type: "text", text: "『同档更快更便宜』比『新档更强』对开发者更实惠——你现在的项目不加改动就能吃到红利。用 AI 辅助写游戏代码的同学，值得重新跑一遍你的订阅档位测算：速度与成本的改善会直接改写『哪些任务值得交给模型』的分界线。参考来源：Anthropic 官方新闻室。" }
    ] },
    { id: "ponytail-lazy-agent", category: "opensource", subcategory: "AI 开发哲学", title: "ponytail：教 AI 智能体学会『最懒资深工程师思维』，今日热榜 +1194", summary: "GitHub 今日热榜黑马 ponytail（总 star 15 万+）：让你的 AI agent 像房间里最『懒』的资深开发者一样思考——最好的代码是你永远不用写的代码。", source: "GitHub: DietrichGebert/ponytail", date: "2026-10-02", url: "https://github.com/DietrichGebert/ponytail", image: "https://opengraph.githubassets.com/1/DietrichGebert/ponytail", badge: "AI 开发哲学", badgeType: "hot", readTime: "4 分钟", hotScore: 79, tags: ["GitHub", "AI Agent", "代码哲学", "开源"], content: [
      { title: "项目看点", type: "list", items: ["核心理念：最好的代码是你永远不用写的代码；", "把『资深工程师的克制』注入 AI 智能体的行为准则；", "今日热榜新增 star 1194，总 star 15 万+。"] },
      { title: "笔者观察", type: "text", text: "AI 写代码的最大问题不是写不出，而是写太多——它能一口气给你三百行，但不会问你『这个问题真的需要代码吗』。ponytail 之所以爆，是因为它戳中了所有用 AI 编程的人的隐痛。做项目的同学可以直接借这条准则：让 AI 出方案前，先让它回答『能不能不改代码解决』。参考来源：GitHub。" }
    ] },
    { id: "superpowers-skills", category: "opensource", subcategory: "智能体框架", title: "superpowers：29 万 star 的 agentic skills 框架与开发方法论", summary: "obra/superpowers（总 star 约 29.4 万，今日 +455）：一个可用的 agentic skills 框架与软件开发方法论——给 AI 智能体装上『工作方法』，而不只是给工具。", source: "GitHub: obra/superpowers", date: "2026-10-02", url: "https://github.com/obra/superpowers", image: "https://opengraph.githubassets.com/1/obra/superpowers", badge: "智能体框架", badgeType: "hot", readTime: "4 分钟", hotScore: 78, tags: ["GitHub", "AI Agent", "Skills", "方法论"], content: [
      { title: "项目看点", type: "list", items: ["agentic skills 框架 + 配套软件开发方法论；", "总 star 约 29.4 万，GitHub 头部项目；", "思路：给智能体注入流程与纪律，而非单纯堆工具。"] },
      { title: "笔者观察", type: "text", text: "智能体工具链正在分层：底层是模型，中层是 skills/方法论，上层才是具体插件——superpowers 站在中层，这一层此前最缺公共方案。带 AI 干活的同学都体会过『工具很全但它乱来』的痛，方法论层就是治这个的。参考来源：GitHub。" }
    ] },
    { id: "hyperframes-html-video", category: "opensource", subcategory: "内容管线", title: "hyperframes：写 HTML 就能渲染视频的工具链，为智能体而生", summary: "heygen-com/hyperframes（总 star 5.5 万+，今日 +627）：写 HTML、渲染视频——把视频生产管线变成智能体可以直接调用的技能，营销与宣传片工作流的开源化样本。", source: "GitHub: heygen-com/hyperframes", date: "2026-10-02", url: "https://github.com/heygen-com/hyperframes", image: "https://opengraph.githubassets.com/1/heygen-com/hyperframes", badge: "内容管线", badgeType: "hot", readTime: "4 分钟", hotScore: 74, tags: ["GitHub", "视频生成", "AI Agent", "工作流"], content: [
      { title: "项目看点", type: "list", items: ["输入是 HTML，输出是视频——Web 技术栈当渲染层；", "为智能体调用设计，可编程可批量化；", "今日新增 star 627，总 star 5.5 万+。"] },
      { title: "笔者观察", type: "text", text: "『用 HTML 描述视频』是个聪明选择：Web 是最普及的布局语言，智能体生成 HTML 的成功率远高于直接生成视频参数。游戏团队可以用同样的思路做商店页宣传片模板——美术只做资产，文案与排版走模板化管线。参考来源：GitHub。" }
    ] },
    { id: "pi-agent-toolkit", category: "opensource", subcategory: "智能体框架", title: "pi：统一 LLM API 与智能体循环的开源工具包，11 万 star", summary: "earendil-works/pi（总 star 11 万+）：AI 智能体工具包，统一 LLM API、agent 循环、TUI 与编程 agent CLI——自建智能体工作流的一站式底座。", source: "GitHub: earendil-works/pi", date: "2026-10-02", url: "https://github.com/earendil-works/pi", image: "https://opengraph.githubassets.com/1/earendil-works/pi", badge: "智能体框架", badgeType: "hot", readTime: "4 分钟", hotScore: 73, tags: ["GitHub", "AI Agent", "LLM API", "开源"], content: [
      { title: "项目看点", type: "list", items: ["统一多家 LLM API，屏蔽厂商差异；", "内置 agent 循环、TUI 与编程 agent CLI；", "总 star 11 万+，自建智能体的底座型项目。"] },
      { title: "笔者观察", type: "text", text: "11 万 star 说明『不绑定单一厂商』已是刚需——工具链投资者最怕的不是模型不行，是换模型要重写管线。学生项目可以直接用它做课程作业的 AI 外挂（NPC 对话、自动测试），模型随便换，业务层不动。参考来源：GitHub。" }
    ] },
    { id: "unimate-skeleton-animation", category: "opensource", subcategory: "游戏技术", title: "UniMate：一个统一模型驱动多种骨架动画，入选 SIGGRAPH Asia 2026", summary: "Friedrich-M/UniMate 入选 SIGGRAPH Asia 2026：用统一模型驱动多种骨架动画——学术界正在把『动画重定向与生成』变成通用能力，游戏动画管线值得长期关注。", source: "GitHub: Friedrich-M/UniMate", date: "2026-10-02", url: "https://github.com/Friedrich-M/UniMate", image: "https://opengraph.githubassets.com/1/Friedrich-M/UniMate", badge: "游戏技术", badgeType: "hot", readTime: "5 分钟", hotScore: 82, tags: ["GitHub", "动画", "SIGGRAPH", "游戏技术"], content: [
      { title: "项目看点", type: "list", items: ["统一模型驱动多种骨架（skeleton）动画；", "入选 SIGGRAPH Asia 2026，学术背书；", "开源实现，可复现可二改。"] },
      { title: "笔者观察", type: "text", text: "动画是独立团队最贵的资产之一——绑定、K 帧、重定向全是工时。『统一模型吃多种骨架』若成熟，小团队用一套动作库喂所有角色就成立了。做技术的同学可以先把 demo 跑起来，论文精读放后面：先有体感再读公式，效率高得多。参考来源：GitHub。" }
    ] },
    { id: "unity-6000-6-4-patch", category: "engine", subcategory: "版本动态", title: "Unity 6000.6.4f1 补丁上线：Unity 6.6 分支进入高频稳定期", summary: "Unity 官方发行说明页更新至 6000.6.4f1——Unity 6.6（9 月 1 日正式发布、WebGPU 脱离实验版）发布一个月内连推多个补丁，稳定化节奏明显。", source: "Unity 官方 Release Notes", date: "2026-10-02", url: "https://unity.com/releases/editor/whats-new/6000.6.4f1", image: "", badge: "版本动态", badgeType: "engine", readTime: "4 分钟", hotScore: 72, tags: ["Unity", "补丁", "WebGPU", "版本管理"], content: [
      { title: "版本要点", type: "list", items: ["Unity 6000.6.4f1 已进入官方发行说明页；", "Unity 6.6 自 9 月 1 日正式发布后补丁节奏密集，WebGPU 稳定化是主线；", "生产项目建议按修复清单评估跟进，不必盲追。"] },
      { title: "笔者观察", type: "text", text: "大版本发布后第一个月是补丁高发期，也是『等等党』的黄金窗口：等 6.6 系补丁踩稳再升级，能用别人的血泪换你的稳定。唯一例外是你恰好卡在某个已修复的 WebGPU/平台 bug 上——那种就升。参考来源：Unity 官方 Release Notes。" }
    ] },
    { id: "godot-3-6-3-maintenance", category: "engine", subcategory: "LTS 维护", title: "Godot 3.6.3 维护版发布：老 LTS 为移动平台构建要求让路", summary: "Godot 官方为 3.x LTS 推出 3.6.3 维护版本（8 月 22 日），动因是 Android 与 iOS 构建要求变更——还在维护 3.x 老项目的团队别忽略这次跟进。", source: "Godot Engine 官方博客", date: "2026-08-22", url: "https://godotengine.org/article/maintenance-release-godot-3-6-3/", image: "https://godotengine.org/storage/blog/covers/maintenance-release-godot-3-6-3.jpg", badge: "LTS 维护", badgeType: "engine", readTime: "3 分钟", hotScore: 70, tags: ["Godot", "LTS", "移动端", "版本维护"], content: [
      { title: "版本要点", type: "list", items: ["Godot 3.6.3 为 3.x LTS 维护版本；", "主要动因：Android 与 iOS 构建要求变更；", "不影响 4.x 用户，3.x 存量项目需要关注。"] },
      { title: "笔者观察", type: "text", text: "LTS 的『长期支持』不是自动的：平台方（苹果、谷歌）每年改构建要求，引擎就得跟着出维护版——这条价值链对学工程的同学是很好的认知样本：你维护的不只是代码，还有它对外部世界的适配。手上还有 Godot 3.x 老项目的话，这次升级属于『必须做』。参考来源：Godot Engine 官方博客。" }
    ] },
    { id: "godot-high-polling-mice", category: "engine", subcategory: "底层修复", title: "Godot 修复 Windows 高回报率鼠标轮询问题：一份罕见的引擎底层修复复盘", summary: "Godot 贡献者 Hugo Locurcio 发布技术文章，复盘 Windows 高回报率鼠标轮询率问题的修复过程（8 月 24 日）——从问题定位到方案落地，引擎输入系统的公开教学案例。", source: "Godot Engine 官方博客", date: "2026-08-24", url: "https://godotengine.org/article/fixing-high-polling-rate-mice-on-windows/", image: "https://godotengine.org/storage/blog/covers/fixing-high-polling-rate-mice-on-windows.jpg", badge: "底层修复", badgeType: "engine", readTime: "6 分钟", hotScore: 74, tags: ["Godot", "输入系统", "Windows", "性能优化"], content: [
      { title: "文章要点", type: "list", items: ["修复 Windows 上高回报率鼠标（8000Hz 级）引发的性能问题；", "文章完整复盘问题定位、成因与修复方案；", "涉及引擎输入消息的批处理与轮询策略。"] },
      { title: "笔者观察", type: "text", text: "这类文章的价值远超修复本身：你能看到一个『用户感知很玄学』的问题（鼠标一动就掉帧）是怎么被拆成可测量、可复现的工程问题的。想做引擎/图形方向的同学，把这篇当精读材料——比泛读十篇教程更能建立『性能问题方法论』。参考来源：Godot Engine 官方博客。" }
    ] },
    { id: "godotfest-2026-munich", category: "engine", subcategory: "生态活动", title: "GodotFest 2026 回归慕尼黑：11 月 3-4 日，官方年度技术大会", summary: "Godot 官方宣布 GodotFest 2026 于 11 月 3-4 日重返德国慕尼黑——官方引擎团队与社区核心贡献者齐聚，是了解 Godot 4.8 之后路线图的最佳窗口。", source: "Godot Engine 官方博客", date: "2026-08-12", url: "https://godotengine.org/article/godotfest-2026/", image: "https://godotengine.org/storage/blog/covers/godotfest-2026.jpg", badge: "生态活动", badgeType: "engine", readTime: "4 分钟", hotScore: 71, tags: ["Godot", "GodotFest", "技术大会", "开源生态"], content: [
      { title: "活动要点", type: "list", items: ["GodotFest 2026：11 月 3-4 日，德国慕尼黑；", "官方引擎团队与核心贡献者登台；", "2024 年首届后回归，规格对标商业引擎的 Unite。"] },
      { title: "笔者观察", type: "text", text: "开源引擎办到『有自己年度大会』这一步，生态成熟度已经不是玩票了。去不了现场的可以蹲官方频道回放——Godot 的路线图讨论全程公开，这种透明度反过来是它对商业引擎最大的差异化。参考来源：Godot Engine 官方博客。" }
    ] },
    { id: "godot-showreel-2026", category: "engine", subcategory: "社区征集", title: "Godot 2026 年度展示视频开始征集：你的 Godot 作品可以上官方片", summary: "Godot 官方开放 2026 年度展示视频（Showreel）征集：已发布或开发中的 Godot 游戏/工具均可提交短视频——学生作品露脸官方频道的低成本机会。", source: "Godot Engine 官方博客", date: "2026-08-15", url: "https://godotengine.org/article/submissions-open-godot-2026-showreel/", image: "https://godotengine.org/storage/blog/covers/godot-showreel-2024.webp", badge: "社区征集", badgeType: "engine", readTime: "3 分钟", hotScore: 69, tags: ["Godot", "Showreel", "社区活动", "作品展示"], content: [
      { title: "征集要点", type: "list", items: ["Godot 2026 年度展示视频征集开放；", "已发布或开发中的 Godot 游戏/工具均可提交；", "入选作品进入官方年度展示片，面向全社区曝光。"] },
      { title: "笔者观察", type: "text", text: "对在校生来说，这是『官方渠道背书』里门槛最低的一种：不需要得奖，只需要一段 15 秒的能看片段。顺手提醒：showreel 片段的标准是『一眼能懂在玩什么』——剪的时候把 UI 和核心玩法露出来，别用氛围镜头凑时长。参考来源：Godot Engine 官方博客。" }
    ] },
    { id: "game-programming-patterns-book", category: "tutorials", subcategory: "经典必读", title: "《游戏编程模式》免费在线全书：游戏程序员的必读经典", summary: "Bob Nystrom 的 Game Programming Patterns 全书免费在线阅读：游戏循环、状态机、对象池、事件队列、组件模式……把『设计模式』翻译成游戏工程语言的开山之作。", source: "gameprogrammingpatterns.com", date: "2026-10-02", url: "https://gameprogrammingpatterns.com/", image: "", badge: "经典必读", badgeType: "tutorial", readTime: "全书 20 章", hotScore: 81, tags: ["设计模式", "游戏编程", "架构", "免费"], content: [
      { title: "资源要点", type: "list", items: ["全书免费在线，另有实体书与电子书；", "覆盖游戏循环、状态机、对象池、事件队列、组件等核心模式；", "作者 Bob Nystrom 为 Dart/Hanabi 知名工程师，行文晓畅。"] },
      { title: "笔者观察", type: "text", text: "如果只能推荐一本游戏程序的书，我选它：它教的不是 API，是『游戏里的重复问题都有名字』——有了名字，你才能在面试和 review 里把经验说清楚。国庆假期每天读一章，两周刚好过完常用的一半。参考来源：gameprogrammingpatterns.com。" }
    ] },
    { id: "catlike-coding-tutorials", category: "tutorials", subcategory: "进阶系列", title: "Catlike Coding Unity 教程系列：从网格到渲染管线的自学阶梯", summary: "Catlike Coding 的 Unity 教程系列长期被视为 Unity 深度自学教材：网格与贴图、程序化动画、渲染管线逐章拆解——比 API 文档更深一层的免费资源。", source: "Catlike Coding", date: "2026-10-02", url: "https://catlikecoding.com/unity/tutorials/", image: "https://catlikecoding.com/unity/tutorials/banner.png", badge: "进阶系列", badgeType: "tutorial", readTime: "长期自学", hotScore: 77, tags: ["Unity", "渲染", "程序化", "进阶教程"], content: [
      { title: "资源要点", type: "list", items: ["免费开放，篇幅数十篇、难度递进；", "经典子系列：Procedural Grid、Marching Squares、Custom SRP；", "特色：从零手写每一行，不依赖现成组件。"] },
      { title: "笔者观察", type: "text", text: "它的独特之处是『让你实现一遍你以为会用』的东西：用Unity 三年，跟着写一次 Custom SRP 你才知道渲染管线到底发生了什么。适合已经能做游戏、但说不清『为什么能跑』的同学——这正是校招面试最爱问的层。参考来源：Catlike Coding。" }
    ] },
    { id: "book-of-shaders", category: "tutorials", subcategory: "图形入门", title: "The Book of Shaders：着色器入门圣经，浏览器里逐段跑", summary: "The Book of Shaders 用片段着色器把图形学入门变成可以在浏览器里逐段运行的互动教程——想做风格化渲染与特效 TA 方向的第一站。", source: "thebookofshaders.com", date: "2026-10-02", url: "https://thebookofshaders.com/", image: "https://thebookofshaders.com/thumb.png", badge: "图形入门", badgeType: "tutorial", readTime: "自学", hotScore: 76, tags: ["Shader", "图形学", "GLSL", "互动教程"], content: [
      { title: "资源要点", type: "list", items: ["以片段着色器（fragment shader）为主线；", "每节配在线编辑器，改一行立刻看到效果；", "有社区翻译的多语言版本，中文资源可搜到。"] },
      { title: "笔者观察", type: "text", text: "TA 方向的入门材料里，它是『反馈回路最短』的一本：没有环境配置，打开浏览器就有正反馈——这对坚持率的影响是决定性的。学完 shape、pattern、noise 三章，你就已经能看懂大半 2D 特效 shader 了。参考来源：thebookofshaders.com。" }
    ] },
    { id: "freya-splines-video", category: "tutorials", subcategory: "游戏数学", title: "Freya Holmér《样条的连续性》：把游戏数学讲出美学的神作", summary: "Freya Holmér 的长视频《The Continuity of Splines》从游戏开发视角讲透样条曲线的连续性谱系——相机轨迹、角色路径、曲线编辑器背后的数学一次讲清。", source: "YouTube: Freya Holmér", date: "2026-10-02", url: "https://www.youtube.com/watch?v=jvPPXn87pxM", image: "https://i.ytimg.com/vi/jvPPXn87pxM/hqdefault.jpg", badge: "游戏数学", badgeType: "tutorial", readTime: "长视频精看", hotScore: 75, tags: ["游戏数学", "样条", "路径", "视频教程"], content: [
      { title: "视频要点", type: "list", items: ["系统讲解 C0/G1/C2 等连续性级别的直观差异；", "所有示例从游戏开发场景出发（轨迹、路径、相机）；", "可视化质量极佳，数学恐惧症友好。"] },
      { title: "笔者观察", type: "text", text: "为什么你的相机轨迹『说不上来的不顺』？十有八九是连续性级别选错了——这个概念课本里讲得极枯燥，Freya 用可视化把它讲成了审美体验。做关卡脚本与运动系统的同学把它当必修课，看懂之后再打开你项目的 Curve 编辑器，你会看见完全不同的东西。参考来源：YouTube。" }
    ] },
    { id: "ggj-2027-schedule", category: "contest", subcategory: "国际Jam", title: "Global Game Jam 2027 定档 1 月 25-31 日：站点注册 11 月 1 日开放", summary: "GGJ 官网确认 2027 年 Jam 于 1 月 25-31 日全球同步举行：Jam 站点注册 11 月 1 日开放、参赛者注册 12 月 1 日开放——国内高校想承办站点现在就该筹备；另有 GGJ@GDC 联合 Jam 报名至 10 月 19 日。", source: "Global Game Jam 官网", date: "2026-10-02", url: "https://globalgamejam.org/", image: "", badge: "赛程日历", badgeType: "event", readTime: "4 分钟", hotScore: 86, tags: ["Global Game Jam", "GameJam", "高校组队", "国际赛事"], content: [
      { title: "赛程要点", type: "list", items: ["GGJ 2027：2027 年 1 月 25-31 日全球同步；", "Jam 站点注册 2026 年 11 月 1 日开放，参赛者注册 12 月 1 日开放；", "GGJ@GDC 联合 Jam（冲击世界纪录）报名至 2026 年 10 月 19 日；", "官方数据：累计参与者 50 万+，作品 11 万+，覆盖 132 个国家和地区。"] },
      { title: "笔者观察", type: "text", text: "给学校游戏社团的任务清单：11 月 1 日抢站点注册（site 名额先到先得），12 月组织校内预热，1 月正式参战——三个节点都写进社团日历。承办站点对社团是资产级事件：官方名录里的『XX大学 Site』就是明年招新的最大招牌。参考来源：Global Game Jam 官网。" }
    ] },
    { id: "ncda-14th-wrapup", category: "contest", subcategory: "高校赛事", title: "NCDA 第 14 届收尾：游戏艺术设计类奖项已公布，创新创业赛道国赛进行中", summary: "未来设计师·全国高校数字艺术设计大赛第 14 届进入收尾：非命题赛道『游戏艺术设计』（G 类）与『交互设计』奖项已公布、国赛证书可下载；创新创业赛道国赛仍在进行，专项赛截稿至 10 月 31 日——第 15 届征稿值得蹲守。", source: "NCDA 官网", date: "2026-10-02", url: "https://www.ncda.org.cn/", image: "", badge: "赛程日历", badgeType: "event", readTime: "4 分钟", hotScore: 76, tags: ["NCDA", "数字艺术设计", "游戏艺术设计", "高校赛事"], content: [
      { title: "赛程要点", type: "list", items: ["第 14 届省赛/国赛证书已可下载；", "非命题赛道游戏艺术设计（G 类）、交互设计（C 类）奖项已公布；", "创新创业赛道国赛进行中，部分专项赛截稿 2026-10-31；", "赛事入选全国普通高校大学生竞赛排行榜。"] },
      { title: "笔者观察", type: "text", text: "关注 NCDA 的正确姿势是看它的『获奖名单当风向标』：游戏艺术设计类获奖作品的风格与题材，基本就是明年各大厂校招作品集审美的先行指标。现在把第 14 届获奖作品过一遍，给第 15 届（明年春季校赛启动）的选题攒弹药，时间刚刚好。参考来源：NCDA 官网。" }
    ] },
    { id: "booom-baozao-gcores", category: "contest", subcategory: "国内Jam", title: "机核『暴造』BOOOM 系列入口：每年两届限时 3 周，BOOOMSeek 持续征集", summary: "BOOOM 游戏创作挑战常驻机核『暴造』社区：每年固定两届、限时 3 周、限定主题，2026 春季『视界限』届的优秀作品已亮相核聚变与 ChinaJoy；移动端 BOOOMSeek 长期征集——官方 tag 页是追赛程的第一入口。", source: "机核 GCORES 暴造社区", date: "2026-10-02", url: "https://www.gcores.com/tags/28150", image: "", badge: "国内赛事", badgeType: "event", readTime: "4 分钟", hotScore: 74, tags: ["BOOOM", "机核", "GameJam", "暴造"], content: [
      { title: "赛事要点", type: "list", items: ["BOOOM 每年固定两届：限时 3 周 + 限定主题；", "2026 春季届『视界限』优秀作品已线下亮相核聚变与 ChinaJoy；", "BOOOMSeek 面向移动端游戏长期征集；", "官方 tag 页集中发布开题、提交、评选全流程公告。"] },
      { title: "笔者观察", type: "text", text: "3 周赛制比 48 小时 Jam 更适合第一次参赛的团队：够把完成度做出来，又短到逼你砍需求。留意它的『线上试玩游戏节』环节——作品被真实玩家玩到并给出反馈，这个环节对毕设的价值比奖项本身大。关注 tag 页，秋季届开题第一时间上车。参考来源：机核 GCORES。" }
    ] },
    { id: "jobs-roundup-october", category: "industry", subcategory: "人事动向", title: "GI.biz 十月人事汇总：Code Wizards 新任商务主管、CDPR 传播线升 VP", summary: "GamesIndustry.biz 十月 Jobs Roundup：Code Wizards Group 任命 Catherine Bygrave 为商务主管，CD Projekt Red 的 Michał Platkow-Gilewski 升任全球传播与营销副总裁——十月的行业人事流动一览。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/jobs-roundup-october-code-wizards-group-appoints-catherine-bygrave-as-head-of-commercial", image: "https://assetsio.gnwcdn.com/Catherine-Bygrave-New-edit-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "人事动向", badgeType: "business", readTime: "4 分钟", hotScore: 70, tags: ["人事", "CDPR", "Code Wizards", "行业动向"], content: [
      { title: "事件要点", type: "list", items: ["Code Wizards Group 任命 Catherine Bygrave 为商务主管；", "CDPR 的 Michał Platkow-Gilewski 升任全球传播与营销副总裁；", "月度 Jobs Roundup 汇总多家公司人事变动。"] },
      { title: "笔者观察", type: "text", text: "把 Jobs Roundup 当月更读物看的隐藏价值：它告诉你『哪些岗位在被创造』——商务、传播、社区这些非开发岗的任命频率，是行业职能专业化程度的温度计。做职业规划时，盯岗位创设趋势比盯招聘人数更前瞻。参考来源：GamesIndustry.biz。" }
    ] }
  ]
}
