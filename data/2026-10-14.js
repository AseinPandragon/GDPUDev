window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-14",
    weekday: "星期三",
    title: "GDPUDev 个人数字创作展示 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-14 07:40",
    editor: "GDPUDev技术中枢 & CodeBuddy",
    highlights: [
      "Meta 发布 Muse Wonder：主动记忆 + 百万 token 上下文，56 分追平 Sonnet 5.5",
      "微软 Decision-1 决策模型：推理速度较 GPT-6 Sol 快 35 倍",
      "Mistral 发布 1T 参数开放权重模型，开放阵营 10 月连续加码",
      "Xbox 宣布成立 Xbox Labs：专项试验新兴想法与新技术",
      "Glen Schofield 公开指责 Krafton：『他们以为 Callisto 是彻底失败』"
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
    id: "muse-wonder-meta",
    category: "ai",
    categoryName: "AI前沿 · 头条",
    tag: "模型发布",
    title: "Meta 发布 Muse Wonder：『主动记忆』+ 百万 token 上下文，56 分追平 Sonnet 5.5",
    summary: "Meta 于 10 月 12 日发布新一代旗舰 Muse Wonder 与满血版 Muse Wonder Full：搭载『主动记忆』（active memory）机制，支持 100 万 token 上下文，可在数天乃至数月的交互跨度中保持连续性——Artificial Analysis 智能指数 56 分，追平 Claude Sonnet 5.5，仅次于 Opus 5.5 的 58 分。",
    image: "",
    source: "亿邦动力（编译）",
    date: "2026-10-14",
    url: "https://m.ebrun.com/714194.html",
    readTime: "7 分钟深度",
    hotScore: 90,
    tags: ["Meta", "Muse Wonder", "主动记忆", "百万 token"],
    content: [
      { title: "发布要点", type: "list", items: ["10 月 12 日发布：Muse Wonder（青春版）+ Muse Wonder Full（满血版）；", "核心创新：『主动记忆』（active memory）——在数天、数周乃至数月的交互跨度中保持连续性；", "支持 100 万 token 超长上下文；", "基准：Artificial Analysis 智能指数 56 分，追平 Claude Sonnet 5.5，仅次于 Opus 5.5（58）；", "定价：Wonder 面向付费订阅用户（Muse 个人代理应用内，20/100 美元月费两档）；Full 面向 Muse Code AI 代理的开发者（50/200 美元月费），通过 Meta Model API 提供。"] },
      { title: "笔者观察", type: "text", text: "『主动记忆』是这条新闻里最值得盯的词——长久记忆恰恰是游戏 NPC 最缺的能力：玩家三周前救过的商人、上周背叛过的队友，NPC 全都该记得。Muse Wonder 把『跨月交互记忆』做成了产品级特性，游戏侧的对应物（玩家-关系长期记忆）已经不是技术幻想。另外注意 Meta 从开源转向闭源订阅的完整转身——这与 Mistral 同期开放 1T 权重形成鲜明的路线对照。参考来源：亿邦动力。" }
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
    { id: "ai-thinkbar-1012", category: "ai", subcategory: "行业综述", title: "Mistral 发布 1T 参数开放权重模型；微软 Decision-1 决策模型提速 35 倍", summary: "ThinkBar 10 月 12 日周报：Mistral 发布万亿参数开放权重模型、Meta 推出 Muse Wonder 对标 OpenAI 与 Anthropic、微软发布决策模型 Decision-1（推理较 GPT-6 Sol 快 35 倍）并推出智能体沙箱；国内阶跃星辰 Step 5 Preview 接入腾讯 WorkBuddy、无问芯穹完成 23 亿元 C 轮融资。", source: "ThinkBar（CSDN）", date: "2026-10-12", url: "https://thinkbar.blog.csdn.net/article/details/167767575", image: "https://i-blog.csdnimg.cn/direct/cf4f284666634b5db1d702a0a5e30fa5.png", badge: "行业综述", badgeType: "ai", readTime: "8 分钟", hotScore: 73, tags: ["Mistral", "Decision-1", "开放权重", "无问芯穹"], content: [
      { title: "周报要点", type: "list", items: ["Mistral 发布 1T 参数开放权重模型——开放阵营 10 月连续加码；", "微软发布 Microsoft-Decision-1 决策模型：面向路由、分类、优先级排序等结构化决策，推理速度较 GPT-6 Sol 快 35 倍，并推出智能体沙箱；", "国内：阶跃星辰 Step 5 Preview 接入腾讯 WorkBuddy；无问芯穹完成 23 亿元 C 轮融资。"] },
      { title: "笔者观察", type: "text", text: "『Decision-1』这个产品形态值得单独说：不做通用聊天，专攻『路由、分类、优先级排序』这类可结构化输出的小决策——游戏后台的匹配、客服工单分发、反作弊初筛全是它的靶场。专用小模型路线与本周 Muse Wonder 的通用大模型路线，正好是 AI 成本结构的两极。参考来源：ThinkBar。" }
    ] },
    { id: "ai-fanjun-1013", category: "ai", subcategory: "行业综述", title: "AI 研究简报（10 月 13 日）：世界模型成为 Agent 自我进化的新地基", summary: "每日 AI 研究简报 10 月 13 日期：当日主线是『世界模型成为 Agent 自我进化的新地基』叠加『开放权重与性价比双线反攻』——Meta Muse Wonder、Mistral 新模型、Anthropic Haiku 5.5 调价同台；失控 Agent 安全事件倒逼治理从喊话转向硬机制。", source: "每日 AI 研究简报（CSDN）", date: "2026-10-13", url: "https://fanjun.blog.csdn.net/article/details/167812237", image: "https://img-bss.csdnimg.cn/202112131616291007.png", badge: "行业综述", badgeType: "ai", readTime: "8 分钟", hotScore: 70, tags: ["世界模型", "Agent", "开放权重", "AI 治理"], content: [
      { title: "简报要点", type: "list", items: ["主线一：世界模型成为 Agent 自我进化的新地基；", "主线二：开放权重与性价比双线反攻；", "治理线：失控 Agent 安全事件推动监管从喊话转向硬机制。"] },
      { title: "笔者观察", type: "text", text: "『世界模型 + Agent』对游戏业的映射最直接：世界模型本质上是『可交互的模拟器』——这与游戏引擎做的事情在数学上高度同构。未来两年『用世界模型当廉价物理引擎』的实验会大量出现，做技术选型的同学现在就该把这条线放进雷达。参考来源：每日 AI 研究简报。" }
    ] },
    { id: "ai-piratewang-1013", category: "ai", subcategory: "行业综述", title: "AI 新闻日报（10 月 13 日）：前沿编码模型、上下文重置与 3D 世界动作模型", summary: "AI 新闻日报 10 月 13 日期：聚焦前沿编码模型、上下文重置技术与 3D 世界动作模型三大看点——Meta 双旗舰发布把『长跑智能体』推上主舞台。", source: "AI 新闻日报（CSDN）", date: "2026-10-13", url: "https://piratewang.blog.csdn.net/article/details/167756644", image: "https://i-blog.csdnimg.cn/direct/bf06c47f2ec84884abed36c31e1f7b91.png", badge: "行业综述", badgeType: "ai", readTime: "6 分钟", hotScore: 64, tags: ["编码模型", "3D 世界模型", "日报"], content: [
      { title: "日报要点", type: "list", items: ["看点一：前沿编码模型密集更新；", "看点二：上下文重置技术路线浮现；", "看点三：3D 世界动作模型登场。"] },
      { title: "笔者观察", type: "text", text: "『3D 世界动作模型』是三条看点里与游戏业交集最大的：从文本直接生成可操作的 3D 世界动作序列，距离『一句话生成可玩 Demo』又近了一步——与 Unity Spark 的浏览器创作路线殊途同归。参考来源：AI 新闻日报。" }
    ] },
    { id: "ai-thepaper-nous-hermes", category: "ai", subcategory: "行业综述", title: "闷声赚钱的 AI 产品：Nous Research 与它的开源个人 Agent Hermes", summary: "澎湃号盘点『鲜少听说、闷声赚钱的 AI 产品』：Nous Research 从开源模型实验室起家，2026 年 2 月推出的开源个人 Agent Hermes 主打『开源可控』——支持本地部署，与 Meta Muse 的闭源订阅路线形成对照。", source: "澎湃新闻（湃客）", date: "2026-10-12", url: "https://www.thepaper.cn/newsDetail_forward_34227352", image: "", badge: "行业综述", badgeType: "ai", readTime: "7 分钟", hotScore: 65, tags: ["Nous Research", "Hermes", "开源 Agent"], content: [
      { title: "盘点要点", type: "list", items: ["Nous Research：2023 年成立的开源模型实验室；", "核心产品：2026 年 2 月推出的开源个人 Agent Hermes；", "路线：本地部署 + 开源可控，与 Meta Muse 的闭源订阅相反。"] },
      { title: "笔者观察", type: "text", text: "把这条和本周 Muse Wonder、BitNet、Talorys 串起来，10 月的 AI 叙事完成了一次『控制权之争』的完整叙事弧：闭源订阅（Meta）vs 开源自托管（Nous/talorys）vs 端侧极简（BitNet）。三条路线最后都会在游戏 AI 里找到各自的用户。参考来源：澎湃新闻。" }
    ] },
    { id: "ai-qcode-deprecations", category: "ai", subcategory: "行业综述", title: "补位：OpenAI 弃用时间表更新——gpt-5.3-codex 等三款模型定档 2027 年 4 月移除", summary: "补位条目（10 月 10 日）：QCode 整理的 OpenAI 弃用页更新——gpt-5.3-codex、gpt-5.1 与 gpt-5.4-nano 定于 2027 年 4 月 1 日从 API 移除，10 月已有两条新增弃用公告。", source: "QCode", date: "2026-10-10", url: "https://qcode.cc/ai-model-releases-october-2026", image: "https://qcode.cc/static/img/og-card.png?v=20260731", badge: "行业综述", badgeType: "ai", readTime: "5 分钟", hotScore: 60, tags: ["OpenAI", "弃用时间表", "API"], content: [
      { title: "追踪要点", type: "list", items: ["OpenAI 弃用页 10 月新增两条公告；", "gpt-5.3-codex、gpt-5.1、gpt-5.4-nano：2027 年 4 月 1 日从 API 移除；", "10 月发布追踪：Mistral Large 4、GPT-5.5 退役等一并整理。"] },
      { title: "笔者观察", type: "text", text: "补位说明：此篇为 10 月 10 日内容。『模型弃用时间表』是接 AI 功能的游戏后台最该盯的页面——你的 NPC 大脑如果绑定了一个 2027 年 4 月消失的模型，今天就该开始迁移。用网关抽象层的同学可以高枕无忧，硬编码的同学请自求多福。参考来源：QCode。" }
    ] },
    { id: "g-send-in-the-clown", category: "games", subcategory: "独立观察", title: "《Send in the Clown》：整款游戏只有一场战斗——生日派对上对抗一个烦人小孩的回合制 RPG", summary: "回合制 RPG 喜剧《Send in the Clown》曝光：整个游戏只有一场战斗——在生日派对上与一个烦人小孩轮流过招。把 JRPG 的战斗系统压缩到单一遭遇，是对『内容量崇拜』的正面挑衅。", source: "Rock Paper Shotgun", date: "2026-10-13", url: "https://www.rockpapershotgun.com/send-in-the-clown-is-a-turn-based-rpg-comedy-about-fighting-one-annoying-child-at-a-birthday-party-where-theres-only-one-fight-in-the-whole-game", image: "https://assetsio.gnwcdn.com/send-in-the-clown.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "4 分钟", hotScore: 70, tags: ["Send in the Clown", "回合制", "喜剧", "独立游戏"], content: [
      { title: "游戏要点", type: "list", items: ["回合制 RPG 喜剧《Send in the Clown》；", "核心设定：整款游戏只有一场战斗——派对上的烦人小孩；", "用单一遭遇承载全部系统深度。"] },
      { title: "笔者观察", type: "text", text: "『一场战斗的 RPG』与本周《Burn With Me》的『有限卡牌』是同一个设计宣言的两面：当品类都在卷内容量，有人开始卷『单点深度』。对毕设团队这是天大的好消息——评审问『内容量够吗』时，你有先例可引用了。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-eschers-dream", category: "games", subcategory: "玩家创作", title: "《Escher's Dream》：致敬埃舍尔非欧几何的 Portal 2 Mod——玩到轻微晕眩为止", summary: "Portal 2 Mod《Escher's Dream》曝光：以埃舍尔的非欧几何视错觉为灵感的空间谜题——RPS 提醒玩家『只会让你轻微晕眩』。玩家社区的空间设计功力再次越过高墙。", source: "Rock Paper Shotgun", date: "2026-10-13", url: "https://www.rockpapershotgun.com/eschers-dream-is-a-portal-2-mod-inspired-by-the-non-euclidian-works-of-the-classic-artist-that-will-leave-you-feeling-only-a-little-bit-nauseated", image: "https://assetsio.gnwcdn.com/portal-2-eschers-dream.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "玩家创作", badgeType: "games", readTime: "4 分钟", hotScore: 68, tags: ["Portal 2", "Mod", "埃舍尔", "非欧几何"], content: [
      { title: "Mod 要点", type: "list", items: ["Portal 2 Mod《Escher's Dream》；", "灵感：埃舍尔的非欧几何视错觉作品；", "官方提醒：可能导致轻微晕眩。"] },
      { title: "笔者观察", type: "text", text: "非欧几何关卡是『空间叙事』的极致形态：Surperliminal（《超阈限》）之后，社区又一次证明 Source 引擎的空间黑客上限深不见底。给做关卡设计的同学：非欧空间的核心不是『违反物理』，而是『保持局部一致、打破全局连续』——这条原则直接可迁移。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-ratocalypse", category: "games", subcategory: "独立观察", title: "《Ratocalypse》：火焰纹章味的老鼠自走棋——名字像烂片，素质像正作", summary: "《Ratocalypse》名字听着像低成本恐怖片，实为一款火焰纹章味的老鼠题材策略自动战斗——RPS 评价其『卖相精致（neat-looking）』，战术深度藏在鼠群编成里。", source: "Rock Paper Shotgun", date: "2026-10-13", url: "https://www.rockpapershotgun.com/ratocalypse-might-sound-like-a-low-budget-horror-flick-but-its-actually-a-neat-looking-fire-emblem-adjacent-strategy-auto-battler", image: "https://assetsio.gnwcdn.com/Ratocalypse.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "4 分钟", hotScore: 66, tags: ["Ratocalypse", "自走棋", "策略", "火焰纹章"], content: [
      { title: "游戏要点", type: "list", items: ["《Ratocalypse》：老鼠题材策略自动战斗；", "结构近似火焰纹章的战棋框架；", "RPS 评价：名字像烂片，卖相精致。"] },
      { title: "笔者观察", type: "text", text: "『自动战斗 × 战棋』是 2026 年的长 tails 品类：把玩家的操作负担转嫁给编成阶段。观察它的价值在于编成深度与观战趣味怎么平衡——这是所有自走棋产品的核心命门。参考来源：Rock Paper Shotgun。" }
    ] },
{ id: "g-deep-dish-dungeon", category: "games", subcategory: "新作发售", title: "《Deep Dish Dungeon》现已发售：地城里有什么就吃什么——迷宫美食合作爬行", summary: "受《迷宫饭》启发的合作地城爬行《Deep Dish Dungeon》现已发售：与队友用地下城里能翻到的一切食材现做现吃——把『料理』系统焊进地城爬行的循环里。", source: "Rock Paper Shotgun", date: "2026-10-13", url: "https://www.rockpapershotgun.com/echoes-of-delicious-in-dungeon-ring-out-in-deep-dish-dungeon-a-co-op-dungeon-crawler-about-making-meals-with-whatever-you-can-scrounge-up-thats-out-now", image: "https://assetsio.gnwcdn.com/deep-dish-dungeon.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作发售", badgeType: "games", readTime: "4 分钟", hotScore: 69, tags: ["Deep Dish Dungeon", "迷宫饭", "合作", "地城爬行"], content: [
      { title: "发售要点", type: "list", items: ["《Deep Dish Dungeon》现已发售；", "核心循环：探险 × 用战利品食材现场烹饪；", "明显的《迷宫饭》（Delicious in Dungeon）精神致敬。"] },
      { title: "笔者观察", type: "text", text: "『食材即战利品』是把 loot 系统语义重写的好例子：同一件掉落物，在传统地城爬行里是装备，在这里是晚餐。做 roguelite 的同学学这个思路——改变掉落物的『用途分类』，比加新装备便宜一百倍。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-castlevania-belmont-review", category: "games", subcategory: "评测", title: "《恶魔城：贝尔蒙特之诅咒》评测：一流动作，二流银河城——发表于世纪之交的Belmont", summary: "《Castlevania: Belmont's Curse》评测解禁：RPS 给出的判词是『一流动作游戏，稍逊的银河城』——动作手感与探索结构的评价在同一个游戏里劈成了两半。", source: "Rock Paper Shotgun", date: "2026-10-13", url: "https://www.rockpapershotgun.com/castlevania-belmonts-curse-review-a-fantastic-action-game-a-less-than-stellar-metroidvania", image: "https://assetsio.gnwcdn.com/rose-belmont.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "评测", badgeType: "games", readTime: "6 分钟", hotScore: 70, tags: ["恶魔城", "银河城", "评测", "Konami"], content: [
      { title: "评测要点", type: "list", items: ["《Castlevania: Belmont's Curse》评测解禁；", "结论：动作系统『fantastic』，银河城结构『less than stellar』；", "Konami 恶魔城 IP 的新作尝试。"] },
      { title: "笔者观察", type: "text", text: "『动作满分、地图不及格』的劈叉评价恰好是教学案例：动作手感靠打磨积累，地图设计靠结构规划——两者是不同工种的能力，缺一不可。做毕设的同学如果时间有限，先把单项做到『fantastic』，比两项都平庸更容易被记住。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "i-xbox-labs", category: "industry", subcategory: "大厂动向", title: "Xbox 宣布成立 Xbox Labs：专项试验新兴想法与新技术", summary: "Xbox 宣布成立全新机构 Xbox Labs：专项用于试验新兴想法与新技术——在 AI-first 争议、云游戏摇摆的行业氛围里，微软给前沿实验单独开了一个编制。", source: "GamesIndustry.biz", date: "2026-10-13", url: "https://www.gamesindustry.biz/xbox-announces-xbox-labs-a-new-initiative-to-trial-emerging-ideas-and-new-technology", image: "https://assetsio.gnwcdn.com/XBOX-LABS.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "industry", readTime: "4 分钟", hotScore: 74, tags: ["Xbox", "Xbox Labs", "新技术", "实验"], content: [
      { title: "事件要点", type: "list", items: ["Xbox 宣布成立 Xbox Labs；", "定位：试验新兴想法与新技术；", "与本周 Epic『AI 优先』的强制路线形成组织学对照。"] },
      { title: "笔者观察", type: "text", text: "本周大厂对待新技术的两种组织答案：Epic 把 AI 压进现有生产线（AI-first），Xbox 把实验拆出独立实验室（Xbox Labs）。前者求效率，后者求不污染主线——组织设计本身就是对技术不确定性的表态。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-gamedatacore", category: "industry", subcategory: "创业", title: "GameDataCore 创始人：『多年打造与融资，同样的失败方式太痛了』——想搞清玩家到底怎么想", summary: "初创公司 GameDataCore 接受 GI 专访：创始人目睹『多年打造、反复 pitch、艰难融资做出的游戏以同样的方式失败』后，决心做玩家行为洞察工具——把『为什么失败』变成可测量的数据问题。", source: "GamesIndustry.biz", date: "2026-10-13", url: "https://www.gamesindustry.biz/years-of-building-pitching-and-raising-for-games-made-the-same-failure-painful-to-watch-why-gamedatacore-wants-to-find-out-how-players-feel", image: "https://assetsio.gnwcdn.com/GameDataCore_logo-gradient-network-mark_7680x4320.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "创业", badgeType: "industry", readTime: "5 分钟", hotScore: 65, tags: ["GameDataCore", "玩家洞察", "创业", "数据分析"], content: [
      { title: "专访要点", type: "list", items: ["GameDataCore 创始人谈创业动机；", "切入点：让开发者搞清『玩家到底怎么想』；", "愿景：把反复出现的失败模式变成可测量的数据问题。"] },
      { title: "笔者观察", type: "text", text: "『同样的失败方式』这个词组扎心又精准——行业失败多为重复模式（留存曲线第二周跳水、首日转化崩塌），而多数团队直到死都没装好埋点。给毕设团队的忠告：从第一个原型开始就记录玩家行为数据，这是最便宜的后悔药。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-regulatory-risks", category: "industry", subcategory: "合规指南", title: "指南：正在重塑 2026 年游戏业的六大监管风险", summary: "GamesIndustry.biz 发布长文指南：梳理正在重塑游戏业的六大监管风险——从游戏内货币到未成年人保护的合规地图，欧洲监管（本周 CPC 行动）之后的最全一次盘点。", source: "GamesIndustry.biz", date: "2026-10-13", url: "https://www.gamesindustry.biz/a-guide-to-six-regulatory-risks-shaping-games-in-2026", image: "https://assetsio.gnwcdn.com/jim-petkiewicz-NJIzBRrgBus-unsplash.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "合规指南", badgeType: "industry", readTime: "12 分钟", hotScore: 72, tags: ["监管", "合规", "游戏内货币", "未成年人"], content: [
      { title: "指南要点", type: "list", items: ["六大监管风险全景梳理；", "覆盖游戏内货币、未成年人保护等核心议题；", "与本周欧盟 CPC 对九家公司的行动互为背景板。"] },
      { title: "笔者观察", type: "text", text: "这篇文章建议全团队人手一份：监管风险不是法务一个人的事——内购定价、抽卡公示、未成年人时段，每个都是策划案里要提前写的字段。把六大风险映射到自己的项目里自查一遍，比事后补救便宜十倍。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-schofield-krafton", category: "industry", subcategory: "开发者言论", title: "Glen Schofield 怒斥 Krafton：『他们以为 Callisto 是彻底失败』", summary: "《木卫四协议》缔造者 Glen Schofield 二度开炮：指责发行商 Krafton 将《Callisto Protocol》定性为『彻底失败』——与上周『创意比 AI 省钱』的访谈同源，矛头从行业转向了老东家关系。", source: "Rock Paper Shotgun", date: "2026-10-13", url: "https://www.rockpapershotgun.com/they-thought-callisto-was-a-complete-failure-glen-schofield-blames-publishers-krafton-for-the-callisto-protocols-crash-landing", image: "https://assetsio.gnwcdn.com/The-Callisto-Protocol_5Aa0Ya0.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发者言论", badgeType: "industry", readTime: "5 分钟", hotScore: 73, tags: ["Glen Schofield", "木卫四协议", "Krafton"], content: [
      { title: "事件要点", type: "list", items: ["Schofield 公开指责 Krafton 对《木卫四协议》的定性；", "引述内部口径：『他们以为 Callisto 是彻底失败』；", "为其本周退休访谈（创意比 AI 省钱）的延续篇。"] },
      { title: "笔者观察", type: "text", text: "『发行商如何定义失败』是这组报道的真问题：销量未达 3A 预期 ≠ 产品失败，《木卫四协议》的口碑资产至今仍在。给未来要跟发行商打交道的同学一个合同课知识点：失败条款怎么写、IP 归属怎么定，直接决定五年后你能不能像 Schofield 这样自由发声。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "i-gta6-pc-2027", category: "industry", subcategory: "发售情报", title: "报道：GTA6 PC 版计划 2027 年初发售——主机窗口期策略的又一次上演", summary: "据.report 报道，GTA6 的 PC 版计划于 2027 年初发售——主机先行、PC 随后的经典 R 星窗口期策略再度上演，PC 玩家的等待时间可能比想象中短。", source: "Rock Paper Shotgun", date: "2026-10-13", url: "https://www.rockpapershotgun.com/gta-6-pc-release-planned-for-early-2027-report-claims-which-could-mean-were-playing-in-time-for-gta-online-2-vice-city-4-u-or-whatever-they-call-it", image: "https://assetsio.gnwcdn.com/Jason_and_Lucia_04.0m7i~huzhskdw.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "发售情报", badgeType: "industry", readTime: "4 分钟", hotScore: 78, tags: ["GTA6", "PC 版", "R 星", "发售窗口"], content: [
      { title: "报道要点", type: "list", items: ["报道：GTA6 PC 版计划 2027 年初发售；", "延续 R 星『主机先行、PC 随后』的经典窗口策略；", "注意口径：report（非官宣），R 星惯例不予置评。"] },
      { title: "笔者观察", type: "text", text: "R 星的窗口期策略本质是『两次发售、两波收入』：主机版清库存冲销量，PC 版再收一遍长尾。对开发者的启示是技术性的：主机首发的优化债，PC 版都要还——这也解释了为什么 R 星 PC 移植通常稳但慢。参考来源：Rock Paper Shotgun。" }
    ] },
{ id: "os-vercel-skills", category: "opensource", subcategory: "AI 工具", title: "Vercel 开源 skills 工具：一条 npx 命令安装任意 Agent 技能", summary: "vercel-labs/skills 登上热榜：『开放智能体技能工具』——npx skills 一条命令即可为 Claude Code 等 AI 编程工具安装技能包，把上周还在手工配置的技能生态推平成一行命令。", source: "GitHub（vercel-labs）", date: "2026-10-14", url: "https://github.com/vercel-labs/skills", image: "https://opengraph.githubassets.com/1/vercel-labs/skills", badge: "AI 工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 71, tags: ["Vercel", "Agent Skills", "CLI", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["Vercel 官方实验室出品：开放智能体技能工具；", "用法：npx skills 一条命令安装/管理技能包；", "与 cursor/plugins、anthropics knowledge-work-plugins 同属技能生态军备竞赛。"] },
      { title: "笔者观察", type: "text", text: "技能生态的『包管理器时刻』到了——当安装技能像 npm install 一样简单，技能的分发与质量分级就会爆发。游戏团队的机会：把『关卡命名规范』『性能红线检查』做成可分发的技能，全行业都是你的用户。参考来源：GitHub。" }
    ] },
    { id: "os-xtool", category: "engine", subcategory: "开发工具", title: "xtool 登热榜：跨平台 Xcode 替代品——在 Linux/Windows 上构建并部署 iOS 应用", summary: "xtool-org/xtool 登上 GitHub 热榜：跨平台 Xcode 替代品——用 SwiftPM 在 Linux、Windows、macOS 上构建并部署 iOS 应用，苹果工具链的围墙被开了一扇窗。", source: "GitHub（xtool-org）", date: "2026-10-14", url: "https://github.com/xtool-org/xtool", image: "https://opengraph.githubassets.com/1/xtool-org/xtool", badge: "开发工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 69, tags: ["xtool", "iOS", "Xcode", "跨平台"], content: [
      { title: "仓库要点", type: "list", items: ["xtool：跨平台 Xcode 替代方案；", "能力：SwiftPM 构建 + iOS 应用部署，支持 Linux / Windows / macOS；", "本周登 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "对独立开发者是实打实的减负：没有 Mac 也能出 iOS 包——小型团队的 iOS 移植成本直接砍半。游戏移植方向的同学重点测试它与 Unity/自研引擎的对接完整度，这是它能否进生产管线的关键。参考来源：GitHub。" }
    ] },
    { id: "os-juliobsz-skills", category: "opensource", subcategory: "AI 工具", title: "『一句话建站』的 Agent Skill 登热榜：网站生成的技能化封装（300+★）", summary: "juliobsz/skills（10 月 12 日创建）登上热榜：一个把『从一行文字生成获奖级网站』封装成 Agent 技能的项目——建站这个高频任务正在被技能化、标准化。", source: "GitHub（juliobsz）", date: "2026-10-14", url: "https://github.com/juliobsz/skills", image: "https://opengraph.githubassets.com/1/juliobsz/skills", badge: "AI 工具", badgeType: "opensource", readTime: "3 分钟", hotScore: 64, tags: ["Agent Skill", "建站", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["一句话生成『获奖级』网站的 Agent 技能；", "10 月 12 日创建，300+ star；", "技能化封装的代表样本。"] },
      { title: "笔者观察", type: "text", text: "给游戏团队的启示：你的游戏官网、发行页、 press kit 完全可以用这类技能一键生成初版——把省下的时间花在游戏本体。技能生态越成熟，『周边工件』的人力成本就越趋近于零。参考来源：GitHub。" }
    ] },
    { id: "os-xiryn", category: "opensource", subcategory: "AI 工具", title: "Xiryn 登热榜：开源个人智能体——『Muse、Grok Bot 和 Dots 能做的它都做，还每人一台 Linux 桌面』", summary: "SouravBeraAkaSpeed/xiryn（10 月 11 日创建）登上热榜：开源个人智能体，官方口号直白——Muse、Grok Bot 和 Dots 能做的它都能做，且跑在你自己的电脑上：每个智能体独享一台 Linux 桌面。", source: "GitHub（SouravBeraAkaSpeed）", date: "2026-10-14", url: "https://github.com/SouravBeraAkaSpeed/xiryn", image: "https://opengraph.githubassets.com/1/SouravBeraAkaSpeed/xiryn", badge: "AI 工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 66, tags: ["开源智能体", "本地部署", "Linux"], content: [
      { title: "仓库要点", type: "list", items: ["Xiryn：开源个人智能体；", "卖点：对标 Meta Muse、Grok Bot、OpenAI Dots 的全功能，本地运行；", "架构：每个智能体独享一个 Linux 桌面环境（隔离）。"] },
      { title: "笔者观察", type: "text", text: "『每人一台 Linux 桌面』的隔离设计直接回应了本周断网事件的教训——权限隔离是智能体安全的第一道墙。开源社区用一周时间就给出了 Meta 级安全问题的社区版答案，这个迭代速度值得所有闭源厂商警惕。参考来源：GitHub。" }
    ] },
    { id: "os-pixel-path", category: "opensource", subcategory: "创意工具", title: "Pixel Path 登热榜：把地球上任意两地的真实路线变成像素艺术飞行穿越（Claude Code 技能）", summary: "jonwheatley/pixel-path（10 月 12 日创建）登上热榜：输入任意两个地点，生成一条贯穿真实公路的像素艺术飞行穿越视频——Claude Code 技能形态，创意与数据的碰撞样本。", source: "GitHub（jonwheatley）", date: "2026-10-14", url: "https://github.com/jonwheatley/pixel-path", image: "https://opengraph.githubassets.com/1/jonwheatley/pixel-path", badge: "创意工具", badgeType: "opensource", readTime: "3 分钟", hotScore: 65, tags: ["像素艺术", "地图", "Claude Code", "创意编程"], content: [
      { title: "仓库要点", type: "list", items: ["Pixel Path：两地之间真实公路的像素艺术飞行穿越；", "形态：Claude Code 技能；", "10 月 12 日创建，登热榜。"] },
      { title: "笔者观察", type: "text", text: "这个项目证明『创意技能』的消费级市场已经成立：一个纯趣味想法 + 地图数据 + 生成管线 = 热榜作品。游戏开发者做市场实验的最快路径同理——把玩法 demo 做成一键可跑的技能/工具，传播效率翻倍。参考来源：GitHub。" }
    ] },
    { id: "t-krita", category: "tutorials", subcategory: "美术工具", title: "Krita：免费开源的数字绘画软件——游戏概念图与纹理绘制的零成本方案", summary: "Krita 是免费开源的专业数字绘画软件：笔刷引擎、动画时间轴、HDR 支持一应俱全——游戏概念图、图标与纹理绘制的零成本首选。", source: "Krita", date: "2026-10-14", url: "https://www.krita.org/", image: "", badge: "美术工具", badgeType: "tutorials", readTime: "3 分钟", hotScore: 62, tags: ["Krita", "数字绘画", "开源", "概念图"], content: [
      { title: "工具要点", type: "list", items: ["免费开源的专业数字绘画软件；", "笔刷引擎强大，支持动画时间轴与 HDR；", "Windows / macOS / Linux 全平台。"] },
      { title: "笔者观察", type: "text", text: "本周美术工具线收齐了：Krita（绘画）+ LibreSprite（像素）+ Blender（3D）——三件套全部免费开源，美术工具的成本借口正式清零。Krita 的笔刷引擎对纹理绘制尤其友好，接 UV 贴图工作流很顺。参考来源：Krita 官网。" }
    ] },
    { id: "t-gimp", category: "tutorials", subcategory: "美术工具", title: "GIMP：开源图像处理的常青树——游戏素材后期的万能瑞士军刀", summary: "GIMP 是最老牌的开源图像编辑器：图层、蒙版、脚本化批处理一应俱全——游戏素材的缩放、压缩、格式转换与批量处理的老朋友。", source: "GIMP", date: "2026-10-14", url: "https://www.gimp.org/", image: "", badge: "美术工具", badgeType: "tutorials", readTime: "3 分钟", hotScore: 60, tags: ["GIMP", "图像编辑", "开源", "批处理"], content: [
      { title: "工具要点", type: "list", items: ["最老牌的开源图像编辑器；", "图层 / 蒙版 / 通道 / 脚本化批处理（Script-Fu）；", "全平台免费。"] },
      { title: "笔者观察", type: "text", text: "GIMP 的杀手锏是脚本化批处理：300 张图标要统一缩放导出？Script-Fu 十行搞定。做像素游戏多分辨率适配时，这套批处理流程能省下一个下午又一个下午。参考来源：GIMP 官网。" }
    ] },
    { id: "t-cocos", category: "tutorials", subcategory: "中文引擎", title: "Cocos 官网：国产跨平台引擎的官方门户——小游戏与出海的本土答案", summary: "Cocos 官网汇集引擎下载、文档与生态资源：对微信小游戏、抖音小游戏与出海轻量 3D 的支持是其招牌——国产引擎在轻量化赛道的本土答案。", source: "Cocos", date: "2026-10-14", url: "https://www.cocos.com/", image: "", badge: "中文引擎", badgeType: "tutorials", readTime: "3 分钟", hotScore: 61, tags: ["Cocos", "小游戏", "国产引擎", "跨平台"], content: [
      { title: "站点要点", type: "list", items: ["Cocos 引擎官方门户；", "微信 / 抖音小游戏与出海轻量 3D 支持是招牌；", "中文文档与本土生态完整。"] },
      { title: "笔者观察", type: "text", text: "给想做微信小游戏的同学们一个明确的选型参考：Cocos 在小游戏赛道的工具链成熟度目前是国产引擎里最完整的。本站路线图里『小游戏方向』的同学，把它与 Unity WebGL 路线做一次对比评估再定栈。参考来源：Cocos 官网。" }
    ] },
    { id: "t-gamemaker-portal", category: "tutorials", subcategory: "引擎官网", title: "GameMaker 官网：2D 独立游戏的常青引擎门户——《Undertale》《Hotline Miami》同源", summary: "GameMaker 官网汇集引擎下载、教程与市场资源：这个 2D 引擎养出了《Undertale》《Hotline Miami》《Hyper Light Drifter》——独立游戏史半壁江山的摇篮。", source: "GameMaker", date: "2026-10-14", url: "https://gamemaker.io/en", image: "", badge: "引擎官网", badgeType: "tutorials", readTime: "3 分钟", hotScore: 62, tags: ["GameMaker", "2D", "独立游戏", "Undertale"], content: [
      { title: "站点要点", type: "list", items: ["GameMaker 官方门户：引擎 / 教程 / 市场；", "《Undertale》《Hotline Miami》《Hyper Light Drifter》皆出其手；", "对个人开发者长期免费。"] },
      { title: "笔者观察", type: "text", text: "GameMaker 证明了『约束出杰作』：2D 限定反而逼出了一批影史级独立作品。想做第一款游戏又怕引擎太重的同学，GameMaker 的学习曲线是主流选项里最平的。参考来源：GameMaker 官网。" }
    ] },
    { id: "c-gamescom-asia", category: "contest", subcategory: "展会预告", title: "gamescom asia × Thailand Game Show：10 月 29 日-11 月 1 日曼谷开幕在即", summary: "gamescom asia × Thailand Game Show 将于 10 月 29 日至 11 月 1 日在曼谷举行：科隆展览官方授权的亚洲旗舰展，东南亚最大游戏商务展——含 Thailand Game Awards，出海东南亚的一站式入口。", source: "gamescom asia 官网", date: "2026-10-14", url: "https://gamescom.asia/", image: "https://gamescom.asia/craftscribe/pages/ga2026/img/gcaxtgs26-website-link-preview.png", badge: "展会预告", badgeType: "contest", readTime: "4 分钟", hotScore: 66, tags: ["gamescom asia", "曼谷", "东南亚", "出海"], content: [
      { title: "展会要点", type: "list", items: ["gamescom asia × Thailand Game Show：10 月 29 日-11 月 1 日，曼谷诗丽吉王后国家会议中心；", "科隆展览官方授权的亚洲实体旗舰展；", "首届（2025）录得 206,159 观众与 294 家参展商；含 Thailand Game Awards。"] },
      { title: "笔者观察", type: "text", text: "东南亚是国产游戏出海的热土，而 gamescom asia 是科隆官方认证的区域内最大 B2B+B2C 双线展会——离开幕还有两周，去不了现场的同学关注其线上直播与获奖名单，采购与发行商名单照单研究。参考来源：gamescom asia 官网。" }
    ] },
    { id: "c-ciga-indieplay", category: "contest", subcategory: "赛事入口", title: "CiGA indiePlay 大赛页：国内独立游戏最高规格赛事的官方入口", summary: "CiGA 官网的 indiePlay 大赛页面：国内独立游戏最高规格赛事之一的官方入口——历届获奖者几乎覆盖了华语独立游戏半壁江山，赛程与提交入口以此页为准。", source: "CiGA（中国独立游戏联盟）", date: "2026-10-14", url: "https://www.ciga.me/indieplay/", image: "", badge: "赛事入口", badgeType: "contest", readTime: "3 分钟", hotScore: 60, tags: ["indiePlay", "CiGA", "独立游戏", "国内赛事"], content: [
      { title: "页面要点", type: "list", items: ["indiePlay 大赛官方页面；", "国内独立游戏最高规格赛事之一；", "本站 10 月初曾收录其入围名单报道，此页为赛事总入口。"] },
      { title: "笔者观察", type: "text", text: "indiePlay 的含金量有目共睹：入围即背书，获奖即发行商敲门砖。按规则说明：赛程与提交状态以官方页当前内容为准——把这一页加入书签，每年投稿季第一时间核对。参考来源：CiGA。" }
    ] },
    { id: "c-gamedev-events", category: "contest", subcategory: "赛事日历", title: "gamedev.events：『每一个游戏行业活动，一站集合』——收官收录的全行业日历", summary: "gamedev.events 自称『every game industry event, in one place』：全球游戏行业会议、展会与游戏的统一日历——本站赛事日历系列的收官之作，一页看尽全年活动。", source: "gamedev.events", date: "2026-10-14", url: "https://gamedev.events/", image: "", badge: "赛事日历", badgeType: "contest", readTime: "3 分钟", hotScore: 59, tags: ["日历", "行业活动", "索引"], content: [
      { title: "站点要点", type: "list", items: ["全球游戏行业活动统一日历；", "当前收录含 gamescom asia、11 月多场活动等；", "本站赛事日历系列（CanopyFest / indiegamejams / wakudemo / gamejamcentral / 本站）的收官条目。"] },
      { title: "笔者观察", type: "text", text: "至此本站已收录五个赛事日历源——日历收录到此封顶，今后只从『具体赛事的新阶段』角度增量。使用建议不变：日历用于发现，官方页用于核实，参赛决策以官方信息为准。参考来源：gamedev.events。" }
    ] },
{ id: "os-machine-skill", category: "opensource", subcategory: "AI 工具", title: "Machine Skill 登热榜：一句话让 Claude 生成『照片级物理可交互』的机器模拟器", summary: "AirsupHQ/machine-skill（10 月 12 日创建）登上热榜：用一句话描述任意机器，Claude 即生成照片级、基于物理的交互模拟器（单 HTML 文件）外加一部讲解短片——AI 教学模拟器的又一块拼图。", source: "GitHub（AirsupHQ）", date: "2026-10-14", url: "https://github.com/AirsupHQ/machine-skill", image: "https://opengraph.githubassets.com/1/AirsupHQ/machine-skill", badge: "AI 工具", badgeType: "opensource", readTime: "3 分钟", hotScore: 64, tags: ["模拟器", "Claude", "物理仿真", "技能"], content: [
      { title: "仓库要点", type: "list", items: ["一句话描述 → 照片级物理交互模拟器（单 HTML）；", "附自动生成的讲解短片；", "10 月 12 日创建，登热榜。"] },
      { title: "笔者观察", type: "text", text: "与本周 anatomy（交互式讲解）连读：『AI 生成可交互教学模拟器』正在成为一个独立品类——它的下一站就是游戏化学习。做教育游戏的同学把这两个项目当需求调研报告读。参考来源：GitHub。" }
    ] },
    { id: "t-unity-learn", category: "tutorials", subcategory: "官方学习", title: "Unity Learn：Unity 官方学习门户——从入门路径到认证的免费主线", summary: "Unity Learn 官方学习门户：免费入门路径（Unity Essentials）、项目实战与官方认证一应俱全——配合中文课堂（learn.u3d.cn）构成双语学习主线。", source: "Unity Learn", date: "2026-10-14", url: "https://unity.com/learn", image: "https://cdn.sanity.io/images/fuvbjjlp/production/6b13ada90921dddad9419f4d6f10bc7172d32115-360x192.png", badge: "官方学习", badgeType: "tutorials", readTime: "3 分钟", hotScore: 61, tags: ["Unity", "官方教程", "认证", "学习路径"], content: [
      { title: "门户要点", type: "list", items: ["Unity 官方学习门户；", "Unity Essentials 免费入门路径 + 项目实战 + 认证体系；", "与 learn.u3d.cn 中文课堂互为双语镜像。"] },
      { title: "笔者观察", type: "text", text: "本站此前收录过 Unity Essentials 路径与中文课堂，这次把英文主门户补齐：英文好的同学直接跟官方英文路径，更新最快、术语最准——毕竟引擎文档的最终语言永远是英文。参考来源：Unity Learn。" }
    ] },
    { id: "en-pygame-ce-2-5-8", category: "engine", subcategory: "引擎更新", title: "补位盘点：pygame-ce 2.5.8——社区版 Pygame 的高频迭代线", summary: "补位条目（8 月 9 日）：pygame-ce（社区增强版 Pygame）发布 2.5.8——原版 Pygame 停滞后社区接管的活跃分支，Python 教学 2D 游戏的事实标准。", source: "GitHub（pygame-community）", date: "2026-08-09", url: "https://github.com/pygame-community/pygame-ce/releases/tag/2.5.8", image: "https://opengraph.githubassets.com/1/pygame-community/pygame-ce", badge: "引擎更新", badgeType: "engine", readTime: "3 分钟", hotScore: 57, tags: ["pygame-ce", "Python", "2D", "教学"], content: [
      { title: "发布要点", type: "list", items: ["pygame-ce 2.5.8（8 月 9 日，补位条目如实标注）；", "社区增强版：原版 Pygame 的活跃接棒分支；", "API 兼容原版，性能与特性更激进。"] },
      { title: "笔者观察", type: "text", text: "教 Python 游戏编程的老师请注意：现在应该教 pygame-ce 而不是原版 pygame——API 相同、更新活跃、 bug 修得快。配合本周常青库的『Making Games with Pygame』教程（10-03 入库），Python 路线的教材链完整。参考来源：GitHub。" }
    ] },
    { id: "en-renpy-8-5-3", category: "engine", subcategory: "引擎更新", title: "补位盘点：Ren'Py 8.5.3——视觉小说引擎的持续维护线", summary: "补位条目（5 月 16 日）：视觉小说引擎 Ren'Py 发布 8.5.3——这个 Python 系引擎支撑了全球绝大多数视觉小说与文字冒险游戏，从《Doki Doki Literature Club》到无数国产 AVG。", source: "GitHub（renpy/renpy）", date: "2026-05-16", url: "https://github.com/renpy/renpy/releases/tag/8.5.3.26051504", image: "https://opengraph.githubassets.com/1/renpy/renpy", badge: "引擎更新", badgeType: "engine", readTime: "3 分钟", hotScore: 56, tags: ["Ren'Py", "视觉小说", "Python", "开源"], content: [
      { title: "发布要点", type: "list", items: ["Ren'Py 8.5.3（5 月 16 日，补位条目如实标注）；", "视觉小说 / 文字冒险的事实标准引擎；", "Python 系，脚本化叙事极易上手。"] },
      { title: "笔者观察", type: "text", text: "叙事设计方向的毕设首选：Ren'Py 把『演出』这件事的工程成本降到接近零，你可以把全部精力花在剧本与分支结构上。国产 AVG 这两年的井喷，底层几乎都是它。参考来源：GitHub。" }
    ] },
    { id: "en-ink-1-2-1", category: "engine", subcategory: "叙事工具", title: "补位盘点：ink 1.2.1——Inkle 的叙事脚本语言， branching 叙事的工业标准", summary: "补位条目（5 月 5 日）：Inkle 开源的叙事脚本语言 ink 发布 1.2.1——《天国：拯救》《80 Days》《Disco Elysium（部分）》使用的分支叙事中间件。", source: "GitHub（inkle/ink）", date: "2026-05-05", url: "https://github.com/inkle/ink/releases/tag/v1.2.1", image: "https://opengraph.githubassets.com/1/inkle/ink", badge: "叙事工具", badgeType: "engine", readTime: "3 分钟", hotScore: 57, tags: ["ink", "叙事", "分支剧情", "Inkle"], content: [
      { title: "发布要点", type: "list", items: ["ink 1.2.1（5 月 5 日，补位条目如实标注）；", "Inkle 开源的叙事脚本语言与运行时；", "《80 Days》《天国：拯救》等作品的分支叙事底座。"] },
      { title: "笔者观察", type: "text", text: "ink 解决的是『编剧与程序协作』的接口问题：编剧写 ink 脚本，程序员接运行时——叙事内容的迭代不再需要改代码。做叙事驱动的团队，把 ink 管线搭起来，编剧产能至少翻倍。参考来源：GitHub。" }
    ] },
    { id: "en-stride-samples", category: "engine", subcategory: "引擎更新", title: "Stride 官方示例库更新 4.4.3：C# 开源引擎的学习配套", summary: "Stride 引擎（原 Xenko）官方示例库发布 samples 4.4.3（10 月 6 日）——C# 开源 3D 引擎 Stride 的配套学习工程更新，与引擎主线同步。", source: "GitHub（stride3d/stride）", date: "2026-10-06", url: "https://github.com/stride3d/stride/releases/tag/samples%2F4.4.3", image: "https://opengraph.githubassets.com/1/stride3d/stride", badge: "引擎更新", badgeType: "engine", readTime: "3 分钟", hotScore: 55, tags: ["Stride", "C#", "开源引擎", "示例"], content: [
      { title: "发布要点", type: "list", items: ["Stride 官方示例库 samples 4.4.3（10 月 6 日）；", "C# 开源 3D 引擎 Stride 的配套学习工程；", "与引擎主版本同步更新。"] },
      { title: "笔者观察", type: "text", text: "Stride 是『想用 C# 做 3D 但不想用 Unity』路线的头号候选：编辑器完整、开源、无抽成。官方示例库是比文档更快的上手路径——跑通示例再读源码，一周可入	Status。参考来源：GitHub。" }
    ] }
  ]
}
