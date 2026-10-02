window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-03",
    weekday: "星期六",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-03 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "反直觉访谈：AI 可能在给游戏公司『创造更多工作』而不是省时间",
      "《全战战锤3》知名 Mod 作者亲手『损坏』作品，抗议 AI 洗稿重传",
      "AI 生成的《辐射：纽约》浏览器游戏遭 Bethesda 律师函",
      "Krafton 砍掉 PUBG 衍生提取射击《Black Budget》：公布不到一年",
      "美光 CEO：内存缺货将持续到至少 2028 年——装机与开发成本都要重算"
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
    id: "ai-creating-more-work-not-less",
    category: "ai",
    categoryName: "AI前沿 · 头条",
    tag: "反直觉洞察",
    title: "『AI 往往给了我更多活干』：当生成式工具开始给游戏公司加工作量而不是减",
    summary: "GamesIndustry.biz 刊发一组开发者访谈，挑战『AI = 省时间』的默认叙事：多位从业者反映，生成式工具产出的内容需要更多人工审校、返工与合规检查——净效果往往是工作变多而不是变少。",
    image: "https://assetsio.gnwcdn.com/5D7A6953.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "GamesIndustry.biz",
    date: "2026-10-02",
    url: "https://www.gamesindustry.biz/quite-often-its-given-me-more-to-do-why-ai-might-be-creating-more-work-for-games-companies-rather-than-saving-time",
    readTime: "8 分钟深度",
    hotScore: 92,
    tags: ["AI", "生成式工具", "工作流", "游戏公司", "生产管线"],
    content: [
      { title: "报道要点", type: "list", items: ["多位从业者反映：AI 产出的内容需要更多人工审校与返工；", "生成内容的版权与合规检查本身成为新的工作量；", "『省下的时间』常被『验证的时间』吃掉，净收益因团队而异；", "结论不是『AI 没用』，而是收益被系统性高估。"] },
      { title: "笔者观察", type: "text", text: "这是本月对 AI 叙事最诚实的一篇：它没有站队『AI 革命』或『AI 泡沫』，而是把账算到了工时层面——生成是瞬时的，验证是线性的，任何没算验证成本的 AI 提效预算都是在画饼。对学生做毕设的启示更直接：用 AI 生成素材前，先想清楚谁审、怎么审、审不过怎么办，这比纠结用哪个模型重要。参考来源：GamesIndustry.biz。" }
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
    { id: "total-war-mod-corrupted-ai-protest", category: "ai", subcategory: "Mod 社区", title: "『支持 Mod 作者，不是支持 AI』：《全战战锤3》Mod 作者亲手损坏作品，抗议 AI 洗稿重传", summary: "《全战：战锤3》的一位 Mod 作者发现自己的作品被他人抓取、混入 AI 内容后未授权重传，选择以极端方式抗议：故意『损坏』自己的 Mod 原作——Mod 社区与 AI 抓取的矛盾激化到自伤式抗议的程度。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/support-modders-not-ai-total-war-warhammer-3-mod-deliberately-corrupted-by-its-own-creator-in-protest-of-ai-infused-unauthorised-reuploads", image: "https://assetsio.gnwcdn.com/total-war-warhammer-3-mod-corrupted-ai-reuploads-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "Mod 社区", badgeType: "ai", readTime: "5 分钟", hotScore: 86, tags: ["全战战锤3", "Mod", "AI 抓取", "版权"], content: [
      { title: "事件要点", type: "list", items: ["Mod 作者发现作品被 AI 混编后未授权重传；", "抗议方式：故意损坏自己的 Mod 原作使其不可用；", "社区口号：『支持 Mod 作者，不是支持 AI』。"] },
      { title: "笔者观察", type: "text", text: "Mod 生态的悖论在这一事件里暴露无遗：Mod 依赖开放分享才能存在，而开放恰恰是 AI 抓取的入口——作者用自毁抗议，等于用自己的身体堵枪眼。真正的问题是平台责任：创意工坊类的授权协议与 AI 溯源标注，该由 Valve 与 CA 来定规矩，而不是逼作者在『开放』和『自保』之间二选一。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ai-fallout-new-york-cd", category: "ai", subcategory: "合规纠纷", title: "AI 生成的《辐射：纽约》浏览器游戏遭 Bethesda 律师函：『slop 作者』自曝吃 C&D", summary: "一款用生成式 AI 批量制作的《辐射：纽约》题材浏览器游戏——以大量崩坏的人物脸出名——遭 Bethesda 律师函下架，其制作者自称『slop prompter』并公开了 C&D 文件：AI slop 与 IP 方的第一次正面对撞样本。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/ai-generated-fallout-new-york-browser-game-full-of-utterly-cursed-faces-slapped-with-bethesda-cease-and-desist-its-slop-prompter-claims", image: "https://assetsio.gnwcdn.com/fallout-4-mod-drama-breaking-benjamin-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "合规纠纷", badgeType: "ai", readTime: "4 分钟", hotScore: 80, tags: ["AI 生成", "Bethesda", "辐射", "律师函"], content: [
      { title: "事件要点", type: "list", items: ["AI 生成的《辐射》题材浏览器游戏被批量制作上线；", "人物面部崩坏图在社交平台病毒式传播；", "Bethesda 发出停止与终止函（C&D），制作者公开了文件。"] },
      { title: "笔者观察", type: "text", text: "这个案例的价值在于它把三个问题叠在了一起：IP 侵权（用 Bethesda 的世界观）、AI 素材的版权灰区、以及『故意做得烂』是否构成转换性使用。最后法院怎么判都会成为 AI 时代内容生产的先例之一。给学生团队的警示朴素但重要：练手可以，发布之前先问『这东西的商业链条上有没有别人的 IP』。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "krafton-cancels-black-budget", category: "industry", subcategory: "项目取消", title: "Krafton 砍掉《Black Budget》：公布不到一年的 PUBG 衍生提取射击，死于『长期体验』自评", summary: "Krafton 宣布关停 PUBG 宇宙衍生提取射击《Black Budget》——距封闭 alpha 测试仅九个月。官方给出的理由罕见地坦诚：判断它『无法提供玩家能够长期享受的体验』，宁可砍掉也不带病上线。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/krafton-shuts-down-pubg-spin-off-black-budget-nine-months-after-closed-alpha-test", image: "https://assetsio.gnwcdn.com/black-budget.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "项目取消", badgeType: "business", readTime: "4 分钟", hotScore: 83, tags: ["Krafton", "Black Budget", "PUBG", "提取射击"], content: [
      { title: "事件要点", type: "list", items: ["Krafton 关停 PUBG 衍生提取射击《Black Budget》；", "距封闭 alpha 测试仅约九个月；", "官方理由：无法提供『玩家能长期享受的体验』。"] },
      { title: "笔者观察", type: "text", text: "提取射击赛道的淘汰赛开始了——Marathon、Arc Raiders、Black Budget 同台，现在第一个出局的是背靠 PUBG IP 的那家，说明这个品类拼的不是导流量而是留存设计。『长期体验』这个自评标准值得记录：长线服务项目的立项验收应该有一条『三个月后玩家为什么还在』的硬指标，答不上来就别立项。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "ram-shortage-until-2028", category: "industry", subcategory: "硬件供应", title: "美光 CEO 放话：内存缺货将持续到至少 2028 年——开发者与玩家的成本账都要重算", summary: "美光 CEO 公开表示内存供应紧张将持续到 2028 年以后：AI 数据中心对存储晶圆的吞噬正在挤压消费端供应。游戏侧的直接影响是明确的——玩家装机成本上升，开发者的高端配置基线也得跟着重估。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/ram-shortages-are-only-getting-worse-and-will-last-until-at-least-2028-micron-boss-declares-from-atop-a-mountain-of-money", image: "https://assetsio.gnwcdn.com/ram-stick-pile-resized-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "硬件供应", badgeType: "business", readTime: "4 分钟", hotScore: 78, tags: ["内存", "美光", "硬件成本", "AI 数据中心"], content: [
      { title: "报道要点", type: "list", items: ["美光 CEO 表示内存缺货将持续至至少 2028 年；", "根因：AI 数据中心需求挤压消费端存储供应；", "消费级内存价格持续上行，装机与升级成本显著增加。"] },
      { title: "笔者观察", type: "text", text: "这条对两本账都有影响：玩家的『推荐配置』会越来越贵，开发者的『最低配置』就不能再大方地写 16G 内存。更实际的建议给在校同学——如果近期有装机/升级计划，内存趁早；做毕设演示时把『低配可跑』当验收项，你的答辩评委和未来的玩家都会感谢这条工程纪律。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "sony-physical-media-consultation-opinion", category: "industry", subcategory: "深度评论", title: "GI.biz 评论：索尼的实体介质咨询『迟到总比不到好』——但数字化的列车不会停下", summary: "针对上周索尼就放弃光盘支持调研开发者的报道，GamesIndustry.biz 发表评论：咨询本身就是进步，但实体介质的衰退是结构性趋势——真正该讨论的不是『要不要数字化』，而是数字购买权的永久性保障。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/sonys-consultation-on-physical-media-better-late-than-never-opinion", image: "https://assetsio.gnwcdn.com/denise-jans-zvRgcCx8Nvs-unsplash-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "深度评论", badgeType: "business", readTime: "6 分钟", hotScore: 75, tags: ["索尼", "实体介质", "数字所有权", "评论"], content: [
      { title: "评论要点", type: "list", items: ["索尼向开发者发起实体介质去留咨询，评论认为『迟到但值得肯定』；", "实体衰退是结构性趋势，逆势保留成本高昂；", "真正的议题转向：数字购买的永久所有权与下架后可玩性。"] },
      { title: "笔者观察", type: "text", text: "把这条与 9/28 的索尼调研报道连读，能看清一个完整的舆论引导周期：先爆料 → 再官方咨询 → 最后评论定调。而文章把焦点从『光盘死不死』转向『数字所有权』，才是给玩家权益指出的真战场——游戏停服即消失的问题在纯数字时代会被无限放大。做买断制项目的同学，商店页的『离线可玩』说明会越来越值钱。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "2xko-mau-threshold-analysis", category: "industry", subcategory: "市场分析", title: "《2XKO》的经济账：格斗 F2P 要活下来，月活得有『几十万到百万级』", summary: "Riot 免费格斗游戏《2XKO》上线后的分析文章给出一份冷静的算术：以格斗品类的付费深度，这款游戏若要达成商业成功，月活跃用户需要达到数十万乃至百万量级——F2P 格斗这道题比想象中难。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/2xko-would-have-needed-an-mau-base-in-the-high-hundreds-of-thousands-if-not-millions-to-succeed", image: "https://assetsio.gnwcdn.com/2kxo_3bOEGlA.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "市场分析", badgeType: "business", readTime: "5 分钟", hotScore: 74, tags: ["2XKO", "Riot", "格斗游戏", "F2P 经济"], content: [
      { title: "分析要点", type: "list", items: ["格斗品类的人均付费深度低于 MOBA/射击等主流 F2P；", "推算《2XKO》商业成功需要数十万至百万级 MAU 支撑；", "格斗 F2P 的变现结构仍是被验证中的难题。"] },
      { title: "笔者观察", type: "text", text: "格斗游戏做 F2P 一直是个半解的题：观赏性极强的品类，付费点却天然稀薄（皮肤驱动弱于角色驱动的竞技公平性需求）。这份 MAU 门槛测算给了所有想做竞技 F2P 的团队一个参照系——先算清人均 ARPU 的天花板，再决定要不要做。想进 Riot/格斗方向的同学，读懂这篇的算术过程比看十篇入行攻略有用。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "stone-kite-transmedia-studio", category: "industry", subcategory: "新工作室", title: "Bungie 联合创始人 +《命运2》叙事总监创办跨媒介工作室 Stone Kite", summary: "Bungie 联合创始人与《命运2》叙事总监宣布联合创立跨媒介工作室 Stone Kite——游戏叙事人才向影视/跨媒介流动的又一标志性动作。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/bungie-co-founder-and-destiny-2-narrative-director-launch-transmedia-studio-stone-kite", image: "https://assetsio.gnwcdn.com/stone-kite-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新工作室", badgeType: "business", readTime: "3 分钟", hotScore: 70, tags: ["Bungie", "Stone Kite", "跨媒介", "叙事"], content: [
      { title: "事件要点", type: "list", items: ["Bungie 联合创始人携《命运2》叙事总监创办 Stone Kite；", "定位为跨媒介（transmedia）工作室；", "游戏叙事人才向影视/综合娱乐迁移的趋势延续。"] },
      { title: "笔者观察", type: "text", text: "『叙事总监』这个岗位最近频繁出现在创业新闻里，说明游戏叙事的价值正在被游戏行业之外的资本定价。对想走叙事方向的同学，就业面其实在被这些新工作室拓宽——游戏剧本能力 + 跨媒介改编意识，是未来五年叙事岗位的新简历标准。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "no-law-corner-shops-praise", category: "games", subcategory: "设计解析", title: "《No Law》的便利店为什么值得全行业『偷师』：开放世界细节的另一个档次", summary: "RPS 撰文盛赞《No Law》开放世界里『荒谬细致且真实』的街角便利店——货架陈列、价签体系到灯光氛围都按真实零售逻辑搭建，并呼吁全行业开发者从这件『小事』里偷师。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/if-game-developers-steal-one-thing-from-no-law-i-hope-its-the-open-world-games-ridiculously-detailed-and-realistic-corner-shops", image: "https://assetsio.gnwcdn.com/No-Law-peacekeeper.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计解析", badgeType: "games", readTime: "5 分钟", hotScore: 73, tags: ["No Law", "开放世界", "环境叙事", "关卡细节"], content: [
      { title: "解析要点", type: "list", items: ["《No Law》的街角便利店按真实零售逻辑搭建；", "货架陈列、价签、灯光共同构成可信的空间叙事；", "RPS 呼吁开发者把这种『无功能细节』的投入当作标杆。"] },
      { title: "笔者观察", type: "text", text: "便利店是开放世界设计里最好的『显微镜测试』：玩家不会为了货架停留，但货架决定了世界是布景还是场所。这条与本周《No Law》的反应性访谈连读正好完整——系统给玩家玩的理由，细节给世界活的理由。做场景设计的同学，给自己定一条『每个空间放一件和玩法无关但逻辑成立的东西』的规矩试试。参考来源：Rock Paper Shotgun。" }
    ] }
  ]
}
