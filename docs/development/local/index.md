# Local环境

镜像地址: [https://hub.docker.com/r/rtwadewang/view](https://hub.docker.com/r/rtwadewang/view)

> 集成环境: Apache2/PHP7.4/Memcached/Redis      
> 支持代码: Local/Preview/Dev2/RC/Live

*基于Linux系统构建，并参照了View生产环境的配置信息，保证开发和生产环境的一致性。*

## 创建网络

由于Docker容器之间是相互隔离的，所以我们需要创建一个docker内部网络，以便使View容器可以和第三方服务容器如`RabbitMQ`、`Selenium`等进行交互。

```sh
$ docker network create --subnet=172.16.1.0/24 tke
```

## 创建容器

*注意：需要修改你的本机代码路径，同时确认本机上的Apache服务已经关闭。*

```sh
$ docker run -d --name view --network tke --ip 172.16.1.80 --restart always -p 80:80 -v <本机local代码目录>:/home/tke/local -v <本机preview代码目录>:/home/tke/preview -v <本机dev2代码目录>:/home/tke/dev2 -v <本机rc代码目录>:/home/tke/rc -v <本机live代码目录>:/home/tke/live rtwadewang/view
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