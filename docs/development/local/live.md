# 运行Preview/Dev2/RC/Live代码

*由于本地和线上环境的代码有着些许差异，需要进行以下操作才能正常运行*

## 1.修改配置文件

使用 `Local` 环境的 `config.php` 配置文件 **替换** 线上环境的 `config.php` 配置文件

以Dev环境代码为例:

`local/hk/config.php` => `preview/hk/config.php`    
`local/china/config.php` => `preview/china/config.php`  
`local/global/config.php` => `preview/global/config.php`    
...

只需要替换对应国家下的 `config.php` 文件

## 2.项目初始化

由于本地和线上代码之间的差异，登录和异常处理逻辑完全不同，因此需要运行 `/run/init.sh` 脚本来修改这些文件。

::: warning 警告
该命令会修改`login.php`、`tke_config.php`、`error.phtml`、`ErrorController.php`等核心文件，这些文件仅用于本地开发，切勿提交到svn！
:::

以preview代码为例: （注意替换你自己的8ID，这里的8ID将用于站点的自动登录）

```sh
$ docker exec -it view /run/init.sh preview 80000570
```