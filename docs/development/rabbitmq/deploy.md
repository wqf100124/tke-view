# 部署

::: warning
如果你更新了消费的代码，一定要记得去重启MQ的消费者服务进程！
:::

在jenkins中使用`Build with Parameters`来执行一次性脚本命令

## 启动进程
```
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:start:TopicKey
```

## 停止进程
```
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:stop:TopicKey
```

## 查看进程
```
ps -ef | grep TopicKey
```

## 执行脚本

可以在Jenkins中运行一次性脚本

Dev环境:
[https://jenkins.tkeasia.com/job/Dev_For_Once_Scripts/build](https://jenkins.tkeasia.com/job/Dev_For_Once_Scripts/build)

Dev2环境:
[https://jenkins.tkeasia.com/job/Dev2%20Deploy%20For%20Once%20Scripts/build](https://jenkins.tkeasia.com/job/Dev2%20Deploy%20For%20Once%20Scripts/build)
