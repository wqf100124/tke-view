# 代码示例

## 生产者

> 把数据放入消息队列

文件路径：`web/amqp.php`

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

## 消费者

> 从消息队列中取出数据

文件路径：`sys/libs/logic/Amqp/ExampleQueueHandler.php`

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