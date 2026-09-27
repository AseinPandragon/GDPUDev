# 自动化执行记录：每日游戏开发技术学习观察简报

## 2026-09-27（星期日）
- 初版仅 5 条（周日稿源薄），用户反馈"不是要保底 30 吗"→ 深挖扩至 17 条并重推（b84f859）。
- 深挖方法（周日稿源薄时的标准流程，后续复用）：①GI.biz 月度归档页（web_fetch /archive/2026/09）枚举本周全部文章 URL——9/22-25 共 24 篇，其中 13 篇未在昨日版使用，全部纳入；②RPS /latest 页 web_fetch 枚举标题，但 RPS 的 slug 与标题不一致、猜测 URL 全 404——需用特征短语反查（web_search "rockpapershotgun.com 关键词"），反查命中的 slug 用 IWR 验证 200；③优先一手来源替换二手：ARC Raiders PvE 用官方公告（arcraiders.com/news/pve-toggle-beta-test）、GTA4 RTX mod 用 GitHub 仓库（xoxor4d/gta4-rtx）。
- 内容（17 条）：hero=The Relic Xbox 上线+永久降价（发行策略）；GI.biz 10 条（World's Edge 裁员、Rare/Halo 划归动视+Ninja Theory 拟关+268 裁员、动视反作弊 85 亿美元、欧盟 KIDS Act 指南、Discord 年龄验证重启、Sensor Tower 日本销量+13%、新发行商 PUBLSH、Secret Mode 双支柱访谈、007 Switch2 三度延期、Bungie 恢复下架内容）；RPS 2 条（Quake Champions 转买断、Arc Raiders PvE 官方公告）；开源 1 条（GTA4 RTX Remix mod，GitHub xoxor4d/gta4-rtx）；保留 Godot 愿景声明、Game-Oracle AI 销量报告、罗马/墨尔本活动 4 条。
- 全部 URL IWR 200，og:image（assetsio 模式）随验证一并抓取；rpgamer/gamesweek 图用 Edge CDP 浏览器验证。
- 同步 news_data.js/archive_list.js（UTF-8 无 BOM、CRLF）；去重通过；commit b84f859 已 push（未手动同步服务器）。
- 教训：①周日也要挖满——GI.biz 归档页枚举 + RPS 特征短语反查即可凑足；②RPS slug 猜测必 404，必须反查；③IWR catch 块别写死 '404x'，要输出真实异常。
