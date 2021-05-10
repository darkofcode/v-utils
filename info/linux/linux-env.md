# env

## set env

> export TEST="hello"

## view all env

> printenv

## view specific env

> printenv | grep -i test

grep find all in printenv
-i case insensitive

## remove env

> unset TEST

## import env from file

> source envDirPath

inside .env
export PORT="3001"
export PGUSER="postgres"
export PGHOST="localhost"
export PGPASSWORD="password123"
