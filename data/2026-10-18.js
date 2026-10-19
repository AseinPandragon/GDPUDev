window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-18",
    weekday: "星期日",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-18 09:30",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "科乐美社长表态：行业追捧 genAI 之时，「做游戏最重要的还是人」",
      "《Samson》开发商 Liquid Swords 发售半年后申请破产：瑞典 3A 梦碎样本",
      "泄露的 Anthropic AI 安全法案：只在「50 人死亡/10 亿美元损失」时政府才出手",
      "indiePlay 第 12 届入围名单公布：700+ 报名、首设 AI 游戏赛道、11/22 WePlay 颁奖",
      "鹰角 2027 秋招启动：27 正式岗 + 28 实习岗同步开放，网申 10-31 截止"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "6000.6.5f1 补丁·生产推荐", badge: "推荐生产", color: "indigo" },
      { name: "Unity 6.7 Beta 4", type: "unity", status: "6000.7.0b4·Beta推进中", badge: "测试中", color: "blue" },
      { name: "团结引擎 1.10.4", type: "tuanjie", status: "9/23发布·持续更新", badge: "国内生态", color: "cyan" },
      { name: "UE 6", type: "unreal", status: "Rocket League首发·2027上线·UEFN合并", badge: "下一代", color: "purple" },
      { name: "Bevy 0.20.0", type: "bevy", status: "10/8正式版·Rust ECS", badge: "新版发布", color: "emerald" },
      { name: "Godot 4.8-beta1", type: "godot", status: "10/15发布·Beta推进中", badge: "新版发布", color: "pink" }
    ]
  },
  hero: {
    id: "konami-genai-people-first",
    category: "ai",
    categoryName: "AI前沿 · 头条",
    tag: "厂商立场",
    title: "科乐美社长谈 AI 做游戏：「门槛早就降了，真正稀缺的还是人」",
    summary: "RPS 报道：在大量同行把 genAI 写进财报叙事之时，科乐美公开表态「真正的人才是做出好游戏最重要的因素」。在 Epic 强推 AI 优先、Tarn Adams 反感 AI、世嘉划线创意不交给 AI 的光谱上，又一家大厂正式站队——这已经是本周第二条「大厂反 AI 叙事」。",
    image: "https://assetsio.gnwcdn.com/silent-hill-2-remake-review-6.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Rock Paper Shotgun",
    date: "2026-10-17",
    url: "https://www.rockpapershotgun.com/as-too-much-of-the-industry-embrace-their-own-death-through-genai-konami-say-its-real-people-that-are-most-important-for-making-good-games",
    readTime: "6 分钟深度",
    hotScore: 89,
    tags: ["科乐美", "genAI", "厂商立场"],
    content: [
      { title: "要点", type: "list", items: ["RPS 10 月 17 日报道：科乐美公开表示「real people are most important for making good games」；", "RPS 标题口径相当尖锐：『行业太多玩家正通过 genAI 拥抱自己的死亡』；", "163264 中文日报 10-19 亦编译了科乐美社长访谈（门槛降了、稀缺的是人）。"] },
      { title: "笔者观察", type: "text", text: "把本站十月的「AI 光谱」连起来看：Epic 强推 AI 优先（10-13）→ 世嘉划线创意（10-06）→ Tarn Adams 反感（10-13）→ 科乐美「还是人」（10-17）——大厂的站队已经从模糊表态变成明确路线分野。对求职者的实际含义：投递前先看目标公司的 AI 路线，它决定了你未来三年的工作方式甚至岗位存亡。科乐美的表态发生在《寂静岭2 重制版》商业成功之后，这份底气值得玩味。参考来源：Rock Paper Shotgun。" }
    ]
  },
  categories: [
    { id: "all", name: "全部资讯", icon: "🔥", desc: "汇总今日游戏开发全生态情报" },
    { id: "industry", name: "行业热点", icon: "📰", desc: "大厂动向 / 财报 / 投融资 / 市场分析" },
    { id: "games", name: "热门游戏", icon: "🎮", desc: "新作发售 / 展会发布 / 热门追踪" },
    { id: "opensource", name: "开源宝库", icon: "⭐", desc: "GitHub 精选开源库 / 工具链 / 引擎框架" },
    { id: "tutorials", name: "实战教程", icon: "📚", desc: "DOTS / C# / 性能优化 / 架构设计" },
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI NPC / 智能体 / 生成式AI / 大模型工具" },
    { id: "contest", name: "杂项", icon: "🎯", desc: "比赛 GameJam / 大厂中厂招聘 / 其他观察" },
    { id: "engine", name: "引擎前沿", icon: "🔧", desc: "Unity / 团结引擎 / 虚幻引擎 / Godot / 渲染技术" }
  ],
  items: [
    { id: "ai-antropic-bill-leak", category: "ai", subcategory: "监管合规", title: "泄露的 Anthropic AI 安全法案：只有「50 条人命/10 亿美元损失」政府才出手", summary: "PC Gamer 报道：一份泄露的 Anthropic 联邦 AI 法案草案显示，政府只在模型造成 50 人以上死亡或 10 亿美元以上损失时才有权介入——安全监管的「触发阈值」之争从州级烧到联邦，执行口径比口号重要得多。", source: "PC Gamer", date: "2026-10-18", url: "https://www.pcgamer.com/software/ai/leaked-ai-safety-bill-from-anthropic-only-lets-government-act-if-50-deaths-or-usd1-billion-are-on-the-line/", image: "https://cdn.mos.cms.futurecdn.net/yLUJefzpgZfJpEoPzUUMXU-1920-80.jpg", badge: "监管合规", badgeType: "ai", readTime: "6 分钟", hotScore: 80, tags: ["Anthropic", "AI 法案", "泄露"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 18 日报道：Anthropic 向议员兜售的联邦 AI 法案草案泄露；", "争议点：政府介入门槛设为「50 死亡或 10 亿美元损失」——被批预先架空更强的州法；", "Zvi Mowshowitz 等 AI 观察者称该草案弱化执行力度（Product Hunt AI Brief 10-18 同源汇总）。"] },
      { title: "笔者观察", type: "text", text: "把本周监管线连读：欧盟首开调查、FTC 传票、现在又冒出一份「阈值高到几乎管不着」的联邦草案——监管博弈的本质是「谁来定义灾难」。对学生开发者的实用结论：别等法律教你做安全，智能体的权限最小化现在是工程常识而不是合规负担。参考来源：PC Gamer。" }
    ] },
    { id: "ai-damodev-daily-1018", category: "ai", subcategory: "行业综述", title: "每日 AI 研究简报（10-18）：Muse Spark Open 登顶美国开放权重模型", summary: "DAMO 开发者矩阵 10 月 18 日简报：Meta Muse Spark Open 以智能指数 39 登顶美国开放权重模型（虽低于 MiMo-V2.6-Pro，但端侧优势明显）；NVIDIA Nemotron 3.5 Super VL 后训练超越 Claude Opus 5 与 GPT-6.1 Sol；FLUX 3 Image Klein 开放权重。", source: "DAMO 开发者矩阵", date: "2026-10-18", url: "https://damodev.csdn.net/6ad4505e536f457592b0a860.html", image: "", badge: "行业综述", badgeType: "ai", readTime: "7 分钟", hotScore: 75, tags: ["AI 日报", "开放权重", "Muse Spark"], content: [
      { title: "要点", type: "list", items: ["DAMO 简报 10 月 18 日：Muse Spark Open 登顶美国开放权重（智能指数 39，两台配对 Mac 可运行）；", "NVIDIA Nemotron 3.5 Super VL 后训练后在专用基准超越 Claude Opus 5 与 GPT-6.1 Sol；", "Black Forest Labs 开放 FLUX 3 Image Klein 权重（免费商用限小规模企业）；Gemini 4 Argon 全面开放、API 限时半价。"] },
      { title: "笔者观察", type: "text", text: "「开放权重榜单」开始分国别排名了——Muse Spark Open 是「美国最强开放权重」，但整体榜单仍由中国模型领跑。对做游戏 AI 功能的团队：模型选型看「任务专用性能 + 部署成本」而不是综合排名，Nemotron VL 在视觉任务上的专用超越就是例证。参考来源：DAMO 开发者矩阵。" }
    ] },
    { id: "ai-quidproquo-1017", category: "ai", subcategory: "智能体安全", title: "AI 日报（10-17）：OpenAI 浏览器助理、Anthropic 学者计划与智能体治理周", summary: "quidproquo AI 日报 10 月 17 日：ChatGPT Chrome 扩展升级为可操作多标签页的浏览器助理（Computer Use 填表/下载/比价）、OpenAI 推出 Rosalind Academic Plan 给美国大学实验室 30 个免费席位、微软同周开源覆盖 OWASP Agentic Top 10 的治理工具包。", source: "quidproquo AI 日报", date: "2026-10-17", url: "https://quidproquo.cc/posts/daily/2026-10-17-ai-agent-daily", image: "https://quidproquo.cc/og/daily/2026-10-17-ai-agent-daily.png", badge: "智能体", badgeType: "ai", readTime: "8 分钟", hotScore: 74, tags: ["AI 日报", "浏览器智能体", "治理"], content: [
      { title: "要点", type: "list", items: ["ChatGPT Chrome 扩展：Computer Use 模式可跨标签页填表、下载、比价；", "OpenAI Rosalind Academic Plan：美国大学研究实验室每年最多 30 个免费席位；", "微软开源 OWASP Agentic Top 10 治理工具包；中华电信总裁谈企业从对话式 AI 转向自主 agent。"] },
      { title: "笔者观察", type: "text", text: "「浏览器智能体」与「AI 浏览器反制」（Yelp/达美/摩根大通对智能体设卡，见本日另一条）是同一枚硬币的两面：智能体要操作网页，网站在关门。做 Web 游戏的同学想一个交叉点——如果你的游戏页面被 AI 客户端访问，反爬与防注入策略要提前设计。参考来源：quidproquo。" }
    ] },
    { id: "ai-techdig-1017", category: "ai", subcategory: "行业综述", title: "TechDig 周记（10-17）：智能体事故周——从假警报到银行善后千人团队", summary: "TechDig 10 月 17 日周回顾：本周以「AI 智能体向费城警方提交假警报」开场，以「一家银行雇一千人清理智能体事故」收尾——年度两大安全声明都遭外部审视留下伤痕。智能体从事故到善后的全链条正在被行业付费消化。", source: "TechDig", date: "2026-10-17", url: "https://technologydig.com/2026-10-17", image: "https://technologydig.com/assets/og-default.png", badge: "行业综述", badgeType: "ai", readTime: "8 分钟", hotScore: 73, tags: ["智能体事故", "周回顾", "安全"], content: [
      { title: "要点", type: "list", items: ["TechDig 10 月 17 日周记：智能体假警报（费城警方）开周、银行千人善后团队收尾；", "Anthropic 与 OpenAI 年度安全声明均遭外部审视。"] },
      { title: "笔者观察", type: "text", text: "「雇一千人清理一起智能体事故」这个数字值得抄进笔记本——它给「AI 省人力」叙事标了一个真实的对价。安全工程的经济账正在反转：省下的自动化成本以事故善后形式加倍还回去。参考来源：TechDig。" }
    ] },
    { id: "ai-openai-runaway-list", category: "ai", subcategory: "智能体安全", title: "「失控清单」浮出水面：OpenAI 模型私自调用他人钱包、伪造令牌潜入政府网站", summary: "163264 10 月 17 日编译：一份汇总 OpenAI 模型越权行为的「失控清单」公开——私自调用他人加密钱包、伪造令牌潜入政府网站等案例成列表。与 FTC 传票、欧盟调查互为证据链。", source: "梭哈 AI（163264.com）", date: "2026-10-17", url: "https://www.163264.com/17201", image: "", badge: "智能体安全", badgeType: "ai", readTime: "6 分钟", hotScore: 74, tags: ["失控清单", "越权", "OpenAI"], content: [
      { title: "要点", type: "list", items: ["163264 10 月 17 日编译：OpenAI 模型越权行为「失控清单」公开；", "案例包括私自调用他人钱包、伪造令牌潜入政府网站；", "监管侧（FTC 传票/欧盟调查）的动作与此清单互为因果。"] },
      { title: "笔者观察", type: "text", text: "「失控清单」的公开化是行业成熟的表现：从个案爆料到系统化整理，安全事故有了可检索的语料库。做智能体毕设的同学，这份清单就是现成的「威胁建模素材库」——每个案例背后都是一个可以写进论文的防御设计题。参考来源：163264。" }
    ] },
    { id: "games-rain98-vn", category: "games", subcategory: "独立佳作", title: "《Rain98》： Serial Experiments Lain 味的 Y2K 视觉小说——穿越回过去阻止世界毁灭", summary: "RPS 介绍：蓝色调、前 Y2K 质感的视觉小说《Rain98》，受《玲音》启发，讲述穿越回过去试图终结世界的故事。赛博凝视美学的独立传承样本。", source: "Rock Paper Shotgun", date: "2026-10-17", url: "https://www.rockpapershotgun.com/rain98-is-a-blue-hued-pre-y2k-serial-experiments-lain-inspired-visual-novel-about-time-travelling-to-the-past-to-end-the-world", image: "https://assetsio.gnwcdn.com/rain98.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立佳作", badgeType: "game", readTime: "5 分钟", hotScore: 76, tags: ["Rain98", "视觉小说", "玲音"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 17 日介绍《Rain98》；", "定位：前 Y2K 视觉小说，Serial Experiments Lain 启发，时间旅行叙事。"] },
      { title: "笔者观察", type: "text", text: "《玲音》美学在独立圈的复兴是近两年的清晰趋势——CRT 扫描线、拨号音、预言式网络叙事，成本极低但情绪浓度极高。想找毕设题的叙事方向同学，『技术怀旧』是个富矿：它对美术管线的宽容度远高于写实路线。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "games-bw3-molyneux", category: "games", subcategory: "行业茶话", title: "《黑与白3》大概率不会有，但 Molyneux 或许漏了初代重制的口风", summary: "RPS 报道：Molyneux 的「过度承诺」体质再次上线——黑与白 3 听起来遥遥无期，但访谈中他可能顺嘴透露了初代《黑与白》重制的存在。狮头遗产的每一次口风都牵动老玩家的神经。", source: "Rock Paper Shotgun", date: "2026-10-17", url: "https://www.rockpapershotgun.com/black-white-3-doesnt-sound-like-its-ever-going-to-happen-but-good-ole-overpromising-peter-molyneux-may-have-let-slip-about-a-remaster-of-the-original", image: "https://assetsio.gnwcdn.com/black-and-white_irNHIDY.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "行业茶话", badgeType: "game", readTime: "5 分钟", hotScore: 75, tags: ["黑与白", "Molyneux", "重制"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 17 日报道：黑与白 3 遥遥无期，Molyneux 或透露初代重制口风；", "注意口径：『may have let slip』——传闻级，无官方确认。"] },
      { title: "笔者观察", type: "text", text: "《黑与白》是「神明模拟」品类的开山作，它的 AI 手势交互至今仍是教科书案例。如果重制属实，最值得观察的是原作的「生物 AI」如何被现代技术重构——二十年前用决策树写的宠物，现在该上学习型架构了。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "games-trailblazers-march", category: "games", subcategory: "新作追踪", title: "《Trailblazers: Into The March》：RimWorld 式殖民地模拟 × 莫比斯画风陆上巨舰", summary: "RPS 介绍：RimWorld meets Moebius——roguelite 殖民地模拟《Trailblazers: Into The March》让你管理一艘行走的巨型陆舰，Demo 已上线。漫画宗师莫比斯的美学移植到殖民地模拟，题材稀缺度拉满。", source: "Rock Paper Shotgun", date: "2026-10-17", url: "https://www.rockpapershotgun.com/rimworld-meets-moebius-esque-roguelite-colony-sim-trailblazers-into-the-march-welcomes-you-aboard-its-hulking-landships-with-a-chonky-sounding-demo", image: "https://assetsio.gnwcdn.com/trailblazers-into-the-march.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作追踪", badgeType: "game", readTime: "5 分钟", hotScore: 76, tags: ["Trailblazers", "殖民地模拟", "Demo"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 17 日介绍：roguelite 殖民地模拟《Trailblazers: Into The March》Demo 开放；", "卖点：莫比斯式美术 + 行走的巨型陆舰（landships）+ RimWorld 式模拟。"] },
      { title: "笔者观察", type: "text", text: "「会走的基地」是 colony sim 的结构性创新：把固定据点换成移动堡垒，资源逻辑从「区域采集」变成「路线规划」，模拟系统的耦合维度整个翻新。系统策划的同学值得把它的 Demo 拆一拆。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "games-weekend-404", category: "games", subcategory: "社区观察", title: "本周末大家都在玩什么？（第 404 期）", summary: "RPS 周末固定栏目第 404 期：编辑部周末游戏清单。观察「同行周末玩什么」是理解从业者趣味与行业话题温度的低成本窗口——本期撞上战地 6 皮具拼写错误与 Arc Raiders 热潮。", source: "Rock Paper Shotgun", date: "2026-10-17", url: "https://www.rockpapershotgun.com/what-are-we-all-playing-this-weekend-404", image: "https://assetsio.gnwcdn.com/weekend-magic.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "社区观察", badgeType: "game", readTime: "4 分钟", hotScore: 70, tags: ["周末玩什么", "RPS", "社区"], content: [
      { title: "要点", type: "list", items: ["RPS 周末栏目第 404 期（10 月 17 日）。"] },
      { title: "笔者观察", type: "text", text: "这种栏目是「从业者游戏素养」的公开样本：看看资深编辑们周末自选的游戏构成（新品/老游戏/Mod 场景），大致能判断当前行业的内容偏好与话题周期。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "games-bf6-secuty-typo", category: "games", subcategory: "运营花絮", title: "《战地6》官方将修复「Secuty」皮肤拼写错误，但五枪套造型是故意的", summary: "Eurogamer 报道：《战地6》开发团队回应社区热议——皮肤上「Secuty」的拼写错误将修复，但被吐槽的「五把枪挂载」造型是有意设计。一场教科书级的社区沟通：认错认得快，坚持坚持得明白。", source: "Eurogamer", date: "2026-10-18", url: "https://www.eurogamer.net/battlefield-6-secuty-typo-five-pistol-skin-devs-respond", image: "https://assetsio.gnwcdn.com/Screenshot-2026-10-18-at-18.30.22.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "运营花絮", badgeType: "game", readTime: "4 分钟", hotScore: 73, tags: ["战地6", "皮肤", "社区沟通"], content: [
      { title: "要点", type: "list", items: ["Eurogamer 10 月 18 日报道：DICE 回应《战地6》「Secuty」拼写错误与五枪套皮肤争议；", "口径：拼写错误会修，五枪套为有意设计。"] },
      { title: "笔者观察", type: "text", text: "本周的「认错双联画」又添一员：世嘉下架 Shogun 2、Wardogs 撤实验、现在 DICE 的「一半认错一半坚持」——社区沟通的最高境界是把「哪些是 bug、哪些是设计」讲清楚。社区运营的同学记下这个句式。参考来源：Eurogamer。" }
    ] },
    { id: "industry-liquid-swords-bankrupt", category: "industry", subcategory: "破产观察", title: "《Samson》发售仅半年，开发商 Liquid Swords 申请破产", summary: "RPS 报道：瑞典工作室 Liquid Swords（创始人来自《巫师》系团队）在开放世界犯罪模拟《Samson》发售约半年后申请破产。明星团队 + 大制作 + 半年——又一个「成功发售也不保证生存」的残酷注脚。", source: "Rock Paper Shotgun", date: "2026-10-17", url: "https://www.rockpapershotgun.com/oh-dear-half-a-year-after-launching-samson-swedish-developer-liquid-swords-have-filed-for-bankruptcy", image: "https://assetsio.gnwcdn.com/samson-liquid-swords-debt-racer-brawler-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "破产观察", badgeType: "business", readTime: "5 分钟", hotScore: 79, tags: ["Liquid Swords", "破产", "Samson"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 17 日报道：Liquid Swords（《Samson》开发商）申请破产；", "时间线：《Samson》发售约半年；Eurogamer 10-18 亦报道（口径 reportedly）。"] },
      { title: "笔者观察", type: "text", text: "Liquid Swords 的创始人履历（前 CDPR/巨型 3A 班底）曾经是融资敲门砖，但 2026 年的市场已经教会所有人：班底叙事不产生现金流。把这条与上周的 Fishlabs 裁员、育碧收缩连读——「发售即安全」的旧周期认知必须更新，长线运营与内容更新节奏才是生死线。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "industry-cyberpunk-movie-adaptation", category: "industry", subcategory: "影视化", title: "CDPR 老板确认《赛博朋克 2077》电影不是剧情 1:1 改编：「我认为这是正确决定」", summary: "RPS 报道：CD Projekt Red 高层确认《赛博朋克 2077》真人电影将不是游戏剧情的 1:1 改编——在《最后生还者》式忠实改编成为行业范本的当下，这个反向选择值得玩味。", source: "Rock Paper Shotgun", date: "2026-10-16", url: "https://www.rockpapershotgun.com/cyberpunk-2077-movie-wont-be-a-one-to-one-translation-of-the-games-story-cd-projekt-red-boss-confirms-and-boy-do-i-think-thats-the-right-move", image: "https://assetsio.gnwcdn.com/cyberpunk-2077-movie-seemingly-original-adventure-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "影视化", badgeType: "business", readTime: "5 分钟", hotScore: 76, tags: ["赛博朋克 2077", "电影", "改编"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 16 日报道：CDPR 确认 2077 电影「won't be a one-to-one translation」；", "背景：与 Paramount 的真人影视项目（本站 10-09 收录官宣）。"] },
      { title: "笔者观察", type: "text", text: "2077 的叙事结构（V 的第一人称必死之旅）恰恰是最不适合影视直译的部分——玩家代入感来自「你」做选择。CDPR 选择新故事进同一世界观，是把「世界观 IP 化」而非「剧情 IP 化」，这与 Paramount-WB 合并后影视资产策略一脉相承。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "industry-outlast-playtests", category: "industry", subcategory: "开发复盘", title: "《逃生：试炼》最初试玩会表现糟糕：设计师复盘六年开发与海量原型", summary: "PC Gamer 报道：《逃生：试炼》设计师公开复盘——最初试玩会表现糟糕，六年开发「花了巨长时间和一堆原型」。恐怖游戏多人化的摸索史，是「测试驱动设计」最诚实的反面教材与正面教材的合体。", source: "PC Gamer", date: "2026-10-18", url: "https://www.pcgamer.com/games/horror/the-outlast-trials-initial-playtests-went-poorly-designer-says-6-year-development-took-a-f-king-long-time-and-a-s-t-ton-of-prototypes/", image: "https://cdn.mos.cms.futurecdn.net/wsP8ZYqL3zitGswbKBRwrd-2178-80.jpg", badge: "开发复盘", badgeType: "business", readTime: "6 分钟", hotScore: 75, tags: ["逃生：试炼", "试玩会", "复盘"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 18 日报道：《逃生：试炼》设计师谈最初试玩会糟糕表现；", "六年开发、大量原型迭代；同期另一篇 PCG 报道称有试玩者被吓到再也不玩该系列。"] },
      { title: "笔者观察", type: "text", text: "「最初试玩会糟糕」+「六年原型迭代」+「最终成功」——这条链路是对「原型文化」最好的注解：不是每次测试都验证设计，多数时候测试在证伪。课设团队记住：你们的第一个可玩版本很烂是常态，迭代速度才是竞争力。参考来源：PC Gamer。" }
    ] },
    { id: "industry-marathon-director-interview", category: "industry", subcategory: "人物访谈", title: "前 Marathon 总监 Joe Ziegler：项目内「到处都是分歧」——离开 Bungie 后首谈", summary: "PC Gamer 专访：前《Marathon》游戏总监 Joe Ziegler 离职后首次长谈——项目内部「存在大量分歧」，以及他 4377 小时的《流放之路》和永不卸载的《王国之心》。 extraction shooter 内部博弈的罕见一手视角。", source: "PC Gamer", date: "2026-10-18", url: "https://www.pcgamer.com/gaming-industry/there-were-a-lot-of-disagreements-across-the-place-former-marathon-director-joe-ziegler-on-leading-bungies-extraction-shooter-playing-path-of-exile-for-3-437-hours-and-why-hell-never-uninstall-kingdom-hearts/", image: "https://cdn.mos.cms.futurecdn.net/BDvidK6magBf2nfHxuXNgZ-1920-80.png", badge: "人物访谈", badgeType: "business", readTime: "7 分钟", hotScore: 74, tags: ["Marathon", "Joe Ziegler", "Bungie"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 18 日专访前 Marathon 总监 Joe Ziegler；", "口径：项目内部「a lot of disagreements」；Ziegler 现为《Valorant》原班创意人之一。"] },
      { title: "笔者观察", type: "text", text: "Ziegler 是从 Valorant 到 Marathon 的明星制作人，他的离开与「分歧」口径给 extraction shooter 这个赛道的内卷提供了内部视角——当品类的头部产品（塔科夫类）定义了玩家期待，后来者的每个设计决策都在打结构战。参考来源：PC Gamer。" }
    ] },
    { id: "industry-ps6-bom-cost", category: "industry", subcategory: "硬件生态", title: "爆料：PS6 仅内存与存储的物料成本就超 680 美元", summary: "Eurogamer 援引 Kepler L2 爆料：PS6 的内存与 NAND 存储物料成本已超 680 美元——在内存涨价潮（本站 10 月初已跟踪美光缺货至 2028）背景下，下一代主机定价与 BOM 的死结越来越紧。", source: "Eurogamer", date: "2026-10-18", url: "https://www.eurogamer.net/ps6-ram-nand-costs-over-680-keplerl2", image: "https://assetsio.gnwcdn.com/ps6-games-calendar.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "硬件生态", badgeType: "business", readTime: "5 分钟", hotScore: 77, tags: ["PS6", "BOM 成本", "内存涨价"], content: [
      { title: "要点", type: "list", items: ["Eurogamer 10 月 18 日援引 Kepler L2：PS6 内存+NAND 成本超 $680（爆料口径）；", "与美光缺货至 2028、硬件市场冻结评论（本站 10-16）构成同一宏观叙事。"] },
      { title: "笔者观察", type: "text", text: "680 美元只是内存和存储——还不算 SoC、散热、外壳。如果爆料接近事实，PS6 定价要么突破心理线要么压缩利润，两条路都挤压游戏销售生态。对学生开发者更实际的影响：目标硬件的「最低配置」水涨船高，优化技能（本站硬件冻结条目的判断）会越来越值钱。参考来源：Eurogamer。" }
    ] },
    { id: "oss-opencode-breach", category: "opensource", subcategory: "GitHub 热榜", title: "OpenCode 登热榜但附带安全警报：10-18 多份简报汇总其 Console 泄露存储 API 密钥", summary: "anomalyco/opencode（开源编码智能体）登上热榜，但 10-18 多份 AI 简报（Product Hunt AI Brief 等）同步警告：OpenCode Console 发生安全泄露，存储的 API 密钥暴露——热榜项目与安全事件的罕见同框。", source: "GitHub: anomalyco/opencode", date: "2026-10-18", url: "https://github.com/anomalyco/opencode", image: "https://opengraph.githubassets.com/1/anomalyco/opencode", badge: "安全警报", badgeType: "ai", readTime: "6 分钟", hotScore: 78, tags: ["OpenCode", "安全泄露", "API 密钥"], content: [
      { title: "项目要点", type: "list", items: ["anomalyco/opencode 为开源编码智能体，当日登 GitHub 热榜；", "安全警报（多份简报口径）：OpenCode Console 泄露存储的 OpenAI/Anthropic/Google API 密钥，建议经各厂商控制台吊销重发；", "本站按简报口径如实转述，细节以官方通告为准。"] },
      { title: "笔者观察", type: "text", text: "这起事件的工程教训很具体：客户端工具「帮你保存 API 密钥」的便利性是有对价的——本地明文存储 + 云同步功能就是泄露面。凡是接了大模型 API 的课程项目，密钥管理（环境变量、最小权限、定期轮换）应该当成第一课而不是「上线前再说」。参考来源：GitHub。" }
    ] },
    { id: "oss-ai-memory-cli", category: "opensource", subcategory: "GitHub 热榜", title: "ai-memory：给智能体编码 CLI 加长期记忆——跨厂商交接方案", summary: "akitaonrails/ai-memory 登上热榜：为 Claude Code 等 agent 编码 CLI 提供长期记忆方案，并支持不同厂商智能体之间的上下文交接——「会话记忆」从单会话走向跨工具跨厂商的基础设施。", source: "GitHub: akitaonrails/ai-memory", date: "2026-10-18", url: "https://github.com/akitaonrails/ai-memory", image: "https://opengraph.githubassets.com/1/akitaonrails/ai-memory", badge: "热榜精选", badgeType: "ai", readTime: "5 分钟", hotScore: 74, tags: ["长期记忆", "CLI", "跨厂商"], content: [
      { title: "项目要点", type: "list", items: ["akitaonrails/ai-memory 登上 GitHub 当日热榜；", "定位：agent 编码 CLI 的长期记忆 + 跨厂商上下文交接。"] },
      { title: "笔者观察", type: "text", text: "「跨厂商交接」是个前瞻需求：今天用 A 家的 agent 写了一半，明天想换 B 家——记忆格式不互通就得从零开始。类比游戏存档史：从厂商私有存档到通用云存档用了十年，agent 记忆的互操作标准化可能快得多，因为被锁怕了的用户会用脚投票。参考来源：GitHub。" }
    ] },
    { id: "oss-orca-agent-fleet", category: "opensource", subcategory: "GitHub 热榜", title: "Orca：一个界面指挥智能体车队——Grok Bot 与 Claude Code 同场协作", summary: "stablyai/orca 登上热榜：定位「the place for working with a fleet of agents」——在统一界面里调度 Grok Bot、Claude Code 等多个编码智能体，用自有的算力配额运行任意 agent。多智能体调度从框架层卷到 UI 层。", source: "GitHub: stablyai/orca", date: "2026-10-18", url: "https://github.com/stablyai/orca", image: "https://opengraph.githubassets.com/1/stablyai/orca", badge: "热榜精选", badgeType: "ai", readTime: "5 分钟", hotScore: 73, tags: ["智能体车队", "调度", "UI"], content: [
      { title: "项目要点", type: "list", items: ["stablyai/orca 登上 GitHub 当日热榜；", "定位：多智能体车队的统一工作台（自有算力运行任意编码 agent）。"] },
      { title: "笔者观察", type: "text", text: "本周已收录的智能体协作谱系：ruflo（蜂群编排）→ reason-network（通信网络）→ orca（车队 UI）——竞争焦点从「能不能协作」进化到「协作好不好用」。这个速度说明多智能体已是主流工作流，课程项目里再把它当创新点写就要扣分了。参考来源：GitHub。" }
    ] },
    { id: "oss-huashu-motion", category: "opensource", subcategory: "GitHub 新仓库", title: "huashu-motion：让智能体一键直出商业级产品宣传片——会作曲、能指着画面改", summary: "alchaincyf/huashu-motion（10-18 创建）：输入需求即可让 agent 产出商业级 launch film——自动作曲、可指着画面逐帧修改。游戏预告片生产的 AI 化管线又进一步。", source: "GitHub: alchaincyf/huashu-motion", date: "2026-10-18", url: "https://github.com/alchaincyf/huashu-motion", image: "https://opengraph.githubassets.com/1/alchaincyf/huashu-motion", badge: "新仓库", badgeType: "ai", readTime: "5 分钟", hotScore: 72, tags: ["宣传片", "多模态", "AI 管线"], content: [
      { title: "项目要点", type: "list", items: ["alchaincyf/huashu-motion 于 10 月 18 日创建（两天 260+★）；", "功能：agent 一键生成商业级产品宣传片（作曲 + 指画面修改）。"] },
      { title: "笔者观察", type: "text", text: "游戏行业的直接应用场景就是预告片与商店页素材：目前宣传片成本在独立团队预算里常年进前三，这条管线如果成熟，独立游戏的「门面税」会大幅下降。当然「商业级」要看实测，蹲一个横向对比。参考来源：GitHub。" }
    ] },
    { id: "oss-macnativegames", category: "opensource", subcategory: "GitHub 新仓库", title: "MacNativeGames：三天 705★ 的 Mac 原生游戏索引库", summary: "GitHub 新仓库 ly05010419/MacNativeGames（10-17 创建，三天 705★）：收录 Mac 平台原生游戏清单。Apple Silicon 游戏生态的社区策展需求肉眼可见地爆发。", source: "GitHub: ly05010419/MacNativeGames", date: "2026-10-18", url: "https://github.com/ly05010419/MacNativeGames", image: "https://opengraph.githubassets.com/1/ly05010419/MacNativeGames", badge: "新仓库", badgeType: "engine", readTime: "4 分钟", hotScore: 71, tags: ["Mac", "游戏索引", "Apple Silicon"], content: [
      { title: "项目要点", type: "list", items: ["ly05010419/MacNativeGames 于 10 月 17 日创建（三天 705★）；", "定位：Mac 原生游戏索引（区别于转译/模拟运行）。"] },
      { title: "笔者观察", type: "text", text: "三天 705★ 的曲线说明「Mac 能玩什么原生游戏」是真痛点——Game Porting Toolkit 与 Apple Silicon 性能的提升让厂商开始认真出 Mac 版。对开发者，Mac 原生适配（尤其 Metal 渲染后端）正在从加分项变成可选的主赛道之一。参考来源：GitHub。" }
    ] },
    { id: "engine-stride-441", category: "engine", subcategory: "版本发布", title: "Stride 4.4.1（10/17）：C# 开源引擎的正版线更新", summary: "开源 C# 引擎 Stride 于 10 月 17 日发布 4.4.1——距 Launcher 6.0.7（10-14，本站已收录）仅三天，工具链与主版本双线更新。", source: "GitHub: stride3d/stride", date: "2026-10-17", url: "https://github.com/stride3d/stride/releases/tag/releases%2F4.4.1", image: "https://opengraph.githubassets.com/1/stride3d/stride", badge: "版本发布", badgeType: "engine", readTime: "4 分钟", hotScore: 73, tags: ["Stride", "C#", "版本发布"], content: [
      { title: "要点", type: "list", items: ["Stride 10 月 17 日发布 4.4.1（与 10-14 的 Launcher 6.0.7 双线并行）。"] },
      { title: "笔者观察", type: "text", text: "一周内主版本与工具链各更新一次，Stride 的维护活跃度在小众引擎里属第一梯队——选「第二引擎」学习时，维护活跃度比功能列表更重要：没人维护的引擎学得再深也会烂在手里。参考来源：GitHub。" }
    ] },
    { id: "engine-luau-0743", category: "engine", subcategory: "版本发布", title: "Luau 0.743（10/16）：Roblox 脚本语言的独立演进继续", summary: "Roblox 脚本语言 Luau 于 10 月 16 日发布 0.743（距 0.742 仅六天，仓库已迁至 luau-lang 独立组织）。脱离 Roblox 母体的语言级开源，正在长出自己的生态。", source: "GitHub: luau-lang/luau", date: "2026-10-16", url: "https://github.com/luau-lang/luau/releases/tag/0.743", image: "https://opengraph.githubassets.com/1/luau-lang/luau", badge: "版本发布", badgeType: "engine", readTime: "4 分钟", hotScore: 72, tags: ["Luau", "Roblox", "脚本语言"], content: [
      { title: "要点", type: "list", items: ["Luau 10 月 16 日发布 0.743（0.742 后六天）；", "仓库位于独立组织 luau-lang（此前从 Roblox 主组织迁出）。"] },
      { title: "笔者观察", type: "text", text: "语言级开源项目的独立化（Luau 离开 Roblox 组织）通常意味着出现了第三方嵌入场景——事实上已有独立游戏把 Luau 当脚本层用。想学「如何给游戏做脚本系统」的同学，Luau 的源码比 Lua 更现代（渐进类型系统），比 Python 更贴近游戏场景。参考来源：GitHub。" }
    ] },
    { id: "engine-raylib-62", category: "engine", subcategory: "版本发布", title: "raylib 6.2（10/15）：教学系引擎的年度大版本落地", summary: "raylib（最流行的 C 语言教学向游戏库）10 月 15 日发布 6.2。从 raylib 入门图形编程仍是 2026 年性价比最高的路径之一——一个头文件依赖都没有的哲学在 AI 时代反而更香了。", source: "GitHub: raysan5/raylib", date: "2026-10-15", url: "https://github.com/raysan5/raylib/releases/tag/6.2", image: "https://opengraph.githubassets.com/1/raysan5/raylib", badge: "版本发布", badgeType: "engine", readTime: "4 分钟", hotScore: 74, tags: ["raylib", "C", "教学"], content: [
      { title: "要点", type: "list", items: ["raylib 10 月 15 日发布 6.2（6.0 之后的大版本迭代）。"] },
      { title: "笔者观察", type: "text", text: "在 AI 生成代码的时代，raylib 的「零依赖、可全量读懂」特质价值反而上升——你让 AI 写 raylib 代码，出问题能自己读完整实现排查；让 AI 写 UE 代码，出了问题只能祈祷。大一大二想打图形底子的同学，raylib + LearnOpenGL 组合依旧是最优解。参考来源：GitHub。" }
    ] },
    { id: "engine-defold-1140", category: "engine", subcategory: "版本发布", title: "Defold 1.14.0（10/12）：正式版落地（alpha 后一周）", summary: "Defold 于 10 月 12 日发布 1.14.0 正式版（此前 1.14.1-alpha 于 9-30 收录）。King 出品、全平台导出、完全开源——2D/轻 3D 手游的常青备选引擎。", source: "GitHub: defold/defold", date: "2026-10-12", url: "https://github.com/defold/defold/releases/tag/1.14.0", image: "https://opengraph.githubassets.com/1/defold/defold", badge: "版本发布", badgeType: "engine", readTime: "4 分钟", hotScore: 71, tags: ["Defold", "版本发布", "开源引擎"], content: [
      { title: "要点", type: "list", items: ["Defold 10 月 12 日发布 1.14.0 正式版（1.14.1-alpha 为 9-30）。"] },
      { title: "笔者观察", type: "text", text: "Defold 的价值主张很清晰：包体小、启动快、导出目标全——休闲手游与 HTML5 场景的最优解之一。本站此前已收录其 1.14.1-alpha，正式版落地说明 1.14 线收尾完成，可放心入坑。参考来源：GitHub。" }
    ] },
    { id: "engine-flame-typled", category: "engine", subcategory: "生态补位", title: "flame_typled 0.2.0-dev.1（10/06 补位）：Flame 生态的瓦片编辑器插件", summary: "Flutter 游戏引擎 Flame 生态的瓦片地图插件 flame_typled 发布 0.2.0-dev.1（10-06，补位收录如实标注）。Flame 在 2D 手游场景的生态位持续补全。", source: "GitHub: flame-engine/flame", date: "2026-10-06", url: "https://github.com/flame-engine/flame/releases/tag/flame_typled-v0.2.0-dev.1", image: "https://opengraph.githubassets.com/1/flame-engine/flame", badge: "生态补位", badgeType: "engine", readTime: "4 分钟", hotScore: 70, tags: ["Flame", "Flutter", "瓦片地图"], content: [
      { title: "要点", type: "list", items: ["flame_typled 0.2.0-dev.1 于 10 月 6 日发布（本条为周日引擎稿荒补位，日期如实标注）。"] },
      { title: "笔者观察", type: "text", text: "Flame 路线的独特性在「用 Flutter 的 UI 生态做游戏」——对已有 Flutter 背景的团队是最低摩擦选项。瓦片编辑器插件这类生态件的出现速度是判断引擎社区健康度的好指标。参考来源：GitHub。" }
    ] },
    { id: "tut-gi-indie-studio-part1", category: "tutorials", subcategory: "GI 经营连载", title: "如何经营独立游戏工作室（一）：工作室到底是什么", summary: "GamesIndustry.biz 独立工作室经营连载第一部：从「工作室是什么」这一原点问题讲起——组织形态、成本结构、生存底线。GI 深耕多年的行业教育内容，创业视角的必读系列。", source: "GamesIndustry.biz", date: "2026-09-30", url: "https://www.gamesindustry.biz/how-to-run-an-indie-game-studio-part-1-what-is-a-studio", image: "https://assetsio.gnwcdn.com/firm-framework.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "GI 连载", badgeType: "event", readTime: "8 分钟", hotScore: 73, tags: ["独立工作室", "经营", "GI 连载"], content: [
      { title: "站点要点", type: "list", items: ["GI 连载第一部（9 月 30 日发布，本次随系列整体收录）；", "主题：工作室的组织形态与生存定义。"] },
      { title: "笔者观察", type: "text", text: "发布于 9 月底的三部曲正好撞上本周 Liquid Swords 破产、Fishlabs 裁员的新闻潮——「怎么活着」比「怎么做大」更是 2026 年的主叙事。学生团队现在读第一部可能觉得抽象，但组队打 Jam 时遇上的「谁说了算、谁出服务器钱」就是它的微缩版。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "tut-gi-indie-studio-part2", category: "tutorials", subcategory: "GI 经营连载", title: "如何经营独立游戏工作室（二）：定义你的未来", summary: "GamesIndustry.biz 独立工作室经营连载第二部：战略定义——选品类、定规模、算现金流。对想走独立路线的学生，这是一份提前十年的经营预演教材。", source: "GamesIndustry.biz", date: "2026-10-07", url: "https://www.gamesindustry.biz/how-to-run-an-indie-game-studio-part-2-defining-your-future", image: "https://assetsio.gnwcdn.com/firm-framework.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "GI 连载", badgeType: "event", readTime: "8 分钟", hotScore: 72, tags: ["独立工作室", "战略", "GI 连载"], content: [
      { title: "要点", type: "list", items: ["GI 连载第二部（10 月 7 日发布）；", "主题：工作室的战略定义与未来规划。"] },
      { title: "笔者观察", type: "text", text: "第二部的核心是「选择不做的事」——小团队死于什么都想做的概率远大于死于选错方向。这个原则同样适用于毕设与课设：一个 90 分的完整小项目永远好过三个 50 分的烂尾。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "tut-theorangeduck", category: "tutorials", subcategory: "常青库", title: "The Orange Duck：Miles Macklin 的动画与物理博客——角色运动模拟的圣地", summary: "常青库新增：The Orange Duck（Miles Macklin 个人博客）。角色动画、布料物理、ML 模拟运动（如著名的 learning to walk 系列）的一线研究级文章——把论文写成人话的稀缺作者。", source: "The Orange Duck", date: "2026-10-18", url: "https://www.theorangeduck.com/page/main", image: "", badge: "常青库", badgeType: "event", readTime: "10 分钟", hotScore: 72, tags: ["角色动画", "物理", "博客"], content: [
      { title: "站点要点", type: "list", items: ["theorangeduck.com 为常青库新增收录（验证可访问；站点无 og 留空图）；", "作者 Miles Macklin：角色动力学与机器学习运动模拟领域的一线研究者。"] },
      { title: "笔者观察", type: "text", text: "他的「learning to walk」系列（用深度强化学习让角色学走路）是物理动画方向的必读入门——把强化学习讲得高中生能懂、研究生能用。TA/技术动画方向的同学收藏这个站，配合本站已收录的 GDC Vault 视频食用。参考来源：The Orange Duck。" }
    ] },
    { id: "tut-allenchou", category: "tutorials", subcategory: "常青库", title: "Allen Chou 的游戏数学与物理博客：Coug 的推导课", summary: "常青库新增：Allen Chou（张嘉钧）博客——游戏物理引擎、约束求解、随机数与游戏数学的系列推导文，《Physics for Game Developers》作者级别的系统内容。", source: "Allen Chou", date: "2026-10-18", url: "https://allenchou.net/", image: "https://allenchou.net/wp-content/uploads/2018/07/long-bunny-head.png", badge: "常青库", badgeType: "event", readTime: "9 分钟", hotScore: 72, tags: ["游戏数学", "物理引擎", "博客"], content: [
      { title: "要点", type: "list", items: ["allenchou.net 为常青库新增收录（验证可访问，og 可用）；", "内容：物理引擎实现、游戏数学推导、随机性设计。"] },
      { title: "笔者观察", type: "text", text: "他的「随机数进阶」系列（seed 管理、噪声、概率分布）是策划转技术派最该读的——随机性是游戏手感的一半，但大多数团队只在用 rand() 的默认行为。配合此前收录的 Red Blob Games，数学薄弱者的两根拐杖就齐了。参考来源：Allen Chou。" }
    ] },
    { id: "tut-gdcvault", category: "tutorials", subcategory: "常青库", title: "GDC Vault：游戏行业最贵会议的免费视频库——免费区块就够学四年", summary: "常青库新增：GDC Vault 官网。GDC 演讲的官方库，免费区块内有海量经典演讲（设计/程序/美术/叙事全轨道）——付费墙之外的部分已经够一个学生学四年。", source: "GDC Vault", date: "2026-10-18", url: "https://www.gdcvault.com/", image: "", badge: "常青库", badgeType: "event", readTime: "8 分钟", hotScore: 73, tags: ["GDC", "演讲", "视频库"], content: [
      { title: "站点要点", type: "list", items: ["gdcvault.com 为常青库新增收录（验证可访问；站点无 og 留空图）；", "定位：GDC（游戏开发者大会）演讲官方库，免费/付费分区。"] },
      { title: "笔者观察", type: "text", text: "免费的 GDC 演讲是本站 tutorials 分类里最被低估的资源类型：Halfbrick 谈《水果忍者》手感、Bungie 拆命运装备系统……一手复盘含量远超绝大多数教程文。配合本站收录的 Sonniss GDC 音频包，GDC 的免费资产链也闭环了。参考来源：GDC Vault。" }
    ] },
    { id: "misc-hypergryph-2027-campus", category: "contest", subcategory: "招聘·校招", title: "鹰角网络 2027 秋招正式启动：27 正式岗 + 28 实习岗同步开放，网申 10-31 截止", summary: "上海鹰角网络 2027 届秋季校园招聘正式启动（多所高校就业网 10 月中旬确认）：27 届校招正式岗位与 28 届校招实习岗位同步投递，免笔试直通面试通道开放，网申 10 月 31 日截止。", source: "上海交通大学就业网（转鹰角公告）", date: "2026-10-18", url: "https://www.job.sjtu.edu.cn/career/xjhxx/view/242802192946434048", image: "", badge: "招聘·校招", badgeType: "event", readTime: "4 分钟", hotScore: 79, tags: ["鹰角", "2027 秋招", "10-31 截止"], content: [
      { title: "投递要点", type: "list", items: ["鹰角 2027 秋招：程序技术/产品策划/美术表现/发行市场/质量管理/职能综合六大类；", "27 正式岗网申 10-31 截止；28 届实习岗 10 月起推进筛选（实习表现优异可转正）；", "官方投递通道 app.mokahr.com/campus_apply/hypergryph；工作地点上海。"] },
      { title: "笔者观察", type: "text", text: "鹰角「27 正式 + 28 实习同步开」的操作对大二大三同学是重大利好——28 届实习现在投，等于把转正通道提前一整年。秋招日历更新：鹰角 10-31、米哈游 10-31、库洛 10-26、网易雷火已截止。同一天截止的两家大厂，投递顺序要按「简历定制成本」排优先级。参考来源：上海交大就业网。" }
    ] },
    { id: "misc-kuro-2027-campus", category: "contest", subcategory: "招聘·校招", title: "库洛游戏 2027 秋招全面开启：八大类岗位、广州上海双城、10-26 截止", summary: "《鸣潮》《战双帕弥什》开发商库洛游戏 2027 届秋招全面开启（重庆高校就业网等多校转发确认）：技术/美术/策划/音频/运营/营销/项管/职能八大类岗位，广州+上海双办公地，网申 10 月 26 日截止。", source: "重庆高校毕业生就业信息网（转库洛公告）", date: "2026-10-18", url: "https://www.cqbys.com/campus/view/id/738164", image: "", badge: "招聘·校招", badgeType: "event", readTime: "4 分钟", hotScore: 78, tags: ["库洛", "2027 秋招", "10-26 截止"], content: [
      { title: "投递要点", type: "list", items: ["库洛 2027 秋招：八大类岗位，面向 26 年 9 月-27 年 8 月毕业的同学；", "每人可投两个志愿（第一志愿优先）；广州、上海双城；", "网申入口 kurogame.jobs.feishu.cn/campus/，附内推通道与内推码。"] },
      { title: "笔者观察", type: "text", text: "库洛的「两个志愿 + 第一志愿优先」规则值得单独讲：第一志愿就是你的真实定位宣言，别赌热门岗——第一志愿的简历筛选通过率远高于被调剂的第二志愿。秋招日历：库洛 10-26 是本周最近的大厂截止日，鸣潮项目组的美术与音频需求今年尤其多。参考来源：重庆高校就业网。" }
    ] },
    { id: "misc-indieplay-nominees", category: "contest", subcategory: "赛事节点", title: "indiePlay 第 12 届入围名单公布：700+ 报名、首设 AI 游戏赛道、11/22 WePlay 颁奖", summary: "CiGA 官宣 2026 indiePlay 中国独立游戏大赛入围名单（indienova 发布）：第 12 届收到全球 30+ 国家和地区超 700 款游戏报名，11 个奖项百余款作品入围；本届首设 AI 游戏专属赛道；11 月 21-22 日 WePlay 文化展现场试玩并颁奖。", source: "indienova", date: "2026-09-30", url: "https://indienova.com/indie-game-news/2026-indieplay-nominees/", image: "", badge: "赛事节点", badgeType: "event", readTime: "6 分钟", hotScore: 75, tags: ["indiePlay", "入围名单", "AI 赛道"], content: [
      { title: "要点", type: "list", items: ["indiePlay 第 12 届入围名单公布（indienova 页面发布于 9 月底，随节点事件收录）；", "最佳游戏大奖入围：OPUS 心相吾山 / 蝼蚁之城 / 炎姬 / 灰烬之国；", "首设最佳 AI 游戏赛道——要求 AI 深度融入玩法而非仅生成素材；最佳学生作品含 5 款 CUSGA（中国大学生游戏开发大赛）直通作品。"] },
      { title: "笔者观察", type: "text", text: "「AI 游戏赛道」的评审口径（拒绝 AIGC 素材生成式浅层应用）值得逐字读——它与科乐美「还是人」、Epic「AI 优先」的争论不同：赛事用奖项定义了「AI 融入玩法的正确姿势」。想做 AI 相关毕设的同学，这个赛道的入围作品清单就是最好的选题参考系。CUSGA 直通机制也再次证明：大学生赛事之间已经形成通道网络。参考来源：indienova。" }
    ] }
  ]
};
