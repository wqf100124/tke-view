# View本地开发环境

*以下操作假设你已经安装并配置好了Docker环境*

镜像地址: [https://hub.docker.com/r/rtwadewang/tke](https://hub.docker.com/r/rtwadewang/tke)     
集成环境: Apache2/PHP7/Memcached/Redis      
支持代码: Local/Preview/Dev2/RC/Live

## 运行Local环境代码

### 1.创建tke网络

```shell
docker network create --subnet=172.16.1.0/24 tke
```

### 2.创建tke容器

*注意：以下命令仅作为参考，实际运行时按照下面的说明对命令进行修改*

```shell
docker run -d --name tke --network tke --ip 172.16.1.80 --restart always -p 80:80 -v <本机local代码目录>:/home/tke/local -v <本机preview代码目录>:/home/tke/preview -v <本机dev2代码目录>:/home/tke/dev2 -v <本机rc代码目录>:/home/tke/rc -v <本机live代码目录>:/home/tke/live rtwadewang/tke
```
说明：
-	对于WSL2开发环境，应使用linux下的项目路径如：/var/web/local，而不是d:/project/local等windows系统路径
-	本地不使用的项目请务必删除映射目录(-v a:b)，以免影响IO速度


测试容器是否创建成功: [http://localhost/](http://localhost/)	

### 3.配置host

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

至此Local环境的站点已经搭建好了，尝试访问: [http://hk.local.test/](http://hk.local.test/)

##  运行Dev/Dev2/RC/Live环境代码

*由于本地和线上环境的代码有着些许差异，需要进行以下操作才能正常运行*

### 1.替换Config配置文件

使用Local环境的config.php文件 替换 Dev/Dev2/RC/Live环境的配置文件

以RC环境代码为例：

```ini
cp local/hk/config.php rc/hk/config.php
cp local/china/config.php rc/china/config.php
cp local/global/config.php rc/global/config.php
...
```

### 2.修改tke_config.php文件

core/sys/includes/tke_config.php (约24行)

查找如下代码：
```php
// First load the site level config
require_once(BASE_DIR . "/config.php");
```

替换为：

```php
$sPreUrl = substr($_SERVER["HTTP_HOST"], 0, strpos($_SERVER["HTTP_HOST"], '.'));
$sPreUrl = $sPreUrl ?: 'hk';
// First load the site level config
require_once(BASE_DIR . "/../" . $sPreUrl . "/config.php");
```

同时删除该文件结尾的php结束符（修复excel导出乱码的问题）

```php
// 删除php结束符
?>
```

### 3.修改登录逻辑

core/web/login.php (约15行)

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