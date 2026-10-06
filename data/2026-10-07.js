window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-07",
    weekday: "星期三",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-07 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "《战争机器：E-Day》今日发售：Game Pass 首日入库，难度体系为 2006 老兵留了硬核模式",
      "DirectX 官宣 Advanced Shader Delivery 随 E-Day 落地，并将成为 Windows 11 系统能力",
      "《Dizzy》回归高调宣称『用 AI 制作』，与强调『无 AI 复刻』的 Borderlands Online 同周对撞",
      "NPR：约一半美国成年人在用 AI 聊天机器人，玩家对 NPC 智能的预期被全社会推高",
      "DirectX Agility SDK 7.2.1 预览：Shader Model 6.10 新增 LinAlg，着色器里能做线性代数了"
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
    id: "gears-eday-launch-difficulty",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "今日发售",
    title: "《战争机器：E-Day》今日发售：难度体系前瞻——为 2006 年的老兵准备了硬核模式",
    summary: "The Coalition 的《战争机器：E-Day》今日（10 月 6 日）正式发售，Game Pass 首日入库。Eurogamer 前瞻了本作的完整难度体系：除常规分层外，还为系列老兵准备了接近 2006 年原版手感的硬核选项——一套游戏、两种叙事的玩家分层设计样本。",
    image: "https://assetsio.gnwcdn.com/gears-eday-difficulty.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Eurogamer / The Coalition",
    date: "2026-10-04",
    url: "https://www.eurogamer.net/gears-of-war-eday-difficulty-hardcore",
    readTime: "4 分钟深度",
    hotScore: 90,
    tags: ["战争机器", "E-Day", "难度设计", "Game Pass"],
    content: [
      { title: "前瞻要点", type: "list", items: ["《E-Day》今日正式发售，登陆 Xbox Series X|S 与 PC；", "Game Pass Ultimate / PC Game Pass 首日入库；", "难度体系分层覆盖入门到『回到 2006 年手感』的硬核区间；", "发售前夜的团队士气报道与评测好评形成复杂对照。"] },
      { title: "笔者观察", type: "text", text: "本周 E-Day 的报道矩阵（评测好评、血浆访谈、团队士气、难度前瞻）几乎是一份『3A 发售周』的全息切片。难度体系这条最值得做设计研究的同学细读：硬核模式服务于老玩家的情怀与传播，入门模式服务于 Game Pass 新玩家的留存——一套难度曲线同时服务两种商业叙事，这在订阅制时代会越来越常见。参考来源：Eurogamer。" }
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
    { id: "ai-sega-creative-ai-boundary", category: "ai", subcategory: "AI 政策", title: "SEGA 表态：游戏的『创意环节』不会交给 AI，但其他部门全面提效", summary: "SEGA 向媒体明确划分 AI 使用边界：创意开发环节不会交给 AI，但公司在效率类部门积极引入技术提效——大厂 AI 政策从『要不要用』进入『划线阶段』。", source: "GamesIndustry.biz", date: "2026-10-06", url: "https://www.gamesindustry.biz/sega-wont-entrust-the-creative-aspect-of-games-to-ai-but-is-using-tech-to-improve-efficiency-in-other-departments", image: "https://assetsio.gnwcdn.com/crazy-taxi-1.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "AI 政策", badgeType: "ai", readTime: "4 分钟", hotScore: 80, tags: ["SEGA", "AI 政策", "创意边界", "效率工具"], content: [
      { title: "表态要点", type: "list", items: ["SEGA 明确：游戏的创意环节不会委托给 AI；", "技术提效集中在创意之外的部门与流程；", "与本周 Capcom『用 AI 强化 RE Engine 的 QA 与调试』形成两种路线。"] },
      { title: "笔者观察", type: "text", text: "把本周两条新闻对照看：Capcom 说『AI 进管线』，SEGA 说『AI 别碰创意』——两家划线的位置不同，但都在划线。这说明行业已经过了『要不要用』的阶段，进入『在哪用、怎么用、如何向玩家交代』的精细治理期。对求职者的启示：面试时问清目标工作室的 AI 政策，已经是合理问题。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "ai-borderlands-online-no-genai", category: "ai", subcategory: "社区复刻", title: "被砍 MMO《Borderlands Online》复活且可玩了：社区团队强调『全程没用生成式 AI』", summary: "被取消的 MMO 衍生作《Borderlands Online》被民间团队复活并可再次游玩——团队特意强调复原过程『没有使用任何生成式 AI』。在 AI 争议密集的一周里，『无 AI』成了社区项目的荣誉勋章。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/cancelled-mmo-spin-off-borderlands-online-is-playable-once-again-and-the-team-behind-the-unofficial-project-thankfully-didnt-use-any-genai-to-get-it-running", image: "https://assetsio.gnwcdn.com/borderlands-online.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "社区复刻", badgeType: "ai", readTime: "4 分钟", hotScore: 78, tags: ["Borderlands Online", "社区复刻", "无 AI", "游戏保存"], content: [
      { title: "事件要点", type: "list", items: ["被取消的 MMO 衍生作《Borderlands Online》由民间团队复活；", "团队强调复原全程未使用生成式 AI；", "与本周 Dizzy『高调宣称用 AI』形成光谱两端。"] },
      { title: "笔者观察", type: "text", text: "本周 AI 话题光谱的两端同时出现：Dizzy 公开宣称『用 AI 制作』，Borderlands Online 复刻团队强调『没用 AI』——两种姿态都能赢得各自的受众。这说明『用不用 AI』已经从技术选择变成了定位选择。对做游戏保存方向的同学，民间复刻团队的技术与法律边界处理是极好的研究样本。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ai-dizzy-made-with-ai", category: "ai", subcategory: "AI 争议", title: "复古平台游戏《Dizzy》回归：原作者『非常乐意让你知道这是用 AI 做的』", summary: "经典平台游戏系列《Dizzy》宣布回归，原作者一反行业常态，主动高调宣传新作『由 AI 制作』——在生成式 AI 遭遇密集抵制的本周，这是一次罕见的高调逆行。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/retro-platformer-series-dizzy-is-back-for-a-new-game-from-its-original-creators-who-are-really-happy-for-you-to-know-its-made-with-ai", image: "https://assetsio.gnwcdn.com/Dizzy.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "AI 争议", badgeType: "ai", readTime: "4 分钟", hotScore: 77, tags: ["Dizzy", "AI 制作", "复古平台游戏", "开发者态度"], content: [
      { title: "事件要点", type: "list", items: ["经典系列《Dizzy》宣布推出新作；", "原作者主动、高调地宣称游戏由 AI 制作；", "与本周 Mod 社区、游戏保存圈的 AI 抵制情绪形成鲜明对照。"] },
      { title: "笔者观察", type: "text", text: "同一周里，Mod 作者自毁作品抗议 AI、复刻团队强调『无 AI』、而 Dizzy 原作者高调宣称『就是 AI 做的』——三种姿态同台，说明行业对 AI 的态度已经彻底分裂成定位问题而非技术问题。对观察者来说这是研究『开发者社区如何协商技术正当性』的活样本。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ai-npr-chatbots-midterms", category: "ai", subcategory: "AI 与社会", title: "NPR 调查：约一半美国成年人在用 AI 聊天机器人，有人靠它决定投给谁", summary: "NPR 报道：约一半美国成年人已在使用 AI 聊天机器人，42% 用它获取信息——在本届中期选举中，甚至有选民开始用 AI 帮自己决定投票方向，主流 AI 使用率跨过了社会临界点。", source: "NPR", date: "2026-10-05", url: "https://www.npr.org/2026/10/05/nx-s1-5977852/ai-chatbots-midterm-election", image: "https://npr.brightspotcdn.com/dims3/default/strip/false/crop/4032x2268+0+0/resize/1200x675!/quality/90/?url=http%3A%2F%2Fnpr-brightspot.s3.amazonaws.com%2F1d%2F24%2F06e374f74cf79267b73f8a94b73%2Fgettyimages-1349189316.jpg", badge: "AI 与社会", badgeType: "ai", readTime: "5 分钟", hotScore: 75, tags: ["NPR", "AI 聊天机器人", "使用率", "中期选举"], content: [
      { title: "调查要点", type: "list", items: ["约一半美国成年人已使用 AI 聊天机器人；", "42% 用它获取信息；", "中期选举中有选民尝试用 AI 辅助投票决策。"] },
      { title: "笔者观察", type: "text", text: "对游戏从业者这条的落点是『玩家预期』：当一半人口习惯向聊天机器人提问，游戏里的 NPC 若还只会播报三句固定台词，落差感会被无限放大。玩家对交互智能的容忍阈值正被全社会的 AI 使用率推高——这是每个叙事设计者都该写进需求文档的外部变量。参考来源：NPR。" }
    ] },
    { id: "ai-autotrust-decision-model", category: "ai", subcategory: "决策模型", title: "AutotrustJEV-27B-VL：一个『学会了做决策』的 27B 视觉语言模型", summary: "Hugging Face 社区发布 AutotrustJEV-27B-VL 的训练解析：一个以『决策』为核心训练目标的 27B 视觉语言模型——从『生成内容』到『做出判断』，模型能力分类正在出现新象限。", source: "Hugging Face Blog（Autotrust）", date: "2026-10-02", url: "https://huggingface.co/blog/autotrust/autotrustjev-27b-vl-a-decision-model-that-learned", image: "https://cdn-thumbnails.huggingface.co/social-thumbnails/blog/autotrust/autotrustjev-27b-vl-a-decision-model-that-learned.png", badge: "决策模型", badgeType: "ai", readTime: "6 分钟", hotScore: 71, tags: ["Autotrust", "决策模型", "27B", "视觉语言模型"], content: [
      { title: "技术要点", type: "list", items: ["27B 参数的视觉语言模型，训练目标聚焦『决策』；", "与本周 llama.cpp 的 Decision Models 方向互相印证；", "决策类模型是智能体安全框架的天然搭档。"] },
      { title: "笔者观察", type: "text", text: "把本周 AI 新闻串起来读会发现一个新象限：生成模型（写内容）、决策模型（做判断）、安全框架（划边界）正在分化成三个独立层。对想在游戏里用 AI 的开发者，这个分层很实用——NPC 对话用生成模型，难度调度用决策模型，权限用安全框架，各取所需。参考来源：Hugging Face Blog。" }
    ] },
    { id: "tu-raytracing-weekend", category: "tutorials", subcategory: "常青教程", title: "Ray Tracing in One Weekend：一个周末写完你的第一个光线追踪器（免费三部曲）", summary: "《Ray Tracing in One Weekend》三部曲完全免费在线：用不到一千行 C++ 从零写出支持软阴影、金属反射、景深的光线追踪器——图形学『从零造轮子』路线的黄金标准。", source: "raytracing.github.io（Peter Shirley 等）", date: "2026-10-07", url: "https://raytracing.github.io/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "6 分钟", hotScore: 73, tags: ["光线追踪", "图形学", "C++", "免费书籍"], content: [
      { title: "书籍要点", type: "list", items: ["三部曲：One Weekend（基础追踪器）→ The Next Week（加速与纹理）→ The Rest of Your Life（采样与积分）；", "全部代码开源，每一步都有可渲染的中间成果；", "不需要图形 API，纯 C++ 数学生成图片。"] },
      { title: "笔者观察", type: "text", text: "与本周巫师3 路径追踪的配置表连读：RTiOW 教你的正是路径追踪的原理层——读完三部曲再看 E-Day 的 PT 硬件门槛，你会明白那些数字背后在算什么。给图形学初学者的最佳路径依然是：先造一次轮子，再用别人的轮子。参考来源：raytracing.github.io。" }
    ] },
    { id: "tu-kenney-assets", category: "tutorials", subcategory: "免费资源", title: "Kenney.nl：4 万+ CC0 免费游戏资产——毕设美术资源的终极答案", summary: "Kenney.nl 提供超过 4 万个 CC0 协议游戏资产：2D/3D 模型、音效、UI 套件、粒子贴图——可商用、无需署名、风格统一，学生项目的资源库天花板。", source: "Kenney.nl", date: "2026-10-07", url: "https://kenney.nl/", image: "", badge: "免费资源", badgeType: "tutorial", readTime: "4 分钟", hotScore: 68, tags: ["免费素材", "CC0", "游戏资产", "毕设"], content: [
      { title: "站点要点", type: "list", items: ["4 万+ 资产全部 CC0：可商用、无需署名；", "覆盖 2D 精灵、3D 低模、UI 套件、音效音乐；", "风格体系统一，混用不违和。"] },
      { title: "笔者观察", type: "text", text: "CC0 对学生项目的意义是『法律安全感』：毕设展示、比赛投稿、甚至未来商业化都不会踩雷。给每个开始毕设的同学的标准动作：先去 Kenney 把 UI 与音效包下了，把有限的美术精力留给核心玩法的表达。参考来源：Kenney.nl。" }
    ] },
    { id: "tu-nature-of-code", category: "tutorials", subcategory: "常青教程", title: "The Nature of Code：把自然规律写成代码的免费书（p5.js 全彩新版）", summary: "Daniel Shiffman 的《The Nature of Code》新版免费在线：力与运动、粒子系统、自主智能体、细胞自动机、进化算法、神经网络——用 p5.js 把自然界的规律写成可运行代码。", source: "natureofcode.com（Daniel Shiffman）", date: "2026-10-07", url: "https://natureofcode.com/", image: "https://natureofcode.com/static/7dd3422c43faa1513528cd25636d5ef2d/377e4/hero.webp", badge: "常青教程", badgeType: "tutorial", readTime: "6 分钟", hotScore: 70, tags: ["模拟", "粒子系统", "自主智能体", "p5.js"], content: [
      { title: "书籍要点", type: "list", items: ["覆盖：向量与力、振荡、粒子系统、自主智能体、细胞自动机、分形、进化算法、神经网络；", "新版免费在线，配 p5.js 可运行示例；", "NYU ITP 课程教材，打磨十余年。"] },
      { title: "笔者观察", type: "text", text: "这本书是『游戏 AI 行为』与『程序化艺术』的共同源头：羊群算法、逃逸追逐、群体涌现——每个例子都能直接移植成 NPC 行为或视觉特效。做创新玩法或交互艺术的同学，每一章都是一个小毕设的种子。参考来源：natureofcode.com。" }
    ] },
    { id: "tu-gabriel-gambetta", category: "tutorials", subcategory: "常青教程", title: "Gabriel Gambetta：联机架构与图形学从零的两本免费书——多人游戏入门最佳路径", summary: "Gabriel Gambetta 的个人站有两本免费书：《Fast-paced multiplayer games》图解客户端预测与服务器权威，《Computer Graphics from Scratch》从像素写起光栅化——联机与渲染两条线的最佳免费入口。", source: "gabrielgambetta.com", date: "2026-10-07", url: "https://www.gabrielgambetta.com/", image: "", badge: "常青教程", badgeType: "tutorial", readTime: "5 分钟", hotScore: 69, tags: ["网络同步", "客户端预测", "图形学", "免费书籍"], content: [
      { title: "站点要点", type: "list", items: ["《Fast-paced multiplayer games》：客户端预测、服务器权威、延迟补偿图解系列；", "《Computer Graphics from Scratch》：从零实现光栅化与光线追踪；", "均免费在线，配可运行示例代码。"] },
      { title: "笔者观察", type: "text", text: "联机游戏的『玄学问题』在这本书里全都有名字：客户端预测、服务器回滚、延迟补偿。做毕设想加联机功能的同学，先读这套图解再写代码，能少走一个月弯路——尤其是『为什么我明明打中了』这种问题的答案都在第二卷。参考来源：gabrielgambetta.com。" }
    ] },
    { id: "contest-gamedevjs-winners", category: "contest", subcategory: "赛事动态", title: "Gamedev.js Jam 2026 获奖名单公布：第七届 Web 游戏开发 Jam 落幕", summary: "Gamedev.js 公布 Jam 2026 获奖名单——这个专注 Web 游戏开发的年度 Jam 已办到第七届，全部获奖作品可在线直接游玩，是学习『浏览器里能做出什么』的最佳观摩现场。", source: "Gamedev.js", date: "2026-10-06", url: "https://gamedevjs.com/competitions/gamedev-js-jam-2026-winners-announced/", image: "https://gamedevjs.com/wp-content/uploads/2026/05/jam26-featured.jpg", badge: "赛事动态", badgeType: "contest", readTime: "3 分钟", hotScore: 67, tags: ["Gamedev.js", "Game Jam", "Web 游戏", "获奖名单"], content: [
      { title: "赛事要点", type: "list", items: ["Gamedev.js Jam 2026 获奖名单公布；", "第七届年度 Web 游戏开发 Jam；", "全部获奖与参赛作品可在线直接游玩。"] },
      { title: "笔者观察", type: "text", text: "Web Jam 的作品『点开即玩』特性让它成为研究『玩法创意密度』的最佳语料库：没有下载门槛，评委与玩家的注意力都在玩法本身。想找毕设灵感或研究新兴机制的同学，把历届获奖作全部玩一遍，比读十篇玩法综述高效。参考来源：Gamedev.js。" }
    ] },
    { id: "contest-js13k-317-games", category: "contest", subcategory: "赛事资源", title: "js13kGames 2026 全部 317 件作品上线：13KB 限制下的创意全景图", summary: "Gamedev.js 汇总了 js13kGames 2026 的全部 317 件参赛作品——在『整个游戏不超过 13KB』的极限约束下，317 位开发者交出了 317 种对『游戏最小单位』的回答。", source: "Gamedev.js / js13kGames", date: "2026-09-21", url: "https://gamedevjs.com/competitions/all-317-games-from-js13kgames-2026/", image: "https://gamedevjs.com/wp-content/uploads/2026/09/js13kgames-2026-featured.jpg", badge: "赛事资源", badgeType: "contest", readTime: "4 分钟", hotScore: 65, tags: ["js13k", "极限开发", "HTML5", "作品集"], content: [
      { title: "资源要点", type: "list", items: ["js13kGames 2026 全部 317 件作品可在线游玩；", "规则：整个游戏（代码+资源）不超过 13KB；", "8 月 13 日开赛、9 月 13 日截止。"] },
      { title: "笔者观察", type: "text", text: "317 个样本同时摆在一起，是研究『约束如何催生创意』的最佳数据集：压缩技巧、程序化音频、极简 UI 各显神通。给想参加下一届（明年 8 月）的同学的建议：先把 317 个都玩一遍再做设计文档——约束的解法都在别人的作品里。参考来源：Gamedev.js。" }
    ] },
    { id: "contest-devgamm-awards", category: "contest", subcategory: "赛事动态", title: "DevGAMM Awards 2026 开放报名：10 万美金+ 奖池面向 AA 与独立开发者", summary: "DevGAMM Awards 2026 开放报名：奖池超过 10 万美元，面向 AA 与独立开发者的新作——东欧最大游戏行业活动的奖项赛道，提名与评审规则已在官网公开。", source: "DevGAMM 官网", date: "2026-10-06", url: "https://devgamm.com/awards2026/", image: "https://devgamm.com/awards2026/wp-content/uploads/2026/05/DevGAMM-Awards-2026-featured.jpg", badge: "赛事动态", badgeType: "contest", readTime: "3 分钟", hotScore: 66, tags: ["DevGAMM", "独立游戏", "奖项", "报名"], content: [
      { title: "赛事要点", type: "list", items: ["DevGAMM Awards 2026 开放报名；", "奖池超 10 万美元；", "面向 AA 与独立开发者的新作；", "评审规则与评委名单已在官网公开。"] },
      { title: "笔者观察", type: "text", text: "DevGAMM 对中文区开发者的意义常被低估：东欧市场的发行商与平台方都在这里集中出现，且报名门槛远低于 GDC 系活动。做 PC/主机方向的独立团队，把它加进年度参赛日历的成本几乎为零。参考来源：DevGAMM 官网。" }
    ] },
    { id: "tu-opengameart", category: "tutorials", subcategory: "免费资源", title: "OpenGameArt.org：社区维护的开源游戏素材库——CC 协议下的美术与音频宝库", summary: "OpenGameArt.org 是历史最悠久的开源游戏素材库之一：社区贡献的 2D/3D 美术、音效音乐全部采用 CC 协议——Kenney 之外的第二大素材来源，风格更多元。", source: "OpenGameArt.org", date: "2026-10-07", url: "https://opengameart.org/", image: "", badge: "免费资源", badgeType: "tutorial", readTime: "4 分钟", hotScore: 67, tags: ["免费素材", "CC 协议", "游戏美术", "音频"], content: [
      { title: "站点要点", type: "list", items: ["社区维护的开源游戏素材库，历史超十年；", "覆盖 2D/3D 美术、音效、音乐、字体；", "全部采用 CC 系协议（注意逐项确认署名要求）。"] },
      { title: "笔者观察", type: "text", text: "与 Kenney 的区别：OpenGameArt 风格更多元但协议不一（CC0/CC-BY/CC-BY-SA 混合）——使用前务必确认单项协议，CC-BY 需要署名。给毕设团队的建议：音频去 FreeSound 与 OpenGameArt，UI 去 Kenney，美术主风格尽量统一来源。参考来源：OpenGameArt.org。" }
    ] },
    { id: "en-dx-advanced-shader-delivery-eday", category: "engine", subcategory: "图形技术", title: "DirectX 官宣：Advanced Shader Delivery 随《战争机器：E-Day》落地，并将登陆 Windows 11", summary: "微软 DirectX 官方博客宣布：Advanced Shader Delivery（预编译着色器交付）已随《战争机器：E-Day》落地，并将作为系统级能力登陆 Windows 11——『着色器编译卡顿』这个 PC 游戏老大难终于有官方解法。", source: "DirectX 官方博客", date: "2026-10-01", url: "https://devblogs.microsoft.com/directx/advanced-shader-delivery-available-for-gears-of-war-e-day-and-coming-soon-across-windows-11/", image: "https://devblogs.microsoft.com/directx/wp-content/uploads/sites/42/2026/09/gow1.webp", badge: "图形技术", badgeType: "engine", readTime: "6 分钟", hotScore: 85, tags: ["DirectX", "Advanced Shader Delivery", "着色器编译", "E-Day"], content: [
      { title: "技术要点", type: "list", items: ["Advanced Shader Delivery 已随《战争机器：E-Day》落地；", "该能力将作为系统级特性登陆 Windows 11；", "配套：Agility SDK 7.2.1 预览与 SM 6.10 新特性同步推进；", "AMD 已加入公开预览（此前已与 NVIDIA 合作）。"] },
      { title: "笔者观察", type: "text", text: "着色器编译卡顿（进游戏前那几分钟风扇狂转）是 PC 移植被骂了十年的老问题，微软终于把它做成系统级服务：预编译好的着色器随游戏分发、跨厂商 GPU 通用。这对独立开发者是纯利好——不用自己造预编译管线，接系统方案即可。做 PC 移植方向的同学，这篇官方博客值得全文精读。参考来源：DirectX 官方博客。" }
    ] },
    { id: "en-dx-timing-capture-library", category: "engine", subcategory: "开发工具", title: "微软发布 DxTimingCaptureLibrary：给图形管线装上『秒表』", summary: "微软 DirectX 团队发布 DxTimingCaptureLibrary——一个面向图形管线的计时捕获库，让开发者能精确测量渲染各阶段的耗时，与 PIX 等分析工具配合使用。", source: "DirectX 官方博客", date: "2026-10-01", url: "https://devblogs.microsoft.com/directx/introducing-dxtimingcapturelibrary/", image: "https://devblogs.microsoft.com/directx/wp-content/uploads/sites/42/2026/08/word-image-13979-1.webp", badge: "开发工具", badgeType: "engine", readTime: "5 分钟", hotScore: 72, tags: ["DirectX", "性能分析", "计时捕获", "官方工具"], content: [
      { title: "库要点", type: "list", items: ["DxTimingCaptureLibrary：面向图形管线的计时捕获库；", "可精确测量渲染各阶段耗时，与 PIX 等工具配合；", "与 Agility SDK 7.2.1 预览同期发布。"] },
      { title: "笔者观察", type: "text", text: "性能优化的第一定律是『先测量再优化』，但图形管线的测量一直比 CPU 侧难——GPU 时间戳查询的粒度和噪音让很多人直接放弃。微软把这个环节做成官方库，等于把『凭感觉优化』变成『看表优化』。做 PC 渲染优化的同学，这是本周最值得动手试的工具。参考来源：DirectX 官方博客。" }
    ] },
    { id: "en-dx-autosr-intel", category: "engine", subcategory: "图形技术", title: "Auto SR 上英特尔 Core Ultra Series-3：AI 超分的三方混战正式开打", summary: "微软 DirectX 团队宣布 Auto SR（自动超分）登陆英特尔 Core Ultra Series-3 处理器——继 NVIDIA DLSS、AMD FSR、索尼 PSSR 之后，英特尔入局，AI 超分的跨厂商兼容层战争全面展开。", source: "DirectX 官方博客", date: "2026-09-23", url: "https://devblogs.microsoft.com/directx/autosr-on-intel/", image: "https://devblogs.microsoft.com/directx/wp-content/uploads/sites/42/2025/12/ultimate.webp", badge: "图形技术", badgeType: "engine", readTime: "4 分钟", hotScore: 73, tags: ["Auto SR", "英特尔", "AI 超分", "DirectX"], content: [
      { title: "技术要点", type: "list", items: ["Auto SR 支持扩展至英特尔 Core Ultra Series-3；", "与本周索尼把 AI 超分下放初代 PS5 相互印证；", "微软试图用系统层方案统一跨厂商的 AI 超分接入。"] },
      { title: "笔者观察", type: "text", text: "把本周的超分新闻排成一列：索尼下放 PS5、微软 Auto SR 上 Intel、NVIDIA DLSS 4.5 路径追踪——AI 超分已经从『旗舰专属』变成『全平台标配』。对独立开发者这意味着一件事：接入厂商无关的系统级超分接口（如 DirectX 的方案）比逐家适配 DLSS/FSR/XeSS 更省力，且覆盖面更大。参考来源：DirectX 官方博客。" }
    ] },
    { id: "en-dx-agility-sdk-721", category: "engine", subcategory: "版本发布", title: "DirectX Agility SDK 7.2.1 预览发布：Shader Model 6.10 新增 LinAlg 能力", summary: "微软发布 Agility SDK 7.2.1 预览版，Shader Model 6.10 新增 LinAlg（线性代数）内建能力——着色器里可以直接做矩阵运算，GPU 上的机器学习推理又近了一步。", source: "DirectX 官方博客", date: "2026-10-06", url: "https://devblogs.microsoft.com/directx/announcing-agilitysdk-721-preview-and-more-shader-model-6-10-features/", image: "https://devblogs.microsoft.com/directx/wp-content/uploads/sites/42/2017/01/XII_BLACK_1kx1k.jpg", badge: "版本发布", badgeType: "engine", readTime: "5 分钟", hotScore: 71, tags: ["DirectX", "Agility SDK", "Shader Model 6.10", "LinAlg"], content: [
      { title: "版本要点", type: "list", items: ["Agility SDK 7.2.1 预览发布；", "Shader Model 6.10 新增 LinAlg（线性代数）能力；", "着色器内矩阵运算为 GPU 推理铺路。"] },
      { title: "笔者观察", type: "text", text: "着色器里直接做线性代数，这条路线的终点是『AI 推理完全跑在渲染管线里』——神经超分、AI NPC 推理不再需要单独的计算队列。对学 TA 的同学，SM 6.10 的 LinAlg 是继 Wave Intrinsics 之后最重要的新特性，值得在练习项目里提前踩坑。参考来源：DirectX 官方博客。" }
    ] },
    { id: "en-gpuopen-fsr-rayregen", category: "engine", subcategory: "图形技术", title: "AMD GPUOpen 上线 FSR Redstone 技术页：Ray Regeneration 与帧生成官方拆解", summary: "AMD GPUOpen 上线 FSR『Redstone』新世代技术页面：Ray Regeneration（光线重生）、Frame Generation（帧生成）与 Radiance Caching 的官方说明与《红色沙漠》合作案例——AMD 对标 NVIDIA 神经渲染的技术细节首次公开。", source: "AMD GPUOpen", date: "2026-10-06", url: "https://gpuopen.com/amd-fsr-rayregeneration/", image: "https://gpuopen.com/images/fsr-ray-regen-crimson-desert-featured.Cp4TWySY.jpg", badge: "图形技术", badgeType: "engine", readTime: "6 分钟", hotScore: 77, tags: ["AMD", "FSR", "Ray Regeneration", "红色沙漠"], content: [
      { title: "技术要点", type: "list", items: ["GPUOpen 上线 FSR Redstone 世代技术页面；", "Ray Regeneration：光追降噪与重生，首发合作《红色沙漠》；", "Frame Generation 与 Radiance Caching 页面同批上线；", "AMD 开源基因延续：技术细节与 SDK 在 GPUOpen 公开。"] },
      { title: "笔者观察", type: "text", text: "与 NVIDIA 用博客『讲故事』不同，AMD 把 FSR 的技术细节放在 GPUOpen 直接开源——两种路线对学习者的意义完全不同：后者你能读到实现级别的取舍。学 TA 的同学把 FSR Ray Regeneration 与 NVIDIA 的神经渲染对照着读，『同样的问题两家怎么解』是最高效的学习框架。参考来源：AMD GPUOpen。" }
    ] },
    { id: "in-brazil-top5-goal", category: "industry", subcategory: "区域产业", title: "巴西官宣目标：十年内跻身全球游戏生产前五", summary: "巴西游戏产业机构公开表态：要在十年内成为全球前五的游戏生产国——拉美最大游戏市场的政策雄心，伴随着本土工作室与发行体系的系统性建设。", source: "GamesIndustry.biz", date: "2026-10-06", url: "https://www.gamesindustry.biz/brazil-wants-to-be-in-the-top-five-game-producers-in-the-world-in-less-than-10-years", image: "https://assetsio.gnwcdn.com/IMG_7480.JPG?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "区域产业", badgeType: "business", readTime: "4 分钟", hotScore: 73, tags: ["巴西", "游戏产业", "区域市场", "政策"], content: [
      { title: "报道要点", type: "list", items: ["巴西提出十年内进入全球游戏生产前五的目标；", "配套本土工作室培养与发行体系建设；", "拉美市场的开发者红利（人口结构与成本）是政策底气。"] },
      { title: "笔者观察", type: "text", text: "区域产业崛起的故事这几年反复上演：中东撒钱、东南亚筑巢、现在轮到巴西。对出海方向的开发者，每个新崛起区域都意味着『本地化需求 + 发行合作窗口』的双重机会——葡语区本地化的竞争者目前远少于英语和日语。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-nba2k25-servers-shutdown", category: "industry", subcategory: "游戏保存", title: "《NBA 2K25》服务器 12 月 31 日关闭：单人剧情模式将随之不可玩", summary: "2K 宣布《NBA 2K25》服务器将于 12 月 31 日关闭——不止是线上对战，连单人剧情模式也将因此变得无法游玩。游戏保存议题的又一记现实耳光，距离本作发售仅一年多。", source: "GamesIndustry.biz", date: "2026-10-06", url: "https://www.gamesindustry.biz/nba-2k25-servers-to-shut-down-on-december-31-single-player-story-mode-will-become-unplayable", image: "https://assetsio.gnwcdn.com/nba-2k25_B4aHYGg.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "游戏保存", badgeType: "business", readTime: "3 分钟", hotScore: 79, tags: ["NBA 2K25", "停服", "游戏保存", "数字所有权"], content: [
      { title: "事件要点", type: "list", items: ["《NBA 2K25》服务器定于 12 月 31 日关闭；", "单人剧情模式将因服务器关闭而无法游玩；", "距本作发售仅一年多，停服速度创纪录级。"] },
      { title: "笔者观察", type: "text", text: "这条与本周英国游戏保存调查、《FF7R》光盘抗争连读：『买断的单人模式也会消失』正在从极端案例变成常态。给做单机内容的同学一个技术层面的启示：别把单人内容的核心逻辑放在服务端验证上——玩家为你付了钱，别让他们在两年后失去你做的内容。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-resident-evil-movie-engagement", category: "industry", subcategory: "IP 联动", title: "生化危机电影上映后游戏参与度暴涨 50%：分析师称真正价值在品牌建设", summary: "分析师数据显示，扎克·克雷格版生化危机电影上映后，系列游戏的参与度跃升 50%——但分析师同时提醒：影视联动的真实价值不在短期销量，而在品牌资产的长期建设。", source: "GamesIndustry.biz", date: "2026-10-06", url: "https://www.gamesindustry.biz/resident-evil-games-engagement-leapt-50-following-release-of-zach-creggers-movie-but-analysts-say-real-value-is-in-brand-building-1", image: "https://assetsio.gnwcdn.com/resident-evil-movie_wkPx9ZD.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "IP 联动", badgeType: "business", readTime: "4 分钟", hotScore: 76, tags: ["生化危机", "Capcom", "影视联动", "品牌建设"], content: [
      { title: "报道要点", type: "list", items: ["电影上映后生化危机系列游戏参与度跃升 50%；", "分析师：真实价值在品牌建设而非即时转化；", "与本周 Capcom『时间线交汇』的 IP 策略报道互相呼应。"] },
      { title: "笔者观察", type: "text", text: "『参与度 +50%』这个指标的聪明之处在于它不是销量——影视联动的回报周期是季度级的，用销量衡量会系统性低估它。给做 IP 联动企划的同学一套完整的评估框架：短期看参与度、中期看 wishlists、长期看品牌认知——三层指标缺一不可。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-south-australia-games-fund", category: "industry", subcategory: "政策补贴", title: "南澳政府游戏基金翻倍至 100 万澳元：州级补贴成为独立团队的隐形发行商", summary: "南澳大利亚政府宣布将数字游戏基金翻倍至 100 万澳元，创下该州游戏开发领域的最大单笔公共投资——州级补贴正在成为独立团队资金结构里越来越重要的一块。", source: "GamesIndustry.biz", date: "2026-10-06", url: "https://www.gamesindustry.biz/south-australian-government-makes-largest-investment-in-game-development-by-doubling-its-digital-games-fund-to-1m", image: "https://assetsio.gnwcdn.com/Peppermint-(1).png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "政策补贴", badgeType: "business", readTime: "3 分钟", hotScore: 71, tags: ["南澳", "游戏基金", "政策补贴", "独立游戏"], content: [
      { title: "事件要点", type: "list", items: ["南澳政府将数字游戏基金翻倍至 100 万澳元；", "创该州游戏开发领域最大单笔公共投资；", "州级游戏补贴已是大厂裁员潮下开发者的替代资金来源。"] },
      { title: "笔者观察", type: "text", text: "全球游戏资金的地图正在重构：发行商收缩的同时，各地政府在加码——因为游戏工作室是『高薪、清洁、可远程』的完美招商标的。对独立团队的资金规划启示：政府补贴、发行预付款、众筹三者的组合拳，比押注单一来源稳得多。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "in-sonic-team-anti-remake", category: "industry", subcategory: "开发访谈", title: "Sonic Team 饭塚隆：重制版『本质上只是把同样的体验再提供一遍』——反重制潮又添一票", summary: "Sonic Team 负责人饭塚隆接受 RPS 采访，公开质疑重制潮的必要性：『你本质上是在把同样的体验再提供一遍』——与本周 Omega Force、Capcom 的路线分歧共同构成一场行业路线大讨论。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/sonic-teams-takashi-iizuka-dismisses-the-apparent-inevitability-of-remakes-saying-youre-essentially-providing-the-same-experience-again", image: "https://assetsio.gnwcdn.com/Sonic_9VVHpYg.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发访谈", badgeType: "business", readTime: "5 分钟", hotScore: 76, tags: ["Sonic Team", "饭塚隆", "重制版", "路线分歧"], content: [
      { title: "访谈要点", type: "list", items: ["饭塚隆公开质疑重制潮：『本质上只是提供同样的体验』；", "与 Omega Force『宁做新作』、Capcom『押注重制交汇』构成三种立场；", "SEGA 体系内的重制与新作资源分配再度成为话题。"] },
      { title: "笔者观察", type: "text", text: "本周的重制路线大辩论集齐了三种立场：Capcom 重制到极致再交汇、Omega Force 拒绝重制做新作、Sonic Team 质疑重制价值本身。这种公开的路线分歧对行业是健康的——它说明各厂还在按自己的资产结构做理性决策，而不是跟着市场情绪走。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-rotetra-four-sided-tetris", category: "games", subcategory: "独立观察", title: "《ROTETRA》：方块从四个方向同时下落的俄罗斯方块——『我没有足够的脑子玩好它，但它真好玩』", summary: "RPS 体验四向俄罗斯方块《ROTETRA》：方块同时从上下左右四个方向坠落，作者自嘲『没有足够的脑容量玩好它』——把经典玩法的一个维度翻倍，就创造了一款全新的游戏。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/rotetra-is-tetris-where-the-blocks-fall-from-four-different-sides-at-once-and-lord-almighty-i-dont-have-the-brainspace-to-be-good-at-it-but-it-sure-is-fun", image: "https://assetsio.gnwcdn.com/rotetra.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "4 分钟", hotScore: 70, tags: ["ROTETRA", "俄罗斯方块", "玩法变体", "独立游戏"], content: [
      { title: "体验要点", type: "list", items: ["四向同时下落的俄罗斯方块变体；", "认知负荷翻倍但『确实好玩』；", "经典玩法的单维度变体改造范本。"] },
      { title: "笔者观察", type: "text", text: "经典玩法的变体设计有一条被反复验证的捷径：挑一个所有玩家默认的『不变量』（方块只从上面落），把它翻倍或反转——认知冲击就是传播力。做玩法原型卡壳的时候，把你的核心循环列出来问一句『哪个默认值可以反过来』，往往就是答案。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-dark-heresy-undeniable-truth", category: "games", subcategory: "设计解析", title: "《战锤40K：黑暗异端》的审讯玩法：『你的话就是无可辩驳的真相』——当调查游戏放弃查证据", summary: "RPS 解析《战锤40K：黑暗异端》的审讯系统：玩家无需寻找证据，你做出的指控永远『正确』——这个看似反直觉的设计，恰恰是战锤宇宙里审判官权力的完美数字化。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/your-word-is-undeniable-truth-cant-be-bothered-to-find-evidence-in-warhammer-40000-dark-heresy-its-fine-because-no-matter-what-youre-always-right", image: "https://assetsio.gnwcdn.com/warhammer-40000-dark-heresy.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计解析", badgeType: "games", readTime: "5 分钟", hotScore: 73, tags: ["黑暗异端", "战锤40K", "审讯系统", "叙事设计"], content: [
      { title: "设计要点", type: "list", items: ["审讯系统：玩家的指控永远被判定为『真相』；", "无需搜证环节——权力本身替代了调查玩法；", "设计逻辑：用系统强化战锤宇宙的恐怖与荒诞。"] },
      { title: "笔者观察", type: "text", text: "大多数调查游戏的乐趣是『寻找真相』，这款反其道而行：乐趣变成『行使不受质疑的权力』——玩法的道德重量本身成了叙事。这种『用系统规则讲故事』的思路远比过场动画高级，值得所有做叙事设计的同学研究：你的系统能不能让玩家『感觉到』世界观，而不只是『读到』它？参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-midwest-90-tycoon", category: "games", subcategory: "新作前瞻", title: "《Midwest 90: Rapid City》下月抢鲜体验：猎杀怪物再做成外卖的后启示录经营", summary: "后启示录经营模拟《Midwest 90: Rapid City》宣布下月进入抢先体验：猎杀城郊的怪物、再把它们做成外卖生意——『怪物猎杀 + 餐饮经营』的双循环结构相当清奇。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/take-out-some-monsters-and-then-turn-them-into-take-out-in-the-post-apocalyptic-tycoon-survival-sim-midwest-90-rapid-city-out-in-early-access-next-month", image: "https://assetsio.gnwcdn.com/midwest-90-rapid-ctiy.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作前瞻", badgeType: "games", readTime: "3 分钟", hotScore: 68, tags: ["Midwest 90", "经营模拟", "抢先体验", "后启示录"], content: [
      { title: "前瞻要点", type: "list", items: ["后启示录经营模拟《Midwest 90: Rapid City》下月进入 EA；", "核心循环：猎杀怪物 → 做成外卖售卖；", "动作狩猎与餐饮经营的双循环组合。"] },
      { title: "笔者观察", type: "text", text: "『动作输出直接变成经营输入』的双循环设计，本质是把两个品类的核心指标（战斗爽感 + 经营数字增长）焊在一起互相供血——独立团队用这种『品类杂交』策略能同时吃两个市场的 wishlists。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-warhammer-survivors-demo", category: "games", subcategory: "新作前瞻", title: "《Warhammer Survivors》11 月上线：弹幕幸存者赛道迎来战锤 IP 正统入局", summary: "弹幕幸存者新品《Warhammer Survivors》宣布 11 月发售，全新 Demo 已上线——Games Workshop 授权 IP 正式进入这个由《吸血鬼幸存者》开创的品类，战争机器与帝皇的粉丝准备好了吗。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/bullet-heaven-battler-warhammer-survivors-arrives-in-november-with-a-new-demo-out-now-to-whet-your-appetite-for-destruction", image: "https://assetsio.gnwcdn.com/warhammer-survivors-release.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作前瞻", badgeType: "games", readTime: "3 分钟", hotScore: 69, tags: ["Warhammer Survivors", "弹幕幸存者", "战锤40K", "Demo"], content: [
      { title: "前瞻要点", type: "list", items: ["《Warhammer Survivors》11 月正式发售；", "全新 Demo 现已上线可供试玩；", "战锤 IP 首次进入弹幕幸存者品类。"] },
      { title: "笔者观察", type: "text", text: "弹幕幸存者是近年最典型的『低门槛高粘性』品类，而战锤 IP 的进入标志着这个赛道从独立实验进入 IP 圈地阶段。观察点：IP 版本能不能在『战锤的世界观重量』与『幸存者的爽快循环』之间找到平衡——参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-dreadline-tarot-dialogue", category: "games", subcategory: "设计解析", title: "《Dreadline Express》：用塔罗牌审问乘客的列车谜题——Her Story 以来最有意思的对话系统", summary: "RPS 体验列车悬疑新作《Dreadline Express》：玩家用类似塔罗牌的卡片系统审问乘客——编辑称这是『自《她的故事》以来我玩过的最有趣的对话系统』。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/question-passengers-with-tarot-like-cards-in-dreadline-express-a-train-mystery-with-the-most-intriguing-conversation-system-ive-played-since-her-story", image: "https://assetsio.gnwcdn.com/dreadline-express-euler-blonde.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计解析", badgeType: "games", readTime: "5 分钟", hotScore: 72, tags: ["Dreadline Express", "对话系统", "悬疑推理", "设计解析"], content: [
      { title: "体验要点", type: "list", items: ["列车悬疑推理玩法；", "核心创新：塔罗牌式的卡片审问系统；", "被 RPS 评价为《她的故事》以来最有意思的对话系统。"] },
      { title: "笔者观察", type: "text", text: "对话系统的进化方向正在从『更聪明的 NPC』转向『更有结构的提问机制』——塔罗卡片把开放式对话变成有限的策略选择，反而制造了更强的推理参与感。给做叙事工具的同学一个启发：约束的形状决定了玩家思考的方式。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-sheeps-roguelite", category: "games", subcategory: "独立观察", title: "《Sheeps》：数羊数到羊从异次元门户里涌出来——把失眠做成的 Roguelite", summary: "RPS 推荐 Roguelite 新作《Sheeps》：一个关于『数羊』的游戏——羊真的从奇怪的门户里不断涌出，把失眠者的日常变成了一场可玩的怪诞冒险。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/you-and-i-both-know-youre-not-sleeping-well-in-this-economy-so-have-a-gander-at-sheeps-a-roguelite-about-counting-sheep-pouring-out-of-a-strange-portal", image: "https://assetsio.gnwcdn.com/sheeps.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "3 分钟", hotScore: 66, tags: ["Sheeps", "Roguelite", "独立游戏", "怪诞"], content: [
      { title: "体验要点", type: "list", items: ["Roguelite 玩法：数羊主题的怪诞冒险；", "羊从异次元门户中不断涌出的超现实设定；", "『这经济环境下你我都睡不好』的共情式开场。"] },
      { title: "笔者观察", type: "text", text: "把『数羊入睡』这个全民常识直接游戏化，是概念先行路线的又一次胜利——不需要学习成本，所有人秒懂设定。对独立开发者，从日常俗语和集体经验里挖概念，比追热点更耐久：俗语不会过时。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-platinum-bayonetta-tease", category: "games", subcategory: "开发访谈", title: "PlatinumGames CEO 谈《猎天使魔女》联动时『顺口』暗示：更多 Bayonetta 或在路上", summary: "PlatinumGames CEO 在谈《星刃》Bayonetta 联动服装时话锋一转，『顺口』暗示系列新作可能已在准备中——白金工作室对自家招牌 IP 的态度出现微妙松动。", source: "Rock Paper Shotgun", date: "2026-10-06", url: "https://www.rockpapershotgun.com/platinumgames-ceo-pauses-a-discussion-on-stellar-blades-bayonetta-costume-crossover-to-casually-infer-more-bayonetta-may-be-on-the-way", image: "https://assetsio.gnwcdn.com/Bayonetta_aEPrKV0.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发访谈", badgeType: "games", readTime: "3 分钟", hotScore: 71, tags: ["PlatinumGames", "猎天使魔女", "白金工作室", "新作暗示"], content: [
      { title: "访谈要点", type: "list", items: ["CEO 在《星刃》Bayonetta 联动话题中暗示系列新作可能；", "『顺口透露』是游戏行业经典的信息释放手法；", "白金近年在自家 IP 与外包之间的摇摆再度成为话题。"] },
      { title: "笔者观察", type: "text", text: "注意这种『casually infer』的信息释放方式：不是官宣，而是留一个可以被解读也可以被否认的暗示——既试探热度又不背负承诺。学会识别这种『软官宣』语法，你在读任何厂商访谈时都能多提取一层信息。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "os-opengym", category: "opensource", subcategory: "开源热榜", title: "openGym：自托管的健身房与自重训练追踪器（4100+ star）——你的数据你的服务器", summary: "openGym 冲上 GitHub 热榜：支持计划训练、记录超级组/热身/有氧、可视化各肌群的疲劳与退化状态，并可从 FitNotes/Strong/Hevy 导入历史数据——Passkey 登录 + 全数据自托管。", source: "GitHub（DuarteSantos8/openGym）", date: "2026-10-05", url: "https://github.com/DuarteSantos8/openGym", image: "https://opengraph.githubassets.com/95940f1edb0bb8027bd64161255967c88bd98b02741746cabd1e6405d3bd2700/DuarteSantos8/openGym", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 67, tags: ["GitHub", "自托管", "健康追踪", "开源"], content: [
      { title: "项目要点", type: "list", items: ["自托管健身与自重训练追踪器；", "支持超级组、热身、有氧记录与肌群疲劳可视化；", "可导入 FitNotes/Strong/Hevy 数据，Passkey 登录。"] },
      { title: "笔者观察", type: "text", text: "『肌群疲劳/退化可视化』是这个项目最值得玩味的功能——本质是把游戏里的状态系统（体力条、Debuff）做进了健身工具。做健康或运动类应用的同学可以直接参考它的数据建模。参考来源：GitHub。" }
    ] },
    { id: "os-tuios", category: "opensource", subcategory: "AI 工具链", title: "tuios：『知道你的智能体在干什么』的终端窗口管理器（4800+ star）", summary: "tuios 是一个面向 AI 编码智能体时代的终端窗口管理器：平铺面板、工作区、断电续存会话，外加一个汇集所有编码智能体消息的统一收件箱——tmux 的智能体时代继任者。", source: "GitHub（Gaurav-Gosain/tuios）", date: "2026-10-04", url: "https://github.com/Gaurav-Gosain/tuios", image: "https://repository-images.githubusercontent.com/1051789550/8c6a411b-29be-4028-b2df-6b4cd41e317d", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 72, tags: ["GitHub", "终端", "AI Agent", "开源"], content: [
      { title: "项目要点", type: "list", items: ["Go 编写的终端平铺窗口管理器（tmux 替代品）；", "核心卖点：感知智能体状态的面板与会话续存；", "统一收件箱汇集所有编码智能体的消息。"] },
      { title: "笔者观察", type: "text", text: "同时开三四个 AI 智能体干活的人都有同一个痛：谁在等我回复？tuios 的『智能体收件箱』正中靶心。工具设计的通用规律在这里再次生效——新工作流出现后，最先被重造的永远是窗口管理器。参考来源：GitHub。" }
    ] },
    { id: "os-ai-engineering-from-scratch", category: "opensource", subcategory: "AI 学习", title: "ai-engineering-from-scratch：6.4 万 star 的 AI 工程从零课程开源仓库", summary: "rohitg00 的 ai-engineering-from-scratch 仓库冲至 6.4 万 star：从零实现智能体、MCP、强化学习、Transformer 与群体智能，配 Python/TypeScript/Go 三语言实现——『从零派』AI 学习路线的集大成开源课程。", source: "GitHub（rohitg00/ai-engineering-from-scratch）", date: "2026-10-04", url: "https://github.com/rohitg00/ai-engineering-from-scratch", image: "https://repository-images.githubusercontent.com/1185590488/a8b65f74-921c-4682-94c5-7cb82b65ba2c", badge: "开源热榜", badgeType: "opensource", readTime: "4 分钟", hotScore: 76, tags: ["GitHub", "AI 工程", "课程开源", "从零实现"], content: [
      { title: "项目要点", type: "list", items: ["覆盖：智能体、MCP、计算机视觉、深度学习、强化学习、Transformer、群体智能；", "Python / TypeScript / Go 三语言实现；", "定位：学原理、自己造、交付给他人使用的完整路径。"] },
      { title: "笔者观察", type: "text", text: "与调 API 路线相对的『从零派』在 GitHub 上正形成系统化课程群，这个仓库是目前的集大成者。给想往 AI 工程方向走又苦于没有路线的同学：照这个仓库的目录走一遍，你对『智能体到底是什么』的理解会从玄学变成工程。参考来源：GitHub。" }
    ] },
    { id: "os-claude-skills-380", category: "opensource", subcategory: "AI 工具链", title: "claude-skills：380 个 Claude Code 技能 + 30 个智能体的超大技能合集（2.7 万 star）", summary: "alirezarezvani 开源的 claude-skills 合计 380+ 技能、30+ 智能体与 70+ 自定义命令，覆盖工程、营销、产品、合规、研究与商业运营——当前规模最大的 Claude 技能合集之一。", source: "GitHub（alirezarezvani/claude-skills）", date: "2026-10-04", url: "https://github.com/alirezarezvani/claude-skills", image: "https://opengraph.githubassets.com/51573ec969bbd7a22fb1febb1f5b10d859f628d64148462abcb977168157a117/alirezarezvani/claude-skills", badge: "开源热榜", badgeType: "opensource", readTime: "3 分钟", hotScore: 71, tags: ["GitHub", "Claude", "技能库", "开源"], content: [
      { title: "项目要点", type: "list", items: ["380+ 技能、30+ 智能体、70+ 自定义命令；", "覆盖工程、营销、产品、合规、研究与商业运营；", "兼容 Claude Code、Codex、Gemini CLI、Cursor 等 8+ 编码智能体。"] },
      { title: "笔者观察", type: "text", text: "技能合集的『广』和 Addy Osmani agent-skills 的『精』是两种产品哲学——合集像超市，精选像买手店。对学生而言合集的好处是免费试遍所有玩法，快速找到自己需要的那一类，再回头精读对应的单项仓库。参考来源：GitHub。" }
    ] },
    { id: "os-tilelang", category: "opensource", subcategory: "GPU 内核", title: "tilelang：为高性能 GPU/CPU/加速器内核设计的领域专用语言（8400+ star）", summary: "tilelang 是一个面向 GPU/CPU/各类加速器高性能内核开发的领域专用语言（DSL），冲上 GitHub 周榜（8400+ star）——AI 算力时代『手写内核』的门槛正在被 DSL 化降低。", source: "GitHub（tile-ai/tilelang）", date: "2026-10-04", url: "https://github.com/tile-ai/tilelang", image: "https://opengraph.githubassets.com/9e830e88c7a6b8bf14ecdbc58c911da99fd9dce34d3fba07bea0321de0633400/tile-ai/tilelang", badge: "开源热榜", badgeType: "opensource", readTime: "4 分钟", hotScore: 70, tags: ["GitHub", "GPU", "DSL", "高性能计算"], content: [
      { title: "项目要点", type: "list", items: ["面向 GPU/CPU/加速器的高性能内核 DSL；", "目标：简化内核开发，降低手写 CUDA/Triton 的门槛；", "AI 算力需求暴涨背景下的基础设施层项目。"] },
      { title: "笔者观察", type: "text", text: "内核 DSL 化对游戏图形领域的投影很直接：着色器语言也在走同样的路（HLSL → 更高层的抽象）。对学 TA 的同学，理解 tilelang 这类『描述意图、编译器生成优化代码』的思路，比死记某个 API 的语法更能穿越技术变迁。参考来源：GitHub。" }
    ] }
  ]
}
