window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-13",
    "weekday": "星期五",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-13 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "Gemini 4 Carbon 登顶 AI 指数：长程智能体、端到端网安与编码（hero）",
      "引擎精读：Phaser / LÖVE / KAPLAY / Panda3D / Diligent / The Forge",
      "开源宝库：nlohmann/json / fmt / spdlog / Dear ImGui / EnTT / GLM",
      "AI 前沿：Atelico 记忆 NPC / Ludo.ai 动作镜像 / Krafton PUBG AI 队友 / NVIDIA ACE / Genie 4 / Wingman Unreal AI",
      "行业风向：PS6 研发按进度 / SAG-AFTRA 新合同 / 2026 裁员破万 / 任天堂财报 / Unity 250 亿收购传闻 / Arkane Lyon 收购竞标",
      "竞赛招聘：BOOOM 游戏创想大赛 / 米哈游 2027 校招 / indiePlay 2026 中国独立游戏大赛"
    ],
    "engineStatus": [
      {
        "name": "Phaser 3",
        "type": "phaser",
        "status": "2D HTML5 框架",
        "badge": "2D",
        "color": "blue"
      },
      {
        "name": "LÖVE",
        "type": "love",
        "status": "Lua 轻量 2D",
        "badge": "Lua",
        "color": "green"
      },
      {
        "name": "KAPLAY",
        "type": "kaplay",
        "status": "极简 2D 游戏库",
        "badge": "原型",
        "color": "cyan"
      },
      {
        "name": "Panda3D",
        "type": "panda3d",
        "status": "Python/C++ 3D",
        "badge": "3D",
        "color": "violet"
      },
      {
        "name": "Diligent",
        "type": "diligent",
        "status": "跨后端渲染抽象",
        "badge": "渲染",
        "color": "teal"
      },
      {
        "name": "The Forge",
        "type": "forge",
        "status": "跨平台渲染框架",
        "badge": "跨端",
        "color": "orange"
      }
    ]
  },
  "hero": {
    "id": "gemini4-carbon-hero",
    "category": "ai",
    "categoryName": "AI前沿",
    "tag": "Gemini 4 Carbon",
    "title": "Google DeepMind 发布 Gemini 4 Carbon：登顶 AI 指数的长程智能体前沿模型",
    "summary": "Google DeepMind 于 10 月 28 日发布 Gemini 4 Carbon，称其为迄今最强前沿模型，主打长视界智能体工作流、端到端网络安全（发现→利用→补丁）与全栈网页开发。Artificial Analysis Intelligence Index v5.0 登顶 #1（59 分），安全代码生成较上代提升超 2 倍，定价与 Gemini 4 Argon 持平（输入 $2/百万 token）。",
    "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_carbon_102726_social_share.width-1300.png",
    "source": "Google DeepMind / Blog（一手）",
    "date": "2026-11-13",
    "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
    "readTime": "7 分钟",
    "hotScore": 97,
    "tags": [
      "Gemini",
      "前沿模型",
      "智能体"
    ],
    "content": [
      {
        "title": "核心要点",
        "type": "list",
        "items": [
          "10 月 28 日发布，定位为「最强」前沿模型，基于 Gemini 4 Argon",
          "主打长视界智能体工作流，可跨大型代码库连续运行数天",
          "端到端网络安全：SEC-bench Pro 88.2%、ExploitGym 54.8%、CWE-bench 71.0%",
          "WebDev Arena +89 Elo 升至 #4（1768 分）；定价输入 $2/百万 token"
        ]
      },
      {
        "title": "学习视角",
        "type": "text",
        "text": "Gemini 4 Carbon 把「能连续干几天、自己找漏洞再补上」写成模型能力，意味着 AI 编程正从「补全一行」走向「拥有一个子项目」。对游戏与工具开发者，真正的红利不在聊天，而在把重复的工程排查交给长程智能体——前提是给它清晰的范围与可验证的出口。"
      }
    ]
  },
  "items": [
    {
      "id": "en-phaser",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·2D",
      "tag": "Phaser",
      "title": "Phaser 3：成熟的 2D HTML5 游戏框架",
      "summary": "Phaser 3 基于 WebGL/Canvas，内置场景、物理、补间与资源加载，是网页与小游戏最稳的 2D 框架之一。",
      "image": "https://opengraph.githubassets.com/1/phaserjs/phaser",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/phaserjs/phaser",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Phaser",
        "2D",
        "Web"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "官方维护活跃，文档与示例齐全，社区问答多",
            "内置 Arcade/Matter 物理、动画、音效与输入系统",
            "可打包到 Web、桌面与移动端，适合原型与上线"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "做 2D 网页游戏想省去底层渲染与循环管理，Phaser 几乎是默认起点；它的 API 边界清晰，先把一个场景跑通比纠结架构更划算。"
        }
      ]
    },
    {
      "id": "en-love",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·2D",
      "tag": "LÖVE",
      "title": "LÖVE：用 Lua 写轻量 2D 游戏",
      "summary": "LÖVE 是 Lua 驱动的跨平台 2D 引擎，体积小、依赖少，适合从零理解游戏主循环与资源管理。",
      "image": "https://opengraph.githubassets.com/1/love2d/love",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/love2d/love",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "LÖVE",
        "Lua",
        "2D"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "单一 Lua 入口，启动快、心智负担低",
            "跨 Windows/macOS/Linux/移动端，发布简单",
            "社区教程与示例游戏丰富，适合自学"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Lua 的简洁让 LÖVE 成为理解「主循环+绘制+输入」的最小可行环境；想真正搞懂游戏循环，它比大而全的框架更友好。"
        }
      ]
    },
    {
      "id": "en-kaplay",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·2D",
      "tag": "KAPLAY",
      "title": "KAPLAY：直观的轻量 2D 游戏库",
      "summary": "KAPLAY（原 Kaboom.js）以极简 API 快速搭建 2D 玩法，内置物理、动画与场景，常用于教学与原型。",
      "image": "https://opengraph.githubassets.com/1/kaplayjs/kaplay",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/kaplayjs/kaplay",
      "readTime": "5 分钟",
      "hotScore": 78,
      "tags": [
        "KAPLAY",
        "2D",
        "原型"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "函数式 API，几行代码就能出可玩画面",
            "内置组件、定时器、碰撞与摄像机",
            "浏览器即跑，适合 Game Jam 与演示"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「想法→可玩」的链路压到最短，是 KAPLAY 的价值；它牺牲了一些工程化约束，换来做玩法实验的低门槛。"
        }
      ]
    },
    {
      "id": "en-panda3d",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·3D",
      "tag": "Panda3D",
      "title": "Panda3D：开源 3D 引擎",
      "summary": "Panda3D 由迪士尼与 CMU 起家，提供 Python 与 C++ 双接口，适合做 3D 应用与教学项目。",
      "image": "https://opengraph.githubassets.com/1/panda3d/panda3d",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/panda3d/panda3d",
      "readTime": "6 分钟",
      "hotScore": 76,
      "tags": [
        "Panda3D",
        "3D",
        "Python"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Python 接口上手快，又能下沉到 C++ 优化",
            "自带场景图、粒子、动画与着色器管线",
            "有完整文档与示例，偏教育与研究"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "用 Python 直接写 3D 逻辑、又能随时触底 C++，Panda3D 是理解「引擎如何组织场景与渲染」的平滑台阶。"
        }
      ]
    },
    {
      "id": "en-diligent",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·渲染",
      "tag": "Diligent Engine",
      "title": "Diligent Engine：跨平台渲染抽象层",
      "summary": "Diligent Engine 用一套 API 抽象 Vulkan/D3D12/Metal/OpenGL，目标是在多后端间保持一致的高性能渲染。",
      "image": "https://opengraph.githubassets.com/1/DiligentGraphics/DiligentEngine",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/DiligentGraphics/DiligentEngine",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "Diligent",
        "渲染",
        "跨平台"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "统一抽象 Vulkan/D3D12/Metal/OpenGL 后端",
            "偏底层，适合自研渲染管线的团队",
            "示例覆盖桌面与移动，文档较工程化"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "想搞懂现代图形 API 差异又不想每个都重写一遍，Diligent 的抽象层是最好的对照教材；它把「跨后端」这件事讲得很实。"
        }
      ]
    },
    {
      "id": "en-forge",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·渲染",
      "tag": "The Forge",
      "title": "The Forge：跨平台渲染框架",
      "summary": "The Forge 覆盖移动、主机与 PC 的渲染框架，强调工程化实战，常作为跨平台图形参考实现。",
      "image": "https://opengraph.githubassets.com/1/ConfettiFX/The-Forge",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/ConfettiFX/The-Forge",
      "readTime": "7 分钟",
      "hotScore": 79,
      "tags": [
        "The Forge",
        "渲染",
        "跨端"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "覆盖 iOS/Android/主机/PC 多平台",
            "示例偏实战，含大量图形特性演示",
            "适合研究跨端渲染一致性与性能"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "The Forge 的价值在「真机覆盖」：它把同一套图形代码在多种硬件上跑通，读它的示例比看论文更接近真实落地。"
        }
      ]
    },
    {
      "id": "os-json",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·数据",
      "tag": "nlohmann/json",
      "title": "nlohmann/json：C++ 单头 JSON 库",
      "summary": "nlohmann/json 是 header-only 的现代 C++ JSON 库，接口接近标准容器，异常安全且易集成。",
      "image": "https://opengraph.githubassets.com/1/nlohmann/json",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/nlohmann/json",
      "readTime": "4 分钟",
      "hotScore": 85,
      "tags": [
        "C++",
        "JSON",
        "header-only"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "单头文件即可引入，无外部依赖",
            "operator[] 与 STL 风格接口直观",
            "支持序列化、反序列化与自定义类型"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "做工具链或引擎配置读写时，nlohmann/json 把「对象↔JSON」变得几乎无感；先会用再读实现，是理解现代 C++ 模板技巧的好样本。"
        }
      ]
    },
    {
      "id": "os-fmt",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·工具",
      "tag": "fmt",
      "title": "fmt：现代 C++ 格式化库",
      "summary": "fmt 提供 {}-风格的类型安全格式化，速度快、可读性好，已成为 C++20 std::format 的基础。",
      "image": "https://opengraph.githubassets.com/1/fmtlib/fmt",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/fmtlib/fmt",
      "readTime": "4 分钟",
      "hotScore": 84,
      "tags": [
        "C++",
        "fmt",
        "格式化"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "{}-占位符，类型安全、编译期检查",
            "性能优于传统 printf/iostream",
            "是 std::format 的事实前身"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把格式化从「易错且慢」变成「安全且快」，fmt 是 C++ 工程化体验升级的缩影；理解它能少踩无数字符串拼接的坑。"
        }
      ]
    },
    {
      "id": "os-spdlog",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·工具",
      "tag": "spdlog",
      "title": "spdlog：高性能 C++ 日志库",
      "summary": "spdlog 是 header-only 的高性能日志库，支持多 sink、异步与分级，适合引擎与服务器。",
      "image": "https://opengraph.githubassets.com/1/gabime/spdlog",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/gabime/spdlog",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "C++",
        "日志",
        "spdlog"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "header-only，零依赖引入",
            "多 sink（文件/控制台/滚动）与分级",
            "支持异步日志，吞吐高"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "日志是排查线上问题的基础设施；spdlog 把「高性能+易用」做到位，读懂它的 sink 模型对设计可观测性很有帮助。"
        }
      ]
    },
    {
      "id": "os-imgui",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·UI",
      "tag": "Dear ImGui",
      "title": "Dear ImGui：即时模式 GUI",
      "summary": "Dear ImGui 是即时模式（IMGUI）UI 库，专为工具、调试面板与编辑器内嵌界面设计。",
      "image": "https://opengraph.githubassets.com/1/ocornut/imgui",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/ocornut/imgui",
      "readTime": "5 分钟",
      "hotScore": 87,
      "tags": [
        "C++",
        "ImGui",
        "调试UI"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "即时模式，每帧声明式构建界面",
            "无保留状态，适合工具与调试面板",
            "易嵌入引擎，跨渲染后端"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "做引擎或工具时，Dear ImGui 能几行代码拉出可调参数面板；它体现的「界面即函数调用」思路，对理解编辑器架构很关键。"
        }
      ]
    },
    {
      "id": "os-entt",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·架构",
      "tag": "EnTT",
      "title": "EnTT：现代 C++ ECS 库",
      "summary": "EnTT 是性能好、API 清爽的实体-组件-系统（ECS）库，广泛用于游戏实体管理。",
      "image": "https://opengraph.githubassets.com/1/skypjack/entt",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/skypjack/entt",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "C++",
        "ECS",
        "架构"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "实体/组件/系统分离，缓存友好",
            "API 简洁，文档与示例丰富",
            "常与渲染、物理系统配合"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "ECS 是把「游戏对象」从继承地狱里解放出来的主流范式；EnTT 实现干净，读它的实体存储能真正搞懂数据导向设计。"
        }
      ]
    },
    {
      "id": "os-glm",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·数学",
      "tag": "GLM",
      "title": "GLM：OpenGL 数学库",
      "summary": "GLM 是 C++ 数学库，提供向量、矩阵、四元数与变换，是图形与 3D 开发的标配。",
      "image": "https://opengraph.githubassets.com/1/g-truc/glm",
      "source": "GitHub（一手）",
      "date": "2026-11-13",
      "url": "https://github.com/g-truc/glm",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "C++",
        "数学",
        "GLM"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "向量/矩阵/四元数 API 接近 GLSL",
            "头文件库，跨平台无依赖",
            "覆盖投影、变换与插值"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "3D 开发绕不开矩阵与四元数；GLM 让 CPU 端数学与着色器语言保持一致，先把变换链路算对，渲染才不出怪事。"
        }
      ]
    },
    {
      "id": "tu-pygame",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Python",
      "tag": "Pygame",
      "title": "Pygame 官方文档：Python 游戏入门",
      "summary": "Pygame 是 Python 的 2D 游戏入门库，官方文档从事件、绘制到游戏循环讲清基础。",
      "image": "",
      "source": "官方文档",
      "date": "2026-11-13",
      "url": "https://www.pygame.org/docs/",
      "readTime": "5 分钟",
      "hotScore": 70,
      "tags": [
        "Pygame",
        "Python",
        "入门"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "从事件循环、精灵到音效逐步讲解",
            "适合零基础理解游戏主循环",
            "示例多，便于边读边改"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "用 Python 把游戏循环、碰撞与绘制跑通，是建立「程序即交互」直觉的最短路径；先做出能动的方块，再谈架构。"
        }
      ]
    },
    {
      "id": "tu-lazyfoo",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·C/C++",
      "tag": "LazyFoo SDL",
      "title": "LazyFoo 的 SDL 教程：图形与输入基础",
      "summary": "LazyFoo 的 SDL 教程是经典的 C/C++ 图形入门，覆盖窗口、表面、事件与音频。",
      "image": "",
      "source": "教程站",
      "date": "2026-11-13",
      "url": "https://lazyfoo.net/tutorials/SDL/",
      "readTime": "6 分钟",
      "hotScore": 72,
      "tags": [
        "SDL",
        "C++",
        "图形"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "从创建窗口到像素操作循序渐进",
            "讲清事件驱动与表面/纹理",
            "偏底层，利于理解图形管线"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "SDL 把「窗口+输入+图形」的底层讲透；啃完它再学引擎，会明白上层框架帮你省掉了哪些脏活。"
        }
      ]
    },
    {
      "id": "tu-opengl",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·图形",
      "tag": "Open.GL",
      "title": "Open.GL：现代 OpenGL 交互教程",
      "summary": "Open.GL 以交互示例讲解现代 OpenGL：着色器、缓冲与变换，适合图形入门。",
      "image": "",
      "source": "教程站",
      "date": "2026-11-13",
      "url": "https://open.gl/",
      "readTime": "6 分钟",
      "hotScore": 71,
      "tags": [
        "OpenGL",
        "图形",
        "着色器"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "覆盖 VAO/VBO、着色器与纹理",
            "交互式示例，边看边试",
            "偏现代管线，非固定功能"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "现代 OpenGL 的「着色器+缓冲」范式是图形基石；Open.GL 用可操作示例降低门槛，读懂它再看引擎渲染不再发怵。"
        }
      ]
    },
    {
      "id": "tu-mdnwebgl",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Web",
      "tag": "MDN WebGL",
      "title": "MDN：WebGL API 教程",
      "summary": "MDN 的 WebGL 教程从基础概念到绘制场景，是浏览器端 3D 的权威参考。",
      "image": "",
      "source": "MDN",
      "date": "2026-11-13",
      "url": "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API/Tutorial",
      "readTime": "5 分钟",
      "hotScore": 73,
      "tags": [
        "WebGL",
        "Web",
        "MDN"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "从上下文、着色器到矩阵讲解",
            "权威且与规范同步",
            "适合网页 3D 起步"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "想在浏览器里画 3D，MDN 的 WebGL 教程是避坑地图；它把「GLSL+缓冲+矩阵」串成一条能跑的通路。"
        }
      ]
    },
    {
      "id": "tu-threejs",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Web",
      "tag": "Three.js",
      "title": "Three.js 文档：搭建一个场景",
      "summary": "Three.js 官方「Creating a scene」用最少代码讲清场景、相机、渲染器与动画循环。",
      "image": "",
      "source": "官方文档",
      "date": "2026-11-13",
      "url": "https://threejs.org/docs/#manual/en/introduction/Creating-a-scene",
      "readTime": "5 分钟",
      "hotScore": 74,
      "tags": [
        "Three.js",
        "WebGL",
        "3D"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "场景/相机/渲染器三段式入门",
            "代码即跑，反馈快",
            "适合快速搭建网页 3D 原型"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Three.js 把 WebGL 封装到「加个网格就能看见」的程度；先跑通场景再读源码，理解抽象层的代价与收益最直观。"
        }
      ]
    },
    {
      "id": "tu-playcanvas",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·引擎",
      "tag": "PlayCanvas",
      "title": "PlayCanvas 用户手册",
      "summary": "PlayCanvas 用户手册覆盖编辑器、实体组件与脚本，适合做基于 Web 的 3D 引擎实践。",
      "image": "",
      "source": "官方手册",
      "date": "2026-11-13",
      "url": "https://developer.playcanvas.com/user-manual/",
      "readTime": "6 分钟",
      "hotScore": 72,
      "tags": [
        "PlayCanvas",
        "3D",
        "Web"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "编辑器+组件系统+脚本一体化",
            "云端协作，适合团队原型",
            "文档覆盖渲染、物理与动画"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "PlayCanvas 把「引擎即服务」做得很顺手；读它的组件模型，能对比出自研 ECS 与商用引擎在易用性上的取舍。"
        }
      ]
    },
    {
      "id": "ai-atelico",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·NPC",
      "tag": "Atelico",
      "title": "Atelico AI Engine：给 NPC 装上记忆",
      "summary": "独立工作室 Atelico 开放 AI Engine 早期访问，可在 UE/Unity/Godot 本地运行，让 NPC 拥有目标、关系与跨时段记忆。",
      "image": "",
      "source": "Designsign（编译）",
      "date": "2026-11-13",
      "url": "https://designsign.org/post?post_id=2420218",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "AI",
        "NPC",
        "本地推理"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "支持本地运行，数据不出玩家设备",
            "NPC 可记住玩家早先行为并据此反应",
            "兼容 UE/Unity/Godot，含安全改写管线"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「记忆」做成运行时系统而非写死的声望变量，是生成式 NPC 的关键一步；但能否真正改变行为而非只换台词，仍需实机检验。"
        }
      ]
    },
    {
      "id": "ai-ludo",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·动画",
      "tag": "Ludo.ai",
      "title": "Ludo.ai：可复用动作库与动作镜像",
      "summary": "Ludo.ai 11 月更新可把生成的人形动作存进账户，同一段动画可驱动多个精灵或骨骼角色，并支持左右镜像。",
      "image": "https://makegamewithai.com/news/ludo-my-animations-mirror/cover.webp",
      "source": "MakeGameWithAI",
      "date": "2026-11-13",
      "url": "https://makegamewithai.com/news/ludo-my-animations-mirror",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "AI",
        "动画",
        "Ludo.ai"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "生成动作可保存复用，跨精灵/骨骼通用",
            "支持左右镜像，省去重复制作",
            "面向 2D 与 3D 角色动画流程"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「一段话生成的动作」沉淀为可复用资产，是 AI 动画从玩具走向管线的重要信号；资产化比一次性生成更贴近生产。"
        }
      ]
    },
    {
      "id": "ai-wingman",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "Wingman",
      "title": "Wingman：住在 Unreal 里的免费 AI 副驾",
      "summary": "Wingman（原 Loco AI）是嵌入 Unreal Editor 的免费 AI 副驾，10 月更新到 v0.22.x，可用 Claude Code/Codex/本地模型搭蓝图并自检；新增与 Epic 官方 AI 工具在 UE5.8 协同、导入网格与纹理、改 Niagara 粒子、Play 中测 HUD、用 Control Rig 做动画等能力。",
      "image": "https://ai.locodev.dev/og-wingman.png",
      "source": "Wingman 官方（changelog）",
      "date": "2026-11-13",
      "url": "https://ai.locodev.dev/changelog",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "AI",
        "Unreal",
        "蓝图"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "10 月 24 日 v0.22.2 起兼容 Epic 官方 AI 工具（UE5.8）",
            "可用 Claude Code/Codex/自有 API Key 或 Ollama 本地模型",
            "建蓝图后编译受影响资产并自检，避免破绽",
            "新增导入网格/纹理、改 Niagara、Play 中测 HUD、Control Rig 动画"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Wingman 把「说一句→出蓝图→自己跑一遍验证」做成闭环，方向是让 AI 真正落到引擎内部而非外部脚本；它不卖 AI 额度、用你已有的模型，对中小团队是低门槛的蓝图自动化入口。前提是给它清晰的工程边界，别让它越权改你不想动的资产。"
        }
      ]
    },
    {
      "id": "ai-nvidia",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·NPC",
      "tag": "NVIDIA ACE",
      "title": "NVIDIA ACE SDK 开放 Beta",
      "summary": "NVIDIA 将 Avatar Cloud Engine（ACE）SDK 开放 Beta，提供 Nemotron 语言模型、Riva 语音、Audio2Face 与编排运行时，面向本地推理的 AI NPC。",
      "image": "",
      "source": "Verdict（整理）",
      "date": "2026-11-13",
      "url": "https://verdict.click/blog/nvidia-ace-beta-2026",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "AI",
        "NVIDIA",
        "ACE"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Nemotron-4 本地推理，延迟低于 100ms",
            "Riva 语音+Audio2Face 驱动表情",
            "含状态/记忆/行为树编排运行时"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "ACE 把「会对话、有记忆、能表情」的 NPC 能力打包成 SDK，意味着中小团队也能接；真正难点在让它不抢戏、不破绽百出。"
        }
      ]
    },
    {
      "id": "ai-genie",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·世界",
      "tag": "Genie 4",
      "title": "Google Genie 4：文字生成可交互 3D 世界",
      "summary": "据 2026 年 10 月研究预览，Genie 4 可从文本提示生成逼真且可交互的 3D 世界，并支持在模拟中途用提示实时改场景。",
      "image": "https://tlinki.com/wp-content/uploads/2026/11/Latest_Tlinki_Thumbnail-copy-148.webp",
      "source": "Tlinki（综述）",
      "date": "2026-11-13",
      "url": "https://tlinki.com/will-ai-completely-change-video-games-the-future-of-smarter-gaming",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "AI",
        "世界生成",
        "Genie"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "文本→可探索 3D 世界",
            "模拟中可继续用提示改场景",
            "同步生成匹配世界的音频"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "世界生成把「创意→可走查原型」压缩到秒级，它不取代引擎，而是把意图和可用空间之间的鸿沟先填平；值得盯它的落地边界。"
        }
      ]
    },
    {
      "id": "ai-krafton",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·NPC",
      "tag": "Krafton Ally",
      "title": "Krafton 用 NVIDIA ACE 给 PUBG 做端侧 AI 队友「Ally」",
      "summary": "Krafton 在 PUBG 中演示由 NVIDIA ACE 驱动的 AI 队友「Ally」，可在端侧（设备本地）以 CPC（协同玩家伙伴）形态与玩家组队，用自然语言沟通、跟点、架枪与报点，不依赖云端推理。",
      "image": "https://traroro.com/wp-content/uploads/2026/11/ai_gaming_controller-1280x721.jpg",
      "source": "Traroro（编译）",
      "date": "2026-11-13",
      "url": "https://traroro.com/?p=2471",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "AI",
        "NVIDIA ACE",
        "队友"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "基于 NVIDIA ACE，端侧本地运行，延迟与隐私更可控",
            "以 CPC（Co-Playable Character）形态加入小队，可语音协同",
            "演示能力含跟点、架枪、报点与简单战术配合",
            "目标把 AI 队友做成可上线的对局内置角色"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把 AI 队友从「脚本 bot」升级成「能听懂人话、会在本地跑」的同伴，Krafton 这条路线押注的是端侧推理的成熟；它真正的考验不在演示多炫，而在匹配机制、反作弊与玩家体验的平衡——AI 进对局，先过的不是技术关，是公平关。"
        }
      ]
    },
    {
      "id": "ga-wallworld",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·模拟",
      "tag": "Wall World Strategy",
      "title": "Wall World Strategy：在无尽墙上建殖民地",
      "summary": "Alawar 的《Wall World Strategy》11 月 11 日上线，玩家在无限高墙表面建殖民地、管资源、抵御虫族并派机器人远征。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4218360/affb6b94d152a5a52e6c5a75bb246be70e07ae3a/header.jpg?t=1794427468",
      "source": "Steam",
      "date": "2026-11-13",
      "url": "https://store.steampowered.com/app/4218360/",
      "readTime": "5 分钟",
      "hotScore": 78,
      "tags": [
        "模拟",
        "策略",
        "Steam"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "表面殖民+资源管理+塔防式防守",
            "支持手柄与 Steam 云存档",
            "11 月 11 日发售，定价 $16.99"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「基地经营」搬到垂直墙面上，空间玩法有新意；看它如何用简单循环制造紧张感，对做资源管理类游戏有参考。"
        }
      ]
    },
    {
      "id": "ga-hullrupture",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·策略",
      "tag": "Hull Rupture",
      "title": "Hull Rupture：把人当资源的飞船管理",
      "summary": "Konfa Games 开发、tinyBuild 发行的《Hull Rupture》11 月 4 日上线，是飞船管理+塔防 Roguelite，玩家把人类当资源抵御外星进攻。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4358660/fc0b8e2a359fd8ae42d95e51338972431bd7b7cf/header_alt_assets_4.jpg?t=1793808075",
      "source": "Steam",
      "date": "2026-11-13",
      "url": "https://store.steampowered.com/app/4358660/",
      "readTime": "5 分钟",
      "hotScore": 76,
      "tags": [
        "动作",
        "独立",
        "策略"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "飞船即基地，决策带道德张力",
            "Roguelite 重复可玩，外星攻势递增",
            "11 月 4 日发售，定价 $13.49"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「把人当资源」的设定逼玩家做难看但必要的取舍；这种道德压力设计，比单纯数值挑战更能让人记住一款小品。"
        }
      ]
    },
    {
      "id": "ga-milki",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·休闲",
      "tag": "Milki Delivery",
      "title": "Milki Delivery：骑小车送牛奶的治愈冒险",
      "summary": "《Milki Delivery》11 月 17 日发售，玩家与小牛 Milki 一起沿土路、草甸与海港送鲜奶，重建乡村社区。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4259360/505a9c5e2d1366f1dced34c661218a16e321c13f/header.jpg?t=1794167749",
      "source": "Steam",
      "date": "2026-11-13",
      "url": "https://store.steampowered.com/app/4259360/",
      "readTime": "5 分钟",
      "hotScore": 75,
      "tags": [
        "冒险",
        "休闲",
        "治愈"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "无计时压力，可自定节奏游玩",
            "收集资源升级谷仓与路线",
            "暖系画风，适合轻松向玩家"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "无失败惩罚的治愈向设计正在细分市场站稳；它提醒我们，不是所有游戏都要靠压力驱动，节奏本身就是一种体验设计。"
        }
      ]
    },
    {
      "id": "ga-derelikt",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·恐怖",
      "tag": "DERELIKT",
      "title": "DERELIKT：PS1 风科幻恐怖 FPS",
      "summary": "Visuwyg 开发、Hyperstrange 发行的《DERELIKT》11 月 13 日上线，是面向 PS1 时代复古科幻恐怖爱好者的叙事 FPS。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3810510/45f23f4a1143f49de0962289003d6b269fa970bd/header.jpg?t=1794494816",
      "source": "Steam",
      "date": "2026-11-13",
      "url": "https://store.steampowered.com/app/3810510/",
      "readTime": "5 分钟",
      "hotScore": 77,
      "tags": [
        "动作",
        "冒险",
        "恐怖"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "刻意复刻 PS1 低多边形与雾效",
            "狭窄空间的压迫感叙事",
            "11 月 13 日发售，恰逢今日"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "复古渲染不是偷懒而是风格选择；DERELIKT 用限制换氛围，说明「技术不够」也能靠美术方向做出记忆点。"
        }
      ]
    },
    {
      "id": "ga-casualties",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·生存",
      "tag": "Casualties: Unknown",
      "title": "Casualties: Unknown：外星洞穴生存模拟",
      "summary": "Orsoniks 开发、Oro Interactive 发行的《Casualties: Unknown》11 月 9 日上线，是无情洞穴探索生存模拟，玩家作为试验品下潜 11 层求生。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4576490/907888dce73f50c48410b5ab92971a0d95776b29/header.jpg?t=1794232782",
      "source": "Steam",
      "date": "2026-11-13",
      "url": "https://store.steampowered.com/app/4576490/",
      "readTime": "5 分钟",
      "hotScore": 74,
      "tags": [
        "动作",
        "冒险",
        "模拟"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "多层洞穴，环境 hostile 且多样",
            "高死亡惩罚的硬核生存",
            "11 月 9 日发售，定价 $19.54"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "高惩罚生存模拟靠「每次死亡都学到东西」留存玩家；它的层级设计值得研究——如何让人愿意在失败里继续下潜。"
        }
      ]
    },
    {
      "id": "ga-sonicpicopark",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·合作",
      "tag": "SONIC PICO PARK",
      "title": "SONIC PICO PARK：索尼克联动合作解谜",
      "summary": "TECOPARK 的《SONIC PICO PARK》11 月 12 日上线，把索尼克元素融入 PICO PARK 的合作动作解谜，支持 2–8 人本地与联机。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4304060/193353d185ee1af3d51068346d9d1a32e81e8ec5/header.jpg?t=1794470411",
      "source": "Steam",
      "date": "2026-11-13",
      "url": "https://store.steampowered.com/app/4304060/",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": [
        "动作",
        "休闲",
        "合作"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "2–8 人本地/在线合作",
            "索尼克 IP 与解谜玩法结合",
            "11 月 12 日发售，定价 $9.99"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "IP 联动+强合作是低成本拉新的成熟公式；PICO PARK 的「互相坑队友」机制证明，社交摩擦本身就能成为乐趣来源。"
        }
      ]
    },
    {
      "id": "in-ps6",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·主机",
      "tag": "PS6",
      "title": "索尼 CFO：次世代主机研发按进度推进",
      "summary": "索尼 CFO Lin Tao 在 11 月 5 日财报会上确认次世代平台研发「按进度」推进，并计划在 2027 年 4 月起的财年加大投入。",
      "image": "https://cdn.sanity.io/images/zzzwo1aw/production/a7bb0db924c413386fb82058c793039d0e01b0a1-1000x556.jpg",
      "source": "PS6News",
      "date": "2026-11-13",
      "url": "https://ps6news.com/ps6-development-on-schedule-sony-cfo",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "索尼",
        "PS6",
        "财报"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "CFO 亲口确认研发按进度，非供应链传闻",
            "未确认名称、日期、规格与价格",
            "2027 财年起投资上升，2027/2028 皆未定"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "官方确认「按进度」而不给日期，是标准的预期管理；对开发者更实在的信号是：内存采购已与供应商对齐，供应链风险在可控范围。"
        }
      ]
    },
    {
      "id": "in-sag",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·工会",
      "tag": "SAG-AFTRA",
      "title": "SAG-AFTRA 新合同：可为 Pitch 雇佣演员",
      "summary": "SAG-AFTRA 11 月 5 日推出「Pre-Funding Pitch」互动媒体协议，允许开发商在项目融资前雇佣专业配音与动作演员制作 pitch 素材。",
      "image": "https://www.gaming.net/wp-content/uploads/2026/11/sag-aftra-contract-lets-game-developers-hire-performers-for-pitches.jpg",
      "source": "Gaming.net",
      "date": "2026-11-13",
      "url": "https://www.gaming.net/sag-aftra-contract-lets-game-developers-hire-performers-for-pitches/",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "工会",
        "合同",
        "配音"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "覆盖 demo/垂直切片/预告等筹资素材",
            "启动时制作资金不得超过 30%",
            "素材不得公开发布或商业发行"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "这条合同降低了「用专业表演去拉投资」的门槛，对小团队是利好；但 30% 资金线与禁用公开发布，仍把 pitch 牢牢框在筹资用途内。"
        }
      ]
    },
    {
      "id": "in-pinogamer",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·裁员",
      "tag": "全球裁员",
      "title": "2026 全球游戏裁员破万，超 2025 全年",
      "summary": "据 ASGC 追踪，截至 11 月初 2026 年全球游戏业已裁员 10,977 人，超过 2025 全年 9,197 人，业内预估年底或冲 1.3 万。",
      "image": "https://cdn.kikinote.net/gallery/kikinote/6ce70d053eed08f9508ab447d94a1d9b.jpeg",
      "source": "PinoGamer",
      "date": "2026-11-13",
      "url": "https://pinogamer.com/21548",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "裁员",
        "行业",
        "数据"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "累计 10,977 人，已超去年全年",
            "Xbox/育碧/EA 等重组为焦点",
            "业内预估年底或达 1.3 万"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "连卖得好的项目也保不住人，说明裁员已不是「项目失败」的副产品，而是大厂在成本与管线上的结构性收缩；从业者更需建立抗风险能力。"
        }
      ]
    },
    {
      "id": "in-nintendo",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·财报",
      "tag": "任天堂",
      "title": "任天堂 FY2027 上半年：Switch2 放缓、利润反增",
      "summary": "任天堂 11 月 5 日公布 FY2027 上半年财报：营收 9,660 亿日元（同比-12.1%），营业利益 2,165 亿日元（同比+49.1%），Switch2 硬件出货回落但软件与数字收入走强。",
      "image": "",
      "source": "游戏欧汀（整理）",
      "date": "2026-11-13",
      "url": "https://gameodin.com/blog/4406",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "任天堂",
        "财报",
        "Switch2"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Switch2 上半年出货 649 万台，同比-37.4%",
            "软件销量与数字收入（年增 60.5%）支撑利润",
            "维持全年 1,650 万台硬件目标"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "硬件见顶、软件与 IP 变现接棒，是成熟世代的典型曲线；关税退款等非经常性因素推高利润，不能简单解读为全面复苏。"
        }
      ]
    },
    {
      "id": "in-unity",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·收购",
      "tag": "Unity",
      "title": "银湖+PIF 洽谈收购 Unity，估值约 250 亿美元",
      "summary": "据路透 11 月 5 日报道，银湖资本与沙特 PIF 等财团已就收购 Unity 接触，讨论估值约 250 亿美元；消息当日 Unity 发布超预期 Q3 财报。",
      "image": "",
      "source": "游戏葡萄/网易（编译）",
      "date": "2026-11-13",
      "url": "https://www.163.com/dy/article/LB2E3KH605268BP2.html",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Unity",
        "收购",
        "私有化"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "为媒体报道，尚未官宣或确认",
            "Q3 营收约 6.22 亿美元，同比+32%",
            "若达成将成近年软件业大型杠杆收购之一"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "这仍是传闻而非定案，但银湖本就持股约 8% 且刚完成 EA 私有化，逻辑自洽；对开发者真正要紧的是收购后引擎路线与定价会否生变。"
        }
      ]
    },
    {
      "id": "in-arkane",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·收购",
      "tag": "Arkane Lyon",
      "title": "Arkane Lyon 传出收购竞标，育碧重组再起波澜",
      "summary": "据 11 月初多方媒体报道，育碧旗下 Arkane Lyon（曾开发《Dishonored》《Deathloop》）出现收购竞标动向，被归入育碧在财务压力下的资产拆分与工作室重组计划；交易尚未官宣，买方与条款均未确认。",
      "image": "https://i.gzn.jp/img/2026/11/04/ubisoft-arkane-studios/00.png",
      "source": "Gigazine（编译）",
      "date": "2026-11-13",
      "url": "https://gigazine.net/gsc_news/en/20261104-ubisoft-arkane-studios",
      "readTime": "5 分钟",
      "hotScore": 79,
      "tags": [
        "育碧",
        "收购",
        "重组"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Arkane Lyon 被传出收购竞标，归属育碧重组计划",
            "工作室代表作含《Dishonored》《Deathloop》",
            "交易尚未官宣，买方与条款均未确认",
            "背景是育碧持续面临的财务与组织架构压力"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "大厂把明星工作室摆上货架，说明「IP 与团队」正在被重新定价；对从业者，这类重组既是风险也是机会——核心人才流动往往会催生新的独立团队与项目。结论先放一句：在官宣前，它仍是传闻而非事实。"
        }
      ]
    },
    {
      "id": "co-gcores",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·Jam",
      "tag": "BOOOM",
      "title": "BOOOM 游戏创想大赛（机核×骁龙）",
      "summary": "机核 GCORES 与骁龙联合的 BOOOM 游戏创想大赛设 BOOOMJam（21 天限时限主题）与 BOOOMSeek（未上线移动端征集）双赛道，并落地核聚变与 ChinaJoy。",
      "image": "https://image.gcores.com/25efbb6831053e017b2e26826edb03a6-1920-900.jpg",
      "source": "机核 GCORES",
      "date": "2026-11-13",
      "url": "https://www.gcores.com/articles/212429",
      "readTime": "5 分钟",
      "hotScore": 77,
      "tags": [
        "Jam",
        "独立",
        "赛事"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "BOOOMJam 限时三周、限定主题",
            "BOOOMSeek 征集未上线移动端 DEMO",
            "优秀作品登陆核聚变与 ChinaJoy"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把 Jam 与移动端征集并行，是给不同阶段开发者都留入口；对练手而言，21 天限定主题比「做我想做的」更能逼出成品。"
        }
      ]
    },
    {
      "id": "co-mihoyo",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "米哈游",
      "title": "米哈游 2027 校招启动",
      "summary": "米哈游 2027 校园招聘已开启，工作城市上海/北京，岗位覆盖程序技术、产品策划、美术表现、综合、市场商务与运营等方向。",
      "image": "https://acc.niuqizp.com/post/coverpic/202608/xiaozhaomihayouxiaoyuanzhaopinzhengshiqi_569cf428.jpg",
      "source": "米哈游校园招聘",
      "date": "2026-11-13",
      "url": "https://campus.niuqizp.com/schedule-7ywy5MMLn.html",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "校招",
        "米哈游",
        "招聘"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "上海/北京两地，多职能开放",
            "含程序/策划/美术/运营等方向",
            "面向 2027 届毕业生"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "大厂校招是新人进入项目实战的主要入口；比起投递，更该提前研究其项目技术栈，让简历与岗位对齐，而不是广撒网。"
        }
      ]
    },
    {
      "id": "co-indieplay",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "竞赛·赛事",
      "tag": "indiePlay 2026",
      "title": "indiePlay 2026 中国独立游戏大赛：新增 AI 专属赛道，11 月 WePlay 颁奖",
      "summary": "第 12 届 indiePlay 中国独立游戏大赛由 CiGA 中国独立游戏联盟主办，报名已于 7 月 17 日截止，全新增设 AI 游戏专属赛道（要求 AI 深度融入核心玩法而非仅生成素材）；入围作品将于 11 月 21–22 日 WePlay 文化展展示，11 月 22 日颁奖。",
      "image": "",
      "source": "CiGA 中国独立游戏联盟",
      "date": "2026-11-13",
      "url": "https://www.indieplay.cn",
      "readTime": "4 分钟",
      "hotScore": 76,
      "tags": [
        "indiePlay",
        "独立游戏",
        "赛事"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "第 12 届，报名 7 月 17 日截止，面向全球独立开发者",
            "全新增设 AI 游戏专属赛道，拒绝仅用 AIGC 生成素材的浅层应用",
            "入围作品 11 月 21–22 日 WePlay 文化展现场试玩",
            "11 月 22 日颁奖，2025 年参赛作品达 657 款"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把「AI 如何改变玩法」单列成赛道，而不是只比画面与叙事，indiePlay 在给开发者一个明确信号：浅层套用生成式工具不算创新，真正被看见的是 AI 与核心机制的结合。对独立团队，这正是用巧劲而非算力参赛的窗口。"
        }
      ]
    }
  ]
};
