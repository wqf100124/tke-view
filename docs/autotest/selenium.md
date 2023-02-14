# Selenium

> [Selenium](https://www.selenium.dev/zh-cn/) 是支持 web 浏览器自动化的一系列工具和库的综合项目。它可以直接运行在浏览器中，就像真正的用户在操作一样。

参考文档: [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

Behat语法: [https://docs.behat.org/en/latest/](https://docs.behat.org/en/latest/)

## 准备工作

1.修改hostUrl

以默认配置为例，修改 `autotest/selenium/config.xml` 文件中的 `hostUrl` 配置项：

```xml
<element id="hostUrl">
	<value>https://selenium.tkeasia.com/</value> // [!code --]
    <value>http://172.16.1.44:4444</value> // [!code ++]
</element>
```

2.修改底层代码

- `autotest/selenium/library/FeatureContext.php`
- `autotest/selenium/library/GlobalContext.php` (global环境)

修改 `$isServer` 变量
```php
    $isServer = file_exists("/opt/dennis"); // [!code --]
    $isServer = true; // [!code ++]
```

注释掉 `require_once('SeleniumDatabase.php');` 方法
```php
if($isServer){
    require_once('SeleniumDatabase.php'); // [!code --]
    // require_once('SeleniumDatabase.php'); // [!code ++]
}else{
    $arr = $this->seleniumService->getPredefinedConstants();
    foreach ($arr as $key => $value) {
        if (!defined($key)) {
            define($key, $value);
        }
    }
}
```

## 测试命令

1.进入容器
```sh
$ docker exec -it -w /home/tke/autotest/selenium autotest sh
```

2.执行测试命令

下面的几种方式都可以运行测试脚本

运行包含 `@Example` 标签的测试脚本
```sh
$ behat --tags Example
```

运行文件路径为 `features/Example.feature` 的测试脚本
```sh
$ behat features/Example.feature
```

运行 `feature` 名称为 `Example` 的测试脚本
```sh
$ behat --name 'Example'
```

## 监听调试过程

- 调试窗口: [http://localhost:7900](http://localhost:7900)

提示：如无法访问，请检查selenium容器是否在运行。

[//]: # (- 管理页面: [http://localhost:4444]&#40;http://localhost:4444&#41;)

## 辅助工具

- [View自动化测试工具](https://testsupport.tkeasia.com/)
- [Selenium浏览器插件](https://microsoftedge.microsoft.com/addons/detail/selenium-ide/ajdpfmkffanmkhejnopjppegokpogffp?hl=zh-CN)

## 常见问题

### 1.运行RC的自动化测试代码

使用Dev2的 `autotest/selenium/library` 来替换RC的 `autotest/selenium/library` 目录，其它配置参照上面的步骤即可。

### 2.容器中代码格式未对齐

设置编辑器: 使用4个空格代替tab键
