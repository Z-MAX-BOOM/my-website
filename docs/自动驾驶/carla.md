---
sidebar_position: 3
---
# 安装carla并测试demo
[中科大镜像源](https://mirrors.sustech.edu.cn/carla/)

[参考博客](https://www.cnblogs.com/kin-zhang/p/15829385.html)

[张聪明的CARLA专栏](https://blog.csdn.net/qq_39537898/category_11562137.html)

[ubuntu22.04安装carla-0.9.15](https://blog.csdn.net/weixin_44663617/article/details/135551910)

## 安装依赖
1. 安装miniconda
[清华源](https://mirrors.tuna.tsinghua.edu.cn/anaconda/miniconda/)
2. 创建python3.7的conda环境
```
conda create -n carla python=3.10
conda activate carla
```
4. 安装版本匹配的carla客户端
```
pip install carla==0.9.15
```
## 测试demo
1. 启动carla模拟器
```
cd carla
# 显卡不行，使用低渲染模式
./CarlaUE4.sh -prefernvidia -quality-level={Low,Epic}
```
2. 运行demo
```
cd carla/PythonAPI/examples

python3 -m pip install -r requirements.txt # Support for Python2 is provided in the CARLA release packages

python3 manual_control.py
```
显示一个小车，通过wasd控制

## 安装carla ros bridge
[carla_ros](https://github.com/gezp/carla_ros/)
```

```


## 安装osqp 0.6.3和osqp-eigen0.8.0
1. 安装osqp 0.6.3
```
git clone --recursive -b release-0.6.3 https://github.com/oxfordcontrol/osqp.git
cd osqp
mkdir build && cd build
cmake ..
make 
sudo make install 
```
2. 测试安装是否成功
```
cd out
./osqp_demo
```
3. 安装osqp-eigen0.8.0
```
git clone https://github.com/robotology/osqp-eigen.git
cd osqp-eigen
mkdir build && cd build
cmake ..
make 
sudo make install
```