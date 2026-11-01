window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-02",
    "weekday": "星期一",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-02 07:30",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "派拉蒙游戏与 WB Games 并入 Skydance：1110 亿美元并购收官，行业集中度再上台阶",
      "开源引擎矩阵更新：Raylib / Heaps / FNA / Flax / wgpu / Piston 值得精读",
      "《Enshrouded》1.0 与《Stupid Never Dies》评测：生存建造与癫狂动作的两极样本",
      "AI 工具链开源化：llama.cpp / web-llm / Semantic Kernel / ML-Agents 值得上手",
      "Game Jam 双线：SHIFT（阿布扎比×Unity）与 Craftalog Create 开赛，多益/灵犀 2027 校招进行中"
    ],
    "engineStatus": [
      {
        "name": "Godot 4.8 dev 4",
        "type": "godot",
        "status": "特性冻结后修 bug",
        "badge": "开源引擎",
        "color": "cyan"
      },
      {
        "name": "Babylon.js 9.0",
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
      }
    ]
  },
  "hero": {
    "id": "ind-paramount-wb-skydance-hero",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "Skydance 并购",
    "title": "派拉蒙游戏与 WB Games 并入 Skydance：1110 亿美元并购收官，内容版图重组",
    "summary": "笔者注意到，随着 Skydance 以约 1110 亿美元完成对派拉蒙的并购，Paramount Games Studio 与 WB Games 正式归入同一体系。对学习者而言，这是观察「大厂如何通过并购重组内容资产、重排研发与发行优先级」的鲜活样本，也意味着部分 IP 的归属与协作方式将随之改变。",
    "image": "https://assetsio.gnwcdn.com/paramount-wb.jpg?width=1200&height=630&fit=crop&enable=upscale",
    "source": "GamesIndustry.biz 一手报道",
    "date": "2026-11-02",
    "url": "https://www.gamesindustry.biz/paramount-games-studio-and-wb-games-merge-under-skydance-following-completion-of-111bn-acquisition",
    "readTime": "6 分钟",
    "hotScore": 95,
    "tags": [
      "Skydance",
      "派拉蒙",
      "WB Games",
      "并购"
    ],
    "content": [
      {
        "title": "本次要点",
        "type": "list",
        "items": [
          "Skydance 完成约 1110 亿美元对派拉蒙的并购；",
          "Paramount Games Studio 与 WB Games 并入同一体系；",
          "并购后同步推出五天到岗（RTO）与自愿买断方案。"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "并购新闻离「做游戏」看似很远，其实很近：它决定了哪些 IP 能被持续投入、哪些工作室拿到发行资源。新人看行业，别只盯单款神作，要看资本如何把内容资产重新拼图——这比任何单一产品都更能解释「为什么有的项目说停就停」。"
      }
    ]
  },
  "items": [
    {
      "id": "en-raylib",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·C",
      "tag": "Raylib",
      "title": "Raylib：用极简 C API 把「写个小游戏」的门槛压到最低",
      "summary": "笔者观察到，Raylib 以单头文件式、几乎零依赖的 C API，把图形、音频、输入打包成易上手的函数集。对想从零理解游戏循环、又不想被庞大引擎劝退的新人，它是「先跑起来再讲原理」的友好入口。",
      "source": "Raylib 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/raysan5/raylib",
      "image": "https://opengraph.githubassets.com/1/raysan5/raylib",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Raylib",
        "C",
        "轻量引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Raylib 主打极简 C API 与低依赖；",
            "图形/音频/输入一体化，开箱即用；",
            "适合「先做出能动的画面」再补原理。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多新人被引擎的复杂度吓退。Raylib 的价值恰在「克制」：它不替你管理一切，只给你最小可用的积木。先亲手写一遍游戏循环，再去用大引擎，你会明白那些「自动帮你做的事」到底做了什么。"
        }
      ]
    },
    {
      "id": "en-heaps",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Haxe",
      "tag": "Heaps",
      "title": "Heaps：用 Haxe 一次编写、多端运行的 2D/3D 引擎样本",
      "summary": "笔者注意到，Heaps 是 Dead Cells 团队背后使用的引擎，主打 Haxe 语言的一次编写、多平台导出。它证明中小团队也能拥有一条干净、可控、跨端的渲染与逻辑管线。",
      "source": "Heaps 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/heapsio/heaps",
      "image": "https://opengraph.githubassets.com/1/heapsio/heaps",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Heaps",
        "Haxe",
        "跨端"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Heaps 用 Haxe 实现一次编写多端运行；",
            "曾支撑《Dead Cells》等商业作品；",
            "渲染与逻辑管线可控、轻量。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「跨端」不是噱头，而是小团队的生存能力。Heaps 用语言层抽象把平台差异挡在身后，让开发者专注玩法。读它的取舍，能学到「什么时候该自己造轮子、什么时候该借语言特性」。"
        }
      ]
    },
    {
      "id": "en-fna",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "框架·C#",
      "tag": "FNA",
      "title": "FNA：用纯 C# 重写 XNA 精神的现代开源游戏框架",
      "summary": "笔者观察到，FNA 以对 XNA 的高度兼容为目标，用纯 C# 提供一套稳定的 2D/3D 游戏开发框架。对熟悉 C# 的开发者，它是把旧 XNA 技能平移到现代的可靠底座。",
      "source": "FNA 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/FNA-XNA/FNA",
      "image": "https://opengraph.githubassets.com/1/FNA-XNA/FNA",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "FNA",
        "XNA",
        "C#"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "FNA 高度兼容 XNA 的 API 心智；",
            "纯 C# 实现，跨平台能力稳固；",
            "适合把旧 XNA 项目平移到现代。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "生态延续性常被低估。FNA 的价值不在「多新」，而在「多稳」——它让一套成熟的工作流不被时代抛下。对学习者，选一个能长期陪你成长的框架，比追新潮更划算。"
        }
      ]
    },
    {
      "id": "en-flax",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·C#",
      "tag": "Flax Engine",
      "title": "Flax Engine：把 C++ 性能与 C# 生产力揉在一起的现代化开源引擎",
      "summary": "笔者注意到，Flax Engine 以 C++ 内核加 C# 脚本的双层架构，试图兼顾运行效率与开发手感。它给想做 3D 但嫌商业引擎黑盒太重的人，提供了一份可改的现代化样本。",
      "source": "Flax Engine 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/FlaxEngine/FlaxEngine",
      "image": "https://opengraph.githubassets.com/1/FlaxEngine/FlaxEngine",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "Flax",
        "C++",
        "C#"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Flax 采用 C++ 内核 + C# 脚本双层；",
            "兼顾运行效率与开发手感；",
            "源码开放，可深入改造。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「性能与生产力二选一」是旧命题。Flax 用分层架构把两者分开：热路径交给 C++，玩法交给 C#。这种分工思路，对理解现代引擎如何兼顾速度与迭代，很有参考价值。"
        }
      ]
    },
    {
      "id": "en-wgpu",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "图形·Rust",
      "tag": "wgpu",
      "title": "wgpu：Rust 生态里把 WebGPU 落到多后端的图形抽象层",
      "summary": "笔者观察到，wgpu 用 Rust 实现了对 WebGPU 标准的跨后端封装，既是浏览器外运行 WebGPU 的渠道，也是学习现代图形 API 设计的优质样本。对想理解「一套接口、多 GPU 后端」的人，它很值得读。",
      "source": "wgpu 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/gfx-rs/wgpu",
      "image": "https://opengraph.githubassets.com/1/gfx-rs/wgpu",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "wgpu",
        "WebGPU",
        "Rust"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "wgpu 是 WebGPU 的 Rust 实现；",
            "抽象多 GPU 后端，跨平台；",
            "也是学习现代图形 API 的样本。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "WebGPU 正在成为跨平台图形的新基线。wgpu 的意义在于：它把「标准」和「实现」拆开，让你既能用统一接口写代码，又能看清后端差异。新人从它切入，比直接啃各厂商 API 更省力。"
        }
      ]
    },
    {
      "id": "en-piston",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎·Rust",
      "tag": "Piston",
      "title": "Piston：Rust 游戏引擎生态的「乐高式」模块化集合",
      "summary": "笔者注意到，Piston 不是一个单体引擎，而是一组可拼装的 Rust 库集合，覆盖窗口、输入、2D/3D 渲染。它体现的是「用组合代替大而全」的工程哲学，适合想用 Rust 搭自己管线的人。",
      "source": "Piston 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/PistonDevelopers/piston",
      "image": "https://opengraph.githubassets.com/1/PistonDevelopers/piston",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 82,
      "tags": [
        "Piston",
        "Rust",
        "模块化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Piston 是模块化 Rust 游戏库集合；",
            "窗口/输入/渲染各自独立可拼装；",
            "主张用组合代替单体引擎。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「大而全」不是唯一答案。Piston 把引擎拆成积木，让你只取所需。这种思路对理解「哪些是核心、哪些可插拔」很有帮助——你自己搭管线时，也会更清楚每一块该放哪。"
        }
      ]
    },
    {
      "id": "ind-skydance-rto",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "并购后整合",
      "tag": "Skydance",
      "title": "合并后的 Skydance 要求五天到岗并推自愿买断：内容巨头的「效率重构」",
      "summary": "笔者观察到，完成并购后的 Skydance 同步推出五天到岗（RTO）与自愿买断方案。对行业观察者，这是内容公司在整合期压缩成本、重排人力的典型动作，也折射出大厂对「下一阶段增长」的焦虑。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-02",
      "url": "https://www.gamesindustry.biz/newly-merged-skydance-mandates-staff-return-to-office-five-days-a-week-offers-voluntary-buyout-program",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Skydance",
        "RTO",
        "整合"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "并购后 Skydance 推行五天到岗；",
            "同步提供自愿买断方案；",
            "属整合期典型的人力重排。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大厂并购后第一刀往往是组织效率。新人看这类新闻，重点不在「谁走谁留」，而在理解：当资本要求回报，研发节奏与人力结构会如何被重塑——这关系到你未来简历的去向。"
        }
      ]
    },
    {
      "id": "ind-aream-ma",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "投融资·M&A",
      "tag": "Aream & Co",
      "title": "Aream 报告：Q3 游戏业 M&A 达 578 亿美元，EA 550 亿杠杆收购占大头",
      "summary": "笔者注意到，Aream & Co 统计显示 2026 年 Q3 游戏行业并购规模达 578 亿美元，其中 EA 约 550 亿美元杠杆收购是绝对主力。它说明行业资本正从「扩张」转向「整合存量」，钱更集中于头部。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-02",
      "url": "https://www.gamesindustry.biz/aream-co-games-industry-ma-generates-578-bn-in-q3-including-eas-55bn-leveraged-buyout",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "M&A",
        "EA",
        "杠杆收购"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Q3 游戏业 M&A 约 578 亿美元；",
            "EA 约 550 亿杠杆收购为主力；",
            "资本从扩张转向整合存量。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "杠杆收购意味着「借来的增长」。对学习者，这提醒一件事：公司估值高不等于稳，债务结构会反过来决定它能冒多大险。看行业，学会读资产负债表，比看股价更有用。"
        }
      ]
    },
    {
      "id": "ind-gardens",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "融资·独立",
      "tag": "Gardens Interactive",
      "title": "Gardens Interactive 募得 3500 万美元 B 轮：明星主创的「慢工」路线获资本认可",
      "summary": "笔者观察到，由《Journey》《Sky》幕后老兵创立的 Gardens Interactive 完成超 3500 万美元 B 轮。它说明即便在紧缩周期，自带审美与叙事口碑的团队，仍能为「慢工出细活」争取到耐心资本。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-02",
      "url": "https://www.gamesindustry.biz/gardens-interactive-founded-by-veterans-behind-journey-and-sky-children-of-the-light-raise-over-35m-in-series-b-funding-round",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Gardens",
        "B 轮",
        "独立"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Gardens 完成超 3500 万美元 B 轮；",
            "团队来自《Journey》《Sky》幕后；",
            "慢工路线仍获耐心资本。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "资本未必只爱快钱。Gardens 的案例说明：当团队自带「审美信用」，市场愿意为长期主义买单。对想做有调性作品的开发者，这是一颗定心丸——好品味也能成为融资资产。"
        }
      ]
    },
    {
      "id": "ind-fireshine",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "并购·发行",
      "tag": "Fireshine",
      "title": "Fireshine 收购《Necesse》开发商 Fair Games：发行商加码「已验证」的独立作品",
      "summary": "笔者注意到，Fireshine Games 收购了《Necesse》开发商 Fair Games，被其称为丹麦独立工作室的「决定性时刻」。它反映发行商在紧缩期更倾向收购已跑出数据的项目，而非押注从零开始。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-02",
      "url": "https://www.gamesindustry.biz/fireshine-games-acquires-necesse-dev-fair-games-described-as-a-defining-moment-for-danish-indie-studio",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Fireshine",
        "Necesse",
        "收购"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Fireshine 收购《Necesse》开发商；",
            "被视为丹麦独立团队的里程碑；",
            "发行商偏好已验证的项目。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「先做出数据，再被收购」正在成为独立团队更稳的出路。对开发者，这意味着早期别急着找发行，先把核心循环和小规模验证做扎实——你的数据就是谈判筹码。"
        }
      ]
    },
    {
      "id": "ind-wizards",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "劳资·AI",
      "tag": "Wizards of the Coast",
      "title": "WotC 工会扩大并喊停生成式 AI：创意劳工与「效率工具」的正面交锋",
      "summary": "笔者观察到，Wizards of the Coast 工会扩大规模，并明确要求公司停止推进生成式 AI。它把「AI 提效」与「创意劳动者权益」的张力摆上台面，是观察行业如何平衡技术与人本的重要窗口。",
      "source": "GamesIndustry.biz 一手报道",
      "date": "2026-11-02",
      "url": "https://www.gamesindustry.biz/wizards-of-the-coast-union-expands-demands-company-stop-pushing-generative-ai",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "WotC",
        "工会",
        "生成式AI"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "WotC 工会规模扩大；",
            "明确要求停止推进生成式 AI；",
            "创意劳工与效率工具正面交锋。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "AI 进游戏不是纯技术问题，而是劳动关系问题。学习者既要会用工具提效，也要理解它如何重塑岗位边界。未来你写进简历的，可能既是「会用 AI」，也是「懂得在何处为人留位置」。"
        }
      ]
    },
    {
      "id": "games-osu",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "osu!",
      "title": "osu!：用开源节奏游戏读懂「输入延迟、判定与社区共创」",
      "summary": "笔者注意到，osu! 作为开源节奏游戏，不仅玩法黏人，其判定系统、回放与皮肤社区也是学习「低延迟输入与玩家共创」的活教材。对想做音游或研究手感的人，它值得拆。",
      "source": "osu! 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/ppy/osu",
      "image": "https://opengraph.githubassets.com/1/ppy/osu",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "osu!",
        "音游",
        "开源"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "osu! 是开源节奏游戏；",
            "判定与回放系统精细；",
            "皮肤/谱面社区极其活跃。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "音游的命门是「输入到反馈」的延迟。osu! 把判定、回放、社区共创都开源，等于把一套成熟的手感工程摊开给你看。想做动作或音游，先读懂它如何对抗延迟，比抄画面更重要。"
        }
      ]
    },
    {
      "id": "games-mindustry",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "Mindustry",
      "title": "Mindustry：把「工厂自动化 + 塔防」揉在一起的开源样本",
      "summary": "笔者观察到，Mindustry 用开源方式把资源采集、产线自动化与塔防防御结合，逻辑密度极高却上手直观。对想理解「系统驱动玩法」的人，它是极好的拆解对象。",
      "source": "Mindustry 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/Anuken/Mindustry",
      "image": "https://opengraph.githubassets.com/1/Anuken/Mindustry",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Mindustry",
        "工厂",
        "塔防"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Mindustry 融合产线与塔防；",
            "系统逻辑密集但上手直观；",
            "开源，便于研究与二创。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "好玩法常来自「两个老机制的化合反应」。Mindustry 的启发是：别只盯着新题材，把已有机制重新组合、再加一层正反馈，也能做出让人停不下来的循环。"
        }
      ]
    },
    {
      "id": "games-cdda",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "开源游戏",
      "tag": "Cataclysm: DDA",
      "title": "Cataclysm: Dark Days Ahead：用开源 roguelike 读懂「模拟深度」",
      "summary": "笔者注意到，Cataclysm-DDA 以近乎偏执的系统深度著称——从体温、感染到车辆改装皆模拟。它示范了「复杂系统如何托住长期可玩性」，是研究中度拟真 roguelike 的宝藏。",
      "source": "Cataclysm-DDA 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/CleverRaven/Cataclysm-DDA",
      "image": "https://opengraph.githubassets.com/1/CleverRaven/Cataclysm-DDA",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "CDDA",
        "roguelike",
        "模拟"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "CDDA 系统深度极高；",
            "体温/感染/载具皆模拟；",
            "长期可玩性由系统支撑。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「深度」不是堆内容，而是让系统互相咬合。CDDA 演示了：当规则足够自洽，玩家自己就能长出故事。做开放世界时，先设计系统，再谈叙事，顺序别反。"
        }
      ]
    },
    {
      "id": "games-enshrouded",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游评测",
      "tag": "Enshrouded",
      "title": "《Enshrouded》1.0 评测：三年抢先体验后，它交出了「构筑系生存」的满分答卷",
      "summary": "笔者观察到，《Enshrouded》于 10 月 15 日推出 1.0，媒体给出 8/10 量级好评。它最被称道的是体素化的自由建造与 16 人联机共筑，也仍被诟病后期资源 farming 偏肝。对生存建造爱好者，这是近年最值得入住的作品之一。",
      "source": "Stadion Gaming 评测（一手评测）",
      "date": "2026-11-02",
      "url": "https://www.stadiongaming.eu/en/news/enshrouded-review-the-1-0-that-early-access-promised",
      "image": "",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Enshrouded",
        "生存建造",
        "1.0"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "1.0 于 10 月 15 日上线，约 8/10；",
            "体素建造与联机共筑是最大亮点；",
            "后期资源 farming 仍偏肝。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "《Enshrouded》给建造类游戏上了一课：把「改地形」做到不和你作对，玩家才愿意投入几百小时。对新人，它的启示是——爽点不全在战斗，给玩家「造东西的自由」同样能锁住心流。"
        }
      ]
    },
    {
      "id": "games-stupidneverdies",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游评测",
      "tag": "Stupid Never Dies",
      "title": "《Stupid Never Dies》评测：把「癫狂朋克」做满，但玩法循环没跟上能量",
      "summary": "笔者注意到，《Stupid Never Dies》10 月 21 日登陆 PC/PS5，媒体评价两极：视觉与创意十足，但战斗循环与地牢设计被认为跟不上它自己的高速节奏。它提醒我们，风格鲜明不等于系统自洽。",
      "source": "In Game News 评测（一手评测）",
      "date": "2026-11-02",
      "url": "https://ingamenews.com/gaming-news/stupid-never-dies-review-roundup-a-zany-pop-punk-mess",
      "image": "",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Stupid Never Dies",
        "动作",
        "朋克"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "10 月 21 日登陆 PC/PS5；",
            "视觉与创意获赞、系统被批；",
            "评价两极、风格大于自洽。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「我想做很酷的东西」和「做得出好玩的东西」是两件事。Stupid Never Dies 的教训是：当美术能量远高于系统设计，玩家记住的是惊艳一刻，留下的是疲惫。设计要先服务循环，再谈个性。"
        }
      ]
    },
    {
      "id": "os-tiled",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "工具·地图",
      "tag": "Tiled",
      "title": "Tiled：2D 地图编辑器的「事实标准」，关卡设计的通用语",
      "summary": "笔者观察到，Tiled 以通用的瓦片地图格式（TMX/TSX）成为 2D 关卡编辑的默认选择，几乎被所有 2D 引擎读取。想做关卡、做 Roguelike 地图，先懂 Tiled 等于先懂行业的「地图普通话」。",
      "source": "Tiled 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/mapeditor/tiled",
      "image": "https://opengraph.githubassets.com/1/mapeditor/tiled",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Tiled",
        "地图编辑",
        "2D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Tiled 是 2D 瓦片地图事实标准；",
            "TMX/TSX 被多数引擎读取；",
            "关卡设计的通用格式。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "工具生态的威力在「互认」。Tiled 之所以绕不开，是因为它定义了一套大家都读得懂的地图语言。学它，不只是学一个编辑器，而是接入整个 2D 关卡工作流。"
        }
      ]
    },
    {
      "id": "os-bullet",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "物理·3D",
      "tag": "Bullet",
      "title": "Bullet Physics：3D 物理的工业级参考实现，读它等于读物理引擎教材",
      "summary": "笔者注意到，Bullet 是长期被用于电影与游戏的 3D 物理引擎，刚体、软体、约束一应俱全。它的源码本身就是「碰撞检测与求解器」的活教材，比任何讲义都直观。",
      "source": "Bullet 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/bulletphysics/bullet3",
      "image": "https://opengraph.githubassets.com/1/bulletphysics/bullet3",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "Bullet",
        "物理",
        "3D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Bullet 是工业级 3D 物理引擎；",
            "刚体/软体/约束齐全；",
            "源码即物理教材。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "物理最怕「数值炸了不知道为什么」。Bullet 把碰撞、约束、求解器都摊开，读它的实现比背公式更能建立直觉——尤其是它如何让大规模刚体既快又稳。"
        }
      ]
    },
    {
      "id": "os-stb",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "库·单文件",
      "tag": "stb",
      "title": "stb 单文件库：把「一个头文件搞定一件事」发挥到极致的工程美学",
      "summary": "笔者观察到，Sean Barrett 的 stb 系列用单头文件实现了图像加载、字体、噪声等常用功能，几乎零依赖即可集成。它示范了「最小侵入」的库设计哲学，是每个 C/C++ 学习者都该翻一遍的合集。",
      "source": "stb 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/nothings/stb",
      "image": "https://opengraph.githubassets.com/1/nothings/stb",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "stb",
        "单文件",
        "C/C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "stb 是单头文件功能库集合；",
            "图像/字体/噪声等常用功能；",
            "近乎零依赖，即拖即用。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「能不依赖就不依赖」在工程上是一种克制。stb 证明：把一件事做对、做成单文件，比做成一个庞大框架更有长期价值。新手读它，能学到什么是「恰到好处的抽象」。"
        }
      ]
    },
    {
      "id": "os-gltf",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "格式·3D",
      "tag": "glTF",
      "title": "glTF：3D 资产的「JPEG 时刻」，读懂它就读懂跨引擎管线",
      "summary": "笔者注意到，Khronos 的 glTF 被冠以「3D 的 JPEG」之名，已成为模型与场景的通用交换格式。对想打通 Blender→引擎→Web 流程的人，它是绕不开的中枢格式。",
      "source": "KhronosGroup glTF 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/KhronosGroup/glTF",
      "image": "https://opengraph.githubassets.com/1/KhronosGroup/glTF",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "glTF",
        "3D格式",
        "Khronos"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "glTF 被称为「3D 的 JPEG」；",
            "是模型/场景通用交换格式；",
            "贯通 Blender 到各引擎与 Web。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "资产格式决定了工作流的摩擦力。glTF 的价值在「一次导出、到处能读」。新人早点习惯它，能少在格式转换上浪费无数小时——这是比学一个软件更底层的效率投资。"
        }
      ]
    },
    {
      "id": "os-r3f",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "框架·Web",
      "tag": "React Three Fiber",
      "title": "React Three Fiber：用「声明式」写 Three.js，把 3D 场景当组件拼",
      "summary": "笔者观察到，React Three Fiber 把 Three.js 包成 React 组件，让 3D 场景可以像搭 UI 一样声明式组合。对前端背景、想进 Web3D 的人，它是把已有 React 心智平移到 3D 的捷径。",
      "source": "pmndrs R3F 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/pmndrs/react-three-fiber",
      "image": "https://opengraph.githubassets.com/1/pmndrs/react-three-fiber",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "R3F",
        "Three.js",
        "React"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "R3F 把 Three.js 包成 React 组件；",
            "3D 场景可声明式组合；",
            "前端背景者的 Web3D 捷径。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "范式的力量在于「复用你已有的直觉」。R3F 让写 3D 像写 UI，降低的是认知切换成本。学它，不只是学一个库，而是理解「声明式思维」如何把复杂场景变可控。"
        }
      ]
    },
    {
      "id": "os-unitask",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "框架·Unity",
      "tag": "UniTask",
      "title": "UniTask：给 Unity 的 C# 异步「减负」，把回调地狱换成 await",
      "summary": "笔者注意到，Cysharp 的 UniTask 用零分配的结构体 Task 替代传统 Coroutine 与回调，让 Unity 异步代码读起来更顺。对写惯现代 C# 的人，它是把工程整洁度拉满的利器。",
      "source": "Cysharp UniTask 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/Cysharp/UniTask",
      "image": "https://opengraph.githubassets.com/1/Cysharp/UniTask",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "UniTask",
        "Unity",
        "异步"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "UniTask 用结构体 Task 近零分配；",
            "替代 Coroutine 与回调地狱；",
            "让异步代码更易读。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "异步不是炫技，而是可读性。UniTask 把「等一帧、等一秒、等加载」统一成 await，新人写 UI 流程、资源加载会轻松很多——干净的控制流，本身就是少 bug 的开始。"
        }
      ]
    },
    {
      "id": "tut-tinyrenderer",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "图形·入门",
      "tag": "Tiny Renderer",
      "title": "Tiny Renderer：用一个软件光栅器，把「三角形如何变成像素」讲透",
      "summary": "笔者建议把 Tiny Renderer 当作图形学第一份动手教材：它从零写一个软件渲染器，逐行实现顶点变换、光栅化与着色。边抄边改，比直接啃数学公式更快建立画面从何而来的直觉。",
      "source": "ssloy/tinyrenderer 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/ssloy/tinyrenderer",
      "image": "https://opengraph.githubassets.com/1/ssloy/tinyrenderer",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "8 分钟",
      "hotScore": 88,
      "tags": [
        "TinyRenderer",
        "光栅化",
        "图形学"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "从零实现软件光栅器；",
            "覆盖变换/光栅化/着色；",
            "逐行代码即教材。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "图形学最怕「公式看懂、屏幕全黑」。Tiny Renderer 的妙处是让你亲手把三角形画到像素上——先看到结果，再回头理解矩阵，建立的直觉比纯理论扎实得多。"
        }
      ]
    },
    {
      "id": "tut-olc",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "框架·C++",
      "tag": "olcPixelGameEngine",
      "title": "olcPixelGameEngine：单头文件 2D 引擎，最适合「一小时跑通第一个游戏」",
      "summary": "笔者观察到，OneLoneCoder 的 Pixel Game Engine 仅一个头文件，开箱即画。它把「写游戏」的启动成本压到极低，特别适合想用 C++ 快速验证想法、又不想被构建系统劝退的人。",
      "source": "OneLoneCoder 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/OneLoneCoder/olcPixelGameEngine",
      "image": "https://opengraph.githubassets.com/1/OneLoneCoder/olcPixelGameEngine",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "olcPixelGameEngine",
        "单头文件",
        "2D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "单头文件、零构建摩擦；",
            "快速画像素、做原型；",
            "适合 C++ 新手验证想法。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "学编程最忌「配置两小时、写代码五分钟」。olcPixelGameEngine 把拦路虎砍掉，让你当天就能看到自己的方块动起来。先有正反馈，再补底层原理，节奏才对。"
        }
      ]
    },
    {
      "id": "tut-unitycsref",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "架构·源码",
      "tag": "UnityCsReference",
      "title": "UnityCsReference：直接读 Unity 引擎 C# 源码，理解「编辑器是怎么造的」",
      "summary": "笔者建议把 UnityCsReference 当进阶教材：它开源了 Unity 编辑器的大量 C# 实现。读它，你能看清面板、序列化、Undo 这些「每天都在用却很少想原理」的机制是怎么搭出来的。",
      "source": "Unity 官方源码仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/Unity-Technologies/UnityCsReference",
      "image": "https://opengraph.githubassets.com/1/Unity-Technologies/UnityCsReference",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "8 分钟",
      "hotScore": 87,
      "tags": [
        "Unity",
        "源码",
        "编辑器"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开源 Unity 编辑器 C# 实现；",
            "覆盖面板/序列化/Undo；",
            "适合进阶理解引擎架构。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "会用引擎和懂引擎是两回事。读 UnityCsReference，你会明白那些「理所当然」的功能背后有多少设计。想做工具、做插件、甚至自研引擎，这份源码是最好的攀爬绳。"
        }
      ]
    },
    {
      "id": "tut-gdquest",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "语言·GDScript",
      "tag": "GDQuest",
      "title": "GDQuest 交互式 GDScript 课程：零基础也能把 Godot 脚本写顺",
      "summary": "笔者观察到，GDQuest 把 GDScript 做成交互式课程，边练边学。对想进 Godot 但编程经验少的人，它把「脚本语言」拆成可操作的步骤，避免一上来就被文档淹没。",
      "source": "GDQuest 官方仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/GDQuest/learn-gdscript",
      "image": "https://opengraph.githubassets.com/1/GDQuest/learn-gdscript",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "GDQuest",
        "GDScript",
        "Godot"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "GDScript 交互式课程；",
            "边练边学、零基础友好；",
            "避免被文档淹没。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "入门最怕「看了文档仍不会写」。GDQuest 的交互式设计把知识变成可操作的练习，符合「最小惊讶循环」——每学一点立刻能用，心流才留得住。新手选教程，先看它是否让你动手。"
        }
      ]
    },
    {
      "id": "tut-tinyraytracer",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "图形·光线追踪",
      "tag": "Tiny Raytracer",
      "title": "Tiny Raytracer：几百行代码，把「光线如何画出一张图」讲明白",
      "summary": "笔者建议把 Tiny Raytracer 作为光栅化之后的下一步：它用最短代码实现球体与光照追踪，让你直观理解「为什么光追看起来更真」。短小、可读、立等可取，是性价比极高的练手项目。",
      "source": "ssloy/tinyraytracer 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/ssloy/tinyraytracer",
      "image": "https://opengraph.githubassets.com/1/ssloy/tinyraytracer",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "TinyRaytracer",
        "光追",
        "图形学"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "几百行实现基础光追；",
            "球体/光照直观可跑；",
            "光栅化之后的自然进阶。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "光栅化讲「怎么画像素」，光追讲「光从哪来」。Tiny Raytracer 用极简代码把后者讲清，帮你建立「物理正确」的渲染直觉——这正是日后调材质、布光时真正用得上的底层认知。"
        }
      ]
    },
    {
      "id": "ai-llamacpp",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "推理·本地",
      "tag": "llama.cpp",
      "title": "llama.cpp：把大模型塞进笔记本的推理引擎，AI 工具的「发动机」",
      "summary": "笔者观察到，llama.cpp 以纯 C/C++ 实现高效推理，让大模型在消费级硬件上本地跑起来。对想做「AI 辅助开发」却担心隐私与成本的人，它是把模型请回本机的钥匙。",
      "source": "ggerganov/llama.cpp 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/ggerganov/llama.cpp",
      "image": "https://opengraph.githubassets.com/1/ggerganov/llama.cpp",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 89,
      "tags": [
        "llama.cpp",
        "本地推理",
        "C/C++"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "纯 C/C++ 高效推理；",
            "消费级硬件可本地运行；",
            "隐私与成本友好的底座。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「模型在云端」意味着每次都要联网、要付费、要交数据。llama.cpp 把推理拉回本地，等于给开发者一个可控的发动机。想做 AI 助手、本地 copilot，它几乎是必装的第一块砖。"
        }
      ]
    },
    {
      "id": "ai-webllm",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "推理·浏览器",
      "tag": "web-llm",
      "title": "web-llm：让大模型直接在浏览器里跑，前端也能接 AI",
      "summary": "笔者注意到，mlc-ai 的 web-llm 借助 WebGPU 在浏览器内完成大模型推理，无需后端。对做 Web 游戏/工具的人，这意味着「端侧 AI」第一次真正可达，交互延迟与隐私都更优。",
      "source": "mlc-ai/web-llm 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/mlc-ai/web-llm",
      "image": "https://opengraph.githubassets.com/1/mlc-ai/web-llm",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "web-llm",
        "WebGPU",
        "端侧AI"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "基于 WebGPU 的浏览器内推理；",
            "无需自建后端；",
            "端侧延迟与隐私更优。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "前端一直被挡在 AI 门外，因为推理要服务器。web-llm 把这道墙推倒：你的网页能就地理解玩家输入、生成文本。做教育类或轻量 NPC，端侧方案既快又省心。"
        }
      ]
    },
    {
      "id": "ai-semantickernel",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "智能体·框架",
      "tag": "Semantic Kernel",
      "title": "Semantic Kernel：微软把「插件 + 规划」打包的 AI 智能体框架",
      "summary": "笔者观察到，微软的 Semantic Kernel 以插件、记忆与规划器组织 AI 工作流，适合把大模型接进既有企业/产品代码。对想做「会调用工具的 agent」的开发者，它是结构清晰的一手参考。",
      "source": "microsoft/semantic-kernel 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/microsoft/semantic-kernel",
      "image": "https://opengraph.githubassets.com/1/microsoft/semantic-kernel",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "Semantic Kernel",
        "智能体",
        "微软"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "以插件/记忆/规划器组织工作流；",
            "便于接入既有代码；",
            "适合做「会调用工具」的 agent。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「会调用工具的 AI」比「会聊天的 AI」实用得多。Semantic Kernel 的价值在把规划与插件做成一等公民，让你专注业务逻辑。做游戏内助手或自动化管线，这套结构值得照搬。"
        }
      ]
    },
    {
      "id": "ai-mlagents",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "AI·游戏",
      "tag": "ML-Agents",
      "title": "Unity ML-Agents：用强化学习训练游戏角色，把 AI 当「可训练对象」",
      "summary": "笔者注意到，Unity 的 ML-Agents 把强化学习带进引擎，让你训练 NPC 走位、平衡数值甚至做自动化测试。对想做智能行为的开发者，它是「在真实游戏环境里炼 AI」的现成入口。",
      "source": "Unity-Technologies/ml-agents 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/Unity-Technologies/ml-agents",
      "image": "https://opengraph.githubassets.com/1/Unity-Technologies/ml-agents",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "ML-Agents",
        "强化学习",
        "Unity"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "把强化学习带进 Unity；",
            "可训练 NPC 走位与数值；",
            "也能做自动化测试。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "比起手写状态机，让 AI 在环境里自己练，往往长出更自然的对手。ML-Agents 的意义是把「训练」变成游戏开发的一环——你设计奖励，AI 找解法，这思路对未来 NPC 设计很有启发。"
        }
      ]
    },
    {
      "id": "ai-langchain",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "应用·框架",
      "tag": "LangChain",
      "title": "LangChain：把「大模型 + 工具 + 记忆」串成应用的积木箱",
      "summary": "笔者观察到，LangChain 用链式与组件把大模型接上检索、工具与记忆，降低「搭一个能干活的应用」的门槛。对想把 AI 接进游戏后台、做内容生成或客服的人，它是绕不开的脚手架。",
      "source": "langchain-ai/langchain 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/langchain-ai/langchain",
      "image": "https://opengraph.githubassets.com/1/langchain-ai/langchain",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "LangChain",
        "应用框架",
        "RAG"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "用链与组件串联模型/工具/记忆；",
            "降低「能干活应用」的门槛；",
            "适合接后台与内容生成。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "单模型回答很浅，串上检索与工具才深。LangChain 帮你把「思考—查资料—行动」组织起来。做游戏侧的攻略助手、剧情检索，用它搭骨架比从零写快得多。"
        }
      ]
    },
    {
      "id": "ai-genai",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "教程·入门",
      "tag": "GenAI for Beginners",
      "title": "微软《生成式 AI 入门》开源课：把「什么是 Transformer、怎么落地」讲给新人",
      "summary": "笔者建议把微软这份开源课程当作 AI 通识起点：它用代码示例讲清楚生成式 AI 的核心概念与落地路径。对想入门、却被术语劝退的人，这是一份结构清晰、可跟着跑的地图。",
      "source": "microsoft/generative-ai-for-beginners 仓库（一手）",
      "date": "2026-11-02",
      "url": "https://github.com/microsoft/generative-ai-for-beginners",
      "image": "https://opengraph.githubassets.com/1/microsoft/generative-ai-for-beginners",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "生成式AI",
        "入门课",
        "微软"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "开源的 AI 通识课程；",
            "代码示例讲核心概念；",
            "结构清晰、可跟着跑。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "AI 不是只给算法岗的。这份课的珍贵处是把「Transformer 是什么、prompt 怎么写、如何接工具」铺成阶梯。游戏开发者不必成为训练师，但懂这些，才能把 AI 用对地方。"
        }
      ]
    },
    {
      "id": "contest-craftalog",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "赛事·Game Jam",
      "tag": "Craftalog Create",
      "title": "Craftalog Create Game Jam：11/1–12/1 一个月，做你最好的小游戏",
      "summary": "笔者注意到，Craftalog 的首届 Game Jam「Create」于 11 月 1 日至 12 月 1 日举行，规则宽松、允许提交既有或新建项目，只要最终可玩即可。对想逼出一份完整作品集的新人，它是低门槛的长周期练手场。",
      "source": "Craftalog 官方赛事页（一手）",
      "date": "2026-11-02",
      "url": "https://craftalog.net/events/craftalog-create/rules",
      "image": "",
      "badge": "赛事",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "Craftalog",
        "Game Jam",
        "月度"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11/1–12/1 一个月赛期；",
            "允许既有或新建项目；",
            "以「完整可玩」为提交标准。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "长周期 Jam 的好处是容错高：你既能试新机制，也有时间打磨。建议把目标定成「做出一个能讲清楚核心循环的小品」，而非堆功能——一个月足够把一个想法做扎实。"
        }
      ]
    },
    {
      "id": "contest-shift",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "赛事·Game Jam",
      "tag": "SHIFT Game Jam",
      "title": "SHIFT Game Jam（阿布扎比×Unity）：11/13–15 三天，6 万迪拉姆奖池",
      "summary": "笔者观察到，Abu Dhabi Gaming 与 Unity 合作的 SHIFT Game Jam 将于 11 月 13–15 日在阿布扎比线下举行，总奖池 6 万迪拉姆（约 6 万 AED），免报名费、允许 AI 辅助。对中东或能到场的学生/新人，这是一条高曝光通道。",
      "source": "Arab Game News 报道（一手）",
      "date": "2026-11-02",
      "url": "https://www.arabgamenews.com/post/abu-dhabi-gaming-unity-shift-game-jam-2026",
      "image": "",
      "badge": "赛事",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "SHIFT",
        "Unity",
        "线下Jam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11/13–15 阿布扎比线下；",
            "总奖池约 6 万 AED；",
            "免费、允许 AI 辅助。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "线下 Jam 的价值在「即时反馈与人脉」。三天里和导师、评委面对面，比线上默默提交收获更大。即便去不了，也可把它的命题方式当作练习模板：限时、限主题、强制可玩。"
        }
      ]
    },
    {
      "id": "contest-duoyi",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "多益网络",
      "title": "多益网络 2027 届校招进行中：程序/策划/美术多岗，11/30 网申截止",
      "summary": "笔者注意到，多益网络 2027 届秋招正式批正在开放，覆盖游戏客户端/服务端/引擎开发、AI 应用、策划与美术等方向，网申截至 11 月 30 日。对想进成熟项目组的同学，这是流程透明的窗口期。",
      "source": "多益网络校招官网（一手）",
      "date": "2026-11-02",
      "url": "https://xz.duoyi.com/ANa",
      "image": "",
      "badge": "招聘",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "多益",
        "校招",
        "秋招"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "多益 2027 届秋招开放；",
            "程序/策划/美术多方向；",
            "网申截至 11/30。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "校招是信息战：截止日、岗位画像、笔试题型都要提前摸。建议把目标公司招聘页加进清单每周扫一眼——机会窗口往往只有几天，错过等一年。"
        }
      ]
    },
    {
      "id": "contest-lingxi",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "灵犀互娱",
      "title": "灵犀互娱 2027 届秋招启动：研发/发行多线，广州上海北京三城可投",
      "summary": "笔者观察到，灵犀互娱（阿里系）2027 届秋季校招已启动，覆盖游戏研发、算法、美术设计、产品运营等方向，工作地含广州/上海/北京，10 月起陆续发 Offer。对南方同学，这是家门口大厂里反馈较快的一条线。",
      "source": "高校就业网招聘公告（一手）",
      "date": "2026-11-02",
      "url": "https://career.bnu.edu.cn/f/recruitmentinfo/show?recruitmentId=3bccae8f961147d29e26db4097b087e6",
      "image": "",
      "badge": "招聘",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "灵犀互娱",
        "校招",
        "阿里系"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "灵犀互娱 2027 秋招启动；",
            "研发/算法/美术/运营多线；",
            "广/沪/京三城可投。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "同一届秋招，不同公司窗口错峰。把多家官网并列跟踪，能错开准备节奏——这家笔试时另一家还没开，时间利用率直接翻倍。别把所有鸡蛋放一个截止日。"
        }
      ]
    }
  ]
};
