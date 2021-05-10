# Linux Cheat Sheet

linux command

## add new user account

> adduser userName

## grand user sudo mod (give access privilege)

> usermod -aG sudo userName

## basic firewall

ubuntu use ufw firewall, this ufw allow openSSh by default

## list all ufw allow application

> ufw app list

```javascript
OpenSSH;
```

## make sure ufw allow OpenSSH

> ufw allow OpenSSH

## enable ufw

> ufw enable
> type y to enter proceed

## view ufw status

> ufw status

## if root user use ssh to login

### copy file and directory to new user

> rsync --archive --chown=userAccountName:userAccountName ~/.ssh /home/userAccountName

## switch to new user account

> su - userName
