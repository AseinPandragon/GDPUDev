window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-19",
    weekday: "星期一",
    title: "GDPUDev 个人数字创作展示 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-19 07:40",
    editor: "GDPUDev技术中枢 & CodeBuddy",
    highlights: [
      "Gemini 4 Argon 四智能体同服协作 27 小时击败末影龙：游戏世界成多智能体试验场",
      "腾讯研究院 AI 速递：ChatGPT 接入 Chrome，Work 模式可代人操作网页",
      "《黑魂2》挖掘者放出废弃斗兽场原型关卡：早期开发的庞然大物重见天日",
      "库洛 2027 秋招 10-26 截止（本周最近的大厂截止日）",
      "Steam Next Fest 十月场今日开幕：数百款 Demo 免费试玩一周"
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
    id: "gemini-argon-minecraft-dragon",
    category: "ai",
    categoryName: "AI前沿 · 头条",
    tag: "多智能体里程碑",
    title: "四个 Gemini 4 Argon 智能体在同一 Minecraft 世界协作 27 小时击败末影龙",
    summary: "DeepMind 公布的多智能体实验：4 个 Gemini 4 Argon 智能体在同一 Minecraft 世界分工协作，27 小时 14 分钟内击败末影龙——期间自写 2783 个程序、死亡 605 次、API 计费约 520 美元。游戏世界又一次成为智能体研究的标准试验场，DeepMind 同步推出 Deep Review 评审智能体工具。",
    image: "https://blog.luandnh.com/images/covers/ai-daily-section.png",
    source: "AI Daily Digest / 齐绩创坛快报",
    date: "2026-10-19",
    url: "https://blog.luandnh.com/en/ai-daily",
    readTime: "8 分钟深度",
    hotScore: 92,
    tags: ["Gemini 4 Argon", "多智能体", "Minecraft", "DeepMind"],
    content: [
      { title: "实验要点", type: "list", items: ["4 个 Gemini 4 Argon 智能体在同一 Minecraft 世界协作（多步工具链、长期分步编排）；", "27 小时 14 分钟击败末影龙：自写 2783 个程序、死亡 605 次、按 API 计费约 $520（齐绩创坛 10-17 快报口径）；", "DeepMind 同步推出 Deep Review：对稿件/设计做系统性压力测试的评审智能体；", "另有多份简报口径：Argon 已在 Antigravity/Pro 场景限量上线，Gemini 4 Argon 全面开放后 API 定价 $2/$10 每百万 token 限时半价（DAMO 简报 10-18）。"] },
      { title: "笔者观察", type: "text", text: "Minecraft 对 AI 研究的意义被严重低估：它同时具备「开放世界」「长程目标」「可编程接口」「失败成本极低」四个特质——是天然的智能体训练场。对本站读者的直接启示有二：①「游戏 = 智能体试验场」的路线（Project SID、Voyager 到 Argon）证明游戏工程能力正在被 AI 研究界重金求购；②$520 击败末影龙的成本结构（605 次死亡）说明当前智能体的效率还很低——「降低试错成本」本身就是游戏系统的看家本领，游戏设计师在智能体时代有独特生态位。参考来源：AI Daily Digest。" }
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
    { id: "ai-tencent-research-1019", category: "ai", subcategory: "行业综述", title: "腾讯研究院 AI 速递（10-19）：ChatGPT 接入 Chrome，Work 模式可代人操作网页", summary: "腾讯研究院 10 月 19 日 AI 速递：OpenAI 将 Computer Use 能力引入 Chrome——Chat 模式跨标签页收集信息，Work 模式授权后可操作网页发消息、填表、下载文件；另汇总 Meta Muse Spark Open 两台 Mac 满血运行等要闻。", source: "腾讯研究院 AI 速递（搜狐）", date: "2026-10-19", url: "https://www.sohu.com/a/1089419880_455313", image: "", badge: "行业综述", badgeType: "ai", readTime: "8 分钟", hotScore: 78, tags: ["腾讯研究院", "ChatGPT", "浏览器智能体"], content: [
      { title: "要点", type: "list", items: ["ChatGPT Chrome 集成：Chat 模式跨标签页比价/收集；Work 模式授权后代人操作网页（发消息/填表/下载）；", "Meta Muse Spark Open：816B 开放权重、两台 M5 Ultra（合计 1TB 统一内存）可满血运行，但核心编程能力仍落后 Kimi K3 与 GLM 5.3（速递口径）；", "权重已上线 Hugging Face，Muse Model License 含有限商业条款。"] },
      { title: "笔者观察", type: "text", text: "「授权后操作网页」这条线的尽头是操作系统级智能体——浏览器的边界感正在消失。对游戏开发者的间接影响：未来玩家可能带着 AI 助理进游戏论坛/商店页，你的商店页素材要同时说服人类和智能体（描述准确度、结构化数据权重上升）。参考来源：腾讯研究院 AI 速递。" }
    ] },
    { id: "ai-163264-daily-1018", category: "ai", subcategory: "行业综述", title: "AI 日报（10-18）：开放权重模型的一天四个头条", summary: "163264 AI 日报 10 月 18 期：Muse Spark Open 端侧落地、NVIDIA Nemotron 3.5 Super VL 专用基准超越旗舰、FLUX 3 Image Klein 开放权重、Gemini 4 Argon 半价开放——开放权重阵营一日四响。", source: "梭哈 AI 日报（163264.com）", date: "2026-10-18", url: "https://www.163264.com/17320", image: "https://j.163264.com/wp-content/uploads/2026/10/ai-daily-20261018.png", badge: "行业综述", badgeType: "ai", readTime: "7 分钟", hotScore: 74, tags: ["AI 日报", "开放权重", "多模态"], content: [
      { title: "要点", type: "list", items: ["163264 AI 日报 10 月 18 期（Meta Spark Open / Nemotron VL / FLUX 3 Klein / Gemini Argon 半价四条主线）；", "FLUX 3 Image Klein：免费商用授权限较小规模企业——本地 AI 图像生态再补一块。"] },
      { title: "笔者观察", type: "text", text: "对独立开发者，FLUX 3 Klein 这类「免费商用（限规模）」的图像模型比旗舰更实用：商店页素材、概念图迭代的成本继续下探。注意读许可条款的「规模门槛」定义，超线再换付费方案。参考来源：163264。" }
    ] },
    { id: "ai-agent-website-blockade", category: "ai", subcategory: "生态博弈", title: "当网站开始对 AI 智能体「关门」：Yelp、达美、摩根大通为何集体设卡", summary: "163264 10 月 18 日专题：Yelp、达美航空、摩根大通等网站开始对 AI 智能体访问设卡——浏览器智能体的普及正在催生「反智能体」攻防，流量主权与数据资产的博弈进入执行层。", source: "梭哈 AI（163264.com）", date: "2026-10-18", url: "https://www.163264.com/17249", image: "", badge: "生态博弈", badgeType: "ai", readTime: "6 分钟", hotScore: 72, tags: ["反智能体", "Yelp", "流量主权"], content: [
      { title: "要点", type: "list", items: ["163264 10 月 18 日专题：主流网站对 AI 智能体访问集体设卡；", "动机：流量主权、数据资产保护与反爬升级。"] },
      { title: "笔者观察", type: "text", text: "互联网正在分裂成「对 AI 开放」与「对 AI 关门」两个区。游戏行业的对应面很有意思：Steam 对智能体一直态度暧昧（比价/自动化购买），而 itch.io 生态相对开放。做发行的同学要开始思考「智能体可见性」——你的商店页在 AI 代理眼里长什么样。参考来源：163264。" }
    ] },
    { id: "ai-micron-eim-edge", category: "industry", subcategory: "硬件供应链", title: "美光研发边缘推理内存 EIM：人形机器人的内存战争 2028 年开打", summary: "163264 10 月 18 日编译：美光研发边缘推理内存（EIM）——把推理算力做进内存，主攻人形机器人与端侧场景，2028 年开打。内存厂商从卖容量转向卖「带宽×推理」组合拳。", source: "梭哈 AI（163264.com）", date: "2026-10-18", url: "https://www.163264.com/17267", image: "", badge: "硬件前瞻", badgeType: "business", readTime: "6 分钟", hotScore: 71, tags: ["美光", "EIM", "边缘推理"], content: [
      { title: "要点", type: "list", items: ["163264 10 月 18 日编译：美光 EIM（边缘推理内存）路线曝光，2028 年主战场；", "方向：内存内推理，主打机器人/端侧。"] },
      { title: "笔者观察", type: "text", text: "EIM 若成熟，最先受益的消费场景之一就是主机/掌机的本地 AI——NPC 推理与图形内存共享带宽的架构难题有了新解法。与本周 PS6 内存成本爆料连读：内存已是 AI 时代的第一稀缺资源。参考来源：163264。" }
    ] },
    { id: "ai-argy-schedule-supplement", category: "ai", subcategory: "多智能体", title: "齐绩创坛快报（10-17）：Argon 多智能体实验的技术细节与 Deep Review 工具化", summary: "齐绩创坛 10 月 17 日快报：Gemini 4 Argon 多代理实战细节——Antigravity/Pro 场景限量上线、多步工具链能力展示、Deep Review（对稿件/设计做系统性压力测试的评审智能体）同步推出。作为头条实验的补充技术视角。", source: "齐绩创坛快报", date: "2026-10-17", url: "https://news.miracleplus.com/share_link/160618", image: "https://news.miracleplus.com/apple-touch-icon.png", badge: "多智能体", badgeType: "ai", readTime: "7 分钟", hotScore: 73, tags: ["Gemini Argon", "Deep Review", "齐绩创坛"], content: [
      { title: "要点", type: "list", items: ["齐绩创坛 10 月 17 日快报：Argon 在 Antigravity/Pro 限量上线 + 多步工具链展示；", "Deep Review：系统性压力测试稿件/设计的评审智能体；", "同报含 Meta Muse Spark Open 的功能与参数详解。"] },
      { title: "笔者观察", type: "text", text: "Deep Review 的定位（评审智能体）比「生成智能体」更值得游戏团队关注：关卡设计自审、数值方案压力测试、文案一致性检查——评审型 agent 的 ROI 比生成型更确定，因为它不用「创作」，只用「找茬」。参考来源：齐绩创坛。" }
    ] },
    { id: "ai-flux3-klein-review", category: "ai", subcategory: "工具实践", title: "FLUX 3 Image Klein 1.1 实测：本地图像生成的「小钢炮」能胜任商店页素材吗", summary: "Hugging Face 10 月 18 日社区实测：FLUX 3 Image Klein 1.1 开放权重后的真实表现——小体量模型的文字渲染与构图能力、免费商用授权的规模边界。本地 AI 图像管线的最新实操参考。", source: "Hugging Face 博客", date: "2026-10-18", url: "https://huggingface.co/blog/hexgridcloud/flux-3-image-klein-11-real-world-text-to-image-str", image: "https://cdn-uploads.huggingface.co/production/uploads/69826c5b054bc9b20b6f9d63/DLmuNlPPUy3qIlQ7AjrUK.png", badge: "工具实践", badgeType: "ai", readTime: "7 分钟", hotScore: 72, tags: ["FLUX 3", "图像生成", "实测"], content: [
      { title: "要点", type: "list", items: ["HF 社区博客 10 月 18 日发布 FLUX 3 Image Klein 1.1 实测（DAMO 简报 10-18 亦确认其开放权重与商用授权）；", "焦点：小体量模型的文字渲染、构图能力与商用规模边界。"] },
      { title: "笔者观察", type: "text", text: "游戏开发者的实测关注点：Klein 这类小模型的强项恰是「少量文字 + 简洁构图」——图标、商店页 banner 骨架、成就徽章。正文与密集 UI 文案仍需人肉把关。配合免费商用授权，独立团队的概念图迭代成本已趋近于零。参考来源：Hugging Face。" }
    ] },
    { id: "games-ds2-dataminer-coliseum", category: "games", subcategory: "挖掘考古", title: "《黑暗之魂2》挖掘者放出废弃斗兽场原型关卡：早期开发的庞然大物", summary: "PC Gamer 报道：《黑暗之魂2》数据挖掘者公开早期开发阶段的巨型原型斗兽场关卡——从未进入正式版的庞然大物重见天日。Level 设计考古又一次证明：被砍掉的内容常常比上线内容更惊人。", source: "PC Gamer", date: "2026-10-18", url: "https://www.pcgamer.com/games/dark-souls/dark-souls-2-dataminer-shows-off-massive-prototype-coliseum-level-from-early-development/", image: "https://cdn.mos.cms.futurecdn.net/zaWM99pyEfhLiBr3FV5MsP-1600-80.png", badge: "挖掘考古", badgeType: "game", readTime: "5 分钟", hotScore: 77, tags: ["黑暗之魂2", "数据挖掘", "原型关卡"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 18 日报道：《黑暗之魂2》早期原型斗兽场关卡被数据挖掘者公开；", "该关卡从未进入正式版。"] },
      { title: "笔者观察", type: "text", text: "原型考古是学关卡设计的免费博物馆：被砍的关卡往往因为「概念太大执行不了」——对比它和最终版的取舍逻辑，比看十篇关卡设计教程更能理解范围控制（scoping）。FromSoftware 的「砍刀」一向又快又狠。参考来源：PC Gamer。" }
    ] },
    { id: "games-warioware-volume-sliders", category: "games", subcategory: "独立佳作", title: "23 位开发者联手做出「音量滑块创新但存疑」的免费游戏——浏览器版瓦里奥制造", summary: "PC Gamer 报道：23 位开发者合作的免费游戏合集，主打「创新但存疑的音量滑块玩法」，体验被形容为「浏览器版瓦里奥制造」——把系统 UI 元素变成玩法的集体实验。", source: "PC Gamer", date: "2026-10-18", url: "https://www.pcgamer.com/games/23-devs-teamed-up-to-make-a-free-game-of-innovative-yet-questionable-volume-sliders-and-it-feels-like-browser-based-warioware/", image: "https://cdn.mos.cms.futurecdn.net/59UYYjUSJrXbZ3fRaMdMgd-1920-80.jpg", badge: "独立佳作", badgeType: "game", readTime: "5 分钟", hotScore: 74, tags: ["瓦里奥制造", "浏览器游戏", "23 人合作"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 18 日报道：23 位开发者合作的免费浏览器游戏合集；", "核心创意：以音量滑块等系统元素为玩法的微型游戏集合。"] },
      { title: "笔者观察", type: "text", text: "「把非游戏 UI 变成玩法」与此前收录的 Nonolith（复制粘贴玩法）同属元操作玩法流派——瓦里奥制造的传统就是「5 秒钟讲清规则」。这种小型多人协作合集也是学生团队练「微玩法」的最佳载体：每人出 3 个 5 秒小游戏，两周就能成型。参考来源：PC Gamer。" }
    ] },
    { id: "games-clive-barker-hellraiser", category: "games", subcategory: "IP 联动", title: "Clive Barker 自称对《猛鬼追魂：复兴》「由衷惊叹」：原作者盖章的改编", summary: "PC Gamer 报道：《猛鬼追魂》原著作者 Clive Barker 表示对游戏改编《Hellraiser: Revival》「genuinely astonished（由衷惊叹）」并「为最终成品自豪」——原作者公开盖章的游戏改编，行业里并不多见。", source: "PC Gamer", date: "2026-10-18", url: "https://www.pcgamer.com/games/horror/clive-barker-says-hes-genuinely-astonished-by-hellraiser-revival-im-proud-as-f-k-at-the-end-result/", image: "https://cdn.mos.cms.futurecdn.net/anyCrirHNBqZ4XwjD7nYXe-1920-80.jpg", badge: "IP 联动", badgeType: "game", readTime: "5 分钟", hotScore: 73, tags: ["Clive Barker", "猛鬼追魂", "改编"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 18 日报道：Clive Barker 公开称赞《Hellraiser: Revival》最终成品；", "本站 10-13 曾收录其评测解禁条目，本条为原作者反应的新事件。"] },
      { title: "笔者观察", type: "text", text: "游戏改编最怕「原作者毁约式差评」（对照：某些影视改编的作者翻脸）。Barker 的公开背书说明 Saber 在改编期就让作者深度参与——「原作者进管线」比「版权买断再请示」的协作模式值得所有 IP 向项目抄作业。参考来源：PC Gamer。" }
    ] },
    { id: "games-hades2-soundtrack", category: "games", subcategory: "音频设计", title: "「没有原声带能做到 Hades 2 这样」：PC Gamer 谈其音乐设计", summary: "PC Gamer 专文：Hades 2 的原声带为何无可替代——Darren Korb 的音乐不只是氛围，而是叙事与角色塑造的有机部分。音乐驱动的游戏设计仍是 Supergiant 的独门手艺。", source: "PC Gamer", date: "2026-10-18", url: "https://www.pcgamer.com/games/roguelike/no-soundtrack-does-it-like-hades-2/", image: "https://cdn.mos.cms.futurecdn.net/FJ8HPqVqZSy4sUUXgVJFJh-1920-80.png", badge: "音频设计", badgeType: "game", readTime: "6 分钟", hotScore: 72, tags: ["Hades 2", "原声带", "音频设计"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 18 日专文分析 Hades 2 原声带；", "Darren Korb 一人包办作曲演唱的传统延续。"] },
      { title: "笔者观察", type: "text", text: "Hades 系列的音乐是「旋律即角色」的教科书：每个核心角色有主题动机，剧情推进时动机变形——这是瓦格纳式主导动机技法在 roguelike 里的落地。音频方向的同学把这篇和 GDC 里 Supergiant 的演讲连着看。参考来源：PC Gamer。" }
    ] },
    { id: "games-arc-raiders-frozen-trail", category: "games", subcategory: "运营观察", title: "《Arc Raiders》Frozen Trail 活动：终于把「Raid」做进了撤离射击", summary: "PC Gamer 报道：《Arc Raiders》新活动 Frozen Trail 为撤离射击玩法加入真正的「Raid」体验——限时高难内容与赛季结构的又一次实验，本作上线后的运营节奏持续被评正面。", source: "PC Gamer", date: "2026-10-18", url: "https://www.pcgamer.com/games/third-person-shooter/frozen-trail-finally-puts-the-raid-in-arc-raiders/", image: "https://cdn.mos.cms.futurecdn.net/AevreNKXsaDy2wzyyA9Fdj-2480-80.jpg", badge: "运营观察", badgeType: "game", readTime: "5 分钟", hotScore: 72, tags: ["Arc Raiders", "活动", "撤离射击"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 18 日报道：《Arc Raiders》Frozen Trail 限时活动；", "口径：为撤离射击加入了真正意义的 raid 体验。"] },
      { title: "笔者观察", type: "text", text: "与本站 10-18 收录的 Marathon 内部分歧连读：extraction shooter 赛道的头部（Arc Raiders）在用高频活动运营拉差距，而后来者还在为方向内耗——运营节奏本身就是这个品类的核心竞争力。参考来源：PC Gamer。" }
    ] },
    { id: "industry-qualcomm-arm-ruling", category: "industry", subcategory: "法务战报", title: "高通对 Arm 赢下 2 美元裁决——不是笔误， symbolic 胜利的巨额含义", summary: "PC Gamer 报道：高通在与 Arm 的诉讼中获得「2 美元」的象征性赔偿——金额是笔误式的戏剧化，但裁决实质（高通被认定无侵权违约）对芯片授权格局影响深远，间接牵动主机/掌机 SoC 供应格局。", source: "PC Gamer", date: "2026-10-17", url: "https://www.pcgamer.com/gaming-industry/qualcomm-wins-usd2-legal-decision-against-fellow-tech-giant-arm-and-thats-not-a-typo/", image: "https://cdn.mos.cms.futurecdn.net/dWCr2RhPTciT8TceHkwqcY-1920-80.jpg", badge: "法务战报", badgeType: "business", readTime: "6 分钟", hotScore: 74, tags: ["高通", "Arm", "诉讼"], content: [
      { title: "要点", type: "list", items: ["PC Gamer 10 月 17 日报道：高通对 Arm 的诉讼裁决赔偿金额仅 2 美元（象征性）；", "实质：陪审团裁定高通的定制 CPU 方案不构成违约。"] },
      { title: "笔者观察", type: "text", text: "「2 美元」是法律系统幽默感的巅峰呈现——但别被金额骗了：这是定制 Arm 架构（Snapdragon X/掌机 SoC 路线）的合法性确认，Switch 2 与Steam Deck 竞品的芯片供应都与此案间接相关。硬件格局的每次松动，最终都会传导到掌机游戏生态。参考来源：PC Gamer。" }
    ] },
    { id: "industry-microsoft-nscale-exit", category: "industry", subcategory: "AI 基建", title: "微软退出英国 Nscale 数据中心合作：电网供电要等到 2030 年代", summary: "联合早报援引彭博/每日电讯报：微软退出与英国云算力公司 Nscale 的数据中心合作协议——该项目因电网供电预计要到 2030 年代而多次延期。Nscale 正推进估值最高 350 亿美元的 IPO，微软贡献其超 40% 签约收入。", source: "联合早报", date: "2026-10-18", url: "https://www.zaobao.com/finance/world/story20261018-9856700", image: "https://cassette.sphdigital.com.sg/image/zaobao/684f6ea4411a1a6d5055acc200ad2a60fb4c215cb61dcb161361e6e1ebe1586b", badge: "AI 基建", badgeType: "business", readTime: "6 分钟", hotScore: 76, tags: ["微软", "Nscale", "AI 基建"], content: [
      { title: "要点", type: "list", items: ["微软退出 Nscale（英国埃塞克斯郡）数据中心协议，原约定租赁 2.3 万块英伟达 AI 芯片；", "原因：电网供电预计 2030 年代才能到位；", "Nscale 正冲刺 IPO（估值最高 350 亿美元），微软占其签约收入超 40%。"] },
      { title: "笔者观察", type: "text", text: "AI 基建的第一性瓶颈终于显形：不是芯片，是电网。把这条与本站 10-16「硬件市场冻结」评论、PS6 内存成本爆料连读——「算力通胀」会沿硬件链传导到每个开发者的工位配置预算。云游戏与串流的成本侧顺风（见 10-16 条目判断）继续增强。参考来源：联合早报。" }
    ] },
    { id: "industry-dark-ritual-studios", category: "industry", subcategory: "初创观察", title: "前育碧巴塞罗那员工创立 Dark Ritual Studios：『工艺大于规模』的小而精宣言", summary: "GI 报道：前育碧巴塞罗那员工组建独立工作室 Dark Ritual Studios——「我们拥抱与 3A 相反的方法：小规模、高经验密度的团队」。在行业收缩潮中逆势成立的又一「匠人工作室」。", source: "GamesIndustry.biz", date: "2026-10-19", url: "https://www.gamesindustry.biz/former-ubisoft-barcelona-workers-launch-dark-ritual-studios-an-indie-developer-focused-on-craftsmanship-over-scale", image: "https://assetsio.gnwcdn.com/dark-ritual-puzzle-mage.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "初创观察", badgeType: "business", readTime: "5 分钟", hotScore: 74, tags: ["Dark Ritual", "前育碧", "小而精"], content: [
      { title: "要点", type: "list", items: ["GI 10 月 19 日报道：前育碧巴塞罗那员工创立 Dark Ritual Studios；", "定位宣言：「craftsmanship over scale」——与 3A 相反的小而精路线。"] },
      { title: "笔者观察", type: "text", text: "把这条与本周的收缩潮新闻（Fishlabs/育碧自愿离职/Liquid Swords 破产）连读，你会看到一个清晰的环流：大厂释放的高经验人才正在小规模创业——「分形收缩」的每个层面都在复制同样的结构。对求职者：这类初创的第一批岗位往往质量极高（缺人但有钱、方向明确），盯紧它们的官网招聘页。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "industry-drive-to-survive-effect", category: "industry", subcategory: "跨界联动", title: "《极速求生》纪录片启发星战竞速新作：Netflix 叙事方法进入游戏开发", summary: "GamesIndustry.biz 报道：《Star Wars: Galactic Racer》团队确认其创意灵感来自 Netflix 纪录片《极速求生》（Drive to Survive）——把纪实叙事的能量曲线移植到竞速游戏的赛季叙事。", source: "GamesIndustry.biz", date: "2026-10-17", url: "https://www.gamesindustry.biz/the-netflix-series-drive-to-survive-inspired-star-wars-galactic-racer", image: "", badge: "跨界联动", badgeType: "business", readTime: "5 分钟", hotScore: 72, tags: ["星战竞速", "Netflix", "叙事"], content: [
      { title: "要点", type: "list", items: ["GI 10 月 17 日报道：星战竞速新作灵感源自 Netflix《极速求生》；", "本站 10-17 已收录其分布式开发长文，本条为创意方法侧补充。"] },
      { title: "笔者观察", type: "text", text: "《极速求生》对 F1 的真实作用是「把赛季变成了连载剧」——移植到游戏就是「赛季即季播」：每个 battle pass 赛季有主角、有冲突、有结局。赛季叙事设计岗这几年需求上升，这条是它的方法论源头之一。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "oss-leanrea-skill", category: "opensource", subcategory: "GitHub 新仓库", title: "leanrea：一个 8 KB 技能取代 REA（逆向工程万物）——轻量化智能体技能的极致", summary: "GitHub 新仓库 aicodeking/leanrea（10-17 创建，636★）：号称用单个 8 KB 技能文件取代整套 REA（Reverse Engineer Anything）工具链——智能体技能的「极简主义」宣言。与本站 10-15 收录的 rea 直接连读。", source: "GitHub: aicodeking/leanrea", date: "2026-10-19", url: "https://github.com/aicodeking/leanrea", image: "https://opengraph.githubassets.com/1/aicodeking/leanrea", badge: "新仓库", badgeType: "ai", readTime: "5 分钟", hotScore: 75, tags: ["逆向工程", "技能", "极简"], content: [
      { title: "项目要点", type: "list", items: ["aicodeking/leanrea 于 10 月 17 日创建（两天 636★）；", "宣称：单个 8 KB 技能文件替代 REA 全套逆向工具链。"] },
      { title: "笔者观察", type: "text", text: "8 KB 取代整个工具链的宣称要打折扣看——但趋势是真的：技能文件正在从「大而全的框架」卷向「小而准的提示工程」。游戏 Mod 社区是轻量逆向技能的最自然用户（解析资源格式、协议逆向）。老规矩：仅用于你拥有或明确允许的场景。参考来源：GitHub。" }
    ] },
    { id: "oss-audio-studio-mcp", category: "opensource", subcategory: "GitHub 新仓库", title: "audio-studio-mcp：给 Claude Code 等 MCP 客户端补上本地 AI BGM 与音效", summary: "GitHub 新仓库 kanaworksai-hue/audio-studio-mcp（10-18 创建）：为 Claude Code 与任意 MCP 客户端提供本地 AI 背景音乐与音效生成——游戏开发工作流里最后一块「AI 不在场」的拼图补上了。", source: "GitHub: kanaworksai-hue/audio-studio-mcp", date: "2026-10-19", url: "https://github.com/kanaworksai-hue/audio-studio-mcp", image: "https://opengraph.githubassets.com/1/kanaworksai-hue/audio-studio-mcp", badge: "新仓库", badgeType: "ai", readTime: "5 分钟", hotScore: 73, tags: ["MCP", "游戏音频", "BGM"], content: [
      { title: "项目要点", type: "list", items: ["kanaworksai-hue/audio-studio-mcp 于 10 月 18 日创建（67★）；", "功能：本地 AI 生成 BGM 与音效，面向 Claude Code 等 MCP 客户端。"] },
      { title: "笔者观察", type: "text", text: "代码、美术、文案都有 AI 管线之后，音频是最后一块短板——MCP 化意味着「写关卡时顺手生成氛围音」会变成编辑器内动作。质量上本地模型与 Sonniss 实录音源（本站常青库）仍有差距，但「占位音频零成本化」对 GameJam 是实打实的提速。参考来源：GitHub。" }
    ] },
    { id: "oss-agent2api-gateway", category: "opensource", subcategory: "GitHub 新仓库", title: "agent2api：多提供商本地网关——把智能体客户端登录态统一成 API", summary: "GitHub 新仓库 Agent2API/agent2api（10-18 创建）：把 WorkBuddy、小浣熊、CatPaw 等智能体客户端的登录态转成本地 API 网关——多客户端时代的统一接入层尝试。", source: "GitHub: Agent2API/agent2api", date: "2026-10-19", url: "https://github.com/Agent2API/agent2api", image: "https://opengraph.githubassets.com/1/Agent2API/agent2api", badge: "新仓库", badgeType: "ai", readTime: "5 分钟", hotScore: 72, tags: ["API 网关", "多提供商", "本地"], content: [
      { title: "项目要点", type: "list", items: ["Agent2API/agent2api 于 10 月 18 日创建（89★）；", "定位：多提供商本地网关（智能体客户端登录态 → 统一 API）。"] },
      { title: "笔者观察", type: "text", text: "「登录态转 API」类项目要打两个问号：一是服务条款风险（转售访问通常违规），二是它刚经历过 OpenCode 密钥泄露事件——同一周出现的网关项目让你把密钥交给第三个工具。技术上有趣，生产环境慎用。参考来源：GitHub。" }
    ] },
    { id: "oss-jasna-video-restore", category: "opensource", subcategory: "GitHub 热榜", title: "jasna：开源视频修复工具登上热榜——游戏预告片复刻的民间武器", summary: "Kruk2/jasna 登上 GitHub 热榜：视频修复（restoration）工具。对游戏社区而言，它是老游戏宣传片 4K 化、Mod 预告翻新的现成工具箱。", source: "GitHub: Kruk2/jasna", date: "2026-10-19", url: "https://github.com/Kruk2/jasna", image: "https://opengraph.githubassets.com/1/Kruk2/jasna", badge: "热榜精选", badgeType: "ai", readTime: "4 分钟", hotScore: 71, tags: ["视频修复", "开源", "超分"], content: [
      { title: "项目要点", type: "list", items: ["Kruk2/jasna 登上 GitHub 当日热榜；", "定位：视频修复工具（去噪/超分类处理）。"] },
      { title: "笔者观察", type: "text", text: "视频修复与游戏收藏社区的交集比想象大：GOG/Steam 老游戏的预告片、怀旧 CG 的 AI 修复已是一条成熟流量赛道。技术同学可以把 jasna 与本站收录过的视频超分工具横向对比，顺便学到「时序一致性」这个超分领域最难的工程问题。参考来源：GitHub。" }
    ] },
    { id: "oss-cli-anything-weekly", category: "opensource", subcategory: "周榜观察", title: "CLI-Anything 登上周榜：一个 CLI 统管 Claude Code/Codex/Gemini 的入口层战争", summary: "HKUDS/CLI-Anything（本站 10-02 曾以新仓库收录）本周登上 GitHub 周榜——「一个 CLI 切换任意编码智能体」的统一入口层需求在两周内从概念变成显学。", source: "GitHub: HKUDS/CLI-Anything", date: "2026-10-19", url: "https://github.com/HKUDS/CLI-Anything", image: "https://opengraph.githubassets.com/1/HKUDS/CLI-Anything", badge: "周榜回归", badgeType: "ai", readTime: "4 分钟", hotScore: 70, tags: ["CLI", "统一入口", "周榜"], content: [
      { title: "项目要点", type: "list", items: ["HKUDS/CLI-Anything（10-02 本站首次收录）本周登上 GitHub 周榜；", "定位：One CLI for Any Coding Agent——Claude Code/Codex CLI/Gemini CLI/Qwen 统一切换层。"] },
      { title: "笔者观察", type: "text", text: "回看这条时间线很有意思：10-02 它是「新工具」，10-19 已是「周榜常客」——编码智能体的入口层之战（CLI-Anything/orca/agent2api 一周内密集出现）说明工具层的货架期以周计。学生跟进开源的正确姿势：选一两个入口层项目深度使用，其余围观即可，别追每个新仓库。参考来源：GitHub。" }
    ] },
    { id: "engine-luanti-5180rc1", category: "engine", subcategory: "版本发布", title: "Luanti（Minetest）5.18.0-rc1（10/18）：开源体素引擎的年度版本冲刺", summary: "开源体素引擎 Luanti（原 Minetest）10 月 18 日发布 5.18.0-rc1——进入年度大版本的候选阶段。Minecraft 开源替代品的常青社区，体素与 Mod 生态的活教材。", source: "GitHub: luanti-org/luanti", date: "2026-10-18", url: "https://github.com/luanti-org/luanti/releases/tag/5.18.0-rc1", image: "https://opengraph.githubassets.com/1/luanti-org/luanti", badge: "版本发布", badgeType: "engine", readTime: "4 分钟", hotScore: 72, tags: ["Luanti", "Minetest", "体素"], content: [
      { title: "要点", type: "list", items: ["Luanti 10 月 18 日发布 5.18.0-rc1（8 月的 5.17.0 后的大版本候选）；", "社区已从 Minetest 更名 Luanti 并迁至独立组织。"] },
      { title: "笔者观察", type: "text", text: "Minetest→Luanti 的更名与组织迁移是社区项目「品牌独立」的典型案例（同两周的 Luau 迁移如出一辙）。做游戏的学生想研究「体素世界的网络同步与无限地形」，Luanti 的 C++ 源码规模适中，比 Minecraft 反编译友好得多。参考来源：GitHub。" }
    ] },
    { id: "engine-openxr-1165", category: "engine", subcategory: "版本发布", title: "OpenXR SDK 1.1.65（10/16）：XR 标准的月度推进", summary: "Khronos 的 OpenXR SDK 于 10 月 16 日发布 1.1.65。VR/AR 应用层的「一次编写、多端运行」标准仍在月度节奏上推进，Quest 之外的多端 XR 生态依赖它。", source: "GitHub: KhronosGroup/OpenXR-SDK", date: "2026-10-16", url: "https://github.com/KhronosGroup/OpenXR-SDK/releases/tag/release-1.1.65", image: "https://opengraph.githubassets.com/1/KhronosGroup/OpenXR-SDK", badge: "版本发布", badgeType: "engine", readTime: "4 分钟", hotScore: 71, tags: ["OpenXR", "Khronos", "XR"], content: [
      { title: "要点", type: "list", items: ["OpenXR SDK 10 月 16 日发布 1.1.65（1.1.63 后一个半月）。"] },
      { title: "笔者观察", type: "text", text: "OpenXR 的月度节奏不大张旗鼓，但它是 VR 生态不被单一厂商锁死的关键基建。结合本站 10-16 收录的 Steam Frame OLED 传闻：多端 XR 的标准层越厚，独立开发者的移植成本越低。参考来源：GitHub。" }
    ] },
    { id: "engine-oblivion-ue5-perf", category: "engine", subcategory: "社区工具", title: "Oblivion Remastered 性能修复项目：社区给 UE5 游戏开出的「引擎级」药方", summary: "GitHub 新项目 LTSharpe/OblivionRemasteredPerformanceFix（10-17 创建，172★）：针对《上古卷轴4：重制版》（UE5）的引擎级性能修复——帧率稳定性与卡顿优化的社区方案。UE5 stutter 问题的民间攻坚又添一例。", source: "GitHub: LTSharpe/OblivionRemasteredPerformanceFix", date: "2026-10-19", url: "https://github.com/LTSharpe/OblivionRemasteredPerformanceFix", image: "https://opengraph.githubassets.com/1/LTSharpe/OblivionRemasteredPerformanceFix", badge: "社区工具", badgeType: "engine", readTime: "5 分钟", hotScore: 73, tags: ["UE5", "性能修复", "卡顿"], content: [
      { title: "项目要点", type: "list", items: ["LTSharpe/OblivionRemasteredPerformanceFix 于 10 月 17 日创建（172★）；", "定位：UE5 引擎级性能修复（帧率稳定性、着色器卡顿）。"] },
      { title: "笔者观察", type: "text", text: "UE5 的着色器编译卡顿（shader stutter）已是社区项目的高产田——每个 3A UE5 移植几乎都要靠民间补丁救场。做引擎方向的同学这是最好的研究入口：一个「官方没解决但社区解决了」的问题，意味着技术方案没有被专利墙锁死，值得逐个 PR 精读。参考来源：GitHub。" }
    ] },
    { id: "engine-fps-optimizer-rust", category: "engine", subcategory: "社区工具", title: "fps-optimizer-rust：Rust 版游戏帧率稳定工具（10-18 创建即百星）", summary: "GitHub 新仓库 marcus-moorelab91a4/fps-optimizer-rust（10-18 创建，106★）：Rust 实现的游戏帧率稳定与延迟优化工具——系统级性能工具的 Rust 化趋势延续。", source: "GitHub: marcus-moorelab91a4/fps-optimizer-rust", date: "2026-10-19", url: "https://github.com/marcus-moorelab91a4/fps-optimizer-rust", image: "https://opengraph.githubassets.com/1/marcus-moorelab91a4/fps-optimizer-rust", badge: "社区工具", badgeType: "engine", readTime: "4 分钟", hotScore: 70, tags: ["Rust", "帧率", "性能工具"], content: [
      { title: "要点", type: "list", items: ["fps-optimizer-rust 于 10 月 18 日创建（106★）；", "定位：帧率稳定性与输入延迟优化（Rust 实现）。"] },
      { title: "笔者观察", type: "text", text: "注意甄别：这类「FPS 优化器」项目中混有启动器分发与灰色工具（本周另有一个 Fortnite booster 同类仓库本站未收录）——关注其技术实现（帧调度、延迟测量）比当工具用更有价值。Rust 在系统级游戏工具层的渗透率确实在快速上升。参考来源：GitHub。" }
    ] },
    { id: "engine-dxc-192609", category: "engine", subcategory: "版本发布", title: "DirectXShaderCompiler v1.9.2609（9/29 补位）：着色器编译器的稳定线更新", summary: "微软 DirectXShaderCompiler（DXC）于 9 月 29 日发布 v1.9.2609（本条为引擎稿荒补位，日期如实标注）。HLSL→DXIL 的官方编译器，配合此前收录的 Agility SDK 7.2.1 是图形管线的地基件。", source: "GitHub: microsoft/DirectXShaderCompiler", date: "2026-09-29", url: "https://github.com/microsoft/DirectXShaderCompiler/releases/tag/v1.9.2609", image: "https://opengraph.githubassets.com/1/microsoft/DirectXShaderCompiler", badge: "补位收录", badgeType: "engine", readTime: "4 分钟", hotScore: 70, tags: ["DXC", "HLSL", "微软"], content: [
      { title: "要点", type: "list", items: ["DXC v1.9.2609 于 9 月 29 日发布（补位收录，日期如实标注）；", "本站此前已收录 Agility SDK 7.2.1 + SM 6.10 LinAlg（10-06）。"] },
      { title: "笔者观察", type: "text", text: "DXC 是「图形管线地基件」的典型：没人拿它写新闻，但每个 DirectX 12 游戏都依赖它。图形方向的同学搭建 DX12 学习环境时的必装件，版本钉在 Agility SDK 对应关系上即可。参考来源：GitHub。" }
    ] },
    { id: "tut-gi-indie-studio-part3", category: "tutorials", subcategory: "GI 经营连载", title: "如何经营独立游戏工作室（三）：处理麻烦——分歧、欠款与散伙", summary: "GamesIndustry.biz 独立工作室经营连载终章：处理麻烦——团队分歧、款项纠纷与散伙清算。三部曲里最「扫兴」也最救命的一部。", source: "GamesIndustry.biz", date: "2026-10-14", url: "https://www.gamesindustry.biz/how-to-run-an-indie-game-studio-part-3-dealing-with-issues", image: "https://assetsio.gnwcdn.com/firm-framework.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "GI 连载", badgeType: "event", readTime: "8 分钟", hotScore: 73, tags: ["独立工作室", "危机处理", "GI 连载"], content: [
      { title: "站点要点", type: "list", items: ["GI 连载第三部（10 月 14 日发布）；", "主题：分歧、欠款、散伙等危机场景的处理。"] },
      { title: "笔者观察", type: "text", text: "配合本周新闻食用效果极佳：Marathon 内部分歧（10-18 专访）、Liquid Swords 破产清算（10-17）——连载讲的每个麻烦场景本周都在真实发生。学生团队至少学一件事：合作协议（哪怕一页纸）在组队第一天就该写。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "tut-adriancourreges", category: "tutorials", subcategory: "常青库", title: "Adrian Courrèges：图形技术拆解名站——「游戏渲染管线解剖」的代名词", summary: "常青库新增：Adrian Courrèges 个人站。其《DOOM 2016 渲染拆解》《怪兽显卡视角》系列是中文图形社区的启蒙读物之一——逐帧拆解真实游戏的完整渲染管线。", source: "Adrian Courrèges", date: "2026-10-19", url: "https://www.adriancourreges.com/", image: "http://www.adriancourreges.com/favicon-96x96.png", badge: "常青库", badgeType: "event", readTime: "10 分钟", hotScore: 73, tags: ["图形学", "渲染拆解", "DOOM"], content: [
      { title: "站点要点", type: "list", items: ["adriancourreges.com 为常青库新增收录（验证可访问，og 为站标级小图）；", "代表作：《Graphics Study: DOOM 2016》《Myth-busting」系列。"] },
      { title: "笔者观察", type: "text", text: "「拆解一篇，胜读十教程」——他把帧捕获工具（RenderDoc/PIX）用到极致的方法论，比具体结论更值得学。配合本站已收录的 LearnOpenGL 与 vulkan-tutorial，图形学习三件套成型：学 API、读拆解、自己抓帧。参考来源：Adrian Courrèges。" }
    ] },
    { id: "tut-seblagarde", category: "tutorials", subcategory: "常青库", title: "Sébastien Lagarde：Unity TA 大佬的图形研究博客——PBR 与材质系统的源头活水", summary: "常青库新增：Sébastien Lagarde 博客。Unity 渲染方向的知名图形程序员（PBR 白皮书作者之一），物理着色、材质系统、体积渲染的深度长文集散地。", source: "Sébastien Lagarde", date: "2026-10-19", url: "https://seblagarde.wordpress.com/", image: "https://secure.gravatar.com/blavatar/20eff69ebfce7e374fbfd7207cc51a0dcc7422c9dadca8f8c01951b42671e8bd?s=200&#038;ts=1792062704", badge: "常青库", badgeType: "event", readTime: "9 分钟", hotScore: 72, tags: ["PBR", "渲染", "博客"], content: [
      { title: "站点要点", type: "list", items: ["seblagarde.wordpress.com 为常青库新增收录（验证可访问，og 可用）；", "内容：PBR 理论、材质系统设计、渲染管线研究。"] },
      { title: "笔者观察", type: "text", text: "他的 PBR 系列是中文图形社区翻译转载的常客——读原文最大的价值是理解「为什么这么设计」而不是「参数怎么填」。配合 bartwronski（已收录）形成 TA 方向博客的完整拼图。参考来源：Sébastien Lagarde。" }
    ] },
    { id: "tut-drawabox", category: "tutorials", subcategory: "常青库", title: "Drawabox：美术零基础的线条训练课——「50% 规则」的免费系统课", summary: "常青库新增：Drawabox。面向「完全不会画画」者的结构绘画训练——免费、系统、反直觉地强调「画得开心只占 50%，刻意练习占 50%」。游戏美术方向的第一块地基。", source: "Drawabox", date: "2026-10-19", url: "https://drawabox.com/", image: "", badge: "常青库", badgeType: "event", readTime: "7 分钟", hotScore: 71, tags: ["绘画基础", "美术", "训练"], content: [
      { title: "站点要点", type: "list", items: ["drawabox.com 为常青库新增收录（验证可访问；站点无 og 留空图）；", "定位：零基础结构绘画训练（线条→形状→透视→结构），全程免费。"] },
      { title: "笔者观察", type: "text", text: "本站美术向常青库（Krita/GIMP/Ctrl+Paint/Lospec）一直缺「绝对零基础」的入口——Drawabox 补上了。它的「50% 规则」（一半时间画你喜欢的，一半时间做枯燥练习）是所有技能学习的通用心法，不止画画。参考来源：Drawabox。" }
    ] },
    { id: "tut-goalkicker", category: "tutorials", subcategory: "常青库", title: "GoalKicker：900+ 页免费编程专业书库——「Notes for Professionals」全系列", summary: "常青库新增：GoalKicker。C#/C++/Python/SQL/算法等数十本《Notes for Professionals》免费 PDF——从 Stack Overflow 精华提炼的工具书，打印出来就是案头手册。", source: "GoalKicker", date: "2026-10-19", url: "https://goalkicker.com/", image: "https://books.goalkicker.com/goalkicker_books.png", badge: "常青库", badgeType: "event", readTime: "5 分钟", hotScore: 71, tags: ["编程书籍", "免费 PDF", "速查"], content: [
      { title: "要点", type: "list", items: ["goalkicker.com 为常青库新增收录（验证可访问，og 可用）；", "内容：C++/C#/Unity/SQL/算法等数十本免费专业手册 PDF。"] },
      { title: "笔者观察", type: "text", text: "它不能替代系统学习（没有叙事线），但作为「卡住时的速查手册」无可替代——Unity 与 C++ 两本对应本站读者群最大。下载到本地比收藏网址更实用：这些页面不改版，PDF 永久有效。参考来源：GoalKicker。" }
    ] },
    { id: "misc-nextfest-october-open", category: "contest", subcategory: "平台活动", title: "Steam Next Fest 十月场今日开幕：数百款 Demo 免费试玩一周（10/19-26）", summary: "Steam 新品节十月场今日（10 月 19 日）开幕，持续至 10 月 26 日——数百款未发售游戏提供限时 Demo。对开发者是「发布前唯一的大规模曝光窗口」，对玩家是一年两度的淘货季。", source: "Steam", date: "2026-10-19", url: "https://store.steampowered.com/sale/nextfest", image: "", badge: "平台活动", badgeType: "event", readTime: "5 分钟", hotScore: 76, tags: ["Steam Next Fest", "Demo", "10/19-26"], content: [
      { title: "要点", type: "list", items: ["Steam Next Fest 十月场 10 月 19-26 日进行中（本站 10-09 收录定档信息，今日正式开幕）；", "机制：未发售游戏限时 Demo + 直播同捆，开发者需在开幕前完成商店页与 Demo 优化。"] },
      { title: "笔者观察", type: "text", text: "给未来准备参展的同学划重点：Next Fest 的胜负手在开幕前——愿望单转化取决于商店页首图/首视频在 3 秒内讲清「这是什么游戏」。本届值得蹲的观察点：AI 辅助开发的游戏占比（此前 indiePlay 已设 AI 赛道，Next Fest 是更大的样本）。参考来源：Steam。" }
    ] },
    { id: "misc-pgconnects-nordics-tomorrow", category: "contest", subcategory: "行业会议", title: "PG Connects Nordics 明日开幕（10/20-21 赫尔辛基）：1500+ 从业者的北欧对接会", summary: "Pocket Gamer Connects Nordics 明日（10 月 20 日）在赫尔辛基开幕，为期两天，预计 1500+ 从业者参加——欧洲独立团队找发行、找投资的高密度场，本站 10-13 收录后随开幕节点更新。", source: "PG Connects（本站 10-13 收录）", date: "2026-10-20", url: "https://www.pgconnects.com/helsinki/", image: "", badge: "行业会议", badgeType: "event", readTime: "4 分钟", hotScore: 71, tags: ["PG Connects", "赫尔辛基", "10/20-21"], content: [
      { title: "要点", type: "list", items: ["PG Connects Nordics 10 月 20-21 日赫尔辛基举行（本站 10-13 收录，今日随开幕节点更新）；", "规模：1500+ 从业者、多轨演讲与商务对接。"] },
      { title: "笔者观察", type: "text", text: "开幕类条目的价值在「会后复盘」：接下来两天观察 Supercell/Rovio 大本营的行业动向（通常有 deal 公告流出）。国内同学的对标场景是 WePlay（11/21-22 上海）——提前 30 天开始约 meeting 是行业会议的铁律。参考来源：PG Connects。" }
    ] },
    { id: "misc-ggj2027-registration", category: "contest", subcategory: "赛事节点", title: "GGJ 2027 倒计时：全球最大 GameJam 1 月开 jam，站点注册 11-1 开放", summary: "Global Game Jam 2027 官网信息确认（本站 10-02/10-10 曾两度收录其节点）：2027 年 1 月下旬开 jam，站点（分赛场）注册 11 月 1 日开放——全球最大规模的 48 小时游戏创作活动。", source: "Global Game Jam（官网，403 反爬属正常）", date: "2026-10-19", url: "https://globalgamejam.org/", image: "", badge: "赛事节点", badgeType: "event", readTime: "4 分钟", hotScore: 72, tags: ["GGJ 2027", "1 月开赛", "站点注册"], content: [
      { title: "要点", type: "list", items: ["GGJ 2027：1 月下旬全球同步 48 小时 jam（本站 10-02 收录定档 1/25-31 口径）；", "站点注册 11 月 1 日开放——想当 site organizer 的同学从现在开始准备；", "注：GGJ 官网对脚本访问 403 反爬（规则 9 预期行为），节点信息以官网人工访问为准。"] },
      { title: "笔者观察", type: "text", text: "GGJ 站点注册开放意味着两个动作：①想参加的广州同学盯紧广东本地站点（往年广深站点 11 月内即满）；②有组织经验的高年级同学可以申请做 co-organizer——这是简历上「社区组织能力」的最硬背书。距离开 jam 约 100 天，作品集空白的话现在正是攒手感的窗口。参考来源：Global Game Jam。" }
    ] }
  ]
};
