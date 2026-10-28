window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-10-29",
    "weekday": "星期四",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-10-29 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "Epic 把生成式 AI 写进 Unreal Engine 6 生产线：工程师「不再手写大部分代码」",
      "开源引擎密集迭代：Godot 4.7.2、Bevy 0.20.1、Defold 1.14.0 同日可抓",
      "AI 模型侧：Gemini 4 Carbon、Genie 4 世界模型、微软 Copilot Harness 齐发",
      "行业冷暖并存：Don't Nod 濒临破产、Capcom 财报亮眼、Ken Kutaragi 谈游戏现状",
      "新生友好：米哈游 / 网易雷火 / 叠纸 2027 校招进行中，可对照投递"
    ],
    "engineStatus": [
      {
        "name": "Godot 4.7.2-stable",
        "type": "godot",
        "status": "稳定版发布",
        "badge": "开源引擎",
        "color": "blue"
      },
      {
        "name": "Unreal Engine 6",
        "type": "unreal",
        "status": "genAI 写入管线",
        "badge": "商业引擎",
        "color": "violet"
      },
      {
        "name": "Bevy 0.20.1",
        "type": "bevy",
        "status": "ECS 补丁",
        "badge": "Rust 引擎",
        "color": "cyan"
      },
      {
        "name": "Defold 1.14.0",
        "type": "defold",
        "status": "免费接入 Xbox",
        "badge": "轻量引擎",
        "color": "emerald"
      },
      {
        "name": "OGRE 14.6.2",
        "type": "ogre",
        "status": "渲染内核更新",
        "badge": "C++ 引擎",
        "color": "orange"
      }
    ]
  },
  "hero": {
    "id": "engine-epic-genai-ue6",
    "category": "engine",
    "categoryName": "引擎前沿",
    "tag": "Epic / genAI",
    "title": "Epic 把生成式 AI 写进 Unreal Engine 6 生产线：工程师「不再手写大部分代码」",
    "summary": "笔者注意到 Eurogamer 于 10 月 28 日报道，Epic 在 Unreal Engine 6 与 Fortnite 的开发中进一步明确 genAI 定位——有工程师口径称「团队已不再手写大部分代码」。这并非一句营销话术，而是把 AI 从「辅助补全」升格为「生产管线的一环」，对引擎商与工作室的组织方式都是分水岭。",
    "image": "https://assetsio.gnwcdn.com/fortnite-save-the-world.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp",
    "source": "Eurogamer",
    "date": "2026-10-29",
    "url": "https://www.eurogamer.net/epic-genai-fortnite-unreal-engine-6-no-longer-writing-code",
    "readTime": "8 分钟",
    "hotScore": 95,
    "tags": [
      "Epic",
      "Unreal Engine 6",
      "genAI",
      "生产管线"
    ],
    "content": [
      {
        "title": "本次释放的信号",
        "type": "list",
        "items": [
          "Epic 称 genAI 已用于 Unreal Engine 6 与 Fortnite 的日常工作流；",
          "一线工程师口径：「团队已不再手写大部分代码」，强调 agentic AI 进入生产；",
          "态度转为「更担心动作太慢」，延续此前「AI 优先」的组织学转向。"
        ]
      },
      {
        "title": "笔者观察",
        "type": "text",
        "text": "这件事的真正分量在于「谁在写代码」被重新定义。对新生来说，引擎能力边界在快速外扩，但基础（图形、内存、架构、调试）并不会因 AI 而消失——恰恰相反，能看懂 AI 生成代码、能定位它埋下的坑，会比「会调 API」更值钱。把 AI 当协作者而非替代品，才是这条新闻最该吸收的学习姿态。"
      }
    ]
  },
  "items": [
    {
      "id": "engine-godot472",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Godot",
      "tag": "Godot",
      "title": "Godot 4.7.2-stable 发布：在 4.x 稳定线上继续修补渲染与编辑器",
      "summary": "笔者观察到 Godot 于 10 月下旬推出 4.7.2-stable，这是 4.x 稳定分支的累积维护版本，核心仍是渲染、动画与编辑器相关修复。对仍在使用稳定线的团队，这类补丁值得按变更日志逐项核对，而非盲目升级。",
      "source": "Godot 官方",
      "date": "2026-10-29",
      "url": "https://github.com/godotengine/godot/releases/tag/4.7.2-stable",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Godot",
        "4.7.2",
        "稳定版"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "4.7.2-stable 属于 4.x 稳定分支的累积补丁，主打稳定性与平台兼容性；",
              "官方 release notes 列出渲染、动画与编辑器相关修复；",
              "升级前应在测试工程比对变更，关注与现有渲染管线的兼容性。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Godot 的版本节奏稳，是新生练手的好选择：文档开源、社区活跃，出问题时能从源码与论坛两端追因。建议把「读 release notes」养成习惯，这比看二手教程更能建立对引擎演进的直觉。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/godotengine/godot"
    },
    {
      "id": "engine-bevy0201",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Bevy",
      "tag": "Bevy / Rust",
      "title": "Bevy 0.20.1 补丁：ECS 引擎在 0.20 线后的稳定性跟进",
      "summary": "笔者注意到 Bevy 在 0.20.0 之后放出 0.20.1 维护补丁，延续其 Rust + ECS 架构的迭代节奏。对偏好类型安全与数据导向设计的学习者，Bevy 仍是 WebAssembly 与原生两端都顺手的现代引擎样本。",
      "source": "Bevy 官方",
      "date": "2026-10-29",
      "url": "https://github.com/bevyengine/bevy/releases/tag/v0.20.1",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Bevy",
        "Rust",
        "ECS"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "0.20.1 是 0.20 主版本的维护性补丁，修复回归与稳定性问题；",
              "Bevy 坚持 ECS 架构，适合想理解数据导向设计的开发者；",
              "可编译到 WASM，便于在浏览器展示 Rust 游戏原型。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Bevy 的学习曲线在「Rust 所有权 + ECS 心智模型」两处，但只要跨过门槛，你会发现「系统只处理自己关心的数据」这种约束反而让大型项目更不易塌。新生若想理解现代引擎为什么都往 ECS 靠，Bevy 是比读论文更直观的入口。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/bevyengine/bevy"
    },
    {
      "id": "engine-defold140",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Defold",
      "tag": "Defold",
      "title": "Defold 1.14.0 发布：轻量引擎继续强化跨平台与主机支持",
      "summary": "笔者观察到 Defold 推出 1.14.0，延续其「轻量、免费、跨平台」的定位，并强化了对 Xbox 等主机的接入能力。对想做 2D 手游 / 轻量跨端项目的小团队，Defold 仍是低开销的务实选项。",
      "source": "Defold 官方",
      "date": "2026-10-29",
      "url": "https://github.com/defold/defold/releases/tag/1.14.0",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Defold",
        "1.14.0",
        "轻量引擎"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "1.14.0 在 1.14 线上继续累积修复与新特性；",
              "Defold 主打轻量与免费，适合 2D 与跨端小项目；",
              "本版强化主机（如 Xbox）接入，拓宽发布面。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Defold 的「克制」值得新生体会：它不追求面面俱到，而是把 2D 与跨端这条窄路做深。选型时先问「我的游戏长什么样」，再去匹配引擎，比追热点更省时间。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/defold/defold"
    },
    {
      "id": "engine-flax137012",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "Flax Engine",
      "tag": "Flax",
      "title": "Flax Engine 1.13.7012 迭代：C++ 与 C# 双脚本的轻量 3D 路线",
      "summary": "笔者注意到 Flax Engine 在 1.13 线继续推进到 1.13.7012，维持其「C++ 高性能 + C# 易用」的双脚本路线。对既想要原生性能、又不想全程手写 C++ 的团队，这种混合模型提供了折中。",
      "source": "Flax Engine 官方",
      "date": "2026-10-29",
      "url": "https://github.com/FlaxEngine/FlaxEngine/releases/tag/1.13.7012",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Flax",
        "C++",
        "C#"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Flax 支持 C++ 与 C# 双语言脚本，兼顾性能与开发效率；",
              "1.13.7012 为 1.13 线的累积维护版本；",
              "引擎体积小、启动快，适合中小型 3D 项目。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「热路径用 C++、逻辑用 C#」是很多商业项目的真实写法。新生可以从 Flax 这种双脚本设计里提前理解：性能关键处与迭代频繁处的语言选择，本身就是一种架构决策。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/FlaxEngine/FlaxEngine"
    },
    {
      "id": "engine-ogre1462",
      "category": "engine",
      "categoryName": "引擎前沿",
      "subcategory": "OGRE",
      "tag": "OGRE / 渲染",
      "title": "OGRE 14.6.2 发布：老牌 C++ 渲染引擎的内核维护",
      "summary": "笔者观察到 OGRE 推出 v14.6.2，作为成熟的开源 C++ 渲染引擎，它依旧是理解「场景图、渲染管线、材质系统」的优质底层样本。对想深入图形而不被引擎黑盒挡住的学习者，OGRE 的透明实现很有价值。",
      "source": "OGRE 官方",
      "date": "2026-10-29",
      "url": "https://github.com/OGRECave/ogre/releases/tag/v14.6.2",
      "readTime": "6 分钟",
      "hotScore": 82,
      "tags": [
        "OGRE",
        "C++",
        "渲染引擎"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "OGRE 是久经考验的开源 C++ 渲染引擎；",
              "v14.6.2 聚焦内核稳定性与渲染细节修复；",
              "其场景图与材质系统对理解图形管线很有帮助。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "在「引擎即黑盒」的时代，读 OGRE 这类代码能补上「画面到底怎么画出来的」那块拼图。新生不必从头造引擎，但懂一点底层，调 Unity/Unreal 的渲染设置时就不会只会照抄参数。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/OGRECave/ogre"
    },
    {
      "id": "industry-dontnod",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "厂商动态",
      "tag": "Don't Nod",
      "title": "Don't Nod 濒临破产：Life is Strange 工作室走到资不抵债边缘",
      "summary": "笔者注意到 Eurogamer 报道，《Life is Strange》开发商 Don't Nod 陷入资不抵债、濒临破产的境地。曾经靠叙事口碑立身的工作室，在多重项目与现金流压力下走到悬崖，再次提醒行业「叫好」与「能活」之间的鸿沟。",
      "source": "Eurogamer",
      "date": "2026-10-29",
      "url": "https://www.eurogamer.net/dont-nod-insolvency-life-is-strange-aphelion",
      "readTime": "7 分钟",
      "hotScore": 90,
      "tags": [
        "Don't Nod",
        "破产",
        "叙事游戏"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Don't Nod 因现金流与项目压力陷入资不抵债；",
              "代表作包括《Life is Strange》系列；",
              "报道强调「叙事口碑」未必能转化为稳健财务。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这则新闻对想进行业的新生很扎心也很有用：一款好游戏能带来声誉，却未必带来利润。理解「创意—生产—商业」这条链，比只盯玩法设计更贴近真实行业。把财务与发行也算进你的视野，是成熟的开始。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/lost-records-bloom-and-rage-a.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "industry-capcom-fin",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "财报",
      "tag": "Capcom",
      "title": "Capcom 财报亮眼：Onimusha 与 Pragmata 卖得好，但怪猎 Wilds 缺席",
      "summary": "笔者观察到 Capcom 最新财报中《Onimusha》与《Pragmata》表现亮眼，但《Monster Hunter Wilds》并未出现在重点名单。一边是新作接力，一边是旗舰系列的低调，反映出大厂在「守成」与「押注」之间的精细平衡。",
      "source": "Eurogamer",
      "date": "2026-10-29",
      "url": "https://www.eurogamer.net/capcom-financial-report-onimusha-sales-pragmata-monster-hunter-wilds",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "Capcom",
        "财报",
        "IP 运营"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Capcom 财报点名《Onimusha》《Pragmata》销售良好；",
              "《Monster Hunter Wilds》未列入重点，引发解读；",
              "财报是观察大厂资源倾斜的窗口。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "读财报是新生少做但极值得的事：它告诉你一家公司「钱从哪来、往哪投」。Capcom 这种靠少数长青 IP 滚动的公司，和靠年货续作的厂商，风险结构完全不同——这直接影响你将来去哪类团队。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/IMG_6379.JPG?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "industry-kutaragi",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "人物观点",
      "tag": "Ken Kutaragi",
      "title": "PlayStation 之父 Ken Kutaragi 谈游戏现状：做一台主机「几乎不可能」",
      "summary": "笔者注意到 GI.biz 刊出对 PlayStation 之父 Ken Kutaragi 的访谈，他感慨如今要集结数千人、耗费数年打造一台主机「几乎不可能」。这既是对硬件黄金年代的回望，也是对当今开发规模与协同成本的直白判断。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-29",
      "url": "https://www.gamesindustry.biz/taking-several-years-with-several-thousand-people-its-almost-impossible-playstation-creator-ken-kutaragi-on-the-current-state-of-gaming",
      "readTime": "7 分钟",
      "hotScore": 84,
      "tags": [
        "Ken Kutaragi",
        "PlayStation",
        "行业观点"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Kutaragi 回忆打造主机的年代规模与难度；",
              "他判断当下「数千人、数年做一台主机」几乎不可行；",
              "访谈折射出硬件与软件协同的复杂度跃升。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "前辈的感慨其实在说一件事：现代游戏是超大规模协作的产物。新生别被「一个人做游戏」的浪漫叙事误导——理解分工、文档、接口与流程，才是能在真实团队里创造价值的能力。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/Game-Republic-15-10-26-142_8Olw2Zm.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "industry-newzoo",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "市场数据",
      "tag": "Newzoo",
      "title": "Wardogs 登顶 Newzoo 九月 PC 收入榜：中厂也能撬动头部",
      "summary": "笔者观察到 GI.biz 引用 Newzoo 九月 PC 收入榜，《Wardogs》登上榜首。在大厂年货占据视野的常态下，一款中体量作品凭口碑与错位竞争跻身头部，说明 PC 市场的长尾依然有破局空间。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-29",
      "url": "https://www.gamesindustry.biz/wardogs-leads-newzoos-september-pc-revenue-charts",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Newzoo",
        "PC 市场",
        "Wardogs"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Newzoo 九月 PC 收入榜由《Wardogs》领跑；",
              "中体量作品靠口碑实现错位竞争；",
              "榜单是观察品类偏好的横截面。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "榜单不只是「谁卖得好」，更是「玩家此刻想要什么」的投票。新生做选题时，不妨先翻翻这类榜单，理解市场缺口在哪——你的练手项目若能对上真实需求，动力和收获都会更实。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/wardogs-preview-devourer-of-weekends-2266.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "industry-helenchiang",
      "category": "industry",
      "categoryName": "行业热点",
      "subcategory": "人事",
      "tag": "Xbox",
      "title": "Xbox 首任 COO Helen Chiang 上任三个月即离任：高管层再动荡",
      "summary": "笔者注意到 GI.biz 报道，Xbox 首位首席运营官 Helen Chiang 在上任仅三个月后离任。高层频繁变动往往牵动战略连贯性，也折射出平台方在内容、云与硬件之间寻找定位的持续摇摆。",
      "source": "GamesIndustry.biz",
      "date": "2026-10-29",
      "url": "https://www.gamesindustry.biz/first-xbox-coo-helen-chiang-leaves-company-after-three-months-in-the-role",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Xbox",
        "人事",
        "平台"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Helen Chiang 成为 Xbox 首任 COO 仅三个月后离任；",
              "高管变动影响战略连贯性；",
              "平台方仍在内容 / 云 / 硬件间寻找定位。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大厂的人事新闻看似离新生很远，其实暗藏信号：一家公司频繁换帅，说明它自己也在试错。对求职者而言，团队的「战略定力」和「方向清晰度」值得在面试时反向打听。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/Screenshot-2026-10-28-101114-(1).png?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "games-probablystolen",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新作曝光",
      "tag": "Probably Stolen",
      "title": "《Probably Stolen》曝光：在太空站里经营一个帮派横行的小卖部",
      "summary": "笔者注意到 RPS 介绍了《Probably Stolen》——一款以「在太空站经营小卖部」为核心的赛博朋克交易模拟游戏，背景里挤满帮派、巨企与秘密改造人。把日常买卖做成生存博弈，是个挺有意思的题材反转。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-29",
      "url": "https://www.rockpapershotgun.com/cyberpunk-trading-sim-probably-stolen-is-about-running-a-kiosk-in-a-space-station-full-of-gangs-megacorps-and-secret-rogue-cyborgs",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "Probably Stolen",
        "模拟",
        "赛博朋克"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "游戏核心是「太空站小卖部经营 + 交易模拟」；",
              "背景设定充满帮派、巨企与改造人冲突；",
              "题材把日常买卖翻转成生存博弈。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "这类游戏的设计亮点在「系统张力」：有限的货架、浮动的价格、危险的客户。新生若想做模拟类练手，不妨学它「用一个反差设定串起整套经济系统」的思路，比堆功能更抓人。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/Probably-Stolen.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "games-coh3-torch",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "DLC",
      "tag": "Company of Heroes 3",
      "title": "《英雄连 3》「火炬行动」DLC 11 月登陆北非：接续盟军登陆战线",
      "summary": "笔者观察到 RPS 报道，《Company of Heroes 3》的 Operation Torch DLC 将于 11 月上线，以二战盟军北非登陆为背景铺开新任务。对策略玩家，这是把真实战史转译为关卡设计的又一例。",
      "source": "Rock Paper Shotgun",
      "date": "2026-10-29",
      "url": "https://www.rockpapershotgun.com/company-of-heroes-3s-operation-torch-dlc-ships-off-to-north-africa-in-november-for-new-missions-based-around-the-allied-landings",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "英雄连3",
        "DLC",
        "策略"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Operation Torch DLC 以盟军北非登陆为题材；",
              "11 月上线，新增围绕登陆战的任务；",
              "战史被转译为策略关卡。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "二战题材常年不衰，关键在于「如何用机制讲历史」而不是贴皮。新生做历史/题材向项目时，应先想清楚：这段历史最独特的张力是什么？把它变成玩家每回合的抉择，话题度自然来。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/company-of-heroes-3-operation-torch-01.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "games-alieniso2",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新作动态",
      "tag": "Alien: Isolation 2",
      "title": "《Alien: Isolation 2》承诺推出实体版：「忠于 Alien 的模拟质感」",
      "summary": "笔者注意到 Eurogamer 报道，《Alien: Isolation 2》开发方承诺推出实体版本，并称「忠于 Alien 的模拟（analogue）质感」是他们的一根支柱。在全面数字化的当下，实体版的坚持更像一种设计态度的宣示。",
      "source": "Eurogamer",
      "date": "2026-10-29",
      "url": "https://www.eurogamer.net/alien-isolation-2-commit-physical-edition",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "Alien",
        "生存恐怖",
        "实体版"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "续作确认推出实体版本；",
              "开发方强调「模拟质感」是核心支柱；",
              "实体介质的坚持被视为设计态度。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「模拟质感」四个字值得新生琢磨：它指的是用规则与系统去逼近真实恐惧，而非靠脚本吓人。做氛围类游戏，先把「玩家为什么会怕」拆成可设计的变量，比堆jump scare高级得多。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/boo.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "games-cyberpunk2-mp",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "新作动态",
      "tag": "Cyberpunk 2",
      "title": "《赛博朋克 2》或引入多人：CDPR 据称推翻了 2077 砍掉的那条线",
      "summary": "笔者观察到 Eurogamer 报道，CD Projekt Red 在《赛博朋克 2077》中放弃的多人要素，可能在续作《Cyberpunk 2》里被重新考虑。从「先单后多」到「原生考虑联机」，反映出开放世界 RPG 对社交层的重新估值。",
      "source": "Eurogamer",
      "date": "2026-10-29",
      "url": "https://www.eurogamer.net/cyberpunk-2077-multiplayer-quests-cd-projekt-red",
      "readTime": "6 分钟",
      "hotScore": 88,
      "tags": [
        "Cyberpunk 2",
        "CDPR",
        "多人"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "2077 曾砍掉多人要素，续作或重新纳入考量；",
              "报道以「据称 / 内部讨论」口径呈现；",
              "开放世界 RPG 正在重新评估社交层价值。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "大作的决策反复很正常：技术 readiness、玩家预期、商业模式都在变。新生读这类传闻要分清「已确认」与「在讨论」——把一手原文的措辞读准，比追结论更重要。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/Johnny-Silverhand-and-female-V-sitting-in-a-car-looking-at-each-other-in-Cyberpunk-2077.jpg?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "games-dow4",
      "category": "games",
      "categoryName": "热门游戏",
      "subcategory": "评测前瞻",
      "tag": "Dawn of War 4",
      "title": "《战锤 40K：战争黎明 4》前瞻：被称「近年最慷慨的 RTS」",
      "summary": "笔者注意到 Eurogamer 的《Dawn of War 4》前瞻称其可能是「近年最慷慨的 RTS」——在内容量与可玩性之间给得大方。RTS 品类近年沉寂，这类评价也折射出玩家对「有料、耐玩」策略游戏的渴求。",
      "source": "Eurogamer",
      "date": "2026-10-29",
      "url": "https://www.eurogamer.net/dawn-of-war-4-preview-most-generous-rts",
      "readTime": "6 分钟",
      "hotScore": 85,
      "tags": [
        "战争黎明4",
        "RTS",
        "前瞻"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "前瞻评价《Dawn of War 4》内容慷慨；",
              "RTS 品类近年整体沉寂；",
              "「耐玩」成为策略玩家的核心诉求。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "RTS 的回潮对新生是机会：它在单位、资源、地形、AI 上几乎涵盖游戏 AI 的全谱。想练「系统与平衡」手感，从一款 RTS 抄机制、改数值，比从零造开放世界更聚焦。"
        }
      ],
      "image": "https://assetsio.gnwcdn.com/dow-4-preview-header.png?width=1200&height=630&fit=crop&enable=upscale&auto=webp"
    },
    {
      "id": "os-jolt560",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "物理引擎",
      "tag": "JoltPhysics",
      "title": "JoltPhysics v5.6.0 发布：跨平台刚体物理的高性能选择",
      "summary": "笔者观察到 JoltPhysics 推出 v5.6.0，这是一个用 C++ 编写、注重确定性与性能的跨平台刚体物理库，已被多家商业项目采用。对想给游戏接稳定物理、又不想被大引擎绑死的学习者，它是清晰的独立选项。",
      "source": "JoltPhysics (GitHub)",
      "date": "2026-10-29",
      "url": "https://github.com/jrouwe/JoltPhysics/releases/tag/v5.6.0",
      "readTime": "6 分钟",
      "hotScore": 86,
      "tags": [
        "JoltPhysics",
        "物理",
        "C++"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Jolt 是注重确定性与性能的 C++ 刚体物理库；",
              "v5.6.0 为近期维护版本；",
              "以独立库形态被多款商业项目采用。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "物理是「看起来简单、做起来深」的典型。新生读 Jolt 这类库的文档，能学到碰撞、约束、求解器这些底层概念——它们是所有游戏「手感」的幕后。理解了物理，调出来的跳跃和撞击才不飘。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/jrouwe/JoltPhysics"
    },
    {
      "id": "os-urho3d190",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "引擎",
      "tag": "Urho3D",
      "title": "Urho3D 1.9.0 发布：轻量跨平台引擎的长期维护成果",
      "summary": "笔者注意到 Urho3D 推出 1.9.0，作为一款轻量、跨平台、源码透明的 C++ 引擎，它适合想从零理解「渲染 + 场景 + 物理」一体化实现的学习者。社区驱动的长期维护，本身就是开源韧性的样本。",
      "source": "Urho3D (GitHub)",
      "date": "2026-10-29",
      "url": "https://github.com/urho3d/urho3d/releases/tag/1.9.0",
      "readTime": "5 分钟",
      "hotScore": 83,
      "tags": [
        "Urho3D",
        "C++",
        "轻量引擎"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Urho3D 是轻量、跨平台、源码透明的 C++ 引擎；",
              "1.9.0 是社区长期维护的里程碑；",
              "一体化覆盖渲染、场景与物理。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "读完整小引擎的代码，是建立「引擎到底由哪些子系统拼成」认知的捷径。新生别怕代码量大，挑一个子系统（比如场景管理）顺着读，比泛读十篇科普更有穿透力。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/urho3d/urho3d"
    },
    {
      "id": "os-armory2602",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "引擎",
      "tag": "Armory3D",
      "title": "Armory3D 26.02 迭代：Blender 内嵌的实时 3D 引擎",
      "summary": "笔者观察到 Armory3D 推进到 26.02，它最特别之处是直接内嵌于 Blender，让美术与逻辑在同一界面流转。对习惯 Blender 工作流、又想做实时交互的学习者，这种「DCC 即引擎」的整合很有吸引力。",
      "source": "Armory3D (GitHub)",
      "date": "2026-10-29",
      "url": "https://github.com/armory3d/armory/releases/tag/26.02",
      "readTime": "5 分钟",
      "hotScore": 82,
      "tags": [
        "Armory3D",
        "Blender",
        "实时3D"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Armory3D 内嵌于 Blender，美术与逻辑同界面；",
              "26.02 为近期迭代版本；",
              "「DCC 即引擎」降低工具切换成本。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "工具链的整合度，往往决定小团队的效率上限。新生若主用 Blender，Armory 能让你少装一套环境就跑起交互原型——先跑通，再谈精致，是务实的成长顺序。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/armory3d/armory"
    },
    {
      "id": "os-panda3d11016",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "引擎",
      "tag": "Panda3D",
      "title": "Panda3D v1.10.16 维护：迪士尼血脉的 Python 3D 引擎",
      "summary": "笔者注意到 Panda3D 推出 v1.10.16 维护版本，这款源自迪士尼、以 Python 为主力的 3D 引擎，依旧是「想用脚本快速搭 3D 场景」的友好选择。对熟悉 Python 的新生，它是比 C++ 引擎更平缓的入口。",
      "source": "Panda3D (GitHub)",
      "date": "2026-10-29",
      "url": "https://github.com/panda3d/panda3d/releases/tag/v1.10.16",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Panda3D",
        "Python",
        "3D引擎"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Panda3D 源自迪士尼，主打 Python 脚本开发；",
              "v1.10.16 为稳定线维护版本；",
              "对 Python 用户是平缓的 3D 入门。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "用 Python 写游戏逻辑，坏处是性能天花板更早到来，好处是迭代极快、心智负担低。新生完全可以用 Panda3D 先把「游戏循环、场景图、碰撞」这些概念跑熟，再决定是否下沉到 C++。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/panda3d/panda3d"
    },
    {
      "id": "os-diligent256",
      "category": "opensource",
      "categoryName": "开源宝库",
      "subcategory": "图形",
      "tag": "DiligentEngine",
      "title": "DiligentEngine v2.5.6 发布：跨图形 API 的渲染抽象层",
      "summary": "笔者观察到 DiligentEngine 推出 v2.5.6，它提供对 Direct3D12 / Vulkan / OpenGL / Metal 等后端的统一抽象，适合想理解「一套代码适配多图形 API」的进阶学习者。这类薄抽象层，是引擎与驱动之间的关键缓冲。",
      "source": "DiligentEngine (GitHub)",
      "date": "2026-10-29",
      "url": "https://github.com/DiligentGraphics/DiligentEngine/releases/tag/v2.5.6",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "DiligentEngine",
        "图形API",
        "渲染"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Diligent 统一抽象 D3D12 / Vulkan / OpenGL / Metal；",
              "v2.5.6 为近期维护版本；",
              "抽象层位于引擎与图形驱动之间。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "跨 API 抽象是图形程序员的硬功夫。新生不必现在就啃，但要知道：你调用的每个「画一个三角形」，背后都经过一层层后端翻译。理解这层，排错时才不会卡在「为什么这台机器黑屏」。"
        }
      ],
      "image": "https://opengraph.githubassets.com/1/DiligentGraphics/DiligentEngine"
    },
    {
      "id": "ai-gemini-immersive",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "产品 / 应用",
      "tag": "Gemini",
      "title": "Google 推出 Gemini「沉浸式探索」：把知识变成可交互的视觉漫游",
      "summary": "笔者注意到 Google 在 Gemini 中上线了「Immersive Explorations（沉浸式探索）」，它用层层可展开的视觉场景讲解一个主题，例如丝绸之路、喷气发动机、闪电的逐层结构，并支持多种语言。对游戏开发者，这像是「用交互体验替代静态图文」的又一次示范。",
      "source": "Google Workspace 更新博客",
      "date": "2026-10-29",
      "url": "https://workspaceupdates.googleblog.com/2026",
      "readTime": "6 分钟",
      "hotScore": 90,
      "tags": [
        "Gemini",
        "交互学习",
        "可视化"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Gemini 新增「沉浸式探索」交互模式；",
              "以可逐层展开的视觉场景讲解主题（如丝绸之路、喷气发动机、闪电）；",
              "支持多种语言，面向更直观的知识获取。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "它给新生的启发是：学习不一定要读长文。把抽象概念做成「可点击、可旋转、可放大」的体验，正是游戏化学习的强项。想做教育类游戏或交互教程的同学，可以把它当对标样本。"
        }
      ],
      "image": "https://storage.googleapis.com/gweb-workspace-assets/uploads/7uffzv9dk4sn-12u8F33yMpGrJ47b1JYGhI-736f5142ccb97caf0bd51159e678952c-Google_Workspace_Product_5-Icon_Lockup.svg"
    },
    {
      "id": "ai-genie4",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "世界模型",
      "tag": "Genie 4",
      "title": "Google DeepMind Genie 4：实时生成带对话与音效的可玩 3D 世界",
      "summary": "笔者观察到多家媒体跟进，Google DeepMind 的 Genie 4 能逐帧实时生成可交互 3D 世界，并首次加入同步背景音、角色对话与 Gemini 引导事件。它仍是研究预览，但「文字改世界」的范式，对游戏原型与关卡草图意义不小。",
      "source": "H-FARM AI Newsletter",
      "date": "2026-10-29",
      "url": "https://newsletter.h-farm.ai/p/google-deepmind-s-genie-4-builds-playable-3d-worlds",
      "readTime": "7 分钟",
      "hotScore": 92,
      "tags": [
        "Genie 4",
        "世界模型",
        "DeepMind"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Genie 4 实时生成可交互 3D 世界；",
              "新增同步音效、角色对话与事件引导；",
              "仍处研究预览，面向可信测试者。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Genie 4 最直接的价值，是给开发者一个「先把世界跑起来再细化」的草图工具。新生可以把它想成超强版的灰盒（grey-box）阶段——它能压缩从想法到可玩之间的那段最贵的试错。但落地品质，仍要靠人把关。"
        }
      ],
      "image": "https://beehiiv-images-production.s3.amazonaws.com/uploads/asset/file/ab22e653-7e98-421a-b0ec-39aae299e108/image.png?t=1793207315"
    },
    {
      "id": "ai-benchmarks",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "榜单",
      "tag": "Benchmarks",
      "title": "AI 模型榜单 10-28：前沿模型价格战与能力差距同步收窄",
      "summary": "笔者注意到 10 月 28 日的 AI 基准盘点显示，闭源与开源模型差距继续缩小，主要实验室近月集体降价最高约八成。对依赖模型能力的应用层来说，选型正从「追最强」转向「看性价比与可控性」。",
      "source": "Crew Signals",
      "date": "2026-10-29",
      "url": "https://crew.you/signals/ai-benchmarks-leaderboard/96c64ad5-e1a4-4feb-b1e7-97604bb48ec6",
      "readTime": "6 分钟",
      "hotScore": 84,
      "tags": [
        "AI 榜单",
        "性价比",
        "开源"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "10-28 榜单显示闭源与开源差距继续缩小；",
              "主要实验室近月集体降价最高约八成；",
              "选型从「追最强」转向「看性价比」。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "模型降价对独立开发者是实打实的好消息：以前跑不起的 agent 流程，现在能试了。新生做 AI 功能时，别只盯着排行榜第一，把「单价 × 调用次数 × 容错成本」算进预算，项目才跑得动。"
        }
      ],
      "image": "https://crew.you/api/signals/og/96c64ad5-e1a4-4feb-b1e7-97604bb48ec6"
    },
    {
      "id": "ai-copilotharness",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "智能体基建",
      "tag": "Microsoft",
      "title": "微软开放 Copilot Harness：把「多模型编排层」交给开发者",
      "summary": "笔者观察到微软于 10 月 28 日宣布通过 Microsoft Foundry 开放 Copilot Harness——即驱动 Copilot Code / VS Code 等多产品的多模型编排层。它负责 agent 循环、沙箱与治理，开发者只需带自己的指令、工具与模型选择。",
      "source": "Microsoft Blog",
      "date": "2026-10-29",
      "url": "https://blogs.microsoft.com/blog/2026/10/28/introducing-the-microsoft-copilot-harness-unlocking-the-potential-of-truly-multi-model-agentic-work/",
      "readTime": "7 分钟",
      "hotScore": 88,
      "tags": [
        "Copilot Harness",
        "多模型",
        "智能体"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "微软开放 Copilot Harness 给开发者与企业在 Foundry 上使用；",
              "它管理 agent 循环、沙箱与治理；",
              "支持 20+ 前沿模型与 MCP 等开放标准。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "「模型提供智能，harness 提供围绕模型的一切」——这句话值得新生记牢。未来做 AI 应用，拼的不是谁调的模型新，而是谁把上下文、工具、执行环境与边界管得好。把编排当产品来设计，是更高阶的能力。"
        }
      ],
      "image": "https://blogs.microsoft.com/wp-content/uploads/2026/10/OMB-CoreAI-Hero-Final-10_28-1024x576.png"
    },
    {
      "id": "ai-gemini4carbon",
      "category": "ai",
      "categoryName": "AI前沿",
      "subcategory": "前沿模型",
      "tag": "Gemini 4 Carbon",
      "title": "Gemini 4 Carbon 发布：以网络安全与长程任务见长，先给受控防守方",
      "summary": "笔者注意到 Google 于 10 月 28 日推出 Gemini 4 Carbon，称其为当前最强模型，主打网络安全与长程 agentic 任务，在 SEC-bench Pro 等基准领先，但采取「先给受控网络防御者、再逐步扩大」的谨慎发布。双刃能力决定了分阶段开放。",
      "source": "Google Blog",
      "date": "2026-10-29",
      "url": "https://blog.google/innovation-and-ai/models-and-research/gemini-models/introducing-gemini-4-carbon/",
      "readTime": "7 分钟",
      "hotScore": 91,
      "tags": [
        "Gemini 4 Carbon",
        "网络安全",
        "长程任务"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Gemini 4 Carbon 主打网络安全与长程任务；",
              "在 SEC-bench Pro 等基准表现领先；",
              "采取「先防守方、后扩大」的受控发布。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "Carbon 的发布方式本身就是一课：能力越强，越要先想清楚「给谁用、怎么兜底」。新生做 AI 功能时，也该有这种分阶段意识——先把高风险场景关进受控环境，再谈开放，比一口气全放开稳妥。"
        }
      ],
      "image": "https://storage.googleapis.com/gweb-uniblog-publish-prod/images/gemini_carbon_102726_social_share.width-1300.png"
    },
    {
      "id": "tut-danielilett",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "Shader",
      "tag": "Godot Shader",
      "title": "Daniel Ilett《你的第一个 Godot 着色器》：从变色到溶解效果的渐进教程",
      "summary": "笔者推荐 Daniel Ilett 于 2026 年 10 月开写的 Godot 着色器系列首篇，从最基础的「让物体变色」讲起，逐步带领做出 dissolve、卡通描边与水波等效果。对新手，这是把 GPU 编程从黑盒变成可上手操作的优质起点。",
      "source": "Daniel Ilett",
      "date": "2026-10-29",
      "url": "https://www.danielilett.com/2026-10-01-gdbasics-1-your-first-shader",
      "readTime": "8 分钟",
      "hotScore": 85,
      "tags": [
        "Godot",
        "Shader",
        "入门"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "系列从「写第一个着色器」开始；",
              "逐步覆盖溶解、卡通描边、水波等效果；",
              "面向无着色器经验的 Godot 新手。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "着色器是「看得见的数学」，新手最怕一上来被 GLSL 劝退。这份教程的好处是先让你做出效果、再解释原理——和本站主张的「先跑通再深挖」一致。跟着敲一遍，比只读概念收获大。"
        }
      ],
      "image": "https://danielilett.com/img/gd-basics/part1/banner.jpg"
    },
    {
      "id": "tut-godotdocs-shader",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "官方文档",
      "tag": "Godot Docs",
      "title": "Godot 官方文档《你的第一个着色器》：零基础也能跟的工厂式教学",
      "summary": "笔者注意到 Godot 官方文档提供了《Your first shader》分步教程，从着色器概念到在 ShaderMaterial 中写出第一段代码，循序渐进。官方文档的权威性与可检索性，是新手建立正确心智模型的首选。",
      "source": "Godot 官方文档",
      "date": "2026-10-29",
      "url": "https://docs.godotengine.org/en/stable/tutorials/shaders/your_first_shader/index.html",
      "readTime": "6 分钟",
      "hotScore": 83,
      "tags": [
        "Godot",
        "官方文档",
        "Shader"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "官方文档分步讲解着色器概念与代码；",
              "配合 ShaderMaterial 实作第一段着色器；",
              "权威且易于检索回溯。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "遇到教程和官方文档说法不一致时，以官方文档为准——它随版本更新，是「真相源头」。新生养成「先查官方文档再搜博客」的习惯，能少走很多被旧版本误导的弯路。"
        }
      ],
      "image": ""
    },
    {
      "id": "tut-godot-3dgame",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "官方教程",
      "tag": "Godot 3D",
      "title": "Godot 官方《你的第一个 3D 游戏》：从零搭一个可操作的 3D 场景",
      "summary": "笔者推荐 Godot 官方文档的《Your first 3D game》分步教程：从 3D 项目结构、玩家节点的移动与碰撞、摄像机跟随，到敌人生成与 HUD，一步步产出能实际操控的 3D Demo。对想从 2D 跨入 3D 的新手，这是建立「坐标、旋转、碰撞体」直觉的稳妥起点。",
      "source": "Godot 官方文档",
      "date": "2026-10-29",
      "url": "https://docs.godotengine.org/en/stable/getting_started/first_3d_game/index.html",
      "readTime": "14 分钟",
      "hotScore": 82,
      "tags": [
        "Godot",
        "3D",
        "官方教程"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "教程从 3D 项目结构与玩家节点入手；",
              "覆盖移动、摄像机跟随、碰撞与敌人生成；",
              "最终产出可实际操控的 3D Demo。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "2D 转 3D 最大的坑是「维度多了，调试也更晕」。这份官方教程把坐标系、旋转、碰撞体这些概念压实，跟着做一遍，你会对「3D 里的物体为什么这样动」建立肌肉记忆，比直接抄别人的 3D 模板踏实。"
        }
      ],
      "image": ""
    },
    {
      "id": "tut-gamedevbeginner",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "Unity 入门",
      "tag": "Game Dev Beginner",
      "title": "Game Dev Beginner：以「单问题单教程」降低 Unity 入门门槛",
      "summary": "笔者推荐 Game Dev Beginner 这类以「一个具体问题一篇教程」组织的站点，它把 Unity 的动画、UI、寻路、存档等拆成短小可执行的单元。对新手，这种「即查即用」的结构比厚重课程更易坚持。",
      "source": "Game Dev Beginner",
      "date": "2026-10-29",
      "url": "https://gamedevbeginner.com/",
      "readTime": "5 分钟",
      "hotScore": 81,
      "tags": [
        "Unity",
        "入门",
        "单元教程"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "站点以「单问题单教程」组织内容；",
              "覆盖动画、UI、寻路、存档等常见主题；",
              "结构即查即用，适合碎片化学习。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "入门最怕「从厚书第一页读起」然后放弃。把大目标切成小到能一次做完的单元，每完成一个就有正反馈——这才是能坚持下来的学法。新生可借鉴这种「微任务」节奏。"
        }
      ],
      "image": "https://gamedevbeginner.com/wp-content/uploads/GDB-Social.png"
    },
    {
      "id": "tut-pikuma",
      "category": "tutorials",
      "categoryName": "实战教程",
      "subcategory": "计算机图形",
      "tag": "Pikuma",
      "title": "Pikuma 图形与数学课程：把线性代数、物理与游戏引擎串成体系",
      "summary": "笔者推荐 Pikuma 的课程体系，它以「从数学原理讲到代码实现」的方式讲解计算机图形、物理与游戏引擎基础。对想补足理论地基、不被框架遮住底层逻辑的新生，是系统化的补强资源。",
      "source": "Pikuma",
      "date": "2026-10-29",
      "url": "https://pikuma.com/",
      "readTime": "6 分钟",
      "hotScore": 80,
      "tags": [
        "Pikuma",
        "图形学",
        "数学"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "Pikuma 从数学原理讲到代码实现；",
              "覆盖计算机图形、物理与引擎基础；",
              "适合补足理论地基。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "很多新手的瓶颈不是「不会用引擎」，而是「看不懂引擎在算什么」。线性代数、几何与物理这些底层课，短期不起眼，长期却决定你能否解决别人解决不了的问题。值得早投一点时间。"
        }
      ],
      "image": "https://pikuma.com/images/og/home.png"
    },
    {
      "id": "contest-leihuo",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "招聘·校招",
      "tag": "网易雷火",
      "title": "网易游戏雷火 2027 届秋招进行中：技术 / AI / 游戏艺术五大类岗位",
      "summary": "笔者注意到网易游戏雷火 2027 届秋招已开启，覆盖虚拟世界架构师、技术研发、人工智能、游戏艺术设计等大类，工作地杭州 / 成都，网申通道开放中。对计算机、数媒、设计方向的同学，是低年级即可关注的头部校招样本。",
      "source": "高校就业网（南开）",
      "date": "2026-10-29",
      "url": "https://career.nankai.edu.cn/correcruit/content/id/117003.html",
      "readTime": "5 分钟",
      "hotScore": 86,
      "tags": [
        "网易雷火",
        "2027 校招",
        "游戏研发"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "雷火 2027 届秋招覆盖技术、AI、艺术设计等大类；",
              "工作地杭州 / 成都，面向 27 届海内外应届；",
              "网申通道开放，越早投递成功率越高。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "校招不是大四才该看的事。新生现在就逛一圈头部厂商的岗位要求，反向告诉你「这几年该补哪块能力」——比如雷火明确要 AI 智能体算法，这本身就是一份学习路线图。"
        }
      ],
      "image": ""
    },
    {
      "id": "contest-papegames",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "招聘·校招",
      "tag": "叠纸游戏",
      "title": "叠纸游戏 2027 届秋招启动：研发 / 策划 / 美术 / 音频全链路岗位",
      "summary": "笔者观察到叠纸游戏 2027 届秋季校招网申全面开启，面向 2027 届同学开放技术研发、策划、美术、动画 CG、游戏音频与职能支持等岗位，投递截止 10 月 31 日。对有志于女性向 / 叙事向作品的创作者，是值得留意的入口。",
      "source": "牛企直聘",
      "date": "2026-10-29",
      "url": "https://jobs.niuqizp.com/schedule-7w8YNNtza.html",
      "readTime": "5 分钟",
      "hotScore": 84,
      "tags": [
        "叠纸",
        "2027 校招",
        "游戏美术"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "叠纸 2027 届秋招覆盖研发、策划、美术、音频等；",
              "面向 2027 届，投递截止 10 月 31 日；",
              "可通过官网或内推码投递。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "美术 / 音频类岗位通常要作品集。新生别等投递前一周才慌——现在就开始攒能代表你审美与完成度的作品，比临时凑数强太多。把校招当成「检验学习产出」的节点，动力会更实。"
        }
      ],
      "image": "https://acc.niuqizp.com/post/coverpic/202608/diezhiyouxiqiujixiaoyuanzhaopinzhengshi_5d713672.jpg"
    },
    {
      "id": "contest-mihoyo",
      "category": "contest",
      "categoryName": "竞赛·GameJam",
      "subcategory": "招聘·校招",
      "tag": "米哈游",
      "title": "米哈游 2027 届校招火热进行：基模等 AI 方向岗位全面开放",
      "summary": "笔者注意到米哈游 2027 届校园招聘网申持续开放，岗位涵盖程序与技术、产品策划、美术表现、综合与基础研究，并明确放出基模等 AI 方向岗位，截止口径约 10 月 31 日。对想进一线厂商做研发或 AI 的同学，是目前最热的校招之一。",
      "source": "米哈游招聘",
      "date": "2026-10-29",
      "url": "https://campus.mihoyo.com/",
      "readTime": "5 分钟",
      "hotScore": 88,
      "tags": [
        "米哈游",
        "2027 校招",
        "AI 方向"
      ],
      "content": [
        [
          {
            "title": "学习要点",
            "type": "list",
            "items": [
              "米哈游 2027 届校招网申开放中；",
              "岗位含程序、策划、美术、基础研究等；",
              "基模等 AI 方向岗位全面放出，截止约 10-31。"
            ]
          }
        ],
        {
          "title": "笔者观察",
          "type": "text",
          "text": "一线厂商把「自研大模型」写进校招，说明 AI 已不是单独部门的事，而是渗透进研发全链路。新生无论走技术还是策划，懂一点模型能力与边界，都会是简历上的加分项。早准备，别临门一脚。"
        }
      ],
      "image": ""
    }
  ]
};