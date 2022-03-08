# View开发环境

## 创建镜像

```shell
# autotest
cd autotest/

docker build -t rtwadewang/tke:autotest --no-cache .

# tke:7.4-alpine
cd alpine/

docker build -t rtwadewang/tke:7.4-alpine --no-cache .

# tke:7.4
cd ubuntu/

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
