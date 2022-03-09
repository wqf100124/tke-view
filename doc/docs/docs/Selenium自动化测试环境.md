# Selenium自动化测试环境

*以下操作假设你已经安装并配置好了Docker环境*

## 搭建环境

### 创建selenium容器

官方镜像: [https://hub.docker.com/r/selenium/standalone-edge](https://hub.docker.com/r/selenium/standalone-edge)

参考文档: [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

```shell
docker run -d --name selenium --network tke --ip 172.16.1.44 -p 4444:4444 -p 7900:7900 -e VNC_NO_PASSWORD=1 -e SE_NODE_MAX_SESSIONS=3 --shm-size="2g" selenium/standalone-edge
```

### 创建autotest容器

注意：需要替换你本地的autotest项目路径
```shell
docker run -d --name autotest --network tke -v <本机autotest目录>:/home/tke/autotest rtwadewang/tke:autotest
```

## 项目配置

###  修改hostUrl

以默认国家的config文件为例，其它国家修改其对应的配置文件即可。

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

###  修改底层代码(以支持Linux环境)

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

###  运行测试命令

提示：后期测试时仅执行下面的测试命令即可（注意替换tagName）

```shell
docker exec -it autotest vendor/bin/behat --tags <tagName>
```

## 使用web服务

- 调试窗口: [http://localhost:7900](http://localhost:7900)
- 管理页面: [http://localhost:4444](http://localhost:4444)

## 常见问题

### operation not permitted
报错信息: OCI runtime exec failed: exec failed: container_linux.go:xxx: starting container process caused: operation not permitted: unknown

解决办法: 修改项目权限

```shell
docker exec autotest chmod 755 /home/tke/autotest/selenium
```

### 容器中代码格式未对齐

设置编辑器: 使用4个空格代替tab键

## 辅助工具

View系统自动化测试工具

Autotest Support: [https://testsupport.tkeasia.com/](https://testsupport.tkeasia.com/)