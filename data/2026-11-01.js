window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-01",
    "weekday": "星期日",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-01 07:30",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "Gemini 4 Carbon 登顶 AI 指数：前沿模型进入「比谁更可控更便宜」",
      "Godot 4.8 Beta 2 / Babylon.js 9.0 / O3DE 齐更新，开源引擎继续补强",
      "《Hades II》《Silksong》《KCD II》相继落定，叙事与手感仍是设计教科书",
      "Phaser / libGDX / ImGui / Box2D / EnTT / Filament：6 个值得精读的开源底座",
      "秋招 / Game Jam 双线：英雄游戏、网易互娱 2027 校招 + GitHub Game Off 2026 开赛"
    ],
    "engineStatus": [
      {
        "name": "Godot 4.8 Beta2",
        "type": "godot",
        "status": "特性冻结",
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
        "name": "Wicked Engine",
        "type": "wicked",
        "status": "单人维护",
        "badge": "C++ 引擎",
        "color": "orange"
      },
      {
        "name": "Cocos Creator",
        "type": "cocos",
        "status": "小游戏底座",
        "badge": "跨端",
        "color": "violet"
      }
    ]
  },
  "hero": {
    "id": "ai-gemini-carbon-hero",
    "category": "ai",
    "categoryName": "AI前沿",
    "tag": "Gemini 4 Carbon",
    "title": "Gemini 4 Carbon 登顶 AI 指数：前沿模型进入「比谁更可控更便宜」",
    "summary": "笔者注意到，Google DeepMind 在 10 月底发布 Gemini 4 Carbon，在 Artificial Analysis 智能指数以 59 分登顶，超过 Claude Opus 5.5 与 GPT-6 Astra。它主打网络安全与长程工程任务，目前仅向受审核的防御者小范围开放——前沿模型的竞争正从「谁更聪明」转向「谁更可信、更便宜」。",
    "image": "https://opengraph.githubassets.com/1/google-deepmind/generative-ai",
    "source": "Google DeepMind 官方博客（一手）",
    "date": "2026-11-01",
    "url": "https://deepmind.google/blog/gemini-4-carbon-our-next-frontier-model/",
    "readTime": "7 分钟",
    "hotScore": 95,
    "tags": [
      "Gemini",
      "Carbon",
      "DeepMind",
      "登顶"
    ],
    "content": [
      {
        "title": "本次发布关键点",
        "type": "list",
        "items": [
          "10 月底发布，AA 智能指数 v5.0 以 59 分居首；",
          "主打网络安全与长程 agentic 工程任务；",
          "首发仅向受审核防御者开放，尚未开放 API。"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": " Carbon 的打法是「低价进场、到期翻倍」的锁定定价，已连续两代。对学习者，值得关注的是它把「安全能力」当卖点——前沿模型竞争正从「谁更聪明」转向「谁更可控、更可信」，这是选模型的新维度，也是游戏 / 工具链里接 AI 时必须提前考虑的工程约束。"
      }
    ]
  },
  "items": [
    {
      "id": "en-godot-48b2",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎发布",
      "tag": "Godot 4.8",
      "title": "Godot 4.8 Beta 2 发布：向正式版再推进一步，重点在稳定性与编辑器打磨",
      "summary": "笔者注意到，Godot 4.8 第二个 Beta 于 10 月底落地，官方口径延续「特性冻结」后的修 bug 路线。对正在用 Godot 做项目的同学，这是把 4.x 新渲染与 GDScript 改进提前踩稳的好窗口。",
      "source": "Godot 官方博客（一手）",
      "date": "2026-11-01",
      "url": "https://godotengine.org/article/dev-snapshot-godot-4-8-beta-2/",
      "image": "https://opengraph.githubassets.com/1/godotengine/godot",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "Godot",
        "4.8",
        "Beta2",
        "开源引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Godot 4.8 Beta 2 推出，继续修 bug 与稳定性；",
            "官方建议仍仅用于测试，勿用于生产；",
            "4.x 渲染与编辑器改进逐步进入可依赖区间。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "开源引擎的 Beta 不是半成品 demo，而是给社区提前踩坑的契约。学习者用 Beta 跑通自己的小项目，既能验证新特性是否真能改写工作流，也能在正式版发布前把迁移成本算清楚——这比等正式版再慌忙上手要踏实。"
        }
      ]
    },
    {
      "id": "en-babylon-90",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎发布",
      "tag": "Babylon.js 9.0",
      "title": "Babylon.js 9.0 发布：Web 端 3D 引擎继续把「浏览器即游戏机」往前推",
      "summary": "笔者观察到，Babylon.js 在 10 月推出 9.0 大版本，继续强化 WebGPU、节点材质与物理集成。对想用纯前端做出接近原生画质的人，它仍是少数量产级的选择。",
      "source": "Babylon.js 官方发布（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/BabylonJS/Babylon.js/releases/tag/9.0.0",
      "image": "https://opengraph.githubassets.com/1/BabylonJS/Babylon.js",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Babylon.js",
        "WebGPU",
        "Web3D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Babylon.js 9.0 发布，强化 WebGPU 与节点材质；",
            "物理与场景工具链持续补齐；",
            "定位仍是浏览器内量产级 3D 引擎。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Web 游戏常被低估，但它零安装、易分享，最适合做学习作品集。Babylon.js 这类把原生级能力搬进浏览器的引擎，值得前端方向的学习者认真看一眼——端上的限制，正在被 WebGPU 一点点抹平。"
        }
      ]
    },
    {
      "id": "en-o3de",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "开源引擎",
      "tag": "O3DE",
      "title": "Open 3D Engine（O3DE）持续迭代：亚马逊系开源 3A 引擎的「可改底座」",
      "summary": "笔者注意到，O3DE 作为由 AWS 推动的开源 3D 引擎，仍在以稳定节奏推进。它把大型工作室才用得起的渲染与动画管线开源化，给想理解「工业化引擎怎么搭」的学习者提供了一份可改的活样本。",
      "source": "O3DE 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/o3de/o3de",
      "image": "https://opengraph.githubassets.com/1/o3de/o3de",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": [
        "O3DE",
        "开源",
        "3A 引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "O3DE 是 AWS 推动的开源 3D 引擎；",
            "渲染 / 动画 / 原子化资产管线齐备；",
            "面向需要工业化工作流的学习者。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大厂把内部引擎能力开源，最值钱的是「工程取舍」本身。读 O3DE 不是要直接拿来发游戏，而是看一套现代化引擎如何组织渲染、动画与资产——这种架构视野，比背 API 更有长期价值。"
        }
      ]
    },
    {
      "id": "en-wicked",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "个人引擎",
      "tag": "Wicked Engine",
      "title": "Wicked Engine：一个人维护的现代 C++ 引擎，仍是读懂「引擎全栈」的好样本",
      "summary": "笔者观察到，Turanszkij 的 Wicked Engine 长期以单人多产的方式更新，覆盖渲染、物理、动画与编辑器。它证明「一个人也能做出像样的现代引擎骨架」，对中高级学习者极具拆解价值。",
      "source": "Wicked Engine 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/Turanszkij/WickedEngine",
      "image": "https://opengraph.githubassets.com/1/Turanszkij/WickedEngine",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "Wicked",
        "C++",
        "个人引擎"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Wicked Engine 为单人维护的现代 C++ 引擎；",
            "覆盖渲染 / 物理 / 动画 / 编辑器；",
            "更新节奏稳定，代码可读性高。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "读一个「人能 hold 住」的引擎，比读巨型工业引擎更容易建立全栈直觉。Wicked 的价值在于：它把引擎各子系统浓缩到一个人能讲清楚的范围，是进阶学习者从「用引擎」走向「懂引擎」的桥梁。"
        }
      ]
    },
    {
      "id": "en-cocos",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "引擎发布",
      "tag": "Cocos",
      "title": "Cocos Creator 开源底座（cocos-engine）：轻量跨端与小游戏生态的隐形主力",
      "summary": "笔者注意到，Cocos 的引擎核心 cocos-engine 在 GitHub 持续开源演进，尤其在小游戏、H5 与轻度跨端场景里占据巨大份额。对想做微信/抖音小游戏的人，它几乎是绕不开的底座。",
      "source": "Cocos 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/cocos/cocos-engine",
      "image": "https://opengraph.githubassets.com/1/cocos/cocos-engine",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Cocos",
        "小游戏",
        "跨端"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "cocos-engine 持续开源演进；",
            "在小游戏 / H5 / 轻度跨端占大头；",
            "国内小程序生态的常用底座。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "选引擎要先看「你的产品跑在哪」。Cocos 不追求 3A 画质，而是把包体、启动与跨端做到极致——这种「为场景取舍」的定位，正是独立与小团队最该学的生存逻辑。"
        }
      ]
    },
    {
      "id": "en-torque",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "开源引擎",
      "tag": "Torque3D",
      "title": "Torque3D：老牌开源 3D 引擎仍在维护，是理解「传统引擎架构」的活化石",
      "summary": "笔者观察到，Torque3D 作为最早开源的商业化 3D 引擎之一，至今仍在更新。它的架构与今天的主流引擎一脉相承，拿来对照学习「场景图、网络同步、脚本系统」很有历史参照价值。",
      "source": "Torque3D 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/TorqueGameEngines/Torque3D",
      "image": "https://opengraph.githubassets.com/1/TorqueGameEngines/Torque3D",
      "badge": "引擎",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "Torque3D",
        "开源",
        "经典架构"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Torque3D 是早期开源 3D 引擎代表；",
            "场景图 / 网络同步 / 脚本系统齐备；",
            "架构对理解传统引擎很有参照意义。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "新技术学「怎么新」，老引擎学「为什么这样」。Torque 这类活化石能帮你建立时间维度：今天的 ECS、热更新、确定性网络，很多都能在旧架构里找到雏形与代价。"
        }
      ]
    },
    {
      "id": "ind-ubisoft",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "公司·育碧",
      "tag": "Ubisoft",
      "title": "育碧 2026：Tencent 注资与 IP 重组并行，观察大厂如何「续命」",
      "summary": "笔者注意到，育碧在 2026 年持续通过 Tencent 注资与 IP 重组寻求出路。对想进大厂的新人，这是理解「3A 成本失控后，公司靠什么活下去」的鲜活样本。",
      "source": "Ubisoft 官方新闻室（一手）",
      "date": "2026-11-01",
      "url": "https://www.ubisoft.com/en-us/company/newsroom",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "育碧",
        "Tencent",
        "重组"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "育碧在 2026 年推进 Tencent 注资与 IP 重组；",
            "资源向核心特许经营集中；",
            "live-service 与 3A 之间反复试探。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「创意成功 ≠ 公司安全」是这两年最痛的教训。评估一家大厂，不能只看它出过什么好游戏，还要看它的现金流结构与抗周期能力——育碧正是这种观察的最佳标本。"
        }
      ]
    },
    {
      "id": "ind-ea",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "公司·EA",
      "tag": "Electronic Arts",
      "title": "EA 的 2026：体育 IP 基本盘之外，重新押注大型单机与重制",
      "summary": "笔者观察到，EA 在 2026 年继续以体育 IP（FC / Madden）为现金牛，同时把资源重新投向《战地》等大型单机与重制线。对观察者，这是「存量 IP 如何被重新盘活」的典型案例。",
      "source": "EA 官方新闻（一手）",
      "date": "2026-11-01",
      "url": "https://www.ea.com/news",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "EA",
        "体育IP",
        "重制"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "EA 以体育 IP 为现金牛；",
            "重新加大《战地》等大型单机投入；",
            "重制线成为低风险产出。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大厂的产品组合管理，本质是「用确定的收入养不确定的创新」。新人看 EA，别只盯某款神作，要看它如何用体育 IP 的确定性去对冲 3A 的赌注风险。"
        }
      ]
    },
    {
      "id": "ind-xbox",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "平台·Xbox",
      "tag": "Xbox",
      "title": "Xbox 2026：资源持续向 AI、云与原生服务倾斜，平台侧进入再定位期",
      "summary": "笔者注意到，Xbox 在 2026 年把越来越多的资源导向 AI 辅助开发、原生云游戏与 Game Pass 服务化。平台不再只卖硬件，而是卖「随时能玩的服务」——这是观察微软游戏战略的主线。",
      "source": "Xbox Wire 官方（一手）",
      "date": "2026-11-01",
      "url": "https://news.xbox.com/en-us/",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Xbox",
        "云游戏",
        "Game Pass"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Xbox 资源向 AI 辅助开发倾斜；",
            "原生云游戏与 Game Pass 服务化加速；",
            "平台定位从「卖硬件」转向「卖服务」。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "平台规则会直接决定创作者的合规与分发成本。作为学习者，早点理解不同商店与平台的战略差异，能少踩坑——你在一个平台能发的，在另一个平台可能要重写声明。"
        }
      ]
    },
    {
      "id": "ind-playstation",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "平台·PlayStation",
      "tag": "PlayStation",
      "title": "PlayStation 2026：在独占与 live-service 之间，索尼继续找平衡点",
      "summary": "笔者观察到，PlayStation 在 2026 年既靠《羊蹄山之魂》等独占守住口碑，又持续尝试 live-service 与 PC 移植。对想做主机向内容的同学，索尼的节奏是绕不开的参照系。",
      "source": "PlayStation Blog 官方（一手）",
      "date": "2026-11-01",
      "url": "https://blog.playstation.com/",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "PlayStation",
        "独占",
        "PC移植"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "索尼以独占守住口碑基本盘；",
            "持续尝试 live-service 与 PC 移植；",
            "主机向内容的重要风向标。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "独占与跨平台是主机厂的永恒博弈。看 PS 的取舍，能学到「平台忠诚度」怎么被一款款好游戏慢慢攒出来——这对任何想做长线 IP 的人都有启发。"
        }
      ]
    },
    {
      "id": "ind-steam",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "平台·Steam",
      "tag": "Steam / Valve",
      "title": "Steam 2026：Deck 生态与「不折腾」的商店政策，仍是独立开发者的锚点",
      "summary": "笔者注意到，Valve 在 2026 年继续靠 Steam Deck 与相对克制的商店政策，维持对独立开发者的吸引力。对中小团队，「分发确定性」往往比分成比例更值钱。",
      "source": "Steam 官方商店（一手）",
      "date": "2026-11-01",
      "url": "https://store.steampowered.com/",
      "image": "",
      "badge": "行业",
      "badgeType": "business",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Steam",
        "Deck",
        "独立开发者"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Steam Deck 生态持续扩张；",
            "商店政策相对克制、可预期；",
            "仍是独立开发者的首选分发锚点。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对独立开发者，分发渠道的「确定性」是隐形资产。Valve 不常搞大动作，但正因为可预期，小团队才敢把身家押上去——稳定性本身就是一种竞争力。"
        }
      ]
    },
    {
      "id": "games-wolf",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游发售",
      "tag": "The Wolf Among Us",
      "title": "《The Wolf Among Us Remastered》发售：Telltale 叙事招牌的高清重生",
      "summary": "笔者注意到，《The Wolf Among Us Remastered》在 10 月底推出，把这部以「童话谋杀疑云」著称的叙事神作做了高清重制。对想学分支叙事与角色塑造的同学，它仍是教科书级的拆解样本。",
      "source": "Metacritic（评分聚合，一手入口）",
      "date": "2026-11-01",
      "url": "https://www.metacritic.com/game/the-wolf-among-us-remastered/",
      "image": "",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "Wolf Among Us",
        "叙事",
        "重制"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "10 月底推出 Remastered 高清重制；",
            "延续 Telltale 招牌分支叙事；",
            "童话悬疑题材，角色塑造极强。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "叙事向游戏最难的不是「写好台词」，而是「让选择有重量」。Wolf 用成熟的对话树与后果回响，示范了如何用最低的交互成本，换来最强的代入感——这是设计新人最该拆的机制。"
        }
      ]
    },
    {
      "id": "games-sulfur",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游评测",
      "tag": "SULFUR",
      "title": "《SULFUR》评测：把「复古 FPS 的笨拙感」做成核心魅力的硬核样本",
      "summary": "笔者观察到，《SULFUR》以刻意保留老式 FPS 的笨重操作与资源管理，做出了一股「不讨好但上头」的硬核味道。它提醒我们：拟真的不便，有时正是沉浸感的来源。",
      "source": "Metacritic（评分聚合，一手入口）",
      "date": "2026-11-01",
      "url": "https://www.metacritic.com/game/sulfur/",
      "image": "",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "SULFUR",
        "复古FPS",
        "硬核"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "刻意保留老式 FPS 的笨重手感；",
            "资源管理是核心压力源；",
            "硬核但极具辨识度。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「不方便」也能是设计。SULFUR 用笨拙换来真实感，提示一个反直觉的命题：当所有游戏都在追求丝滑，适度的阻力反而成了差异化的护城河。"
        }
      ]
    },
    {
      "id": "games-hades2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游发售",
      "tag": "Hades II",
      "title": "《Hades II》正式版观察：Supergiant 把「肉鸽 + 叙事」打磨到了新高度",
      "summary": "笔者注意到，《Hades II》在 2025–2026 走完抢先体验进入正式阶段，延续了前作「死亡即叙事」的巧思。对想做 roguelike 的同学，它示范了如何用系统深度托住情感曲线。",
      "source": "Supergiant Games 官方（一手）",
      "date": "2026-11-01",
      "url": "https://www.supergiantgames.com/games/hades2/",
      "image": "",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 88,
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
            "正式版延续「死亡即叙事」巧思；",
            "系统深度与情感曲线并重；",
            "Supergiant 招牌美术与音乐。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Hades 系列最值得学的是「失败的正反馈」：每次死亡都在推进叙事与构筑，而不是清零挫败。把惩罚设计成另一种奖励，是 roguelike 留住玩家的核心秘密。"
        }
      ]
    },
    {
      "id": "games-silksong",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游发售",
      "tag": "Hollow Knight: Silksong",
      "title": "《Hollow Knight: Silksong》发售：手感即正义的银河恶魔城标杆",
      "summary": "笔者观察到，《Silksong》终于在漫长等待后发售，把前作那套「精准、克制、反馈极强」的手感继承并发扬。对动作游戏设计者，它是最好的「手感教科书」。",
      "source": "Team Cherry 官方（一手）",
      "date": "2026-11-01",
      "url": "https://www.hollowknight.com/silksong/",
      "image": "",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 89,
      "tags": [
        "Silksong",
        "银河恶魔城",
        "手感"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "继承前作精准克制的手感；",
            "反馈极强、难度曲线讲究；",
            "银河恶魔城品类的标杆之一。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "动作游戏的手感是「看不见的设计」。Silksong 用帧级的操作窗口与音画反馈，把「难但公平」做成爽点——新人做动作游戏，先把手感调到「每次按键都有回应」再谈别的。"
        }
      ]
    },
    {
      "id": "games-kcd2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新游发售",
      "tag": "Kingdom Come: Deliverance II",
      "title": "《Kingdom Come: Deliverance II》观察：用「不胡来」的硬核拟真讲中世纪故事",
      "summary": "笔者注意到，《KCD II》延续了前作「不魔幻、重拟真」的中世纪基调，把历史质感与开放世界揉在一起。对想做「有世界观重量」的开放世界的人，它是反套路的样本。",
      "source": "Warhorse / Kingdom Come 官方（一手）",
      "date": "2026-11-01",
      "url": "https://kingdomcomerpg.com/",
      "image": "",
      "badge": "游戏",
      "badgeType": "game",
      "readTime": "5 分钟",
      "hotScore": 85,
      "tags": [
        "KCD II",
        "拟真",
        "开放世界"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "延续不魔幻、重拟真的中世纪基调；",
            "历史质感与开放世界结合；",
            "反套路的世界观构建。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大多数开放世界在「堆内容」，KCD 在「守逻辑」。它提醒设计者：世界的说服力来自自洽的规则，而不是贴满地图的问号——拟真的不便，恰恰是沉浸的来源。"
        }
      ]
    },
    {
      "id": "os-phaser",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "框架·JS",
      "tag": "Phaser",
      "title": "Phaser：HTML5 游戏框架的「事实标准」，照抄示例就能动",
      "summary": "笔者注意到，Phaser 作为最成熟的 HTML5 游戏框架之一，官方把每个特性都配了可运行示例。对想用纯前端做游戏的新人，它是「先看跑起来的代码再读讲解」的友好入口。",
      "source": "Phaser 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/phaserjs/phaser",
      "image": "https://opengraph.githubassets.com/1/phaserjs/phaser",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Phaser",
        "HTML5",
        "框架"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Phaser 是成熟的 HTML5 游戏框架；",
            "每个特性都有可运行示例；",
            "适合「抄改」式入门。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "对编程新手，Phaser 的示例即文档是个优点：你不需要先懂全部，改一个参数看反应，就能反推机制。这种最小惊讶循环，是保持学习心流的关键。"
        }
      ]
    },
    {
      "id": "os-libgdx",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "框架·Java",
      "tag": "libGDX",
      "title": "libGDX：跨平台 Java 游戏框架，仍是桌面与移动通的稳妥底座",
      "summary": "笔者观察到，libGDX 以 Java/Kotlin 写好一次、多端部署的路线，在移动与桌面小团队里口碑稳定。想避开 C++ 复杂度又想要跨端能力，它是被低估的候选。",
      "source": "libGDX 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/libgdx/libgdx",
      "image": "https://opengraph.githubassets.com/1/libgdx/libgdx",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "libGDX",
        "Java",
        "跨端"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "libGDX 用 Java/Kotlin 实现多端部署；",
            "在移动与桌面小团队中口碑稳定；",
            "避开了 C++ 的复杂度。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "跨端框架的取舍，本质是「一处开发、处处运行」的代价。libGDX 不性感，但够稳——对新人，先做出能同时在手机和电脑跑通的 Demo，比追新潮更重要。"
        }
      ]
    },
    {
      "id": "os-imgui",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "工具·UI",
      "tag": "Dear ImGui",
      "title": "Dear ImGui：游戏 / 引擎开发者的「调试 UI 标配」，读它胜过读十篇教程",
      "summary": "笔者注意到，Dear ImGui 几乎是 C++ 游戏与工具链里调试面板的事实标准。它用 Immediate Mode 把「写 UI 像写代码」落地，是理解工具链思维的最佳样本。",
      "source": "Dear ImGui 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/ocornut/imgui",
      "image": "https://opengraph.githubassets.com/1/ocornut/imgui",
      "badge": "开源",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "ImGui",
        "Immediate Mode",
        "调试UI"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Dear ImGui 是 C++ 调试面板事实标准；",
            "Immediate Mode 让 UI 像代码一样写；",
            "引擎与工具链的高频依赖。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Immediate Mode 的核心是把「状态」从 UI 里赶出去——每帧重画，逻辑更简单。新人理解这种范式，对写编辑器、调试面板会豁然开朗，远比背 retained-mode 框架来得快。"
        }
      ]
    },
    {
      "id": "os-box2d",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "物理·2D",
      "tag": "Box2D",
      "title": "Box2D：2D 物理的「参考实现」，Erin Catto 一人维护的经典",
      "summary": "笔者观察到，Box2D 作为 2D 物理引擎的标杆，被无数引擎与游戏间接使用。读它的源码，是理解碰撞、约束与求解器最直接的一手教材。",
      "source": "Box2D 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/erincatto/box2d",
      "image": "https://opengraph.githubassets.com/1/erincatto/box2d",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Box2D",
        "物理",
        "2D"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Box2D 是 2D 物理引擎标杆；",
            "被大量引擎与游戏间接使用；",
            "求解器实现值得精读。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "物理引擎里最迷人的不是公式，而是「怎么让数值稳定不爆炸」。Box2D 用迭代求解器把刚体世界跑得又快又稳，读它的约束实现，比任何物理课都直观。"
        }
      ]
    },
    {
      "id": "os-entt",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "架构·ECS",
      "tag": "EnTT",
      "title": "EnTT：现代 C++ 的 ECS 标杆，理解「数据导向」架构的活教材",
      "summary": "笔者注意到，EnTT 以极简、极快的实体组件系统（ECS）设计，成为 C++ 圈的事实标准之一。想搞懂「为什么大厂爱用 ECS 管海量对象」，从它入手最省力。",
      "source": "EnTT 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/skypjack/entt",
      "image": "https://opengraph.githubassets.com/1/skypjack/entt",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "6 分钟",
      "hotScore": 85,
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
            "EnTT 是极简极快的 C++ ECS；",
            "成为 C++ 圈事实标准之一；",
            "理解数据导向架构的捷径。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "ECS 的威力在「缓存友好 + 组合优先」。新人常困惑于它和 OOP 的区别，读 EnTT 源码会发现：所谓架构升级，往往只是把「对象」拆成「数据 + 系统」后的自然结果。"
        }
      ]
    },
    {
      "id": "os-filament",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "渲染·移动",
      "tag": "Filament",
      "title": "Filament：Google 开源的实时 PBR 渲染引擎，移动端画质的优等生",
      "summary": "笔者观察到，Filament 是 Google 开源的实时物理渲染（PBR）引擎，主打移动与嵌入式的高性能画质。对想学「如何在手机上跑出好光感」的学习者，它是少见的工业级样本。",
      "source": "Filament 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/google/filament",
      "image": "https://opengraph.githubassets.com/1/google/filament",
      "badge": "开源",
      "badgeType": "engine",
      "readTime": "7 分钟",
      "hotScore": 84,
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
            "Filament 是 Google 开源的实时 PBR 引擎；",
            "主打移动 / 嵌入式高性能画质；",
            "工业级渲染样本。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "移动端渲染的难点是「在功耗墙里要画质」。Filament 把 PBR 与轻量后端结合，示范了如何在手机上取舍——这种受限环境下的工程判断，比无上限堆特效更有学习价值。"
        }
      ]
    },
    {
      "id": "tut-learnopengl",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "图形·OpenGL",
      "tag": "LearnOpenGL",
      "title": "LearnOpenGL 配套代码仓库：把「图形学理论」变成能跑的 C++ 示例",
      "summary": "笔者建议把 LearnOpenGL 的官方代码仓库当作图形学入门的练习场：从 Hello Triangle 到 PBR，每个概念都对应一份可编译示例。边抄边改，比纯看公式快得多。",
      "source": "LearnOpenGL 代码仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/JoeyDeVries/LearnOpenGL",
      "image": "https://opengraph.githubassets.com/1/JoeyDeVries/LearnOpenGL",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "8 分钟",
      "hotScore": 87,
      "tags": [
        "OpenGL",
        "图形学",
        "示例"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "仓库覆盖 Hello Triangle 到 PBR；",
            "每个概念对应可编译示例；",
            "适合边抄边改。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "图形学最容易卡在「公式看懂了，屏幕还是黑的」。LearnOpenGL 的仓库价值就在「能跑」——先让三角形亮起来，再回头理解矩阵与光照，建立感会比纯理论扎实。"
        }
      ]
    },
    {
      "id": "tut-gpp",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "设计·架构",
      "tag": "Game Programming Patterns",
      "title": "《Game Programming Patterns》开源版：用代码讲清「游戏里那些套路为什么存在」",
      "summary": "笔者观察到，Robert Nystrom 把《Game Programming Patterns》全书开源，用具体代码讲命令、组件、状态机等经典模式。对想写出「不越写越乱」的游戏代码的人，它是案头书。",
      "source": "Game Programming Patterns 仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/munificent/game-programming-patterns",
      "image": "https://opengraph.githubassets.com/1/munificent/game-programming-patterns",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "设计模式",
        "架构",
        "开源书"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "全书开源，含具体代码示例；",
            "覆盖命令 / 组件 / 状态机等；",
            "解决「代码越写越乱」。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多新人写完第一个 Demo 就卡在「怎么组织代码」。这本书的珍贵处是把模式落到可运行代码——你会明白：所谓架构，是为了让三个月后的自己还能读懂三个月前的自己。"
        }
      ]
    },
    {
      "id": "tut-cs50",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "高校·通识",
      "tag": "CS50 Game Dev",
      "title": "Harvard CS50 Game Development：名校公开课把「做游戏」讲成通识课",
      "summary": "笔者注意到，Harvard 的 CS50 Game Development 把平台跳跃、物理、AI 等拆成循序渐进的课时，并用 Lua/LÖVE 这种轻量栈降低门槛。对零基础想系统入门的人，它比零散视频更成体系。",
      "source": "Harvard CS50 课程站（一手）",
      "date": "2026-11-01",
      "url": "https://cs50.harvard.edu/games/",
      "image": "https://opengraph.githubassets.com/1/cs50/cs50",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "CS50",
        "高校课",
        "系统化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "CS50 把游戏开发拆成系统课时；",
            "用 Lua/LÖVE 轻量栈降低门槛；",
            "比零散视频更成体系。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "系统课的价值在「顺序对」。CS50 把该先学什么、后学什么排好了，新手不必在信息洪流里自己拼图——先跟着跑通一个完整项目，再回头补原理，效率最高。"
        }
      ]
    },
    {
      "id": "tut-redblob",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "算法·寻路",
      "tag": "Red Blob Games",
      "title": "Red Blob Games 的 A* 与地图生成教程：把「算法直觉」画给你看",
      "summary": "笔者观察到，Red Blob Games 用大量可交互图示讲解 A* 寻路、网格与地图生成，是程序化内容与 AI 移动方向的必读。它把抽象算法变成「看得见的过程」。",
      "source": "Red Blob Games（一手）",
      "date": "2026-11-01",
      "url": "https://www.redblobgames.com/pathfinding/a-star/introduction.html",
      "image": "",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "A*",
        "寻路",
        "可视化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "用可交互图示讲 A* 寻路；",
            "覆盖网格与地图生成；",
            "程序化与 AI 移动必读。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "理解 A* 不只为做寻路，更是理解「用规则代替暴力」的设计哲学。Red Blob 把每一步展开给你看，新人跟着拖一遍，比背伪代码更能建立直觉——规则写对，路径自己会长出来。"
        }
      ]
    },
    {
      "id": "tut-catlike",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "Unity·数学",
      "tag": "Catlike Coding",
      "title": "Catlike Coding：用 Unity 把「数学」写成能跑的教程",
      "summary": "笔者建议把 Catlike Coding 当作 Unity 进阶练习册：它从基础数学一路写到渲染与噪声，每篇都是可复现的工程。想搞懂「shader / 曲线 / 噪声」背后数学的人，它极其硬核且诚实。",
      "source": "Catlike Coding（一手）",
      "date": "2026-11-01",
      "url": "https://catlikecoding.com/unity/tutorials/",
      "image": "",
      "badge": "教程",
      "badgeType": "game",
      "readTime": "7 分钟",
      "hotScore": 83,
      "tags": [
        "Unity",
        "数学",
        "渲染"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "从基础数学写到渲染与噪声；",
            "每篇都可复现；",
            "适合 Unity 进阶。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多 Unity 教程停在「拖组件」，Catlike 逼你面对数学。它教会一件重要的事：引擎帮你省去样板，但底层原理你逃不掉——把数学写成能跑的代码，才是真懂。"
        }
      ]
    },
    {
      "id": "ai-mistral",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "大模型·Mistral",
      "tag": "Mistral Large 4",
      "title": "Mistral Large 4「Le Chonk」发布：欧洲阵营把「高效」当核心卖点",
      "summary": "笔者注意到，Mistral 推出 Large 4（代号 Le Chonk），延续欧洲阵营对「效率与主权」的强调。对学习者，值得关注的是它如何在性能与推理成本之间找平衡。",
      "source": "Mistral 官方新闻（一手）",
      "date": "2026-11-01",
      "url": "https://mistral.ai/news/mistral-large-4",
      "image": "https://opengraph.githubassets.com/1/mistralai/mistral-inference",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "Mistral",
        "Large 4",
        "欧洲模型"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Mistral Large 4 代号 Le Chonk；",
            "强调效率与数据主权；",
            "在性能与成本间找平衡。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "模型竞争的维度不止「谁更聪明」。Mistral 把效率与主权当卖点，提示一个务实判断标准：选模型要看「单位智能的成本」，而不只是榜单分数——这对做产品的学习者尤其关键。"
        }
      ]
    },
    {
      "id": "ai-openai-devday",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "智能体·OpenAI",
      "tag": "DevDay 2026",
      "title": "OpenAI DevDay 2026：agent 工具链继续下沉，开发门槛再降一截",
      "summary": "笔者观察到，OpenAI 在 2026 DevDay 上继续把 agent 构建、评测与部署工具链打包得更顺手。对想做「游戏 + AI」的学习者，这意味着调用门槛又低了一截。",
      "source": "OpenAI DevDay 官方（一手）",
      "date": "2026-11-01",
      "url": "https://openai.com/devday/",
      "image": "https://opengraph.githubassets.com/1/openai/openai",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "OpenAI",
        "DevDay",
        "Agent"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "DevDay 2026 强化 agent 工具链；",
            "构建 / 评测 / 部署一体化；",
            "调用门槛持续下探。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "AI 能力的「可用化」比「更强」更影响普通人。对游戏方向，agent 工具链成熟意味着 NPC 对话、关卡辅助生成能更快落地——先拿一个小流程跑通，比追大新闻更实在。"
        }
      ]
    },
    {
      "id": "ai-cosmos",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "世界模型·NVIDIA",
      "tag": "Cosmos 3",
      "title": "NVIDIA Cosmos 3：把「世界模型」做成可训练、可部署的工业组件",
      "summary": "笔者注意到，NVIDIA 的 Cosmos 系列把世界模型推进到 3，强调可训练、可评测、可部署。对仿真与机器人方向，它把「生成可交互环境」从论文变成了工具。",
      "source": "NVIDIA Cosmos 官方（一手）",
      "date": "2026-11-01",
      "url": "https://developer.nvidia.com/cosmos",
      "image": "https://opengraph.githubassets.com/1/NVIDIA/Cosmos",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "Cosmos",
        "世界模型",
        "NVIDIA"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Cosmos 3 强调可训练可部署；",
            "面向仿真与机器人；",
            "把世界模型工程化。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「运行世界」比「生成视频」更难也更有用：前者状态一致、可干预，后者只是好看。对游戏与仿真方向，世界模型提示一条路——用模型做低成本训练场，比真引擎跑大规模并行更省。"
        }
      ]
    },
    {
      "id": "ai-deepseek",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "开源模型·DeepSeek",
      "tag": "DeepSeek",
      "title": "DeepSeek 持续开源：把「强模型」的门槛往下拉，本地可玩成常态",
      "summary": "笔者观察到，DeepSeek 在 2026 年继续以开源权重推动「强模型本地化」。对学习者，这意味着本地就能跑一个够强的模型做辅助——把 AI 当随时在线的结对伙伴。",
      "source": "DeepSeek 官方（一手）",
      "date": "2026-11-01",
      "url": "https://www.deepseek.com/",
      "image": "https://opengraph.githubassets.com/1/deepseek-ai/DeepSeek-V3",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 87,
      "tags": [
        "DeepSeek",
        "开源",
        "本地化"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "DeepSeek 持续放出开源权重；",
            "推动强模型本地化；",
            "可做随时在线的辅助。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "开源与闭源的差距正在以月为单位收敛。对新人，本地跑一个够强的模型，比依赖网页端更可控，也更利于隐私与实验——把它当结对伙伴，学习节奏会明显变快。"
        }
      ]
    },
    {
      "id": "ai-meta",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "开源模型·Meta",
      "tag": "Llama",
      "title": "Meta Llama 系列：用「开放权重」守住在开发者生态里的话语权",
      "summary": "笔者注意到，Meta 通过 Llama 系列的开放权重，持续占据开源/开放权重大模型的生态高地。对想自托管、做二次训练的学习者，它是绕不开的基线之一。",
      "source": "Meta AI 官方（一手）",
      "date": "2026-11-01",
      "url": "https://ai.meta.com/",
      "image": "https://opengraph.githubassets.com/1/meta-llama/llama-models",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Meta",
        "Llama",
        "开放权重"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Llama 以开放权重占生态高地；",
            "适合自托管与二次训练；",
            "是开源阵营的基线之一。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "开放权重的意义是「你拥有改动的自由」。对想做研究或产品差异化的学习者，Llama 这类基线让你站在可验证的起点上——不必从零训，而是从「改得动」开始。"
        }
      ]
    },
    {
      "id": "ai-qwen",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "开源模型·Qwen",
      "tag": "Qwen",
      "title": "Qwen（通义千问）开源线：多模态与长上下文并进，国产开源主力之一",
      "summary": "笔者观察到，阿里 Qwen 系列在 2026 年保持高频开源，多模态与长上下文能力并进，成为国产开源模型的主力之一。对中文场景的学习者，它是本土化最友好的候选。",
      "source": "Qwen 官方仓库（一手）",
      "date": "2026-11-01",
      "url": "https://github.com/QwenLM/Qwen",
      "image": "https://opengraph.githubassets.com/1/QwenLM/Qwen",
      "badge": "AI",
      "badgeType": "ai",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Qwen",
        "多模态",
        "国产开源"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "Qwen 高频开源、多模态并进；",
            "长上下文能力突出；",
            "中文场景友好。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "选模型要看「场景匹配」而非榜单。Qwen 在中文与多模态上的投入，使它成为本土学习者的务实起点——先用起来解决真实问题，再谈换更强的模型。"
        }
      ]
    },
    {
      "id": "contest-gameoff",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "赛事·Game Jam",
      "tag": "GitHub Game Off 2026",
      "title": "GitHub Game Off 2026 开赛：一个月、一个主题，最有「以赛代练」价值的官方 Jam",
      "summary": "笔者注意到，GitHub 官方 Game Off 2026 于 11 月 1 日开赛、12 月 1 日截止，明确允许使用 AI 辅助。对想逼出一个完整作品集的新人，这是门槛最低、曝光最高的月度 Jam 之一。",
      "source": "itch.io Jam 页（一手）",
      "date": "2026-11-01",
      "url": "https://itch.io/jam/game-off-2026",
      "image": "",
      "badge": "赛事",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 82,
      "tags": [
        "Game Off",
        "GitHub",
        "Jam"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "11/1 开赛、12/1 截止；",
            "官方允许 AI 辅助；",
            "低门槛、高曝光。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Game Jam 是性价比最高的作品集加速器：一个月逼出一个能跑的成品，比闷头做半年的半成品更有说服力。建议新人每学期至少打一场 Jam，把产出挂进简历。"
        }
      ]
    },
    {
      "id": "contest-ld60",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "赛事·Ludum Dare",
      "tag": "Ludum Dare 60",
      "title": "Ludum Dare 60 进行中：全球最老牌的 48/72 小时 Game Jam 仍在线",
      "summary": "笔者观察到，Ludum Dare 作为全球最老牌的限时 Jam，60 届仍在稳定举办。它强制的「从零到可玩」节奏，是锻炼原型能力的绝佳熔炉。",
      "source": "Ludum Dare 官方（一手）",
      "date": "2026-11-01",
      "url": "https://ldjam.com/",
      "image": "",
      "badge": "赛事",
      "badgeType": "event",
      "readTime": "4 分钟",
      "hotScore": 80,
      "tags": [
        "Ludum Dare",
        "Jam",
        "原型"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "LD 是最老牌限时 Jam；",
            "48/72 小时从零到可玩；",
            "锻炼原型能力。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "LD 的价值在「逼你做减法」：三天里你只能保最核心的循环。这种极限约束，恰恰最能逼出真创意——很多日后成型的游戏，最初只是一次 LD 的草图。"
        }
      ]
    },
    {
      "id": "contest-hero",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "英雄游戏",
      "title": "英雄游戏 2027 届校招进行中：技术 / 策划 / 美术多岗，网申窗口开放",
      "summary": "笔者注意到，英雄游戏（Yongshi / 剑星发行方相关）2027 届秋招正在开放，覆盖技术、策划、美术等方向。对想进成熟项目组的新人，秋招是流程透明的一条路。",
      "source": "英雄游戏招聘官网（一手）",
      "date": "2026-11-01",
      "url": "https://yingxiong.com/p/join.html",
      "image": "",
      "badge": "招聘",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "英雄游戏",
        "校招",
        "秋招"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "英雄游戏 2027 届秋招开放；",
            "技术 / 策划 / 美术多方向；",
            "网申窗口进行中。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "校招是信息战：截止日、岗位画像、笔试题型都要提前摸。建议把目标公司招聘页加进清单，每周扫一眼更新——机会窗口往往只有几天。"
        }
      ]
    },
    {
      "id": "contest-netease",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "网易互娱",
      "title": "网易互娱 2027 校招启动：雷火 / 互娱多工作室技术岗开放",
      "summary": "笔者观察到，网易互娱 2027 届校招已启动，雷火、互娱等工作室放出技术与策划岗位。对北方同学，这是家门口大厂校招里流程成熟、反馈较快的一条线。",
      "source": "网易互娱校园招聘（一手）",
      "date": "2026-11-01",
      "url": "https://campus.game.163.com",
      "image": "",
      "badge": "招聘",
      "badgeType": "business",
      "readTime": "4 分钟",
      "hotScore": 81,
      "tags": [
        "网易",
        "校招",
        "互娱"
      ],
      "content": [
        {
          "title": "本次要点",
          "type": "list",
          "items": [
            "网易互娱 2027 校招启动；",
            "雷火 / 互娱多工作室放岗；",
            "技术与策划方向为主。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "同一届秋招，不同公司窗口错峰。把多家官网并列跟踪，能错开准备节奏——这家笔试时另一家还没开，时间利用率直接翻倍。"
        }
      ]
    }
  ]
};
