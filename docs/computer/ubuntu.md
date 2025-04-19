---
sidebar_position: 1
---

# Ubuntu

## 安装ubuntu后双系统时间不同步
```bash
sudo apt-get install ntp        # 更新本地时间
sudo ntpdate time.windows.com   # 同步时间
sudo hwclock --localtime --systohc  #本地时间同步到硬件时间
```