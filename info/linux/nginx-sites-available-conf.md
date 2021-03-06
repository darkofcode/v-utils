# nginx sites-available

```
server {

  root /home/zmenka/kinodes/front/build;

  # nginx look for these files
  index index.html index.htm;

  server_name kinodes.com www.kinodes.com ;

  # make nginx for single page app
  # nginx will always return index.html
  # $uri/ /index.html NOT $uri/index.html
  location / {
      try_files $uri $uri/ /index.html;
  }

  location /api {

      proxy_pass http://localhost:5000;
      proxy_http_version 1.1;
      proxy_set_header Upgrade $http_upgrade;
      proxy_set_header Connection 'upgrade';
      proxy_set_header Host $host;
      proxy_cache_bypass $http_upgrade;
      # set-ip-client, tell nginx to forward ip address from client otherwise
      # will get local ip address
      proxy_set_header X-Forwarded-For $remote_addr;

  }

  listen [::]:443 ssl ipv6only=on; # managed by Certbot
  listen 443 ssl; # managed by Certbot
  ssl_certificate /etc/letsencrypt/live/kinodes.com/fullchain.pem; # managed by Certbot
  ssl_certificate_key /etc/letsencrypt/live/kinodes.com/privkey.pem; # managed by Certbot
  include /etc/letsencrypt/options-ssl-nginx.conf; # managed by Certbot
  ssl_dhparam /etc/letsencrypt/ssl-dhparams.pem; # managed by Certbot

}

server {
    if ($host = www.kinodes.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


    if ($host = kinodes.com) {
        return 301 https://$host$request_uri;
    } # managed by Certbot


        listen 80 ;
        listen [::]:80 ;

        server_name kinodes.com www.kinodes.com 188.166.209.161;
    return 404; # managed by Certbot

}
```
