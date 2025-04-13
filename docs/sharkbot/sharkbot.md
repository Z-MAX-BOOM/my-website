---
sidebar_position: 1
slug: sharkbot
title: Sharkbot
---
# 基于ROS2的机器人控制与导航

## 1. 编译工作空间
工作环境--ROS2:humble,Ubuntu 22.04
参考ROS2书籍:ROS2机器人开发:从入门到实践,作者:桑欣(鱼香ROS),机械工业出版社
```
cd sharkbot/chapt7_ws/
colcon build
source install/setup.bash
```
## 2. 官方键盘控制节点,改变消息类型
参考https://docs.ros.org/en/ros2_packages/humble/api/teleop_twist_keyboard/
```
ros2 run teleop_twist_keyboard teleop_twist_keyboard
```
弃用:ros2 run teleop_twist_keyboard teleop_twist_keyboard --ros-args -p stamped:=true

### 运行键盘控制节点,自己编写
```
cd sharkbot/chapt7_ws/
source install/setup.bash
ros2 run keyboard_teleop keyboard_teleop
```
## 3. 运行导航
```
cd sharkbot/chapt7_ws/
source install/setup.bash
ros2 launch fishbot_navigation2 navigation2.launch.py
```
## 4. twist消息转换--将键盘控制/导航的消息转换为机器人控制器的消息(注意转换的顺序,很重要)
https://github.com/joshnewans/twist_stamper
```
cd sharkbot/chapt7_ws/
source install/setup.bash
ros2 run twist_stamper twist_stamper --ros-args -r cmd_vel_in:=cmd_vel -r cmd_vel_out:=fishbot_tricycle_controller/cmd_vel
```
## 5. 运行机器人模型,参考小鱼的模型,控制器参考官方ros2_control
https://gitee.com/ohhuo/ros2bookcode
https://control.ros.org/master/doc/ros2_controllers/tricycle_controller/doc/userdoc.html

- Rviz
```
cd sharkbot/chapt7_ws/
source install/setup.bash
ros2 launch fishbot_description display_robot.launch.py
```
- Gazebo
```
cd sharkbot/chapt7_ws/
source install/setup.bash
ros2 launch fishbot_description gazebo_sim.launch.py
```
- slam建图
```
cd sharkbot/chapt7_ws/
source install/setup.bash
ros2 launch slam_toolbox online_async_launch.py use_sim_slam:=true
```
- 保存地图
```
cd sharkbot/chapt7_ws/fishbot_navigation2/maps/
source install/setup.bash
ros2 run nav2_map_server map_saver_cli -f room
```
