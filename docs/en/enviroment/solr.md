# Solr

## Create Enviroment

### 1.Create solr service container

DockerHub: [https://hub.docker.com/_/solr](https://hub.docker.com/_/solr)

```shell
docker run -d --name solr --network tke --ip 172.16.1.89 -p 8983:8983 solr
```

Solr Administration Console: [http://localhost:8983/](http://localhost:8983/)


## Use in the view system

Documentation to be improved