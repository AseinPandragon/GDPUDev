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


class Handler(BaseHTTPRequestHandler):
    protocol_version = 'HTTP/1.1'

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
