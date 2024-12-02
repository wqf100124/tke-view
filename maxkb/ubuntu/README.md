# MAXKB开发环境

构建镜像
```shell
docker build --no-cache -t registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb-1.0 ./maxkb-ubuntu
```



1.
docker run -it --name maxkb -v ~/web/app/ai/maxkb:/opt/maxkb/app -p 8080:8080 registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb bash

docker run -it --name maxkb -v D:\web\apps\ai\maxkb:/opt/maxkb/app -p 8080:8080 registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb bash
2.
/run/init.sh

创建 docker-compose.yaml 文件
```yaml
services:
  maxkb:
    image: registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb
    container_name: maxkb
    ports:
      - "8080:8080"
    volumes:
      - code:/opt/maxkb/app
      - conf:/opt/maxkb/conf
      - model:/opt/maxkb/model
    networks:
      ai:
        ipv4_address: 172.16.2.80
  # Postgresql
  pgsql15:
    image: pgvector/pgvector:pg15
    container_name: pgsql-15
    networks:
      tke:
        ipv4_address: 172.16.2.54
    ports:
      - "5432:5432"
volumes:
  code:
    name: maxkb-code
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/app/ai/maxkb/app
  conf:
    name: maxkb-conf
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/app/ai/maxkb/conf
  model:
    name: maxkb-model
    driver: local
    driver_opts:
      type: none
      o: bind
      device: ~/web/app/ai/maxkb/model
networks:
  ai:
    name: ai
    ipam:
      driver: default
      config:
        - subnet: 172.16.2.0/24
```

```shell
docker run -d --name=maxkb-code -p 8000:8000 -v ~/web/app/ai/maxkb/app:/opt/code registry.cn-hangzhou.aliyuncs.com/tke-view/view:maxkb
```

```shell
docker compose up -d
```


