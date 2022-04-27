# RabbitMQ环境

> RabbitMQ是实现了高级消息队列协议（AMQP）的开源消息代理软件（亦称面向消息的中间件）

## 创建容器

官方镜像：[https://hub.docker.com/_/rabbitmq](https://hub.docker.com/_/rabbitmq)

创建一个名称为rabbitmq的服务容器
```shell
docker run -d --name rabbitmq --restart no --network tke --ip 172.16.1.56 -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management-alpine
```

管理端: [http://localhost:15672](http://localhost:15672)    
账号：`guest`    
密码：`guest`

##  项目配置

###  mq文件夹

*以USA国家为例，其它国家可作为参考*

复制国家下的mq文件夹到**core**目录下

```shell
cp ./usa/mq/ ./core/mq
```

###  ViewLogger配置

复制国家下的`ViewLoggerConfig.php`文件到**core**目录下

```shell
cp ./usa/ViewLoggerConfig.php ./core/ViewLoggerConfig.php
```

###  Amqp配置

修改Amqp配置文件: `mq/RabbitMQConfig.php`

配置示例：

```php
<?php

/**
 * This is rabbitmq config info file
 */
$rabbitMQConfig = [
    "Connection" =>[
        [
            'Host'     => '172.16.1.56',
            'AmqpPort' => 5672
        ]
    ],
    "Auth"       => [
        'UserName' => 'guest',
        'Password' => 'guest'
    ],
    'VHost'      => '/',
    'Exchange'   => 'amq.direct'
];
```

###  Topic配置

修改Topic配置文件: `mq/TopicDeclaration.json`

配置示例：

```json
{
    "MQVendor": "rabbitmq",
    "WaitForConfirmTimeout": 5,
    "Topics": {
        "ExampleTopicKey": {
            "JSONSchema": "",
            "Producer": {
                "Route": "QueueRoute",
                "IsConfirmMode": 1,
                "GatewayScopes": ["Dispatcher"],
                "DefaultTransformations": "",
                "DefaultValidators": ""
            },
            "Consumer": {
                "BindingQueue": "QueueName",
                "PoolSize": 1,
                "SleepSeconds": 60,
                "Handlers": [
                    "\VIEW\Amqp\ExampleQueueHandler"
                ],
                "RunTime": ["00:00-23:59"]
            }
        },
    }
}
```

##  代码示例

###  生产者

文件路径：`core/web/amqp.php`

```php
<?php

use VIEW\Util\MQ\MessageDispatcher;
use VIEW\Util\MQ\Message;

define('NO_USER_REQUIRED', true);
define('NO_CLOSE_SESSION', true);
define('NO_PERMISSION_REQUIRED', true);
require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/init.lib");

try {
    // 消息处理类型
    $type = in_array($_GET['type'], ['unpredictable', 'retry']) ? $_GET['type'] : 'normal';

    foreach (range(1, 3) as $number) {
        // 构建消息体
        $message = new Message([
            'id'      => $number,
            'type'    => $type,
            'content' => 'example',
            'time'    => time()
        ]);

        // 分发消息到队列
        (MessageDispatcher::getInstance())->dispatch('ExampleTopicKey', $message);
    }

    echo "success!";
} catch (Exception $e) {
    echo $e->getMessage();
}
```

###  消费者

文件路径：`core/sys/libs/logic/Amqp/ExampleQueueHandler.php`

```php
<?php

namespace VIEW\Amqp;

use VIEW\Util\MQ\Exception\AutoRetryException;
use VIEW\Util\MQ\Exception\UnRecoverableException;
use VIEW\Util\MQ\Message;
use VIEW\Util\MQ\MessageHandler;

class ExampleQueueHandler implements MessageHandler
{
    /**
     * 队列消息处理
     *
     * @param Message $message
     * @throws AutoRetryException
     * @throws UnRecoverableException
     */
    public function process($message): void
    {
        // 消息内容
        $payload = $message->getContent();

        switch ($payload['type']) {
            case 'unpredictable':
                // 将会被扔到死队列(BrokenMessages)
                throw new UnRecoverableException('Message will be abandoned from the queue.');

            case 'retry':
                // 将会扔回队列3次，3次处理后依旧失败的，不会被扔到死队列(BrokenMessages)，而是直接从队列中移除
                throw new AutoRetryException('Message need to be reprocessed.', 3);
        }

        // 默认：这条消息将会从队列中移除
    }
}
```


##  基本命令

### 开发环境

进入容器(这里假设你的本地使用的是`preview`环境的代码，其它环境请替换`--user`和`-w`参数)
```shell
docker exec --user preview -w /home/tke/preview/core -it view bash
```

创建队列
```shell
php sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php QueueName QueueRoute
```

消费队列
```shell
php sys/libs/logic/Util/MQ/MessageProcessor.php usa TopicKey
```

### 生产环境

创建队列
```
allcountry:::sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php QueueName QueueRoute
```

启动服务
```
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:start:TopicKey
```

停止服务
```
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:stop:TopicKey
```

##  常见问题

### 提示没有权限

执行消费命令时出现 `Fatal error: Uncaught RuntimeException: The file could not be opened. Check permissions.`

设置日志目录权限即可
```shell
docker exec view chmod -R 777 /var/log/View
```

### 消费进程报错

`core/sys/libs/logic/Util/MQ/MessageProcessor.php`(约173行)

查找并注释掉这个方法

```php
pcntl_signal_dispatch();
```
