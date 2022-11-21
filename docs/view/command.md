# 基础命令

## 进入容器

```sh
$ docker exec -it view bash
```

如果本地使用了 [alpine](https://hub.docker.com/r/rtwadewang/view/tags) 镜像，应该使用 `sh` 命令进入

```sh
$ docker exec -it view sh
```

## 删除容器

```sh
$ docker rm view
```

## 删除镜像

```sh
$ docker rmi rtwadewang/view
```