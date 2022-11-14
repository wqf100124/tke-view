# 常用命令

## 拉取镜像
```sh
$ docker pull <image name>
```

## 查看镜像列表
```sh
$ docker images
```

## 删除镜像
```sh
$ docker rmi <image ID>
```

## 容器的运行/停止/删除
```sh
$ docker {start|stop|rm} <container ID>
```

## 列出正在运行的容器
```sh
$ docker ps
```

## 进入容器
```sh
$ docker exec -it <container ID> bash
```