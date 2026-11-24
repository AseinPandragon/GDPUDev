window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-25",
    "weekday": "星期三",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-25 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "行业头条：腾讯「游点灵」启动百万 AI 游戏创作大赛，工具升级为 UGC 社区（hero）",
      "引擎精读：Godot 4.8 beta 5 收敛回归、O3DE 26.10 迁 Qt 6、horizOn 三端 SDK 加入道具互赠",
      "开源宝库：Claude-BugHunter 84 项漏洞技能、superpowers 智能体方法论、3A GameFactory-Motion 动作生成",
      "AI 前沿：GPT-6.2 Astra/Sol 进入游戏开发器、智谱 GLM-5.4 主打泛 Coding、腾讯 MagicDawn 开源 AI 光照",
      "游戏动态：《异人之下》定档 12/17、《幻梦无年》硬核拼刀上线、《异化之境》进抢先体验",
      "竞赛招聘：indiePlay 最高奖空缺、22.8 万开源游戏开发大赛、虎牙与完美世界 27 届校招"
    ],
    "engineStatus": [
      {
        "name": "Godot 4.8 beta 5",
        "type": "godot",
        "status": "回归修复收敛",
        "badge": "OSS",
        "color": "teal"
      },
      {
        "name": "O3DE 26.10",
        "type": "oss3d",
        "status": "编辑器迁 Qt 6",
        "badge": "OSS",
        "color": "orange"
      },
      {
        "name": "horizOn SDK",
        "type": "backend",
        "status": "三端道具互赠",
        "badge": "SDK",
        "color": "cyan"
      },
      {
        "name": "GPT-6.2 Astra",
        "type": "ai",
        "status": "AA-3D Elo 1318",
        "badge": "AI",
        "color": "violet"
      },
      {
        "name": "GLM-5.4",
        "type": "ai",
        "status": "Loop Transformer",
        "badge": "AI",
        "color": "blue"
      },
      {
        "name": "游点灵",
        "type": "platform",
        "status": "百万创作大赛",
        "badge": "AI",
        "color": "green"
      }
    ]
  },
  "hero": {
    "id": "hero-youling-ai-contest",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "腾讯 AI 创作平台",
    "subcategory": "大厂动向",
    "title": "腾讯「游点灵」掏百万办 AI 游戏创作大赛，作画的工具转成了社区",
    "summary": "腾讯自研 AI 游戏创作平台「游点灵」（原代号 Craft）11 月 24 日启动 AI 游戏创作大赛并投入百万奖金。平台能用自然语言生成 2D/3D 游戏，内置 4 万多件免费美术资产与可视化编辑器，制作人张健把它定位为创作者与用户直连的 UGC 社区。从「一句话出原型」到「有人来玩你的原型」，腾讯补上的是分发这一环；对零基础创作者，这比生成能力本身更关键。",
    "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-25-hero-youling.jpg",
    "source": "网易 / 游戏日报",
    "date": "2026-11-24",
    "url": "https://www.163.com/dy/article/LCHI6HFO052682V2.html",
    "readTime": 6,
    "hotScore": 95,
    "tags": [
      "游点灵",
      "腾讯",
      "AI 创作",
      "UGC",
      "创作大赛"
    ],
    "content": [
      {
        "title": "事件的几个关键点",
        "type": "list",
        "items": [
          "平台原名代号 Craft，11 月 24 日以「游点灵」身份启动百万创作大赛",
          "支持自然语言生成 2D/3D 游戏，浏览器内可运行",
          "内置 4 万多件免费美术资产与音频、模型、UI 的 AIGC 工具",
          "团队隶属腾讯游戏国内发行线生态发展部，此前做过轻游梦工坊"
        ]
      },
      {
        "title": "个人观察",
        "type": "text",
        "text": "AI 生成游戏的门槛已经被压得很低，真正的稀缺资源是玩家注意力。把工具和社区放在一起，让创作者的作品有人看到、作者能转身再做一个，这个闭环才是「游戏短视频时刻」能否成立的关键。对学生团队来说，把它当原型验证器用最划算，成品的关卡与手感仍得自己啃。"
      }
    ]
  },
  "items": [
    {
      "id": "en-godot48b5",
      "category": "engine",
      "subcategory": "引擎版本",
      "title": "Godot 4.8 beta 5 清掉发布阻断问题，Linux 麦克风延迟也降下来了",
      "summary": "Godot 基金会 11 月放出 4.8 周期第五个测试版，继续收敛 2D/3D 与编辑器的回归问题，并把 Linux PulseAudio 麦克风输入延迟对齐到输出水平，回滚了 Feral GameMode 集成以保稳定。节奏紧随 beta 4，仍在向 RC 推进。",
      "source": "Godot 官方博客",
      "date": "2026-11-24",
      "url": "https://godotengine.org/article/dev-snapshot-godot-4-8-beta-5",
      "image": "https://godotengine.org/storage/blog/covers/dev-snapshot-godot-4-8-beta-5.jpg",
      "badge": "Godot",
      "badgeType": "engine",
      "readTime": 4,
      "hotScore": 90,
      "tags": [
        "Godot",
        "4.8",
        "beta 5",
        "渲染",
        "开源引擎"
      ],
      "content": [
        {
          "title": "这次测试版改了什么",
          "type": "list",
          "items": [
            "回归修复覆盖 2D、3D 与编辑器子系统",
            "Linux PulseAudio 麦克风输入延迟对齐输出",
            "MetalFX 时序超采样的抖动偏移单位与符号修正",
            "回滚 Feral GameMode 集成以保证稳定"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "连续两个 beta 只做回归修复、不再塞新功能，是引擎进入稳定期的典型信号。给准备升级的团队一条务实建议：等 RC 出来再在副本工程上试，别在 beta 快照上动生产项目。"
        }
      ]
    },
    {
      "id": "en-o3de2610",
      "category": "engine",
      "subcategory": "引擎版本",
      "title": "O3DE 26.10 把编辑器搬到 Qt 6，苹果芯支持仍标实验性",
      "summary": "开放 3D 引擎 O3DE 于 11 月 20 日发布 2610.0，编辑器底层迁移到 Qt 6，新增开放式粒子系统预览、编辑器内 C++ 组件创建对话框，ROS 2 机器人仿真模块跟进 LTS 版本。苹果 Silicon 仅为实验支持，预编译包只给 Windows 与 Linux。",
      "source": "Renderu",
      "date": "2026-11-20",
      "url": "https://renderu.com/en/news/post/28946",
      "image": "https://st.renderu.com/og/902706",
      "badge": "O3DE",
      "badgeType": "engine",
      "readTime": 5,
      "hotScore": 88,
      "tags": [
        "O3DE",
        "Qt6",
        "ROS2",
        "粒子系统",
        "引擎更新"
      ],
      "content": [
        {
          "title": "版本要点",
          "type": "list",
          "items": [
            "编辑器迁移 Qt 6，自定义面板团队需重新核对",
            "Open Particle System 粒子模块为预览态，不建议进生产",
            "PhysX 4 与部分旧代码标记为弃用",
            "ROS 2 Lyrical Luth LTS 获得支持"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把 Qt 6 迁移和 PhysX 4 弃用放在一起看，升级成本集中在自研工具链和物理层。做机器人仿真的团队受益最大，纯游戏 VFX 可以先观望粒子模块转正。"
        }
      ]
    },
    {
      "id": "en-horizonsdk",
      "category": "engine",
      "subcategory": "引擎工具",
      "title": "horizOn 三端 SDK 同日更新，玩家互赠道具不再靠自己造轮子",
      "summary": "多人游戏后端 horizOn 于 11 月 16 日同步发布 Unity 1.13、Godot 1.12、Unreal 1.11 三套 SDK，配合 Server 1.78 加入道具互赠：服务端托管原件、七天未领自动退回、可配置手续费。聊天与回合走实时 socket，删除的项目密钥也能恢复。",
      "source": "horizOn 官方博客",
      "date": "2026-11-19",
      "url": "https://horizon.pm/blog/item-gifts-faster-chat-and-match-turns-and-restorable-api-keys-horizon-this-week",
      "image": "https://horizon.pm/api/v1/public/blog/item-gifts-faster-chat-and-match-turns-and-restorable-api-keys-horizon-this-week/image",
      "badge": "horizOn",
      "badgeType": "engine",
      "readTime": 5,
      "hotScore": 85,
      "tags": [
        "horizOn",
        "SDK",
        "道具交易",
        "多人游戏",
        "WebSocket"
      ],
      "content": [
        {
          "title": "这次更新的能力",
          "type": "list",
          "items": [
            "ItemGiftsManager/horizon.itemGifts/ItemGifts 三端各给一套",
            "拒绝与七天过期都把道具安全退回发送方",
            "聊天与回合行动走长连接，断线自动回退 HTTP",
            "Server 1.78 起可恢复误删的项目密钥"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "道具唯一性、掉线不吞单、防伪造是互赠系统最难的三件事。把这类状态一致性交给服务端托管，是小团队少踩坑的取舍，但要先看清各套餐的实时连接数上限。"
        }
      ]
    },
    {
      "id": "en-indietooling",
      "category": "engine",
      "subcategory": "引擎生态",
      "title": "17 款主流引擎横评表更新：把许可证与抽成摊开对比",
      "summary": "独立开发工具站 Indie Tooling 更新引擎对比表，逐行列出资费、抽成、许可证、可运行平台与最新稳定版，覆盖 Bevy、Defold、Flax、Fyrox、Godot 等 17 款引擎，并标注哪些可免费商用、哪些能导出主机。",
      "source": "Indie Tooling",
      "date": "2026-11-22",
      "url": "https://indietooling.com/compare/game-engines",
      "image": "https://indietooling.com/_astro/compare-game-engines.Dz6hpQ5z_2x5ahz.jpg",
      "badge": "引擎横评",
      "badgeType": "engine",
      "readTime": 5,
      "hotScore": 86,
      "tags": [
        "引擎选型",
        "许可证",
        "抽成",
        "商用",
        "独立开发"
      ],
      "content": [
        {
          "title": "横评覆盖的维度",
          "type": "list",
          "items": [
            "10 款完全免费且无抽成，含 Bevy、Fyrox、Defold",
            "7 款支持主机导出，含 Flax、Godot",
            "12 款可导出 Web，覆盖浏览器发行",
            "每款列出最新稳定版本号与编辑器运行平台"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "选引擎先看许可证和抽成、再看语言与平台，这个顺序对要商业化的学生团队尤其重要。Flax 超过 25 万美元营收抽 4% 这类条款，做预算时得提前算进去。"
        }
      ]
    },
    {
      "id": "en-estella",
      "category": "engine",
      "subcategory": "引擎生态",
      "title": "Estella 用 TypeScript SDK + WASM 内核，一套工程发多端",
      "summary": "开源引擎 esengine/estella 近期持续更新，主打 TypeScript SDK 配 C++/WebAssembly 核心与可视化编辑器，同一份工程可发布到 Web、桌面、微信小游戏、可玩广告及安卓/iOS 原生，本周在 GitHub 新增数百星。",
      "source": "GitHub: esengine/estella",
      "date": "2026-11-22",
      "url": "https://github.com/esengine/estella",
      "image": "https://opengraph.githubassets.com/1/esengine/estella",
      "badge": "Estella",
      "badgeType": "engine",
      "readTime": 4,
      "hotScore": 82,
      "tags": [
        "Estella",
        "TypeScript",
        "WebAssembly",
        "微信小游戏",
        "开源引擎"
      ],
      "content": [
        {
          "title": "项目特征",
          "type": "list",
          "items": [
            "TypeScript SDK + C++/WASM 内核 + 可视化编辑器",
            "一套工程覆盖 Web、桌面与微信小游戏",
            "Apache-2.0 许可，2D/3D 通用",
            "11 月 21 日仍有提交，社区活跃度上升"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "对已经熟 TypeScript 的前端开发者，这类引擎的门槛比 C++ 系低一大截。微信小游戏这套发布链尤其贴合国内学生团队，值得拿一个小 Demo 实测导出质量。"
        }
      ]
    },
    {
      "id": "en-playcanvas",
      "category": "engine",
      "subcategory": "WebGPU",
      "title": "PlayCanvas 引擎星标爬到 1.73 万，WebGPU 路线稳居第一梯队",
      "summary": "开源 Web 图形引擎 playcanvas/engine 星标增至约 1.73 万，近 90 天发版 5 次、贡献者 153 人，主打 WebGL/WebGPU/WebXR 与高斯泼溅渲染。对比同类 Web 引擎，它的发版节奏和社区健康度都排在前列。",
      "source": "GStars.dev",
      "date": "2026-11-21",
      "url": "https://www.gstars.dev/repo/playcanvas/engine",
      "image": "https://opengraph.githubassets.com/1/playcanvas/engine",
      "badge": "PlayCanvas",
      "badgeType": "engine",
      "readTime": 4,
      "hotScore": 83,
      "tags": [
        "PlayCanvas",
        "WebGPU",
        "高斯泼溅",
        "WebGL",
        "开源"
      ],
      "content": [
        {
          "title": "数据切片",
          "type": "list",
          "items": [
            "GitHub 星标约 17341， forks 约 2100",
            "近 90 天 5 次发版，最近一次在统计日前一天",
            "153 名贡献者，健康度评分在同类里靠前",
            "MIT 许可，商业使用无抽成"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "Web 引擎的竞争中，发版频率和贡献者数量比星标更能说明维护状态。做浏览器 3D 或 AR 原型的团队，可以把 PlayCanvas 放进候选名单实测一轮。"
        }
      ]
    },
    {
      "id": "in-cdpr-sony",
      "category": "industry",
      "subcategory": "大厂动向",
      "title": "CDPR 与索尼签新约，《巫师 4》营销与 PS Plus 一起打包",
      "summary": "CD Projekt RED 在 11 月 24 日发布的三季度财报中披露，与索尼互动娱乐签下新合作协议，覆盖旗下游戏登陆 PlayStation 平台与 PS Plus、以及《巫师 4》的营销推广。此前该公司更常与微软在《巫师 3》《赛博朋克 2077》上合作。",
      "source": "Wccftech",
      "date": "2026-11-24",
      "url": "https://wccftech.com/cd-projekt-red-sony-deal-the-witcher-4-marketing-playstation-plus",
      "image": "",
      "badge": "CDPR×Sony",
      "badgeType": "business",
      "readTime": 5,
      "hotScore": 92,
      "tags": [
        "CDPR",
        "索尼",
        "巫师4",
        "PS Plus",
        "发行合作"
      ],
      "content": [
        {
          "title": "签约要点",
          "type": "list",
          "items": [
            "11 月 24 日正式签署，随三季度财报披露",
            "涵盖 PS 平台与 PS Plus 订阅服务可用性",
            "《巫师 4》营销活动由双方协作",
            "开发支出升至约 4.17 亿美元，主要投在巫师4与赛博朋克2"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "在 3A 预算抬到 4 亿美元量级的背景下，头部工作室用平台营销合作摊薄风险正在成为常态。对开发者来说，读懂财报里的合作条款，比只看发售日更能判断一款长线项目的命运。"
        }
      ]
    },
    {
      "id": "in-sony-profit",
      "category": "industry",
      "subcategory": "财报动向",
      "title": "索尼游戏业务营业利润同比涨 83%，硬件下滑靠软件补",
      "summary": "索尼 2026 财年二季度游戏与网络服务部门营业利润从 1204 亿日元升至 2201 亿日元，同比增 83%。《漫威金刚狼》到 11 月 4 日售出 240 万份、《对马岛之魂》首月 330 万份，PS5 累计出货 9790 万台但新机增速放缓。",
      "source": "TechNewsReel",
      "date": "2026-11-24",
      "url": "https://technewsreel.com/gaming/sony-gaming-profits-jump-83-as-software-hits-offset-ps5-sales-slide",
      "image": "https://technewsreel.com/og/sony-gaming-profits-jump-83-as-software-hits-offset-ps5-sales-slide.png",
      "badge": "索尼",
      "badgeType": "business",
      "readTime": 4,
      "hotScore": 88,
      "tags": [
        "索尼",
        "财报",
        "PS5",
        "第一方游戏",
        "数字服务"
      ],
      "content": [
        {
          "title": "财报切片",
          "type": "list",
          "items": [
            "G&NS 营业利润 2201 亿日元，同比 +83%",
            "《漫威金刚狼》累计 240 万份",
            "PS5 累计出货 9790 万台，新机增速放缓",
            "计划 2028 年 1 月停止生产 PS 光盘"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "硬件周期后段靠第一方软件和数字服务拉利润，是主机平台的成熟打法。停造光盘这条线值得做发行和存档系统的团队提前留意介质形态的变化。"
        }
      ]
    },
    {
      "id": "in-taketwo",
      "category": "industry",
      "subcategory": "财报动向",
      "title": "Take-Two 三季度营收降 15.6%，GTA 6 首发把预期拉满",
      "summary": "Take-Two 最新财报显示季度营收 14.97 亿美元、同比降 15.6%，净亏损 5400 万美元。11 月 24 日股价收报 209.36 美元、微跌 0.3%。此前《GTA 6》首日零售额 37.9 亿美元，Wedbush 据此把目标价从 280 上调到 295 美元。",
      "source": "新浪财经",
      "date": "2026-11-24",
      "url": "https://finance.sina.com.cn/stock/usstock/notice/2026-11-24/doc-inizupfq7932693.shtml",
      "image": "",
      "badge": "Take-Two",
      "badgeType": "business",
      "readTime": 4,
      "hotScore": 85,
      "tags": [
        "Take-Two",
        "财报",
        "GTA6",
        "股价",
        "Rockstar"
      ],
      "content": [
        {
          "title": "关键数字",
          "type": "list",
          "items": [
            "季度营收 14.97 亿美元，同比 -15.6%",
            "净亏损 5400 万美元，较上年同期收窄",
            "11 月 24 日收跌 0.3%，市值约 392 亿美元",
            "Wedbush 目标价升至 295 美元"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "财报承压和单款超级大作爆发同时存在，说明头部发行商的成绩越来越被少数产品左右。看这类公司，得把「当期报表」和「Pipeline 预期」分开判断。"
        }
      ]
    },
    {
      "id": "in-yizu",
      "category": "industry",
      "subcategory": "资本市场",
      "title": "游族网络董事长提议回购股份，规模 2 亿至 4 亿元",
      "summary": "游族网络 11 月 24 日公告，董事长宛正提议以集中竞价方式回购 A 股，资金规模 2 亿至 4 亿元，计划用于股权激励或员工持股。公司强调目前仅为提议，回购方案仍需董事会审议，最终落地存在不确定性。",
      "source": "每日经济新闻",
      "date": "2026-11-24",
      "url": "https://www.nbd.com.cn/articles/2026-11-24/4657466.html",
      "image": "",
      "badge": "游族网络",
      "badgeType": "business",
      "readTime": 3,
      "hotScore": 80,
      "tags": [
        "游族网络",
        "股份回购",
        "股权激励",
        "A股"
      ],
      "content": [
        {
          "title": "公告要点",
          "type": "list",
          "items": [
            "回购资金 2 亿至 4 亿元，自有或自筹",
            "用途为股权激励或员工持股，非注销",
            "回购价不超董事会决议前 30 日均价 150%",
            "仅为董事长提议，仍需董事会审议"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "回购用于激励而非注销，对总股本没有直接缩减效果。读这类公告时把「提议」和「实施」分开，别把意向当成已经兑现的利好。"
        }
      ]
    },
    {
      "id": "in-halo",
      "category": "industry",
      "subcategory": "工作室重组",
      "title": "Xbox 把《光环》开发交给动视，Halo Studios 裁员 268 人",
      "summary": "Xbox 品牌 COO Matt Booty 在官网宣布工作室大重组：下一代《光环》交由动视新建团队负责，Halo Studios 裁员 268 人后缩为支持团队。Rare、World’s Edge 归入动视，Obsidian 由 Bethesda 接管，Turn 10 与 Playground 合并。",
      "source": "Episode Breakdown",
      "date": "2026-11-24",
      "url": "https://www.episodebreakdown.com/post/xbox-halo-activision-reorganization",
      "image": "",
      "badge": "Xbox",
      "badgeType": "business",
      "readTime": 5,
      "hotScore": 89,
      "tags": [
        "Xbox",
        "动视",
        "光环",
        "工作室重组",
        "裁员"
      ],
      "content": [
        {
          "title": "重组脉络",
          "type": "list",
          "items": [
            "下一代《光环》由动视专门新建团队开发",
            "Halo Studios 裁员 268 人，转为支持团队",
            "Rare 与 World’s Edge 划入动视，Obsidian 归 Bethesda",
            "Ninja Theory 面临关闭提案，Arkane 谈判延续到年底"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把核心 IP 从原班人马手里转给平台内其他工作室，是资产重心而非团队忠诚度的选择。对从业者，系列归属变化往往比一款新作发售更能决定岗位走向。"
        }
      ]
    },
    {
      "id": "in-gravitywell",
      "category": "industry",
      "subcategory": "工作室关停",
      "title": "前 Apex 核心成员创办的 Gravity Well 未发一作即进入休眠",
      "summary": "由前 Apex Legends 执行制作人 Drew McCoy 与首席工程师 Jon Shiring 创办的「反加班」工作室 Gravity Well，在失去资金且未找到新投资方后宣布进入休眠。此前一个月该工作室裁员 40 余人，称正在为生存而战。",
      "source": "PC Gamer",
      "date": "2026-11-24",
      "url": "https://www.pcgamer.com/uk/gaming-industry/studio-founded-by-former-apex-legends-leaders-is-closing-without-releasing-a-game/",
      "image": "https://cdn.mos.cms.futurecdn.net/38KyYr2LFKt4GnrNmQQhRC-2560-80.jpg",
      "badge": "Gravity Well",
      "badgeType": "business",
      "readTime": 4,
      "hotScore": 84,
      "tags": [
        "Gravity Well",
        "工作室关闭",
        "融资",
        "反加班",
        "Apex"
      ],
      "content": [
        {
          "title": "事件脉络",
          "type": "list",
          "items": [
            "2020 年由 Apex 与 CoD 老兵创办，主打反加班与创作自由",
            "2026 年失去资金，此前裁员 40 余人",
            "官网公告进入休眠，未发行任何作品",
            "向发行商与投资人开放联系，仍相信自有 IP"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "明星团队与良好福利并不能替代稳定现金流。学生团队做独立项目时，把「最坏情况下能撑多久」写进计划，比谈愿景更实际。"
        }
      ]
    },
    {
      "id": "ga-yiren",
      "category": "games",
      "subcategory": "新游定档",
      "title": "《异人之下》定档 12 月 17 日，4800 万预约压阵二次元跨年档",
      "summary": "腾讯魔方工作室 3D 格斗新作《异人之下》官宣 12 月 17 日全平台公测，邀请彭于晏代言，全网预约突破 4800 万。游戏保留无数值养成的公平切磋，加入 2v2 组排与剧情冒险模式，降低传统格斗门槛。",
      "source": "腾讯网",
      "date": "2026-11-24",
      "url": "https://new.qq.com/rain/a/20261124A0G5X500",
      "image": "",
      "badge": "异人之下",
      "badgeType": "game",
      "readTime": 4,
      "hotScore": 90,
      "tags": [
        "异人之下",
        "魔方工作室",
        "格斗",
        "定档",
        "二次元"
      ],
      "content": [
        {
          "title": "产品要点",
          "type": "list",
          "items": [
            "12 月 17 日全平台公测，预约破 4800 万",
            "无数值养成的公平切磋模式",
            "2v2 组排降低社交挫败感",
            "补强剧情与关卡驱动的 PVE 冒险模式"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "在硬核上限和大众化之间找平衡，是格斗品类扩圈的关键。切磋不加数值、用组队稀释挫败，这两处设计取舍值得做竞技匹配的同学拆开看。"
        }
      ]
    },
    {
      "id": "ga-huanmeng",
      "category": "games",
      "subcategory": "新游上线",
      "title": "《幻梦无年》上线：六年恐怖 IP 转身第三人称硬核拼刀",
      "summary": "成都嘉谊互娱的国风动作手游《幻梦无年》11 月 24 日 10 点上线，从此前「无尽噩梦」系列的中式恐怖解谜转向第三人称动作 RPG。战斗借鉴《只狼》的势场对峙与破势一击，移除复杂连招和体力条，全网预约超 50 万。",
      "source": "19 游戏网",
      "date": "2026-11-24",
      "url": "https://www.19yxw.com/Article/75813.html",
      "image": "",
      "badge": "幻梦无年",
      "badgeType": "game",
      "readTime": 4,
      "hotScore": 86,
      "tags": [
        "幻梦无年",
        "无尽噩梦",
        "只狼",
        "动作手游",
        "国风"
      ],
      "content": [
        {
          "title": "玩法转向",
          "type": "list",
          "items": [
            "第一人称恐怖解谜改为第三人称动作 RPG",
            "势场对峙→防御闪避→破势→一击制敌",
            "移除连招指令与体力条，压到时机判断",
            "上线解锁三档预约里程碑奖励"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把长线 IP 的核心氛围留住、只换玩法骨架，是降低转型风险的做法。砍掉体力条这种减负设计，对小团队做手感导向的动作游戏有参考价值。"
        }
      ]
    },
    {
      "id": "ga-yihua",
      "category": "games",
      "subcategory": "抢先体验",
      "title": "《异化之境》进 Steam 抢先体验，零件拼装机械是核心",
      "summary": "机械狂牛工作室独立开发发行的国产开放世界生存建造游戏《异化之境》11 月 24 日在 Steam 开启抢先体验并放出试玩 DEMO。玩家在核战后废土带肩载机器人伙伴采集建造，把轮子、座椅、推进器等部件自由拼成载具，抢先体验预计持续 2 至 3 年。",
      "source": "Steam / 17173",
      "date": "2026-11-24",
      "url": "https://news.17173.com/content/11242026/193119092.shtml",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5257810/2b4feb8f406c9dc2bf5c92fd545e7dc366b3c72b/header.jpg?t=1794492742",
      "badge": "异化之境",
      "badgeType": "game",
      "readTime": 4,
      "hotScore": 84,
      "tags": [
        "异化之境",
        "生存建造",
        "机械拼装",
        "Steam",
        "抢先体验"
      ],
      "content": [
        {
          "title": "玩法结构",
          "type": "list",
          "items": [
            "肩载机器人伙伴协助采集与搭建",
            "轮子/座椅/推进器等部件自由组合影响性能",
            "单人在线合作探索核战废土",
            "UI 美术素材开发期用生成式 AI 预制作，运行时不生成"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "官方明确区分「开发期 AI 预生成素材」与「运行时实时生成」，这种披露方式值得借鉴。物理拼装类玩法把部件参数直接映射到手感，是内容复用率很高的设计。"
        }
      ]
    },
    {
      "id": "ga-fooddevils",
      "category": "games",
      "subcategory": "抢先体验",
      "title": "《Food Devils》把战术 RPG 和模拟经营炖进一锅",
      "summary": "Studio Daimon 于 11 月 24 日将战术 RPG《Food Devils》推上 Steam 抢先体验，定价 19.99 美元并给首发 10% 折扣。玩家扮演末世最后的厨师，用怪物食材招揽冒险者签约远征，四个生物群系带来不同怪物与稀有材料，2027 年正式版。",
      "source": "Games Press",
      "date": "2026-11-24",
      "url": "https://www.gamespress.com/en-GB/Tactical-RPG-Gameplay-Spicy-Romance-and-Roguelike-Replayability-Combin",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/2861730/header.jpg",
      "badge": "Food Devils",
      "badgeType": "game",
      "readTime": 3,
      "hotScore": 80,
      "tags": [
        "Food Devils",
        "战术RPG",
        "Roguelite",
        "抢先体验",
        "模拟经营"
      ],
      "content": [
        {
          "title": "核心组合",
          "type": "list",
          "items": [
            "传统战棋加 Roguelite 成长",
            "餐厅装扮与角色养成互相影响吸引力",
            "四套生物群系各有怪物与掉落",
            "2027 年 1.0 路线图已随上线公布"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把经营和战斗两条循环接在同一资源上，能让玩家每一次远征都有明确动机。首发就把 1.0 路线图摊开，也是抢先体验项目稳定社区预期的常见做法。"
        }
      ]
    },
    {
      "id": "ga-recreoom",
      "category": "games",
      "subcategory": "新游上线",
      "title": "原版关服后，一人开发者重做《Rec Room》精神续作免费上线",
      "summary": "独立开发者 Thunderstorm Games 于 11 月 24 日在 Steam 抢先体验推出免费社交平台《Rec Room: A New Semester》，主打社区创作房间与完整 VR 支持，计划原生登陆 Steam Frame。原版 Rec Room 已于 2026 年 6 月 1 日关服，两者并无关联。",
      "source": "GPN Central",
      "date": "2026-11-24",
      "url": "https://gpncentral.com/article/751-rec-room-a-new-semester-launches-today-on-steam-a-free-vr-hangout",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4877420/6d88436778cc8e50fd67596e2d97e1e2977e6a5a/header.jpg?t=1789452258",
      "badge": "Rec Room: ANS",
      "badgeType": "game",
      "readTime": 5,
      "hotScore": 85,
      "tags": [
        "Rec Room",
        "VR",
        "UGC",
        "Steam Frame",
        "社交游戏"
      ],
      "content": [
        {
          "title": "产品定位",
          "type": "list",
          "items": [
            "免费游玩，抢先体验期间及之后暂无收费计划",
            "社区创作房间加 Creator Pen 自建工具",
            "支持 Quest、Index、Vive、PSVR2 等头显",
            "计划无需 PC 原生运行在 Steam Frame"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "UGC 社交平台的护城河是内容生态而非代码，一人开发者敢接这个盘子，靠的是现成社区的迁移需求。新手涉及此类项目，务必把版权与品牌边界写清楚——公告里就特别声明与原作无关。"
        }
      ]
    },
    {
      "id": "ga-jar",
      "category": "games",
      "subcategory": "新游上线",
      "title": "《Jar of Gnomes》把合成玩法做成 41 节点长期成长网",
      "summary": "Bartpirat Games 的休闲合成游戏《Jar of Gnomes》11 月 24 日进入 Steam 抢先体验。小精灵采集浆果投入魔法坩埚，两个同级果实合成更高级，收成熬成罐子后在地下村庄的 41 个节点里永久加点，每罐提供 +10% 收获。",
      "source": "Raids of Valor",
      "date": "2026-11-24",
      "url": "https://raidsofvalor.com/game/jar-of-gnomes",
      "image": "",
      "badge": "Jar of Gnomes",
      "badgeType": "game",
      "readTime": 3,
      "hotScore": 78,
      "tags": [
        "Jar of Gnomes",
        "合成玩法",
        "放置",
        "抢先体验",
        "Steam"
      ],
      "content": [
        {
          "title": "循环设计",
          "type": "list",
          "items": [
            "6x6 坩埚与 15 种果实、4 个品质等级",
            "收获转果酱，五工坊共 41 个永久节点",
            "每个历史果酱给 +10% 收获加成",
            "为 Steam Deck 1280x800 与手柄做适配"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "单局收成转成永久成长、每个历史产出都回流到下一局，这种双层循环是放置品类留存的关键。节点收益明码标注，减少玩家的决策焦虑。"
        }
      ]
    },
    {
      "id": "os-claudebughunter",
      "category": "opensource",
      "subcategory": "Agent 技能",
      "title": "Claude-BugHunter 把 84 项漏洞狩猎技能打包成开源插件",
      "summary": "GitHub 项目 elementalsouls/Claude-BugHunter 近期冲上热榜，把 84 项漏洞狩猎技能、15 条斜杠命令与横跨 24 类核心漏洞的 681 个已披露报告模式打包成 Claude Code 技能集，并提供企业身份与基础设施攻击矩阵。",
      "source": "GitHub: elementalsouls/Claude-BugHunter",
      "date": "2026-11-24",
      "url": "https://github.com/elementalsouls/Claude-BugHunter",
      "image": "https://opengraph.githubassets.com/1/elementalsouls/Claude-BugHunter",
      "badge": "BugHunter",
      "badgeType": "opensource",
      "readTime": 4,
      "hotScore": 86,
      "tags": [
        "Claude Code",
        "Agent 技能",
        "漏洞狩猎",
        "安全",
        "开源"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "84 项技能 + 15 条斜杠命令",
            "覆盖 24 类核心漏洞的 681 个报告模式",
            "含企业身份与基础设施攻击矩阵",
            "当日新增约 2029 星，总星标 2.04 万"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把领域经验沉淀成可复用的 Agent 技能包，正在成为开源新形态。做工具链的同学可以关注它的技能组织方式：按漏洞类型分子模块、把报告模式做成可检索资产。"
        }
      ]
    },
    {
      "id": "os-superpowers",
      "category": "opensource",
      "subcategory": "Agent 框架",
      "title": "superpowers 用一套技能方法论约束编码智能体",
      "summary": "obra/superpowers 是近期持续霸榜的智能体技能框架与软件开发方法论项目，把工程流程拆成可组合的技能，让编码智能体按既定方法执行。项目以 Shell 编写，星标约 32.5 万、forks 近 2.9 万。",
      "source": "GitHub: obra/superpowers",
      "date": "2026-11-24",
      "url": "https://github.com/obra/superpowers",
      "image": "https://opengraph.githubassets.com/1/obra/superpowers",
      "badge": "superpowers",
      "badgeType": "opensource",
      "readTime": 4,
      "hotScore": 84,
      "tags": [
        "superpowers",
        "Agent 框架",
        "技能方法论",
        "编码智能体",
        "开源"
      ],
      "content": [
        {
          "title": "项目特征",
          "type": "list",
          "items": [
            "把软件工程方法拆为可组合技能",
            "Shell 实现，星标约 32.5 万",
            "当日仍新增约 840 星",
            "强调方法论而非单一提示词"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "智能体能力的差距越来越多来自流程约束，而不是模型本身。给 AI 编码助手接入这类框架，等于补上「按什么步骤做事」的工程规范。"
        }
      ]
    },
    {
      "id": "os-last30days",
      "category": "opensource",
      "subcategory": "Agent 技能",
      "title": "last30days-skill 让智能体跨平台调研再给有依据的总结",
      "summary": "mvanhorn/last30days-skill 是一个 AI 智能体技能，能把任意主题在 Reddit、X、YouTube、Hacker News、Polymarket 与全网的信息按近 30 天汇总，并输出带出处的综述。项目当日新增约 797 星，总星标约 7.37 万。",
      "source": "GitHub: mvanhorn/last30days-skill",
      "date": "2026-11-24",
      "url": "https://github.com/mvanhorn/last30days-skill",
      "image": "https://opengraph.githubassets.com/1/mvanhorn/last30days-skill",
      "badge": "last30days",
      "badgeType": "opensource",
      "readTime": 3,
      "hotScore": 82,
      "tags": [
        "last30days",
        "Agent 技能",
        "信息调研",
        "RAG",
        "开源"
      ],
      "content": [
        {
          "title": "能力要点",
          "type": "list",
          "items": [
            "跨平台抓取近 30 天讨论与数据",
            "覆盖 Reddit、X、YouTube、HN、Polymarket",
            "输出带出处的综合摘要",
            "当日新增约 797 星"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把「检索—筛选—带引用综合」封装成技能，是把智能体用在情报工作上的典型范式。做技术观察类项目时，出处可追溯比文采更值钱。"
        }
      ]
    },
    {
      "id": "os-gamefactory3a",
      "category": "opensource",
      "subcategory": "3D 生成",
      "title": "3A GameFactory-Motion 让编码智能体生成可确定执行的骨骼与动作",
      "summary": "11 月 23 日发布的开源框架 3AGameFactory-Motion 让编码智能体产出紧凑的参数化骨骼与运动程序，再确定性执行完成绑定、运动学求解与几何修正。配套 DivDynBench 覆盖六种形态学，项目已接入 UE5、Blender、Unity、Godot 4 与 three.js。",
      "source": "Blockchain News / arXiv",
      "date": "2026-11-23",
      "url": "https://blockchainnewsuat.azurewebsites.net/news/3agamefactory-motion-agentic-rigging",
      "image": "https://opengraph.githubassets.com/1/OpenDCAI/GameFactory-3A",
      "badge": "GameFactory-3A",
      "badgeType": "opensource",
      "readTime": 5,
      "hotScore": 87,
      "tags": [
        "3AGameFactory",
        "动作生成",
        "骨骼绑定",
        "DivDynBench",
        "开源"
      ],
      "content": [
        {
          "title": "技术路线",
          "type": "list",
          "items": [
            "编码智能体生成参数化骨骼与动作程序",
            "确定性执行完成绑定与几何修正",
            "DivDynBench 覆盖六种形态与多阶段指令",
            "对比专用生成、视频恢复与智能体直生三条路线"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "让大模型写「程序」而不是直接吐「结果」，再用确定性执行兜底，是当前 3D 生成可靠性的主流解法。这个思路对做程序化动画的团队很实用。"
        }
      ]
    },
    {
      "id": "os-openvino",
      "category": "opensource",
      "subcategory": "推理部署",
      "title": "OpenVINO 把本地推理优化继续做成跨平台工具箱",
      "summary": "英特尔开源工具包 openvinotoolkit/openvino 持续更新，主打跨硬件的模型优化与部署，覆盖 CPU、GPU 与推理加速器。近期在 GitHub 热榜上保持稳定增长，是本地运行视觉与语言模型常用的底层组件。",
      "source": "GitHub: openvinotoolkit/openvino",
      "date": "2026-11-24",
      "url": "https://github.com/openvinotoolkit/openvino",
      "image": "https://opengraph.githubassets.com/1/openvinotoolkit/openvino",
      "badge": "OpenVINO",
      "badgeType": "opensource",
      "readTime": 3,
      "hotScore": 80,
      "tags": [
        "OpenVINO",
        "本地推理",
        "模型优化",
        "英特尔",
        "开源"
      ],
      "content": [
        {
          "title": "工具定位",
          "type": "list",
          "items": [
            "一套工具覆盖多类硬件的推理部署",
            "常用于本地视觉与语言模型加速",
            "C++ 实现，社区维护稳定",
            "GitHub 当日星标仍在增长"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "要在游戏里塞本地推理，绕不开跨硬件适配这一关。OpenVINO 这类中间层的价值，是让上层逻辑不必为每张显卡重写一套。"
        }
      ]
    },
    {
      "id": "os-raea",
      "category": "opensource",
      "subcategory": "渲染工具",
      "title": "raea 用 React 描述视频与 3D，本地 GPU 直接渲染",
      "summary": "开源项目 raea 用 Rust 引擎加 TypeScript SDK，让开发者用 React 组件描述视频、动效、3D 场景与游戏，并在本地 GPU 上渲染成 mp4、静帧或实时游玩。11 月 22 日发布 v0.1.9，星标約 4700，安装时会向 Claude 等智能体注入技能。",
      "source": "Archestack",
      "date": "2026-11-22",
      "url": "https://archestack.com/best-of-vibe-coding/projects/raea",
      "image": "https://archestack.com/og/best-of-vibe-coding/raea.png",
      "badge": "raea",
      "badgeType": "opensource",
      "readTime": 4,
      "hotScore": 83,
      "tags": [
        "raea",
        "React",
        "Rust",
        "本地渲染",
        "Agent 技能"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "一份 React/TS 描述可渲染视频、静帧或实时游戏",
            "raea check 自动标记裁切、低对比与卡顿",
            "无遥测，离线开关可彻底断网",
            "许可证为 FSL-1.1-ALv2，非 OSI 开源"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把「创作描述」和「渲染执行」解耦，让智能体负责前者、本地 GPU 负责后者，是 AI 创作工具的一条清晰路线。商用前一定核对许可证，它不是标准开源协议。"
        }
      ]
    },
    {
      "id": "tu-uicontrols",
      "category": "tutorials",
      "subcategory": "交互设计",
      "title": "Unity 官方讲清手机还是电脑：先定主设备再映射两套操作",
      "summary": "Unity 官方博客给出跨平台操控的规划顺序：先在设计简报写明最重要的设备，再把每个操作各写一遍触摸版与键鼠版，找出没有对应项的动作并补替代方案。文中引用 Xbox 无障碍指南，建议手机触摸目标至少 15 毫米见方。",
      "source": "Unity 官方博客",
      "date": "2026-11-20",
      "url": "https://unity.com/blog/video-game-controls-phone-or-computer",
      "image": "",
      "badge": "Unity",
      "badgeType": "tutorial",
      "readTime": 4,
      "hotScore": 82,
      "tags": [
        "Unity",
        "交互设计",
        "无障碍",
        "跨平台",
        "触控"
      ],
      "content": [
        {
          "title": "方法要点",
          "type": "list",
          "items": [
            "先定主设备，再检查其他设备能否运行",
            "每个操作映射触摸与键鼠两套",
            "捏合、悬停等无对应动作用按钮替代",
            "触摸目标至少 15 毫米见方并留间距"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "无障碍规范不是额外负担，而是跨平台适配的骨架。把「每个动作两套映射」做成检查表，能提前发现大量交互死角。"
        }
      ]
    },
    {
      "id": "tu-vscode",
      "category": "tutorials",
      "subcategory": "工程实践",
      "title": "Unity 谈 vibe coding：该自己写什么，该买什么托管基建",
      "summary": "Unity 官方博客讨论 AI 编码在工业 3D 工作流里的分工：LLM 擅长在已有作品之上加功能、做原型与编辑器工具，而 CAD 导入、资产管理、安全、版本控制与合规更适合托管基础设施。Unity CLI 提供命令与 Eval 入口，让智能体直接在编辑器执行 C#。",
      "source": "Unity 官方博客",
      "date": "2026-11-20",
      "url": "https://unity.com/blog/ai-vibe-coding-vs-buying-managed-infrastructure",
      "image": "",
      "badge": "Unity Industry",
      "badgeType": "tutorial",
      "readTime": 5,
      "hotScore": 86,
      "tags": [
        "Unity CLI",
        "vibe coding",
        "工程实践",
        "AI 编码",
        "托管基建"
      ],
      "content": [
        {
          "title": "分工建议",
          "type": "list",
          "items": [
            "AI 与 CLI 适合做原型、UI、编辑器工具与脚本",
            "托管基建负责 CAD 导入、资产、安全与多人协作",
            "AI 加速创作，但生产系统仍需测试与权限管理",
            "CLI 的 Eval 命令可在编辑器直接跑 C# 不重载域"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把「能快速生成」和「能长期维护」分开评估，是 AI 进入生产管线的分水岭。团队该先标出哪些是可替换表面、哪些是承重结构，再决定交给谁。"
        }
      ]
    },
    {
      "id": "tu-godotshader",
      "category": "tutorials",
      "subcategory": "着色器",
      "title": "20 分钟做三个 Godot 着色器：先认 shader_type 再谈效果",
      "summary": "一篇实战教程用三个案例带新手上手 Godot 着色器：canvas_item 管 2D、spatial 管 3D，节点在哪个世界就写哪种 shader_type。案例覆盖贴图边缘泛光与模型溶解，并给出 smoothstep、discard 与 hint_range 的具体写法。",
      "source": "编程知识（hqwc）",
      "date": "2026-11-22",
      "url": "https://www.hqwc.cn/a/1415348.html",
      "image": "",
      "badge": "Godot",
      "badgeType": "tutorial",
      "readTime": 5,
      "hotScore": 83,
      "tags": [
        "Godot",
        "着色器",
        "canvas_item",
        "spatial",
        " dissolution"
      ],
      "content": [
        {
          "title": "核心步骤",
          "type": "list",
          "items": [
            "canvas_item 输出 COLOR，spatial 输出 ALBEDO 等",
            "用 smoothstep 做贴图边缘泛光",
            "用噪声阈值加 discard 做溶解",
            "uniform 加 hint_range 方便在编辑器调参"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "大量「效果不出来」的问题根源是 shader_type 选错。先确认节点所在的世界，再动手写片元函数，能省掉大半调试时间。"
        }
      ]
    },
    {
      "id": "tu-gododdemos",
      "category": "tutorials",
      "subcategory": "示例项目",
      "title": "Godot 官方示例项目集：40+ 可运行 Demo 的正确读法",
      "summary": "一篇整理稿梳理 Godot 官方示例项目库的用法：2d/dodge_the_creeps 练移动与刷怪，3d/squash_the_creeps 看 3D 踩踏，navigation_mesh_chunks 演示大场景导航分块，sprite_shaders 提供十余种精灵着色器。读懂一个 Demo 只需看 project.godot、主场景 tscn 与脚本三处。",
      "source": "编程知识（hqwc）",
      "date": "2026-11-22",
      "url": "https://www.hqwc.cn/a/1888933.html",
      "image": "",
      "badge": "Godot",
      "badgeType": "tutorial",
      "readTime": 5,
      "hotScore": 82,
      "tags": [
        "Godot",
        "示例项目",
        "Demo",
        "学习路径",
        "GDScript"
      ],
      "content": [
        {
          "title": "推荐读法",
          "type": "list",
          "items": [
            "2D 反馈链短，先建「输入→移动→碰撞→反馈」手感",
            "3D 在 2D 概念上多出相机与坐标系",
            "只盯 project.godot、主场景与脚本三处",
            "sprite_shaders 收录水波、溶解、描边等效果"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "官方 Demo 不是拿来抄的成品，而是可运行的知识点索引。按「先跑起来、再看三处、最后改一行验证」的顺序，学习效率比通读源码高得多。"
        }
      ]
    },
    {
      "id": "tu-godotmat",
      "category": "tutorials",
      "subcategory": "3D 渲染",
      "title": "Godot 3D 材质进阶：ORM 通道打包与实例批处理的取舍",
      "summary": "一份 Godot 4.7 材质技能的公开文档整理了 PBR 实战约定：把 AO、粗糙度、金属度打进一张 RGB 的 ORM 贴图以省采样槽，金属度取值只留 0 或 1；共享材质直接改会波及所有实例，运行期特效要先 duplicate；远景材质用像素抖动淡出而非透明混合。",
      "source": "SkillMD",
      "date": "2026-11-22",
      "url": "https://skillmd.com/skills/gabrielmoreira/godot-3d-materials",
      "image": "",
      "badge": "Godot",
      "badgeType": "tutorial",
      "readTime": 5,
      "hotScore": 84,
      "tags": [
        "Godot",
        "PBR",
        "ORM",
        "材质",
        "实例化"
      ],
      "content": [
        {
          "title": "工程约定",
          "type": "list",
          "items": [
            "ORM 三通道合一，避免三张贴图打断批处理",
            "金属度保持 0/1，中间值只用于过渡脏污",
            "共享材质改前先复制，防止全局污染",
            "可见范围切换配合像素抖动做 LOD 淡出"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "材质优化的关键往往不在 shader 写得多巧，而在采样槽和批处理有没有被破坏。把这类约定写成团队清单，比靠个人记忆靠谱。"
        }
      ]
    },
    {
      "id": "tu-godotfx",
      "category": "tutorials",
      "subcategory": "着色器",
      "title": "Godot Spatial 着色器官方文档：先分清输出 ALBEDO 还是 COLOR",
      "summary": "Godot 官方文档把 Spatial 着色器定义为 3D 材质专用类型：它输出 ALBEDO、ROUGHNESS、METALLIC 等属性，还有可改顶点位置的 vertex() 阶段；与之相对，CanvasItem 管 2D 输出 COLOR。文档按渲染、光照、雾效逐项给出可用内置变量与函数。",
      "source": "Godot 官方文档",
      "date": "2026-11-23",
      "url": "https://docs.godotengine.org/en/stable/tutorials/shaders/shader_reference/spatial_shader.html",
      "image": "",
      "badge": "Godot",
      "badgeType": "tutorial",
      "readTime": 5,
      "hotScore": 81,
      "tags": [
        "Godot",
        "Shader",
        "粒子",
        "Vulkan",
        "风格化"
      ],
      "content": [
        {
          "title": "文档要点",
          "type": "list",
          "items": [
            "Spatial shader 挂在网格材质上，输出 ALBEDO 等属性",
            "比 CanvasItem 多一个可改顶点位置的 vertex() 阶段",
            "内置变量覆盖光照、雾效与屏幕纹理读取",
            "渲染模式可配置混合、剔除与光照模型"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "节点在哪个世界就写哪种 shader_type，这是大量「效果不出来」问题的根源。先读官方参考页确认可用输出，再去抄现成效果代码，调试效率会高很多。"
        }
      ]
    },
    {
      "id": "ai-gpt62dev",
      "category": "ai",
      "subcategory": "AI 开发工具",
      "title": "GPT-6.2 Astra 与 Sol 进入 AI 游戏开发器，AA-3D Elo 达 1318",
      "summary": "AI Game Developer 宣布 OpenAI 11 月 17 日发布的 GPT-6.2 Astra 与 Sol 已加入其模型列表。Astra 面向高难推理与视觉，AA-3D 交互 3D 基准 Elo 1318，上下文 92.2 万 token；Sol 主打高频代理任务，成本更低。两款均为 Standard 服务 class。",
      "source": "AI Game Developer",
      "date": "2026-11-24",
      "url": "https://ai-game.dev/blog/new-ai-models-gpt-6-2-astra-sol",
      "image": "https://ai-game.dev/blog/new-ai-models-gpt-6-2-astra-sol/hero.jpg",
      "badge": "OpenAI",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 92,
      "tags": [
        "GPT-6.2",
        "AI 游戏开发",
        "AA-3D",
        "Agent",
        "模型"
      ],
      "content": [
        {
          "title": "关键指标",
          "type": "list",
          "items": [
            "Astra 在 AA-3D 的 Elo 为 1318，领先 Fable 5.2",
            "上下文 92.2 万输入、单次最多输出 12.8 万 token",
            "Sol 在 FrontierCode 2.0 接近 Astra，成本更低",
            "GPT-6.2 系列不再提供 Flex class"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把模型能力放进具体游戏开发基准来看，比追通用排行榜更有意义。服务 class 从 Flex 改为 Standard，意味着同样额度能跑的 token 更少，预算得重算。"
        }
      ]
    },
    {
      "id": "ai-glm54",
      "category": "ai",
      "subcategory": "大模型",
      "title": "智谱 GLM-5.4 发布：28 层跑两遍，主打泛 Coding 与游戏 3D",
      "summary": "智谱 11 月 23 日发布 GLM-5.4，首个 Loop Transformer 旗舰，把 GLM-5 的 28 层权重共享跑两轮以加深推理而不增参数，规模约 750B。官方称智能水平对标 2T 至 3T 级模型，支持视觉与百万 token 上下文，演示覆盖完整游戏与 GLSL 3D 场景。",
      "source": "网易 / 新浪科技",
      "date": "2026-11-23",
      "url": "https://www.163.com/dy/article/LCEMLUDO05568W0A.html",
      "image": "",
      "badge": "智谱",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 91,
      "tags": [
        "GLM-5.4",
        "智谱",
        "Loop Transformer",
        "泛 Coding",
        "3D"
      ],
      "content": [
        {
          "title": "技术要点",
          "type": "list",
          "items": [
            "28 层共享权重循环两轮，不增加参数量",
            "逐 token 门控、混合 KV 缓存与稀疏注意力复用",
            "非高峰 200 token/s，高峰 70 至 80",
            "已向 GLM Coding Plan 用户开放，API 待安全评估"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "用「重复计算」换参数规模，是推理侧一条值得关注的路线，但它也可能陷入过长的思考循环。官方自述的局限写在发布信息里，这种坦白比只报喜讯更可信。"
        }
      ]
    },
    {
      "id": "ai-magicdawn",
      "category": "ai",
      "subcategory": "AI 渲染",
      "title": "腾讯 MagicDawn 把 AI 实时光照方案开源，适配新一代 Arm GPU",
      "summary": "腾讯在 2026 游戏发布会的「One More Thing」环节公布三款 AI 产品，其中 AI 渲染方案 MagicDawn 基于神经网络实时推理打破传统全局光照限制，已与 Arm 深度合作适配新一代 Arm GPU 与内置 AI 加速器，并宣布全面开源。",
      "source": "MTV Creative Content Collection",
      "date": "2026-11-24",
      "url": "https://mtvccc.com/716a756c2b.html",
      "image": "https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AA24ebbJ.img",
      "badge": "MagicDawn",
      "badgeType": "ai",
      "readTime": 4,
      "hotScore": 84,
      "tags": [
        "MagicDawn",
        "AI 渲染",
        "全局光照",
        "Arm",
        "开源"
      ],
      "content": [
        {
          "title": "方案要点",
          "type": "list",
          "items": [
            "神经网络实时推理替代传统全局光照",
            "与 Arm 合作适配新 GPU 与 AI 加速器",
            "可在移动端落地高质量 AI 渲染",
            "宣布全面开源"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把渲染方案开源，既能扩大生态也能验证技术信心。移动端 AI 光照能否兼顾功耗和画质，还得看真机落地，别只看发布会演示。"
        }
      ]
    },
    {
      "id": "ai-vibetools",
      "category": "ai",
      "subcategory": "工具清单",
      "title": "2026 独立开发者 AI 工具清单：从 NPC 对话到自动化 QA",
      "summary": "VibeStack Weekly 梳理当前面向独立开发者的 AI 工具谱系：Inworld、Convai 做 NPC 对话，Ludo.ai 与 PixelLab 做素材生成，Effigy、Hi3D 走本地 3D，nunu.ai 与 modl.ai 负责自动试玩与 QA，Strata 可把 UE 工程转成网页构建。",
      "source": "VibeStack Weekly",
      "date": "2026-11-24",
      "url": "https://vibestackweekly.com/best-ai-tools-for-game-devs",
      "image": "https://vibestackweekly.com/og-image.png",
      "badge": "AI 工具清单",
      "badgeType": "ai",
      "readTime": 6,
      "hotScore": 87,
      "tags": [
        "AI 工具",
        "NPC",
        "素材生成",
        "自动化QA",
        "独立开发"
      ],
      "content": [
        {
          "title": "工具分层",
          "type": "list",
          "items": [
            "对话与角色：Inworld、Convai",
            "美术与 3D：Ludo.ai、PixelLab、Effigy、Hi3D",
            "自动试玩与 QA：nunu.ai、modl.ai",
            "构建与发布：Strata、Playgama MCP"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "AI 工具已按环节形成分工，选型时先定位自己卡在哪个环节，再挑对应工具。清单类内容只做入口，实际能力还要看免费额度和代码导出限制。"
        }
      ]
    },
    {
      "id": "ai-convai",
      "category": "ai",
      "subcategory": "AI NPC",
      "title": "Convai 把 NPC 从「会聊天」推进到「会看会做」",
      "summary": "AI 工具资料站整理 Convai 2026 年的能力更新：Actions 3.0 引擎把「去找治疗药水并带回来」这类复合行为映射到自然语言命令，结合空间感知与视觉识别场景物体，并深度集成 NVIDIA ACE、Riva 与 Audio2Face，平均响应约 500 毫秒。",
      "source": "AI Tools Directory",
      "date": "2026-11-24",
      "url": "https://www.aitools-directory.com/tools/convai-interactive-npcs/",
      "image": "https://www.aitools-directory.com/wp-content/uploads/2026/03/convai1.png",
      "badge": "Convai",
      "badgeType": "ai",
      "readTime": 4,
      "hotScore": 80,
      "tags": [
        "Convai",
        "AI NPC",
        "空间感知",
        "NVIDIA ACE",
        "行为树"
      ],
      "content": [
        {
          "title": "能力拆解",
          "type": "list",
          "items": [
            "Actions 3.0 把复合行为映射到自然语言",
            "空间视觉可识别场景物体与方位",
            "Riva 语音与 Audio2Face 口型同步",
            "生成式对话与传统行为树混合以保任务不跑偏"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "让生成式对话和确定性行为树各管一段，是目前 AI NPC 落地的主流折中：聊天交给模型，是否执行动作交给游戏逻辑。延迟预算也要按 1.5 至 3 秒来设计交互节奏。"
        }
      ]
    },
    {
      "id": "ai-ainpc",
      "category": "ai",
      "subcategory": "工程实践",
      "title": "给 Unity 加 AI NPC：先接 stub 模型，再谈延迟与成本",
      "summary": "一篇 Unity AI NPC 架构指南给出务实顺序：先用假响应生成器把「感知—提示—校验—呈现」整条链路接通，再换真模型。云端语音回合通常 1.5 至 3 秒，建议设计成回合制或暂停对话；同时要缓存音频、用 JSON schema 约束输出、准备兜底台词与 Steam AI 披露。",
      "source": "创游未来",
      "date": "2026-11-24",
      "url": "https://chuangyouweilai.games/news/add-ai-npc-unity-game-2026-cv6dk",
      "image": "",
      "badge": "Unity AI NPC",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 83,
      "tags": [
        "AI NPC",
        "Unity",
        "延迟",
        "JSON Schema",
        "Steam 披露"
      ],
      "content": [
        {
          "title": "实践清单",
          "type": "list",
          "items": [
            "先用 stub 模型跑通整条链路",
            "推理放进协程，200 毫秒内给思考反馈",
            "JSON schema 约束输出并对照游戏状态校验",
            "缓存合成音频，备好降级台词与披露文档"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "把模型当成「不可信的叙述者」而不是权威，这条原则能规避大多数幻党和越权问题。成本与延迟要按最热门 NPC 的调用量来算，否则上线后账单会失控。"
        }
      ]
    },
    {
      "id": "co-indieplay",
      "category": "contest",
      "subcategory": "赛事结果",
      "title": "2026 indiePlay 最高奖空缺，700 款作品下的「什么算独立」之问",
      "summary": "第 12 届 indiePlay 中国独立游戏大赛 11 月 22 日在上海 WePlay 落幕，收到全球 30 多个国家和地区 700 余款报名，规模创新高。主办方 CiGA 宣布最高荣誉 indiePlay Award 空缺，创始人朱利辉称在 AI 让粗制滥造大量涌入、Steam 新品节作品暴涨十倍的环境下，更需要厘清标准。",
      "source": "网易 / CiGA",
      "date": "2026-11-22",
      "url": "https://www.163.com/dy/article/LCESBB96052688NB.html",
      "image": "",
      "badge": "indiePlay",
      "badgeType": "event",
      "readTime": 5,
      "hotScore": 90,
      "tags": [
        "indiePlay",
        "CiGA",
        "独立游戏",
        "WePlay",
        "赛事结果"
      ],
      "content": [
        {
          "title": "赛果要点",
          "type": "list",
          "items": [
            "700 余款报名来自 30 多个国家和地区",
            "最高奖 indiePlay Award 空缺",
            "11 个类别照常表彰，含最佳学生游戏与最佳 AI 游戏",
            "Steam 新品节参与数从约 700 涨到 7240"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "用一年空缺换取对创作本质的讨论，是对数量膨胀的一次强硬回应。学生团队参赛时，比起盯奖项，更该看入围作品在视觉、叙事与技术探索上的具体做法。"
        }
      ]
    },
    {
      "id": "co-gitcodejam",
      "category": "contest",
      "subcategory": "Game Jam",
      "title": "22.8 万元奖金的开源游戏开发大赛：11 月 27 日截止组队",
      "summary": "2026 开源游戏开发大赛由百度与温州臻龙建设投资集团联合主办，总奖金 22.8 万元。报名组队 11 月 14 日至 27 日，集中开发 11 月 21 日至 12 月 6 日，作品提交 12 月 6 日 23:59 截止，评审与结果公示延续到 12 月底，赛事官网为 2026gamejam.osgame.org。",
      "source": "GitCode / CSDN",
      "date": "2026-11-24",
      "url": "https://gitcode.csdn.net/6afe8ac7e5f4ca4eff9285a7.html",
      "image": "",
      "badge": "开源游戏开发大赛",
      "badgeType": "event",
      "readTime": 4,
      "hotScore": 84,
      "tags": [
        "Game Jam",
        "开源",
        "22.8万奖金",
        "报名",
        "学生"
      ],
      "content": [
        {
          "title": "赛程节点",
          "type": "list",
          "items": [
            "报名组队截至 11 月 27 日 23:59",
            "集中开发 11 月 21 日至 12 月 6 日",
            "作品 12 月 6 日 23:59 锁定评审版",
            "结果公示 12 月 21 日至 27 日"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "赛程把开发期压缩到 16 天，适合已有原型的团队冲一版。注意规则要求完成作品互评才有评奖资格，别把互评当成可跳过的流程。"
        }
      ]
    },
    {
      "id": "co-huya",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "虎牙 2027 届校招启动：多模态与大模型岗位密集开放",
      "summary": "虎牙科技 2027 届校园招聘正在进行，面向 2026 年 9 月至 2027 年 8 月毕业生，招聘大模型算法、多模态视频生成、AIGC 语音、图像算法、全栈与移动端开发等岗位，工作地点覆盖佛山、广州、深圳、上海与武汉，网申截至 12 月 31 日。",
      "source": "香港中文大学（深圳）就业网",
      "date": "2026-11-20",
      "url": "https://career.cuhk.edu.cn/job/view/id/470213",
      "image": "",
      "badge": "虎牙",
      "badgeType": "event",
      "readTime": 4,
      "hotScore": 80,
      "tags": [
        "虎牙",
        "2027校招",
        "大模型",
        "多模态",
        "招聘"
      ],
      "content": [
        {
          "title": "岗位与流程",
          "type": "list",
          "items": [
            "技术类含大模型、多模态视频与 AIGC 语音算法",
            "产品、运营、设计类同步开放",
            "面向 2027 届，每人限投两个岗位",
            "网申截至 12 月 31 日"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "游戏直播平台正把自己定位成「和 AI 一起玩游戏」的生态服务商，岗位结构也随之向算法倾斜。想进游戏行业的同学，可以把这类平台岗和技术岗一起放进备选。"
        }
      ]
    },
    {
      "id": "co-perfect",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "完美世界 27 届秋招岗位在招：关卡策划与 Unity 实习岗开放",
      "summary": "完美世界 27 届秋招持续放岗，关卡策划（MMO）要求有 MMORPG 深度体验、熟悉西方奇幻题材，会用 Lua 或 Python 者优先；另开放 27 届游戏开发实习生岗位，使用 Unity 引擎进行功能开发与自测。岗位信息来自企业官方招聘渠道聚合。",
      "source": "OfferSeek / BOSS 直聘",
      "date": "2026-11-24",
      "url": "https://offerseek.ai/jobs/79441",
      "image": "",
      "badge": "完美世界",
      "badgeType": "event",
      "readTime": 3,
      "hotScore": 78,
      "tags": [
        "完美世界",
        "27届校招",
        "关卡策划",
        "Unity",
        "招聘"
      ],
      "content": [
        {
          "title": "岗位画像",
          "type": "list",
          "items": [
            "关卡策划负责副本机制、怪物分布与难度曲线",
            "要求长期游玩至少一款 MMORPG",
            "会 Lua/Python 或编辑器配置者优先",
            "Unity 实习岗参与功能实现与自测"
          ]
        },
        {
          "title": "学习要点",
          "type": "text",
          "text": "策划岗把「游戏经历」写进硬性要求，说明厂商更看重真实体验而非纸面资历。学生投这类岗位时，用具体副本设计拆解代替空泛的「热爱游戏」更有说服力。"
        }
      ]
    }
  ]
};
