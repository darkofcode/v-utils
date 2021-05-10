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
