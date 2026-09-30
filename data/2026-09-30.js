window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-30",
    weekday: "星期三",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-09-30 10:16",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "Valve 把 Steam 首页折扣与活动区块交给算法推荐：平台分发逻辑生变",
      "独立游戏要不要躲 GTA6 的 11 月？GI.biz 发起档期大讨论",
      "Deadlock 更新带来 6 名新英雄与超 1 万条新语音：Valve 还在认真押注",
      "《巫师3》新 DLC《Songs of the Past》自比《血与酒》：走『更梦境』的叙事路线",
      "《Satisfactory》首个资料片《Core Values》：这次没有传送带"
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
    id: "valve-steam-algorithmic-homepage",
    category: "industry",
    categoryName: "行业热点 · 头条",
    tag: "平台巨变",
    title: "Valve 把 Steam 首页折扣与活动区块交给算法：『你看到什么』从此由推荐系统决定",
    summary: "Valve 正在改造 Steam 首页的折扣与活动展示区，从人工编排的固定区块转向算法驱动的个性化推荐流——目标是让玩家看到（并购买）更多游戏。这对依赖首页曝光位的中小游戏是一次分发逻辑层面的地震。",
    image: "https://assetsio.gnwcdn.com/steam-discounts-events.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Rock Paper Shotgun",
    date: "2026-09-29",
    url: "https://www.rockpapershotgun.com/valve-is-changing-steams-homepage-discounts-and-events-section-to-go-the-way-of-the-algorithm-to-get-you-to-look-at-and-buy-obviously-more-games",
    readTime: "5 分钟深度",
    hotScore: 93,
    tags: ["Valve", "Steam", "算法推荐", "平台分发", "独立游戏"],
    content: [
      { title: "变化要点", type: "list", items: ["Steam 首页的折扣与活动展示区改为算法驱动的个性化推荐；", "推荐目标是『让你看到、并购买更多游戏』；", "人工编排的固定曝光位权重下降，个体差异化的首页成为常态；", "对中小发行商：传统的『抢首页档期』打法价值被稀释。"] },
      { title: "笔者观察", type: "text", text: "Steam 首页过去是全行业最值钱的『免费广告位』，算法化之后它变成了信息流——参考所有已经被算法改造过的平台，赢家永远是『让算法能理解你』的内容：干净的标签、清晰的品类、稳定的更新信号。对学生团队，这条的实际动作是：商店页的 tag 与截图质量不再是『锦上添花』，而是分发的基本盘。参考来源：Rock Paper Shotgun。" }
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
    { id: "indies-vs-gta6-november", category: "industry", subcategory: "深度评论", title: "『我们凭什么要让出整个 11 月？』：独立游戏与 GTA6 的档期正面对决", summary: "GamesIndustry.biz 评论文章直问行业：当 GTA6 拿下 11 月档期，独立游戏是否只能集体避让？文章列举了正面硬刚的案例与逻辑——宣发预算不对等，但受众与档期空间并非零和。", source: "GamesIndustry.biz", date: "2026-09-29", url: "https://www.gamesindustry.biz/why-should-we-just-give-up-the-entire-month-of-november-the-indie-games-going-head-to-head-with-gta-6", image: "https://assetsio.gnwcdn.com/Ambrosia_06.0j9c7-8nfb_xf.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "深度评论", badgeType: "business", readTime: "8 分钟", hotScore: 89, tags: ["GTA6", "独立游戏", "档期策略", "发行"], content: [
      { title: "文章要点", type: "list", items: ["多个独立作品选择与 GTA6 同月发售，而非传统避让；", "核心论点：受众重叠度远低于直觉，预算差距不等于曝光为零；", "反向逻辑：大作吸走全行业注意力时，留下的注意力真空也是机会。"] },
      { title: "笔者观察", type: "text", text: "『避让 3A 档期』是行业迷信多于数据结论——历史上多次出现小体量作品在 3A 大月跑出的案例，共同点都是品类错位（大作是开放世界，它就做短平快的线性叙事）。学生团队做毕设发售规划时同理：避不开的对手不如错位打，找大作没覆盖的玩法情绪位。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "sony-skip-ces-2027", category: "industry", subcategory: "大厂动向", title: "索尼将首次缺席 CES 2027：1967 年创展以来的头一回", summary: "索尼确认将不参加 CES 2027——这是该展 1967 年创办以来索尼首次缺席。PlayStation 的展会策略收缩再添一笔，资源进一步向自有渠道与线上发布倾斜。", source: "GamesIndustry.biz", date: "2026-09-29", url: "https://www.gamesindustry.biz/sony-to-skip-ces-2027-for-first-time-since-expos-inaugural-event-in-1967", image: "https://assetsio.gnwcdn.com/p-l-zhSYYVFqpFY-unsplash-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "business", readTime: "3 分钟", hotScore: 78, tags: ["索尼", "CES", "展会策略", "PlayStation"], content: [
      { title: "报道要点", type: "list", items: ["索尼确认缺席 CES 2027，为 1967 年展创办以来首次；", "近年索尼已持续收缩大型综合展会的线下投入；", "游戏发 布 渠 道 继 续 向 State of Play 式自有线上活动集中。"] },
      { title: "笔者观察", type: "text", text: "连续两年看下来，『大展会』的门票价值正在被『自家直播间』替代——E3 死了，科隆和 TGS 也年年传出缩水。对想做发行、商务方向的同学，这意味着『跑展会认识人』的传统路径在贬值，而拆解各家线上发布会的节奏与包装，是更贴近未来工作方式的练习。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "deadlock-six-heroes-update", category: "games", subcategory: "热门追踪", title: "Deadlock 大更新：6 名新英雄 + 超 1 万条新语音，Valve 还在认真养这盘棋", summary: "Valve 的 MOBA+《Deadlock》最新更新带来六名新英雄、超过 1 万条新语音，以及大量系统改动——在外界以为项目进入静默期时，Valve 用更新体量表明仍在长期投入。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/with-deadlocks-latest-updating-promising-six-new-heroes-over-10000-new-voice-lines-and-too-much-more-to-mention-its-clear-valve-are-still-pretty-committed-to-it", image: "https://assetsio.gnwcdn.com/deadlock-city-never-sleeps.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "热门追踪", badgeType: "games", readTime: "5 分钟", hotScore: 82, tags: ["Deadlock", "Valve", "内容更新", "英雄设计"], content: [
      { title: "更新要点", type: "list", items: ["单次更新加入六名新英雄；", "超过 1 万条新语音文本与配音；", "外围系统与匹配体验同步大改。"] },
      { title: "笔者观察", type: "text", text: "1 万条语音是个值得拆解的数字：按每英雄每状态几十条算，这是把『角色塑造』当成内容管线在做，而不是后期补丁。想做叙事方向的同学可以研究 Valve 怎么让 MOBA 英雄『开口就有性格』——台词密度与触发场景的设计，比写长剧情更能练对白功力。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "witcher3-songs-of-the-past-dlc", category: "games", subcategory: "内容更新", title: "《巫师3》新 DLC《Songs of the Past》：官方自比《血与酒》，走『更梦境』的叙事", summary: "《巫师3》重制版同日推出的 DLC《Songs of the Past》被开发者形容为『比主线的面包黄油故事更梦幻』——路线对标当年广受赞誉的《血与酒》。随重制版免费升级一同落地。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/the-witcher-3-songs-of-the-past-sounds-like-its-mirroring-blood-and-wine-in-being-a-lot-dreamier-than-a-bread-and-butter-witcher-story", image: "https://assetsio.gnwcdn.com/witcher-3-songs-of-the-past-05.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "内容更新", badgeType: "games", readTime: "5 分钟", hotScore: 80, tags: ["巫师3", "Songs of the Past", "DLC", "叙事设计"], content: [
      { title: "内容要点", type: "list", items: ["《Songs of the Past》随重制版一同推出；", "开发者定位：比主线『更梦境（dreamier）』的叙事基调；", "对标《血与酒》——当年以明亮基调与童话感从主线中跳出来的成功资料片。"] },
      { title: "笔者观察", type: "text", text: "『资料片换基调』是长线 RPG 的高段位操作：主线越沉重，资料片越敢做明亮与梦境感——《血与酒》《曙光》都是这个公式。它证明老玩家要的不是更多一样的白狼皱眉，而是同一个世界里的另一种呼吸。做叙事设计的同学可以把这个公式记进选题库。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "witcher3-remastered-mod-restoration", category: "games", subcategory: "Mod 社区", title: "重制版『误伤』Mod 社区：野心勃勃的瘟疫任务复刻项目被打断，官方承诺『加点东西』修复", summary: "《巫师3》重制版上线打断了社区项目『被删瘟疫任务复刻 Mod』的进度——重制底层的改动让原方案失效。CDPR 随后表态将在后续更新中加入『something extra』让 Mod 重新可用，一场官方与 Mod 社区的教科书式互动。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/the-witcher-3-remastered-has-scuppered-an-ambitious-cut-plague-quest-restoration-mod-but-therell-be-something-extra-in-the-update-that-gets-it-working-again", image: "https://assetsio.gnwcdn.com/witcher-3-remastered-affect-on-war-project-mod-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "Mod 社区", badgeType: "games", readTime: "5 分钟", hotScore: 79, tags: ["巫师3", "Mod", "CDPR", "社区运营"], content: [
      { title: "事件要点", type: "list", items: ["社区团队正复刻开发期被砍的瘟疫任务线；", "重制版的底层改动使 Mod 原有实现方式失效；", "CDPR 回应将在后续更新中提供『something extra』帮助 Mod 恢复工作。"] },
      { title: "笔者观察", type: "text", text: "大版本更新破坏 Mod 兼容是行业常态，多数厂商选择沉默，CDPR 的『我们帮你修』是低成本高回报的社区投资——《巫师3》十年长青的一半功劳属于 Mod 社区，官方比谁都清楚。对想进引擎工具链方向的同学：Mod 兼容层、内容导出工具这些『不性感』的活，恰恰是最见工程功力的岗位。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "satisfactory-core-values-expansion", category: "games", subcategory: "内容更新", title: "《Satisfactory》首个资料片《Core Values》：这次没有传送带，整套新的资源搬运玩具", summary: "Coffee Stain 公布《Satisfactory》首个付费资料片《Core Values》：不是把本体贴图换个地下挖矿，而是一整套与传送带并行的全新资源搬运工具——开发组明确表示『你将不会再用传送带』。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/you-will-not-be-using-belts-satisfactorys-first-expansion-isnt-the-same-game-set-underground-theres-a-whole-new-set-of-resource-moving-toys-to-master", image: "https://assetsio.gnwcdn.com/Satisfactory-core-values-key-art.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "内容更新", badgeType: "games", readTime: "4 分钟", hotScore: 77, tags: ["Satisfactory", "Core Values", "模拟经营", "玩法设计"], content: [
      { title: "内容要点", type: "list", items: ["首个付费资料片《Core Values》；", "核心卖点：全新的资源搬运工具集，与传送带体系并行；", "开发者强调『不是换个地图重玩一遍』。"] },
      { title: "笔者观察", type: "text", text: "『资料片是同玩法新地图还是新玩法新工具』是模拟经营品类的经典分叉：前者便宜稳，后者贵但能续命。Coffee Stain 选了后者，赌的是核心玩家的疲劳曲线。做系统设计的同学值得盯这个案例：资源物流玩法的『第二套动词』（不再用传送带之后玩家凭什么爽）设计出来是什么样，比读十篇方法论都有用。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "lego-skylines-design-compromise", category: "engine", subcategory: "设计访谈", title: "《LEGO Skylines》开发访谈：『一个相当漂亮的妥协』——为什么放弃了逐块搭建", summary: "LEGO 城建模拟《LEGO Skylines》开发者透露：团队认真评估过『逐块搭建』的自由建造，最终决定砍掉——玩家要的是城市尺度的乐趣，不是管理一万块砖的劳动。主创称之为『一个相当漂亮的妥协』。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/a-quite-beautiful-compromise-the-lego-skylines-devs-did-consider-brick-by-brick-building-but-decided-it-was-too-much-fuss-for-players", image: "https://assetsio.gnwcdn.com/lego-skylines_0004_firefighter.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计访谈", badgeType: "engine", readTime: "6 分钟", hotScore: 78, tags: ["LEGO Skylines", "玩法取舍", "设计访谈", "城市建设"], content: [
      { title: "访谈要点", type: "list", items: ["逐块搭建（brick by brick）曾进入方案评估；", "被砍理由：城市尺度下逐块操作对玩家是劳动而非乐趣；", "最终方案保留 LEGO 视觉与主题，操作粒度对齐城建模拟习惯。"] },
      { title: "笔者观察", type: "text", text: "这是本周对设计者最有用的一篇：它展示的不是『做了什么』而是『敢不做』——IP 方（LEGO）最引以为傲的逐块拼搭，在城建语境下被判定为负资产。学生项目最容易犯的就是舍不得砍：功能列表越长越安全是错觉，一个把『缩放粒度』想清楚的玩法，胜过十个都要的缝合体。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "strange-scaffold-haunted-library", category: "games", subcategory: "独立观察", title: "Strange Scaffold 新作：在《生命交换》之后，这次让你整理一座闹鬼图书馆", summary: "以《Life Eater》《A Death in the Red Light District》等高概念小品著称的 Strange Scaffold 公布新作《Something is Wrong with the Library》——玩家这次要整理一座闹鬼的图书馆，仍是该工作室标志性的『怪题材 + 短平快』路线。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/after-trading-space-babies-and-running-people-over-with-a-truck-strange-scaffold-want-you-to-organise-a-haunted-library-in-something-is-wrong-with-the-library", image: "https://assetsio.gnwcdn.com/something-is-wrong-with-the-library.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "4 分钟", hotScore: 71, tags: ["Strange Scaffold", "独立游戏", "高概念", "发行节奏"], content: [
      { title: "报道要点", type: "list", items: ["工作室新作《Something is Wrong with the Library》公布；", "玩法核心：整理一座闹鬼图书馆；", "Strange Scaffold 近年以高频短平快高概念作品保持曝光（送太空婴儿、开车撞人等前作）。"] },
      { title: "笔者观察", type: "text", text: "Strange Scaffold 是当代独立发行节奏的最佳研究样本：不赌三年大作，用一年三四个高概念小品维持品牌热度与现金流，每个项目的概念都怪到『一句话就能被写进新闻标题』。对想以独立团队活下去的同学，这种『概念产品化』的选题纪律比技术力更值得抄。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "indie-survive-volatility-opinion", category: "tutorials", subcategory: "行业随笔", title: "行业震荡期，独立工作室怎么活：一篇写给小团队的自救清单", summary: "GamesIndustry.biz 刊发观点文章，讨论独立工作室在融资收紧、发行保守、平台规则多变的环境下的生存策略——从现金流纪律到团队规模决策，给出了可直接执行的优先级建议。", source: "GamesIndustry.biz", date: "2026-09-29", url: "https://www.gamesindustry.biz/how-indie-studios-can-survive-industry-volatility-opinion", image: "https://assetsio.gnwcdn.com/replaced-fire.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "行业随笔", badgeType: "tutorial", readTime: "7 分钟", hotScore: 75, tags: ["独立工作室", "生存策略", "现金流", "行业观察"], content: [
      { title: "文章要点", type: "list", items: ["融资环境收紧下，现金跑道优先于产品野心；", "接外包维持现金流的『双轨制』被重新评估；", "团队规模决策：扩张前先假设行业不会更好；", "平台与发行条款的议价地位在分化。"] },
      { title: "笔者观察", type: "text", text: "这篇对还没开公司的学生同样有用——它教你用『行业不会更好』做保底假设来规划职业：毕业进独立团队还是大厂，本质是选『高波动高成长』还是『低波动稳现金流』，没有对错，但要选得明白。文章里把现金跑道放第一位的排序，放在个人财务上一样成立。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "naughty-dog-intergalactic-2027-reveal", category: "industry", subcategory: "大厂动向", title: "顽皮狗确认《Intergalactic》2027 年『全面揭露』：末日之余的下一个十年", summary: "Neil Druckmann 在 Last of Us Day 收官博客中确认，新作《Intergalactic: The Heretic Prophet》将于 2027 年全面公开——在《最后生还者》剧集与重制版持续输出之间，工作室的新 IP 终于给出了时间表。", source: "Naughty Dog 官方博客", date: "2026-09-30", url: "https://www.naughtydog.com/blog/neil-druckmann-closes-the-last-of-us-day", image: "https://cdn.craft.cloud/22b11234-f633-4f7c-8ac2-099f2dba995c/assets/uploads/TLOUDay2026_NeilBlog_16x9.png", badge: "大厂动向", badgeType: "business", readTime: "3 分钟", hotScore: 80, tags: ["顽皮狗", "Intergalactic", "新IP", "PlayStation"], content: [
      { title: "公告要点", type: "list", items: ["《Intergalactic: The Heretic Prophet》2027 年全面公开；", "公告发布于 Last of Us Day 收官博客，由 Druckmann 亲笔；", "这是该新 IP 自首支预告后少有的官方时间表信息。"] },
      { title: "笔者观察", type: "text", text: "『一个 IP 养一个工作室十年，新 IP 只敢给年份不给季度』——第一方大厂的宣发节奏本身就是风险管理的教科书。对学项目管理的人，值得观察顽皮狗怎么在双线作战（旧 IP 长线运营 + 新 IP 研发）里分配宣发节奏与人力信号。参考来源：Naughty Dog 官方博客。" }
    ] },
    { id: "unity-meta-vr-glasses-day-one", category: "engine", subcategory: "平台动态", title: "Meta VR 眼镜官宣在即，Unity 抢先发布『第一天就支持』开发者指南", summary: "Unity 官方博客发布针对 Meta 即将推出的 VR 眼镜的开发者指南：工具链、移植路径与发布注意事项，目标是让现有 Unity VR 项目『第一天就能跑在新硬件上』——平台竞争的前哨战已经打到开发者工具层。", source: "Unity 官方博客", date: "2026-09-24", url: "https://unity.com/blog/build-for-meta-vr-glasses-with-unity", image: "https://cdn.sanity.io/images/fuvbjjlp/production/05e5ed66e3b41f62ebd94626e6327bdc6f9eb3e6-1920x1080.png", badge: "平台动态", badgeType: "engine", readTime: "6 分钟", hotScore: 79, tags: ["Unity", "Meta", "VR", "平台移植"], content: [
      { title: "指南要点", type: "list", items: ["Meta 新一代 VR 眼镜公布在即，Unity 提供首日支持路径；", "现有 OpenXR 项目的主要适配点与工程清单；", "内容分发与上架流程的注意事项。"] },
      { title: "笔者观察", type: "text", text: "引擎厂商在新硬件发布前抢『day one』宣发，是平台战争里最诚实的信号——谁被官方点名支持，谁就拿到第一波迁移红利。对 VR 方向的学生：现在把项目迁移到标准 OpenXR 接口上，比绑定任何一家 SDK 都是更便宜的未来保险。参考来源：Unity 官方博客。" }
    ] },
    { id: "unity-cli-cicd-pipeline", category: "tutorials", subcategory: "工具链", title: "Unity CLI 把 CI/CD 做简单了：官方教程走出『yaml 地狱』的第一步", summary: "Unity 官方博客演示如何用 Unity CLI 搭建最小可用的 CI/CD 流程：不依赖第三方编排工具，命令行直连构建、测试、分发三个环节——对没有专职基建的小团队是一份可直接落地的模板。", source: "Unity 官方博客", date: "2026-09-15", url: "https://unity.com/blog/cicd-made-easier-with-unity-cli", image: "https://cdn.sanity.io/images/fuvbjjlp/production/c594c30acef22d41ef9c72fbbb50774e8a4ba50f-1920x1080.png", badge: "工具链", badgeType: "tutorial", readTime: "7 分钟", hotScore: 80, tags: ["Unity", "CI/CD", "CLI", "自动化"], content: [
      { title: "教程要点", type: "list", items: ["Unity CLI 覆盖构建、测试、分发全链路命令；", "最小 CI 流程：一个脚本文件即可跑通；", "与 GitHub Actions 等外部编排的组合方式。"] },
      { title: "笔者观察", type: "text", text: "小团队上 CI 最大的坑从来不是工具而是『一步到位的野心』——照着大厂全家桶抄 yaml，三天后弃疗。这篇的『先 CLI 后编排』路径是对的：先让一个本地脚本稳定跑通构建，再挂到任何 CI 上都只是复制粘贴。学生团队毕设期就该把这条跑通。参考来源：Unity 官方博客。" }
    ] },
    { id: "unity-drakkenridge-mobile-vr-ecs", category: "tutorials", subcategory: "架构案例", title: "DrakkenRidge 案例研究：开放世界手游化 VR，ECS 架构实战拆解", summary: "Unity 官方博客复盘开放世界移动 VR RPG《DrakkenRidge》的架构选型：为什么移动 VR 这个『性能地狱』场景值得上 ECS——实体规模、流式加载与渲染解耦的实际收益数字。", source: "Unity 官方博客", date: "2026-09-08", url: "https://unity.com/blog/drakkenridge-building-open-world-mobile-vr-rpg-unity-ecs", image: "https://cdn.sanity.io/images/fuvbjjlp/production/b51d426731a1be8f7ee77cae93a3c4c0a9b88d8e-2560x1440.png", badge: "架构案例", badgeType: "tutorial", readTime: "10 分钟", hotScore: 79, tags: ["Unity", "ECS", "开放世界", "移动VR"], content: [
      { title: "案例要点", type: "list", items: ["移动 VR 下开放世界的实体规模压力测算；", "ECS 数据导向改造后各环节的收益量化；", "流式加载与渲染管线的配合设计。"] },
      { title: "笔者观察", type: "text", text: "ECS 教程网上多得是，但『在哪个真实场景下值得付迁移成本』的一手案例很少——这篇的价值就在选型论证部分：不是 ECS 万能，而是移动 VR 的实体密度恰好踩在传统 MonoBehaviour 架构的失效点上。学架构的同学重点读决策段落，别只抄代码。参考来源：Unity 官方博客。" }
    ] },
    { id: "ogre-14-6-released", category: "opensource", subcategory: "开源引擎", title: "OGRE 14.6 发布：22 岁的开源渲染引擎还在稳定输血", summary: "老牌开源渲染引擎 OGRE 发布 14.6 维护版本：Clustered 渲染相关改进与一批重要修复，官方建议所有 14.x 用户升级——这个从 2004 年活到今天的引擎，仍是不少商业项目与教学场景的底座。", source: "OGRE 官网", date: "2026-09-09", url: "https://www.ogre3d.org/2026/09/09/ogre-14-6-released", image: "https://www.ogre3d.org/wp-content/uploads/2026/08/clustered.webp", badge: "开源引擎", badgeType: "engine", readTime: "4 分钟", hotScore: 76, tags: ["OGRE", "开源引擎", "渲染", "Clustered"], content: [
      { title: "版本要点", type: "list", items: ["Clustered（集群）渲染路径改进；", "一批重要 bug 修复，官方建议 14.x 全系升级；", "完整变更见官方 changelog。"] },
      { title: "笔者观察", type: "text", text: "学图形的人应该 OGRE 当『可读源码的教科书』：它的架构文档比大多数现代引擎坦诚，代码量又小到能读完。22 年还在发维护版，说明『稳定渲染底座』这个生态位永远存在——不是所有引擎都要追 Nanite。参考来源：OGRE 官网。" }
    ] },
    { id: "shattered-pixel-dungeon-v4", category: "opensource", subcategory: "开源游戏", title: "Shattered Pixel Dungeon v4.0.0：史上最大更新，开源 Roguelike 的十年样本", summary: "知名开源 Roguelike《碎碎像素地牢》发布 v4.0.0：大型新任务线、全套新美术与多项系统重做，官方称之为项目史上最大更新——一款纯社区驱动、零内购的游戏如何活到第十年，答案都在更新日志里。", source: "Shattered Pixel 官方博客", date: "2026-09-09", url: "https://shatteredpixel.com/blog/shattered-pixel-dungeon-v400.html", image: "https://shatteredpixel.com/assets/images/2026/2026-09-09/header.jpg", badge: "开源游戏", badgeType: "game", readTime: "5 分钟", hotScore: 78, tags: ["Shattered Pixel Dungeon", "开源游戏", "Roguelike", "长线运营"], content: [
      { title: "更新要点", type: "list", items: ["v4.0.0 为项目史上最大版本；", "包含大型新任务、6 项新内容与大量美术重绘；", "项目保持开源免费、无内购的社区模式。"] },
      { title: "笔者观察", type: "text", text: "想做长线运营又不想碰氪金设计的人，应该把 SPD 当商业模式对照组：它的『收入』是社区贡献与长期口碑，用十年更新节奏证明了这条路的可行性。学程序的同学还可以直接读它的源码——Java 写的，结构清晰，是少数真能读完的商业级游戏代码库。参考来源：Shattered Pixel 官方博客。" }
    ] },
    { id: "github-paperclip-agent-workspace", category: "opensource", subcategory: "AI 工具", title: "GitHub 本周爆款 PAPERCLIP：给工作流里的 AI Agent 找个『工位』", summary: "开源项目 PAPERCLIP 本周狂揽 1.2 万+ star（总 9 万+）：定位是『在工作中管理 agents 的开源应用』——当每个人都开始养几个 AI 智能体，『管理它们』本身成了新赛道。", source: "GitHub: PAPERCLIPAI/PAPERCLIP", date: "2026-09-30", url: "https://github.com/PAPERCLIPAI/PAPERCLIP", image: "https://opengraph.githubassets.com/1/paperclipai/paperclip", badge: "AI 工具", badgeType: "hot", readTime: "4 分钟", hotScore: 82, tags: ["GitHub", "AI Agent", "开源", "工作流"], content: [
      { title: "项目看点", type: "list", items: ["本周 star 增速位居 GitHub Trending 前列；", "核心场景：多 agent 的编排、监控与任务管理；", "开源可自部署，面向个人与小团队工作流。"] },
      { title: "笔者观察", type: "text", text: "Trending 榜连续几周被 Agent 基建类项目刷屏，这是行业重心从『做模型』转向『用模型』的直接证据。对游戏开发者，这类工具的近期价值是把你手头的重复环节（构建检查、资源校验、周报整理）交给 agent——先从一个最小任务试起，别上来就搭全家桶。参考来源：GitHub。" }
    ] },
    { id: "github-hindsight-agent-memory", category: "opensource", subcategory: "AI 基建", title: "Hindsight：会学习的 Agent 记忆系统，本周 GitHub 增星 1.7 万", summary: "Vectorize 开源的 Hindsight 本周新增 1.7 万+ star：为 AI Agent 提供『会学习』的记忆层——长期记忆、经验沉淀与召回，解决智能体『每次对话都失忆』的老大难。", source: "GitHub: vectorize-io/hindsight", date: "2026-09-30", url: "https://github.com/vectorize-io/hindsight", image: "https://opengraph.githubassets.com/1/vectorize-io/hindsight", badge: "AI 基建", badgeType: "hot", readTime: "4 分钟", hotScore: 81, tags: ["GitHub", "AI Agent", "记忆系统", "开源"], content: [
      { title: "项目看点", type: "list", items: ["为 Agent 提供长期记忆与经验召回层；", "支持把历史交互沉淀为可复用的『经验』；", "本周 GitHub Trending 增星 1.7 万+。"] },
      { title: "笔者观察", type: "text", text: "『记忆』是 AI NPC 走向真实用的最后一块短板——现在的 NPC 不是不聪明，是记不住玩家上周干过什么。这类通用 Agent 记忆层的方案，未来大概率会被游戏中间件消化。关注 AI NPC 方向的同学，读它的记忆结构设计比读十篇 NPC 论文有手感。参考来源：GitHub。" }
    ] },
    { id: "github-bonsai-gaussian-splatting", category: "opensource", subcategory: "图形渲染", title: "Bonsai 开源：3D 高斯泼溅的 Python 全家桶，本周 Trending 上升", summary: "3D 高斯泼溅（3DGS）领域的知名 Python 框架 Bonsai 本周登上 GitHub Trending（3.2k+ star）：从训练到渲染的完整管线，是研究 3DGS 与实景扫描进游戏管线的最佳入门代码库之一。", source: "GitHub: PrismML-Eng/Bonsai-demo", date: "2026-09-30", url: "https://github.com/prismml-eng/bonsai-demo", image: "https://opengraph.githubassets.com/1/PrismML-Eng/Bonsai-demo", badge: "图形渲染", badgeType: "engine", readTime: "4 分钟", hotScore: 77, tags: ["3DGS", "高斯泼溅", "图形学", "开源"], content: [
      { title: "项目看点", type: "list", items: ["3D 高斯泼溅的 Python 完整管线（训练 + 渲染）；", "本周 GitHub Trending 持续上升；", "适合作为 3DGS 学习与二次开发的起点。"] },
      { title: "笔者观察", type: "text", text: "3DGS 进游戏管线的路正在快速铺通：实景扫描 → 高斯场 → 引擎渲染，中间不再需要建模师手工重拓扑。对图形方向的同学，现在学 3DGS 的性价比高于再啃一遍传统 PBR 管线——前者还在高速变化，先上车的人吃得到工具红利。参考来源：GitHub。" }
    ] },
    { id: "openai-devday-2026-agent-platform", category: "ai", subcategory: "大模型", title: "OpenAI DevDay 2026：20+ 项更新把 ChatGPT 推向『主动智能体平台』", summary: "OpenAI 在 DevDay 2026 发布超 20 项更新：新一代模型、Codex 升级、Agent API 与常驻智能体产品——主线清晰：AI 从『你问它答』转向『它持续替你办事』，开发者工具链全面围绕 agent 重组。", source: "CNBC（DevDay 现场报道）", date: "2026-09-29", url: "https://www.cnbc.com/2026/09/29/openai-devday-2026-live-updates.html", image: "https://image.cnbcfm.com/api/v1/image/108369815-1790712597213-gettyimages-2297765991-_04a9178_m4u5cgwo.jpeg?v=1790712953&w=1920&h=1080", badge: "大模型", badgeType: "ai", readTime: "6 分钟", hotScore: 92, tags: ["OpenAI", "DevDay", "AI Agent", "API"], content: [
      { title: "发布要点", type: "list", items: ["DevDay 2026 发布超 20 项更新，为历届规模最大；", "模型、Codex、Agent API 与常驻智能体全面升级；", "官方口径：推动『主动智能』时代，AI 持续承担任务。"] },
      { title: "笔者观察", type: "text", text: "对游戏开发者的实际影响在工具链而非玩法：Codex 类编码 agent 每次升级，『写代码』这个工种的市场定价就重估一分。真正值得花时间的是 Agent API 的任务编排模型——游戏里的任务系统设计思路（目标分解、状态机、失败回滚）恰好是理解它的最好前置知识。参考来源：CNBC。" }
    ] },
    { id: "meta-horizon-create-studio", category: "ai", subcategory: "AI 工具", title: "Meta 开放 Horizon Create/Studio 早期访问：一句话生成完整手游，直接进 Instagram 信息流", summary: "Meta 官方开发者博客宣布 Horizon Create（手机端）与 Horizon Studio（网页端）开放早期访问注册：自然语言生成完整 2D/3D 游戏，发布后原生跑在 Facebook/Instagram/Horizon 里——AI 游戏的分发战场正式开打。", source: "Meta for Developers 官方博客", date: "2026-09-24", url: "https://developers.meta.com/blog/meta-connect-recap-horizon-create-and-horizon-studio/", image: "", badge: "AI 工具", badgeType: "ai", readTime: "6 分钟", hotScore: 88, tags: ["Meta", "AI 生成游戏", "Horizon", "分发"], content: [
      { title: "产品要点", type: "list", items: ["Create（手机 App）：提示词生成游戏雏形，多项目并行；", "Studio（网页端）：可视化编辑器 + Meta AI 场景重塑；", "两工具项目互通，成品原生分发至 FB/IG/Horizon。"] },
      { title: "笔者观察", type: "text", text: "这波真正的杀招不是生成能力，是分发位：游戏直接住在 30 亿人的信息流里。『做游戏』的门槛问题正在被 AI 工具粗暴拉平，接下来的稀缺资源只剩两个——玩法创意和分发位。对独立开发者，认真研究它的 Creator Fund 与变现条款，可能比研究提示词更重要。参考来源：Meta 官方开发者博客。" }
    ] },
    { id: "github-stably-orca-agent-ide", category: "ai", subcategory: "智能体", title: "Orca：把『一堆编码 Agent』变成一个开发环境的开源尝试", summary: "Stably AI 开源的 Orca 本周登上 GitHub Trending（总 star 8 万+）：定位是并行 Agent 的开发环境（ADE），用自己的订阅跑任意编码 agent，覆盖桌面、移动与远程运行时——Agent 工具层继续内卷。", source: "GitHub: StablyAI/Orca", date: "2026-09-30", url: "https://github.com/StablyAI/Orca", image: "https://opengraph.githubassets.com/1/stablyai/orca", badge: "智能体", badgeType: "ai", readTime: "4 分钟", hotScore: 78, tags: ["GitHub", "AI Agent", "开发环境", "开源"], content: [
      { title: "项目看点", type: "list", items: ["并行运行多个编码 Agent 的统一开发环境；", "支持自有订阅接入，跨桌面/移动/远程运行时；", "本周 GitHub Trending 增星 6000+。"] },
      { title: "笔者观察", type: "text", text: "当『用哪个 agent』变成『同时用五个 agent』，管理工具就成了刚需——Orca 和本周 Trending 上的一票 Agent 基建项目都在抢这个位置。游戏团队可以冷静观望：这类工具三个月一换代，先想清楚自己要并行的到底是哪几个重复任务，再选工具不迟。参考来源：GitHub。" }
    ] },
{ id: "xbox-minecraft-425m-milestone", category: "industry", subcategory: "大厂动向", title: "17 年 4.25 亿份、日均 30 万新玩家：Xbox CEO 曝出 Minecraft 的长寿数据", summary: "Xbox CEO Asha 在 Minecraft LIVE 之际晒出官方数据：17 年累计销量超 4.25 亿份，日均仍有超 30 万玩家首次入坑。本条聚焦长寿运营数据面（《Dungeons II》等新作公告已另行收录），两相对照更有信息量。", source: "Xbox CEO Asha Sharma（X 官方账号）", date: "2026-09-27", url: "https://x.com/asha_shar/status/2103898609393803471", image: "", badge: "大厂动向", badgeType: "business", readTime: "4 分钟", hotScore: 80, tags: ["Minecraft", "Xbox", "长线运营", "用户数据"], content: [
      { title: "数据要点", type: "list", items: ["17 年+ 累计销量 4.25 亿份以上；", "日均超 30 万玩家首次游玩 Minecraft；", "同场活动另宣布新维度（14 年来首个）与 Switch 2 版本。"] },
      { title: "笔者观察", type: "text", text: "『日均 30 万新玩家』比总量更值得盯——它说明长寿游戏的增长引擎不是老玩家留存而是新世代持续入坑，这背后是教育场景、模组生态与短视频传播的合力。做社区运营方向的同学，可以把 Minecraft 的『新玩家获取飞轮』当成长线运营的第一研究样本。参考来源：Xbox CEO 官方账号。" }
    ] },
    { id: "dongman-game-industry-index-report", category: "industry", subcategory: "行业报告", title: "《中国动漫游戏产业发展行业指数报告》发布：动漫游戏合流的数据注脚", summary: "9 月 29 日，中国动漫集团总经理肖健在四川资阳举办的『2026 中国动画百年』行业交流会上发布《中国动漫游戏产业发展行业指数报告》，以指数化数据全景呈现动漫与游戏产业的融合态势。", source: "人民网四川频道", date: "2026-09-29", url: "http://sc.people.com.cn/n2/2026/0929/c345167-41711259.html", image: "", badge: "行业报告", badgeType: "business", readTime: "4 分钟", hotScore: 74, tags: ["行业报告", "动漫游戏", "产业指数", "政策"], content: [
      { title: "事件要点", type: "list", items: ["报告于『2026 中国动画百年』行业交流会现场发布；", "以行业指数形式覆盖动漫产业发展基础、整体态势与趋势；", "同期发布《中国动漫产业高质量发展倡议》。"] },
      { title: "笔者观察", type: "text", text: "对走游戏美术、技术美术方向的同学，这类『动漫+游戏合流』的官方指数是选就业城市的参考信号——政策资源往哪个城市聚集，哪里的应届岗位就会先热。资阳这种非一线城市办全国性行业活动，本身就是要推动产业转移落地的信号。参考来源：人民网四川频道。" }
    ] },
    { id: "godot-4-8-dev-7-feature-freeze", category: "engine", subcategory: "版本动态", title: "Godot 4.8 dev 7 发布：特性冻结正式生效，进入纯修 Bug 阶段", summary: "Godot 今日发布 4.8 dev 7 快照，并宣布这是本周期最后一个特性快照——4.8 分支正式特性冻结，后续全力转向 Bug 修复与回归排查，稳定版进入倒计时。", source: "Godot Engine 官方博客", date: "2026-09-30", url: "https://godotengine.org/article/dev-snapshot-godot-4-8-dev-7/", image: "https://godotengine.org/storage/blog/covers/dev-snapshot-godot-4-8-dev-7.jpg", badge: "版本动态", badgeType: "engine", readTime: "5 分钟", hotScore: 84, tags: ["Godot", "4.8", "特性冻结", "开源引擎"], content: [
      { title: "版本要点", type: "list", items: ["dev 7 为 4.8 周期最后一个特性快照；", "分支转入 bugfix 与回归修复模式；", "官方同步回顾 dev 1~6 的全部新特性。"] },
      { title: "笔者观察", type: "text", text: "特性冻结（feature freeze）是开源引擎版本管理最值得学的节点：它把『想加什么』的争论强制切换成『稳住什么』的纪律。用 Godot 做毕设的团队，现在就可以把 4.8 dev 快照拉下来做兼容性预演，等稳定版发布时你已经提前踩完坑。参考来源：Godot 官方博客。" }
    ] },
    { id: "unity-6000-6-3-patch-release", category: "engine", subcategory: "版本动态", title: "Unity 6000.6.3f1 与 LTS 补丁同日上线：小版本里的修复清单值得读", summary: "Unity 同日发布 6000.6.3f1 正式版与 6000.3.25f1 LTS 补丁（9 月 24 日）：常规维护版本，但官方发布说明里的修复清单是排查『玄学 Bug』时最该先翻的文档。", source: "Unity 官方 Release Notes", date: "2026-09-24", url: "https://unity.com/releases/editor/whats-new/6000.6.3", image: "https://cdn.sanity.io/images/fuvbjjlp/production/e863fe90cd5c7b3fab240e5f3e06f979aa89af1b-1536x864.png", badge: "版本动态", badgeType: "engine", readTime: "4 分钟", hotScore: 75, tags: ["Unity", "6000.6", "LTS", "补丁"], content: [
      { title: "版本要点", type: "list", items: ["6000.6.3f1 正式版与 6000.3.25f1 LTS 补丁同日发布；", "维护性质更新，修复项以稳定性与回归为主；", "升级前建议先对照修复清单与项目实际命中项。"] },
      { title: "笔者观察", type: "text", text: "养成一个职业习惯：每个补丁日先读修复清单再决定升不升——如果清单里有你正踩的坑，升级是止损；如果没有，项目中期不必追新。LTS 分支（6000.3）与最新分支（6000.6）的补丁节奏差，就是官方替你标注的风险差。参考来源：Unity 官方 Release Notes。" }
    ] },
    { id: "bevy-0-20-rc-2-final-stretch", category: "engine", subcategory: "版本动态", title: "Bevy 0.20.0-rc.2 发布：Rust 引擎 0.20 正式版进入最后冲刺", summary: "Bevy 发布 0.20.0 第二个候选版本（9 月 28 日），收敛 rc.1 以来的修复——rc.2 通常意味着正式版已进入发布倒计时，Rust 游戏生态最受关注的一次大版本临近落地。", source: "GitHub: bevyengine/bevy", date: "2026-09-28", url: "https://github.com/bevyengine/bevy/releases/tag/v0.20.0-rc.2", image: "https://opengraph.githubassets.com/1/bevyengine/bevy", badge: "版本动态", badgeType: "engine", readTime: "4 分钟", hotScore: 77, tags: ["Bevy", "Rust", "开源引擎", "0.20"], content: [
      { title: "版本要点", type: "list", items: ["v0.20.0-rc.2 发布，包含 rc.1 以来的回归修复；", "正式版 0.20.0 临近（此前 0.19 稳定版为 8 月发布）；", "社区反馈活跃度显示对该版本期待值较高。"] },
      { title: "笔者观察", type: "text", text: "Bevy 的『rc 冲刺』节奏是观察开源引擎发布工程的样本：rc.1（9/15）到 rc.2（9/28）的修复窗口期，正是社区压力测试的黄金时段。想给开源引擎贡献代码的同学，rc 阶段修 regression 的 PR 最容易被合——门槛低、价值明确。参考来源：GitHub。" }
    ] },
    { id: "csdn-claude-code-game-studios", category: "tutorials", subcategory: "AI 工作流", title: "把 Claude Code 变成游戏工作室：49 个智能体 + 72 个技能的配置教程", summary: "CSDN 博主详解开源项目 Claude Code Game Studios：一个会话内集成 49 个 AI 智能体与 72 个工作流技能，/setup-engine 一条命令完成 Godot / Unity / Unreal 的规范化配置，自动生成技术偏好与性能预算文件。", source: "CSDN 博客", date: "2026-08-29", url: "https://blog.csdn.net/gitblog_00086/article/details/156284321", image: "", badge: "AI 工作流", badgeType: "tutorial", readTime: "6 分钟", hotScore: 78, tags: ["Claude Code", "AI 工作流", "游戏开发", "智能体"], content: [
      { title: "教程要点", type: "list", items: ["一个 Claude Code 会话 = 一间 AI 游戏工作室（49 智能体 + 72 技能）；", "/setup-engine 三步完成引擎配置并激活对应专家智能体；", "自动落盘技术偏好、命名规范与性能预算文件。"] },
      { title: "笔者观察", type: "text", text: "这类项目的真正价值不在『49 个智能体』的数字，而在它把『项目规范』写成了机器可读文件——AI 按你的规范干活，而不是猜。学生团队直接抄这个思路就够了：哪怕只手写一份 CLAUDE.md 式的规范文件，AI 产出的可用度都会上一个台阶。参考来源：CSDN。" }
    ] },
    { id: "dotnet-official-gamedev-learn-hub", category: "tutorials", subcategory: "官方教程", title: "微软官方 .NET 游戏开发学习中心：从 C# 到 Godot 的一条龙免费路径", summary: "微软为 .NET 游戏开发者准备的官方学习入口：覆盖 C# 基础、Godot 引擎入门（godot-csharp-essentials 系列）、MonoGame 与 Unity 路线，全部免费——C# 系游戏开发的权威第一站。", source: "Microsoft .NET 官网", date: "2026-09-30", url: "https://dotnet.microsoft.com/en-us/learn/games", image: "https://dotnet.microsoft.com/blob-assets/images/dotnet-icons/square.png", badge: "官方教程", badgeType: "tutorial", readTime: "3 分钟", hotScore: 76, tags: ["C#", ".NET", "Godot", "官方教程"], content: [
      { title: "资源要点", type: "list", items: ["官方免费教程合集：C# × Godot 入门系列为主打；", "同页覆盖 MonoGame、Unity 等 C# 游戏技术栈；", "配合 godot-csharp-essentials 开源课程资料使用。"] },
      { title: "笔者观察", type: "text", text: "常青资源值得常提：大一到大二的暑假窗口，『C# 基础 → Godot 官方系列 → 做一个小游戏』这条路径是性价比最高的入门配置，全免费、全官方、没有引流课。想走Unity技术栈的，把这里的 C# 部分修完再进 Unity Learn，效率比直接啃 Unity 高。参考来源：Microsoft .NET 官网。" }
    ] },
    { id: "github-hkuds-cli-anything", category: "ai", subcategory: "智能体", title: "CLI-Anything：『把所有软件 Agent 化』，本周 GitHub 热榜 5 万+ Star", summary: "HKUDS 开源的 CLI-Anything 本周稳居 GitHub Trending（总 star 5 万+）：定位是把现有命令行软件批量封装成 AI 智能体可调用的工具——『让所有软件都能被 Agent 驱动』的基建尝试。", source: "GitHub: HKUDS/CLI-ANYTHING", date: "2026-09-30", url: "https://github.com/HKUDS/CLI-ANYTHING", image: "https://opengraph.githubassets.com/1/HKUDS/CLI-ANYTHING", badge: "智能体", badgeType: "ai", readTime: "4 分钟", hotScore: 80, tags: ["GitHub", "AI Agent", "CLI", "开源"], content: [
      { title: "项目看点", type: "list", items: ["把既有 CLI 软件封装为 Agent 可调用工具；", "本周 GitHub Trending 持续在榜，总 star 5 万+；", "港大数据智能团队（HKUDS）出品。"] },
      { title: "笔者观察", type: "text", text: "游戏管线里最容易被 Agent 化的恰恰是 CLI 工具链：资源校验、打包脚本、SVN/Git 操作、批量重命名——这些『老师傅的肌肉记忆』正是 AI 最该接管的环节。看懂这个项目的封装思路，比直接用它更有长期价值。参考来源：GitHub。" }
    ] },
    { id: "github-trycua-cua-computer-use", category: "ai", subcategory: "智能体", title: "CUA：计算机使用 2.0 的开源答卷，跨 OS Agent 集群 + 评测基准", summary: "TRYCUA 开源的 CUA 项目（总 star 2.7 万+）主打『计算机使用 2.0』：开源驱动的跨操作系统 Agent 集群，配套训练、评估与数据生成基准——AI 操控图形界面的基础设施正在开源化。", source: "GitHub: TRYCUA/CUA", date: "2026-09-30", url: "https://github.com/TRYCUA/CUA", image: "https://opengraph.githubassets.com/1/TRYCUA/CUA", badge: "智能体", badgeType: "ai", readTime: "4 分钟", hotScore: 77, tags: ["GitHub", "AI Agent", "Computer Use", "开源"], content: [
      { title: "项目看点", type: "list", items: ["开源跨 OS 的计算机使用（Computer Use）Agent 集群；", "自带训练、评估与数据生成基准；", "本周 Trending 稳定在榜。"] },
      { title: "笔者观察", type: "text", text: "Computer Use 对游戏开发有两个直接想象：一是让 AI 当『自动QA』，像人一样点 UI 找 Bug；二是游戏本身的 GUI 测试从此有了开源基座。引擎岗的同学可以把 CUA 的评测思路引入自己的 CI——让 AI 每天替你跑一遍主流程，比人肉冒烟测试便宜得多。参考来源：GitHub。" }
    ] }
  ]
}
