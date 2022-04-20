#   RabbitMQ

##  Create Enviroment

### 1.Create rabbitmq service container

DockerHub: [https://hub.docker.com/_/rabbitmq](https://hub.docker.com/_/rabbitmq)

```shell
docker run -d --name rabbitmq --restart no --network tke --ip 172.16.1.56 -p 5672:5672 -p 15672:15672 rabbitmq:3.9-management-alpine
```

The console page: [http://localhost:15672](http://localhost:15672)    
username: guest     
password: guest

##  Amqp Config

###  mq folder

*Take USA as an example, other countries can be used as a reference*

Copy the mq folder under the country to the **core** directory

```shell
cp ./usa/mq/ ./core/mq
```

###  Logger Config

Copy the ViewLoggerConfig.php file under the country to the **core** directory

```shell
cp ./usa/ViewLoggerConfig.php ./core/ViewLoggerConfig.php
```

###  Amqp Config

Modify the Amqp configuration file: mq/RabbitMQConfig.php

example:

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

###  Topic Config

Modify the Topic configuration file: mq/TopicDeclaration.json

example:

```json
{
    "MQVendor": "rabbitmq",
    "WaitForConfirmTimeout": 5,
    "Topics": {
        "ExampleTopicKey": {
            "JSONSchema": "",
            "Producer": {
                "Route": "ExampleQueue",
                "IsConfirmMode": 1,
                "GatewayScopes": ["Dispatcher"],
                "DefaultTransformations": "",
                "DefaultValidators": ""
            },
            "Consumer": {
                "BindingQueue": "ExampleQueue",
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

##  Code Example

###  Producer

example file path: core/web/amqp.php

```php
<?php

use VIEW\Util\MQ\MessageDispatcher;
use VIEW\Util\MQ\Message;

define('NO_USER_REQUIRED', true);
define('NO_CLOSE_SESSION', true);
define('NO_PERMISSION_REQUIRED', true);
require_once("{$_SERVER["DOCUMENT_ROOT"]}/../sys/libs/init.lib");

try {
    // message type
    $type = in_array($_GET['type'], ['unpredictable', 'retry']) ? $_GET['type'] : 'normal';

    foreach (range(1, 3) as $number) {
        // message body
        $message = new Message([
            'id'      => $number,
            'type'    => $type,
            'content' => 'example',
            'time'    => time()
        ]);

        // message dispatch
        (MessageDispatcher::getInstance())->dispatch('ExampleTopicKey', $message);
    }

    echo "success!";
} catch (Exception $e) {
    echo $e->getMessage();
}
```

###  Consumer

file path: core/sys/libs/logic/Amqp/ExampleQueueHandler.php

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
     * Queue Handle
     *
     * @param Message $message
     * @throws AutoRetryException
     * @throws UnRecoverableException
     */
    public function process($message): void
    {
        // message body
        $payload = $message->getContent();

        switch ($payload['type']) {
            case 'unpredictable':
                throw new UnRecoverableException('Message will be abandoned from the queue.');

            case 'retry':
                throw new AutoRetryException('Message need to be reprocessed.', 3);
        }

        // Default: this message will be removed from the queue
    }
}
```


##  Basic Commands

### Development enviroment

Create a queue (take the preview environment as an example)
```shell
docker exec --user preview -w /home/tke/preview/core tke php sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php ExampleQueue ExampleQueue
```
Consume queue (take the preview environment as an example)
```shell
docker exec --user preview -w /home/tke/preview/core tke php sys/libs/logic/Util/MQ/MessageProcessor.php usa ExampleTopicKey
```

### Production enviroment

Create a queue
```shell
allcountry:::sys/libs/logic/Util/MQ/Misc/RabbitMQUtility.php ExampleQueue ExampleQueue
```

Start service
```shell
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:start:ExampleTopicKey
```

Stop service
```shell
usa:::sys/libs/logic/Util/MQ/ConsumeMediator.php:stop:ExampleTopicKey
```

##  Common Question


### An error occurred in the queue consuming process

core/sys/libs/logic/Util/MQ/MessageProcessor.php
(about 173 lines)

Find and comment out this method

```php
pcntl_signal_dispatch();
```