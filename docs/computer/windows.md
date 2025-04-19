---
sidebar_position: 2
---

# Windows

## windows启动错误

在系统更新时强制关机，导致系统启动错误，此时可以通过以下方法解决：
多启动几次，直至出现修复电脑选项
进入疑难解答
选择命令行
1. 请况较轻
输入：
```bash
bootrec /fixmbr
bootrec /fixboot
bootrec /rebuildbcd
``` 
2. 请况较重
输入```bootrec /fixboot```出现拒绝访问
输入：
```
bootrec /fixmbr
bootsect /nt60 sys /mbr
bootrec /fixboot
bcdboot c:\windows /s c:    # 创建bcd文件
bcdboot c:\windows /v    # 了解bcd详细信息
bcdboot /enum    # 已修复
```