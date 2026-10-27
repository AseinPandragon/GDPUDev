window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-10-28",
    "weekday": "星期三",
    "title": "GDPUDev 个人数字创作展示 · 每日技术情报",
    "subtitle": "个人学习观察与评述 · 附参考来源外部链接",
    "updateTime": "2026-10-28 07:40",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "OpenAI GPT-6.1 Terra 主打「计算机使用」，把 agentic AI 从实验推向头条能力",
      "平台与 AI 治理交锋：Epic 称 Steam 的 AI 披露政策是「政治行为」",
      "引擎稳步迭代：Defold 1.14.0 免费接入 Xbox、PlayCanvas v2.35 让 MCP 智能体管工程",
      "开源工具箱：SpacetimeDB 为多人游戏统一数据与逻辑、three.js 让 WebGL 3D 触手可及",
      "学习资源常更：GDQuest 实战、freeCodeCamp 游戏开发专栏、Ink 叙事脚本",
      "面向新生：多益 / 4399 2027 秋招进行中，Ludum Dare 56 佳作已公布可作练手"
    ],
    "engineStatus": [
      {
        "name": "Unity 6000.6.7f1",
        "type": "unity",
        "status": "稳定补丁",
        "badge": "稳定线",
        "color": "blue"
      },
      {
        "name": "Defold 1.14.0",
        "type": "defold",
        "status": "免费接入 Xbox",
        "badge": "轻量引擎",
        "color": "cyan"
      },
      {
        "name": "PlayCanvas v2.35",
        "type": "playcanvas",
        "status": "MCP 管工程",
        "badge": "Web3D",
        "color": "orange"
      },
      {
        "name": "OpenXR 容器",
        "type": "openxr",
        "status": "空间容器扩展",
        "badge": "XR 标准",
        "color": "violet"
      },
      {
        "name": "Cocos CreatorXR",
        "type": "cocos",
        "status": "支持 WebXR",
        "badge": "MR 路线",
        "color": "emerald"
      }
    ]
  },
  "hero": {
    "id": "ai-terra",
    "category": "ai",
    "categoryName": "AI前沿",
    "tag": "OpenAI",
    "title": "OpenAI 推出 GPT-6.1 Terra：把「计算机使用（computer use）」做成头条能力",
    "summary": "笔者注意到 OpenAI 于 10 月 27 日由 Sam Altman 宣布 GPT-6.1 Terra，主打「计算机使用」——让模型自主操作图形界面、点击与填表，完成跨软件的多步任务。Altman 称这是 agentic AI 的新时代，也意味着 AI 从「给答案」走向「替你做事」。",
    "image": "https://nation-press.s3.ap-south-1.amazonaws.com/sam_altman_unveils_openai_6_1_terra_eyes_computer_use_era_516bc737_b58b_41df_95ab_310babc48058_d6897c9106.webp",
    "source": "Nation Press / OpenAI",
    "date": "2026-10-28",
    "url": "https://www.nationpress.com/sciencetech/sam-altman-unveils-openai-6.1-terra-eyes-computer-use-era",
    "readTime": "8 分钟",
    "hotScore": 95,
    "tags": [
      "OpenAI",
      "GPT-6.1 Terra",
      "computer use",
      "智能体"
    ],
    "content": [
      {
        "title": "本次发布的要点",
        "type": "list",
        "items": [
          "GPT-6.1 Terra 由 Sam Altman 于 10 月 27 日宣布，把 computer use 作为头条能力；",
          "它能在图形界面中导航、点击、填表，自主完成多步数字任务；",
          "Altman 称这是 agentic AI 的新时代，强调「AI 不只回答，而是行动」。"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "对游戏与数字媒体创作者，computer use 最大的想象空间是「把重复操作自动化」：素材整理、批量导出、跨工具串联都可能交给智能体。但前提是清晰的权限与可审计的执行边界——能力越强，越要先把「它能不能动、动了谁负责」想清楚。短期内它更可能是开发流水线的加速器，而非替代者。"
      }
    ]
  },
  "items": [
    {
      "id": "engine-unity667",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Unity",
      "tag": "Unity",
      "title": "Unity 6000.6.7f1 补丁发布：稳定分支持续打磨渲染与稳定性",
      "summary": "笔者观察到 Unity 在 6000.6 稳定线上推进到 6000.6.7f1，这是面向生产的常规补丁，核心仍是图形、动画与平台稳定性的小幅修复。对仍在使用 6.x 的团队，这类补丁值得按变更日志逐项核对而非盲目升级。",
      "source": "Unity 官方",
      "date": "2026-10-28",
      "url": "https://unity.com/releases/editor/whats-new/6000.6.7",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/b9385c095d1c8c58f48fc7d4fc8ae257395169c8-266x98.png",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Unity",
        "6000.6.7",
        "稳定版"
      ],
      "content": [
        {
          "title": "学习要点",
          "type": "list",
          "items": [
            "6000.6.7f1 属于 6000.6 稳定分支的累积补丁，主打引擎稳定性与平台兼容性；",
            "官方 whats-new 页面列出渲染、动画与编辑器相关修复；",
            "升级前应在测试工程比对变更，关注与现有渲染管线的兼容性。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "从个人视角看，稳定分支的频繁小版本是引擎成熟的信号：它把风险控制在可控范围，而不是用大版本制造迁移负担。对新手而言，跟随稳定分支比追预览版更省心。"
        }
      ]
    },
    {
      "id": "engine-defold140",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Defold",
      "tag": "Defold",
      "title": "Defold 1.14.0 发布：免费接入 Xbox 主机，并带来重构的材质编辑器",
      "summary": "笔者注意到 Defold 1.14.0 正式发布，最大亮点是对获批 Xbox 开发者的主机支持，让这款轻量引擎第一次覆盖三大主机家族；同时加入了 cubemap 渲染目标与重做的 Material Editor。",
      "source": "Defold 官方",
      "date": "2026-10-28",
      "url": "https://defold.com/press/",
      "image": "https://defold.com/images/social/facebook-share.jpg",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "Defold",
        "Xbox",
        "轻量引擎"
      ],
      "content": [
        {
          "title": "值得关注",
          "type": "list",
          "items": [
            "Defold 1.14.0 为获批 Xbox 开发者免费提供主机支持，覆盖三大主机家族；",
            "新增 cubemap 渲染目标，便于自定义反射与环境捕捉；",
            "重做的 Material Editor 与更省 CPU 的编辑器提升日常体验。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Defold 走的是「小而美 + 商业可达」路线：能上主机意味着独立团队用同一套技术栈就能从 Web 一路打到 Xbox，少了切换成本。代价是存在少量破坏性变更，老项目升级前务必看迁移说明。"
        }
      ]
    },
    {
      "id": "engine-playcanvas235",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Web",
      "tag": "PlayCanvas",
      "title": "PlayCanvas Editor v2.35：项目仪表盘 + MCP 智能体可直接管理工程",
      "summary": "笔者观察到 PlayCanvas 编辑器 v2.35 带来新的 Project Dashboard，并允许 MCP 智能体在打开任何工程前就连入，用项目级工具直接管理工程——这等于把「一句话出网页 3D」的闭环又往前推了一步。",
      "source": "PlayCanvas 官方",
      "date": "2026-10-28",
      "url": "https://blog.playcanvas.com/",
      "image": "https://repository-images.githubusercontent.com/19696006/f792c200-9ae5-11ea-8193-af24596ab0c7",
      "readTime": "7 分钟",
      "hotScore": 86,
      "tags": [
        "PlayCanvas",
        "Web3D",
        "MCP"
      ],
      "content": [
        {
          "title": "关键变化",
          "type": "list",
          "items": [
            "新增 Project Dashboard：搜索、收藏、卡片/列表视图与工程设置；",
            "MCP 智能体可在工程打开前就连入，用项目级工具管理 PlayCanvas 工程；",
            "编辑器工程可直接发布到 Web，对 WebXR 团队尤其友好。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把 AI 编码智能体接入可视化编辑器，意味着从「提示词到可分享 URL」的链路被压到最短。对做浏览器 3D / WebXR 体验的团队，这是把 AI 工作流落地的好例子。"
        }
      ]
    },
    {
      "id": "engine-khronos-openxr",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "XR",
      "tag": "OpenXR",
      "title": "Khronos 推 OpenXR 空间容器扩展：为 XR 会话生命周期重写埋下伏笔",
      "summary": "笔者注意到 Khronos 发布 XR_EXT_spatial_container 系列扩展，让 XR 应用可在系统托管的有界窗口与沉浸模式间运行时切换。对 WebXR 开发者而言，这意味着会话生命周期与焦点事件的管理方式将发生改变。",
      "source": "Khronos 官方",
      "date": "2026-10-28",
      "url": "https://www.khronos.org/openxr/",
      "image": "https://www.khronos.org/assets/uploads/blogs/OpenXR-Square.png",
      "readTime": "8 分钟",
      "hotScore": 85,
      "tags": [
        "OpenXR",
        "WebXR",
        "XR"
      ],
      "content": [
        {
          "title": "技术要点",
          "type": "list",
          "items": [
            "新扩展 XR_EXT_spatial_container 与 _self_rendering 让应用以系统托管的有界窗口运行；",
            "运行时可切换到沉浸模式，可见性与焦点成为按容器划分的事件；",
            "OpenXR SDK 1.1.65 已附带对应示例代码。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "XR 标准层的一步小改动，会影响所有跑在 OpenXR 运行时上的引擎与 WebXR 浏览器。它把「窗口态 ↔ 沉浸态」的切换交还给系统，开发者要关注哪些运行时（Android XR、Quest）会率先采用。"
        }
      ]
    },
    {
      "id": "engine-cocos-xr",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "WebXR",
      "tag": "Cocos",
      "title": "Cocos CreatorXR 1.2.0 发布：正式支持 WebXR，开启 MR 路线",
      "summary": "笔者观察到 Cocos 推出 CreatorXR 1.2.0，正式支持 WebXR，把轻量 2D/3D 引擎的能力延伸到浏览器端的沉浸式体验，并明确开启 MR 路线。对想低成本试水 WebXR 的团队，这是一条可选项。",
      "source": "Cocos 官方",
      "date": "2026-10-28",
      "url": "https://www.cocos.com/docs/?id=65",
      "image": "",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Cocos",
        "WebXR",
        "MR"
      ],
      "content": [
        {
          "title": "值得关注",
          "type": "list",
          "items": [
            "Cocos CreatorXR 1.2.0 正式支持 WebXR；",
            "与 Cocos Dashboard 的 OpenPaaS 入口形成「开发—打包—分发」链路；",
            "官方将其定位为 MR 路线的起点。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Cocos 在轻量与跨端上的积累，恰好是 WebXR 这类「即开即玩」场景需要的。对不想被重型引擎束缚、又想覆盖多端的小团队，值得关注它后续 MR 能力的落地。"
        }
      ]
    },
    {
      "id": "ind-epic-steam-ai",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "平台政策",
      "tag": "Steam",
      "title": "Epic CEO 称 Steam 的 AI 披露政策是「政治行为」，平台与开发者再交锋",
      "summary": "笔者观察到 Epic 的 Tim Sweeney 公开批评 Valve 在 Steam 上为使用 AI 的游戏加披露标签的做法，称其是「政治行为」。这一表态把「AI 工具该不该被标注」的争议推到平台治理层面，值得开发者持续关注。",
      "source": "gamesindustry.biz",
      "date": "2026-10-28",
      "url": "https://www.gamesindustry.biz/epic-games-ceo-calls-steams-ai-disclosure-policies-a-political-act",
      "image": "https://assetsio.gnwcdn.com/Tim_Sweeney_P7vsPEF.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "7 分钟",
      "hotScore": 89,
      "tags": [
        "Steam",
        "AI披露",
        "Epic"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "Sweeney 认为强制开发者写「政治声明」会被用于针对他们；",
            "他重申平台不应给用 AI 的开发者的成功增加难度；",
            "这延续了他此前对 Steam AI 标签「不负责任」的批评。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "从学习视角看，这不仅是两家公司的口水战，而是「AI 辅助开发」如何被平台、玩家与监管共同定义的缩影。独立开发者最该想清楚的是：透明标注到底是负担，还是建立信任的机会。"
        }
      ]
    },
    {
      "id": "ind-sucker",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "裁员",
      "tag": "Sucker Punch",
      "title": "《对马岛》工作室 Sucker Punch 被曝在《Ghost of Yōtei》完整版发售后裁员 24 人",
      "summary": "笔者注意到 Sucker Punch 在《Ghost of Yōtei: Complete Edition》发售后被曝裁撤约 24 名员工，内部邮件称是审视市场挑战与下一项目需求后的决定。又一个首发后即调整的案例，折射出 3A 团队的人效焦虑。",
      "source": "gamesindustry.biz",
      "date": "2026-10-28",
      "url": "https://www.gamesindustry.biz/sucker-punch-productions-reportedly-lays-off-24-employees-following-launch-of-ghost-of-yotei-complete-edition",
      "image": "https://assetsio.gnwcdn.com/Discover-Japans-Natural-Beauty-Virtually-Through-Ghost-of-Yotei-hero.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "裁员",
        "Sucker Punch",
        "对马岛"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "Sucker Punch 约 24 名员工被裁，时点紧跟完整版发售；",
            "内部邮件称基于市场挑战与下一项目人力需求评估；",
            "行业在首发后「瘦身」已成常见节奏。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大作发售后裁员的循环，提醒新人：游戏行业的岗位与项目制强绑定。理解这种周期，有助于在校招/求职时更理性地看待「大厂稳定」的幻觉。"
        }
      ]
    },
    {
      "id": "ind-warhorse",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "安全",
      "tag": "Warhorse",
      "title": "《天国：拯救》工作室 Warhorse 遭网络攻击，系统与客户数据受影响",
      "summary": "笔者注意到 Warhorse Studios 公布遭遇网络攻击，公司系统与数据受到影响，已表态投入资源处置并适时通报。对以单机 RPG 见长的团队而言，安全事件也是一次运营韧性考验。",
      "source": "gamesindustry.biz",
      "date": "2026-10-28",
      "url": "https://www.gamesindustry.biz/warhorse-studios-hit-by-cyberattack-company-systems-and-data-affected",
      "image": "https://assetsio.gnwcdn.com/kingdom-come_6Zkf0Gj.webp?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "Warhorse",
        "网络攻击",
        "安全"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "Warhorse 确认遭网络攻击，系统与数据受影响；",
            "公司承诺投入资源处置并在可负责时持续沟通；",
            "具体影响范围仍待进一步通报。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "玩家数据与安全正成为工作室的「隐性资产」。从个人视角看，这提示从业者：安全合规也是工程能力的一部分，而非上线后才补的功课。"
        }
      ]
    },
    {
      "id": "ind-ukie-vgec",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "政策",
      "tag": "英国",
      "title": "英国 UKIE 呼吁在秋季预算前改革游戏支出抵免（VGEC），保住本土竞争力",
      "summary": "笔者观察到 UKIE 在秋季预算前向政府喊话，要求现代化游戏支出抵免政策，称这对英国保持建设与成长游戏企业的竞争力至关重要。这类政策直接关系本地团队的生存与扩张。",
      "source": "gamesindustry.biz",
      "date": "2026-10-28",
      "url": "https://www.gamesindustry.biz/ukie-calls-on-government-to-modernise-video-games-expenditure-credit-ahead-of-autumn-budget",
      "image": "https://assetsio.gnwcdn.com/nathaniel-cherian-2Z9isw4Pamk-unsplash.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "VGEC",
        "政策",
        "英国"
      ],
      "content": [
        {
          "title": "政策要点",
          "type": "list",
          "items": [
            "UKIE 呼吁改革 Video Games Expenditure Credit（VGEC）；",
            "诉求是在秋季预算前现代化该抵免以保住竞争力；",
            "政策直接影响英国游戏企业的投资与招聘意愿。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": " tax credit 这类政策，往往是小团队能否活下来的分水岭。对关注海外就业的新人，理解目的国产业政策，比只看薪资更能判断一个地区值不值得去。"
        }
      ]
    },
    {
      "id": "ind-side-china",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "并购",
      "tag": "Side",
      "title": "Side 中国扩张：新设工作室并收购美术外包商 Roboto Entertainment",
      "summary": "笔者注意到 Side 在中国扩张，开设新工作室并收购美术外包提供商 Roboto Entertainment，后者创始人出任成都办公室全球美术负责人。这是中西方游戏服务链进一步咬合的信号。",
      "source": "gamesindustry.biz",
      "date": "2026-10-28",
      "url": "https://www.gamesindustry.biz/side-expands-presence-in-china-opens-new-studio-and-acquires-art-outsourcing-provider-roboto-entertainment",
      "image": "https://assetsio.gnwcdn.com/side_Q5xVjua.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Side",
        "并购",
        "外包"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "Side 在中国新设工作室并收购美术外包商 Roboto Entertainment；",
            "Roboto 创始人出任全球美术负责人与成都办公室工作室负责人；",
            "体现服务链在中西游戏产业间的进一步整合。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "美术与 QA 外包的并购，说明「全球化分工」仍在深化。对想进入游戏美术/外包赛道的新人，这类整合意味着更明确的职业入口与晋升通道。"
        }
      ]
    },
    {
      "id": "games-rps-week",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "PC新作",
      "tag": "本周PC",
      "title": "本周 PC 游戏巡礼：星战竞速、Hellraiser 重燃、把乌托邦改成停车场等",
      "summary": "笔者按惯例梳理本周 PC 新作：从《Star Wars: Galactic Racer》的飞车爆破，到《Clive Barker's Hellraiser: Revival》的第一人称解谜恐怖，再到把「乌托邦社区改成停车场」的复古经营模拟《Car Park Capital》——万圣节档期恐怖浓度偏高，类型却相当跳跃。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-28",
      "url": "https://www.rockpapershotgun.com/this-week-in-pc-games-star-wars-galactic-racer-hellraiser-revival-and-a-throwback-tycoon-game-about-turning-utopias-into-carparks",
      "image": "https://assetsio.gnwcdn.com/car-park-capital_Gmq5Uqg.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "8 分钟",
      "hotScore": 86,
      "tags": [
        "PC游戏",
        "新作",
        "万圣节"
      ],
      "content": [
        {
          "title": "本周看点",
          "type": "list",
          "items": [
            "《Star Wars: Galactic Racer》主打飞行摩托对撞爆破；",
            "《Hellraiser: Revival》把经典恐怖 IP 做成第一人称解谜；",
            "《Car Park Capital》是 90 年代风的早期经营模拟。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "RPS 的周更清单是观察西方独立/中型 PC 游戏风向的好窗口。对想做关卡、系统或叙事的新人，这类「小而怪」的选题往往比大作更能学到设计取舍。"
        }
      ]
    },
    {
      "id": "games-virtue",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "评测",
      "tag": "叙事",
      "title": "《Virtue and a Sledgehammer》评测：反 AI、反冷漠的科幻剧作",
      "summary": "笔者读到 RPS 对《Virtue and a Sledgehammer》的评测：这是一款以砸墙、AI 面孔与心碎为主题的科幻剧作，评测直言其「反 AI、反冷漠」，却也诚恳地站在人本一边。用锤子拆掉过去，恰是它最动人的隐喻。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-28",
      "url": "https://www.rockpapershotgun.com/virtue-and-a-sledgehammer-review",
      "image": "https://assetsio.gnwcdn.com/Virtue-and-a-Sledgehammer-review-header-BB.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "评测",
        "叙事",
        "反AI"
      ],
      "content": [
        {
          "title": "评测要点",
          "type": "list",
          "items": [
            "游戏用砸墙动作承载叙事与情绪，节奏沉稳而有重量；",
            "主题明确反对将创作空间让渡给「无魂机器」；",
            "评测认为它反冷漠、反偏见，立场诚恳。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "一个值得新作者借鉴的细节：它把「立场」做成玩法而非说教。当你在游戏里亲手砸碎某样东西，比任何一段台词都更能让人记住你想表达什么。"
        }
      ]
    },
    {
      "id": "games-selkies",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "放置",
      "tag": "增量",
      "title": "《Selkie's Salvage&Co》：把「倒垃圾」做成让人停不下来的增量游戏",
      "summary": "笔者注意到《Selkie's Salvage&Co》这款增量游戏把「从被淹星球捞垃圾、让数字变大」的设定做得意外上头。RPS 的形容很贴切——它能把一件本该糟糕的事，变成你忍不住说「再玩五分钟」的体验。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-28",
      "url": "https://www.rockpapershotgun.com/reel-out-garbage-from-a-flooded-planet-and-make-number-go-up-as-satisfyingly-as-you-can-in-the-incremental-fishing-game-selkies-salvageco",
      "image": "https://assetsio.gnwcdn.com/selkies-salvage-and-co.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "增量",
        "放置",
        "独立"
      ],
      "content": [
        {
          "title": "设计要点",
          "type": "list",
          "items": [
            "核心循环是「回收—变现—扩张」的增量反馈；",
            "废墟星球与捞垃圾的世界观反差制造记忆点；",
            "参与 Steam Next Fest，可试玩 Demo。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "增量游戏的教学意义在「反馈密度」：它用最小的单位持续奖励玩家。做玩法原型时，这种「让数字好看地涨」的节奏，是任何品类都该偷师的。"
        }
      ]
    },
    {
      "id": "games-hypnos",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "探索",
      "tag": "叙事",
      "title": "《Hypnos》1.0 正式上线：在宇宙巨构中解谜、对话、揭开蒙昧之纱",
      "summary": "笔者注意到《Hypnos》于 10 月 29 日结束抢先体验、推出 1.0：这是一款第一人称探索冒险游戏，玩家扮演名为 Chrono 的少年，在神秘的宇宙巨构中穿梭、与古怪居民对话、解开城市谜团并跨越「无知与真相之帷」。它把叙事选择做成多结局，是探索向新人值得关注的样本。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-28",
      "url": "https://www.rockpapershotgun.com/captivating-cosmic-megastructure-adventure-game-hypnos-leaves-early-access-next-week-offering-up-a-world-im-desperate-to-dig-into-further?source=newscura",
      "image": "https://assetsio.gnwcdn.com/hypnos-launch.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "探索",
        "叙事",
        "多结局"
      ],
      "content": [
        {
          "title": "设计要点",
          "type": "list",
          "items": [
            "第一人称探索 + 对话选择，多结局分支；",
            "宇宙巨构（megastructure）世界观，氛围神秘；",
            "从抢先体验打磨到 1.0，Demo 可先试水。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把「对话即玩法、探索即叙事」做到位的作品，最适合新人研究「如何用环境讲故事」。与其堆设定，不如让玩家在行走与交谈中自己拼出世界观——这是低成本也高明的叙事手法。"
        }
      ]
    },
    {
      "id": "games-pokemon-unite",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "停服",
      "tag": "腾讯",
      "title": "TiMi 旗下《Pokémon Unite》宣布 2027 年 3 月 23 日停服",
      "summary": "笔者注意到 TiMi Studio Group 宣布《Pokémon Unite》将于 2027 年 3 月 23 日停止运营，这款 2021 年登陆 Switch 与移动端的 MOBA 至此进入倒计时。对长线运营产品而言，停服公告本身就是一份「生命周期」样本。",
      "source": "gamesindustry.biz",
      "date": "2026-10-28",
      "url": "https://www.gamesindustry.biz/timi-studio-groups-pokemon-unite-to-shut-down-on-march-23-2027",
      "image": "https://assetsio.gnwcdn.com/pokemon-unite_YqACE15.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "停服",
        "Pokemon Unite",
        "腾讯"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "《Pokémon Unite》将于 2027-03-23 停止运营；",
            "产品 2021 年上线，覆盖 Switch 与移动端；",
            "现进入停服倒计时与善后阶段。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "从个人视角看，停服是游戏产品生命周期的必然章节。它提醒从业者与玩家：运营型产品的价值不仅在于上线，也在于如何体面地退场。"
        }
      ]
    },
    {
      "id": "os-sfml",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "C++",
      "tag": "多媒体",
      "title": "SFML 3：用极简 C++ 多媒体库敲开游戏编程的第一扇门",
      "summary": "笔者常把 SFML 推荐给想用 C++ 入门游戏的人：这个开源多媒体库把窗口、图形、输入、音频与网络封装成直观的模块，让你不用先啃引擎就能写出第一个能动的 2D 小游戏。对理解「游戏主循环」这件事，它比重型框架更直接。",
      "source": "GitHub: SFML",
      "date": "2026-10-28",
      "url": "https://github.com/SFML/SFML",
      "image": "https://github.com/SFML.png",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "开源",
        "SFML",
        "C++"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "SFML 以窗口 / 图形 / 输入 / 音频 / 网络五大模块组织 API；",
            "依赖少、上手快，适合从零理解游戏主循环；",
            "跨平台，且社区教程与示例丰富。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多新手被「先学引擎还是先学语言」困住。SFML 的价值是让你在最小依赖里把循环、事件、绘制跑通——等概念清楚了，再上 Unity / Godot 会顺很多。"
        }
      ]
    },
    {
      "id": "os-spacetime",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "多人",
      "tag": "后端",
      "title": "SpacetimeDB：为多人游戏而生的数据库，把状态与逻辑放在同一处",
      "summary": "笔者注意到 clockworklabs 的 SpacetimeDB，这是一个以游戏服务器为首要场景的数据库：它把数据、逻辑与实时同步收敛到一处，理论上能大幅缩短多人玩法的后端链路。对做联机原型的人来说值得盯。",
      "source": "GitHub: clockworklabs",
      "date": "2026-10-28",
      "url": "https://github.com/clockworklabs/SpacetimeDB",
      "image": "https://opengraph.githubassets.com/b9a18fff4ded71dacacb9ece46d933d851ae3a6efe57fe672ed98ea20f95f6a3/clockworklabs/SpacetimeDB",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "开源",
        "多人游戏",
        "后端"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "SpacetimeDB 以游戏服务器为先，统一数据与逻辑；",
            "目标是降低实时多人玩法的后端复杂度；",
            "采用 Rust 实现，强调性能与开发速度。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "多人游戏最难的从来不是「能连上」，而是「状态一致且好维护」。把数据库做成实时层，是近年后端演进的一个清晰信号，值得联机向学习者跟踪。"
        }
      ]
    },
    {
      "id": "os-threejs",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "Web3D",
      "tag": "渲染",
      "title": "three.js：让 WebGL 3D 在浏览器里人人可上手的开源引擎",
      "summary": "笔者一直把 three.js 视为浏览器 3D 的「标配入口」：它用直观的 API 封装了 WebGL 的场景、相机、材质与光照，让没有图形学背景的人也能快速搭出可交互的 3D 场景。配合 PlayCanvas 这类编辑器，Web3D 的门槛正在被持续拉低。",
      "source": "GitHub: mrdoob",
      "date": "2026-10-28",
      "url": "https://github.com/mrdoob/three.js",
      "image": "https://github.com/mrdoob.png",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "开源",
        "three.js",
        "WebGL"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "three.js 封装场景 / 相机 / 材质 / 光照，屏蔽 WebGL 样板代码；",
            "生态庞大，示例与插件覆盖绝大多数 3D 需求；",
            "与 WebXR 天然契合，是浏览器沉浸式体验的常用底座。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "和前面提到的 PlayCanvas 一样，three.js 代表「浏览器即运行时」的趋势。新人想试水 3D，不必先装引擎——一个 html 文件加一段脚本就能看到结果，这种即时反馈最利于建立直觉。"
        }
      ]
    },
    {
      "id": "os-openra",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "重制",
      "tag": "RTS",
      "title": "OpenRA：用现代引擎重制 Westwood 经典 RTS 的开源项目",
      "summary": "笔者重温 OpenRA：它用 C# + SDL + OpenGL 重制了《命令与征服：红色警戒》等早期 Westwood RTS，支持多平台。对想钻研实时战略架构、寻路与网络同步的新人，它是可读性很高的活教材。",
      "source": "GitHub: OpenRA",
      "date": "2026-10-28",
      "url": "https://github.com/OpenRA/OpenRA",
      "image": "https://repository-images.githubusercontent.com/959908/9ae88d80-9492-11eb-8fd2-c5e438bff0b9",
      "readTime": "7 分钟",
      "hotScore": 85,
      "tags": [
        "开源",
        "RTS",
        "重制"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "重制《红警》等经典 RTS，使用 C# + SDL + OpenGL；",
            "覆盖 Windows / Linux / macOS / BSD；",
            "包含地图编辑器与对战的完整工具链。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "OpenRA 的价值在于「把经典拆解给你看」：资源、单位、网络同步都是公开实现。想学 RTS 的系统设计，与其空谈，不如直接读它的模块划分。"
        }
      ]
    },
    {
      "id": "os-pyxel",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "复古",
      "tag": "Python",
      "title": "Pyxel：用 Python 写复古像素游戏的轻量引擎",
      "summary": "笔者推荐 Pyxel 给想用 Python 入门游戏的人：这是一个受 PICO-8 启发的复古游戏引擎，API 简洁，能快速做出带像素风的 2D 小游戏。对不想先啃重型引擎的新手，它是低门槛的切入点。",
      "source": "GitHub: kitao",
      "date": "2026-10-28",
      "url": "https://github.com/kitao/pyxel",
      "image": "https://opengraph.githubassets.com/3f4cae3d065394d055858feb7402d220f8f2fa143c38ea1552507ca454a0c9bc/kitao/pyxel",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "开源",
        "Pyxel",
        "复古"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "受 PICO-8 启发的复古 2D 游戏引擎；",
            "用 Python 编写，API 简洁上手快；",
            "内置编辑器与示例，适合做像素小游戏。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Pyxel 的意义在「限制即创意」：固定调色板与低分辨率反而逼出设计感。对零基础者，先在小约束里完成一个能玩的东西，比在大引擎里迷路更有成就感。"
        }
      ]
    },
    {
      "id": "tut-kidscancode",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "Godot",
      "tag": "配方",
      "title": "KidsCanCode 的 Godot 4.x 配方：即取即用的小段玩法实现",
      "summary": "笔者把 KidsCanCode 的 Godot 4.x 配方当作速查表：输入、UI、物理与常见玩法片段都被拆成短配方，适合在原型里直接抄一段再改。对正在学 Godot 的人，它是官方文档之外的好补充。",
      "source": "KidsCanCode",
      "date": "2026-10-28",
      "url": "https://kidscancode.org/godot_recipes/4.x/",
      "image": "",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "教程",
        "Godot",
        "配方"
      ],
      "content": [
        {
          "title": "学习要点",
          "type": "list",
          "items": [
            "按主题整理的 Godot 4.x 短配方：输入 / UI / 物理；",
            "适合在原型中快速取用并改造；",
            "与官方文档互补，重实战。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "教程的价值不只是「教」，更是「给可直接改的代码」。新人学引擎时，先看配方做一个能跑的东西，再回头补概念，效率远高于从头读文档。"
        }
      ]
    },
    {
      "id": "tut-ink",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "叙事",
      "tag": "分支",
      "title": "Inkle 的 Ink：写分支对话与叙事状态的开源脚本语言",
      "summary": "笔者推荐做叙事游戏的人看 Inkle 的 Ink：它是一门专为分支对话与叙事状态设计的脚本语言，可编译成短篇互动故事并接入各引擎。对想做文字冒险或任务对白的独立开发者，它是轻量而专业的工具。",
      "source": "Inkle",
      "date": "2026-10-28",
      "url": "https://www.inklestudios.com/ink/",
      "image": "",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "教程",
        "叙事",
        "Ink"
      ],
      "content": [
        {
          "title": "学习要点",
          "type": "list",
          "items": [
            "Ink 专注分支对话与叙事状态管理；",
            "可编译互动故事并集成到自家引擎；",
            "适合文字冒险、任务对白与多结局叙事。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多玩法团队会写「剧情」却不会写「系统」。Ink 的启发是：把叙事也当成可编程的状态机，作者与程序各司其职，对白就不再是一堆散落的字符串。"
        }
      ]
    },
    {
      "id": "tu-gdquest-main",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "Godot",
      "tag": "实战",
      "title": "GDQuest：把 Godot 学习做成「边做边学」的免费视频与项目",
      "summary": "笔者推荐 GDQuest 作为 Godot 新手的实战入口：它把节点、脚本、动画到完整小游戏拆成一串可跟做的免费教程与开源示例，强调「先做出能跑的东西」再补概念。对正在学 Godot 4 的人，它是官方文档之外最顺手的补充。",
      "source": "GDQuest",
      "date": "2026-10-28",
      "url": "https://www.gdquest.com/",
      "image": "https://www.gdquest.com/img/social-banner.png",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "教程",
        "Godot",
        "实战"
      ],
      "content": [
        {
          "title": "学习要点",
          "type": "list",
          "items": [
            "以可跟做的免费视频与开源示例组织内容；",
            "覆盖节点、GDScript、动画与完整小游戏；",
            "强调先做出能跑的东西，再回头补概念。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "教程的价值不只是「教」，更是「给可直接改的代码」。新人学引擎时，先看 GDQuest 做一个能跑的东西，再回头读官方文档，效率远高于从头啃文档。"
        }
      ]
    },
    {
      "id": "tu-kavex-resources",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "资源",
      "tag": "索引",
      "title": "GameDev-Resources：一份持续维护的游戏开发学习资源清单",
      "summary": "笔者常备一份好用的资源清单：Kavex 维护的 GameDev-Resources 把引擎、图形、音频、工具到求职的学习资料按方向整理成开源仓库，适合在「不知道下一步学什么」时按图索骥。对刚入门、想系统铺开知识面的人尤其有用。",
      "source": "GitHub: Kavex",
      "date": "2026-10-28",
      "url": "https://github.com/Kavex/GameDev-Resources",
      "image": "https://github.com/Kavex.png",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "教程",
        "资源",
        "索引"
      ],
      "content": [
        {
          "title": "清单要点",
          "type": "list",
          "items": [
            "按引擎 / 图形 / 音频 / 工具 / 求职等方向分类；",
            "链接精选，避免在海量的博客里迷路；",
            "开源维护，可顺手收藏与贡献。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这类清单的价值是「降低选择成本」。但提醒一句：教程跳着看、看完不动手，等于没看。挑一个方向、一份带具体项目的资源，先做出能跑的东西再说。"
        }
      ]
    },
    {
      "id": "tu-fcc-gamedev",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "通识",
      "tag": "入门",
      "title": "freeCodeCamp 游戏开发专栏：零基础也能跟的免费长文教程",
      "summary": "笔者推荐 freeCodeCamp 的游戏开发专栏作为零基础入口：它用可全文免费阅读的长文，覆盖从游戏循环、碰撞到具体引擎实战的系列内容，适合在通勤或碎片时间系统补基础。对预算有限、想先确认自己是否喜欢做游戏的新人，这是低门槛的起点。",
      "source": "freeCodeCamp",
      "date": "2026-10-28",
      "url": "https://www.freecodecamp.org/news/tag/game-development/",
      "image": "https://cdn.freecodecamp.org/platform/universal/fcc_meta_1920X1080-indigo.png",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "教程",
        "通识",
        "免费"
      ],
      "content": [
        {
          "title": "专栏要点",
          "type": "list",
          "items": [
            "以可免费阅读的长文组织，覆盖基础到实战；",
            "主题含游戏循环、碰撞检测与引擎入门；",
            "适合碎片时间系统补基础、确认兴趣。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "免费且长文的好处是「随时能读完一整篇」。新人最怕半途而废，建议把一篇教程从头做到尾、跑通再走，比收藏十个清单更有用。"
        }
      ]
    },
    {
      "id": "ai-anthropic-s1",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "商业",
      "tag": "上市",
      "title": "Anthropic 递交 S-1 招股书，拟以代码 ANT 登陆纳斯达克",
      "summary": "笔者注意到 Anthropic 向 SEC 递交 S-1、计划以「ANT」登陆纳斯达克，文件显示其 2026 年 Q2 收入约 116 亿美元、首次 GAAP 经营利润 9.74 亿美元。AI 头部公司的资本化进入新阶段，也意味着行业竞争与披露都更透明。",
      "source": "FutureTools / SEC",
      "date": "2026-10-28",
      "url": "https://www.futuretools.io/news",
      "image": "https://futuretools.io/logo@2x.png",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "Anthropic",
        "IPO",
        "S-1"
      ],
      "content": [
        {
          "title": "事件要点",
          "type": "list",
          "items": [
            "Anthropic 递交 S-1，拟以代码 ANT 在纳斯达克上市；",
            "披露 Q2 收入约 116 亿美元、首次 GAAP 经营利润 9.74 亿美元；",
            "反映 AI 头部公司资本化的加速。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "从个人视角看，S-1 把一家 AI 公司的真实体量与成本承诺摆到台前。对用 Claude 做游戏工具的开发者，这既是背书，也提示：底层模型供应商的可持续性，会直接影响你的工作流长期成本。"
        }
      ]
    },
    {
      "id": "ai-claude-duet",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "智能体",
      "tag": "主动式",
      "title": "Anthropic 推出主动型智能体 Claude Duet（研究预览）",
      "summary": "笔者观察到 Anthropic 以研究预览形式推出 Claude Duet：它可连接邮件、日历、银行与企业系统，在用户未下指令时就主动发现待办、每天发晨间简报，并在后台持续执行。个人智能体正从「等指令」走向「主动干活」。",
      "source": "Anthropic 官方",
      "date": "2026-10-28",
      "url": "https://www.claude.com",
      "image": "https://assets.claude.com/f66071070c4701ea2c37fc01b3c0f83623cf29d3.jpg?w=2400&h=1260&fit=crop",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "Claude",
        "智能体",
        "Duet"
      ],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": [
            "Claude Duet 为研究预览，连接邮件 / 日历 / 银行 / 企业系统；",
            "未下指令时主动发现待办并每日推送晨间简报；",
            "内置 6000+ 应用连接器，对标 Muse 与 Dots。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「常驻分身」式的智能体，对独立开发者的意义是：它开始接管重复性协调工作。但把银行与业务系统交给它，也要求更清晰的权限与审计边界——这正是从业者要提前想清楚的。"
        }
      ]
    },
    {
      "id": "ai-claude-proofs",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "安全",
      "tag": "形式化",
      "title": "Claude 为 123 个开源库产出机器可校验的「永不崩溃」证明",
      "summary": "笔者读到 Anthropic 与 Theorem 的合作：Claude 在 RISC-V 汇编层面为 123 个 OSS-Fuzz 库的模糊测试入口点产出机器校验证明，声称这些入口在小于 64MB 的输入下永不崩溃，过程中还发现并修补了数百个 bug。",
      "source": "Glonce / Anthropic",
      "date": "2026-10-28",
      "url": "https://glonce.com/digest/month",
      "image": "https://glonce.com/og-default.png",
      "readTime": "7 分钟",
      "hotScore": 87,
      "tags": [
        "Claude",
        "形式化证明",
        "安全"
      ],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": [
            "Claude 在 RISC-V 汇编层为 123 个库产出机器校验证明；",
            "覆盖小于 64MB 输入的模糊测试入口点；",
            "过程中发现并修补了数百个 bug。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "把 LLM 用于「证明而非生成」，是一个值得关注的方向：它把模型的输出变成可被工具验证的对象。对游戏引擎这类对崩溃零容忍的系统，这种范式比纯生成更可信。"
        }
      ]
    },
    {
      "id": "ai-grok47",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "模型",
      "tag": "发布",
      "title": "xAI 发布 Grok 4.7，继续推进多模态与智能体能力",
      "summary": "笔者注意到 xAI 在 10 月下旬发布 Grok 4.7，延续其在多模态与实时问答上的路线，并把能力进一步向智能体与长上下文场景倾斜。模型密集发布期里，关键不是追新，而是判断哪个真正贴合自己的工作流。",
      "source": "xAI 官方",
      "date": "2026-10-28",
      "url": "https://x.ai/news",
      "image": "https://x.ai/news/opengraph-image-s2o2ba.jpg?opengraph-image.0tzlitqejnex0.jpg?dpl=8cfa40bb0c778c4668af33905d11ab33d9da42f3",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Grok",
        "xAI",
        "模型"
      ],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": [
            "xAI 于 10 月下旬发布 Grok 4.7；",
            "延续多模态与实时问答路线；",
            "能力向智能体与长上下文场景倾斜。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "模型月月有新，但个人工作流真正需要的往往是「稳定 + 可负担 + 好接入」。对用 AI 辅助开发的团队，与其频繁迁移，不如把一套模型用透、把提示词与评测沉淀下来。"
        }
      ]
    },
    {
      "id": "ai-runway-appstudio",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "创作",
      "tag": "工具",
      "title": "Runway 推出 App Studio：用自然语言无代码搭建 AI 创意应用",
      "summary": "笔者观察到 Runway 发布 App Studio，在平台内提供无代码方式，用自然语言描述即可搭建生成图像、视频与音频的 AI 创意应用。对做游戏美术与过场资产的小型团队，这类工具正在把「原型资产生产」门槛进一步拉低。",
      "source": "Runway 官方",
      "date": "2026-10-28",
      "url": "https://runway.com",
      "image": "",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Runway",
        "创作工具",
        "无代码"
      ],
      "content": [
        {
          "title": "要点",
          "type": "list",
          "items": [
            "App Studio 用自然语言搭建 AI 创意应用；",
            "内置角色替换、自动合成、产品组合等模板；",
            "面向图像 / 视频 / 音频生成，包含在付费计划内。"
          ]
        },
        {
          "title": "笔者观察",
          "type": "text",
          "text": "无代码 AI 创作工具的扩散，意味着美术资产的概念验证越来越快。但它也带来新约束：风格一致性与版权边界，仍需创作者自己把关，工具只是加速器。"
        }
      ]
    },
    {
      "id": "contest-duoyi",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "校招",
      "title": "多益网络 2027 届秋招开启：程序、策划等岗位以职位页为准",
      "summary": "笔者提醒关注校招的新人：多益网络已开启 2027 届秋季提前批校招，官网明确展示程序、策划等岗位，具体届别与要求以官方职位页为准。对想进游戏研发的同学，这是一条正在开放的投递通道。",
      "source": "多益网络官网",
      "date": "2026-10-28",
      "url": "https://xz.duoyi.com",
      "image": "",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "校招",
        "多益",
        "招聘"
      ],
      "content": [
        {
          "title": "招聘要点",
          "type": "list",
          "items": [
            "多益网络开启 2027 届秋季提前批校招；",
            "官网展示程序、策划等岗位；",
            "具体届别与要求以官方职位页为准。"
          ]
        },
        {
          "title": "笔者的建议",
          "type": "text",
          "text": "校招季最忌「海投不看岗」。先对照岗位要求补齐作品集与项目经历，再精准投递，比广撒网更有效。本站新生入口也整理了比赛与招聘的时间线，可一并参考。"
        }
      ]
    },
    {
      "id": "contest-4399",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "招聘·校招",
      "tag": "校招",
      "title": "4399 游戏 2027 秋招进行中：研发、产品、运营、美术与职能方向",
      "summary": "笔者注意到 4399 游戏 2027 秋招正在进行，涵盖开发、产品、运营、美术、市场与职能方向，官方 FAQ 已明确 27 届毕业时间范围。对想进入平台型游戏公司的同学，这是一条可投递的通道。",
      "source": "4399 官方",
      "date": "2026-10-28",
      "url": "https://hr.4399om.com",
      "image": "",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "校招",
        "4399",
        "招聘"
      ],
      "content": [
        {
          "title": "招聘要点",
          "type": "list",
          "items": [
            "4399 游戏 2027 秋招涵盖研发 / 产品 / 运营 / 美术 / 职能；",
            "官方 FAQ 明确 27 届毕业时间范围；",
            "岗位与届别以官方系统为准。"
          ]
        },
        {
          "title": "笔者的建议",
          "type": "text",
          "text": "平台型公司与研发型公司的面试侧重不同：前者更看业务与数据感觉，后者更看工程深度。投递前先想清楚自己想做哪类游戏、进哪类团队。"
        }
      ]
    },
    {
      "id": "contest-ld56",
      "category": "contest",
      "categoryName": "杂项",
      "subcategory": "GameJam",
      "tag": "展示",
      "title": "Ludum Dare 56 结果公布：itch.io 精选「Tiny Creatures」主题佳作",
      "summary": "笔者关注到 itch.io 精选了 Ludum Dare 56 的亮点作品——这场 10 月初的双年展式 Game Jam 以「Tiny Creatures（微小生物）」为主题，48/72 小时产出大量创意小品。官网已公布结果，是观察极速原型能力的窗口。",
      "source": "itch.io / StartMyGame",
      "date": "2026-10-28",
      "url": "https://startmygame.com/itch-io-highlights-innovative-titles-from-ludum-dare-56-celebrating-tiny-creatures-theme",
      "image": "https://startmygame.com/wp-content/uploads/2026/08/itch-io-highlights-innovative-titles-from-ludum-dare-56-celebrating-tiny-creatures-theme.webp",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "GameJam",
        "Ludum Dare",
        "itch.io"
      ],
      "content": [
        {
          "title": "活动要点",
          "type": "list",
          "items": [
            "Ludum Dare 56 于 10 月初举办，主题「Tiny Creatures」；",
            "48 小时 Compo / 72 小时 Jam 双轨；",
            "itch.io 已精选并公布结果，可作灵感来源。"
          ]
        },
        {
          "title": "笔者的建议",
          "type": "text",
          "text": "Game Jam 的意义不只是拿奖，而是逼自己在极短时间里做出能玩的东西。新人想练手，最该参加的就是这类限时活动——它比任何教程都更能暴露你的真实短板。"
        }
      ]
    }
  ]
};