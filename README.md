# View本地开发环境

## 创建镜像

### Ubuntu

```shell
docker build -t rtwadewang/view:1.0.0 -t rtwadewang/view:latest --no-cache ./ubuntu
```

### Alpine

```shell
docker build -t rtwadewang/view:1.0.0-alpine -t rtwadewang/view:alpine --no-cache ./alpine
```

### autotest

```shell
docker build -t rtwadewang/autotest:1.0.0 -t rtwadewang/autotest:latest --no-cache ./autotest
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
