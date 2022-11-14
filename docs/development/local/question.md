# 常见问题

## 1.执行php脚本时报错

在运行php脚本如`php sys/lib/test.php`时会报错，这是因为这些脚本的代码中大部分都使用了类似于`$_ENV['HOME']`的环境变量。这时可以使用 **特定用户** 进入容器，以preview用户为例:

进入容器
```sh
$ docker exec --user preview -it view bash
```
查看当前的系统环境变量，(将会输出/home/tke/preview/core)
```sh
$ echo $HOME
```

已经存在的用户和其对应的目录

| 用户名     | 用户目录                   |
|---------|------------------------|
| local   | /home/tke/local/core   |
| preview | /home/tke/preview/core |
| dev2    | /home/tke/dev2/core    |
| rc      | /home/tke/rc/core      |
| live    | /home/tke/live/core    |