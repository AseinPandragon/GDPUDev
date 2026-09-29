window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-30",
    weekday: "星期三",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-09-30 07:40",
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
    { id: "big-stretch-jam-platformer", category: "games", subcategory: "独立观察", title: "《Big Stretch》：一个胳膊能无限拉长的果冻小人，来自 game jam 的物理平台器小品", summary: "RPS 推荐了一款 jam 出身的物理平台器《Big Stretch》：一个圆圆的小人拥有弹力惊人的长臂，在空灵的关卡里荡来荡去——『有时候你需要的就是这样一款小品』。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/sometimes-the-thing-you-need-is-a-wonderfully-ethereal-physics-platformer-jam-game-where-you-are-a-little-round-guy-with-very-stretchy-arms-called-big-stretch", image: "https://assetsio.gnwcdn.com/big-stretch.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "3 分钟", hotScore: 68, tags: ["Big Stretch", "game jam", "物理平台器", "独立游戏"], content: [
      { title: "作品要点", type: "list", items: ["jam 项目转正式发售的物理平台器；", "核心机制只有一个：可无限拉伸的手臂物理；", "关卡围绕单一动词做空间解谜，视觉走空灵简约路线。"] },
      { title: "笔者观察", type: "text", text: "这是『一个动词撑起一款游戏』的标准样本：拉伸、荡跃、松手，三个输入搞定全部关卡。jam 项目的价值从来不是完成度而是『找到那个动词』——正在准备 game jam 的同学，把这条当呼吸练习：立项 30 分钟内必须能用一句话说出你的动词。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "strange-scaffold-haunted-library", category: "games", subcategory: "独立观察", title: "Strange Scaffold 新作：在《生命交换》之后，这次让你整理一座闹鬼图书馆", summary: "以《Life Eater》《A Death in the Red Light District》等高概念小品著称的 Strange Scaffold 公布新作《Something is Wrong with the Library》——玩家这次要整理一座闹鬼的图书馆，仍是该工作室标志性的『怪题材 + 短平快』路线。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/after-trading-space-babies-and-running-people-over-with-a-truck-strange-scaffold-want-you-to-organise-a-haunted-library-in-something-is-wrong-with-the-library", image: "https://assetsio.gnwcdn.com/something-is-wrong-with-the-library.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "4 分钟", hotScore: 71, tags: ["Strange Scaffold", "独立游戏", "高概念", "发行节奏"], content: [
      { title: "报道要点", type: "list", items: ["工作室新作《Something is Wrong with the Library》公布；", "玩法核心：整理一座闹鬼图书馆；", "Strange Scaffold 近年以高频短平快高概念作品保持曝光（送太空婴儿、开车撞人等前作）。"] },
      { title: "笔者观察", type: "text", text: "Strange Scaffold 是当代独立发行节奏的最佳研究样本：不赌三年大作，用一年三四个高概念小品维持品牌热度与现金流，每个项目的概念都怪到『一句话就能被写进新闻标题』。对想以独立团队活下去的同学，这种『概念产品化』的选题纪律比技术力更值得抄。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "darktide-depths-of-the-damned", category: "games", subcategory: "内容更新", title: "《战锤40K：暗潮》新地下城『被诅咒深渊』上线：编辑亲测『会在血肉管道里死得很惨』", summary: "Fatshark 为《暗潮》推出 Depths of the Damned 更新：全新地下城线路，编辑实测后表示新关卡的血肉管道地形『会教所有人重新做人』——长线合作射击的内容节奏仍在稳定推进。", source: "Rock Paper Shotgun", date: "2026-09-29", url: "https://www.rockpapershotgun.com/i-perished-in-the-flesh-pipes-of-darktides-depths-of-the-damned-update-and-you-will-too", image: "https://assetsio.gnwcdn.com/Darktide-Depths-of-the-Damned-update.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "内容更新", badgeType: "games", readTime: "4 分钟", hotScore: 70, tags: ["Darktide", "Fatshark", "合作射击", "地下城"], content: [
      { title: "更新要点", type: "list", items: ["全新地下城线路『Depths of the Damned』上线；", "血肉管道地形带来新的空间压迫与视线管理挑战；", "长线更新的难度曲线继续向高难玩家倾斜。"] },
      { title: "笔者观察", type: "text", text: "『编辑也会死很惨』这种内容，本质是 Fatshark 对自己社区难度偏好的精准回应——合作射击的老玩家要的不是变简单，是被新地形羞辱。做关卡设计的同学注意：血肉管道这种『视线遮蔽 + 狭窄纵剖』的地形语言，是低成本制造恐怖压力的标准件，毕设 demo 里就能复用。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "indie-survive-volatility-opinion", category: "tutorials", subcategory: "行业随笔", title: "行业震荡期，独立工作室怎么活：一篇写给小团队的自救清单", summary: "GamesIndustry.biz 刊发观点文章，讨论独立工作室在融资收紧、发行保守、平台规则多变的环境下的生存策略——从现金流纪律到团队规模决策，给出了可直接执行的优先级建议。", source: "GamesIndustry.biz", date: "2026-09-29", url: "https://www.gamesindustry.biz/how-indie-studios-can-survive-industry-volatility-opinion", image: "https://assetsio.gnwcdn.com/replaced-fire.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "行业随笔", badgeType: "tutorial", readTime: "7 分钟", hotScore: 75, tags: ["独立工作室", "生存策略", "现金流", "行业观察"], content: [
      { title: "文章要点", type: "list", items: ["融资环境收紧下，现金跑道优先于产品野心；", "接外包维持现金流的『双轨制』被重新评估；", "团队规模决策：扩张前先假设行业不会更好；", "平台与发行条款的议价地位在分化。"] },
      { title: "笔者观察", type: "text", text: "这篇对还没开公司的学生同样有用——它教你用『行业不会更好』做保底假设来规划职业：毕业进独立团队还是大厂，本质是选『高波动高成长』还是『低波动稳现金流』，没有对错，但要选得明白。文章里把现金跑道放第一位的排序，放在个人财务上一样成立。参考来源：GamesIndustry.biz。" }
    ] }
  ]
}
