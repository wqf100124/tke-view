# 基本命令

::: warning 注意：
如果你更新了MQ消费者的相关代码，必须要重启MQ的消费进程才能生效！
:::

## 本地环境

进入容器：
```shell
docker exec --user tk -w /opt/tk -it dev bash
```

创建队列：
```shell
php sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php QueueName QueueRoute
```

消费队列：
```shell
php sys/libs/logic/Util/MQ/MessageProcessor.php hk DemoTopic
```

## 测试环境

> 在测试环境中使用 Jenkins 来启动和停止MQ消费进程。

::: tip 温馨提示：
Dev环境的MQ消费进程每天凌晨都会自动停止，所以在Dev环境测试MQ的时候需要手动去开启进程！
:::

- [Dev环境Jenkins](https://jenkins.tkeasia.com/job/Dev_For_Once_Scripts/build)
- [Dev2环境Jenkins](https://jenkins.tkeasia.com/job/Dev2%20Deploy%20For%20Once%20Scripts/build)

打开上面的链接，在 `ScriptNameList` 输入框中粘贴以下命令并运行（注意替换 Topic）。

以 Italy 国家为例：

启动消费进程：
```
italy:::sys/libs/logic/Util/MQ/ConsumeMediator.php:start:DemoTopic
```

停止消费进程：
```
italy:::sys/libs/logic/Util/MQ/ConsumeMediator.php:stop:DemoTopic
```

查看消费进程（使用JumpServer）：
```shell
ps -ef | grep DemoTopic
```
