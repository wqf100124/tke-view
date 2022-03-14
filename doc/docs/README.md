---
home: true
heroImage: /images/Docker-build.png
actions:
  - text: 开始使用 ->
    link: /docs/View本地开发环境.md
    type: primary
  - text: 安装Docker
    link: https://www.docker.com/products/docker-desktop
    type: secondary
features:
- title: 环境
  details: 支持同时运行Local/Dev/Dev2/RC/Live等环境的代码，方便本地开发和测试。
- title: 平台
  details: 无论你是在Windows、macOS或是Linux环境下开发，它都能完美的支持。
- title: 生态
  details: 集成了RebbitMQ/Selenium/WSO2等View开发常用的第三方软件。
- title: 简洁
  details: 无需繁琐的环境配置和安装流程，仅需要执行几条命令便可轻松搞定。
- title: 统一
  details: 参照View生产环境构建的镜像，保证了开发环境和生产环境的一致性。
- title: 便捷
  details: 容器中已经集成了开发文档，支持离线阅读，随时随地可参考使用。
footer: Tke development docs
---

像数 1, 2, 3 一样容易

```shell
# 本地开发环境
docker run -d -p 80:80 -v <本机代码>:/home/tke/local rtwadewang/tke
```