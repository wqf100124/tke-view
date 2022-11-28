# PHPUnit

> [PHPUnit](https://phpunit.de/) 是一个面向PHP程序员的测试框架，这是一个xUnit的体系结构的单元测试框架。

## 准备工作

1.修改 `dev2` 代码的配置信息。请参考：[运行测试环境代码](/view/live)

2.执行初始化脚本。

```sh
$ docker exec -it autotest /run/phpunit.sh
```
::: warning 注意：
上面的脚本会修改底层文件 `autotest/phpunit/library/BaseBootstrap.php`，切勿提交到SVN!
:::

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