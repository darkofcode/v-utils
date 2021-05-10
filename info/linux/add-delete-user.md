# add delete user

full elaborate at [digital ocean](https://www.digitalocean.com/community/tutorials/how-to-add-and-delete-users-on-ubuntu-18-04)

## add user

> adduser newuser

## Adding the New User to the Sudo Group

### view user group

> groups newuser

### add user to sudo group

> usermod -aG sudo newuser

## delete user

> deluser newuser

## also delete user home dir

> deluser --remove-home newuser
