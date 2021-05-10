# psql

full elaborate at [digital ocean](https://www.digitalocean.com/community/tutorials/how-to-install-and-use-postgresql-on-ubuntu-18-04)

## update & install

Ubuntu’s default repositories contain Postgres packages, so you can install these using the apt packaging system.

Since this is your first time using apt in this session, refresh your local package index. Then, install the Postgres package along with a -contrib package that adds some additional utilities and functionality:

> sudo apt update
> sudo apt install postgresql postgresql-contrib

## login by switch to postgres user

The installation procedure also created a user account called postgres that is associated with the default Postgres role. In order to use Postgres, you can log into that account.
since postgres use pear login, those account with the same as postgres role can login in postgres database

### view users

> less /etc/passwd

### Switching Over to the postgres Account

> sudo -i -u postgres

or

> sudo su - postgres

### login to psql

as we are now logged in postgres user, so we can login to postgres

login to postgres with the same role as linux user name

> psql

by default postgres will try to login to postgres role and postgres database

or

login to other database name

> psql -d otherDatabaseName

## quit postgres

> \q

## login without switching to postgres user

> sudo -u postgres psql

this command mean, first login to 'postgres' linux account then run 'psql' command

## Creating a New Role as in postgres

after login with postgres database as postgres role

create new simple role
Superuser:no | Create role:no | Create DB:no | Connections: no limit

sql command

> CREATE ROLE newRoleName WITH LOGIN ENCRYPTED PASSWORD 'password1';

or create super user

> CREATE ROLE mySuperuserName WITH SUPERUSER CREATEDB CREATEROLE LOGIN ENCRYPTED PASSWORD 'mysuperpass2';

create new super user with ability of createDb and createRole
with password

## change role password

-sql command

> alter role zmenka with password 'newPassword' ;

## create super user new role without login into database

shell command

> sudo -u postgres createuser --interactive

this command mean:
fist login to 'postgres' linux account then run 'createuser --interactive' command

The script will prompt you with some choices and, based on your responses, execute the correct Postgres commands to create a user to your specifications.

output

> Enter name of role to add: sammy
> Shall the new role be a superuser? (y/n) y

## view all roles

sql command

> \du

## list all database

sql command

> \l

## create db as login in postgres

> create database newDataBaseName;

## create db without log in postgres

> sudo -u postgres createdb newDatabaseName

first login to postgres then run command createdb

## connect to db

> \c databaseName

## drop role

sql command

> drop role roleName;

## drop database

sql command

> drop database dataBaseName;

## view postgres config

> zmenka@node-zmenka:~$ cat /etc/postgresql/versionNo/main/pg_hba.conf
