# vim

vim is module editor

## open file

> vim dir/fileName.txt

## close vim

> :q

## quite & write

> :wq

## close without saving

> :q!

## enter edit mode

> i

## quite edit mode

> esc

## view line number

> :set number

set number by default
[ref](https://vim.fandom.com/wiki/Open_vimrc_file)

Add set number to your .vimrc file in your home directory.

> vi ~/.vimrc

add the following line

> set number

## cursor

| cmd    |                      desc                      |
| ------ | :--------------------------------------------: |
| h      |                move cursor left                |
| j      |                move cursor down                |
| k      |                 move cursor up                 |
| l      |               move cursor right                |
| p      |       paste the buffer after the cursor        |
| P      |       paste the buffer before the cursor       |
| /      |                   /findWord                    |
| gg     |                goto first line                 |
| G      |                 goto last line                 |
| Ctrl-D |              move half-page down               |
| Ctrl-U |               move half-page up                |
| Ctrl-B |                    page up                     |
| Ctrl-F |                   page down                    |
| w      |               move to next word                |
| W      |             move back to next word             |
| 0      | move to the very beginning of the current line |
| $      |              move to end of line               |
| r      |                replace one text                |
| R      |               enter replace mode               |

## delete

| cmd |                                        desc                                         |
| --- | :---------------------------------------------------------------------------------: |
| x   |                        delete the character under the cursor                        |
| dd  |                                 delete current line                                 |
| dw  | delete from the current cursor position to the beginning of the next word character |
| diw |            delete inner word will delete the whole word under the cursor            |
