# Autotest Enviroment

## Autotest Container

*This container is currently used by both Selenium and PHPUnit*

Create autotest container (need to replace native dev2 code directory)

```shell
docker run -d --name autotest --network tke -v <dev2 code path>:/home/tke/dev2 rtwadewang/tke:autotest
```

## Selenium

### 1.Create selenium service container

DockerHub: [https://hub.docker.com/r/selenium/standalone-edge](https://hub.docker.com/r/selenium/standalone-edge)

Docs: [https://github.com/SeleniumHQ/docker-selenium](https://github.com/SeleniumHQ/docker-selenium)

```shell
docker run -d --name selenium --network tke --ip 172.16.1.44 -p 4444:4444 -p 7900:7900 -e VNC_NO_PASSWORD=1 -e SE_NODE_MAX_SESSIONS=5 --shm-size="2g" selenium/standalone-edge
```

### 2.Edit hostUrl

Taking the config file of the default country as an example, you can modify the corresponding configuration file in other countries.

autotest/selenium/config.xml

```xml
<element id="hostUrl">
	<value>https://selenium.tkeasia.com/</value>
</element>
```

Replace with:

```xml
<element id="hostUrl">
    <value>http://172.16.1.44:4444</value>
</element>
```

Note: If your local View development environment is not using a docker container, the hostUrl should be modified to: http://127.0.0.1:4444

### 3.Modify the library code

*Since the current underlying code only supports the Window environment, it needs to be modified to support the Linux environment.*

autotest/selenium/library/FeatureContext.php

before change:
```php
if($isServer){
	$desired_capabilities->setCapability("webdriver.edge.driver", "/data/autotest/MicrosoftWebDriver");
	$desired_capabilities->setCapability("platform", "Linux");
}else{
	$desired_capabilities->setCapability("webdriver.edge.driver", "C:\driver\msedgedriver.exe");
}
```
after change:
```php
if($isServer){
	$desired_capabilities->setCapability("webdriver.edge.driver", "/data/autotest/MicrosoftWebDriver");
	$desired_capabilities->setCapability("platform", "Linux");
}else{
	$desired_capabilities->setCapability("webdriver.edge.driver", "C:\driver\msedgedriver.exe");
	// Add Linux platform ID here
	$desired_capabilities->setCapability("platform", "Linux");
}
```

### 4.run test command

Tip: Only execute the following test command in the later test (note to replace the tagName).

```shell
# into the container
docker exec -it autotest sh

# into the selenium path
cd selenium

# execute test command
vendor/bin/behat --tags <tagName>
```

### 5.Use web services

- debug window: [http://localhost:7900](http://localhost:7900)
- admin page: [http://localhost:4444](http://localhost:4444)

### 6.Common problem

#### operation not permitted
Error Message: OCI runtime exec failed: exec failed: container_linux.go:xxx: starting container process caused: operation not permitted: unknown

Solution: Modify the project permissions

```shell
docker exec autotest chmod -R 755 /home/tke/dev2/autotest/selenium/vendor/bin/behat
```

#### Code formatting in container is not aligned

Settings editor: use 4 spaces instead of tab

### 7.Tools

View automated testing tools: [https://testsupport.tkeasia.com/](https://testsupport.tkeasia.com/)

Selenium browser plugin: [https://microsoftedge.microsoft.com/addons/detail/selenium-ide/ajdpfmkffanmkhejnopjppegokpogffp?hl=zh-CN](https://microsoftedge.microsoft.com/addons/detail/selenium-ide/ajdpfmkffanmkhejnopjppegokpogffp?hl=zh-CN)

## PHPUnit

### 1.Project initialization

*Note: This operation will automatically modify the underlying file of autotest/phpunit/library/BaseBootstrap.php*

```shell
docker exec -it autotest /run/phpunit.sh
```

### 2.Run test commands

Take the sharp module as an example:

```shell
# into the container
docker exec -it autotest sh

# into the module path
cd phpunit/sharp

# execute test command
php /home/tke/dev2/autotest/phpunit/vendor/phpunit/phpunit/phpunit --configuration phpunit.xml --filter <testName>
```