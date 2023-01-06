# RabbitMQ

> [RabbitMQ](https://www.rabbitmq.com/) 是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）。

## 开发环境

::: tip 温馨提示：
假如你的本地没有 `docker-compose.yml` 配置文件，请先参阅：[本地开发环境](/view/)。
:::

1.编辑你的 `docker-compose.yml` 文件，在 `service` 配置项中添加 RabbitMQ 的配置信息。
```yaml{2-11}
services:
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
```
完整配置请参考：[View Docker Compose](/compose) 

2.打开终端工具，并切换到 `docker-compose.yml` 文件所在的目录。例如：
```sh
$ cd ~/Desktop/
```

3.创建并启动服务（`-d`参数可以让服务在后台运行）。
```sh
$ docker-compose -p tke up -d
```

4.验证服务是否创建成功

访问管理端: [http://localhost:15672](http://localhost:15672)    
账号：`guest`    
密码：`guest`

[//]: # (除了使用 Docker Compose，也可以执行下面的命令来创建容器。)

[//]: # ()
[//]: # (创建rabbitmq服务容器)

[//]: # (```sh)

[//]: # ($ docker run -d --name rabbitmq --restart no --network tke --ip 172.16.1.56 -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management-alpine)

[//]: # (```)