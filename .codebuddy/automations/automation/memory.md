# 自动化执行记录：每日游戏开发技术学习观察简报

## 2026-09-25（星期五）
- 生成 data/2026-09-25.js（hero=NVIDIA ACE 自主AI角色 + 18 条 items，覆盖 engine/ai/industry/games/opensource/tutorials）。
- 同步 news_data.js（与当日 data 完全一致）与 archive_list.js（顶部插入 09-25，原顶部 09-24 desc 改「往期技术归档」）。
- 全部条目 URL 与配图逐条验证 HTTP 200（PowerShell IWR），图片均为 image/*；Unity Learn 页面 403 反爬弃用；Steam header.jpg 对新游戏 404，改用 store og:image 的 fastly capsule 图。
- 与 2026-09-24 归档去重：无重复 url/标题。
- git commit f8a1d30 已 push origin main（3 files changed）。
- 经验：DeferExecuteTool 调 web_search 需把 toolName 放第一参数；GitHub og 卡片图、xboxwire/sanity/ea drop-assets 图源可用；cdn.akamai.steamstatic.com header.jpg 老游戏可用、新游戏常 404。
