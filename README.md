# View开发环境

## 创建镜像

### autotest

```shell
cd autotest/

docker build -t rtwadewang/tke:autotest --no-cache .
```

### 7.4

```shell
cd ubuntu/

docker build -t rtwadewang/tke:7.4 -t rtwadewang/tke:latest --no-cache .
```

### 7.4-alpine

```shell
cd alpine/

docker build -t rtwadewang/tke:7.4-alpine --no-cache .
```

## 使用镜像

### 创建网络

```shell
docker network create --subnet=172.16.1.0/24 tke
```

### 运行容器

```shell
docker run -d --privileged --restart always --name tke --network tke -p 80:80 -v /home/tke/preview:/home/tke/preview -v /home/tke/rc:/home/tke/rc rtwadewang/tke
```

## 生成文档

```shell
cd doc/

# 安装依赖
npm install

# 本地开发
npm run dev

# 生成文档
npm run build

# 迁移文件
cp -rf ./htdocs/ ../alpine/src/htdocs/
cp -rf ./htdocs/ ../ubuntu/src/htdocs/
```
