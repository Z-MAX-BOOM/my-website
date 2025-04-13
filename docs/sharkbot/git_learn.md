---
sidebar_position: 3
---
# Git学习笔记
1. 安装git

   ```bash
   sudo apt install git
   ```

2. 下载代码

   ```bash
   git clone https://github.com/(项目地址).git
   ```

3. 配置本地git用户名和邮箱

   ```bash
   git config --global user.name "Shark"    # 用户名
   git config --global user.email "will.zmax@outlook.com"   # 邮箱
   ```

4. 配置默认分支（master）

   ```bash
   git config --global init.defaultBranch master
   ```

5. 查看配置

   ```bash
   git config -l
   ```

6. 在对应的目录创建代码仓库

   ```bash
   cd ~
   mkdir sharkbot
   cd ~/sharkbot
   git init   # 初始化空的git仓库
   ls -a   # 查看隐藏文件
   ```

7. 提交代码到暂存区

   ```bash
   git add 某一个文件/文件夹
   git add .   #提交目录下所有文件
   git reset   #移除暂存区的所有文件
   ```

8. 提交并附加提交信息

   ```bash
   git commit -m "测试fishbot代码提交功能"
   ```

9. 查询历史提交记录

   ```bash
   git log
   ```

10. 使用git忽略文件提交

    在工程文件中，install，build，log三个目录是编译产生的目录，并非工程目录，不用提交

    ```bash
    touch .gitignore # 新建文件 .gitignore
    gedit .gitignore
    sharkbot_ws/build/
    sharkbot_ws/install/
    sharkbot_ws/log/
    chapt7_ws/build/
    chapt7_ws/install/
    chapt7_ws/log/
    
    *.log  # 忽略所有以.log结尾的文件
    
    git add .gitignore
    git commit -m "添加git忽略文件"
    ```

11. 测试

    ```bash
    git add .
    git commit -m "提交代码测试"
    ```

12. git进阶

    ```bash
    git status   # 查看git状态
    git diff     # 查看git具体修改的内容
    git branch   # 查看git分支
    git checkout main   # 切换到main分支
    git checkout -D main   # 删除main分支
    ```

13. 托管到gitee/github

    ```bash
    touch README.md
    gedit README.md
    ```

    ```markdown
    # 基于ROS2的无人清扫小车运动规划设计
    ## 1. 项目介绍
    ## 2. 使用方法
    ### 2.1 安装依赖
    ### 2.2 运行
    ## 3. 作者：shark
    ```

    ```bash
    git add README.md
    git commit -m "添加自描述文件"
    ```

    1. 在gitee新建仓库，并同步本地仓库

       ```bash
       # 已有仓库?
       cd sharkbot
       # git remote add origin https://gitee.com/shaaaaark/sharkbot.git  # 需要输入用户名和密码
       git remote add origin git@gitee.com:shaaaaark/sharkbot.git    # SSH
       git push -u origin "master"
       ```
    
       	同步远程仓库到本地
    
       ```bash
       git pull
       ```
    
    2. 在github新建仓库，并同步本地仓库
    
       - 配置ssh协议，快速回车生成公钥
    
           ```bash
           ssh-keygen
           ```
    
       - 查看公钥
    
           ```bash
           cat  ~/.ssh/id_rsa.pub
           ```
    
       - 在github设置中保存SSH Key
    
       - 推送到github
    
           github使用ssh协议，ssh协议仓库地址：```git@github.com/用户名/仓库名.git```
           
           github默认分支为main，我们的仓库为master，修改
           
           origin被gitee占用，改为origin_github
           
           ```bash
           git remote add origin_github git@github.com:Z-MAX-BOOM/sharkbot.git
           git branch -M master
           git push -u origin_github master
           ```
       
       - 删除远程仓库
       
         ```bash
         git remote rm origin_github
         ```
       
    3. 查看仓库分支 
    
       ```bash
       git branch    # 列出本地已经存在的分支，并且当前分支会用*标记
       git branch -r    # 查看远程版本库的分支列表
       git branch -a    # 查看所有分支列表（包括本地和远程，remotes/开头的表示远程分支）
       git branch -v    # 查看一个分支的最后一次提交
       git branch --merged    # 查看哪些分支已经合并到当前分支
       git branch --no-merged    # 查看所有未合并工作的分支
       ```
       
    4. 进阶
    
       一次git push，提交到所有远程仓库
       
       ```bash
       git remote add origin git@gitee.com:shaaaaark/sharkbot.git
       git remote set-url --add origin git@github.com:Z-MAX-BOOM/sharkbot.git
       git push --set-upstream origin master    # 设置上游分支
       ```
       
    5. 创建.sh脚本文件和.desktop桌面启动文件，一键执行git push
    
        git_auto_commit.sh
        
        ```shell
        #!/bin/bash
        
        # 切换到你的 Git 仓库目录，根据实际情况修改路径
        cd ~/sharkbot
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
        git push origin master
        ```
        
        git_run.desktop
        
        ```xml
        [Desktop Entry]
        Version=1.0
        Name=GitRun
        Exec=/home/shark/sharkbot/git_auto_commit.sh
        Icon=/home/shark/Pictures/Git-Icon-Orange.png
        Terminal=true
        Type=Application
        Categories=Utility;
        ```