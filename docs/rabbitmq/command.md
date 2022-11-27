# 基本命令

::: warning 注意：
如果你更新了MQ的相关代码，必须要重启MQ的消费进程才能生效！
:::

## 本地环境

以 `preview` 代码为例，其它环境请替换 `--user` 和 `-w` 参数。

进入容器：
```sh
$ docker exec --user preview -w /home/tke/preview/core -it view bash
```

创建队列：
```sh
$ php sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php QueueName QueueRoute
```

消费队列：
```sh
$ php sys/libs/logic/Util/MQ/MessageProcessor.php usa TopicKey
```

## 测试环境

在测试环境中使用 Jenkins 的 `Build with Parameters` 工具，来启动和停止MQ进程。

- [Dev环境Jenkins](https://jenkins.tkeasia.com/job/Dev_For_Once_Scripts/build)
- [Dev2环境Jenkins](https://jenkins.tkeasia.com/job/Dev2%20Deploy%20For%20Once%20Scripts/build)

启动进程：
```
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:start:TopicKey
```

停止进程：
```
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:stop:TopicKey
```

查看进程（使用JumpServer）：
```sh
$ ps -ef | grep TopicKey
```