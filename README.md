# View开发环境

## 创建镜像

```shell
# autotest
docker build -t rtwadewang/tke:autotest --no-cache .

# tke:7.4-alpine
docker build -t rtwadewang/tke:7.4-alpine --no-cache .

# tke:7.4
docker build -t rtwadewang/tke:7.4 -t rtwadewang/tke:latest --no-cache .
```

## 如何使用

```shell
# 创建网络
docker network create --subnet=172.16.1.0/24 tke

# 运行容器
docker run -d --privileged --restart always --name tke --network tke -p 80:80 -v /home/tke/preview:/home/tke/preview -v /home/tke/rc:/home/tke/rc rtwadewang/tke
```

## 文档构建

```shell
cd htdocs

# 安装依赖
npm install

# 本地开发
npm run dev

# 生成文档
npm run build

# 迁移文件
cp -r ./doc/htdocs ./mini/src/htdocs
cp -r ./doc/htdocs ./ubuntu/src/htdocs
```
