# Selenium自动化测试环境

##  1.创建selenium容器（基于Edge浏览器）

官方镜像: [https://hub.docker.com/r/selenium/standalone-edge](https://hub.docker.com/r/selenium/standalone-edge)

参考文档: [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

创建并运行selenium容器
```shell
docker run -d --name selenium --network tke --ip 172.16.1.44 -p 4444:4444 -p 7900:7900 -e VNC_NO_PASSWORD=1 -e SE_NODE_MAX_SESSIONS=3 --shm-size="2g" selenium/standalone-edge
```

在浏览器中访问
-   管理页面: [http://localhost:4444](http://localhost:4444)

##  2.创建autotest容器

注意：需要替换你本地的autotest项目路径
```shell
docker run -d --name autotest --network tke -v <本机autotest目录>:/home/tke/autotest rtwadewang/tke:autotest
```

##  3.修改配置文件
autotest/selenium/config.xml

```xml
<element id="hostUrl">
	<value>https://selenium.tkeasia.com/</value>
</element>
```

修改为：
```xml
<element id="hostUrl">
    <value>http://172.16.1.44:4444</value>
</element>
```

##  4.修改底层代码

*由于当前底层代码仅支持Window环境，需要自己修改后才能支持Linux环境*

autotest/selenium/library/FeatureContext.php

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
```php
if($isServer){
	$desired_capabilities->setCapability("webdriver.edge.driver", "/data/autotest/MicrosoftWebDriver");
	$desired_capabilities->setCapability("platform", "Linux");
}else{
	$desired_capabilities->setCapability("webdriver.edge.driver", "C:\driver\msedgedriver.exe");
	// 在此处添加Linux平台标识
	$desired_capabilities->setCapability("platform", "Linux");
}
```

##  5.修改项目权限

```shell
docker exec autotest chmod -R 755 /home/tke/autotest/selenium
```

##  6.运行测试命令

```shell
docker exec -it autotest vendor/bin/behat --tags <tagName>
```

调试窗口: [http://localhost:7900](http://localhost:7900)