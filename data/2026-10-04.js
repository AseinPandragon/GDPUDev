window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-04",
    weekday: "星期日",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-04 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "《影之刃零》官网挂出正式发售日：2026/10/29，PC 与 PS5 同步",
      "Anthropic 承诺 1 亿美元、2027 年底前训练 1 万名前沿部署工程师",
      "llama.cpp 引入『决策模型』：本地大模型推理栈的关键一步",
      "Krafton 砍掉 PUBG 衍生提取射击《Black Budget》：公布不到一年",
      "内存缺货将持续到至少 2028 年：装机与开发成本都要重算"
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
    id: "phantom-blade-zero-oct29",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "定档确认",
    title: "《影之刃零》官网挂出正式发售日：10 月 29 日，国产 UE5 武侠动作的期末考来了",
    summary: "灵游坊《影之刃零》（Phantom Blade Zero）官网正式挂出发售日期：2026 年 10 月 29 日，PC 与 PS5 同步，预售已开启。虚幻 5 引擎打造的暗黑武侠动作冒险，玩家扮演心脏遭受重创、仅余六十六日生命的剑客——国产 3A 动作的又一次大考进入倒计时。",
    image: "https://pbz.s-game.com/image/main.jpg",
    source: "S-GAME 官网（灵游坊）",
    date: "2026-10-03",
    url: "https://pbz.s-game.com/",
    readTime: "4 分钟深度",
    hotScore: 93,
    tags: ["影之刃零", "Phantom Blade Zero", "灵游坊", "UE5", "国产动作游戏"],
    content: [
      { title: "定档要点", type: "list", items: ["官网确认发售日期：2026 年 10 月 29 日；", "PC 与 PlayStation 5 同步发售，预售已开启；", "虚幻 5 引擎打造，第三人称暗黑武侠动作冒险 RPG；", "主角设定：心脏遭受重创、仅余六十六日生命的剑客。"] },
      { title: "笔者观察", type: "text", text: "从科隆展试刷屏到正式定档，《影之刃零》每一步都在按 3A 发行的标准动作走。值得学习者盯住的是 UE5 在高强度动作场景下的表现——当年演示里被反复讨论的『一镜到底连招』在实机里还剩几成，会直接回答『演示引擎技巧能不能进生产管线』这个老问题。国产动作游戏上架 PS5 同发，也是发行侧值得记录的节点。参考来源：S-GAME 官网。" }
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
    { id: "gh-ecc-agent-harness", category: "opensource", subcategory: "AI 工具链", title: "GitHub 今日热榜：ECC——给 AI 编码智能体做『性能优化』的框架（27 万+ star）", summary: "ECC 自述为『智能体套件的性能优化系统』：为 Claude Code、Codex、Cursor 等主流编码智能体提供技能、记忆、安全与『研究优先开发』的结构化方案，本周冲上 GitHub 热榜头部（27 万+ star）。", source: "GitHub（affaan-m/ECC）", date: "2026-10-03", url: "https://github.com/affaan-m/ECC", image: "https://opengraph.githubassets.com/1/affaan-m/ECC", badge: "开源热榜", badgeType: "opensource", readTime: "4 分钟", hotScore: 82, tags: ["GitHub", "AI Agent", "开源", "开发工具"], content: [
      { title: "项目要点", type: "list", items: ["定位：智能体套件（agent harness）的性能优化系统；", "覆盖技能配置、长期记忆、安全策略与研发流程；", "兼容 Claude Code / Codex / OpenCode / Cursor 等主流编码智能体。"] },
      { title: "笔者观察", type: "text", text: "一周之内热榜上出现四五个『智能体基础设施』项目，说明行业的注意力已经从『模型有多聪明』转向『智能体的工作流怎么管』——这正是普通开发者能参与的那一层。用 AI 辅助做毕设的同学，把这类仓库当『管理自己 AI 协作流程』的参考实现来读，比直接抄提示词有用。参考来源：GitHub。" }
    ] },
    { id: "gh-claude-mem", category: "opensource", subcategory: "AI 工具链", title: "claude-mem：给每个编码智能体装上『跨会话记忆』（9.5 万+ star）", summary: "claude-mem 为 AI 编码智能体提供跨会话持久记忆：自动记录智能体在会话中做过的一切，用 AI 压缩后在未来会话中按需注入——兼容 Claude Code、Codex、Gemini、Copilot 等主流工具。", source: "GitHub（thedotmack/claude-mem）", date: "2026-10-03", url: "https://github.com/thedotmack/claude-mem", image: "https://opengraph.githubassets.com/1/thedotmack/claude-mem", badge: "开源热榜", badgeType: "opensource", readTime: "4 分钟", hotScore: 80, tags: ["GitHub", "AI Agent", "长期记忆", "开源"], content: [
      { title: "项目要点", type: "list", items: ["捕获智能体会话中的全部操作；", "AI 压缩后按相关性注入未来会话；", "技术栈含 ChromaDB / SQLite / RAG 式检索；", "兼容 Claude Code、OpenClaw、Codex、Gemini、Copilot 等。"] },
      { title: "笔者观察", type: "text", text: "智能体工具三件套已经集齐：技能（怎么做事）、记忆（做过什么）、安全（别做错事）——claude-mem 补的就是中间那块。做长项目的同学最有体感：AI 每次开新会话都失忆，项目上下文全靠人肉重述。这类方案的思想（压缩 + 检索注入）用 SQLite 就能跑，毕设里给小组的 AI 助手加一个也不难。参考来源：GitHub。" }
    ] },
    { id: "gh-agent-skills", category: "opensource", subcategory: "AI 工具链", title: "agent-skills：Addy Osmani 开源的『生产级 AI 编码智能体工程技能库』（10 万+ star）", summary: "Google Chrome 团队 Addy Osmani 开源 agent-skills：一套生产级的 AI 编码智能体工程技能配置——把资深工程师的工作方法写成智能体可执行的技能定义，上线即冲上 10 万 star。", source: "GitHub（addyosmani/agent-skills）", date: "2026-10-03", url: "https://github.com/addyosmani/agent-skills", image: "https://opengraph.githubassets.com/1/addyosmani/agent-skills", badge: "开源热榜", badgeType: "opensource", readTime: "4 分钟", hotScore: 79, tags: ["GitHub", "AI Agent", "工程技能", "开源"], content: [
      { title: "项目要点", type: "list", items: ["定位：面向 AI 编码智能体的生产级工程技能库；", "把资深工程师的工作习惯固化为技能定义；", "适配 Claude Code、Codex、Cursor、Antigravity 等。"] },
      { title: "笔者观察", type: "text", text: "这类仓库的本质是把『资深工程师的隐性工作方法』显性化：怎么拆任务、怎么自检、何时停下提问。对学生特别友好——它相当于一份可执行的『工程师工作法教材』，读技能定义学到的工程习惯，比技能本身更值钱。参考来源：GitHub。" }
    ] },
    { id: "gh-mattpocock-skills", category: "opensource", subcategory: "AI 工具链", title: "mattpocock/skills：TypeScript 名人的 .agents 目录公开（27 万+ star）", summary: "TypeScript 教育领域最有影响力的开发者 Matt Pocock 公开自己的 .agents 目录——『给真工程师的技能』，直接把他日常驱动 AI 智能体的技能配置开源，周内暴涨至 27 万+ star。", source: "GitHub（mattpocock/skills）", date: "2026-10-03", url: "https://github.com/mattpocock/skills", image: "https://opengraph.githubassets.com/1/mattpocock/skills", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 78, tags: ["GitHub", "TypeScript", "AI Agent", "开源"], content: [
      { title: "项目要点", type: "list", items: ["内容：Matt Pocock 自用 .agents 目录的完整开源；", "定位：『给真工程师的技能』（Skills for Real Engineers）；", "短时间冲至 27 万+ star，成为个人工作流开源的代表样本。"] },
      { title: "笔者观察", type: "text", text: "个人工作流的开源正在成为一种新的『知识分享』体裁：过去是写博客，现在是把驱动自己工作的技能配置直接摊开。对学习者这是双倍福利——既学到技能内容，也学到『怎么组织自己的智能体工作流』。参考来源：GitHub。" }
    ] },
    { id: "gh-cloudflare-os", category: "opensource", subcategory: "AI 工具链", title: "Cloudflare 开源 cloudflare-os：跑在 Workers 上的『智能体工作空间』", summary: "Cloudflare 开源 cloudflare-os（1 万+ star）：构建在 Workers 之上的智能体工作空间——在企业自己的上下文与系统里创建文档、构建应用、运行智能体，大厂下场做智能体操作系统层的信号。", source: "GitHub（cloudflare/cloudflare-os）", date: "2026-10-03", url: "https://github.com/cloudflare/cloudflare-os", image: "https://opengraph.githubassets.com/1/cloudflare/cloudflare-os", badge: "开源热榜", badgeType: "opensource", readTime: "4 分钟", hotScore: 76, tags: ["Cloudflare", "AI Agent", "开源", "Workers"], content: [
      { title: "项目要点", type: "list", items: ["定位：基于 Cloudflare Workers 的智能体工作空间；", "能力：创建文档、构建应用、在企业上下文与系统中运行智能体；", "由 Cloudflare 官方开源，周内破万星。"] },
      { title: "笔者观察", type: "text", text: "云厂商做『智能体工作空间』和游戏引擎公司做『编辑器』是同构的竞争：谁先把智能体的开发-部署-运维闭环包进自家平台，谁就锁住下一层生态。对学习者，Workers 的按需计费模型是跑 AI 智能体 demo 的低成本选择，值得收藏。参考来源：GitHub。" }
    ] },
    { id: "ai-claude-frontier-academy", category: "ai", subcategory: "AI 教育", title: "Anthropic 承诺 1 亿美元：2027 年底前训练 1 万名『前沿部署工程师』", summary: "Anthropic 宣布 Claude Frontier Academy 计划：投入 1 亿美元，到 2027 年底训练 1 万名达到 Anthropic 自家标准的『前沿部署工程师』（Frontier Deployed Engineers）——AI 大厂开始自建人才管道。", source: "Anthropic 官方", date: "2026-10-02", url: "https://www.anthropic.com/news/claude-frontier-academy", image: "https://www.anthropic.com/api/opengraph-illustration?name=Hand%20Build&background=%23CC785C&pattern=approved&tl=%23D4A27F", badge: "AI 教育", badgeType: "ai", readTime: "4 分钟", hotScore: 85, tags: ["Anthropic", "Claude", "AI 人才", "培训计划"], content: [
      { title: "计划要点", type: "list", items: ["Anthropic 官方宣布 Claude Frontier Academy；", "承诺投入 1 亿美元；", "目标：2027 年底前训练 1 万名『前沿部署工程师』，标准对标 Anthropic 内部水平。"] },
      { title: "笔者观察", type: "text", text: "『前沿部署工程师』这个新工种值得记下来：它不是训练模型的研究员，而是『把前沿模型部署进企业真实工作流』的工程师——翻译过来就是既懂业务又懂 AI 工具链的人。数媒技术专业的交叉背景（内容 + 技术）恰好卡在这个工种的画像上，这条新赛道值得放进职业规划备选。参考来源：Anthropic 官方。" }
    ] },
    { id: "ai-llamacpp-decision-models", category: "ai", subcategory: "本地推理", title: "llama.cpp 引入『Decision Models』：本地推理栈的新范式", summary: "ggml 官方团队在 Hugging Face 发文介绍 llama.cpp 的『Decision Models』新方向——让本地模型不仅生成内容，还能在推理栈里做决策判断，开源本地推理生态再进一步。", source: "Hugging Face Blog（ggml-org）", date: "2026-10-02", url: "https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp", image: "https://cdn-uploads.huggingface.co/production/uploads/5f17f0a0925b9863e28ad9be0/c86h0bpnn081fjjsevlzn.png", badge: "本地推理", badgeType: "ai", readTime: "6 分钟", hotScore: 81, tags: ["llama.cpp", "ggml", "本地推理", "开源 AI"], content: [
      { title: "技术要点", type: "list", items: ["ggml-org 官方发文介绍 llama.cpp 的 Decision Models；", "方向：让本地推理栈承担决策判断而不仅是内容生成；", "延续 llama.cpp 在消费级硬件上跑大模型的开源路线。"] },
      { title: "笔者观察", type: "text", text: "本地推理栈开始支持『决策型模型』，对独立开发者是实打实的利好：NPC 行为树、难度调度、程序化生成里的判断逻辑，未来都可能交给一个跑在玩家机器上的小模型——不需要联网、不需要 API 费。做一个本地 AI NPC 原型的门槛，正在从『调 API 的工程能力』降到『读一篇博客』。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-fable-55-gray-rollout", category: "ai", subcategory: "大模型动态", title: "Fable 5.5 『突袭』灰度：网页端被发现在未公布情况下测试下一代旗舰", summary: "据投资界报道，Anthropic 下一代旗舰 Fable 5.5 被开发者发现在 Claude 网页端悄然灰度测试——界面仍标注 Fable 5.1，但回答风格、速度与能力出现明显跃升。该消息为社区发现，Anthropic 官方尚未正式公布。", source: "投资界（pedaily）", date: "2026-10-02", url: "https://news.pedaily.cn/202610/569824.shtml", image: "https://pic2.pedaily.cn/22/202210/20221026157352449fw.png", badge: "大模型动态", badgeType: "ai", readTime: "4 分钟", hotScore: 77, tags: ["Anthropic", "Fable 5.5", "灰度测试", "大模型"], content: [
      { title: "事件要点", type: "list", items: ["开发者发现 Claude 网页端被灰度至下一代旗舰 Fable 5.5；", "界面标注仍为 Fable 5.1，实际能力出现明显跃升；", "消息来自社区发现与实测，Anthropic 官方未正式确认发布。"] },
      { title: "笔者观察", type: "text", text: "按事实说：这是『被发现的灰度』，不是官方发布——但灰度本身透露了大厂的发布策略变化：与其开发布会，不如直接把新模型混进线上流量池做真实 A/B。对依赖 API 做产品的团队，这也是风险管理课题：你的应用今天跑的到底是哪个版本的模型？答案越来越不确定。参考来源：投资界。" }
    ] },
    { id: "ai-laya-model-local", category: "ai", subcategory: "视频 AI", title: "Laya AI 模型拆解：视频生成模型怎么在本地跑起来并做评测", summary: "Hugging Face 社区发布 Laya AI 模型的技术拆解：原理讲解、本地运行方法与评测流程三合一——视频生成模型的学习曲线正在被社区文档快速拉平。", source: "Hugging Face Blog", date: "2026-09-26", url: "https://huggingface.co/blog/sora-2/laya-ai-model-how-it-works-run-it-locally-and-eval", image: "https://cdn-uploads.huggingface.co/production/uploads/67496d13c09e4610c3395774b/laya-cover.png", badge: "视频 AI", badgeType: "ai", readTime: "6 分钟", hotScore: 74, tags: ["视频生成", "Laya", "本地部署", "Hugging Face"], content: [
      { title: "文章要点", type: "list", items: ["拆解 Laya AI 视频模型的工作原理；", "给出本地运行的完整方法与硬件要求；", "附评测流程，便于开发者自行对比效果。"] },
      { title: "笔者观察", type: "text", text: "视频生成模型本地化的意义对独立开发者很直接：过场动画、宣传片、玩家生成内容的素材管线，都可能省掉外包成本。但先泼一盆冷水——本地跑视频模型的显存门槛不低，先看评测里的硬件要求再动手，别学一周才知道自己的显卡跑不动。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-opus-55-cost-drop", category: "ai", subcategory: "大模型动态", title: "Claude Opus 5.5 发布：智能体编码领先，典型负载成本直降 40%", summary: "Anthropic 于 9 月 22 日发布 Claude 5.5 家族首个模型 Opus 5.5：官方称其在智能体编码与知识工作上领先，典型任务运行成本较 Opus 5 降低约 40%，输出速度提升超 30%。", source: "Anthropic 官方", date: "2026-09-22", url: "https://www.anthropic.com/claude-opus-5-5", image: "https://www-cdn.anthropic.com/images/4zrzovbb/website/f4d37a1d1f582f53f4e89b7a19133715c0089f27-1920x1080.png", badge: "大模型动态", badgeType: "ai", readTime: "5 分钟", hotScore: 79, tags: ["Anthropic", "Claude Opus 5.5", "智能体编码", "成本"], content: [
      { title: "发布要点", type: "list", items: ["9 月 22 日发布，为 Claude 5.5 家族首个模型；", "官方定位：智能体编码与知识工作领先；", "典型任务运行成本较 Opus 5 降低约 40%，输出速度提升超 30%。"] },
      { title: "笔者观察", type: "text", text: "对开发者真正重要的是『成本降 40%』这个数字：智能体编码的成本瓶颈从来不是模型能力而是 token 账单，主流模型降价四成意味着『全天候 AI 结对编程』的月费从奢侈变成日常。用 AI 辅助做毕设的预算，可以按这个新价重新算一遍。参考来源：Anthropic 官方。" }
    ] },
    { id: "tu-redblob-games", category: "tutorials", subcategory: "常青教程", title: "Red Blob Games：把六边形网格、寻路这些『数学恐惧症杀手』画成可玩交互的经典站", summary: "Red Blob Games 是游戏算法可视化的天花板：六边形网格、A* 寻路、噪声、转向行为等游戏数学全部做成可拖动、可实时观察参数效果的交互页面——看十遍文字不如拖一下滑块。", source: "Red Blob Games（Amit Patel）", date: "2026-10-04", url: "https://www.redblobgames.com/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "6 分钟", hotScore: 72, tags: ["游戏数学", "寻路", "六边形网格", "交互教程"], content: [
      { title: "站点要点", type: "list", items: ["覆盖：六边形网格系统、A*/JPS 寻路、噪声与随机、转向行为等；", "特色：所有算法都是可交互的可视化，参数实时可调；", "作者 Amit Patel 长期维护，全部免费。"] },
      { title: "笔者观察", type: "text", text: "站长的写作方法论本身就值得学：先做交互原型，确认自己理解了，再写解释。学 A* 的正确姿势是先把开放集/闭合集拖出来看一遍，而不是背伪代码——本周开始给自己立个『每学一个算法找一个可交互实现』的规矩。参考来源：Red Blob Games。" }
    ] },
    { id: "tu-gaffer-on-games", category: "tutorials", subcategory: "常青教程", title: "Gaffer On Games：网络多人游戏物理的『圣经级』免费系列", summary: "Glenn Fiedler 的 Gaffer On Games 是网络同步与游戏物理领域公认的经典免费教程：从 UDP 基础、快照同步到回滚网络代码（rollback netcode），系列文章养出了大半代网络同步程序员。", source: "Gaffer On Games（Glenn Fiedler）", date: "2026-10-04", url: "https://gafferongames.com/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "8 分钟", hotScore: 73, tags: ["网络同步", "游戏物理", "回滚网络", "UDP"], content: [
      { title: "站点要点", type: "list", items: ["覆盖：UDP 套接字、数据包可靠性与拥塞控制、快照压缩、快照插值、回滚网络代码；", "作者 Glenn Fiedler：网络同步领域资深从业者，系列长期免费；", "配套开源代码库可直接对照学习。"] },
      { title: "笔者观察", type: "text", text: "做联机功能时 90% 的玄学问题（为什么他打我的时候我已经躲开了）答案都在这个系列里：回滚、插值、预测是三个必须分清的概念。想做多人方向的同学，把这个系列当寒暑假作业，比看任何短视频教程都扎实。参考来源：Gaffer On Games。" }
    ] },
    { id: "tu-inigo-quilez", category: "tutorials", subcategory: "常青教程", title: "Inigo Quilez：Shadertoy 联合创始人的图形学文章库——『纯数学画世界』的最好教材", summary: "iq（Inigo Quilez）的个人站点汇集了他二十年的图形学文章：SDF 有向距离场、程序化噪声、光追技巧、动画曲线——_shader_ 圈的半壁教材出自这里，全部免费。", source: "iquilezles.org（Inigo Quilez）", date: "2026-10-04", url: "https://iquilezles.org/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "6 分钟", hotScore: 71, tags: ["Shader", "图形学", "SDF", "程序化生成"], content: [
      { title: "站点要点", type: "list", items: ["覆盖：SDF 建模、2D/3D 噪声函数、光线追踪、渲染技法、动画数学；", "作者为 Shadertoy 联合创始人、前 Pixar；", "所有文章免费，配套 Shadertoy 在线示例可运行。"] },
      { title: "笔者观察", type: "text", text: "iq 的文章教会我的最大一课是『约束产生创造』：Shadertoy 没有网格没有贴图，只有一个像素着色器函数，于是逼出了用纯数学构建世界的方法论。学 TA 方向的同学，把他的 SDF 系列啃完，你就拥有了不依赖任何资产包『凭空造物体』的能力。参考来源：iquilezles.org。" }
    ] },
    { id: "tu-scratchapixel", category: "tutorials", subcategory: "常青教程", title: "Scratchapixel：从零写光栅器与光线追踪器的免费图形学课堂", summary: "Scratchapixel 提供从零开始的计算机图形学课程：矩阵变换、光栅化、光线追踪、着色模型——每一步都带你亲手实现，是『知其然更要知其所以然』路线的最佳免费起点。", source: "Scratchapixel", date: "2026-10-04", url: "https://www.scratchapixel.com/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "6 分钟", hotScore: 70, tags: ["图形学", "光栅化", "光线追踪", "数学基础"], content: [
      { title: "站点要点", type: "list", items: ["课程覆盖：几何与矩阵、光栅化管线、光线追踪、着色与采样理论；", "教学路线：每章带你亲手实现一个可运行的简化版本；", "完全免费，中英文社区均有大量配套笔记。"] },
      { title: "笔者观察", type: "text", text: "引擎时代最大的学习陷阱是『调包无害化』：调 Unity 的 API 十年，也未必知道一次 DrawCall 背后发生了什么。Scratchapixel 这类『从零造轮子』的课程的真正产出不是轮子，是遇到渲染 Bug 时的定位能力。参考来源：Scratchapixel。" }
    ] },
    { id: "tu-fabien-sanglard", category: "tutorials", subcategory: "常青教程", title: "Fabien Sanglard： Doom / Quake 引擎源码拆解与『游戏引擎代码考古』宝库", summary: "Fabien Sanglard 的个人站是游戏引擎代码考古的经典：《Doom》黑皮书式源码解读、《quake3》网络模型分析、wolfenstein 3D 移植记——想知道三十年前的天才程序员怎么压榨硬件，从这里开始。", source: "fabiensanglard.net", date: "2026-10-04", url: "https://fabiensanglard.net/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "5 分钟", hotScore: 69, tags: ["游戏引擎", "源码解读", "id Software", "代码考古"], content: [
      { title: "站点要点", type: "list", items: ["代表作：Game Engine Black Book 系列（Doom / Wolfenstein 3D）；", "源码解读：Quake III 网络模型、Doom 渲染架构等经典拆解；", "另有作者参与现代游戏项目的工程笔记。"] },
      { title: "笔者观察", type: "text", text: "读老引擎源码是性价比被严重低估的学习方式：Doom 的代码量是现代 3A 的千分之一，但渲染循环、资源调度、固定时间步长这些问题一个不少——麻雀虽小五脏俱全，而且你真的读得完。想做引擎方向的同学，先把 Doom 黑皮书读了再谈 Unity 源码。参考来源：fabiensanglard.net。" }
    ] },
    { id: "contest-js13k-2026", category: "contest", subcategory: "赛事入口", title: "js13kGames 2026：一年一度『13KB 做一款游戏』的极限挑战赛官网入口", summary: "js13kGames 是坚持了十多年的极限游戏开发挑战：所有参赛作品的游戏体积不得超过 13KB，每年 8 月开赛、9 月截止、10 月进入评审与展示期——官网汇集历届全部作品库，是学『压缩与优化』的最佳观摩现场。", source: "js13kGames 官网", date: "2026-10-04", url: "https://js13kgames.com/", image: "", badge: "赛事入口", badgeType: "contest", readTime: "3 分钟", hotScore: 68, tags: ["js13k", "Game Jam", "极限开发", "HTML5"], content: [
      { title: "赛事要点", type: "list", items: ["规则核心：整个游戏（含代码与资源）不得超过 13KB；", "年度节奏：8 月开赛、9 月 13 日截止，10 月为评审与展示期；", "官网汇集历届全部作品，可在线直接游玩。"] },
      { title: "笔者观察", type: "text", text: "13KB 限制下没有引擎、没有素材包，逼你回答一个根本问题：游戏性的最小单位是什么？哪怕不参赛，历届作品库也是最好的『约束设计』教材——看别人怎么用 13KB 做出完整循环，你对『内容量』的理解会彻底改观。想参赛的同学把 2027 年 8 月记进日历。参考来源：js13kGames 官网。" }
    ] },
    { id: "contest-game-poem-jam", category: "contest", subcategory: "GameJam 观察", title: "『游戏诗』Jam：TIGSource 创始人发起的最小主义创作实验场", summary: "RPS 专文介绍了由 TIGSource 创始人、长期创作者 Jordan Magnuson 组织的 Poem Game Jam：参与者以『游戏诗』为形式做极短篇作品——不是做玩法循环，而是用交互表达一段情绪或一个瞬间。", source: "Rock Paper Shotgun", date: "2026-10-03", url: "https://www.rockpapershotgun.com/the-other-one-jordan-magnusons-game-poem-jam-is-a-fascinating-collection-of-chimeras", image: "https://assetsio.gnwcdn.com/Screenshot-2026-09-15-100540.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "GameJam 观察", badgeType: "contest", readTime: "5 分钟", hotScore: 70, tags: ["Game Jam", "游戏诗", "极简主义", "TIGSource"], content: [
      { title: "观察要点", type: "list", items: ["Poem Game Jam 由 TIGSource 创始人 Jordan Magnuson 组织；", "作品形态：几分钟内读完玩完的『交互诗』；", "RPS 评价其为『迷人的嵌合体合集』。"] },
      { title: "笔者观察", type: "text", text: "游戏诗 Jam 是对『游戏必须有循环玩法』这一默认假设的反叛——对想做叙事方向的同学，这类 jam 是最好的第一站：规模小到一周能做完，评审标准就是『有没有表达出那个瞬间』。第一次参加 jam 不必冲 Ludum Dare，从游戏诗开始建立完成作品的肌肉记忆更实际。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "contest-indieplay-nominees", category: "contest", subcategory: "赛事动态", title: "2026 indiePlay 中国独立游戏大赛入围名单公布：最佳 Game Jam 作品赛道看点十足", summary: "2026 indiePlay 中国独立游戏大赛入围名单正式揭晓，由 CiGA 主办、indienova 等协办——其中『最佳 Game Jam 作品』赛道入围作品全部来自 2026 CiGA Game Jam 各站点与线上活动，颁奖定于 11 月。", source: "游民星空 / CiGA", date: "2026-10-03", url: "https://www.gamersky.com/news/202609/2220037.shtml", image: "", badge: "赛事动态", badgeType: "contest", readTime: "4 分钟", hotScore: 71, tags: ["indiePlay", "CiGA", "独立游戏", "入围名单"], content: [
      { title: "赛事要点", type: "list", items: ["2026 indiePlay 中国独立游戏大赛入围名单正式揭晓；", "最佳 Game Jam 作品赛道入围作全部出自 2026 CiGA Game Jam；", "颁奖仪式定于 11 月举行。"] },
      { title: "笔者观察", type: "text", text: "注意这条赛道的晋升路径：CiGA Game Jam 的复审优秀作品直接进入 indiePlay 最佳 Game Jam 奖的角逐——参加国内 jam 的曝光回报是『直通年底大赛』。对在校团队，这可能是性价比最高的曝光渠道：11 月颁奖正好衔接寒假前的立项窗口。参考来源：游民星空。" }
    ] },
    { id: "en-defold-114-beta", category: "engine", subcategory: "版本发布", title: "Defold 1.14.0 Beta 发布：轻量引擎的 1.14 大版本进入测试", summary: "Defold（King 开源、现由 Defold 基金会维护）发布 1.14.0 Beta，同日还有 1.14.1 Alpha——这个以 2D 见长、包体极小的引擎在移动小游戏场景的迭代节奏保持稳定。", source: "GitHub（defold/defold）", date: "2026-09-30", url: "https://github.com/defold/defold/releases/tag/1.14.0-beta", image: "https://opengraph.githubassets.com/1/defold/defold/releases/tag/1.14.0-beta", badge: "版本发布", badgeType: "engine", readTime: "4 分钟", hotScore: 72, tags: ["Defold", "版本发布", "开源引擎", "小游戏"], content: [
      { title: "版本要点", type: "list", items: ["1.14.0 Beta 发布，同日推进 1.14.1 Alpha；", "1.13.2 稳定版已于 9 月 29 日落地；", "Defold 由 Defold 基金会维护，GitHub 开源。"] },
      { title: "笔者观察", type: "text", text: "做微信小游戏方向的同学可以把 Defold 纳入选型对比：它的优势是包体与内存占用极小、跨平台导出链路完整，劣势是国内生态与教程存量远小于 Unity/团结。版本日志里 alpha/beta 双线并进说明基金会还在加速功能开发，不是维护模式。参考来源：GitHub。" }
    ] },
    { id: "en-stride-44-beta", category: "engine", subcategory: "版本发布", title: "Stride 4.4 进入 Beta：开源 C# 引擎的全功能版本逼近", summary: "开源 C# 引擎 Stride 发布 4.4.0-beta8，samples 4.4.1 同步推进——4.4 是这个因『C# 全栈 + 开源』被独立开发者关注的引擎蓄力已久的大版本。", source: "GitHub（stride3d/stride）", date: "2026-09-21", url: "https://github.com/stride3d/stride/releases/tag/releases/4.4.0-beta8", image: "https://opengraph.githubassets.com/1/stride3d/stride/releases/tag/releases/4.4.0-beta8", badge: "版本发布", badgeType: "engine", readTime: "3 分钟", hotScore: 66, tags: ["Stride", "开源引擎", "C#", "版本发布"], content: [
      { title: "版本要点", type: "list", items: ["4.4.0-beta8 发布，samples 仓库同步至 4.4.1；", "Stride 是开箱即用纯 C# 的开源游戏引擎；", "此前 4.4.0 样本先行发布于 9 月 19 日。"] },
      { title: "笔者观察", type: "text", text: "Stride 对数媒技学生的独特价值：全 C# 栈意味着《三维游戏开发技术》课学的 C# 知识可以无成本迁移，不用再学一门蓝图或 Lua。4.4 稳定版发布后值得做一次正式选型评估——尤其是对『想看引擎源码』的同学，开源且体量适中正是优点。参考来源：GitHub。" }
    ] },
    { id: "en-gamemaker-2026-100", category: "engine", subcategory: "版本发布", title: "GameMaker 2026.100.0 Release 8：分屏工作区上线，2D 引擎保持月度节奏", summary: "GameMaker 发布 2026.100.0 Release 8（IDE 1161 / Runtime 1106）：新增分屏工作区（Split Workspaces），允许同时并排多个编辑视图——2D 独立游戏的主力引擎继续高频迭代。", source: "GameMaker 官方发行说明", date: "2026-09-28", url: "https://releases.gamemaker.io/release-notes/2026/100.html", image: "", badge: "版本发布", badgeType: "engine", readTime: "3 分钟", hotScore: 65, tags: ["GameMaker", "版本发布", "2D 引擎", "独立游戏"], content: [
      { title: "版本要点", type: "list", items: ["2026.100.0 Release 8（IDE 1161 / Runtime 1106）；", "新增 Split Workspaces 分屏工作区；", "GameMaker 年度版本号下的月度级更新节奏稳定。"] },
      { title: "笔者观察", type: "text", text: "GameMaker 的分屏工作区看起来是小功能，但对『代码 + 房间编辑器来回切换』的 2D 工作流是实打实的效率改动。给完全新手的建议不变：2D 单机小品的毕设选 GameMaker 或 Godot，比硬上 3A 引擎交付概率高一倍。参考来源：GameMaker 官方发行说明。" }
    ] },
    { id: "en-unity-6000-3-25", category: "engine", subcategory: "版本发布", title: "Unity 6000.3.25f1 上线：LTS 线的稳定补丁流水线持续运转", summary: "Unity 发布 6000.3.25f1——6000.3 LTS 线的第 25 个补丁版本，同期 6000.7.0b2 beta 线也在推进。两条版本线并行，是 Unity 6 时代『LTS 求稳 + Beta 探路』的标准节奏。", source: "Unity 官方发行说明", date: "2026-10-03", url: "https://unity.com/releases/editor/whats-new/6000.3.25f1", image: "https://cdn.sanity.io/images/fuvbjjlp/production/b9385c095d1c8c58f48fc7d4fc8ae257395169c8-266x98.png", badge: "版本发布", badgeType: "engine", readTime: "3 分钟", hotScore: 64, tags: ["Unity", "LTS", "版本发布", "6000.3"], content: [
      { title: "版本要点", type: "list", items: ["6000.3.25f1：6000.3 LTS 线最新补丁；", "6000.7.0b2：下一代 beta 线同步推进中；", "LTS 与 Beta 双轨并行的官方版本策略。"] },
      { title: "笔者观察", type: "text", text: "给 Unity 用户的版本选择口诀依然成立：交付项目钉死 LTS 补丁线（6000.3.x），尝鲜新特性去 beta 线（6000.7），两者不要混。另外留意补丁号的节奏——25 个补丁说明 LTS 线问题修复频繁，升级前照例先看 release notes 里有没有动你用到的那块。参考来源：Unity 官方发行说明。" }
    ] },
    { id: "en-nvidia-warp-mjwarp", category: "engine", subcategory: "GPU 仿真", title: "NVIDIA 官方教程：用 Warp 与 MJWarp 加速机器人仿真与学习工作流", summary: "NVIDIA 在 Hugging Face 发布官方教程：如何使用 Warp（GPU 计算框架）与 MJWarp 加速机器人仿真与强化学习工作流——游戏引擎技术外溢到机器人领域的又一教学材料。", source: "NVIDIA / Hugging Face Blog", date: "2026-09-23", url: "https://huggingface.co/blog/nvidia/how-to-use-nvidia-warp-and-mjwarp", image: "https://cdn-uploads.huggingface.co/production/uploads/6994dc99f850a10f03fd0b58b/l0EmGniMNBYxLLQ8EFXBY.png", badge: "GPU 仿真", badgeType: "engine", readTime: "6 分钟", hotScore: 70, tags: ["NVIDIA", "Warp", "GPU 仿真", "机器人"], content: [
      { title: "教程要点", type: "list", items: ["NVIDIA 官方出品，面向 Warp 与 MJWarp 框架；", "主题：加速机器人仿真与强化学习工作流；", "发布于 Hugging Face 博客，代码可跟随实操。"] },
      { title: "笔者观察", type: "text", text: "呼应上周 Unity Simulation Pro 的观察：游戏引擎技能（GPU 并行、物理仿真、资产管线）正在机器人与具身智能行业被高价收购。学过 Unity 物理与 GPU 计算基础的同学，把这份教程跑一遍，简历上就多了一条『具身智能仿真』的经历——这是当下最不拥挤的交叉赛道之一。参考来源：NVIDIA / Hugging Face Blog。" }
    ] },
    { id: "in-uk-best-places-winners", category: "industry", subcategory: "雇主品牌", title: "2026 英国最佳游戏工作场所奖揭晓：25 家公司因善待员工上榜", summary: "GamesIndustry.biz 公布 2026 UK Best Places To Work Awards 得主：25 家英国游戏公司因在员工支持与职场文化上的表现获得认可——在裁员潮的背景板下，这份名单的参考价值被放大。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/winners-of-the-uk-best-places-to-work-awards-2026-revealed", image: "https://assetsio.gnwcdn.com/5D7A8416-Edit.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "雇主品牌", badgeType: "business", readTime: "4 分钟", hotScore: 72, tags: ["英国", "雇主品牌", "职场文化", "行业奖项"], content: [
      { title: "事件要点", type: "list", items: ["2026 UK Best Places To Work Awards 得主公布；", "25 家英国游戏公司上榜；", "评选维度覆盖员工支持、福利与职场文化。"] },
      { title: "笔者观察", type: "text", text: "求职季的正确用法：这类榜单反着用——先查心仪公司有没有上榜或上榜理由是什么，比看招聘页的企业文化文案真实一百倍。顺带观察上榜公司的规模分布，能看出『善待员工』在哪个体量的公司更可执行。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-coalition-layoffs-fear", category: "industry", subcategory: "劳工观察", title: "Eurogamer 深入《战争机器：E-Day》开发组：大作发售前夜，团队却在担心发售后即被裁", summary: "Eurogamer 匿名信源专访 The Coalition：Xbox 组织动荡之下，即将发售《战争机器：E-Day》的开发者们担心游戏上线后反而被裁——士气变化与 Metacritic 奖金机制成为讨论焦点。", source: "Eurogamer", date: "2026-10-01", url: "https://www.eurogamer.net/the-coalition-gears-of-war-e-day-worried-layoffs-no-bonus", image: "https://assetsio.gnwcdn.com/gears-money.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "劳工观察", badgeType: "business", readTime: "7 分钟", hotScore: 84, tags: ["The Coalition", "战争机器", "Xbox", "裁员"], content: [
      { title: "报道要点", type: "list", items: ["Eurogamer 采访 The Coalition 匿名信源；", "核心矛盾：大作发售在即，团队却担忧发售后被裁员；", "Metacritic 奖金制度与近月裁员潮成为士气变化的主因。"] },
      { title: "笔者观察", type: "text", text: "『游戏越成功，团队越焦虑』是这个行业最拧巴的结构性问题：成功不传导为团队安全感，反而触发『用完即弃』的预期。这与本周 Xbox 高层『不出售』的表态互为镜像——平台层在灭火，工作室层在担忧。想入行的同学把这条存档：评估 offer 时，工作室的项目周期与母公司裁员节奏比薪资数字更决定你的职业体验。参考来源：Eurogamer。" }
    ] },
    { id: "in-laptop-bargain-hunt", category: "industry", subcategory: "硬件观察", title: "RPS 观点：台式机与掌机价格双双失控后，PC 玩家的省钱尽头是『老冤家』游戏本", summary: "RPS 编辑撰文吐槽：台式机配件与掌机价格接连失控（内存缺货雪上加霜）之后，PC 玩家的性价比最优解居然回到了曾经被嘲笑的游戏本——硬件市场结构变化的真实体感。", source: "Rock Paper Shotgun", date: "2026-10-02", url: "https://www.rockpapershotgun.com/desktop-and-handheld-prices-going-out-of-control-means-pc-bargain-hunts-lead-to-my-old-enemy-gaming-laptops", image: "https://assetsio.gnwcdn.com/Medion-Erazer-Scout-15-gaming-laptop-1.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "硬件观察", badgeType: "business", readTime: "5 分钟", hotScore: 70, tags: ["硬件", "游戏本", "性价比", "PC 游戏"], content: [
      { title: "文章要点", type: "list", items: ["台式机配件（内存等）与掌机价格接连上涨；", "游戏本的性价比相对值在悄悄回升；", "作者以『老冤家』视角复盘游戏本的口碑逆转。"] },
      { title: "笔者观察", type: "text", text: "与昨日美光『缺货到 2028』的表态连读，这是一条正在展开的硬件通胀线的两个切面。对学生群体的实际结论：今年下半年有装机计划的，整机配置单里内存先买；已经在用的机器把『低配可跑』做成毕设的验收标准，反而是最稳妥的策略。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "in-vampire-crawlers-lessons", category: "industry", subcategory: "开发复盘", title: "《吸血鬼幸存者》如何变成《Vampire Crawlers》：基于他人 IP 做衍生游戏的六条经验", summary: "Nosebleed Interactive 的 Andreas Firnigl 撰文复盘《Vampire Crawlers》开发全程：酒吧原型、共享规则、最后一刻的改动——基于 Poncle 爆款 IP 做衍生游戏的六条一手经验。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/how-vampire-survivors-became-vampire-crawlers-six-lessons-from-building-a-game-based-on-another-developers-ip-1", image: "https://assetsio.gnwcdn.com/vampire-crawlers_16_9.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发复盘", badgeType: "business", readTime: "8 分钟", hotScore: 78, tags: ["Vampire Survivors", "衍生游戏", "IP 合作", "开发复盘"], content: [
      { title: "复盘要点", type: "list", items: ["Nosebleed Interactive 分享基于 Poncle IP 开发衍生作的六条经验；", "流程细节：酒吧里的原型讨论、与 IP 方共享规则、临门改动；", "核心命题：怎么在他人 IP 的约束里保住自己的创作空间。"] },
      { title: "笔者观察", type: "text", text: "『基于他人 IP 做游戏』正在成为中小团队的重要生存策略——比原创省一半的用户获取，比外包有创作权。这篇的六条经验里最值得划线的是关于规则共享的部分：IP 合作的谈判要点不是分成比例，而是『哪些核心规则不许动』的边界先谈清楚。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-ff7-revelation-disc", category: "industry", subcategory: "开发访谈", title: "《最终幻想7：启示录》总监：『我尽了最大努力』为游戏争取完整光盘版", summary: "《最终幻想7：启示录》总监 Naoki Hamaguchi 向 Eurogamer 透露，他『尽了最大努力』为游戏争取完整光盘版发行——在大厂普遍拥抱全数字化的当下，制作人对实体介质的坚持显得尤为罕见。", source: "Eurogamer", date: "2026-10-03", url: "https://www.eurogamer.net/final-fantasy-7-revelation-naoki-hamaguchi-disc-release-physical-media", image: "https://assetsio.gnwcdn.com/final-fantasy-7-revelation-gameplay-screen-1.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发访谈", badgeType: "business", readTime: "5 分钟", hotScore: 77, tags: ["最终幻想7", "SE", "实体介质", "数字化"], content: [
      { title: "访谈要点", type: "list", items: ["总监 Naoki Hamaguchi 自述为完整光盘版『尽了最大努力』；", "背景：行业加速转向全数字化发行；", "制作线与商业线在实体介质上的分歧被公开化。"] },
      { title: "笔者观察", type: "text", text: "把这条与本周索尼调研、GI.biz 评论放在一起，实体介质议题已经形成了完整的三方叙事：平台（调研）→ 媒体（定调）→ 制作人（挽留）。制作人公开『为光盘抗争』，说明内部确实存在真实的路线分歧，而非公关话术。收藏向玩家的光盘情绪，正在变成产品决策变量。参考来源：Eurogamer。" }
    ] },
    { id: "g-ace-combat-8-launch", category: "games", subcategory: "正式发售", title: "《皇牌空战8：希孚之翼》正式发售：系列 30 周年正统续作今日登陆 Steam", summary: "万代南梦宫《皇牌空战8：希孚之翼》今日（10 月 2 日）正式发售，登陆 Steam / PS5 / Xbox Series X|S——系列 30 周年正统续作，数字豪华版玩家已可从 9 月 28 日起抢先体验。", source: "Steam 商店页 / 万代南梦宫", date: "2026-10-02", url: "https://store.steampowered.com/app/2288340/ACE_COMBAT_8_WINGS_OF_THEVE/", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2288340/3bd993fa9f94ebd60c1b05dd61a4315cde829830/capsule_616x353.jpg?t=1790632886", badge: "正式发售", badgeType: "games", readTime: "3 分钟", hotScore: 80, tags: ["皇牌空战8", "万代南梦宫", "空战射击", "30 周年"], content: [
      { title: "发售要点", type: "list", items: ["10 月 2 日正式发售，登陆 Steam / PS5 / Xbox Series X|S；", "系列 30 周年正统续作；", "数字豪华版自 9 月 28 日起抢先体验，含《皇牌空战 Online》高级通行证 Plus 等权益；", "预购赠 F-14A 机体与《皇牌空战零》移植版。"] },
      { title: "笔者观察", type: "text", text: "空战射击是个被低估的『技术展示型』品类：云层体积渲染、跨音速气流的镜头抖动、贴海飞行的遮挡判定——皇牌空战系列每次正传都是当世代渲染技术的阅兵式。学渲染的同学值得把本作加入观察名单。参考来源：Steam 商店页。" }
    ] },
    { id: "g-gears-eday-oct6", category: "games", subcategory: "发售前瞻", title: "《战争机器：E-Day》下周二发售：Game Pass 首日入库，Xbox 年度最重要一役", summary: "The Coalition 的《战争机器：E-Day》将于 10 月 6 日（下周二）发售，登陆 Xbox Series X|S 与 PC，Game Pass Ultimate / PC Game Pass 首日入库——Xbox 动荡期内最重要的一场-self 验证。", source: "Xbox 官网", date: "2026-10-03", url: "https://www.xbox.com/en-US/games/gears-of-war-eday", image: "https://cms-assets.xboxservices.com/assets/10/0b/100bb9d2-bee4-4383-87b0-431f8e9db93a.jpg?n=gio_1470234_page_gg_1920x1080.jpg", badge: "发售前瞻", badgeType: "games", readTime: "4 分钟", hotScore: 82, tags: ["战争机器", "The Coalition", "Game Pass", "Xbox"], content: [
      { title: "发售要点", type: "list", items: ["10 月 6 日发售，登陆 Xbox Series X|S 与 PC；", "Game Pass Ultimate / PC Game Pass 首日入库；", "前传定位：讲述 Emergence Day 当日的事件；", "背景：The Coalition 团队近期士气与裁员担忧被媒体广泛报道。"] },
      { title: "笔者观察", type: "text", text: "把这条与 Eurogamer 的团队报道连读：《E-Day》的商业成绩已经不只是卖拷贝问题，而是 Xbox 在动荡期最需要的一份『内部士气验证』。对观察者而言，本作首周的 Game Pass 游玩数据是检验『订阅制头部大作』策略是否仍成立的最佳样本。参考来源：Xbox 官网。" }
    ] },
    { id: "g-october-release-calendar", category: "games", subcategory: "发售日历", title: "10 月游戏发售全景：GTA6 前最后一个『大月』，18+ 部作品挤满档期", summary: "ScreenRant 整理 10 月游戏发售日程：从《皇牌空战8》到《影之刃零》《战争机器：E-Day》，2026 年 10 月的密集程度因 GTA6 推迟至 11 月而进一步加剧——避让逻辑正在被重新书写。", source: "Screen Rant", date: "2026-10-02", url: "https://screenrant.com/october-2026-video-games-releases-schedule-lineup/", image: "https://static0.srcdn.com/wordpress/wp-content/uploads/2026/09/ss_6b8f4040a1e923f036e04d9eb21ecb0f866be57e-1920x1080.jpg?w=1600&h=900&fit=crop", badge: "发售日历", badgeType: "games", readTime: "5 分钟", hotScore: 75, tags: ["发售日历", "10 月", "档期", "GTA6"], content: [
      { title: "日历要点", type: "list", items: ["10 月已排期发售作品超过 18 款；", "重磅包括《战争机器：E-Day》《影之刃零》与多款跨平台大作；", "GTA6 移至 11 月后，10 月档期竞争进一步白热化。"] },
      { title: "笔者观察", type: "text", text: "与本周『独立游戏要不要躲 GTA6 的 11 月』的讨论互相印证：10 月这个『最后一个安全大月』的拥挤，本身就是行业对 11 月集体避让的直接后果——避让行为本身制造了新的拥堵。档期博弈是个动态系统，单点决策永远是错的。参考来源：Screen Rant。" }
    ] },
    { id: "g-star-wars-galactic-racer-review", category: "games", subcategory: "新作评测", title: "《星球大战：银河竞速》评测：Roguelite 战役 + 竞速手感，Criterion 粉丝的意外之喜", summary: "Eurogamer 评测《星球大战：银河竞速》：既有『出奇有趣的 Roguelite 战役』，又有让 Criterion（《火爆狂飙》）粉丝满意的速度感——星战 IP 下的竞速细分，交出了一份超出预期的答卷。", source: "Eurogamer", date: "2026-10-02", url: "https://www.eurogamer.net/star-wars-galactic-racer-review", image: "https://assetsio.gnwcdn.com/star-wars-galactic-racer-review-header.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作评测", badgeType: "games", readTime: "5 分钟", hotScore: 73, tags: ["星球大战", "竞速", "Roguelite", "游戏评测"], content: [
      { title: "评测要点", type: "list", items: ["Eurogamer 给出积极评价：Roguelite 战役『出奇地有趣』；", "速度手感对 Criterion 系竞速粉丝友好；", "星战 IP + 竞速细分 + 轻 Roguelite 结构的组合被验证。"] },
      { title: "笔者观察", type: "text", text: "『IP + 竞速 + Roguelite 结构』这个配方值得注意：Roguelite 的随机性正好解决星战竞速『赛道内容量』的天花板问题——用结构复用换内容成本。中小团队做 IP 授权游戏时，选一个能用程序化结构填补内容量的品类，是控制成本的关键手筋。参考来源：Eurogamer。" }
    ] },
    { id: "g-weekend-playing-402", category: "games", subcategory: "社区观察", title: "RPS 周末栏目：星战连玩、Castlevania 试玩 Demo 与一堆『保密游戏』", summary: "RPS 周末固定栏目第 402 期：编辑团队分享本周正在玩的游戏——多款星战游戏、一个《恶魔城》风格 Demo，以及若干『还不能说』的神秘游戏（通常是评测 embargo 的信号）。", source: "Rock Paper Shotgun", date: "2026-10-03", url: "https://www.rockpapershotgun.com/what-are-we-all-playing-this-weekend-402", image: "https://assetsio.gnwcdn.com/weekend-bed.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "社区观察", badgeType: "games", readTime: "3 分钟", hotScore: 62, tags: ["RPS", "周末栏目", "社区", "游戏推荐"], content: [
      { title: "栏目要点", type: "list", items: ["RPS 编辑团队周末游戏分享第 402 期；", "本期：多款星战游戏 + Castlevania 风格 Demo；", "『很多保密游戏』暗示近期有一波评测解禁潮。"] },
      { title: "笔者观察", type: "text", text: "『secret games』是媒体行业的行话信号：编辑正在玩但还不能写的游戏，意味着未来两周会有一波评测解禁。学会读这些行业信号，你能比发行商的官宣早一周知道『哪些游戏即将掀起讨论』——做社区运营或内容策划的同学，这种信号解读能力是软实力。参考来源：Rock Paper Shotgun。" }
    ] }
  ]
}
