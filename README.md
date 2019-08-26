# Git Lunch & Learn

## Git CLI

### Basics

* **version** confirm installation of git and check version
> git --version

*  **help** get command list with description
> git --help
> git help <verb>

* **init** creates a git repository in the current directory
> git init
> git init <path_to_repo>

* **clone** pulls down a remote git repository 
> git clone <remote_url>

* **config** get or set configuration options
> git config user.name
> git config user.email
> git config --global user.name "<setusername>"

* **remote** get or set remote repository url
> git remote add origin <remote_url>
> git remote set-url origin <new_remote_url>

### Branch Commands

* **branch** - show current and available branches
> git branch (show local)
> git branch -a (show local & remote)
> git branch <new_branch_name>
> git branch -d <branch_to_delete> (deletes branch locally)

* **checkout** - switch from one branch to another
> git checkout <branch_to_check_out>
> git checkout -b <new_branch_name> (creates new branch and checks it out)

* **merge** - merge the named branch into the current branch
* git merge <branch_to_merge>

* **log** - shows version history for the current branch
> git log 
> git log -follow[<file>] (history for a file including renaming)

### Work Flow Commands

* **fetch** - download objects and refs from remote repository
> git fetch -a (syncs any changes in remote repo)

* **status** - lists all files with current changes on the current branch
> git status

* **diff** - lists the specific file changes on the current branch that are not yet staged
> git diff

* **add** - Adds a file to the staging area
> git add <file> (add specific file) 
> git add . (adds all changes)

 * **commit** - create commit and ready to push to remote
> git commit -m "commit message" (only takes from staging area)
> git commit -a (takes from staging area & local repository changes)

* **reset** - unstages the file/commit but preserves the file contents
> git reset <file> 
> git reset <commit_key> 
> git reset -hard <commit_key> (discard history and rewinds branch to named commit)

* **push** - push committed changes to remote server
> git push origin <branch_name> (push to target remote branch)
> git push -all origin (pushes all branches to your remote repository)

* **pull** - fetch and merge changes on the remote server to your working dir
> git pull origin <branch_name>

* **stash** - temp storage for modified tracked files
> git stash save (temp storage)
> git stash pop (recall most recent stashed files)
> git stash list (list alll stashed changesets)
> git stash drop (discard the most revent stashed changeset)
