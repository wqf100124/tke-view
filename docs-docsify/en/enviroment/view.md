# View Local Development Enviroment

DockerHub: [https://hub.docker.com/r/rtwadewang/tke](https://hub.docker.com/r/rtwadewang/tke)     
Integrate: Apache2/PHP7.4/Memcached/Redis      
Support: Local/Preview/Dev2/RC/Live

## Local Enviroment

### 1.Create tke network

Create a docker internal network so that the View container can be interconnected with external services such as RabbitMQ, Selenium, WSO2, etc.

```shell
docker network create --subnet=172.16.1.0/24 tke
```

### 2.Create view container

*Note: The following commands are for reference only, and the commands should be modified according to the following instructions when actually running.*

```shell
docker run -d --name view --network tke --ip 172.16.1.80 --restart always -p 80:80 -v <local code path>:/home/tke/local -v <preview code path>:/home/tke/preview -v <dev2 code path>:/home/tke/dev2 -v <rc code path>:/home/tke/rc -v <live code path>:/home/tke/live rtwadewang/tke
```
illustrate:
-	For the WSL2 development environment, the project path under linux such as /var/web/local should be used instead of the windows system path such as d:/project/local
-	For projects not used locally, please delete the mapping directory so as not to affect the IO speed. For example, if you don't use a live environment, you should delete -v <live code path>:/home/tke/live in the command


Test whether the container was created successfully: [http://localhost/](http://localhost/)	

### 3.Config host

```ini
# Local site
127.0.0.1       hk.local.test
127.0.0.1       china.local.test
127.0.0.1       global.local.test

# Preview site
127.0.0.1       hk.preview.test
127.0.0.1       china.preview.test
127.0.0.1       global.preview.test

# Dev2 site
127.0.0.1       hk.dev2.test
127.0.0.1       china.dev2.test
127.0.0.1       global.dev2.test

# RC site
127.0.0.1       hk.rc.test
127.0.0.1       china.rc.test
127.0.0.1       global.rc.test

# Live site
127.0.0.1       hk.live.test
127.0.0.1       china.live.test
127.0.0.1       global.live.test
```

then The local environment site has been built, try to visit: [http://hk.local.test/](http://hk.local.test/)

##  Use Preview/Dev2/RC/Live enviroment code

*Due to the slight differences in the code of the local and online environments, the following operations are required for normal operation*

### 1.Replace config file

Use the config.php file of the Local environment to replace Preview/Dev2/RC/Live config file.

local/hk/config.php => preview/hk/config.php

### 2.Edit tke_config.php file

core/sys/includes/tke_config.php (约24行)

Find the following code:
```php
require_once(BASE_DIR . "/config.php");
```

Replace with:

```php
$sPreUrl = substr($_SERVER["HTTP_HOST"], 0, strpos($_SERVER["HTTP_HOST"], '.'));
$sPreUrl = $sPreUrl ?: 'hk';
require_once(BASE_DIR . "/../" . $sPreUrl . "/config.php");
```

At the same time, delete the php terminator at the end of the file (fix the problem of garbled characters in excel export)

```php
// remove php terminator
?>
```

### 3.Modify login logic

core/web/login.php (about 15 lines)

Find the following code:
```php
use SystemAdmin\User\Service\UserInformationService as UserInformationService;
```

Add the following code below that line:

```php
// Automatic login with fixed 8ID
$user = $db->get("SELECT * FROM `user` WHERE `ActiveDirectoryID` = '80000110' LIMIT 1");
userLogin($user->id, $user);
die();
```

## Common commands

```shell
# into the container
docker exec -it view sh

# update package
apk update

# install package(vim)
apk add vim
```