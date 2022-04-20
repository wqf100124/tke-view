---
home: true
heroText: View开发环境
tagline: 基于Docker搭建的View系统本地开发环境
actions:
  - text: 快速开始 ->
    link: /guide/view.md
    type: primary
features:
- title: 环境
  details: 支持运行Local/Preview/Dev2/RC/Live等环境的代码，方便本地开发和测试。
- title: 平台
  details: 无论你是在Windows、macOS或是Linux环境下开发，它都能完美的支持。
- title: 生态
  details: 集成RebbitMQ/Autotest/WSO2/Solr等View开发常用的第三方服务。
footer: View Docs
---

像数 1, 2, 3 一样容易

```shell
# 本地开发环境
docker run -d -p 80:80 -v <本机local代码>:/home/tke/local rtwadewang/tke
```