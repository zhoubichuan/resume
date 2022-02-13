
# 1.发布到master分支
git add -A
git commit -m 'master'
git pull gitee master
git push gitee master

# 2.打包
npm run build

cd dist
# 3.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add gitee https://gitee.com/zhoubichuan/zhoubichuan.git
git push -f gitee gh-pages

# 4.返回初始目录
cd -
# 自动化打包同时将源码发布到master分支，将打包后的代码发布到gh-pages分支

# 确保脚本抛出遇到的错误
set -e

# 1.发布到master分支
git add -A
git commit --no-verify -m $(date +%F)
git pull origin master
git push -u origin master
git push origin master

# 2.打包
npm run build:prod

# 3.进入打包目录
cd dist

# 4.发布到gh-pages分支
git init
git checkout --orphan gh-pages
git add .
git commit -m 'gh-pages'
git remote add origin https://github.com/zhoubichuan/resume.git
git push -f origin gh-pages

# 5.返回初始目录
cd -
