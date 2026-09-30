window.DAILY_NEWS_DATA = {
  meta: {
    date: "2026-10-01",
    weekday: "星期四",
    title: "广药 游戏开发情报中枢 · 每日技术情报",
    subtitle: "个人学习观察与评述 · 附参考来源外部链接",
    updateTime: "2026-10-01 07:40",
    editor: "广药技术中枢 & CodeBuddy",
    highlights: [
      "GTA6 动态天气系统曝光：飓风、彩虹、持久动态云全都要",
      "Grasshopper Manufacture 宣布脱离网易，重新回归独立",
      "《巫师3》重制版拉动 Steam 同时在线冲上历史最高",
      "Xbox CEO 阿莎·夏尔马公开回应：『Xbox 不出售』",
      "《Arc Raiders》开发者自述：我们严重低估了做长线服务游戏的难度"
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
    id: "gta6-dynamic-weather-system",
    category: "engine",
    categoryName: "引擎前沿 · 头条",
    tag: "技术前瞻",
    title: "GTA6 要模拟飓风、彩虹与持久动态云：把天气做成『让你不想犯罪想看天』的世界层",
    summary: "RPS 汇总 GTA6 新公开的技术细节：游戏将模拟飓风、彩虹与持久化的动态云层等一系列天气现象——天气不再是背景贴图，而是一个持续运行、可观察、可影响体验的世界系统层。RPS 的说法很妙：这些努力的目的是让你停下犯罪，先当个天气爱好者。",
    image: "https://assetsio.gnwcdn.com/lucia-leaning-out-of-a-car.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    source: "Rock Paper Shotgun / Rockstar Games",
    date: "2026-09-30",
    url: "https://www.rockpapershotgun.com/gta-6-will-simulate-hurricanes-rainbows-and-persistent-dynamic-clouds-among-other-efforts-to-make-you-stop-doing-crime-and-become-a-weather-nerd",
    readTime: "5 分钟深度",
    hotScore: 94,
    tags: ["GTA6", "动态天气", "世界模拟", "Rockstar", "大气渲染"],
    content: [
      { title: "技术要点", type: "list", items: ["飓风级极端天气将可被模拟并影响游戏世界；", "彩虹与持久化动态云层纳入天气系统；", "天气是持续运行的世界层，而非触发式演出；", "Rockstar 的意图：让玩家愿意停下来观察世界本身。"] },
      { title: "笔者观察", type: "text", text: "这条对学引擎和 TA 的同学是一份免费的『开放世界天气系统需求清单』：持久动态云（不是滚动贴图）、飓风级风暴对场景的实际作用、彩虹这种『光学正确才成立』的现象，每一项背后都是大气散射、体积渲染与风场系统的组合题。更值得记的是设计视角：把天气做成『可观赏的内容』而非『可 traversing 的障碍』，是让世界显得活的便宜手段——你的毕设 demo 里加一套真的会变的云，成本不高，观感翻倍。参考来源：Rock Paper Shotgun。" }
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
    { id: "grasshopper-leaves-netease", category: "industry", subcategory: "大厂动向", title: "Grasshopper Manufacture 脱离网易重回独立：『NO GAME NO LIFE』", summary: "须田刚一领衔的 Grasshopper Manufacture 宣布从网易 Games 分拆、重归独立工作室——四年前被收编的『怪游戏名厂』选择再次单飞，RPS 直接用工作室名言『NO GAME NO LIFE』作标题。", source: "GamesIndustry.biz", date: "2026-09-30", url: "https://www.gamesindustry.biz/grasshopper-manufacture-becomes-independent-as-it-splits-from-netease-games", image: "https://assetsio.gnwcdn.com/romeo_GPUcPKu.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "business", readTime: "4 分钟", hotScore: 88, tags: ["Grasshopper Manufacture", "网易", "独立化", "须田刚一"], content: [
      { title: "事件要点", type: "list", items: ["Grasshopper Manufacture 正式脱离网易 Games，恢复独立身份；", "该工作室 2022 年前后被网易收编，代表作《杀手7》《英雄不再》；", "RPS 以工作室精神口号『NO GAME NO LIFE』报道此事。"] },
      { title: "笔者观察", type: "text", text: "这是网易海外发行策略收缩的又一个信号——被收编的个性工作室相继离开，说明『大厂给钱 + 名厂保留个性』的联姻模式在账面上很难双赢。对在校同学的职业含义：想去『有作者性的工作室』，独立与第一方的边界现在越来越动态，入职前看清母公司关系与项目授权链，比看作品集更重要。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "xbox-ceo-not-for-sale", category: "industry", subcategory: "大厂动向", title: "Xbox CEO 阿莎·夏尔马：『Xbox 不出售』——重组风波后的官方灭火", summary: "Xbox 领导层在经历组织重组与『可持续商业模式』的定调发言后，新任 CEO Asha Sharma 面对出售传闻明确表态：Xbox 不对外出售。此前的『Xbox 重置没有终点』论与本次表态连成一条完整的公关线。", source: "GamesIndustry.biz", date: "2026-09-30", url: "https://www.gamesindustry.biz/xbox-ceo-asha-sharma-insists-xbox-is-not-for-sale", image: "https://assetsio.gnwcdn.com/billy-freeman-5O5oJGOnj20-unsplash-copy.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "business", readTime: "3 分钟", hotScore: 82, tags: ["Xbox", "微软", "Asha Sharma", "组织重组"], content: [
      { title: "报道要点", type: "list", items: ["Xbox CEO Asha Sharma 公开否认出售传闻；", "表态背景：Xbox 组织重组、领导层换防与业务模式调整持续发酵；", "与此前纳德拉『发明可持续商业模式』的发言同属一条公关叙事线。"] },
      { title: "笔者观察", type: "text", text: "把本周三条 Xbox 新闻连读：重组无终点（9/25）→ 必须发明可持续模式（9/28）→ 我们不出售（9/30）——这是标准的『先降预期、再锁稳定』公关三连。对观察行业的人，这是练习『从发言顺序读企业意图』的活教材；对从业者，含义直白： Xbox 生态短期不会消失，但内部资源的优先级会持续重排。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "ubisoft-creative-house-2-massive", category: "industry", subcategory: "大厂动向", title: "育碧把 Creative House 2 并入 Massive Entertainment：《全境封锁》《幽灵行动》《细胞分裂》 IP 归新家", summary: "育碧宣布将 Creative House 2 重组并入 Massive Entertainment——这个坐拥《全境封锁》《幽灵行动》《细胞分裂》等 IP 的团队从此挂上 Massive 的名字，育碧的 studio 整合再下一城。", source: "GamesIndustry.biz", date: "2026-09-30", url: "https://www.gamesindustry.biz/ubisoft-renames-creative-house-2-home-of-the-division-ghost-recon-and-splinter-cell-as-massive-entertainment", image: "https://assetsio.gnwcdn.com/Massive_Logo_16x9.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "大厂动向", badgeType: "business", readTime: "3 分钟", hotScore: 79, tags: ["育碧", "Massive Entertainment", "IP 整合", "组织架构"], content: [
      { title: "事件要点", type: "list", items: ["Creative House 2 并入 Massive Entertainment 并以后者命名；", "《全境封锁》《幽灵行动》《细胞分裂》等 IP 随团队迁移；", "育碧自 2024 年以来持续推进工作室整合与 IP 集中管理。"] },
      { title: "笔者观察", type: "text", text: "Massive 现在同时握着 Snowdrop 引擎、《阿凡达》技术底子和三大潜行/射击 IP，正在变成育碧内部的『旗舰工场』。观察点在分工逻辑：大 IP 集中到强技术工作室，意味着引擎与内容团队绑定更深——对想进育碧系的同学，Massive 系岗位的技术栈要求会比其他工作室更高一档。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "witcher3-steam-concurrent-record", category: "games", subcategory: "数据追踪", title: "《巫师3》重制版立竿见影：Steam 同时在线冲上历史最高", summary: "重制版上线直接把《巫师3》的 Steam 同时在线人数推到发售十年来的历史最高点——免费的『战斗 2.0』升级 + 新 DLC 的组合拳，完成了一次教科书级的老游戏复活。", source: "GamesIndustry.biz", date: "2026-09-30", url: "https://www.gamesindustry.biz/the-witcher-3-hits-its-highest-ever-steam-concurrent-player-count-following-remastered-launch", image: "https://assetsio.gnwcdn.com/wiedzmin-3-remastered-headline-steam2.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "数据追踪", badgeType: "games", readTime: "3 分钟", hotScore: 85, tags: ["巫师3", "重制版", "Steam 在线人数", "长线运营"], content: [
      { title: "数据要点", type: "list", items: ["重制版上线后，Steam 同时在线达到发售十年来的历史峰值；", "免费升级 + 新 DLC《Songs of the Past》双轮驱动；", "老玩家回流与新玩家入场同步发生。"] },
      { title: "笔者观察", type: "text", text: "昨天的头条押注『这是口碑资产重建』，今天数据就兑现了。值得记进笔记的因果链：免费升级是流量扳机，但能把流量留住的是战斗系统真改了——重制做得再多，玩法没诚意也只会有一周峰值。老游戏复活的标准配方从此多了一个完整案例：诚意重构 + 免费策略 + 内容钩子。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "dune-awakening-style-vs-photoreal", category: "engine", subcategory: "技术访谈", title: "《沙丘：觉醒》创意总监访谈：游戏内广告学好莱坞，『风格化胜过照片级写实』", summary: "《沙丘：觉醒》创意总监在访谈中谈两个有意思的判断：游戏内广告的呈现方式可以借鉴好莱坞植入逻辑；以及在视觉路线上，风格化的表达胜过无脑堆照片级写实。", source: "GamesIndustry.biz", date: "2026-09-30", url: "https://www.gamesindustry.biz/dune-awakenings-creative-director-on-copying-hollywood-in-game-advertising-and-why-style-beats-photorealism", image: "https://assetsio.gnwcdn.com/DA_MA_SleeperHeroShot_FinalDelivery-2048x1152.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "技术访谈", badgeType: "engine", readTime: "6 分钟", hotScore: 77, tags: ["沙丘觉醒", "美术方向", "游戏内广告", "风格化"], content: [
      { title: "访谈要点", type: "list", items: ["游戏内广告（IGA）的植入逻辑可对标好莱坞电影的做法；", "视觉路线判断：风格化表达优先于照片级写实；", "背景是《沙丘：觉醒》长线运营中广告与美术的持续平衡。"] },
      { title: "笔者观察", type: "text", text: "『风格化胜过写实』从 TA 圈的共识正在变成决策层的共识——写实路线的成本曲线是指数的，风格化则可以用美术方向换性能与辨识度。对学美术的同学这是就业信号：会『在约束里建立风格』的 TA 与概念设计，比会『把画面磨写实』的执行更稀缺。IGA 那部分也值得看：开放世界的广告位设计正在成为新的变现学科。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "arc-raiders-live-service-hindsight", category: "engine", subcategory: "开发幕后", title: "《Arc Raiders》开发自述：『我们严重低估了做长线服务游戏的难度』", summary: "Embark Studios 开发者复盘《Arc Raiders》：坦承团队最初严重低估了长线服务游戏的运营复杂度，直到某天集体自问『我们到底为什么要这么做？』才重新校准方向——一份罕见的诚实复盘。", source: "Rock Paper Shotgun", date: "2026-09-30", url: "https://www.rockpapershotgun.com/ultimately-we-asked-why-are-we-doing-this-the-creators-of-arc-raiders-wildly-underestimated-how-hard-it-is-to-make-a-live-service-game", image: "https://assetsio.gnwcdn.com/arc-raiders-caravan-expeditions.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开发幕后", badgeType: "engine", readTime: "7 分钟", hotScore: 84, tags: ["Arc Raiders", "Embark Studios", "长线服务", "开发复盘"], content: [
      { title: "复盘要点", type: "list", items: ["团队自述『wildly underestimated』长线服务游戏的难度；", "转折点是集体自问『我们到底为什么要这么做？』；", "《Arc Raiders》最终以 extraction射击形态成功上线。"] },
      { title: "笔者观察", type: "text", text: "『为什么做这个』这种看起来最基础的问题，往往在项目最深处才被第一次认真问——而且通常是在错的路上走很远之后。学生项目有个天然优势：没有沉没成本的包袱，每两周就能问一次这个问题。把这句写进你的项目管理工具里，比任何甘特图都值钱。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "marvel-tokon-deadpool-design", category: "games", subcategory: "设计解析", title: "《Marvel Tōkon》设计解析：Deadpool 为什么收起了耍宝，学会尊重格斗游戏", summary: "RPS 解析格斗游戏《Marvel Tōkon》里 Deadpool 的设计：这个以打破第四面墙著称的贱嘴角色，在格斗系统里反而被『严肃化』处理——把角色的喜剧性让位给系统的严谨性，是一次值得记录的角色改编取舍。", source: "Rock Paper Shotgun", date: "2026-09-30", url: "https://www.rockpapershotgun.com/the-importance-of-being-earnest-how-marvel-tokons-deadpool-trades-ridicule-for-fighting-game-reverence", image: "https://assetsio.gnwcdn.com/Marvel-Tokon-Deadpool-yell.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计解析", badgeType: "games", readTime: "6 分钟", hotScore: 76, tags: ["Marvel Tōkon", "Deadpool", "格斗游戏", "角色设计"], content: [
      { title: "解析要点", type: "list", items: ["Deadpool 在《Marvel Tōkon》中被塑造成『认真的格斗家』而非纯搞笑役；", "设计逻辑：格斗系统的严谨性优先于角色的喜剧标签；", "角色的第四面墙式幽默被收敛为对格斗传统的致敬。"] },
      { title: "笔者观察", type: "text", text: "IP 改编有个隐形定律：角色的『标签行为』和『系统行为』冲突时，格斗/竞技类永远选系统——因为笑点是一次性的，手感是几百小时的。这个取舍思路对任何玩法向改编都适用：先把角色翻译成系统语言，再考虑还原人设。做毕设角色设计的同学，试着给你的角色写一份『系统人格说明书』试试。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "crimson-desert-expansion-delay", category: "games", subcategory: "延期公告", title: "《红色沙漠》首个资料片《Charting the Unknown》延期：Pearl Abyss 要多打磨『红色布丁』", summary: "Pearl Abyss 宣布《红色沙漠》首个资料片《Charting the Unknown》延期，理由是给团队更多时间打磨与稳定化——RPS 用『stabilise the red pudding』的玩笑话翻译了这次延期声明。", source: "Rock Paper Shotgun", date: "2026-09-30", url: "https://www.rockpapershotgun.com/crimson-deserts-first-expansion-charting-the-unknown-delayed-so-pearl-abyss-get-more-time-to-polish-and-stabilise-the-red-pudding", image: "https://assetsio.gnwcdn.com/crimson-desert-dlc-delayed-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "延期公告", badgeType: "games", readTime: "3 分钟", hotScore: 72, tags: ["红色沙漠", "Pearl Abyss", "延期", "资料片"], content: [
      { title: "公告要点", type: "list", items: ["首个资料片《Charting the Unknown》宣布延期；", "官方理由：需要更多时间打磨与稳定性建设；", "本体的优化问题被外界长期关注，延期被视为针对性回应。"] },
      { title: "笔者观察", type: "text", text: "『延期以打磨稳定性』在 2026 年已经从公关套话变成了玩家买账的理由——CDPR、Larian 到现在的 Pearl Abyss，主流舆论越来越接受『晚点但别崩』。对即将参加毕设答辩的同学这也是心理按摩：延期不可耻，演示当场崩溃才致命，把 deadline 后挪一周先做崩溃测试。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "ck3-by-god-alone-expansion", category: "games", subcategory: "内容更新", title: "《十字军之王3》新资料片《By God Alone》：教皇、离婚与中世纪宗教模拟的新高度", summary: "Paradox 为《十字军之王3》推出宗教主题资料片《By God Alone》：中世纪教会权力博弈成为系统主角，RPS 评价『神圣的胡作非为管够』——即使你的一夫多妻教皇一天里没离成三次婚。", source: "Rock Paper Shotgun", date: "2026-09-30", url: "https://www.rockpapershotgun.com/crusader-kings-3s-by-god-alone-expansion-offers-plenty-of-holy-hijinks-even-if-your-polyamorous-pope-doesnt-get-divorced-three-times-in-one-day", image: "https://assetsio.gnwcdn.com/ck3-header-02.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "内容更新", badgeType: "games", readTime: "5 分钟", hotScore: 74, tags: ["十字军之王3", "Paradox", "资料片", "系统模拟"], content: [
      { title: "内容要点", type: "list", items: ["《By God Alone》聚焦中世纪宗教权力系统；", "教会职位、离婚、圣职任免等机制全面扩展；", "RPS 实测评价：宗教胡闹的涌现叙事管够。"] },
      { title: "笔者观察", type: "text", text: "CK3 的资料片公式值得做系统策划的同学拆解：它从不发明新系统，而是把『权力关系』这个元系统换一个社会维度再讲一遍——王室→宫廷→教会。涌现叙事的密度取决于规则间的冲突面数量，这条是《模拟人生》到《CK3》通用的黄金法则。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "songs-of-glimmerwick-announce", category: "games", subcategory: "新作观察", title: "《Songs of Glimmerwick》：Eastshade 开发商新作——用笛声重塑大地的魔法学院 RPG", summary: "《Eastshade》开发商 Eastshade Studios 公布新作《Songs of Glimmerwick》：一所魔法学院的 RPG，玩家吹奏笛子即可重塑地形地貌——绘画团队转型音乐魔法，概念依旧清新。", source: "Rock Paper Shotgun", date: "2026-09-30", url: "https://www.rockpapershotgun.com/come-play-the-flute-and-reshape-the-very-earth-in-songs-of-glimmerwick-a-magic-school-rpg-from-the-creators-of-eastshade", image: "https://assetsio.gnwcdn.com/scfh9a.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "新作观察", badgeType: "games", readTime: "4 分钟", hotScore: 70, tags: ["Songs of Glimmerwick", "Eastshade", "魔法学院", "玩法概念"], content: [
      { title: "报道要点", type: "list", items: ["《Eastshade》（无战斗的油画风开放世界）原班人马打造；", "核心概念：吹笛改变地形，音乐即建造工具；", "魔法学院 RPG 包装 + 非暴力玩法的组合延续工作室路线。"] },
      { title: "笔者观察", type: "text", text: "Eastshade 的两次立项都在做同一件事：把『创作动词』直接当核心机制（上次是画画，这次是吹笛）。这类『动词即世界观』的设计对小团队极其友好——机制聚焦、美术风格天然统一。想找毕设选题的同学，照这个公式想三个『用 XX 就能改变世界』的动词，比想十页背景故事有用。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "satisfactory-cave-sizing-interview", category: "engine", subcategory: "设计访谈", title: "《Satisfactory》资料片洞穴设计访谈：『我总把它看成一个三角形』——多大的洞才算刚好", summary: "Coffee Stain 开发者谈《Core Values》资料片中洞穴的尺寸设计：洞穴大小是一个平衡探索引导、资源藏匿与玩家行进效率的三角问题——具体多大才算『刚刚好』，答案比想象中讲究。", source: "Rock Paper Shotgun", date: "2026-09-30", url: "https://www.rockpapershotgun.com/i-always-see-it-kind-of-like-a-triangle-the-surprising-challenge-of-making-the-perfectly-sized-cave-in-satisfactory-expansion-core-values", image: "https://assetsio.gnwcdn.com/satisfactory-core-values-cat-creature_vibR3ac.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "设计访谈", badgeType: "engine", readTime: "5 分钟", hotScore: 73, tags: ["Satisfactory", "关卡设计", "洞穴", "空间设计"], content: [
      { title: "访谈要点", type: "list", items: ["洞穴尺寸被拆解为三角权衡：探索引导 / 资源奖励 / 行进效率；", "太窄让人烦，太空旷失去探索感，『刚好』区间很窄；", "《Core Values》地下内容是全新资源工具体系的舞台。"] },
      { title: "笔者观察", type: "text", text: "把『洞穴多大』讲成三角形，这是把玄学变成参数化的标准示范——关卡设计里几乎所有『手感』问题都能拆成几个可调节量的权衡，区别只在你有没有意识到它们在互相牵制。学关卡设计的同学，试着给自己的关卡写一份这样的『三角说明』，比堆二十个互相打架的机制强。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "bg3-act2-expansion-mod-interview", category: "games", subcategory: "Mod 社区", title: "《博德之门3》二幕扩展 Mod 开发者访谈：怎么把一支大军的『支线』缝进主线不留痕迹", summary: "Nexus 上备受关注的《博德之门3》二幕扩展 Mod 背后的 Modder 接受 RPS 访谈：讲如何把一条『绕道打一整支军队』的内容缝进原作剧情——『跑题感不 unnatural』是全部设计目标。", source: "Rock Paper Shotgun", date: "2026-09-30", url: "https://www.rockpapershotgun.com/getting-sidetracked-doesnt-feel-too-unnatural-baldurs-gate-3-act-two-expansion-modder-on-how-they-seamlessly-fit-a-detour-to-fight-an-army-into-the-rpgs-plot", image: "https://assetsio.gnwcdn.com/baldurs-gate-3-act-two-expansion-modder-nexus-interview-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "Mod 社区", badgeType: "games", readTime: "6 分钟", hotScore: 78, tags: ["博德之门3", "Mod", "叙事整合", "Nexus"], content: [
      { title: "访谈要点", type: "list", items: ["二幕扩展 Mod 在原剧情中植入一场大军遭遇战；", "设计核心：让支线『跑题跑得自然』；", "Modder 详述与原作叙事节奏、角色动机的衔接手法。"] },
      { title: "笔者观察", type: "text", text: "『怎么把大内容塞进既有叙事而不突兀』不只是 Mod 课题——DLC、赛季更新、甚至课堂作业的最后一周加需求，全是同一道题。这位 Modder 的答案是先找叙事的『天然缝隙』（角色本就可能分心的节点），而不是硬造借口。做叙事设计练习时，可以先写主线，再练『往里塞一个支线不伤主线』，这个能力市场价很高。参考来源：Rock Paper Shotgun。" }
    ] },
    { id: "how-to-run-indie-studio-part1", category: "tutorials", subcategory: "开荒教程", title: "GI.biz 新专栏《如何经营独立工作室》Part 1：工作室到底是什么", summary: "GamesIndustry.biz 开设新系列《How to run an indie game studio》，第一篇从最本源的问题讲起：工作室『是什么』——法人实体、作品流水线还是一群人的承诺？系列面向正要开工作室和已经在坑里的人。", source: "GamesIndustry.biz", date: "2026-09-30", url: "https://www.gamesindustry.biz/how-to-run-an-indie-game-studio-part-1-what-is-a-studio", image: "https://assetsio.gnwcdn.com/firm-framework.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "开荒教程", badgeType: "tutorial", readTime: "8 分钟", hotScore: 76, tags: ["独立工作室", "创业", "系列专栏", "团队管理"], content: [
      { title: "系列要点", type: "list", items: ["GI.biz 新系列开篇，定位是独立工作室经营的系统指南；", "Part 1 回答定义问题：工作室的三重身份（实体/流水线/承诺）；", "后续篇目预计覆盖注册、融资、发行与团队管理等环节。"] },
      { title: "笔者观察", type: "text", text: "『工作室是什么』这个问题在毕业季会变得非常具体：几个同学一起接外包算不算工作室？作品挂在谁名下？分成怎么写进协议？国内语境下还要加一条——个体户、个独还是公司，税负与责任完全不同。建议把整个系列追完再决定毕业去向是『进厂』还是『组队』，这种从定义讲起的慢内容比短视频创业经可靠得多。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "queens-domain-indie-rpg", category: "games", subcategory: "独立观察", title: "《Queen's Domain》：一把飞行剑 + 无限飞刀，孤身闯『美人怪岛』的第一人称 RPG", summary: "RPS 眼中本周最有个性的独立新作：《Queen's Domain》——第一人称 RPG，玩家只凭一把可遥控的飞行剑和无限飞刀，挑战一座住满『华丽怪胎』的岛屿。武器系统一句话就能讲清，气质拉满。", source: "Rock Paper Shotgun", date: "2026-09-30", url: "https://www.rockpapershotgun.com/first-person-rpg-queens-domain-pitches-you-against-an-island-of-gorgeous-freaks-with-naught-but-a-flying-sword-and-infinite-throwing-daggers", image: "https://assetsio.gnwcdn.com/queens-domain.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "独立观察", badgeType: "games", readTime: "4 分钟", hotScore: 69, tags: ["Queen's Domain", "独立RPG", "武器设计", "第一人称"], content: [
      { title: "作品要点", type: "list", items: ["第一人称视角的动作 RPG；", "武器组合极简：可遥控飞行剑 + 无限飞刀；", "美术与敌人设计走『华丽怪胎』的怪奇路线。"] },
      { title: "笔者观察", type: "text", text: "『无限飞刀 + 可遥控主武器』是典型的资源极简设计：弹药管理被砍掉后，玩家的全部决策集中在空间与时机上——这种减法在小体量 RPG 里反而比堆系统更出效果。加上『怪岛美人』这种一句话立住美术方向的设定，又是一个概念先行的小队样本。参考来源：Rock Paper Shotgun。" }
    ] }
  ]
}
