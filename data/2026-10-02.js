window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-02",
    weekday: "星期五",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-02 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "Capcom 不愁生化危机『没得重制』：时间线交汇的神秘 crossover 已在筹划",
      "欧盟消费者保护网络对 9 家公司就游戏内货币问题发起联合行动",
      "《王权》《纸牌鲨》开发商 Nerial 宣布关停：创始人『回到根源』",
      "《巫师3》叙事总监谈新 DLC：这个设定『感觉是非常自然的选择』",
      "《No Law》：一款立志做出 Arkane 式反应性的高墙之城潜行新作"
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
    ] }
  ]
}
