# 本地环境

::: warning 注意：
从 `1.0.2` 版本开始，容器中的项目路径不再包含 `core` 目录，同时增加了 `sites` 目录用来放置国家配置文件。
:::

新的目录结构如下：
```ini
sites
  global
  hk
  china
  ...
local
  sys
  web
  ...
preview
  sys
  web
  ...
...
```

## 创建 View 容器

:::tip 提示
在开始配置环境前，建议设置项目目录为 区分大小写 模式，参考：[https://learn.microsoft.com/zh-cn/windows/wsl/case-sensitivity](https://learn.microsoft.com/zh-cn/windows/wsl/case-sensitivity)
:::

1.在本地创建一个名为 `docker-compose.yml` 的文件，并复制粘贴以下内容。

```yaml{29,36}
version: "3"
services:
  view:
    image: rtwadewang/view:1.0.2
    container_name: view
    volumes:
      - sites:/home/tke/sites
      - local:/home/tke/local
    networks:
      tke:
        ipv4_address: 172.16.1.80
    ports:
      - "80:80"
    restart: always
networks:
  tke:
    name: tke
    ipam:
      driver: default
      config:
        - subnet: 172.16.1.0/24
volumes:
  sites:
    name: sites
    driver: local
    driver_opts:
      type: none
      o: bind
      device: site站点路径
  local:
    name: local
    driver: local
    driver_opts:
      type: none
      o: bind
      device: local代码路径
```
以上配置仅包含 View 容器。完整配置请参考：[View Docker Compose](/compose)

- site站点存放各个国家的配置文件，例如global,hk,china等。
- 对于 [WSL2](https://learn.microsoft.com/zh-cn/windows/wsl/) 运行模式，应该使用 linux 中的项目路径如：`/var/tke/local`。参考: [Docker Desktop WSL 2 backend on Windows](https://docs.docker.com/desktop/windows/wsl/)

2.打开终端工具，并切换到 `docker-compose.yml` 文件所在的目录。例如：
```sh
$ cd ~/Desktop/
```

3.创建并启动服务（`-d`参数可以让服务在后台运行）。
```sh
$ docker-compose -p tke up -d
```

4.验证服务是否创建成功。

访问本地站点: [http://localhost](http://localhost)

::: tip 提示：
如果运行失败，请检查本机的80端口是否被占用。
:::

## 配置站点

打开本机的 hosts 配置文件，并复制粘贴以下内容。
```ini
# Local站点
127.0.0.1       hk.local.test
127.0.0.1       china.local.test
127.0.0.1       global.local.test
```

::: details 配置Dev/Dev2/RC/Live等环境（可选）:
```ini
# Preview站点
127.0.0.1       hk.preview.test
127.0.0.1       china.preview.test
127.0.0.1       global.preview.test
# Dev2站点
127.0.0.1       hk.dev2.test
127.0.0.1       china.dev2.test
127.0.0.1       global.dev2.test
# RC站点
127.0.0.1       hk.rc.test
127.0.0.1       china.rc.test
127.0.0.1       global.rc.test
# Live站点
127.0.0.1       hk.live.test
127.0.0.1       china.live.test
127.0.0.1       global.live.test
```
:::

## 项目初始化

运行命令 `docker exec -it view /run/init.sh <local|preview|dev2|rc|live> <8ID>`

以 local 环境为例:
```sh
$ docker exec -it view /run/init.sh local 80000570
```

注意替换8ID，它将被用于站点的自动登录。

::: warning 警告：
以上操作会修改 `login.php`、`tke_config.php`、`error.phtml` 等核心文件，这些文件仅可用于本地开发，切勿提交版本库！
:::

至此 Local 环境已经搭建好了，尝试访问: [http://hk.local.test](http://hk.local.test)