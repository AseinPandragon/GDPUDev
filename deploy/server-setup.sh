#!/usr/bin/env bash
# GDPUDev 腾讯云服务器一键部署脚本（Ubuntu/Debian，root 或 sudo 执行）
# 用法：把仓库克隆/上传到服务器后，在仓库目录执行 bash deploy/server-setup.sh
set -e

SITE_DIR=/var/www/gdpudev
REPO_URL=https://github.com/AseinPandragon/GDPUDev.git

echo "==> 1/5 安装 nginx 与 git"
apt-get update -y
apt-get install -y nginx git

echo "==> 2/5 拉取站点文件到 ${SITE_DIR}"
if [ -d "$SITE_DIR/.git" ]; then
    git -C "$SITE_DIR" fetch origin && git -C "$SITE_DIR" reset --hard origin/main
else
    git clone "$REPO_URL" "$SITE_DIR"
fi
chown -R www-data:www-data "$SITE_DIR"

echo "==> 3/5 安装 nginx 站点配置"
cp "$(dirname "$0")/nginx-gdpudev.conf" /etc/nginx/sites-available/gdpudev
ln -sf /etc/nginx/sites-available/gdpudev /etc/nginx/sites-enabled/gdpudev
# 移除默认站点避免冲突（可按需保留）
rm -f /etc/nginx/sites-enabled/default

echo "==> 4/5 校验并重载 nginx"
nginx -t
systemctl reload nginx

echo "==> 5/5 配置定时同步（每 30 分钟 git pull，配合 CodeBuddy 每日推送自动更新）"
cat > /etc/cron.d/gdpudev-sync <<'CRON'
*/30 * * * * root cd /var/www/gdpudev && git fetch origin && git reset --hard origin/main >/dev/null 2>&1
CRON
chmod 644 /etc/cron.d/gdpudev-sync

echo
echo "部署完成。剩余手动步骤："
echo "  1) 腾讯云 DNSPod 给 gdpudev.cn 添加 A 记录：@ 和 www -> 服务器公网 IP"
echo "  2) 腾讯云控制台安全组放行 80 端口（后续上 HTTPS 再放行 443）"
echo "  3) 验证：curl -H 'Host: www.gdpudev.cn' http://127.0.0.1/ 应返回首页 HTML"
echo "     curl -H 'Host: www.gdpudev.cn' http://127.0.0.1/gamedev/ 应返回同一首页"
