window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-05",
    weekday: "星期一",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-05 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "《战争机器：E-Day》战役评测解禁：Eurogamer 称『老 Cogs 也能教出新把戏』",
      "E-Day 开发组谈血浆设计：『粉丝对暴力已经脱敏』——加大投入反而奏效",
      "Anthropic 承诺 1 亿美元、2027 年底前训练 1 万名前沿部署工程师",
      "llama.cpp 引入『决策模型』：本地推理栈的新范式",
      "TIC-80 假想主机发布 1.3.0：13KB 极限开发社区的官方工具链大版本"
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
    id: "gears-eday-campaign-review",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "评测解禁",
    title: "《战争机器：E-Day》战役评测解禁：Eurogamer 称『老 Cogs 也能教出新把戏』",
    summary: "Eurogamer 解禁《战争机器：E-Day》战役评测，评价积极——这部前传证明传承 20 年的系列依然能拿出新东西。Xbox 动荡期里的年度最重要独占，首周成绩将成为订阅制头部大作策略的关键样本。",
    image: "https://assetsio.gnwcdn.com/gears-review-header.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Eurogamer / The Coalition",
    date: "2026-10-01",
    url: "https://www.eurogamer.net/gears-of-war-eday-campaign-review",
    readTime: "6 分钟深度",
    hotScore: 91,
    tags: ["战争机器", "E-Day", "The Coalition", "评测", "Xbox"],
    content: [
      { title: "评测要点", type: "list", items: ["Eurogamer 战役评测解禁，整体评价积极；", "标题点题：『老 Cogs 也能教出新把戏』——系列20年仍在进化；", "10 月 6 日正式发售，Game Pass 首日入库；", "发售前夜的团队士气与裁员担忧已有独立报道，商业表现更受关注。"] },
      { title: "笔者观察", type: "text", text: "把评测解禁与本周两篇 The Coalition 报道连起来读，是观察『大作发售前的工作室生态』的完整案例：游戏本身好评、团队却担忧发售后被裁——作品质量与组织健康度第一次被如此清晰地分开讨论。周四发售当天的 Game Pass 在线数据值得蹲守，它将回答『订阅制是否还养得起 3A 战役』这个问题。参考来源：Eurogamer。" }
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
    { id: "gh-openmontage", category: "opensource", subcategory: "AI 视频生产", title: "OpenMontage：6 万+ star 的开源『智能体视频生产系统』——把 AI 编码助手变成影视工作室", summary: "OpenMontage 自称全球首个开源的智能体视频生产系统：12 条生产管线、100+ 工具、700+ 智能体技能与制作知识文件，把 AI 编码助手改造成完整的视频制作工作室——周内冲至 6.3 万 star。", source: "GitHub（calesthio/OpenMontage）", date: "2026-10-04", url: "https://github.com/calesthio/OpenMontage", image: "https://repository-images.githubusercontent.com/1195360525/645f0bc1-450d-4791-99b8-6102b4bb9f3d", badge: "开源热榜", badgeType: "opensource", readTime: "4 分钟", hotScore: 81, tags: ["GitHub", "AI Agent", "视频生产", "开源"], content: [
      { title: "项目要点", type: "list", items: ["12 条视频生产管线、100+ 工具、700+ 智能体技能文件；", "复用 AI 编码助手（Claude Code 等）作为执行引擎；", "目标：让个人创作者拥有完整的视频后期生产能力。"] },
      { title: "笔者观察", type: "text", text: "对独立开发者最直接的应用是游戏宣传片与 Steam 页面素材的制作管线化——预告片剪辑、字幕、多语言版本这些重复劳动都可以被管线吃掉。更值得学的是它的组织方式：用『技能文件 + 知识库』把制作经验固化下来，这套方法论搬回游戏开发同样成立。参考来源：GitHub。" }
    ] },
    { id: "gh-gstack", category: "opensource", subcategory: "AI 工具链", title: "gstack：Garry Tan 公开自己的 Claude Code 完整配置——13.5 万 star 的『CEO 工作流』", summary: "Y Combinator 总裁 Garry Tan 开源 gstack：23 个有明确观点的工具，分别扮演 CEO、设计师、工程经理、发布经理、文档工程师与 QA——一个人用智能体阵容跑完整创业公司职能。", source: "GitHub（garrytan/gstack）", date: "2026-10-04", url: "https://github.com/garrytan/gstack", image: "https://opengraph.githubassets.com/dfdc8d05e32e4334d583d1c15ebc5ef00a43c332a3467594f10ceedd7c242dc9/garrytan/gstack", badge: "开源热榜", badgeType: "opensource", readTime: "4 分钟", hotScore: 80, tags: ["GitHub", "AI Agent", "工作流", "创业"], content: [
      { title: "项目要点", type: "list", items: ["23 个『有观点的』智能体工具组合；", "角色化分工：CEO / 设计师 / 工程经理 / 发布经理 / 文档工程师 / QA；", "作者为 Y Combinator 总裁 Garry Tan，周内 13.5 万 star。"] },
      { title: "笔者观察", type: "text", text: "这个项目的看点不是工具本身，而是『用组织架构图来组织智能体』的思路：给每个智能体一个职位、一段职责描述和一个汇报关系——这其实就是把管理学写进配置文件。学生团队可以直接抄这个结构来分配小组的 AI 工具角色。参考来源：GitHub。" }
    ] },
    { id: "gh-marketingskills", category: "opensource", subcategory: "AI 工具链", title: "marketingskills：给 AI 智能体装上『市场部』——CRO、文案、SEO 与增长工程（5.3 万 star）", summary: "marketingskills 为 Claude Code 与 AI 智能体提供市场营销方向的技能包：转化率优化、文案写作、SEO、数据分析与增长工程——独立开发者最缺的『市场部』第一次被做成了开源技能库。", source: "GitHub（coreyhaines31/marketingskills）", date: "2026-10-04", url: "https://github.com/coreyhaines31/marketingskills", image: "https://opengraph.githubassets.com/d6859d188b9e090fe1ca3acd6b6d5a301c1751e15c67d2bda650d43dfb9bd3f8/coreyhaines31/marketingskills", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 74, tags: ["GitHub", "AI Agent", "市场营销", "独立开发"], content: [
      { title: "项目要点", type: "list", items: ["技能覆盖：CRO、文案、SEO、数据分析、增长工程；", "面向 Claude Code 与各类 AI 智能体；", "周内 5.3 万 star，是『非技术职能智能体化』的代表作。"] },
      { title: "笔者观察", type: "text", text: "开发者技能的智能体化已经卷了两周，市场技能的开源说明风向在扩散：下一个被技能包化的会是法务、财务还是客服？对独立开发者，这类仓库直接回答了『没有发行商怎么自己做宣发』的问题——技能包 + 商店页数据，就是一个人的市场部。参考来源：GitHub。" }
    ] },
    { id: "gh-text-to-cad", category: "opensource", subcategory: "AI 工具链", title: "text-to-cad：给 AI 智能体装上 CAD 超能力——文字描述直接生成 3D 工程模型（1.6 万 star）", summary: "text-to-cad 让 AI 智能体获得 CAD 能力：用自然语言描述即可生成可编辑的 3D 工程模型。对游戏开发者而言，这是『AI 生成 3D 资产』从概念验证走向工程可用的又一个信号。", source: "GitHub（earthtojake/text-to-cad）", date: "2026-10-04", url: "https://github.com/earthtojake/text-to-cad", image: "https://opengraph.githubassets.com/72a76c9a08d73946ce2057d8dd0c8b5ba9675fc0b710c74b75bb70d6e858e43e/earthtojake/text-to-cad", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 73, tags: ["GitHub", "AI Agent", "CAD", "3D 资产"], content: [
      { title: "项目要点", type: "list", items: ["让智能体具备 CAD 建模能力；", "自然语言输入 → 可编辑的 3D 工程模型输出；", "周内 1.6 万 star。"] },
      { title: "笔者观察", type: "text", text: "CAD 级别的生成和『AI 生图』是两回事：前者要求精确尺寸与可编辑拓扑，这恰恰是游戏资产管线最需要的属性。如果这条链路成熟，白模搭建（blockout）环节将最先被替代——关卡设计的原型迭代速度会再上一个台阶。参考来源：GitHub。" }
    ] },
    { id: "gh-tester-army-e2e", category: "opensource", subcategory: "测试工具", title: "tester-army/e2e：冲上热榜的下一代 Web 与移动端 E2E 测试框架（3000+ star）", summary: "tester-army/e2e 自称『下一代』端到端测试框架，覆盖 Web 与移动应用——在 AI 写代码越来越快的当下，验证代码的测试框架也在被重新发明。", source: "GitHub（tester-army/e2e）", date: "2026-10-04", url: "https://github.com/tester-army/e2e", image: "https://repository-images.githubusercontent.com/1308631234/358e34a0-4e46-4400-b092-63a397fe9d48", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 68, tags: ["GitHub", "测试", "E2E", "开源"], content: [
      { title: "项目要点", type: "list", items: ["定位：面向 Web 与移动应用的下一代 E2E 测试框架；", "热度：3000+ star 持续上涨；", "背景：AI 生成代码的爆发让自动化验证需求同步激增。"] },
      { title: "笔者观察", type: "text", text: "AI 写得越快，测试就越值钱——这是本周开源榜给出的最清晰信号（热榜前十里测试与验证类占了两席）。给用 AI 辅助做毕设的团队一条实操建议：让 AI 写功能之前，先让它写测试，你的返工率会肉眼可见地下降。参考来源：GitHub。" }
    ] },
    { id: "ai-claude-frontier-academy", category: "ai", subcategory: "AI 教育", title: "Anthropic 承诺 1 亿美元：2027 年底前训练 1 万名『前沿部署工程师』", summary: "Anthropic 宣布 Claude Frontier Academy 计划：投入 1 亿美元，到 2027 年底训练 1 万名达到 Anthropic 自家标准的『前沿部署工程师』（Frontier Deployed Engineers）——AI 大厂开始自建人才管道。", source: "Anthropic 官方", date: "2026-10-02", url: "https://www.anthropic.com/news/claude-frontier-academy", image: "https://www.anthropic.com/api/opengraph-illustration?name=Hand%20Build&backgroundColor=heather", badge: "AI 教育", badgeType: "ai", readTime: "4 分钟", hotScore: 85, tags: ["Anthropic", "Claude", "AI 人才", "培训计划"], content: [
      { title: "计划要点", type: "list", items: ["Anthropic 官方宣布 Claude Frontier Academy；", "承诺投入 1 亿美元；", "目标：2027 年底前训练 1 万名『前沿部署工程师』，标准对标 Anthropic 内部水平。"] },
      { title: "笔者观察", type: "text", text: "『前沿部署工程师』这个新工种值得记下来：它不是训练模型的研究员，而是『把前沿模型部署进企业真实工作流』的工程师——翻译过来就是既懂业务又懂 AI 工具链的人。数媒技术专业的交叉背景（内容 + 技术）恰好卡在这个工种的画像上，这条新赛道值得放进职业规划备选。参考来源：Anthropic 官方。" }
    ] },
    { id: "ai-llamacpp-decision-models", category: "ai", subcategory: "本地推理", title: "llama.cpp 引入『Decision Models』：本地推理栈的新范式", summary: "ggml 官方团队在 Hugging Face 发文介绍 llama.cpp 的『Decision Models』新方向——让本地模型不仅生成内容，还能在推理栈里做决策判断，开源本地推理生态再进一步。", source: "Hugging Face Blog（ggml-org）", date: "2026-10-02", url: "https://huggingface.co/blog/ggml-org/decision-models-in-llamacpp", image: "https://cdn-uploads.huggingface.co/production/uploads/5f17f0a0925b9863e28ad517/qD9H-b23e-X70mlX5XIx1.png", badge: "本地推理", badgeType: "ai", readTime: "6 分钟", hotScore: 81, tags: ["llama.cpp", "ggml", "本地推理", "开源 AI"], content: [
      { title: "技术要点", type: "list", items: ["ggml-org 官方发文介绍 llama.cpp 的 Decision Models；", "方向：让本地推理栈承担决策判断而不仅是内容生成；", "延续 llama.cpp 在消费级硬件上跑大模型的开源路线。"] },
      { title: "笔者观察", type: "text", text: "本地推理栈开始支持『决策型模型』，对独立开发者是实打实的利好：NPC 行为树、难度调度、程序化生成里的判断逻辑，未来都可能交给一个跑在玩家机器上的小模型——不需要联网、不需要 API 费。做一个本地 AI NPC 原型的门槛，正在从『调 API 的工程能力』降到『读一篇博客』。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-whitehouse-safety-meetings", category: "ai", subcategory: "AI 治理", title: "白宫人工智能协议：英伟达、OpenAI、Anthropic、xAI、谷歌将定期就 AI 安全标准开会", summary: "据新浪财经快讯，白宫人工智能协议敲定：英伟达、OpenAI、Anthropic、xAI、谷歌等将定期就人工智能安全标准举行会议——头部 AI 公司与监管的常态化沟通机制正式建立。", source: "新浪财经（快讯）", date: "2026-09-30", url: "https://finance.sina.cn/7x24/2026-09-30/detail-initpxxr5856281.d.html", image: "", badge: "AI 治理", badgeType: "ai", readTime: "3 分钟", hotScore: 76, tags: ["AI 治理", "白宫", "安全标准", "监管"], content: [
      { title: "事件要点", type: "list", items: ["白宫人工智能协议敲定定期会议机制；", "参与方：英伟达、OpenAI、Anthropic、xAI、谷歌；", "议题：人工智能安全标准的协调与落地。"] },
      { title: "笔者观察", type: "text", text: "对游戏从业者这条看似遥远，实则直接：AI 安全标准一旦成为合规要求，游戏里的生成式内容（对话、贴图、语音）都会被纳入审计范围。提前在自己的内容管线里留好『来源记录与可回溯』的口子，未来会省掉一次大规模返工。参考来源：新浪财经。" }
    ] },
    { id: "ai-olmocore3", category: "ai", subcategory: "开源模型", title: "AI2 发布 Olmo-core 3：面向大型 MoE 的开放、可扩展训练基础设施", summary: "艾伦人工智能研究所（AI2）发布 Olmo-core 3：一套完全开放的大型混合专家（MoE）模型训练基础设施——训练栈本身成为开源资产，是『全开放大模型』路线的关键拼图。", source: "Hugging Face Blog（AllenAI）", date: "2026-10-01", url: "https://huggingface.co/blog/allenai/olmocore3", image: "https://cdn-uploads.huggingface.co/production/uploads/638e39b249de7ae552d977b5/uKnK93gjkKbmJmSx94WO2.png", badge: "开源模型", badgeType: "ai", readTime: "6 分钟", hotScore: 77, tags: ["AI2", "Olmo", "MoE", "开源训练"], content: [
      { title: "发布要点", type: "list", items: ["Olmo-core 3：开放、可扩展的大型 MoE 训练基础设施；", "AI2 全开放路线的延续：数据、代码、训练栈全开源；", "面向研究机构与需要自训模型的团队。"] },
      { title: "笔者观察", type: "text", text: " Olmo 系列的价值在于『可复现』：当闭源模型成为黑箱，AI2 把训练过程完整开源，等于给了学术界和中小团队一份『如何从零训练大模型』的操作手册。对想深入 AI 工程而非只会调 API 的同学，读这类训练栈的设计比多刷十个模型榜单有营养。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-dgx-spark-handbook", category: "ai", subcategory: "本地部署", title: "《DGX Spark 手册》：Exo Labs 发布本地 AI 硬件的使用百科", summary: "Exo Labs 在 Hugging Face 发布《DGX Spark Handbook》：围绕 NVIDIA DGX Spark 这台『口袋级 AI 超算』的模型部署、性能调优与实战手册——本地 AI 硬件生态的配套知识正在快速成型。", source: "Hugging Face Blog（Exo Labs）", date: "2026-10-01", url: "https://huggingface.co/blog/exolabs/the-dgx-spark-handbook", image: "https://cdn-uploads.huggingface.co/production/uploads/68e3c4dbcf2503efff7eb64f/XnHOwtn-0USQ0ac1BoX1C.png", badge: "本地部署", badgeType: "ai", readTime: "5 分钟", hotScore: 73, tags: ["DGX Spark", "NVIDIA", "本地 AI", "手册"], content: [
      { title: "手册要点", type: "list", items: ["面向 NVIDIA DGX Spark 的模型部署与调优指南；", "由 Exo Labs（分布式推理框架团队）撰写；", "本地 AI 硬件的配套知识库正在社区自发成型。"] },
      { title: "笔者观察", type: "text", text: "DGX Spark 这类『桌面级 AI 硬件』的普及路径，和当年显卡之于游戏开发者如出一辙：硬件先到，知识后到，然后才是工作流革命。这份手册就是『知识后到』阶段的标志性产物——关注本地 AI 工作流的同学可以把它当硬件选购与能力边界的一手参考。参考来源：Hugging Face Blog。" }
    ] },
    { id: "tu-sunday-papers-830", category: "tutorials", subcategory: "学习资源", title: "周日读报第 830 期：RPS 精选一周游戏行业深度阅读", summary: "RPS 周日固定栏目《The Sunday Papers》第 830 期：汇总一周值得精读的游戏设计、开发幕后与行业长文——每周一小时的高质量行业输入清单。", source: "Rock Paper Shotgun", date: "2026-10-04", url: "https://www.rockpapershotgun.com/the-sunday-papers-830", image: "https://assetsio.gnwcdn.com/the-sunday-papers-big.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "学习资源", badgeType: "tutorial", readTime: "3 分钟", hotScore: 66, tags: ["行业阅读", "周报", "学习资源"], content: [
      { title: "栏目要点", type: "list", items: ["RPS 每周日整理一周游戏设计/开发/行业深度文章；", "第 830 期：栏目已坚持八年以上；", "来源覆盖开发者博客、GDC 演讲整理与媒体长文。"] },
      { title: "笔者观察", type: "text", text: "第 830 期这个编号本身就是最好的坚持教程：一周一期，八年不断。给自己定『每周日一小时精读』的习惯，用这个栏目当清单骨架，一年后的行业认知会甩开同龄人一整圈。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "tu-crafting-interpreters", category: "tutorials", subcategory: "常青教程", title: "Crafting Interpreters：免费全文在线的『手写解释器』圣经——做游戏脚本语言前必读", summary: "Bob Nystrom 的《Crafting Interpreters》全文免费在线：从零手写两个完整的解释器（树遍历 + 字节码），是理解 Lua、GDScript、C# 这类游戏脚本语言如何运转的最佳教材。", source: "craftinginterpreters.com（Bob Nystrom）", date: "2026-10-05", url: "https://craftinginterpreters.com/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "6 分钟", hotScore: 74, tags: ["编译原理", "解释器", "脚本语言", "免费书籍"], content: [
      { title: "书籍要点", type: "list", items: ["两部分：jlox（树遍历解释器）与 clox（字节码虚拟机）；", "全部代码与排版精美的全文免费在线；", "作者 Bob Nystrom 也是《Game Programming Patterns》的作者。"] },
      { title: "笔者观察", type: "text", text: "很多游戏最终都会长出自己的脚本语言或 DSL——读这本书之后你会发现『给游戏加一套脚本系统』不再是黑魔法。更普适的收益是：理解『代码是如何被执行的』之后，你写的每一行 Lua/GDScript 的性能直觉都会变准。参考来源：craftinginterpreters.com。" }
    ] },
    { id: "tu-box2d", category: "tutorials", subcategory: "常青教程", title: "Box2D 官网：Erin Catto 的 2D 物理引擎与 GDC 物理教程大本营", summary: "Box2D 官网不仅是那个撑起无数 2D 游戏的物理引擎大本营，作者 Erin Catto 历年 GDC 物理演讲的资料也汇聚于此——『顺序脉冲求解器』那几场演讲是游戏物理的必修课。", source: "box2d.org（Erin Catto）", date: "2026-10-05", url: "https://box2d.org/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "5 分钟", hotScore: 70, tags: ["物理引擎", "Box2D", "GDC", "2D 游戏"], content: [
      { title: "站点要点", type: "list", items: ["Box2D：被《愤怒的小鸟》等无数作品验证的 2D 物理引擎；", "附 Erin Catto 历年 GDC 物理演讲资料；", "C++ 实现，license 宽松，可读性强。"] },
      { title: "笔者观察", type: "text", text: "物理引擎学习的最佳路径是『读一个写得好的小引擎』而不是啃理论书——Box2D 源码正是这样的存在：约束求解、碰撞检测、休眠机制，每个模块都值得单独写一篇读书笔记。想往引擎方向走的同学，这是比 Unity 源码友好十倍的入口。参考来源：box2d.org。" }
    ] },
    { id: "tu-godot-docs", category: "tutorials", subcategory: "常青教程", title: "Godot 官方文档『入门篇』：把你的第一个 2D 游戏从零做完的官方路线", summary: "Godot 官方文档的 Getting Started 篇是少有的『直接带你做完一个完整游戏』的官方教程：玩家、敌人、金币、UI、音效一应俱全，且与引擎版本同步维护——开源引擎的文档标杆。", source: "Godot 官方文档", date: "2026-10-05", url: "https://docs.godotengine.org/en/stable/getting_started/introduction/index.html", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "5 分钟", hotScore: 69, tags: ["Godot", "官方文档", "入门教程", "2D 游戏"], content: [
      { title: "文档要点", type: "list", items: ["Step by step 篇：节点与场景 → 2D 游戏完整流程 → UI 与音效；", "配套『你的第一个 2D 游戏』实例贯穿；", "多语言版本（含中文），与引擎稳定版同步更新。"] },
      { title: "笔者观察", type: "text", text: "官方文档能写成『课程』的引擎不多，Godot 是其中做得最好的之一。给大一到大二同学的寒假作业建议：别囤教程，就把这篇跟着做完——一个能发给别人玩的完整小游戏，价值超过十个只做了一半的『炫技项目』。参考来源：Godot 官方文档。" }
    ] },
    { id: "tu-learncpp", category: "tutorials", subcategory: "常青教程", title: "LearnCpp.com：免费的系统性 C++ 教程——引擎与客户端岗的语法地基", summary: "LearnCpp.com 是最系统的免费 C++ 在线教程：从基础语法到智能指针、移动语义、模板，章节编排循序渐进——Unreal / 自研引擎方向绕不开的 C++ 地基都在这里。", source: "LearnCpp.com", date: "2026-10-05", url: "https://www.learncpp.com/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "5 分钟", hotScore: 68, tags: ["C++", "免费教程", "客户端", "引擎"], content: [
      { title: "站点要点", type: "list", items: ["覆盖：基础语法 → 函数与文件 → 类与对象 → 智能指针/移动语义 → 模板；", "每章配习题，全部免费无注册门槛；", "持续更新至最新 C++ 标准。"] },
      { title: "笔者观察", type: "text", text: "C++ 学习最常见的失败方式是『直接上 Unreal』——被宏和构建系统劝退。正确顺序是先用 LearnCpp 把语言本身过一遍（重点智能指针与移动语义，这是引擎岗面试必问），再进引擎，挫折感会少一半。参考来源：LearnCpp.com。" }
    ] },
    { id: "contest-game-poem-jam", category: "contest", subcategory: "GameJam 观察", title: "『游戏诗』Jam：TIGSource 创始人发起的最小主义创作实验场", summary: "RPS 专文介绍了由 TIGSource 创始人、长期创作者 Jordan Magnuson 组织的 Poem Game Jam：参与者以『游戏诗』为形式做极短篇作品——不是做玩法循环，而是用交互表达一段情绪或一个瞬间。", source: "Rock Paper Shotgun", date: "2026-10-03", url: "https://www.rockpapershotgun.com/the-other-one-jordan-magnusons-game-poem-jam-is-a-fascinating-collection-of-chimeras", image: "https://assetsio.gnwcdn.com/Screenshot-2026-09-15-100540.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "GameJam 观察", badgeType: "contest", readTime: "5 分钟", hotScore: 70, tags: ["Game Jam", "游戏诗", "极简主义", "TIGSource"], content: [
      { title: "观察要点", type: "list", items: ["Poem Game Jam 由 TIGSource 创始人 Jordan Magnuson 组织；", "作品形态：几分钟内读完玩完的『交互诗』；", "RPS 评价其为『迷人的嵌合体合集』。"] },
      { title: "笔者观察", type: "text", text: "游戏诗 Jam 是对『游戏必须有循环玩法』这一默认假设的反叛——对想做叙事方向的同学，这类 jam 是最好的第一站：规模小到一周能做完，评审标准就是『有没有表达出那个瞬间』。第一次参加 jam 不必冲 Ludum Dare，从游戏诗开始建立完成作品的肌肉记忆更实际。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "contest-indieplay-nominees", category: "contest", subcategory: "赛事动态", title: "2026 indiePlay 中国独立游戏大赛入围名单公布：最佳 Game Jam 作品赛道看点十足", summary: "2026 indiePlay 中国独立游戏大赛入围名单正式揭晓，由 CiGA 主办、indienova 等协办——其中『最佳 Game Jam 作品』赛道入围作品全部来自 2026 CiGA Game Jam 各站点与线上活动，颁奖定于 11 月。", source: "游民星空 / CiGA", date: "2026-10-03", url: "https://www.gamersky.com/news/202609/2220037.shtml", image: "", badge: "赛事动态", badgeType: "contest", readTime: "4 分钟", hotScore: 71, tags: ["indiePlay", "CiGA", "独立游戏", "入围名单"], content: [
      { title: "赛事要点", type: "list", items: ["2026 indiePlay 中国独立游戏大赛入围名单正式揭晓；", "最佳 Game Jam 作品赛道入围作全部出自 2026 CiGA Game Jam；", "颁奖仪式定于 11 月举行。"] },
      { title: "笔者观察", type: "text", text: "注意这条赛道的晋升路径：CiGA Game Jam 的复审优秀作品直接进入 indiePlay 最佳 Game Jam 奖的角逐——参加国内 jam 的曝光回报是『直通年底大赛』。对在校团队，这可能是性价比最高的曝光渠道：11 月颁奖正好衔接寒假前的立项窗口。参考来源：游民星空。" }
    ] },
    { id: "contest-godotwildjam", category: "contest", subcategory: "赛事入口", title: "Godot Wild Jam：Godot 社区最大的月度 Jam，主题与 Wildcard 双轨玩法", summary: "Godot Wild Jam 自称『Godot 引擎最大的月度 Jam』：每月一届，除常规主题外还引入 Wildcard（随机限制）机制，提交经由 itch.io 进行——用 Godot 学习游戏开发的社区实践主场。", source: "Godot Wild Jam 官网", date: "2026-10-05", url: "https://godotwildjam.com/", image: "", badge: "赛事入口", badgeType: "contest", readTime: "3 分钟", hotScore: 65, tags: ["Godot", "Game Jam", "月度赛事", "itch.io"], content: [
      { title: "赛事要点", type: "list", items: ["月度举办的 Godot 社区 Jam；", "双轨机制：主题（Theme）+ Wildcard 随机限制；", "作品经 itch.io 提交，主题与 Wildcard 在 Discord 公布。"] },
      { title: "笔者观察", type: "text", text: "Wildcard 机制是个好设计：在主题之外再掷一个『必须包含的限制』（比如只有一颗按钮），随机限制反而是涌现创意的来源。正在学 Godot 的同学，把每月的 GWJ 当作业截止日——比自学计划表的完成率高得多。参考来源：Godot Wild Jam 官网。" }
    ] },
    { id: "en-monogame-386-preview", category: "engine", subcategory: "版本发布", title: "MonoGame 3.8.6-preview.2 发布：C# 开源引擎（星露谷同款技术栈）推进 3.8.6", summary: "MonoGame 发布 3.8.6-preview.2（9 月 30 日 preview.1 之后一周内连推两版）——《星露谷物语》同款 C# 开源框架的 3.8.6 线进入密集预览期。", source: "GitHub（MonoGame/MonoGame）", date: "2026-10-02", url: "https://github.com/MonoGame/MonoGame/releases/tag/v3.8.6-preview.2", image: "https://opengraph.githubassets.com/fd43d50fbf5d4c703dc908702295b3b98a48e3e48df043087c4021b11ec1edd3/MonoGame/MonoGame/releases/tag/v3.8.6-preview.2", badge: "版本发布", badgeType: "engine", readTime: "3 分钟", hotScore: 69, tags: ["MonoGame", "C#", "开源引擎", "版本发布"], content: [
      { title: "版本要点", type: "list", items: ["3.8.6-preview.2 发布，距 preview.1 仅一周；", "MonoGame：星露谷物语、Celeste 同款 C# 开源框架；", "3.8.6 线进入密集预览，正式版临近。"] },
      { title: "笔者观察", type: "text", text: "MonoGame 的定位一直很清晰：不要编辑器，只要一个可靠的 C# 游戏框架——这恰恰是『想理解游戏是如何被框架组装起来的』的最好学习环境。星露谷的成功证明了这条极简路线的天花板。学完 C# 基础后想脱离大引擎裸写的同学，从这里起步最合适。参考来源：GitHub。" }
    ] },
    { id: "en-flame3d-032", category: "engine", subcategory: "版本发布", title: "Flame 3D v0.3.2 发布：Flutter 游戏生态的 3D 扩展持续进化", summary: "Flutter 游戏引擎 Flame 的 3D 扩展 flame_3d 发布 v0.3.2，同日还有 v0.3.1——Flutter 生态进军 3D 游戏的脚步没有停，跨应用与游戏的开发体验正在被打通。", source: "GitHub（flame-engine/flame）", date: "2026-10-02", url: "https://github.com/flame-engine/flame/releases/tag/flame_3d-v0.3.2", image: "https://opengraph.githubassets.com/aaf5f92f89d699ae5acd536b092d2a60c3235c3eaf3eabd0fa7e88663dc46ee4/flame-engine/flame/releases/tag/flame_3d-v0.3.2", badge: "版本发布", badgeType: "engine", readTime: "3 分钟", hotScore: 64, tags: ["Flame", "Flutter", "3D", "版本发布"], content: [
      { title: "版本要点", type: "list", items: ["flame_3d v0.3.2 与 v0.3.1 同日发布；", "Flame 是 Flutter 生态最主流的游戏引擎；", "3D 扩展仍处早期，接口变动频繁属正常阶段。"] },
      { title: "笔者观察", type: "text", text: "Flame 3D 的目标用户其实很明确：已有 Flutter 应用想加游戏化模块的团队——品牌互动、营销小游戏这类需求。对想接『小游戏外包』的同学，Flutter + Flame 的组合在小游戏市场（尤其休闲、超休闲）正在成为新选项，值得关注。参考来源：GitHub。" }
    ] },
    { id: "en-playcanvas-223", category: "engine", subcategory: "版本发布", title: "PlayCanvas 引擎 v2.23.0 发布：WebGL/WebGPU 开源引擎保持高频迭代", summary: "WebGPU 时代的热门开源引擎 PlayCanvas 发布 v2.23.0（距上一版仅三天）——浏览器端 3D 游戏与可视化场景下，它与 Three.js 的双雄格局愈发稳固。", source: "GitHub（playcanvas/engine）", date: "2026-10-01", url: "https://github.com/playcanvas/engine/releases/tag/v2.23.0", image: "https://opengraph.githubassets.com/30d04db1d26f5ec24ea47f93ec10755f7eb538b3d43f50bd44a94286d557fdad/playcanvas/engine/releases/tag/v2.23.0", badge: "版本发布", badgeType: "engine", readTime: "3 分钟", hotScore: 66, tags: ["PlayCanvas", "WebGPU", "开源引擎", "Web 游戏"], content: [
      { title: "版本要点", type: "list", items: ["v2.23.0 发布，距 v2.22.6（9/28）仅三天；", "PlayCanvas 引擎：MIT 协议的 WebGL/WebGPU 引擎；", "高频小版本迭代是 Web 引擎生态的典型节奏。"] },
      { title: "笔者观察", type: "text", text: "Web 游戏引擎的三天一版迭代速度，本质是浏览器能力（WebGPU）快速演进倒逼的。数媒技同学前端课学的 WebGL 知识在这里可以直接复用——『网页里跑 3D』的岗位需求（电商展示、虚拟展厅、营销互动）一直存在且在增长，PlayCanvas + Three.js 是这条线的入门双选择。参考来源：GitHub。" }
    ] },
    { id: "en-tic80-130", category: "engine", subcategory: "版本发布", title: "TIC-80 1.3.0 发布：假想主机的官方大版本——240×136 像素里的完整开发环境", summary: "TIC-80（fantasy console）发布 1.3.0 大版本：这台『240×136 像素、16 色』的假想主机自带代码编辑器、像素画板与音效器，是学习『在极限约束下做完整游戏』的官方工具链。", source: "GitHub（nesbox/TIC-80）", date: "2026-10-04", url: "https://github.com/nesbox/TIC-80/releases/tag/v1.3.0", image: "https://opengraph.githubassets.com/2a49853a026612a49c1422be6d87878348f7a311c30c72152c931f0efe49bc80/nesbox/TIC-80/releases/tag/v1.3.0", badge: "版本发布", badgeType: "engine", readTime: "4 分钟", hotScore: 71, tags: ["TIC-80", "fantasy console", "像素游戏", "版本发布"], content: [
      { title: "版本要点", type: "list", items: ["TIC-80 1.3.0 大版本发布（距 1.2.0 仅半个月）；", "假想主机规格：240×136 显示、16 调色板、内置代码/精灵/音效编辑器；", "支持 Lua 等多种脚本语言，社区版免费。"] },
      { title: "笔者观察", type: "text", text: "TIC-80 和 PICO-8 代表一种被验证有效的学习路径：在约束里学会完整游戏开发。240×136 的画布逼你把精力全放在玩法与手感上——给被『3A 画面焦虑』绑架的新手一句忠告：先在 TIC-80 里做完三个游戏，你对『游戏是怎么组成的』的理解会超过大部分半途而废的 3D 项目。参考来源：GitHub。" }
    ] },
    { id: "en-gdevelop-56283", category: "engine", subcategory: "版本发布", title: "GDevelop 5.6.283 发布：无代码开源引擎的高频小版本节奏", summary: "开源无代码游戏引擎 GDevelop 发布 5.6.283（9 月 29 日）——『不会编程也能做游戏』路线的代表项目，事件系统驱动的开发方式对零基础入门者极其友好。", source: "GitHub（4ian/GDevelop）", date: "2026-09-29", url: "https://github.com/4ian/GDevelop/releases/tag/v5.6.283", image: "https://opengraph.githubassets.com/3a31bd8a55e42b130e746f90014ce1f444d7f4e652ff067f4f6515f628dc89ec/4ian/GDevelop/releases/tag/v5.6.283", badge: "版本发布", badgeType: "engine", readTime: "3 分钟", hotScore: 63, tags: ["GDevelop", "无代码", "开源引擎", "版本发布"], content: [
      { title: "版本要点", type: "list", items: ["v5.6.283 发布，9 月内已有 282、283 两个版本；", "GDevelop：开源无代码游戏引擎，事件系统驱动；", "导出目标覆盖桌面、移动与 Web。"] },
      { title: "笔者观察", type: "text", text: "无代码引擎常被程序员鄙视，但它的真实用户是策展、教育、互动叙事这些『需要游戏但不雇佣程序员』的场景——这本身是一个正在增长的就业面。给完全零代码基础的转专业同学：GDevelop 或 Construct 是建立『游戏开发全局观』的最低成本入口。参考来源：GitHub。" }
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
      { title: "笔者观察", type: "text", text: "与上周美光『缺货到 2028』的表态连读，这是一条正在展开的硬件通胀线的两个切面。对学生群体的实际结论：今年下半年有装机计划的，整机配置单里内存先买；已经在用的机器把『低配可跑』做成毕设的验收标准，反而是最稳妥的策略。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "in-vampire-crawlers-lessons", category: "industry", subcategory: "开发复盘", title: "《吸血鬼幸存者》如何变成《Vampire Crawlers》：基于他人 IP 做衍生游戏的六条经验", summary: "Nosebleed Interactive 的 Andreas Firnigl 撰文复盘《Vampire Crawlers》开发全程：酒吧原型、共享规则、最后一刻的改动——基于 Poncle 爆款 IP 做衍生游戏的六条一手经验。", source: "GamesIndustry.biz", date: "2026-10-02", url: "https://www.gamesindustry.biz/how-vampire-survivors-became-vampire-crawlers-six-lessons-from-building-a-game-based-on-another-developers-ip-1", image: "https://assetsio.gnwcdn.com/vampire-crawlers_16_9.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发复盘", badgeType: "business", readTime: "8 分钟", hotScore: 78, tags: ["Vampire Survivors", "衍生游戏", "IP 合作", "开发复盘"], content: [
      { title: "复盘要点", type: "list", items: ["Nosebleed Interactive 分享基于 Poncle IP 开发衍生作的六条经验；", "流程细节：酒吧里的原型讨论、与 IP 方共享规则、临门改动；", "核心命题：怎么在他人 IP 的约束里保住自己的创作空间。"] },
      { title: "笔者观察", type: "text", text: "『基于他人 IP 做游戏』正在成为中小团队的重要生存策略——比原创省一半的用户获取，比外包有创作权。这篇的六条经验里最值得划线的是关于规则共享的部分：IP 合作的谈判要点不是分成比例，而是『哪些核心规则不许动』的边界先谈清楚。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-ff7-revelation-disc", category: "industry", subcategory: "开发访谈", title: "《最终幻想7：启示录》总监：『我尽了最大努力』为游戏争取完整光盘版", summary: "《最终幻想7：启示录》总监 Naoki Hamaguchi 向 Eurogamer 透露，他『尽了最大努力』为游戏争取完整光盘版发行——在大厂普遍拥抱全数字化的当下，制作人对实体介质的坚持显得尤为罕见。", source: "Eurogamer", date: "2026-10-03", url: "https://www.eurogamer.net/final-fantasy-7-revelation-naoki-hamaguchi-disc-release-physical-media", image: "https://assetsio.gnwcdn.com/final-fantasy-7-revelation-gameplay-screen-1.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发访谈", badgeType: "business", readTime: "5 分钟", hotScore: 77, tags: ["最终幻想7", "SE", "实体介质", "数字化"], content: [
      { title: "访谈要点", type: "list", items: ["总监 Naoki Hamaguchi 自述为完整光盘版『尽了最大努力』；", "背景：行业加速转向全数字化发行；", "制作线与商业线在实体介质上的分歧被公开化。"] },
      { title: "笔者观察", type: "text", text: "把这条与上周索尼调研、GI.biz 评论放在一起，实体介质议题已经形成了完整的三方叙事：平台（调研）→ 媒体（定调）→ 制作人（挽留）。制作人公开『为光盘抗争』，说明内部确实存在真实的路线分歧，而非公关话术。收藏向玩家的光盘情绪，正在变成产品决策变量。参考来源：Eurogamer。" }
    ] },
    { id: "g-gore-interview", category: "games", subcategory: "开发访谈", title: "《战争机器：E-Day》开发组谈血浆：『粉丝对暴力已经脱敏』——所以我们要下猛料", summary: "E-Day 开发团队接受 Eurogamer 采访，解释为何在新作里大举加码暴力表现：『我们觉得粉丝对暴力已经有些脱敏了』——于是团队在血浆与断肢效果上做了大投资，而且『奇怪地奏效了』。", source: "Eurogamer", date: "2026-10-03", url: "https://www.eurogamer.net/we-felt-that-fans-were-getting-a-bit-desensitised-to-the-violence-gears-of-war-e-day-devs-made-a-big-investment-in-gore-and-weirdly-it-works", image: "https://assetsio.gnwcdn.com/Eday-chainsaw.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发访谈", badgeType: "games", readTime: "5 分钟", hotScore: 79, tags: ["战争机器", "E-Day", "暴力表现", "玩家心理"], content: [
      { title: "访谈要点", type: "list", items: ["团队判断：系列老玩家对标准暴力表现已经脱敏；", "应对：在血浆、断肢等表现层面加大技术投入；", "结论：『weirdly it works』——这一激进选择在试玩反馈中被验证。"] },
      { title: "笔者观察", type: "text", text: "『脱敏 → 加码』是长线系列ip的宿命循环，但 E-Day 团队把话说破并把它当设计目标来执行，反而显出坦诚。对做动作/战斗反馈设计的同学，这条的技术要点是：暴力表现的本质是『打击感的放大器』，血浆粒子、镜头震动与音效的同步精度，比血浆量本身更决定手感。参考来源：Eurogamer。" }
    ] },
    { id: "g-dynasty-warriors-interview", category: "games", subcategory: "开发访谈", title: "《真三国无双》制作人陡红明：宁愿做新作，也不做重制版", summary: "Omega Force 制作人陡红明（Tomohiko Sho）接受 Eurogamer 采访时明确表态：比起重制版，团队更愿意把资源投入全新作品——在重制潮的背面，给出了一份来自『无双』工厂的路线声明。", source: "Eurogamer", date: "2026-10-04", url: "https://www.eurogamer.net/dynasty-warriors-tomohiko-sho-sequels-not-remasters", image: "https://assetsio.gnwcdn.com/ss_7aa2b9e95e7fd430a64edcbd66cbb66617b6b4f3.1920x1080.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发访谈", badgeType: "games", readTime: "4 分钟", hotScore: 74, tags: ["真三国无双", "Omega Force", "重制版", "新作开发"], content: [
      { title: "访谈要点", type: "list", items: ["制作人陡红明表态：宁可做新作，不做重制；", "背景：行业正处重制/复刻的黄金潮（见本周 Capcom 报道）；", "Omega Force 选择把资源押在系列的正统演进上。"] },
      { title: "笔者观察", type: "text", text: "本周行业新闻里出现了两条相反的路线：Capcom 押注重制交汇（见 10-02 头条），Omega Force 拒绝重制。两条路线都对，区别只在 IP 资产的新旧与团队能力结构——这正好是『游戏商业案例分析』的绝佳对比素材，写行业观察报告的同学可以把两者做成一组对照。参考来源：Eurogamer。" }
    ] },
    { id: "g-nivalis-now-playing", category: "games", subcategory: "体验观察", title: "一周后回看《Nivalis Nights》：Eurogamer 编辑的赛博朋克生活模拟上手记", summary: "Eurogamer 发布《Nivalis Nights》上手体验：在体素赛博朋克城里开拉面店、结交住客的『生活模拟』部分广受好评，而作为《Cloudpunk》精神续作的城市漫游氛围也得以延续。", source: "Eurogamer", date: "2026-10-04", url: "https://www.eurogamer.net/nivalis-nights-now-playing", image: "https://assetsio.gnwcdn.com/nivalis-nights-header-brighter.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "体验观察", badgeType: "games", readTime: "4 分钟", hotScore: 72, tags: ["Nivalis Nights", "ION LANDS", "生活模拟", "赛博朋克"], content: [
      { title: "体验要点", type: "list", items: ["生活模拟玩法：经营拉面店 + 与城市住客建立关系；", "体素赛博朋克的视觉延续《Cloudpunk》的城市气质；", "上周发售（9/29），愿望单破百万的兑现之作。"] },
      { title: "笔者观察", type: "text", text: "《Nivalis Nights》把『开一家小店』做成了赛博朋克叙事的锚点——宏大反乌托邦背景下的日常经营，这个反差正是它从 13 万愿望单滚到 100 万的内容策略。做叙事型模拟经营的同学可以记下这个公式：大世界给氛围，小店给情感锚点。参考来源：Eurogamer。" }
    ] },
    { id: "g-enshrouded-10-oct15", category: "games", subcategory: "发售前瞻", title: "《Enshrouded》确认 10 月 15 日推出 1.0 正式版：两年半抢先体验的毕业典礼", summary: "Keen Games 确认体素生存游戏《Enshrouded》将于 10 月 15 日结束两年半的抢先体验，推出 1.0 正式版——登陆 Steam 与 PS5，Xbox 版计划 2027 年春季跟进。", source: "Steam 商店页 / Keen Games", date: "2026-10-04", url: "https://store.steampowered.com/app/1203620/Enshrouded/", image: "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/1203620/60e46c05fe4ca9a8b930919d8c4f73b25df09c1f/capsule_616x353.jpg?t=1790934459", badge: "发售前瞻", badgeType: "games", readTime: "4 分钟", hotScore: 76, tags: ["Enshrouded", "Keen Games", "生存游戏", "抢先体验毕业"], content: [
      { title: "前瞻要点", type: "list", items: ["1.0 正式版定档 10 月 15 日；", "登陆 Steam 与 PS5，Xbox 版预计 2027 年春季；", "此前已在抢先体验阶段运营两年半以上。"] },
      { title: "笔者观察", type: "text", text: "『EA 两年半毕业』是个值得研究的节奏样本：太早转正会暴露内容空洞，太晚则热度耗尽——Enshrouded 选择在内容体量与稳定性都到位后转正，同时砍掉 Xbox 版保证双端质量。做抢先体验运营的同学记住这个三角形：内容完成度、平台数量、时间窗口，三者只能同时保两个。参考来源：Steam 商店页。" }
    ] },
    { id: "g-eg-upcoming-2026", category: "games", subcategory: "发售日历", title: "Eurogamer 2026 全年发售日历（持续更新版）：Q4 大作排队图", summary: "Eurogamer 维护的 2026 全年游戏发售日历持续更新中——Q4 的排期密度肉眼可见地爆炸：E-Day、影之刃零、Enshrouded 1.0 与 11 月的 GTA6 挤在同一季度。", source: "Eurogamer", date: "2026-10-04", url: "https://www.eurogamer.net/upcoming-video-games-2026-releases", image: "https://assetsio.gnwcdn.com/2026-game-release-schedule-header-featuring-ditto-mario-lego-batman-007-leon.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "发售日历", badgeType: "games", readTime: "4 分钟", hotScore: 67, tags: ["发售日历", "2026", "Q4", "档期"], content: [
      { title: "日历要点", type: "list", items: ["Eurogamer 全年发售日历，随官方定档持续更新；", "Q4 排期：E-Day（10/6）、影之刃零（10/29）、Enshrouded 1.0（10/15）等；", "11 月 GTA6 前后的档期博弈仍在动态变化。"] },
      { title: "笔者观察", type: "text", text: "收藏这种『活日历』的价值在于观察档期变化本身：哪些游戏敢跟 GTA6 同月、哪些临时跳票，都是发行商对自家产品信心的一手数据。把 10 月这页截图存档，年底对照实际成绩，你会得到一份免费的行业信心指数报告。参考来源：Eurogamer。" }
    ] }
  ]
}
