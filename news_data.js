window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-23",
    "weekday": "星期一",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-23 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：阿里 Qwen4-Max 原生视觉 + 百万上下文，能读图驱动 Blender 建 3D 场景（hero）",
      "引擎精读：UE6 首发弃用蓝图转 Verse+AI、Unity CLI 1.0/6000.6.10f1、Defold 1.14.1、Godot 版本支持表",
      "开源宝库：Horizon/Rust ECS、godot-mcp、awesome-ai-game-dev-tools、claude-animation-skills、PlayGen2",
      "AI 前沿：米哈游 Gamer 通用 VLA(65ms)、Claude Fable 5.2 一句话做游戏、大模型 3D 能力集体越界",
      "游戏动态：《深渊航线》《Grand Theft Timeline》《诡视低语》《点点岛》、Phonopolis 夺 DevGAMM 大奖",
      "竞赛招聘：TapTap Game Jam、Game Off 2026，库洛/莉莉丝/鹰角 27 届校招"
    ],
    "engineStatus": [
      {
        "name": "Unreal 6",
        "type": "unreal",
        "status": "弃蓝图转Verse+AI",
        "badge": "UE",
        "color": "violet"
      },
      {
        "name": "Unity CLI 1.0",
        "type": "unity",
        "status": "智能体可编排",
        "badge": "UNITY",
        "color": "blue"
      },
      {
        "name": "Godot 4.8",
        "type": "godot",
        "status": "beta4 收尾",
        "badge": "OSS",
        "color": "green"
      },
      {
        "name": "Defold 1.14",
        "type": "native",
        "status": "矢量字体",
        "badge": "OSS",
        "color": "teal"
      },
      {
        "name": "Castle Engine",
        "type": "native",
        "status": "Pascal 跨平台",
        "badge": "OSS",
        "color": "cyan"
      },
      {
        "name": "Qwen4-Max",
        "type": "ai",
        "status": "原生视觉+3D",
        "badge": "AI",
        "color": "orange"
      }
    ]
  },
  "hero": {
    "id": "hero-qwen4max-3d",
    "category": "ai",
    "categoryName": "AI前沿",
    "tag": "阿里·基座模型",
    "subcategory": "AI·3D生成",
    "title": "阿里 Qwen4-Max 发布：原生视觉 + 百万上下文，读一张图就能驱动 Blender 搭 3D 场景",
    "summary": "11 月 16 日阿里发布新一代基座模型 Qwen4-Max，主打原生视觉能力与百万 token 上下文。官方演示中它能熟练调用 Blender，把几何建模、场景搭建、材质配置到灯光渲染串成一条链，把一句创意逐步做成风格化 3D 作品；同一时期 Claude Fable 5.2、GPT-6.2 Astra 也都在强化 3D 空间理解。头部模型把 3D 生成从演示工具推向可编排的生产环节，值得做内容管线的团队实测其稳定性与导出格式，而不是只看演示视频。",
    "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-23-hero-qwen4max.jpg",
    "source": "网易科技（每日经济新闻转载）",
    "date": "2026-11-16",
    "url": "https://www.163.com/dy/article/LC1DNIFN0512B07B.html",
    "readTime": "8 分钟",
    "hotScore": 97,
    "tags": [
      "Qwen4-Max",
      "阿里",
      "原生视觉",
      "3D生成",
      "Blender"
    ],
    "content": [
      {
        "title": "已披露要点",
        "type": "list",
        "items": [
          "Qwen4-Max 于 11 月 16 日发布，主打原生视觉能力与百万 token 上下文",
          "官方演示中模型可熟练使用 Blender，串联几何建模、场景搭建、材质配置与灯光渲染",
          "同期 Claude Fable 5.2、GPT-6.2 Astra 均强化 3D 空间理解与交互式场景构建",
          "业内分歧集中在是否把语言模型与物理/世界模型统一到同一技术体系"
        ]
      },
      {
        "title": "观察",
        "type": "text",
        "text": [
          "3D 生成正从「能出一张图」迈向「能进引擎」。真正衡量价值的不是演示视频里的惊艳程度，而是模型输出能不能稳定导出为网格、贴图与材质参数，接进现有 Blender/Unity/UE 管线。对团队而言，现在值得投入的是把提示词模板、资产校验和人工复核流程先搭起来，等模型能力继续上量时直接复用。"
        ]
      }
    ]
  },
  "items": [
    {
      "id": "en-ue6-noblueprint",
      "category": "engine",
      "subcategory": "引擎·Unreal",
      "title": "Unreal Engine 6 首发移除蓝图：玩法改用 Verse + Scene Graph，押注 AI 迁移",
      "summary": "11 月 19 日 Epic 开发执行副总裁 Marcus Wassmer 撰文确认，UE6（含早期体验版）不再包含蓝图与 Actor Gameplay Framework，玩法将基于 Verse 语言与新的 Scene Graph 框架。Epic 称已用 AI 把《堡垒之夜》两万多个蓝图转成约 300 万行 Verse，据此判断 UE5→UE6 迁移可靠 AI 大幅自动化，从而按时甚至提前交付。蓝图在 UE5 仍保留，但中间层工具的缺失已引发设计师群体担忧。",
      "source": "PC Gamer",
      "date": "2026-11-19",
      "url": "https://pcgamer.com/gaming-industry/unreal-engine-6-to-jettison-key-scripting-feature-earlier-than-planned-in-favor-of-ai-coding",
      "image": "https://cdn.mos.cms.futurecdn.net/ZoNnbwEE9xr6vSMNfPbQVN-1920-80.jpg",
      "badge": "UE6",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 94,
      "tags": [
        "Unreal 6",
        "Verse",
        "蓝图",
        "AI迁移",
        "Scene Graph"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "UE6 及早期体验版不含蓝图与 Actor 框架，玩法基于 Verse + Scene Graph",
            "Epic 称用 AI 把堡垒之夜两万多个蓝图转成约 300 万行 Verse",
            "官方理由是 AI 让 UE5→UE6 迁移可近乎自动化，从而按时交付",
            "蓝图在 UE5 仍保留，UE6 完整功能与迁移政策待后续文档确认"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "移除蓝图是一次技术路线押注：Epic 赌的是 AI 迁移工具成熟到能让美术与设计师平滑过渡到代码优先。对中小团队，这不是要不要用 AI 的问题，而是要提前评估现有蓝图资产在 UE6 的迁移成本，并把 Verse 纳入技术储备——工具层的确定性一旦消失，提前布局的人会占先手。"
          ]
        }
      ]
    },
    {
      "id": "en-unity-cli10",
      "category": "engine",
      "subcategory": "引擎·Unity",
      "title": "Unity CLI 1.0 转正 + 6000.6.10f1：智能体可直接建场景、编译并试玩",
      "summary": "截至 11 月 22 日，Unity Pipeline 1.0.0 与 CLI 1.0.1 进入稳定，开发者可通过命令创建场景与资产、跑测试构建、检查运行中的游戏；官方插件让 Claude Code、Codex 等智能体搭关卡、写代码、触发编译、修错误并试玩场景。编辑器侧 6000.6.10f1 于 11 月 19 日发布，修正 Forward+/Deferred+ 在远景与近裁剪面的光照处理。",
      "source": "Unity Releases",
      "date": "2026-11-22",
      "url": "https://unityreleases.com/",
      "image": "https://unityreleases.com/brand/social-preview-gearbox.png",
      "badge": "Unity CLI",
      "badgeType": "engine",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Unity",
        "CLI",
        "Pipeline",
        "AI智能体",
        "6000.6"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "Pipeline 1.0.0 稳定：命令式建场景/资产、跑测试与构建、检查运行中游戏",
            "CLI 1.0.1 稳定：无需 Hub 即可装编辑器、管项目、自动化构建与测试",
            "官方插件支持 Claude Code/Codex 等智能体搭关卡、编译、修错、试玩",
            "6000.6.10f1（11/19）修正 Forward+/Deferred+ 光照边界处理"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把编辑器能力做成可被脚本和智能体调用的 CLI，是引擎工具链这两年少有的「基础设施级」变化。它的价值不在某条命令，而在于让构建、验证、修错形成闭环——这正是 AI 辅助开发真正能落地的地方。建议先在分支项目里试，把结构化输出接进自己的 CI，别急着动生产工程。"
          ]
        }
      ]
    },
    {
      "id": "en-defold1141",
      "category": "engine",
      "subcategory": "引擎·Defold",
      "title": "Defold 1.14.1 加入矢量字体：一套面向多端的轻量 2D/3D 引擎再补关键拼图",
      "summary": "Indie Tooling 报道 Defold 1.14.1 引入矢量字体支持，让这套开源引擎在 UI 与文本渲染上补齐一块常用能力。Defold 以轻量、脚本驱动（Lua）、一键导出多平台见长，适合体量受限的 2D 与轻量 3D 项目。",
      "source": "Indie Tooling",
      "date": "2026-11-15",
      "url": "https://indietooling.com/posts/defold-1-14-1-vector-fonts",
      "image": "https://indietooling.com/_astro/defold-1-14-1-vector-fonts.Z0RJhLic_1Hxa0D.jpg",
      "badge": "Defold 1.14",
      "badgeType": "engine",
      "readTime": "4 分钟",
      "hotScore": 76,
      "tags": [
        "Defold",
        "矢量字体",
        "Lua",
        "轻量引擎"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "Defold 1.14.1 增加矢量字体支持",
            "引擎以 Lua 脚本驱动、包体小、导出平台多为特点",
            "定位偏向 2D 与轻量 3D 的快速开发与多端发布"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "在动辄数百 MB 的现代引擎之外，Defold 这类轻量选项对广告小游戏、教育内容和低端设备仍有独特价值。矢量字体的补齐说明它在认真解决 UI 细节——选型时别只看 3A 渲染能力，包体与启动速度往往更影响留存。"
          ]
        }
      ]
    },
    {
      "id": "en-godot-versions",
      "category": "engine",
      "subcategory": "引擎·Godot",
      "title": "Godot 版本支持状态表更新：4.7.2 为最新稳定版，4.8 beta 4 或为最后测试版",
      "summary": "GodotAwesome 维护的版本支持表（11 月 19 日核对）显示，最新稳定版为 4.7.2（8 月 18 日发布），4.8 处于 beta 4（11 月 18 日，123 项修复），可能是稳定版前最后一个测试版。表格同时标注各分支支持状态：4.6 全支持、4.5 仅安全维护、4.4 及更早停止支持，帮助团队判断该升到哪个分支。",
      "source": "GodotAwesome",
      "date": "2026-11-19",
      "url": "https://godotawesome.com/godot-versions",
      "image": "",
      "badge": "Godot 4.8",
      "badgeType": "engine",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Godot",
        "版本支持",
        "4.7.2",
        "4.8 beta",
        ".NET 10"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "最新稳定版 4.7.2（8/18），最新稳定分支建议新项目采用",
            "4.8 beta 4（11/18，123 项修复）或为最后测试版，.NET 构建要求升到 .NET 10",
            "4.6 全支持、4.5 仅安全与平台修复、4.4 及更早 EOL",
            "Godot 3 的 3.6.x 作为长期分支继续维护"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把版本支持状态做成一张表，省去翻发布说明的时间。真正要紧的是那条 .NET 8→10 的门槛：C# 团队升级 4.8 前先把工具链对齐，否则会在构建环节卡住。生产项目继续留在稳定分支，测试版只在副本里试。"
          ]
        }
      ]
    },
    {
      "id": "en-castle-engine",
      "category": "engine",
      "subcategory": "引擎·开源",
      "title": "Castle Game Engine：用 Pascal 写的跨平台 3D 引擎持续迭代",
      "summary": "Castle Engine 是一套以 Object Pascal 编写的开源 3D 游戏引擎，支持桌面、移动端与 Web 多平台导出，附带场景编辑器与 VR 支持。作为 Non-Unity/UE 生态的老牌选项，它在 Pascal 开发者与教育场景里仍有稳定用户群。",
      "source": "Castle Engine",
      "date": "2026-11-20",
      "url": "https://castle-engine.io/",
      "image": "https://castle-engine.io/images/combined_cge_logo_game.png",
      "badge": "Castle",
      "badgeType": "engine",
      "readTime": "4 分钟",
      "hotScore": 70,
      "tags": [
        "Castle Engine",
        "Pascal",
        "开源引擎",
        "跨平台"
      ],
      "content": [
        {
          "title": "引擎要点",
          "type": "list",
          "items": [
            "以 Object Pascal 编写的开源 3D 引擎",
            "支持桌面、移动端与 Web 多平台导出",
            "自带场景编辑器，并提供 VR 相关支持"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "引擎生态不只有 Unity 和 UE。对 Pascal 背景的团队或教学场景，Castle 这类项目提供了低门槛的 3D 入口。选型时把语言栈与社区活跃度一起算进去，往往比单纯比渲染特性更实用。"
          ]
        }
      ]
    },
    {
      "id": "en-ue59-preview2-web",
      "category": "engine",
      "subcategory": "引擎·Unreal",
      "title": "UE 5.9 Preview 2：纯蓝图项目也能导出网页，AI 工具默认开启",
      "summary": "Cyberoly 报道 Unreal Engine 5.9 Preview 2 放开网页导出限制——此前打包 Web 至少要含一个 C++ 类，现在纯蓝图项目即可直接面向浏览器。配套的贴图流送、更高效的着色器下载、移动端用 TAA 替代 FXAA 等改进同步到位；AI 辅助工具默认集成进编辑器，代理可直接参与蓝图编辑、资产管理、调试与性能分析。官方强调网页部署仍属实验特性。",
      "source": "Cyberoly",
      "date": "2026-11-20",
      "url": "https://cyberoly.com/post/epic-games-releases-unreal-engine-59-preview-2-with-browser-based-blueprint",
      "image": "",
      "badge": "UE 5.9",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Unreal 5.9",
        "网页导出",
        "蓝图",
        "AI工具",
        "TAA"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "纯蓝图项目可直接导出 Web，不再强制包含 C++ 类",
            "贴图流送、着色器下载优化，移动端渲染用 TAA 替代 FXAA",
            "AI 辅助工具默认集成，代理可参与蓝图编辑、资产管理、调试与性能分析",
            "网页部署仍标记为实验特性，建议用项目副本测试"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把 Web 目标从「要写 C++」降到「纯蓝图可用」，对展示型项目和轻量玩法是实质利好。但实验特性意味着兼容性坑还在，先用副本跑通构建再决定是否纳入发行渠道。"
          ]
        }
      ]
    },
    {
      "id": "in-gta6-day1",
      "category": "industry",
      "subcategory": "行业·财报",
      "title": "GTA 6 首日销售额 37.9 亿美元，刷新全球娱乐产品首发纪录",
      "summary": "11 月 21 日 Take-Two 公布，《GTA 6》首发日零售销售额达 37.9 亿美元（约 253.6 亿元人民币），刷新全球娱乐产品首发纪录。第三方机构 Sensor Tower 估算其预购与首日销售合计约 23.6 亿美元，不同口径差异较大；Ampere Analysis 称有超 200 万英美 Xbox 用户通过改区到新西兰提前玩到游戏。",
      "source": "GamesIndustry.biz",
      "date": "2026-11-21",
      "url": "https://www.gamesindustry.biz/gta-6-hits-379-billion-in-its-first-day-on-sale-becoming-the-biggest-entertainment-launch-in-history",
      "image": "https://assetsio.gnwcdn.com/Raul_Bautista_02_RUnoiiq.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "badge": "GTA 6",
      "badgeType": "industry",
      "readTime": "6 分钟",
      "hotScore": 96,
      "tags": [
        "GTA 6",
        "Take-Two",
        "首发纪录",
        "Sensor Tower"
      ],
      "content": [
        {
          "title": "核心数字",
          "type": "list",
          "items": [
            "Take-Two：首日零售额 37.9 亿美元，约 253.6 亿元人民币",
            "Sensor Tower：预购与首日销售合计估算约 23.6 亿美元",
            "Ampere：超 200 万英美 Xbox 用户改区新西兰提前游玩",
            "刷新全球娱乐产品首发纪录"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "同一场首发，官方、第三方估算与渠道口径差出十亿美元级别，读数字前先看清统计范围——是零售额、预购还是渠道分成。对从业者更有价值的是它抬高了 3A 首发的天花板，也把「超长线运营」的预期进一步拉满。"
          ]
        }
      ]
    },
    {
      "id": "in-market-cap",
      "category": "industry",
      "subcategory": "行业·财报",
      "title": "腾讯网易市值单日合计蒸发超 3000 亿港元，Q3 财报季市场情绪转冷",
      "summary": "竞核统计，11 月 14 日至 20 日，腾讯控股市值蒸发约 3850 亿港元、网易约 1200 亿港元。腾讯 Q3 网络游戏收入 665 亿元、同比增 5%（本土 +11%、国际 -9%），财报次日收跌 6.55%；网易 Q3 净收入 279 亿元、同比减 1.8%，游戏及相关收入 229 亿元、同比减 1.7%，次日港股收跌 17.6%、美股跌 11.4%。",
      "source": "竞核（网易订阅转载）",
      "date": "2026-11-22",
      "url": "https://www.163.com/dy/article/LCBFRJQH0511CVBI.html",
      "image": "",
      "badge": "财报季",
      "badgeType": "industry",
      "readTime": "7 分钟",
      "hotScore": 92,
      "tags": [
        "腾讯",
        "网易",
        "Q3财报",
        "市值",
        "存量竞争"
      ],
      "content": [
        {
          "title": "核心数字",
          "type": "list",
          "items": [
            "腾讯 Q3 游戏收入 665 亿元（本土 +11%、国际 -9%），次日收跌 6.55%",
            "网易 Q3 净收入 279 亿元、游戏及相关 229 亿元，均同比下滑",
            "一周内腾讯市值蒸发约 3850 亿港元、网易约 1200 亿港元",
            "世纪华通 Q3 后市值较 2025 年底缩水近 440 亿元"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "盈利依旧可观，股价却集体承压，说明市场在给「增长叙事」重新定价，而不是否定当前利润。国内游戏进入存量竞争、短剧等新娱乐分流注意力，是这轮估值的真实背景——接下来能不能扭转情绪，要看新游爆款而非降本。"
          ]
        }
      ]
    },
    {
      "id": "in-korea-fta",
      "category": "industry",
      "subcategory": "行业·政策",
      "title": "中韩 FTA 后续谈判突破：韩国游戏获最惠国待遇，大批韩游排队入华",
      "summary": "据韩国产业通商资源部 11 月 18 日披露，在中韩自贸协定服务与投资后续谈判中，中方承诺在电影、游戏等领域给予韩方不低于第三国待遇，并对网游等事前审查适用非歧视原则。GameLook 梳理称，NCSoft、Nexon、Netmarble、Kakao 等厂商的多款 MMO 与二次元新作已拿版号或正筹备入华。",
      "source": "GameLook",
      "date": "2026-11-20",
      "url": "http://www.gamelook.com.cn/2026/11/606824",
      "image": "",
      "badge": "政策",
      "badgeType": "industry",
      "readTime": "7 分钟",
      "hotScore": 89,
      "tags": [
        "中韩FTA",
        "最惠国待遇",
        "版号",
        "韩游入华"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "中方承诺在电影、游戏等领域给予韩国不低于第三国待遇",
            "网游等内容的事前审查适用非歧视原则",
            "NCSoft《天堂M》《永恒之塔手游》等已获版号，多家中韩厂商在筹备发行",
            "这是中方首次在贸易协定中纳入此类条款"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "政策闸门放开，韩游入华或进入宽松期。但十年前的手游崛起逻辑已变：在二次元、竞技等国内厂商的优势赛道，情怀 IP 未必还能撑起长线运营。对国内团队，这既是竞争压力，也是合作与代理窗口。"
          ]
        }
      ]
    },
    {
      "id": "in-license-1766",
      "category": "industry",
      "subcategory": "行业·政策",
      "title": "2026 年已下发游戏版号 1766 个，出海升级为国产厂商核心战略",
      "summary": "据竞核不完全统计，截至 2026 年 10 月全年共下发游戏版号 1766 个（国产 1708、进口 58）。稳定的按月放量为厂商做长线研发提供确定性，但国内手游用户池见顶、买量成本高企，三七互娱、腾讯、米哈游、莉莉丝、点点互动等已把出海从增收补充升级为核心战略。",
      "source": "NBE 攻略网",
      "date": "2026-11-21",
      "url": "https://www.nbegame.com/post/16177.html",
      "image": "",
      "badge": "版号",
      "badgeType": "industry",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "游戏版号",
        "出海",
        "国产手游",
        "存量竞争"
      ],
      "content": [
        {
          "title": "核心数字",
          "type": "list",
          "items": [
            "截至 10 月全年下发版号 1766 个：国产 1708、进口 58",
            "移动游戏长期占比八成以上，双端互通产品增多",
            "美日韩为核心市场，欧洲、东南亚、拉美、中东持续释放增量"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "版号稳定供给把行业竞争从「能不能上线」转向「 product 好不好玩」。当国内进入存量博弈，出海不再是选择题而是必答题——但真正的壁垒是立项即全球化，而非上架后翻译一遍。"
          ]
        }
      ]
    },
    {
      "id": "in-layoffs-2026",
      "category": "industry",
      "subcategory": "行业·就业",
      "title": "研究机构：2026 年游戏业已裁撤约 7773 人，Epic 与育碧受冲击最大",
      "summary": "11 月 22 日发布的一项 TradingPlatforms 研究显示，截至 11 月，98 家被记录的公司共裁撤 7773 名游戏从业者，Epic Games 与育碧受影响最大。研究把销售下滑、竞争加剧、3A 开发成本上升列为主因，并指出小型工作室与独立开发者受影响相对较小。另有行业追踪机构给出的口径更高，称 2026 全年裁员或超 1.4 万人。",
      "source": "SoftwareBay",
      "date": "2026-11-22",
      "url": "https://www.softwarebay.de/news/job-cuts-in-the-gaming-industry-2026",
      "image": "https://www.softwarebay.de/uploads/news/softwarebay.de_stellenabbau-in-der-games-branche-2026_1795359615.jpg",
      "badge": "裁员",
      "badgeType": "industry",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "游戏裁员",
        "Epic",
        "育碧",
        "3A成本"
      ],
      "content": [
        {
          "title": "核心数字",
          "type": "list",
          "items": [
            "TradingPlatforms：98 家公司共裁撤 7773 人（截至 11 月）",
            "Epic Games 与育碧为受冲击最大的公司",
            "另有追踪机构口径称全年裁员或超 1.4 万人",
            "小型工作室与独立开发者受影响相对较小"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "不同机构数字差出一倍，反映裁员统计的口径与覆盖差异，但趋势一致：大厂在收缩、成本在重估。对从业者，灵活的小团队模式抗风险更强；对管理者，重投入 3A 的回报周期需要重新算账。"
          ]
        }
      ]
    },
    {
      "id": "in-gta6-billion",
      "category": "industry",
      "subcategory": "行业·观点",
      "title": "观点：GTA 6 可能是第一款十亿美元游戏，也可能最后一款",
      "summary": "GamesIndustry.biz 评论指出，GTA 6 以创纪录的首发刷新娱乐产品天花板，但 3A 开发成本与周期同步攀升，越来越少项目能承担这种量级的投入。文章认为，当头部作品不断抬高预算标杆，行业更可能走向「少数超级大作 + 大量中小精品」的两极结构。",
      "source": "GamesIndustry.biz",
      "date": "2026-11-20",
      "url": "https://www.gamesindustry.biz/gta-6-the-first-billion-dollar-game-may-also-be-the-last",
      "image": "https://assetsio.gnwcdn.com/gta-6-headline-launch-gallery-22.jpg?width=1200&height=630&fit=crop&enable=upscale",
      "badge": "观点",
      "badgeType": "industry",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "GTA 6",
        "3A成本",
        "行业结构",
        "观点"
      ],
      "content": [
        {
          "title": "核心观点",
          "type": "list",
          "items": [
            "GTA 6 刷新娱乐产品首发纪录，成为现象级产品",
            "3A 开发与营销成本同步攀升，能承担该量级投入的项目越来越少",
            "行业或走向少数超级大作与大量中小精品并存的两极结构"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "这更像一句提醒：用一个 GTA 6 的样本去推导行业未来为时尚早，但成本曲线确实在把中小团队挤向差异化。与其追 3A 军备竞赛，不如把预算花在能被快速验证的核心玩法上。"
          ]
        }
      ]
    },
    {
      "id": "ga-abyss",
      "category": "games",
      "subcategory": "游戏·新游",
      "title": "《深渊航线》登陆 Steam：四条通信线路同时推进的深海推理",
      "summary": "3DM 报道深海题材推理游戏《深渊航线》登陆 Steam。玩家在深海设施中通过四条通信线路并行推进线索，在信息不对称中还原事件全貌。多线叙事与沟通解谜构成核心玩法。",
      "source": "3DM",
      "date": "2026-11-19",
      "url": "https://en.3dmgame.com/news/11014",
      "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-23-abyss.jpg",
      "badge": "新游",
      "badgeType": "games",
      "readTime": "4 分钟",
      "hotScore": 72,
      "tags": [
        "深渊航线",
        "推理",
        "深海",
        "多线叙事"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "深海题材推理游戏，已登陆 Steam",
            "核心机制为四条通信线路并行推进线索",
            "玩法强调信息不对称与沟通解谜"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把「多线并行」做成核心机制，比堆砌剧情分支更考验设计功力。这类小体量推理作品的价值，正在于用结构创新换掉对内容量的依赖。"
          ]
        }
      ]
    },
    {
      "id": "ga-timeline",
      "category": "games",
      "subcategory": "游戏·新游",
      "title": "《Grand Theft Timeline》：把时间线操纵做成开放世界玩法",
      "summary": "3DM 报道《Grand Theft Timeline》公布，游戏围绕时间线操纵构建开放世界玩法，玩家可借助改变时间进程的机制影响任务与探索结果。",
      "source": "3DM",
      "date": "2026-11-20",
      "url": "https://en.3dmgame.com/news/11117",
      "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-23-timeline.jpg",
      "badge": "新游",
      "badgeType": "games",
      "readTime": "4 分钟",
      "hotScore": 70,
      "tags": [
        "Grand Theft Timeline",
        "时间操纵",
        "开放世界"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "开放世界新作《Grand Theft Timeline》公布",
            "核心卖点为时间线操纵机制",
            "玩法把时间进程变化与任务、探索结果关联"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "时间操纵是最容易出彩也最容易失控的机制：一旦玩家能随意改写时间，关卡设计与平衡都会被放大。能否把自由度约束在可控边界，是这类作品成败的关键。"
          ]
        }
      ]
    },
    {
      "id": "ga-whisper",
      "category": "games",
      "subcategory": "游戏·新游",
      "title": "《诡视低语》登陆 Steam：对着麦克风念真实咒语的恐怖游戏",
      "summary": "独立工作室 BinaryLunar 的超自然监视恐怖游戏《诡视低语》11 月 17 日登陆 Steam（Windows PC），定价 26 元、首发 14 天 85 折。玩家被困在一间房里，通过水晶球监视周围房间，描摹符文并对着真实麦克风念出驱逐咒语；发售前愿望单已破 3000。",
      "source": "游民星空",
      "date": "2026-11-17",
      "url": "https://www.gamersky.com/news/202611/2247793.shtml",
      "image": "",
      "badge": "新游",
      "badgeType": "games",
      "readTime": "4 分钟",
      "hotScore": 74,
      "tags": [
        "诡视低语",
        "恐怖游戏",
        "麦克风",
        "BinaryLunar"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11/17 登陆 Steam，定价 26 元、首发 14 天 85 折",
            "核心玩法：水晶球监视 + 描摹符文 + 对麦克风念咒驱魔",
            "单人心理恐怖，需麦克风（推荐耳机），愿望单破 3000"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把麦克风变成核心输入，是用硬件特性换取沉浸感的巧思，也天然制造社交传播点。但语音识别的容错与误触发是体验红线——小团队做这类交互，宁可把词库做窄也要保证识别稳定。"
          ]
        }
      ]
    },
    {
      "id": "ga-clicky",
      "category": "games",
      "subcategory": "游戏·新游",
      "title": "《点点岛》发售：双人团队做的放置建造游戏，帕鲁客串打工",
      "summary": "由波兰双人团队 Karrot Games 开发、Pocketpair Publishing 发行的《Clicky Islands／点点岛》11 月 17 日登陆 Steam。游戏融合点击放置、城市建造与资源管理，试玩版 98% 好评、愿望单破 2 万；同步上线 6 款捆绑包，《幻兽帕鲁》帕鲁可作为免费劳动力登场。",
      "source": "17173（来源 3DM）",
      "date": "2026-11-17",
      "url": "https://news.17173.com/content/11172026/153107607.shtml",
      "image": "",
      "badge": "新游",
      "badgeType": "games",
      "readTime": "4 分钟",
      "hotScore": 73,
      "tags": [
        "点点岛",
        "放置建造",
        "Pocketpair",
        "幻兽帕鲁"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "11/17 登陆 Steam，双人团队 Karrot Games 开发、Pocketpair Publishing 发行",
            "融合点击放置、城市建造与资源管理，试玩 98% 好评、愿望单破 2 万",
            "首发两周 8 折，同步 6 款捆绑包，帕鲁可作为免费劳动力登场"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "放置品类靠的是「数值反馈 + 自动化成就感」的循环，这本不是新鲜事。真正聪明的做法是用帕鲁联动借势——小团队在同类红海里，找对一张熟悉的 IP 脸，比多做一个系统更有效。"
          ]
        }
      ]
    },
    {
      "id": "ga-phonopolis",
      "category": "games",
      "subcategory": "游戏·奖项",
      "title": "《Phonopolis》夺 DevGAMM Awards 大奖",
      "summary": "GamesIndustry.biz 报道，Amanita Design 出品的《Phonopolis》在 DevGAMM Awards 上摘得 Grand Prize。Amanita Design 以《机械迷城》等点击式解谜作品闻名，《Phonopolis》延续其手绘风格与解谜传统。",
      "source": "GamesIndustry.biz",
      "date": "2026-11-20",
      "url": "https://www.gamesindustry.biz/phonopolis-from-amanita-design-wins-grand-prize-at-the-devgamm-awards",
      "image": "https://assetsio.gnwcdn.com/IMG_8211.jpeg?width=1200&height=630&fit=crop&enable=upscale",
      "badge": "奖项",
      "badgeType": "games",
      "readTime": "4 分钟",
      "hotScore": 68,
      "tags": [
        "Phonopolis",
        "DevGAMM",
        "Amanita Design",
        "解谜"
      ],
      "content": [
        {
          "title": "获奖要点",
          "type": "list",
          "items": [
            "《Phonopolis》获 DevGAMM Awards Grand Prize",
            "开发商 Amanita Design 以《机械迷城》等点击解谜闻名",
            "作品延续手绘美术与解谜设计传统"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "在 3A 与 AI 生成内容占据话题的当口，一款强调手绘与解谜的作品拿下大奖，说明「辨识度」仍是独立游戏的硬通货。风格化不是保守，而是让作品在海量新品里被记住的最低成本方式。"
          ]
        }
      ]
    },
    {
      "id": "ga-nursesim",
      "category": "games",
      "subcategory": "游戏·新游",
      "title": "《夜班护士模拟》公布：把排班与突发处置搬进模拟经营",
      "summary": "一款名为《Night Shift Nurse Simulator》的模拟经营新作公布，玩家扮演夜班护士，在值班窗口内处理病房呼叫、分配床位与应对突发状况，把医疗场景的节奏压力做成可玩循环。",
      "source": "Aayyy",
      "date": "2026-11-19",
      "url": "https://www.aayyy.com/latest/night-shift-nurse-simulator-steam-guide-release-date",
      "image": "",
      "badge": "新游",
      "badgeType": "games",
      "readTime": "4 分钟",
      "hotScore": 66,
      "tags": [
        "夜班护士模拟",
        "模拟经营",
        "Steam"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "模拟经营新作，主题为夜班护士值守",
            "核心循环为处理病房呼叫、分配床位与应对突发状况",
            "强调值班窗口内的节奏与压力管理"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "职业模拟品类正在从「流程复刻」转向「压力管理」，把工作节奏本身做成玩法。选这类题材，与其堆专业术语，不如把时间压力与优先级判断打磨扎实——那才是玩家真正会觉得有趣的部分。"
          ]
        }
      ]
    },
    {
      "id": "os-horizon",
      "category": "opensource",
      "subcategory": "开源·引擎",
      "title": "Horizon：用 Rust 写的开源 ECS 游戏引擎",
      "summary": "GitHub 项目 Horizon（horizon-rust/horizon）是一套用 Rust 构建的开源游戏引擎，采用实体组件系统（ECS）架构，主打内存安全与并发性能。Rust 生态近年在游戏引擎方向持续升温，Horizon 是其中较活跃的一个。",
      "source": "GitHub",
      "date": "2026-11-21",
      "url": "https://github.com/horizon-rust/horizon",
      "image": "https://opengraph.githubassets.com/1/horizon-rust/horizon",
      "badge": "Rust",
      "badgeType": "opensource",
      "readTime": "4 分钟",
      "hotScore": 78,
      "tags": [
        "Horizon",
        "Rust",
        "ECS",
        "开源引擎"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "用 Rust 编写的开源游戏引擎",
            "采用 ECS（实体组件系统）架构",
            "主打内存安全与并发性能"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "Rust 做引擎的核心卖点是「无 GC + 内存安全」，但生态与工具链成熟度仍是短板。想跟进的团队可以先从工具层或小型项目试水，别一上来就压主力项目。"
          ]
        }
      ]
    },
    {
      "id": "os-godotmcp",
      "category": "opensource",
      "subcategory": "开源·工具",
      "title": "godot-mcp：把 Godot 编辑器能力接进 MCP，让 AI 智能体直接操纵场景",
      "summary": "GitHub 项目 godot-mcp（hybridindie/godot-mcp）为 Godot 提供 MCP 服务，让 AI 智能体通过标准协议读取与修改场景、脚本和资源。它延续了「编辑器能力可被智能体调用」的思路，与 Unity CLI 的编排方向呼应。",
      "source": "GitHub",
      "date": "2026-11-21",
      "url": "https://github.com/hybridindie/godot-mcp",
      "image": "https://opengraph.githubassets.com/1/hybridindie/godot-mcp",
      "badge": "MCP",
      "badgeType": "opensource",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "Godot",
        "MCP",
        "AI智能体",
        "编辑器工具"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "为 Godot 提供 MCP 服务端",
            "智能体可通过协议读写场景、脚本与资源",
            "让 Godot 编辑器能力接入 AI 工作流"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把编辑器能力标准化成 MCP，是 AI 辅助开发从「聊天写代码」走向「真正动手改项目」的关键一步。用这类工具务必配合版本控制，智能体改完先看 diff 再决定合入。"
          ]
        }
      ]
    },
    {
      "id": "os-awesomeai",
      "category": "opensource",
      "subcategory": "开源·资源",
      "title": "awesome-ai-game-dev-tools：AI 游戏开发工具清单持续更新",
      "summary": "GitHub 仓库 awesome-ai-game-dev-tools（BlueSkyID666）汇总了面向游戏开发的 AI 工具与资源，覆盖资产生成、代码辅助、NPC 行为与工作流自动化等方向，是快速摸清 AI 游戏工具生态的入口。",
      "source": "GitHub",
      "date": "2026-11-21",
      "url": "https://github.com/BlueSkyID666/awesome-ai-game-dev-tools",
      "image": "",
      "badge": "清单",
      "badgeType": "opensource",
      "readTime": "3 分钟",
      "hotScore": 76,
      "tags": [
        "AI工具",
        "资源清单",
        "游戏开发",
        "GitHub"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "汇总面向游戏开发的 AI 工具与资源",
            "覆盖资产生成、代码辅助、NPC 行为、工作流自动化等方向",
            "适合作为摸清 AI 游戏工具生态的入口"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "awesome 类清单的价值在于省掉信息筛选成本，但工具迭代极快，清单也常有滞后。把它当索引用，真正采用前还得回到官方文档和实测。"
          ]
        }
      ]
    },
    {
      "id": "os-claudeanim",
      "category": "opensource",
      "subcategory": "开源·工具",
      "title": "claude-animation-skills：给 AI 编码助手装上动画制作技能",
      "summary": "GitHub 项目 claude-animation-skills（artemnovitckii）为 Claude 等编码智能体提供一组动画制作技能，让智能体按规范生成与编辑动画相关代码或资产，把「技能包」模式延伸到动画制作环节。",
      "source": "GitHub",
      "date": "2026-11-21",
      "url": "https://github.com/artemnovitckii/claude-animation-skills",
      "image": "https://opengraph.githubassets.com/1/artemnovitckii/claude-animation-skills",
      "badge": "Agent Skills",
      "badgeType": "opensource",
      "readTime": "4 分钟",
      "hotScore": 77,
      "tags": [
        "Claude",
        "技能包",
        "动画",
        "AI智能体"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "为编码智能体提供动画制作技能包",
            "让智能体按规范生成/编辑动画代码或资产",
            "体现「技能包」向垂直美术环节延伸的趋势"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把领域知识打包成可复用技能，是让通用智能体干好专项活的有效路径。动画这种规范密集的任务尤其适合——前提是人要把「什么是做对了」写清楚，否则智能体只会稳定地产出错误。"
          ]
        }
      ]
    },
    {
      "id": "os-hedra",
      "category": "opensource",
      "subcategory": "开源·引擎",
      "title": "Project Hedra：开源 3D 引擎与体素沙盒实验",
      "summary": "GitHub 项目 Project Hedra（maxilevi/project-hedra）是一个开源 3D 引擎与体素沙盒实验项目，聚焦实时渲染、程序化地形与交互玩法，可作为学习引擎底层与体素技术的参考实现。",
      "source": "GitHub",
      "date": "2026-11-21",
      "url": "https://github.com/maxilevi/project-hedra",
      "image": "https://opengraph.githubassets.com/1/maxilevi/project-hedra",
      "badge": "3D",
      "badgeType": "opensource",
      "readTime": "4 分钟",
      "hotScore": 72,
      "tags": [
        "Project Hedra",
        "体素",
        "3D引擎",
        "程序化"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "开源 3D 引擎与体素沙盒实验项目",
            "聚焦实时渲染、程序化地形与交互玩法",
            "适合作为引擎底层与体素技术的参考实现"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "个人引擎项目未必能替代成熟方案，但它们是理解「引擎到底怎么跑起来」的最佳教材。想深入渲染底层的人，读这类代码比看教程更能建立系统性认知。"
          ]
        }
      ]
    },
    {
      "id": "os-playgen2",
      "category": "opensource",
      "subcategory": "开源·AI",
      "title": "PlayGen2 开源：可键盘游玩的 Doom 世界模型，Apache-2.0 放权重",
      "summary": "PlayGen2 是港中文、腾讯与南洋理工研究者提出的可玩世界模型（arXiv 2611.07867），代码与权重以 Apache-2.0 开源。它把游戏引擎的思路拆开：41.2M 参数的世界状态模型维护显式 3D 状态，神经渲染器从深度与语义投影绘出第一人称画面，生成的帧不回灌到状态预测，避免地图记忆被视觉误差腐蚀。在 M4 Pro 上完整循环约 160ms，串行约 5 FPS。",
      "source": "ArtRealmAI",
      "date": "2026-11-06",
      "url": "https://artrealmai.com/article/playgen2-playable-doom-world-model-open-weights",
      "image": "https://pub-4552ab4b36fa4e0889188dd998a66596.r2.dev/playgen2-playable-doom-world-model-open-weights-cover.jpg",
      "badge": "世界模型",
      "badgeType": "opensource",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "PlayGen2",
        "世界模型",
        "Doom",
        "Apache-2.0",
        "神经渲染"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "港中文/腾讯/NTU 提出，代码与权重 Apache-2.0 开源",
            "显式 3D 状态（41.2M）+ 神经渲染器（29.1M+VAE），生成帧不回灌状态",
            "约 500 小时机器人游玩数据训练，M4 Pro 上循环约 160ms",
            "支持通过修改显式状态做可编程玩法，多玩家可由单人模型组合"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把「状态」和「渲染」分开，是 PlayGen2 相较像素级世界模型最值得借鉴的设计——状态可脚本化、可组合，才谈得上做玩法。它目前只在 Doom、160×120 下验证，离生产工具很远，但作为引擎式神经游戏的蓝图值得研读。"
          ]
        }
      ]
    },
    {
      "id": "tu-godot2dshader",
      "category": "tutorials",
      "subcategory": "教程·Godot",
      "title": "Godot 官方教程：从零写出第一个 2D 着色器",
      "summary": "Godot 官方文档的「Your first 2D shader」手把手带读者创建一个 2D 着色器，从新建 ShaderMaterial、编写顶点与片元函数，到把材质挂到 CanvasItem 上并实时预览。适合第一次接触 Godot 着色器的开发者。",
      "source": "Godot Docs",
      "date": "2026-11-20",
      "url": "https://docs.godotengine.org/en/stable/tutorials/shaders/your_first_shader/your_first_2d_shader.html",
      "image": "",
      "badge": "教程",
      "badgeType": "tutorials",
      "readTime": "6 分钟",
      "hotScore": 74,
      "tags": [
        "Godot",
        "着色器",
        "2D",
        "官方教程"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "从新建 ShaderMaterial 到编写顶点/片元函数",
            "把材质挂到 CanvasItem 并实时预览效果",
            "面向首次接触 Godot 着色器的开发者"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "官方教程的价值在于概念准确、跟着就能跑通。着色器入门最忌只看不写——照着做一遍、改几个参数看变化，比读十篇原理文章更管用。"
          ]
        }
      ]
    },
    {
      "id": "tu-catlikecurl",
      "category": "tutorials",
      "subcategory": "教程·Godot",
      "title": "Catlike Coding：Godot 里独立推导旋度噪声的程序化 GPU 图案",
      "summary": "Catlike Coding 的 Godot 系列新增「Independent Curl」一节，讲如何在 GPU 上程序化生成旋度噪声图案，从数学推导到着色器实现，配套 banner 与源码。延续其「讲透原理再写代码」的风格。",
      "source": "Catlike Coding",
      "date": "2026-11-21",
      "url": "https://catlikecoding.com/godot/procedural-gpu-patterns/11-independent-curl/",
      "image": "https://catlikecoding.com/godot/procedural-gpu-patterns/11-independent-curl/banner.png",
      "badge": "进阶",
      "badgeType": "tutorials",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "Catlike Coding",
        "旋度噪声",
        "程序化",
        "GPU"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "讲在 GPU 上程序化生成旋度噪声（curl noise）图案",
            "从数学推导到着色器实现，配源码",
            "延续 Catlike Coding 讲透原理的写作风格"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "程序化图案的难点从不是代码，而是背后的数学直觉。Catlike 这类从推导写起的教程稀缺，适合想真正掌握噪声、流场等效果的开发者，而不是只想要一段可复制的 shader。"
          ]
        }
      ]
    },
    {
      "id": "tu-stylizedsky",
      "category": "tutorials",
      "subcategory": "教程·Godot",
      "title": "GDQuest 开源示例：在 Godot 4 里做风格化天空",
      "summary": "GitHub 项目 gdquest-demos/godot-4-stylized-sky 提供一套在 Godot 4 中制作风格化天空的示例工程，涵盖天空着色器、渐变与云层处理，可直接下载学习或复用。",
      "source": "GitHub / GDQuest",
      "date": "2026-11-21",
      "url": "https://github.com/gdquest-demos/godot-4-stylized-sky",
      "image": "https://opengraph.githubassets.com/1/gdquest-demos/godot-4-stylized-sky",
      "badge": "示例工程",
      "badgeType": "tutorials",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": [
        "GDQuest",
        "Godot 4",
        "天空着色器",
        "风格化"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "Godot 4 风格化天空的可运行示例工程",
            "涵盖天空着色器、渐变与云层处理",
            "可下载学习或直接复用"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "可运行示例比截图教程更有价值——能拆开看参数、改了立刻见效。学风格化渲染，从这类完整小工程入手，比零散片段更容易建立整体感。"
          ]
        }
      ]
    },
    {
      "id": "tu-godotmosh",
      "category": "tutorials",
      "subcategory": "教程·Godot",
      "title": "Godot 论坛免费教程：手把手做 DataMoshing 故障着色器（第一部分）",
      "summary": "Godot 官方论坛的免费教程贴详细讲解如何实现 DataMoshing 故障艺术着色器：通过扰动 UV 与颜色通道制造画面撕裂与错位效果，适合想在 2D/UI 里加入故障风格特效的开发者。",
      "source": "Godot Forum",
      "date": "2026-11-20",
      "url": "https://forum.godotengine.org/t/free-tutorial-datamosh-shader-part-1/144716",
      "image": "https://forum.godotengine.org/uploads/default/optimized/3X/5/a/5a3f96db3b57758aa488aa7fea4f3f9801a4dfdd_2_1024x432.jpeg",
      "badge": "免费",
      "badgeType": "tutorials",
      "readTime": "5 分钟",
      "hotScore": 76,
      "tags": [
        "Godot",
        "DataMoshing",
        "故障艺术",
        "着色器"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "在 Godot 中实现 DataMoshing 故障着色器",
            "通过扰动 UV 与颜色通道制造撕裂、错位效果",
            "免费、分部分讲解，适合 2D/UI 特效"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "故障特效好用但极易滥用。把它当点缀而非主食——控制触发时机与强度，让效果服务于叙事（比如角色状态异常），才不会让玩家视觉疲劳。"
          ]
        }
      ]
    },
    {
      "id": "tu-unityprof",
      "category": "tutorials",
      "subcategory": "教程·Unity",
      "title": "Unity 基础架构与性能分析实战：从 Entity 到帧率的系统化排查",
      "summary": "DEV Community 上的一篇实战文章梳理 Unity 项目的底层架构与性能分析方法：如何建立模块化的代码结构、用 Profiler 定位慢帧与内存增长、按优先级处理瓶颈，强调「先测量再优化」的工作流。",
      "source": "DEV Community",
      "date": "2026-11-19",
      "url": "https://new.benhalpern.com/tenaciousdan/unity-foundational-architecture-profiling-optimization-34ea",
      "image": "https://media2.dev.to/dynamic/image/width=1200,height=627,fit=cover,gravity=auto/https%3A%2F%2Fdev-to-uploads.s3.us-east-2.amazonaws.com%2Fuploads%2Farticles%2Fk42tcsg5yf9543k2e2pv.webp",
      "badge": "性能",
      "badgeType": "tutorials",
      "readTime": "7 分钟",
      "hotScore": 80,
      "tags": [
        "Unity",
        "Profiler",
        "性能优化",
        "架构"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "梳理 Unity 项目的模块化基础架构",
            "用 Profiler 定位慢帧、内存增长与构建瓶颈",
            "强调先测量再优化、按优先级处理瓶颈"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "性能优化最常见的错误是「凭感觉改」。先把 Profiler 数据摆出来，找到真正的热点再动手——多数时候瓶颈和你想的不一样。把这套流程固化下来，比记住某个优化技巧更值钱。"
          ]
        }
      ]
    },
    {
      "id": "tu-unityshader-opt",
      "category": "tutorials",
      "subcategory": "教程·Unity",
      "title": "Unity Shader 性能自查：从多精度策略到纹理通道打包",
      "summary": "一篇面向 Unity 开发者的着色器性能文章，系统梳理移动端 Shader 优化要点：按平台选择合适的数值精度、减少重复与复杂计算、把标量数据打包进纹理通道以降低插值与采样开销。",
      "source": " Hubble 数码",
      "date": "2026-11-21",
      "url": "https://www.hqwc.cn/a/560599.html",
      "image": "",
      "badge": "优化",
      "badgeType": "tutorials",
      "readTime": "6 分钟",
      "hotScore": 78,
      "tags": [
        "Unity",
        "Shader",
        "移动端",
        "精度优化"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "按平台选择合适的数值精度（half/fixed 等）",
            "减少重复计算与高开销函数",
            "把标量数据打包进纹理通道，降低插值与采样成本"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "移动端 Shader 优化的关键不是删效果，而是理解 GPU 的成本结构：精度、带宽、插值各有代价。把这份自查清单用在真机上量一遍，往往能挖出不少「看不见」的开销。"
          ]
        }
      ]
    },
    {
      "id": "ai-gamer-vla",
      "category": "ai",
      "subcategory": "AI·游戏智能体",
      "title": "米哈游 Gamer 通用 VLA 模型拆解：看屏幕输出键鼠，延迟压到 65 毫秒",
      "summary": "米哈游 Honkai AI 联合多所高校发布 Gamer（通用视觉-语言-动作基础模型），只看屏幕画面、直接输出与人类相同的键鼠指令，可跨《崩铁》《原神》《Minecraft》等 2D/3D 游戏执行长时程任务。三阶段训练结合记忆摘要的 TA-GRPO，配合 Streaming-vLLM 把推理延迟从 1306ms 压到 65.12ms（20.1 倍）。论文与提示词规范已开源，Streaming-vLLM 代码待放出。",
      "source": "AI 科技新闻（aiposthub）",
      "date": "2026-11-19",
      "url": "https://www.aiposthub.com/gamer-generalist-vla-foundation-model",
      "image": "https://storage.ghost.io/c/5e/61/5e6189f0-c5e0-49a0-97b4-5eddd3f43c77/content/images/size/w1200/2026/11/gamer-generalist-vla-foundation-model-official.png",
      "badge": "VLA",
      "badgeType": "ai",
      "readTime": "8 分钟",
      "hotScore": 93,
      "tags": [
        "米哈游",
        "Gamer",
        "VLA",
        "TA-GRPO",
        "Streaming-vLLM"
      ],
      "content": [
        {
          "title": "技术要点",
          "type": "list",
          "items": [
            "纯视觉输入、设备层键鼠输出的统一接口，跨游戏无需专用 API",
            "三阶段训练：CPT + 稀疏推理 SFT + 时间感知强化学习 TA-GRPO",
            "Streaming-vLLM 把端到端延迟从 1306ms 降到 65.12ms（20.1×）",
            "论文与系统提示词规范已开源，Streaming-vLLM 待放出"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把「游戏 AI」做成不挑游戏的通用接口，价值在于标准化了观察与动作格式——这和机器人领域的思路同源。真正卡落地的是延迟与稳定性，65ms 是跨过可玩门槛的关键数字。想复现的团队注意：核心推理引擎尚未开源。"
          ]
        }
      ]
    },
    {
      "id": "ai-fable52",
      "category": "ai",
      "subcategory": "AI·生成",
      "title": "Claude Fable 5.2 一句话做游戏：8 小时、约 550 美元从零生成可玩射击游戏",
      "summary": "Anthropic 于 11 月 9 日发布 Claude Fable 5.2，主打技术任务与交互式 3D 世界生成。上线一天内，开发者用单条提示词在浏览器里生成射击、竞速、MMO 村庄等游戏；Anthropic 员工 Felix Rieseberg 的射击 Demo 用 270 万输出 token、约 550 美元 API 成本、耗时 8 小时从零生成模型、音效与贴图。API 价格降到每百万输入 8 美元、输出 40 美元。",
      "source": "TalkEsport",
      "date": "2026-11-16",
      "url": "https://www.talkesport.com/editorials/claude-fable-5-2-games-ai-game-development/",
      "image": "https://www.talkesport.com/wp-content/uploads/claude-fable-5-2-games-ai-game-development-scaled.webp",
      "badge": "Fable 5.2",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "Claude",
        "Fable 5.2",
        "AI生成游戏",
        "Anthropic"
      ],
      "content": [
        {
          "title": "关键事实",
          "type": "list",
          "items": [
            "11/9 发布，主打交互式 3D 世界与技术任务",
            "单提示词生成射击/竞速/MMO 村庄等可玩 Demo",
            "一个射击 Demo：约 550 美元、8 小时、270 万输出 token，从零生成模型音效贴图",
            "API 价格降至输入 8 美元/百万、输出 40 美元/百万"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "从「生成一段代码」到「生成一个可玩游戏」，成本与时间是绕不开的现实：550 美元、8 小时换来的更像一个可验证原型，而非可发行产品。演示很震撼，但对工作室而言，它目前的价值是快速验证玩法点子，而不是替代生产管线。"
          ]
        }
      ]
    },
    {
      "id": "ai-qwen4max-dev",
      "category": "ai",
      "subcategory": "AI·模型",
      "title": "Qwen4-Max 开发解读：原生视觉 + 百万上下文，把 3D 创作串成一条链",
      "summary": "阿里云开发者社区对 Qwen4-Max 的解读指出，该模型具备原生视觉能力，能熟练使用 Blender 完成几何建模、场景搭建、材质配置到灯光渲染的完整链路，并支持百万 token 上下文。它与同期 Fable 5.2、GPT-6.2 Astra 一起，把大模型的 3D 能力推向实用化。",
      "source": "阿里云开发者社区",
      "date": "2026-11-16",
      "url": "https://developer.aliyun.com/article/1784685",
      "image": "https://img.alicdn.com/tfs/TB1LCE1aQ5E3KVjSZFCXXbuzXXa-200-200.png",
      "badge": "Qwen4-Max",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Qwen4-Max",
        "原生视觉",
        "Blender",
        "百万上下文"
      ],
      "content": [
        {
          "title": "模型要点",
          "type": "list",
          "items": [
            "具备原生视觉能力，支持百万 token 上下文",
            "可使用 Blender 串联建模、场景、材质与渲染",
            "与 Fable 5.2、GPT-6.2 Astra 同属 3D 能力强化浪潮"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "把工具调用串成完整创作链，是大模型从「回答」走向「执行」的标志。评估这类模型别只盯着演示效果，重点看输出能否进引擎、能否复现——那才是它能否进入生产流程的分水岭。"
          ]
        }
      ]
    },
    {
      "id": "ai-gamescaling",
      "category": "ai",
      "subcategory": "AI·研究",
      "title": "THUSI-Lab 发布 gamescaling-model 集合：研究游戏任务的模型缩放律",
      "summary": "Hugging Face 上的 THUSI-Lab/gamescaling-model 集合追踪了团队在游戏任务上的视觉-语言模型缩放研究，用于对照模型规模与键鼠控制等游戏能力的关系。该集合与米哈游 Gamer 的论文相关联，为研究者提供可对照的基础模型资产。",
      "source": "xinfinite",
      "date": "2026-11-17",
      "url": "https://www.xinfinite.net/t/topic/23702/5",
      "image": "https://media1.xinfinite.net/original/3X/7/f/7fcfbb0085182aa652cb2a000c662e7626570eb3.png",
      "badge": "研究",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 76,
      "tags": [
        "gamescaling",
        "缩放律",
        "VLA",
        "Hugging Face"
      ],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": [
            "THUSI-Lab 在 Hugging Face 发布 gamescaling-model 集合",
            "研究游戏任务上模型规模与能力（如键鼠控制）的缩放关系",
            "与米哈游 Gamer 论文相关联，提供对照资产"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "缩放律研究回答的是「模型做游戏任务，堆规模到底有没有用」。把不同规模的模型放一起对照，比单个炫技 Demo 更能说明能力边界——这类基础工作对判断投入方向很有参考价值。"
          ]
        }
      ]
    },
    {
      "id": "ai-raon",
      "category": "ai",
      "subcategory": "AI·NPC",
      "title": "RAON-1 nano NPC：把生成式 NPC 压到可实时运行的小规模",
      "summary": "Sam Witteveen 介绍的 RAON-1 nano 面向游戏 NPC，主打在小规模模型下实现可用的 NPC 交互，让生成式对话角色能在实时场景中运行，降低普通项目接入 AI NPC 的硬件与延迟门槛。",
      "source": "AI TLDR",
      "date": "2026-11-17",
      "url": "https://ai-tldr.dev/releases/sam-witteveen-raon-1-nano-npcs-nov17/",
      "image": "https://i.ytimg.com/vi/IRZqAdKcNTE/hqdefault.jpg",
      "badge": "NPC",
      "badgeType": "ai",
      "readTime": "5 分钟",
      "hotScore": 75,
      "tags": [
        "RAON-1",
        "NPC",
        "小模型",
        "实时交互"
      ],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": [
            "RAON-1 nano 面向游戏 NPC 交互",
            "主打小规模模型下的实时可用",
            "降低 AI NPC 的硬件与延迟门槛"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "AI NPC 落地的关键从来不是「能不能对话」，而是「延迟和成本能不能接受」。把模型压到实时可跑，比追求更像人更进一步——玩家要的是即时反馈，不是哲学对话。"
          ]
        }
      ]
    },
    {
      "id": "ai-3d-beyond",
      "category": "ai",
      "subcategory": "AI·趋势",
      "title": "一句话生成游戏场景、52 分钟渲染 3D 短片：大模型集体「越界」物理世界",
      "summary": "网易科技梳理指出，Qwen4-Max、Claude Fable 5.2、GPT-6.2 Astra 等模型近期 3D 能力显著提升：Fable 5.2 用一条提示词自行写 Blender 代码建模并调 10 块 GPU 渲染 4K 短片，耗时 52 分钟；Qwen4-Max 强调原生视觉与 Blender 操作。业内分歧集中在是否要把语言模型与物理模型统一到同一技术体系。",
      "source": "网易科技（每日经济新闻）",
      "date": "2026-11-16",
      "url": "https://www.163.com/dy/article/LC1DNIFN0512B07B.html",
      "image": "",
      "badge": "趋势",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "3D生成",
        "空间智能",
        "世界模型",
        "大模型"
      ],
      "content": [
        {
          "title": "关键事实",
          "type": "list",
          "items": [
            "Fable 5.2 单提示词写 Blender 代码建模、动画，调 10 块 GPU 渲染 4K 短片耗时 52 分钟",
            "Qwen4-Max 强调原生视觉与 Blender 全流程操作",
            "GPT-6.2 Astra 强化机械建模与物理仿真",
            "业内分歧：是否把语言模型与物理模型统一到同一技术体系"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "当大模型开始「理解」并生成三维空间，AI 的边界正从文本走向物理世界。但争议点很实在：语言模型和世界模型是不是同一套东西，决定了未来工具链是收敛还是分化。眼下更该关心的是能不能稳定产出可导入引擎的资产。"
          ]
        }
      ]
    },
    {
      "id": "co-taptap-jam",
      "category": "contest",
      "subcategory": "竞赛·Game Jam",
      "title": "TapTap 制造 Game Jam：面向独立开发者的限时创作活动",
      "summary": "TapTap 发布制造 Game Jam 活动，面向独立开发者与团队在限定周期内围绕主题完成可玩原型，并提供曝光与奖励资源，延续平台对原创游戏的扶持思路。",
      "source": "TapTap",
      "date": "2026-11-12",
      "url": "https://www.taptap.cn/moment/866271546321143189",
      "image": "",
      "badge": "Game Jam",
      "badgeType": "contest",
      "readTime": "4 分钟",
      "hotScore": 70,
      "tags": [
        "TapTap",
        "Game Jam",
        "独立开发",
        "原型"
      ],
      "content": [
        {
          "title": "活动要点",
          "type": "list",
          "items": [
            "TapTap 面向独立开发者发起限时 Game Jam",
            "在周期内围绕主题完成可玩原型",
            "提供曝光与奖励资源，扶持原创"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "Game Jam 的价值不在奖项，而在于逼你在极短时间内验证「这个点子到底好不好玩」。对求职作品集来说，一个完成度高的 Jam 作品往往比半成品大作更有说服力。"
          ]
        }
      ]
    },
    {
      "id": "co-kuro",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "库洛游戏 27 届校招：引擎/客户端/美术多岗位开放",
      "summary": "库洛游戏 2027 届校园招聘开放，覆盖游戏客户端、引擎开发、技术美术与策划等方向，面向 2027 届毕业生。",
      "source": "安徽大学就业网",
      "date": "2026-11-09",
      "url": "https://www.ahua.edu.cn/jyw/2026/1109/c254a50567/page.htm",
      "image": "",
      "badge": "校招",
      "badgeType": "contest",
      "readTime": "3 分钟",
      "hotScore": 66,
      "tags": [
        "库洛游戏",
        "27届校招",
        "引擎",
        "客户端"
      ],
      "content": [
        {
          "title": "招聘要点",
          "type": "list",
          "items": [
            "库洛游戏 2027 届校园招聘开放",
            "覆盖客户端、引擎、技术美术与策划方向",
            "面向 2027 届毕业生"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "二次元开放世界赛道仍在扩招引擎与 TA，说明这批公司进入技术深水区。想进这行的同学，把图形学和引擎实操打扎实，比堆项目数量更管用。"
          ]
        }
      ]
    },
    {
      "id": "co-lilith",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "莉莉丝游戏校招：游戏开发工程师岗位开放",
      "summary": "莉莉丝游戏 2027 校招放出游戏开发工程师等岗位，面向全球发行与自研项目招募应届人才。",
      "source": "中国矿业大学（北京）就业网",
      "date": "2026-11-10",
      "url": "https://jy.cumtb.edu.cn/Zhaopin/xiaozhao.html?id=b26b7f11-f67c-2555-d8a3-fce87d649da5",
      "image": "",
      "badge": "校招",
      "badgeType": "contest",
      "readTime": "3 分钟",
      "hotScore": 65,
      "tags": [
        "莉莉丝",
        "校招",
        "游戏开发",
        "应届"
      ],
      "content": [
        {
          "title": "招聘要点",
          "type": "list",
          "items": [
            "莉莉丝游戏 2027 校招开放",
            "含游戏开发工程师等岗位",
            "面向自研与全球发行项目招募应届生"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "出海型厂商招人时更看重工程基本功与学习能力，因为产品要适配多地区多平台。简历里能体现「把一件事做完整」的经历，往往比堆关键词更有效。"
          ]
        }
      ]
    },
    {
      "id": "co-yingjiao",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "鹰角网络 27 届校招：内推通道开放，技术与美术岗位在列",
      "summary": "鹰角网络 2027 届校园招聘内推通道开放，覆盖技术、美术、策划等方向，面向 2027 届毕业生招募。",
      "source": "力扣讨论区",
      "date": "2026-11-12",
      "url": "https://leetcode.cn/discuss/post/4052134/",
      "image": "https://pic.leetcode.cn/1793241973-oFtqkC-campus-referral.jpg",
      "badge": "校招",
      "badgeType": "contest",
      "readTime": "3 分钟",
      "hotScore": 67,
      "tags": [
        "鹰角网络",
        "27届校招",
        "内推",
        "技术美术"
      ],
      "content": [
        {
          "title": "招聘要点",
          "type": "list",
          "items": [
            "鹰角网络 2027 届校招内推通道开放",
            "覆盖技术、美术、策划等方向",
            "面向 2027 届毕业生"
          ]
        },
        {
          "title": "观察",
          "type": "text",
          "text": [
            "头部二游公司校招竞争依旧激烈，内推能提高简历被看到的概率，但决定因素还是作品与基本功。把算法题和项目深度补上去，比海投更实在。"
          ]
        }
      ]
    }
  ]
};
