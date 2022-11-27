# Docker Compose

[Docker Compose](https://docs.docker.com/compose/) 是用于定义和运行多容器 Docker 应用程序的工具。通过 Compose，您可以使用 YML 文件来配置应用程序需要的所有服务。使用一个命令，就可以创建并启动所有服务。
<br>
如果你还不了解 YML 文件配置，可以先阅读 [YAML 入门教程](https://www.runoob.com/w3cnote/yaml-intro.html)。

## 创建环境

1.在本地创建一个名为 `docker-compose.yml` 的文件，并复制粘贴以下内容。

::: tip 温馨提示
1.以下配置仅作参考，请根据业务需求修改配置，不需要的服务，在配置项 `service` 中去删除即可。<br>
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
      - dev2:/home/tke/dev2
      - rc:/home/tke/rc
      - live:/home/tke/live
    networks:
      tke:
        ipv4_address: 172.16.1.80
    ports:
      - "80:80"
    restart: always
  # Selenium服务(Autotesting)
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
    shm_size: '2gb'
  # Dev2自动化测试(Autotesting)
  autotest:
    image: rtwadewang/autotest
    container_name: autotest
    networks:
      - tke
    volumes:
      - dev2:/home/tke/code
    depends_on:
      - selenium
  # RC自动化测试(Autotesting)
  autotest-rc:
    container_name: autotest-rc
    image: rtwadewang/autotest
    networks:
      - tke
    volumes:
      - rc:/home/tke/code
    depends_on:
      - selenium
  # RabbitMQ
  rabbitmq:
    image: rabbitmq:3.9-management-alpine
    container_name: rabbitmq
    networks:
      tke:
        ipv4_address: 172.16.1.56
    ports:
      - "5672:5672"
      - "15672:15672"
  # Solr
  solr:
    image: solr
    container_name: solr
    command: solr-precreate view
    networks:
      tke:
        ipv4_address: 172.16.1.89
    ports:
      - "8983:8983"
  # Api Manager(WSO2)
  am:
    image: wso2/wso2am:4.1.0-alpine
    container_name: am
    networks:
      tke:
        ipv4_address: 172.16.1.94
    ports:
      - "8280:8280"
      - "8243:8243"
      - "9443:9443"
    extra_hosts:
      - "hk.preview.test:172.16.1.80"
      - "china.preview.test:172.16.1.80"
      - "global.preview.test:172.16.1.80"
  # Swagger Editor(WSO2)
  sw:
    image: swaggerapi/swagger-editor
    container_name: sw
    networks:
      - tke
    ports:
      - "8080:8080"
  # Micro Integrator(WSO2)
  mi:
    image: wso2/wso2mi:4.1.0
    container_name: mi
    volumes:
      - /Users/wangqifei/tke/wso2/apps:/home/wso2carbon/wso2mi-4.1.0/repository/deployment/server/carbonapps
    networks:
      tke:
        ipv4_address: 172.16.1.90
    ports:
      - "8290:8290"
      - "8253:8253"
      - "9164:9164"
    extra_hosts:
      - "hk.preview.test:172.16.1.80"
      - "china.preview.test:172.16.1.80"
      - "global.preview.test:172.16.1.80"
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
      device: D:\tke\local
  preview:
    name: preview
    driver: local
    driver_opts:
      type: none
      o: bind
      device: D:\tke\preview
  dev2:
    name: dev2
    driver: local
    driver_opts:
      type: none
      o: bind
      device: D:\tke\dev2
  rc:
    name: rc
    driver: local
    driver_opts:
      type: none
      o: bind
      device: D:\tke\rc
  live:
    name: live
    driver: local
    driver_opts:
      type: none
      o: bind
      device: D:\tke\live
```

2.在终端中切换到 `docker-compose.yml` 文件所在的目录。例如：
```sh
$ cd ~/Desktop/
```

3.运行命令（创建容器同时在后台运行）
```sh
$ docker-compose -p Tke up -d
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