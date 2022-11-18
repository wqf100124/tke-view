# 基础环境

镜像地址: [https://hub.docker.com/r/rtwadewang/autotest](https://hub.docker.com/r/rtwadewang/autotest)

## 创建Autotest容器

> Selenium和PHPUnit都使用该容器

::: tip 温馨提示
如果你的本地没有使用[Local环境](/view/)，请先执行`docker network create --subnet=172.16.1.0/24 tke`命令来创建网络。
:::

*注意：需要替换本机dev2代码目录*

```sh
$ docker run -d --name autotest --network tke -v <本机dev2代码目录>:/home/tke/code rtwadewang/autotest
```