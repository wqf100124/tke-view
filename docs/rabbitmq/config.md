# 项目配置

## mq 文件夹

*以 `us` 国家为例，其它国家可作为参考*

复制 `us` 文件夹中的 `mq` 文件夹到 `core` 目录

```sh
$ cp -r ./sites/usa/mq/ ./local/mq/
```

## RabbitMQConfig.php

修改配置文件: `mq/RabbitMQConfig.php`

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

## TopicDeclaration.json

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