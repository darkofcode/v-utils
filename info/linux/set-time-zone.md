# set linux time zone

check time zone

```
timedatectl status
```

show available timezones

```
timedatectl list-timezones
```

set time zone

```
sudo timedatectl set-timezone Asia/Bangkok
```

## set local time so that cron use local time

```
// create backup of local time
mv /etc/localtime /etc/localtime.bak

// create symbolic link to local time zone
ln -s /usr/share/zoneinfo/Asia/Bangkok /etc/localtime

// restart cron time
service crond restart
```
