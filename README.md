create github pull....
in local sgit steve create new branch
commit...
push to origin..
in github steve go to   pushed branch   ..create pull request...





https://github.com/matauranz/steve

GitPatch

Step 1: From your project repository, bring in the changes and test.

git fetch origin 
git checkout -b matauranz-patch-2 origin/matauranz-patch-2 
git merge master

Step 2: Merge the changes and update on GitHub.

git checkout master 
git merge --no-ff matauranz-patch-2 
git push origin master



