# 安装Docker环境

##  Docker是什么？

官方网站: [https://www.docker.com/](https://www.docker.com/)

Docker是一个虚拟环境容器，可以将你的开发环境、代码、配置文件等一并打包到这个容器中，并发布和应用到任意平台。
例如Tke的运行环境，可能包括Apache、PHP、Mysql、Redis、Memcached、Rabbitmq、Mongodb等依赖。Docker可以将所有依赖打包到一个容器中，然后部署到开发/生产环境中。

##  核心概念

-   镜像（Image）
    类似于虚拟机中的镜像，是一个包含有文件系统的面向Docker引擎的**只读模板**，镜像为应用程序提供运行环境。例如Ubuntu20.04就是一个包含Ubuntu操作系统环境的模板，在该镜像上装上Apache软件，就可以称为Apache镜像。

-   容器（Container）
    类似于一个轻量级的沙盒，可以将其看作一个极简的Linux系统环境（包括root权限、进程空间、用户空间和网络空间等），以及运行在其中的应用程序。Docker引擎利用容器来运行、隔离各个应用。容器是镜像创建的应用实例，可以创建、启动、停止、删除容器，各个容器之间是是相互隔离的，互不影响。注意：镜像本身是只读的，容器从镜像启动时，Docker在镜像的上层创建一个可写层，镜像本身不变。

-   仓库（Repository）
    类似于代码仓库，这里是镜像仓库，是Docker用来集中存放镜像文件的地方，每个镜像利用tag进行区分，比如Ubuntu仓库存放有多个版本（20.04、16.04等）的Ubuntu镜像。


##    安装
下载安装包: [Docker Desktop (Windows/Mac/Linux)](https://www.docker.com/get-started)

Windows:
- [Hyper-V (Windows 10 上的虚拟机)](https://docs.microsoft.com/zh-cn/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v "在 Windows 10 上安装 Hyper-V")
    - Windows 10 企业版、专业版或教育版
    - 具有二级地址转换 (SLAT) 的 64 位处理器
    - CPU 支持 VM 监视器模式扩展（Intel CPU 上的 VT-c）
    - 最少 4 GB 内存   
      <br>
      <br>
- [WSL 2 (Linux 的 Windows 子系统)](https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment "设置 WSL 开发环境的最佳做法")
    - 启用可选的 WSL 和虚拟机平台组件
    - 下载并安装最新 Linux 内核
    - 将 WSL 2 设置为默认值
    - 下载并安装 Ubuntu/Centos/Alpine 等Linux分发

##    常用命令

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

#### 进入容器内部
```shell
docker exec -it <container ID> /bin/bash
```

## 镜像加速

*如果官方源速度较慢，可尝试配置国内源*

具体配置流程

1.进入Docker设置页面 => 2.选择Docker Engine => 3.修改registry-mirrors的配置项

配置示例:
```json
{
  "registry-mirrors": [
      "https://hub-mirror.c.163.com/"
  ],
}
```

配置完后重新启动Docker即可

国内源:
- 中科大：https://docker.mirrors.ustc.edu.cn/
- 网易云：https://hub-mirror.c.163.com/
- 阿里云：https://cr.console.aliyun.com/cn-hangzhou/instances/mirrors
- 七牛云：https://reg-mirror.qiniu.com