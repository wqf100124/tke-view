# View本地开发环境

## 创建镜像

### 7.4-alpine

```shell
cd alpine/

docker build -t rtwadewang/tke:7.4-alpine -t rtwadewang/tke:7.4 -t rtwadewang/tke:latest --no-cache .
```

### 7.4-ubuntu

```shell
cd ubuntu/

docker build -t rtwadewang/tke:7.4-ubuntu --no-cache .
```

### autotest

```shell
cd autotest/

docker build -t rtwadewang/tke:autotest --no-cache .
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
