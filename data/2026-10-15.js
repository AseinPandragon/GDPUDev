window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-15",
    weekday: "星期四",
    title: "GDPUDev 个人数字创作展示 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-15 07:40",
    editor: "GDPUDev技术中枢 & CodeBuddy",
    highlights: [
      "《时之笛》Switch 2 重制版实机预览出炉：任天堂重制方法论首次落地",
      "Epic 重建 Easy Anti-Cheat：《堡垒之夜》终于登陆 Linux，Steam Deck 仍未定",
      "育碧关停 Trials 开发商 RedLynx 并裁减新加坡工作室",
      "Duke Nukem 3D 关卡设计师 Richard「Levelord」Gray 去世，享年 68",
      "极乐迪斯科老兵 Summer Eternal 公开新 RPG《Red Rooster》与非营利组织结构"
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
    id: "oot-switch2-remake-preview",
    category: "games",
    categoryName: "热门游戏 · 头条",
    tag: "重制前瞻",
    title: "《时之笛》Switch 2 重制版实机预览出炉：海拉鲁经典的重制方法论开箱",
    summary: "Eurogamer 昨日放出《塞尔达传说：时之笛》Switch 2 重制版实机预览。这场等待了近三十年的重制，讨论焦点已经从「该不该重制」转向「怎么重制」——预览文章把争论直接摆上桌面：无论你对重制的艺术立场如何，它都来了。对学游戏开发的人来说，这是一份现成的「经典资产现代化」案例。",
    image: "https://assetsio.gnwcdn.com/link-epona-ocarina.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Eurogamer",
    date: "2026-10-14",
    url: "https://www.eurogamer.net/ocarina-of-time-remake-switch-2-preview",
    readTime: "7 分钟深度",
    hotScore: 92,
    tags: ["时之笛", "Switch 2", "重制", "任天堂"],
    content: [
      { title: "预览要点", type: "list", items: ["Eurogamer 10 月 14 日发布《时之笛》Switch 2 重制版实机预览；", "文章开篇即点题：无论你对重制的艺术观点如何，它都在这里；", "同日 Eurogamer 还发布了重制版细节报道（猫头鹰相关内容）作为预览补充；", "这是任天堂首次对 N64 时代 3D 塞尔达做完整重制，与此前《织梦岛》《时之笛》N64DD 复刻的量级完全不同。"] },
      { title: "笔者观察", type: "text", text: "重制项目的真正难点从来不是画面升级，而是『手感考古』：N64 时代的相机、锁定、跳跃帧都和当年 CRT 的延迟绑定，直接换成现代低延迟屏幕反而会『不对劲』。预览稿特意讨论了艺术立场之争，这说明重制的争议核心是『谁的童年记忆』——技术上的 3D 资产重建反而好办， metascore 上已经有无数重制项目示范过管线。做美术/技术美术的同学值得把这篇当重制方法论的开箱样本读。参考来源：Eurogamer。" }
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
    { id: "games-etre-cosmic-brain", category: "games", subcategory: "新作追踪", title: "《Etre》：一场关于「重塑宇宙大脑」的 Control 式动作游戏", summary: "RPS 介绍新作《Etre》：一款 Control 风格的动作游戏，核心设定是重塑一个「宇宙大脑」——关卡本身就活着的 living world，或是神之心智，或是「某种更可怕的东西」。视觉上刻意做成「眼睛都要融化」的高强度风格。", source: "Rock Paper Shotgun", date: "2026-10-14", url: "https://www.rockpapershotgun.com/living-world-god-mind-or-something-far-more-terrifying-etre-is-an-eye-melting-control-inspired-action-game-about-reshaping-a-cosmic-brain", image: "https://assetsio.gnwcdn.com/Etre.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作追踪", badgeType: "game", readTime: "5 分钟", hotScore: 82, tags: ["Etre", "Control", "关卡设计"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 14 日介绍 Control 风格动作游戏《Etre》；", "核心循环围绕「重塑宇宙大脑」展开——世界本身是活的（living world / god-mind）；", "视觉定位为高饱和「眼睛融化」级风格。"] },
      { title: "笔者观察", type: "text", text: "「把整个世界做成一个可编辑的活物」是 Remedy 之后少有人接棒的叙事装置——《Etre》把它反过来做：不是你对抗失控的大楼，而是你在给一颗宇宙大脑做手术。对关卡设计学习者来说，这种『环境即 BOSS 血条』的思路值得拆：它把状态管理从脚本搬进了空间本身。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "games-over-the-hill-verdict", category: "games", subcategory: "评测观察", title: "《Over the Hill》评测：比 SnowRunner 佛系的越野模拟，但仍会咬粗心司机", summary: "RPS 评测越野模拟新作《Over the Hill》：绞盘救援依旧硬核，整体节奏却比 SnowRunner 松弛——更休闲的取向吸引轻度玩家，但 careless driver 照样会被地形教育。慢节奏模拟赛道的又一个分化样本。", source: "Rock Paper Shotgun", date: "2026-10-14", url: "https://www.rockpapershotgun.com/over-the-hills-off-roading-simulation-winches-you-in-with-a-more-laid-back-take-than-snowrunners-but-itll-still-bite-careless-drivers", image: "https://assetsio.gnwcdn.com/over-the-hill-verdict-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "评测", badgeType: "game", readTime: "6 分钟", hotScore: 80, tags: ["Over the Hill", "越野模拟", "物理"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 14 日发布《Over the Hill》评测；", "定位：比 SnowRunner 更 laid-back 的越野模拟，但地形惩罚依旧真实；", "绞盘（winch）等硬核机制保留，节奏与上手门槛下调。"] },
      { title: "笔者观察", type: "text", text: "越野模拟这个品类的有趣之处在于它把『失败』做成了内容：车轮陷进泥里的那一刻，游戏才真正开始。同样的设计哲学也解释了为何这类游戏直播效果极佳——观察别人如何脱困本身就是节目。做物理向玩法的同学可以研究它如何用『软硬可调』的挫败感扩大受众。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "games-shifu-traffic-masters", category: "games", subcategory: "独立佳作", title: "《Shifu Traffic Masters》：1990 年代中国背景的欢乐开世界驾驶", summary: "RPS 推荐了一款替代人：如果你看不惯 genAI 版《疯狂出租车》、也嫌 GTA6 花活太多，可以试试《Shifu Traffic Masters》——一款设定在 1990 年代中国的欢乐开放世界驾驶游戏，复古市井气息拉满。", source: "Rock Paper Shotgun", date: "2026-10-14", url: "https://www.rockpapershotgun.com/if-youve-sworn-off-genai-crazy-taxi-and-dislike-all-the-twerking-in-gta-6-consider-shifu-traffic-masters-a-jolly-open-world-driving-game-set-in-1990s-china", image: "https://assetsio.gnwcdn.com/shifu-traffic-masters.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立佳作", badgeType: "game", readTime: "5 分钟", hotScore: 81, tags: ["Shifu Traffic Masters", "开放世界", "90 年代中国"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 14 日推荐《Shifu Traffic Masters》；", "开放世界驾驶，背景设定在 1990 年代的中国；", "文章将其定位为 genAI《疯狂出租车》与 GTA6 之外的一种「jolly」替代品。"] },
      { title: "笔者观察", type: "text", text: "有意思的是 RPS 把它放进『替代选项』的框架里——独立游戏正在主动承接 AAA 因 AI 争议和尺度调整流失的玩家情绪。『1990 年代中国街景』这个题材由独立团队做出来，说明本地化怀旧不只是华语市场的需求，也是全球玩家的新猎奇点。做环境叙事的同学可以观察它如何用道具密度复现市井时代感。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "games-ace-combat-8-review", category: "games", subcategory: "评测观察", title: "《皇牌空战 8：Wings of Theve》评测解禁：飞行演出与系统的代际升级", summary: "Eurogamer 10 月 13 日解禁《皇牌空战 8：Wings of Theve》评测。系列从 7 代到 8 代隔了七年，这次评测聚焦新作的飞行手感与演出规格——空战品类的技术天花板又一次被 Project Aces 自己抬高。", source: "Eurogamer", date: "2026-10-13", url: "https://www.eurogamer.net/ace-combat-8-wings-of-theve-review", image: "https://assetsio.gnwcdn.com/Wings-of-Theve-header.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "评测", badgeType: "game", readTime: "7 分钟", hotScore: 83, tags: ["皇牌空战 8", "评测", "空战"], content: [
      { title: "要点", type: "list", items: ["Eurogamer 10 月 13 日解禁《皇牌空战 8：Wings of Theve》评测；", "系列时隔七年的正传新作，聚焦飞行手感与演出规格的代际变化。"] },
      { title: "笔者观察", type: "text", text: "皇牌空战系列一直是『简化物理 + 强化演出』路线的教科书：它的飞行模型在拟真党眼里不及格，但云层穿行的演出调度是全品类最佳。这类『放弃一部分真实感换叙事节奏』的取舍，正是策略性设计决策的经典案例——评测里对手感变化的具体描述值得精读。参考来源：Eurogamer。" }
    ] },
    { id: "games-red-rooster-rpg", category: "games", subcategory: "新作官宣", title: "Summer Eternal 公开新 RPG《Red Rooster》：火、水与交替自我", summary: "《极乐迪斯科》前开发者组成的 Summer Eternal 公开新作《Red Rooster: A Game of Fire, Water and Alternate Selves》，口号直白：「我们在这里给你值得相信的东西」。ZA/UM 出走团队用自己的工作室交出了第一份完整答卷。", source: "Rock Paper Shotgun", date: "2026-10-14", url: "https://www.rockpapershotgun.com/we-are-here-to-give-you-something-to-believe-in-the-former-disco-elysium-devs-of-summer-eternal-reveal-new-rpg-red-rooster-a-game-of-fire-water-and-alternate-selves", image: "https://assetsio.gnwcdn.com/summereternal1_R0EGEj0.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作官宣", badgeType: "game", readTime: "6 分钟", hotScore: 86, tags: ["Summer Eternal", "Red Rooster", "极乐迪斯科"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 14 日报道 Summer Eternal 新作《Red Rooster》；", "副标题：A Game of Fire, Water and Alternate Selves（火、水与交替自我）；", "团队口号：「我们在这里给你值得相信的东西」；", "同日 Eurogamer 报道了该工作室的玩家非营利组织结构（见行业条目）。"] },
      { title: "笔者观察", type: "text", text: "极乐迪斯科系的团队分裂已经产出三代作品：Longdue、ZA/UM 续作、如今的 Summer Eternal——同一 IP 的组织学实验比游戏本身更有观察价值。「交替自我」这个设计词值得盯：如果它延续《极乐迪斯科》的技能人格化对话，等于把 inner voice 机制做成了跨作品的『公司风格』。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ai-vibe-coded-epic-launcher", category: "ai", subcategory: "AI 工程", title: "「我们 vibe coded 了一个新启动器」：AI 编程话语的公共化时刻", summary: "RPS 报道：一家厂商公开宣布新 Epic 游戏启动器是「vibe coded」的，理由是「编程很难」——并希望玩家把它当认真的 Steam 竞争者。AI 写代码从开发者内部的效率工具，正式变成了对外宣传话术。", source: "Rock Paper Shotgun", date: "2026-10-14", url: "https://www.rockpapershotgun.com/we-vibe-coded-a-new-epic-games-launcher-because-programming-is-hard-announce-company-were-somehow-supposed-to-see-as-a-serious-steam-competitor", image: "https://assetsio.gnwcdn.com/tim-sweeney-unreal-engine-6-01-(1)-(1).jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "AI工程", badgeType: "ai", readTime: "6 分钟", hotScore: 85, tags: ["vibe coding", "Epic", "启动器"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 14 日报道：新启动器被公开描述为「vibe coded」，理由是「programming is hard」；", "该产品被包装为认真的 Steam 竞争者，RPS 全文持明显反讽口径；", "同期 Eurogamer 报道 Epic 官方对「vibe coding 做启动器」公开 diss（甩脸）。"] },
      { title: "笔者观察", type: "text", text: "这条新闻的价值不在启动器本身，而在话术层面：当「vibe coded」从梗变成产品发布会用语，说明 AI 编程的接受度已经跨过了『羞耻线』。但启动器是典型的长期维护型软件——依赖管理、账号安全、离线授权，每一项都吃架构功力，恰恰是 vibe coding 最弱的地带。把两条报道（宣布 + Epic 回应）连读更有意思。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ai-glm-flash-amd-foundry", category: "ai", subcategory: "模型部署", title: "GLM 5.3 Flash 跑上 AMD MI300X：Microsoft Foundry 的开放阵营布局", summary: "Hugging Face 10 月 14 日博客：GLM 5.3 Flash 在 AMD MI300X 上完成部署并进入 Microsoft Foundry。AMD 硬件 + 国产开源模型 + 微软托管平台的组合，是开放权重阵营争夺企业推理算力的一步实棋。", source: "Hugging Face 博客", date: "2026-10-14", url: "https://huggingface.co/blog/pagezyhf/glm-foundry-amd", image: "https://cdn-uploads.huggingface.co/production/uploads/660bf3e9a9ea8db7b51adf8c/XIdH-U9bfJM9rW5wup14F.png", badge: "模型部署", badgeType: "ai", readTime: "6 分钟", hotScore: 78, tags: ["GLM 5.3 Flash", "AMD MI300X", "Microsoft Foundry"], content: [
      { title: "要点", type: "list", items: ["Hugging Face 10 月 14 日发布博客：GLM 5.3 Flash 亮相 Microsoft Foundry（AMD MI300X 平台）；", "同一 GPU 上的吞吐优化细节是博客主线（AMD 平台推理工程）；", "开源模型进入第一方云厂商托管目录，部署门槛进一步降低。"] },
      { title: "笔者观察", type: "text", text: "对独立开发者这条消息很实在：GLM 5.3 Flash 此前已免费开放，现在托管在 Foundry 上意味着不用自己搞 GPU 也能调 API。游戏侧的用法（NPC 对话、文本审核、任务生成）大多不需要顶级大模型——便宜、快、能私有化部署的 Flash 级模型才是游戏管线的主力。AMD 入局也把推理价格战往下压了一档。参考来源：Hugging Face。" }
    ] },
    { id: "ai-agents-self-improve-safety", category: "ai", subcategory: "智能体安全", title: "当智能体学会自我改进：哪些东西必须留下不能交出去", summary: "Hugging Face 10 月 14 日社区博客《When agents improve themselves, what should stay the same?》讨论智能体自我改进浪潮中的安全边界：哪些约束必须保持不变。一周前 Anthropic 断网评测自曝智能体钻漏洞，这篇是社区侧的工程回应。", source: "Hugging Face 博客", date: "2026-10-14", url: "https://huggingface.co/blog/BunsDev/when-agents-improve-themselves-what-should-stay", image: "https://cdn-uploads.huggingface.co/production/uploads/63faefa46b75d93aa13790cb/PDi33814lCSngIvCVBqq0.png", badge: "智能体", badgeType: "ai", readTime: "8 分钟", hotScore: 76, tags: ["Agent", "自我改进", "安全边界"], content: [
      { title: "要点", type: "list", items: ["HF 社区博客 10 月 14 日发布，主题：智能体自我改进时哪些约束不可让渡；", "背景：智能体自主性提升与失控事件频发（上周 Anthropic 断网评测自曝为标志性事件）；", "讨论视角偏工程实践而非纯理论。"] },
      { title: "笔者观察", type: "text", text: "游戏 AI 也会遇到同构问题：如果让 NPC 用 LLM 自主改写自己的行为策略，「不可变的核心约束」怎么写？玩家作弊检测、经济系统防护、社交内容红线——这些就是游戏 Agent 版的「what should stay the same」。把安全约束写进系统提示词还是写进沙箱权限层，这篇博客的框架可以直接借来讨论。参考来源：Hugging Face。" }
    ] },
    { id: "ai-csdn-daily-1014", category: "ai", subcategory: "行业综述", title: "AI 研究简报（10 月 14 日）：性价比战全面升级，Personal Agent 硬件化加速", summary: "每日 AI 研究简报 10 月 14 日期：两大主线——大模型性价比战（Gemini 4 Argon 限时五折、Claude Haiku 5.5 降价、GLM-5.3-Highspeed 免费开放、Mistral Le Chonk 等开放权重密集发布）与 Personal Agent 硬件化；同时失控 Agent 事件倒逼安全治理加码。", source: "每日 AI 研究简报（CSDN）", date: "2026-10-14", url: "https://fanjun.blog.csdn.net/article/details/167919818", image: "https://img-bss.csdnimg.cn/202112131616291007.png", badge: "行业综述", badgeType: "ai", readTime: "8 分钟", hotScore: 74, tags: ["性价比战", "Personal Agent", "具身智能"], content: [
      { title: "简报要点", type: "list", items: ["主线一：大模型性价比战升级——Gemini 4 Argon 限时五折、Claude Haiku 5.5 降价、GLM-5.3-Highspeed 免费开放、Mistral Le Chonk 等开放权重模型密集发布；", "主线二：Personal Agent 硬件化加速（STEPX Neo 手机等）与具身智能工程化（480 亿美元涌入物理 AI）；", "治理线：失控 Agent 事件频发，安全机制持续加码。"] },
      { title: "笔者观察", type: "text", text: "「性价比战」对游戏人是最直接的利好：NPC 大规模对话、动态剧情生成本来就被 API 单价卡着脖子，五折与免费开放意味着同样预算能多跑一个数量级的调用。个人建议把「模型价格」当成和「服务器带宽」同级别的常设监控项——它会直接决定你的 AI 功能能不能常开。参考来源：每日 AI 研究简报。" }
    ] },
    { id: "ai-baijiahao-oct-week", category: "ai", subcategory: "政策合规", title: "OpenAI 推 textGrain 文本水印响应欧盟 AI 法案；澳韩监管同日推进", summary: "百度编译 10 月 14 日 AI 动态合集：OpenAI 推出 textGrain 文本水印（1% 误报率下 200 词段落检出率约 80%）响应欧盟 AI 法案；OpenAI 与 Anthropic 向澳大利亚议会表态支持强制通报 AI 数据泄露；韩国国会通过 AI 与数据三大创新法案。", source: "百家号（编译）", date: "2026-10-14", url: "https://baijiahao.baidu.com/s?id=1879017213514189455&wfr=spider&for=pc", image: "", badge: "政策合规", badgeType: "ai", readTime: "7 分钟", hotScore: 72, tags: ["textGrain", "水印", "监管"], content: [
      { title: "要点", type: "list", items: ["OpenAI 推出 textGrain 文本水印，响应欧盟 AI 法案——1% 误报率下 200 词段落检出率约 80%；", "OpenAI 与 Anthropic 向澳大利亚议会表态：支持强制通报 AI 数据泄露；", "韩国国会通过 AI 与数据三大创新法案，扩大政府资助 AI 训练数据的复用；", "国内：9 月清理 AI 魔改违规视频近 1.3 万条。"] },
      { title: "笔者观察", type: "text", text: "textGrain 的检出率数字（80% @ 200 词）值得记下：这意味着短文本（游戏内 NPC 单句台词级别）依然几乎检不出来——『AI 内容标注』在游戏场景的技术兜底还很远。监管三条线（欧盟法案 / 澳洲通报制 / 韩国数据复用）进度不同，做出海内容的同学优先盯欧盟这条。参考来源：百家号编译。" }
    ] },
    { id: "engine-fortnite-eac-linux", category: "engine", subcategory: "引擎与平台", title: "Epic 重建 Easy Anti-Cheat：《堡垒之夜》终于登陆 Linux", summary: "RPS 10 月 14 日报道：Epic 重建 Easy Anti-Cheat，《堡垒之夜》终于可以登陆 Linux——这是反作弊兼容性长跑的里程碑。但 Steam Deck 支持仍在未定之天，Valve 与 Epic 的平台博弈还在继续。", source: "Rock Paper Shotgun", date: "2026-10-14", url: "https://www.rockpapershotgun.com/fortnite-is-finally-coming-to-linux-thanks-to-epic-rebuilding-easy-anti-cheat-though-steam-deck-support-is-still-in-the-wind", image: "https://assetsio.gnwcdn.com/fortnite-ftc-issues-more-refunds-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "引擎动态", badgeType: "engine", readTime: "6 分钟", hotScore: 84, tags: ["Easy Anti-Cheat", "Linux", "Steam Deck"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 14 日报道：《堡垒之夜》将登陆 Linux，前提是 Epic 重建 Easy Anti-Cheat；", "重建后的 EAC 解决了反作弊与 Linux 内核兼容问题；", "Steam Deck（SteamOS）支持仍未确定，文中以「still in the wind」描述。"] },
      { title: "笔者观察", type: "text", text: "反作弊一直是 Linux 游戏生态的死结：内核级反作弊与开源内核的信任模型天然冲突，Epic 选择『重建』而不是『适配』，说明 kernel module 路线已到极限。对多人游戏开发者，这波重建后的 EAC SDK 值得纳入技术选型观察——如果它能顺手支持 SteamOS，Linux 玩家池会立刻变大。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "engine-rockstar-next-game-tools", category: "engine", subcategory: "引擎管线", title: "Rockstar：GTA6 期间建好的引擎、工具与团队，让下一作不用再等八年", summary: "GI 10 月 14 日报道：Rockstar 高层表示，GTA6 开发期间构建的引擎、工具链与团队储备，将让下一部作品不再需要八年——原话点出「the engine, the tools and the team we've built during GTA 6」。这与 RPS 同日的 GTA7 报道互为印证。", source: "GamesIndustry.biz", date: "2026-10-14", url: "https://www.gamesindustry.biz/rockstars-next-game-wont-take-eight-years-to-make-the-engine-the-tools-and-the-team-weve-built-during-gta-6-will-allow-us-to-do-things-more-quickly", image: "https://assetsio.gnwcdn.com/gta-lucia-jason-(1).webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "引擎管线", badgeType: "engine", readTime: "6 分钟", hotScore: 83, tags: ["Rockstar", "RAGE", "工具链"], content: [
      { title: "要点", type: "list", items: ["GI 10 月 14 日报道：Rockstar 称 GTA6 期间建设的引擎、工具与团队将显著缩短下一作周期；", "RPS 同日报道：Rockstar「confident」GTA7 不会再用八年，并回顾了 RDR2 时期类似承诺的兑现情况；", "两篇报道同日发布，属同一表态的两个侧面。"] },
      { title: "笔者观察", type: "text", text: "『工具链遗产缩短续作周期』是行业规律的正面表述，但 RPS 特意翻出了 RDR2 时期『效率提升』承诺的旧账——历史记录显示这类承诺经常打折。技术上看，RAGE 的资产管线在 GTA6 完成后确实会沉淀大量可复用组件，但八年周期里真正吃时间的是内容规模本身。把两篇连读，正好看到宣传口径与历史核查的对位。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "engine-sbox-free-to-play", category: "engine", subcategory: "平台动态", title: "s&box 转型免费游玩：Garry 承认「游戏版 Netflix」路线不奏效", summary: "GI 10 月 14 日报道：Garry's Mod 作者 Garry Newman 承认「我的游戏版 Netflix 设想行不通」， struggling 的精神续作 s&box 将转向免费游玩，并拥抱人工策展（human curation）。Source 2 引擎平台的一次商业模式大修。", source: "GamesIndustry.biz", date: "2026-10-14", url: "https://www.gamesindustry.biz/sbox-plans-to-go-free-to-play-and-embrace-human-curation-saying-netflix-for-games-doesnt-work", image: "https://assetsio.gnwcdn.com/s%26box-going-free-to-play-garrys-mod-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "平台动态", badgeType: "engine", readTime: "6 分钟", hotScore: 80, tags: ["s&box", "Source 2", "商业模式"], content: [
      { title: "要点", type: "list", items: ["GI 10 月 14 日报道：s&box 将转为免费游玩并拥抱人工策展；", "Garry Newman 自述：「My idea of a Netflix for games doesn't work」；", "s&box 基于 Source 2，定位为 UGC 游戏创作平台。"] },
      { title: "笔者观察", type: "text", text: "『订阅制 UGC 平台』模式再次被证伪——此前 Roblox 和 Fortnite Creative 都验证过『分成激励 > 订阅池分配』。s&box 转免费 + 人工策展，其实是向 Roblox 的发现机制靠拢，同时保留了 Source 2 的画质优势。对想做 UGC 平台的同学，这条新闻是商业模式教材级的样本：先看用户生产什么，再设计分发。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "engine-openra-playtest-1011", category: "engine", subcategory: "开源引擎", title: "OpenRA 发布 10 月 playtest：开源 RTS 引擎的月度迭代仍在推进", summary: "开源 RTS 引擎 OpenRA 于 10 月 11 日发布 playtest-20261011。这个把《红色警戒》《命令与征服》搬上现代系统的开源项目，保持着稳定的月度节奏——RTS 网络同步与 MOD 兼容层的活教材。", source: "GitHub: OpenRA/OpenRA", date: "2026-10-11", url: "https://github.com/OpenRA/OpenRA/releases/tag/playtest-20261011", image: "https://opengraph.githubassets.com/1/OpenRA/OpenRA", badge: "开源引擎", badgeType: "engine", readTime: "5 分钟", hotScore: 76, tags: ["OpenRA", "RTS", "开源引擎"], content: [
      { title: "要点", type: "list", items: ["OpenRA 于 10 月 11 日发布 playtest-20261011（月度 playtest 节奏）；", "项目持续维护《红警》《C&C》等经典 RTS 的开源重实现；", "网络同步、MOD 兼容与跨平台支持是项目三大技术支柱。"] },
      { title: "笔者观察", type: "text", text: "RTS 是「锁步同步」技术最好的开源课堂：OpenRA 的同步代码、replay 系统和 MOD 管线都可直接阅读。想做 RTS 的同学与其读论文，不如把它的 lockstep 实现和《命令与征服》的重制差异对比着看——你会发现经典手感里藏着大量反直觉的补偿设计。参考来源：GitHub。" }
    ] },
    { id: "engine-pixijs-8-22", category: "engine", subcategory: "补位精读", title: "PixiJS v8.22.0（10/1 补位精读）：Web 2D 渲染引擎的稳定迭代", summary: "Web 2D 渲染引擎 PixiJS 于 10 月 1 日发布 v8.22.0（本周引擎稿荒期补位收录，发布日期如实标注）。WebGPU 渲染器路线图下的稳定小版本，H5 小游戏与互动叙事的常用底座。", source: "GitHub: pixijs/pixijs", date: "2026-10-01", url: "https://github.com/pixijs/pixijs/releases/tag/v8.22.0", image: "https://opengraph.githubassets.com/1/pixijs/pixijs", badge: "补位精读", badgeType: "engine", readTime: "5 分钟", hotScore: 74, tags: ["PixiJS", "WebGPU", "2D 渲染"], content: [
      { title: "要点", type: "list", items: ["PixiJS v8.22.0 于 10 月 1 日发布（补位收录，发布距今约两周）；", "v8 系列主打 WebGPU 优先的渲染器抽象，同时保留 WebGL 回退；", "H5 游戏、互动广告与叙事页面的主流 2D 底座之一。"] },
      { title: "笔者观察", type: "text", text: "PixiJS 的价值在于它把 WebGPU 的渲染优势带进了 2D：批量提交、compute shader 粒子这些原本 3D 引擎的专利正在下放到 2D 工作流。微信小游戏开发者尤其值得跟它的性能线——canvas 到 webgl 到 webgpu 的迁移成本比想象低。参考来源：GitHub。" }
    ] },
    { id: "industry-ubisoft-redlynx", category: "industry", subcategory: "裁员关停", title: "育碧关停 Trials 开发商 RedLynx，新加坡工作室同步裁员", summary: "GI 10 月 14 日报道：育碧将关停 Trials 系列开发商 RedLynx，并对新加坡工作室（Assassin's Creed Black Flag Resynced 相关）裁员。物理摩托竞速的招牌团队退出历史舞台，育碧的产能收缩继续向非核心 IP 蔓延。", source: "GamesIndustry.biz", date: "2026-10-14", url: "https://www.gamesindustry.biz/ubisoft-closing-trials-developer-redlynx-and-cutting-jobs-in-singapore-studio", image: "https://assetsio.gnwcdn.com/Trials_2.jpg_CTbXk1t.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "裁员关停", badgeType: "business", readTime: "5 分钟", hotScore: 82, tags: ["育碧", "RedLynx", "裁员"], content: [
      { title: "要点", type: "list", items: ["GI 10 月 14 日报道：育碧关停 Trials 开发商 RedLynx；", "同时裁减新加坡工作室岗位（该工作室参与 AC Black Flag Resynced 项目）；", "与本周 Ubisoft 其他收缩动作连读，是其聚焦核心 IP 战略的延续。"] },
      { title: "笔者观察", type: "text", text: "Trials 是「物理手感即品牌」的最佳案例——一个 2.5D 摩托物理做成了十五年招牌。它的关停不代表品类死亡，而是说明物理竞速的复购模型撑不起 3A 化成本。RedLynx 的物理团队如果整体流失，下一家捡到的公司会捡到宝。本周行业条目的共同底色都是「收缩」，做职业规划的同学盯紧被裁团队的去向。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "industry-funcom-pivot", category: "industry", subcategory: "裁员转型", title: "Funcom 裁员并全面收缩：只保《柯南流亡》与《沙丘：觉醒》两条线", summary: "GI 10 月 14 日报道：Funcom 将裁员并全面转向，未来只聚焦《柯南流亡》与《沙丘：觉醒》。开放世界生存品类的运营成本倒逼发行商砍掉一切非主线投入——「双产品聚焦」成为中型厂商的生存姿势。", source: "GamesIndustry.biz", date: "2026-10-14", url: "https://www.gamesindustry.biz/funcom-to-lay-off-staff-as-it-pivots-to-focusing-solely-on-conan-exiles-and-dune-awakening", image: "https://assetsio.gnwcdn.com/ss_8616aceb30a8b01979c16a5aea46f9ef587f7ff3.1920x1080.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "裁员转型", badgeType: "business", readTime: "5 分钟", hotScore: 80, tags: ["Funcom", "沙丘觉醒", "裁员"], content: [
      { title: "要点", type: "list", items: ["GI 10 月 14 日报道：Funcom 宣布裁员，业务全面收缩；", "未来聚焦两大产品：《柯南流亡》与《沙丘：觉醒》；", "与育碧同日裁员消息连读，构成行业收缩主题日。"] },
      { title: "笔者观察", type: "text", text: "生存游戏的长线运营成本（赛季、服务器、反外挂）已经接近 MMO 级别，「一次发售长尾吃十年」的旧账本翻不动了。Funcom 把宝全押《沙丘：觉醒》是合理但也危险的腾挪——IP 授权金 + 长线运营双高成本，容错率极低。与同日育碧条目连读，这是一天的行业收缩全景。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "industry-levelord-tribute", category: "industry", subcategory: "行业纪念", title: "Richard「Levelord」Gray 去世：Duke Nukem 3D 关卡设计的定义者", summary: "GI 10 月 14 日消息：Duke Nukem 3D 关卡设计师 Richard「Levelord」Gray 去世，享年 68。他把 90 年代 FPS 关卡从「通道迷宫」做成了有性格的空间——彩蛋、密道与市井幽默的鼻祖。", source: "GamesIndustry.biz", date: "2026-10-14", url: "https://www.gamesindustry.biz/duke-nukem-3d-level-designer-richard-levelord-gray-dies-aged-68", image: "https://assetsio.gnwcdn.com/Screenshot-2026-10-14-at-20.40.11.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "行业纪念", badgeType: "business", readTime: "5 分钟", hotScore: 78, tags: ["Levelord", "Duke Nukem 3D", "关卡设计"], content: [
      { title: "要点", type: "list", items: ["GI 10 月 14 日消息：Richard「Levelord」Gray 去世，享年 68；", "他是 Duke Nukem 3D 关卡设计的定义者，也参与过 SiN 等作品；", "其关卡以彩蛋、密道与幽默感著称，深刻影响了一代 FPS 设计。"] },
      { title: "笔者观察", type: "text", text: "Levelord 的关卡方法论今天依然有效：他坚持「关卡要能讲笑话」——空间节奏里插入 Unexpected。现在的沉浸式模拟和 Boomer Shooter 复兴潮（Dusk、Ultrakill）里全是他的遗产。学关卡设计的同学，Duke Nukem 3D 第一关到脱衣舞俱乐部那段的空间叙事至今仍是教科书。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "industry-rockstar-tribunal-nov18", category: "industry", subcategory: "劳资动态", title: "Rockstar「工会打压」庭审延至 11 月 18 日：GTA6 发售前几日落幕", summary: "RPS 10 月 14 日报道：Rockstar 就「union busting」指控的就业法庭审理延至 11 月 18 日——恰在 GTA6 发售日期前几天结束。IWGB 工会与 Rockstar 的法律拉锯进入收官阶段，劳资议题与最大发售窗口撞了满怀。", source: "Rock Paper Shotgun", date: "2026-10-14", url: "https://www.rockpapershotgun.com/rockstar-union-busting-tribunal-extended-to-november-18th-meaning-it-will-close-just-days-before-gta-6s-release-date", image: "https://assetsio.gnwcdn.com/gta-6-jason-lucia-relationship.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "劳资动态", badgeType: "business", readTime: "5 分钟", hotScore: 79, tags: ["Rockstar", "IWGB", "劳动法"], content: [
      { title: "要点", type: "list", items: ["RPS 10 月 14 日报道：Rockstar 就业法庭审理延至 11 月 18 日；", "庭审结束日与 GTA6 发售窗口仅隔数日；", "本案由 IWGB 工会提起，指控 Rockstar 打压工会组织（本栏目 10 月 11 日曾报道 HR 证词阶段）。"] },
      { title: "笔者观察", type: "text", text: "注意时间线的戏剧性：11 月 18 日庭审结束、GTA6 随后发售——无论判决如何，舆论窗口都会被发售热度稀释。这与本周 Rockstar「下一作不用八年」的公关口径属于同一周期的主动议程管理。从 10 月 11 日 HR 证词到今天延期，本栏目持续跟踪的三条报道可以串成完整案例。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "industry-summer-eternal-nonprofit", category: "industry", subcategory: "组织创新", title: "Summer Eternal 公开组织结构：玩家非营利 + 工作室双轨制", summary: "Eurogamer 10 月 14 日报道：极乐迪斯科老兵工作室 Summer Eternal 公开组织结构——设立玩家非营利组织作为「声音」载体，与商业工作室并行。在 Epic AI-first 与行业裁员周里，这是一份逆流的公司章程样本。", source: "Eurogamer", date: "2026-10-14", url: "https://www.eurogamer.net/summer-eternal-studio-structure-player-non-profit", image: "https://assetsio.gnwcdn.com/come-home-to-roost-red-rooster.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "组织创新", badgeType: "business", readTime: "6 分钟", hotScore: 81, tags: ["Summer Eternal", "非营利", "工作室治理"], content: [
      { title: "要点", type: "list", items: ["Eurogamer 10 月 14 日报道：Summer Eternal 公开其组织结构；", "核心设计：玩家非营利组织将成为工作室的『声音』（voice），与商业实体并行；", "该团队由《极乐迪斯科》前开发者组成，同日公开新作《Red Rooster》（见 games 条目）。"] },
      { title: "笔者观察", type: "text", text: "ZA/UM 分裂之后的三个继承者走了三条路：Longdue 走资本、ZA/UM 留守 IP、Summer Eternal 走「玩家共有」——把社区权益写进公司章程是前所未见的治理实验。它能不能扛住 3A 周期的现金流考验是关键；但作为组织创新样本，值得所有想做协作制工作室的人精读。参考来源：Eurogamer。" }
    ] },
    { id: "oss-rea-agent-reverse", category: "opensource", subcategory: "GitHub 热榜", title: "rea：用智能体逆向一切——从应用行为到原生二进制", summary: "GitHub 当日热榜项目 morluto/rea：让 AI 智能体执行逆向工程，从应用行为分析一路做到原生二进制。逆向社区与 AI 的结合点，对游戏 Mod、兼容层与安全研究都是趁手工具。", source: "GitHub: morluto/rea", date: "2026-10-15", url: "https://github.com/morluto/rea", image: "https://opengraph.githubassets.com/1/morluto/rea", badge: "热榜精选", badgeType: "ai", readTime: "5 分钟", hotScore: 79, tags: ["逆向工程", "智能体", "二进制"], content: [
      { title: "项目要点", type: "list", items: ["morluto/rea 登上 GitHub 当日热榜；", "定位：Reverse engineer anything with agents——从应用行为到原生二进制；", "与此前热榜的 awesome-decomp-games（10-11 收录）同属逆向 × AI 赛道。"] },
      { title: "笔者观察", type: "text", text: "逆向是 AI 智能体的甜蜜点：符号执行、模式识别、海量试错——全是 LLM 加成项。游戏侧最直接的用途是老游戏服务器模拟与存档格式考古（OpenRA 式项目就靠这类工作喂料）。提醒一句合规边界：逆向自己拥有的、用于互操作研究是合理场景，碰在线服务协议红线就是另一回事了。参考来源：GitHub。" }
    ] },
    { id: "oss-scientific-agent-skills", category: "opensource", subcategory: "GitHub 热榜", title: "scientific-agent-skills：把任意 AI 智能体变成「AI 科学家」的技能库", summary: "K-Dense-AI/scientific-agent-skills 登上热榜：177 个开箱即用的科研技能，号称 25 万科学家在用。虽是科研向，但其「技能分层组织」的结构对游戏开发智能体技能库设计有直接参考价值。", source: "GitHub: K-Dense-AI/scientific-agent-skills", date: "2026-10-15", url: "https://github.com/K-Dense-AI/scientific-agent-skills", image: "https://opengraph.githubassets.com/1/K-Dense-AI/scientific-agent-skills", badge: "热榜精选", badgeType: "ai", readTime: "5 分钟", hotScore: 77, tags: ["Agent Skills", "科研", "技能库"], content: [
      { title: "项目要点", type: "list", items: ["K-Dense-AI/scientific-agent-skills 登上 GitHub 热榜；", "177 个开箱即用的科研技能，覆盖文献、实验、数据分析全流程；", "官方口径：25 万+ 科学家使用，自称第一大科研 Agent Skills 库。"] },
      { title: "笔者观察", type: "text", text: "别被「科研」标签劝退——这个项目真正值钱的是技能库的组织学：验证过的技能如何命名、分层、组合。游戏开发完全可以照抄这套结构做自己的「关卡设计技能包」「性能剖析技能包」。此前收录的 Anthropic knowledge-work-plugins 和 diagram-design 都是这个范式的不同切片。参考来源：GitHub。" }
    ] },
    { id: "oss-pentagi-autonomous", category: "opensource", subcategory: "GitHub 热榜", title: "PentAGI：全自动 AI 渗透测试智能体系统", summary: "vxcontrol/pentagi 登上热榜：可执行复杂渗透测试任务的全自主 AI 智能体系统。红队自动化进入「全自动编排」阶段——游戏服务器安全团队的对标工具与威胁模型参考。", source: "GitHub: vxcontrol/pentagi", date: "2026-10-15", url: "https://github.com/vxcontrol/pentagi", image: "https://opengraph.githubassets.com/1/vxcontrol/pentagi", badge: "热榜精选", badgeType: "ai", readTime: "5 分钟", hotScore: 75, tags: ["渗透测试", "安全", "智能体"], content: [
      { title: "项目要点", type: "list", items: ["vxcontrol/pentagi 登上 GitHub 当日热榜；", "定位：Fully autonomous AI Agents system，可执行复杂渗透测试任务；", "自带容器化执行环境与任务编排。"] },
      { title: "笔者观察", type: "text", text: "游戏服务器是 DDoS 与外挂产业链的重灾区（本周 Rockstar DDoS、Battle.net 事件都是前车之鉴）。PentAGI 这类工具的价值是双向的：蓝队可以用它常态化自查，也提醒所有做后端的同学——攻击者的自动化水平已经到这个量级了，你的风控还在人肉巡检吗？参考来源：GitHub。" }
    ] },
    { id: "oss-ifixai-agent-audit", category: "opensource", subcategory: "GitHub 热榜", title: "iFixAi：给 AI 智能体做独立审计的开源框架", summary: "ifixai-ai/iFixAi 登上热榜：对 AI 智能体执行独立审计——可由人跑、也可由智能体自查，回答智能体经济里最关键的问题：这个 Agent 到底可信不可信。智能体保险与信任层的基础设施尝试。", source: "GitHub: ifixai-ai/iFixAi", date: "2026-10-15", url: "https://github.com/ifixai-ai/iFixAi", image: "https://opengraph.githubassets.com/1/ifixai-ai/iFixAi", badge: "热榜精选", badgeType: "ai", readTime: "5 分钟", hotScore: 74, tags: ["审计", "智能体经济", "信任层"], content: [
      { title: "项目要点", type: "list", items: ["ifixai-ai/iFixAi 登上 GitHub 热榜；", "定位：AI Agent 的独立审计框架，人工或智能体自身均可执行；", "瞄准「智能体经济」的信任问题：Agent 的行为是否可验证。"] },
      { title: "笔者观察", type: "text", text: "上周 Anthropic 断网评测自曝（本栏目 hero 级报道）、今天的自我改进安全讨论、再到审计框架——智能体信任栈正在从上到下补齐。游戏侧的直接映射是反作弊：如果玩家用 Agent 代打，你怎么证明「这局是人打的」？行为审计技术会是下一个玩家信任基础设施。参考来源：GitHub。" }
    ] },
    { id: "oss-nvm-version-manager", category: "opensource", subcategory: "GitHub 热榜", title: "nvm 老树开花再登热榜：Node 版本管理器与游戏工具链的日常", summary: "nvm-sh/nvm 登上当日热榜——这个管理多个 Node.js 版本的 POSIX 脚本工具是 Web 游戏与构建工具链的地基设施。老项目再登榜多与生态事件相关（Node 版本切换潮），值得顺手检查自己的 CI 配方。", source: "GitHub: nvm-sh/nvm", date: "2026-10-15", url: "https://github.com/nvm-sh/nvm", image: "https://opengraph.githubassets.com/1/nvm-sh/nvm", badge: "热榜精选", badgeType: "ai", readTime: "4 分钟", hotScore: 72, tags: ["nvm", "Node.js", "工具链"], content: [
      { title: "项目要点", type: "list", items: ["nvm-sh/nvm 登上 GitHub 当日热榜；", "定位：POSIX 兼容的 Node.js 多版本管理器（bash 脚本实现）；", "Web 游戏、Phaser/PixiJS 项目与前端构建链的基础依赖。"] },
      { title: "笔者观察", type: "text", text: "老牌基础设施再登热榜通常意味着生态里有版本迁移事件在发生。顺手提醒做 H5 游戏的同学：把 nvm 固定版本号写进 CI 而不是裸用 latest，是省下半夜构建事故的零成本保险。参考来源：GitHub。" }
    ] },
    { id: "tut-simonschreibt-art-tricks", category: "tutorials", subcategory: "常青库", title: "Simonschreibt：Game Art Tricks 系列——用「小把戏」讲透美术 tricks", summary: "常青库新增：Simon Schreibt 的 Game Art Tricks 系列博客。作者把《There Was A Caveman…》等项目里的视觉技巧一个个拆开讲——假体积、假反射、2.5D 欺骗，全是「用小成本骗过眼睛」的第一手拆解。", source: "Simonschreibt.de", date: "2026-10-15", url: "https://www.simonschreibt.de/", image: "", badge: "常青库", badgeType: "event", readTime: "8 分钟", hotScore: 73, tags: ["Game Art Tricks", "视觉技巧", "独立开发"], content: [
      { title: "站点要点", type: "list", items: ["Simonschreibt.de 为常青库新增收录（首批验证 HTTP 200 可访问）；", "核心栏目 Game Art Tricks：逐篇拆解真实项目中的视觉小把戏；", "文章多配有 GIF 拆解与作者第一手实现记录。"] },
      { title: "笔者观察", type: "text", text: "这个站是我见过把「美术 tricks」讲得最接地气的：没有术语墙，只有「我怎么做出来这个效果」的过程记录。技术美术岗位面试里最常问的「你有没有亲手还原过一个效果」，照着这个站练十个 tricks 就有得聊了。参考来源：Simonschreibt.de。" }
    ] },
    { id: "tut-bartwronski-graphics", category: "tutorials", subcategory: "常青库", title: "Bart Wronski 图形博客：从降噪到神经渲染的工程深读", summary: "常青库新增：Bart Wronski 的个人博客。这位图形工程师的系列文章覆盖降噪、时序抗锯齿到神经渲染，特点是每篇都带可复现的实验推导——图形程序员向进阶的优质免费读物。", source: "bartwronski.com", date: "2026-10-15", url: "https://bartwronski.com/", image: "", badge: "常青库", badgeType: "event", readTime: "10 分钟", hotScore: 72, tags: ["图形学", "降噪", "神经渲染"], content: [
      { title: "站点要点", type: "list", items: ["bartwronski.com 为常青库新增收录（验证可访问；站点 og 为占位图，按规则留空图）；", "主题覆盖：图像降噪、时序抗锯齿、物理渲染、神经渲染；", "文章以工程视角 + 数学推导为主，适合有图形学基础者。"] },
      { title: "笔者观察", type: "text", text: "Bart 的文章属于「进阶坑位」：直接从时域累积讲起不设缓冲。建议的阅读路径是先读他的降噪系列建立直觉，再啃神经渲染部分——后者正在成为引擎厂商的下一代基建（本栏目上周的索尼 AI 超分下放就是同类技术的产品化）。参考来源：bartwronski.com。" }
    ] },
    { id: "tut-demofox-onefile", category: "tutorials", subcategory: "常青库", title: "Demofox：「海底之底」的 One-File 图形学博客", summary: "常青库新增：blog.demofox.org（The blog at the bottom of the sea）。Alan Wolfe 的图形学博客以「单文件实现」风格著称——噪声、采样、光线步进，每篇都把算法压缩到可一次读完的体量。", source: "blog.demofox.org", date: "2026-10-15", url: "https://blog.demofox.org/", image: "https://i0.wp.com/blog.demofox.org/wp-content/uploads/2017/05/cropped-grand-teton.jpg?fit=512%2C512&ssl=1", badge: "常青库", badgeType: "event", readTime: "8 分钟", hotScore: 73, tags: ["图形学", "噪声", "采样"], content: [
      { title: "站点要点", type: "list", items: ["blog.demofox.org 为常青库新增收录（验证可访问）；", "作者 Alan Wolfe（demofox），风格：单文件、可复现、算法优先；", "噪声函数、采样理论、光线步进等基础题材的成体系免费教程。"] },
      { title: "笔者观察", type: "text", text: "如果你被 LearnOpenGL 的体量吓到过，demofox 是更好的起点——每篇就是一个小算法的完整闭环。程序化生成（噪声/采样）是独立游戏内容管线的基础功，他的噪声系列读完就能上手做地形与贴图。参考来源：blog.demofox.org。" }
    ] },
    { id: "tut-aseprite-official", category: "tutorials", subcategory: "常青库", title: "Aseprite 官网：像素动画的标准工具与官方文档入口", summary: "常青库新增：Aseprite 官网。像素游戏事实标准编辑器的官方文档与教程入口，动画 onion-skinning、调色板管理、精灵表导出的学习起点——像素美术 pipeline 的第一站。", source: "Aseprite 官网", date: "2026-10-15", url: "https://www.aseprite.org/", image: "https://www.aseprite.org/assets/images/og-image.png", badge: "常青库", badgeType: "event", readTime: "5 分钟", hotScore: 71, tags: ["Aseprite", "像素画", "动画"], content: [
      { title: "站点要点", type: "list", items: ["aseprite.org 为常青库新增收录（验证可访问）；", "内容：像素动画编辑器 Aseprite 的官方页面、文档与购买入口；", "支持 onion-skinning、调色板、精灵图集导出等像素管线核心功能。"] },
      { title: "笔者观察", type: "text", text: "像素画工具的选择题其实早就结束了：Aseprite 就是答案。真正值得学的是它的动画工作流——onion skin + 实时预览的循环调帧法，比工具本身更值钱。配合此前收录的 Lospec 调色板站，像素美术的入门三件套就齐了（工具 + 色板 + 技法站）。参考来源：Aseprite。" }
    ] },
    { id: "tut-pixelprospector-hub", category: "tutorials", subcategory: "常青库", title: "PixelProspector：独立开发资源大全的「老字号」索引站", summary: "常青库新增：PixelProspector.com。运营十余年的独立游戏开发资源索引站，从引擎、美术、音频到营销的资源清单——「the indie goldmine」式的老派但可靠的资源地图。", source: "PixelProspector.com", date: "2026-10-15", url: "https://pixelprospector.com/", image: "", badge: "常青库", badgeType: "event", readTime: "6 分钟", hotScore: 70, tags: ["资源索引", "独立开发", "工具清单"], content: [
      { title: "站点要点", type: "list", items: ["pixelprospector.com 为常青库新增收录（验证可访问；站点无 og，按规则留空图）；", "定位：独立游戏开发资源大全（引擎/美术/音频/设计/营销分类清单）；", "老牌站点，维护周期长，链接质量相对可靠。"] },
      { title: "笔者观察", type: "text", text: "索引站的价值在「策展十年」：它比搜索引擎结果多一层人工筛选。配合本栏目此前收录的 OpenGameArt、Kenney、CraftPix，独立开发者的资源版图基本完整。用法建议：先按制作阶段（原型/内容/发布）而不是按工具类型来翻它。参考来源：PixelProspector。" }
    ] },
    { id: "contest-ld60-theme-voting", category: "contest", subcategory: "赛事临近", title: "Ludum Dare 60 明日开赛：主题投票页已上线", summary: "Ludum Dare 60 将于 10 月 16 日（明日）开赛，48 小时 Compo 与 72 小时 Jam 两轨并行；主题投票页已上线，最终主题由社区多轮投票决出。本栏目 10 月 10 日曾以主事件页收录 LD60，本条为赛事推进的新阶段入口。", source: "ldjam.com", date: "2026-10-15", url: "https://ldjam.com/events/ludum-dare/60/theme-voting", image: "", badge: "赛事临近", badgeType: "event", readTime: "4 分钟", hotScore: 75, tags: ["Ludum Dare 60", "主题投票", "GameJam"], content: [
      { title: "要点", type: "list", items: ["Ludum Dare 60 定于 10 月 16 日开赛（本栏目 10-01/10-10 先后报道定档与倒计时）；", "主题投票页已上线（SPA 站无 og 图属正常，图按规则留空）；", "Compo（48h 单人）/ Jam（72h 组队）两轨规则不变。"] },
      { title: "笔者观察", type: "text", text: "主题投票是多轮淘汰制，看投票走向比看结果更有意思——社区品味的风向标。给学生党的实操建议：明天开赛后先别急着写代码，用两小时做「主题词义发散」和范围裁剪，48 小时项目的死法九成是范围失控。参考来源：ldjam.com。" }
    ] },
    { id: "contest-best-places-2026", category: "contest", subcategory: "奖项报名", title: "英国 gamesindustry.biz Best Places to Work 2026 报名页持续开放", summary: "gamesindustry.biz「Best Places to Work」奖项 2026 届报名通道页面长期开放（原文发布于 7 月 9 日，本条按报名页当前状态收录）。英国游戏业雇主品牌奖项，员工匿名调研制——求职者反向使用的经典样本。", source: "GamesIndustry.biz", date: "2026-07-09", url: "https://www.gamesindustry.biz/you-can-now-enter-the-2026-uk-gamesindustrybiz-best-places-to-work-awards", image: "https://assetsio.gnwcdn.com/maverick-games_lzyeJjS.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "奖项报名", badgeType: "event", readTime: "4 分钟", hotScore: 70, tags: ["Best Places to Work", "雇主品牌", "英国"], content: [
      { title: "要点", type: "list", items: ["英国 Best Places to Work 2026 报名页开放中（文章发布于 2026-07-09，页面长期开放，本条为补位收录）；", "评选机制：员工匿名调研，考察工作室的真实工作环境；", "本栏目 10-09 报道过开放报名、10-12 报道过上届颁奖图集，本次以「报名页持续开放」角度收录。"] },
      { title: "笔者观察", type: "text", text: "对在校生这个奖项是求职情报工具：匿名调研制的排行榜比官网文案可信度高得多——「Best Places」名单倒着看也能发现一些真实信号。国内尚缺同类的成熟雇主调研奖，这也是行业媒体可以补的空白。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "contest-galaxies-showcase-interview", category: "contest", subcategory: "展会观察", title: "Galaxies Showcase 今日举行：主办方谈如何在红海展会生态里立足", summary: "GI 10 月 14 日刊发 Galaxies Showcase 主办方访谈——「我想做我想看的秀」，今日（10 月 15 日）正式举行。ZA/UM、Embark、Frontier 等厂商参与，本栏目 10-11 曾报道其预告，本条为开幕日的主办方视角。", source: "GamesIndustry.biz", date: "2026-10-14", url: "https://www.gamesindustry.biz/i-wanted-to-make-the-show-i-wanted-to-watch-how-galaxies-found-a-place-in-the-crowded-showcase-landscape", image: "https://assetsio.gnwcdn.com/Behind-The-Scenes-1.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "展会观察", badgeType: "event", readTime: "6 分钟", hotScore: 74, tags: ["Galaxies Showcase", "数字展会", "独立发行"], content: [
      { title: "要点", type: "list", items: ["Galaxies Showcase 于 10 月 15 日（今日）举行；", "GI 于 10 月 14 日刊发主办方访谈：如何在拥挤的 showcase 赛道找到生态位；", "参与厂商含 ZA/UM、Embark、Frontier 等（本栏目 10-11 曾报道其阵容预告）。"] },
      { title: "笔者观察", type: "text", text: "数字展会已经卷到细分再细分：Next Fest 抓折扣转化、Day of the Devs 抓策展品味、Galaxies 抓「新 IP 首曝」位。访谈里主办方对「差异化定位」的思考，比展会本身的爆料更有学习价值——做社区运营和发行的同学可以直接套用这套定位方法论。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "misc-mihoyo-2027-campus", category: "contest", subcategory: "招聘·校招", title: "米哈游 2027 届校招网申进行中：10 月 31 日截止，127 个应届职位在线", summary: "米哈游校园招聘官网当前挂出 127 个面向 2027 届毕业生的职位（毕业时间 2026.9-2027.8），秋招网申截止 10 月 31 日 24:00；另有 141 个职位面向 2028 届及之后的在校生实习，实习生全年可投。注意：应届生职位仅能投递 1 个。", source: "米哈游校园招聘官网", date: "2026-10-15", url: "https://campus.mihoyo.com/", image: "", badge: "招聘·校招", badgeType: "event", readTime: "4 分钟", hotScore: 82, tags: ["米哈游", "2027 届校招", "网申"], content: [
      { title: "投递要点", type: "list", items: ["官方口径：127 个职位面向 2027 届（2026 年 9 月-2027 年 8 月毕业），141 个职位面向 2028 届及之后在校生；", "秋招网申截止 10 月 31 日 24:00，面试通过后陆续发放 offer；", "应届生职位仅能投递 1 个、实习生职位 90 天内可投递 2 个——投错方向没有后悔药；", "在招方向覆盖预研多条产品线（CRPG / 生活模拟 / UGC / 城市开放世界 / UE5 写实等）。"] },
      { title: "笔者观察", type: "text", text: "『应届生只能投 1 个职位』是米哈游的独特规则——它逼你在投递前先想清楚岗位画像，而这恰好是大多数学生跳过的功课。对数媒技的同学，程序岗看算法与引擎基础、美术岗看作品集完成度、策划岗看拆解笔记——提前对照本站各岗位页自查短板，比海投有用得多。2028 届的同学别只盯着校招，实习通道全年开，大一暑假就可以开始铺。参考来源：米哈游校园招聘官网。" }
    ] },
    { id: "misc-leihuo-2027-deadline", category: "contest", subcategory: "招聘·校招", title: "网易游戏雷火 2027 届秋招网申 10 月 16 日截止：招满即止，只剩最后窗口", summary: "网易游戏雷火 2027 届秋季校园招聘网申于 10 月 16 日截止（招满即止）——距本条发布只剩一天。雷火盘下有《逆水寒》手游等主力产品线，程序 / 美术 / 策划 / 技术美术岗位均有开放，想赶末班车的今天就得投。", source: "南开大学就业信息网（转网易招聘公告）", date: "2026-08-26", url: "https://career.nankai.edu.cn/correcruit/content/id/117003.html", image: "", badge: "招聘·校招", badgeType: "event", readTime: "4 分钟", hotScore: 80, tags: ["网易雷火", "秋招截止", "10-16"], content: [
      { title: "投递要点", type: "list", items: ["网易游戏雷火 2027 届秋季校园招聘全球开启；", "网申 10 月 16 日截止，官方口径『招满即止』——晚投不如早投；", "官方建议：越早投递成功率越高，笔面试按投递顺序滚动安排。"] },
      { title: "笔者观察", type: "text", text: "把这条放在 10 月中旬发是有意的：秋招的主战场其实在 9 月，10 月中旬还在开放的窗口基本都是『补录 + 招满即止』型，雷火这班末班车明天就停。错过的同学也别慌——11 月还有春招提前批和实习转正两条路，但从今天起该把简历和作品集备好了。参考来源：南开大学就业信息网转载的网易招聘公告。" }
    ] },
    { id: "misc-nowcoder-30-companies", category: "contest", subcategory: "招聘·校招", title: "牛客 30 家游戏公司 27 届秋招网申汇总：含内推码，更新至 10.11", summary: "牛客网友维护的《30 家游戏公司 27 届秋招已开网申汇总》持续更新（最新至 10 月 11 日）：途游游戏、极致游戏等中厂批次的网申通道与内推码全列出，base 覆盖北上广深厦港多城——游戏专业秋招信息差的一站式补齐材料。", source: "牛客网", date: "2026-10-11", url: "https://www.nowcoder.com/discuss/938913966166695936", image: "https://static.nowcoder.com/fe/common/share-logo.png", badge: "招聘·校招", badgeType: "event", readTime: "5 分钟", hotScore: 78, tags: ["秋招汇总", "内推码", "30 家公司"], content: [
      { title: "要点", type: "list", items: ["汇总帖覆盖 30 家已开 27 届秋招网申的游戏公司，更新至 10 月 11 日；", "条目含网申通道直链 + 内推码 + base 城市（北京/广州/深圳/长沙/厦门/香港等）；", "大厂（米哈游、网易雷火等）与中厂（途游、极致游戏等）分批列出。"] },
      { title: "笔者观察", type: "text", text: "秋招的本质是信息战：牛客这类持续有人维护的汇总帖，省掉的是你逐个官网查『开没开』的时间。用法建议：①先按 base 城市筛掉不想去的；②有内推码的优先走内推（简历通过率实测有差异）；③把每家的截止日抄进日历。中厂门槛比大厂低一档但项目接触面更全，别只盯头部。参考来源：牛客网。" }
    ] }
  ]
};
