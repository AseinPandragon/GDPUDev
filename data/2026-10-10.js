window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-10",
    weekday: "星期六",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-10 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "Amanita Design 官宣《机械迷城 2》：『我们不再年轻，而世界仿佛正在终结』",
      "Capcom 官方开源 REDox：RE 引擎下一代技术的 .NET 结构化数据引擎",
      "索尼将 400+ 全球 VR 专利转让给 Meta",
      "OpenRouter 数据：Anthropic 企业份额从年初四分之三滑落至与 OpenAI 平分",
      "TGA 2026 提名 11 月中公布，公售门票 10 月 29 日开抢"
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
    id: "machinarium-2-reveal",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "新作官宣",
    title: "Amanita Design 官宣《机械迷城 2》：『我们不再年轻，而世界仿佛正在终结』",
    summary: "捷克独立名厂 Amanita Design（《机械迷城》《植物精灵》《樱桃塔》）正式公布 2009 年最美机器人冒险游戏的续作《Machinarium 2》。开发者的一句『我们不再年轻，而世界似乎正在终结』，把这次官宣变成了一封写给老玩家的信。",
    image: "https://assetsio.gnwcdn.com/Machinarium2_screenshot_01.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Rock Paper Shotgun",
    date: "2026-10-09",
    url: "https://www.rockpapershotgun.com/were-not-getting-any-younger-and-the-world-seems-to-be-ending-amanita-reveal-machinarium-2-sequel-to-2009s-prettiest-robot-adventure",
    readTime: "5 分钟深度",
    hotScore: 90,
    tags: ["机械迷城 2", "Amanita Design", "独立游戏", "解谜"],
    content: [
      { title: "事件要点", type: "list", items: ["Amanita Design 正式公布《Machinarium 2》；", "原作《机械迷城》2009 年发售，以手绘画面与无文字解谜成为独立游戏史标杆；", "开发者的表态：『我们不再年轻，而世界似乎正在终结』——续作带着明确的时代情绪。"] },
      { title: "笔者观察", type: "text", text: "《机械迷城》对一代中国玩家有特殊意义——它是很多 90 后第一次意识到『游戏可以是艺术品』的瞬间。十七年后出续作，Amanita 没有炒作情怀，而是把疲惫与紧迫感写进了官宣文案本身。做独立游戏的同学记住这种表达方式：真诚不等于煽情，克制的情绪比口号更穿透。参考来源：Rock Paper Shotgun。" }
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
    { id: "g-afterworld-paradox", category: "games", subcategory: "开发者访谈", title: "Paradox 谈《Afterworld》：『它不在《辐射》参考点前五』——大战略的灵感更多来自青铜时代", summary: "Paradox 为其大战略新作《Afterworld》接受采访：明确表示这款『废土大战略』的参考点里《辐射》排不进前五，设计灵感更多来自青铜时代的文明兴衰——世界观优先于类型标签。", source: "Rock Paper Shotgun", date: "2026-10-09", url: "https://www.rockpapershotgun.com/its-not-in-the-top-five-reference-points-afterworld-isnt-just-a-fallout-grand-strategy-game-says-paradox-it-owes-a-lot-more-to-the-bronze-age", image: "https://assetsio.gnwcdn.com/afterworldcavalry.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发者访谈", badgeType: "games", readTime: "5 分钟", hotScore: 72, tags: ["Afterworld", "Paradox", "大战略", "世界观"], content: [
      { title: "访谈要点", type: "list", items: ["Paradox 谈大战略新作《Afterworld》的灵感来源；", "明确表态：《辐射》不在参考点前五；", "设计灵感更多取自青铜时代的文明兴衰。"] },
      { title: "笔者观察", type: "text", text: "『参考点前五』这个说法本身就很 Paradox——他们清楚废土题材的第一联想是什么，并主动把设计锚点挪到更冷门的文明史上。给做世界观设计的同学一个方法论：当你设计的题材有『显而易见的参考系』时，找到参考系之外的第二、第三灵感源，是避免类型趋同最快的路。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-wardogs-season2-betting", category: "games", subcategory: "赛季更新", title: "《Wardogs》第二赛季：让你押注自己的击杀表现——把『资本主义地狱』再挖深一层", summary: "沙盒射击《Wardogs》第二赛季上线：玩家可以用现金押注自己的战斗表现——胜了翻倍、输了归零。开发者在系统设计层面继续贯彻游戏标题里的『资本主义地狱』隐喻。", source: "Rock Paper Shotgun", date: "2026-10-09", url: "https://www.rockpapershotgun.com/wardogs-season-2-deepens-the-sandbox-shooters-capitalist-hell-by-letting-you-bet-cash-on-your-own-performance", image: "https://assetsio.gnwcdn.com/Wardogs-season-2-vendor.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "赛季更新", badgeType: "games", readTime: "4 分钟", hotScore: 70, tags: ["Wardogs", "赛季更新", "押注机制", "沙盒射击"], content: [
      { title: "更新要点", type: "list", items: ["第二赛季加入『押注自己表现』的现金机制；", "胜负直接与下注金额挂钩；", "与游戏『资本主义地狱』的核心隐喻一致。"] },
      { title: "笔者观察", type: "text", text: "押注自己是个危险又迷人的机制设计：它把『自我评估』变成了玩法——你必须诚实评估自己的技术上限才敢下注。注意它与现实赌博的边界感：游戏内货币的『现金』措辞已经在踩线，这也是它被 RPS 用『资本主义地狱』形容的原因。设计类似的-meta 机制时，讽刺的锐度和合规的钝感要同时拿捏。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-cyberpunk-guitar-mod", category: "games", subcategory: "玩家创作", title: "《赛博朋克 2077》乐队任务 Mod：弹错《Master of Puppets》每个和弦也算一种玩法", summary: "一款新的《赛博朋克 2077》任务 Mod 让玩家体验落魄乐手生涯——甚至专门设计了『把 Metallica 的〈Master of Puppets〉弹得全是错音』的选项。玩家创作的叙事密度正在逼近官方 DLC。", source: "Rock Paper Shotgun", date: "2026-10-09", url: "https://www.rockpapershotgun.com/embrace-your-jobbing-musician-soul-with-a-new-cyberpunk-2077-quest-mod-that-comes-with-the-option-of-playing-all-the-wrong-chords-for-master-of-puppets", image: "https://assetsio.gnwcdn.com/cyberpunk-2077-guitar-gigs-mod-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "玩家创作", badgeType: "games", readTime: "4 分钟", hotScore: 68, tags: ["赛博朋克 2077", "Mod", "任务设计", "音乐玩法"], content: [
      { title: "Mod 要点", type: "list", items: ["新任务 Mod：夜之城的落魄乐手生涯；", "包含酒吧演出与巡演的完整任务链；", "彩蛋级设计：可以选择把〈Master of Puppets〉弹得全是错音。"] },
      { title: "笔者观察", type: "text", text: "『允许玩家搞砸』是叙事 Mod 的进阶功课：大多数任务只设计了成功路径，而这个 Mod 把『弹错』做成有回报的分支——失败即内容。CDPR 上一周刚官宣影视化、这周 Mod 圈就交出这种完成度，2077 的 UGC 生态正在成为它的第二生命周期。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-echo-weaver-timeloop", category: "games", subcategory: "独立观察", title: "《Echo Weaver》：把几乎所有内容都解锁的时间循环银河城——『它敢让你破坏规则』", summary: "时间循环银河城《Echo Weaver》获得 RPS 关注：与同类『锁区推图』不同，它几乎不锁任何区域，反而主动挑战玩家去打破循环——用信任代替门槛的关卡设计实验。", source: "Rock Paper Shotgun", date: "2026-10-09", url: "https://www.rockpapershotgun.com/timeloop-metroidvania-echo-weaver-is-the-brave-game-that-locks-almost-nothing-off-and-challenges-you-to-break-it", image: "https://assetsio.gnwcdn.com/Echo-Weaver-header.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "5 分钟", hotScore: 69, tags: ["Echo Weaver", "银河城", "时间循环", "关卡设计"], content: [
      { title: "游戏要点", type: "list", items: ["《Echo Weaver》：时间循环 × 银河城结构；", "反常规设计：几乎不锁任何区域；", "主动邀请玩家探索『打破循环』的可能性。"] },
      { title: "笔者观察", type: "text", text: "银河城的『能力门』本质是开发者对玩家路径的不信任。这款游戏把门拆掉，赌的是玩家会为『自己发现破序路线』支付更多情感成本——Baldur's Gate 3 的涌入式剧情和它共享同一个洞察：自主感是内容倍增器。做关卡设计的同学值得把它当反面教材的正样本研究。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-this-is-not-for-you", category: "games", subcategory: "独立观察", title: "《This Is Not For You》：为逻辑失效的吸血鬼灯塔手绘地图——《万恶-house of leaves》式恐怖再添新作", summary: "受《House of Leaves》（《叶屋》）启发的恐怖游戏《This Is Not For You》曝光：你要为一座违反几何逻辑的吸血鬼灯塔绘制地图——探索本身即是叙事装置的文学化改编。", source: "Rock Paper Shotgun", date: "2026-10-09", url: "https://www.rockpapershotgun.com/draw-maps-of-a-vampiric-lighthouse-that-defies-logic-in-this-is-not-for-you-the-latest-horror-game-inspired-by-house-of-leaves", image: "https://assetsio.gnwcdn.com/this-is-not-for-you.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "4 分钟", hotScore: 67, tags: ["This Is Not For You", "恐怖游戏", "House of Leaves", "地图机制"], content: [
      { title: "游戏要点", type: "list", items: ["《This Is Not For You》：受《House of Leaves》启发的恐怖游戏；", "核心玩法：为一座违反逻辑的吸血鬼灯塔手绘地图；", "『地图绘制』本身就是对抗不可知空间的机制。"] },
      { title: "笔者观察", type: "text", text: "《House of Leaves》的恐怖来自『空间比记录它的文档更大』——把它做成游戏机制的最自然解法就是让玩家亲手画地图，然后发现地图画不下。这种『把文学装置翻译成交互动词』的改编思路，比直接复刻情节高明得多，毕设做叙事原型可以抄这个作业。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ai-baijiahao-model-war", category: "ai", subcategory: "行业综述", title: "OpenAI 与 Anthropic 开启『模型之战』：企业份额从一家独大到平分秋色", summary: "OpenRouter 数据显示：年初 Anthropic 占据企业 AI 支出约四分之三，到 9 月已与 OpenAI 大致相当——企业不再绑定单一模型供应商，『蜜月期已经过去了』。竞争变量转向模型如何进入真实工作流。", source: "百度新闻（编译）", date: "2026-10-09", url: "https://baijiahao.baidu.com/s?id=1878534942078354315", image: "", badge: "行业综述", badgeType: "ai", readTime: "6 分钟", hotScore: 78, tags: ["OpenAI", "Anthropic", "企业市场", "OpenRouter"], content: [
      { title: "报道要点", type: "list", items: ["OpenRouter 数据：Anthropic 企业支出份额从年初约 3/4 滑落至 9 月与 OpenAI 大致相当；", "企业侧普遍转向多供应商策略，不再绑定单一模型；", "竞争焦点从『模型更强』转向『如何进入真实工作流』。"] },
      { title: "笔者观察", type: "text", text: "这条与本周 Haiku 5.5 降价 75% 连读就是完整叙事：价格战是份额战的结果。对开发者是纯粹的好消息——供应商议价权正在向你倾斜，做技术选型时别急着签长约，保持抽象层（litellm 这类网关就是干这个的）比押注任何一家都划算。参考来源：百度新闻。" }
    ] },
    { id: "ai-baijiahao-polymarket", category: "ai", subcategory: "行业综述", title: "预测市场风向突变：谷歌以 43% 反超 Anthropic，领跑『年底最佳模型』竞猜", summary: "Polymarket 预测市场数据显示：谷歌以 43% 的隐含概率领跑『12 月 31 日前推出最佳 AI 模型』竞猜，微弱优势超过 Anthropic 的 42%；OpenAI 与 Meta 分别仅 6.5% 与 2.9%——市场情绪正押注 Gemini 的下一次迭代。", source: "百度新闻（编译）", date: "2026-10-09", url: "https://baijiahao.baidu.com/s?id=1878535005081271706", image: "", badge: "行业综述", badgeType: "ai", readTime: "5 分钟", hotScore: 72, tags: ["Polymarket", "谷歌", "Gemini", "预测市场"], content: [
      { title: "报道要点", type: "list", items: ["Polymarket：谷歌 43% vs Anthropic 42%，领跑年底最佳模型竞猜；", "Kalshi 平台数据相近（谷歌 41.9% vs Anthropic 41.3%）；", "OpenAI（6.5%）与 Meta（2.9%）明显落后。"] },
      { title: "笔者观察", type: "text", text: "预测市场不是水晶球，但它是『从业者用真金白银投票的舆情表』——43% vs 42% 意味着市场认为 Gemini 与 Claude 的下一轮对决接近五五开。做选型的同学读法：年底前大概率有一次大模型更新潮，把你项目里的模型抽象层准备好，别把提示词写死在单一供应商的方言上。参考来源：百度新闻。" }
    ] },
{ id: "ai-allenai-astabrief", category: "ai", subcategory: "开源发布", title: "AI2 开源 AstaBrief：快速报告生成的智能体组件进入开源生态", summary: "艾伦人工智能研究所（AI2）开源 AstaBrief——Asta 体系下的快速报告生成组件：给定研究问题即可自动完成文献检索、综合与成稿的智能体流水线。", source: "Hugging Face Blog（AI2）", date: "2026-10-09", url: "https://huggingface.co/blog/allenai/astabrief", image: "https://cdn-uploads.huggingface.co/production/uploads/allenai/astabrief-social.png", badge: "开源发布", badgeType: "ai", readTime: "5 分钟", hotScore: 70, tags: ["AI2", "AstaBrief", "报告生成", "智能体"], content: [
      { title: "发布要点", type: "list", items: ["AI2 开源 AstaBrief（10 月 9 日）；", "定位：快速报告生成的智能体组件；", "属于 Asta 科研智能体体系的开源延伸。"] },
      { title: "笔者观察", type: "text", text: "『报告生成』这个形态对游戏行业有直接映射：竞品分析周报、玩家反馈聚类摘要、版本回归测试汇总——全都是『给一个问题，产出一份结构化文档』。AstaBrief 的流水线设计（检索→综合→成稿）可以直接当参考架构。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-lightonocr-3", category: "ai", subcategory: "模型发布", title: "LightOnOCR-3 发布：高性能 OCR 与版面理解再进一步", summary: "LightOn 发布 LightOnOCR-3：面向高性能 OCR 与版面理解（Layout）的模型——文档智能赛道在 OCR 方向的竞争进入第三代。", source: "Hugging Face Blog（LightOn）", date: "2026-10-08", url: "https://huggingface.co/blog/lightonai/lightonocr-3", image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/blog/lightonai/lightonocr-3.png", badge: "模型发布", badgeType: "ai", readTime: "4 分钟", hotScore: 65, tags: ["LightOn", "OCR", "版面理解", "文档智能"], content: [
      { title: "发布要点", type: "list", items: ["LightOnOCR-3 发布（10 月 8 日）；", "主打高性能 OCR 与版面理解；", "与本周 Falcon-OCR-Arabic 同属文档智能赛道。"] },
      { title: "笔者观察", type: "text", text: "OCR 三连发（Falcon-OCR-Arabic、LightOnOCR-3、Kumo Tabular 侧面呼应）说明文档智能正在从『能用』进入『好用』区间。游戏公司内部的用例：客服工单自动分拣、本地化 QA 的截图文字校对、出海合规文档处理——都是现成的落地场景。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-autotrustjev-27b-fast", category: "ai", subcategory: "模型发布", title: "JEV-27B 快速版发布：为决策场景校准的 27B 模型补齐『速度档』", summary: "Autotrust 发布 JEV-27B 快速校准版（10 月 8 日）：在决策模型线上补齐速度档位——与上周的 JEV-27B-VL 视觉版形成『视觉/快速』双形态，专注低延迟、校准置信度的决策输出。", source: "Hugging Face Blog（Autotrust）", date: "2026-10-08", url: "https://huggingface.co/blog/autotrust/autotrustjev-27b-fast-calibrated-decisions-and-ful", image: "https://cdn-uploads.huggingface.co/production/uploads/autotrust/jev27b-fast-social.png", badge: "模型发布", badgeType: "ai", readTime: "4 分钟", hotScore: 63, tags: ["JEV-27B", "决策模型", "校准", "低延迟"], content: [
      { title: "发布要点", type: "list", items: ["JEV-27B 快速校准版发布（10 月 8 日）；", "与上周 JEV-27B-VL 视觉版构成双形态产品线；", "主打：低延迟决策输出 + 校准的置信度。"] },
      { title: "笔者观察", type: "text", text: "『校准的置信度』是决策模型最容易被忽略的指标——游戏里的 AI 队友、难度调整、反作弊判分都需要『知道自己不知道』的模型。决策模型专用线（而非通用大模型兼职）在加速成型，游戏 AI 工程师可以开始关注这个细分。参考来源：Hugging Face Blog。" }
    ] },
    { id: "en-playcanvas-2-23-2", category: "engine", subcategory: "引擎更新", title: "PlayCanvas 2.23.2 发布：WebGL/WebGPU 引擎按周修补", summary: "PlayCanvas 引擎发布 v2.23.2（10 月 9 日）——距 2.23.1 仅两天，这个主打浏览器端的 WebGL/WebGPU 引擎保持高频修补节奏。", source: "GitHub（playcanvas/engine）", date: "2026-10-09", url: "https://github.com/playcanvas/engine/releases/tag/v2.23.2", image: "https://opengraph.githubassets.com/1/playcanvas/engine", badge: "引擎更新", badgeType: "engine", readTime: "3 分钟", hotScore: 64, tags: ["PlayCanvas", "WebGPU", "浏览器游戏"], content: [
      { title: "发布要点", type: "list", items: ["PlayCanvas v2.23.2（10 月 9 日）；", "2.23.0 → 2.23.1 → 2.23.2 一周三更；", "WebGL/WebGPU 双后端的浏览器引擎。"] },
      { title: "笔者观察", type: "text", text: "和本周 Unity Spark 把游戏创作搬进浏览器的动作呼应：『浏览器即平台』的基础设施正在被两头夹击——平台层（Google Playground）与引擎层（PlayCanvas 的高频迭代）同时发力。做小游戏方向的同学，WebGPU 后端的兼容性清单值得每周扫一眼。参考来源：GitHub。" }
    ] },
    { id: "en-luau-0-742", category: "engine", subcategory: "脚本运行时", title: "Luau 0.742 发布：Roblox 系 Lua 方言持续演进", summary: "Roblox 的 Luau 语言发布 0.742（10 月 10 日）——这个从 Roblox 独立出来的 Lua 方言带着渐进类型系统，是全平台最大 UGC 平台的脚本底座。", source: "GitHub（luau-lang/luau）", date: "2026-10-10", url: "https://github.com/luau-lang/luau/releases/tag/0.742", image: "https://opengraph.githubassets.com/1/luau-lang/luau", badge: "脚本运行时", badgeType: "engine", readTime: "3 分钟", hotScore: 62, tags: ["Luau", "Roblox", "Lua", "脚本语言"], content: [
      { title: "发布要点", type: "list", items: ["Luau 0.742 发布（10 月 10 日）；", "仓库已迁移至 luau-lang 组织（社区共治）；", "渐进类型系统是相对标准 Lua 的核心差异。"] },
      { title: "笔者观察", type: "text", text: "Roblox 每月活跃用户体量摆在那里，Luau 的工程化经验（沙箱、性能、类型渐进）对任何『给玩家开放脚本能力』的游戏都有参考价值——想做 UGC 编辑器的团队，Luau 的类型系统设计文档是一份现成的需求说明书。参考来源：GitHub。" }
    ] },
    { id: "en-unity-6000-6-5", category: "engine", subcategory: "版本更新", title: "Unity 6000.6.5f1 补丁发布：6.6 正式线持续维护", summary: "Unity 6000.6.5f1 上架官方发行说明——6.6 正式线保持稳定的补丁节奏，生产项目按需跟进即可。", source: "Unity 官方发行说明", date: "2026-10-09", url: "https://unity.com/releases/editor/whats-new/6000.6.5f1", image: "https://cdn.sanity.io/images/fuvbjjlp/production/b9385c095d1c8c58f48fc7d4fc8ae257395169c8-266x98.png", badge: "版本更新", badgeType: "engine", readTime: "2 分钟", hotScore: 60, tags: ["Unity", "6000.6.5f1", "补丁"], content: [
      { title: "版本要点", type: "list", items: ["Unity 6000.6.5f1 补丁上架；", "6.6 正式线（6000.6.x）持续维护中；", "生产环境推荐版本线不变。"] },
      { title: "笔者观察", type: "text", text: "6.6 线补丁密度稳定，说明 Unity 在把资源投向 6.7 Beta 与 Spark 平台的同时没有荒废生产主力线。毕设用 Unity 的同学：锁定 6000.6.x 最新补丁，别追 6.7 Beta，理由同前——Beta 不保兼容。参考来源：Unity 官方。" }
    ] },
    { id: "en-defold-1-14-1-alpha", category: "engine", subcategory: "引擎更新", title: "Defold 1.14.1-alpha 发布：1.14 周期进入迭代打磨", summary: "Defold 发布 1.14.1-alpha（9 月 30 日）——继 1.14.0-beta 之后，这个轻量级跨平台引擎的 1.14 周期进入第二轮迭代。", source: "GitHub（defold/defold）", date: "2026-09-30", url: "https://github.com/defold/defold/releases/tag/1.14.1-alpha", image: "https://opengraph.githubassets.com/1/defold/defold", badge: "引擎更新", badgeType: "engine", readTime: "3 分钟", hotScore: 58, tags: ["Defold", "跨平台", "开源引擎"], content: [
      { title: "发布要点", type: "list", items: ["Defold 1.14.1-alpha（9 月 30 日）；", "1.14.0-beta 之后的第二轮迭代；", "King（Candy Crush 开发商）维护的轻量引擎，移动端表现稳定。"] },
      { title: "笔者观察", type: "text", text: "Defold 的补位价值在于『小而稳』：包体小、冷启动快、Lua 脚本上手成本低于 C#——超休闲和小游戏团队的真实选择。.alpha 版本仅供观望，生产仍用 1.14.0-beta 或更稳的 1.13 线。参考来源：GitHub。" }
    ] },
    { id: "en-flame-jenny-dev", category: "engine", subcategory: "插件更新", title: "Flame 生态 jenny 插件 1.5.2-dev.1：Flutter 游戏引擎的音频线推进", summary: "Flutter 游戏引擎 Flame 生态的 jenny 插件发布 1.5.2-dev.1（10 月 6 日）——jenny 为 Flame 提供音频能力，dev 版本先行验证，稳定版随后。", source: "GitHub（flame-engine/flame）", date: "2026-10-06", url: "https://github.com/flame-engine/flame/releases/tag/jenny-v1.5.2-dev.1", image: "https://opengraph.githubassets.com/1/flame-engine/flame", badge: "插件更新", badgeType: "engine", readTime: "3 分钟", hotScore: 56, tags: ["Flame", "Flutter", "jenny", "音频"], content: [
      { title: "发布要点", type: "list", items: ["jenny 1.5.2-dev.1 发布（10 月 6 日）；", "Flame（Flutter 游戏引擎）生态插件；", "同批还有 flame_typled 0.2.0-dev.1。"] },
      { title: "笔者观察", type: "text", text: "Flame 路线的定位很清晰：不做 Unity 的对手，只接『用 Flutter 的团队顺手做个游戏』的长尾需求——国内大量工具类 App 团队正是这个画像。用 Dart 的同学把它当副线技能储备即可。参考来源：GitHub。" }
    ] },
    { id: "i-sony-vr-patents-meta", category: "industry", subcategory: "大厂动向", title: "索尼向 Meta 转让 400+ 全球 VR 专利：2025 年 12 月协议的落地动作", summary: "索尼确认向 Meta 转让超过 400 项全球 VR 专利——这是 2025 年 12 月双方协议的执行动作。PSVR 时代的核心技术资产部分易主，XR 行业的专利地图正在重绘。", source: "GamesIndustry.biz", date: "2026-10-09", url: "https://www.gamesindustry.biz/sony-agrees-to-transfer-over-400-global-vr-patents-to-meta-following-december-2025-agreement", image: "https://assetsio.gnwcdn.com/psvr-2_N82EKCi.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "industry", readTime: "4 分钟", hotScore: 81, tags: ["索尼", "Meta", "VR 专利", "XR"], content: [
      { title: "事件要点", type: "list", items: ["索尼向 Meta 转让 400+ 全球 VR 专利；", "系 2025 年 12 月协议的落地执行；", "涉及追踪、显示等 VR 核心技术族。"] },
      { title: "笔者观察", type: "text", text: "『专利换现金/合作』是硬件退潮期的标准动作——索尼把 VR 专利包转给 Meta，等于承认消费级 VR 短期内没有第二增长曲线，而 Meta 愿意接盘是因为 Quest 的量还撑得起专利护城河。做 XR 方向的同学注意：专利密集区（光学、追踪）的进入门槛在名义上更高了，但开源方案（如眼镜盒子的轻量路线）反而有空间。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-r6-mobile-shutdown", category: "industry", subcategory: "停服", title: "育碧宣布关停《彩虹六号》手游：全球上线仅七个月", summary: "育碧宣布关停《Rainbow Six Mobile》——距离全球上线仅七个月。又一个『主机 IP 手游化』的失败样本：核心玩法的手感迁移，比 IP 知名度难得多。", source: "GamesIndustry.biz", date: "2026-10-09", url: "https://www.gamesindustry.biz/ubisoft-announces-shutdown-of-rainbow-six-mobile-seven-months-after-global-launch", image: "https://assetsio.gnwcdn.com/copertina_HWJnsEe.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "停服", badgeType: "industry", readTime: "3 分钟", hotScore: 71, tags: ["育碧", "彩虹六号", "手游", "停服"], content: [
      { title: "事件要点", type: "list", items: ["育碧关停《Rainbow Six Mobile》；", "全球上线仅七个月；", "本月与 Krafton 砍 Black Budget（九个月）连成『短命射击手游』样本带。"] },
      { title: "笔者观察", type: "text", text: "拆解这类失败比研究成功更有信息量：R6 手游的困境不是『做得不好』，而是『战术射击的核心体验（信息战、角度博弈）在触屏上天然衰减』。给做手游的同学的启示：移植的不是玩法清单，是『紧张感的来源』——如果来源是外设精度，那这个 IP 就不该做手游。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-avalanche-supermassive", category: "industry", subcategory: "发行合作", title: "Avalanche 工作室集团将全球发行 Supermassive Games 的作品", summary: "《正当防卫》系列开发商 Avalanche 工作室集团宣布将全球发行、营销与分发 Supermassive Games（《直到黎明》系列开发商）的作品——两家中型独立集团抱团取暖的发行联盟。", source: "GamesIndustry.biz", date: "2026-10-09", url: "https://www.gamesindustry.biz/avalanche-studio-group-to-globally-publish-market-and-distribute-titles-from-supermassive-games", image: "https://assetsio.gnwcdn.com/nordisk-games-avalanche-supermassive.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "发行合作", badgeType: "industry", readTime: "4 分钟", hotScore: 69, tags: ["Avalanche", "Supermassive", "发行", "独立联盟"], content: [
      { title: "事件要点", type: "list", items: ["Avalanche 工作室集团承接 Supermassive 作品的全球发行与分发；", "两家欧洲中型独立集团的合作；", "中型开发商在发行商并购潮中自建渠道的样本。"] },
      { title: "笔者观察", type: "text", text: "当大发行商忙于并购整合（本周 Skydance 合并、Fireshine 收购），中型独立选择横向结盟：Avalanche 有全球发行网络，Supermassive 有稳定的叙事恐怖产能——这是『不卖身也能拿到渠道』的第三条路。关注后续是否有更多欧洲工作室加入这个联盟。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-undead-labs-layoffs", category: "industry", subcategory: "裁员", title: "Undead Labs 老板拒谈裁员具体人数：『我不想把影响简化成一个数字』", summary: "《腐烂国度》开发商 Undead Labs 负责人在内部与公开沟通中拒绝透露受裁员影响的具体人数：『我不忍心把这些个体的影响简化成一个数字或统计口径』——裁员沟通伦理的罕见样本。", source: "GamesIndustry.biz", date: "2026-10-09", url: "https://www.gamesindustry.biz/undead-labs-boss-reluctant-to-share-number-affected-by-layoffs-i-would-hate-to-reduce-the-impact-to-those-individuals-to-a-number-or-statistic", image: "https://assetsio.gnwcdn.com/state-of-decay-3-june-2026-screen-2.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "裁员", badgeType: "industry", readTime: "4 分钟", hotScore: 74, tags: ["Undead Labs", "腐烂国度", "裁员", "沟通伦理"], content: [
      { title: "事件要点", type: "list", items: ["Undead Labs 确认裁员但拒绝公布具体人数；", "负责人的表述：不愿把个体影响简化为统计数字；", "与本周 Gravity Well（40+）、Nerial（关停）同处一波收缩。"] },
      { title: "笔者观察", type: "text", text: "这个表态两面性都很鲜明：对内是体恤，对外则消解了公众监督的可能性——行业裁员统计恰恰依赖这些数字。作为未来要带团队的人，记住这个案例的两面；作为求职者，记住它背后的信号：《腐烂国度 3》在推进，但团队在收编。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-streaming-moment-opinion", category: "industry", subcategory: "行业评论", title: "评论：本该是游戏串流的时刻，但它没有到来", summary: "GamesIndustry.biz 评论文章指出：基础设施、订阅习惯与云游戏技术都已就位，游戏串流的『应有时刻』却始终没有兑现——问题不在技术，而在商业模式与内容让步的 never-ending 循环。", source: "GamesIndustry.biz", date: "2026-10-09", url: "https://www.gamesindustry.biz/this-should-be-game-streamings-moment-its-not-opinion", image: "https://assetsio.gnwcdn.com/Jason_Duval_02_YqCdnKx.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "行业评论", badgeType: "industry", readTime: "6 分钟", hotScore: 70, tags: ["云游戏", "串流", "商业模式"], content: [
      { title: "评论要点", type: "list", items: ["游戏串流的技术条件已基本就位；", "但『应有时刻』迟迟未到；", "卡点在商业模式与内容授权的结构性矛盾。"] },
      { title: "笔者观察", type: "text", text: "云游戏的十年故事刚好证伪了『技术就位 = 市场就位』的线性思维：延迟不是核心障碍，『谁付钱、付多少、内容方让不让』才是。与昨日 GTA6 不上 PC 云端的新闻连读——连微软自己都在给串流的内容授权设限，这个市场的真实温度可见一斑。参考来源：GamesIndustry.biz。" }
    ] },
{ id: "os-capcom-redox", category: "opensource", subcategory: "大厂开源", title: "Capcom 官方开源 REDox：RE 引擎下一代技术的 .NET 结构化数据引擎", summary: "Capcom 技术 division 官方组织 CAPCOM-TD-OSS 开源 REDox（9 月 30 日创建，本周冲上热榜）：高性能、基于 token 的 .NET 结构化数据引擎——官方描述明确其为『REX 的核心组件，Capcom 下一代游戏引擎背后的技术』。", source: "GitHub（CAPCOM-TD-OSS）", date: "2026-10-10", url: "https://github.com/CAPCOM-TD-OSS/REDox", image: "https://opengraph.githubassets.com/1/CAPCOM-TD-OSS/REDox", badge: "大厂开源", badgeType: "opensource", readTime: "6 分钟", hotScore: 86, tags: ["Capcom", "RE 引擎", ".NET", "数据引擎"], content: [
      { title: "仓库要点", type: "list", items: ["Capcom 技术部门官方开源组织 CAPCOM-TD-OSS 的项目；", "REDox：高性能、token 化的 .NET 结构化数据引擎；", "官方定位：REX 的核心组件——Capcom 下一代游戏引擎的底层技术；", "9 月 30 日创建，本周登 GitHub 热榜（1300+ star）。"] },
      { title: "笔者观察", type: "text", text: "大厂开源引擎底层组件是 rare 事件：任天堂从不开源，UE 只开源部分，Capcom 直接把『下一代引擎的数据层』放到 GitHub 上，信号意义大于实用意义——要么在为 REX 生态预铺开发者社区，要么在为招聘立技术品牌。对学 C#/.NET 的同学，这是一份难得的『游戏工业级』数据引擎源码：看它怎么做序列化、schema 版本管理与热更安全。参考来源：GitHub。" }
    ] },
    { id: "os-universal-modder", category: "opensource", subcategory: "AI 工具", title: "universal-modder 冲上 6 千星：把 Claude 指向任何游戏，Mod 制作进入 AI 辅助时代", summary: "rehan-remade/universal-modder（9 月 30 日创建）本周冲上热榜：技能、工具链与 MCP 服务组合，让 Claude Code 对『你拥有的 PC 游戏』完成侦察、逆向分析与 Mod 制作——含 AI 生成的美术、3D 与音频资产管线。", source: "GitHub（rehan-remade）", date: "2026-10-10", url: "https://github.com/rehan-remade/universal-modder", image: "https://opengraph.githubassets.com/1/rehan-remade/universal-modder", badge: "AI 工具", badgeType: "opensource", readTime: "5 分钟", hotScore: 78, tags: ["AI Modding", "Claude Code", "逆向", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["universal-modder：9 月 30 日创建，6000+ star；", "组成：技能集 + 工具链 + MCP 服务，对接 Claude Code；", "流程覆盖：游戏侦察 → 逆向分析 → AI 生成美术/3D/音频 → Mod 落地；", "定位明确：仅用于你拥有的 PC 游戏。"] },
      { title: "笔者观察", type: "text", text: "这个项目把『AI 辅助 Mod』从段子做成了工作流：逆向脚本格式、生成资产、打包落地全链路都有 AI 参与——本周它和 Capcom REDox 同框热榜，一个是官方开放底层，一个是社区消费开放底层，Mod 生态的基础设施正在换代。强调一遍伦理边界：只对你拥有、且 Mod 政策允许的游戏使用。参考来源：GitHub。" }
    ] },
    { id: "os-lingbot-map", category: "opensource", subcategory: "3D 重建", title: "LingBot-Map 登热榜：ECCV 2026 最佳论文候选的流式 3D 重建", summary: "Robbyant/lingbot-map 登上 GitHub 热榜：Geometric Context Transformer 架构的流式 3D 重建——ECCV 2026 最佳论文奖候选。实时从视频流重建空间，与游戏资产管线、扫描建模直接相关。", source: "GitHub（Robbyant）", date: "2026-10-10", url: "https://github.com/Robbyant/lingbot-map", image: "https://opengraph.githubassets.com/1/Robbyant/lingbot-map", badge: "3D 重建", badgeType: "opensource", readTime: "5 分钟", hotScore: 74, tags: ["3D 重建", "ECCV 2026", "Transformer", "扫描建模"], content: [
      { title: "仓库要点", type: "list", items: ["LingBot-Map：Geometric Context Transformer 的流式 3D 重建；", "ECCV 2026 最佳论文奖候选；", "本周登 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "流式 3D 重建对游戏管线的意义：拍照扫描（photogrammetry）从『离线批处理』走向『实时增量』——未来做场景美术，可能是举着手机走一圈、资产直接进引擎草稿。这与本周 Unity Spark 的『AI 生成资产』是两条并行的资产民主化路线：一条生成、一条重建。参考来源：GitHub。" }
    ] },
    { id: "os-litellm-gateway", category: "opensource", subcategory: "AI 基础设施", title: "LiteLLM 登热榜：Rust 核心的 AI 网关，一个接口调 100+ 大模型 API", summary: "BerriAI/litellm 本周重回 GitHub 热榜：新版以 Rust 为核心、Python SDK 交互——统一 OpenAI 格式调用 100+ 家大模型 API，自带成本追踪、护栏与负载均衡。", source: "GitHub（BerriAI/litellm）", date: "2026-10-10", url: "https://github.com/BerriAI/litellm", image: "https://opengraph.githubassets.com/1/BerriAI/litellm", badge: "AI 基础设施", badgeType: "opensource", readTime: "4 分钟", hotScore: 71, tags: ["LiteLLM", "AI 网关", "多模型", "Rust"], content: [
      { title: "仓库要点", type: "list", items: ["LiteLLM：统一接口调用 100+ 家大模型 API；", "新版 Rust 核心 + Python SDK，主打『最快最轻』；", "内置成本追踪、护栏与负载均衡。"] },
      { title: "笔者观察", type: "text", text: "与本周『模型之战』（企业份额平分）互为因果：正因为没有哪家模型独大，网关层才成了必选项。给游戏接 AI 的同学：把『换模型成本』压到零是最重要的架构决策——网关模式让你的 NPC 大脑可以随时从 A 家切到 B 家，一行配置的事。参考来源：GitHub。" }
    ] },
    { id: "os-alibaba-open-code-review", category: "opensource", subcategory: "研发工具", title: "阿里开源 open-code-review：确定性流水线 + LLM 智能体的混合代码审查", summary: "阿里巴巴开源 open-code-review：混合架构代码审查工具——确定性规则流水线 + LLM 智能体，主打精准到行的审查意见，官方称已在阿里内部规模验证。", source: "GitHub（alibaba）", date: "2026-10-10", url: "https://github.com/alibaba/open-code-review", image: "https://opengraph.githubassets.com/1/alibaba/open-code-review", badge: "研发工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 66, tags: ["阿里", "代码审查", "LLM Agent", "研发效能"], content: [
      { title: "仓库要点", type: "list", items: ["open-code-review：混合架构（确定性流水线 + LLM Agent）；", "特点：审查意见精准到行、可在阿里规模下稳定运行；", "本周登 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "『确定性规则先跑、LLM 只处理规则搞不定的部分』——这个混合架构思路同样适用于游戏 QA：静态检查先过一遍资源命名/性能红线，AI 再看『这个技能手感描述与实现是否一致』这种需要理解力的部分。全交给 AI 是浪费钱，全交给规则是浪费人。参考来源：GitHub。" }
    ] },
    { id: "t-vulkan-tutorial", category: "tutorials", subcategory: "图形教程", title: "Vulkan Tutorial：从零写一个 Vulkan 渲染器的免费系统教程", summary: "vulkan-tutorial.com 是公认最好的 Vulkan 入门教程：从窗口、管线、交换链到描述符，带你用 C++ 从零实现一个可运行的 Vulkan 渲染器——理解现代图形 API 的心智模型首选。", source: "vulkan-tutorial.com", date: "2026-10-10", url: "https://vulkan-tutorial.com/", image: "", badge: "图形教程", badgeType: "tutorials", readTime: "持续学习", hotScore: 64, tags: ["Vulkan", "图形编程", "C++", "渲染"], content: [
      { title: "教程要点", type: "list", items: ["从零实现完整 Vulkan 渲染器；", "覆盖实例、设备、交换链、管线、描述符、帧缓冲全流程；", "代码逐步给出，每章可运行。"] },
      { title: "笔者观察", type: "text", text: "Vulkan 代码量劝退无数人，但它的价值不在写完，而在『理解 GPU 时代的 API 为什么长这样』——学完再看 DX12/Metal 文档会有豁然开朗感。建议配合 LearnOpenGL（已入常青库）交叉阅读：一个教你旧世界的直觉，一个教你新世界的显式。参考来源：vulkan-tutorial.com。" }
    ] },
    { id: "t-handmadehero", category: "tutorials", subcategory: "引擎源码", title: "Handmade Hero：Casey Muratori 从零手写完整游戏的 legendary 系列", summary: "Handmade Hero：Casey Muratori 从第一行代码开始手写一个完整的 2D 游戏引擎与游戏——不依赖任何库，从平台层、数学库、渲染到音频全部现场推导，是『引擎是怎么来的』这个问题的终极答案。", source: "Handmade Hero（Molly Rocket）", date: "2026-10-10", url: "https://handmadehero.org/", image: "", badge: "引擎源码", badgeType: "tutorials", readTime: "持续学习", hotScore: 66, tags: ["Handmade Hero", "Casey Muratori", "引擎开发", "C 语言"], content: [
      { title: "项目要点", type: "list", items: ["Casey Muratori 的从零手写游戏引擎系列；", "不依赖任何第三方库，平台层/数学/渲染/音频全自研；", "早期视频免费开放，代码仓库伴随更新。"] },
      { title: "笔者观察", type: "text", text: "和本周的 olcPixelGameEngine、Capcom REDox 连成一条『读引擎三段路』：olc 教你用小引擎，Handmade 教你造小引擎，REDox 让你看工业级引擎的一个切面。想走 TA/引擎岗的同学，Handmade 的前 30 集是性价比最高的投入。参考来源：Handmade Hero 官网。" }
    ] },
    { id: "t-blenderguru", category: "tutorials", subcategory: "美术教程", title: "Blender Guru：Andrew Price 的 Blender 教程站——从甜甜圈到光照体系", summary: "Blender Guru（Andrew Price）是 Blender 社区最有名的教程作者：他那支『甜甜圈』系列是全球无数美术入坑 Blender 的第一课，站内还有光照、材质与工作流的系统课程。", source: "Blender Guru", date: "2026-10-10", url: "https://www.blenderguru.com/", image: "http://static1.squarespace.com/static/58586fa5ebbd68b20ba7ea10/t/59848c0b414fb5d0707a4be9/1501885457791/Headshot.png?format=1500w", badge: "美术教程", badgeType: "tutorials", readTime: "持续学习", hotScore: 62, tags: ["Blender", "3D 美术", "光照", "教程"], content: [
      { title: "站点要点", type: "list", items: ["Andrew Price 的 Blender 教程与课程站；", "『甜甜圈』系列：全球播放量最高的 Blender 入门课之一；", "光照与材质的系统化讲解是强项。"] },
      { title: "笔者观察", type: "text", text: "Blender 免费 + Blender Guru 免费课 + Poly Haven CC0 资产（本周已入库）＝ 零成本 3D 美术起步包。给美术新生的路径：甜甜圈打基础 → 每天一个小场景 → 用 CC0 资产搭完整光照氛围，三个月能看出肉眼差距。参考来源：Blender Guru。" }
    ] },
    { id: "t-u3d-learn-cn", category: "tutorials", subcategory: "中文教程", title: "Unity 中文课堂：Unity 官方中文学习平台，体系化免费课程", summary: "Unity 官方中文课堂（learn.u3d.cn）：面向中文开发者的体系化 Unity 学习资源——入门路径、案例实战与引擎特性讲解，配合团结引擎生态使用更顺。", source: "Unity 中文课堂", date: "2026-10-10", url: "https://learn.u3d.cn/", image: "https://learn-public.cdn.u3d.cn/cdn-origin/images/learn-u3d-share.png", badge: "中文教程", badgeType: "tutorials", readTime: "持续学习", hotScore: 60, tags: ["Unity", "中文教程", "团结引擎", "入门"], content: [
      { title: "平台要点", type: "list", items: ["Unity 官方面向中文开发者的学习平台；", "覆盖入门路径、案例实战与特性讲解；", "与团结引擎（Tuanjie）生态资料互通。"] },
      { title: "笔者观察", type: "text", text: "中文一手学习资料的稀缺是真实痛点——官方中文课堂的价值在于内容由引擎厂维护、随版本更新，比第三方录播课保鲜。配合本站 roadmap 里的学习路线使用：先走官方入门路径，再按岗位细分页的技能树补深度。参考来源：Unity 中文课堂。" }
    ] },
    { id: "t-3dgep", category: "tutorials", subcategory: "引擎编程", title: "3D Game Engine Programming：手把手拆解引擎模块的经典博客", summary: "3DGEP（3D Game Engine Programming）是面向引擎学习者的老牌技术博客：场景图、骨骼动画、物理、渲染管线等模块的从零实现系列，代码完整、推导细致。", source: "3D Game Engine Programming", date: "2026-10-10", url: "https://www.3dgep.com/", image: "", badge: "引擎编程", badgeType: "tutorials", readTime: "持续学习", hotScore: 61, tags: ["引擎架构", "C++", "骨骼动画", "图形"], content: [
      { title: "站点要点", type: "list", items: ["引擎模块从零实现系列博客；", "覆盖场景图、骨骼动画、物理集成、渲染管线；", "代码完整，适合对照实现。"] },
      { title: "笔者观察", type: "text", text: "它的骨骼动画系列是国内 TA 面试圈口口相传的『必读』——把 FBX 解析、骨骼层级、蒙皮权重一路讲到底。配合 Handmade Hero 的底层视角 + 3DGEP 的模块视角，引擎岗的面试储备就齐了大半。参考来源：3DGEP。" }
    ] },
    { id: "c-ld60-countdown", category: "contest", subcategory: "赛前倒计时", title: "Ludum Dare 60 距开赛 6 天：4 月/10 月双赛的下半场即将鸣枪", summary: "全球历史最悠久的 Game Jam——Ludum Dare 60 将于 10 月 16 日开赛（72 小时 Compo / 96 小时 Jam 双轨），官网事件页已进入赛前状态：主题与规则页可提前研读。", source: "Ludum Dare 官网", date: "2026-10-10", url: "https://ldjam.com/events/ludum-dare/60", image: "", badge: "赛前倒计时", badgeType: "contest", readTime: "4 分钟", hotScore: 66, tags: ["Ludum Dare 60", "Game Jam", "72 小时", "独立游戏"], content: [
      { title: "赛事要点", type: "list", items: ["Ludum Dare 60：10 月 16 日开赛；", "Compo（72h，单人全包）与 Jam（96h，可组队）双轨；", "事件页已可浏览规则与往期作品。"] },
      { title: "笔者观察", type: "text", text: "LD 是唯一『赛前一周准备』比『赛中 72 小时』更能拉开差距的 Jam：赛前定好技术栈、模板工程、音频素材库（FreeSound 本周已入库），赛中只专注玩法。第一次参加的同学选 Jam 轨——96 小时加组队，容错高得多。参考来源：Ludum Dare 官网。" }
    ] },
    { id: "c-ggj2027-prep", category: "contest", subcategory: "赛事筹备", title: "Global Game Jam 2027 筹备正式启动：站点注册现已开放", summary: "Global Game Jam 中国区组织方公告：2026/2027 届全球游戏创作节（Global Game Jam）正式启动筹备，活动站点注册现已开放——1 月末的全球同题创作节进入倒计时。", source: "AWN China（中国区组织方）", date: "2026-10-08", url: "https://awnchina.cn/2026%e5%b9%b4%e5%85%a8%e7%90%83%e6%b8%b8%e6%88%8f%e5%88%9b%e4%bd%9c%e8%8a%82%ef%bc%88global-game-jam%ef%bc%89%e6%ad%a3%e5%bc%8f%e5%90%af%e5%8a%a8%e7%ad%b9%e5%a4%87%ef%bc%81/", image: "https://awnchina.cn/wp-content/uploads/2026/0/preview.jpg", badge: "赛事筹备", badgeType: "contest", readTime: "3 分钟", hotScore: 64, tags: ["Global Game Jam", "Game Jam", "站点注册", "中国区"], content: [
      { title: "赛事要点", type: "list", items: ["GGJ 2027 筹备正式启动；", "活动站点（线下 Jam 场地）注册已开放；", "中国区由 AWN 组织，历届提供多城市线下站点。"] },
      { title: "笔者观察", type: "text", text: "GGJ 的正确打开方式是线下站：48 小时面对面协作的临场感是线上 Jam 给不了的，也是认识同城开发者的最快途径。想申办站点的高校社团现在就该行动——站点注册开放通常意味着名额有限。参考来源：AWN China。" }
    ] },
    { id: "c-tga-2026-countdown", category: "contest", subcategory: "奖项日历", title: "TGA 2026 定档 12 月 10 日：公售门票 10 月 29 日开抢，提名 11 月中公布", summary: "The Game Awards 官网确认：2026 年颁奖礼将于 12 月 10 日在洛杉矶 Peacock 剧院举行，公售门票 10 月 29 日开售，提名名单 11 月中旬公布——年度评选周期正式进入倒计时。", source: "The Game Awards 官网", date: "2026-10-10", url: "https://thegameawards.com/", image: "https://thegameawards.com/images/og-image.jpg", badge: "奖项日历", badgeType: "contest", readTime: "3 分钟", hotScore: 65, tags: ["TGA 2026", "颁奖典礼", "12 月 10 日", "年度游戏"], content: [
      { title: "赛事要点", type: "list", items: ["TGA 2026：12 月 10 日，洛杉矶 Peacock 剧院；", "公售门票 10 月 29 日开售；", "提名名单 11 月中旬公布。"] },
      { title: "笔者观察", type: "text", text: "TGA 对学生的两个观察角度：①提名名单（11 月中）是年末玩什么的最优片单，比任何榜单都精；②颁奖礼本身是行业风向标——TGA 上公布的新作预告量级，基本决定明年上半年的话题走向。把 11 月中旬和 12 月 10 日标进日历。参考来源：The Game Awards 官网。" }
    ] }
  ]
}
