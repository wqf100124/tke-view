# 搭建环境

## WSO2开发环境

WSO2本地开发使用的镜像有 `API Manager`、`Swagger Editor`、`Micro Integrator`。其中 `Micro Integrator` 仅用于EI的开发。

### API Manager(AM)

[API Manager](https://hub.docker.com/r/wso2/wso2am) 是一个用于部署和管理API的工具，提供了API整个生命周期所需要的各种控制，包含访问权限，访问流量，监控API的调用，版本控制等。

Api管理: [https://localhost:9443/publisher/apis](https://localhost:9443/publisher/apis)	  
App管理: [https://localhost:9443/devportal/applications](https://localhost:9443/devportal/applications)

账号: `admin`     
密码: `admin`

### Micro Integrator(MI)

[Micro Integrator](https://hub.docker.com/r/wso2/wso2mi) 是一个开源、轻量级、快速、可扩展的分布式微服务集成层，是 Enterprise Integration 的云原生发行版

### Swagger Editor

[Swagger Editor](https://swagger.io/) 是一个API文档编辑器

- 本地编辑器: [http://localhost:8080/](http://localhost:8080/)
- 在线编辑器: [https://editor.swagger.io/](https://editor.swagger.io/)

## 创建本地开发环境

1.在本地创建新的 `wso2.yml` 文件，写入以下内容。
```yaml
version: "3"
services:
  am:
    image: wso2/wso2am:4.1.0
    container_name: am
    networks:
      tke:
        ipv4_address: 172.16.1.94
    ports:
      - "8280:8280"
      - "8243:8243"
      - "9443:9443"
    extra_hosts:
      - hk.preview.test:172.16.1.80
      - china.preview.test:172.16.1.80
      - global.preview.test:172.16.1.80
  sw:
    image: swaggerapi/swagger-editor
    container_name: sw
    networks:
      - tke
    ports:
      - "8080:8080"
  mi:
    image: wso2/wso2mi:4.1.0
    container_name: mi
    volumes:
      - 本机EI导出目录:/home/wso2carbon/wso2mi-4.1.0/repository/deployment/server/carbonapps
    networks:
      tke:
        ipv4_address: 172.16.1.90
    ports:
      - "8290:8290"
      - "8253:8253"
      - "9164:9164"
    extra_hosts:
      - hk.preview.test:172.16.1.80
      - china.preview.test:172.16.1.80
      - global.preview.test:172.16.1.80
networks:
  tke:
    name: tke
    ipam:
      driver: default
      config:
        - subnet: 172.16.1.0/24
```
注意：
- **本机EI导出目录** 为EI项目打包后的 `.car` 文件存放的目录。例如: `D:/tke/wso2/carbonapps`
- 容器启动过程大约需要2~3分钟，耐心等待即可。

2.在终端中切换到 `wso2.yml` 文件所在的目录。例如：
```sh
$ cd ~/Desktop/
```

3.运行命令（创建容器同时在后台运行）
```sh
$ docker-compose -p wso2 -f ./wso2.yml up -d
```