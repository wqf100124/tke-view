## View Docker Image

> 一个基于Docker搭建的View系统本地开发环境

## 说明

参照View生产环境构建的镜像，保证了开发环境和生产环境的一致性。无论你是在Windows、macOS或是Linux环境下开发，它都能完美的支持。无需繁琐的环境配置和安装流程，仅需要执行例如`docker run ...`的命令便可轻松搞定。

浏览 [快速开始](/enviroment/view.md) 查看详细使用文档.

## 特性

- 支持Local/Dev/Dev2/RC/Live环境的代码
- 支持Windows/macOS/Linux环境下开发
- 集成RebbitMQ/Autotest/WSO2/Solr等第三方服务


## 使用

像数 1, 2, 3 一样容易

```shell
# 本地开发环境
docker run -d -p 80:80 -v <本机local代码>:/home/tke/local rtwadewang/tke
```

