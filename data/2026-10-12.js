window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-12",
    weekday: "星期一",
    title: "GDPUDev 个人数字创作展示 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-12 07:40",
    editor: "GDPUDev技术中枢 & CodeBuddy",
    highlights: [
      "Capcom 官宣：RE 引擎将引入 AI 加速 QA 调试与数据处理",
      "PAX Aus 2026 落幕：10 月 9-11 日墨尔本三日展",
      "《Phasmophobia》销量破 3000 万并开启 Crimson Eye 活动",
      "《Squadron 42》开放 Steam 愿望单，Q2 2027 发行窗口确认",
      "GPT-6 全量推送 vs Gemini 4 Argon：大模型决战提前打响"
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
    id: "capcom-re-engine-ai",
    category: "ai",
    categoryName: "AI前沿 · 头条",
    tag: "引擎×AI",
    title: "Capcom 官宣：RE 引擎将引入 AI 加速 QA 调试与数据处理——自研引擎大厂的 AI 落地样本",
    summary: "Capcom 表示将增强其自研 RE 引擎，引入 AI 能力以提升 QA 调试与数据处理的效率——继本周 Google×Unity、威世智反 AI 条款之后，『AI 进入引擎管线』终于等来了头部日厂的第一份正式答卷。",
    image: "https://assetsio.gnwcdn.com/resident-evil-requiem-trailer-reveals-bustling-city-location_89ud.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "GamesIndustry.biz",
    date: "2026-10-12",
    url: "https://www.gamesindustry.biz/capcom-aims-to-enhance-its-propriety-re-engine-with-ai-to-accelerate-efficiency-in-qa-debugging-and-data-processing",
    readTime: "6 分钟深度",
    hotScore: 88,
    tags: ["Capcom", "RE 引擎", "AI QA", "自研引擎"],
    content: [
      { title: "事件要点", type: "list", items: ["Capcom 宣布将增强自研 RE 引擎，引入 AI 能力；", "两个落地方向：QA 调试提效与数据处理加速；", "这是头部日厂首次把 AI 写进自研引擎的官方路线图。"] },
      { title: "笔者观察", type: "text", text: "把本周的 AI 新闻连成光谱：一端是威世智工会要求停止推进生成式 AI，另一端是 Capcom 把 AI 写进引擎管线——中间地带才是多数团队的真实现状：『AI 不做创意，AI 做苦力』。QA 调试与数据处理正是最没争议的切入点。对想做引擎工具/TA 方向的同学，『AI 辅助的自动化测试』会是未来两年岗位 JD 里的高频词。参考来源：GamesIndustry.biz。" }
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
    { id: "ai-aitoolsrecap-1011", category: "ai", subcategory: "行业综述", title: "AI News 10 月 11 日：Anthropic 断网事件的 48 小时后续追踪", summary: "AIToolsRecap 的 10 月 11 日日报：聚焦 Anthropic『切断全部内部评测实时联网』决定的后续影响与各方反应——上周末 AI 圈最大的单一事件。", source: "AIToolsRecap", date: "2026-10-11", url: "https://aitoolsrecap.com/Blog/ai-news-october-11-2026", image: "https://aitoolsrecap.com/ArticleImages/default_article.jpg", badge: "行业综述", badgeType: "ai", readTime: "6 分钟", hotScore: 70, tags: ["Anthropic", "AI 安全", "日报"], content: [
      { title: "日报要点", type: "list", items: ["10 月 11 日 AI 动态汇总；", "头条：Anthropic 断网评测事件的后续与行业反应；", "安全评测方法论的调整正在全行业扩散。"] },
      { title: "笔者观察", type: "text", text: "断网事件进入第二天，行业讨论已从『Claude 干了什么』转向『其他实验室的评测环境是否同样存在配置漂移』——这才是事件的真正杀伤半径。做智能体项目的同学把这当免费的风险清单用。参考来源：AIToolsRecap。" }
    ] },
    { id: "ai-hellogrowth-october", category: "ai", subcategory: "行业综述", title: "Hello Growth：10 月 AI 九大发展盘点——从 Copilot 计费到 GPT-6 默认化", summary: "Hello Growth 盘点 2026 年 10 月 AI 领域九大发展：Copilot 按使用量计费、GPT-6 进入 ChatGPT 默认位、Claude Haiku 5.5 价格战、Gemini 智能体——月度尺度的行业全景。", source: "Hello Growth", date: "2026-10-11", url: "https://hellogrowth.ai/en/blog/ai-news-october-2026", image: "https://hellogrowth.ai/en/blog/ai-news-october-2026/opengraph-image-10bt97?f04d467f1487002b", badge: "行业综述", badgeType: "ai", readTime: "8 分钟", hotScore: 69, tags: ["AI 月报", "Copilot", "GPT-6", "Gemini"], content: [
      { title: "盘点要点", type: "list", items: ["10 月 AI 九大发展：Copilot usage billing、GPT-6 in ChatGPT、Claude Haiku 5.5、Gemini agent 等；", "企业视角：计费模式与成本结构的变化被放在首位；", "适合做月度技术雷达的同学交叉核对。"] },
      { title: "笔者观察", type: "text", text: "『Copilot 按使用量计费』这条被多数媒体低估——它意味着 AI 从『按席位订阅』走向『按产出付费』，团队的 AI 预算模型要重写。学生做毕设用免费额度无所谓，但入职后第一个被问的问题大概率是『这个功能的 token 成本是多少』。参考来源：Hello Growth。" }
    ] },
    { id: "ai-aiproducthub-llm-compare", category: "ai", subcategory: "行业综述", title: "10 月大模型横评：Claude Opus 5.5 以 57.6 分登顶综合智能榜", summary: "AI 产品_hub 的 10 月大模型横评：Claude Opus 5.5 以 57.6 分登顶综合智能指数，Google 时隔七个多月推出的 Gemini 4 Argon 紧咬其后——10 月的模型赛道进入密集发布与贴身肉搏。", source: "AI 产品_hub", date: "2026-10-12", url: "https://aiproducthub.cn/wpnote/llm-comparison-october-2026-claude-opus-5-5-gemini-4-argon/", image: "", badge: "行业综述", badgeType: "ai", readTime: "7 分钟", hotScore: 68, tags: ["大模型横评", "Claude Opus 5.5", "Gemini 4 Argon"], content: [
      { title: "横评要点", type: "list", items: ["Claude Opus 5.5：综合智能指数 57.6 分登顶；", "Gemini 4 Argon：时隔七个多月发布的旗舰，紧咬第一梯队；", "10 月发布潮：多款旗舰与子型号密集上线。"] },
      { title: "笔者观察", type: "text", text: "横评的正确用法是看『维度差』而非总分：Opus 5.5 强在长文本与推理稳定性，Argon 强在超长输出——按你的场景挑维度，别按榜单名次站队。这与本周『企业份额平分』的报告互相印证：没有全能王，只有场景最优解。参考来源：AI 产品_hub。" }
    ] },
    { id: "ai-baijiahao-gpt6-gemini", category: "ai", subcategory: "行业综述", title: "OpenAI 突然全量上线 GPT-6，谷歌连夜甩出 Gemini 4：大模型决战提前打响", summary: "编译报道复盘 10 月第一周的『突袭战』：OpenAI 于 10 月 7 日向全球 12 亿 ChatGPT 用户全量推送 GPT-6，而一周前谷歌 DeepMind 刚发布停更七个半月后的旗舰 Gemini 4 Argon——原本预期年底的决战骤然提前。", source: "百度新闻（编译）", date: "2026-10-08", url: "https://baijiahao.baidu.com/s?id=1878471847303141053", image: "", badge: "行业综述", badgeType: "ai", readTime: "8 分钟", hotScore: 75, tags: ["GPT-6", "Gemini 4 Argon", "大模型"], content: [
      { title: "报道要点", type: "list", items: ["OpenAI 10 月 7 日向全球 12 亿 ChatGPT 用户全量推送 GPT-6；", "一周前谷歌 DeepMind 发布停更七个半月后的旗舰 Gemini 4 Argon；", "两家巨头十天内的连续出牌让『大模型决战』提前打响。"] },
      { title: "笔者观察", type: "text", text: "『全量推送』四个字是关键——GPT-6 不是给付费用户的灰度，而是 12 亿人的默认切换。这与本周 Haiku 5.5 降价 75%、企业份额平分连读：模型能力的边际差异在缩小，主战场已经转移到『谁的默认入口更大』。参考来源：百度新闻。" }
    ] },
    { id: "ai-thinkbar-qwen4", category: "ai", subcategory: "行业综述", title: "Gemini 4 Argon 百万 Token 输出落地；阿里确认 Qwen 4 训练中", summary: "ThinkBar 周报（补位条目，10 月 6 日）：谷歌旗舰 Gemini 4 Argon 输出上限提升至百万 Token；DeepSeek V4.1 Flash 将中美顶尖模型差距缩至 3%；阿里确认 Qwen 4 处于训练中（未发布，以官方口径为准）。", source: "ThinkBar（CSDN）", date: "2026-10-06", url: "https://thinkbar.blog.csdn.net/article/details/167163572", image: "https://i-blog.csdnimg.cn/direct/093f989ed66d495991a1625c7ea3e842.png", badge: "行业综述", badgeType: "ai", readTime: "6 分钟", hotScore: 62, tags: ["Gemini 4 Argon", "DeepSeek", "Qwen 4"], content: [
      { title: "周报要点", type: "list", items: ["Gemini 4 Argon：输出上限提升至百万 Token（10 月 5 日正式发布口径）；", "DeepSeek V4.1 Flash：将中美顶尖模型差距缩至 3%；", "阿里确认 Qwen 4 训练中——注意是『训练中』而非已发布。"] },
      { title: "笔者观察", type: "text", text: "补位说明：此篇为 10 月 6 日周报，收录它是因为『Qwen 4 训练中』这条官方口径值得留档——按本站 AI 规矩，训练中就是训练中，发布与否以官方为准。百万 Token 输出对游戏叙事管线的意义：整个剧本世界观的常驻上下文成为可能。参考来源：ThinkBar。" }
    ] },
    { id: "g-hellraiser-review", category: "games", subcategory: "评测", title: "《养鬼吃人：复活》评测解禁：把 BDSM 恐怖做成可玩系统，钉子头回来了", summary: "《Hellraiser: Revival》评测解禁（Eurogamer 等）：这款改编自经典 BDSM 恐怖 IP 的作品把『痛苦与快感的边界』做进了机制——钉子头 Cenobite 的压迫感在实机中得到认可。", source: "Eurogamer", date: "2026-10-11", url: "https://www.eurogamer.net/hellraiser-revival-review", image: "https://assetsio.gnwcdn.com/pinhead-header.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "评测", badgeType: "games", readTime: "6 分钟", hotScore: 74, tags: ["Hellraiser", "养鬼吃人", "恐怖游戏", "评测"], content: [
      { title: "评测要点", type: "list", items: ["《Hellraiser: Revival》媒体评测解禁；", "IP 特色：BDSM 恐怖美学与『快感/痛苦』主题的机制化；", "钉子头与 Cenobite 的实机表现为评测焦点。"] },
      { title: "笔者观察", type: "text", text: "上周的开发者访谈（『不把玩家当猎奇对象』）与本周的评测落地构成完整闭环：题材敏感度靠机制立意撑住。本周还有《Wardogs》的押注机制、R6 的可破坏地形——恐怖与射击两个品类都在用『机制承载主题』说话，这是本周最值得写进设计笔记的趋势。参考来源：Eurogamer。" }
    ] },
    { id: "g-galactic-racer-interview", category: "games", subcategory: "开发者访谈", title: "《星球大战：银河竞速》团队访谈：手感、职业倦怠与桌游灵感", summary: "《Star Wars: Galactic Racer》开发者访谈：谈竞速手感打磨、团队经历倦怠后的节奏调整，以及从桌游汲取的设计灵感——『如果你感受不到意义，做这些是为了什么』。", source: "Eurogamer", date: "2026-10-10", url: "https://www.eurogamer.net/star-wars-galactic-racer-devs-interview-game-feel-burnout-board-game", image: "https://assetsio.gnwcdn.com/New-Project-(30)_bkYmocn.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发者访谈", badgeType: "games", readTime: "6 分钟", hotScore: 70, tags: ["星球大战", "竞速", "开发者访谈", "桌游"], content: [
      { title: "访谈要点", type: "list", items: ["竞速手感（game feel）的打磨过程；", "团队公开谈及倦怠与节奏调整；", "桌游机制作为设计灵感来源。"] },
      { title: "笔者观察", type: "text", text: "『如果感受不到意义，这些是为了什么』——开发者把倦怠摆上台面的坦诚值得记录。这与本周 Undead Labs 拒谈裁员数字、Bit Reactor 召回员工构成完整的劳资光谱。学生团队做毕设时请记住：可持续的节奏本身就是竞争力。参考来源：Eurogamer。" }
    ] },
    { id: "g-marvel-tokon-dlc", category: "games", subcategory: "赛季内容", title: "《Marvel Tōkon: Fighting Souls》公布第一年 DLC 阵容：凤凰女与镭射眼领衔", summary: "Arc System Works 的《Marvel Tōkon: Fighting Souls》公布第一年 DLC 计划：凤凰（Jean Grey）与镭射眼（Cyclops）等 X 战警核心角色确认加入——格斗游戏的年票内容路线持续兑现。", source: "Eurogamer", date: "2026-10-11", url: "https://www.eurogamer.net/marvel-tokon-fighting-souls-year-1-dlc-roster-phoenix-cyclops", image: "https://assetsio.gnwcdn.com/deadpool-slicing-spiderman-marvel-tokon.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "赛季内容", badgeType: "games", readTime: "3 分钟", hotScore: 68, tags: ["Marvel Tōkon", "格斗游戏", "DLC", "X 战警"], content: [
      { title: "公布要点", type: "list", items: ["第一年 DLC 阵容公布：凤凰、镭射眼领衔；", "X 战警角色批量入场；", "发售前的内容路线图承诺。"] },
      { title: "笔者观察", type: "text", text: "格斗游戏的『年票阵容承诺』正在变成标配：先公布第一年路线再发售，用确定性换预购信心。上周 Deadpool 的设计访谈、这周的 DLC 阵容——ArcSys×Marvel 的宣发节奏是内容运营的教科书。参考来源：Eurogamer。" }
    ] },
{ id: "g-phasmophobia-30m", category: "games", subcategory: "销量里程碑", title: "《Phasmophobia》销量突破 3000 万：四年长线的捉鬼经济学", summary: "Kinetic Games 宣布《Phasmophobia》累计销量突破 3000 万份，同步开启 Crimson Eye 万圣节活动——从 2020 年的疫情黑马到主机化后的第二春，4 人小团队的捉鬼游戏完成了长线运营的完整闭环。", source: "Eurogamer", date: "2026-10-11", url: "https://www.eurogamer.net/phasmophobia-30-million-sales-crimson-eye-event", image: "https://assetsio.gnwcdn.com/phasmophobia_header_AdobeStock_291529108.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "销量里程碑", badgeType: "games", readTime: "4 分钟", hotScore: 71, tags: ["Phasmophobia", "销量", "万圣节", "长线运营"], content: [
      { title: "事件要点", type: "list", items: ["累计销量突破 3000 万份；", "Crimson Eye 万圣节活动同步开启；", "主机版与内容更新的双轮驱动持续兑现。"] },
      { title: "笔者观察", type: "text", text: "3000 万份对一款 4 人团队的合作恐怖游戏意味着什么：每年万圣节的内容节点已经养成了玩家的『季节性回归』习惯——和《Phasmophobia》同期爆红的多数游戏早已死掉，它活下来的原因是把『节日』做成了留存机制。参考来源：Eurogamer。" }
    ] },
    { id: "g-squadron-42-wishlist", category: "games", subcategory: "发售窗口", title: "《Squadron 42》开放 Steam 愿望单：Q2 2027 发行窗口确认", summary: "Cloud Imperium 的《Squadron 42》（《星际公民》单人战役）终于开放 Steam 愿望单，并确认 2027 年第二季度发行窗口——这款开发超过十年的太空歌剧离玩家又近了一步。", source: "Eurogamer", date: "2026-10-11", url: "https://www.eurogamer.net/squadron-42-steam-wishlist-q2-2027-release", image: "https://assetsio.gnwcdn.com/crytek-wants-to-dismiss-its-own-lawsuit-against-the-star-citizen-developer-until-squadron-42-comes-out-1578155315461.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "发售窗口", badgeType: "games", readTime: "4 分钟", hotScore: 69, tags: ["Squadron 42", "星际公民", "Steam", "发售窗口"], content: [
      { title: "事件要点", type: "list", items: ["《Squadron 42》开放 Steam 愿望单；", "发行窗口：2027 年第二季度；", "开发十余年的单人大作进入收尾宣发阶段。"] },
      { title: "笔者观察", type: "text", text: "『开放愿望单』这个动作本身就是里程碑信号——CIG 十年来第一次愿意接受 Steam 生态的公开检验（愿望单数、愿望转化率都会被行业盯着看）。当年 Crytek 诉讼时有人开玩笑『等 Squadron 42 出来再说』，现在这个梗终于有了兑现日期。参考来源：Eurogamer。" }
    ] },
    { id: "i-star-wars-luna", category: "industry", subcategory: "平台合作", title: "《星球大战：银河竞速》登陆 Amazon Luna：Prime 订阅捆绑的新分发样本", summary: "《Star Wars: Galactic Racer》上线 Amazon Luna，作为 Prime 订阅的一部分——新 IP 首发即绑云游戏订阅，是『订阅制分发换曝光』路线的又一实验。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/star-wars-galactic-racer-launches-on-amazon-luna-as-part-of-prime-subscription", image: "https://assetsio.gnwcdn.com/Star-Wars_-Galactic-Racer-Screenshot-9.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "平台合作", badgeType: "industry", readTime: "3 分钟", hotScore: 64, tags: ["Amazon Luna", "Prime", "云游戏", "订阅"], content: [
      { title: "事件要点", type: "list", items: ["《Star Wars: Galactic Racer》登陆 Amazon Luna；", "纳入 Prime 订阅内容库；", "云游戏分发与订阅捆绑的组合拳。"] },
      { title: "笔者观察", type: "text", text: "本周的云游戏叙事很有层次：GI 评论说『串流的时刻没到来』（技术就位、商业模式卡住），而 Luna 这单是发行方绕开商业模式难题的直接尝试——把游戏塞进 Prime 大包里，让云串流成为会员权益而非独立付费项。成不成，都是订阅制终局的一次压力测试。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-jobs-roundup-october", category: "industry", subcategory: "人事变动", title: "十月人事汇总：Playstack CEO Harvey Elliott 当选 UKIE 主席", summary: "GamesIndustry.biz 十月人事汇总：Playstack CEO Harvey Elliott 当选英国游戏行业协会 UKIE 新任主席，另有多家工作室管理层调整——行业协会的领导层换代影响未来政策议程。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/jobs-roundup-october-playstack-ceo-harvey-elliott-voted-in-as-char-of-ukie", image: "https://assetsio.gnwcdn.com/harvey-elliot-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "人事变动", badgeType: "industry", readTime: "4 分钟", hotScore: 62, tags: ["UKIE", "Playstack", "人事", "行业协会"], content: [
      { title: "汇总要点", type: "list", items: ["Playstack CEO Harvey Elliott 当选 UKIE 主席；", "多家工作室十月人事调整一并收录；", "UKIE 新主席将主导行业政策议程。"] },
      { title: "笔者观察", type: "text", text: "行业协会主席的更替通常无人在意，但它决定未来两年英国游戏业对 AI、税收、教育的官方立场——对想去英国发展的同学，UKIE 的政策风向比任何单条新闻都值得追踪。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-asha-sharma-growth", category: "industry", subcategory: "大厂动向", title: "Xbox 内部town hall：Asha Sharma 称业务『开始重回增长』", summary: "Xbox CEO Asha Sharma 在内部员工大会上表示 Xbox 业务已『开始重回增长』——延续上周『Xbox 不出售』的表态，官方叙事从防守转向反攻。", source: "GamesIndustry.biz", date: "2026-10-07", url: "https://www.gamesindustry.biz/asha-sharma-reportedly-informs-staff-that-xbox-has-started-to-return-to-growth-during-internal-town-hall", image: "https://assetsio.gnwcdn.com/xbox-logo_OJRhRlL.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "industry", readTime: "4 分钟", hotScore: 63, tags: ["Xbox", "Asha Sharma", "内部大会"], content: [
      { title: "事件要点", type: "list", items: ["Asha Sharma 在内部 town hall 表示 Xbox『开始重回增长』；", "延续上周『Xbox 不出售』的官方表态；", "补位说明：本文发布于 10 月 7 日，作为本周 Xbox 叙事线的补档收录。"] },
      { title: "笔者观察", type: "text", text: "补位说明：此篇为上周报道，收录以补全 Xbox 叙事链（不出售 → 重回增长 → 本周的 XP 跨媒介部门）。『重回增长』的定义口径未公开——是 Game Pass 订阅、内容收入还是整体利润，值得持续追问。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "i-gaminglayoffs-tracker", category: "industry", subcategory: "数据资源", title: "Gaming Layoffs 实时追踪站：2026 年行业裁员已达 11580 人预测线", summary: "Gaming Layoffs（实时裁员追踪站）与 Game Industry Library 数据显示：2026 年游戏业预计裁员数已攀升至 11580 人，同比增长 8.4%——数字背后是每一家具体的工作室与每一个具体的名字。", source: "Gaming Layoffs / Game Industry Library", date: "2026-10-10", url: "https://gaminglayoffs.com/", image: "", badge: "数据资源", badgeType: "industry", readTime: "4 分钟", hotScore: 67, tags: ["裁员", "数据", "行业统计"], content: [
      { title: "数据要点", type: "list", items: ["Gaming Layoffs：实时追踪每次裁员与工作室关停；", "Game Industry Library：2026 年预计裁员 11580 人，同比增长 8.4%；", "数据可回溯至 2020 年，含母公司与受影响人数。"] },
      { title: "笔者观察", type: "text", text: "本周行业新闻的关键词排序是：裁员（Gravity Well、Undead Labs）、关停（R6 手游、Nerial）、合并（Skydance、Fireshine）——把本周新闻放进这个追踪站的时间轴里，『行业收缩』不再是抽象概念。做行业分析的同学，这是比任何报道都硬的数据源。参考来源：Gaming Layoffs。" }
    ] },
{ id: "os-gods-eye-view", category: "opensource", subcategory: "数据可视化", title: "Gods Eye View 登热榜：浏览器里的『间谍卫星模拟器』，数据全是真的", summary: "bilawalsidhu/gods-eye-view 登上 GitHub 热榜：在照片级 3D 地球上运行的开源空间情报（OSINT）可视化——一颗『间谍卫星』视角，数据是真实公开来源。", source: "GitHub（bilawalsidhu）", date: "2026-10-12", url: "https://github.com/bilawalsidhu/gods-eye-view", image: "https://opengraph.githubassets.com/1/bilawalsidhu/gods-eye-view", badge: "数据可视化", badgeType: "opensource", readTime: "4 分钟", hotScore: 71, tags: ["OSINT", "3D 地球", "开源", "可视化"], content: [
      { title: "仓库要点", type: "list", items: ["浏览器内运行的间谍卫星模拟视角；", "数据来自真实公开来源的空间情报；", "照片级 3D 地球渲染底座。"] },
      { title: "笔者观察", type: "text", text: "抛开 OSINT 的敏感性，纯看技术栈：实时卫星数据流 + 3D 地球渲染 + 浏览器端流式加载——这套组合拳与游戏引擎的『开放世界地图流式加载』是同一类问题。做地图类/模拟类玩法的同学可以研究它的数据管线。参考来源：GitHub。" }
    ] },
    { id: "os-airllm", category: "opensource", subcategory: "AI 基础设施", title: "AirLLM 回归热榜：单张 4GB 显卡跑 70B 模型推理", summary: "lyogavin/airllm 本周重回 GitHub 热榜：让 70B 大模型在单张 4GB 显卡上完成推理的极限压缩方案——本地化部署的门槛被压到消费级设备的地板。", source: "GitHub（lyogavin）", date: "2026-10-12", url: "https://github.com/lyogavin/airllm", image: "https://opengraph.githubassets.com/1/lyogavin/airllm", badge: "AI 基础设施", badgeType: "opensource", readTime: "4 分钟", hotScore: 68, tags: ["本地推理", "70B", "模型压缩", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["AirLLM：70B 模型单张 4GB GPU 推理；", "分层换入换出的极限内存管理；", "本周重回 GitHub 热榜。"] },
      { title: "笔者观察", type: "text", text: "与本周 Claude 断网事件对读：云端智能体的风险让『本地小模型』路线重新有了吸引力——AirLLM 这类方案意味着离线 NPC、无网环境的 AI 工具都成为可能。学生党在自己的游戏本上跑 70B，毕设的 AI 部分可以完全离线交付。参考来源：GitHub。" }
    ] },
    { id: "os-asd-ste100-skill", category: "opensource", subcategory: "AI 工具", title: "ASD-STE100 技术英语规范变身 Claude Code Skill：给智能体的『说明书语法课』", summary: "danyuchn/asd-ste100-skill 登上热榜：把 ASD-STE100 简化技术英语规范改造成 Claude Code 技能——用航空工业百年沉淀的『无歧义英语』规则，重写智能体面向的指令文本。", source: "GitHub（danyuchn）", date: "2026-10-12", url: "https://github.com/danyuchn/asd-ste100-skill", image: "https://opengraph.githubassets.com/1/danyuchn/asd-ste100-skill", badge: "AI 工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 66, tags: ["ASD-STE100", "Claude Code", "提示词工程", "技能包"], content: [
      { title: "仓库要点", type: "list", items: ["ASD-STE100（简化技术英语）规范 → Claude Code 技能；", "用途：重写智能体指令中的歧义英语；", "航空/军工领域百年的无歧义文档标准。"] },
      { title: "笔者观察", type: "text", text: "这个项目的洞察极妙：Anthropic 断网事件暴露的正是『指令歧义』的代价——模型对模糊指令的『创造性解读』会闯祸。用航空业的无歧义英语标准约束智能体指令，是把百年工程纪律平移到 AI 时代。写 system prompt 的同学值得全文精读。参考来源：GitHub。" }
    ] },
    { id: "os-anatomy-skill", category: "opensource", subcategory: "AI 工具", title: "Anatomy 登热榜（3100+★）：把技术想法变成可交互讲解的 Claude Code 技能", summary: "wheresryan22/anatomy（10 月 8 日创建）冲上热榜：一个 Claude Code 技能——输入一个技术概念，输出详细的交互式讲解页面，3100+ star 的增长速度印证了『AI 教学可视化』的需求。", source: "GitHub（wheresryan22）", date: "2026-10-12", url: "https://github.com/wheresryan22/anatomy", image: "https://opengraph.githubassets.com/1/wheresryan22/anatomy", badge: "AI 工具", badgeType: "opensource", readTime: "4 分钟", hotScore: 67, tags: ["Claude Code", "教学可视化", "技能包", "开源"], content: [
      { title: "仓库要点", type: "list", items: ["Anatomy：技术概念 → 交互式讲解页面；", "Claude Code 技能形态，即装即用；", "10 月 8 日创建，3100+ star。"] },
      { title: "笔者观察", type: "text", text: "对游戏开发教学的想象空间巨大：把『ECS 架构』『蒙皮权重』这类抽象概念喂进去，得到可拖拽的交互讲解页——学生做毕设答辩、博主做教程、团队做内部培训都能用。它和本周的 diagram-design、knowledge-work-plugins 连成一个『AI 产出物』的新品类。参考来源：GitHub。" }
    ] },
    { id: "os-robot-heads", category: "opensource", subcategory: "前端资产", title: "robot-heads 登热榜：React 可用的动画 3D 机器人头套件——AI 产品的『拟人化皮肤』", summary: "fayazara/robot-heads（10 月 9 日创建）登上热榜：为 React 提供的动画 3D 机器人头组件——电视头机器人配 LED 表情脸，专为 AI 产品界面设计的拟人化视觉语言。", source: "GitHub（fayazara）", date: "2026-10-12", url: "https://github.com/fayazara/robot-heads", image: "https://opengraph.githubassets.com/1/fayazara/robot-heads", badge: "前端资产", badgeType: "opensource", readTime: "3 分钟", hotScore: 63, tags: ["React", "3D 资产", "AI 界面", "动画"], content: [
      { title: "仓库要点", type: "list", items: ["React 动画 3D 机器人头组件库；", "电视头造型 + LED 表情脸；", "10 月 9 日创建，登热榜。"] },
      { title: "笔者观察", type: "text", text: "当每个产品都要一个『AI 助手形象』时，拟人化界面资产就成了刚需品类——这本质上是游戏资产管线向 Web/AI 产品的外溢。做 3D 角色的美术同学注意：LED 表情、待机动画这些『游戏角色基本功』正在变成 Web 界面的招聘加分项。参考来源：GitHub。" }
    ] },
    { id: "t-sunday-papers-831", category: "tutorials", subcategory: "周日读报", title: "Sunday Papers 第 831 期：RPS 周日读报——一周游戏文化与产业深度链接精选", summary: "Rock Paper Shotgun 第 831 期《Sunday Papers》：每周日精选一周内最值得深读的游戏文化、产业与开发长文链接——本站惯例收录的周末『慢阅读』入口。", source: "Rock Paper Shotgun", date: "2026-10-11", url: "https://www.rockpapershotgun.com/the-sunday-papers-831", image: "https://assetsio.gnwcdn.com/the-sunday-papers-big.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "周日读报", badgeType: "tutorials", readTime: "15 分钟", hotScore: 60, tags: ["Sunday Papers", "周报", "游戏文化"], content: [
      { title: "栏目要点", type: "list", items: ["RPS 每周日的深度链接精选栏目；", "覆盖游戏文化、产业分析、开发幕后长文；", "第 831 期，栏目历史已超过 15 年。"] },
      { title: "笔者观察", type: "text", text: "本站例行收录 Sunday Papers 的理由不变：它是英语游戏圈『慢阅读』的雷达——快讯看本站，深读看这里。周日晚泡一杯茶读完，周一的谈资和选题灵感都齐了。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "t-tiled-editor", category: "tutorials", subcategory: "关卡工具", title: "Tiled Map Editor：2D 关卡编辑的事实标准，免费开源", summary: "Tiled 是 2D 关卡编辑的事实标准：免费开源、支持正交/等距/六边形地图、图块层与对象层分离、导出格式几乎被所有 2D 引擎原生支持——从《Hollow Knight》原型到独立杰作的背后都有它。", source: "Tiled（Map Editor）", date: "2026-10-12", url: "https://www.mapeditor.org/", image: "https://www.mapeditor.org/img/tiled_logo.png", badge: "关卡工具", badgeType: "tutorials", readTime: "3 分钟", hotScore: 64, tags: ["Tiled", "关卡编辑", "2D", "开源"], content: [
      { title: "工具要点", type: "list", items: ["免费开源的 2D 关卡编辑器；", "正交 / 等距 / 六边形三种地图模式；", "TMX/JSON 导出格式被 Unity、Godot、Phaser 等广泛支持。"] },
      { title: "笔者观察", type: "text", text: "『策划不改代码就能改关卡』的管线梦，20 年前就由 Tiled 实现了。学生团队最容易犯的错是策划在代码里调关卡——引入 Tiled 之后，关卡迭代速度和团队协作都会上一个台阶。参考来源：Tiled 官网。" }
    ] },
    { id: "t-audacity", category: "tutorials", subcategory: "音频工具", title: "Audacity：开源音频编辑的常青树——游戏音效处理的第一站", summary: "Audacity 是免费开源的音频编辑器：录音、剪辑、降噪、变调一应俱全——配合本周的 FreeSound 素材库与 Sonniss 音频包，构成零成本的游戏音频工作流。", source: "Audacity", date: "2026-10-12", url: "https://www.audacityteam.org/", image: "https://www.audacityteam.org/wp-content/uploads/2023/og-audacity.png", badge: "音频工具", badgeType: "tutorials", readTime: "3 分钟", hotScore: 61, tags: ["Audacity", "音频", "开源", "音效"], content: [
      { title: "工具要点", type: "list", items: ["免费开源的跨平台音频编辑器；", "录音、多轨剪辑、降噪、效果器齐全；", "导出格式覆盖游戏引擎常用音频类型。"] },
      { title: "笔者观察", type: "text", text: "零成本音频工作流的最后一块拼图：FreeSound 找素材（本周已入库）→ Audacity 剪辑降噪 → 引擎内混音。音频是毕设答辩时最容易被低估的加分项——评委记不住你的光照参数，但记得住一段好音效。参考来源：Audacity 官网。" }
    ] },
    { id: "t-bfxr", category: "tutorials", subcategory: "音频工具", title: "Bfxr：网页版 8-bit 音效生成器——复古游戏音效的一键解决方案", summary: "Bfxr 是经典的程序化 8-bit 音效生成器：射击、爆炸、拾取、跳跃等复古音效一键随机生成再手动微调，导出 WAV 直接进引擎——Game Jam 音效的祖传救命工具。", source: "Bfxr", date: "2026-10-12", url: "https://www.bfxr.net/", image: "", badge: "音频工具", badgeType: "tutorials", readTime: "3 分钟", hotScore: 59, tags: ["音效", "8-bit", "程序化生成", "Game Jam"], content: [
      { title: "工具要点", type: "list", items: ["网页版程序化 8-bit 音效生成器；", "预设分类：射击 / 爆炸 / 拾取 / 受击 / 跳跃；", "随机生成 + 参数微调，导出 WAV。"] },
      { title: "笔者观察", type: "text", text: "与 jsfxr（同家族的网页版）互为备份：48 小时 Jam 里音效来不及做，Bfxr 十分钟生成一整套复古音效——风格还自带『复古像素』的统一感。配合本周的 Game-icons 图标库，2D 复古项目的美术音频成本可以压到几乎为零。参考来源：Bfxr。" }
    ] },
    { id: "c-ciga-gamejams", category: "contest", subcategory: "赛事入口", title: "CiGA GameJams 页面：中国独立游戏联盟的 Jam 活动总入口", summary: "CiGA（中国独立游戏联盟）官网的 GameJams 页面：汇总其主办与合作的 Game Jam 活动入口——包括 CiGA Game Jam 与各类线上/线下创作活动，是国内 Jam 玩家的官方信息源。", source: "CiGA（中国独立游戏联盟）", date: "2026-10-12", url: "https://www.ciga.me/gamejams/", image: "", badge: "赛事入口", badgeType: "contest", readTime: "3 分钟", hotScore: 58, tags: ["CiGA", "Game Jam", "中国独立游戏"], content: [
      { title: "页面要点", type: "list", items: ["CiGA 官方 GameJams 活动汇总页；", "涵盖 CiGA Game Jam 及合作 Jam 活动入口；", "国内线下 Jam 场地与社群的第一手信息源。"] },
      { title: "笔者观察", type: "text", text: "按本站规则说明：CiGA 是国内 Jam 生态的官方组织方，此页作为赛事入口收录（具体赛程以页面当前内容为准）。国内同学参加线下 Jam 的第一站—— CiGA 的线下站分布广，认识同城开发者的效率最高。参考来源：CiGA。" }
    ] },
    { id: "c-uk-awards-pictures", category: "contest", subcategory: "颁奖礼", title: "2026 英国 Best Places To Work 奖项典礼图集：颁奖夜现场直击", summary: "GamesIndustry.biz 发布 2026 年『Best Places To Work Awards』颁奖礼现场图集：从报名、员工调研到颁奖夜，本站追踪的这条雇主品牌赛事线正式收官。", source: "GamesIndustry.biz", date: "2026-10-12", url: "https://www.gamesindustry.biz/in-pictures-the-best-places-to-work-awards-2026", image: "https://assetsio.gnwcdn.com/5D7A8407-Edit.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "颁奖礼", badgeType: "contest", readTime: "3 分钟", hotScore: 57, tags: ["Best Places To Work", "颁奖礼", "英国", "雇主品牌"], content: [
      { title: "赛事要点", type: "list", items: ["2026 Best Places To Work Awards 颁奖礼举行；", "现场图集发布；", "本站 10-09 曾收录其报名入口——从报名到颁奖的完整周期收官。"] },
      { title: "笔者观察", type: "text", text: "报名（上周收录）→ 调研 → 颁奖（本周）——三个月的完整赛事周期。图集里出现的公司面孔值得留档：明年求职季，这些就是『员工体验』有公开背书的雇主名单。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "c-pax-aus-2026", category: "contest", subcategory: "展会回顾", title: "PAX Aus 2026 落幕：墨尔本三日的南半球最大游戏展", summary: "南半球最大游戏展 PAX Aus 2026 于 10 月 9-11 日在墨尔本举行并落幕：试玩、独立游戏展区、桌游与行业论坛三日连轴——澳大利亚游戏周（Melbourne International Games Week）的核心活动。", source: "PAX Aus 官网", date: "2026-10-11", url: "https://aus.paxsite.com/", image: "https://aus.paxsite.com/content/dam/sitebuilder/rxau/pax/aus/metadata/seo/homepage-pax-aus.jpg/_jcr_content/renditions/original", badge: "展会回顾", badgeType: "contest", readTime: "3 分钟", hotScore: 59, tags: ["PAX Aus", "墨尔本", "游戏展", "独立游戏"], content: [
      { title: "展会要点", type: "list", items: ["PAX Aus 2026：10 月 9-11 日，墨尔本；", "Melbourne International Games Week 的核心活动；", "试玩区、独立游戏展区（Indie Showcase）、桌游区与行业论坛并行。"] },
      { title: "笔者观察", type: "text", text: "PAX Aus 的 Indie Showcase 是南半球独立游戏的入场券——历届入选者多被发行商现场签约。对想做海外市场的国内独立团队，PAX 系（美/澳）的 Indie Showcase 报名周期都在展会前半年，现在就该研究明年的窗口。参考来源：PAX Aus 官网。" }
    ] },
    { id: "i-gameindustry-library", category: "industry", subcategory: "数据资源", title: "Game Industry Library：2026 年行业裁员预测攀升至 11580 人（+8.4%）", summary: "行业报告聚合站 Game Industry Library 的最新数据显示：2026 年游戏业预计裁员总数已攀升至 11580 人，同比增长 8.4%——与本周 Gravity Well、Undead Labs 等具体案例互相印证的宏观数据面。", source: "Game Industry Library", date: "2026-10-10", url: "https://gameindustrylibrary.com/", image: "https://gameindustrylibrary.com/opengraph-image.png?opengraph-image.2azx8q6bpdrln.png", badge: "数据资源", badgeType: "industry", readTime: "5 分钟", hotScore: 66, tags: ["裁员", "行业报告", "数据"], content: [
      { title: "数据要点", type: "list", items: ["2026 年行业裁员预测：11580 人（同比 +8.4%）；", "站点聚合游戏业报告与新闻的数据面板；", "与 Gaming Layoffs 实时追踪站（今日同收）构成宏微观数据组合。"] },
      { title: "笔者观察", type: "text", text: "把宏观数据（11580 人）与微观案例（本周 Gravity Well 的 40+ 人）叠在一起看，收缩的颗粒度才完整。给准备入行的同学一个冷静的结论：行业在收缩中重构，但『有上线作品、有数据思维』的候选人依然稀缺——用这两条武装自己比焦虑有用。参考来源：Game Industry Library。" }
    ] },
    { id: "t-sfxr-me", category: "tutorials", subcategory: "音频工具", title: "jsfxr（sfxr.me）：网页版 8-bit 音效生成器的轻量姊妹版", summary: "sfxr.me 提供 jsfxr——经典 Bfxr 的网页轻量版：打开即用、零注册，随机生成 8-bit 音效后直接导出 WAV，连收藏夹都不用占。", source: "sfxr.me（jsfxr）", date: "2026-10-12", url: "https://sfxr.me/", image: "", badge: "音频工具", badgeType: "tutorials", readTime: "2 分钟", hotScore: 57, tags: ["音效", "8-bit", "网页工具"], content: [
      { title: "工具要点", type: "list", items: ["jsfxr：网页版 8-bit 音效生成；", "与 Bfxr 同家族，界面更轻量；", "导出 WAV 即插即用。"] },
      { title: "笔者观察", type: "text", text: "与今日收录的 Bfxr 二选一即可：Bfxr 参数更全、jsfxr 更轻快。两者的共同哲学是『程序化生成取代音频制作』——把音效从『资源问题』变成『参数问题』，这正是 Jam 文化对行业最大的贡献之一。参考来源：sfxr.me。" }
    ] },
    { id: "en-babylon-partial-graphics", category: "engine", subcategory: "图形技术", title: "补位精读：DirectX『Partial Graphics Programs』——把着色器编译变成增量问题", summary: "补位条目（原文 5 月 27 日）：DirectX 官博的 Partial Graphics Programs 深度文——把庞大的图形程序编译拆分为可增量处理的片段，从根上缓解着色器编译卡顿这一 3A 通病。", source: "DirectX Developer Blog", date: "2026-05-27", url: "https://devblogs.microsoft.com/directx/partial-graphics-programs/", image: "https://devblogs.microsoft.com/directx/wp-content/uploads/sites/42/2026/05/Screenshot-2026-05-27-123441.webp", badge: "图形技术", badgeType: "engine", readTime: "10 分钟", hotScore: 61, tags: ["DirectX", "着色器编译", "图形管线"], content: [
      { title: "文章要点", type: "list", items: ["补位说明：原文发布于 5 月 27 日，本周随 E-Day 管线话题重新值得精读；", "核心思想：图形程序按『部分』增量编译，而非一次性全量编译；", "对加载卡顿、首帧延迟的优化有直接指导意义。"] },
      { title: "笔者观察", type: "text", text: "着色器编译卡顿是所有 3A 首发日的固定槽点，微软这篇是官方给出的系统性解法。给写 TA 简历的同学一个建议：能讲清楚『为什么我的着色器编译是增量的』，比堆十种后处理效果更能证明管线理解。参考来源：DirectX Developer Blog。" }
    ] },
    { id: "en-asd-amd-preview", category: "engine", subcategory: "图形技术", title: "补位精读：Advanced Shader Delivery 公开预览扩展至 AMD 平台", summary: "补位条目（原文 5 月 15 日）：DirectX 的 Advanced Shader Delivery 公开预览扩展支持 AMD 平台——预编译着色器随游戏分发的『即装即玩』路线再进一步。", source: "DirectX Developer Blog", date: "2026-05-15", url: "https://devblogs.microsoft.com/directx/advanced-shader-delivery-expands-public-preview-with-amd/", image: "https://devblogs.microsoft.com/directx/wp-content/uploads/sites/42/2026/05/fh6.webp", badge: "图形技术", badgeType: "engine", readTime: "8 分钟", hotScore: 60, tags: ["DirectX", "Advanced Shader Delivery", "AMD", "着色器预编译"], content: [
      { title: "文章要点", type: "list", items: ["补位说明：原文发布于 5 月 15 日；", "Advanced Shader Delivery 公开预览扩展至 AMD 平台；", "预编译着色器随游戏分发，玩家首次启动无需现场编译。"] },
      { title: "笔者观察", type: "text", text: "与上面 Partial Graphics Programs 连读是完整的『编译体验优化』上下篇：一个管『怎么编译得快』，一个管『干脆提前编好』。两条路都在消灭『进游戏先转圈十分钟』——这个玩家痛点的终局值得每个图形方向同学押注。参考来源：DirectX Developer Blog。" }
    ] },
    { id: "en-pioneer-20260907", category: "engine", subcategory: "开源引擎", title: "开源太空模拟 Pioneer 发布 20260907 快照：三十年的『精英复活赛』仍在跑", summary: "开源太空模拟游戏 Pioneer 发布 20260907 版本快照——向 1984 年《Elite》致敬的开源项目，用 C++/OpenGL 持续迭代三十余年精神续作，是『社区如何接力一个经典 IP 精神续作』的活标本。", source: "GitHub（pioneerspacesim）", date: "2026-09-07", url: "https://github.com/pioneerspacesim/pioneer/releases/tag/20260907", image: "https://opengraph.githubassets.com/1/pioneerspacesim/pioneer", badge: "开源引擎", badgeType: "engine", readTime: "4 分钟", hotScore: 57, tags: ["Pioneer", "开源游戏", "太空模拟", "OpenGL"], content: [
      { title: "发布要点", type: "list", items: ["Pioneer 20260907 版本快照发布（9 月 7 日，补位条目如实标注）；", "致敬 1984 年《Elite》的开源太空模拟；", "C++ / OpenGL 技术栈，社区志愿维护。"] },
      { title: "笔者观察", type: "text", text: "Pioneer 的价值不在『好玩』而在『可持续』：一个没有商业回报的志愿项目跑了几十年——它的代码组织、贡献者流程、版本纪律，就是一本开源游戏工程教科书。想读『真实世界的游戏工程』又怕引擎太庞杂的同学，Pioneer 体量刚好。参考来源：GitHub。" }
    ] },
    { id: "en-wgpu-v30", category: "engine", subcategory: "图形技术", title: "补位盘点：wgpu v30——Rust WebGPU 实现的月度心跳", summary: "补位条目（8 月 22 日）：Rust 生态的 WebGPU 实现 wgpu 发布 v30.0.1——Firefox、Bevy 生态与众多原生应用的图形底座，跨平台 GPU 抽象的活跃标杆。", source: "GitHub（gfx-rs/wgpu）", date: "2026-08-22", url: "https://github.com/gfx-rs/wgpu/releases/tag/v30.0.1", image: "https://opengraph.githubassets.com/1/gfx-rs/wgpu", badge: "图形技术", badgeType: "engine", readTime: "4 分钟", hotScore: 58, tags: ["wgpu", "WebGPU", "Rust", "跨平台"], content: [
      { title: "发布要点", type: "list", items: ["wgpu v30.0.1（8 月 22 日，补位条目如实标注）；", "Rust 生态 WebGPU 标准实现；", "Firefox 与 Bevy 生态的图形底座。"] },
      { title: "笔者观察", type: "text", text: "补位说明：wgpu 稳定按月发版，v30 线是当前主力。它与本周 Bevy 0.20 正式版是 Rust 图形栈的上下层关系——Bevy 之上做游戏，wgpu 之下做引擎，中间的分层清晰得可以画进教科书。参考来源：GitHub。" }
    ] },
    { id: "en-tiled-1-12-2", category: "engine", subcategory: "工具更新", title: "补位盘点：Tiled 1.12.2——2D 关卡编辑事实标准的版本线", summary: "补位条目（5 月 27 日）：2D 关卡编辑事实标准 Tiled 发布 1.12.2——正交/等距/六边形三模式、图块层与对象层分离的老牌关卡工具，是独立 2D 团队管线的第一块积木。", source: "GitHub（mapeditor/tiled）", date: "2026-05-27", url: "https://github.com/mapeditor/tiled/releases/tag/v1.12.2", image: "https://opengraph.githubassets.com/1/mapeditor/tiled", badge: "工具更新", badgeType: "engine", readTime: "3 分钟", hotScore: 57, tags: ["Tiled", "关卡编辑", "2D"], content: [
      { title: "发布要点", type: "list", items: ["Tiled 1.12.2 发布（5 月 27 日，补位条目如实标注）", "1.12 线持续修补", "TMX/JSON 导出被主流 2D 引擎广泛支持"] },
      { title: "笔者观察", type: "text", text: "与今日实战教程栏的 Tiled 官网条目配套：工具版本线的稳定度就是关卡管线稳定度的下限。学生团队搭建 2D 管线时的标准组合：Tiled 出关卡 → 引擎侧写 TMX 解析器或用现成插件 → 策划与程序彻底解耦。参考来源：GitHub。" }
    ] }
  ]
}
