# zsh for window

[ref](https://gist.github.com/fworks/af4c896c9de47d827d4caa6fd7154b6b)
zsh theme for git window

## Steps

1. Download the latest zsh package:
   <https://packages.msys2.org/package/zsh?repo=msys&variant=x86_64>

Example:

```
zsh-5.7.1-1-x86_64.pkg.tar.xz
```

Update:

The package now is compacted using `zstd`, so now we need some "special" extractor.  
So, in my case, I've downloaded this file  
<https://repo.msys2.org/msys/x86_64/zsh-5.8-5-x86_64.pkg.tar.zst>
And extracted it using the Peazip.  
<https://peazip.github.io/zst-compressed-file-format.html>

2. Extract the content to your git bash installation dir:

Usually `C:\Program Files\Git`

3. Test it and config zsh:

Open git bash and type:

```
zsh
```

So, this step is important, it seems `zsh` will ask a few configurations, like the tab completion, history, etc.  
Please read the options and set that according to your use.

4. Installing oh-my-zsh, execute the following cmd on git bash

```shell
sh -c "$(curl -fsSL https://raw.githubusercontent.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

5. Configuring zsh as default shell

Edit the `~/.bashrc` file. (create it if it doesn't exist)

Add the following lines at the end of the file

```
# Launch Zsh
if [ -t 1 ]; then
exec zsh
fi
```

Close and open again the git bash.

## Optional steps: set up .zshrc

6. open .zshrc

   > vi ~/.zshrc

   - set ZSH_THEME to avit
     example

   ```
   ZSH_THEME="avit"
   ```

   - load customer alias & ssh

   ```
   source ~/.aliasrc
   source ~/.sshrc

   ```

   - .aliasrc example

   ```shell
    # Alias

    alias ll="ls -al --color=tty"

    # get ip address

    alias ip="curl icanhazip.com"

    # list directory only

    alias lsdir="ls -al | grep ^d"
    alias ldir="ls -al | grep ^d"

    # connect to darth

    alias cdarth="ssh -i ~/.ssh/darth ubuntu@168.138.174.63"

    # connect to zmenka

    alias czmenka="ssh -i ~/.ssh/id_rsa zmenka@188.166.209.161"
   ```

   - .sshrc example

   ```shell
    # silently enable ssh-agent
    {eval $(ssh-agent)} &>/dev/null
    # add git ssh
    ssh-add -q "${HOME}/.ssh/id_rsa_git_home"
    # for possiblekey in ${HOME}/.ssh/*; do
    #     if grep -q PRIVATE "$possiblekey"; then
    #         ssh-add -q "$possiblekey"
    #     fi
    # done
   ```
