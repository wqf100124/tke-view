# 安装

## Docker Desktop

> Docker Desktop 是适用于 MacOS 和 Windows 机器的应用程序，用于构建和共享容器化应用程序和微服务。

下载安装包: [Docker Desktop (Windows/MacOs/Linux)](https://www.docker.com/get-started)

## 运行方式

在Windows下的两种运行方式:
- [WSL 2 (Linux 的 Windows 子系统)](https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment "设置 WSL 开发环境的最佳做法")
  - 启用可选的 WSL 和虚拟机平台组件
  - 下载并安装最新 Linux 内核
  - 将 WSL 2 设置为默认值
  - 下载并安装 Ubuntu/Centos/Alpine 等Linux分发
- [Hyper-V (Windows自带的虚拟机)](https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v "在 Windows 10 上安装 Hyper-V")
    - Windows 10 企业版、专业版或教育版
    - 具有二级地址转换 (SLAT) 的 64 位处理器
    - CPU 支持 VM 监视器模式扩展（Intel CPU 上的 VT-c）
    - 最少 4 GB 内存

::: tip 温馨提示
推荐使用 `WSL2` 的运行方式，可以显著地提高代码运行效率，同时对代码中的文件区分大小写。
::: 
