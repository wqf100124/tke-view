# 运行测试环境代码

由于本地和测试环境代码的差异，登录和异常处理等逻辑完全不同，因此需要进行以下操作。

## 修改配置

使用 Local 环境的配置文件 **替换** 线上环境的配置文件

以 Preview 环境代码为例:

`local/hk/config.php` => `preview/hk/config.php`    
`local/global/config.php` => `preview/global/config.php`    
...

## 初始化

以 Preview 环境代码为例:

```sh
$ docker exec -it view /run/init.sh preview 80000570
```

注意替换8ID，它将被用于站点的自动登录。

::: warning 警告：
以上操作会修改 `login.php`、`tke_config.php`、`error.phtml` 等核心文件，这些文件仅可用于本地开发，切勿提交到svn！
:::