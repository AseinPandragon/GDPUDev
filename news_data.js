window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-09",
    "weekday": "星期一",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-09 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "Monster Train 2 11/10 登陆 Steam：牌组构筑 Roguelike 续作",
      "AI 游戏平台混战：Kimi 方案 / 腾讯游点灵 / Anthropic 限克隆",
      "引擎观察：Flax / rbfx / Hyperion / doriax / Lumina / Pulsar",
      "开源宝库：raylib / stb / glTF / DirectXTK / Bullet / Vulkan-Samples",
      "行业风向：Unity 250 亿私有化传闻 / BioWare 落幕 / Steam 审核收紧"
    ],
    "engineStatus": [
      {
        "name": "Flax Engine",
        "type": "flax",
        "status": "C++/C# 双语言",
        "badge": "开源引擎",
        "color": "blue"
      },
      {
        "name": "rbfx",
        "type": "rbfx",
        "status": "Urho3D C++17 分支",
        "badge": "轻量引擎",
        "color": "cyan"
      },
      {
        "name": "Hyperion",
        "type": "hyperion",
        "status": "Vulkan/DX12",
        "badge": "渲染引擎",
        "color": "violet"
      },
      {
        "name": "doriax",
        "type": "doriax",
        "status": "ECS 数据导向",
        "badge": "现代引擎",
        "color": "emerald"
      },
      {
        "name": "Lumina",
        "type": "lumina",
        "status": "多线程 Vulkan",
        "badge": "C++ 引擎",
        "color": "orange"
      },
      {
        "name": "Pulsar",
        "type": "pulsar",
        "status": "Rust 重写",
        "badge": "下一代",
        "color": "red"
      }
    ]
  },
  "hero": {
    "id": "ga-monstertrain2-hero",
    "category": "games",
    "categoryName": "热门游戏",
    "tag": "Monster Train 2",
    "title": "Monster Train 2 11 月 10 日登陆 Steam：牌组构筑 Roguelike 续作",
    "summary": "笔者观察到，《Monster Train 2》作为人气牌组构筑 Roguelike 的续作，将于 11 月 10 日登陆 Steam；前作以「多层列车防御 + 卡牌构筑」的组合在品类里站稳脚跟，续作能否在保留核心循环的同时拓展策略深度，是系列老玩家最关心的点。",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2742830/header.jpg",
    "source": "Steam 商店页（一手）",
    "date": "2026-11-09",
    "url": "https://store.steampowered.com/app/2742830/",
    "readTime": "5 分钟",
    "hotScore": 94,
    "tags": [
      "Monster Train 2",
      "牌组构筑",
      "Roguelike"
    ],
    "content": [
      {
        "title": "本次要点",
        "type": "list",
        "items": [
          "11/10 登陆 Steam",
          "牌组构筑 + 多层防御",
          "续作策略拓展"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "它和《杀戮尖塔》系作品共同把「卡牌 Roguelike」证明为长青品类；对独立团队而言，这类强系统、弱美术的玩法，是「用小预算做出高重玩」的示范。"
      }
    ]
  },
  "items": [
    {
      "id": "en-flax",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·跨端",
      "tag": "Flax Engine",
      "title": "Flax Engine 用 C++/C# 双语言内核把 3D 游戏开发门槛再压低",
      "summary": "笔者观察到，Flax Engine 走的是「C++ 高性能内核 + C# 脚本」的现代路线，自带 WYSIWYG 编辑器，对中小团队很友好；它不像商业引擎那样绑定生态，却把跨平台 3D 管线讲得很清楚。",
      "image": "https://opengraph.githubassets.com/1/FlaxEngine/FlaxEngine",
      "source": "FlaxEngine 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/FlaxEngine/FlaxEngine",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "Flax",
        "C# 引擎",
        "开源引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "C++/C# 双语言脚本",
            "可视化编辑器 WYSIWYG",
            "跨平台 3D 渲染管线"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它和 Unity 的 C# 路线形成对照，又比纯 C++ 引擎更易上手；对想脱离大厂引擎、保留自主权的团队，是值得长期观察的样本。"
        }
      ]
    },
    {
      "id": "en-rbfx",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "rbfx",
      "title": "rbfx 基于 Urho3D 打磨出带可视化编辑器的轻量 C++17 引擎",
      "summary": "笔者观察到，rbfx 是 Urho3D 的活跃分支，把老牌开源引擎推进到 C++17 并补上了可视化编辑器，目标是「轻量却完整」，适合做嵌入式/教育或自研基底。",
      "image": "https://opengraph.githubassets.com/1/rbfx/rbfx",
      "source": "rbfx 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/rbfx/rbfx",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": [
        "rbfx",
        "Urho3D",
        "C++ 引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "C++17 实现",
            "自带 WYSIWYG 编辑器",
            "实验性 C# 绑定"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "作为 Urho3D 的精神续作，它证明老引擎靠社区也能续命；想读源码学引擎架构，它比动辄百万行的商业引擎友好得多。"
        }
      ]
    },
    {
      "id": "en-hyperion",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·渲染",
      "tag": "Hyperion Engine",
      "title": "HyperionEngine 用 Vulkan/DX12 双后端押注高性能渲染",
      "summary": "笔者观察到，HyperionEngine 直接在 C++ 与 C# 上做 Vulkan 和 DX12 双后端，明确瞄准高性能渲染与主机级画质，是「自己造轮子」派的高完成度样本。",
      "image": "https://opengraph.githubassets.com/1/HyperionGameTech/HyperionEngine",
      "source": "HyperionGameTech 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/HyperionGameTech/HyperionEngine",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "Hyperion",
        "Vulkan",
        "DX12"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Vulkan / DX12 双后端",
            "C++ 与 C# 混合",
            "面向高性能渲染"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它提醒我们：现代渲染后端的学习价值很高，但工程量也极大；个人开发者更应把它当教材而非生产基座。"
        }
      ]
    },
    {
      "id": "en-doriax",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·ECS",
      "tag": "doriax",
      "title": "doriax 以 ECS + 数据导向重写 2D/3D 引擎",
      "summary": "笔者观察到，doriax 强调 ECS 与数据导向设计，把 2D/3D 统一在同一套组件系统里，契合当下「缓存友好、并行友好」的引擎思潮。",
      "image": "https://opengraph.githubassets.com/1/doriaxengine/doriax",
      "source": "doriaxengine 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/doriaxengine/doriax",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "doriax",
        "ECS",
        "数据导向"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "ECS 架构",
            "2D/3D 统一",
            "数据导向设计"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "ECS 虽学习曲线陡，却最贴近 AAA 与大型项目的真实结构；从这类项目读起，比直接啃商业引擎源码更聚焦。"
        }
      ]
    },
    {
      "id": "en-lumina",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "Lumina Engine",
      "title": "LuminaEngine 用多线程 Vulkan 渲染打磨现代 C++ 引擎",
      "summary": "笔者观察到，LuminaEngine 是较完整的现代 C++ 引擎样本，主打多线程与 Vulkan 渲染，代码组织清晰，适合想系统理解「渲染提交 + 任务并行」的开发者。",
      "image": "https://opengraph.githubassets.com/1/MrDrElliot/LuminaEngine",
      "source": "MrDrElliot 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/MrDrElliot/LuminaEngine",
      "readTime": "8 分钟",
      "hotScore": 81,
      "tags": [
        "Lumina",
        "Vulkan",
        "多线程"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "现代 C++ 实现",
            "多线程渲染",
            "Vulkan 后端"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它把引擎的「调度与渲染分离」讲得很实在，是进阶学习者练手多线程管线的好素材。"
        }
      ]
    },
    {
      "id": "en-pulsar",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Rust",
      "tag": "Pulsar-Native",
      "title": "Pulsar-Native 用 Rust 重写下一代引擎的尝试",
      "summary": "笔者观察到，Pulsar-Native 是用 Rust 从零构建游戏引擎的项目，借 Rust 的内存安全与无畏并发，探索「下一代引擎」的另一种工程答案。",
      "image": "https://opengraph.githubassets.com/1/Far-Beyond-Pulsar/Pulsar-Native",
      "source": "Far-Beyond-Pulsar 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/Far-Beyond-Pulsar/Pulsar-Native",
      "readTime": "8 分钟",
      "hotScore": 80,
      "tags": [
        "Pulsar",
        "Rust",
        "下一代引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Rust 实现",
            "安全内存模型",
            "跨平台目标"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Rust 进游戏引擎仍属早期，但它在工具链与底层库上的长势很快；想押注未来技术栈，这类项目值得提前跟踪。"
        }
      ]
    },
    {
      "id": "os-raylib",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·C",
      "tag": "raylib",
      "title": "raylib 用单文件风格把 C 语言游戏编程门槛降到最低",
      "summary": "笔者观察到，raylib 把图形、音频、输入等常用能力收进一组极简 API，几乎零依赖、跨平台，是入门游戏编程与做原型最省心的 C 库之一。",
      "image": "https://opengraph.githubassets.com/1/raysan5/raylib",
      "source": "raysan5 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/raysan5/raylib",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "raylib",
        "C 语言",
        "原型"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "单文件风格 API",
            "跨平台零依赖",
            "大量示例"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它把「先做出能跑的东西」这件事变得极其简单，非常适合教学与 Game Jam 快速出活。"
        }
      ]
    },
    {
      "id": "os-stb",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·C/C++",
      "tag": "stb",
      "title": "stb 系列单文件库仍是做游戏工具链最省心的底层依赖",
      "summary": "笔者观察到，stb 把图像加载、字体、噪声等常用功能做成「一个头文件搞定」的库，几乎成了 C/C++ 游戏工具链的隐性标准件。",
      "image": "https://opengraph.githubassets.com/1/nothings/stb",
      "source": "nothings 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/nothings/stb",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "stb",
        "单文件库",
        "底层依赖"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "按需 include 的头文件",
            "覆盖图像/字体/噪声",
            "无链接负担"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它不炫技却极实用：很多引擎和工具背后都悄悄用了 stb，是理解「最小可用依赖」的典范。"
        }
      ]
    },
    {
      "id": "os-gltf",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "格式·标准",
      "tag": "glTF",
      "title": "glTF 作为运行时 3D 资产标准正成为引擎互操作的事实格式",
      "summary": "笔者观察到，glTF 由 Khronos 主导，定位「3D 的 JPEG」，在 DCC 工具、引擎与运行时之间承担了通用资产格式的角色，是做资产管线的必学标准。",
      "image": "https://opengraph.githubassets.com/1/KhronosGroup/glTF",
      "source": "KhronosGroup 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/KhronosGroup/glTF",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "glTF",
        "3D 标准",
        "资产互操作"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "运行时 3D 资产格式",
            "跨工具互通",
            "Khronos 主导"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "掌握 glTF 等于掌握资产从美术到引擎的通用通道，比死磕某个引擎私有格式更通用。"
        }
      ]
    },
    {
      "id": "os-directxtk",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·C++",
      "tag": "DirectXTK",
      "title": "DirectX Tool Kit 仍是 Windows 游戏 C++ 开发的趁手工具箱",
      "summary": "笔者观察到，DirectXTK 把 SpriteBatch、音频、输入等常用封装收进一组 helper，让原生 DirectX 开发不再从零写样板，是 Windows 端 C++ 游戏的老牌助力。",
      "image": "https://opengraph.githubassets.com/1/microsoft/DirectXTK",
      "source": "microsoft 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/microsoft/DirectXTK",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "DirectXTK",
        "DirectX",
        "Windows"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "SpriteBatch / 音频 / 输入封装",
            "微软官方维护",
            "降低 DX 样板"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "在 UWP / Win32 原生路线里它依旧好用，是「不想上大引擎但要写 DX」时的减负工具。"
        }
      ]
    },
    {
      "id": "os-bullet",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "物理·仿真",
      "tag": "Bullet",
      "title": "Bullet 物理引擎在开源刚体/软体仿真里依旧是老牌主力",
      "summary": "笔者观察到，Bullet 是久经考验的开源物理引擎，覆盖刚体、软体与碰撞，被大量引擎和工具集成，是做可交互物理世界的稳妥底座。",
      "image": "https://opengraph.githubassets.com/1/bulletphysics/bullet3",
      "source": "bulletphysics 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/bulletphysics/bullet3",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": [
        "Bullet",
        "物理引擎",
        "仿真"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "刚体/软体仿真",
            "广泛被集成",
            "久经考验"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它提醒我们：物理是游戏的「手感地基」，自研成本高，先用成熟开源方案验证玩法更划算。"
        }
      ]
    },
    {
      "id": "os-vulkansamples",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "图形·Vulkan",
      "tag": "Vulkan-Samples",
      "title": "Vulkan-Samples 是啃下 Vulkan 的最佳官方示例库",
      "summary": "笔者观察到，Vulkan-Samples 由 Khronos 官方维护，把同步、渲染管线、计算等难点拆成可运行的小例子，是跨过 Vulkan 陡峭学习曲线的首选阶梯。",
      "image": "https://opengraph.githubassets.com/1/KhronosGroup/Vulkan-Samples",
      "source": "KhronosGroup 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/KhronosGroup/Vulkan-Samples",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "Vulkan",
        "示例库",
        "图形"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "官方维护",
            "小而全的示例",
            "覆盖同步/管线/计算"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "想从 OpenGL 升级到现代显式 API，这套示例比文档更直观，建议配合 renderdoc 一起读。"
        }
      ]
    },
    {
      "id": "tu-webgamedev",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Web",
      "tag": "Web 游戏开发",
      "title": "用 Web 技术做游戏：一份从零到上线的学习路线",
      "summary": "笔者观察到，这份开源路线把 HTML5 Canvas、WebGL 到打包上线串成一条清晰路径，特别适合想用前端技能跨界做游戏的开发者。",
      "image": "https://opengraph.githubassets.com/1/verekia/webgamedev",
      "source": "verekia 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/verekia/webgamedev",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Web 游戏",
        "Canvas",
        "WebGL"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "从 Canvas 到 WebGL",
            "部署与上线",
            "免费开源"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Web 游戏试错成本最低，浏览器即运行环境；把它当入门第一站，能最快获得「做出能玩的东西」的正反馈。"
        }
      ]
    },
    {
      "id": "tu-gbasm",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·汇编",
      "tag": "Game Boy 汇编",
      "title": "用汇编在 Game Boy 上做游戏：硬核但透彻的入门",
      "summary": "笔者观察到，这份 Game Boy 汇编教程从寄存器、显存到精灵逐层拆解，虽然硬核，却是理解「硬件如何变成游戏」最扎实的入门路径之一。",
      "image": "https://opengraph.githubassets.com/1/gbdev/gb-asm-tutorial",
      "source": "gbdev 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/gbdev/gb-asm-tutorial",
      "readTime": "8 分钟",
      "hotScore": 82,
      "tags": [
        "Game Boy",
        "汇编",
        "复古"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "寄存器/显存/精灵拆解",
            "复古开发思维",
            "免费教程"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它逼你理解每一帧、每一个字节，这种「贴着硬件思考」的训练，对理解现代引擎的抽象极有帮助。"
        }
      ]
    },
    {
      "id": "tu-olc",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·C++",
      "tag": "olcPixelGameEngine",
      "title": "olcPixelGameEngine 单文件引擎：边读源码边学 C++ 游戏循环",
      "summary": "笔者观察到，olcPixelGameEngine 把窗口、输入、绘制收进一个头文件，配合作者的教学视频，是理解「游戏主循环 + 绘制」最轻量的 C++ 切入点。",
      "image": "https://opengraph.githubassets.com/1/OneLoneCoder/olcPixelGameEngine",
      "source": "OneLoneCoder 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/OneLoneCoder/olcPixelGameEngine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "olcPixelGameEngine",
        "C++",
        "游戏循环"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "单头文件引擎",
            "配套教学视频",
            "快速出原型"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "边读源码边敲，比纯理论更易建立直觉；想学 C++ 又想立刻看到画面，这是性价比很高的路径。"
        }
      ]
    },
    {
      "id": "tu-c64",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·汇编",
      "tag": "C64 编程",
      "title": "C64 汇编 59 课：从复古机器学底层编程思维",
      "summary": "笔者观察到，这套 59 课用 Commodore 64 带你从零学 6502 汇编，难度不低，却把「程序如何驱动硬件」讲得极其具体，是锻炼底层思维的稀有资源。",
      "image": "https://opengraph.githubassets.com/1/keremaktug/c64programming",
      "source": "keremaktug 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/keremaktug/c64programming",
      "readTime": "8 分钟",
      "hotScore": 80,
      "tags": [
        "C64",
        "6502",
        "汇编"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "59 节系统课程",
            "6502 汇编入门",
            "底层思维训练"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "在高级语言时代，这种「回到裸机」的训练能帮你真正看懂性能与内存，而非只会调 API。"
        }
      ]
    },
    {
      "id": "tu-tinyrenderer",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·渲染",
      "tag": "tinyrenderer",
      "title": "tinyrenderer：从零写光栅器理解实时渲染数学",
      "summary": "笔者观察到，tinyrenderer 用极简 C++ 从零实现软件光栅器，把矩阵变换、三角形插值、深度测试讲透，是理解 GPU 渲染原理最经典的小项目。",
      "image": "https://opengraph.githubassets.com/1/ssloy/tinyrenderer",
      "source": "ssloy 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/ssloy/tinyrenderer",
      "readTime": "9 分钟",
      "hotScore": 85,
      "tags": [
        "tinyrenderer",
        "光栅化",
        "渲染数学"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "从零实现光栅器",
            "覆盖矩阵/插值/深度",
            "经典教学项目"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "读懂它，再看 Unity/Unreal 的渲染管线会轻松很多——底层原理从来不过时。"
        }
      ]
    },
    {
      "id": "tu-mdn",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Web",
      "tag": "MDN 游戏开发",
      "title": "MDN 游戏开发区：Web 游戏入门的权威一站",
      "summary": "笔者观察到，MDN 的游戏开发区把 Web 游戏的核心概念、API 与示例系统化整理，是英文世界里最权威、最稳定的免费入门入口之一。",
      "image": "https://developer.mozilla.org/mdn-social-image.46ac2375.png",
      "source": "MDN Web Docs（一手）",
      "date": "2026-11-09",
      "url": "https://developer.mozilla.org/en-US/docs/Games",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "MDN",
        "Web 游戏",
        "免费文档"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "系统化的概念与示例",
            "权威免费文档",
            "覆盖 2D/3D/音频"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "遇到 Web 游戏的具体 API 疑惑，先查 MDN 几乎总能找到可靠答案，比零散博客稳得多。"
        }
      ]
    },
    {
      "id": "ai-minestudio",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·智能体",
      "tag": "MineStudio",
      "title": "MineStudio：把《我的世界》变成 AI 智能体训练场",
      "summary": "笔者观察到，MineStudio 是一套面向《我的世界》AI 智能体开发的流式工具包，把环境、数据采集与训练串起来，让研究者能低成本在开放沙盒里做决策智能体实验。",
      "image": "https://opengraph.githubassets.com/1/CraftJarvis/MineStudio",
      "source": "CraftJarvis 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/CraftJarvis/MineStudio",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": [
        "MineStudio",
        "Minecraft",
        "AI 智能体"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "面向 MC 的 Agent 工具包",
            "环境 + 数据 + 训练一体化",
            "开源可复现"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它把「游戏即训练环境」这件事工具化，是强化学习/世界模型研究的高性价比入口。"
        }
      ]
    },
    {
      "id": "ai-craftbuddy",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·创作平台",
      "tag": "游点灵 CraftBuddy",
      "title": "腾讯「游点灵 CraftBuddy」开放：自然语言生成可玩游戏雏形",
      "summary": "笔者观察到，腾讯的 AI 游戏创作工具 CraftBuddy 已开放体验，主打用自然语言生成含玩法、场景、角色与音效的 2D/3D 可玩雏形，并可一键导出到 Unity 等引擎。",
      "image": "https://aiproducthub.cn/wp-content/uploads/2026/07/1784874710-20260724-142030.webp",
      "source": "AI产品库 newsflash（二手报道）",
      "date": "2026-11-09",
      "url": "https://aiproducthub.cn/newsflash/tencent-craftbuddy-ai-game-platforms-as-google-unity-and-roblox-push-in",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "腾讯",
        "AI 游戏平台",
        "自然语言生成"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "自然语言生成可玩雏形",
            "覆盖玩法/场景/角色/音效",
            "可导出主流引擎"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大厂集体下场做 AI 游戏平台，说明「降低创作门槛」已成共识；它对非技术创作者的吸引力，值得持续观察。"
        }
      ]
    },
    {
      "id": "ai-anthropic",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·治理",
      "tag": "Claude 限克隆",
      "title": "Anthropic 给 Claude Code 加规则：禁止复刻他人具体游戏",
      "summary": "笔者观察到，Anthropic 在 Opus 5.5 的 Claude Code 提示中加入了明确规则：允许做原创、同品类或自有素材的游戏，但禁止复刻某个具体已有游戏（即便改名），以回避 IP 侵权风险。",
      "image": "https://rrtechpulse.com/_img/media/stories/claude-code-refuses-clone-existing-games/hero-16x9.jpg",
      "source": "rrtechpulse（二手报道）",
      "date": "2026-11-09",
      "url": "https://rrtechpulse.com/stories/claude-code-refuses-clone-existing-games",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Anthropic",
        "Claude Code",
        "AI 治理"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "允许原创/同品类/自有素材",
            "禁止复刻具体游戏",
            "回应独立开发者担忧"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这是 AI 编码工具首次对「游戏克隆」亮明边界，对独立开发者是利好；但开源权重模型能否同样自律，仍是未知数。"
        }
      ]
    },
    {
      "id": "ai-lgui",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·UI",
      "tag": "LGUI",
      "title": "LGUI：面向 AI 智能体的游戏 UI 框架",
      "summary": "笔者观察到，LGUI 把游戏 UI 的界面、逻辑与测试做成可被 AI 智能体操作的框架，瞄准「让 Agent 也能搭 UI」的新方向，是 AI 与游戏工程结合的有趣样本。",
      "image": "https://opengraph.githubassets.com/1/LumioGames/LGUI",
      "source": "LumioGames 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/LumioGames/LGUI",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "LGUI",
        "AI 智能体",
        "游戏 UI"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "UI 由 Agent 构建",
            "界面/逻辑/测试一体化",
            "面向 AI 协作"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "当 Agent 能搭 UI，游戏生产的「最后一公里」会被重新定义；这类框架现在虽早，却指明了协作形态。"
        }
      ]
    },
    {
      "id": "ai-llmnpc",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·NPC",
      "tag": "LLM NPC",
      "title": "开源项目把 LLM 接进 NPC：让 NPC 真的会对话",
      "summary": "笔者观察到，Interactive LLM-Powered NPCs 这类开源项目把大语言模型接入游戏角色，让 NPC 基于上下文生成对话，而非播放固定台词，是「活的 NPC」的低成本尝试。",
      "image": "https://opengraph.githubassets.com/1/AkshitIreddy/Interactive-LLM-Powered-NPCs",
      "source": "AkshitIreddy 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/AkshitIreddy/Interactive-LLM-Powered-NPCs",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": [
        "LLM",
        "NPC",
        "对话 AI"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "LLM 驱动上下文对话",
            "开源可本地跑",
            "替代固定台词"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它把「角色会聊天」变得平民化；瓶颈在延迟、成本与角色一致性，落地仍需谨慎设计。"
        }
      ]
    },
    {
      "id": "ai-ultragame",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·智能体",
      "tag": "UltraGameStudio",
      "title": "UltraGameStudio：面向游戏开发的 AI 编码智能体",
      "summary": "笔者观察到，UltraGameStudio 把自己定位为「游戏开发专用的 AI 编码智能体」，覆盖引擎工作流、玩法实现到工程脚手架，反映 AI 正从插件走向「项目级协作者」。",
      "image": "https://opengraph.githubassets.com/1/wellingfeng/UltraGameStudio",
      "source": "wellingfeng 官方仓库（一手）",
      "date": "2026-11-09",
      "url": "https://github.com/wellingfeng/UltraGameStudio",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "AI 智能体",
        "编码助手",
        "游戏工作流"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "面向游戏开发的 Agent",
            "覆盖玩法/工程脚手架",
            "项目级协作"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "从「补全一行」到「接管一段工作流」，这类工具若可靠，会显著改变小团队的产能结构。"
        }
      ]
    },
    {
      "id": "ga-loftia",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "新作",
      "title": "Loftia 11 月 3 日抢先体验：和朋友一起经营浮空岛的温馨农场",
      "summary": "笔者观察到，Loftia 走的是多人合作农场经营路线，玩家在浮空岛上一起种田、建造与探索，是 11 月独立游戏里典型的「温馨向 + 联机」组合。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2320980/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-09",
      "url": "https://store.steampowered.com/app/2320980/",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Loftia",
        "经营模拟",
        "多人合作"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "浮空岛主题农场",
            "支持好友联机",
            "抢先体验 11/3"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它延续了 cozy 品类的高人气，证明「低压力、强社交」依旧是独立团队最稳的切入点之一。"
        }
      ]
    },
    {
      "id": "ga-blacksmith",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "新作",
      "title": "Blacksmith Master 11 月 19 日 1.0：铁匠模拟的硬核经营",
      "summary": "笔者观察到，Blacksmith Master 把铁匠铺经营做成模拟游戏，1.0 与 GTA6 同日发售，走的是「慢节奏硬核经营」而非流量路线，目标玩家更垂直。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2292800/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-09",
      "url": "https://store.steampowered.com/app/2292800/",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Blacksmith Master",
        "模拟经营",
        "1.0"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "铁匠铺经营模拟",
            "11/19 推出 1.0",
            "硬核经营向"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它和同日大作错峰，反而凸显了品类细分的价值：不拼体量，拼「把一件事做透」。"
        }
      ]
    },
    {
      "id": "ga-archeage",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "新作",
      "title": "ArcheAge Chronicles 11 月 3 日抢先体验：MMO 的开放世界回归",
      "summary": "笔者观察到，ArcheAge Chronicles 以开放世界 MMO 的姿态进入抢先体验，试图把沙盒生产与大规模 PvP 重新带回玩家视野，是 11 月体量较大的新作之一。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3218230/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-09",
      "url": "https://store.steampowered.com/app/3218230/",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "ArcheAge",
        "MMO",
        "开放世界"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开放世界 MMO",
            "抢先体验 11/3",
            "沙盒 + PvP"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "MMO 的回归说明玩家仍渴望持续运营的虚拟社会；抢先体验阶段更考验长期内容节奏。"
        }
      ]
    },
    {
      "id": "ga-airframe",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "新作",
      "title": "Airframe Ultra 11 月 5 日推出：街机空战的速度感",
      "summary": "笔者观察到，Airframe Ultra 主打街机式空战，强调纯粹的速度感与操作反馈，是 11 月里偏「爽快小品」的飞行射击新作。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2522120/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-09",
      "url": "https://store.steampowered.com/app/2522120/",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "Airframe Ultra",
        "飞行射击",
        "街机"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "街机式空战",
            "强调速度与手感",
            "11/5 推出"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它提醒我们：未必人人要做开放世界，把单一核心玩法打磨到「上头」同样能立足。"
        }
      ]
    },
    {
      "id": "ga-underkeep",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "新作",
      "title": "Underkeep 11 月 6 日推出：地牢经营与 Roguelike 的混搭",
      "summary": "笔者观察到，Underkeep 把地牢管理与 Roguelike 元素混搭，让玩家既经营据点又下场冒险，是系统融合型独立游戏的一次新尝试。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2411200/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-09",
      "url": "https://store.steampowered.com/app/2411200/",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Underkeep",
        "地牢经营",
        "Roguelike"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "据点经营 + Roguelike",
            "11/6 推出",
            "系统融合"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "混搭品类的风险在「两边都浅」，但做对了就是差异化的护城河。"
        }
      ]
    },
    {
      "id": "ga-9kings",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·新作",
      "tag": "新作",
      "title": "9 Kings 11 月 12 日 1.0：自走棋式的王国经营",
      "summary": "笔者观察到，9 Kings 用自走棋式的部署机制做王国经营，1.0 在 11 月中旬上线，是「策略 + 经营」轻量化表达的代表。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2784470/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-09",
      "url": "https://store.steampowered.com/app/2784470/",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "9 Kings",
        "自走棋",
        "王国经营"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "自走棋式部署",
            "王国经营模拟",
            "11/12 1.0"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它把宏观经营拆成可决策的回合，降低了策略门槛，适合喜欢动脑但不想被数值劝退的玩家。"
        }
      ]
    },
    {
      "id": "in-arkane",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购",
      "tag": "Arkane 竞购",
      "title": "育碧等竞购 Arkane Lyon：微软裁员潮下的工作室命运",
      "summary": "笔者观察到，在微软 Xbox 重组、约 4800 人裁员的背景下，曾开发《耻辱》《死亡循环》的 Arkane Lyon 被摆上货架，育碧等至少三家游戏公司提出收购，截止协商期一度延后，牵动 217 名员工去留。",
      "image": "https://x0.ifengimg.com/ucms/2026_45/675B9E3FEACC94A84DD36254C69D2161B1691672_size68_w726_h409.jpg",
      "source": "IT之家（二手报道）",
      "date": "2026-11-09",
      "url": "https://tech.ifeng.com/c/8xkZQaKMvsT",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "Arkane",
        "并购",
        "微软裁员"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "育碧等竞购 Arkane Lyon",
            "微软裁员背景",
            "约 217 名员工受影响"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这桩拉锯折射出大厂成本收缩与劳工权益的张力；对玩家而言，则关系《漫威刀锋战士》能否顺利做完。"
        }
      ]
    },
    {
      "id": "in-unity",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·资本",
      "tag": "Unity 私有化",
      "title": "沙特 PIF 联手银湖拟 250 亿美元私有化 Unity",
      "summary": "笔者观察到，据路透社报道，沙特公共投资基金（PIF）与银湖资本正洽谈以约 250 亿美元估值私有化收购 Unity；消息传出前 Unity 刚交出上市后首次 GAAP 盈利的季报，股价大涨。",
      "image": "https://static.invenglobal.com/upload/thumb/2026/11/06/c/n1793925478684943.jpg",
      "source": "Inven Global（二手报道）",
      "date": "2026-11-09",
      "url": "https://www.invenglobal.com/articles/28236/silver-lake-and-saudi-pif-hold-talks-to-buy-unity-at-about-25bn",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "Unity",
        "私有化",
        "PIF"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "PIF + 银湖拟 250 亿收购",
            "Unity 上市后首次 GAAP 盈利",
            "银湖已持股约 8%"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "继 8 月 550 亿美元吞下 EA 后，PIF 再瞄上底层开发工具，游戏产业资本集中度肉眼可见地上升。"
        }
      ]
    },
    {
      "id": "in-roundup",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·周报",
      "tag": "一周要闻",
      "title": "一周游戏业：BioWare 落幕、GTA6 放 38 张截图、PS 创纪录",
      "summary": "笔者观察到，过去一周游戏业波澜不断：EA 闭关 BioWare、PIF 吞 EA 后的整合余波、Rockstar 放出 38 张 GTA6 截图预热 11/19、索尼季度业绩创纪录——产业集中度与平台之争同时升温。",
      "image": "",
      "source": "ruocco.it（二手综述）",
      "date": "2026-11-09",
      "url": "https://ruocco.it/news/gaming-weekly-roundup-biowares-final-chapter-unity-buyout-talks-gta-6-screenshots-and-playstations-record-quarter",
      "readTime": "8 分钟",
      "hotScore": 85,
      "tags": [
        "BioWare",
        "GTA6",
        "周报"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "BioWare 关闭余波",
            "GTA6 38 张截图预热",
            "索尼季度创纪录"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把几条线放一起看：内容供给侧在收缩，平台与资本侧在扩张，独立团队夹缝里的空间更需精打细算。"
        }
      ]
    },
    {
      "id": "in-sony",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·财报",
      "tag": "索尼 PS",
      "title": "索尼 PS 季度报：PSN 月活 1.27 亿、PS5 累计近 9800 万",
      "summary": "笔者观察到，索尼 26-27 财年 Q2 财报显示 PSN 月活达 1.27 亿（同比 +800 万），PS5 累计出货近 9800 万台，《漫威金刚狼》销量破 240 万，数字版占比升至 78%。",
      "image": "https://onemoregame.ph/wp-content/uploads/2026/02/ps5-pro-pssr-2.jpg",
      "source": "One More Game（二手报道）",
      "date": "2026-11-09",
      "url": "https://onemoregame.ph/2026/11/ps5-sales-97-9-m-wolverine-2-4-million",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "索尼",
        "PS5",
        "财报"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "PSN 月活 1.27 亿",
            "PS5 累计近 9800 万",
            "数字版占比 78%"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "硬件见顶、软服走强是这一代的主旋律；GTA6 也被点名为上调预期的关键驱动。"
        }
      ]
    },
    {
      "id": "in-valve",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·平台",
      "tag": "Steam 审核",
      "title": "Steam 上调发布审核门槛：5 分钟实跑 + 云存档校验",
      "summary": "笔者观察到，Valve 在 11 月初更新了预发布审核清单，新增「用 Steam 实跑至少 5 分钟」「云存档须真实写入」「截图标注玩法」等要求，以缓解审核积压（最长已达 12 个工作日）。",
      "image": "https://automaton-media.com/en/wp-content/uploads/2026/11/20261104-74717-header.jpg",
      "source": "AUTOMATON（二手报道）",
      "date": "2026-11-09",
      "url": "https://automaton-media.com/en/news/valve-updates-conditions-for-submitting-game-builds-on-steam-amidst-rise-in-submissions-and-long-review-wait-times/",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "Valve",
        "Steam",
        "发布审核"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "新增 5 分钟实跑要求",
            "云存档 / 成就校验",
            "审核最长 12 个工作日"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这是平台对「AI 生成游戏泛滥 + 提交流量暴涨」的务实回应；中小团队务必把审核时间计入发行排期。"
        }
      ]
    },
    {
      "id": "in-nexus",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·AI 治理",
      "tag": "Nexus AI",
      "title": "Nexus Mods 强制披露 AI 使用：不封禁但要求透明",
      "summary": "笔者观察到，Nexus Mods 于 11 月 3 日生效新的生成式 AI 政策：按「AI 生成 / AI 媒体 / AI 辅助」分级强制披露，玩家可隐藏 AI 内容，AI 训练默认「先问作者」，但平台不全面封禁 AI 模组。",
      "image": "",
      "source": "Nexus Mods 帮助中心（一手）",
      "date": "2026-11-09",
      "url": "https://help.nexusmods.com/article/180-ai-policy-changes-2026",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Nexus Mods",
        "AI 披露",
        "模组"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "三级 AI 分类强制披露",
            "玩家可隐藏 AI 内容",
            "AI 训练默认 Ask Me"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「不封杀但强制透明」是比一刀切更成熟的治理思路；它把选择权交还玩家，也保护了人类创作者的署名。"
        }
      ]
    },
    {
      "id": "co-iggj",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "竞赛·GameJam",
      "tag": "赛事日历",
      "title": "Indie Game Jams 赛程日历：一处找齐独立游戏赛事",
      "summary": "笔者观察到，Indie Game Jams 把全球各类独立 Game Jam 汇成一份持续更新的赛程日历，从 Mini Jam、Ludum Dare 到各类主题 Jam 都能按时间检索，是找比赛、跟节奏的省心入口。",
      "image": "",
      "source": "Indie Game Jams（一手）",
      "date": "2026-11-09",
      "url": "https://www.indiegamejams.com/",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Game Jam",
        "赛事日历",
        "独立"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "汇总全球独立 Jam",
            "按时间检索",
            "主题多样"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对想持续参赛、攒作品集的开发者，把它设为常用站，比逐个记赛事日期高效得多。"
        }
      ]
    },
    {
      "id": "co-ldjam",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "竞赛·GameJam",
      "tag": "Ludum Dare",
      "title": "Ludum Dare 持续举办：找一场周末 48 小时 Game Jam",
      "summary": "笔者观察到，Ludum Dare 作为历史最久的在线 Game Jam 之一，保持约每四个月一场的节奏，主题公布后 48 小时（或加长版 72 小时）内完成作品并互评，是新手上路最友好的赛事。",
      "image": "",
      "source": "Ludum Dare 官网（一手）",
      "date": "2026-11-09",
      "url": "https://ldjam.com/",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Ludum Dare",
        "Game Jam",
        "在线"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "约每四个月一场",
            "48/72 小时赛制",
            "作品互评社区"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它几乎零门槛、全程线上，是验证「能否在限定时间做出完整循环」的最佳训练场。"
        }
      ]
    },
    {
      "id": "co-indienova",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "竞赛·独立",
      "tag": "indienova",
      "title": "indienova 的 BOOOM 暴造等独立游戏活动入口",
      "summary": "笔者观察到，indienova 长期运营 BOOOM 暴造等面向独立开发者的创作活动与赛事入口，提供选题、交流与曝光通道，是国内独立团队值得常驻的信息源。",
      "image": "",
      "source": "indienova 官网（一手）",
      "date": "2026-11-09",
      "url": "https://indienova.com/",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "indienova",
        "BOOOM",
        "独立游戏"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "BOOOM 暴造等活动",
            "面向独立开发者",
            "交流与曝光通道"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对想参赛、想被看见的国内团队，这类本土入口比纯海外赛事更接地气，建议设为常看。"
        }
      ]
    },
    {
      "id": "co-recruit",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "招聘·社招",
      "tag": "大厂校招",
      "title": "大厂 2027 校招陆续开启：关注散爆/完美世界等研发岗位",
      "summary": "笔者观察到，进入秋招尾声，多家游戏厂商的研发与美术校招/社招通道仍在线，散爆、完美世界等开放岗位覆盖程序、技术美术与策划；建议应届生以官方招聘页为准、勿信第三方代投。",
      "image": "",
      "source": "完美世界招聘页（一手）",
      "date": "2026-11-09",
      "url": "https://www.sunborngame.com/recruit",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "校招",
        "社招",
        "游戏研发"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "多家厂商岗位在线",
            "覆盖程序/技术美术/策划",
            "以官方页为准"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "招聘是 contest 栏里和比赛并列的实用信息；官方页最稳，遇到「内推费」先核实再行动。"
        }
      ]
    }
  ]
};
