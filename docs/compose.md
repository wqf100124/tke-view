# Docker Compose

使用 [Docker Compose](https://docs.docker.com/compose/) 工具，可以一次性创建所有docker服务，一劳永逸。

## 创建环境

1.在本地创建新的 `docker-compose.yml` 文件，写入以下内容。

::: tip 温馨提示
1.根据业务需求修改配置，需要启用的服务，在配置项 `service` 中去掉对应的注释即可。<br>
2.在 `volumes` 配置项中修改代码目录。
:::

```yaml{2}
version: "3"
services:
  view:
    image: rtwadewang/view
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
  # selenium:
  #   image: selenium/standalone-edge
  #   container_name: selenium
  #   networks:
  #     tke:
  #       ipv4_address: 172.16.1.44
  #   environment:
  #     - VNC_NO_PASSWORD=1
  #     - SE_NODE_MAX_SESSIONS=5
  #   ports:
  #     - "4444:4444"
  #     - "7900:7900"
  # autotest:
  #   image: rtwadewang/autotest
  #   container_name: autotest
  #   networks:
  #     - tke
  #   volumes:
  #     - dev2:/home/tke/code
  #   depends_on:
  #     - selenium
  # autotest-rc:
  #   container_name: autotest-rc
  #   image: rtwadewang/autotest
  #   networks:
  #     - tke
  #   volumes:
  #     - rc:/home/tke/code
  #   depends_on:
  #     - selenium
  # rabbitmq:
  #   image: rabbitmq:3.9-management-alpine
  #   container_name: rabbitmq
  #   networks:
  #     tke:
  #       ipv4_address: 172.16.1.56
  #   ports:
  #     - "5672:5672"
  #     - "15672:15672"
  # solr:
  #   image: solr
  #   container_name: solr
  #   command: solr-precreate view
  #   networks:
  #     tke:
  #       ipv4_address: 172.16.1.89
  #   ports:
  #     - "8983:8983"
  
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
      device: "本机local代码目录如 D:\tke\local"
  preview:
    name: preview
    driver: local
    driver_opts:
      type: none
      o: bind
      device: "本机preview代码目录"
  # dev2:
  #   name: dev2
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: "本机dev2代码目录"
  # rc:
  #   name: rc
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: "本机rc代码目录"
  # live:
  #   name: live
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: "本机live代码目录"
```

`autotest` 和 `autotest-rc` 容器依赖于 `selenium` 容器

2.在终端中切换到 `docker-compose.yml` 文件所在目录，例如：
```sh
$ cd ~/Desktop/
```

3.运行命令（创建容器同时在后台运行）
```sh
$ docker compose up -d
```

## 常用命令

查看正在运行的容器

```sh
$ docker compose ps
```

停止服务
```sh
$ docker compose stop
```

删除容器
```sh 
$ docker compose down
```

删除容器同时清除数据
```sh 
$ docker compose down --volumes
```

查看更多可用命令
```sh
$ docker compose --help
```