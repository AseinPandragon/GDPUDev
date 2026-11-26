window.DAILY_NEWS_DATA = {
  "meta": {
    "date": "2026-11-27",
    "weekday": "星期五",
    "title": "GDPUDev 个人数字创作展示・每日技术情报",
    "subtitle": "个人学习观察与评述・附参考来源外部链接",
    "updateTime": "2026-11-27 07:00",
    "editor": "GDPUDev 技术中枢 & CodeBuddy",
    "highlights": [
      "Rockstar 英国员工工会承认投票75%反对：GTA6发售月，爆款产能与议价权同台",
      "微软被曝2027重新收紧Xbox独占，多款第一方新作取消Switch 2移植",
      "Unity同日双更：6000.6.11f1层级窗口分帧刷新，7.0.0a22 HDRP接入Intel XeSS",
      "小红书开源3DCodeFactory：5045条轨迹、5.52B tokens把3D场景代码变成训练数据",
      "游卡/友塔2027校招把Copilot、Cursor写进硬条件，AI协作能力成岗位新门槛"
    ],
    "engineStatus": [
      {
        "name": "Unity",
        "type": "引擎",
        "status": "6000.6.11f1层级窗口按帧分块刷新（默认0.5ms预算）；7.0.0a22 HDRP接入Intel XeSS超分",
        "badge": "6.6/7 alpha",
        "color": "#3f51b5"
      },
      {
        "name": "Unreal Engine",
        "type": "引擎",
        "status": "5.9 Preview持续迭代，蓝图Web打包与AI工具链保持更新",
        "badge": "5.9 Preview",
        "color": "#0f172a"
      },
      {
        "name": "Godot",
        "type": "引擎",
        "status": "4.8 beta 5清掉全部发布阻断、.NET门槛升到10；gdext 0.5.6改进variant封送并初步支持visionOS",
        "badge": "4.8 beta5",
        "color": "#478cbf"
      },
      {
        "name": "O3DE",
        "type": "引擎",
        "status": "26.10编辑器迁移Qt 6，新增粒子预览模块并弃用PhysX 4",
        "badge": "26.10",
        "color": "#ff9800"
      }
    ]
  },
  "hero": {
    "id": "hero-rockstar-union-vote",
    "category": "industry",
    "categoryName": "行业热点",
    "tag": "今日头条",
    "title": "GTA6 发售月，Rockstar 员工用 75% 反对票否掉工会承认",
    "summary": "11月26日，英国工会 IWGB 公布：Rockstar 1544 名英国员工参与工会承认投票，75%反对、25%赞成。工会称落败仍让集体谈判与 AI、裁员保护进入视野。在 GTA6 首日37.9亿美元时，这场票决把爆款产能与议价权摆上台面：红利集中时如何转化为可持续雇佣关系，是行业治理的真问题。",
    "image": "https://www.gdpudev.cn/gamedev/assets/news/2026-11-27-hero-union.jpg",
    "source": "网易",
    "date": "2026-11-27",
    "url": "https://www.163.com/dy/article/LCMTTL2N05561FYA.html",
    "readTime": 6,
    "hotScore": 96,
    "tags": [
      "Rockstar",
      "工会投票",
      "GTA6",
      "劳工关系"
    ],
    "content": [
      {
        "title": "要点速览",
        "type": "list",
        "items": [
          "11月26日，IWGB 宣布 Rockstar 工会承认投票结果：1544 名英国员工参与，75%反对、25%赞成，投票率93.2%。",
          "工会称虽未拿到承认协议，但集体谈判、薪酬透明、合同加班费以及针对 AI 与裁员的保护已进入全员讨论。",
          "Rockstar 出版负责人 Jennifer Kolbe 表示结果反映团队对直连沟通的支持；同期 GTA6 首日营收达37.9亿美元。"
        ]
      },
      {
        "title": "学习观察",
        "type": "text",
        "text": "在 GTA6 创下娱乐产品首发纪录的同月，一场工会票决把另一条叙事线摆上台面：产能与议价权并不天然同步。值得记下的不只是 AI 与裁员保护被写进诉求，而是当生产工具越来越强，分配与协作机制的更新速度，正在成为决定团队能否长期稳定的关键变量。"
      }
    ]
  },
  "items": [
    {
      "id": "xbox-exclusivity-2027-reset",
      "category": "industry",
      "badgeType": "business",
      "tag": "行业观察",
      "title": "Xbox 重新把独占写回路线图：平台品牌要绑住自己拥有的 IP",
      "summary": "11月26日，微软战略负责人 Matthew Ball 称修正 Xbox 未绑定自有 IP，2027年铺开；多款第一方新作被曝取消 Switch 2 移植。Xbox 回摆独占，跨端承诺生变。",
      "image": "https://www.worldprogramming.org/storage/posts/images/ade98551c31481a89abf40a8e393895d08598940.jpg",
      "source": "World Programming",
      "date": "2026-11-27",
      "url": "https://www.worldprogramming.org/posts/microsoft-will-link-the-xbox-brand-against-first-party-games-harder-in-2027-sxetww",
      "readTime": 5,
      "hotScore": 88,
      "tags": [
        "Xbox",
        "平台战略",
        "独占策略"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11月26日，微软游戏战略负责人 Matthew Ball 在社交平台回应批评，称将修正 Xbox 未充分绑定自有 IP 的问题，2027年铺开。",
            "同期有消息称多款原计划登陆 Switch 2 的 Xbox 第一方游戏移植安排生变，《光环：士官长合集》等仍无官方确认。",
            "新任 CEO Asha Sharma 将日活玩家设为北极星指标，并调整 Game Pass 定价与首发策略。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "从全平台发行到重新强调独占，Xbox 的策略转身说明平台承诺有很强的周期性。做技术选型或发行规划时，把窗口期当成可随时收回的变量，比当成常量更稳妥。"
        }
      ]
    },
    {
      "id": "cdpr-q3-witcher4-gta6",
      "category": "industry",
      "badgeType": "business",
      "tag": "行业观察",
      "title": "CDPR 把《巫师4》的标尺立成 GTA6：财报里的长线管线叙事",
      "summary": "11月25日，CD Projekt 发布三季度财报，《巫师3》重制版反响好，《巫师4》推进中。联合 CEO 称其升级幅度对标 GTA6，预计2028年发售。以管线锚定预期，是头部单机厂的资本市场叙事。",
      "image": "https://image.mrjjxw.com/uploads/articles/thumbnails/1939159/open-uri20261125-20-g7wq38.large_b.jpg",
      "source": "每日经济新闻",
      "date": "2026-11-27",
      "url": "https://www.mrjjxw.com/articles/2026-11-25/4658957.html",
      "readTime": 5,
      "hotScore": 86,
      "tags": [
        "CD Projekt",
        "财报",
        "巫师4"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11月25日，CD Projekt 发布2026年第三季度财报，《巫师3》重制版市场反响良好。",
            "联合 CEO 米哈乌·诺瓦科夫斯基称《巫师3》到《巫师4》的间隔与 GTA5 到 GTA6 相当，升级幅度将远超前作。",
            "按计划《巫师4》预计2028年发售，《赛博朋克2》预计2030年前不会推出。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "用对标对象来传达升级幅度，比直接喊预算数字更容易让市场理解。对研发团队而言，这类公开目标也是一把尺子：一旦把对标 GTA6 说出口，后续每个技术决策都会被放进这个坐标系里审视。"
        }
      ]
    },
    {
      "id": "lol-esports-manager-shutdown",
      "category": "industry",
      "badgeType": "business",
      "tag": "行业观察",
      "title": "运营四年半的《英雄联盟电竞经理》停服：赛游联动也有生命周期",
      "summary": "11月26日，腾讯公告《英雄联盟电竞经理》将于2027年1月26日停服，当日停止充值与新注册，付费点券可换五款游戏礼包。该作2022年7月公测，运营四年半。顶级 IP 不是保险，衍生品生死仍看留存。",
      "image": "https://media.nfnews.com/nfplus/ossfs/pic/xy/202611/26/ca255501-0494-4a20-852b-5d7b67224f4d.png",
      "source": "南方+",
      "date": "2026-11-27",
      "url": "https://www.nfnews.com/content/R6gNgdl83p.html",
      "readTime": 5,
      "hotScore": 85,
      "tags": [
        "腾讯",
        "停运",
        "电竞IP"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11月26日，腾讯公告《英雄联盟电竞经理》因开发与运营策略调整，将于2027年1月26日11时停服。",
            "当日11时起停止充值与新用户注册；付费点券按余额分档，可兑换《英雄联盟》《无畏契约》等五款游戏礼包。",
            "该作由拳头开发、腾讯在中国大陆发行，2022年7月20日公测，运营约四年半。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "依托顶级赛事 IP 起步，仍未逃过生命周期的收敛。赛游联动的价值不在授权本身，而在于能否把赛事热度转成日常留存，这一点对所有衍生品类都成立。"
        }
      ]
    },
    {
      "id": "37games-rd-subsidiary-capital-increase",
      "category": "industry",
      "badgeType": "business",
      "tag": "行业观察",
      "title": "三七互娱 3000 万增资研发子公司：把核心制作人绑进股权结构",
      "summary": "11月26日，三七互娱董事会通过议案：子公司大道至简增资扩股，注册资本由100万增至250万元，徐志高出资2000万元并负责研发，公司持股降至60%。以股权绑定制作人，比涨薪更能对齐长期目标。",
      "image": "",
      "source": "东方财富网",
      "date": "2026-11-27",
      "url": "https://data.eastmoney.com/notices/detail/002555/AN202611261832070849.html",
      "readTime": 4,
      "hotScore": 82,
      "tags": [
        "三七互娱",
        "投融资",
        "研发"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11月26日，三七互娱第七届董事会第十三次会议审议通过子公司大道至简增资扩股议案。",
            "大道至简注册资本由100万元增至250万元，广州幻创出资1000万元、徐志高出资2000万元，增资价20元/注册资本。",
            "交易完成后公司对大道至简持股由100%降至60%，徐志高将负责研发相关工作。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把核心研发人员变成子公司股东，是把个人收益与产品长线绑在一起的一种做法。相比单纯加薪，股权安排更考验对人的判断，也更能承载需要多年投入的精品研发。"
        }
      ]
    },
    {
      "id": "riot-merrill-20years-retrospective",
      "category": "industry",
      "badgeType": "business",
      "tag": "行业观察",
      "title": "拳头创始人复盘二十年：盲目扩张让一年成本涨 45%",
      "summary": "11月26日 GameLook 对拳头创始人 Marc Merrill 的访谈：公司曾盲目扩张致一年成本增45%，资本退潮后行业入冷静期；强调先验证再投入。把增长定义为可持续能力，是这轮周期的一课。",
      "image": "",
      "source": "GameLook",
      "date": "2026-11-27",
      "url": "http://www.gamelook.com.cn/2026/11/607299",
      "readTime": 6,
      "hotScore": 84,
      "tags": [
        "拳头游戏",
        "行业观察",
        "团队管理"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "GameLook 发布对拳头联合创始人 Marc Merrill 的访谈，回顾公司二十年发展历程。",
            "他坦言公司曾盲目扩张，一年成本剧增45%，风险资金撤离后行业进入冷静期。",
            "如今拳头强调合理团队规模、先验证再投入，并围绕多款长青游戏持续运营。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "世界不需要更多平庸产品这句判断，落在当下的产能过剩环境里格外具体。扩张之前先验证、发布之后留余粮，这两条听起来朴素，却是多数团队在周期切换时最先丢掉的东西。"
        }
      ]
    },
    {
      "id": "tencent-circle-games-series-a",
      "category": "industry",
      "badgeType": "business",
      "tag": "行业观察",
      "title": "腾讯领投土耳其休闲团队 2500 万美元：出海下注从买量转向产品能力",
      "summary": "11月26日，土耳其休闲团队 Circle Games 凭《Tidy Room!》冲上 iOS 美榜第4。该团队2024年成立，9月获腾讯领投2500万美元A轮。资本押的是产品能力，不是单款爆款。",
      "image": "",
      "source": "腾讯新闻",
      "date": "2026-11-27",
      "url": "https://news.qq.com/rain/a/20261126A0HK9000",
      "readTime": 5,
      "hotScore": 83,
      "tags": [
        "腾讯",
        "投融资",
        "休闲游戏",
        "出海"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "11月26日消息，土耳其休闲团队 Circle Games 的新作《Tidy Room!》冲上 iOS 美榜第4，单日下载破15万。",
            "公司2024年成立于伊斯坦布尔，创始班底来自 Gram Games、Dream Games 与 Good Job Games。",
            "2026年9月完成2500万美元A轮融资，由腾讯领投，累计融资3225万美元。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "在休闲赛道，单品冲榜的偶然性很高，真正被资本定价的是把机制打磨成可复用流程的团队能力。这也提示小团队：比一款爆款更值钱的，是能连续做出爆款的组织方法。"
        }
      ]
    },
    {
      "id": "ga-arkheron-ea",
      "category": "games",
      "subcategory": "抢先体验",
      "title": "前暴雪团队把爬塔PvP做成遗物构筑秀，冷启动靠好友通行证破局",
      "summary": "《Arkheron》11月27日抢先体验登陆 Steam 等平台：三人小队爬塔 PvP，遗物改写 build，集齐四件解锁第五能力。首周免费与好友通行证直击冷启动；社交门槛当设计题解，比堆内容值得学。",
      "source": "Steam 官方商店",
      "date": "2026-11-27",
      "url": "https://store.steampowered.com/app/3333850/",
      "image": "https://cdn.cloudflare.steamstatic.com/steam/apps/3333850/header.jpg",
      "badge": "抢先体验",
      "badgeType": "game",
      "readTime": 5,
      "hotScore": 91,
      "tags": [
        "PvP",
        "Bonfire Studios",
        "遗物构筑",
        "抢先体验"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "Bonfire Studios 开发、前暴雪成员组成，11月27日在 Steam、PS5、Xbox Series X|S 同步开启抢先体验。",
            "核心为三人小队爬塔 PvP：遗物可在对局中途改变打法，集齐同套四件解锁第五能力，另有 15 队同场的大乱斗模式。",
            "首周面向全员免费开放，并提供好友通行证；官方明确无开箱、无抽卡、无付费变强。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "对开发团队而言，最值得记的不是遗物数量，而是把「凑不齐三个人」当成核心设计问题：好友通行证与免费周末本质上是在用机制降低社交启动成本。做多人或服务型游戏时，冷启动往往不是宣发量级问题，而是组队摩擦力问题；先用设计把门槛抹平，再谈长期内容节奏。"
        }
      ]
    },
    {
      "id": "ga-the-last-inn-demo",
      "category": "games",
      "subcategory": "试玩上线",
      "title": "《江城创业记》团队把废土经营切成6小时Demo，白天开店夜里拾荒",
      "summary": "iFAction Studio 的《末日旅店》Demo 11月25日登陆 Steam：白天经营、夜里拾荒，约6小时含5名员工与3名可攻略角色。用完整昼夜循环做试玩切片，比堆时长更能验证循环。",
      "source": "Steam 官方商店",
      "date": "2026-11-25",
      "url": "https://store.steampowered.com/app/5424210/",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/5424210/0d26cadf60b447e578ec794c85624c195a0e924b/header_schinese.jpg?t=1795712560",
      "badge": "Demo上线",
      "badgeType": "game",
      "readTime": 5,
      "hotScore": 82,
      "tags": [
        "模拟经营",
        "废土",
        "Demo",
        "iFAction Studio"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "《末日旅店》Demo 于 11月25日上线 Steam，开发商为 iFAction Studio，即《江城创业记》团队。",
            "玩法按昼夜分段：白天经营旅店、种田养殖、招待各有故事的住客；打烊后穿防护服外出狩猎拾荒，收集食材与物资。",
            "试玩版约 6 小时，开放 5 名员工与 3 名可攻略角色；正式版规划 5 大区域与 10 名可攻略角色。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "试玩版没有把内容一股脑塞进去，而是用 6 小时完整跑通「白天经营—夜晚补给」的循环，再留 5 名员工、3 名角色作钩子。对小团队来说，Demo 的价值不在展示体量，而在验证玩家是否愿意重复这个循环；把昼夜两段钩子都放进试玩，是比堆地图更聪明的做法。"
        }
      ]
    },
    {
      "id": "ga-me-and-you-coop",
      "category": "games",
      "subcategory": "合作解谜",
      "title": "把「改写规则」做成双人协作，《Me and You》11月25日上线",
      "summary": "《Me and You》11月25日 Steam 发售，PMF Top Joy Games 开发：致敬《Baba Is You》的双人合作解谜，共同改写规则过关。把规则做成可编辑对象，难度来自理解差。",
      "source": "Steam 官方商店",
      "date": "2026-11-25",
      "url": "https://store.steampowered.com/app/4933500/",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/4933500/31fbf2a60a4bacd4061e64c06ff3cd6b108a4ba8/header.jpg?t=1795615744",
      "badge": "新游发售",
      "badgeType": "game",
      "readTime": 5,
      "hotScore": 84,
      "tags": [
        "合作解谜",
        "规则改写",
        "Baba Is You",
        "独立游戏"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "《Me and You》由 PMF Top Joy Games 开发，11月25日发售，支持简体中文与在线合作。",
            "玩法灵感来自《Baba Is You》，两名玩家需一起创造、改变并打破每关规则才能解开谜题。",
            "规则可被双方实时改写，关卡没有唯一解法，配合与沟通本身就是解题过程。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这类把「规则」做成可操作对象的设计，天然适合合作：一人改规则、一人验证，沟通成本直接变成玩法乐趣。做双人解谜时，与其加更多机关，不如给玩家一个共同作者身份；但要小心规则表述的歧义，联机场景下一条模糊规则就足以让协作崩掉。"
        }
      ]
    },
    {
      "id": "ga-talos-cn-voice",
      "category": "games",
      "subcategory": "版本更新",
      "title": "1000+手工谜题配上4000条中文台词，《沉星之序》把本地化做成内容更新",
      "summary": "Thekla 开发、乔纳森·布洛领衔的《沉星之序》11月25日在 Steam 免费上线中文配音，16位演员录制近4000条台词，覆盖1000余个谜题。把本地化当内容更新做，老作品能重新拿到曝光窗口。",
      "source": "3DM游戏网",
      "date": "2026-11-25",
      "url": "https://www.3dmgame.com/news/202611/3961216.html",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/499170/8e4b79f6886648fe2b9b4fd36824146559b047ec/header_schinese.jpg?t=1795478005",
      "badge": "本地化更新",
      "badgeType": "game",
      "readTime": 5,
      "hotScore": 83,
      "tags": [
        "叙事解谜",
        "本地化",
        "乔纳森·布洛",
        "版本更新"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "发行商 Gamirror Games 与开发商 Thekla 宣布，11月25日在 Steam 免费上线《沉星之序》全中文配音。",
            "配音由「怪物细胞」制作，16位演员录制近4000条台词，覆盖女王、吟游诗人、会说话的船等全部角色。",
            "本体含超过1000个手工打造的谜题，四个世界的机制与角色在后期相互交汇，中文配音同步覆盖叙事内容。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "值得留意的是更新节奏：本体已在10月发售，11月用一次高质量中文配音把叙事门槛降下来，等于给老产品再造一个入口。解谜游戏的本地化成本常被低估，近4000条台词不是小数目；当文本与谜题强绑定时，配音更新其实是一次重新打磨叙事的机会，而不只是加一条音轨。"
        }
      ]
    },
    {
      "id": "ga-athelan-battlegrounds",
      "category": "games",
      "subcategory": "免费上线",
      "title": "两人小团队做无养成PvP，《阿瑟兰战场》把编辑器塞进对战游戏",
      "summary": "《阿瑟兰战场》11月25日 Steam 免费上线，Athelan Games 二人小团队打造回合制 PvP：无局外养成、无付费变强，外观仅装饰，还内置关卡编辑器。用编辑器延长寿命，是小团队的务实解。",
      "source": "Steam 官方商店",
      "date": "2026-11-25",
      "url": "https://store.steampowered.com/app/3572070/",
      "image": "https://shared.akamai.steamstatic.com/store_item_assets/steam/apps/3572070/a18386f22fd485ee5e6e4ed1e22eef2987d070da/header.jpg?t=1795630942",
      "badge": "免费上线",
      "badgeType": "game",
      "readTime": 5,
      "hotScore": 86,
      "tags": [
        "回合战术",
        "PvP",
        "关卡编辑器",
        "免费游玩"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "《阿瑟兰战场》由 Athelan Games 开发，11月25日在 Steam 免费上线，支持简体中文。",
            "主打赛博朋克竞技场里的回合制战术 PvP：每回合移动一名英雄并释放两个技能之一，强调站位、冷却与节奏博弈。",
            "无局外永久养成、无数值付费，皮肤与棋盘地砖仅作装饰；内置关卡编辑器，可自制解谜关卡并配套赛事直播。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "两人团队最该学的不是做了什么模式，而是取舍：砍掉局外养成与数值付费，把有限人力全押在回合博弈和编辑器上。对战游戏最容易死在内容消耗速度上，编辑器把产出关卡的成本转嫁给社区，是用系统设计替代内容产能的典型做法。"
        }
      ]
    },
    {
      "id": "ga-picross-s-climax",
      "category": "games",
      "subcategory": "新作定档",
      "title": "1020道谜题之外，PICROSS 用跨代存档联动解锁40道奖励关",
      "summary": "《PICROSS S CLIMAX》12月10日登陆 Switch，11月26日开放预约与体验版，收录9部作品共1020道谜题，并与前作存档联动解锁40道奖励题。把历史投入换成新作奖励，是低成本召回。",
      "source": "游民星空",
      "date": "2026-11-26",
      "url": "https://www.gamersky.com/news/202611/2253894.shtml",
      "image": "",
      "badge": "系列新作",
      "badgeType": "game",
      "readTime": 5,
      "hotScore": 80,
      "tags": [
        "数织解谜",
        "存档联动",
        "Nintendo Switch",
        "Jupiter"
      ],
      "content": [
        {
          "title": "游戏要点",
          "type": "list",
          "items": [
            "Jupiter 宣布《PICROSS S CLIMAX》12月10日在香港发售，登陆 Switch 2 与 Switch，系列累计下载量已突破100万。",
            "收录《PICROSS S》至 S9 共9部作品的精选内容，5种模式合计1020道谜题，并重新划分难度、新增高难度奖励题。",
            "与历代作品存档联动可解锁40道全新奖励谜题；11月26日起开放数字版预约与体验版下载。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "最值得借鉴的是存档联动：不靠活动、不靠签到，而是让玩家过去九部作品的存档变成新作里的40道题。对系列化产品来说，历史数据是最容易被浪费的资产；把「你玩过」变成「你现在能解锁」，召回成本几乎为零，还顺手给了老玩家一个回归理由。"
        }
      ]
    },
    {
      "id": "en-unity-6611f1",
      "category": "engine",
      "subcategory": "版本更新",
      "title": "Unity 6.6 补丁把层级窗口拆成多帧更新，大场景卡顿有了新解法",
      "summary": "Unity 11月26日发布6000.6.11f1，层级窗口新增Update Time Budget，默认每帧预算0.5毫秒，大场景改分帧刷新，修复异步上传缓冲损坏导致的渲染线程冻结。重活摊到多帧更划算。",
      "source": "Unity 官方发布说明",
      "date": "2026-11-26",
      "url": "https://unity.com/releases/editor/whats-new/6000.6.11f1",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/b9385c095d1c8c58f48fc7d4fc8ae257395169c8-266x98.png",
      "badge": "Unity 6.6",
      "badgeType": "engine",
      "readTime": 5,
      "hotScore": 83,
      "tags": [
        "Unity 6.6",
        "编辑器性能",
        "版本更新"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "6000.6.11f1 于11月26日发布，属于 Unity 6.6 更新线的补丁版本",
            "层级窗口新增 Update Time Budget，默认每帧 0.5 毫秒，大场景改为分帧刷新",
            "修复异步上传缓冲损坏时的渲染线程冻结，以及 Quad 声道与 DX12 批处理模式崩溃"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "编辑器卡顿常被归咎于项目规模，这次改动说明在一帧内做完所有层级更新本身就是瓶颈。做工具链时，把一次性重活切成分帧预算，往往比优化某个绘制调用更划算。"
        }
      ]
    },
    {
      "id": "en-unity7-a22",
      "category": "engine",
      "subcategory": "预览版",
      "title": "Unity 7 alpha 22 补上 HDRP 的 XeSS，两千多条修复里藏着迁移成本",
      "summary": "Unity 11月26日放出7000.0.0a22，2132条说明，HDRP接入Intel XeSS超分，修复无GPU服务器上D3D12误启用光追的崩溃。alpha修复越密，越说明正式版前仍有结构性调整。",
      "source": "Unity 官方发布说明",
      "date": "2026-11-26",
      "url": "https://unity.com/releases/editor/whats-new/7000.0.0a22",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/b9385c095d1c8c58f48fc7d4fc8ae257395169c8-266x98.png",
      "badge": "Unity 7 alpha",
      "badgeType": "engine",
      "readTime": 6,
      "hotScore": 87,
      "tags": [
        "Unity 7",
        "HDRP",
        "XeSS",
        "Alpha"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Alpha 22 于11月26日发布，变更集 dbac4d68c4de，共 2132 条发行说明",
            "HDRP 集成 Intel XeSS 超分辨率，图形侧另有阴影投射者与渲染目标回收修复",
            "无 GPU 的 Windows Server 2025 上 WARP 不再被误判支持光追，并修复 D3D12 启动崩溃"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把超分辨率直接塞进 HDRP，等于承认高端画质越来越依赖重建而非纯光栅。跟进 alpha 的价值在于提前发现 API 迁移点，但两千多条修复也提醒人：别把 alpha 当稳定版用。"
        }
      ]
    },
    {
      "id": "en-babylon-938",
      "category": "engine",
      "subcategory": "WebGPU 渲染",
      "title": "Babylon.js 9.38 把大气深度和 WebGPU 资源回收一起推进",
      "summary": "Babylon.js 11月26日发布9.38.0，改进大气深度，WebGPU释放effect时清理管线上下文，并加入可选WebGL深度范围裁剪与四元数精度修正。显性资源管理正成为引擎升级的隐形门槛。",
      "source": "Babylon.js GitHub Release",
      "date": "2026-11-26",
      "url": "https://github.com/BabylonJS/Babylon.js/releases/tag/9.38.0",
      "image": "https://opengraph.githubassets.com/1/BabylonJS/Babylon.js",
      "badge": "Babylon.js 9.38",
      "badgeType": "engine",
      "readTime": 5,
      "hotScore": 82,
      "tags": [
        "Babylon.js",
        "WebGPU",
        "大气渲染"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "9.38.0 于11月26日发布，改动集中在 Addons 与 Core 两部分",
            "大气深度改进；WebGPU 在 effect 释放时同步销毁对应管线上下文",
            "新增可选 WebGL 深度范围裁剪控制，修正接近 90 度俯仰时 toEulerAngles 的精度"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这些改动都不是炫目的新功能，而是长时间运行后的稳定性补丁。做 WebGPU 项目时，资源生命周期若靠猜，迟早会在切换场景时暴露，跟着官方 release 走是低成本的避坑方式。"
        }
      ]
    },
    {
      "id": "en-playcanvas-2243",
      "category": "engine",
      "subcategory": "渲染补丁",
      "title": "PlayCanvas 2.24.3 修正高斯泼溅插值，压缩网格示例也换了",
      "summary": "PlayCanvas 11月23日发布2.24.3补丁，修正高斯泼溅逐splat浮点变量的平面插值，加入HandleGizmo深度偏移并替换Draco示例。小版本的渲染细节，往往比大版本更说明成熟度。",
      "source": "PlayCanvas GitHub Release",
      "date": "2026-11-26",
      "url": "https://github.com/playcanvas/engine/releases/tag/v2.24.3",
      "image": "https://opengraph.githubassets.com/1/playcanvas/engine",
      "badge": "PlayCanvas 2.24.3",
      "badgeType": "engine",
      "readTime": 5,
      "hotScore": 78,
      "tags": [
        "PlayCanvas",
        "高斯泼溅",
        "WebGPU"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "2.24.3 于11月23日发布，由 3 位贡献者提交 3 项改动",
            "修复高斯泼溅逐 splat 浮点变量的平面插值问题",
            "新增 HandleGizmo 的 fillDepthBias，Draco GLB 示例替换为压缩网格示例"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "高斯泼溅已经从实验特性走向补丁维护阶段，这类插值修正正是生产可用的信号。看引擎更新时，我会优先读小版本的修复清单，那里藏着真实的使用反馈。"
        }
      ]
    },
    {
      "id": "en-unity-asset-cli",
      "category": "engine",
      "subcategory": "官方工具",
      "title": "Unity 让编码智能体直接翻资源商店，一次只拿一个预制件",
      "summary": "Unity 11月23日宣布CLI接入Asset Store与60多个AI资源生成器，Asset Library插件可从包中单独导入预制件，目前开放测试。把资源获取变成命令行，省的不只是下载体积。",
      "source": "Unity 官方博客",
      "date": "2026-11-26",
      "url": "https://unity.com/blog/unity-asset-store-ai-generators-coding-agents",
      "image": "https://cdn.sanity.io/images/fuvbjjlp/production/975d6169fac725a6b18b73f40b74ac123490055c-2291x1391.png",
      "badge": "CLI 开放测试",
      "badgeType": "engine",
      "readTime": 6,
      "hotScore": 85,
      "tags": [
        "Unity CLI",
        "Asset Store",
        "AI 资源"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "Unity CLI 连接 Claude Code、Codex、Grok Build 与 Google Antigravity 等编码智能体",
            "Asset Library 插件可从资源包中单独取一个预制件，并展示三角形数与是否绑定骨骼",
            "60 多个 AI 生成模型可通过 CLI 调用，每个文件记录模型、提示词与成本；功能处于开放测试"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "以前攒资源包是买整包只用其中一小部分，现在粒度终于落到单个资产。更值得留意的是生成记录：当 AI 产出进入项目，可追溯的提示词和成本比文件本身更影响长期维护。"
        }
      ]
    },
    {
      "id": "en-gdext-056",
      "category": "engine",
      "subcategory": "生态绑定",
      "title": "gdext 0.5.6 给 Godot 的 Rust 绑定减了编译负担",
      "summary": "gdext 11月22日发布0.5.6，减少单态化、改进variant封送并新增unbind()，修复析构、C++热重载与Debug崩溃，初步支持visionOS。绑定层性能正成为Godot生态新战场。",
      "source": "gdext GitHub Release",
      "date": "2026-11-26",
      "url": "https://github.com/godot-rust/gdext/releases/tag/v0.5.6",
      "image": "https://opengraph.githubassets.com/2/godot-rust/gdext",
      "badge": "gdext 0.5.6",
      "badgeType": "engine",
      "readTime": 5,
      "hotScore": 80,
      "tags": [
        "Godot",
        "Rust",
        "GDExtension"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "0.5.6 于11月22日发布，是 Godot 的 Rust 绑定 gdext 的新版本",
            "编译侧减少单态化，运行时改进 variant 封送，新增 unbind() 以允许 self 被重新借用",
            "修复对象析构、C++ 热重载与 Debug 输出相关崩溃，初步支持 visionOS"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "选 Rust 做 Godot 扩展的人，痛点往往不在语法而在编译等待和热重载稳定性。这个版本把优化重点放在这两处，说明绑定层已经从能用进入好用阶段。"
        }
      ]
    },
    {
      "id": "os-raylib",
      "category": "opensource",
      "subcategory": "引擎工具",
      "title": "raylib 星标冲到 3.58 万：极简 C 库为何还这么能打",
      "summary": "raylib 是用 C 写的极简游戏库，3.58 万星、Zlib 协议，主打几行代码出画面，10 月发布 6.2 版后仍高频更新。这种拒绝层层封装的路线，对想搞懂渲染底层的人反而是条捷径。",
      "source": "GitHub: raysan5/raylib",
      "date": "2026-11-26",
      "url": "https://github.com/raysan5/raylib",
      "image": "https://opengraph.githubassets.com/1/raysan5/raylib",
      "badge": "★35.8k",
      "badgeType": "hot",
      "readTime": 5,
      "hotScore": 92,
      "tags": [
        "C语言",
        "游戏库",
        "开源引擎"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "C 语言编写，3.58 万星、3400 余分叉，采用 Zlib 协议",
            "10 月发布 6.2 版，代码库在 11 月 26 日仍有提交",
            "主打低门槛：不依赖复杂抽象，几行代码即可绘制 2D/3D 画面"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "raylib 的价值不在功能多，而在把渲染、输入、音频摊开给你看。想补底层课的人，读它的源码比追新框架更划算。"
        }
      ]
    },
    {
      "id": "os-pyxel",
      "category": "opensource",
      "subcategory": "复古引擎",
      "title": "Pyxel 用 16 色和 128×128 画布，把做游戏拉回小时候",
      "summary": "kitao/pyxel 是 Python 复古引擎，1.87 万星，11 月 23 日更新 3.0.4，自带 16 色像素画与音效编辑器，128×128 画面。设限逼人先做扎实玩法，比追高清更实用。",
      "source": "GitHub: kitao/pyxel",
      "date": "2026-11-26",
      "url": "https://github.com/kitao/pyxel",
      "image": "https://opengraph.githubassets.com/1/kitao/pyxel",
      "badge": "★18.7k",
      "badgeType": "hot",
      "readTime": 5,
      "hotScore": 86,
      "tags": [
        "Python",
        "复古游戏",
        "像素画"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "Python 复古游戏引擎，1.87 万星、980 分叉，11 月 23 日发布 3.0.4",
            "内置像素画与音效编辑器，限定 16 色调色板和 128×128 画布",
            "可用 Python 脚本直接操作图像、声音与输入"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "限制反而是一种教学：颜色只有 16 种、画面只有 128×128，先把玩法做清楚，再考虑美术。新手做原型，这种约束比自由更省时间。"
        }
      ]
    },
    {
      "id": "os-joltphysics",
      "category": "opensource",
      "subcategory": "物理引擎",
      "title": "JoltPhysics 星标破 1.2 万：多核刚体物理正在成为新默认",
      "summary": "JoltPhysics 是 C++ 多核刚体与碰撞库，1.25 万星、MIT 协议，面向游戏和 VR，11 月 26 日仍在提交。并行求解成默认能力，对想理解物理引擎怎么吃满多核的人很有参考价值。",
      "source": "GitHub: jrouwe/JoltPhysics",
      "date": "2026-11-26",
      "url": "https://github.com/jrouwe/JoltPhysics",
      "image": "https://opengraph.githubassets.com/1/jrouwe/JoltPhysics",
      "badge": "★12.5k",
      "badgeType": "hot",
      "readTime": 5,
      "hotScore": 84,
      "tags": [
        "物理引擎",
        "C++",
        "多核"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "C++ 实现的多核刚体物理与碰撞库，1.25 万星、MIT 协议",
            "面向游戏与 VR 场景，11 月 26 日仍在提交",
            "并行求解与宽相、窄相检测针对现代多核 CPU 优化"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "物理引擎的进化方向是吃满多核，而不是单点算得更快。读 Jolt 的任务拆分方式，比背公式更能理解引擎性能从哪来。"
        }
      ]
    },
    {
      "id": "os-miniaudio",
      "category": "opensource",
      "subcategory": "音频库",
      "title": "一个 C 文件搞定音频：miniaudio 的少即是多值得反复看",
      "summary": "miniaudio 是单文件 C 音频库，7705 星、653 分叉，把播放与采集塞进一个源文件，11 月 24 日仍有更新。把复杂功能压进单文件，对想读透音频底层又怕被构建系统劝退的人特别友好。",
      "source": "GitHub: mackron/miniaudio",
      "date": "2026-11-26",
      "url": "https://github.com/mackron/miniaudio",
      "image": "https://opengraph.githubassets.com/1/mackron/miniaudio",
      "badge": "★7.7k",
      "badgeType": "hot",
      "readTime": 5,
      "hotScore": 80,
      "tags": [
        "音频库",
        "C语言",
        "单文件"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "单文件 C 音频库，7705 星、653 分叉，播放与采集一体",
            "11 月 24 日仍有更新，可嵌入 C/C++ 项目而无需额外依赖",
            "支持常见音频格式解码、空间音效与设备枚举"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "单文件不等于简单，它只是把复杂度从构建流程挪回代码本身。适合想读透音频管线、又怕被依赖管理拖住的人。"
        }
      ]
    },
    {
      "id": "os-libgdx",
      "category": "opensource",
      "subcategory": "引擎框架",
      "title": "libgdx 扛了十几年：Java 跨平台框架的老树开新花",
      "summary": "libgdx 是 Java 游戏框架，2.56 万星、Apache-2.0，一套代码覆盖桌面、安卓、HTML5 与 iOS，11 月 26 日仍在维护。这种跨平台抽象，仍是理解多端运行的活教材。",
      "source": "GitHub: libgdx/libgdx",
      "date": "2026-11-26",
      "url": "https://github.com/libgdx/libgdx",
      "image": "https://opengraph.githubassets.com/1/libgdx/libgdx",
      "badge": "★25.6k",
      "badgeType": "hot",
      "readTime": 5,
      "hotScore": 88,
      "tags": [
        "Java",
        "跨平台",
        "游戏框架"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "Java 跨平台游戏框架，2.56 万星、6500 余分叉，Apache-2.0 协议",
            "一套代码覆盖 Windows、Linux、macOS、安卓、HTML5 与 iOS",
            "11 月 26 日仍在维护，配套工具与扩展生态完整"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "老框架的价值是被时间验证过的抽象。libgdx 的后端分层思路放到今天依然成立，值得拿来做跨平台架构的对照样本。"
        }
      ]
    },
    {
      "id": "os-wgpu",
      "category": "opensource",
      "subcategory": "渲染库",
      "title": "wgpu 把 WebGPU 写进 Rust：跨平台图形 API 的安全派解法",
      "summary": "wgpu 是纯 Rust 跨平台图形 API，1.86 万星、Apache-2.0，11 月 26 日仍在更新，为 Bevy 等引擎提供底座。它用类型系统换掉驱动层错误，是观察安全图形抽象的好样本。",
      "source": "GitHub: gfx-rs/wgpu",
      "date": "2026-11-26",
      "url": "https://github.com/gfx-rs/wgpu",
      "image": "https://opengraph.githubassets.com/1/gfx-rs/wgpu",
      "badge": "★18.6k",
      "badgeType": "hot",
      "readTime": 5,
      "hotScore": 87,
      "tags": [
        "Rust",
        "WebGPU",
        "渲染"
      ],
      "content": [
        {
          "title": "项目要点",
          "type": "list",
          "items": [
            "纯 Rust 跨平台图形 API，1.86 万星、1700 余分叉，Apache-2.0 协议",
            "11 月 26 日仍在更新，是 Bevy 等引擎的重要底座",
            "把 WebGPU 概念带到原生平台，强调安全与可移植"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "wgpu 说明安全抽象不必以性能为代价。观察它的资源绑定与校验设计，能看清 Rust 在图形层到底换来了什么。"
        }
      ]
    },
    {
      "id": "tu-mdn-breakout",
      "category": "tutorials",
      "subcategory": "Web 游戏入门",
      "title": "从空白 Canvas 到完整打砖块：MDN 把网页游戏拆成 11 步",
      "summary": "MDN 用纯 JavaScript 分 11 步讲透打砖块的 Canvas 渲染、球拍碰撞、计分与胜负判定，每步配可编辑示例，适合有基础 JS 的开发者；上手 Web 游戏，这比先学框架更扎实。",
      "source": "MDN Web Docs",
      "date": "常青",
      "url": "https://developer.mozilla.org/en-US/docs/Games/Tutorials/2D_Breakout_game_pure_JavaScript",
      "image": "https://developer.mozilla.org/mdn-social-image.46ac2375.png",
      "badge": "官方教程",
      "badgeType": "hot",
      "readTime": 12,
      "hotScore": 82,
      "tags": [
        "Web游戏",
        "Canvas",
        "JavaScript"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "从 canvas 标签与 2D 绘图上下文起步，先画出球拍和砖块",
            "逐步接入球体移动、墙壁反弹、键盘与鼠标控制、碰撞检测",
            "补齐计分、生命与胜负状态，每一步都有可编辑的实时示例对照"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这套教程的价值不在打砖块本身，而在它刻意绕开框架，把渲染循环和碰撞判定这些底层机制暴露出来。建议按章节顺序敲一遍代码，再尝试替换素材或加一个道具系统，比直接套模板更能看懂引擎替你做了什么。"
        }
      ]
    },
    {
      "id": "tu-phaser-first-game",
      "category": "tutorials",
      "subcategory": "引擎入门",
      "title": "官方中文版第一个 Phaser 3 游戏：角色、平台与收集物一次跑通",
      "summary": "Phaser 官方中文教程带读者做跑跳收集星星的小游戏，覆盖 config 配置、资源加载、Arcade 物理与场景结构，只需基础 JS；先看懂官方范例再查 API，比零敲碎打搜博客省时。",
      "source": "Phaser",
      "date": "常青",
      "url": "https://phaser.io/tutorials/making-your-first-phaser-3-game-chinese",
      "image": "https://cdn.phaser.io/tutorials/making-your-first-phaser-3-game-chinese/tutorial_header.png",
      "badge": "官方中文",
      "badgeType": "hot",
      "readTime": 15,
      "hotScore": 84,
      "tags": [
        "Phaser",
        "HTML5",
        "游戏框架"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "用 config 对象配置渲染器、画布尺寸和默认 Scene，理解 Phaser 3 的场景结构",
            "在 preload 中加载图片与精灵图，在 create 中放置背景、平台和角色",
            "用 Arcade 物理实现移动跳跃、碰撞检测与星星收集计分"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "官方教程的好处是概念定义和代码版本一致，不会遇到第三方博客常见的 API 过期问题。建议把它当作 Phaser 的入口，跑通后再去看官方示例库里对应的物理与粒子用例，学习曲线会平很多。"
        }
      ]
    },
    {
      "id": "tu-godot-profiler",
      "category": "tutorials",
      "subcategory": "性能优化",
      "title": "Godot 性能优化从读 Profiler 开始：先找瓶颈再谈改代码",
      "summary": "独游魔盒的 Godot 专题分五层讲性能剖析：Profiler 各栏含义、Draw Call 阈值、GC 尖刺定位、GDScript 热路径迁移与空间分区；先读数据再改代码，比追新插件更能救帧率。",
      "source": "独游魔盒 Xmohe",
      "date": "常青",
      "url": "https://xmohe.com/techie/special/godot-key-tech/14-profiler",
      "image": "",
      "badge": "实战长文",
      "badgeType": "hot",
      "readTime": 14,
      "hotScore": 86,
      "tags": [
        "Godot",
        "性能优化",
        "Profiler"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "拆开 Godot 4 的 Profiler 面板，区分帧时间、CPU 子系统、渲染端点与脚本调用频率",
            "给出 2D/3D 场景的 Draw Call 经验区间，并说明合并网格与纹理图集的降幅",
            "用对象池和缓存压住 GC 尖刺，再判断是否值得把热路径迁到 C# 或 GDExtension"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这篇最值得记的不是具体数字，而是先测量再动手的顺序：作者反复强调过早优化和拿别人项目标尺量自己的危害。建议把自己的项目跑一遍 Profiler，对着图表复述瓶颈在哪，再决定要不要改架构。"
        }
      ]
    },
    {
      "id": "tu-unity-2026-start",
      "category": "tutorials",
      "subcategory": "C# 与引擎入门",
      "title": "一条线跑通 Unity 安装到发布：零基础 C# 脚本如何写出第一个 Demo",
      "summary": "一篇面向零基础的 Unity 2026 教程，按安装、建项目、写 C# 控制旋转移动、组件与输入、调试到打包发布串成完整链路，还附报错排查与目录规范；新手第一遍照着做比啃 API 手册更容易建立手感。",
      "source": "CSDN 博客",
      "date": "常青",
      "url": "https://blog.csdn.net/weixin_29014939/article/details/170414025",
      "image": "https://img-bss.csdnimg.cn/202112131616291007.png",
      "badge": "入门路径",
      "badgeType": "hot",
      "readTime": 10,
      "hotScore": 80,
      "tags": [
        "Unity",
        "C#",
        "零基础"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "从 Unity Hub 安装、LTS 版本选择与项目创建讲起，明确硬件与授权边界",
            "用 C# 脚本控制方块旋转、移动与批量生成，理解组件调用和输入处理",
            "覆盖 Profiler/Stats 性能观察、常见报错排查与工程目录规范"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这类教程的关键不是信息密度，而是顺序：先让物体在屏幕上动起来，再回头补语法概念。建议照着做完后立刻改规则，比如让收集物旋转或加一个计分 UI，把看懂变成能改。"
        }
      ]
    },
    {
      "id": "tu-urp-shader-variants",
      "category": "tutorials",
      "subcategory": "图形渲染",
      "title": "URP 里 Shader 变体怎样拖慢加载：从 multi_compile 到异步预热",
      "summary": "一篇长文拆解 URP 与 Shader 变体，讲清变体数量为何指数增长、编译卡顿在移动端为何更明显，给出 shader_feature 替换、变体集合与异步预热方案；值得放进 URP 项目性能清单。",
      "source": "惊觉（leheavengame）",
      "date": "常青",
      "url": "https://www.leheavengame.com/article/6afcf1cfbdd2c6f4fa930ffa/unity-urp-%E5%A4%9A%E7%BA%BF%E7%A8%8B%E6%B8%B2%E6%9F%93-%E7%90%86%E8%A7%A3-shader-%E5%8F%98%E4%BD%93%E5%AF%B9%E5%8A%A0%E8%BD%BD%E6%97%B6%E9%97%B4%E7%9A%84%E5%BD%B1%E5%93%8D",
      "image": "https://cdn.leheavengame.com/head_def.png",
      "badge": "渲染进阶",
      "badgeType": "hot",
      "readTime": 9,
      "hotScore": 82,
      "tags": [
        "Unity",
        "URP",
        "Shader"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "解释 multi_compile 与 shader_feature 的变体生成差异，10 个开关可膨胀到 1024 个变体",
            "用 Profiler 追踪变体首次编译，指出移动端加载耗时可达到中高端 PC 的四倍",
            "给出 ShaderVariantCollection、分帧异步预热与变体裁剪的落地做法"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "变体爆炸往往是项目后期才暴露的问题，等到打包变慢、首帧卡顿才处理代价很高。建议在项目早期就用分析工具统计变体数，并把阈值检查加进构建流程，比事后逐个删关键词省事。"
        }
      ]
    },
    {
      "id": "tu-gdquest-2d-practice",
      "category": "tutorials",
      "subcategory": "Godot 项目实战",
      "title": "GDQuest 的 2D 课程把收集玩法留给学生自己做：点选、Tween 与随机行为",
      "summary": "GDQuest 有一节 2D 实践挑战课，复用 Area2D 点击检测、Tween 动画与 Timer 随机行为，让学生扩展火炬和小鸟机制，适合跟完前几节练手；问答区兜底，比只看视频更易排错。",
      "source": "GDQuest",
      "date": "常青",
      "url": "https://school.gdquest.com/courses/learn_2d_gamedev_godot_4/looting/lets_experiment",
      "image": "https://school.gdquest.com//opengraph-image.png",
      "badge": "官方课程",
      "badgeType": "hot",
      "readTime": 8,
      "hotScore": 83,
      "tags": [
        "Godot",
        "GDScript",
        "项目实战"
      ],
      "content": [
        {
          "title": "教程要点",
          "type": "list",
          "items": [
            "用 Area2D 与 _input_event 判断鼠标左键点击，实现物品收集与计数",
            "用 create_tween 做缩放、移动和淡出，配合 set_parallel 控制动画节奏",
            "用 Timer 与 randf_range 生成随机跳跃，并处理影子与朝向同步"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这节课的设计思路值得借鉴：把已讲过的知识点重新组合成没讲过的需求，才是真正检验学会没有。建议先自己实现一遍再翻问答区，直接照抄答案会错过最有价值的试错过程。"
        }
      ]
    },
    {
      "id": "ai-3dcodefactory-data",
      "category": "ai",
      "subcategory": "AI 3D 数据",
      "title": "小红书把 3D 场景代码变成可验证的训练数据",
      "summary": "小红书 dots post train 团队开源 3DCodeFactory 全自动数据合成框架，数据集含 5045 条多轮轨迹、5.52B tokens，单场景代码中位数 4270 行；团队自测微调 1 个 Epoch 的 27B 模型超过 2.4T 旗舰。做 3D 代码智能体，先看清验收门槛比堆参数更实在。",
      "source": "GitHub",
      "date": "2026-11-26",
      "url": "https://github.com/3DCodeFactory/3DCodeFactory",
      "image": "https://opengraph.githubassets.com/4de87f1da956894f8bb30356e744f5eb7a501cc7f3c2f0db44c80836db0f0342/3DCodeFactory/3DCodeFactory",
      "badge": "开源数据集",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 90,
      "tags": [
        "小红书",
        "3D代码",
        "训练数据"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "框架从通用纯文本正向合成复杂 3D 建模任务，不依赖存量三维资产，覆盖 10 个一级领域、56 个细分类别。",
            "3DCodeFactory-Data 含 5045 条多轮轨迹，单条平均超 100 万 tokens，总规模 5.52B tokens，代码覆盖 Blender 与 Three.js。",
            "团队自测：缺陷轨迹拦截准确率 87.2%，微调 1 个 Epoch 的 Qwen3.8-27B 在三个生成基准上超过 2.4T 的 Qwen3.8-Max，尚无第三方复现。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这批数据最值得借鉴的不是规模，而是把「视觉、规格、功能」三类判据写成可执行的合取门控：任一项不达标就重跑。对做游戏原型自动化的团队来说，生成一段能跑的 Three.js 场景并不稀奇，难的是让模型在渲染后自己看图、发现穿模再改一轮。把验收标准显式写进数据，等于把人工检查的经验固化成训练信号，这条思路比追新一轮基座模型更容易在项目里落地。"
        }
      ]
    },
    {
      "id": "ai-sage-interaction",
      "category": "ai",
      "subcategory": "多模态交互",
      "title": "9B 全模态模型把「随时插话」变成可量化的指标",
      "summary": "上海 AI Lab 开源 Sage-Interaction：基于 MiniCPM-o 4.5 的 9B 全模态模型，官方报告 FD-Bench v1.5 得分 80.73、轮次切换延迟 1.29 秒，支持语音打断与后台任务委派。数字来自团队自测，做实时对话角色前仍需按自己的硬件复测延迟。",
      "source": "Hugging Face",
      "date": "2026-11-26",
      "url": "https://huggingface.co/internlm/Sage-Interaction",
      "image": "https://cdn-thumbnails.huggingface.co/social-thumbnails/models/internlm/Sage-Interaction.png",
      "badge": "全双工交互",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 89,
      "tags": [
        "上海AI Lab",
        "全双工",
        "语音Agent"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "模型参数量 9B，基于 MiniCPM-o 4.5，处理流式音频与视频并实时生成语音，权重以 BF16 提供。",
            "官方报告 FD-Bench v1.5 得分 80.73，FD-Bench v1 轮次切换延迟 1.29 秒，支持被用户打断后平滑续说。",
            "后台任务委派可把耗时推理交给后端，Daily Delegation 80.47 F1、Time Speak 85.96 F1，均为模型卡披露结果。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把「能不能自然接话」单独列为评测目标，是这类模型比通用多模态榜单更有参考价值的地方。游戏里做 AI 队友或 NPC 语音，真正卡体验的往往不是识别准不准，而是玩家插话后角色能不能立刻停、接着说、还不丢上下文。1.29 秒是发布方在指定基准上的数字，换到消费级显卡和自家对话脚本上会怎样，需要开发者自己压测；任务委派的分层设计倒是可以直接借鉴，把耗时查询放后端、前端只保交互节奏。"
        }
      ]
    },
    {
      "id": "ai-nemotron-image-30b",
      "category": "ai",
      "subcategory": "图像生成模型",
      "title": "英伟达放出 30B 生图权重，许可仍限定研究与评估",
      "summary": "英伟达 11 月 25 日在 Hugging Face 开放 Nemotron-Labs-Image-30B-A3B 图像生成模型权重：30B 总参、每 token 激活 3B，采用自回归方式逐 token 生成图片；官方自测 GenEval 92.86 高于 GPT Image 2，但 GenEval2 落后。许可限定非商业研究与评估，框架其余组件尚未放出。",
      "source": "Hugging Face",
      "date": "2026-11-26",
      "url": "https://huggingface.co/nvidia/Nemotron-Labs-Image-30B-A3B",
      "image": "https://cdn-thumbnails.huggingface.co/social-thumbnails/models/nvidia/Nemotron-Labs-Image-30B-A3B.png",
      "badge": "开放权重",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 86,
      "tags": [
        "NVIDIA",
        "图像生成",
        "MoE"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "模型为 MoE 架构，总参数约 300 亿、每 token 激活约 30 亿，基于 Nemotron-H 并用 Nemotron 3 Nano 初始化，配 6.42 亿参数视觉分词器。",
            "官方参考推理配置为 4 张 H100 80GB 生成 1024×1024 图片，权重约 133GB、分 32 个 safetensors 分片。",
            "英伟达自测最佳设置下 GenEval 92.86、BizGenEval 86.0 高于 GPT Image 2，但 GenEval2 与 Qwen-Image-Bench 落后；许可限非商业研究与评估。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "「像素即代码」的分工比单项跑分更值得留意：位图走离散视觉 token，图表、网页、幻灯片这类需要精确文字和布局的内容走代码生成，两条路径共用同一个生成与渲染接口。做 UI 素材或数值图表的开发者可以照这个思路拆任务，别指望一个扩散模型同时兼顾表现力和字距。另一方面，权重开放不等于可商用，Harness 与 VisionCode 尚未放出，现阶段更适合作为研究参照而非生产管线。"
        }
      ]
    },
    {
      "id": "ai-google-fuse-eval",
      "category": "ai",
      "subcategory": "AI 评测框架",
      "title": "谷歌用隐藏动机模拟，量出助手只听转述的判断损耗",
      "summary": "Google Research 公开社交推理评估框架，用 Concordia 多智能体模拟预设隐藏动机，再让助手只听用户转述来推断；覆盖 12 个模型、开源超 2 万条样本，发现模型会附和偏见。给陪伴类 Agent 做评测，这种「只听一面之词」的场景比静态题库更接近真实。",
      "source": "Google Research",
      "date": "2026-11-26",
      "url": "https://research.google/blog/verifiable-social-reasoning-for-llm-assistants",
      "image": "https://storage.googleapis.com/gweb-research2023-media/images/HO_previewImage1.width-800.format-jpeg.jpg",
      "badge": "评测开源",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 85,
      "tags": [
        "Google",
        "社交推理",
        "Agent评测"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "框架基于 Google 开源的 Concordia 多智能体库：先为目标角色设定隐藏动机，再让用户代理向被测助手转述，最后用 LLM 裁判核对答案。",
            "研究覆盖 12 个 LLM，开源框架与超过 2 万条生成样本，模拟与问询阶段分离，便于同一批场景反复评测不同模型。",
            "官方结论：助手只听转述时准确率明显低于直接观察客观事件；用户带偏见时更易被附和，多轮对话也不总能纠偏。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这套框架点破了一个容易被忽略的产品风险：助手表现出的「共情」，有时只是把用户的主观叙述原样返还。做剧情 NPC、陪伴角色或客服 Agent 时，如果所有判断都来自单方输入，模型就可能把误会固化成事实。把「复述立场」和「核验事实」分开评测，并在高风险回答里保留来源与不确定性，是比继续堆对话轮数更实际的改进方向。框架与数据已公开，适合直接拿来做回归测试。"
        }
      ]
    },
    {
      "id": "ai-ludo-tileset",
      "category": "ai",
      "subcategory": "游戏美术工具",
      "title": "两句话生成一套自动拼接瓦片，Godot 与 Tiled 直接可用",
      "summary": "Ludo.ai 上线 Tileset Generator：输入两段地面描述即可生成 16 张自动拼接瓦片，覆盖俯视与等距网格，导出 Godot 4 .tres、Tiled .tsx、法线图与 JSON；单套 1 credit。2D 地图最耗时的边界拼接被压成一次生成，但风格一致性仍需先画小图试。",
      "source": "Ludo.ai",
      "date": "2026-11-26",
      "url": "https://ludo.ai/features/tileset-generator",
      "image": "https://ludo.ai/images/features/tileset-generator-v2/og.png",
      "badge": "游戏AI工具",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 84,
      "tags": [
        "Ludo.ai",
        "2D美术",
        "Godot"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "先用文字或参考图生成无缝基础瓦片，再把两块地形与一句边界描述合成 16 张瓦片，覆盖角、边与内角的所有衔接方式。",
            "支持俯视、等距 2:1 与真等距网格，可导出 atlas PNG、法线图、Godot 4 TileSet (.tres)、Tiled (.tsx) 与逐块 JSON。",
            "计费为基础瓦片 0.5 credit、整套或整次编辑 1 credit；Pro 与 Studio 计划可通过 CLI、MCP 和 REST API 调用。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "这个工具切中的是 2D 开发里真正琐碎的环节：单块地砖容易生成，难的从来是两块地形相接时那十几种边缘与转角。把 16 张瓦片作为一次原子输出，并顺手给出 Godot 地形集和 JSON 元数据，省掉的不仅是画画时间，还有在引擎里手工配置自动拼接规则的步骤。生成前先用参考图锁定风格、生成后在浏览器里画一张小地图验收，比直接铺满整关更稳妥。"
        }
      ]
    },
    {
      "id": "ai-motubrain-2",
      "category": "ai",
      "subcategory": "世界动作模型",
      "title": "20B 世界动作模型把「看视频学新任务」搬进真实机器人",
      "summary": "生数科技发布 Motubrain 2.0：20B 世界动作模型加 Harness 智能体系统，官方称六项机器人基准五项第一；看一段人类视频即可零样本迁移，RoboTwin 未见任务平均成功率 69.52%。权重仍在分批开放，游戏侧复用其动作先验前须先确认许可与复现。",
      "source": "Motubrain 官方博客",
      "date": "2026-11-26",
      "url": "https://www.motubrain.com/en/blog/motubrain-2",
      "image": "https://www.motubrain.cn/_cms/assets/94450081-17a5-4e82-ab90-8a8ac319e408_4372cfc8-61e2-4835-9642-231227d96422/assets/research-cover-motubrain-2-kqtgMIzU.webp",
      "badge": "世界模型",
      "badgeType": "ai",
      "readTime": 5,
      "hotScore": 88,
      "tags": [
        "生数科技",
        "世界模型",
        "具身智能"
      ],
      "content": [
        {
          "title": "要点速览",
          "type": "list",
          "items": [
            "系统由 20B 参数的世界动作模型与 Motubrain-Harness 智能体框架组成，把文本、视频、动作与三维几何放进四流架构统一建模。",
            "官方称在六项机器人操作基准中五项第一；ICL-WAM 让机器人参考一段人类视频即以零样本方式尝试新任务，RoboTwin 七项未见任务平均成功率 69.52%。",
            "预训练过程曾公开直播 25 天、600 小时、20 万步；团队表示权重与数据将陆续开放，已有版本下载但商用需书面授权。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "视频生成模型积累的物体运动与空间知识，正在被直接拿去做动作预测，这条路线对游戏 AI 同样有启发：与其为每个 NPC 行为写状态机，不如让模型先理解「世界会怎么变」，再决定「我该怎么做」。Harness 把规划、工具调用和失败恢复拆成闭环，也说明单体模型再强也需要一层可编辑的编排。需要注意的是，榜单成绩来自官方不同任务集，开放环境里的泛化边界与长期稳定性还缺乏独立复现，商用授权也要先谈清楚。"
        }
      ]
    },
    {
      "id": "co-yokaverse-2027",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "游卡网络 2027 届客户端岗开放：Unity/UE 与 AI 编程助手同时写进要求",
      "summary": "杭州游卡网络 11 月 12 日放出 2027 届客户端开发岗，招 6 人，要求计算机相关本科以上、熟悉 Unity 或 Unreal 引擎，并明确会用 Copilot、Cursor 辅助开发且能审查生成代码。把 AI 协作写成硬条件，学生阶段就该练判断力而不只是写代码。",
      "source": "安徽24365大学生就业服务平台",
      "date": "2026-11-12",
      "url": "http://24365.ah.smartedu.cn/job.html?jid=324737&cid=53238",
      "image": "",
      "badge": "27届校招",
      "badgeType": "event",
      "readTime": 4,
      "hotScore": 82,
      "tags": [
        "校招",
        "Unity",
        "客户端开发"
      ],
      "content": [
        {
          "title": "信息要点",
          "type": "list",
          "items": [
            "杭州游卡网络技术有限公司 11 月 12 日发布 2027 届精英应届生岗位，方向为客户端开发，计划招 6 人。",
            "要求计算机相关专业、本科及以上，熟悉 C/C# 与面向对象设计，具有 Unity 或 Unreal Engine 项目经验，了解渲染管线与图形学基础。",
            "JD 明确要求会用 Copilot、Cursor 等 AI 编程助手，并能对生成代码做审查与优化；有 Demo、竞赛获奖或开源贡献者优先。",
            "网申入口为 campus.yokaverse.com，岗位在芜湖/杭州滨江均有说明，投递前以企业官方页面为准。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "把 AI 编程助手写进硬性要求是个信号：学生阶段练习的重点正在从“能不能写出代码”转向“能不能判断代码对不对”。建议在做课程项目时就把 AI 纳入流程，并留出时间逐行核对生成结果，面试时才有东西可讲。"
        }
      ]
    },
    {
      "id": "co-youta-2027",
      "category": "contest",
      "subcategory": "招聘·校招",
      "title": "友塔网络 27 届校招放出 60 个游戏研发名额，UE5 客户端单独设岗",
      "summary": "上海友塔网络 11 月 3 日发布 27 届校招，客户端与 UE5 客户端方向各招 30 人，面向本硕博，要求数据结构、操作系统等基础扎实，有 Unity/Unreal 与 Lua、C++ 经验优先。名额不少，但真正卡人的还是基础课。",
      "source": "北京交通大学就业资讯网",
      "date": "2026-11-03",
      "url": "http://job.njtu.edu.cn/f/recruitmentinfo/show?recruitmentId=0d3267bc54914fb59f39cf979e5344c4",
      "image": "",
      "badge": "27届校招",
      "badgeType": "event",
      "readTime": 4,
      "hotScore": 80,
      "tags": [
        "校招",
        "UE5",
        "游戏研发"
      ],
      "content": [
        {
          "title": "信息要点",
          "type": "list",
          "items": [
            "上海友塔网络科技有限公司 11 月 3 日在北京交通大学就业资讯网发布 27 届校招公告。",
            "游戏研发工程师客户端方向、UE5 客户端方向各招 30 人，工作地点为上海长宁区，面向本科、硕士、博士。",
            "客户端方向要求熟练使用引擎完成模块开发，注重代码效率；UE5 方向要求实现 gameplay 系统、编辑器支持与性能优化。",
            "共性要求是数据结构与算法、编译原理、操作系统、计算机网络基础扎实；有 Unity/Unreal 引擎经验，熟悉 Lua、C++ 或 UE C++ 者优先。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "两个方向合计 60 个名额，看着不少，但筛选条件几乎全落在基础课上。与其堆一堆引擎插件经验，不如把数据结构和操作系统真正学透，再拿一个小项目把 UE5 流程走通，这样应对笔试和技术面都更稳。"
        }
      ]
    },
    {
      "id": "co-unity-jam-2026",
      "category": "contest",
      "subcategory": "赛事·GameJam",
      "title": "Unity 官方 Game Jam 首次单设学生赛道：7 天创作外加 Buffer 期",
      "summary": "2026 官方 Unity Game Jam 已于 11 月 5 日至 14 日在线举办，赛期扩到 7 天并增设打包上传的 Buffer 期，首次单设学生赛道，奖品含 Unity Pro 与 Odin Inspector。想攒作品集的学生，短周期赛事比长期项目更容易出成果。",
      "source": "The Futurist",
      "date": "2026-11-07",
      "url": "https://www.thefuturist.co/theme-reveal-2026-official-unity-game-jam/",
      "image": "https://i.ytimg.com/vi/IYHIvcq21kM/maxresdefault.jpg",
      "badge": "赛事回顾",
      "badgeType": "event",
      "readTime": 4,
      "hotScore": 78,
      "tags": [
        "Game Jam",
        "Unity",
        "学生赛道"
      ],
      "content": [
        {
          "title": "信息要点",
          "type": "list",
          "items": [
            "2026 官方 Unity Game Jam 于 11 月 5 日至 14 日在线举办，通过 itch.io 与 Unity Discord 进行。",
            "本届赛期扩展为 7 天，并在截止后增加专门用来打包、上传和修复临时 Bug 的 Buffer 期。",
            "首次设置 Best Student Category，面向在校学生，奖品包括 Unity Pro、Discord Nitro、Odin Inspector 与 Photon Plus。",
            "主题在开幕时公布，参赛者可单人或多人在限定时间内完成一款可玩原型。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "7 天创作加 Buffer 期的安排，把“赶 deadline”和“收尾打磨”拆开，更贴近真实项目节奏。学生团队不必追求大而全，围绕主题做一个机制完整的小原型，反而更容易在评委面前讲清楚设计意图。"
        }
      ]
    },
    {
      "id": "co-ncda-2026",
      "category": "contest",
      "subcategory": "赛事·奖项",
      "title": "NCDA 第十四届总决赛本周末线上答辩：报名 10 月已截止，赛程进入收官",
      "summary": "第十四届全国大学生数字媒体科技作品及创意竞赛通知显示，全国总决赛定于 11 月 27 日至 29 日线上评审答辩，颁奖暂定 12 月 4 日至 6 日在北京；报名 10 月 23 日已截止。没赶上的学生可把这份赛程存进日历，明年按同一节奏准备。",
      "source": "全国大学生数字媒体科技作品及创意竞赛组织委员会",
      "date": "2026-11-27",
      "url": "http://www.cmit.cn/en/html/tongzhigonggao/show-144-45826-1.html",
      "image": "",
      "badge": "赛事日历",
      "badgeType": "event",
      "readTime": 4,
      "hotScore": 76,
      "tags": [
        "NCDA",
        "数字媒体",
        "总决赛"
      ],
      "content": [
        {
          "title": "信息要点",
          "type": "list",
          "items": [
            "官方通知显示，2026 年第十四届全国大学生数字媒体科技作品及创意竞赛全国总决赛安排在 11 月 27 日至 29 日。",
            "总决赛采用线上评审、作品展示与答辩交流；颁奖典礼及作品展示暂定 12 月 4 日至 6 日在北京举行。",
            "报名及作品提交已于 10 月 23 日 23:59:59 截止，赛区选拔在 11 月 2 日至 15 日进行，入围名单 11 月 19 日至 22 日公布。",
            "参赛面向全日制研究生、本科及高职高专学生，专业不限，每队不超过 5 人，可设 1 至 2 名指导教师。"
          ]
        },
        {
          "title": "学习观察",
          "type": "text",
          "text": "报名窗口已经关上，这条更适合当作赛程日历来记：它把校赛、赛区赛、国赛的时间线摆得很清楚。打算明年参加的学生，可以按这份节奏倒推准备作品，而不是等到截止前两周才动手。"
        }
      ]
    }
  ]
};
