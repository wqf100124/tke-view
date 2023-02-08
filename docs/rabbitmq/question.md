# 常见问题

## 提示没有权限

执行消费命令时出现 `Fatal error: Uncaught RuntimeException: The file could not be opened. Check permissions.`

设置日志目录权限即可
```sh
$ docker exec view chmod -R 777 /var/log/View
```

## 消费进程报错

`sys/libs/logic/Util/MQ/MessageProcessor.php`(约173行)

查找并注释掉这个方法

```php
pcntl_signal_dispatch();
```