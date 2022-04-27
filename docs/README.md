---
home: true
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
- title: 全环境
  details: 支持运行Local/Preview/Dev2/RC/Live等环境的代码，方便本地开发和测试。
- title: 超简洁
  details: 无需繁琐的环境配置和安装流程，仅需要几条命令便可轻松搞定。
- title: 多生态
  details: 集成RabbitMQ/Autotest/WSO2/Solr等开发常用的第三方服务。
footer: Copyright © 2022
---

像数 1, 2, 3 一样容易 :nerd_face:

```shell
# 本地开发环境
docker run -d -p 80:80 -v <本机local代码>:/home/tke/local rtwadewang/tke
```