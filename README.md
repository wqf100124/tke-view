# View本地开发环境

## 创建镜像

### 7.4-alpine

```shell
docker build -t rtwadewang/tke:7.4-alpine --no-cache ./alpine
```

### 7.4-ubuntu

```shell
docker build -t rtwadewang/tke:7.4-ubuntu -t rtwadewang/tke:7.4 -t rtwadewang/tke:latest --no-cache ./ubuntu
```

### autotest

```shell
docker build -t rtwadewang/tke:autotest --no-cache ./autotest
```

## 生成文档

```shell
# 安装依赖
yarn install

# 本地预览
yarn docs:dev
```

## 使用方法

参考文档: [https://wqf100124.github.io/tke-view](https://wqf100124.github.io/tke-view/)
