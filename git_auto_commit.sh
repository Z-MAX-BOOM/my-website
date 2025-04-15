#!/bin/bash

# 切换到你的 Git 仓库目录，根据实际情况修改路径
cd ~/my-website
# 添加所有更改的文件到暂存区
git add .

# 获取当前时间，作为默认的提交信息（也可以自行修改或输入）
current_time=$(date +"%Y-%m-%d %H:%M:%S")
default_commit_message="Auto commit at $current_time"

# 提示用户是否使用默认提交信息，或者输入自定义信息
echo "默认提交信息: $default_commit_message"
read -p "是否使用默认提交信息? (y/n): " choice

if [[ $choice == [yY] ]]; then
    commit_message="$default_commit_message"
else
    read -p "请输入自定义提交信息: " commit_message
fi

# 提交更改
git commit -m "$commit_message"

# 推送到远程仓库的主分支（这里假设是 main 分支，根据实际情况修改）
git push origin main
