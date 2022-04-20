## View Docker Image

> A local development environment of View system based on Docker.

## What it is

Refer to the image built in the View production environment to ensure the consistency of the development environment and the production environment. Whether you are developing in Windows, macOS or Linux environment, it can be perfectly supported. No need for cumbersome environment configuration and installation process, only need to execute a command like `docker run ...` can be easily done.

See the [Quick Start](/enviroment/view.md) guide for more details.

## Features

- Support Local/Dev/Dev2/RC/Live environment
- Support in Windows/macOS/Linux environment
- Integrate third-party service such as RebbitMQ/Autotest/WSO2/Solr


## How to use

as easy as counting 1, 2, 3

```shell
# local development enviroment
docker run -d -p 80:80 -v <local code path>:/home/tke/local rtwadewang/tke
```