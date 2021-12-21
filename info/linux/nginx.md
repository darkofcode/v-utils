# nginx

## install

> sudo apt install nginx -y
> -y to agree all term and condition

## config nginx to auto reboot

> sudo systemctl enable nginx

## check nginx status

> sudo systemctl status nginx

## restart nginx

> sudo systemctl restart nginx

## set-headers respond

install

> sudo apt install libnginx-mod-http-headers-more-filter

open nginx config

> sudo vi /etc/nginx/nginx.conf

add the following line

```

  more_set_headers 'Server: whatever-server-name-is';

```

## test if nginx working

> sudo nginx -t

## verify nginx is auto reboot

> systemctl status nginx

● nginx.service - A high performance web server and a reverse proxy server
Loaded: loaded (/lib/systemd/system/nginx.service; **enabled**; vendor preset: enabled)
Active: **active** (running) since Sun 2021-04-25 18:10:21 UTC; 9min ago

     Docs: man:nginx(8)

Main PID: 1992 (nginx)
Tasks: 2 (limit: 1150)
CGroup: /system.slice/nginx.service
├─1992 nginx: master process /usr/sbin/nginx -g daemon on; master_process on;
└─1994 nginx: worker process

## nginx config file

- location

  > cat /etc/nginx/sites-available/default

- copy default setting to newer one
  > sudo cp /etc/nginx/site-available/default /etc/nginx/site-available/zmenka

## modify nginx config file

```javascript
  server {
    listen 80;
    listen [::]:80;

    root /home/ubuntu/apps/yelp-app/client/build;

    # Add index.php to the list if you are using PHP
    index index.html index.htm index.nginx-debian.html;

    server_name kinodes.com www.kinodes.com;

    location / {
            try_files $uri /index.html;
    }

    location /api {
        proxy_pass http://localhost:5000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        # set-ip-client, tell nginx to forward ip address from client otherwise
        # will get local ip address
        proxy_set_header X-Forwarded-For $remote_addr;
        proxy_cache_bypass $http_upgrade;
  }
}
```

## enable symbolic link

> sudo ln -s /etc/nginx/sites-available/kinodes.com /etc/nginx/sites-enabled/

## gzip nginx

locate nginx nginx.conf
it should be /etc/nginx/nginx.conf

> sudo vim /etc/nginx/nginx.conf

then update as the following

```
  ##
  # Gzip Settings
  ##

  gzip_static on;
  gzip off;
  gzip_disable "MSIE [1-6]\.(?!.*SV1)";
  gzip_vary on;
  gzip_types text/plain text/css text/javascript image/svg+xml image/x-icon application/javascript application/x-javascript;

```

gzip_static - let nginx serve pre-compressed file;

## include cloudflare ip address

```javascript
http {
        ....
        ....
        ##
        # Virtual Host Configs
        ##

        # make sure cloudflare has its ip address
        # create crontab to get ip each day then
        include /etc/nginx/cloudflare;
        include /etc/nginx/conf.d/*.conf;
        include /etc/nginx/sites-enabled/*;
}
```

## cloudflare ip

```
#Cloudflare nginx set-up

# - IPv4
set_real_ip_from 173.245.48.0/20;
set_real_ip_from 103.21.244.0/22;
set_real_ip_from 103.22.200.0/22;
set_real_ip_from 103.31.4.0/22;
set_real_ip_from 141.101.64.0/18;
set_real_ip_from 108.162.192.0/18;
set_real_ip_from 190.93.240.0/20;
set_real_ip_from 188.114.96.0/20;
set_real_ip_from 197.234.240.0/22;
set_real_ip_from 198.41.128.0/17;
set_real_ip_from 162.158.0.0/15;
set_real_ip_from 104.16.0.0/13;
set_real_ip_from 104.24.0.0/14;
set_real_ip_from 172.64.0.0/13;
set_real_ip_from 131.0.72.0/22;

# - IPv6
set_real_ip_from 2400:cb00::/32;
set_real_ip_from 2606:4700::/32;
set_real_ip_from 2803:f800::/32;
set_real_ip_from 2405:b500::/32;
set_real_ip_from 2405:8100::/32;
set_real_ip_from 2a06:98c0::/29;
set_real_ip_from 2c0f:f248::/32;

# tell nginx to get real client ip not cloudflare ip
real_ip_header CF-Connecting-IP;

```
