# Docker Compose

使用 [Docker Compose](https://docs.docker.com/compose/) 工具，可以快速创建和运行容器服务。

## 创建环境

1.在本地创建一个名为 `docker-compose.yml` 文件，同时写入以下内容。

::: tip 温馨提示
根据你的需求修改配置文件，不需要的服务可以从配置项 `service` 和 `depends_on` 中删除。
:::

```yaml{2,17}
version: "3"
services:
  view:
    image: rtwadewang/view
    container_name: view
    volumes:
      - <本机local代码目录>:/home/tke/view
      - <本机preview代码目录>:/home/tke/preview
      - <本机dev2代码目录>:/home/tke/dev2
      - <本机rc代码目录>:/home/tke/rc
      - <本机live代码目录>:/home/tke/live
    networks:
      tke:
        ipv4_address: 172.16.1.80
    ports:
      - "80:80"
    depends_on:
      - selenium
      - autotest
      - autotest-rc
      - rabbitmq
      - solr
  selenium:
    image: selenium/standalone-edge
    container_name: selenium
    networks:
      tke:
        ipv4_address: 172.16.1.44
    environment:
      - VNC_NO_PASSWORD=1
      - SE_NODE_MAX_SESSIONS=5
    ports:
      - "4444:4444"
      - "7900:7900"
  autotest:
    image: rtwadewang/autotest
    container_name: autotest
    networks:
      - tke
    volumes:
      - <本机dev2代码目录>:/home/tke/code
  autotest-rc:
    container_name: autotest-rc
    image: rtwadewang/autotest
    networks:
      - tke
    volumes:
      - <本机rc代码目录>:/home/tke/code
  rabbitmq:
    image: rabbitmq:3.9-management-alpine
    container_name: rabbitmq
    networks:
      tke:
        ipv4_address: 172.16.1.56
    ports:
      - "5672:5672"
      - "15672:15672"
  solr:
    image: solr
    container_name: solr
    command: solr-precreate view
    networks:
      tke:
        ipv4_address: 172.16.1.89
    ports:
      - "8983:8983"
networks:
  tke:
    ipam:
      driver: default
      config:
        - subnet: 172.16.1.0/24
```

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