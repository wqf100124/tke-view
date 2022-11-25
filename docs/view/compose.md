# Docker Compose

> 使用 [Docker Compose](https://docs.docker.com/compose/) 工具，可以快速创建view开发环境。

1.在本地创建新的 `view.yml` 文件，写入以下内容（注意替换代码目录）。
```yaml{32,39,46,53,60}
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
      device: D:\tke\local
  preview:
    name: preview
    driver: local
    driver_opts:
      type: none
      o: bind
      device: D:\tke\preview
  # dev2:
  #   name: dev2
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: D:\tke\dev2
  # rc:
  #   name: rc
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: D:\tke\rc
  # live:
  #   name: live
  #   driver: local
  #   driver_opts:
  #     type: none
  #     o: bind
  #     device: D:\tke\live
```

2.在终端中切换到 `view.yml` 文件所在目录，例如：
```sh
$ cd ~/Desktop/
```

3.运行命令（创建容器同时在后台运行）
```sh
$ docker-compose -p view -f ./view.yml up -d
```