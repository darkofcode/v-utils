# ssh

## generate ssh (on window use git bash )

create ssh key private & public key with name rsa in ~/.ssh directory

> ssh-keygen -t rsa

## login with vps with the same ssh public key

to be able to login vps, vps must has the same public key in that user.
vps ssh dir "~/.ssh/authorized_keys
local dir "~/.ssh/id_rsa_whatever_key_name
ex: login to root user account on vps with ip address: 1231.1231.12

> ssh root@1231.1231.12

## if has multiple ssh key

first run > ssh-add ~/.ssh/id_rsa_otherName
we don't have to add .pub  
the login again

## if has error

> Could not open a connection to your authentication agent.

run on shell command

> eval $(ssh-agent)

## ssh with specific key gen

> ssh -i locationFile
> ssh -i ~/.ssh/id_rsa.pub

## before install app on server

1. create user (follow the above mention)

## disable password login for root

> sudo vim /etc/ssh/sshd_config

set as following

1. PermitRootLogin no
2. PasswordAuthentication no

## reload sshd_config

> sudo systemctl reload sshd
