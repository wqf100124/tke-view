# Docker

官方网站: [https://www.docker.com](https://www.docker.com)

## Docker是什么？

> Docker是一个用于开发、打包和运行应用程序的开放平台。它可以将应用程序与基础架构分离。docker的虚拟容器，能够将你的开发环境、配置文件、代码等一并打包成镜像，然后去快速的发布、测试和部署。利用docker，可以显著减少从代码开发到上线运行之间的时间。

以View系统为例，它的运行环境可能包含了Apache、PHP、Mysql、Memcached、MongoDB、Redis、Rabbitmq等服务。Docker可以将这些服务和代码打包成为一个或多个镜像，然后部署到开发/生产环境中。

## 核心概念

-   镜像（Image）
    类似于虚拟机中的镜像，是一个包含有文件系统的面向Docker引擎的**只读模板**，镜像为应用程序提供运行环境。例如Ubuntu20.04就是一个包含Ubuntu操作系统环境的模板，在该镜像上装上Apache软件，就可以称为Apache镜像。
-   容器（Container）
    类似于一个轻量级的沙盒，可以将其看作一个极简的Linux系统环境（包括root权限、进程空间、用户空间和网络空间等），以及运行在其中的应用程序。Docker引擎利用容器来运行、隔离各个应用。容器是镜像创建的应用实例，可以创建、启动、停止、删除容器，各个容器之间是相互隔离的，互不影响。注意：镜像本身是只读的，容器从镜像启动时，Docker在镜像的上层创建一个可写层，镜像本身不变。
-   仓库（Repository）
    类似于代码仓库，这里是镜像仓库，是Docker用来集中存放镜像文件的地方，每个镜像利用tag进行区分，比如Ubuntu仓库存放有多个版本（20.04、16.04等）的Ubuntu镜像。

## 安装
下载安装包: [Docker Desktop (Windows/MacOs/Linux)](https://www.docker.com/get-started)

在Windows下的两种运行方式:
- [Hyper-V (Windows自带的虚拟机)](https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v "在 Windows 10 上安装 Hyper-V")
    - Windows 10 企业版、专业版或教育版
    - 具有二级地址转换 (SLAT) 的 64 位处理器
    - CPU 支持 VM 监视器模式扩展（Intel CPU 上的 VT-c）
    - 最少 4 GB 内存
- [WSL 2 (Linux 的 Windows 子系统)](https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment "设置 WSL 开发环境的最佳做法")
    - 启用可选的 WSL 和虚拟机平台组件
    - 下载并安装最新 Linux 内核
    - 将 WSL 2 设置为默认值
    - 下载并安装 Ubuntu/Centos/Alpine 等Linux分发

*提示：由于View系统当前的版本管理工具使用的是SVN而不是Git，如果你习惯了使用类似于[TortoiseSVN](https://tortoisesvn.net/downloads.html)的图形化管理工具，那么建议选择hyper-v的运行方式，相反，如果你的shell命令使用的比较熟练，那么建议尝试使用WSL2，因为它可以显著的提高代码运行效率*

## 常用命令

#### 拉取镜像
```shell
docker pull <image name>
```

#### 查看镜像列表
```shell
docker images
```

#### 删除镜像
```shell
docker rmi <image ID>
```

#### 容器的运行/停止/删除
```shell
docker {start|stop|rm} <container ID>
```

#### 列出正在运行的容器
```shell
docker ps
```

#### 进入容器
```shell
docker exec -it <container ID> bash
```
