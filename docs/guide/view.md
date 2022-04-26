# 本地开发环境

镜像地址: [https://hub.docker.com/r/rtwadewang/tke](https://hub.docker.com/r/rtwadewang/tke)     
集成环境: Apache2/PHP7.4/Memcached/Redis      
支持代码: Local/Preview/Dev2/RC/Live

## 基础环境

### 1.创建tke网络

首先，创建一个docker内部网络，这样可以使View容器可以和第三方服务如`RabbitMQ`、`Selenium`、`WSO2`、`Solr`等进行交互。

```shell
docker network create --subnet=172.16.1.0/24 tke
```

### 2.创建view容器

*注意：以下命令仅作为参考，实际运行时按照下面的说明对命令进行修改*

```shell
docker run -d --name view --network tke --ip 172.16.1.80 --restart always -p 80:80 -v <本机local代码目录>:/home/tke/local -v <本机preview代码目录>:/home/tke/preview -v <本机dev2代码目录>:/home/tke/dev2 -v <本机rc代码目录>:/home/tke/rc -v <本机live代码目录>:/home/tke/live rtwadewang/tke
```
说明：
- 对于WSL2开发环境，应使用linux下的项目路径如：`/var/web/local`
- 本地不使用的项目请删除映射目录，以免影响IO速度。例如不使用live环境，则应删除命令中的 `-v <本机live代码目录>:/home/tke/live`

测试容器是否创建成功: [http://localhost](http://localhost)	

### 3.配置站点host

根据自己的需求去配置host

```ini
# Local站点
127.0.0.1       hk.local.test
127.0.0.1       china.local.test
127.0.0.1       global.local.test

# Preview站点
127.0.0.1       hk.preview.test
127.0.0.1       china.preview.test
127.0.0.1       global.preview.test

# Dev2站点
127.0.0.1       hk.dev2.test
127.0.0.1       china.dev2.test
127.0.0.1       global.dev2.test

# RC站点
127.0.0.1       hk.rc.test
127.0.0.1       china.rc.test
127.0.0.1       global.rc.test

# Live站点
127.0.0.1       hk.live.test
127.0.0.1       china.live.test
127.0.0.1       global.live.test
```

至此Local环境的站点已经搭建好了，尝试访问: [http://hk.local.test](http://hk.local.test)

## 运行Preview/Dev2/RC/Live代码

*由于本地和线上环境的代码有着些许差异，需要进行以下操作才能正常运行*

### 1.替换config.php配置文件

使用Local环境的config.php文件 **替换** 线上环境的配置文件

`local/hk/config.php` => `preview/hk/config.php`

### 2.修改tke_config.php文件

`core/sys/includes/tke_config.php` (约24行)

查找如下代码：
```php
require_once(BASE_DIR . "/config.php");
```

替换为：

```php
$sPreUrl = substr($_SERVER["HTTP_HOST"], 0, strpos($_SERVER["HTTP_HOST"], '.'));
$sPreUrl = $sPreUrl ?: 'hk';
require_once(BASE_DIR . "/../" . $sPreUrl . "/config.php");
```

同时删除该文件结尾的php结束符（修复excel导出乱码的问题）

```php
// 删除php结束符
?>
```

### 3.修改登录逻辑

`core/web/login.php` (约15行)

查找如下代码：
```php
use SystemAdmin\User\Service\UserInformationService as UserInformationService;
```
在该行下面添加以下代码:

```php
// 使用固定8ID自动登录
$user = $db->get("SELECT * FROM `user` WHERE `ActiveDirectoryID` = '80000110' LIMIT 1");
userLogin($user->id, $user);
die();
```

## 常用命令

```shell
# 进入容器
docker exec -it view bash 

# 进入容器(仅在当你使用了7.4-alpine镜像时使用)
docker exec -it view sh
```

## 常见问题

### 执行php脚本时报错

通常，在运行php脚本如`php sys/lib/test.php`时会执行失败，这是因为这些脚本的代码中大部分都使用了类似于`$_ENV['HOME']`的系统环境变量。这时候我们可以使用 **特定用户** 进入容器，以preview用户为例:

```shell
# 进入容器
docker exec --user preview -it view bash

# 查看当前的系统环境变量，(将会输出/home/tke/preview/core)
echo $HOME
```

当前镜像中已经存在的用户和其用户目录

| 用户名     | 用户目录                   |
|---------|------------------------|
| local   | /home/tke/local/core   |
| preview | /home/tke/preview/core |
| dev2    | /home/tke/dev2/core    |
| rc      | /home/tke/rc/core      |
| live    | /home/tke/live/core    |
