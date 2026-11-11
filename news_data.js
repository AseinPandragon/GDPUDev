window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-12",
    "weekday": "星期四",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-12 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "Unreal Engine 5.9 MegaJam 预览：首个由 AI 智能体主导构建的引擎版本（hero）",
      "引擎精读：UnityCsReference / Atomic / Amethyst / jMonkey / Kore / Kha",
      "开源宝库：astc-encoder / Catch2 / EASTL / FlatBuffers / glslang / Compressonator",
      "AI 前沿：MiniMax H3-Image / Kimi 游戏工程 / Roblox 提示词动画 / Gemini 3.8 TTS / ComfyUI 0.44",
      "行业风向：Lego×ForthStar / Fairgames 取消 / Fortis 关停 / SAG-AFTRA / Unity Q3 / 战神延期",
      "竞赛招聘：网易高校赛事 / 计算机设计大赛数媒赛道 / 网易游戏招聘"
    ],
    "engineStatus": [
      {
        "name": "Unreal Engine 5.9",
        "type": "unreal",
        "status": "智能体构建的引擎预览",
        "badge": "引擎",
        "color": "blue"
      },
      {
        "name": "Unity",
        "type": "unity",
        "status": "C# 引擎源码参考",
        "badge": "引擎",
        "color": "orange"
      },
      {
        "name": "Atomic",
        "type": "atomic",
        "status": "C++/JS 跨平台",
        "badge": "跨端",
        "color": "violet"
      },
      {
        "name": "Amethyst",
        "type": "amethyst",
        "status": "Rust ECS",
        "badge": "Rust",
        "color": "teal"
      },
      {
        "name": "jMonkey",
        "type": "jmonkey",
        "status": "Java 3D",
        "badge": "Java",
        "color": "green"
      },
      {
        "name": "Kha",
        "type": "kha",
        "status": "Haxe 跨端框架",
        "badge": "框架",
        "color": "cyan"
      }
    ]
  },
  "hero": {
    "id": "ue59-hero",
    "category": "engine",
    "categoryName": "引擎前沿",
    "tag": "Unreal Engine 5.9",
    "title": "Epic 放出 Unreal Engine 5.9 MegaJam 预览：首个由 AI 智能体主导构建的引擎版本",
    "summary": "Epic 于 11 月 9 日放出 Unreal Engine 5.9 MegaJam Preview，赶在 11 月 12–15 日的 Epic AI MegaJam 前约一周仓促成型。官方称这是首个主要用 agentic 工作流构建的引擎版本——少数工程师指挥多组智能体把 UE6 分支的 AI 工具链移植过来，并重新实现 Web 目标平台。Unreal Assistant 让 Claude Code、Codex 等编码智能体直接进编辑器，配合扩充后的 Unreal MCP 工具集运作。对中小团队，这意味着「在引擎里对话式改场景」从概念走向可试。",
    "image": "https://d3kjluh73b9h9o.cloudfront.net/optimized/4X/5/3/2/532a040afb216bb3062c37b1b296ee81fa4a1261_2_1024x128.jpeg",
    "source": "Epic 开发者社区（一手）",
    "date": "2026-11-12",
    "url": "https://forums.unrealengine.com/t/unreal-engine-5-9-megajam-preview/2852840",
    "readTime": "7 分钟",
    "hotScore": 96,
    "tags": [
      "Unreal Engine",
      "AI 智能体",
      "MegaJam"
    ],
    "content": [
      {
        "title": "核心要点",
        "type": "list",
        "items": [
          "首个以智能体工作流为主的引擎版本，约一周开发、QA 短于常规",
          "Unreal Assistant 面板接入 Claude Code/Codex/Cursor/OpenCode",
          "Unreal MCP 自动启动，工具集扩至渲染/源码/性能/调试/UI/关卡",
          "Unreal Canvas 用提示词生成概念图、3D 网格与视频",
          "实验性 Web 目标（WebAssembly+WebGPU）让项目可在浏览器跑"
        ]
      },
      {
        "title": "学习要点",
        "type": "text",
        "text": "它把「用正规 API 而非模拟点击驱动引擎」这件事又往前推了一步：智能体读场景层级、改工程、跑构建，都是可编程接口。风险也很直白——Epic 自己承认 agent 写的代码还在清理、Web 渲染器是原型，建议先在项目副本上试。对想接 MCP 的团队，这是最贴近生产的可参考资料。"
      }
    ]
  },
  "items": [
    {
      "id": "en-unitycs",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·源码",
      "tag": "Unity",
      "title": "UnityCsReference：C# 引擎源码参考",
      "summary": "Unity 官方把引擎 C# 层（运行时、编辑器、UI、输入等）以可读源码形式公开，是理解 Unity 内部机制最权威的一手资料。比起只看文档，直接读源码能看清生命周期与底层调用链。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/Unity-Technologies/UnityCsReference",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Unity",
        "C#",
        "源码"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源引擎仓库",
            "可二次研究与二次开发"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎不是越重越好；能读懂一个引擎如何分后端、管生命周期，比盲目追新特性更值钱。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/Unity-Technologies/UnityCsReference"
    },
    {
      "id": "en-atomic",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·跨端",
      "tag": "Atomic",
      "title": "Atomic Game Engine：C++/JS 跨平台引擎",
      "summary": "Atomic 用 C++ 写核心、以 JS/TypeScript 做脚本，覆盖桌面、移动与 Web，内置编辑器与 2D/3D 能力。对想研究「自带编辑器 + 可脚本化」架构的开发者，它是结构清晰的中等体量样本。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/AtomicGameEngine/AtomicGameEngine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Atomic",
        "C++",
        "跨端"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源引擎仓库",
            "可二次研究与二次开发"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎不是越重越好；能读懂一个引擎如何分后端、管生命周期，比盲目追新特性更值钱。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/AtomicGameEngine/AtomicGameEngine"
    },
    {
      "id": "en-amethyst",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Rust",
      "tag": "Amethyst",
      "title": "Amethyst：用 Rust ECS 写游戏的实验性引擎",
      "summary": "Amethyst 以 Rust 的 ECS 范式组织游戏逻辑，强调类型安全与数据驱动，社区虽已放缓但仍是 Rust 游戏生态的重要参考。想脱离 C++ 心智负担又想要现代架构的人，可借此理解 ECS 在 Rust 里的落地。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/amethyst/amethyst",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Rust",
        "ECS",
        "数据驱动"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源引擎仓库",
            "可二次研究与二次开发"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎不是越重越好；能读懂一个引擎如何分后端、管生命周期，比盲目追新特性更值钱。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/amethyst/amethyst"
    },
    {
      "id": "en-jmonkey",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Java",
      "tag": "jMonkey",
      "title": "jMonkeyEngine：成熟的 Java 3D 引擎",
      "summary": "jMonkeyEngine 提供场景图、物理、地形、网络等完整 3D 能力，长期服务于 Java 生态的教学与商用项目。对 Java 团队或高校图形课程，它是少有的全功能且文档完备的选择。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/jMonkeyEngine/jmonkeyengine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Java",
        "3D",
        "教学"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源引擎仓库",
            "可二次研究与二次开发"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎不是越重越好；能读懂一个引擎如何分后端、管生命周期，比盲目追新特性更值钱。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/jMonkeyEngine/jmonkeyengine"
    },
    {
      "id": "en-kore",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·底层",
      "tag": "Kore",
      "title": "Kore：Kha 底层的低层跨端框架",
      "summary": "Kore 是 Kha 的底层运行时，用 C++ 抽象出各平台窗口、图形与音频后端，目标是一份代码多端出包。想看懂「跨端引擎如何抹平平台差」的开发者，它的后端分派代码很值得翻。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/Kode/Kore",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Kore",
        "C++",
        "跨端"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源引擎仓库",
            "可二次研究与二次开发"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎不是越重越好；能读懂一个引擎如何分后端、管生命周期，比盲目追新特性更值钱。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/Kode/Kore"
    },
    {
      "id": "en-kha",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·框架",
      "tag": "Kha",
      "title": "Kha：Haxe 写的跨端游戏框架",
      "summary": "Kha 用 Haxe 统一目标到 WebGL/WebGPU、各主机与桌面，社区里有不少获奖独立游戏出自它手。对追求「一次编写、多后端编译」的团队，它是比大厂引擎更轻的路线。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/Kode/Kha",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Kha",
        "Haxe",
        "WebGPU"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源引擎仓库",
            "可二次研究与二次开发"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎不是越重越好；能读懂一个引擎如何分后端、管生命周期，比盲目追新特性更值钱。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/Kode/Kha"
    },
    {
      "id": "in-lego",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购",
      "tag": "Lego Digital Play 收购 ForthStar Games",
      "title": "Lego Digital Play 收购 ForthStar Games，要把乐高更稳地搬上移动端",
      "summary": "Lego Digital Play 收购了由 Playdemic 联合创始人创办的 ForthStar Games，目标是强化乐高在移动平台的布局。买团队而非只买 IP，说明大厂仍愿为「能持续产出」的移动研发能力付溢价。",
      "source": "GamesIndustry.biz（一手）",
      "date": "2026-11-12",
      "url": "https://www.gamesindustry.biz/lego-digital-play-acquires-forthstar-games-to-bring-lego-to-the-prominence-it-truly-deserves-on-mobile",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Lego",
        "收购",
        "移动"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "一手行业事件",
            "数据/节点以原文为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "大厂每个动作都是一次风险教育：并购整合、服务型叫停、产能延期，底层逻辑都是「先验证、再投入」。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/forthstar.jpg?width=1200&height=630&fit=crop&enable=upscale&"
    },
    {
      "id": "in-fairgames",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·产品",
      "tag": "PlayStation 取消 live-service 射击 Fairgames",
      "title": "PlayStation 取消 Haven Games 的 live-service 射击 Fairgames",
      "summary": "索尼取消了 Haven Games 开发的 live-service 射击 Fairgames，Haven 将转向与 PlayStation 其他团队协同。又一款服务型游戏在软启动后叫停，再次证明「先验证再投入」比硬撑更关键。",
      "source": "GamesIndustry.biz（一手）",
      "date": "2026-11-12",
      "url": "https://www.gamesindustry.biz/playstation-cancels-live-service-shooter-fairgames",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "PlayStation",
        "取消",
        "服务型"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "一手行业事件",
            "数据/节点以原文为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "大厂每个动作都是一次风险教育：并购整合、服务型叫停、产能延期，底层逻辑都是「先验证、再投入」。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/Fairgames-Cancelled_11-10-26.jpg?width=1200&height=630&fit=crop&enable=upscale&"
    },
    {
      "id": "in-fortis",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·人事",
      "tag": "Fortis Games 关停波及最多 440 人",
      "title": "移动发行商 Fortis Games 关停，最多 440 名员工受影响",
      "summary": "Fortis Games 宣布关停，联合创始人称自 2020 年成立以来未能达成目标，最多 440 个岗位受影响。移动发行这条线在买量成本走高下的脆弱性，值得中小团队记一笔。",
      "source": "GamesIndustry.biz（一手）",
      "date": "2026-11-12",
      "url": "https://www.gamesindustry.biz/mobile-publisher-fortis-games-shuts-down-up-to-440-workers-affected",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Fortis",
        "关停",
        "移动"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "一手行业事件",
            "数据/节点以原文为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "大厂每个动作都是一次风险教育：并购整合、服务型叫停、产能延期，底层逻辑都是「先验证、再投入」。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/3836d06b7f7004cb9f857e824ab3d56651505b21-1200x630.png?width=1200&height=630&fit=crop&enable=upscale&"
    },
    {
      "id": "in-sagaftra",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·政策",
      "tag": "SAG-AFTRA 推出新游戏协议",
      "title": "SAG-AFTRA 推出新视频游戏协议，允许雇佣专业演员做 Demo 与垂直切片",
      "summary": "美国演员工会 SAG-AFTRA 推出面向游戏的新协议，让开发者可雇佣专业演员录制 Demo 与垂直切片，降低早期预演成本。对重视演出质感的团队，这是把「小样」做专业的合规通道。",
      "source": "GamesIndustry.biz（一手）",
      "date": "2026-11-12",
      "url": "https://www.gamesindustry.biz/sag-aftra-launches-new-video-game-agreement-enabling-devs-to-hire-professional-actors-for-demos-and-vertical-slices",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "SAG-AFTRA",
        "演员",
        "协议"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "一手行业事件",
            "数据/节点以原文为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "大厂每个动作都是一次风险教育：并购整合、服务型叫停、产能延期，底层逻辑都是「先验证、再投入」。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/APP_Pre-Funding_Pitch_IMA_2026.jpg?width=1200&height=630&fit=crop&enable=upscale&"
    },
    {
      "id": "in-unityq3",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·财报",
      "tag": "Unity Q3 创史上最强",
      "title": "Unity 公布「史上最强」Q3：AI 广告网络拉动营收",
      "summary": "Unity 公布被其称为「史上最强」的 Q3 业绩，增长主要由 AI 驱动的广告网络贡献。引擎厂商的变现重心进一步转向广告与分发，对依赖其广告 SDK 的开发者是双向信号。",
      "source": "GamesIndustry.biz（一手）",
      "date": "2026-11-12",
      "url": "https://www.gamesindustry.biz/unity-reports-strongest-ever-q3-results-driven-by-its-ai-powered-ad-network",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Unity",
        "财报",
        "AI 广告"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "一手行业事件",
            "数据/节点以原文为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "大厂每个动作都是一次风险教育：并购整合、服务型叫停、产能延期，底层逻辑都是「先验证、再投入」。"
        }
      ],
      "image": ""
    },
    {
      "id": "in-godofwar",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·产品",
      "tag": "战神：劳菲延期至 2027 年 5 月",
      "title": "索尼圣莫尼卡将《战神：劳菲》延期三个月至 2027 年 5 月",
      "summary": "索尼圣莫尼卡把《战神：劳菲》从原定档期推迟三个月到 2027 年 5 月。第一方在产能吃紧时的档期让路，说明大厂也在用延期换质量，而非硬赶节点。",
      "source": "GamesIndustry.biz（一手）",
      "date": "2026-11-12",
      "url": "https://www.gamesindustry.biz/sony-santa-monica-delays-god-of-war-laufey-by-three-months-to-may-2027",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "战神",
        "延期",
        "索尼"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "一手行业事件",
            "数据/节点以原文为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "大厂每个动作都是一次风险教育：并购整合、服务型叫停、产能延期，底层逻辑都是「先验证、再投入」。"
        }
      ],
      "image": ""
    },
    {
      "id": "ga-voidreaver",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "Void Reaver",
      "title": "Void Reaver 11 月 11 日登陆 Steam：科幻背包肉鸽",
      "summary": "Void Reaver 于 11 月 11 日在 Steam 发售，主打科幻背包肉鸽。Steam 新游层出不穷，单独看每款体量不大，但聚在一起恰好是「小团队如何把单一机制做到极致」的活样本库。",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-12",
      "url": "https://store.steampowered.com/app/4096910/",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "Void Reaver",
        "Steam",
        "新作"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 当日发售",
            "一手商店页可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "独立游戏的核心竞争力常在一个被反复打磨的机制；想做玩法验证，这类小而专的作品比大作更值得拆。"
        }
      ],
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4096910/3f6aeff88b98379820bf59327afae369861e5dea/capsule_616x353.jpg?t=1794415588"
    },
    {
      "id": "ga-tapeman",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "Tape Man 卷尺人",
      "title": "Tape Man 卷尺人 11 月 11 日登陆 Steam：卷尺机制解谜平台",
      "summary": "Tape Man 卷尺人 于 11 月 11 日在 Steam 发售，主打卷尺机制解谜平台。Steam 新游层出不穷，单独看每款体量不大，但聚在一起恰好是「小团队如何把单一机制做到极致」的活样本库。",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-12",
      "url": "https://store.steampowered.com/app/4051290/",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "Tape Man 卷尺人",
        "Steam",
        "新作"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 当日发售",
            "一手商店页可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "独立游戏的核心竞争力常在一个被反复打磨的机制；想做玩法验证，这类小而专的作品比大作更值得拆。"
        }
      ],
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4051290/88158a9c1208aa4bec47c5d5e0b7f7b12a7342ca/capsule_616x353.jpg?t=1794384215"
    },
    {
      "id": "ga-eelknow",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "EEL KNOW: Perfect Pitch",
      "title": "EEL KNOW: Perfect Pitch 11 月 11 日登陆 Steam：音感问答",
      "summary": "EEL KNOW: Perfect Pitch 于 11 月 11 日在 Steam 发售，主打音感问答。Steam 新游层出不穷，单独看每款体量不大，但聚在一起恰好是「小团队如何把单一机制做到极致」的活样本库。",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-12",
      "url": "https://store.steampowered.com/app/5100140/",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "EEL KNOW: Perfect Pitch",
        "Steam",
        "新作"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 当日发售",
            "一手商店页可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "独立游戏的核心竞争力常在一个被反复打磨的机制；想做玩法验证，这类小而专的作品比大作更值得拆。"
        }
      ],
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5100140/041640130923305f108e0ac734d6077d30f8ea3a/capsule_616x353.jpg?t=1794373293"
    },
    {
      "id": "ga-dawnaerowar",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "DAWN AEROWAR",
      "title": "DAWN AEROWAR 11 月 11 日登陆 Steam：飞行电影感",
      "summary": "DAWN AEROWAR 于 11 月 11 日在 Steam 发售，主打飞行电影感。Steam 新游层出不穷，单独看每款体量不大，但聚在一起恰好是「小团队如何把单一机制做到极致」的活样本库。",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-12",
      "url": "https://store.steampowered.com/app/2991650/",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "DAWN AEROWAR",
        "Steam",
        "新作"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 当日发售",
            "一手商店页可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "独立游戏的核心竞争力常在一个被反复打磨的机制；想做玩法验证，这类小而专的作品比大作更值得拆。"
        }
      ],
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2991650/c1d0e41cadd9e7c5f3a8bce8d92b7ab72a1d80b9/capsule_616x353.jpg?t=1794385948"
    },
    {
      "id": "ga-icy",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "Icy Tower",
      "title": "Icy Tower 11 月 11 日登陆 Steam：精准跳跃",
      "summary": "Icy Tower 于 11 月 11 日在 Steam 发售，主打精准跳跃。Steam 新游层出不穷，单独看每款体量不大，但聚在一起恰好是「小团队如何把单一机制做到极致」的活样本库。",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-12",
      "url": "https://store.steampowered.com/app/3014860/",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "Icy Tower",
        "Steam",
        "新作"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 当日发售",
            "一手商店页可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "独立游戏的核心竞争力常在一个被反复打磨的机制；想做玩法验证，这类小而专的作品比大作更值得拆。"
        }
      ],
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3014860/e6eced94a01dfbb5372d750afcb9be8c19013cb8/capsule_616x353.jpg?t=1794341505"
    },
    {
      "id": "ga-towers",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "Towers of Babble",
      "title": "Towers of Babble 11 月 11 日登陆 Steam：单词塔防",
      "summary": "Towers of Babble 于 11 月 11 日在 Steam 发售，主打单词塔防。Steam 新游层出不穷，单独看每款体量不大，但聚在一起恰好是「小团队如何把单一机制做到极致」的活样本库。",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-12",
      "url": "https://store.steampowered.com/app/4984400/",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "Towers of Babble",
        "Steam",
        "新作"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Steam 当日发售",
            "一手商店页可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "独立游戏的核心竞争力常在一个被反复打磨的机制；想做玩法验证，这类小而专的作品比大作更值得拆。"
        }
      ],
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4984400/22326241c3021394ddc024e2bdd93d6eac74be62/capsule_616x353.jpg?t=1794347976"
    },
    {
      "id": "os-astc",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·基础设施",
      "tag": "ASTC Encoder",
      "title": "astc-encoder：ARM 的 ASTC 纹理压缩参考实现",
      "summary": "ARM 维护的 astc-encoder 是 ASTC（自适应可伸缩纹理压缩）的官方编码器，移动与主机端省带宽、降显存的关键一环。做移动或小游戏出海，纹理压缩策略直接决定包体与帧率。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/ARM-software/astc-encoder",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "ASTC Encoder",
        "开源",
        "游戏基建"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源基础设施仓库",
            "可进生产管线"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎之争一半在资产与工具链；这些仓库解决的是「图怎么压、数据怎么传、着色器怎么编」，比追新玩法更底层。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/ARM-software/astc-encoder"
    },
    {
      "id": "os-catch2",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·基础设施",
      "tag": "Catch2",
      "title": "Catch2：C++ 单元测试框架",
      "summary": "Catch2 是现代 C++ 的 header-only 测试框架，语法直观、可组合，引擎与工具链里最常见的基础设施之一。想让渲染或物理模块可回归，单元测试是先砌的墙。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/catchorg/Catch2",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Catch2",
        "开源",
        "游戏基建"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源基础设施仓库",
            "可进生产管线"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎之争一半在资产与工具链；这些仓库解决的是「图怎么压、数据怎么传、着色器怎么编」，比追新玩法更底层。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/catchorg/Catch2"
    },
    {
      "id": "os-eastl",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·基础设施",
      "tag": "EASTL",
      "title": "EASTL：EA 的标准模板库替代",
      "summary": "EA 开源的 EASTL 针对游戏场景重写了 STL 容器，在内存可控性与性能上更贴合引擎需求。读它的实现，能理解「为什么游戏引擎不爱直接用标准库」。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/electronicarts/EASTL",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "EASTL",
        "开源",
        "游戏基建"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源基础设施仓库",
            "可进生产管线"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎之争一半在资产与工具链；这些仓库解决的是「图怎么压、数据怎么传、着色器怎么编」，比追新玩法更底层。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/electronicarts/EASTL"
    },
    {
      "id": "os-flatbuffers",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·基础设施",
      "tag": "FlatBuffers",
      "title": "FlatBuffers：零拷贝序列化",
      "summary": "Google 的 FlatBuffers 支持直接读序列化数据而无需解析/拷贝，常用于游戏配置、网络协议与跨语言数据交换。Unity 等引擎生态里它出现频率很高。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/google/flatbuffers",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "FlatBuffers",
        "开源",
        "游戏基建"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源基础设施仓库",
            "可进生产管线"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎之争一半在资产与工具链；这些仓库解决的是「图怎么压、数据怎么传、着色器怎么编」，比追新玩法更底层。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/google/flatbuffers"
    },
    {
      "id": "os-glslang",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·基础设施",
      "tag": "glslang",
      "title": "glslang：Khronos 的 GLSL 参考编译器",
      "summary": "glslang 把 GLSL 编译到 SPIR-V，是 Vulkan/OpenGL 着色器工具链的核心。想自己搭着色器管线，它是绕不开的校验与翻译环节。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/KhronosGroup/glslang",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "glslang",
        "开源",
        "游戏基建"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源基础设施仓库",
            "可进生产管线"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎之争一半在资产与工具链；这些仓库解决的是「图怎么压、数据怎么传、着色器怎么编」，比追新玩法更底层。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/KhronosGroup/glslang"
    },
    {
      "id": "os-compressonator",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·基础设施",
      "tag": "Compressonator",
      "title": "Compressonator：AMD 的纹理与网格压缩工具",
      "summary": "AMD GPUOpen 的 Compressonator 提供 BC/ASTC 等纹理压缩与网格优化，覆盖从 DCC 到引擎的资产生产链路。对美术管线，它是省显存的务实补丁。",
      "source": "GitHub（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/GPUOpen-Tools/Compressonator",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Compressonator",
        "开源",
        "游戏基建"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "开源基础设施仓库",
            "可进生产管线"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "引擎之争一半在资产与工具链；这些仓库解决的是「图怎么压、数据怎么传、着色器怎么编」，比追新玩法更底层。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/GPUOpen-Tools/Compressonator"
    },
    {
      "id": "tu-unitylook",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·基础",
      "tag": "Unity Learn《Make your game look great》集合：从 URP 到灯光、Shader Graph、VFX 与后期",
      "title": "Unity Learn：让你的游戏更好看",
      "summary": "Unity Learn 把 URP 设置、实时/烘焙光照、Shader Graph、VFX Graph 与后期处理串成一套收藏，是 Unity 6 视觉质量的上手地图。比起零散看博客，官方集合能少走弯路。",
      "source": "官方文档/教程（一手）",
      "date": "2026-11-12",
      "url": "https://learn.unity.com/collection/make-your-game-look-great",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "Unity Learn《Make your game look great》集合：从 URP 到灯光、Shader Graph、VFX 与后期",
        "教程",
        "一手"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "官方一手教程",
            "可对照练习"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "教程的价值不在「抄出效果」，而在「搞懂为什么」；基础打牢，后面调视觉与玩法才有底气。"
        }
      ],
      "image": ""
    },
    {
      "id": "tu-learnopengl",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·基础",
      "tag": "LearnOpenGL 的 Hello Triangle：用最小可运行例子讲清顶点/着色器/绘制循环",
      "title": "LearnOpenGL：从 Hello Triangle 学起",
      "summary": "LearnOpenGL 用「画一个三角」把 OpenGL 的上下文、着色器编译与绘制循环讲透，是图形学自学最稳的起点。想自己写软渲染器，这里先打底。",
      "source": "官方文档/教程（一手）",
      "date": "2026-11-12",
      "url": "https://learnopengl.com/Getting-started/Hello-Triangle",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "LearnOpenGL 的 Hello Triangle：用最小可运行例子讲清顶点/着色器/绘制循环",
        "教程",
        "一手"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "官方一手教程",
            "可对照练习"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "教程的价值不在「抄出效果」，而在「搞懂为什么」；基础打牢，后面调视觉与玩法才有底气。"
        }
      ],
      "image": ""
    },
    {
      "id": "tu-godotdocs",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·基础",
      "tag": "Godot 官方文档 About：场景、节点与脚本心智模型",
      "title": "Godot 官方文档：入门导览",
      "summary": "Godot 官方入门文档把「场景即节点树、脚本即行为」的心智模型讲清楚，零基础也能顺着例子跑起来。想用轻量引擎快速做原型，文档比视频更省时。",
      "source": "官方文档/教程（一手）",
      "date": "2026-11-12",
      "url": "https://docs.godotengine.org/en/stable/about/introduction.html",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "Godot 官方文档 About：场景、节点与脚本心智模型",
        "教程",
        "一手"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "官方一手教程",
            "可对照练习"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "教程的价值不在「抄出效果」，而在「搞懂为什么」；基础打牢，后面调视觉与玩法才有底气。"
        }
      ],
      "image": ""
    },
    {
      "id": "tu-phaser",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·基础",
      "tag": "Phaser 官方教程：从空白画布到可玩横版小游戏",
      "title": "Phaser：做出你的第一个 Phaser 游戏",
      "summary": "Phaser 的「第一个 Phaser 游戏」教程一步步带你搭出可玩的横版 demo，覆盖精灵、物理与输入。做网页小游戏，这是最直接的起点。",
      "source": "官方文档/教程（一手）",
      "date": "2026-11-12",
      "url": "https://phaser.io/tutorials/making-your-first-phaser-game",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "Phaser 官方教程：从空白画布到可玩横版小游戏",
        "教程",
        "一手"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "官方一手教程",
            "可对照练习"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "教程的价值不在「抄出效果」，而在「搞懂为什么」；基础打牢，后面调视觉与玩法才有底气。"
        }
      ],
      "image": ""
    },
    {
      "id": "tu-gdquest",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·基础",
      "tag": "GDQuest 的 learn-gdscript：在浏览器里边练边学 Godot 脚本",
      "title": "GDQuest：交互式 GDScript 课程",
      "summary": "GDQuest 把 GDScript 做成可交互的在线课程，边读边在浏览器跑，零安装门槛。配合 Godot 文档，新手两天就能写出小机制。",
      "source": "官方文档/教程（一手）",
      "date": "2026-11-12",
      "url": "https://gdquest.github.io/learn-gdscript",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "GDQuest 的 learn-gdscript：在浏览器里边练边学 Godot 脚本",
        "教程",
        "一手"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "官方一手教程",
            "可对照练习"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "教程的价值不在「抄出效果」，而在「搞懂为什么」；基础打牢，后面调视觉与玩法才有底气。"
        }
      ],
      "image": ""
    },
    {
      "id": "ai-minimax",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "MiniMax 开放 H3-Image 权重：文本/参考图生图，10 秒内生成 4096×4096",
      "title": "MiniMax 开源 H3-Image：10 秒出 4K 图",
      "summary": "MiniMax 发布并开源 H3-Image 图像模型，支持文生图、参考生图与图像编辑，10 秒内出 4K（4096²）图，最多接 16 张参考图，且开源权重。对做角色概念、关卡透视草图的小团队，这是可本地/API 接入的实用工具。",
      "source": "官方博客/社区（一手）",
      "date": "2026-11-12",
      "url": "https://www.minimax.io/blog/minimax-h3-image",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "MiniMax 开放 H3-Image 权重：文本/参考图生图，10 秒内生成 4096×4096",
        "AI",
        "游戏开发"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "AI 工具新动态",
            "一手来源可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "AI 进游戏生产链已成定局；判断标准应是「能否进管线、可否复现、版权是否清晰」，而不是追新概念。"
        }
      ],
      "image": "https://file.cdn.minimax.io/public/h3-image-cover-1794323228475.jpg?x-oss-process=image/format,webp"
    },
    {
      "id": "ai-kimi",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "Kimi 接入 Unity / 虚幻 / Blender：K3.1 + Code/Work 双智能体改写工程",
      "title": "月之暗面发布 Kimi 游戏工程方案",
      "summary": "月之暗面 11 月 2 日公布基于 Kimi K3.1 的游戏开发与创意方案，用 Kimi Code 与 Kimi Work 两个智能体直连 Unity、虚幻引擎与 Blender，可梳理代码结构、改场景、出可运行工程并保留 diff。演示中无人值守 20 小时复现了一款游戏。",
      "source": "官方博客/社区（一手）",
      "date": "2026-11-12",
      "url": "https://aiproducthub.cn/newsflash/kimi-launches-game-development-solution-unity-unreal-engine",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Kimi 接入 Unity / 虚幻 / Blender：K3.1 + Code/Work 双智能体改写工程",
        "AI",
        "游戏开发"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "AI 工具新动态",
            "一手来源可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "AI 进游戏生产链已成定局；判断标准应是「能否进管线、可否复现、版权是否清晰」，而不是追新概念。"
        }
      ],
      "image": "https://aiproducthub.cn/wp-content/uploads/2026/07/1784874710-20260724-142030.webp"
    },
    {
      "id": "ai-roblox",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "Roblox Studio Beta 加入提示词动画：文字生成 R15 片段、R6 转 R15",
      "title": "Roblox Studio 开测 Prompt to Animation",
      "summary": "Roblox 于 11 月 5 日在 Studio Beta 放出 Prompt to Animation 与 Motion Rebuilder：用提示词生成 R15 动画、把旧 R6 片段转成 R15。对不会手 K 帧的创作者，这是把想法快速变成可放角色动作的途径，但需手动校验循环与位移。",
      "source": "官方博客/社区（一手）",
      "date": "2026-11-12",
      "url": "https://www.nocapmocap.com/blog/roblox-prompt-to-animation-vs-nocapmocap",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Roblox Studio Beta 加入提示词动画：文字生成 R15 片段、R6 转 R15",
        "AI",
        "游戏开发"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "AI 工具新动态",
            "一手来源可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "AI 进游戏生产链已成定局；判断标准应是「能否进管线、可否复现、版权是否清晰」，而不是追新概念。"
        }
      ],
      "image": "https://www.nocapmocap.com/blog/thumbnails/roblox-prompt-to-animation-vs-nocapmocap/walk-test-cover.jpg"
    },
    {
      "id": "ai-gemini38tts",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "Gemini 3.8 TTS：一句话生成多语言、可调控情绪的游戏语音",
      "title": "Google 推出 Gemini 3.8 文本转语音",
      "summary": "Google 推出 Gemini 3.8 文本转语音能力，支持多语言、可调情绪与语速，能为角色快速产出对白与旁白。对独立团队，这意味着「先有声音、再做打磨」的预制作门槛被进一步拉低——预告片、可玩 demo 的临时配音都能即时生成，再交由真人润色。",
      "source": "官方博客/社区（一手）",
      "date": "2026-11-12",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/gemini-3-8-text-to-speech/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Gemini 3.8 TTS：一句话生成多语言、可调控情绪的游戏语音",
        "AI",
        "游戏开发"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "AI 工具新动态",
            "一手来源可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "AI 进游戏生产链已成定局；判断标准应是「能否进管线、可否复现、版权是否清晰」，而不是追新概念。"
        }
      ],
      "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini-audio__keyword__metacard__light.width-1300.png"
    },
    {
      "id": "ai-comfy044",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "ComfyUI 0.44 发布：内置 MiniMax H3 Max 视频剪辑节点",
      "title": "ComfyUI 0.44 加入 MiniMax H3 视频编辑节点",
      "summary": "ComfyUI 0.44 引入 MiniMax H3 Max 视频编辑节点，可改演员、画幅、时长与镜头运动，方便把游戏预告片段改出多平台版本。节点式管线最值钱的不是出一张图，而是能反复跑、可复现。",
      "source": "官方博客/社区（一手）",
      "date": "2026-11-12",
      "url": "https://github.com/comfyanonymous/ComfyUI/releases",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "ComfyUI 0.44 发布：内置 MiniMax H3 Max 视频剪辑节点",
        "AI",
        "游戏开发"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "AI 工具新动态",
            "一手来源可核对"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "AI 进游戏生产链已成定局；判断标准应是「能否进管线、可否复现、版权是否清晰」，而不是追新概念。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/comfyanonymous/ComfyUI"
    },
    {
      "id": "co-netease-game",
      "category": "contest",
      "categoryName": "竞赛招聘",
      "subcategory": "竞赛·高校",
      "tag": "网易高校游戏赛事：面向大学生的游戏创作赛道",
      "title": "网易高校游戏赛事",
      "summary": "网易高校游戏赛事为大学生提供从立项到作品展示的游戏创作舞台，覆盖策划、美术与程序协作。对想攒作品集的在校生，这是把课程作业升级成可展示项目的机会。",
      "source": "官方赛事/招聘页（一手）",
      "date": "2026-11-12",
      "url": "https://game.academy.163.com/activity",
      "readTime": "4 分钟",
      "hotScore": 79,
      "tags": [
        "网易高校游戏赛事：面向大学生的游戏创作赛道",
        "大学生",
        "赛事"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "面向大学生的赛事/招聘",
            "节点以官方页为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "赛事与招聘都是「用作品说话」的场合；提前备好可玩 demo 与复盘，比临时抱佛脚更稳。"
        }
      ],
      "image": ""
    },
    {
      "id": "co-jsjds",
      "category": "contest",
      "categoryName": "竞赛招聘",
      "subcategory": "竞赛·高校",
      "tag": "计算机设计大赛数媒动漫与游戏赛道：4A 类学科竞赛",
      "title": "中国大学生计算机设计大赛·数媒动漫与游戏",
      "summary": "中国大学生计算机设计大赛设数媒动漫与游戏赛道，属高校认可度较高的 4A 类学科竞赛。对计算机/数字媒体方向学生，它是验证工程与创意综合能力的正式入口。",
      "source": "官方赛事/招聘页（一手）",
      "date": "2026-11-12",
      "url": "https://jsjds.blcu.edu.cn/",
      "readTime": "4 分钟",
      "hotScore": 79,
      "tags": [
        "计算机设计大赛数媒动漫与游戏赛道：4A 类学科竞赛",
        "大学生",
        "赛事"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "面向大学生的赛事/招聘",
            "节点以官方页为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "赛事与招聘都是「用作品说话」的场合；提前备好可玩 demo 与复盘，比临时抱佛脚更稳。"
        }
      ],
      "image": ""
    },
    {
      "id": "co-recruit",
      "category": "contest",
      "categoryName": "竞赛招聘",
      "subcategory": "招聘·社招",
      "tag": "网易游戏招聘：客户端/引擎/策划等研发岗常态化开放",
      "title": "网易游戏招聘（研发岗持续开放）",
      "summary": "网易游戏招聘持续开放研发类岗位，涵盖客户端、引擎、策划与运营方向。对中大型项目的练级需求，常态化招聘比校招更看项目匹配度，日常维护一份能讲清「做了啥」的作品集最实在。",
      "source": "官方赛事/招聘页（一手）",
      "date": "2026-11-12",
      "url": "https://hr.163.com/",
      "readTime": "4 分钟",
      "hotScore": 79,
      "tags": [
        "网易游戏招聘：客户端/引擎/策划等研发岗常态化开放",
        "大学生",
        "招聘"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "面向大学生的赛事/招聘",
            "节点以官方页为准"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "赛事与招聘都是「用作品说话」的场合；提前备好可玩 demo 与复盘，比临时抱佛脚更稳。"
        }
      ],
      "image": ""
    }
  ]
};
