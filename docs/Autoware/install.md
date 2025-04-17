# 安装并测试demo
本文章是ROS2 Humble版本的最新autoware源码安装方式、autoware.universe安装方式
ubuntu22.04

官方安装文档:

https://autowarefoundation.github.io/autoware-documentation/main/

## 1. 克隆autoware仓库
```
git clone https://github.com/autowarefoundation/autoware.git
```
## 2. 运行提供的Ansible脚本自动安装依赖项,安装CUDA、cuDNN、TensorRT
```
cd autoware
./setup-dev-env.sh
```
## 3. 可能遇到的错误
1. 无法访问https://raw.githubusercontent.com
2. 运行以下指令失败
  ```
  sudo rosdep init
  rosdep update
  ```
3. 原因都是上面的网站被墙了

    解决方案: 科学上网-全局代理

    [修改DNS和Hosts文件](https://zhuanlan.zhihu.com/p/676396123)
    ```
    export http_proxy=http://github.com:20171
    export https_proxy=http://github.com:20171
    ```
    
    1. 修改DNS
    ```
    sudo gedit /etc/systemd/resolved.conf
    ```
    ```
    DNS:114.114.114.114
    ```
    2. 修改Hosts文件:
    ```
    sudo gedit /etc/hosts
    ```
    ```
    140.82.112.26 alive.github.com
    140.82.113.25 live.github.com
    185.199.108.154 github.githubassets.com
    140.82.113.21 central.github.com
    185.199.110.133 desktop.githubusercontent.com
    185.199.110.153 assets-cdn.github.com
    185.199.110.133 camo.githubusercontent.com
    185.199.110.133 github.map.fastly.net
    146.75.121.194 github.global.ssl.fastly.net
    140.82.121.4 gist.github.com
    185.199.111.153 github.io
    140.82.121.3 github.com
    192.0.66.2 github.blog
    140.82.121.5 api.github.com
    185.199.108.133 raw.githubusercontent.com
    185.199.110.133 user-images.githubusercontent.com
    185.199.111.133 favicons.githubusercontent.com
    185.199.108.133 avatars5.githubusercontent.com
    185.199.111.133 avatars4.githubusercontent.com
    185.199.109.133 avatars3.githubusercontent.com
    185.199.108.133 avatars2.githubusercontent.com
    185.199.108.133 avatars1.githubusercontent.com
    185.199.108.133 avatars0.githubusercontent.com
    185.199.108.133 avatars.githubusercontent.com
    140.82.121.10 codeload.github.com
    3.5.28.69 github-cloud.s3.amazonaws.com
    54.231.140.73 github-com.s3.amazonaws.com
    54.231.135.129 github-production-release-asset-2e65be.s3.amazonaws.com
    52.217.161.241 github-production-user-asset-6210df.s3.amazonaws.com
    3.5.29.105 github-production-repository-file-5c1aeb.s3.amazonaws.com
    185.199.109.153 githubstatus.com
    140.82.113.18 github.community
    51.137.3.17 github.dev
    140.82.113.22 collector.github.com
    13.107.42.16 pipelines.actions.githubusercontent.com
    185.199.109.133 media.githubusercontent.com
    185.199.108.133 cloud.githubusercontent.com
    185.199.111.133 objects.githubusercontent.com
    #Github Hosts End
    ``` 
## 4. 解决上述问题后
```
cd autoware
./setup-dev-env.sh
```
漫长的等待过程....................

历经千辛万苦,反复切换科学上网工具,最后成功安装

输出:
```
PLAY RECAP *********************************************************************
localhost                  : ok=158  changed=39   unreachable=0    failed=0    skipped=5    rescued=0    ignored=0   

Completed.
```

## 5. 测试
1. 使用vcstool来创建工作空间
```
cd autoware
mkdir src
vcs import src < autoware.repos
```
2. 安装Ros依赖包
```
source /opt/ros/humble/setup.bash
# Make sure all previously installed ros-$ROS_DISTRO-* packages are upgraded to their latest version
sudo apt update && sudo apt upgrade
rosdepc update
rosdepc install -y --from-paths src --ignore-src --rosdistro $ROS_DISTRO
```
3. 编译工作空间
```
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```
4. 编译报错
- 参考这篇博客:

https://blog.csdn.net/zardforever123/article/details/132029636

- 如果无法解决报错,可以暂时跳过该包的编译
```
colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release --packages-skip 包名称

autoware_utils_geometry
autoware_diagnostic_graph_aggregator
autoware_utils_tf
```
- 更换gcc-9.5
```
mkdir gcc
cd gcc
sudo apt-get download $(apt-cache depends --recurse --no-recommends --no-suggests --no-conflicts --no-breaks --no-replaces --no-enhances --no-pre-depends gcc-9 | grep -v i386 | grep "^\w")
sudo dpkg -i *.deb
sudo ln -s gcc-9 gcc
#提高你需要版本的优先级
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-9 500
#查看成功
gcc --version

```
- 更换g++-9.5
```
sudo apt install g++-9
sudo ln -s g++-9 g++
#提高你需要版本的优先级
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-9 500
#查看成功
g++ --version
```


- 实际遇到的错误
    1. 编译报错
    ```
    /home/shark/autoware/src/universe/autoware_universe/perception/autoware_tensorrt_common/include/autoware/tensorrt_common/utils.hpp:41:43: error: variable ‘constexpr const std::array<std::basic_string_view<char>, 3> autoware::tensorrt_common::valid_precisions’ has initializer but incomplete type
    ```
    缺少头文件
    ```
    gedit autoware/src/universe/autoware_universe/perception/autoware_tensorrt_common/include/autoware/tensorrt_common/utils.hpp
    ```
    ```
    #include <array>
    #include <string_view>
    ```
    
历经九九八十一难,终于成功编译了


5. 更新工作空间
```
cd autoware
git pull
vcs import src < autoware.repos
vcs pull src

source /opt/ros/humble/setup.bash
rosdep install -y --from-paths src --ignore-src --rosdistro $ROS_DISTRO

colcon build --symlink-install --cmake-args -DCMAKE_BUILD_TYPE=Release
```
6. 下载demo地图数据包
```
gdown -O ~/autoware_map/ 'https://docs.google.com/uc?export=download&id=1499_nsbUbIeturZaDj7jhUownh5fvXHd'
unzip -d ~/autoware_map ~/autoware_map/sample-map-planning.zip
```
7. 运行demo, 在home下创建autoware_map文件夹，将demo地图包放到autoware_map下
```
cd autoware
source ~/autoware/install/setup.bash
ros2 launch autoware_launch planning_simulator.launch.xml map_path:=$HOME/autoware_map/sample-map-planning vehicle_model:=sample_vehicle sensor_model:=sample_sensor_kit
```
终于配置成功了!
