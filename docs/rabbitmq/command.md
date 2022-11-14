# 基本命令

## 进入容器

这里假设你的本地使用的是`preview`环境的代码，其它环境请替换`--user`和`-w`参数

```sh
$ docker exec --user preview -w /home/tke/preview/core -it view bash
```

## 创建队列
```sh
$ php sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php QueueName QueueRoute
```

## 消费队列
```sh
$ php sys/libs/logic/Util/MQ/MessageProcessor.php usa TopicKey
```

