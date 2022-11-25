# Docker Compose

> 使用 [Docker Compose](https://docs.docker.com/compose/) 工具，可以快速创建autotest开发环境。

1.在本地创建新的 `autotest.yml` 文件，写入以下内容（注意替换 `dev2` 和 `rc` 代码目录）。
```yaml{47,54}
version: "3"
services:
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
      - dev2:/home/tke/code
    depends_on:
      - selenium
  autotest-rc:
    container_name: autotest-rc
    image: rtwadewang/autotest
    networks:
      - tke
    volumes:
      - rc:/home/tke/code
    depends_on:
      - selenium
networks:
  tke:
    name: tke
    ipam:
      driver: default
      config:
        - subnet: 172.16.1.0/24
volumes:
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
```

2.在终端中切换到 `autotest.yml` 文件所在目录，例如：
```sh
$ cd ~/Desktop/
```

3.运行命令（创建容器同时在后台运行）
```sh
$ docker-compose -p autotest -f ./autotest.yml up -d
```