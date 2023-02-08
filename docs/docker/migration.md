# 从 Svn 迁移到 Git

> 本地使用preview环境的代码开发

## 从 Git 上拉取最新代码

1.拉取 `view` 代码
```sh
$ git clone <Gitlib代码仓库地址> local
```

2.拉取国家配置文件

以 `hk` 国家为例：
```sh
$ git clone <Gitlib代码仓库地址>/hk view/hk
```

3.参考 [View开发环境](/view/)，重新搭建开发环境。