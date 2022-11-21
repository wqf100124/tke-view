# Selenium

> Selenium 是支持 web 浏览器自动化的一系列工具和库的综合项目。它可以直接运行在浏览器中，就像真正的用户在操作一样。

官方镜像: [https://hub.docker.com/r/selenium/standalone-edge](https://hub.docker.com/r/selenium/standalone-edge)

参考文档: [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

Behat语法: [https://docs.behat.org/en/latest/](https://docs.behat.org/en/latest/)

## 搭建环境

1.创建selenium服务

```sh
$ docker run -d --name selenium --network tke --ip 172.16.1.44 -p 4444:4444 -p 7900:7900 -e VNC_NO_PASSWORD=1 -e SE_NODE_MAX_SESSIONS=5 --shm-size="2g" selenium/standalone-edge
```

2.修改hostUrl

以默认国家例:

打开 `autotest/selenium/config.xml` 配置文件，找到配置项 `hostUrl`

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

3.修改底层代码

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

## 运行测试命令

使用 `.feature` 文件路径作为参数
```sh
$ docker exec -it -w /home/tke/code/autotest/selenium autotest behat 'features/Example.feature'
```

使用 `tag` 名称作为参数
```sh
$ docker exec -it -w /home/tke/code/autotest/selenium autotest behat --tags 'Example'
```

使用 `feature` 名称作为参数
```sh
$ docker exec -it -w /home/tke/code/autotest/selenium autotest behat --name 'Example'
```

## 监听调试过程

- 调试窗口: [http://localhost:7900](http://localhost:7900)

[//]: # (- 管理页面: [http://localhost:4444]&#40;http://localhost:4444&#41;)

## 辅助工具

- [View自动化测试工具](https://testsupport.tkeasia.com/)
- [Selenium浏览器插件](https://microsoftedge.microsoft.com/addons/detail/selenium-ide/ajdpfmkffanmkhejnopjppegokpogffp?hl=zh-CN)

## 常见问题

### 1.运行RC的自动化测试代码

使用Dev2的 `autotest/selenium/library` 来替换RC的 `autotest/selenium/library` 目录，其它配置参照上面的步骤即可。

### 2.容器中代码格式未对齐

设置编辑器: 使用4个空格代替tab键
