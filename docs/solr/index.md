# Solr全文搜索

## 介绍
什么是 Solr？
> Solr 采用 Java5 开发，是建立在 Apache Lucene™上的流行的、快速的开源企业搜索平台。   
> Solr 具有高度可靠、可伸缩和容错能力，提供分布式索引、复制和负载平衡查询、自动故障转移和恢复、集中配置等功能。   
> Solr 为世界上许多最大的互联网站点的搜索和导航功能提供了动力。

## 搭建环境

官方镜像: [https://hub.docker.com/_/solr](https://hub.docker.com/_/solr)

::: tip 温馨提示
如果你的本地没有使用[Local环境](/view/)，请先执行`docker network create --subnet=172.16.1.0/24 tke`命令来创建网络。
:::

创建solr服务容器

```sh
$ docker run -d --name solr --network tke --ip 172.16.1.89 -p 8983:8983 solr solr-precreate view
```

Solr管理控制台: [http://localhost:8983/](http://localhost:8983/)