# 搭建环境

## 基础环境

1.在本地创建一个名为 `wso2.yml` 的文件，并复制粘贴以下内容。
```yaml{21}
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
      - hk.local.test:172.16.1.80
      - china.local.test:172.16.1.80
      - global.local.test:172.16.1.80
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
      - hk.local.test:172.16.1.80
      - china.local.test:172.16.1.80
      - global.local.test:172.16.1.80
  sw:
    image: swaggerapi/swagger-editor
    container_name: sw
    networks:
      - tke
    ports:
      - "8080:8080"
networks:
  tke:
    name: tke
    ipam:
      driver: default
      config:
        - subnet: 172.16.1.0/24
```
注意：
- **本机EI导出目录** 为EI项目打包后的 `.car` 文件存放的目录。例如: `D:\tke\wso2\carbonapps`
- 容器启动过程大约需要2~3分钟，耐心等待即可。

2.在终端中切换到 `wso2.yml` 文件所在的目录。例如：
```sh
$ cd ~/Desktop/
```

3.运行命令（创建容器同时在后台运行）
```sh
$ docker-compose -p wso2 -f ./wso2.yml up -d
```

4.使用 `docker ps` 命令验证容器是否创建成功
```sh
$ docker ps
```

## 配置 Postman

如果你使用的调试工具是 [Postman](https://www.postman.com/)，可以下载并导入 [WSO2.postman_collection.json](/tke-view/data/WSO2.postman_collection.json) 配置文件(使用 "另存为文件" 的方式下载)。该文件已经包含了基础的请求示例，方便本地开发。
