window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-04",
    "weekday": "星期三",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-04 07:30",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "Tripledot 4000 万美元收购 Unity 旗下 Supersonic：移动发行权成新稀缺资源",
      "开源引擎矩阵精读：Godot / Three.js / PlayCanvas / Urho3D / macroquad / Panda3D",
      "开源游戏样板：Veloren / OpenRA / Thrive / Endless Sky / Luanti / Unvanquished",
      "AI 工具链：Ollama / vLLM / ComfyUI / OpenHands / LangGraph 与 Kimi 游戏 Agent",
      "Game Jam 双线：Ludum Dare 62 与 Global Game Jam 开页，FunPlus 社招进行中"
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
        "status": "WebGPU 强化",
        "badge": "Web3D",
        "color": "blue"
      },
      {
        "name": "O3DE",
        "type": "o3de",
        "status": "工业化开源",
        "badge": "3A 引擎",
        "color": "emerald"
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
        "name": "Bevy 0.20",
        "type": "bevy",
        "status": "Rust ECS",
        "badge": "现代引擎",
        "color": "red"
      }
    ]
  },
  "hero": {
    "id": "ind-tripledot-hero",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "Tripledot × Supersonic",
    "title": "Tripledot 以 4000 万美元从 Unity 手中收购 Supersonic，移动发行格局再洗牌",
    "summary": "笔者注意到，Tripledot Studios 以 4000 万美元从 Unity 手中收购移动发行商 Supersonic，后者将继续作为独立公司运营。对学习者而言，这是观察「AI 降低开发门槛后，发行与买量能力成为稀缺资源」的鲜活样本——当人人都能做游戏，谁能把游戏送到玩家面前才值钱。",
    "image": "https://assetsio.gnwcdn.com/tripledot-supersonic.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "source": "GamesIndustry.biz 一手报道",
    "date": "2026-11-04",
    "url": "https://gamesindustry.biz/tripledot-studios-acquires-supersonic-from-unity-for-40m",
    "readTime": "6 分钟",
    "hotScore": 95,
    "tags": [
      "Tripledot",
      "Supersonic",
      "Unity"
    ],
    "content": [
      {
        "title": "本次要点",
        "type": "list",
        "items": [
          "Tripledot 4000 万美元收购 Supersonic；",
          "Supersonic 继续独立运营；",
          "Unity 早前已计划剥离该业务。"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "AI 把做游戏的门槛砍下来后，真正的稀缺资源变成了发行与获客。Tripledot 接手 Supersonic，本质是买一张把小团队游戏送进亿级用户视野的门票。新人看行业别只盯玩法创新，也要看懂酒香也怕巷子深这门生意。"
      }
    ]
  },
  "items": [
    {
      "id": "en-godot",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·官方",
      "tag": "Godot",
      "title": "Godot 引擎本体：把开源、零授权、全功能三个词真正落进一个仓库",
      "summary": "笔者观察到，Godot 把整套引擎（编辑器+运行时+文档源）都开源在单一仓库，MIT 许可、无 royalty。对想从源码层面理解引擎、又不想被商业授权绑住的新人，它是少有的全透明样本。",
      "source": "Godot 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/godotengine/godot",
      "image": "https://opengraph.githubassets.com/1/godotengine/godot",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "Godot",
        "开源引擎",
        "C#/GDScript"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "整库开源、MIT 许可、无版税；",
            "编辑器与运行时同源可改；",
            "适合读源码理解架构。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多新人把「用引擎」和「懂引擎」混为一谈。Godot 的好处是它不藏私：你遇到的每个按钮背后都是可读的代码。先把编辑器源码翻一遍，再去用商业引擎，你会知道哪些是黑盒帮你做了。"
        }
      ]
    },
    {
      "id": "en-three",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·Web",
      "tag": "Three.js",
      "title": "Three.js：用不到百行代码，把 Web 浏览器变成 3D 画布",
      "summary": "笔者注意到，Three.js 把 WebGL 包成直观的场景/相机/网格 API，让前端也能在浏览器里搭 3D。对想做 Web3D、可视化、轻量游戏原型的人，它是事实上的入口。",
      "source": "mrdoob/three.js 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/mrdoob/three.js",
      "image": "https://opengraph.githubassets.com/1/mrdoob/three.js",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Three.js",
        "WebGL",
        "Web3D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "封装 WebGL 为场景图 API；",
            "前端背景者的 3D 捷径；",
            "生态与示例极丰富。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "WebGL 原生写法劝退很多人。Three.js 的价值是把画一个三角形升级成放一个相机、打一盏灯、加载一个模型。新人从它入手，能快速建立 3D 直觉，再回头啃底层也不迟。"
        }
      ]
    },
    {
      "id": "en-playcanvas",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Web",
      "tag": "PlayCanvas",
      "title": "PlayCanvas 引擎：把浏览器里跑 3D 游戏做成可协作的云编辑器",
      "summary": "笔者观察到，PlayCanvas 以 WebGL/WebGPU 为底，提供开源引擎加云端可视化编辑器，团队协作改场景即时同步。它示范了引擎即服务如何降低小团队的起步门槛。",
      "source": "PlayCanvas 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/playcanvas/engine",
      "image": "https://opengraph.githubassets.com/1/playcanvas/engine",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "PlayCanvas",
        "WebGPU",
        "云编辑器"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开源引擎+云编辑器一体；",
            "WebGL/WebGPU 双后端；",
            "团队协作与即时预览。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "小团队最贵的不是算力，是协作摩擦。PlayCanvas 把编辑器搬上云，意味着美术和策划能在同一份场景上同时改。这种减少等待的思路，比单纯堆渲染特性更值得新人学习。"
        }
      ]
    },
    {
      "id": "en-urho3d",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C++",
      "tag": "Urho3D",
      "title": "Urho3D：用 C++ 重写一份小而全的跨平台引擎，看清模块边界",
      "summary": "笔者注意到，Urho3D 以相对精简的 C++ 代码覆盖渲染、物理、UI、网络与脚本，跨桌面与移动端。它适合想读一份完整但不臃肿的引擎实现、理解各子系统如何解耦的人。",
      "source": "Urho3D 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/urho3d/Urho3D",
      "image": "https://opengraph.githubassets.com/1/urho3d/Urho3D",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "Urho3D",
        "C++",
        "跨平台"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "C++ 实现、模块清晰；",
            "渲染/物理/UI/网络一体；",
            "适合读源码理解子系统。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "读大引擎像读一座城市容易迷路；读 Urho3D 像读一个小镇主干清晰。新人想搞懂一个引擎到底由哪些部件组成，从这种体量适中的项目切入，比硬啃巨型代码库更高效。"
        }
      ]
    },
    {
      "id": "en-macroquad",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·Rust",
      "tag": "macroquad",
      "title": "macroquad：Rust 里的单文件游戏框架，先做出东西再谈工程",
      "summary": "笔者观察到，macroquad 用极简 Rust API 覆盖 2D 渲染、输入与音频，跨 Web/桌面/移动，近乎零配置。对想用 Rust 又不想被构建链劝退的人，它是先跑起来的友好入口。",
      "source": "not-fl3/macroquad 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/not-fl3/macroquad",
      "image": "https://opengraph.githubassets.com/1/not-fl3/macroquad",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "macroquad",
        "Rust",
        "2D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "极简 Rust 2D 框架；",
            "跨 Web/桌面/移动；",
            "近乎零配置上手。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Rust 的学习曲线常被构建系统拖长。macroquad 把这件事砍掉，让你当天就能画出方块。先有正反馈再补底层原理，节奏才对——这点对所有语言都成立。"
        }
      ]
    },
    {
      "id": "en-panda3d",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Python",
      "tag": "Panda3D",
      "title": "Panda3D：迪士尼与 CMU 走出的 Python 3D 引擎，科研与原型友好",
      "summary": "笔者注意到，Panda3D 起源于迪士尼 VR 工作室，用 Python 暴露完整 3D 能力，兼顾 C++ 性能内核。对做可视化、仿真、教学原型的人，它是脚本化 3D 的成熟选择。",
      "source": "panda3d/panda3d 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/panda3d/panda3d",
      "image": "https://opengraph.githubassets.com/1/panda3d/panda3d",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 81,
      "tags": [
        "Panda3D",
        "Python",
        "3D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Python 驱动、C++ 内核；",
            "源于迪士尼/CMU；",
            "可视化与仿真友好。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "当你的重心是快速把想法画出来而不是榨干帧率，Python 引擎就有价值。Panda3D 证明：用脚本语言操控完整 3D 管线，在科研与原型场景里反而更高效。"
        }
      ]
    },
    {
      "id": "ind-makersfund",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "投融资·VC",
      "tag": "Makers Fund",
      "title": "Makers Fund 募集 2.5 亿美元第四期，继续下注互动娱乐早期项目",
      "summary": "笔者观察到，Makers Fund 完成第四期 2.5 亿美元募资，总管理资产达 15 亿美元，专注游戏与互动娱乐早期投资。它说明即便在紧缩周期，资本仍愿为早期高潜的创意团队下注。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-04",
      "url": "https://www.gamesindustry.biz/makers-fund-raises-250m-in-fourth-round-to-support-interactive-entertainment-startups",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Makers Fund",
        "VC",
        "早期投资"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "第四期募资 2.5 亿美元；",
            "累计管理资产 15 亿；",
            "聚焦互动娱乐早期。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "早期投资看的是人与方向，不是当期营收。新人看融资新闻，重点不是金额，而是资本在押注哪类团队——这能反推你该往哪个方向积累作品集。"
        }
      ]
    },
    {
      "id": "ind-cigames",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "融资·自发行",
      "tag": "CI Games",
      "title": "CI Games 拿下 3200 万美元贷款，自研自发《堕落之主 2》",
      "summary": "笔者注意到，CI Games 签署 3200 万美元银团贷款，用于完成并自发行魂类续作《Lords of the Fallen II》，同时 refinance 既有债务。它反映中型厂在撤掉发行商后，如何用金融工具把项目推进到底。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-04",
      "url": "https://www.gamesindustry.biz/ci-games-secures-32-million-loan-to-finish-and-self-publish-lords-of-the-fallen-2",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "CI Games",
        "魂类",
        "自发行"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "3200 万美元银团贷款；",
            "用于完成并自发行续作；",
            "同时 refinance 旧债。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "自发行不是不找发行商那么简单，而是把发行风险也背在身上。CI Games 用贷款顶住制作，说明中厂在独立又不够大的夹缝里，正用更灵活的财务手段换主动权。"
        }
      ]
    },
    {
      "id": "ind-valve-ceva",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "安全·供应链",
      "tag": "Valve",
      "title": "Valve 确认 Steam 硬件买家数据在 CEVA 物流合作方泄露事件中遭波及",
      "summary": "笔者观察到，Valve 证实其欧洲区物流合作方 CEVA Logistics 遭网络攻击，部分 Steam 硬件买家的配送数据被波及。它提醒我们：游戏公司的数据边界早已越过自家服务器，延伸到第三方履约链。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-04",
      "url": "https://www.gamesindustry.biz/valve-confirms-steam-hardware-buyers-data-exposed-in-ceva-logistics-cyberattack",
      "image": "https://assetsio.gnwcdn.com/Steam-Machine-(3).png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Valve",
        "Steam",
        "数据安全"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "CEVA 物流遭攻击；",
            "部分 Steam 硬件买家数据受影响；",
            "波及第三方履约链。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "开发者常以为安全只是服务器别被黑。Valve 这桩事说明：你托管的物流、支付、客服伙伴任何一个失守都是你的事故。做产品越往上走，越要会看整条供应链的风险。"
        }
      ]
    },
    {
      "id": "ind-nagoshi",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "工作室·解散",
      "tag": "Nagoshi",
      "title": "名越工作室在网易切断资金后解散，明星制作人的独立梦碎于资本",
      "summary": "笔者注意到，《如龙》之父名越稔洋创立的 Nagoshi Studio 在网易撤资数月后于 10 月 31 日经股东决议正式解散。它把大厂光环加独立融资的脆弱性摆上台面：创意信用不等于现金流。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-04",
      "url": "https://www.gamesindustry.biz/gang-of-dragon-developer-nagoshi-studio-shutters-months-after-netease-cut-funding",
      "image": "https://assetsio.gnwcdn.com/gang-of-dragon_yAI7wse.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "名越稔洋",
        "Nagoshi",
        "网易"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "网易撤资数月后解散；",
            "10/31 股东决议关停；",
            "创意信用不等于现金流。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "明星制作人创业常被当成稳赢。Nagoshi 的案例冷酷地提醒：再强的个人品牌也需要持续的资金节奏撑过制作周期。对新人，这比任何成功学都更真实。"
        }
      ]
    },
    {
      "id": "ind-roblox-ai",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "AI·开源",
      "tag": "Roblox",
      "title": "Roblox 将其三款 AI 安全工具开源，把平台治理做成公共品",
      "summary": "笔者观察到，Roblox 将其部分 AI 安全工具开源至 ROOST 社区（与 Google、OpenAI、Discord 共建）。这意味着头部平台正把内容安全从自家护城河部分转成行业公共基础设施。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-04",
      "url": "https://www.gamesindustry.biz/roblox-makes-three-of-its-ai-safety-tools-open-source",
      "image": "https://assetsio.gnwcdn.com/roblox-phone.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Roblox",
        "AI安全",
        "开源"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "三款 AI 安全工具开源；",
            "托管于 ROOST 社区；",
            "与 Google/OpenAI/Discord 共建。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "内容安全是 UGC 平台的生死线。Roblox 把它的一部分开源，既是公关也是务实：安全标准越统一，整个生态的合规成本越低。做多人社区产品的开发者值得盯这类治理即基础设施的动向。"
        }
      ]
    },
    {
      "id": "ind-schell",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "裁员·教育向",
      "tag": "Schell Games",
      "title": "《Among Us VR》合作方 Schell Games 年内二度裁员，教育向工作室承压",
      "summary": "笔者注意到，Schell Games（《Among Us VR》联合开发者）宣布今年第二轮裁员，称为确保可持续未来必须削减相当数量岗位。它折射出教育/家庭向团队在宏观逆风下的生存压力。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-04",
      "url": "https://www.gamesindustry.biz/among-us-vr-co-developer-schell-games-announces-second-round-of-layoffs-this-year",
      "image": "https://assetsio.gnwcdn.com/among-us-vr_wbXHFDI.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Schell Games",
        "裁员",
        "Among Us VR"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "年内第二轮裁员；",
            "称为确保可持续；",
            "教育向团队承压。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "做有意义的产品和活下去是两件事。Schell 的困境说明：哪怕背靠爆款 IP，若收入模型不稳，组织仍会被迫收缩。新人选赛道时别只看作品调性，也要看背后的商业韧性。"
        }
      ]
    },
    {
      "id": "games-veloren",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "Veloren",
      "title": "Veloren：用 Rust 写的开源多人在线 RPG，把社区共建当核心机制",
      "summary": "笔者观察到，Veloren 是一款类似 Cube World 的开源多人在线 RPG，Rust 实现、资产全原创、模块化设计。对想研究网络同步、体素世界与社区驱动开发的开发者，它是鲜活样本。",
      "source": "Veloren 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/veloren/veloren",
      "image": "https://opengraph.githubassets.com/1/veloren/veloren",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "Veloren",
        "Rust",
        "开源RPG"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Rust 多人在线 RPG；",
            "资产原创、模块化；",
            "社区驱动开发。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "多人在线最难的不是画出来，是让几十人在同一世界不穿帮。Veloren 把网络同步、体素地形、ECS 架构都开源，等于把一份可运行的大型网游骨架摊给你读。"
        }
      ]
    },
    {
      "id": "games-openra",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "OpenRA",
      "title": "OpenRA：用现代引擎重写红警与泰伯利亚的开源即时战略",
      "summary": "笔者注意到，OpenRA 以重写的引擎复刻《命令与征服》《红警》《泰伯利亚黎明》等经典即时战略，支持现代分辨率与联机。它示范了老玩法加新管线如何既怀旧又耐玩。",
      "source": "OpenRA 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/OpenRA/OpenRA",
      "image": "https://opengraph.githubassets.com/1/OpenRA/OpenRA",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "OpenRA",
        "RTS",
        "开源"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "重写经典 RTS 引擎；",
            "支持现代分辨率与联机；",
            "老玩法+新管线。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "复刻经典最容易掉进抄画面陷阱。OpenRA 的启发是：保留玩法手感、替换底层管线，让老游戏在新硬件上复活。想做 RTS 的新人，它的输入/寻路/联机值得拆。"
        }
      ]
    },
    {
      "id": "games-thrive",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "Thrive",
      "title": "Thrive：从单细胞到文明的开源进化模拟，把生物学当玩法引擎",
      "summary": "笔者观察到，Thrive 是一款以生命演化为主线的开源模拟游戏，覆盖单细胞、生物量与文明阶段，数值与机制尽量贴近真实生物学。对想做模拟/系统驱动玩法的开发者，它是硬核范本。",
      "source": "Revolutionary-Games/Thrive 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/Revolutionary-Games/Thrive",
      "image": "https://opengraph.githubassets.com/1/Revolutionary-Games/Thrive",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "Thrive",
        "进化模拟",
        "系统驱动"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "以生命演化为主线；",
            "多阶段系统模拟；",
            "机制贴近真实生物学。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "模拟深度靠的是自洽的规则系统，不是堆内容。Thrive 把生物学原理做成可玩的晋升链，提醒我们：当规则足够真实，玩家自己就会长出故事。"
        }
      ]
    },
    {
      "id": "games-endlesssky",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "Endless Sky",
      "title": "Endless Sky：用 2D 像素讲星海贸易与舰队战争的开源太空歌剧",
      "summary": "笔者注意到，Endless Sky 是一款开源 2D 太空贸易与战斗游戏，主打可扩展的剧情、经济与舰队系统。它证明轻量画面加重系统同样能撑起上百小时的策略循环。",
      "source": "endless-sky/endless-sky 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/endless-sky/endless-sky",
      "image": "https://opengraph.githubassets.com/1/endless-sky/endless-sky",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Endless Sky",
        "太空",
        "策略"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "2D 太空贸易战斗；",
            "可扩展剧情与经济；",
            "轻画面重系统。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多新人误以为好玩等于画面好。Endless Sky 用像素和数值系统撑起长线策略，说明玩法循环的引力往往比美术预算更持久。"
        }
      ]
    },
    {
      "id": "games-luanti",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "Luanti",
      "title": "Luanti（原 Minetest）：把我的世界式沙盒做成可 mod 的引擎化游戏",
      "summary": "笔者观察到，Luanti 是 Minetest 更名后的开源沙盒引擎，提供 voxel 世界、Lua 脚本与海量社区 mod。它示范了游戏即平台——核心极小、玩法由社区生态扩展。",
      "source": "luanti-org/luanti 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/luanti-org/luanti",
      "image": "https://opengraph.githubassets.com/1/luanti-org/luanti",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Luanti",
        "沙盒",
        "Mod"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "原 Minetest 更名；",
            "voxel 世界+Lua 脚本；",
            "社区 mod 生态庞大。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "游戏即平台是最高级的留存设计。Luanti 把核心做薄、把扩展交出去，让玩家兼开发者。想做 UGC/沙盒的新人，它的架构就是一本现成的教科书。"
        }
      ]
    },
    {
      "id": "games-unvanquished",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "Unvanquished",
      "title": "Unvanquished：把 FPS 与 RTS 揉在一起的开源非对称对抗样本",
      "summary": "笔者注意到，Unvanquished 是一款开源非对称对抗游戏，玩家既打 FPS 又经营基地（RTS），人类与外星种族机制迥异。它适合研究两套玩法如何塞进同一局对战。",
      "source": "Unvanquished 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/Unvanquished/Unvanquished",
      "image": "https://opengraph.githubassets.com/1/Unvanquished/Unvanquished",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "Unvanquished",
        "FPS",
        "非对称"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开源非对称对抗；",
            "FPS+RTS 双玩法；",
            "人族与异族机制迥异。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "非对称对抗的设计难点在平衡两种体验。Unvanquished 让一方打仗、一方建基地，却在同一局里收敛，这种双循环共场的思路对做多人玩法很有启发。"
        }
      ]
    },
    {
      "id": "os-sdl",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·跨平台",
      "tag": "SDL",
      "title": "SDL：跨平台多媒体层的事实标准，几乎每个引擎的底层都见过它",
      "summary": "笔者观察到，SDL 用 C 提供了窗口、输入、音频与线程的跨平台抽象，是无数游戏与引擎的底层依赖。想理解一次编写多端运行是怎么实现的，SDL 是最该读的基石之一。",
      "source": "libsdl-org/SDL 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/libsdl-org/SDL",
      "image": "https://opengraph.githubassets.com/1/libsdl-org/SDL",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "SDL",
        "跨平台",
        "C"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "C 写的多媒体抽象层；",
            "窗口/输入/音频/线程；",
            "众多引擎底层依赖。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "跨平台三个字背后是无数适配坑。SDL 把最脏的活揽下来，让上层只写逻辑。新人读它能明白为什么你的游戏能在 Win/Mac/Linux 上跑——不是魔法，是有人替你挡住了系统差异。"
        }
      ]
    },
    {
      "id": "os-sfml",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·C++",
      "tag": "SFML",
      "title": "SFML：用清晰 API 把 2D 多媒体封装成 C++ 初学者的好朋友",
      "summary": "笔者注意到，SFML 以模块化、易读的 C++ API 提供窗口、图形、音频、网络与输入，是做 2D 小游戏与原型的轻量首选。它的设计哲学是让新手少踩编译的坑。",
      "source": "SFML/SFML 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/SFML/SFML",
      "image": "https://opengraph.githubassets.com/1/SFML/SFML",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "SFML",
        "C++",
        "2D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "模块化 C++ 多媒体库；",
            "窗口/图形/音频/网络；",
            "2D 原型轻量首选。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "框架的友好度往往体现在出错信息是否说人话。SFML 的 API 直白到几乎不用查文档，这让它成为 C++ 新手从会编程到会做游戏的最短桥梁。"
        }
      ]
    },
    {
      "id": "os-assimp",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·3D格式",
      "tag": "Assimp",
      "title": "Assimp：把几十种 3D 格式统一成一条导入管线的开源答案",
      "summary": "笔者观察到，Assimp 支持导入数十种 3D 文件格式并输出统一数据结构，是游戏与工具链里模型进引擎的通用闸门。对做资源管线的人，它是绕不开的格式翻译层。",
      "source": "assimp/assimp 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/assimp/assimp",
      "image": "https://opengraph.githubassets.com/1/assimp/assimp",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Assimp",
        "3D格式",
        "管线"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "支持数十种 3D 格式；",
            "输出统一数据结构；",
            "模型导入通用闸门。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "美术用 Blender、Maya、3ds Max，引擎只认自己的格式——中间这道翻译谁来做？Assimp 就是。新人做工具链时先想清楚格式转换在哪一层发生，能省掉无数返工。"
        }
      ]
    },
    {
      "id": "os-freetype",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·字体",
      "tag": "FreeType",
      "title": "FreeType：屏幕上几乎每个字形，都经过它的栅格化",
      "summary": "笔者观察到，FreeType 是业界标准的字体光栅化引擎，被游戏、浏览器与操作系统广泛集成。想做 UI、HUD 或任意文本渲染，理解 FreeType 如何把轮廓变成像素是基础功。",
      "source": "freetype/freetype 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/freetype/freetype",
      "image": "https://opengraph.githubassets.com/1/freetype/freetype",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "FreeType",
        "字体",
        "栅格化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "业界标准字体栅格化；",
            "被游戏/浏览器广泛集成；",
            "文本渲染基础功。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "文字渲染常被低估，直到你的中文在界面上糊成一团。FreeType 处理的就是轮廓到像素这一步，涉及 hinting、抗锯齿等细节。做 UI 的人迟早要和它打交道。"
        }
      ]
    },
    {
      "id": "os-jolt",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "物理·C++",
      "tag": "Jolt",
      "title": "Jolt Physics：用多层架构把物理求解做得又快又稳的现代 C++ 引擎",
      "summary": "笔者观察到，Jolt Physics 是 Horizon Forbidden West 等作品采用的物理引擎，以确定性、多线程与易用 API 著称。它适合想理解现代刚体/角色控制器实现的开发者。",
      "source": "jrouwe/JoltPhysics 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/jrouwe/JoltPhysics",
      "image": "https://opengraph.githubassets.com/1/jrouwe/JoltPhysics",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "Jolt",
        "物理",
        "C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "被用于 3A 作品；",
            "确定性+多线程；",
            "刚体与角色控制器。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "物理最怕两帧之间炸了。Jolt 用确定性与分层设计把稳定性做进骨子里，还被商业大作验证过。新人读它能学到工业级物理和玩具物理之间的真实差距。"
        }
      ]
    },
    {
      "id": "os-recast",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "AI·导航",
      "tag": "Recast",
      "title": "Recast & Detour：开源导航网格的行业标配，AI 寻路从这里起步",
      "summary": "笔者观察到，Recast 负责从网格生成导航网格、Detour 负责在网格上寻路，被无数游戏用作 AI 移动的底层。想做 NPC 巡逻、群体寻路，这套工具是绕不开的起点。",
      "source": "recastnavigation/recastnavigation 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/recastnavigation/recastnavigation",
      "image": "https://opengraph.githubassets.com/1/recastnavigation/recastnavigation",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "Recast",
        "导航网格",
        "寻路"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Recast 生成导航网格；",
            "Detour 负责寻路；",
            "NPC 移动底层。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "NPC 怎么不卡墙是动作游戏的基本功。Recast/Detour 把导航网格这套方法论开源化，等于把行业积累十几年的寻路经验直接递到你手上。"
        }
      ]
    },
    {
      "id": "tu-handmade",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "底层·引擎",
      "tag": "Handmade Hero",
      "title": "Handmade Hero：从零写游戏引擎的逐集直播，把底层黑盒全拆开",
      "summary": "笔者建议把 Handmade Hero 当长期陪练：作者 Casey Muratori 从空白项目逐集直播写一台游戏引擎，覆盖平台层、渲染、音频与碰撞。想真正搞懂引擎之下还有什么，这是最硬的课。",
      "source": "Handmade Hero 官方站（一手）",
      "date": "2026-11-04",
      "url": "https://handmadehero.org/",
      "image": "",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "8 分钟",
      "hotScore": 88,
      "tags": [
        "Handmade Hero",
        "引擎",
        "底层"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "逐集直播写引擎；",
            "覆盖平台/渲染/音频；",
            "适合啃底层。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大多数教程教你用引擎，Handmade Hero 教你造引擎。它的价值不在代码本身，而在让你亲眼看清：你习以为常的每一帧画面，下面都站着多少自己写的系统。"
        }
      ]
    },
    {
      "id": "tu-bookofshaders",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "图形·Shader",
      "tag": "The Book of Shaders",
      "title": "The Book of Shaders：用交互式网页，把片元着色器讲到能上手",
      "summary": "笔者观察到，The Book of Shaders 以可交互的网页循序渐进讲 GLSL 片元着色器，从颜色、形状到噪声与矩阵变换。对想入门 Shader 又怕数学劝退的人，它是门槛最低的入口。",
      "source": "The Book of Shaders 官方教程（一手）",
      "date": "2026-11-04",
      "url": "https://thebookofshaders.com/",
      "image": "",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "Shader",
        "GLSL",
        "图形学"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "交互式讲 GLSL；",
            "从颜色到噪声；",
            "入门 Shader 低门槛。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "着色器最怕公式看懂、屏幕全黑。这本书用网页让你边改边看，把抽象的数学立刻变成像素变化。先有视觉反馈再补理论，是学图形学最省力的一条路。"
        }
      ]
    },
    {
      "id": "tu-gpp",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "架构·设计模式",
      "tag": "Game Programming Patterns",
      "title": "Game Programming Patterns：把引擎里的设计模式写成能读的教科书",
      "summary": "笔者建议把《Game Programming Patterns》作为进阶读物：它用游戏开发的具体场景讲命令、组件、状态机、事件队列等模式，比通用设计模式书更贴地。想写可维护的游戏代码，这本几乎是必读。",
      "source": "Game Programming Patterns 官方站（一手）",
      "date": "2026-11-04",
      "url": "https://gameprogrammingpatterns.com/",
      "image": "",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "8 分钟",
      "hotScore": 87,
      "tags": [
        "设计模式",
        "架构",
        "代码"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "用游戏场景讲模式；",
            "命令/组件/状态机；",
            "比通用模式书贴地。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多新人写游戏代码，玩意一多就变成意大利面。这本书把组件、状态机、事件队列这些套路讲透，让你在复杂度爆炸前就搭好骨架——架构意识比会写功能更重要。"
        }
      ]
    },
    {
      "id": "tu-threejsjourney",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "Web3D·课程",
      "tag": "Three.js Journey",
      "title": "Three.js Journey：Bruno Simon 把 Web 3D 实战做成体系化视频课",
      "summary": "笔者观察到，Three.js Journey 用大量实战章节覆盖 Three.js 从基础到 Shader、物理与优化的完整路径，是前端转 Web3D 最系统的课程之一。想认真做网页 3D，这份路径值得跟。",
      "source": "Three.js Journey 官方课程（一手）",
      "date": "2026-11-04",
      "url": "https://threejs-journey.com/",
      "image": "",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "8 分钟",
      "hotScore": 86,
      "tags": [
        "Three.js",
        "Web3D",
        "课程"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "实战章节体系完整；",
            "覆盖 Shader/物理/优化；",
            "前端转 Web3D 系统课。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "免费碎片教程容易让人学到一半卡住。Three.js Journey 的强项是路径完整：从画一个立方体一路走到写 shader 和做优化。新人最需要的不是更多片段，而是一条不中断的路。"
        }
      ]
    },
    {
      "id": "tu-pbr",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "渲染·光照",
      "tag": "PBR Book",
      "title": "Physically Based Rendering：把光线如何变成像素写成开源巨著",
      "summary": "笔者建议把 PBR 这本书当案头参考：它从光线传输的数学出发，推导出现代离线渲染的完整实现，代码开源。想真正理解材质、光照与全局光照，这是绕不开的硬核底稿。",
      "source": "PBR Book 官方站（一手）",
      "date": "2026-11-04",
      "url": "https://www.pbr-book.org/",
      "image": "",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "9 分钟",
      "hotScore": 85,
      "tags": [
        "PBR",
        "渲染",
        "光照"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "从光线传输推导渲染；",
            "实现代码开源；",
            "材质/光照硬核底稿。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "调材质如果只靠拖滑块，永远调不出道理。PBR 这本书把光照拆到物理层面，让你知道每个参数背后是什么。想做写实渲染的人，这本书就是你和看起来对之间的那座桥。"
        }
      ]
    },
    {
      "id": "tu-gpugems",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "算法·GPU",
      "tag": "GPU Gems",
      "title": "GPU Gems：英伟达把 GPU 上的算法汇成可查的算法宝库",
      "summary": "笔者注意到，GPU Gems 系列汇集了大量在 GPU 上实现的高效算法（粒子、水体、光照、剔除等），由英伟达整理公开。对想做高性能图形与计算着色器的人，它是常翻常新的参考。",
      "source": "NVIDIA GPU Gems 官方文档（一手）",
      "date": "2026-11-04",
      "url": "https://developer.nvidia.com/gpugems",
      "image": "",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "8 分钟",
      "hotScore": 84,
      "tags": [
        "GPU Gems",
        "算法",
        "计算"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "GPU 高效算法合集；",
            "粒子/水体/光照/剔除；",
            "常翻常新的参考。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多炫酷效果本质是一个被前人写过的 GPU 算法。GPU Gems 的价值在于把散落各处的技巧汇成体系，让你遇到性能瓶颈时有地方可查——它教的是思路库，不是抄答案。"
        }
      ]
    },
    {
      "id": "ai-ollama",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "推理·本地",
      "tag": "Ollama",
      "title": "Ollama：把本地跑大模型做成一条命令，AI 助手落到自己机器上",
      "summary": "笔者观察到，Ollama 用极简命令行把主流开源大模型拉到本机运行，统一管理权重与推理。对想做 AI 辅助开发又顾虑隐私与成本的开发者，它是把模型请回本机的钥匙。",
      "source": "ollama/ollama 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/ollama/ollama",
      "image": "https://opengraph.githubassets.com/1/ollama/ollama",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 89,
      "tags": [
        "Ollama",
        "本地推理",
        "大模型"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "一条命令跑本地模型；",
            "统一管理权重与推理；",
            "隐私/成本友好。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "模型在云端意味着每次都要联网、要付费、要交数据。Ollama 把推理拉回本地，等于给开发者一个可控的发动机。想做本地 copilot 或 NPC 对话，它几乎是必装的第一块砖。"
        }
      ]
    },
    {
      "id": "ai-vllm",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "推理·服务",
      "tag": "vLLM",
      "title": "vLLM：用 PagedAttention 把大模型推理吞吐拉满的开源引擎",
      "summary": "笔者注意到，vLLM 以 PagedAttention 显存管理显著提升大模型 serving 的吞吐与并发，被大量部署采用。对想自建 AI 后端、服务游戏内智能体的开发者，它是性能基线级工具。",
      "source": "vllm-project/vllm 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/vllm-project/vllm",
      "image": "https://opengraph.githubassets.com/1/vllm-project/vllm",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "vLLM",
        "推理",
        "吞吐"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "PagedAttention 显存管理；",
            "高吞吐高并发 serving；",
            "AI 后端性能基线。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "模型能跑和能同时服务一千人是两回事。vLLM 解决的是推理服务的效率瓶颈——当你要把 AI 接进在线游戏，吞吐直接决定成本与体验。这类工程细节才是落地真正的护城河。"
        }
      ]
    },
    {
      "id": "ai-comfyui",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "生图·节点",
      "tag": "ComfyUI",
      "title": "ComfyUI：用节点图把 AI 生图流程可视化，美术资产流水线化",
      "summary": "笔者观察到，ComfyUI 以节点式工作流组织 Stable Diffusion 等生成模型，让生图、改图、批处理变成可复用管线。对游戏美术做概念图、贴图、素材变体，它是把 AI 接进产线的利器。",
      "source": "comfyanonymous/ComfyUI 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/comfyanonymous/ComfyUI",
      "image": "https://opengraph.githubassets.com/1/comfyanonymous/ComfyUI",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "ComfyUI",
        "生图",
        "节点"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "节点式生图工作流；",
            "可复用 AI 管线；",
            "概念图/贴图利器。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "AI 生图最怕每次都从头调。ComfyUI 把流程固化为节点图，意味着你的美术产线可以版本化、可复现。对团队，这比单次出图重要得多——它把 AI 从玩具变成工序。"
        }
      ]
    },
    {
      "id": "ai-openhands",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "智能体·自托管",
      "tag": "OpenHands",
      "title": "OpenHands：把 AI 软件工程智能体做成开源可自托管，让 agent 直接改仓库",
      "summary": "笔者注意到，OpenHands（原 OpenDevin）是可自托管的 AI 编程智能体，能读代码、改文件、跑命令、开 PR。对想把 AI 同事接进日常开发流、又不愿把代码交第三方的团队，它是合规友好的选择。",
      "source": "All-Hands-AI/OpenHands 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/All-Hands-AI/OpenHands",
      "image": "https://opengraph.githubassets.com/1/All-Hands-AI/OpenHands",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "OpenHands",
        "Agent",
        "自托管"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开源可自托管编程 agent；",
            "读码/改文件/跑命令/开PR；",
            "代码不出本地更合规。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "会写代码的 AI 和能自己开 PR 的 AI 差着一整个工作流。OpenHands 的意义在于自托管——你的源码不必离开内网就能多一个会干活的同事。敏感项目尤其该走这条路线。"
        }
      ]
    },
    {
      "id": "ai-langgraph",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "智能体·流程",
      "tag": "LangGraph",
      "title": "LangGraph：用图组织 AI 智能体的状态与分支，把复杂流程画清楚",
      "summary": "笔者观察到，LangGraph 以有向图描述智能体的状态、循环与分支，适合把多步、可回滚的 agent 工作流结构化。对做游戏内助手、自动化测试或内容生成管线的人，它比线性链更可控。",
      "source": "langchain-ai/langgraph 官方仓库（一手）",
      "date": "2026-11-04",
      "url": "https://github.com/langchain-ai/langgraph",
      "image": "https://opengraph.githubassets.com/1/langchain-ai/langgraph",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "LangGraph",
        "智能体",
        "状态机"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "图描述状态/循环/分支；",
            "适合多步可回滚流程；",
            "比线性链更可控。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "真实任务很少是问答一次完事。LangGraph 用图把 agent 的每一步和回退路径显式画出来，意味着流程可观测、可调试。做复杂 AI 功能时，这种可视化控制流能救命。"
        }
      ]
    },
    {
      "id": "ai-kimi",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "游戏·Agent",
      "tag": "Kimi",
      "title": "Kimi 发布游戏开发解决方案：让 AI Agent 直接操作 Unity/虚幻工程",
      "summary": "笔者观察到，月之暗面 Kimi 于 11 月初发布游戏开发与创意工作解决方案，基于 K3.1 系列模型与 Kimi Code/Work Agent，通过插件直接操作 Unity、虚幻、Blender 现有工程。它把 AI 接管从原型到运营往前推了一步。",
      "source": "IT之家 报道（一手公告转述）",
      "date": "2026-11-04",
      "url": "https://www.ithome.com/1/021/539.htm",
      "image": "",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Kimi",
        "游戏AI",
        "Agent"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "基于 K3.1 与 Code/Work Agent；",
            "插件直连 Unity/虚幻/Blender；",
            "覆盖原型到发行运营。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "AI 生成一段文字和 AI 改你的工程文件是质的区别。Kimi 这步若真能稳定操作专业工具，原型验证成本会被压低一个数量级——但新人仍需盯紧：agent 改坏的锅最后还是你背。"
        }
      ]
    },
    {
      "id": "contest-ld62",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "赛事·Game Jam",
      "tag": "Ludum Dare 62",
      "title": "Ludum Dare 62：全球最老牌限时 Game Jam 的下一届赛程已开页",
      "summary": "笔者注意到，Ludum Dare 62 的赛事页面已开放，延续限时 48/72 小时、给定主题做游戏的经典形式。对想逼自己快速出原型、又盼全球同行评审的新人，它是练手与曝光兼得的入口。",
      "source": "Ludum Dare 官方赛事页（一手）",
      "date": "2026-11-04",
      "url": "https://ldjam.com/events/ludum-dare-62",
      "image": "",
      "badge": "赛事",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "Ludum Dare",
        "Game Jam",
        "限时"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "LD62 赛事页已开放；",
            "48/72 小时限时；",
            "全球评审与曝光。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Game Jam 的魔力在强制交付。LD 这种老牌赛事逼你在两天里走完立项到上线的全过程。新人别追求完美，先学会在截止前交出能玩的东西——这比任何课程都练人。"
        }
      ]
    },
    {
      "id": "contest-indieplay",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "赛事·大赛",
      "tag": "indiePlay",
      "title": "indiePlay 中国独立游戏大赛：本土独立团队的年度作品窗口",
      "summary": "笔者观察到，由 CiGA 主办的中国独立游戏大赛（indiePlay）是本土独立开发者重要的作品展示与评选平台，覆盖游戏、叙事、美术等维度。对想让作品被行业看见的国内新人，它是年度关键窗口。",
      "source": "CiGA indiePlay 官方页（一手）",
      "date": "2026-11-04",
      "url": "https://www.ciga.me/indieplay",
      "image": "",
      "badge": "赛事",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "indiePlay",
        "独立游戏",
        "CiGA"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "CiGA 主办年度大赛；",
            "覆盖游戏/叙事/美术；",
            "本土作品展示窗口。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "独立开发者最缺的不是能力，是被看见的机会。indiePlay 这类赛事把评审、媒体与发行方聚到同一张桌上，你的 demo 可能就差这一次上台。提前打磨参选版本比临时抱佛脚强。"
        }
      ]
    },
    {
      "id": "contest-ggj",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "赛事·Game Jam",
      "tag": "Global Game Jam",
      "title": "Global Game Jam：每年一月全球同步的 48 小时造游戏盛典",
      "summary": "笔者注意到，Global Game Jam 是每年一月在世界各地同步举行的超大规模 Game Jam，单一主题、48 小时、线下站点协作。对想体验和陌生队友限时共创的新人，它是入行社交与实战的捷径。",
      "source": "Global Game Jam 官方站（一手）",
      "date": "2026-11-04",
      "url": "https://globalgamejam.org/",
      "image": "",
      "badge": "赛事",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "GGJ",
        "Game Jam",
        "线下"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "每年一月全球同步；",
            "单一主题 48 小时；",
            "线下站点协作。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "GGJ 的珍贵在于在场。你会在站点遇到美术、程序、音效各路人马，48 小时里被迫学会分工与妥协。这种高密度协作经验是线上独自开发永远给不了的。"
        }
      ]
    },
    {
      "id": "contest-funplus",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·社招",
      "tag": "FunPlus",
      "title": "FunPlus 趣加开放招聘：中厂出海团队的研发与运营岗位窗口",
      "summary": "笔者观察到，FunPlus（趣加）在官网开放招聘入口，覆盖游戏研发、发行运营与技术中台等方向，偏向有出海经验的复合人才。对想进中厂、全球化、节奏相对可控团队的应届与社招同学，这是一条值得盯的线。",
      "source": "FunPlus 官方招聘页（一手）",
      "date": "2026-11-04",
      "url": "https://funplus.com/careers/",
      "image": "https://funplus.com/wp-content/uploads/2024/07/FunPlus_Pride_FunIsBeingYouLogo-1.png",
      "badge": "招聘",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "FunPlus",
        "招聘",
        "出海"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "官网开放招聘入口；",
            "研发/发行/技术中台；",
            "偏好出海复合人才。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "校招是信息战，社招更看赛道匹配。FunPlus 这类出海中厂，节奏比大厂灵活、体量又够你练完整项目。投之前先研究它旗下产品的市场，面试时能多聊出一层理解。"
        }
      ]
    }
  ]
};
