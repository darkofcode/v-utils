# ubuntu basic command line

## create new folder

> mkdir folderName

## "~" default user **home** directory

> ~ = /home/currentUserName
> ex go to current user directory
> cd ~
> cd

## "/" user root directory

ex: goto root directory

> cd /

## create new file

ex:create "1.txt" filename in current directory

> touch 1.txt

## remove file and folder

ex: remove folder name "test" and all it file

> rm -rf test
> rm -R test

## view as text file, short file

> cat ~/.ssh/authorized_keys

## view long text file

> less ~/.ssh/someFile.txt

press q to quit

## move file/directory

> mv srcFileDir desFileDir

## rename

> mv fileDest renameDest
> ex: mv test.txt test2.txt

## copy file/dir (if change name, copy with new name)

> cp srcDir desDir

## list all files & directory in dir

1. list files/folders exclude hidden
   > ls directory to be listed or nothing if for current directory
2. list all files/folders/ include hidden
   > ls -la
3. list with more info
   > ls -l

## secure copy between local and remote (scp) with ssh protocol

with **scp**, we can copy a file or directory

- From your local system to a remote system.
- From a remote system to your local system.
- Between two remote systems from your local system.

1. syntax
   > scp [OPTION] [user@]SRC_HOST:]file1 [user@]DEST_HOST:]file2
   > [option] -r for directory, nothing for file

### example

- ex: with the same file name

  > scp file.txt remote_username@10.10.0.2:/home/zmenka/directory

- ex: change name
  > scp file.txt remote_username@10.10.0.2:/home/zmenka/directory/newfilename.txt
- ex: with different port
  > scp -P 2322 file.txt remote_username@10.10.0.2:/home/zmenka/directory
- ex: with specific ssh public key
  > scp -i pathPublicSShKey sourceDirectory remoteDir@13.1412.1:/home/zmenka/app

## view current directory

> pwd

## view directory of comment shell

> which node
> return /usr/bin/node

## locate search for file

search file case insensitive

> locate test -i

## view disk space usage

disk space in kb

> df
> disk space in mb
> df -m

## like task manager in window

> top

## append some text to file

> ech hello world, my name is jonh >> test.txt

### view users

> less /etc/passwd

### Switching Over to the userAccount

> sudo -i -u userAccount

## view currently login user

> w

## Switching Over to the postgres Account

> sudo -i -u postgres

or

> sudo su - postgres

## view dir used space

> du -shc ./\*

view current directory file size include sub directory

> -s for total size
> -h human readable format
> -c grand total

## reboot linux

> sudo reboot

## install unzip

> sudo apt install unzip

## unzip to directory

> unzip filename.zip -d /path/to/directory
> unzip -P passwordForZip -q -d /path/to/directory
> -P for password archive
> -q to suppress result message

## view sys memory info

> cat /proc/meminfo

MemTotal: 1008784 kB
MemFree: 372840 kB
MemAvailable: 676880 kB
Buffers: 31012 kB
Cached: 394196 kB
SwapCached: 0 kB
Active: 353212 kB
Inactive: 187712 kB
Active(anon): 120408 kB
Inactive(anon): 8252 kB
Active(file): 232804 kB
Inactive(file): 179460 kB
Unevictable: 0 kB
Mlocked: 0 kB
SwapTotal: 0 kB
SwapFree: 0 kB
Dirty: 176 kB
Writeback: 0 kB

> free -m

              total        used        free      shared  buff/cache   available

Mem: 985 168 363 12 452 660
Swap: 0 0 0

-m show memory in megabyte

## check os version

> cat /etc/os-release
