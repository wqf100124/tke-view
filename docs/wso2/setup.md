# 搭建本地环境

## API Manager

> [API Manager(AM)](https://hub.docker.com/r/wso2/wso2am) 是一个用于部署和管理API的工具，提供了API整个生命周期所需要的各种控制，包含访问权限，访问流量，监控API的调用，版本控制等。

创建并运行AM容器

::: tip 温馨提示
如果你的本地没有使用[Local环境](/view/)，请先执行`docker network create --subnet=172.16.1.0/24 tke`命令来创建网络。
:::

```sh
$ docker run -d --network tke --ip 172.16.1.94 -p 8280:8280 -p 8243:8243 -p 9443:9443 --name am wso2/wso2am:4.1.0
```

*容器启动过程大约需要2~3分钟，耐心等待即可。*

Api管理: [https://localhost:9443/publisher/apis](https://localhost:9443/publisher/apis)	  
App管理: [https://localhost:9443/devportal/applications](https://localhost:9443/devportal/applications)

账号: `admin`     
密码: `admin`

## Swagger Editor

> 用于编写API文档

使用文档: [https://swagger.io/docs/](https://swagger.io/docs/)

```sh
$ docker run -d -p 8080:8080 --name swagger-editor swaggerapi/swagger-editor
```

- 本地编辑器: [http://localhost:8080/](http://localhost:8080/)
- 在线编辑器: [https://editor.swagger.io/](https://editor.swagger.io/)
