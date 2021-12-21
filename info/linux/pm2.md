# pm2

## install

we need to install pm2 globally

> npm i -g pm2

## run node with pm2 in background

> pm2 start directoryToRunNode --name setNameOfRunningProcess
> pm2 start server.js

## start next for development

pm2 start npm --name "next" -- run dev

## start next for production

npm run build
pm2 start npm --name "next" -- start

## view all running process

> pm2 status

## stop process

> pm2 stop processNameOrProcessId

stop process 0 and 1

> pm2 stop 0 1

## pm2 restart process

> pm2 restart 0 1

## set pm2 to auto startup

- pm2 startup

pm2 will print command of what to do next

> [PM2] Init System found: systemd
> [PM2] To setup the Startup Script, copy/paste the following command:
> sudo env PATH=$PATH:/home/zmenka/.nvm/versions/node/v14.16.1/bin /home/zmenka/.nvm/versions/node/v14.16.1/lib/node_modules/pm2/bin/pm2 startup systemd -u zmenka --hp /home/zmenka

- run the above command

> sudo env PATH=$PATH:/home/zmenka/.nvm/versions/node/v14.16.1/bin /home/zmenka/.nvm/versions/node/v14.16.1/lib/node_modules/pm2/bin/pm2 startup systemd -u zmenka --hp /home/zmenka

- save all running process

> pm2 save

## pm2 logs

> pm2 logs processId_or_name

logs location '~/.pm2/logs
/home/ubuntu/.pm2/logs

> pm2 logs
> log all process
>
> pm2 logs 0
> log specific process

## pm2 clear logs

> pm2 flush

## pm2 monitor process

> pm2 monit
