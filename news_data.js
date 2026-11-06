window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-07",
    "weekday": "星期六",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-07 07:30",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "《影之刃零》三天破 400 万份、Steam 峰值 83 万，国产武侠动作站上 2026 最大首发",
      "Epic AI MegaJam 11/12 开赛：四人 + 不限量 Agent，四天冲 6.5 万美元",
      "引擎矩阵精读：OGRE / Magnum / Filament / Torque3D / libGDX / LWJGL",
      "开源宝库：Dear ImGui / EnTT / spdlog / fmt / GLM / meshoptimizer",
      "行业风向：育碧竞购 Arkane Lyon、Compulsion 独立、上古卷轴6 定名 Sentinel"
    ],
    "engineStatus": [
      {
        "name": "OGRE 3D",
        "type": "ogre",
        "status": "成熟 C++ 渲染",
        "badge": "开源引擎",
        "color": "cyan"
      },
      {
        "name": "Magnum",
        "type": "magnum",
        "status": "跨平台 C++",
        "badge": "轻量引擎",
        "color": "blue"
      },
      {
        "name": "Filament",
        "type": "filament",
        "status": "PBR 移动渲染",
        "badge": "Google 开源",
        "color": "emerald"
      },
      {
        "name": "Torque3D",
        "type": "torque",
        "status": "全功能 3D",
        "badge": "开源引擎",
        "color": "orange"
      },
      {
        "name": "libGDX",
        "type": "libgdx",
        "status": "Java 跨平台",
        "badge": "移动友好",
        "color": "violet"
      },
      {
        "name": "LWJGL",
        "type": "lwjgl",
        "status": "Java 底层绑定",
        "badge": "OpenGL/Vulkan",
        "color": "red"
      }
    ]
  },
  "hero": {
    "id": "ga-phantombladezero-hero",
    "category": "games",
    "categoryName": "热门游戏",
    "tag": "影之刃零",
    "title": "《影之刃零》三天破 400 万份、Steam 峰值 83 万，国产武侠动作站上 2026 最大首发",
    "summary": "笔者观察到，《影之刃零》10/29 发售后三天卖出 400 万份、Steam 同时在线冲到 83.4 万，是今年 Steam 体量最大的首发之一。它用电影化刀法 + 大量动捕，证明非西方团队也能做出千万级 3A 动作。",
    "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/4115450/header.jpg",
    "source": "Steam / S-GAME 官方战报（一手）",
    "date": "2026-11-07",
    "url": "https://store.steampowered.com/app/4115450/Phantom_Blade_Zero/",
    "readTime": "5 分钟",
    "hotScore": 94,
    "tags": [
      "影之刃零",
      "Phantom Blade Zero",
      "国产3A",
      "Steam首发"
    ],
    "content": [
      {
        "title": "本次要点",
        "type": "list",
        "items": [
          "三天 400 万份、跨 Steam/PS5/WeGame",
          "Steam 峰值 833,921 同时在线",
          "Metacritic 88，动作演出获好评"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "它和《黑神话》共同推动一个信号：中国工作室已具备做出全球量级动作 3A 的产能。对独立团队而言，更重要的是它验证了「高完成度单体玩法 + 强演出」仍能撬动大众市场，而非一味堆开放世界。"
      }
    ]
  },
  "items": [
    {
      "id": "en-ogre",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "OGRE 3D",
      "title": "OGRE 用一套面向对象场景图把 C++ 渲染管线的复杂度收住，是老牌 3D 引擎的活样本",
      "summary": "笔者观察到，OGRE 至今仍是 C++ 端最成熟的场景图引擎之一，把渲染队列、材质、阴影与插件体系封装得相当完整。想理解「工业级渲染层怎么组织」，它是绕不开的现成教材。",
      "image": "https://opengraph.githubassets.com/1/OGRECave/ogre",
      "source": "OGRECave 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/OGRECave/ogre",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "OGRE",
        "C++",
        "场景图"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "面向对象场景图",
            "材质/阴影/插件化",
            "MIT 许可、跨平台"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "比起从零造轮子，读 OGRE 能快速建立「渲染后端如何对上层屏蔽差异」的直觉，适合想写可维护引擎的人参照。"
        }
      ]
    },
    {
      "id": "en-magnum",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "Magnum",
      "title": "Magnum 把「轻量 + 模块化」做到极致，是 C++ 跨平台图形层的现代范本",
      "summary": "笔者注意到，Magnum 用极简的依赖和清晰的模块划分，覆盖了从窗口、纹理到着色器的全链路，还能直接跑在 WebGL/WebGPU 上。它展示了现代 C++ 引擎该有的样子。",
      "image": "https://opengraph.githubassets.com/1/mosra/magnum",
      "source": "mosra 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/mosra/magnum",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "Magnum",
        "C++",
        "跨平台"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "模块化无负担依赖",
            "WebGL/WebGPU 直跑",
            "示例覆盖全图形栈"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它的「能拆就拆」哲学值得借鉴：教学或原型项目里，轻依赖比全家桶更能让人读得进去源码。"
        }
      ]
    },
    {
      "id": "en-filament",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·渲染",
      "tag": "Filament",
      "title": "Filament 是 Google 出品的 PBR 引擎，把「移动端实时物理渲染」做成了开源样板",
      "summary": "笔者观察到，Filament 专为移动与桌面实时 PBR 设计，着色器、IBL、后处理都按性能预算精打细算。想做高保真又怕掉帧的移动渲染，它是首选参照。",
      "image": "https://opengraph.githubassets.com/1/google/filament",
      "source": "Google 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/google/filament",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": [
        "Filament",
        "PBR",
        "移动渲染"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "实时 PBR 优先移动",
            "IBL/后处理齐全",
            "Apache-2.0 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "移动端渲染最难的不是「画得美」，而是「美且不烫」。Filament 的预算思维是做手游美术管线时最好的反面教材参照。"
        }
      ]
    },
    {
      "id": "en-torque3d",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "Torque3D",
      "title": "Torque3D 是久经实战的开源 3D 引擎，自带编辑器与网络层仍不过时",
      "summary": "笔者注意到，Torque3D 从商业引擎开源而来，内置场景编辑器、粒子、地形与客户端-服务器网络，适合做多人原型。它证明「全功能」和「开源」并不矛盾。",
      "image": "https://opengraph.githubassets.com/1/TorqueGameEngines/Torque3D",
      "source": "TorqueGameEngines 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/TorqueGameEngines/Torque3D",
      "readTime": "7 分钟",
      "hotScore": 80,
      "tags": [
        "Torque3D",
        "C++",
        "全功能"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "内置编辑器与网络",
            "地形/粒子齐全",
            "BSD-3 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对想快速搭一个带联机能力的 demo 的团队，Torque3D 的「开箱即玩」比从零接网络库省太多事。"
        }
      ]
    },
    {
      "id": "en-libgdx",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Java",
      "tag": "libGDX",
      "title": "libGDX 用 Java 一套代码覆盖桌面/移动/Web，是 JVM 生态做游戏最稳的底座",
      "summary": "笔者观察到，libGDX 把 OpenGL 封装成统一 API，配合 Gradle 一套工程就能出多端包。对熟悉 Java/Kotlin 的开发者，它是「不必换语言也能做游戏」的低门槛入口。",
      "image": "https://opengraph.githubassets.com/1/libgdx/libgdx",
      "source": "libGDX 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/libgdx/libgdx",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "libGDX",
        "Java",
        "跨平台"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "统一 GL 封装",
            "桌面/移动/Web 同工程",
            "Apache-2.0 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "做教学或内部工具型小游戏时，libGDX 的「零心智负担多端」特性比重型引擎更顺手。"
        }
      ]
    },
    {
      "id": "en-lwjgl3",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Java",
      "tag": "LWJGL",
      "title": "LWJGL 是 Java 访问 OpenGL/Vulkan/OpenAL 的底层绑定，引擎作者绕不开的基石",
      "summary": "笔者注意到，LWJGL 把系统级图形/音频/输入 API 直接暴露给 Java，libGDX 等上层引擎都立在它之上。想自己写渲染循环，它是 Java 世界最贴近硬件的那一层。",
      "image": "https://opengraph.githubassets.com/1/LWJGL/lwjgl3",
      "source": "LWJGL 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/LWJGL/lwjgl3",
      "readTime": "7 分钟",
      "hotScore": 80,
      "tags": [
        "LWJGL",
        "Java",
        "底层绑定"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "OpenGL/Vulkan 绑定",
            "OpenAL/输入/窗口",
            "BSD-3 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "理解 LWJGL 就理解了「Java 游戏为什么能跑到原生性能」——它把 JVM 和驱动之间的那道桥修得很薄。"
        }
      ]
    },
    {
      "id": "en-deki",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·新兴",
      "tag": "Deki Engine",
      "title": "Deki Engine 是仍在成长中的开源游戏引擎，适合作为「读得动的现代引擎源码」",
      "summary": "笔者观察到，Deki Engine 以清晰的小步迭代推进，代码量适中、概念现代，是把「引擎到底怎么搭」讲明白的好样本，比直接啃巨无霸源码友好得多。",
      "image": "https://opengraph.githubassets.com/1/dekiengine/deki-engine",
      "source": "dekiengine 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/dekiengine/deki-engine",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "Deki",
        "开源引擎",
        "现代架构"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "小步现代迭代",
            "代码量适中",
            "适合阅读学习"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "入门引擎架构时，与其盯着千万行级项目发愁，不如从 Deki 这种「能读完」的项目建立整体心智模型。"
        }
      ]
    },
    {
      "id": "os-imgui",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·UI",
      "tag": "Dear ImGui",
      "title": "Dear ImGui 用 immediate-mode 把调试面板写得又快又轻，是引擎工具链标配",
      "summary": "笔者观察到，Dear ImGui 不追求「漂亮」，而是追求「随时能加控件」。引擎编辑器、性能面板、关卡调试几乎都靠它，是工具向 UI 的事实标准。",
      "image": "https://opengraph.githubassets.com/1/ocornut/imgui",
      "source": "ocornut 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/ocornut/imgui",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Dear ImGui",
        "UI",
        "调试面板"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "immediate-mode 范式",
            "零依赖、极易嵌入",
            "引擎工具链标配"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它提醒我们：工具 UI 的 KPI 是「迭代速度」而非「美观」。先做对功能，再把界面交给正式 UI 框架。"
        }
      ]
    },
    {
      "id": "os-entt",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·ECS",
      "tag": "EnTT",
      "title": "EnTT 把 C++ ECS 写到了极致轻快，是现代实体组件系统的范本",
      "summary": "笔者注意到，EnTT 用极少的模板魔法换来惊人的性能与易用性，几乎是 C++ 游戏里 ECS 的默认选择。想理解「数据导向架构」如何提速，它是首选。",
      "image": "https://opengraph.githubassets.com/1/skypjack/entt",
      "source": "skypjack 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/skypjack/entt",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "EnTT",
        "ECS",
        "C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "极轻量 ECS",
            "缓存友好遍历",
            "MIT 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "ECS 的真正价值不在「组件」而在「连续内存里的批量处理」。读 EnTT 能直观看到缓存命中带来的帧率红利。"
        }
      ]
    },
    {
      "id": "os-spdlog",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·日志",
      "tag": "spdlog",
      "title": "spdlog 是 C++ 里最快、最省心的日志库，几乎成了项目标配",
      "summary": "笔者观察到，spdlog 头文件即用、支持异步与多 sink，性能极佳又零依赖。无论引擎还是工具链，它都是「加日志不拖慢帧」的稳妥选择。",
      "image": "https://opengraph.githubassets.com/1/gabime/spdlog",
      "source": "gabime 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/gabime/spdlog",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "spdlog",
        "日志",
        "C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "头文件即用",
            "异步多 sink",
            "MIT 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "线上问题 90% 靠日志定位。把 spdlog 的异步模式用好，能在几乎零成本下保留完整排障线索。"
        }
      ]
    },
    {
      "id": "os-fmt",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·格式化",
      "tag": "fmt",
      "title": "fmt 用类型安全的格式化取代 printf 与字符串拼接，是 C++ 文本处理的基础设施",
      "summary": "笔者注意到，fmt 既快又安全，已被标准库 std::format 吸收。日常日志、UI 文本、序列化都离不开它，是写现代 C++ 的底层习惯。",
      "image": "https://opengraph.githubassets.com/1/fmtlib/fmt",
      "source": "fmtlib 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/fmtlib/fmt",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "fmt",
        "格式化",
        "C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "类型安全格式化",
            "比 printf 快",
            "纳入 std::format"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "小到一行日志、大到本地化文本，统一用 fmt 风格能少踩无数编码与拼接的坑，值得强制团队规范。"
        }
      ]
    },
    {
      "id": "os-glm",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·数学",
      "tag": "GLM",
      "title": "GLM 是 OpenGL 生态的数学库，向量矩阵四元数一套全包，图形开发绕不开",
      "summary": "笔者观察到，GLM 的接口刻意贴近 GLSL，写 C++ 端变换时能和着色器保持同一套直觉。做相机、骨骼、粒子时，它是图形程序的数学地基。",
      "image": "https://opengraph.githubassets.com/1/g-truc/glm",
      "source": "g-truc 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/g-truc/glm",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "GLM",
        "数学库",
        "图形"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "vec/mat/quat 齐全",
            "接口贴近 GLSL",
            "MIT 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "数学库选错会全盘受影响。GLM 与 GLSL 的一致性，让「CPU 算完直接喂 GPU」的脑力切换成本降到最低。"
        }
      ]
    },
    {
      "id": "os-meshopt",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·网格",
      "tag": "meshoptimizer",
      "title": "meshoptimizer 用一套压顶点/减面/顶点缓存优化的小工具，直接换帧率",
      "summary": "笔者注意到，meshoptimizer 不追求「最好看」，而是追求「最省带宽与最顺顶点流」。导出管线里接上它，常常能白捡可观的渲染性能。",
      "image": "https://opengraph.githubassets.com/1/zeux/meshoptimizer",
      "source": "zeux 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/zeux/meshoptimizer",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "meshoptimizer",
        "网格优化",
        "性能"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "顶点/索引优化",
            "减面与量化",
            "MIT 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多卡顿其实不来自算法，而来自糟糕的网格布局。把 meshoptimizer 塞进美术导出流程，是性价比最高的优化之一。"
        }
      ]
    },
    {
      "id": "ai-dsh",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·Agent",
      "tag": "DeepSeek",
      "title": "DeepSeek 开源 dsh-superagent-prototype，把「研究型智能体」做成可跑的参考实现",
      "summary": "笔者观察到，dsh-superagent-prototype 把多步检索、推理与工具调用串成可复现流程，是亲手拆一个研究 Agent 怎么搭的最佳样本，比只读论文落地得多。",
      "image": "https://opengraph.githubassets.com/1/deepseek-ai/dsh-superagent-prototype",
      "source": "deepseek-ai 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/deepseek-ai/dsh-superagent-prototype",
      "readTime": "8 分钟",
      "hotScore": 90,
      "tags": [
        "DeepSeek",
        "Agent",
        "开源"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "多步检索+推理",
            "工具调用可复现",
            "MIT 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这类原型的价值不在「多聪明」，而在把 Agent 的循环结构摊开给你看。想做游戏里的智能 NPC 或自动化测试，照它改比从零设计稳。"
        }
      ]
    },
    {
      "id": "ai-spriteforge",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·Sprite",
      "tag": "agent-sprite-forge",
      "title": "agent-sprite-forge 让 Agent 自动产出可用 sprite 表，正是美术产能短板的解法之一",
      "summary": "笔者注意到，agent-sprite-forge 用智能体把「描述→分层 sprite→导出表」串起来，瞄准的是独立团队最缺的美术产能。它能把概念快速变成可拖进引擎的素材。",
      "image": "https://opengraph.githubassets.com/1/0x0funky/agent-sprite-forge",
      "source": "0x0funky 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/0x0funky/agent-sprite-forge",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "sprite",
        "Agent",
        "美术产能"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "描述生成 sprite",
            "分层与导出表",
            "面向独立团队"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "美术产能常是 solo 开发者的天花板。把生成、分层、导出做成一条流水线，比单次出图更贴近真实生产。"
        }
      ]
    },
    {
      "id": "ai-llamaindex",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·RAG",
      "tag": "LlamaIndex",
      "title": "LlamaIndex 把「把知识喂给大模型」做成了完整框架，是做游戏内知识助手的底座",
      "summary": "笔者观察到，LlamaIndex 把索引、检索与编排收成一套 API，做教程问答、设定库检索这类事非常顺手。想给玩家做「随问随答的世界观百科」，它是最短路径。",
      "image": "https://opengraph.githubassets.com/1/run-llama/llama_index",
      "source": "run-llama 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/run-llama/llama_index",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "LlamaIndex",
        "RAG",
        "检索"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "索引+检索编排",
            "多数据源接入",
            "Python 生态"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "RAG 不是银弹，但做「基于自家文档的问答」很稳。游戏里的帮助系统、剧情百科用它比纯微调便宜得多。"
        }
      ]
    },
    {
      "id": "ai-smolagents",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·Agent",
      "tag": "smolagents",
      "title": "Hugging Face 的 smolagents 用极简代码写智能体，正是「少依赖也能跑 Agent」的示范",
      "summary": "笔者注意到，smolagents 把 Agent 压到几百行核心，强调「代码即行动」。它说明做自动化工具不必堆框架，轻量实现反而更易调试和嵌入。",
      "image": "https://opengraph.githubassets.com/1/huggingface/smolagents",
      "source": "huggingface 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/huggingface/smolagents",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "smolagents",
        "Agent",
        "轻量"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "代码即行动",
            "核心极简",
            "易嵌入调试"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Agent 项目最容易死于「框架太重看不懂」。smolagents 的态度值得学：先用最小实现跑通，再谈扩展。"
        }
      ]
    },
    {
      "id": "ai-nemo",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·训练",
      "tag": "NVIDIA NeMo",
      "title": "NVIDIA NeMo 把对话/语音/多模态的训练推理做成套件，是自建游戏 AI 模型的工具箱",
      "summary": "笔者观察到，NeMo 覆盖了从数据、训练到部署的全链路，做语音 NPC、智能客服或角色对话很合适。想在本地训一个会念台词的助手，它是现成脚手架。",
      "image": "https://opengraph.githubassets.com/1/NVIDIA/NeMo",
      "source": "NVIDIA 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/NVIDIA/NeMo",
      "readTime": "8 分钟",
      "hotScore": 84,
      "tags": [
        "NeMo",
        "训练",
        "多模态"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "训练到部署全链",
            "语音/对话/多模态",
            "Apache-2.0 许可"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "想做会发声的角色，别从 Transformer 从头造。NeMo 这种套件把脏活包好，你只需喂自己的台词数据。"
        }
      ]
    },
    {
      "id": "ai-claude",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·工具",
      "tag": "Claude Code",
      "title": "Claude Code 持续迭代，编程智能体正成为日常开发的默认协作者",
      "summary": "笔者注意到，Claude Code 的更新日志显示它在补齐多文件编辑、长上下文与工具调用的稳定性。对写游戏逻辑的人来说，这类编码智能体已经是从「能用」走向「常用」。",
      "image": "",
      "source": "Claude Code 官方更新日志（一手）",
      "date": "2026-11-07",
      "url": "https://code.claude.com/docs/en/changelog",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Claude Code",
        "编码智能体",
        "工具链"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "多文件编辑增强",
            "长上下文更稳定",
            "工具调用更顺"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "编码智能体的意义不是替你写整局游戏，而是把「样板代码 + 跨文件重构」这类耗时活接走，让人专注设计决策。"
        }
      ]
    },
    {
      "id": "tu-learnopengl",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·OpenGL",
      "tag": "LearnOpenGL",
      "title": "LearnOpenGL 用循序渐进的章节把现代 OpenGL 讲透，是图形入门最稳的免费教程",
      "summary": "笔者观察到，LearnOpenGL 从窗口、着色器一路讲到 PBR 与阴影，配套可运行代码。想系统补图形基础，它是公认最不劝退的一条路。",
      "image": "",
      "source": "LearnOpenGL 官方站点（一手）",
      "date": "2026-11-07",
      "url": "https://learnopengl.com",
      "readTime": "长期参考",
      "hotScore": 85,
      "tags": [
        "LearnOpenGL",
        "OpenGL",
        "图形入门"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "章节循序渐进",
            "配套可运行代码",
            "覆盖 PBR/阴影"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "图形最大的坑是「看不懂为什么黑屏」。LearnOpenGL 的好处是每步都能跑，出错了能逐章对照，比啃规范高效。"
        }
      ]
    },
    {
      "id": "tu-vulkantut",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Vulkan",
      "tag": "Vulkan Tutorial",
      "title": "Vulkan Tutorial 仓库把最吓人的显式 API 拆成可跟的样例，是啃 Vulkan 的入口",
      "summary": "笔者注意到，Vulkan 以「什么都要你管」著称，入门曲线陡。这个仓库把实例、管线、命令缓冲一步步摊开，配上代码，是最靠谱的跟练材料。",
      "image": "https://opengraph.githubassets.com/1/Overv/VulkanTutorial",
      "source": "Overv 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/Overv/VulkanTutorial",
      "readTime": "长期参考",
      "hotScore": 84,
      "tags": [
        "Vulkan",
        "显式 API",
        "跟练"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "实例/管线逐步拆",
            "命令缓冲讲解",
            "代码可跟练"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Vulkan 的显式换来的是可控的性能。先跟着把三角形跑出来，再回头理解每层「为什么必须存在」，比硬读文档强。"
        }
      ]
    },
    {
      "id": "tu-unitymanual",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·Unity",
      "tag": "Unity 手册",
      "title": "Unity 官方手册是「遇到问题先查文档」的权威来源，比二手博客靠谱得多",
      "summary": "笔者观察到，Unity 手册把引擎各系统的概念、API 与最佳实践写得很全，版本更新也及时。做具体功能卡住时，回到一手手册往往比搜教程更快定位。",
      "image": "",
      "source": "Unity 官方手册（一手）",
      "date": "2026-11-07",
      "url": "https://docs.unity3d.com/Manual/",
      "readTime": "长期参考",
      "hotScore": 82,
      "tags": [
        "Unity",
        "手册",
        "官方文档"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "系统概念齐全",
            "API 与示例",
            "随版本更新"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "二手教程会过期，官方手册不会。养成「先翻手册再搜博客」的习惯，能少踩很多版本错位导致的坑。"
        }
      ]
    },
    {
      "id": "tu-collision",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·物理",
      "tag": "碰撞检测",
      "title": "Real-Time Collision Detection 站点把「实时碰撞」的算法与陷阱讲成了经典参考",
      "summary": "笔者注意到，Christer Ericson 的这个配套站点把包围盒、扫掠、最窄方向等算法讲得很透，是写物理或判定逻辑时反复会回来翻的案头书。",
      "image": "",
      "source": "Real-Time Collision Detection 官方站点（一手）",
      "date": "2026-11-07",
      "url": "https://realtimecollisiondetection.net",
      "readTime": "长期参考",
      "hotScore": 83,
      "tags": [
        "碰撞检测",
        "物理",
        "算法"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "包围盒与扫掠",
            "最窄方向分解",
            "经典案头参考"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "判定逻辑的 bug 最难调，因为错起来很玄学。把这里的几何基础打牢，比每次出问题靠试参数要根本得多。"
        }
      ]
    },
    {
      "id": "tu-joey",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·OpenGL",
      "tag": "LearnOpenGL 代码",
      "title": "LearnOpenGL 的配套代码仓库，让你边读教程边直接编译运行每个例子",
      "summary": "笔者观察到，Joey DeVries 把教程里每个章节都做成可编译工程，读文字的同时能立刻看到效果。对「看会了但手不会」的人，这是把知识焊进肌肉记忆的关键。",
      "image": "https://opengraph.githubassets.com/1/JoeyDeVries/LearnOpenGL",
      "source": "JoeyDeVries 官方仓库（一手）",
      "date": "2026-11-07",
      "url": "https://github.com/JoeyDeVries/LearnOpenGL",
      "readTime": "长期参考",
      "hotScore": 84,
      "tags": [
        "LearnOpenGL",
        "代码仓库",
        "可运行"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "章节对应工程",
            "即开即编译",
            "配套教程食用"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "教程 + 代码是黄金组合：文字给你「为什么」，代码给你「怎么动」。两者对照着练，图形入门的遗忘率会低很多。"
        }
      ]
    },
    {
      "id": "ga-hades2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·Roguelike",
      "tag": "Hades II",
      "title": "《Hades II》用叙事与 rogue 机制的深度，再次证明超级巨魔组的设计功力",
      "summary": "笔者观察到，《Hades II》把 rogue 的随机性和强叙事绑定得极紧，每次死亡都在推进故事而非纯刷。它给「如何让重复游玩不腻」提供了顶级范本。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1145350/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-07",
      "url": "https://store.steampowered.com/app/1145350/Hades_II/",
      "readTime": "6 分钟",
      "hotScore": 91,
      "tags": [
        "Hades II",
        "Roguelike",
        "叙事"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "rogue+强叙事",
            "死亡推进剧情",
            "手感公认顶级"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它的核心经验是：重复玩法靠「意义」而非「数值」支撑。把每次循环都接上叙事回报，玩家才愿意一遍遍重开。"
        }
      ]
    },
    {
      "id": "ga-silksong",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·银河恶魔城",
      "tag": "Silksong",
      "title": "《空洞骑士：丝之歌》终于落地，银河城品类的等待有了回应",
      "summary": "笔者注意到，《Silksong》把前作的手感与探索放大到新主角与新世界，是近年来最受瞩目的独立续作之一。它说明深耕单一品类的口碑能攒出惊人期待。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1030300/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-07",
      "url": "https://store.steampowered.com/app/1030300/Hollow_Knight_Silksong/",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "Silksong",
        "银河城",
        "独立续作"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "新主角新世界",
            "手感与探索放大",
            "独立品类标杆"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "长周期开发下的高期待是把双刃剑。它能平稳落地，靠的是前作已经把核心循环打磨到无可挑剔。"
        }
      ]
    },
    {
      "id": "ga-kcd2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·RPG",
      "tag": "KCD II",
      "title": "《天国：拯救2》用硬核中世纪拟真，证明了「不爽快」也能成爆款",
      "summary": "笔者观察到，《KCD II》坚持第一人称、无等级、重历史细节的拟真路线，却卖出惊人销量。它反驳了「游戏必须爽快」的成见，给硬核题材留了空间。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1771300/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-07",
      "url": "https://store.steampowered.com/app/1771300/Kingdom_Come_Deliverance_II/",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "KCD II",
        "中世纪拟真",
        "硬核RPG"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "第一人称拟真",
            "重历史细节",
            "销量超预期"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它的成功提醒设计者：差异化定位比跟风「爽感」更有记忆点。把一类玩家伺候到极致，比讨好所有人更稳。"
        }
      ]
    },
    {
      "id": "ga-eldenring",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·魂系",
      "tag": "Elden Ring",
      "title": "《艾尔登法环》用开放世界承接魂系难度，重新定义了「探索即挑战」",
      "summary": "笔者注意到，《艾尔登法环》把「地图自己长怪」的开放探索与魂系战斗结合，成为近年设计讨论的常青样本。它证明强系统能撑起巨型世界。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1245620/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-07",
      "url": "https://store.steampowered.com/app/1245620/Elden_Ring/",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Elden Ring",
        "魂系",
        "开放世界"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开放+魂系融合",
            "环境即叙事",
            "系统深度惊人"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它最值得学的是「用世界设计代替任务指引」。少弹窗、多观察，反而让玩家更有成就感，这对开放世界设计很启发。"
        }
      ]
    },
    {
      "id": "ga-cyberpunk",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·开放世界",
      "tag": "Cyberpunk 2077",
      "title": "《赛博朋克2077》靠长期打磨翻盘，是「发售即灾难也能救回来」的样本",
      "summary": "笔者观察到，《赛博朋克2077》从首发口碑崩塌到靠资料片重回好评，证明了持续更新的价值。对独立团队，它是一堂关于「别在 1.0 就放弃」的课。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1091500/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-07",
      "url": "https://store.steampowered.com/app/1091500/Cyberpunk_2077/",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Cyberpunk 2077",
        "开放世界",
        "长线运营"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "首发翻车",
            "资料片救回口碑",
            "长线更新关键"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它的教训很现实：首发质量决定生死，但后续内容能改写评价。资源有限时，把「可持续修补」写进计划比孤注一掷更重要。"
        }
      ]
    },
    {
      "id": "ga-helldivers2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·射击",
      "tag": "Helldivers 2",
      "title": "《地狱潜者2》用友军误伤与协同火力，把「混乱即乐趣」做成了标签",
      "summary": "笔者注意到，《Helldivers 2》刻意保留高风险的友伤与随机支援，让合作充满戏剧性。它说明「可控的失控」比绝对平衡更有节目效果。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/553850/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-07",
      "url": "https://store.steampowered.com/app/553850/Helldivers_2/",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Helldivers 2",
        "合作射击",
        "友伤"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "友军误伤机制",
            "协同火力爽快",
            "混乱即乐趣"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它的设计勇气在于敢让玩家「坑到朋友」。这种意外叙事是脚本写不出的，值得在多人玩法里借鉴。"
        }
      ]
    },
    {
      "id": "ga-mhwilds",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·共斗",
      "tag": "MH Wilds",
      "title": "《怪物猎人：荒野》把共斗节奏与生态演出推到新高度，是系列现代化的关键一作",
      "summary": "笔者观察到，《MH Wilds》在保留狩猎核心的同时，用更顺滑的引导与生态演出降低门槛。它示范了「老IP如何既讨好老猎人又拉新」。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2246340/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-07",
      "url": "https://store.steampowered.com/app/2246340/Monster_Hunter_Wilds/",
      "readTime": "6 分钟",
      "hotScore": 89,
      "tags": [
        "MH Wilds",
        "共斗",
        "生态演出"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "狩猎核心保留",
            "引导更顺滑",
            "生态演出升级"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "长线 IP 更新的要义是「别丢魂，但别端着」。荒野在难度曲线与演出上的平衡，是系列现代化最值得拆解的一课。"
        }
      ]
    },
    {
      "id": "ga-clairobscur",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·JRPG",
      "tag": "Clair Obscur",
      "title": "《光与影：33号远征队》用回合制 + 实时格挡，给 JRPG 赛道注入了新意",
      "summary": "笔者注意到，《Clair Obscur》把传统回合框架和动作化防御结合，战斗既有策略又有操作感。它表明经典品类只要加一层交互，仍能让人眼前一亮。",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/1903340/header.jpg",
      "source": "Steam 商店页（一手）",
      "date": "2026-11-07",
      "url": "https://store.steampowered.com/app/1903340/Clair_Obscur_Expedition_33/",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Clair Obscur",
        "回合制",
        "JRPG"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "回合+实时格挡",
            "策略与操作兼得",
            "美术演出突出"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它给的启发是：别因为品类老就放弃创新。在成熟框架里加一层「手感交互」，往往比彻底重造更容易被接受。"
        }
      ]
    },
    {
      "id": "in-arkane",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·并购",
      "tag": "Arkane Lyon",
      "title": "育碧据报竞购 Arkane Lyon，微软 12 月死线前工作室命运待定",
      "summary": "笔者观察到，据 Bloomberg 报道至少三家竞购方中育碧已具名，Arkane Lyon 须在 12 月前找到归宿否则或关停。它再次暴露大厂瘦身期里「明星工作室求生」的残酷现实。",
      "image": "",
      "source": "GamesIndustry.biz（一手报道）",
      "date": "2026-11-07",
      "url": "https://gamesindustry.biz/ubisoft-reportedly-seeking-to-acquire-arkane-lyon-from-xbox",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Arkane Lyon",
        "育碧",
        "并购"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "至少三方竞购",
            "12 月死线",
            "关停仍有可能"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对中小团队，这则新闻是提醒：把「发行/收购依赖」当成风险项管理。能独立造血，才有在谈判桌上的底气。"
        }
      ]
    },
    {
      "id": "in-netflix",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·AI",
      "tag": "Netflix",
      "title": "Netflix 推出 AI Discover，流媒体巨头把推荐做成可对话的发现入口",
      "summary": "笔者注意到，Netflix 的 AI Discover 用对话式交互替代传统菜单找片，是「搜索框变聊天」趋势的一员。它提示内容平台正在把 AI 当成新的导航层。",
      "image": "",
      "source": "Netflix 官方新闻（一手）",
      "date": "2026-11-07",
      "url": "https://about.netflix.com/en/news/introducing-ai-discover",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Netflix",
        "AI Discover",
        "推荐"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "对话式发现",
            "替代传统菜单",
            "AI 即导航层"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "游戏商店/社区同样面临「内容太多找不到」的痛。把推荐做成对话，可能比又一层标签页更贴近玩家真实意图。"
        }
      ]
    },
    {
      "id": "in-compulsion",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·独立",
      "tag": "Compulsion",
      "title": "Compulsion Games 正式脱离 Xbox 独立，拿回 IP 与发行权",
      "summary": "笔者观察到，Compulsion 在微软瘦身中被管理层买回、重获《We Happy Few》《South of Midnight》等 IP。它延续了今年多家工作室「被放生变独立」的浪潮。",
      "image": "",
      "source": "GamesIndustry.biz（一手报道）",
      "date": "2026-11-07",
      "url": "https://www.gamesindustry.biz/compulsion-games-officially-separates-from-xbox-the-team-told-me-we-would-rather-eat-rocks-and-drink-gasoline-than-be-split-up",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Compulsion",
        "独立",
        "IP回归"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "管理层买回",
            "重获 IP 与发行",
            "独立浪潮延续"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "独立不等于容易，但意味着「自己的游戏自己说了算」。对创作者，IP 归属权往往比短期资源更重要。"
        }
      ]
    },
    {
      "id": "in-phantom",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·销量",
      "tag": "影之刃零",
      "title": "《影之刃零》三天 400 万份，国产动作 3A 的商业天花板被抬高一截",
      "summary": "笔者观察到，《影之刃零》首三日跨平台卖出 400 万份、Steam 峰值 83 万，是今年体量与《黑神话》同台讨论的现象级。它用数据证明国产 3A 的全球号召力。",
      "image": "",
      "source": "iGameMag 销量梳理（一手数据转引）",
      "date": "2026-11-07",
      "url": "https://igamemag.com/phantom-blade-zero-sales-4-million",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "影之刃零",
        "销量",
        "国产3A"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "三日 400 万份",
            "Steam 峰值 83 万",
            "国产 3A 新高度"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "连续两部国产动作大作破圈，意味着市场对中国团队做 3A 的接受度已质变。对从业者，这是融资与招人叙事上的实质利好。"
        }
      ]
    },
    {
      "id": "in-tes6",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·大作",
      "tag": "上古卷轴6",
      "title": "《上古卷轴6》正式定名 Sentinel，Bethesda 40 周年揭晓落锤省设定",
      "summary": "笔者观察到，Bethesda 在 40 周年视频里把副标题定为 Sentinel 并指向落锤省，结束了八年悬念。它提醒业界：长周期大作的「期待管理」本身也是产品力。",
      "image": "",
      "source": "VideoGamer 报道（一手）",
      "date": "2026-11-07",
      "url": "https://www.videogamer.com/news/elder-scrolls-6-sentinel-name-reveal-hammerfell",
      "readTime": "5 分钟",
      "hotScore": 89,
      "tags": [
        "上古卷轴6",
        "Sentinel",
        "落锤省"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "定名 Sentinel",
            "设定落锤省",
            "八年悬念落幕"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它给的启示是：玩家能为「相信你会交付」等待多年。对独立团队，真诚的频率更新比画大饼更能留住社区。"
        }
      ]
    },
    {
      "id": "co-megamam",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "Game Jam",
      "tag": "Epic AI MegaJam",
      "title": "Epic AI MegaJam 11/12 开赛：四人 + 不限量 Agent，四天冲 6.5 万美元",
      "summary": "笔者观察到，Epic AI MegaJam 允许用任意 AI 工具、以 UE/UEFN 在四天内做可玩游戏，总奖金 6.5 万美元另有最高 5 万续投资助。它是「AI 辅助开发」最前沿的公开实验场。",
      "image": "",
      "source": "Epic 虚幻引擎官方公告（一手）",
      "date": "2026-11-07",
      "url": "https://www.unrealengine.com/news/2026-epic-ai-megajam",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "Epic",
        "AI MegaJam",
        "Game Jam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11/12–15 四天",
            "UE/UEFN + 任意 AI",
            "6.5 万奖 + 续投"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这届 Jam 几乎是「把你的 Agent 工作流摊开来比」的擂台。无论参不参赛，研究它的产出都能直接照见 AI 辅助开发的当下水位。"
        }
      ]
    },
    {
      "id": "co-ggj2027",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "Game Jam",
      "tag": "GGJ 2027",
      "title": "Global Game Jam 2027 定档 1/25–31，站点报名 11/1 已开",
      "summary": "笔者注意到，全球最大游戏 Jam 2027 窗口定为 1 月 25–31 日，站点报名 11 月 1 日开启、个人报名 12 月 1 日。对想低成本组队练手的人，这是一年一度的固定舞台。",
      "image": "",
      "source": "Global Game Jam 官方信息（一手）",
      "date": "2026-11-07",
      "url": "https://borderless.so/extracurricular-programs/global-game-jam/global-game-jam",
      "readTime": "4 分钟",
      "hotScore": 84,
      "tags": [
        "GGJ",
        "Game Jam",
        "全球"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "1/25–31 窗口",
            "站点 11/1 报名",
            "个人 12/1 报名"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "GGJ 的价值不在获奖，而在 48 小时里被迫做完一个能玩的东西。对新人，它是性价比最高的「逼自己出货」训练。"
        }
      ]
    },
    {
      "id": "co-mihoyo",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "米哈游 校招",
      "title": "米哈游 2027 校招部分岗位网申延期至 11/15，全年实习同步招募",
      "summary": "笔者观察到，米哈游 2027 届校招部分岗位网申延长到 11 月 15 日，实习项目全年开放、以转正留用为目标。对想进一线游戏厂的应届与低年级同学，仍是当前窗口期的机会。",
      "image": "",
      "source": "米哈游招聘官网（一手）",
      "date": "2026-11-07",
      "url": "https://campus.mihoyo.com/",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "米哈游",
        "2027校招",
        "实习转正"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "校招延期至 11/15",
            "实习全年开放",
            "以转正留用为目标"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "一线厂的实习往往比校招更易进、也能更早看清自己适不适合。低年级同学别等秋招，先投实习卡位更稳。"
        }
      ]
    }
  ]
};
