# PHPUnit

## 1.项目初始化

*注意：该操作会自动修改`autotest/phpunit/library/BaseBootstrap.php`底层文件*

```sh
$ docker exec -it autotest /run/phpunit.sh
```

## 2.运行测试

进入容器
```sh
$ docker exec -it autotest sh
```

进入目录(以sharp模块为例)
```sh
$ cd phpunit/sharp
```

执行测试命令
```sh
$ phpunit --configuration phpunit.xml --filter <testName>
```