---
home: true
heroImage: /assets/images/cooperation.svg
pageClass: home-page
heroText: View本地开发，可以更简单
tagline: 基于Docker构建的本地开发环境，为你提供更好的开发体验。
actions:
- text: 开始使用 ->
  link: /guide/view.md
  type: primary
- text: 安装Docker
  link: /guide/
  type: secondary
features:
- title: 完整
  details: 支持运行Local/Preview/Dev2/RC/Live等环境的代码，方便本地开发和测试。
- title: 简洁
  details: 无需繁琐的环境配置和安装流程，仅需要几条命令便可轻松搞定。
- title: 多态
  details: 集成RabbitMQ/Autotest/WSO2/Solr等开发常用的第三方服务。
footer: MIT Licensed | Copyright © 2022-present Wade Wang
---

:surfing_man: 运行本地开发环境

```shell
docker run -d -p 80:80 -v <本机local代码>:/home/tke/local rtwadewang/view
```