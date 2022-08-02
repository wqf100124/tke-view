# AutoTesting

镜像地址: [https://hub.docker.com/r/rtwadewang/autotest](https://hub.docker.com/r/rtwadewang/autotest)

## 创建容器

> Selenium和PHPUnit都使用该容器

*注意：需要替换本机dev2代码目录*

```shell
docker run -d --name autotest --network tke -v <本机dev2代码目录>:/home/tke/code rtwadewang/autotest
```

## Selenium

### 1.创建selenium服务

官方镜像: [https://hub.docker.com/r/selenium/standalone-edge](https://hub.docker.com/r/selenium/standalone-edge)

参考文档: [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

Behat语法: [https://docs.behat.org/en/latest/](https://docs.behat.org/en/latest/)

::: warning
如果你的本地没有使用[Local环境](./view.md)，那么你应该先执行`docker network create --subnet=172.16.1.0/24 tke`命令来创建一个network。
:::

接着运行下面这条命令

```shell
docker run -d --name selenium --network tke --ip 172.16.1.44 -p 4444:4444 -p 7900:7900 -e VNC_NO_PASSWORD=1 -e SE_NODE_MAX_SESSIONS=5 --shm-size="2g" selenium/standalone-edge
```

### 2.修改hostUrl

以默认国家的config文件为例，其它国家修改对应的配置文件即可。

`autotest/selenium/config.xml`

```xml
<element id="hostUrl">
	<value>https://selenium.tkeasia.com/</value>
</element>
```

修改为：
```xml{2}
<element id="hostUrl">
    <value>http://172.16.1.44:4444</value>
</element>
```

### 3.修改底层代码

*由于当前底层代码仅支持Window环境，需要修改以下文件后才能正常运行*

- `autotest/selenium/library/FeatureContext.php`
- `autotest/selenium/library/GlobalContext.php`(global环境)

修改前：
```php
if($isServer){
	$desired_capabilities->setCapability("webdriver.edge.driver", "/data/autotest/MicrosoftWebDriver");
	$desired_capabilities->setCapability("platform", "Linux");
}else{
	$desired_capabilities->setCapability("webdriver.edge.driver", "C:\driver\msedgedriver.exe");
}
```
修改后：
```php{6-7}
if($isServer){
	$desired_capabilities->setCapability("webdriver.edge.driver", "/data/autotest/MicrosoftWebDriver");
	$desired_capabilities->setCapability("platform", "Linux");
}else{
	$desired_capabilities->setCapability("webdriver.edge.driver", "C:\driver\msedgedriver.exe");
	// 在此处添加Linux平台标识
	$desired_capabilities->setCapability("platform", "Linux");
}
```

### 4.运行测试命令

*提示：后期测试时仅执行下面的测试命令即可（注意替换tagName）*

执行测试命令
```shell
docker exec -it -w /home/tke/code/autotest/selenium autotest behat --tags <tagName>
```

### 5.使用web服务

- 调试窗口: [http://localhost:7900](http://localhost:7900)
- 管理页面: [http://localhost:4444](http://localhost:4444)

### 6.常见问题

#### 运行RC的自动化测试代码

使用Dev2的`autotest/selenium/library`来替换RC的`autotest/selenium/library`目录，其它配置参照上面的步骤即可。

#### 容器中代码格式未对齐

设置编辑器: 使用4个空格代替tab键

### 7.辅助工具

View自动化测试工具: [https://testsupport.tkeasia.com/](https://testsupport.tkeasia.com/)

Selenium浏览器插件: [https://microsoftedge.microsoft.com/addons/detail/selenium-ide/ajdpfmkffanmkhejnopjppegokpogffp?hl=zh-CN](https://microsoftedge.microsoft.com/addons/detail/selenium-ide/ajdpfmkffanmkhejnopjppegokpogffp?hl=zh-CN)

## PHPUnit

### 1.项目初始化

*注意：该操作会自动修改`autotest/phpunit/library/BaseBootstrap.php`底层文件*

```shell
docker exec -it autotest /run/phpunit.sh
```

### 2.运行测试

进入容器
```shell
docker exec -it autotest sh
```

进入目录(以sharp模块为例)
```shell
cd phpunit/sharp
```

执行测试命令
```shell
phpunit --configuration phpunit.xml --filter <testName>
```