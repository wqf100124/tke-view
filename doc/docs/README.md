---
home: true
heroImage: /images/Docker-build.png
actions:
  - text: 立即开始 ->
    link: /docs/View本地开发环境.md
    type: primary
  - text: 安装Docker
    link: https://www.docker.com/products/docker-desktop
    type: secondary
features:
- title: 简洁
  details: 无需繁琐的环境配置和安装流程，仅需要几条命令便轻松搞定。
- title: 完整
  details: 支持同时运行Local/Dev/Dev2/RC/Live等所有View环境的代码。
- title: 互联
  details: 支持RebbitMQ/Selenium/WSO2等View开发所依赖的第三方软件。
# - title: RebbitMQ
#   details: 以 Markdown 为中心的项目结构，以最少的配置帮助你专注于写作。
# - title: Selenium
#   details: 享受 Vue + webpack 的开发体验，在 Markdown 中使用 Vue 组件，同时可以使用 Vue 来开发自定义主题。
# - title: WSO2
#   details: VuePress 为每个页面预渲染生成静态的 HTML，同时在页面被加载的时候，将作为 SPA 运行。
footer: Tke Docker Docs
---

像数 1, 2, 3 一样容易

```shell
# 本地开发环境
docker run -d -p 80:80 -v <本机代码>:/home/tke/local rtwadewang/tke
```