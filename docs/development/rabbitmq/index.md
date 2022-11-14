# RabbitMQ

> RabbitMQ是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）

## 创建MQ服务

官方镜像：[https://hub.docker.com/_/rabbitmq](https://hub.docker.com/_/rabbitmq)

::: tip 温馨提示
如果你的本地没有使用[Local环境](./view.md)，请先执行`docker network create --subnet=172.16.1.0/24 tke`命令来创建网络。
:::

创建rabbitmq服务容器

```sh
$ docker run -d --name rabbitmq --restart no --network tke --ip 172.16.1.56 -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management-alpine
```

管理端: [http://localhost:15672](http://localhost:15672)    
账号：`guest`    
密码：`guest`