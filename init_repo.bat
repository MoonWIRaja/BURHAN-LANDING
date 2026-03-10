git init
git branch -m main
git add .
git commit -m "Initial commit"
gh repo create BURHAN-LANDING --public --source=. --remote=origin --push
