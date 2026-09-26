window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-09-27",
    weekday: "星期日",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-09-27 08:05",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "The Relic: First Guardian 登陆 Xbox 并永久降价，Switch 2 版 10/9 跟进",
      "Godot 基金会发布引擎愿景声明：确立资助与优先级原则",
      "数据报告：Steam 上披露 AI 的游戏首月销量少 50%",
      "墨尔本国际游戏周 10 月回归；罗马新活动 The Games Forum Roma 官网上线"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "9/1正式发布·WebGPU脱离实验版", badge: "推荐生产", color: "indigo" },
      { name: "Unity 7", type: "unity", status: "Unite Seoul公布·12月Beta·2027初发布", badge: "下一代", color: "blue" },
      { name: "团结引擎 1.10.3", type: "tuanjie", status: "9/9发布·持续更新", badge: "国内生态", color: "cyan" },
      { name: "UE 6", type: "unreal", status: "Rocket League首发·2027上线·UEFN合并", badge: "下一代", color: "purple" },
      { name: "Godot 4.8 dev6", type: "godot", status: "9/15发布·月内特性冻结", badge: "开发中", color: "emerald" },
      { name: "Godot 4.7.2", type: "godot", status: "当前稳定版·生产推荐", badge: "LTS", color: "pink" }
    ]
  },
  hero: {
    id: "hero-relic-first-guardian-xbox",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "多平台发行策略",
    title: "The Relic: First Guardian 登陆 Xbox 并永久降价：首发独占后快速全平台的\"二次开局\"打法",
    summary: "韩国 Project Cloud Games 的黑暗幻想 ARPG《The Relic: First Guardian》7 月底以 PS5/Steam 限时独占首发，本周五（9/25）登陆 Xbox Series X|S 并支持 Xbox Play Anywhere，Switch 2 版定档 10/9；同时游戏永久降价并推出大型更新。笔者认为这套\"限时独占引流→快速全平台+降价二次开局\"的打法，是中型团队在拥挤档期里维持热度曲线的实用样本。",
    image: "https://rpgamer.com/wp-content/uploads/2026/08/the-relic-first-guardian-image.jpg",
    source: "RPGamer（报道 Perp Games / Project Cloud Games 官方公告）",
    date: "2026-09-25",
    url: "https://rpgamer.com/2026/08/the-relic-first-guardian-xbox-series-xs-switch-2-releases-dated/",
    readTime: "4 分钟深度",
    hotScore: 88,
    tags: ["The Relic", "ARPG", "多平台发行", "Xbox Play Anywhere", "Switch 2"],
    content: [
      { title: "发售信息", type: "list", items: ["7/31：PS5 + Steam 首发限时独占；", "9/25：Xbox Series X|S（含 Xbox Play Anywhere）+ 永久降价 + 大型更新；", "10/9：Switch 2 版跟进；", "配套 QoL 更新随新平台同步上线。"] },
      { title: "笔者观察", type: "text", text: "限时独占的真正价值不是分成，而是把首发热度切成两段：第一段吃独占讨论度，第二段借\"登陆新平台+降价\"再炒一轮。代价是第二段的热度天然递减，所以必须绑一个大版本更新给媒体二次报道的理由。中型团队排发行节奏时，这条\"三段式\"值得完整抄一遍。参考来源：RPGamer。" }
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
    { id: "godot-vision-statement", category: "engine", subcategory: "Godot", title: "Godot 基金会发布引擎愿景声明：把\"往哪走\"写下来（官方深读）", summary: "Godot 基金会正式发布引擎愿景声明，写明指导其资助分配与决策的原则和优先级。开源项目的\"愿景文档\"很少见——它回答了社区最常吵的问题：引擎为谁服务、什么功能优先、商业化边界在哪里。周日深读首选。", source: "Godot Engine 官方（一手来源）", date: "2026-06-25", url: "https://godotengine.org/article/godot-vision-statement-2026/", image: "https://godotengine.org/storage/blog/covers/godot-foundation-update-2024.webp", badge: "官方深读", badgeType: "engine", readTime: "8 分钟", hotScore: 84, tags: ["Godot", "基金会", "愿景声明", "开源治理"], content: [{ title: "文档要点", type: "list", items: ["基金会首次以书面形式确立引擎愿景；", "说明资助分配与决策的指导原则；", "对功能优先级、商业化边界给出官方口径；", "Godot Foundation 同步在官网发布完整文档。"] }, { title: "笔者观察", type: "text", text: "开源引擎走到\"写愿景声明\"这一步，说明它已经大到需要治理工具了——这通常是项目成熟的标志。对使用者的实际意义：以后判断\"某个功能会不会进主线\"，可以拿愿景声明当依据，而不是猜维护者的个人偏好。做开源项目的同学也值得抄这份\"先写愿景再谈路线图\"的治理模板。参考来源：Godot Engine 官方。" }] },
    { id: "game-oracle-ai-steam-report", category: "ai", subcategory: "AI 数据", title: "数据报告：Steam 上标注 AI 的游戏，首月销量少 50%（数据深读）", summary: "Game-Oracle 的分析报告显示：在 Steam 披露使用 AI 的游戏，发布首月平均仅获 4 条评测（非 AI 游戏为 7 条），近 20% 完全零评测；即便在评论数破百的游戏中，AI 游戏中位好评率 84.6% 也低于非 AI 的 88.3%。玩家对 AI 内容的态度正在直接影响销量。", source: "GameLook（引述 Game-Oracle 报告数据）", date: "2026-06-25", url: "http://www.gamelook.com.cn/?p=596076", image: "", badge: "数据深读", badgeType: "ai", readTime: "6 分钟", hotScore: 86, tags: ["Steam", "AI 披露", "销量数据", "玩家态度", "Game-Oracle"], content: [{ title: "数据要点", type: "list", items: ["披露 AI 的游戏首月平均 4 条评测，非 AI 为 7 条；", "近 20% 的 AI 辅助游戏完全零评测；", "评论数破百的游戏中，AI 游戏中位好评率 84.6% vs 非 AI 88.3%；", "结论指向玩家对 AI 内容的真实抵触。"] }, { title: "笔者观察", type: "text", text: "周日选读这篇数据报告，因为它回答了一个越来越现实的立项问题：AI 到底该不该写进商店页。数据给出的答案很冷静——玩家不是反对 AI 本身，而是把它当成\"偷工减料\"的信号。启示：AI 用在开发管线里提效（不披露也合规的部分）没问题，但作为卖点或大密度内容露出前，先想想目标玩家群怎么读这个标签。参考来源：GameLook 编译 Game-Oracle 报告。" }] },
    { id: "games-forum-roma", category: "tutorials", subcategory: "行业活动", title: "Women in Games 联手 Structura 创办 The Games Forum Roma：罗马新活动官网上线", summary: "Women in Games 与 Structura 联合创办的新行业活动 The Games Forum Roma 官网正式上线。欧洲游戏活动版图继续细化——区域型、专注特定社群的活动正在成为大展会之外的有效 networking 场景。", source: "The Games Forum Roma（官方站点）", date: "2026-09-24", url: "https://thegamesforumroma.eu/", image: "https://eventrowp.wowtheme7.com/wp-content/uploads/2026/01/banner-three-start1.webp", badge: "新活动", badgeType: "event", readTime: "2 分钟", hotScore: 64, tags: ["Women in Games", "罗马", "行业活动", "Networking"], content: [{ title: "活动要点", type: "list", items: ["Women in Games × Structura 联合创办；", "The Games Forum Roma 官网上线；", "定位区域型行业交流活动；", "由 Women in Games（女性游戏从业者组织）发起。"] }, { title: "笔者观察", type: "text", text: "观察近两年的行业活动趋势：GDC 这类巨型展会的\"信息获取\"价值在被区域小型活动分流——小场子更容易建立真实的人脉。对想出海的同学，关注这类区域活动的演讲名单，往往能快速摸清当地有哪些工作室在招人。参考来源：活动官方站点。" }] },
    { id: "melbourne-games-week", category: "tutorials", subcategory: "行业活动", title: "墨尔本国际游戏周 10 月 2-11 日回归：澳洲最大游戏行业聚会", summary: "墨尔本国际游戏周（Melbourne International Games Week）宣布 2026 年 10 月 2 日至 11 日回归，横跨墨尔本市中心多个场地，覆盖专业观众与公众两大群体，是澳洲规模最大的游戏行业聚会。南半球的行业日历值得纳入出海视野。", source: "Melbourne International Games Week（官方站点）", date: "2026-09-27", url: "http://www.gamesweek.melbourne/", image: "https://gamesweek.melbourne/__data/assets/image/0007/1038904/New_Banner.jpg", badge: "行业活动", badgeType: "event", readTime: "2 分钟", hotScore: 62, tags: ["墨尔本", "游戏周", "澳洲", "行业活动"], content: [{ title: "活动要点", type: "list", items: ["10 月 2 日至 11 日，墨尔本市中心多场地；", "澳洲最大的游戏行业聚会；", "兼顾行业专业观众与公众；", "官方站点可查全部子活动日程。"] }, { title: "笔者观察", type: "text", text: "查了下它的活动结构：行业向（B2B 会议）与公众向（ playable 展示）分层设计，中小工作室花小钱也能拿到展示位。对南亚 / 大洋洲方向出海或找远程合作的团队，这类区域周是低成本触点。另外注意它的 Steam 专题页传统——去年配套做过平台特卖，独立团队可以提前关注今年是否延续。参考来源：官方站点。" }] }
  ]
};
