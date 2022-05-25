# Local环境

镜像地址: [https://hub.docker.com/r/rtwadewang/view](https://hub.docker.com/r/rtwadewang/view)

> 集成环境: Apache2/PHP7.4/Memcached/Redis      
> 支持代码: Local/Preview/Dev2/RC/Live

*基于Linux系统构建，并参照了View生产环境的配置信息，保证开发和生产环境的一致性。*

## 创建网络

由于Docker容器之间是相互隔离的，所以我们需要创建一个docker内部网络，以便使View容器可以和第三方服务容器如`RabbitMQ`、`Selenium`等进行交互。

```shell
docker network create --subnet=172.16.1.0/24 tke
```

## 创建容器

*注意：需要修改你的本机代码路径，同时确认本机上的Apache服务已经关闭。*

```shell
docker run -d --name view --network tke --ip 172.16.1.80 --restart always -p 80:80 -v <本机local代码目录>:/home/tke/local -v <本机preview代码目录>:/home/tke/preview -v <本机dev2代码目录>:/home/tke/dev2 -v <本机rc代码目录>:/home/tke/rc -v <本机live代码目录>:/home/tke/live rtwadewang/view
```

- 不使用的代码请删除目录映射，以免影响IO速度。例如不使用rc环境，则应删除命令中的 `-v <本机rc代码目录>:/home/tke/rc`
- 对于WSL2开发环境，应该使用linux下的项目路径如：`/var/web/local`，具体可以参考:[https://docs.docker.com/desktop/windows/wsl/](https://docs.docker.com/desktop/windows/wsl/)

测试容器是否创建成功: [http://localhost](http://localhost)	

## 配置站点

根据自己的需求去配置

```ini
# Local站点
127.0.0.1       hk.local.test
127.0.0.1       china.local.test
127.0.0.1       global.local.test

# Preview站点
127.0.0.1       hk.preview.test
127.0.0.1       china.preview.test
127.0.0.1       global.preview.test

# Dev2站点
127.0.0.1       hk.dev2.test
127.0.0.1       china.dev2.test
127.0.0.1       global.dev2.test

# RC站点
127.0.0.1       hk.rc.test
127.0.0.1       china.rc.test
127.0.0.1       global.rc.test

# Live站点
127.0.0.1       hk.live.test
127.0.0.1       china.live.test
127.0.0.1       global.live.test
```

:ghost: 至此Local环境的站点已经搭建好了，尝试访问: [http://hk.local.test](http://hk.local.test)

## 运行线上代码

*由于本地和线上环境的代码有着些许差异，需要进行以下操作才能正常运行*

### 1.替换config.php

使用Local环境的config.php文件 **替换** 线上环境的配置文件

以preview代码例如:

`local/hk/config.php` => `preview/hk/config.php`    
`local/china/config.php` => `preview/china/config.php`  
`local/global/config.php` => `preview/global/config.php`    
...<br>
需要运行哪个国家直接替换config.php即可

### 2.运行初始化命令

::: warning
该命令会修改`login.php`、`tke_config.php`、`error.phtml`、`ErrorController.php`等核心文件，这些文件仅可用于你的本地开发环境，切勿提交到svn！
:::

以preview代码为例: *(注意替换你自己的8ID，这里的8ID将会被用于站点的自动登录)*

```shell
docker exec -it view /run/init.sh preview 80000570
```

## 常用命令

进入容器
```shell
docker exec -it view bash
```

进入容器(仅在当你使用了 7.4-alpine 镜像时使用)
```shell
docker exec -it view sh
```

## 常见问题

### 1.执行php脚本时报错

在运行php脚本如`php sys/lib/test.php`时会报错，这是因为这些脚本的代码中大部分都使用了类似于`$_ENV['HOME']`的环境变量。这时可以使用 **特定用户** 进入容器，以preview用户为例:

进入容器
```shell
docker exec --user preview -it view bash
```
查看当前的系统环境变量，(将会输出/home/tke/preview/core)
```shell
echo $HOME
```

当前镜像中已经存在的用户和其用户目录

| 用户名     | 用户目录                   |
|---------|------------------------|
| local   | /home/tke/local/core   |
| preview | /home/tke/preview/core |
| dev2    | /home/tke/dev2/core    |
| rc      | /home/tke/rc/core      |
| live    | /home/tke/live/core    |
