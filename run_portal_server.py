import http.server
import socketserver
import os
import sys
import threading
from auto_sync_pipeline import AutoSyncWatcher, scan_and_rebuild_archives

PORT = 8000
DIRECTORY = r"C:\Users\Administrator\Doubao\chats\2026-08-27\new-chat"

class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)

    def end_headers(self):
        # 允许跨域与禁用缓存，保证实时热更新
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Cache-Control', 'no-cache, no-store, must-revalidate')
        super().end_headers()

    def guess_type(self, path):
        # 确保 SVG, JS, HTML 正确的 MIME 类型与 UTF-8 编码
        if path.endswith('.svg'):
            return 'image/svg+xml'
        if path.endswith('.js'):
            return 'application/javascript; charset=utf-8'
        if path.endswith('.html'):
            return 'text/html; charset=utf-8'
        return super().guess_type(path)

class ThreadingHTTPServer(socketserver.ThreadingMixIn, http.server.HTTPServer):
    daemon_threads = True

if __name__ == '__main__':
    print("=" * 60)
    print(f" [GDPU GAMEDEV HUB] 智能全息门户 Web 服务器 (Port {PORT})")
    print(f" 本地伺服目录: {DIRECTORY}")
    print(f" 本地访问地址: http://localhost:{PORT}")
    print(f" cpolar 控制台: http://127.0.0.1:9200")
    print("=" * 60)

    # 启动后台自动文件监听与实时同步管道（零人工干预）
    watcher = AutoSyncWatcher(watch_dir=os.path.join(DIRECTORY, "data"), interval_sec=2.0)
    watcher.start()

    with ThreadingHTTPServer(('0.0.0.0', PORT), Handler) as httpd:
        try:
            httpd.serve_forever()
        except KeyboardInterrupt:
            print("\nServer stopping...")
            watcher.stop()
            print("Server stopped.")
