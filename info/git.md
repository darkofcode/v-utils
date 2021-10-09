# git command

## change new branch

<!-- if new bran is already existed -->

> > git checkout branchName

## change and create new branch

<!-- if new branch name is not yet existed -->

> > git checkout -b newBranchName

## merge new branch to master branch

<!-- copy all master branch to new branch -->

> > git merge master

## show all graph

> > git log --all --decorate --graph

```javascript
/*
  $  git log --all --decorate --graph
  * commit 429e8fd3a80c85cf8caf68d0a6a3c339345c2bf7 (HEAD -> newRole, origin/master, master)
  | Author: vichetch <ukvichetch@gmail.com>
  | Date:   Mon Feb 8 10:56:39 2021 +0700
  |
  |     before changing new role
  |
  * commit 3e2184c1f8860567f3ffa138693f4de4f3bc2c2a
  | Author: vichetch <ukvichetch@gmail.com>
  | Date:   Thu Jan 28 17:45:17 2021 +0700
  |
  |     finish acc-doc ref,left 80%
  |
  * commit b00a681e0f1a803ed7bb3b7d7a7aa4bdf066b60f
  | Author: vichetch <ukvichetch@gmail.com>
  | Date:   Sun Jan 17 23:36:40 2021 +0700
  |
  |     finish report 90%?
  |
  * commit e0e660522c9f4cf77bc673acabf772ae4ba11013
  | Author: vichetch <ukvichetch@gmail.com>
*/
```

## submodule

```javascript
// add submodule from remote shallow depth
> git submodule --depth depth <remote_path> <local_path>
ex: git submodule --depth 1 https://github.com/darthofcode/v-utils submodules/v-utils

// sparse-checkout clone only directory we need
// cd to that sub module 'cd submodules/v-utils'
> git sparse-checkout init // this will delete everything
> git sparse-checkout add js-functions // this will only add js-functions

// pull submodule
> git submodule update --remote
```
