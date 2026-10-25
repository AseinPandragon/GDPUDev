#!/usr/bin/env node
/**
 * 每日简报硬门禁（automation 例行规则 0/12 的可执行校验）
 * 用法: node scripts/check_briefing.js <YYYY-MM-DD>
 * 任何一项不满足即 exit 1，并打印缺失清单。commit 前必须跑，exit 0 才允许提交。
 * 校验项: items>=30(不含hero) | 六分类各>=5 | contest>=3 | hero不占名额 | id/url无重复 | category枚举 | 头条必配图 | items配图>=20
 */
const fs = require('fs');
const path = require('path');

const date = process.argv[2] || new Date().toISOString().slice(0, 10);
const file = path.join(__dirname, '..', 'data', `${date}.js`);
if (!fs.existsSync(file)) {
  console.error(`[check_briefing] 文件不存在: ${file}`);
  process.exit(1);
}
const src = fs.readFileSync(file, 'utf8');
const box = {};
try { new Function('window', src)(box); } catch (e) {
  console.error(`[check_briefing] JS 解析失败: ${e.message}`);
  process.exit(1);
}
const d = box.DAILY_NEWS_DATA;
if (!d || !Array.isArray(d.items)) { console.error('[check_briefing] 缺少 DAILY_NEWS_DATA.items'); process.exit(1); }

const SIX = ['engine', 'industry', 'games', 'opensource', 'tutorials', 'ai'];
const ENUM = [...SIX, 'contest'];
const problems = [];

const cnt = {};
for (const it of d.items) cnt[it.category] = (cnt[it.category] || 0) + 1;
const total = d.items.length;

if (total < 30) problems.push(`items 总数 ${total} < 30（hero 不占名额）`);
for (const c of SIX) if ((cnt[c] || 0) < 5) problems.push(`分类 ${c} 仅 ${(cnt[c] || 0)} 条 < 5`);
if ((cnt.contest || 0) < 3) problems.push(`分类 contest 仅 ${(cnt.contest || 0)} 条 < 3`);

const heroCat = d.hero && d.hero.category;

// 图片硬指标（2026-10-25 用户要求，门禁强制）：头条必须有图；items 至少 20 条有图
const heroImg = !!(d.hero && d.hero.image && String(d.hero.image).trim() !== '');
if (!heroImg) problems.push('头条(hero)缺少配图 image（必须配图）');
const imgItems = d.items.filter(it => it.image && String(it.image).trim() !== '').length;
if (imgItems < 20) problems.push(`有配图的 items 仅 ${imgItems} 条 < 20（头条另算，必须满足）`);

const ids = new Set(), urls = new Set();
for (const it of d.items) {
  if (ids.has(it.id)) problems.push(`重复 id: ${it.id}`);
  if (urls.has(it.url)) problems.push(`重复 url: ${it.url}`);
  ids.add(it.id); urls.add(it.url);
  if (!ENUM.includes(it.category)) problems.push(`非法 category: "${it.category}"（${it.id}），中文一律放 subcategory`);
  if (!it.url || !/^https?:\/\//.test(it.url)) problems.push(`URL 缺失或非法: ${it.id}`);
}

console.log(`[check_briefing] ${date}: items=${total} 分类清点=${JSON.stringify(cnt)} hero=${heroCat || '无'} 配图=${imgItems}/${d.items.length}(hero${heroImg ? '有图' : '缺图'})`);
if (problems.length) {
  console.error('[check_briefing] ❌ 不达标，禁止 commit：');
  problems.forEach(p => console.error('  - ' + p));
  process.exit(1);
}
console.log('[check_briefing] ✅ 达标，允许 commit push');
