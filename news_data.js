window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-14",
    "weekday": "星期六",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-14 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "引擎焦点：Epic 放出 UE 5.9 MegaJam Preview——首个主要由 AI 智能体写出来的引擎版本（hero）",
      "引擎精读：Godot 4.5 / Unity 6.2 / 团结引擎 1.11 / Unity 6.4 AI / Bevy 0.16",
      "开源宝库：GLFW / SFML / RecastNavigation / egui / GDevelop / The Forge",
      "AI 前沿：Roblox R15 动画生成 / itch.io 清 10TB AI / 腾讯游点灵 / Claude Fable / The Sandbox",
      "行业风向：育碧竞购 Arkane Lyon / Rockstar 英国工会投票 / 名越工作室解散 / Macronix 退 ROM / 战神延期",
      "竞赛招聘：GGJ 2027 定档 1/25 / LD61 明年 4 月 / indiePlay 增设 AI 赛道 / 腾讯 2027 校招启动"
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
    "id": "ue59-megamam-preview-hero",
    "category": "engine",
    "categoryName": "引擎前沿",
    "tag": "Unreal Engine 5.9",
    "title": "Epic 放出 UE 5.9 MegaJam Preview：首个主要靠 AI 智能体写出来的引擎版本",
    "summary": "Epic 于 11/9 发布 UE 5.9 MegaJam Preview，称其为第一个主要用 agentic 工作流构建的版本——少数工程师指挥成群的 AI 代理把 UE6 分支的 AI 工具移植到 UE5，并用 UE4 退役的 HTML5 为底重写 Web 平台。新版本带来 Unreal Assistant、扩展的 Unreal MCP 与实验性 WebAssembly/WebGPU 目标，同步赶在 11/12–15 的 Epic AI MegaJam 之前放出。",
    "image": "https://d3kjluh73b9h9o.cloudfront.net/optimized/4X/5/3/2/532a040afb216bb3062c37b1b296ee81fa4a1261_2_1024x128.jpeg",
    "source": "Epic 开发者社区论坛（一手）",
    "date": "2026-11-14",
    "url": "https://forums.unrealengine.com/t/unreal-engine-5-9-megajam-preview/2852840",
    "readTime": "7 分钟",
    "hotScore": 97,
    "tags": [
      "Unreal Engine",
      "AI 智能体",
      "WebGPU"
    ],
    "content": [
      {
        "title": "核心要点",
        "type": "list",
        "items": [
          "11/9 发布，定位为首个主要由 AI 代理构建的 UE 版本，约一周组装完成",
          "Unreal Assistant 面板直连 Claude Code / Codex / Cursor / OpenCode，并接 Unreal MCP",
          "Unreal Canvas 可据提示生成概念图、3D 网格与视频；Web 目标用 WASM+WebGPU 跑项目",
          "完整 5.9 稳定版仍计划 2027 年，当前仅作 MegaJam 实验预览"
        ]
      },
      {
        "title": "学习视角",
        "type": "text",
        "text": "把「让一群代理写引擎」做成正式发布，说明 AI 已深入到游戏技术最底层的生产流程，而不只是写业务脚本。对个人开发者最有参考价值的是 Unreal MCP 这套工具集——它把场景搭建、资源安装、调试都交给了可审查的代理。值得盯紧，但官方也坦言代理写的代码仍在清理，生产项目务必在副本上试。"
      }
    ]
  },
  "items": [
    {
      "id": "en-godot45",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·3D",
      "tag": "Godot",
      "title": "Godot 4.5 发布：可访问性、着色器烘焙与 2D 独立导航服务器",
      "summary": "Godot 4.5 带来实验性屏幕阅读器支持、stencil buffer、shader baker、SMAA 1x、变参函数与抽象类，并为 2D 加入独立导航服务器；当前稳定版为 4.7.2，4.8 已进入 beta。",
      "image": "https://godotengine.org/storage/blog/covers/godot-4-5-making-dreams-accessible.webp?cache=v2",
      "source": "Godot 官方发布说明（一手）",
      "date": "2026-11-14",
      "url": "https://godotengine.org/releases/4.5/",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Godot",
        "开源引擎",
        "4.5"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "实验性屏幕阅读器支持，向无障碍方向补强",
            "渲染新增 stencil buffer、shader baker 与 SMAA 1x 抗锯齿",
            "GDScript 支持变参函数、抽象类与 @abstract；2D 新增独立导航服务器",
            "4.7.2 为当前稳定版，4.8 beta 1 已于 10/15 释出"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Godot 的节奏很稳：一边补渲染与可访问性，一边把导航这类系统拆成独立服务器。对独立开发者，4.5 的 shader baker 与 2D 导航意味着更少手写样板、更快出可玩原型；上生产前仍建议先读迁移指南。"
        }
      ]
    },
    {
      "id": "en-unity62",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·通用",
      "tag": "Unity",
      "title": "Unity 6.2 新特性：导入期自动 Mesh LOD、Deferred+、开发者数据框架",
      "summary": "Unity 6.2 可在导入时自动生成 LOD 网格、为 URP 增加 Prepass Layer Mask、增强 Shader Graph，并引入开发者数据框架（新项目默认开启诊断数据收集，可在设置中关闭）。",
      "image": "https://docs.unity.com/api/og/getImage?locale=en-US&siteTitle=Unity+Editor+%E2%80%A2+Unity+Docs&title=New+in+Unity+6.2&description=Find+out+what%E2%80%99s+changed+in+Unity+6.2+since+Unity+6.1.&readingTime=12",
      "source": "Unity 官方文档（一手）",
      "date": "2026-11-14",
      "url": "https://docs.unity.com/en-us/engine/6000.6/manual/whats-new/unity62",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Unity",
        "Unity 6.2",
        "LOD"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "导入时自动生成 LOD 网格，减少外部减面工具依赖",
            "URP 新增 Prepass Layer Mask，让 SSAO/贴花正确作用于指定层",
            "Shader Graph 增加 Append 节点与动态分支关键字",
            "开发者数据框架默认开启诊断，可逐项关闭并管理数据用途"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Unity 6.x 的重心从「加大特性」转向「把日常苦活做进引擎」：自动 LOD、数据框架都是省时间的事。数据收集默认开启这点要留心——做项目时按合规与隐私要求关掉不必要的诊断，比事后补救省心。"
        }
      ]
    },
    {
      "id": "en-tuanjie111",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·本土",
      "tag": "团结引擎",
      "title": "团结引擎 1.11.0 详解：并行渲染、虚拟几何体与 Arm NSS 超分",
      "summary": "TJTalk 直播回顾 1.11.0：强化图形渲染——PC&Mac 并行渲染、VG 移动端管线重构、URP 接入 ARM NSS 神经时域超分，动画系统加表达式节点与物理驱动动画。",
      "image": "https://learn-public.cdn.u3d.cn/20261103/learn/images/d4481b40-7e9b-456a-b816-b06bd1fbfcef_20261103_170923.png",
      "source": "Unity 中国 learn.u3d.cn（一手）",
      "date": "2026-11-14",
      "url": "https://learn.u3d.cn/tutorial/6ae9a449ca3f9000200e88ac",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "团结引擎",
        "Tuanjie",
        "渲染"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "并行渲染支持 PC&Mac，VG 重构并强化移动端表现",
            "URP 新增 ARM NSS 神经时域超分，画质与帧率不必二选一",
            "小游戏接入 WebGPU Graphics API，并支持 ECS 架构",
            "动画系统加数学表达式节点、Pose Cache 与物理驱动动画"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "团结引擎把「本土小程序 + 主机 + 车机 + 鸿蒙」做成统一工作流，对国内团队最实用的是少写多端适配。1.11 的图形与超分更新直接降低中重度 3D 的门槛，做小游戏想上画质时可以重点看 VG 与 NSS 这两条线。"
        }
      ]
    },
    {
      "id": "en-unity64",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·AI",
      "tag": "Unity 6.4",
      "title": "Unity 6.4 路线图：内置 AI 代理 + SCGI 实时全局光照",
      "summary": "Unity Roadshow 2026 梳理 6.0→6.4：6.4 带来可对话编辑器的内置 AI 代理与检查点回退，并介绍 SCGI 补丁式实时 GI 缓存技术，目标降低对硬件光追的依赖。",
      "image": "https://images.ludens.com.tw/uploads/images/wp-content/uploads/2026/03/image-133.png",
      "source": "Ludens Media 报道 / Unity Roadshow",
      "date": "2026-11-14",
      "url": "https://www.ludens.com.tw/unity-roadshow-2026-engine-ai-update-lts",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Unity",
        "AI 代理",
        "SCGI"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "6.2 自动 Mesh LOD、6.3 UI in 3D、6.4 内置可对话编辑器的 AI 代理",
            "AI 代理支持 MCP，可截图分析编辑器并按提示搭基础架构",
            "检查点系统可把代理操作回退到特定节点，降低试错风险",
            "SCGI 将光照信息以补丁存于表面并动态更新，缓解实时 GI 对硬件光追的依赖"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Unity 把 AI 从「聊天机器人」做成「能操作编辑器、还能回退」的代理，思路和可审查性比单纯生成更关键。SCGI 这类缓存式实时 GI 也值得关注——它把高昂的全局光照摊薄成可增量更新的表面补丁，对开放世界是实打实的性能红利。"
        }
      ]
    },
    {
      "id": "en-bevy16",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Rust",
      "tag": "Bevy",
      "title": "Bevy 0.16 持续发酵：GPU 驱动渲染与 ECS 关系让 Rust 引擎更稳",
      "summary": "Bevy 0.16 引入 GPU 驱动渲染、程序化大气散射、贴花、遮挡剔除与 ECS 原生实体关系，并支持 no_std；2026 年社区围绕 ergonomics 与生态成熟推动其走向可量产。",
      "image": "https://opengraph.githubassets.com/1/bevyengine/bevy",
      "source": "Bevy 社区 / gamedevhub 综述",
      "date": "2026-11-14",
      "url": "https://bevyengine.org/learn/migration-guides/0-15-to-0-16/",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Bevy",
        "Rust",
        "ECS"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "GPU 驱动渲染把更多绘制决策移到 GPU，大场景明显提速",
            "ECS 原生实体关系，建模实体间连接更稳健",
            "加入程序化大气散射、贴花与遮挡剔除",
            "bevy 本身及大量子 crate 支持 no_std，可跑到掌机等受限平台"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Bevy 仍是预 1.0，每次升级都带迁移工作，但它「代码即真相」的 Rust 文化很适合模拟密集型项目。2026 年 Tiny Glade 等商业作品证明了它能出货，新项目想练 ECS 思维，从 Bevy 入手比从面向对象场景树更直接。"
        }
      ]
    },
    {
      "id": "in-arkane",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·收购",
      "tag": "Arkane",
      "title": "育碧入局竞购 Arkane Lyon，微软 12 月 13 日截止前寻求出手",
      "summary": "彭博社称育碧是三方竞标者之一，拟从微软手中接手《耻辱》《死亡循环》开发商；原 11/13 截止已延至 12/13，约 217 个岗位悬而未决。",
      "image": "https://d1lss44hh2trtw.cloudfront.net/assets/articles/2026/10/23/arkane-lyon-buyer-deadline-xbox-microsoft_feature.jpg",
      "source": "Shacknews / Bloomberg（报道）",
      "date": "2026-11-14",
      "url": "https://www.shacknews.com/article/151255/arkane-lyon-bidders-ubisoft-report",
      "readTime": "5 分钟",
      "hotScore": 89,
      "tags": [
        "收购",
        "Arkane",
        "育碧"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "育碧为至少三方竞标者之一，另两家未披露",
            "截止从 11/13 延至 12/13，给微软更多寻找出手方案的时间",
            "约 217 个 Arkane Lyon 岗位随交易结果浮动",
            "工作室仍在开发漫威《刀锋战士》，发行安排未定"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "大厂重组期，工作室命运往往由母公司战略而非作品质量决定。对从业者，关注「被出售/合并」信号比盯单款游戏更重要；对独立团队，这也是提醒：核心 IP 与发行权最好在一开始就理清归属。"
        }
      ]
    },
    {
      "id": "in-rockstar",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·劳资",
      "tag": "Rockstar",
      "title": "Rockstar 英国工作室就工会投票，恰逢 GTA6 发售前夜",
      "summary": "Rockstar 英国员工就工会认证启动投票，距 GTA6 发售仅一步之遥；这折射出 3A 大厂在发行高压下日益上升的劳资张力。",
      "image": "https://image.theregister.com/5309343.jpg?imageId=5309343&x=0&y=0&cropw=100&croph=100&panox=0&panoy=0&panow=100&panoh=100&width=1200&height=683",
      "source": "The Register（报道）",
      "date": "2026-11-14",
      "url": "https://www.theregister.com/software/2026/11/12/rockstar-workers-vote-on-union-recognition-as-gta-vi-launch-looms/5309319",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Rockstar",
        "工会",
        "GTA6"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "英国工作室员工启动工会认证投票",
            "时间点紧贴 GTA6 发售窗口，外界高度关注",
            "这是 3A 发行高压下劳资议题升温的缩影",
            "微软/Xbox 同期也在多工作室推进重组"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "一款游戏的成败越来越不只是创意问题，也是组织与劳动关系的产物。作为开发者，理解「发行节奏 vs 团队可持续」的张力，有助于在择业与排期时更早识别风险。"
        }
      ]
    },
    {
      "id": "in-nagoshi",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·关停",
      "tag": "Nagoshi",
      "title": "名越稔洋 Nagoshi Studio 解散，网易撤资后《龙之群》前途未卜",
      "summary": "《如龙》之父名越稔洋的工作室于 10/31 经股东决议正式解散；网易此前撤资，其新作《Gang of Dragon》前景不明。",
      "image": "https://www.gameforceasia.com/images/news/2026-11-02/yakuza-creator-toshihiro-nagoshis-studio-officially-closes-as-gang-of-dragon-faces-uncertain-future.jpg",
      "source": "GameForceAsia（报道）",
      "date": "2026-11-14",
      "url": "https://www.gameforceasia.com/news/yakuza-creator-toshihiro-nagoshis-studio-officially-closes-as-gang-of-dragon-faces-uncertain-future",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "名越稔洋",
        "工作室解散",
        "网易"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "工作室 10/31 经股东决议解散",
            "网易撤资是解散的直接诱因",
            "新作《Gang of Dragon》（龙之群）前景不明",
            "名越为《如龙》系列创始人，行业符号性人物"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "明星制作人光环挡不住资本与发行的逻辑。对个人而言，把命运绑在单一大厂或单一项目上风险很高；做自己的原型、保留 IP 与发行主动权，比依赖平台更稳。"
        }
      ]
    },
    {
      "id": "in-macronix",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·供应链",
      "tag": "Macronix",
      "title": "Macronix 退出 ROM 业务，Switch 卡带供应商生变",
      "summary": "NOR Flash 大厂 Macronix 宣布退出 ROM 业务，任天堂 Switch 卡带长期依赖的掩膜 ROM 供应链出现缺口，第三方产能跟进成焦点。",
      "image": "https://chipdispatch.com/media/8b/8bf61541c785c338.1280.webp",
      "source": "ChipDispatch（报道）",
      "date": "2026-11-14",
      "url": "https://chipdispatch.com/articles/macronix-exits-rom-business-leaving-nintendo-short-a-switch-cartridge-supplier",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "供应链",
        "Macronix",
        "Switch"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Macronix 退出掩膜 ROM 业务",
            "Switch 卡带长期采用其 ROM 方案",
            "供应链缺口需第三方产能补位",
            "实体卡带在收藏与二手市场仍有需求"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "硬件供应链的脆弱点常常藏在不起眼的零件里。做实体版或周边时，提前确认关键元器件的可获得性，比上线前临时找替代更稳妥。"
        }
      ]
    },
    {
      "id": "in-gow",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "行业·延期",
      "tag": "战神",
      "title": "《战神：劳菲》延期至 2027 年 5 月 20 日",
      "summary": "圣莫尼卡新作《战神：劳菲》从原定档期推迟到 2027/5/20，官方称需更多打磨时间；这是索尼第一方在 2026 下半年多款大作调档的延续。",
      "image": "https://static0.polygonimages.com/wordpress/wp-content/uploads/2026/09/god-of-war-laufey-key-art.jpg?w=1600&h=900&fit=crop",
      "source": "Polygon（报道）",
      "date": "2026-11-14",
      "url": "https://www.polygon.com/god-of-war-laufey-delayed-ps5-2027",
      "readTime": "4 分钟",
      "hotScore": 80,
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
            "新档期定为 2027 年 5 月 20 日",
            "官方称需要更多打磨时间",
            "属索尼第一方下半年多款调档之一",
            "粉丝对质量期待高于对速度的期待"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "延期在 3A 里已是常态，背后是「口碑一旦翻车，代价远高于晚几个月」的算计。独立团队虽没这种体量压力，但「宁可晚一点把核心循环做扎实」同样适用。"
        }
      ]
    },
    {
      "id": "game-escape-academy2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·解谜",
      "tag": "Escape Academy 2",
      "title": "《Escape Academy 2: Back 2 School》11/5 登陆，密室逃脱续作",
      "summary": "IrisFall 工作室续作 11/5 发售，延续校园密室逃脱玩法，加入合作解谜与更多教室场景，主打轻松叙事向解谜。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3296060/2602a19a9df4c306febaed3f9cab850b78515f23/header.jpg?t=1794520038",
      "source": "Steam（一手商店页）",
      "date": "2026-11-14",
      "url": "https://store.steampowered.com/app/3296060/",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "密室逃脱",
        "解谜",
        "合作"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/5 正式发售的校园主题密室逃脱续作",
            "新增合作解谜与更多教室场景",
            "延续轻松叙事向的解谜基调",
            "适合朋友一起推图的休闲选择"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "密室逃脱类把「关卡即谜题」做到了极致，做解谜游戏时可以学它如何用场景叙事替代长篇对话——一个上锁的柜子比一段独白更能讲出故事。"
        }
      ]
    },
    {
      "id": "game-underkeep",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·RPG",
      "tag": "Underkeep",
      "title": "《Underkeep》11/5 推出：第一人称地牢探索 RPG",
      "summary": "11/5 发售的 Underkeep 主打回合制战斗与队伍 build，第一人称视角走复古地牢 crawler 路线，适合喜欢慢节奏策略的玩家。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2411200/be22c58d9f42d3d349198e87b3c192998047b053/header.jpg?t=1794141969",
      "source": "Steam（一手商店页）",
      "date": "2026-11-14",
      "url": "https://store.steampowered.com/app/2411200/",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "地牢",
        "RPG",
        "回合制"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/5 发售的第一人称地牢 crawler",
            "回合制战斗 + 队伍 build 深度",
            "复古视角，强调策略而非操作",
            "目标群体为慢节奏硬核玩家"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "复古地牢 crawler 的回潮说明：清晰的规则与可计算的反馈，比华丽演出更耐玩。做 RPG 时先把数值与战斗循环做透明，玩家才愿意钻研 build。"
        }
      ]
    },
    {
      "id": "game-voidbreaker",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·射击",
      "tag": "VOID/BREAKER",
      "title": "《VOID/BREAKER》11/4 上线：弹幕射击 + 破坏玩法",
      "summary": "11/4 发售的 VOID/BREAKER 融合 FPS、弹幕与场景破坏，强调高速机动与可破坏掩体，是近期独立射击里节奏最硬核的一档。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2615540/4f3789458cfd9c3375c2926620b19640135f7c4a/header_alt_assets_8.jpg?t=1794245445",
      "source": "Steam（一手商店页）",
      "date": "2026-11-14",
      "url": "https://store.steampowered.com/app/2615540/",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "FPS",
        "弹幕",
        "破坏"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/4 发售，融合 FPS 与弹幕",
            "场景可破坏，掩体并非绝对安全",
            "强调高速机动与反应",
            "节奏偏硬核的独立射击"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "可破坏场景不只好看，它让玩家的每个决策都有空间后果。做射击游戏时，给「破坏」加上可读的因果反馈，比单纯加特效更能让战斗有质感。"
        }
      ]
    },
    {
      "id": "game-zedzone",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·塔防",
      "tag": "ZED ZONE",
      "title": "《ZED ZONE》11/5 发售：僵尸末日策略塔防",
      "summary": "11/5 推出的 ZED ZONE 把僵尸生存、塔防与资源管理揉在一起，开放世界地图上加建造与据点防守，偏向硬核 survival。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/1211600/aac7446006d1fb3898eccf697406d0c357cf20a3/header_alt_assets_2.jpg?t=1794572263",
      "source": "Steam（一手商店页）",
      "date": "2026-11-14",
      "url": "https://store.steampowered.com/app/1211600/",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "僵尸",
        "塔防",
        "生存"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/5 发售的僵尸末日策略游戏",
            "塔防 + 资源管理的复合玩法",
            "开放世界地图叠加建造与据点防守",
            "整体偏硬核 survival 体验"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "把塔防塞进开放世界，难点在「节奏控制」：资源稀缺时玩家才做取舍。做生存类可以学它用稀缺性制造张力，而不是靠刷怪量堆难度。"
        }
      ]
    },
    {
      "id": "game-handsover",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·卡牌",
      "tag": "HANDS OVER",
      "title": "《HANDS OVER》11/13 上新：3D 动作卡牌",
      "summary": "11/13 发售的 HANDS OVER 结合动作与卡牌构筑，3D 场景里打出卡牌触发招式，试图在牌组策略与即时操作间找平衡。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4661070/972d3e6aa238297a34cc5ea2e7e6a5b923fb057a/header.jpg?t=1794576522",
      "source": "Steam（一手商店页）",
      "date": "2026-11-14",
      "url": "https://store.steampowered.com/app/4661070/",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "动作",
        "卡牌",
        "构筑"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/13 发售的 3D 动作卡牌",
            "卡牌构筑叠加即时操作",
            "在牌组策略与手速之间找平衡",
            "尝试打破纯卡牌或纯动作的边界"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "动作 + 卡牌的杂交难点在「读牌」与「操作」的注意力争夺。想做这类混合，先把单一系统的爽点做足，再谈融合，否则两边都不讨好。"
        }
      ]
    },
    {
      "id": "game-wingcommander3",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "游戏·复刻",
      "tag": "Wing Commander III",
      "title": "《Wing Commander III》30 周年重制版 11/5 登陆",
      "summary": "11/5 推出的 30 周年版重制了这款经典太空战棋/飞行射击名作，带来高清化演出与现代化操作，面向怀旧与科幻策略玩家。",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/2008740/3900fb9a429df92ade69f05085ee576fa7f8bc10/header.jpg?t=1794000702",
      "source": "Steam（一手商店页）",
      "date": "2026-11-14",
      "url": "https://store.steampowered.com/app/2008740/",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "重制",
        "太空",
        "怀旧"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/5 推出的 30 周年重制版",
            "高清化演出 + 现代化操作",
            "经典太空战棋/飞行射击名作",
            "面向怀旧与科幻策略玩家"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "重制老 IP 的价值在于「把当年受限于硬件的设想兑现」。做重制时，优先保留原作的核心循环与叙事节奏，再用今天的技术补演出，比大改玩法更稳妥。"
        }
      ]
    },
    {
      "id": "ai-roblox",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·动画",
      "tag": "Roblox",
      "title": "Roblox Studio 公测：一句提示生成 R15 动画、R6 可转 R15",
      "summary": "Roblox 11/5 推出 Studio beta，可用提示词直接生成 R15 片段，或把既有 R6 动画重建为 R15；功能同时进入 Assistant 与 Studio MCP。",
      "image": "https://devforum-uploads.s3.dualstack.us-east-2.amazonaws.com/uploads/original/5X/d/9/8/8/d9885c0372ef377b06adbd736cf4b45c95ddfae2.png",
      "source": "Roblox 开发者论坛（一手）",
      "date": "2026-11-14",
      "url": "https://devforum.roblox.com/t/studio-beta-generate-r15-animations-from-a-prompt-plus-optional-r6-motion-rebuilder/4977709/26",
      "readTime": "5 分钟",
      "hotScore": 90,
      "tags": [
        "Roblox",
        "动画生成",
        "MCP"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/5 推出 Studio beta",
            "提示词直接生成 R15 动画片段",
            "R6 动画可重建为 R15",
            "功能进入 Assistant 与 Studio MCP"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "动画生成从「给一段视频」走向「给一句话」，对独立团队意味着动作资源成本骤降。但生成结果仍需人工校骨骼与关键帧，把它当加速器而非替代，才不会被瑕疵拖垮。"
        }
      ]
    },
    {
      "id": "ai-itch",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·生态",
      "tag": "itch.io",
      "title": "itch.io 删除 10TB 生成式 AI 模型，清理低质资源",
      "summary": "itch.io 于 11/2–3 删除约 10TB 的 GenAI 模型与素材，回应创作者对「AI 垃圾」挤占平台的担忧；平台治理与 AI 边界再成焦点。",
      "image": "https://d1lss44hh2trtw.cloudfront.net/assets/articles/2026/11/03/itch-io-deletes-10-terabytes-gen-ai-slop-models_feature.jpg",
      "source": "Shacknews（报道）",
      "date": "2026-11-14",
      "url": "https://www.shacknews.com/article/151254/itch-io-deletes-10-terabytes-gen-ai-slop-models",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "itch.io",
        "AI 治理",
        "平台"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/2–3 删除约 10TB GenAI 模型与素材",
            "直接回应创作者对 AI 垃圾的担忧",
            "平台治理与 AI 边界再成焦点",
            "折射独立创作者对原创性的坚持"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "平台方开始用「清理」表态，说明 AI 素材泛滥已损害生态。对个人开发者，原创资产与可解释的流程会越来越值钱——这恰恰是手作内容的护城河。"
        }
      ]
    },
    {
      "id": "ai-craftbuddy",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·平台",
      "tag": "游点灵",
      "title": "腾讯游点灵 CraftBuddy 开放体验，大厂扎堆做 AI 游戏平台",
      "summary": "腾讯 AI 游戏创作工具 CraftBuddy（原 Craft）开放体验，自然语言生成可玩雏形并一键导出 Unity；Google/Unity/Roblox/Meta 同期押注同类平台。",
      "image": "https://aiproducthub.cn/wp-content/uploads/2026/07/1784874710-20260724-142030.webp",
      "source": "AI产品库（报道）",
      "date": "2026-11-14",
      "url": "https://aiproducthub.cn/newsflash/tencent-craftbuddy-ai-game-platforms-as-google-unity-and-roblox-push-in",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "腾讯",
        "CraftBuddy",
        "AI 平台"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "CraftBuddy（原 Craft）开放体验资格陆续发放",
            "自然语言生成含玩法/场景/角色的可玩雏形",
            "可一键导出 Unity 等主流引擎",
            "Google/Unity/Roblox/Meta 同期押注同类平台"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "「一句话出可玩 Demo」正在被大厂标准化。对个人而言，真正的竞争力从「会不会做」转向「会不会定义与筛选」——能把模糊想法讲清楚的人，会比只会执行的人更吃香。"
        }
      ]
    },
    {
      "id": "ai-fable",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·智能体",
      "tag": "Claude Fable",
      "title": "Claude Fable 5.2 一句话生成整款游戏，质量仍待检验",
      "summary": "Anthropic 系 Fable 5.2 演示从单条提示产出可玩游戏原型，但早期用户反馈需更长、更具体的提示，且尚无完整商业作品，娱乐性≠完成度。",
      "image": "https://www.talkesport.com/wp-content/uploads/claude-fable-5-2-games-ai-game-development-scaled.webp",
      "source": "TalkEsport（评测）",
      "date": "2026-11-14",
      "url": "https://www.talkesport.com/editorials/claude-fable-5-2-games-ai-game-development",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "Claude",
        "Fable",
        "智能体"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Fable 5.2 可从单条提示产出可玩原型",
            "早期用户称需更长、更具体的提示",
            "尚无完整商业作品落地",
            "离「成品游戏」仍有设计与打磨缺口"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "演示很惊艳，但「能跑的切片」不等于「能卖的游戏」。把 AI 生成当原型引擎没问题，真正拉开差距的还是关卡、平衡与长期内容——这些暂时还得人来扛。"
        }
      ]
    },
    {
      "id": "ai-sandbox",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·多人",
      "tag": "The Sandbox",
      "title": "The Sandbox Studio 上线实时多人 + AI 搭建助手",
      "summary": "The Sandbox 11/10 更新带来服务端运行的实时匹配与重连，并用 AI 助手帮创作者在本地客户端快速搭好可试玩的多人场景。",
      "image": "https://create.sandbox.game/landing/hero-bg.png",
      "source": "The Sandbox 官方更新（一手）",
      "date": "2026-11-14",
      "url": "https://create.sandbox.game/updates",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "The Sandbox",
        "实时多人",
        "AI 助手"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "11/10 更新带来服务端运行的实时匹配",
            "支持快速重连，掉线不丢进度",
            "AI 助手帮搭可试玩的多人场景",
            "面向 Studio 创作者降低联调门槛"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "多人游戏的痛点从「能联机」变成「联机体验顺不顺」。官方把匹配与重连做成服务端能力，说明中小团队不必自己造联机基建——优先用现成方案验证玩法，再谈自建。"
        }
      ]
    },
    {
      "id": "os-glfw",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·底层",
      "tag": "GLFW",
      "title": "GLFW：轻量跨平台窗口与 OpenGL/Vulkan 上下文库",
      "summary": "GLFW 用 C 写成，负责创建窗口、处理输入与 OpenGL/Vulkan 上下文，是 LearnOpenGL 等无数图形教程的底座，体积小、依赖少。",
      "image": "https://opengraph.githubassets.com/1/glfw/glfw",
      "source": "GitHub（一手）",
      "date": "2026-11-14",
      "url": "https://github.com/glfw/glfw",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "GLFW",
        "图形",
        "C"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "C 写就，跨 Windows/macOS/Linux",
            "管理窗口、输入与图形 API 上下文",
            "LearnOpenGL 等教程的默认底座",
            "体积小、零外部依赖，易嵌入"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "想真正搞懂图形管线，从 GLFW 起手最合适：它把「开窗+拿上下文」这件脏活封装好，让你专注在着色器与渲染循环本身，而不是被平台 API 拖垮。"
        }
      ]
    },
    {
      "id": "os-sfml",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·2D",
      "tag": "SFML",
      "title": "SFML：C++ 多媒体库，快速上手 2D 游戏",
      "summary": "SFML 封装窗口、图形、音频、网络与输入，API 清晰、文档友好，是 C++ 初学者做 2D 小游戏与教学原型的热门选择。",
      "image": "https://opengraph.githubassets.com/1/SFML/SFML",
      "source": "GitHub（一手）",
      "date": "2026-11-14",
      "url": "https://github.com/SFML/SFML",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "SFML",
        "C++",
        "2D"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "模块化封装窗口/图形/音频/网络/输入",
            "API 直观，文档与示例完善",
            "适合 C++ 入门做 2D 小游戏",
            "社区教程与项目资源丰富"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "SFML 的模块边界非常干净，初学者能一块块拼出游戏而不被整体架构劝退。先拿它做个打砖块，比一上来啃大引擎更能建立信心。"
        }
      ]
    },
    {
      "id": "os-recast",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·导航",
      "tag": "RecastNavigation",
      "title": "RecastNavigation：导航网格生成与寻路标杆",
      "summary": "Recast 负责把任意网格体烘焙成导航网格，Detour 提供运行时寻路；从 3A 到独立项目都在用它做 AI 移动，是导航方案的事实标准。",
      "image": "https://opengraph.githubassets.com/1/recastnavigation/recastnavigation",
      "source": "GitHub（一手）",
      "date": "2026-11-14",
      "url": "https://github.com/recastnavigation/recastnavigation",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "导航",
        "寻路",
        "AI"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "Recast 把网格体烘焙成导航网格",
            "Detour 提供运行时寻路与避障",
            "被大量商业与独立项目采用",
            "研究 AI 移动绕不开的参考实现"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "导航网格的思路（先离线烘焙、再运行时查询）是性能与质量的经典权衡。做 NPC 移动时，先理解这套管线，比盲目堆 A* 更可持续。"
        }
      ]
    },
    {
      "id": "os-egui",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·UI",
      "tag": "egui",
      "title": "egui：Rust 即时模式 GUI，可嵌入游戏与引擎",
      "summary": "egui 纯 Rust 写成、跨 Web 与原生，即时模式设计让调试面板与工具 UI 写起来很直接，常被集成进 Bevy 等引擎做开发工具。",
      "image": "https://opengraph.githubassets.com/1/emilk/egui",
      "source": "GitHub（一手）",
      "date": "2026-11-14",
      "url": "https://github.com/emilk/egui",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "egui",
        "Rust",
        "GUI"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "纯 Rust，即时模式 UI",
            "跨 Web 与原生运行",
            "写调试面板与工具 UI 很直接",
            "常被集成进 Bevy 等引擎"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "即时模式 UI 把「界面=函数」这件事讲得很透：每帧重画、状态外置。做编辑器或调试面板时，这种思路比保留控件树更省心，也更好调试。"
        }
      ]
    },
    {
      "id": "os-gdevelop",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·引擎",
      "tag": "GDevelop",
      "title": "GDevelop：开源无代码 2D/3D 游戏引擎",
      "summary": "GDevelop 用可视化事件系统做游戏，零代码也能产出跨平台作品，社区模板丰富，适合教学、原型与非程序员创作者。",
      "image": "https://opengraph.githubassets.com/1/4ian/GDevelop",
      "source": "GitHub（一手）",
      "date": "2026-11-14",
      "url": "https://github.com/4ian/GDevelop",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "GDevelop",
        "无代码",
        "2D/3D"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "可视化事件系统，零代码做游戏",
            "跨平台导出",
            "社区模板与示例丰富",
            "适合教学、原型与非程序员"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "无代码不等于无逻辑——GDevelop 的事件系统本质是把控制流图形化。带新手入门时，它比直接丢给ta一个 C++ 工程友好得多，先建立「游戏是规则集合」的概念。"
        }
      ]
    },
    {
      "id": "os-theforge",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "开源·渲染",
      "tag": "The Forge",
      "title": "The Forge：跨平台实时渲染框架",
      "summary": "The Forge 抽象出 Vulkan/D3D12/Metal/WebGPU 等后端，提供统一渲染图与多平台示例，适合研究现代图形管线如何落地不同硬件。",
      "image": "https://opengraph.githubassets.com/1/TheForge-Foundation/TheForge",
      "source": "GitHub（一手）",
      "date": "2026-11-14",
      "url": "https://github.com/TheForge-Foundation/TheForge",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "The Forge",
        "渲染",
        "跨平台"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "统一抽象 Vulkan/D3D12/Metal/WebGPU",
            "提供渲染图与多平台示例",
            "聚焦现代图形管线落地",
            "适合做跨后端渲染研究"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "想理解「同一套渲染逻辑如何跑在不同 GPU 后端」，The Forge 是很好的样本。它的价值不在开箱即用的引擎，而在把跨平台差异显式摊开给你看。"
        }
      ]
    },
    {
      "id": "tu-opengl",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·图形",
      "tag": "LearnOpenGL",
      "title": "LearnOpenGL：从创建窗口到 Hello Triangle",
      "summary": "LearnOpenGL 的入门章带你在 C++ 里用 GLFW+GLAD 建窗口、写着色器并画出第一个三角形，是现代图形编程最常被引用的起点。",
      "image": "https://opengraph.githubassets.com/1/glfw/glfw",
      "source": "LearnOpenGL（一手教程）",
      "date": "2026-11-14",
      "url": "https://learnopengl.com/Getting-started/Hello-Triangle",
      "readTime": "8 分钟",
      "hotScore": 88,
      "tags": [
        "OpenGL",
        "图形",
        "入门"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "用 GLFW 创建窗口、GLAD 加载函数",
            "手写顶点着色器与片段着色器",
            "配置 VAO/VBO 画出第一个三角形",
            "逐节配套源码，可跟着敲"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "图形编程的入门门槛在「看不见的脚手架」——窗口、上下文、缓冲。LearnOpenGL 把这些拆得很细，建议边读边建一个能跑的最小工程，比纯看更有体感。"
        }
      ]
    },
    {
      "id": "tu-godot",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·引擎",
      "tag": "Godot",
      "title": "Godot 官方「第一个 2D 游戏」上手路径",
      "summary": "Godot 文档的 first 2D game 教程从节点与场景讲起，一步步做出可玩的 2D 小游戏，零基础也能跑通完整开发闭环。",
      "image": "https://opengraph.githubassets.com/1/godotengine/godot",
      "source": "Godot 官方文档（一手）",
      "date": "2026-11-14",
      "url": "https://docs.godotengine.org/en/stable/getting_started/first_2d_game/index.html",
      "readTime": "8 分钟",
      "hotScore": 87,
      "tags": [
        "Godot",
        "2D",
        "官方教程"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "从节点与场景概念讲起",
            "一步步做出可玩 2D 小游戏",
            "覆盖输入、碰撞与简单脚本",
            "零基础也能跑通开发闭环"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Godot 的「场景即节点树」模型很直观，这份官方教程把「怎么组织第一个项目」讲得比多数视频都清楚。新手照着做一遍，比先看一堆概念再动手更高效。"
        }
      ]
    },
    {
      "id": "tu-unity",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·引擎",
      "tag": "Unity",
      "title": "Unity Learn：Unity Essentials 官方路径",
      "summary": "Unity Essentials 是官方入门路径，覆盖编辑器、C# 脚本与场景搭建，跟着走完能写出第一个可玩原型，并贴合当前 Unity 6 版本。",
      "image": "https://opengraph.githubassets.com/1/Unity-Technologies/UnityCsReference",
      "source": "Unity Learn（一手）",
      "date": "2026-11-14",
      "url": "https://learn.unity.com/pathway/unity-essentials",
      "readTime": "8 分钟",
      "hotScore": 86,
      "tags": [
        "Unity",
        "C#",
        "官方路径"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "官方结构化入门路径",
            "覆盖编辑器与 C# 脚本基础",
            "带场景搭建与可玩原型",
            "内容随 Unity 6 持续更新"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "官方路径胜在「版本对齐」——很多老教程还停留在旧 UI，照着做会踩坑。先把 Essentials 走完建立肌肉记忆，再去看专题教程，吸收效率最高。"
        }
      ]
    },
    {
      "id": "tu-catlike",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·C#",
      "tag": "Catlike Coding",
      "title": "Catlike Coding：Unity C# 时钟与基础数学",
      "summary": "Catlike Coding 的 Basics/Clock 教程用 Unity C# 写会走动的时钟，顺带讲清时间、向量与组件化思维，是打磨工程手感的良师。",
      "image": "https://opengraph.githubassets.com/1/Unity-Technologies/UnityCsReference",
      "source": "Catlike Coding（一手教程）",
      "date": "2026-11-14",
      "url": "https://catlikecoding.com/unity/tutorials/basics/clock/",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "Unity",
        "C#",
        "数学"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "用 C# 写会走的时钟",
            "讲清时间与角度的计算",
            "强化向量与组件化思维",
            "代码风格清晰，适合精读"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Catlike 的教程强调「先想清楚再写」，一个时钟就能带出不少数学与架构直觉。把这类基础练扎实，后面做复杂系统时少返工。"
        }
      ]
    },
    {
      "id": "tu-gpp",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·架构",
      "tag": "Game Programming Patterns",
      "title": "Game Programming Patterns：用模式组织游戏代码",
      "summary": "Bob Nystrom 的免费在线书把状态、命令、组件、事件队列等模式落到游戏场景，帮助把「能跑」的代码写成「好维护」的代码。",
      "image": "https://opengraph.githubassets.com/1/munificent/game-programming-patterns",
      "source": "Game Programming Patterns（一手）",
      "date": "2026-11-14",
      "url": "https://gameprogrammingpatterns.com/contents.html",
      "readTime": "10 分钟",
      "hotScore": 86,
      "tags": [
        "架构",
        "设计模式",
        "免费书"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "状态/命令/组件/事件队列等模式",
            "每个模式都落在游戏场景里讲解",
            "免费在线阅读",
            "目标是可维护而非仅能跑"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "很多项目死于「能跑但改不动」。这本书的价值是把常见痛点对应到具体模式，让你在写第一版时就少留技术债，比事后重构省太多力气。"
        }
      ]
    },
    {
      "id": "tu-gdquest",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "教程·GDScript",
      "tag": "GDQuest",
      "title": "GDQuest：交互式 GDScript 学习课程",
      "summary": "GDQuest 的 learn-gdscript 以交互练习带你在浏览器里学 GDScript 语法与 Godot 脚本思维，零配置即可开始，适合先建立语感。",
      "image": "https://opengraph.githubassets.com/1/GDQuest/learn-gdscript",
      "source": "GDQuest（一手课程）",
      "date": "2026-11-14",
      "url": "https://gdquest.github.io/learn-gdscript/",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "GDScript",
        "Godot",
        "交互课"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "浏览器内交互练习 GDScript",
            "零配置即可开始",
            "覆盖语法与 Godot 脚本思维",
            "适合先建立语言语感"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "交互式练习比看视频更容易坚持——即时反馈会把「看懂」逼成「写对」。零基础上手 Godot，先拿它把 GDScript 语感建立起来，再读官方文档会顺很多。"
        }
      ]
    },
    {
      "id": "co-ggj",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "竞赛·GameJam",
      "tag": "Global Game Jam",
      "title": "Global Game Jam 2027：1/25–31 全球开跑，站点注册 11/1 已开",
      "summary": "GGJ 2027 定档 1/25–31，全球站点与线上同步；站点注册 11/1 开放、jammer 注册 12/1 开放，是新人用 48 小时做一款游戏的最佳入口。",
      "image": "",
      "source": "Global Game Jam 官网（一手）",
      "date": "2026-11-14",
      "url": "https://globalgamejam.org/bg/node/1413",
      "readTime": "4 分钟",
      "hotScore": 88,
      "tags": [
        "GGJ",
        "GameJam",
        "全球"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "2027 届定档 1/25–31，全球站点+线上",
            "站点注册 11/1 开放，jammer 注册 12/1 开放",
            "围绕统一主题 48 小时做一款游戏",
            "适合学生与新人低成本试水"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "GGJ 是检验「从想法到可玩」最快的练兵场。建议第一次参加别追求完成度，先把一个极小的核心循环做出来——这种限时倒逼，比任何教程都更能练取舍。"
        }
      ]
    },
    {
      "id": "co-ld",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "竞赛·GameJam",
      "tag": "Ludum Dare",
      "title": "Ludum Dare 61 将于 2027 年 4 月举办（LD60 已于 10 月收官）",
      "summary": "Ludum Dare 维持每年 4/8/12 月三赛节奏，LD61 定在 2027 年 4 月；LD60（主题 Old Tech）已于 10/16 结束，是练手短 jam 的稳定选择。",
      "image": "",
      "source": "Ludum Dare 官网（一手）",
      "date": "2026-11-14",
      "url": "https://jam.ludumdare.com/about",
      "readTime": "4 分钟",
      "hotScore": 84,
      "tags": [
        "Ludum Dare",
        "GameJam",
        "短赛"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "每年 4/8/12 月三场，节奏稳定",
            "LD61 定档 2027 年 4 月",
            "LD60（主题 Old Tech）已于 10/16 收官",
            "单人为主，适合练快速原型"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "Ludum Dare 的 solo 模式很锻炼「一个人扛全流程」的能力。把每次参赛当成一次限时 sprint，复盘时重点看「哪部分耗时最长」，比纠结名次更有成长价值。"
        }
      ]
    },
    {
      "id": "co-indieplay",
      "category": "contest",
      "categoryName": "竞赛·独立",
      "subcategory": "竞赛·独立",
      "tag": "indiePlay",
      "title": "indiePlay 中国独立游戏大赛：第 12 届增设 AI 游戏专属赛道",
      "summary": "indiePlay 2026 由 CiGA 主办、11/21–22 于 WePlay 文化展颁奖，新增 AI 游戏赛道，鼓励 AI 深度融入核心玩法而非仅生成素材。",
      "image": "",
      "source": "indiePlay 官网 / CiGA（一手）",
      "date": "2026-11-14",
      "url": "https://www.indieplay.cn",
      "readTime": "4 分钟",
      "hotScore": 83,
      "tags": [
        "indiePlay",
        "独立游戏",
        "CiGA"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "第 12 届，由 CiGA 主办",
            "11/21–22 于 WePlay 文化展颁奖",
            "新增 AI 游戏专属赛道",
            "鼓励 AI 深度融入核心玩法"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "indiePlay 把「AI 游戏」单列赛道，信号很明确：评审看重的是 AI 如何改变玩法，而不是用 AI 生成了多少素材。做参赛作品时，把 AI 当机制的一部分来设计，比当生产工具更出彩。"
        }
      ]
    },
    {
      "id": "co-tencent",
      "category": "contest",
      "categoryName": "竞赛·招聘",
      "subcategory": "招聘·校招",
      "tag": "腾讯2027校招",
      "title": "腾讯 2027 校招启动：游戏/技术/美术多岗开放（含 AI 方向）",
      "summary": "腾讯 2027 届校招官网投递已开，IEG 游戏策划、客户端/引擎开发、技术美术（含 AI 方向）等岗位开放，毕业时间 2026/1–2027/12。",
      "image": "https://inews.gtimg.com/om_ls/O3FbHFhPhcOWBm8nG8xoQMd5deAH4bEZcfk9ieaG7zvQYAA_640330/0",
      "source": "腾讯网 / 腾讯校招（一手）",
      "date": "2026-11-14",
      "url": "https://new.qq.com/rain/a/20260813A04N4U00",
      "readTime": "4 分钟",
      "hotScore": 85,
      "tags": [
        "腾讯",
        "校招",
        "游戏"
      ],
      "content": [
        {
          "title": "核心要点",
          "type": "list",
          "items": [
            "2027 届校招官网投递已开放",
            "IEG 游戏策划/客户端/引擎开发等岗位",
            "技术美术含 AI 方向",
            "毕业时间覆盖 2026/1–2027/12"
          ]
        },
        {
          "title": "学习视角",
          "type": "text",
          "text": "大厂校招越来越把「会用 AI」写进人才标准，但更看重「能判断、能拆解、能复核」。在校同学与其卷工具熟练度，不如多做几个能讲清设计取舍的完整项目。"
        }
      ]
    }
  ]
};
