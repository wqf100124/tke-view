# 基础命令

## 进入容器

进入 view 容器
```sh
$ docker exec -it view bash
```

如果本地使用的是 [alpine](https://hub.docker.com/r/rtwadewang/view/tags) 镜像，应该使用 `sh` 命令

```sh
$ docker exec -it view sh
```

## 容器的启停

```sh
$ docker {start|stop|restart} view
```

## 删除容器

```sh
$ docker rm view
```

## 删除镜像

```sh
$ docker rmi rtwadewang/view
```