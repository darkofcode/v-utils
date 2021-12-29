# root crontab

## 1- renew certbot

## 2- renew cloudflare

```
0 3 * * *   /usr/bin/certbot -q -n renew --post-hook "systemctl reload nginx"
30 3 * * *  /usr/bin/node /home/zmenka/kinodes/back/admin/set-cloudflare-ip.js --post-hook "systemctl reload nginx"

30 3 * * *  /bin/sh /home/zmenka/kinodes/back/admin/set-cloudflare-ip.sh --post-hook "systemctl reload nginx"

0 3 * * *   /usr/bin/certbot -q -n renew --post-hook "systemctl reload nginx"
30 3 * * *  /usr/bin/node /home/ubuntu/darth/back/src/cloudflare/set-cloudflare-ip.js --post-hook "systemctl reload nginx"


```
