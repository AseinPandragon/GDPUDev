/* GDPUDev 匿名访问统计埋点
 * 无 cookie、无指纹、无第三方；只上报：页面路径、referrer、停留秒数、视口尺寸。
 * 数据仅用于站长了解哪些内容受欢迎，不记录任何个人信息。
 */
(function () {
  var t0 = Date.now();
  var leaveSent = false;
  function send(type) {
    if (type === 'leave' && leaveSent) return;
    try {
      var payload = JSON.stringify({
        t: type,
        p: location.pathname + (location.search || ''),
        r: document.referrer || '',
        d: Math.round((Date.now() - t0) / 1000),
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
      if (type === 'leave') leaveSent = true;
    } catch (e) { /* 统计失败不影响页面 */ }
  }
  send('view');
  window.addEventListener('pagehide', function () { send('leave'); });
  document.addEventListener('visibilitychange', function () {
    if (document.visibilityState === 'hidden') send('leave');
  });
})();
