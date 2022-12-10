# 本地环境

## 创建 View 容器

1.在本地创建一个名为 `docker-compose.yml` 的文件，并复制粘贴以下内容。

以下配置仅包含了 View 容器。完整配置请参考：[View Docker Compose](/compose)
```yaml{32,39,46,53,60}
version: "3"
services:
  view:
    image: rtwadewang/view:1.0.1
    container_name: view
    volumes:
      - local:/home/tke/local
      - preview:/home/tke/preview
      # - dev2:/home/tke/dev2
      # - rc:/home/tke/rc
      # - live:/home/tke/live
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
  local:
    name: local
    driver: local
    driver_opts:
      type: none
      o: bind
      device: local代码路径
  preview:
    name: preview
    driver: local
    driver_opts:
      type: none
      o: bind
      device: dev代码路径
  # dev2:
  #   name: dev2
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: dev2代码路径
  # rc:
  #   name: rc
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: rc代码路径
  # live:
  #   name: live
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: live代码路径
```

- 注意替换代码路径。
- 对于 [WSL2](https://learn.microsoft.com/zh-cn/windows/wsl/) 开发环境，应该使用 linux 中的项目路径如：`/var/tke/local`。参考: [Docker Desktop WSL 2 backend on Windows](https://docs.docker.com/desktop/windows/wsl/)

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

至此 Local 环境已经搭建好了，尝试访问: [http://hk.local.test](http://hk.local.test)