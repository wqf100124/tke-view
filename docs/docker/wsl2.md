# 基于 WSL2 的 Docker 环境

## Docker

下载安装包: [Docker Desktop (Windows/MacOs/Linux)](https://www.docker.com/get-started)

## WSL2

请参考官方文档：[WSL 2 (Linux 的 Windows 子系统)](https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment "设置 WSL 开发环境的最佳做法")

将 WSL2 设置为默认版本
```
wsl --set-default-version 2
```

### 常用命令

参考：[官方手册](https://docs.microsoft.com/zh-cn/windows/wsl/reference)

查看运行中的系统
```shell
wsl -l --running
```

启动
```shell
wsl -d alpine
```

停止
```shell
wsl -t alpine
```

移除
```shell
wsl --unregister alpine
```

## Linux

### Alpine

> [Alpine](https://www.alpinelinux.org/) 操作系统是一个面向安全的轻型 Linux 发行版。它不同于通常 Linux 发行版，Alpine 采用了 musl libc 和 busybox 以减小系统的体积和运行时资源消耗，但功能上又比 busybox 完善的多，因此得到开源社区越来越多的青睐。

#### 安装
方式一：

在 Windows 应用商店中搜索 Alpine WSL 并安装。

方式二：

打开 [官方下载地址](https://alpinelinux.org/downloads/) ，选择 `MINI ROOT FILESYSTEM` => `x86_64` 类型的版本包，下载到本机。

示例：https://dl-cdn.alpinelinux.org/alpine/v3.15/releases/x86_64/alpine-minirootfs-3.15.0-x86_64.tar.gz

导入该镜像
```shell
wsl --import alpine D:\wsl\alpine ./alpine-minirootfs-3.14.0-x86_64.tar.gz
```

#### 运行

```shell
wsl -d alpine
```

#### 配置

1.安装glibc扩展，参考文档: [alpine-pkg-glibc](https://github.com/sgerrand/alpine-pkg-glibc)

```shell
cd /tmp
wget -q -O /etc/apk/keys/sgerrand.rsa.pub https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub
wget https://github.com/sgerrand/alpine-pkg-glibc/releases/download/2.33-r0/glibc-2.33-r0.apk
apk add glibc-2.33-r0.apk
```

2.在 Docker 面板中打开 alpine 开关，重启！

#### 验证

输入以下命令验证 docker 是否配置成功
```shell
docker ps
```

### Ubuntu

1.在 Windows 应用商店中搜索 Ubuntu20.04 并安装。

2.在 Docker 面板中打开 Ubuntu20.04 开关，重启即可！

### Centos

待完善...
