#!/usr/bin/env python3
# GDPUDev 匿名访问统计收集器（自托管埋点后端）
# 只收集：页面路径、referrer、停留秒数、视口尺寸。无 cookie、无指纹、不记录个人信息。
# 数据按月写入 /var/lib/gdpudev-analytics/visits-YYYYMM.jsonl
import json
import os
import time
from http.server import BaseHTTPRequestHandler, HTTPServer

DATA_DIR = '/var/lib/gdpudev-analytics'
MAX_BODY = 4096
ALLOWED_TYPES = ('view', 'leave')


def load_rows():
    rows = []
    try:
        for name in sorted(os.listdir(DATA_DIR)):
            if not name.startswith('visits-') or not name.endswith('.jsonl'):
                continue
            with open(os.path.join(DATA_DIR, name), encoding='utf-8') as f:
                for line in f:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        rows.append(json.loads(line))
                    except Exception:
                        pass
    except Exception:
        pass
    rows.sort(key=lambda r: r.get('ts', ''))
    return rows


def build_summary():
    """只读汇总：供站长后台 admin.html 的「访问数据」面板使用。
    本接口不自行鉴权，由 nginx location = /gamedev/analytics/summary
    加 Basic Auth（mayfly.htpasswd）后再转发进来。"""
    rows = load_rows()
    views = [r for r in rows if r.get('type') == 'view']
    leaves = [r for r in rows if r.get('type') == 'leave']

    daily = {}
    for r in views:
        d = (r.get('ts') or '')[:10]
        if d:
            daily[d] = daily.get(d, 0) + 1

    ips = {}
    for r in views:
        ip = r.get('ip') or 'unknown'
        ips[ip] = ips.get(ip, 0) + 1

    paths = {}
    for r in views:
        p = r.get('path') or '/'
        paths[p] = paths.get(p, 0) + 1

    refs = {}
    for r in views:
        rf = (r.get('ref') or '').strip() or '直接访问/无来源'
        refs[rf] = refs.get(rf, 0) + 1

    dwell = {}
    for r in leaves:
        dwell.setdefault(r.get('path') or '/', []).append(r.get('dwell') or 0)
    dwell_avg = {p: round(sum(v) / len(v), 1) for p, v in dwell.items() if v}

    devices = {'mobile': 0, 'desktop': 0}
    for r in views:
        w = r.get('w') or 0
        devices['mobile' if w < 768 else 'desktop'] += 1

    def top(d, n):
        return [{'k': k, 'v': v} for k, v in
                sorted(d.items(), key=lambda x: -x[1])[:n]]

    # 会话配对：leave 找它前面最近的同 IP 同路径 view，还原「谁什么时候看了多久」
    last_open = {}
    sessions = []
    for r in rows:
        key = (r.get('ip'), r.get('path'))
        if r.get('type') == 'view':
            last_open[key] = r.get('ts')
        elif r.get('type') == 'leave' and key in last_open:
            sessions.append({'ts': last_open[key], 'ip': r.get('ip'),
                             'path': r.get('path'), 'dwell': r.get('dwell') or 0})
            last_open.pop(key, None)
    sessions.sort(key=lambda s: s['ts'], reverse=True)

    return {
        'generated_at': time.strftime('%Y-%m-%d %H:%M:%S'),
        'first_ts': rows[0].get('ts') if rows else None,
        'totals': {'records': len(rows), 'views': len(views),
                   'unique_ips': len(ips)},
        'daily': [{'date': d, 'views': v} for d, v in sorted(daily.items())],
        'top_ips': top(ips, 10),
        'top_paths': top(paths, 15),
        'top_refs': top(refs, 8),
        'dwell_avg': [{'k': p, 'v': v} for p, v in
                      sorted(dwell_avg.items(), key=lambda x: -x[1])],
        'devices': devices,
        'recent_sessions': sessions[:40],
    }


class Handler(BaseHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'

    def do_GET(self):
        if self.path.split('?')[0].rstrip('/') != '/summary':
            self._reply(404)
            return
        try:
            data = build_summary()
        except Exception as e:
            body = json.dumps({'error': str(e)}, ensure_ascii=False).encode('utf-8')
            self.send_response(500)
            self.send_header('Content-Type', 'application/json; charset=utf-8')
            self.send_header('Content-Length', str(len(body)))
            self.end_headers()
            self.wfile.write(body)
            return
        body = json.dumps(data, ensure_ascii=False).encode('utf-8')
        self.send_response(200)
        self.send_header('Content-Type', 'application/json; charset=utf-8')
        self.send_header('Cache-Control', 'no-cache')
        self.send_header('Content-Length', str(len(body)))
        self.end_headers()
        self.wfile.write(body)

    def do_POST(self):
        if self.path.split('?')[0].rstrip('/') != '/collect':
            self.send_response(404)
            self.send_header('Content-Length', '0')
            self.end_headers()
            return
        try:
            n = int(self.headers.get('Content-Length', 0))
        except (TypeError, ValueError):
            n = 0
        if n <= 0 or n > MAX_BODY:
            self._reply(400)
            return
        raw = self.rfile.read(n)
        try:
            payload = json.loads(raw.decode('utf-8'))
            if not isinstance(payload, dict):
                raise ValueError
        except Exception:
            self._reply(400)
            return

        def _s(key, limit):
            v = payload.get(key, '')
            return str(v)[:limit] if v is not None else ''

        def _i(key):
            v = str(payload.get(key, '0'))
            return int(v) if v.isdigit() else 0

        rec = {
            'ts': time.strftime('%Y-%m-%d %H:%M:%S'),
            'ip': self.headers.get('X-Real-IP') or self.client_address[0],
            'type': _s('t', 16),
            'path': _s('p', 300),
            'ref': _s('r', 300),
            'dwell': min(_i('d'), 86400),
            'w': _i('w'),
            'h': _i('h'),
        }
        # 只收本站路径，且事件类型合法
        if not rec['path'].startswith('/gamedev') or rec['type'] not in ALLOWED_TYPES:
            self._reply(204)
            return
        try:
            if not os.path.isdir(DATA_DIR):
                os.makedirs(DATA_DIR)
            fn = os.path.join(DATA_DIR, 'visits-%s.jsonl' % time.strftime('%Y%m'))
            with open(fn, 'a', encoding='utf-8') as f:
                f.write(json.dumps(rec, ensure_ascii=False) + '\n')
        except Exception:
            pass  # 统计写入失败不影响响应
        self._reply(204)

    def _reply(self, code):
        self.send_response(code)
        self.send_header('Content-Length', '0')
        self.end_headers()

    def log_message(self, fmt, *args):
        pass  # 静默：访问记录已在 nginx 日志与 JSONL 中


if __name__ == '__main__':
    HTTPServer(('127.0.0.1', 9010), Handler).serve_forever()
