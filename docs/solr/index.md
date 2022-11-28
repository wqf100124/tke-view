# Solr 全文搜索

> Solr 采用 Java5 开发，是建立在 Apache Lucene™上的流行的、快速的开源企业搜索平台。   
> Solr 具有高度可靠、可伸缩和容错能力，提供分布式索引、复制和负载平衡查询、自动故障转移和恢复、集中配置等功能。   
> Solr 为世界上许多最大的互联网站点的搜索和导航功能提供了动力。

## 搭建环境

::: tip 温馨提示：
假如你的本地没有 `docker-compose.yml` 配置文件，请先参阅：[本地开发环境](/view/)。
:::

1.编辑你的 `docker-compose.yml` 文件，在 `service` 配置项中添加 RabbitMQ 的配置信息。
```yaml{2-11}
services:
  # Solr
  solr:
    image: solr
    container_name: solr
    command: solr-precreate view
    networks:
      tke:
        ipv4_address: 172.16.1.89
    ports:
      - "8983:8983"
```
完整配置请参考：[View Docker Compose](/compose)

2.打开终端工具，并切换到 `docker-compose.yml` 文件所在的目录。例如：
```sh
$ cd ~/Desktop/
```

3.创建并启动服务（`-d`参数可以让服务在后台运行）。
```sh
$ docker-compose -p tke up -d
```

4.验证服务是否创建成功

访问Solr管理控制台: [http://localhost:8983/](http://localhost:8983/)


[//]: # (创建solr服务容器)

[//]: # (```sh)

[//]: # ($ docker run -d --name solr --network tke --ip 172.16.1.89 -p 8983:8983 solr solr-precreate view)

[//]: # (```)