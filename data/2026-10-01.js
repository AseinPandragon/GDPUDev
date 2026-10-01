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
    { id: "ai", name: "AI前沿", icon: "🤖", desc: "AI NPC / 智能体 / 生成式AI / 大模型工具" },
    { id: "contest", name: "竞赛·GameJam", icon: "🏆", desc: "Game Jam / 高校赛事 / 独立游戏大赛 / 报名与截止日历" }
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
    ] },
{ id: "gta-hacker-arrest", category: "industry", subcategory: "安全事件", title: "GTA Online 日收入泄露案告破：嫌疑人被捕，数据安全不再是『别人的事』", summary: "GamesIndustry.biz 报道：泄露 GTA Online 每日营收数据的嫌疑人已被逮捕。一份内部数据足以撼动 R 星的商业机密防线——游戏公司的数据安全预算，该加了吗？", source: "GamesIndustry.biz", date: "2026-10-01", url: "https://www.gamesindustry.biz/alleged-hacker-arrested-over-leak-that-exposed-gta-onlines-daily-revenue", image: "https://assetsio.gnwcdn.com/gta-5-next-gen-update.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp", badge: "安全事件", badgeType: "business", readTime: "4 分钟", hotScore: 85, tags: ["GTA", "数据安全", "R星", "行业事件"], content: [
      { title: "事件要点", type: "list", items: ["泄露 GTA Online 每日营收数据的嫌疑人已被捕；", "涉案数据包含未经公开的营收细节；", "对全行业：内部数据的访问与审计该重新审视。"] },
      { title: "笔者观察", type: "text", text: "营收数据为什么敏感？因为它能反推一款游戏的真实健康度——这是上市公司最不想被提前看到的底牌。做游戏的同学容易觉得『安全是运维的事』，但管线里的每一份导出表都是泄露面。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "global-game-revenue-2030", category: "industry", subcategory: "数据预测", title: "2030 年全球游戏内容收入将达 2291 亿美元：一份预测报告的三个信号", summary: "GamesIndustry.biz 援引最新预测：2030 年全球游戏内容收入将增长 2.3% 至 2291 亿美元，PC 与亚太市场是主要引擎——增长放缓但仍在增长，这本身就是信号。", source: "GamesIndustry.biz", date: "2026-10-01", url: "https://www.gamesindustry.biz/global-game-content-revenue-forecast-to-rise-23-to-2291bn-in-2030-supported-by-pc-and-asia-pacific-market", image: "", badge: "数据预测", badgeType: "business", readTime: "5 分钟", hotScore: 80, tags: ["市场数据", "行业预测", "PC", "亚太"], content: [
      { title: "报告要点", type: "list", items: ["2030 年全球游戏内容收入预计 2291 亿美元；", "年增速 2.3%：大盘还在涨，但进入低速稳增期；", "PC 与亚太市场是核心支撑。"] },
      { title: "笔者观察", type: "text", text: "2.3% 这个数字对求职者是好消息也是警告：行业不缩，但『随便进』的时代结束了。选方向时看结构性机会（PC 复兴、亚太出海）比看大盘有用得多。参考来源：GamesIndustry.biz。" }
    ] },
    { id: "engine-choice-2026-guide", category: "engine", subcategory: "选型指南", title: "Unity / Godot / Unreal / Cave：一篇 2026 引擎选型对比的冷静读法", summary: "2026 年选引擎比以往任何时候都难：三巨头之外 Cave 等新势力出现。这篇对比文的价值不在答案，而在它给出的选维度——授权模式、团队规模、目标平台，一个都不能少。", source: "Uniday Studio", date: "2026-10-01", url: "https://uniday.studio/zh/blog/5-unity-vs-godot-vs-unreal-vs-cave2026%E5%B9%B4%E4%BD%A0%E5%BA%94%E8%AF%A5%E9%80%89%E6%8B%A9%E5%93%AA%E4%B8%AA%E6%B8%B8%E6%88%8F%E5%BC%95%E6%93%8E", image: "https://uniday.studio/static/uploads/08dde2db-abd5-495a-8340-6b7bd8b63ce9.jpg", badge: "选型指南", badgeType: "engine", readTime: "8 分钟", hotScore: 75, tags: ["引擎选型", "Unity", "Godot", "Unreal"], content: [
      { title: "文章要点", type: "list", items: ["四大引擎从授权、平台、团队规模多维对比；", "Cave 等新势力开始进入新人视野；", "结论不是『哪个最好』而是『哪个适合你』。"] },
      { title: "笔者观察", type: "text", text: "选型焦虑的解药是『先做小样』：同一玩法用两个引擎各做一周，手感会告诉你答案。选型帖的正确用法是核对维度清单，不是背结论。参考来源：Uniday Studio。" }
    ] },
    { id: "unity-duo-patch-release", category: "engine", subcategory: "版本动态", title: "Unity 6000.6.3f1 与 LTS 补丁同日上线：两个分支各修各的", summary: "Unity 同日发布 6000.6.3f1 正式版与 6000.3.25f1 LTS 补丁：双分支并行维护的策略再次确认——升级前先看修复清单，别盲目追新。", source: "Unity 官方 Release Notes", date: "2026-10-01", url: "https://unity.com/releases/editor/whats-new/6000.6.3", image: "https://cdn.sanity.io/images/fuvbjjlp/production/e863fe90cd5c7b3fab240e5f3e06f979aa89af1b-1536x864.png", badge: "版本动态", badgeType: "engine", readTime: "4 分钟", hotScore: 74, tags: ["Unity", "补丁", "LTS", "版本管理"], content: [
      { title: "版本要点", type: "list", items: ["6000.6.3f1 与 6000.3.25f1（LTS）同日发布；", "以稳定性修复为主，无破坏性变更；", "LTS 用户可按需跟进，新分支用户建议直接升。"] },
      { title: "笔者观察", type: "text", text: "『同日双发』是 Unity 分支策略成熟的标志：追新的人吃修复，求稳的人吃安心。学生项目我永远建议钉在 LTS 上——除非你需要的那个 bugfix 恰好只在新分支里。参考来源：Unity 官方 Release Notes。" }
    ] },
    { id: "unity-essentials-pathway", category: "tutorials", subcategory: "官方路径", title: "Unity 官方新手路径 Unity Essentials：从零到第一个能跑的项目", summary: "Unity 官方为纯新手设计的免费学习路径：编辑器界 面、核心概念、第一个小项目一气呵成——如果你不知道第一天该点什么，就点这个。", source: "Unity Learn 官方", date: "2026-10-01", url: "https://learn.unity.com/pathway/unity-essentials", image: "", badge: "官方路径", badgeType: "tutorial", readTime: "20 小时课程", hotScore: 76, tags: ["Unity", "官方教程", "零基础", "免费"], content: [
      { title: "路径要点", type: "list", items: ["官方免费，面向完全零基础；", "编辑器、核心概念、第一个项目三段式；", "完成即可获得官方徽章与简历可写的项目。"] },
      { title: "笔者观察", type: "text", text: "国庆七天刚好够走完这条路径的前三分之一——别贪多，把编辑器玩熟比收藏十个教程有用。参考来源：Unity Learn。" }
    ] },
    { id: "gdquest-learn-gdscript", category: "tutorials", subcategory: "交互课程", title: "GDQuest 免费交互式 GDScript 课程：在浏览器里学 Godot 的第一门语言", summary: "GDQuest 推出的免费交互式 GDScript 学习工具：不用装引擎，浏览器里边写边练，把 Godot 的官方语言变成第一门『游戏编程语言』。", source: "GDQuest 官方", date: "2026-10-01", url: "https://gdquest.github.io/learn-gdscript/", image: "", badge: "交互课程", badgeType: "tutorial", readTime: "10 小时课程", hotScore: 78, tags: ["Godot", "GDScript", "免费", "交互学习"], content: [
      { title: "课程要点", type: "list", items: ["浏览器内交互式练习，零安装；", "GDQuest 是 Godot 社区最知名的教学团队；", "完全免费开源，配合官方文档食用。"] },
      { title: "笔者观察", type: "text", text: "『先写代码还是先开引擎』是 Godot 新手最大的坑——这门课的答案是从浏览器开始，把语法焦虑降到零。配合引擎官方文档，一周可入门。参考来源：GDQuest。" }
    ] },
    { id: "mdn-games-zone", category: "tutorials", subcategory: "官方文档", title: "MDN 游戏开发专区：被低估的 Web 游戏官方教科书", summary: "MDN 的 Game development 区是 Web 游戏开发最系统的免费教材：从 Canvas 基础到 2D 游戏完整案例，全部由 Mozilla 官方维护——纯前端做游戏的正规军路线。", source: "MDN Web Docs", date: "2026-10-01", url: "https://developer.mozilla.org/en-US/docs/Games", image: "", badge: "官方文档", badgeType: "tutorial", readTime: "自学", hotScore: 74, tags: ["MDN", "Web游戏", "JavaScript", "免费"], content: [
      { title: "资源要点", type: "list", items: ["2D 游戏（Canvas）与 3D（WebGL/WebGPU）双线；", "官方维护、例子可直接运行；", "配合『2D breakout game』系列实操最佳。"] },
      { title: "笔者观察", type: "text", text: "想做小游戏又怕引擎太重的同学，MDN 这条路线被严重低估：纯浏览器、零安装、学完直接能发网页。它教的不只是 API，是『游戏循环』这个一切游戏的底层心智模型。参考来源：MDN。" }
    ] },
    { id: "phaser-first-game", category: "tutorials", subcategory: "官方教程", title: "Phaser 官方第一课：一个下午做出你的第一个 Web 游戏", summary: "Phaser 官方入门教程『Making your first Phaser 3 game』：收集星星、躲 bomb，十几页把游戏循环、物理、输入全部讲完——Web 小游戏最快的一条上线路径。", source: "Phaser 官方", date: "2026-10-01", url: "https://phaser.io/tutorials/making-your-first-phaser-3-game", image: "", badge: "官方教程", badgeType: "tutorial", readTime: "3 小时", hotScore: 75, tags: ["Phaser", "Web游戏", "JavaScript", "官方教程"], content: [
      { title: "教程要点", type: "list", items: ["官方维护、随版本更新；", "一个完整小游戏贯穿全部核心概念；", "成品可直接部署到网页分享给朋友。"] },
      { title: "笔者观察", type: "text", text: "如果国庆七天你想『做出一个能发给朋友玩的东西』，Phaser 这条官方教程加半天部署是最短路径——比从零学引擎快得多。做完再决定要不要深入引擎。参考来源：Phaser 官网。" }
    ] },
    { id: "nvidia-openshell", category: "opensource", subcategory: "AI 运行时", title: "NVIDIA 开源 OpenShell：给 AI 智能体一个安全的『家』", summary: "NVIDIA 开源 OpenShell（Rust）：面向自主 AI 智能体的安全私有运行时环境，本周登上 GitHub 热榜——大厂开始为『智能体住在哪』这个问题修房子了。", source: "GitHub: NVIDIA/OpenShell", date: "2026-10-01", url: "https://github.com/NVIDIA/OpenShell", image: "https://opengraph.githubassets.com/1/NVIDIA/OpenShell", badge: "AI 运行时", badgeType: "hot", readTime: "4 分钟", hotScore: 82, tags: ["NVIDIA", "开源", "AI Agent", "Rust"], content: [
      { title: "项目看点", type: "list", items: ["Rust 编写的 AI 智能体安全运行时；", "主打私有化与安全隔离；", "本周 GitHub 热榜，今日新增 star 过千。"] },
      { title: "笔者观察", type: "text", text: "当智能体开始替你执行任务，『它能在哪里安全地跑』就成了基础设施问题——NVIDIA 亲自下场说明这个判断已是共识。关注 AI 方向的同学，运行时层是下一个值得押注的岗位带。参考来源：GitHub。" }
    ] },
    { id: "dbx-25mb-database", category: "opensource", subcategory: "开发工具", title: "dbx：25MB 装下 100 种数据库的 Rust 客户端，本周热榜黑马", summary: "开源项目 dbx 本周冲上 GitHub 热榜：仅 25MB 的跨平台数据库客户端，支持 MySQL/PostgreSQL/SQLite/Redis 等 100+ 数据库，内置 AI 助手与 MCP Server——后端工具链的『轻量化』信号。", source: "GitHub: t8y2/dbx", date: "2026-10-01", url: "https://github.com/t8y2/dbx", image: "https://repository-images.githubusercontent.com/1224172037/32bdb2d1-cbb6-4a47-8743-150c311fbb1b", badge: "开发工具", badgeType: "hot", readTime: "4 分钟", hotScore: 78, tags: ["GitHub", "数据库", "Rust", "开源"], content: [
      { title: "项目看点", type: "list", items: ["25MB 支持 100+ 数据库的跨平台客户端；", "内置 AI 助手与 MCP Server；", "本周新增 star 超 1100。"] },
      { title: "笔者观察", type: "text", text: "做游戏服务端的同学迟早要和数据库打交道——这类『一个工具连所有库』的轻量客户端，是搭建私服与后台调试的性价比之选。顺带观察：Rust 正在吃掉桌面工具链。参考来源：GitHub。" }
    ] },
    { id: "pageindex-rag-index", category: "opensource", subcategory: "AI 基建", title: "PageIndex：不要向量库的 RAG 文档索引，本周 +1097 星", summary: "VectifyAI 开源的 PageIndex（Python）本周新增 star 过千：面向『无向量、基于推理』的 RAG 文档索引——用推理代替向量检索，是 RAG 路线上一次有想法的反叛。", source: "GitHub: VectifyAI/PageIndex", date: "2026-10-01", url: "https://github.com/VectifyAI/PageIndex", image: "https://opengraph.githubassets.com/1/VectifyAI/PageIndex", badge: "AI 基建", badgeType: "hot", readTime: "4 分钟", hotScore: 79, tags: ["GitHub", "RAG", "AI", "开源"], content: [
      { title: "项目看点", type: "list", items: ["无向量、基于推理的文档索引方案；", "Python 生态，本周 star +1097；", "对文档结构化知识问答场景友好。"] },
      { title: "笔者观察", type: "text", text: "RAG 领域『向量不是唯一解』的声音越来越多——PageIndex 用文档树结构 + 推理导航走了一条新路。想做 AI 策划工具、知识库的同学可以试试把项目文档喂给它。参考来源：GitHub。" }
    ] },
    { id: "voicestudio-local-tts", category: "opensource", subcategory: "语音 AI", title: "VoiceStudio：完全本地的语音克隆工具，本周 GitHub 增星 3483", summary: "开源项目 VoiceStudio 本周爆发（总 star 5 万+）：完全本地运行，支持语音克隆、配音、转录与 646 种语言——对独立游戏来说，这是一条零成本角色配音的新路。", source: "GitHub: debpalash/VoiceStudio", date: "2026-10-01", url: "https://github.com/debpalash/VoiceStudio", image: "https://repository-images.githubusercontent.com/1206390571/fd6851a0-4e36-4541-a76c-2ad84935d0bc", badge: "语音 AI", badgeType: "hot", readTime: "4 分钟", hotScore: 83, tags: ["GitHub", "语音AI", "配音", "开源"], content: [
      { title: "项目看点", type: "list", items: ["完全本地运行，无需联网与 API 费用；", "语音克隆、设计、配音、转录一条龙；", "支持 646 种语言，本周 star +3483。"] },
      { title: "笔者观察", type: "text", text: "独立游戏的配音成本一直是『有声音』和『没声音』的分界线——本地 TTS/克隆工具把这条线抹掉了。用 AI 配音 NPC 临时语音、再用真人录制关键剧情，是独立团队的现实混合方案。参考来源：GitHub。" }
    ] },
    { id: "moneyprinter-turbo", category: "opensource", subcategory: "内容工具", title: "MoneyPrinterTurbo：一键 AI 生成短视频，自媒体方向的开源弹药库", summary: "开源项目 MoneyPrinterTurbo（总 star 12.7 万+）：输入主题即可用 AI 大模型自动生成高清短视频——对走自媒体方向的游戏学生，这是一个值得研究的工作流样本。", source: "GitHub: Harry0703/MoneyPrinterTurbo", date: "2026-10-01", url: "https://github.com/Harry0703/MoneyPrinterTurbo", image: "https://opengraph.githubassets.com/1/Harry0703/MoneyPrinterTurbo", badge: "内容工具", badgeType: "hot", readTime: "4 分钟", hotScore: 77, tags: ["GitHub", "短视频", "AI工作流", "开源"], content: [
      { title: "项目看点", type: "list", items: ["主题/关键词 → 自动生成高清短视频；", "文案、素材、字幕、配音全流程自动化；", "总 star 12.7 万，长期霸榜。"] },
      { title: "笔者观察", type: "text", text: "把它当『自动印钱机』你会失望，把它当『工作流教学样本』你会赚到：它是研究『AI 内容管线怎么搭』的完整开源实现。拆它的管线比用它更有价值。参考来源：GitHub。" }
    ] },
    { id: "gemini4-posttraining", category: "ai", subcategory: "大模型", title: "Gemini 4 进入后训练阶段：谷歌跳过 3.5，直压年底前发布", summary: "Google DeepMind 新掌门 Koray Kavukcuoglu 确认：Gemini 4 已进入后训练早期阶段，目标『远早于年底』发布——谷歌实际跳过了原计划的 3.5 Pro，把资源全部押向 4。", source: "财联社 / The Information", date: "2026-09-24", url: "https://www.cls.cn/detail/2491924", image: "", badge: "大模型", badgeType: "ai", readTime: "5 分钟", hotScore: 88, tags: ["Google", "Gemini 4", "大模型", "AI竞争"], content: [
      { title: "动态要点", type: "list", items: ["Gemini 4 正式进入后训练早期阶段；", "谷歌跳过原计划的 Gemini 3.5 Pro；", "目标『远早于 2026 年底』发布，先发后迭代。"] },
      { title: "笔者观察", type: "text", text: "『跳过 3.5』是个危险又迷人的决策：砍掉中间版本意味着把迭代风险一次性押到大版本上。对开发者，真正该关注的是它的多模态与 Agent 能力会不会原生进引擎工具链——那才是影响游戏开发方式的部分。参考来源：财联社援引 The Information。" }
    ] },
    { id: "openrig-multiagent", category: "ai", subcategory: "智能体", title: "OpenRig：把 Claude Code 和 Codex 拧成一股绳的多智能体框架", summary: "开源项目 OpenRig 登上 GitHub 热榜：将 Claude Code 与 Codex 作为统一系统协同运行的多智能体框架——两大编码智能体不再二选一，而是组队打工。", source: "GitHub: mvschwarz/OpenRig", date: "2026-10-01", url: "https://github.com/mvschwarz/OpenRig", image: "https://repository-images.githubusercontent.com/1198124295/1af4015a-ccfc-48e2-9d75-81ff3f15e3a1", badge: "智能体", badgeType: "ai", readTime: "4 分钟", hotScore: 80, tags: ["GitHub", "AI Agent", "Claude Code", "Codex"], content: [
      { title: "项目看点", type: "list", items: ["统一调度 Claude Code 与 Codex 两家智能体；", "多智能体协作框架，今日热榜 +624 星；", "TypeScript 实现，面向个人开发者。"] },
      { title: "笔者观察", type: "text", text: "『让两家 AI 互相 review』是很多开发者在手动干的事——OpenRig 把它产品化了。游戏团队可以试的玩法：让 A 写功能、B 做代码审查，冲突点往往就是真正的风险点。参考来源：GitHub。" }
    ] },
    { id: "codegraph-knowledge-map", category: "ai", subcategory: "智能体", title: "CodeGraph：给 AI 一张预索引的代码知识图谱，省 token 又省工具调用", summary: "开源项目 CodeGraph（C，总 star 7.2 万+）：预索引的代码知识图谱，代码变更自动同步，支持 Claude Code、Codex、Gemini、Cursor 等多家智能体，100% 本地运行。", source: "GitHub: colbymchenry/CodeGraph", date: "2026-10-01", url: "https://github.com/colbymchenry/CodeGraph", image: "https://opengraph.githubassets.com/1/colbymchenry/CodeGraph", badge: "智能体", badgeType: "ai", readTime: "4 分钟", hotScore: 79, tags: ["GitHub", "AI Agent", "代码索引", "本地运行"], content: [
      { title: "项目看点", type: "list", items: ["预索引代码知识图谱，变更自动同步；", "支持 Claude Code、Codex、Gemini、Cursor；", "100% 本地运行，更少 token 与工具调用。"] },
      { title: "笔者观察", type: "text", text: "AI 编码的质量瓶颈正在从『模型』转向『上下文』——CodeGraph 这类本地知识图谱让 AI 不再靠 grep 猜代码结构。大型 Unity 项目接一套，AI 改错的概率会肉眼可见地下降。参考来源：GitHub。" }
    ] },
    { id: "context-mode-agent", category: "ai", subcategory: "智能体", title: "context-mode：给 AI 编程智能体『省着点用脑子』的上下文优化器", summary: "开源项目 context-mode（总 star 2.4 万+）：沙箱化工具输出（减少 98% token）、持久化会话记忆，并通过 MCP + hooks 在 17 个平台间强制路由——AI 编程的『内存管理』赛道开始内卷。", source: "GitHub: mksglu/context-mode", date: "2026-10-01", url: "https://github.com/mksglu/context-mode", image: "https://opengraph.githubassets.com/1/mksglu/context-mode", badge: "智能体", badgeType: "ai", readTime: "4 分钟", hotScore: 77, tags: ["GitHub", "MCP", "上下文优化", "AI Agent"], content: [
      { title: "项目看点", type: "list", items: ["沙箱化工具输出，token 减少 98%；", "持久化会话记忆 + MCP/hooks 多平台路由；", "总 star 2.4 万，支持 17 个平台。"] },
      { title: "笔者观察", type: "text", text: "AI 编程的下一个战场是上下文经济学：同样的模型，会管理上下文的人产出高一截。游戏项目里最该优化的就是构建日志与资源列表这类『上下文黑洞』。参考来源：GitHub。" }
    ] },
    { id: "openclaw-391k", category: "ai", subcategory: "智能体", title: "OpenClaw：39 万 star 的『真正能干活的 AI』，开源智能体的顶流", summary: "开源项目 OpenClaw 总 star 已达 39.1 万：定位『真正能干活的 AI，任何操作系统任何平台』——它已经不只是工具，而是开源 AI 智能体生态的门面。", source: "GitHub: OpenClaw/OpenClaw", date: "2026-10-01", url: "https://github.com/OpenClaw/OpenClaw", image: "https://opengraph.githubassets.com/1/OpenClaw/OpenClaw", badge: "智能体", badgeType: "ai", readTime: "4 分钟", hotScore: 84, tags: ["GitHub", "AI Agent", "开源", "跨平台"], content: [
      { title: "项目看点", type: "list", items: ["总 star 39.1 万，开源智能体顶流；", "跨操作系统、跨平台运行；", "『龙虾之道 🦞』——社区文化浓厚。"] },
      { title: "笔者观察", type: "text", text: "39 万 star 意味着什么？它已经是『AI 智能体』这个类目的事实入门入口。游戏开发者的正确打开方式：把它当跨平台自动化底座试一试，感受一下『AI 替你操作电脑』的边界在哪。参考来源：GitHub。" }
    ] },
    { id: "ludum-dare-60-oct16", category: "contest", subcategory: "国际Jam", title: "Ludum Dare 60 定档 10 月 16 日：世界上最老牌的 48 小时极限开发又要开闸了", summary: "Ludum Dare 官网赛程确认：第 60 届 Ludum Dare 于 2026 年 10 月 16 日开赛，Compo 48 小时与 Jam 72 小时双模式照旧，2027 年 4 月的 LD 61 还将是 25 周年场。对国内学生来说，这是每年两次、门槛最低的国际级练兵场。", source: "Ludum Dare 官网", date: "2026-10-01", url: "https://ldjam.com/", image: "", badge: "报名窗口", badgeType: "event", readTime: "4 分钟", hotScore: 88, tags: ["Ludum Dare", "GameJam", "极限开发", "国际赛事"], content: [
      { title: "赛程要点", type: "list", items: ["LD 60：2026 年 10 月 16 日开赛；", "Compo 组 48 小时（素材全需现场创作）、Jam 组 72 小时（可组队、可用外部素材）；", "后续排期：LD 61 为 2027 年 4 月（25 周年），LD 62 为 2027 年 10 月；", "主题由社区投票决出，开赛那一刻才揭晓。"] },
      { title: "笔者观察", type: "text", text: "对在校学生，Ludum Dare 的价值不在名次，而在『完整交付』：从主题公布到上传成品，48 小时里你会被迫走完玩法原型→素材→打磨→上传的全流程，这正是课程作业永远练不到的部分。建议现在就组好队、装好引擎模板，把 10 月 16 日写进日历；哪怕做出来是个烂 demo，投稿页上的评论区反馈也比任何教程都有营养。参考来源：Ludum Dare 官网。" }
    ] },
    { id: "ciga-gamejam-portal", category: "contest", subcategory: "国内Jam", title: "CiGA Game Jam：中国最大规模的 48 小时 Game Jam，官网常年开放赛程入口", summary: "CiGA（中国独立游戏联盟）的 GameJams 官方页是了解国内 Game Jam 生态的第一入口：主理中国最大的 48 小时极限开发活动 CiGA Game Jam，主场比赛配合各地城市站同步举行，历届主题与参赛作品均可回看。", source: "CiGA 中国独立游戏联盟", date: "2026-10-01", url: "https://www.ciga.me/gamejams", image: "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/1489174/293", badge: "国内赛事", badgeType: "event", readTime: "4 分钟", hotScore: 84, tags: ["CiGA", "GameJam", "极限开发", "高校组队"], content: [
      { title: "赛事要点", type: "list", items: ["CiGA Game Jam 是国内规模最大的 48 小时 Game Jam 品牌；", "主场比赛 + 各城市站点同步，学生可就近参加或线上参赛；", "官网 GameJams 页常年维护历届主题、日程与作品入口。"] },
      { title: "笔者观察", type: "text", text: "国内学生参加 Jam，CiGA 系是最现实的选择：不用翻墙、有中文社区、城市站就在广州周边。更实际的用法是把它的历届主题页当『出题库』——平时拿历届主题给自己出 48 小时模拟赛，比漫无目的地练引擎有效得多。今年赶不上主场的，先关注它的赛程页，明年开报名时第一时间占座。参考来源：CiGA 官网。" }
    ] },
    { id: "indieplay-award-entry", category: "contest", subcategory: "独立游戏大赛", title: "indiePlay 中国独立游戏大赛：国产独立游戏的年度检阅场，官网入口常开", summary: "由 CiGA 主办的 indiePlay 中国独立游戏大赛是国内独立游戏最高规格的年度评选，设最佳独立游戏、最佳设计、最佳美术等奖项，入围名单每年秋季集中公布——官网常年开放历届获奖作品与征集动态查询。", source: "CiGA 中国独立游戏联盟", date: "2026-10-01", url: "https://www.ciga.me/", image: "https://user-images.strikinglycdn.com/res/hrscywv4p/image/upload/c_limit,fl_lossy,h_630,w_1200,f_auto,q_auto/1489174/293", badge: "年度大赛", badgeType: "event", readTime: "5 分钟", hotScore: 82, tags: ["indiePlay", "独立游戏", "大赛", "CiGA"], content: [
      { title: "赛事要点", type: "list", items: ["indiePlay 是 CiGA 主办的年度中国独立游戏大赛；", "奖项覆盖最佳独立游戏、最佳设计、最佳美术等维度；", "每年秋季为入围与颁奖窗口期，官网常年可查历届名单。"] },
      { title: "笔者观察", type: "text", text: "indiePlay 的历届获奖名单本身就是一份『国产独立游戏必玩清单 + 就业风向标』：拿过奖的团队基本都还在赛道上，而且常年招人。给你的建议是把官网的历届页面当月更读物——看入围作品在玩法和美术上做了什么取舍，比看十篇行业分析都直观。有毕设或 Prototype 的同学，记下征集窗口，明年把作品投出去试试水温。参考来源：CiGA 官网。" }
    ] },
    { id: "tencent-campus-game-contest", category: "contest", subcategory: "高校赛事", title: "腾讯高校游戏创意制作大赛：面向全国高校的年度官方赛事，官方页常年可查历届与动态", summary: "腾讯游戏学堂主办的高校游戏创意制作大赛是每年面向全国高校学生的官方赛事，提供策划、程序、美术组队的完整比赛链路，官网集合页常年可查历届赛题、获奖作品与新一年报名动态。", source: "腾讯游戏学堂", date: "2026-10-01", url: "https://gameinstitute.qq.com/yxds/collection", image: "", badge: "高校赛事", badgeType: "event", readTime: "4 分钟", hotScore: 80, tags: ["腾讯", "高校大赛", "组队", "官方赛事"], content: [
      { title: "赛事要点", type: "list", items: ["主办为腾讯游戏学堂，面向全国高校学生；", "以团队形式参赛，覆盖策划 / 程序 / 美术全岗位；", "官方集合页常年可查历届赛题、获奖作品与报名窗口。"] },
      { title: "笔者观察", type: "text", text: "这类大厂高校赛的隐藏价值是『评审即面试』：初赛作品会被腾讯系制作人直接翻牌子，历届获奖者里进大厂的比例不低。给你的操作建议：现在去集合页把近三年的获奖作品和赛题全部过一遍，摸清评委口味（完成度 > 创意堆砌）；明年开赛通道开启时，你有现成的赛题感和一支磨合过的队。参考来源：腾讯游戏学堂。" }
    ] },
    { id: "jsjds-digital-media-game-track", category: "contest", subcategory: "高校赛事", title: "中国大学生计算机设计大赛：数媒动漫与游戏类赛道，从校赛一路打到国赛的官方通道", summary: "中国大学生计算机设计大赛（4A 类学科竞赛）设有数媒动漫与游戏类赛道，赛制为校级初赛→省级复赛→国家级决赛，官网（北航承办）常年公布历年赛题、获奖名单与新一届通知，是保研综测认可度最高的大学生赛事之一。", source: "中国大学生计算机设计大赛组委会", date: "2026-10-01", url: "http://jsjds.blcu.edu.cn/", image: "", badge: "学科竞赛", badgeType: "event", readTime: "5 分钟", hotScore: 78, tags: ["计算机设计大赛", "4A赛事", "保研", "学科竞赛"], content: [
      { title: "赛事要点", type: "list", items: ["4A 类全国性学科竞赛，综测 / 保研普遍认可；", "数媒动漫与游戏类赛道支持游戏作品参赛；", "赛制：校级初赛 → 省级复赛 → 国家级决赛，每年春季为主战场；", "官网常设历年赛题与获奖名单归档。"] },
      { title: "笔者观察", type: "text", text: "对需要综测加分和保研材料的同学，这是游戏方向最『硬通货』的赛事——它的问题只是周期长：校赛在春季，国赛在夏天，作品要提前半年打磨。国庆假期正是启动点：现在开做一份能打 4A 赛的游戏作品，明年春天校赛、夏天省赛、暑假国赛，时间刚好。去官网把去年的数媒类赛题拉出来，选题尽量贴题。参考来源：大赛官网。" }
    ] }
  ]
}
