window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-06",
    "weekday": "星期五",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-06 07:30",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "《Probably Stolen》赛博朋克摆摊模拟两周吸 14 万并发，小众脑洞也能成爆款",
      "月之暗面 Kimi 发布游戏开发方案，让 Agent 直接操作 Unity / UE / Blender 工程",
      "引擎矩阵精读：Diligent / Armory / jMonkey / Dawn / ANGLE / WebGPU-Samples",
      "开源宝库：GLFW / OpenAL-soft / miniaudio / nuklear / RmlUi / raygui",
      "行业洗牌：名越工作室解散、Krafton 回购护盘、游族 42 亿下注算力、全球裁员破 1.1 万"
    ],
    "engineStatus": [
      {
        "name": "Godot 4.8 beta",
        "type": "godot",
        "status": "特性冻结后修 bug",
        "badge": "开源引擎",
        "color": "cyan"
      },
      {
        "name": "Babylon.js 9.x",
        "type": "babylon",
        "status": "GS 一等公民",
        "badge": "Web3D",
        "color": "blue"
      },
      {
        "name": "Bevy 0.20",
        "type": "bevy",
        "status": "Rust ECS",
        "badge": "现代引擎",
        "color": "red"
      },
      {
        "name": "Raylib 5.x",
        "type": "raylib",
        "status": "轻量 C 引擎",
        "badge": "教学友好",
        "color": "orange"
      },
      {
        "name": "Flax Engine",
        "type": "flax",
        "status": "C# 现代化",
        "badge": "开源引擎",
        "color": "violet"
      },
      {
        "name": "O3DE",
        "type": "o3de",
        "status": "工业化开源",
        "badge": "3A 引擎",
        "color": "emerald"
      }
    ]
  },
  "hero": {
    "id": "ga-probablystolen-hero",
    "category": "games",
    "categoryName": "热门游戏",
    "tag": "Probably Stolen",
    "title": "《Probably Stolen》赛博朋克摆摊模拟两周吸 14 万并发，小众脑洞也能成爆款",
    "summary": "笔者注意到，Steam 新作《Probably Stolen》（赛博朋克主题摆摊模拟）10/28 发售后一度冲到约 14 万同时在线。它把「开店 + 叙事」杂交成新鲜体验，再次说明差异化脑洞在 Steam 仍有一席之地。",
    "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/4348910/dc11c819aee22e98fe66d0a1172be4c1ebd40f45/capsule_616x353_alt_assets_3.jpg?t=1793890375",
    "source": "Steam（一手商店页）",
    "date": "2026-11-06",
    "url": "https://store.steampowered.com/app/4348910/Probably_Stolen/",
    "readTime": "5 分钟",
    "hotScore": 92,
    "tags": [
      "Probably Stolen",
      "赛博朋克",
      "独立爆款"
    ],
    "content": [
      {
        "title": "本次要点",
        "type": "list",
        "items": [
          "10/28 发售、约 14 万峰值在线",
          "赛博朋克摆摊模拟的非常规题材",
          "Steam 秋季独立黑马"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "独立游戏最便宜的差异化就是题材与机制的组合创新。它不靠画面军备竞赛，而是用一个还没被做烂的设定切中玩家新鲜感——这正是小团队值得研究的突围路径。"
      }
    ]
  },
  "items": [
    {
      "id": "en-diligent",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "Diligent Engine",
      "title": "Diligent Engine 用跨平台抽象统一 D3D12/Vulkan/Metal/GL，是现代渲染层的样本",
      "summary": "笔者观察到，Diligent Engine 用一套 C++ 抽象层把 D3D12、Vulkan、Metal、OpenGL 后端收拢起来，让同一份渲染代码跑在多平台。它是理解「现代跨平台图形层」怎么设计的现成教材。",
      "image": "https://opengraph.githubassets.com/1/DiligentGraphics/DiligentEngine",
      "source": "DiligentGraphics 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/DiligentGraphics/DiligentEngine",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "Diligent",
        "跨平台",
        "渲染层"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "C++ 跨平台渲染抽象",
            "统一 D3D12/Vulkan/Metal/GL",
            "MIT 许可、含编辑器"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "想把渲染逻辑从具体 API 里解耦，Diligent 的抽象粒度比直接用原生 API 友好，适合想写「可移植引擎」的人参照。"
        }
      ]
    },
    {
      "id": "en-armory",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Blender",
      "tag": "Armory",
      "title": "Armory 把 Blender 当编辑器、用游戏逻辑驱动，是「美术即开发环境」的范本",
      "summary": "笔者注意到，Armory 是开源 3D 引擎，直接把 Blender 作为编辑器与场景工具，用节点/脚本驱动实时游戏逻辑。它模糊了建模与运行之间的界限，是轻量实时 3D 工作流的样本。",
      "image": "https://opengraph.githubassets.com/1/armory3d/armory",
      "source": "armory3d 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/armory3d/armory",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "Armory",
        "Blender",
        "实时3D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Blender 内嵌编辑器",
            "节点 + 脚本驱动",
            "开源、跨平台导出"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对美术向的创作者，能在熟悉的工具里直接预览与调试游戏逻辑，省去反复导入导出的摩擦，是低门槛做实时 3D 的思路。"
        }
      ]
    },
    {
      "id": "jmonkey",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Java",
      "tag": "jMonkeyEngine",
      "title": "jMonkeyEngine 用 Java 写就的 3D 引擎，是 JVM 生态做游戏的现成底座",
      "summary": "笔者观察到，jMonkeyEngine 是 Java 生态少有的成熟 3D 游戏引擎，自带场景图、物理与网络模块。对熟悉 JVM 的团队，它是「不必换语言就能做 3D 游戏」的底座。",
      "image": "https://opengraph.githubassets.com/1/jMonkeyEngine/jmonkeyengine",
      "source": "jMonkeyEngine 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/jMonkeyEngine/jmonkeyengine",
      "readTime": "7 分钟",
      "hotScore": 80,
      "tags": [
        "jMonkey",
        "Java",
        "3D引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Java/Kotlin 友好",
            "内置场景图与物理",
            "BSD 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "想用一套语言贯通后端与游戏客户端，JVM 生态里它是少有的完整方案；代价是性能与生态不如 C++ 主流引擎。"
        }
      ]
    },
    {
      "id": "en-dawn",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·WebGPU",
      "tag": "Dawn",
      "title": "Dawn 把 WebGPU 实现成 C++ 库，是理解下一代图形 API 落地的钥匙",
      "summary": "笔者注意到，Dawn 是 Chrome 团队把 WebGPU 规范落地成的 C++ 实现（也是 Chromium 的 WebGPU 后端）。想真正搞懂 WebGPU 的管线、绑定与计算着色器，读它的源码比看规范直观。",
      "image": "https://opengraph.githubassets.com/1/google/dawn",
      "source": "google 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/google/dawn",
      "readTime": "8 分钟",
      "hotScore": 83,
      "tags": [
        "Dawn",
        "WebGPU",
        "C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "WebGPU 的 C++ 实现",
            "Chromium 实际后端",
            "跨平台、含示例代码"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "WebGPU 是继 WebGL 之后浏览器图形的下一个十年，想做 H5 游戏或引擎底层的人，Dawn 是绕不开的参考实现。"
        }
      ]
    },
    {
      "id": "en-angle",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·图形",
      "tag": "ANGLE",
      "title": "ANGLE 在图形 API 之间做翻译层，解释了 WebGL 为何能在各类 GPU 上跑起来",
      "summary": "笔者观察到，ANGLE 把 OpenGL ES 翻译成 D3D11/Vulkan/Metal/GL，是 Chrome 与众多引擎在 Windows 上跑 WebGL 的底层。它展示了「用翻译层换兼容性」的务实工程取舍。",
      "image": "https://opengraph.githubassets.com/1/google/angle",
      "source": "google 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/google/angle",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "ANGLE",
        "WebGL",
        "翻译层"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "ES→D3D/Vulkan/Metal",
            "Chrome 的 WebGL 底座",
            "解决驱动碎片化"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多图形兼容性问题不是算法而是「各家驱动各写各的」，ANGLE 这类翻译层正是用工程代价换掉碎片化的经典解法。"
        }
      ]
    },
    {
      "id": "en-webgpu",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·WebGPU",
      "tag": "webgpu-samples",
      "title": "webgpu-samples 用最小可运行代码讲清 WebGPU 管线与计算着色器",
      "summary": "笔者注意到，webgpu-samples 是官方风格的最小可运行 WebGPU 示例集，覆盖渲染管线、纹理、计算着色器到多后端。它是上手 WebGPU 最快的「抄代码」起点。",
      "image": "https://opengraph.githubassets.com/1/WebGPU/webgpu-samples",
      "source": "WebGPU 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/WebGPU/webgpu-samples",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "WebGPU",
        "示例",
        "计算着色器"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "最小可运行片段",
            "覆盖渲染/计算",
            "多后端对照"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "学新图形 API 最怕停留在概念，webgpu-samples 这种「每段都能直接跑」的合集，是把规范变成手感的最快路径。"
        }
      ]
    },
    {
      "id": "os-glfw",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "工具·窗口",
      "tag": "GLFW",
      "title": "GLFW 是窗口与输入的事实标准，几乎每个 C/C++ 图形项目都从它起步",
      "summary": "笔者观察到，GLFW 提供跨平台的窗口创建、上下文管理与键鼠/手柄输入，是 OpenGL/Vulkan 学习与原型的标准起点。想搭自己的渲染器，几乎都先 #include 它。",
      "image": "https://opengraph.githubassets.com/1/glfw/glfw",
      "source": "glfw 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/glfw/glfw",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "GLFW",
        "窗口",
        "C/C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "跨平台窗口/上下文",
            "键鼠与手柄输入",
            "轻量、无依赖"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "图形入门的第一道坎往往是「先把窗口开出来」，GLFW 把这件事标准化，让学习者把精力留给真正的渲染。"
        }
      ]
    },
    {
      "id": "os-openal",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "工具·音频",
      "tag": "OpenAL-soft",
      "title": "OpenAL-soft 是跨平台 3D 音频的开源实现，空间音效的底层依赖",
      "summary": "笔者注意到，OpenAL-soft 实现了 OpenAL 3D 音频 API，支持距离衰减、多普勒与混响，是很多引擎与游戏做空间音效的底座。音频常被忽视，却是沉浸感的关键。",
      "image": "https://opengraph.githubassets.com/1/kcat/OpenAL-soft",
      "source": "kcat 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/kcat/OpenAL-soft",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "OpenAL",
        "3D音频",
        "空间音效"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "OpenAL 3D 音频实现",
            "距离/多普勒/混响",
            "跨平台"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "不少团队把画面做到极致却用占位音效，OpenAL-soft 这类成熟库能让你低成本把「听感」也补齐。"
        }
      ]
    },
    {
      "id": "os-miniaudio",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "工具·音频",
      "tag": "miniaudio",
      "title": "miniaudio 单头文件音频引擎，把播放/混音/空间化压进一个轻量库",
      "summary": "笔者观察到，miniaudio 用单头文件（single-header）风格提供播放、混音、空间化与设备枚举，零外部依赖。想给引擎或工具快速接上音频，它比自己造轮子省太多。",
      "image": "https://opengraph.githubassets.com/1/mackron/miniaudio",
      "source": "mackron 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/mackron/miniaudio",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "miniaudio",
        "单头文件",
        "音频引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "single-header 设计",
            "播放/混音/空间化",
            "零外部依赖"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "single-header 库把「接进来就能用」做到极致，特别适合原型期与工具链，避免被构建系统拖住。"
        }
      ]
    },
    {
      "id": "os-nuklear",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "工具·GUI",
      "tag": "nuklear",
      "title": "nuklear 用 ANSI C 写即时模式 GUI，是工具面板的最简实现",
      "summary": "笔者注意到，nuklear 用纯 C 实现即时模式（immediate-mode）GUI，无依赖、易嵌入，适合做引擎内调试面板与工具。即时模式的逻辑简单、改起来直观。",
      "image": "https://opengraph.githubassets.com/1/vurtun/nuklear",
      "source": "vurtun 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/vurtun/nuklear",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "nuklear",
        "即时模式GUI",
        "C"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "ANSI C、无依赖",
            "即时模式",
            "易嵌入引擎工具"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "调试面板、关卡编辑器这类「每次重绘重建」的 UI，用即时模式比 retained GUI 更省心，nuklear 是轻量首选。"
        }
      ]
    },
    {
      "id": "os-rmlui",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "工具·UI",
      "tag": "RmlUi",
      "title": "RmlUi 用 HTML/CSS 描述 UI、C++ 渲染，桥接网页式布局与引擎",
      "summary": "笔者观察到，RmlUi（libRocket 的继任者）让你用类似 HTML/CSS 的标签与样式来描述界面，再由 C++ 渲染到纹理。想做复杂菜单又不想手写布局代码，它是好选择。",
      "image": "https://opengraph.githubassets.com/1/mikke89/RmlUi",
      "source": "mikke89 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/mikke89/RmlUi",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "RmlUi",
        "HTML/CSS",
        "UI"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "HTML/CSS 描述 UI",
            "C++ 渲染到纹理",
            "适合复杂菜单"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "让美术/策划用熟悉的网页式写法排界面，再交给引擎渲染，是兼顾效率与掌控力的折中方案。"
        }
      ]
    },
    {
      "id": "os-raygui",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "工具·GUI",
      "tag": "raygui",
      "title": "raygui 是 ray-lib 的即时模式 GUI，零依赖做出编辑器与调试面板",
      "summary": "笔者注意到，raygui 与 ray-lib 同源，提供即时模式的控件集合，单头文件、零依赖，几行就能拼出调试面板或关卡工具。小项目做工具链尤其顺手。",
      "image": "https://opengraph.githubassets.com/1/raysan5/raygui",
      "source": "raysan5 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/raysan5/raygui",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "raygui",
        "ray-lib",
        "即时模式"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "ray-lib 配套 GUI",
            "单头文件、零依赖",
            "快速搭工具面板"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "和 ray-lib 一样强调「少即是多」，raygui 适合做原型期的编辑器与调试界面，不必引入重型 UI 框架。"
        }
      ]
    },
    {
      "id": "tu-openglseries",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·图形",
      "tag": "OpenGL Series",
      "title": "Tom Dalling 的 OpenGL 系列把矩阵/光照/着色器拆成可跟练的小步",
      "summary": "笔者观察到，Tom Dalling 的 OpenGL 教程把矩阵变换、光照模型与着色器拆成循序渐进的小节，每段都能跟上手敲。对图形学新手，它是比文档更平缓的入门曲线。",
      "image": "https://opengraph.githubassets.com/1/tomdalling/opengl-series",
      "source": "tomdalling 开发者博客（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/tomdalling/opengl-series",
      "readTime": "8 分钟",
      "hotScore": 86,
      "tags": [
        "OpenGL",
        "图形学",
        "入门"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "矩阵变换分步讲",
            "光照与着色器实战",
            "可跟练代码"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "图形学最怕一上来就被数学劝退，这套教程先把「能跑出东西」建立起来，再补原理，节奏对新人友好。"
        }
      ]
    },
    {
      "id": "tu-sebpath",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·算法",
      "tag": "Pathfinding",
      "title": "SebLague 的寻路项目把 A*/流场可视化，是把算法看「动」的教材",
      "summary": "笔者注意到，SebLague 的寻路仓库用 Unity 把 A*、流场与跳点搜索做成可视化演示，代码清晰、注释友好。想理解寻路怎么在游戏里落地，看它比读论文直观。",
      "image": "https://opengraph.githubassets.com/1/SebLague/Pathfinding",
      "source": "SebLague 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/SebLague/Pathfinding",
      "readTime": "9 分钟",
      "hotScore": 87,
      "tags": [
        "寻路",
        "A*",
        "可视化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "A*/流场/跳点搜索",
            "Unity 可视化演示",
            "代码清晰易读"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "算法只有跑起来、动起来才容易被消化，这类把抽象逻辑做成可交互演示的仓库，是自学最省力的杠杆。"
        }
      ]
    },
    {
      "id": "tu-sebplanet",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·生成",
      "tag": "Procedural Planets",
      "title": "SebLague 的程序化星球从噪声到地形，演示噪声在生成里的用法",
      "summary": "笔者观察到，SebLague 的程序化星球项目从单纯值噪声一路做到地形着色与大气，是理解「程序化生成」如何由简入繁的连贯样本。生成式内容正成为 AI 时代的基础功。",
      "image": "https://opengraph.githubassets.com/1/SebLague/Procedural-Planets",
      "source": "SebLague 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/SebLague/Procedural-Planets",
      "readTime": "9 分钟",
      "hotScore": 85,
      "tags": [
        "程序化",
        "噪声",
        "生成"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "噪声→地形→大气",
            "一步步由简入繁",
            "Unity 实现"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "当 AI 能生成素材，人类更该掌握「可控的程序化规则」。这个项目把生成的层次拆得很清楚，值得反复看。"
        }
      ]
    },
    {
      "id": "tu-shaders",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·着色器",
      "tag": "3D Game Shaders",
      "title": "lettier 的着色器入门用可运行片段讲清法线/光照/后处理",
      "summary": "笔者注意到，lettier 的 3D 游戏着色器入门把法线贴图、光照模型与后处理写成可运行的 Web 片段，每节一个可见效果。学 Shader 最怕只看公式，这套让你立刻看到结果。",
      "image": "https://opengraph.githubassets.com/1/lettier/3d-game-shaders-for-beginners",
      "source": "lettier 官方仓库（一手）",
      "date": "2026-11-06",
      "url": "https://github.com/lettier/3d-game-shaders-for-beginners",
      "readTime": "9 分钟",
      "hotScore": 86,
      "tags": [
        "着色器",
        "法线",
        "后处理"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "法线贴图与光照",
            "后处理可运行片段",
            "每节一个可见效果"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Shader 学习的关键是把数学和画面直接挂钩，lettier 这套「改一下就看到变化」的编排，最能降低初学门槛。"
        }
      ]
    },
    {
      "id": "tu-scratch",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·数学",
      "tag": "Scratchapixel",
      "title": "Scratchapixel 用推导+代码讲透光线追踪与图形数学，理论派首选",
      "summary": "笔者观察到，Scratchapixel 以「先推导再看代码」的方式讲透光线追踪、矩阵与着色背后的数学，适合想真正搞懂原理而非只调参数的学习者。理论扎实后再写引擎才有底气。",
      "image": "",
      "source": "Scratchapixel（一手教程站）",
      "date": "2026-11-06",
      "url": "https://www.scratchapixel.com/",
      "readTime": "10 分钟",
      "hotScore": 84,
      "tags": [
        "光线追踪",
        "图形数学",
        "原理"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "推导 + 代码并重",
            "覆盖追踪与 3D 数学",
            "理论派系统教材"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "会调参不等于懂原理；想从「用引擎」走到「造引擎」，Scratchapixel 这种把数学讲透的站是绕不开的。"
        }
      ]
    },
    {
      "id": "ga-moonsweepers",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·独立",
      "tag": "Moon Sweepers",
      "title": "《Moon Sweepers》首周冲近 7.7 万并发，独立飞行射击仍有市场",
      "summary": "笔者注意到，《Moon Sweepers》发售首周爬到约 7.7 万同时在线，成为又一款 Steam 独立黑马。它用飞行射击 + 探索的组合证明：没有 3A 预算，靠玩法清晰也能拿下大流量。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/5335510/9c11c35d11b6804fdf1c49429cf87f9d14b49041/capsule_616x353.jpg?t=1792950881",
      "source": "Steam（一手商店页）",
      "date": "2026-11-06",
      "url": "https://store.steampowered.com/app/5335510/Moon_Sweepers/",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "Moon Sweepers",
        "独立",
        "飞行射击"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "首周约 7.7 万并发",
            "飞行射击 + 探索",
            "独立黑马"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "中小开发者最需要的不是更花哨，而是「一眼看懂、上手即爽」的核心循环，这款的爆发再次印证了这点。"
        }
      ]
    },
    {
      "id": "ga-loftia",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·生活模拟",
      "tag": "Loftia",
      "title": "《Loftia》把经营/探索/多人塞进浮空岛，温馨生活模拟的新样本",
      "summary": "笔者观察到，11/4 发售的《Loftia》把经营、制造、探索与多人社区结合在浮空岛上，主打可持续与协作。生活模拟赛道依旧稳健，且有向「共享世界」演化的趋势。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2320980/9461189df97bd8eda3ca5fc80f1c59d767e6cd5b/capsule_616x353.jpg?t=1793732506",
      "source": "Steam（一手商店页）",
      "date": "2026-11-06",
      "url": "https://store.steampowered.com/app/2320980/Loftia/",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Loftia",
        "生活模拟",
        "多人"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "浮空岛生活模拟",
            "可持续/协作主题",
            "11/4 发售"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "当单机叙事饱和，把社交与共同建设塞进温馨画风，是生活模拟品类持续吸引新人的法宝。"
        }
      ]
    },
    {
      "id": "ga-deusmantle",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·生存",
      "tag": "Deus Mantle",
      "title": "EA 的《Deus Mantle》以程序生成开放世界生存，是发行商试水品类",
      "summary": "笔者注意到，EA 旗下《Deus Mantle》于 11/2 发售，主打程序生成开放世界与生存沙盒。大厂亲自下场做沙盒生存，说明这一用户自创内容的赛道仍被看好。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3116870/f8f7b157bbcb017014d251e52c0def6ea3086a74/capsule_616x353.jpg?t=1793620356",
      "source": "Steam（一手商店页）",
      "date": "2026-11-06",
      "url": "https://store.steampowered.com/app/3116870/Deus_Mantle/",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Deus Mantle",
        "开放世界",
        "生存沙盒"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "程序生成开放世界",
            "生存/建造/打怪",
            "EA 发行"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "沙盒生存的天花板在「玩家自己造内容」，大厂入场会带来更规范的工具链，也意味着竞争更卷。"
        }
      ]
    },
    {
      "id": "ga-wendyquest",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·冒险",
      "tag": "WendyQuest",
      "title": "《WendyQuest》把快餐 IP 做成奇幻冒险，边玩还能换真实食物",
      "summary": "笔者观察到，《WendyQuest: Legend of the Four Corner Stones》11/3 上线，把快餐品牌世界观化成一个战斗冒险，且游玩中可赚到可兑换的真实食物。跨界联动做成了玩法而非纯广告。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/3339970/e112285f58932dbadd236550b9e41b66a5c1395c/capsule_616x353.jpg?t=1793766979",
      "source": "Steam（一手商店页）",
      "date": "2026-11-06",
      "url": "https://store.steampowered.com/app/3339970/WendyQuest_Legend_of_the_Four_Corner_Stones/",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "WendyQuest",
        "跨界联动",
        "真实奖励"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "快餐 IP 奇幻化",
            "战斗 + 探索主线",
            "可换真实食物"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "品牌联动最怕做成贴片广告，把它编进玩法与叙事、再给玩家真实回馈，才是把营销变体验的做法。"
        }
      ]
    },
    {
      "id": "ga-lasttrophy",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·冒险",
      "tag": "The Last Trophy",
      "title": "《The Last Trophy》以迫降外星开场，紧凑叙事驱动的探索冒险",
      "summary": "笔者注意到，《The Last Trophy》11/3 发售，用一段神秘信号与迫降开场，把玩家丢进陌生星球寻找飞船。手绘风格 + 紧凑叙事，是独立冒险里「少而密」的代表。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2100410/b20cd9ff730fbe70dda0c55e6b6853942a0f89f2/capsule_616x353.jpg?t=1793748775",
      "source": "Steam（一手商店页）",
      "date": "2026-11-06",
      "url": "https://store.steampowered.com/app/2100410/The_Last_Trophy/",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "The Last Trophy",
        "探索",
        "叙事冒险"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "迫降外星开场",
            "手绘风探索",
            "悬念驱动"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "独立冒险不必靠时长取胜，一个抓人的开场与清晰的目标，就能让玩家自愿投入每一分钟。"
        }
      ]
    },
    {
      "id": "ga-holdlevee",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·策略",
      "tag": "Hold The Levee",
      "title": "《Hold The Levee》把每一格水流都算进去，治水成了硬核策略",
      "summary": "笔者观察到，《Hold The Levee》11/3 发售，对地图每格做水流模拟：水往低处流、灌满洼地、顶着堤坝施压还会渗漏。把「治水」做成格子级物理策略，是题材创新的好样本。",
      "image": "https://shared.fastly.steamstatic.com/store_item_assets/steam/apps/2905910/ca299ba4e1a4a3670e5c24ba22a23734a66157f6/capsule_616x353.jpg?t=1793738006",
      "source": "Steam（一手商店页）",
      "date": "2026-11-06",
      "url": "https://store.steampowered.com/app/2905910/Hold_The_Levee/",
      "readTime": "5 分钟",
      "hotScore": 80,
      "tags": [
        "Hold The Levee",
        "治水",
        "物理策略"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "逐格水流模拟",
            "挖沟/筑堤/修坝",
            "24 个战役任务"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把真实物理缩进格子、再包装成关卡目标，这类「系统即玩法」的设计，比堆数值更有记忆点。"
        }
      ]
    },
    {
      "id": "ind-nagoshi",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·解散",
      "tag": "名越工作室",
      "title": "名越工作室解散：《如龙》之父单飞五年，一款游戏未发即落幕",
      "summary": "笔者观察到，由《如龙》系列制作人名越稔洋创立、网易全资出资的名越工作室，已于 10/31 经股东决议解散并进入清算，首作《Gang of Dragon》尚未发售即终止。单一金主抽资，项目便归零。",
      "image": "https://assetsio.gnwcdn.com/Screenshot-2026-03-07-at-17.05.06.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "source": "Eurogamer（一手报道）",
      "date": "2026-11-06",
      "url": "https://www.eurogamer.net/yakuza-creator-new-studio-closed-netease",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "名越工作室",
        "网易",
        "解散"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "10/31 股东决议解散",
            "《Gang of Dragon》未发售即止",
            "网易全资、撤资收尾"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "单靠一个大厂金主，抗风险能力近乎为零；对独立团队，保留 IP 与资产、分散资金源，比追高估值更务实。"
        }
      ]
    },
    {
      "id": "ind-krafton",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·资本",
      "tag": "Krafton",
      "title": "Krafton 拟 3000 亿韩元回购并注销，新游未兑现先护盘",
      "summary": "笔者观察到，Krafton 11/4 披露将以约 3000 亿韩元（约 165 万股）回购并注销自家股票，当日股价一度涨逾 10%。在多款新游尚未完全转化前，公司用回购当缓冲，也向市场传递信心。",
      "image": "https://biz.chosun.com/resizer/v2/GFRTIYJWMJSWCMZWMUYWCMZVGQ.jpg?auth=1661775a4a397c3151177eb34e3f44214a9f8f6d8947e21a4eac845d1ea771bd&width=984&height=516&smart=true",
      "source": "朝鲜日报（一手报道）",
      "date": "2026-11-06",
      "url": "https://biz.chosun.com/en/en-finance/2026/11/04/3QPJNMWCUFBPLPH4GQYO7YS7DU/",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Krafton",
        "回购",
        "资本"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "约 3000 亿韩元回购注销",
            "当日股价涨逾 10%",
            "新游兑现前的护盘"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "韩国头部游戏股用回购对冲盈利预期走弱，也提醒我们：游戏公司的股价越来越看「管线兑现」而非单款爆款。"
        }
      ]
    },
    {
      "id": "ind-youzu",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·算力",
      "tag": "游族网络",
      "title": "游族网络拟 42.25 亿采购 Blackwell GPU，游戏公司重金下注算力",
      "summary": "笔者观察到，游族网络 11/3 公告全资子公司拟以 42.25 亿元采购 NVIDIA RTX PRO 5500（Blackwell 工作站级）GPU，约相当于其去年营收的 3 倍。从「用 AI 做游戏」走向「重金买算力」，是一记激进转型。",
      "image": "",
      "source": "第一财经 / 网易（一手转引）",
      "date": "2026-11-06",
      "url": "https://dy.163.com/article/LAT8JH9E0519DDQ2.html",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "游族网络",
        "GPU",
        "算力转型"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "42.25 亿元采购 GPU",
            "约去年营收 3 倍",
            "Blackwell 工作站卡"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "游戏公司押注算力既是对 AI 第二曲线的焦虑，也藏着现金流与条款风险；对从业者，懂 AI 基础设施正变成加分项。"
        }
      ]
    },
    {
      "id": "ind-jobcuts",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·裁员",
      "tag": "全球裁员",
      "title": "2026 全球游戏业裁员破 1.1 万，韩国厂商反向抢 AI 新人",
      "summary": "笔者观察到，非营利组织 ASGC 统计：截至 10/20，2026 年全球游戏业已确认裁员 10,977 人，超过 2025 全年；与此同时 Krafton、Nexon 等韩厂却扩大招募具备 AI 技能的应届生。行业在「砍旧岗」与「抢 AI 人」之间重写用人逻辑。",
      "image": "https://wimg.sedaily.com/news/cms/2026/11/04/news-p.v1.20261104.889cf86fcd4f48678a150990f7a16367_P1.jpg",
      "source": "首尔经济日报（一手报道）",
      "date": "2026-11-06",
      "url": "https://en.sedaily.com/technology/2026/11/04/game-industry-cuts-11000-jobs-while-hiring-ai-savvy-recruits",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "裁员",
        "AI 招聘",
        "行业洗牌"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "已裁 10,977 人",
            "超 2025 全年",
            "韩厂反向抢 AI 新人"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「更少的人、更高的 AI 素养」正在成为行业新常态；对求职者，AI 协作能力已从加分项变成入场券。"
        }
      ]
    },
    {
      "id": "ind-nightdive",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购",
      "tag": "Nightdive",
      "title": "Nightdive CEO：收购后强改被购工作室内核，几乎注定失败",
      "summary": "笔者观察到，Nightdive Studios CEO Stephen Kick 在 PAX West 提出：大厂收购工作室后若强行改写其原有打法，往往几年后就把团队做死；他以 EA 关闭 BioWare 为例，并盛赞 Atari 的「放手」式并购。",
      "image": "",
      "source": "Game Developer（一手报道）",
      "date": "2026-11-06",
      "url": "https://www.gamedeveloper.com/business/night-dive-studios-ceo-says-atari-is-demonstrating-right-way-to-do-acquisitions",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Nightdive",
        "并购",
        "工作室管理"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "强改内核多致失败",
            "EA/BioWare 为反面案例",
            "Atari 放手模式受赞"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对想被收购或已并购的团队，这条经验很实在：买的是能力，不该买完就把人家的强项拆掉。"
        }
      ]
    },
    {
      "id": "ai-kimi",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "Kimi 游戏方案",
      "title": "月之暗面 Kimi 发布游戏开发方案，让 Agent 直接操作 Unity/UE/Blender",
      "summary": "笔者观察到，月之暗面 11/3 发布面向游戏开发与创意工作的解决方案，基于 Kimi K3.1 系列模型，配合 KimiCode/KimiWork 与 Unity、虚幻、Blender 插件，让 Agent 直接改工程、出可继续编辑的文件。",
      "image": "",
      "source": "上海证券报·中国证券网（一手）",
      "date": "2026-11-06",
      "url": "https://www.cnstock.com/commonDetail/822746",
      "readTime": "8 分钟",
      "hotScore": 94,
      "tags": [
        "Kimi",
        "游戏开发",
        "Agent"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "K3.1 + 引擎插件",
            "Agent 直改工程",
            "交付可编辑文件"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "当 AI 能直接操作专业工具而非只吐文字，原型验证的门槛被大幅压低；但可靠性与审计成本，决定了它短期是加速器而非替代者。"
        }
      ]
    },
    {
      "id": "ai-anthropic",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·合规",
      "tag": "Claude 克隆",
      "title": "Anthropic 给 Claude 加规则：不许复刻他人游戏，AI 克隆潮遇阻",
      "summary": "笔者观察到，Anthropic 于 10/27 在 Claude Code 中加入规则，引导其「不要复刻他人具体游戏」，并在 10/30 确认这是针对 Opus 5.5 的主动约束。AI 复刻泛滥后，平台方开始用提示词划线。",
      "image": "",
      "source": "Game Developer（一手报道）",
      "date": "2026-11-06",
      "url": "https://gamedeveloper.com/programming/anthropic-appears-to-have-ordered-ai-tool-claude-to-stop-remaking-video-games",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "Anthropic",
        "Claude",
        "IP 合规"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "10/27 加规则",
            "针对 Opus 5.5",
            "限制复刻具体游戏"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "提示词红线只能拦住最懒的克隆者，真正的解法仍在平台治理与开发者侧的 Demo 保护之间找平衡。"
        }
      ]
    },
    {
      "id": "ai-roblox",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·代理",
      "tag": "Roblox 数据",
      "title": "Roblox 承认 AI 代理误抓成人 3D 资源，称不用于训练",
      "summary": "笔者观察到，Roblox 确认一名研究者的 AI 代理从 Open3DLab 等站批量下载了约 145.5GB 内容（含成人 3D 资源），称该代理已停用、数据不用于任何训练。AI 数据采集的合规边界再被推到台前。",
      "image": "",
      "source": "Game Developer（一手报道）",
      "date": "2026-11-06",
      "url": "https://www.gamedeveloper.com/business/roblox-confirms-no-adult-content-used-in-ai-training-after-scraping-open3dlab-data",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "Roblox",
        "AI 代理",
        "数据合规"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "误抓 145.5GB 资源",
            "含成人 3D 内容",
            "代理停用、不用于训练"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "当 AI 代理被指向成人站且未做内容过滤，暴露的是自动化采集的治理缺口；对平台，这比模型能力更该被优先修补。"
        }
      ]
    },
    {
      "id": "ai-cloning",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·复刻",
      "tag": "AI 复刻潮",
      "title": "AI 复刻潮反噬：反编译从数月缩到日产，itch.io 页面两月翻倍",
      "summary": "笔者观察到，过去四周社区被 AI 复刻刷屏：Claude Opus 5.5 把反编译从数月压缩到日产，itch.io 日均新增游戏页面两个月内翻倍，多家工作室因担心被克隆而取消试玩 Demo。技术红利正变成双刃剑。",
      "image": "",
      "source": "18183 游戏网（一手报道）",
      "date": "2026-11-06",
      "url": "https://news.18183.com/yxxw/202611/9079185.html",
      "readTime": "7 分钟",
      "hotScore": 89,
      "tags": [
        "AI 复刻",
        "反编译",
        "itch.io"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "反编译缩到日产",
            "itch.io 页面两月翻倍",
            "工作室取消 Demo 自保"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「种什么因得什么果」正在行业上演：当初大方用 AI 的发行商，如今撞上 AI 复刻的枪口；保护原创 Demo 仍是未解难题。"
        }
      ]
    },
    {
      "id": "ai-epic",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·编码",
      "tag": "Epic AI 编码",
      "title": "Epic 副总裁：AI 编码工具消灭了虚幻里十年的「非确定性烹饪 bug」",
      "summary": "笔者观察到，Epic 一位副总裁称，AI 编码工具帮团队清掉了虚幻引擎里存在约十年的「非确定性烹饪（cooking）bug」——这类偶发、难复现的错误正是大代码库最磨人的部分。",
      "image": "",
      "source": "Game Developer（一手报道）",
      "date": "2026-11-06",
      "url": "https://www.gamedeveloper.com/programming/epic-vp-says-ai-code-tools-have-stomped-out-decade-old-non-deterministic-cooking-bugs-in-unreal-engine",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "Epic",
        "虚幻引擎",
        "AI 编码"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "十年偶发 bug 被清掉",
            "非确定性 cooking 错误",
            "AI 辅助大型代码库"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "AI 编码真正的价值未必是写新功能，而是啃下人类长期回避的「脏活」——这类隐藏成本，正是大引擎的痛点。"
        }
      ]
    },
    {
      "id": "ct-gmtk",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "Game Jam",
      "tag": "GMTK Jam 2027",
      "title": "GMTK Game Jam 2027 报名开放，全球最大社区 Jam 之一",
      "summary": "笔者注意到，GMTK Game Jam 2027 已在 itch.io 开放报名（提交窗口为 2027/8/12–8/16）。作为全球规模最大的社区 Jam 之一，往届曾涌出上万款作品，是练手与冲简历的黄金场。",
      "image": "",
      "source": "itch.io（一手 Jam 页）",
      "date": "2026-11-06",
      "url": "https://itch.io/jam/gmtk-2027",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "GMTK",
        "Game Jam",
        "itch.io"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "2027/8/12–8/16 提交",
            "全球最大社区 Jam 之一",
            "往届上万款作品"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "限时 Jam 是逼自己「先完成再完美」的最佳训练场；新手别纠结画面，先把核心循环跑通再冲名次。"
        }
      ]
    },
    {
      "id": "ct-kingame",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "金山世游 27秋招",
      "title": "金山世游 2027 届校招开启，研发/AI/发行多方向同步招人",
      "summary": "笔者观察到，金山世游（西山居体系）2027 届校园招聘已开启，覆盖客户端/引擎/AI 算法/发行等方向，工作地北京、武汉。对想进中大型研发体系、又看重完整培养链的应届生是不错入口。",
      "image": "https://www.upcv.tech/image/ui/og-default.jpg",
      "source": "UP 求职（校招拆解）",
      "date": "2026-11-06",
      "url": "https://www.upcv.tech/xiaozhao/cmu2fyxwd0000m9gvohpxob2v.html",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "金山世游",
        "校招",
        "2027届"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "2027 届校招开启",
            "研发/AI/发行多方向",
            "北京/武汉"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "校招是进中大型厂商最稳的通道；投前确认目标岗位是否开放，比盲目海投更关键。"
        }
      ]
    },
    {
      "id": "ct-boke",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "波克科技 27校招",
      "title": "波克科技 2027 校招启动，休闲游戏主力扩招技术岗",
      "summary": "笔者注意到，波克科技 2027 校园招聘启动，重点招募 Unity/Cocos 客户端、C++ 与 AI 应用等研发岗，并推出 BOKE Tech ∞ 技术品牌连接竞赛与实习。休闲游戏头部厂商的技术栈值得应届生关注。",
      "image": "",
      "source": "北京大学就业信息网（官方发布）",
      "date": "2026-11-06",
      "url": "https://scc.pku.edu.cn/frontpage/pku/html/recruitmentinfoForm.html?&positionDetailId=872896bdf0b3441ba364f916425f3ddd",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "波克科技",
        "校招",
        "休闲游戏"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Unity/Cocos/C++ 研发岗",
            "AI 应用方向",
            "BOKE Tech ∞ 计划"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "休闲游戏讲究极致的性能与运营效率，对应届生是把工程基本功打磨扎实的好去处。"
        }
      ]
    },
    {
      "id": "ct-netease",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "网易互娱 27届",
      "title": "网易互娱 2027 届秋招正式批，八大方向同步开放",
      "summary": "笔者观察到，网易互娱 2027 届校园招聘正式批已开启，覆盖策划/研发技术/美术/测试/用户体验/市场/运营/项目管理八大方向，工作地广州、杭州、上海可选，流程含笔试与多轮面试。",
      "image": "",
      "source": "重庆高校就业平台（官方发布）",
      "date": "2026-11-06",
      "url": "https://24365.cq.smartedu.cn/campus/view/id/733453",
      "readTime": "4 分钟",
      "hotScore": 84,
      "tags": [
        "网易互娱",
        "校招",
        "2027届"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "八大方向同步开放",
            "广州/杭州/上海",
            "笔试 + 多轮面试"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "头部厂商校招流程规范、培养体系完整；面试前把游戏经历与作品集整理扎实，比临时抱佛脚有效得多。"
        }
      ]
    },
    {
      "id": "ct-lilith",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "莉莉丝 2027校招",
      "title": "莉莉丝游戏 2027 校招进行中，出海大厂技术/发行热招",
      "summary": "笔者注意到，莉莉丝游戏 2027 校园招聘正在进行，面向 2027 届开放技术/产品/发行/测试/项目管理等方向，工作地上海，并提供校招储备实习。出海代表厂商的岗位对想做全球发行的人很有价值。",
      "image": "",
      "source": "温州大学就业信息网（官方发布）",
      "date": "2026-11-06",
      "url": "https://job.wzu.edu.cn/campus/view/id/495330",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "莉莉丝",
        "校招",
        "出海"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "2027 届校招进行中",
            "技术/发行/测试热招",
            "上海 + 储备实习"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "出海厂商对多语言、本地化与全球运营经验更看重，想走国际线的应届生可以重点留意这类岗位。"
        }
      ]
    }
  ]
};
