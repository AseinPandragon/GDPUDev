window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-08",
    weekday: "星期四",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-08 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "Claude Haiku 5.5 发布：运行成本较 4.5 降约 75%，Sonnet 5.5 缓存读取价同步下调 50%",
      "Google × Unity 官宣战略合作：Unity Spark 把 AI 游戏创作搬进浏览器",
      "威世智工会新诉求：要求公司停止推进生成式 AI",
      "派拉蒙游戏与华纳游戏合并：Skydance 完成 111 亿美元收购后的第一刀",
      "Unity 官方博客详解 Spark 设计哲学：AI 复述老游戏不会让你成为小岛秀夫"
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
    id: "claude-haiku-5-5-launch",
    category: "ai",
    categoryName: "AI前沿 · 头条",
    tag: "模型发布",
    title: "Claude Haiku 5.5 发布：运行成本直降 75%，AI 应用开发的单价地板被再次击穿",
    summary: "Anthropic 于 10 月 7 日发布 Claude Haiku 5.5：官方称其为速度最快、最便宜、能力最强的 Haiku 系列小模型，运行成本较 Haiku 4.5 降低约 75%，同时将 Sonnet 5.5 缓存读取价格下调 50% 至每百万词元 0.10 美元——面向大规模、成本敏感型编程子智能体任务，已全平台上线。",
    image: "https://www-cdn.anthropic.com/images/4zrzovbb/website/89e9b0b3ca6f2c8bb4a0e74e13b8f4bb45b2f8bb-1200x630.jpg",
    source: "Anthropic 官方",
    date: "2026-10-07",
    url: "https://www.anthropic.com/claude-haiku-5-5",
    readTime: "5 分钟深度",
    hotScore: 91,
    tags: ["Anthropic", "Claude Haiku 5.5", "模型定价", "AI 编程"],
    content: [
      { title: "发布要点", type: "list", items: ["10 月 7 日发布：速度最快、最便宜、能力最强的 Haiku 系列；", "运行成本较 Haiku 4.5 降低约 75%；", "Sonnet 5.5 缓存读取价格下调 50%，至每百万词元 0.10 美元；", "定位：编程子智能体与大规模成本敏感任务；已上线 AWS、谷歌云、Azure 全平台；", "面向 Max 与 Team 用户新增每月 API 额度。"] },
      { title: "笔者观察", type: "text", text: "这条对独立开发者与学生的意义非常直接：『子智能体』（subagent）这个词正在成为官方主推的用法——让一个便宜的模型并行跑几十个杂活，把贵的模型留给关键决策。Haiku 5.5 降价 75% 等于把这种『一群便宜助手 + 一个聪明主管』的架构的月费再砍一大截。用 AI 辅助做毕设的同学，按新价格重算预算，你可能会发现『多开几个并行智能体』突然变得划算了。参考来源：Anthropic 官方。" }
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
    { id: "ai-wotc-union-genai", category: "ai", subcategory: "AI 劳资", title: "威世智工会扩大诉求：要求公司停止推进生成式 AI", summary: "威世智（Wizards of the Coast，CWA 工会）在谈判中提出新诉求：要求公司停止推进生成式 AI 的使用——游戏业劳资谈判首次把『AI 使用本身』写成正式条款，意义超出一家公司。", source: "GamesIndustry.biz", date: "2026-10-07", url: "https://www.gamesindustry.biz/wizards-of-the-coast-union-expands-demands-company-stop-pushing-generative-ai", image: "https://assetsio.gnwcdn.com/Wizards_CWA.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "AI 劳资", badgeType: "ai", readTime: "4 分钟", hotScore: 82, tags: ["威世智", "工会", "生成式 AI", "劳资谈判"], content: [
      { title: "事件要点", type: "list", items: ["威世智工会在谈判中扩大诉求；", "核心新条款：要求公司停止推进生成式 AI；", "这是游戏业劳资谈判首次将『AI 使用本身』列为正式议题。"] },
      { title: "笔者观察", type: "text", text: "把本周的 AI 新闻连成线：Mod 作者自毁抗议、独立团队标榜『无 AI』、现在工会把反 AI 写进谈判条款——对 AI 的抵制正在从舆论走向制度。对准备入行的同学，这决定了你未来合同里的工作边界怎么写，值得持续跟进这类先例。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "ai-claude-corps", category: "ai", subcategory: "AI 人才", title: "Anthropic 推出 Claude Corps：把早期职业人才送进非营利组织『用 AI 干活』", summary: "Anthropic 官方上线 Claude Corps 计划：连接早期职业人才与使命驱动的非营利组织，让 AI 在公益场景落地——可以申请成为研究员（fellow）或接收方（host），AI 大厂的人才实验扩展到公益赛道。", source: "Anthropic 官方", date: "2026-10-06", url: "https://www.anthropic.com/claude-corps", image: "https://www-cdn.anthropic.com/images/4zrzovbb/website/f48c092ccae1f25e7ebeb154a66dcc201b60b49e-1200x630.jpg", badge: "AI 人才", badgeType: "ai", readTime: "3 分钟", hotScore: 72, tags: ["Anthropic", "Claude Corps", "AI 人才", "公益"], content: [
      { title: "计划要点", type: "list", items: ["Claude Corps：连接早期职业人才与使命驱动的非营利组织；", "目标：让 AI 在真实公益场景中落地工作；", "开放两种身份申请：研究员（fellow）与接收机构（host）。"] },
      { title: "笔者观察", type: "text", text: "与本周 Frontier Academy（1 亿美元训练一万名前沿部署工程师）连读，Anthropic 正在同时建设『顶尖部署人才』与『公益应用人才』两条管道。对想做『AI + 社会价值』方向的同学，fellow 申请值得放进日历——这类经历在履历上的稀缺性远高于又一门网课证书。参考来源：Anthropic 官方。" }
    ] },
    { id: "ai-nvidia-kumo-tabular", category: "ai", subcategory: "模型发布", title: "NVIDIA Kumo Tabular 发布：在表格预测任务上重画『精度-效率』边界", summary: "NVIDIA 在 Hugging Face 发布 Kumo Tabular 的技术解析：面向表格数据预测任务，官方称其刷新了精度与效率的前沿——结构化数据（玩家行为、运营数据）的 AI 预测门槛又降了一截。", source: "Hugging Face Blog（NVIDIA）", date: "2026-10-07", url: "https://huggingface.co/blog/nvidia/kumo-tabular", image: "https://cdn-uploads.huggingface.co/production/uploads/684040a5de1ad7f4fcec9508/HyVlq-3d7EVj_M-m_TfHJ.png", badge: "模型发布", badgeType: "ai", readTime: "5 分钟", hotScore: 70, tags: ["NVIDIA", "Kumo", "表格预测", "结构化数据"], content: [
      { title: "技术要点", type: "list", items: ["NVIDIA Kumo Tabular：面向表格数据预测的新方案；", "官方口径：在精度与效率上刷新前沿；", "表格预测正是玩家行为分析与运营预警的技术底座。"] },
      { title: "笔者观察", type: "text", text: "游戏行业最值钱的数据恰恰是表格：留存曲线、付费事件、匹配时长。大模型热归热，真正给运营和发行部门省钱的一直是表格预测模型——NVIDIA 下场做这一层，说明结构化数据 AI 的商业盘子比想象中大。做数据分析方向的同学可以把这篇当技术雷达。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-falcon-emirati", category: "ai", subcategory: "本地化模型", title: "Falcon-Emirati 发布：当大模型学会方言、文化与细微差别", summary: "阿联酋科技创新研究院（TII）发布 Falcon-Emirati：一个专门学会阿拉伯语方言、文化语境与细微表达的大模型——『通用大模型 + 地区文化微调』的本地化路线再下一城。", source: "Hugging Face Blog（TII）", date: "2026-10-06", url: "https://huggingface.co/blog/tiiuae/falcon-emirati", image: "https://cdn-uploads.huggingface.co/production/uploads/659bc8a7b0f43ed69f0b2300/MJHJMYW3O4CkLvXvn7DOp.png", badge: "本地化模型", badgeType: "ai", readTime: "5 分钟", hotScore: 68, tags: ["Falcon", "TII", "本地化", "阿拉伯语"], content: [
      { title: "发布要点", type: "list", items: ["TII 发布 Falcon-Emirati；", "重点：让模型掌握方言、文化与语境的细微差别；", "官方标题点题：『当 LLM 学会方言、文化与细微差别』。"] },
      { title: "笔者观察", type: "text", text: "这条对游戏出海是个信号：阿联酋、中东市场正在要求『真正懂本地文化』的 AI 与内容——不只是翻译对，而是梗要对、语气要对。做中东市场本地化的团队已经开始抢懂方言的人才，这与本周巴西『十年进前五』的区域崛起叙事是同一张地图上的两个坐标。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-headsupai-daily-oct7", category: "ai", subcategory: "行业综述", title: "AI 日报（10 月 7 日）：今日值得关注的模型发布与产品动态一览", summary: "HeadsUp AI 的 10 月 7 日每日简报：汇总当天最值得关注的模型发布、产品上线与公司动态——继 Claude Haiku 5.5 之后，本周 AI 发布节奏依旧密集。", source: "HeadsUp AI", date: "2026-10-07", url: "https://headsupai.io/ai-news-and-updates/today", image: "https://media.headsupai.io/og/trending?v=today-2026-10-07", badge: "行业综述", badgeType: "ai", readTime: "5 分钟", hotScore: 67, tags: ["AI 日报", "模型发布", "行业动态"], content: [
      { title: "简报要点", type: "list", items: ["10 月 7 日当日 AI 领域动态汇总；", "覆盖模型发布、产品上线与公司动态三类；", "与本周密集的发布节奏（Haiku 5.5、Kumo、Unity Spark）互为补充。"] },
      { title: "笔者观察", type: "text", text: "每天 5 分钟扫一遍这类日报的真正价值不在『知道』，而在『对齐节奏感』——AI 行业的发布密度已经接近手游版本更新的节奏，不了解节拍就无法判断什么时候该把自己的项目接入新技术。参考来源：HeadsUp AI。" }
    ] },
    { id: "en-unity-spark-google", category: "engine", subcategory: "引擎×AI", title: "Google × Unity 官宣战略合作：Unity Spark 把 AI 游戏创作搬进浏览器", summary: "Google 与 Unity 于 10 月 7 日宣布战略合作，共同打造集成式 AI 游戏创作平台：Unity Spark 让零经验用户在浏览器里用文字提示设计并迭代 3D 游戏，AI 智能体从 Asset Store 挑选素材、生成背景与工具，今年晚些时候开启 Beta——游戏创作门槛的历史性下探。", source: "Unity 官方新闻 / GamesIndustry.biz", date: "2026-10-07", url: "https://unity.com/news/google-and-unity-partner-on-new-ai-gaming-platform-for-the-next-era-of-interactive-entertainment", image: "https://cdn.sanity.io/images/fuvbjjlp/production/4d1659d37f2be989be3b6a6d58d36a29ee64dcbf-1920x1080.jpg", badge: "引擎×AI", badgeType: "engine", readTime: "7 分钟", hotScore: 89, tags: ["Unity Spark", "Google", "AI 游戏创作", "浏览器"], content: [
      { title: "合作要点", type: "list", items: ["10 月 7 日官宣：Google 与 Unity 战略合作，新平台年内上线；", "Unity Spark：浏览器内以文字提示设计并迭代 3D 游戏；", "AI 智能体自动从 Unity Asset Store 挑选素材、生成背景与工具；", "支持多人通过分享链接协作，作品发布至 Google Playground；", "官方博客强调设计哲学：『AI 复述一个已经发明出来的游戏，并不会让你成为小岛秀夫』。"] },
      { title: "笔者观察", type: "text", text: "这条是本周分量最重的引擎新闻，值得拆三层看：对玩家，创作门槛降到『会打字』；对开发者，Asset Store 素材生态直接变成了 Spark 的弹药库——做素材的团队迎来新分发渠道；对Unity 本身，这是从『专业引擎』向『创作平台』的定位转身。另外注意媒体报道的边界：首发版本不支持游戏销售、也不能导出到桌面版 Unity——听起来像民主化，实际是把创作圈在了自家平台里。参考来源：Unity 官方新闻。" }
    ] },
    { id: "en-rad-debugger-trending", category: "engine", subcategory: "开发工具", title: "Epic 的 RAD Debugger 登 GitHub 热榜：原生多进程图形化调试器为何被游戏开发者惦记", summary: "EpicGames/raddebugger 登上 GitHub 热榜（7800+ star）：原生、用户态、支持多进程的图形化调试器——由 Epic 旗下 RAD Game Tools 出品，专为游戏这类『不爱被调试』的程序打造。", source: "GitHub（EpicGames/raddebugger）", date: "2026-10-07", url: "https://github.com/EpicGames/raddebugger", image: "https://opengraph.githubassets.com/1/EpicGames/raddebugger", badge: "开发工具", badgeType: "engine", readTime: "4 分钟", hotScore: 74, tags: ["Epic", "RAD Debugger", "调试器", "开发工具"], content: [
      { title: "项目要点", type: "list", items: ["原生、用户态、支持多进程调试的图形化调试器；", "Epic 旗下 RAD Game Tools 出品，开源在 EpicGames 组织下；", "本周重回 GitHub 热榜（7800+ star）。"] },
      { title: "笔者观察", type: "text", text: "游戏程序调试难的根源是：实时运行、多线程、海量对象状态。RAD Debugger 的口碑正来自对这些痛点的针对性设计——理解它解决什么问题，比记住它有什么按钮更有价值。写 C++ 遇到过『断点一打游戏就卡死』的同学，去读读它的设计文档。参考来源：GitHub。" }
    ] },
    { id: "en-gpuopen-fsr-framegen", category: "engine", subcategory: "图形技术", title: "AMD GPUOpen 公开 FSR 帧生成技术页：Redstone 世代与《F1 25》首发合作细节", summary: "AMD GPUOpen 上线 FSR『Redstone』世代的 Frame Generation（帧生成）技术页：官方拆解帧生成管线，并给出与《F1 25》的首发合作案例——NVIDIA 之外的神经渲染路线图正变得日益清晰。", source: "AMD GPUOpen", date: "2026-10-07", url: "https://gpuopen.com/amd-fsr-framegeneration/", image: "https://gpuopen.com/images/f1-25-fsr-redstone-frame-gen-featured.Dp9uCfgT.jpg", badge: "图形技术", badgeType: "engine", readTime: "6 分钟", hotScore: 76, tags: ["AMD", "FSR", "帧生成", "F1 25"], content: [
      { title: "技术要点", type: "list", items: ["GPUOpen 上线 FSR Redstone 世代 Frame Generation 技术页；", "《F1 25》作为首发合作案例出现在官方配图中；", "与 Ray Regeneration、Radiance Caching 页面同批公开；", "AMD 延续 GPUOpen 的开源透明路线。"] },
      { title: "笔者观察", type: "text", text: "与本周 DirectX 的 Advanced Shader Delivery 新闻连读：AMD 用开源页面讲技术、微软用系统服务讲集成——两条路线都在把『AI 超分与帧生成』从旗舰专属推向基础设施。对学 TA 的同学，GPUOpen 页面的实现级细节是免费的进阶教材。参考来源：AMD GPUOpen。" }
    ] },
    { id: "en-gpuopen-fsr-radiancecaching", category: "engine", subcategory: "图形技术", title: "FSR Radiance Caching 技术页公开：光照缓存进入实时渲染的官方方案层", summary: "AMD GPUOpen 同批上线 FSR Radiance Caching（辐射缓存）技术页——把间接光照的缓存与复用做成标准化方案，与帧生成、光线重生共同构成 Redstone 世代的完整拼图。", source: "AMD GPUOpen", date: "2026-10-07", url: "https://gpuopen.com/amd-fsr-radiancecaching/", image: "https://gpuopen.com/images/fsr-radiancecaching-featured.DCvHlcUW.jpg", badge: "图形技术", badgeType: "engine", readTime: "6 分钟", hotScore: 72, tags: ["AMD", "FSR", "辐射缓存", "光照"], content: [
      { title: "技术要点", type: "list", items: ["FSR Radiance Caching 技术页上线；", "主题：间接光照的缓存与复用标准化；", "与 Frame Generation、Ray Regeneration 构成 Redstone 三件套。"] },
      { title: "笔者观察", type: "text", text: "辐射缓存是『全局光追平民化』的关键拼图：光追算得起的元素越多，剩余的才越需要暴力采样。三页技术文档连读下来，AMD 这代 FSR 的野心已经写得很明白——不只是放大分辨率，而是重排整个光照管线。参考来源：AMD GPUOpen。" }
    ] },
    { id: "en-dx-dump-files-preview", category: "engine", subcategory: "开发工具", title: "补位开发工具：DirectX Dump Files Preview——给图形崩溃现场留下『黑匣子』", summary: "微软 DirectX 团队的 Dump Files Preview（预览版）值得随本周着色器交付话题一起翻出来：它把 GPU 崩溃现场的状态完整留存，供开发者离线分析——配合本周的 Advanced Shader Delivery 与计时捕获库，DirectX 的工具链正在成型。", source: "DirectX 官方博客", date: "2026-06-18", url: "https://devblogs.microsoft.com/directx/dx-dump-files-preview/", image: "https://devblogs.microsoft.com/directx/wp-content/uploads/sites/42/2025/12/ultimate.webp", badge: "开发工具", badgeType: "engine", readTime: "5 分钟", hotScore: 66, tags: ["DirectX", "崩溃转储", "调试", "开发工具"], content: [
      { title: "工具要点", type: "list", items: ["DirectX Dump Files Preview：图形崩溃现场转储；", "可离线复现与分析 GPU 状态；", "与本周话题（着色器交付、计时捕获）同属 DirectX 工具链拼图。"] },
      { title: "笔者观察", type: "text", text: "『玩家说游戏闪退但本地无法复现』是 PC 游戏支持的头号噩梦——图形崩溃转储就是给这类问题装黑匣子。对计划上 PC 平台的独立团队：崩溃收集与符号化上传，值得放进首发工具清单，而不是等差评来了再补。参考来源：DirectX 官方博客。" }
    ] },
    { id: "os-diagram-design", category: "opensource", subcategory: "AI 工具链", title: "diagram-design：4.4 万 star 的『编辑级图表设计』技能——让 AI 生成的图终于不丑了", summary: "cathrynlavery 的 diagram-design 冲至 4.4 万 star：为 Claude Code、Codex 等编码智能体提供 42 种编辑级图表类型的绘制技能——自包含 HTML + SVG，官方口号是『没有阴影，拒绝 Mermaid 垃圾感』。", source: "GitHub（cathrynlavery/diagram-design）", date: "2026-10-07", url: "https://github.com/cathrynlavery/diagram-design", image: "https://opengraph.githubassets.com/1/cathrynlavery/diagram-design", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 75, tags: ["GitHub", "图表设计", "AI 技能", "开源"], content: [
      { title: "项目要点", type: "list", items: ["42 种编辑级图表类型，输出自包含 HTML + SVG；", "适配 Claude Code、Codex、Copilot、Droid 等主流智能体；", "设计原则：无阴影、无 Mermaid 垃圾感。"] },
      { title: "笔者观察", type: "text", text: "技能生态正在从『写代码』扩散到『做设计』——图表、排版、配图都在被技能化。对做策划案和作品集的同学，这类技能能把你的系统图从『手画流程图』升级到『编辑级示意』，答辩观感差距立现。参考来源：GitHub。" }
    ] },
    { id: "os-cmux", category: "opensource", subcategory: "AI 工具链", title: "cmux：2.7 万 star 的开源 macOS 终端——为『同时指挥一群 AI 智能体』而生", summary: "manaflow-ai 的 cmux 冲至 2.7 万 star：基于 Ghostty 的开源 macOS 终端，带垂直标签页与通知系统，专为同时管理多个 AI 编码智能体的多任务场景设计。", source: "GitHub（manaflow-ai/cmux）", date: "2026-10-07", url: "https://github.com/manaflow-ai/cmux", image: "https://opengraph.githubassets.com/1/manaflow-ai/cmux", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 73, tags: ["GitHub", "终端", "AI Agent", "开源"], content: [
      { title: "项目要点", type: "list", items: ["基于 Ghostty 的开源 macOS 终端；", "垂直标签页 + 智能体通知系统；", "面向多智能体并行工作的组织与可编程性。"] },
      { title: "笔者观察", type: "text", text: "本周终端赛道的竞争白热化：tuios（昨天）、cmux（今天）都在解决同一个问题——人怎么同时管一群智能体。这类工具的共同思路是『把智能体状态当作一等公民』，值得做工具链方向的同学观察这个设计范式的扩散。参考来源：GitHub。" }
    ] },
    { id: "os-security-audit-skill", category: "opensource", subcategory: "AI 工具链", title: "Cloudflare 开源 security-audit-skill：2.6 万 star 的多阶段安全审计智能体技能", summary: "Cloudflare 开源 security-audit-skill（2.6 万 star）：一个面向编码智能体的多阶段安全审计技能——产出可独立验证、机器可读的审计结果，把『让 AI 自己查安全』变成可执行的流程。", source: "GitHub（cloudflare/security-audit-skill）", date: "2026-10-07", url: "https://github.com/cloudflare/security-audit-skill", image: "https://opengraph.githubassets.com/1/cloudflare/security-audit-skill", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 71, tags: ["Cloudflare", "安全审计", "AI 技能", "开源"], content: [
      { title: "项目要点", type: "list", items: ["多阶段安全审计技能，面向编码智能体；", "产出独立验证、机器可读的审计发现；", "Cloudflare 官方开源，周内 2.6 万 star。"] },
      { title: "笔者观察", type: "text", text: "『机器可读 + 可独立验证』是这条的题眼：审计结果不再是人写报告，而是可以被下一个流程直接消费的结构化数据——这与中国本周的 npm 供应链投毒事件正好构成一体两面：AI 既是攻击放大器，也在成为防御流水线。参考来源：GitHub。" }
    ] },
    { id: "os-cursor-plugins", category: "opensource", subcategory: "AI 工具链", title: "Cursor 开源插件规范与官方插件仓库：编辑器智能体的『应用商店』标准来了", summary: "Cursor 开源其插件规范（cursor/plugins）：定义了编辑器智能体插件的接口标准与官方插件集——当每个编码智能体都在建自己的插件生态时，标准化之战已经打响。", source: "GitHub（cursor/plugins）", date: "2026-10-07", url: "https://github.com/cursor/plugins", image: "https://opengraph.githubassets.com/1/cursor/plugins", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 70, tags: ["Cursor", "插件规范", "编辑器", "开源"], content: [
      { title: "项目要点", type: "list", items: ["Cursor 插件规范与官方插件集开源；", "定义编辑器智能体插件的接口标准；", "本周技能/插件/规范类仓库集体爆发的又一员。"] },
      { title: "笔者观察", type: "text", text: "插件规范的战场类似当年的浏览器扩展之争：谁的标准被广泛采纳，谁就握住生态入口。对学习者，这类规范文档是免费的『生态设计课』——看 Cursor 如何定义插件边界、权限与分发，比看十篇产品分析有用。参考来源：GitHub。" }
    ] },
    { id: "os-moonlight-qt", category: "opensource", subcategory: "开源游戏", title: "moonlight-qt 登热榜：1.9 万 star 的开源游戏串流客户端——把你的 PC 变成云游戏主机", summary: "开源串流客户端 moonlight-qt 登上 GitHub 热榜（1.9 万 star）：在 Windows、Mac、Linux 乃至 Steam Link 上串流 NVIDIA GameStream 画面——自建云游戏方案的中流砥柱。", source: "GitHub（moonlight-stream/moonlight-qt）", date: "2026-10-07", url: "https://github.com/moonlight-stream/moonlight-qt", image: "https://opengraph.githubassets.com/ab182e89ae7394624e7890a0d14e2e34c17f8f789/moonlight-stream/moonlight-qt", badge: "开源游戏", badgeType: "opensource", readTime: "3 分钟", hotScore: 68, tags: ["GitHub", "游戏串流", "开源", "云游戏"], content: [
      { title: "项目要点", type: "list", items: ["GameStream 客户端，支持 Windows / Mac / Linux / Steam Link；", "开源实现，1.9 万 star；", "自建『家用云游戏』方案的核心组件。"] },
      { title: "笔者观察", type: "text", text: "云游戏大厂屡战屡败，但『把家里 PC 串流到手边设备』的开源方案活得很好——低延迟解码与输入回传的网络工程值得逐行读。对做毕设想碰网络方向的同学：串流客户端是一个目标明确、可测量的网络编程练兵场。参考来源：GitHub。" }
    ] },
    { id: "tu-how-to-run-indie-studio-part2", category: "tutorials", subcategory: "连载教程", title: "GI.biz 新专栏《如何经营独立工作室》第二篇：定义你的未来", summary: "GamesIndustry.biz 独立工作室经营指南连载第二篇上线：从『什么是工作室』进阶到『定义你的未来』——使命、规模与活法的选择框架，比大多数创业鸡汤具体得多。", source: "GamesIndustry.biz", date: "2026-10-07", url: "https://www.gamesindustry.biz/how-to-run-an-indie-game-studio-part-2-defining-your-future", image: "https://assetsio.gnwcdn.com/firm-framework.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "连载教程", badgeType: "tutorial", readTime: "7 分钟", hotScore: 72, tags: ["独立工作室", "经营指南", "GI.biz 专栏", "连载"], content: [
      { title: "专栏要点", type: "list", items: ["《如何经营独立工作室》连载第二篇；", "主题：为工作室定义使命、规模与方向；", "第一篇（什么是工作室）已于上周发布。"] },
      { title: "笔者观察", type: "text", text: "上一篇讲『工作室是什么』，这一篇讲『你想要哪种活法』——把商业问题前置到创作之前，正是多数独立团队倒掉的原因反推。毕业前想清楚三个问题：你的团队靠什么活、做多大规模、给谁做游戏，答案会决定你的第一批招聘与第一笔融资。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "tu-freesound", category: "tutorials", subcategory: "免费资源", title: "FreeSound：全球最大的 CC 协议音效库——游戏音频的免费弹药库", summary: "FreeSound.org 是全球最大的协作音效库：数十万条社区贡献音效，覆盖环境声、UI 音、脚步声与音乐素材——配合清晰的 CC 协议标注，是游戏音频资源的首选来源。", source: "FreeSound.org", date: "2026-10-07", url: "https://freesound.org/", image: "", badge: "免费资源", badgeType: "tutorial", readTime: "4 分钟", hotScore: 67, tags: ["免费素材", "音效", "CC 协议", "游戏音频"], content: [
      { title: "站点要点", type: "list", items: ["全球最大协作音效库，数十万条素材；", "覆盖环境声、UI 反馈音、脚步、音乐等全品类；", "CC 系协议（逐条确认 CC0/CC-BY/CC-BY-SA）。"] },
      { title: "笔者观察", type: "text", text: "音频是毕设里最容易被『最后再说』拖垮的部分——而音效对手感的影响超过多数视觉打磨。给毕设团队的标准配置：Kenney 的 UI 音效包打底，FreeSound 补环境与特色音，导入引擎前统一做一次响度归一。参考来源：FreeSound.org。" }
    ] },
    { id: "tu-polypizza", category: "tutorials", subcategory: "免费资源", title: "poly.pizza：低多边形 3D 模型搜索引擎——毕设场景秒速搭起来的秘密", summary: "poly.pizza 汇聚了数千个低多边形 3D 模型（含 Kenney 全系列与社区上传），提供统一格式下载与在线预览——风格统一的 3D 场景搭建神器。", source: "poly.pizza", date: "2026-10-07", url: "https://poly.pizza/", image: "https://poly.pizza/img/socialPreview.jpg", badge: "免费资源", badgeType: "tutorial", readTime: "3 分钟", hotScore: 66, tags: ["免费素材", "3D 模型", "低多边形", "毕设"], content: [
      { title: "站点要点", type: "list", items: ["数千个低多边形 3D 模型聚合与搜索；", "含 Kenney 全系列与社区上传素材；", "统一格式下载 + 在线预览。"] },
      { title: "笔者观察", type: "text", text: "低模风格是毕设 3D 项目的『性价比之王』：资源好找、性能压力小、审美统一容易。poly.pizza 的价值在于搜索与聚合——按关键词找到风格匹配的模型，比在各个作者站之间跳转快十倍。参考来源：poly.pizza。" }
    ] },
    { id: "tu-javascript-info", category: "tutorials", subcategory: "常青教程", title: "javascript.info：现代 JavaScript 教程——Web 游戏与创意编码的语言地基（中文版全免费）", summary: "javascript.info 是公认最好的现代 JavaScript 免费教程：从基础语法到事件循环、模块与浏览器 API，中文版全文免费——three.js、PlayCanvas 等 Web 游戏路线的语言地基。", source: "javascript.info", date: "2026-10-06", url: "https://javascript.info/", image: "https://javascript.info/img/site_preview_en_1200x630.png", badge: "常青教程", badgeType: "tutorial", readTime: "5 分钟", hotScore: 68, tags: ["JavaScript", "Web 开发", "免费教程", "中文版"], content: [
      { title: "教程要点", type: "list", items: ["覆盖：基础语法 → 对象与函数 → 浏览器 API → 事件循环与模块；", "中文版全文免费，配大量可运行练习；", "持续跟进最新语言标准。"] },
      { title: "笔者观察", type: "text", text: "本周 three.js Manual 入选过常青库，而 three.js 的语言地基正是 JS——这门语言的事件循环与异步模型，恰好也是游戏循环思维的最佳入门。想走 Web 游戏方向的同学：javascript.info 过一遍语法，再上 three.js，顺序不要反。参考来源：javascript.info。" }
    ] },
    { id: "tu-kodeco", category: "tutorials", subcategory: "常青教程", title: "Kodeco（原 raywenderlich）：移动与跨平台开发教程站——手游方向的语言与引擎伴侣", summary: "Kodeco（原 raywenderlich.com）是移动与跨平台开发领域口碑最好的教程站之一：iOS/Android/Flutter/Unity 移动端教程体系完整，部分免费，适合向手游开发延伸。", source: "Kodeco", date: "2026-10-07", url: "https://www.kodeco.com/", image: "https://assets.carolus.kodeco.com/assets/kodeco/kodeco_og-card-407902405b9dd0a39ca47efb3b6477865605d373002abcd9b28846491c4d7717.png", badge: "常青教程", badgeType: "tutorial", readTime: "4 分钟", hotScore: 65, tags: ["移动开发", "iOS", "Android", "手游"], content: [
      { title: "站点要点", type: "list", items: ["原 raywenderlich.com，移动开发教程的黄金标准之一；", "覆盖 iOS / Android / Flutter / Unity 移动端；", "部分教程免费，进阶内容付费。"] },
      { title: "笔者观察", type: "text", text: "手游方向的同学常有『会 Unity 但不懂移动端发布』的断层：包体优化、触控适配、平台审核，这些在 Kodeco 的移动端教程里都有成体系的讲解。把『做完的游戏发到手机上』当作毕设的必选项，你会发现一半的知识盲区在这里。参考来源：Kodeco。" }
    ] },
    { id: "contest-golden-joysticks-voting", category: "contest", subcategory: "赛事动态", title: "第 44 届金摇杆奖投票进行中：10 月 23 日截止，11 月 11 日伦敦颁奖", summary: "2026 金摇杆奖（第 44 届）投票已开放：21 个奖项类别由玩家投票决定，投票 10 月 23 日截止，颁奖礼 11 月 11 日在伦敦举行——全球历史最悠久的游戏奖项进入年度投票期。", source: "Golden Joystick Awards 官网", date: "2026-10-07", url: "https://www.goldenjoysticks.com/", image: "https://cdn.mos.cms.futurecdn.net/F633A98o7F2CABs46JkQkc-1920-80.jpg", badge: "赛事动态", badgeType: "contest", readTime: "3 分钟", hotScore: 68, tags: ["金摇杆奖", "玩家投票", "行业奖项", "伦敦"], content: [
      { title: "赛事要点", type: "list", items: ["第 44 届金摇杆奖投票开放中；", "21 个奖项类别，全部由玩家投票决定；", "投票截止 10 月 23 日，颁奖礼 11 月 11 日。"] },
      { title: "笔者观察", type: "text", text: "金摇杆是纯玩家投票奖，它的短名单因此是观察『全球玩家真实口味』的风向标——比媒体评审奖更接近大众市场。关注你喜欢的游戏有没有进提名，顺便研究投票页的类目结构：这就是发行商眼中『一款游戏需要讲好的所有故事角度』。参考来源：Golden Joystick 官网。" }
    ] },
    { id: "contest-indiegamejams-calendar", category: "contest", subcategory: "赛事资源", title: "IndieGameJams.com：号称全网最全的 Game Jam 日历——错过报名党自救指南", summary: "IndieGameJams.com 自称『全网最完整的 Game Jam 日历』：汇总全球正在举办与即将开始的 jam——与上周推荐的 CanopyFest（Steam 节日日历）组成双保险。", source: "IndieGameJams.com", date: "2026-10-07", url: "https://indiegamejams.com/", image: "", badge: "赛事资源", badgeType: "contest", readTime: "3 分钟", hotScore: 64, tags: ["Game Jam", "日历工具", "独立开发", "报名"], content: [
      { title: "站点要点", type: "list", items: ["汇总全球 Game Jam 的举办与报名信息；", "按时间线排列，覆盖线上与线下活动；", "与 CanopyFest（Steam 节日向）互补。"] },
      { title: "笔者观察", type: "text", text: "jam 日历类工具的价值昨天刚写过：报名窗口只有一两周，错过等半年。两本日历一起用，再配日历软件的提醒，你的『每年至少完成四个 jam』计划就有了基础设施。参考来源：IndieGameJams.com。" }
    ] },
    { id: "contest-wakudemo-calendar", category: "contest", subcategory: "赛事资源", title: "哇酷独立游戏平台 jam 日历：中文开发者的本土 Game Jam 信息站", summary: "哇酷（WakuDemo）的 game-jams 页面汇总了中文开发者可参与的 Game Jam 信息：机核 BOOOM、CiGA、Godot Wild Jam 等国内外赛事集中呈现——中文 jam 信息不再靠口口相传。", source: "哇酷独立游戏平台", date: "2026-10-07", url: "https://wakudemo.cn/game-jams", image: "", badge: "赛事资源", badgeType: "contest", readTime: "3 分钟", hotScore: 63, tags: ["Game Jam", "中文平台", "独立游戏", "日历"], content: [
      { title: "站点要点", type: "list", items: ["中文开发者的 Game Jam 信息聚合页；", "收录机核 BOOOM、CiGA、Godot Wild Jam 等赛事；", "按日期排列，标注报名与开赛时间。"] },
      { title: "笔者观察", type: "text", text: "中文 jam 信息的分散是老问题：BOOOM 在机核、CiGA 在官网、高校赛在腾讯——一个聚合视图至少省掉每周挨个查的功夫。在校团队建『赛事提醒』的最低成本方案：这本日历 + 一条日历软件订阅。参考来源：哇酷独立游戏平台。" }
    ] },
    { id: "in-paramount-wb-merge", category: "industry", subcategory: "并购整合", title: "Skydance 完成 111 亿美元收购后第一刀：Paramount 游戏与华纳游戏合并", summary: "Skydance 完成 111 亿美元收购派拉蒙与华纳的交易的后续落地：Paramount Games Studio 与 WB Games 合并——好莱坞大整合的浪潮正式漫过游戏部门。", source: "GamesIndustry.biz", date: "2026-10-07", url: "https://www.gamesindustry.biz/paramount-games-studio-and-wb-games-merge-under-skydance-following-completion-of-111bn-acquisition", image: "https://assetsio.gnwcdn.com/paramount-wb.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "并购整合", badgeType: "business", readTime: "4 分钟", hotScore: 84, tags: ["Skydance", "派拉蒙", "华纳游戏", "合并"], content: [
      { title: "事件要点", type: "list", items: ["Skydance 完成 111 亿美元收购后开始整合；", "Paramount Games Studio 与 WB Games 正式合并；", "好莱坞影视巨头的游戏资产进入统一管理时代。"] },
      { title: "笔者观察", type: "text", text: "游戏业正在被内容巨头的整合浪潮重新洗牌：影视 IP 方把游戏从『授权部门』升级为『自有资产』。对从业者，这预示着未来三年『影视系游戏工作室』的岗位供给会明显增加——改编游戏与 IP 协同开发的岗位画像值得提前研究。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-gravity-well-layoffs", category: "industry", subcategory: "劳工观察", title: "Gravity Well 裁员 40+ 人：失去融资后的独立中型团队困境样本", summary: "Gravity Well 宣布裁员超过 40 名开发者，直接原因是失去外部融资——与本周 Bit Reactor 召回员工的新闻相对照，独立中型团队的命运完全取决于资金链的走向。", source: "GamesIndustry.biz", date: "2026-10-07", url: "https://www.gamesindustry.biz/gravity-well-lays-off-more-than-40-developers-after-losing-its-funding", image: "https://assetsio.gnwcdn.com/Screenshot-2026-10-07-at-21.23.11.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "劳工观察", badgeType: "business", readTime: "3 分钟", hotScore: 75, tags: ["Gravity Well", "裁员", "融资", "独立团队"], content: [
      { title: "事件要点", type: "list", items: ["Gravity Well 裁员超过 40 名开发者；", "直接原因：失去外部融资；", "与同周 Bit Reactor 召回员工形成一冷一暖的对照。"] },
      { title: "笔者观察", type: "text", text: "一冷一暖两条新闻放在一起读最有信息量：同样做原创 IP，资金链在就是『召回停薪员工』，断了就是『裁掉 40 人』。给毕业求职者的解读：看一家工作室先看它的钱来自哪个层级的投资者，融资结构比团队才华更决定你的合同长度。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-bit-reactor-recall", category: "industry", subcategory: "劳工观察", title: "《Star Wars Zero Company》开发商召回停薪休假员工：Bit Reactor 的回暖信号", summary: "《Star Wars Zero Company》开发商 Bit Reactor 开始召回此前停薪休假的员工——在裁员潮的背景音里，这是一条罕见的正向信号：项目现金流恢复，团队正在回血。", source: "GamesIndustry.biz", date: "2026-10-07", url: "https://www.gamesindustry.biz/star-wars-zero-company-developer-bit-reactor-begins-bringing-furloughed-staff-back", image: "https://assetsio.gnwcdn.com/star-wars-zero-company_OixT1yY.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "劳工观察", badgeType: "business", readTime: "3 分钟", hotScore: 72, tags: ["Bit Reactor", "Star Wars", "召回员工", "回暖"], content: [
      { title: "事件要点", type: "list", items: ["Bit Reactor 开始召回停薪休假员工；", "该团队此前因项目节奏问题实施过停薪休假；", "《Star Wars Zero Company》项目现金流出现恢复迹象。"] },
      { title: "笔者观察", type: "text", text: "『召回停薪员工』在 2026 年的行业语境里属于好消息——它意味着一个项目从『收缩保命』回到『继续推进』。对观察者，这类信号比财报更领先：员工召回通常发生在新一轮资金到账或里程碑达成之后。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-discord-double-counter-breach", category: "industry", subcategory: "安全事件", title: "Discord 验证机器人 Double Counter 遭入侵：约 100 万邮箱地址泄露", summary: "Discord 生态广泛使用的验证机器人 Double Counter 遭『蓄意的多阶段攻击』：约 100 万用户邮箱地址与 Discord ID 泄露——平台周边生态正在成为数据泄露的新入口。", source: "GamesIndustry.biz", date: "2026-10-07", url: "https://www.gamesindustry.biz/discord-protection-bot-double-counter-hit-by-breach-exposing-around-1-million-email-addresses", image: "https://assetsio.gnwcdn.com/discord_ciKWt0v.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "安全事件", badgeType: "business", readTime: "4 分钟", hotScore: 77, tags: ["Discord", "数据泄露", "Double Counter", "社区安全"], content: [
      { title: "事件要点", type: "list", items: ["Discord 验证机器人 Double Counter 遭多阶段蓄意攻击；", "约 100 万用户邮箱地址与 Discord ID 泄露；", "RPS 报道称泄露规模为『数百万』级别。"] },
      { title: "笔者观察", type: "text", text: "这件事对所有做社区运营的团队都是警报：你的安全边界等于你接入的每一个第三方机器人的安全边界。游戏社区普遍重度依赖 Discord 机器人做验证、抽奖、排位——第三方生态的审计必须提上日程。参考来源：GamesIndustry.biz / Rock Paper Shotgun。" }
    ] },
    { id: "in-investors-sidelines", category: "industry", subcategory: "投资风向", title: "Undead Labs 老板：投资人『坐在场边等显而易见的灌篮』——人力成本成为最大顾虑", summary: "Undead Labs（《腐烂之国》系列）负责人接受 RPS 采访：游戏业投资人现在『坐在场边，只等显而易见的灌篮』——在人力成本高企的环境下，中等风险的原创项目几乎拿不到钱。", source: "Rock Paper Shotgun", date: "2026-10-07", url: "https://www.rockpapershotgun.com/games-industry-investors-are-sitting-on-the-sidelines-waiting-for-obvious-slam-dunks-says-undead-labs-boss-with-labour-costs-a-key-worry", image: "https://assetsio.gnwcdn.com/state-of-decay-3.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "投资风向", badgeType: "business", readTime: "5 分钟", hotScore: 76, tags: ["Undead Labs", "投资", "人力成本", "原创项目"], content: [
      { title: "访谈要点", type: "list", items: ["投资人『坐在场边等灌篮』：只投显而易见的确定性机会；", "人力成本上升被点名为核心顾虑；", "中等风险原创项目成为融资真空地带。"] },
      { title: "笔者观察", type: "text", text: "『灌篮或出局』的融资环境解释了本周一半的新闻：Gravity Well 因失去融资裁员、南澳政府基金翻倍、工作室靠补贴过日子。给想创业的同学翻译一下：现在拿钱的路径要么把项目做到『一眼显然能成』，要么去拿政府/平台的钱——中间地带是沙漠。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-atmosfar-early-access", category: "games", subcategory: "新作前瞻", title: "天空开放世界《Atmosfar》官宣抢鲜体验日期：飞行岛屿、云端巡洋舰与空中出租车", summary: "RPS 报道空中开放世界新作《Atmosfar》公布抢鲜体验日期与全新预告：飞行岛屿、云上巡洋舰与空中出租车——把『开放世界』从地面搬到云层之上的又一个野心尝试。", source: "Rock Paper Shotgun", date: "2026-10-07", url: "https://www.rockpapershotgun.com/airborne-open-world-atmosfar-gets-an-early-access-release-date-and-a-trailer-full-of-flying-islands-cloud-cruisers-and-sky-taxis", image: "https://assetsio.gnwcdn.com/Atmosfar.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作前瞻", badgeType: "games", readTime: "3 分钟", hotScore: 71, tags: ["Atmosfar", "开放世界", "抢鲜体验", "天空"], content: [
      { title: "前瞻要点", type: "list", items: ["《Atmosfar》公布抢鲜体验日期与预告片；", "设定：飞行岛屿、云上巡洋舰、空中出租车构成的空中开放世界；", "『立体开放世界』品类的新入局者。"] },
      { title: "笔者观察", type: "text", text: "垂直维度开放的开放世界（天空、海洋）正在成为新趋势——因为地面开放世界的『清问号疲劳』已经无解，立体空间是重新组织探索节奏的解法。对做关卡设计的同学，值得研究这类游戏怎么解决『无地面参照物的导航引导』。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-screamer-single-stick", category: "games", subcategory: "更新观察", title: "《Screamer》更新补丁：单摇杆漂移操作——竞速游戏对『上手门槛』的自我修正", summary: "动画风竞速《Screamer》发布补丁新增单摇杆漂移控制，RPS 评价其『不再要求玩家重新训练手指』——一次对竞速游戏上手门槛的教科书式自我修正。", source: "Rock Paper Shotgun", date: "2026-10-07", url: "https://www.rockpapershotgun.com/anime-racer-screamer-no-longer-demands-you-retrain-your-fingers-with-a-fresh-patch-adding-single-stick-drift-controls", image: "https://assetsio.gnwcdn.com/screamer-single-stick-drift-control-update-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "更新观察", badgeType: "games", readTime: "3 分钟", hotScore: 67, tags: ["Screamer", "竞速游戏", "操作设计", "补丁"], content: [
      { title: "更新要点", type: "list", items: ["《Screamer》补丁新增单摇杆漂移控制；", "解决的核心问题：漂移操作需要『重新训练手指』；", "上手门槛的显著降低。"] },
      { title: "笔者观察", type: "text", text: "『深度操作是情怀还是门槛』是每个竞速/格斗游戏都要回答的问题——Screamer 的解法是给两种玩家两种方案。给做操作设计的同学一条原则：操作复杂度应该是『可选的进阶』，而不是『必须缴纳的学费』。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-silver-pines-review", category: "games", subcategory: "新作评测", title: "《Silver Pines》评测：林奇式黑色悬疑——取恐怖之长、银河城之中、冒险游戏之短", summary: "RPS 评测黑色悬疑新作《Silver Pines》：『取恐怖游戏最好的部分、银河恶魔城平庸的部分、冒险游戏最差的部分』——一个混合品类做对了氛围却栽在节奏上的诚实样本。", source: "Rock Paper Shotgun", date: "2026-10-07", url: "https://www.rockpapershotgun.com/lynchian-noir-mystery-silver-pines-takes-the-best-bits-from-horror-the-middling-bits-from-metroidvanias-and-the-worst-bits-from-adventure-games", image: "https://assetsio.gnwcdn.com/Silver-Pines-header.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作评测", badgeType: "games", readTime: "5 分钟", hotScore: 69, tags: ["Silver Pines", "黑色悬疑", "评测", "混合品类"], content: [
      { title: "评测要点", type: "list", items: ["林奇式黑色悬疑新作《Silver Pines》；", "RPS 标题即评语：恐怖之长、银河城之中、冒险之短；", "混合品类的氛围成功与节奏翻车并存。"] },
      { title: "笔者观察", type: "text", text: "这个标题本身就是一份混合品类设计检查表：混搭时要想清楚『从每个母品类借的是什么』——借氛围容易，借节奏结构容易翻车。学生项目做混合玩法的常见死法正是『每样都有一点，每样都不成立』。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-r6-tactics-destruction", category: "games", subcategory: "设计解析", title: "《彩虹六号：战术》开发商谈可破坏地形：『它改变的不只是敌人的安全区，也是你的』", summary: "《彩虹六号：战术》开发者接受 RPS 采访，谈完全可破坏地形如何颠覆经典围剿与绕后的博弈：『它改变了对敌人而言的安全概念，也同样改变了你的』——战术射击的地形哲学。", source: "Rock Paper Shotgun", date: "2026-10-07", url: "https://www.rockpapershotgun.com/it-changes-the-notion-of-safety-for-the-enemies-but-also-for-you-rainbow-six-tactics-destruction-undoes-the-classic-dynamics-of-flanking", image: "https://assetsio.gnwcdn.com/Rainbow-Six-Tactics-breach-line-up.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计解析", badgeType: "games", readTime: "5 分钟", hotScore: 74, tags: ["彩虹六号", "可破坏地形", "战术射击", "关卡设计"], content: [
      { title: "设计要点", type: "list", items: ["完全可破坏地形颠覆经典的绕后与围剿博弈；", "开发者原话：安全概念对敌我双方同时改变；", "地形从『固定棋盘』变成『可重写的规则书』。"] },
      { title: "笔者观察", type: "text", text: "可破坏地形的设计难点从来不是物理引擎，而是『AI 与关卡验证如何跟上随时被改写的地图』——这与本周《爆弹枪2》可旋转地图的幕后故事互为镜像。做战术游戏的同学记住这条公式：破坏性越强，验证成本越指数级。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-patience-virtue-conversation", category: "games", subcategory: "设计解析", title: "《Patience is a Virtue》：用『身体即异域』的独特对话系统探讨权力与脆弱", summary: "RPS 关注小镇悬疑解谜新作《Patience is a Virtue》：其独特的对话系统以『你的身体是异域领地』为核心隐喻，探索权力与脆弱的关系——本周第二款把对话系统当核心卖点的独立游戏。", source: "Rock Paper Shotgun", date: "2026-10-07", url: "https://www.rockpapershotgun.com/your-body-is-foreign-territory-small-town-mystery-puzzler-patience-is-a-virtue-explores-power-and-vulnerability-by-way-of-a-unique-conversation-system", image: "https://assetsio.gnwcdn.com/patience-is-a-virtue.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计解析", badgeType: "games", readTime: "4 分钟", hotScore: 68, tags: ["Patience is a Virtue", "对话系统", "叙事设计", "独立游戏"], content: [
      { title: "设计要点", type: "list", items: ["小镇悬疑解谜新作，对话系统为核心机制；", "核心隐喻：『你的身体是异域领地』；", "主题：权力与脆弱的交互式探讨。"] },
      { title: "笔者观察", type: "text", text: "本周独立游戏侧出现了一个值得记录的群体现象：Dreadline 的塔罗审问、这款的身体隐喻对话——『对话系统创新』正在从加分项变成独立叙事游戏的主战场。做叙事方向的同学，把这两个案例加入你的机制拆解清单。参考来源：Rock Paper Shotgun。" }
    ] }
  ]
}
