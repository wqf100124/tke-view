# Solr环境的搭建和使用

## 搭建环境

### 1.创建solr服务容器

官方镜像: [https://hub.docker.com/_/solr](https://hub.docker.com/_/solr)

```shell
docker run -d --name solr --network tke --ip 172.16.1.89 -p 8983:8983 solr
```

Solr管理控制台: [http://localhost:8983/](http://localhost:8983/)


## 在View中使用

文档待完善