# Symbolic Links | Symlinks

## Directory Symlinks

every file in both directory mirror each others

> mklink /J "C:\LinkToFolder" "C:\Users\Name\OriginalFolder"

create symlink from next-server/\_share to back/share
note that folder share in back must not exist yet

> mklink /J "D:\code projects\projects\darthofcode\back\share" "D:\code projects\projects\darthofcode\next-server_share"
