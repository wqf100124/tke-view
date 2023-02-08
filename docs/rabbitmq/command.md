# 基本命令

::: warning 注意：
如果你更新了MQ消费者的相关代码，必须要重启MQ的消费进程才能生效！
:::

## 本地环境

以 `local` 代码为例，其它环境请替换 `--user` 和 `-w` 参数。

进入容器：
```sh
$ docker exec --user local -w /home/tke/local -it view bash
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

> 在测试环境中使用 Jenkins 来启动和停止MQ消费进程。

::: tip 温馨提示：
Dev环境的MQ消费进程每天凌晨都会自动停止，所以在Dev环境测试MQ的时候需要手动去开启进程！
:::

- [Dev环境Jenkins](https://jenkins.tkeasia.com/job/Dev_For_Once_Scripts/build)
- [Dev2环境Jenkins](https://jenkins.tkeasia.com/job/Dev2%20Deploy%20For%20Once%20Scripts/build)

打开上面的链接，在 `ScriptNameList` 输入框中粘贴以下命令并运行（注意替换 TopicKey）。

以 usa 为例：

启动消费进程：
```
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:start:TopicKey
```

停止消费进程：
```
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:stop:TopicKey
```

查看消费进程（使用JumpServer）：
```sh
$ ps -ef | grep TopicKey
```