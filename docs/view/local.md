# Local环境

## 创建服务

1.打开一个终端窗口

2.使用下面的 `docker network create` 命令在Docker中创建类型为 `bridge` 的网络:
```sh
$ docker network create --subnet=172.16.1.0/24 tke
```

3.使用下面的 `docker run` 命令将其作为Docker中的容器运行:

Windows
```sh
$ docker run -d ^
  --name view ^
  --network tke ^
  --ip 172.16.1.80 ^
  --restart always ^
  -p 80:80 ^
  -v <本机local代码目录>:/home/tke/view ^
  -v <本机preview代码目录>:/home/tke/preview ^
  -v <本机dev2代码目录>:/home/tke/dev2 ^
  -v <本机rc代码目录>:/home/tke/rc ^
  -v <本机live代码目录>:/home/tke/live ^
  rtwadewang/view
```

MacOS/Linux
```sh
$ docker run -d \
  --name view \
  --network tke \
  --ip 172.16.1.80 \
  --restart always \
  -p 80:80 \
  -v <本机local代码目录>:/home/tke/view \
  -v <本机preview代码目录>:/home/tke/preview \
  -v <本机dev2代码目录>:/home/tke/dev2 \
  -v <本机rc代码目录>:/home/tke/rc \
  -v <本机live代码目录>:/home/tke/live \
  rtwadewang/view
```

4.测试容器是否创建成功

尝试访问: [http://localhost](http://localhost)

::: tip
如果运行失败，可以检查本机的80端口是否被占用。<br>
对于WSL2开发环境，应该使用 linux 中的项目路径如：`/var/web/local`，参考: [Docker Desktop WSL 2 backend on Windows](https://docs.docker.com/desktop/windows/wsl/)
:::

## 配置站点

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

至此Local环境已经搭建好了，尝试访问: [http://hk.local.test](http://hk.local.test)
