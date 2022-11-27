# PHPUnit

> [PHPUnit](https://phpunit.de/) 是一个面向PHP程序员的测试框架，这是一个xUnit的体系结构的单元测试框架。

## 初始化

*注意：该操作会自动修改`autotest/phpunit/library/BaseBootstrap.php`底层文件*

```sh
$ docker exec -it autotest /run/phpunit.sh
```

## 测试命令

1.进入容器
```sh
$ docker exec -it autotest sh
```

2.进入目录(以sharp模块为例)
```sh
$ cd phpunit/sharp
```

3.执行测试命令
```sh
$ phpunit --configuration phpunit.xml --filter "testName"
```