/* GDPUDev 匿名访问统计埋点
 * 无 cookie、无指纹、无第三方；只上报：页面路径、referrer、停留秒数、视口尺寸。
 * 数据仅用于站长了解哪些内容受欢迎，不记录任何个人信息。
 *
 * v2（2026-10-29 改进）：新增「虚拟页面」停留统计。
 *   此前分类筛选（?cat=）与文章打开（?art=）只发 view、从不发 leave，
 *   导致服务端 leaves=0、无法配对出 dwell，后台只能看到「打开了几次」。
 *   现在每次切换虚拟页面或离开页面时，都会补发对应虚拟路径的 leave（携带停留秒数），
 *   从而能在后台看到「每个分类 / 每篇文章被看了多久」（即 admin.html 所需的阅读时长）。
 */
(function () {
  function now() { return Date.now(); }

  function sendRaw(type, path, t0) {
    try {
      var payload = JSON.stringify({
        t: type,
        p: path,
        r: document.referrer || '',
        d: Math.round((now() - (t0 || pageLoadT0)) / 1000),
        w: window.innerWidth || 0,
        h: window.innerHeight || 0
      });
      if (navigator.sendBeacon) {
        navigator.sendBeacon('/gamedev/collect', payload);
      } else {
        var x = new XMLHttpRequest();
        x.open('POST', '/gamedev/collect', true);
        x.send(payload);
      }
    } catch (e) { /* 统计失败不影响页面 */ }
  }

  var pageLoadT0 = now();
  var pageLeaveSent = false;

  // 虚拟页面（分类筛选 / 文章打开）状态
  var vpPath = null;       // 当前虚拟页面路径（含 cat=/art= 参数）；null = 在基础页
  var vpT0 = 0;            // 当前虚拟页面开始时间
  var vpLeaveSent = false; // 当前虚拟页面是否已发过 leave

  function sendPageLeave() {
    if (pageLeaveSent) return;
    pageLeaveSent = true;
    sendRaw('leave', location.pathname + (location.search || ''), pageLoadT0);
  }

  // 关闭当前虚拟页面：补发它的 leave，携带从打开到此刻的停留时长
  function sendVpLeave() {
    if (vpPath && !vpLeaveSent) {
      vpLeaveSent = true;
      sendRaw('leave', vpPath, vpT0);
    }
  }

  function startVp(path) {
    vpPath = path;
    vpT0 = now();
    vpLeaveSent = false;
  }

  // 分类/文章点击埋点（供新闻个性化实时调整 + 虚拟页面停留统计）：
  // 复用 /gamedev/collect，把分类/文章归属编码进 path 的 query，
  // 聚合脚本按 cat=/art= 参数统计各分类参与度与停留时长。
  window.__track = function (kind, value) {
    try {
      // 先关闭上一个虚拟页面（补发它的 leave，携带停留时长）
      sendVpLeave();
      var base = location.pathname + (location.search || '');
      var sep = base.indexOf('?') >= 0 ? '&' : '?';
      var p = base + sep + (kind === 'cat' ? 'cat=' : 'art=') + encodeURIComponent(value || '');
      startVp(p);
      sendRaw('view', p, vpT0);
    } catch (e) { /* 统计失败不影响页面 */ }
  };

  // 基础页：加载即 view
  sendRaw('view', location.pathname + (location.search || ''), pageLoadT0);

  function onLeave() {
    sendVpLeave();   // 关闭当前虚拟页面（若有）
    sendPageLeave(); // 关闭基础页
  }
  window.addEventListener('pagehide', onLeave);
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') onLeave();
  });
})();
