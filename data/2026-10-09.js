window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-09",
    weekday: "星期五",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-09 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "《赛博朋克 2077》官宣真人影视化：Paramount 出品，与昨日派拉蒙-华纳合并案无缝联动",
      "Bevy 0.20.0 正式版发布：Rust ECS 引擎完成 rc 打磨",
      "Glen Schofield 访谈：眼下一个好创意比 AI 更能省钱",
      "Xbox 宣布全新 XP 部门：电影、剧集与主题公园的跨媒介扩张",
      "《Pony Island 2: Panda Circus》开放测试报名，原作限时免费"
    ],
    engineStatus: [
      { name: "Unity 6.6", type: "unity", status: "9/1正式发布·WebGPU脱离实验版", badge: "推荐生产", color: "indigo" },
      { name: "Unity 6.7 Beta 4", type: "unity", status: "10/8发布·Beta推进中", badge: "测试中", color: "blue" },
      { name: "团结引擎 1.10.4", type: "tuanjie", status: "9/23发布·持续更新", badge: "国内生态", color: "cyan" },
      { name: "UE 6", type: "unreal", status: "Rocket League首发·2027上线·UEFN合并", badge: "下一代", color: "purple" },
      { name: "Bevy 0.20.0", type: "bevy", status: "10/8正式版·Rust ECS", badge: "新版发布", color: "emerald" },
      { name: "Godot 4.7.2", type: "godot", status: "当前稳定版·4.8 dev 冻结中", badge: "LTS", color: "pink" }
    ]
  },
  hero: {
    id: "cyberpunk-2077-live-action",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "影视化",
    title: "《赛博朋克 2077》官宣真人影视化：Paramount 出品，游戏改编彻底进入大片时代",
    summary: "CD Projekt Red 宣布《赛博朋克 2077》将推出真人影视作品，由 Paramount 出品、曾操刀《毁灭战士》电影的制片人加盟——昨天刚完成华纳游戏合并的派拉蒙，转头就把全球最大的赛博朋克 IP 揽入怀中，游戏改编与片厂版图两条新闻线在此交汇。",
    image: "https://assetsio.gnwcdn.com/cyberpunk-2077-phantom-liberty.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Rock Paper Shotgun",
    date: "2026-10-08",
    url: "https://www.rockpapershotgun.com/all-hail-brand-synergy-cyberpunk-2077-is-getting-a-live-action-adaptation-from-paramount-and-the-producer-behind-the-horrendous-doom-movie",
    readTime: "5 分钟深度",
    hotScore: 92,
    tags: ["赛博朋克 2077", "CD Projekt Red", "Paramount", "影视化"],
    content: [
      { title: "事件要点", type: "list", items: ["CD Projekt Red 官宣《赛博朋克 2077》真人影视化；", "出品方为 Paramount，制片班底含《毁灭战士》电影制片人；", "与本周 Skydance 完成 111 亿美元收购、Paramount 游戏与华纳游戏合并的时间线直接衔接。"] },
      { title: "笔者观察", type: "text", text: "RPS 的标题把『brand synergy（品牌协同）』写进了嘲讽里——《毁灭战士》电影的前科加上派拉蒙刚接管华纳游戏的当口，这条新闻既是 2077 这个 IP 十年长线运营的里程碑，也是『游戏 IP 成为片厂战略资产』的又一实锤。对想做叙事设计的同学，注意观察 CDPR 如何在合同里保住创作控制权——这才是游戏影视化成败的真正变量。参考来源：Rock Paper Shotgun。" }
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
    { id: "g-pony-island-2-playtest", category: "games", subcategory: "测试报名", title: "《Pony Island 2: Panda Circus》开放测试报名，原作限时免费：Daniel Mullins 的类型熔炉又来了", summary: "Daniel Mullins Games 开放《Pony Island 2: Panda Circus》测试资格申请，前作《Pony Island》限时免费领取——在《邪恶冥刻》把『牌桌里藏恐怖游戏』玩成招牌之后，新作从名字起就在预告类型杂糅。", source: "Rock Paper Shotgun", date: "2026-10-08", url: "https://www.rockpapershotgun.com/you-can-now-sign-up-to-playtest-the-genre-bending-pony-island-2-panda-circus-and-while-youre-at-it-the-original-is-free-for-a-few-days-too", image: "https://assetsio.gnwcdn.com/pony-island-2-panda-circus.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "测试报名", badgeType: "games", readTime: "3 分钟", hotScore: 78, tags: ["Pony Island 2", "Daniel Mullins", "测试", "独立游戏"], content: [
      { title: "事件要点", type: "list", items: ["《Pony Island 2: Panda Circus》开放测试报名；", "原作《Pony Island》限时免费（限几日）；", "Mullins 式『类型欺骗』设计再度上演。"] },
      { title: "笔者观察", type: "text", text: "Mullins 的设计哲学值得写进任何一份游戏设计笔记：他做的从来不是『玩法深』，而是『玩家信任被反复校准』——每一层『这其实是个 XX 游戏』的揭示都是一次叙事装置的启动。领个免费原作、报名测试，成本为零，收获是一次完整的元叙事设计课。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-dave-subnautica-collab", category: "games", subcategory: "联动运营", title: "《潜水员戴夫》用《深海迷航 2》联动为 DLC 计划收官：三年长线运营的收束样本", summary: "Mintrocket 宣布《潜水员戴夫》将与《深海迷航 2》展开联动，为其 DLC 计划画上句号——从夜店寿司到海底探险，这款『玩法缝合怪』的长线运营以一场类型呼应的联动收官。", source: "Rock Paper Shotgun", date: "2026-10-08", url: "https://www.rockpapershotgun.com/dave-the-diver-is-wrapping-up-its-dlc-plans-with-an-aquatically-appropriate-subnautica-2-collab", image: "https://assetsio.gnwcdn.com/dave-the-diver-subnautica-2-1.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "联动运营", badgeType: "games", readTime: "3 分钟", hotScore: 72, tags: ["潜水员戴夫", "深海迷航", "Mintrocket", "DLC"], content: [
      { title: "事件要点", type: "list", items: ["《潜水员戴夫》×《深海迷航 2》联动官宣；", "官方明确这是 DLC 计划的收官之作；", "戴夫销量已突破 1000 万（本月早些时候的里程碑）。"] },
      { title: "笔者观察", type: "text", text: "『主动收官』在长线运营里是个稀缺动作——多数服务型游戏的死法是不肯死。戴夫选择用一场『同为潜水题材』的联动谢幕，既是对题材源头的致意，也是把团队精力交还新项目的信号。做运营设计的同学可以研究这种『有尊严的结局』怎么写公告。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-lazares-sacrifice", category: "games", subcategory: "新作前瞻", title: "《Lazare's Sacrifice》：与《巫师之昆特牌》创作者合作的叙事牌组构筑，主题是躲过大革命断头台", summary: "一款由《巫师之昆特牌》创作者参与打造的叙事牌组构筑游戏《Lazare's Sacrifice》曝光：你扮演法国大革命时期的贵族，目标只有一个——在大恐怖中活下来。把『德行与背叛』做成了牌桌上的资源管理。", source: "Rock Paper Shotgun", date: "2026-10-08", url: "https://www.rockpapershotgun.com/lazares-sacrifice-is-a-narrative-deckbuilder-made-with-gwents-creator-about-avoiding-the-guillotine-during-the-french-revolution", image: "https://assetsio.gnwcdn.com/lazares-sacrifice.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作前瞻", badgeType: "games", readTime: "4 分钟", hotScore: 70, tags: ["牌组构筑", "叙事卡牌", "法国大革命"], content: [
      { title: "事件要点", type: "list", items: ["叙事牌组构筑新作《Lazare's Sacrifice》曝光；", "《巫师之昆特牌》创作者参与打造；", "题材：法国大革命，玩法目标是『活过恐怖统治』。"] },
      { title: "笔者观察", type: "text", text: "昆特牌创作者 + 大革命生存题材，这个组合说明牌组构筑品类的下一个战场是『叙事权重』：卡牌不再是战斗指令，而是社交筹码与人情债。本周《Lazare's Sacrifice》与《Volatiles》两篇报道连读，能看出独立团队正在把桌游的结构语言批量搬进电子游戏。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-volatiles-map-building", category: "games", subcategory: "玩法杂糅", title: "《Volatiles》：把《山中小屋的背叛》式拼图建图塞进血腥生存射击", summary: "《Volatiles》借鉴《山中小屋的背叛》等桌游的逐块拼图建图机制，在其上叠加一场血腥的生存射击——地图本身是随机生成的谜题，每一局的建筑关系都不同。", source: "Rock Paper Shotgun", date: "2026-10-08", url: "https://www.rockpapershotgun.com/volatiles-takes-the-piece-by-piece-map-building-of-boardgames-like-betrayal-at-house-on-the-hill-and-slaps-a-gory-survival-shooter-on-top-of-them", image: "https://assetsio.gnwcdn.com/Volatiles-bridge-fight.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "玩法杂糅", badgeType: "games", readTime: "4 分钟", hotScore: 68, tags: ["Volatiles", "桌游机制", "生存射击", "程序生成"], content: [
      { title: "事件要点", type: "list", items: ["《Volatiles》借鉴桌游逐块拼图建图机制；", "参考对象：《山中小屋的背叛》等经典桌游；", "拼图建图 + 血腥生存射击的双层结构。"] },
      { title: "笔者观察", type: "text", text: "桌游的『拼图建图』本质是一种玩家可见的程序生成——比起隐藏在黑箱里的噪声算法，它把随机性变成可阅读的空间叙事。想做 roguelite 关卡生成的同学，去研究桌游怎么用『明牌随机』控制情绪节奏，比读十篇 Perlin 噪声教程更有启发。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "g-prospice-eldritch-logistics", category: "games", subcategory: "玩法杂糅", title: "《Prospice: Anomalous Logistics》：SnowRunner 式物流模拟，但你运的是邪神躯体部件", summary: "《Prospice: Anomalous Logistics》把 SnowRunner 式的重型物流模拟与克苏鲁题材嫁接：你要运输的不是铜管建材，而是邪神的躯体部件——用最枯燥的玩法装最疯狂 的货物。", source: "Rock Paper Shotgun", date: "2026-10-08", url: "https://www.rockpapershotgun.com/prospice-anomalous-logistics-is-snowrunner-except-instead-of-lengths-of-copper-pipe-youre-transporting-the-body-parts-of-eldritch-gods", image: "https://assetsio.gnwcdn.com/_0009_Prospice-hand-on-water.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "玩法杂糅", badgeType: "games", readTime: "4 分钟", hotScore: 66, tags: ["Prospice", "物流模拟", "克苏鲁", "独立游戏"], content: [
      { title: "事件要点", type: "list", items: ["《Prospice: Anomalous Logistics》公开；", "玩法基座：SnowRunner 式重型物流与地形挑战；", "题材反转：运送邪神躯体部件的『异常物流』。"] },
      { title: "笔者观察", type: "text", text: "这个案例是『题材重皮 + 硬核模拟』配方的又一次验证：物流模拟的乐趣张力（打滑、陷车、超载）与恐怖题材的张力（货物不能出事、不能被看、不能被吵醒）天然同构。给自己的毕设找主题时，这种『把 A 玩法的张力翻译成 B 题材的语言』思路可以直接抄。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ai-glen-schofield-interview", category: "ai", subcategory: "AI 观点", title: "Glen Schofield 访谈：『眼下一个好创意比 AI 更能省钱』——从死亡空间到 Callisto 的 3A 反思", summary: "《死亡空间》缔造者 Glen Schofield 在退休后接受 GamesIndustry.biz 长访：谈及《Callisto Protocol》的开发教训与 3A 现状，他给出反直觉判断——在当下，一个真正的好创意省下的钱，比 AI 省下的更多。", source: "GamesIndustry.biz", date: "2026-10-08", url: "https://www.gamesindustry.biz/a-creative-idea-can-save-more-money-than-ai-can-right-now-glen-schofield-on-his-retirement-callisto-protocols-development-and-the-state-of-aaa", image: "https://assetsio.gnwcdn.com/glen-schofield.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "AI 观点", badgeType: "ai", readTime: "8 分钟", hotScore: 84, tags: ["Glen Schofield", "死亡空间", "Callisto Protocol", "3A"], content: [
      { title: "访谈要点", type: "list", items: ["Schofield 宣布退休，回望《死亡空间》与《Callisto Protocol》的开发历程；", "核心观点：『眼下一个好创意比 AI 更能省钱』；", "对 3A 开发现状的成本结构提出批评。"] },
      { title: "笔者观察", type: "text", text: "这句话值得和本周威世智工会的反 AI 条款、SEGA 的『创意不交给 AI』连成一条线：行业里最有资历的一批制作人不否认 AI 的效率价值，但认为它目前只省『执行的钱』，省不了『方向错误的钱』。对学生的启示很直接——先用 AI 提效执行，但把省下的时间投资在创意验证（灰盒原型、玩家测试）上，这才是 AI 时代的正确用法。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "ai-pedaily-holiday-recap", category: "ai", subcategory: "行业综述", title: "『你放假，AI 在进化』：一文补完 OpenAI 与 Anthropic 的假期动态", summary: "投中网 AI 专栏盘点国庆假期期间 OpenAI 与 Anthropic 的密集动态：从全天候主动智能体的产品愿景（走进会议室自动记笔记、打开邮箱代拟回复、无需选择模型），到模型与定价的连环更新——AI 正在从『工具』退到『幕后』。", source: "投中网（pedaily）", date: "2026-10-08", url: "https://news.pedaily.cn/202610/569911.shtml", image: "https://pic2.pedaily.cn/26/202603/20260310@1136549.png", badge: "行业综述", badgeType: "ai", readTime: "6 分钟", hotScore: 73, tags: ["OpenAI", "Anthropic", "智能体", "假期盘点"], content: [
      { title: "盘点要点", type: "list", items: ["梳理假期期间 OpenAI 与 Anthropic 的关键动态；", "产品愿景层：AI 彻底退到幕后的持续在线主动智能——自动记笔记、代回邮件、无需用户选模型；", "与本周 Haiku 5.5 降价、Sonnet 5.5 缓存价格下调的定价线互为印证。"] },
      { title: "笔者观察", type: "text", text: "『不需要你选择用什么模型』这句话比任何一条模型发布都重要——当模型选择消失，意味着竞争的焦点从『哪个模型强』转移到『哪个 Agent 把活干完』。对想在游戏里接 AI 的同学同理：玩家不该感知到模型存在，只该感知到 NPC 突然变聪明了。参考来源：投中网。" }
    ] },
    { id: "ai-agentstore-weekly-oct8", category: "ai", subcategory: "智能体生态", title: "AI 智能体新闻周报（10 月 8 日更新）：一周智能体产品与模型动态汇总", summary: "AI Agent Store 更新至 10 月 8 日的周度智能体新闻汇总：覆盖过去七天智能体产品发布、模型更新与公司动态——从 Claude Haiku 5.5 上线到各家智能体平台的密集迭代。", source: "AI Agent Store", date: "2026-10-08", url: "https://aiagentstore.ai/ai-agent-news/this-week", image: "", badge: "智能体生态", badgeType: "ai", readTime: "6 分钟", hotScore: 66, tags: ["智能体", "周报", "AI 动态"], content: [
      { title: "周报要点", type: "list", items: ["滚动更新至 10 月 8 日的七天智能体动态；", "覆盖 Claude Haiku 5.5 等模型上线与各智能体平台更新；", "智能体产品发布节奏已接近日更。"] },
      { title: "笔者观察", type: "text", text: "把这种周报当『智能体产品雷达』用：每一条都是别人踩过坑的产品形态。做游戏内智能体的同学，重点看它们怎么处理『长任务状态管理』和『失败兜底』——这两个问题在你的 NPC 大脑里同样存在。参考来源：AI Agent Store。" }
    ] },
{ id: "ai-falcon-ocr-arabic", category: "ai", subcategory: "本地化模型", title: "Falcon-OCR-Arabic 发布：TII 把本地化路线从对话推进到文档识别", summary: "阿联酋科技创新研究院（TII）在 Hugging Face 发布 Falcon-OCR-Arabic（10 月 8 日）：面向阿拉伯语文档的 OCR 模型——与本周的 Falcon-Emirati 连读，TII 正把『真正懂本地语言』的路线从对话模型扩展到文档智能。", source: "Hugging Face Blog（TII）", date: "2026-10-08", url: "https://huggingface.co/blog/tiiuae/falcon-ocr-arabic", image: "https://cdn-uploads.huggingface.co/production/uploads/659bc8a7b0f43ed69f0b2300/ZOC7kSLirmEv0lV4UVBAw.png", badge: "本地化模型", badgeType: "ai", readTime: "4 分钟", hotScore: 64, tags: ["Falcon", "TII", "OCR", "阿拉伯语"], content: [
      { title: "发布要点", type: "list", items: ["TII 发布 Falcon-OCR-Arabic（10 月 8 日）；", "定位：面向阿拉伯语文档场景的 OCR 模型；", "与 Falcon-Emirati 同属『本地语言优先』路线。"] },
      { title: "笔者观察", type: "text", text: "OCR 是 AI 本地化里最容易被忽视的一环——对话模型可以说方言，但游戏出海真正卡脖子的是客服工单、支付凭证、玩家问卷这些『文档流』。中东、东南亚市场正在按语言一条条补齐工具链，本地化岗位的同学把这条记进雷达。参考来源：Hugging Face Blog。" }
    ] },
    { id: "ai-thirdruntime-daily-oct8", category: "ai", subcategory: "行业综述", title: "AI 日报（10 月 8 日）：模型发布与研究动态一页速览", summary: "Third Run Time 的 10 月 8 日 AI 日报：汇总当天主要 AI 发布、研究与趋势——用于校准『本周 AI 到底发生了什么』的节奏感。", source: "Third Run Time", date: "2026-10-08", url: "https://thirdruntime.com/", image: "", badge: "行业综述", badgeType: "ai", readTime: "5 分钟", hotScore: 62, tags: ["AI 日报", "行业动态"], content: [
      { title: "日报要点", type: "list", items: ["10 月 8 日当日 AI 领域动态汇总；", "覆盖发布、研究与趋势三类；", "与 Haiku 5.5、Kumo Tabular、Falcon 系列的本周密集发布线互补。"] },
      { title: "笔者观察", type: "text", text: "每天固定的『节奏校准』素材：本周 AI 发布密度明显上台阶（三大厂四条模型线），如果你的毕设或项目要接 AI 能力，现在是最该锁定技术栈的窗口——等发布节奏慢下来再动手，往往意味着你的选型已经落后一代。参考来源：Third Run Time。" }
    ] },
    { id: "en-bevy-0-20-final", category: "engine", subcategory: "引擎发布", title: "Bevy 0.20.0 正式版发布：Rust ECS 引擎完成两个 rc 的打磨", summary: "Bevy 0.20.0 正式版于 10 月 8 日发布——继 9 月 15 日 rc.1、9 月 28 日 rc.2 之后，这个最热门的 Rust 游戏引擎完成了 0.20 周期的最后打磨，特性冻结阶段的管线与调度改进正式落地。", source: "GitHub（bevyengine/bevy）", date: "2026-10-08", url: "https://github.com/bevyengine/bevy/releases/tag/v0.20.0", image: "https://opengraph.githubassets.com/1/bevyengine/bevy", badge: "引擎发布", badgeType: "engine", readTime: "6 分钟", hotScore: 80, tags: ["Bevy", "Rust", "ECS", "开源引擎"], content: [
      { title: "发布要点", type: "list", items: ["Bevy 0.20.0 正式版 10 月 8 日发布；", "时间线：9/15 rc.1 → 9/28 rc.2 → 10/8 final；", "0.20 周期在 rc 阶段冻结的特性正式进入稳定线。"] },
      { title: "笔者观察", type: "text", text: "两个 rc 间隔 13 天、正式版紧随其后——Bevy 的发布纪律已经越来越像正规军。对观望 Rust 游戏开发的同学，0.20 正式版是新的『可以认真立项』的版本线：ECS 心智模型 + 官方 Asset 体系，配合此前报道过的 0.20 特性冻结清单，值得开一个周末小项目试水。参考来源：GitHub。" }
    ] },
    { id: "en-monogame-3-8-6-final", category: "engine", subcategory: "引擎发布", title: "MonoGame 3.8.6 正式版发布：C# 跨平台框架从 preview 转正", summary: "MonoGame 3.8.6 正式版于 10 月 7 日发布——距 10 月 2 日的 preview.2 仅五天，C# 跨平台游戏框架完成本周期收尾。从《星露谷物语》到《Celesste》，MonoGame 仍是 2D 独立开发的长青底座。", source: "GitHub（mono/MonoGame）", date: "2026-10-07", url: "https://github.com/mono/MonoGame/releases/tag/v3.8.6", image: "https://opengraph.githubassets.com/1/mono/MonoGame", badge: "引擎发布", badgeType: "engine", readTime: "4 分钟", hotScore: 71, tags: ["MonoGame", "C#", "跨平台", "开源框架"], content: [
      { title: "发布要点", type: "list", items: ["MonoGame 3.8.6 正式版 10 月 7 日发布；", "10/2 preview.2 → 10/7 final，周期收尾干净利落；", "C# 跨平台 2D 开发的长青框架。"] },
      { title: "笔者观察", type: "text", text: "五天从 preview 到 final 是个好信号：维护节奏健康的框架才值得托付毕设。用 C# 的同学在 Unity 之外多一条『轻依赖、快启动』的路——MonoGame 没有编辑器，但这恰恰逼你把游戏逻辑写成可测试的纯代码，对学工程化的同学是好事。参考来源：GitHub。" }
    ] },
    { id: "en-unity-6-7-b4", category: "engine", subcategory: "版本更新", title: "Unity 6.7 Beta 4 发布：6000.7 线按周推进", summary: "Unity 6000.7.0b4 上架官方发行说明——6.7 Beta 线保持约一周一个 Beta 的节奏推进，WebGPU 与图形栈的下一批改进正在测试通道积累。", source: "Unity 官方发行说明", date: "2026-10-08", url: "https://unity.com/releases/editor/whats-new/6000.7.0b4", image: "https://cdn.sanity.io/images/fuvbjjlp/production/b9385c095d1c8c58f48fc7d4fc8ae257395169c8-266x98.png", badge: "版本更新", badgeType: "engine", readTime: "3 分钟", hotScore: 65, tags: ["Unity", "6000.7.0b4", "Beta"], content: [
      { title: "版本要点", type: "list", items: ["Unity 6000.7.0b4 上架发行说明；", "6.7 Beta 线保持约一周一版的推进节奏（b3 为 10 月初）；", "生产环境仍以 6000.6.x 正式线为准。"] },
      { title: "笔者观察", type: "text", text: "Beta 线的意义在于提前适配 API 变更——毕设赶 6.7 Beta 的同学记得锁定版本号并在 README 里写明，Beta 线不保证向后兼容。生产项目继续守 6000.6.x，等 6.7 转正再迁移。参考来源：Unity 官方。" }
    ] },
    { id: "en-fsr4-handhelds", category: "engine", subcategory: "渲染技术", title: "AMD FSR 4 将于年内登陆掌机 PC：Steam Deck 支持仍需等待", summary: "AMD 确认 FSR 4 升级器将于年内支持掌机 PC（联想 Legion Go 2 等新机型），但 Steam Deck 的支持可能需要更长时间——ML 驱动的超分正在向下渗透，掌机成为光追 + 超分的新战场。", source: "Rock Paper Shotgun", date: "2026-10-08", url: "https://www.rockpapershotgun.com/amds-handsome-fsr-4-upscaler-is-coming-to-handheld-pcs-this-year-though-steam-deck-support-could-take-longer", image: "https://assetsio.gnwcdn.com/Lenovo-Legion-Go-2-best-handheld-PCs.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "渲染技术", badgeType: "engine", readTime: "4 分钟", hotScore: 76, tags: ["AMD", "FSR 4", "掌机", "超分辨率"], content: [
      { title: "事件要点", type: "list", items: ["AMD 确认 FSR 4 年内登陆掌机 PC；", "首批受益机型为联想 Legion Go 2 等新一代掌机；", "Steam Deck 支持可能要更久（硬件代差）。"] },
      { title: "笔者观察", type: "text", text: "FSR 4 上掌机 = ML 超分的算力门槛正式降到 15W 级。对做性能优化的同学，这意味着『掌机画质档』要开始按『有/无 ML 超分』分两档设计；对 Steam Deck 用户，这次 AMD 明确暗示了旧机型不会同等受益——买掌机的时机学又多了一个变量。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "en-witcher-3-bloom-patch", category: "engine", subcategory: "渲染修复", title: "《巫师 3》重制版补丁修复 Bloom 泛光问题：十年老游戏的光照再打磨", summary: "《巫师 3》重制版最新补丁针对游戏的 Bloom（泛光）问题做出改善，并附带一批光照增强——重制版发布一周后，CDPR 在按社区反馈逐项打磨渲染管线。", source: "Rock Paper Shotgun", date: "2026-10-08", url: "https://www.rockpapershotgun.com/the-witcher-3-remastereds-latest-patch-brings-some-bloomin-improvements-to-the-games-bloom-problems-amongst-other-lighting-buffs", image: "https://assetsio.gnwcdn.com/the-witcher-3-remastered-bloom-patch.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "渲染修复", badgeType: "engine", readTime: "3 分钟", hotScore: 69, tags: ["巫师 3", "重制版", "Bloom", "光照"], content: [
      { title: "事件要点", type: "list", items: ["重制版最新补丁改善 Bloom 泛光问题；", "附带一批光照（lighting）增强；", "重制版发布约一周，修复节奏很快。"] },
      { title: "笔者观察", type: "text", text: "Bloom 是最容易被玩家感知、又最难调好的后期效果——过强像『廉价滤镜』，过弱丢氛围。CDPR 在重制周内快速响应社区的光照反馈，这个『发布后渲染调优节奏』值得所有做毕设展示的同学抄：首发版本的渲染参数不是终点，是和玩家对表开始的起点。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "i-xbox-xp-division", category: "industry", subcategory: "大厂动向", title: "Xbox 宣布全新 XP 部门：电影、剧集与主题公园的跨媒介扩张", summary: "Xbox 宣布成立全新 XP（体验）部门，负责把游戏 IP 延伸为跨媒介衍生内容——包括影视与主题公园；同期报道显示 Xbox 还在组建新的授权（licensing）部门，并把 Minecraft 交给前 Meta 变现负责人。", source: "GamesIndustry.biz / Rock Paper Shotgun", date: "2026-10-08", url: "https://www.gamesindustry.biz/xbox-announces-new-xp-division-to-deliver-transmedia-spinoffs-including-film-tv-and-theme-parks", image: "https://assetsio.gnwcdn.com/XP-Logo-e3e9296b3ae0466dea8f-1600x900.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "industry", readTime: "5 分钟", hotScore: 83, tags: ["Xbox", "XP 部门", "跨媒介", "Minecraft"], content: [
      { title: "事件要点", type: "list", items: ["Xbox 宣布成立 XP 部门：负责电影、剧集、主题公园等跨媒介衍生；", "RPS 同日报道：Xbox 组建新授权部门，Minecraft 交由前 Meta 变现负责人；", "与本周 Skydance 合并、Cyberpunk 影视化连读，IP 跨媒介进入军备竞赛。"] },
      { title: "笔者观察", type: "text", text: "『把 Minecraft 交给前 Meta 变现负责人』这个人事安排比部门成立本身更值得盯——变现逻辑全面接管第一方 IP 运营。对行业观察者，Xbox 正在从『卖游戏的公司』转向『IP 授权与体验公司』；对从业者，跨媒介团队的新岗位（叙事宇宙管理、IP 美术规范）正在出现。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-gardens-interactive-35m", category: "industry", subcategory: "投融资", title: "《风之旅人》《光·遇》老兵创办 Gardens Interactive，B 轮融资超 3500 万美元", summary: "由《Journey》与《Sky 光·遇》核心成员创办的 Gardens Interactive 宣布完成超 3500 万美元 B 轮融资——社交向、情感驱动的『禅派』多人游戏正在获得大额资本背书。", source: "GamesIndustry.biz", date: "2026-10-08", url: "https://www.gamesindustry.biz/gardens-interactive-founded-by-veterans-behind-journey-and-sky-children-of-the-light-raise-over-35m-in-series-b-funding-round", image: "https://assetsio.gnwcdn.com/gardens-interactive.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "投融资", badgeType: "industry", readTime: "4 分钟", hotScore: 75, tags: ["Gardens Interactive", "Journey", "融资", "社交游戏"], content: [
      { title: "事件要点", type: "list", items: ["Gardens Interactive 完成超 3500 万美元 B 轮融资；", "创始团队来自《Journey》与《Sky 光·遇》；", "方向：情感驱动的社交多人体验。"] },
      { title: "笔者观察", type: "text", text: "在射击与抽卡统治的融资新闻流里，『禅派社交』拿 3500 万美元 B 轮是个信号：情感化多人体验被视为下一个差异化赛道。做毕设的同学可以研究《光·遇》的『无文字沟通』设计——那套机制是这轮融资背后的设计资产。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-expression-manchester", category: "industry", subcategory: "扩张建组", title: "《Hell Let Loose》开发商 Expression 在曼彻斯特开设新工作室：逆着裁员潮扩编", summary: "《Hell Let Loose》开发商 Expression Group 宣布在曼彻斯特开设新工作室，官方口径是回应『人才市场正在发生的事』——在本周 Gravity Well 裁员 40+ 的背景板下，扩张与收缩同框。", source: "GamesIndustry.biz", date: "2026-10-08", url: "https://www.gamesindustry.biz/hell-let-loose-developer-expression-opens-new-studio-in-manchester-in-response-to-whats-happening-in-the-talent-market", image: "https://assetsio.gnwcdn.com/Expression-Logo-1920.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "扩张建组", badgeType: "industry", readTime: "4 分钟", hotScore: 70, tags: ["Expression", "Hell Let Loose", "曼彻斯特", "扩张"], content: [
      { title: "事件要点", type: "list", items: ["Expression Group 在曼彻斯特开设新工作室；", "官方称此举回应『人才市场正在发生的事』；", "与本周 Gravity Well 裁员 40+、Bit Reactor 召回员工同框。"] },
      { title: "笔者观察", type: "text", text: "英国区域在建组（曼彻斯特）、德国在召回（Bit Reactor）、美国在裁员（Gravity Well）——市场不是整体冷或热，而是按『有稳定现金流的项目』重新洗牌。找实习的同学：看一家公司有没有上线即回款的产品，比看公司大小更准。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-fireshine-fair-games", category: "industry", subcategory: "并购", title: "Fireshine Games 收购《Necesse》开发商 Fair Games：丹麦独立团队的『定义性时刻』", summary: "发行商 Fireshine Games 宣布收购《Necesse》开发商 Fair Games——后者称这是丹麦独立工作室的『定义性时刻』。小型发行商通过收购爆款独立项目完成规模跃升的路径再现。", source: "GamesIndustry.biz", date: "2026-10-08", url: "https://www.gamesindustry.biz/fireshine-games-acquires-necesse-dev-fair-games-described-as-a-defining-moment-for-danish-indie-studio", image: "https://assetsio.gnwcdn.com/necesse.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "并购", badgeType: "industry", readTime: "4 分钟", hotScore: 67, tags: ["Fireshine", "Necesse", "收购", "丹麦独立游戏"], content: [
      { title: "事件要点", type: "list", items: ["Fireshine Games 收购《Necesse》开发商 Fair Games；", "后者称之为丹麦独立工作室的『定义性时刻』；", "《Necesse》为长期在线热度的生存建造游戏。"] },
      { title: "笔者观察", type: "text", text: "注意这条和本周 Skydance 巨型并购的对照：一边是 111 亿美元的片厂合并，一边是一个爆款独立团队的体面退出。独立开发者『做好一款长线游戏然后被收购』的路径依然畅通——前提是产品有 Necesse 式的持续在线社区。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-nba2k27-august-charts", category: "industry", subcategory: "市场数据", title: "《NBA 2K27》登顶美国 8 月销量榜，成为 2026 年迄今第三畅销游戏", summary: "Circana 美国月度数据显示《NBA 2K27》登顶 8 月榜单，并以年内累计销量跻身 2026 年第三畅销游戏——年货体育的正销量曲线依旧是最稳定的行业基本盘。", source: "GamesIndustry.biz", date: "2026-10-08", url: "https://www.gamesindustry.biz/nba-2k27-tops-us-august-charts-becomes-third-best-selling-game-of-2026-us-monthly-charts", image: "https://assetsio.gnwcdn.com/nba-2k27_uqPjEYL.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "市场数据", badgeType: "industry", readTime: "3 分钟", hotScore: 65, tags: ["NBA 2K27", "Circana", "销量榜", "体育年货"], content: [
      { title: "事件要点", type: "list", items: ["《NBA 2K27》登顶美国 8 月销量榜；", "年内累计成为 2026 年第三畅销游戏；", "数据来源为 Circana 美国月度报告。"] },
      { title: "笔者观察", type: "text", text: "每当行业讨论被 AI 和并购刷屏，销量榜都在提醒基本盘：体育年货的确定性现金流是 2K 敢于常年投入画 technician 团队的底气。做市场分析的同学，把『榜单前十里体育游戏的位置』做成十年曲线，会比追热点文章有洞察得多。参考来源：GamesIndustry.biz。" }
    ] },
{ id: "os-anthropics-knowledge-work-plugins", category: "opensource", subcategory: "官方插件库", title: "Anthropic 开源 knowledge-work-plugins：为 Claude Cowork 打造的知识工作者插件官方库", summary: "Anthropic 官方开源 knowledge-work-plugins 仓库：主要面向在 Claude Cowork 中工作的知识工作者提供插件集合——大厂开始为『AI 协作工作流』建官方插件生态。", source: "GitHub（anthropics）", date: "2026-10-09", url: "https://github.com/anthropics/knowledge-work-plugins", image: "https://opengraph.githubassets.com/1/anthropics/knowledge-work-plugins", badge: "官方插件库", badgeType: "opensource", readTime: "4 分钟", hotScore: 77, tags: ["Anthropic", "Claude Cowork", "插件", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["Anthropic 官方开源的知识工作者插件集合；", "主要面向 Claude Cowork 工作流；", "登 GitHub 热榜，官方生态加速成型。"] },
      { title: "笔者观察", type: "text", text: "和本周 cursor/plugins、cmux 连读，『插件/技能层』正在成为 AI 工具竞争的新战场——模型同质化后，拼的是谁的工作流生态好用。对游戏开发者，值得抄的是这套『把重复劳动封装成可分享插件』的思路：你的关卡检查清单、命名规范审查，都可以做成团队插件。参考来源：GitHub。" }
    ] },
    { id: "os-storytold-artcraft", category: "opensource", subcategory: "创作工具", title: "ArtCraft 登热榜：为美术、设计师与影像作者打造的『有意图』创作引擎", summary: "storytold/artcraft 登上 GitHub 热榜：一个面向美术、设计师与影像创作者的『intentional crafting engine』（有意图的创作引擎）——在 AI 生成泛滥的当下，强调创作意图与作者控制的工具正在集结。", source: "GitHub（storytold/artcraft）", date: "2026-10-09", url: "https://github.com/storytold/artcraft", image: "https://opengraph.githubassets.com/1/storytold/artcraft", badge: "创作工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 72, tags: ["ArtCraft", "创作工具", "Rust", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["ArtCraft：面向美术、设计师与影像作者的创作引擎；", "定位强调『intentional（有意图）』的创作控制；", "Rust 实现，本周登 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "『intentional』这个词的选择很聪明——它精准切中了本周整个反 AI 叙事（威世智工会、Schofield、Mod 作者自毁）背后的真实诉求：创作者要的不是反技术，而是控制权。做游戏美术工具方向的同学可以跟进这个项目，工具层的『作者控制』设计会是未来两年的主题。参考来源：GitHub。" }
    ] },
    { id: "os-pokermon-balatro-mod", category: "opensource", subcategory: "游戏 Mod", title: "《Pokermon》登热榜：把每张小丑牌都换成宝可梦的 Balatro 全内容 Mod", summary: "InertSteak/Pokermon 登上 GitHub 热榜：一个全内容《小丑牌》Mod，把游戏中的每张小丑牌（Joker）都替换为宝可梦——玩家自制内容的工程质量与完成度再次刷新认知。", source: "GitHub（InertSteak/Pokermon）", date: "2026-10-09", url: "https://github.com/InertSteak/Pokermon", image: "https://opengraph.githubassets.com/1/InertSteak/Pokermon", badge: "游戏 Mod", badgeType: "opensource", readTime: "4 分钟", hotScore: 74, tags: ["Balatro", "Mod", "宝可梦", "同人"], content: [
      { title: "仓库要点", type: "list", items: ["《Pokermon》：全内容《小丑牌》Mod；", "核心改造：每张小丑牌对应一只宝可梦；", "本周登 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "热榜上出现游戏 Mod 是个好兆头——Mod 社区是行业的人才蓄水池（半个:idsoftware 都出自 Quake Mod 圈）。给学弟学妹的建议依旧是那句：与其空想原创，不如先做一个『把 A 游戏机制搬进 B 游戏』的 Mod 练手，Pokermon 就是这个路径的教科书示范。参考来源：GitHub。" }
    ] },
    { id: "os-facebook-rebalancer", category: "opensource", subcategory: "算法工具", title: "Meta 开源 Rebalancer：用领域专用语言求解『把球装进盒子』式的分配问题", summary: "Meta 开源 Rebalancer：一套用于描述与求解分配问题的领域专用语言（DSL）与工具——本质是带复杂约束的装箱/调度求解器，与游戏业的匹配系统、掉落表平衡、关卡资源分配是同一类数学问题。", source: "GitHub（facebook/rebalancer）", date: "2026-10-09", url: "https://github.com/facebook/rebalancer", image: "https://opengraph.githubassets.com/1/facebook/rebalancer", badge: "算法工具", badgeType: "opensource", readTime: "5 分钟", hotScore: 70, tags: ["Meta", "DSL", "分配问题", "求解器"], content: [
      { title: "仓库要点", type: "list", items: ["Rebalancer：描述并求解分配问题的 DSL 与工具；", "官方示例：按复杂规则『把球放进盒子』；", "Meta 出品，本周登 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "游戏业到处是分配问题：天梯匹配、宝箱掉落权重、副本资源调度、赛季奖励发放。大多数团队用硬编码 if-else 硬扛，而 DSL + 求解器的思路能把规则声明和求解引擎解耦——策划改规则不用等程序员发版。做系统设计的同学值得把这篇当架构课读。参考来源：GitHub。" }
    ] },
    { id: "os-system-design-notes", category: "opensource", subcategory: "学习笔记", title: "system-design-notes 登热榜：《System Design Interview》书的全本笔记开源", summary: "liquidslr/system-design-notes 登上 GitHub 热榜：经典《System Design Interview — An Insider's Guide》一书的系统性学习笔记——服务器架构、扩容、一致性这些后端母题，正是游戏服务端岗位面试的必考区。", source: "GitHub（liquidslr）", date: "2026-10-09", url: "https://github.com/liquidslr/system-design-notes", image: "https://opengraph.githubassets.com/1/liquidslr/system-design-notes", badge: "学习笔记", badgeType: "opensource", readTime: "5 分钟", hotScore: 68, tags: ["系统设计", "面试", "后端", "笔记"], content: [
      { title: "仓库要点", type: "list", items: ["《System Design Interview》的学习笔记开源；", "覆盖扩容、负载均衡、一致性等后端母题；", "本周登 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "走游戏服务端方向的同学请直接收藏：MMO 的区服架构、帧同步的房间服务、长连接网关的扩容，全是这套系统设计母题的变体。用这本书的框架去拆你玩过的任何一款网游的后端，是准备服务端面试最实惠的路径。参考来源：GitHub。" }
    ] },
    { id: "t-sonniss-gdc-audio", category: "tutorials", subcategory: "音频资源", title: "Sonniss GDC 游戏音频包：数十 GB 免版税音效库常年免费", summary: "Sonniss 每年随 GDC 发布的免版税游戏音效合集（GameAudioGDC）常年开放下载：数十 GB 高质量音效，可直接用于商业游戏——独立开发者最缺的音频弹药库。", source: "Sonniss", date: "2026-10-09", url: "https://sonniss.com/gameaudiogdc", image: "https://cdn.sonniss.com/storage/2025/03/Sonniss-Metaimage.png", badge: "音频资源", badgeType: "tutorials", readTime: "3 分钟", hotScore: 64, tags: ["音效", "GDC", "免版税", "资源库"], content: [
      { title: "资源要点", type: "list", items: ["Sonniss 历年 GDC 音频包合集页；", "免版税、可用于商业项目；", "容量以数十 GB 计，音质为商用级。"] },
      { title: "笔者观察", type: "text", text: "毕设和 Jam 作品最露怯的往往是音频——画面能糊弄，静音骗不了人。这套库下载一次够用四年：环境声、UI 反馈、武器动作全覆盖。用之前记得读一遍授权说明（免版税不等于无署名要求），做作品集时注明音效来源也是职业素养。参考来源：Sonniss。" }
    ] },
    { id: "t-polyhaven-cc0", category: "tutorials", subcategory: "素材资源", title: "Poly Haven：CC0 协议的 HDRI、材质与模型库——渲染作业的免费弹药", summary: "Poly Haven 提供 CC0（公有领域）协议的高质量 HDRI 环境贴图、PBR 材质与三维模型——从 Blender 到引擎渲染管线都能直接使用，无署名要求、无授权风险。", source: "Poly Haven", date: "2026-10-09", url: "https://polyhaven.com/", image: "https://cdn.polyhaven.com/site_images/home/window_rend.jpg?width=630&quality=95&v=61684774", badge: "素材资源", badgeType: "tutorials", readTime: "3 分钟", hotScore: 63, tags: ["CC0", "HDRI", "材质", "3D 素材"], content: [
      { title: "资源要点", type: "list", items: ["CC0 协议：无需署名、可商用；", "三类资产：HDRI 环境光、PBR 材质、模型；", "质量达到影视级，引擎直接可用。"] },
      { title: "笔者观察", type: "text", text: "和本周的 FreeSound、poly.pizza 连成『CC0 三件套』：音频、低模、HDRI/材质齐了。给美术新生的建议：先用 CC0 资产把光照和构图练到位，再谈原创建模——顺序反了会让你在低级问题上耗光热情。参考来源：Poly Haven。" }
    ] },
    { id: "t-gamedevbeginner-unity", category: "tutorials", subcategory: "入门教程", title: "Game Dev Beginner：把 Unity 入门知识点写成『一篇一个问题』的教程站", summary: "Game Dev Beginner 是专注 Unity 的英文教程站：每篇文章只解决一个具体问题（相机跟随、事件系统、音频混合器……），文风平实、示例完整——适合当『Unity 知识点字典』用。", source: "Game Dev Beginner", date: "2026-10-09", url: "https://www.gamedevbeginner.com/", image: "https://gamedevbeginner.com/wp-content/uploads/GDB-Social.png", badge: "入门教程", badgeType: "tutorials", readTime: "3 分钟", hotScore: 62, tags: ["Unity", "教程", "入门", "C#"], content: [
      { title: "站点要点", type: "list", items: ["专注 Unity 的单问题式教程站；", "覆盖脚本、UI、音频、输入等常规模块；", "英文平实，示例可直接跑通。"] },
      { title: "笔者观察", type: "text", text: "这个站的价值在『单问题颗粒度』：你卡在『相机抖动怎么平滑』时，它有一篇只讲这个的文章。大教程视频看完容易忘，遇到具体问题回来查字典式地读，才是成人学习的正确姿势。参考来源：Game Dev Beginner。" }
    ] },
    { id: "t-olcpixelgameengine", category: "tutorials", subcategory: "引擎源码", title: "olcPixelGameEngine：javidx9 的单头文件像素游戏引擎——读得懂的引擎第一步", summary: "OneLoneCoder 的 olcPixelGameEngine：单个头文件实现的 2D 像素游戏引擎，配套 javidx9 的 YouTube 系列教程——想『读懂一个引擎』而不是『使用一个引擎』的同学，这是公认的第一站。", source: "GitHub（OneLoneCoder）", date: "2026-10-09", url: "https://github.com/OneLoneCoder/olcPixelGameEngine", image: "https://opengraph.githubassets.com/1/OneLoneCoder/olcPixelGameEngine", badge: "引擎源码", badgeType: "tutorials", readTime: "4 分钟", hotScore: 66, tags: ["olcPixelGameEngine", "javidx9", "C++", "像素游戏"], content: [
      { title: "项目要点", type: "list", items: ["单头文件 2D 引擎，代码量极小；", "配套 javidx9 的免费视频教程系列；", "C++ 编写，覆盖窗口、精灵、输入等核心抽象。"] },
      { title: "笔者观察", type: "text", text: "『从引擎用户到引擎作者』的鸿沟，最好的桥就是这种小引擎：一个周末读完源码，然后试着给它加手柄支持或瓦片地图。面试 TA / 引擎岗时，『我给一个小引擎加过 XX 功能』比『我用过 Unity 五年』更能证明底层理解。参考来源：GitHub。" }
    ] },
    { id: "t-lospec-pixel-art", category: "tutorials", subcategory: "美术资源", title: "Lospec：像素画调色板与免费教程库——2D 美术起步的规范入口", summary: "Lospec 汇集数千套经过筛选的像素画调色板与免费入门教程——配色是像素美术第一道门槛，与其自己调色翻车，不如从受控色板开始建立色感。", source: "Lospec", date: "2026-10-09", url: "https://lospec.com/", image: "https://cdn.lospec.com/static/images/og-image-default.png", badge: "美术资源", badgeType: "tutorials", readTime: "3 分钟", hotScore: 61, tags: ["像素画", "调色板", "教程", "2D 美术"], content: [
      { title: "站点要点", type: "list", items: ["数千套社区筛选的像素画调色板；", "配套免费像素画入门教程列表；", "色板可按色数、色调筛选，直接导入 Aseprite。"] },
      { title: "笔者观察", type: "text", text: "限色训练（比如强制 8 色）是像素美术最有效的入门法——约束逼你做取舍，而取舍才是设计。Aseprite + Lospec 色板 + 每天一张 32x32 小图，一个月后回头看进步会吓到你自己。参考来源：Lospec。" }
    ] },
    { id: "c-uk-best-places-awards", category: "contest", subcategory: "奖项报名", title: "2026 英国 GamesIndustry.biz 最佳工作场所奖开放报名：行业雇主品牌的年度标尺", summary: "GamesIndustry.biz 宣布 2026 年英国『Best Places To Work Awards』开放报名——通过匿名员工调研评选行业最佳雇主，是观察『哪家公司把人当人』的年度公开数据源。", source: "GamesIndustry.biz", date: "2026-10-08", url: "https://www.gamesindustry.biz/you-can-now-enter-the-2026-uk-gamesindustrybiz-best-places-to-work-awards", image: "https://assetsio.gnwcdn.com/maverick-games_lzyeJjS.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "奖项报名", badgeType: "contest", readTime: "3 分钟", hotScore: 60, tags: ["Best Places To Work", "英国", "雇主品牌"], content: [
      { title: "赛事要点", type: "list", items: ["2026 年英国 Best Places To Work Awards 开放报名；", "评选基于员工匿名调研而非自报材料；", "历届结果可用于求职前的公司背调。"] },
      { title: "笔者观察", type: "text", text: "这类奖项对学生的真实价值不在颁奖礼，而在其公开数据：每年入选公司的员工调研分数，是求职前判断『加班文化、管理健康度』最可靠的公开信号。把它加入你的求职背调清单，比看公司官网的招聘文案诚实一百倍。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "c-agda-2026-mixtape", category: "contest", subcategory: "获奖公布", title: "《Mixtape》包揽澳大利亚游戏开发者奖三项大奖含年度游戏", summary: "澳大利亚游戏开发者奖（AGDA）2026 揭晓：《Mixtape》一人独揽三项大奖，其中包括年度游戏（GOTY）——音乐叙事品类的开发者奖项认可度再添一证。", source: "GamesIndustry.biz", date: "2026-10-08", url: "https://www.gamesindustry.biz/mixtape-wins-three-awards-at-australian-game-developer-awards-2026-including-goty", image: "https://assetsio.gnwcdn.com/mixtape_01QjTW0.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "获奖公布", badgeType: "contest", readTime: "3 分钟", hotScore: 62, tags: ["AGDA 2026", "Mixtape", "年度游戏", "澳大利亚"], content: [
      { title: "赛事要点", type: "list", items: ["AGDA 2026 揭晓，《Mixtape》获三项大奖；", "包括最高奖项年度游戏（GOTY）；", "音乐/叙事类作品在区域开发者奖项中持续强势。"] },
      { title: "笔者观察", type: "text", text: "开发者奖（AGDA/IGF/DevGAMM）与媒体奖/销量榜的口味差异本身就是研究对象：开发者奖项偏爱『机制与叙事的完整性』，而《Mixtape》这类作品正是靠设计密度取胜。想报 IGF 或 indiePlay 的同学，研究历年获奖清单的共性，比闷头做游戏更有方向感。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "c-steam-next-fest-oct", category: "contest", subcategory: "Demo 节日", title: "Steam Next Fest 十月场定档 10 月 19-26 日：Demo 冲榜的倒计时已经打开", summary: "Steam 新品节十月场将于 10 月 19-26 日举行，商店页已上线『Coming Soon』状态——Demo 提交节点已过，接下来两周是 wishlists 冲刺与直播预告的黄金窗口。", source: "Steam（官方新品节页面）", date: "2026-10-09", url: "https://store.steampowered.com/sale/nextfest", image: "https://clan.fastly.steamstatic.com/images/39049601/2d38a58b6aeb34af1ff6ee0d2ff92b117e72dbc4.jpg", badge: "Demo 节日", badgeType: "contest", readTime: "4 分钟", hotScore: 63, tags: ["Steam Next Fest", "Demo", "独立游戏", "愿望单"], content: [
      { title: "赛事要点", type: "list", items: ["Steam Next Fest 十月场：10 月 19-26 日；", "官方商店页已上线 Coming Soon 状态；", "Demo 构建截止与资料提交节点已过（9 月底）。"] },
      { title: "笔者观察", type: "text", text: "给准备参赛的同学一个行动清单：①现在就打磨 Demo 的『前 15 分钟』——Next Fest 的转化发生在试玩开头；②直播预告片提前两周挂出；③节日期间的愿望单转化数据要留档，那是你下一轮融资或发行商谈判的核心材料。参考来源：Steam。" }
    ] }
  ]
}
