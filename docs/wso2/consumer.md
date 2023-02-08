# 使用外部接口

> View 通过 WSO2 请求第三方系统 API

```mermaid
flowchart LR
A(View) & B(VFM) ---> C([WSO2]) ---> D[[第三方系统A]] & E[[第三方系统B]] & F[[第三方系统C]]
style A fill:#7b1fa2,color:#fff,stroke-width:0
style B fill:#4caf50,color:#fff,stroke-width:0
style C fill:#ff7300,color:#fff,stroke-width:0
style D fill:#3a49ab,color:#fff,stroke-width:0
style E fill:#3a49ab,color:#fff,stroke-width:0
style F fill:#3a49ab,color:#fff,stroke-width:0
```

## 1.创建Api

打开 Api 管理页面并登录: [https://localhost:9443/publisher](https://localhost:9443/publisher)
<br>
账号: `admin`     
密码: `admin`

选择【REST API】类型的接口
![](/image/screenshots/wso2/user/3.png)

点击【Start From Scratch】 创建新的 API
![](/image/screenshots/wso2/user/4.png)
填入接口信息
![](/image/screenshots/wso2/user/5.png)

配置第三方接口的认证信息
![](/image/screenshots/wso2/user/6.png)

## 2.创建App

打开 App 管理页面: [https://localhost:9443/devportal/applications](https://localhost:9443/devportal/applications)

点击【ADD NEW APPLICATION】按钮
![](/image/screenshots/wso2/user/7.png)
填入信息并保存
![](/image/screenshots/wso2/user/8.png)

## 3.生成OAuth认证密钥
切换到【Oauth2 Tokens】菜单栏
![](/image/screenshots/wso2/user/oauth-1.png)
点击【GENERATE KEYS】生成新的认证密钥
![](/image/screenshots/wso2/user/oauth-2.png)
查看新生成的密钥信息
![](/image/screenshots/wso2/user/oauth-3.png)

## 4.绑定Api和App
切换到【Subscriptions】菜单栏，然后点击页面上的【+SUBSCRIBE APIS】按钮
![](/image/screenshots/wso2/user/subscribe-1.png)
在弹出的页面中选择需要绑定的API，点击【SUBSCRIBE】按钮
![](/image/screenshots/wso2/user/subscribe-2.png)

## 5.在View中使用

### 添加配置信息

在项目的 `core` 文件夹下新建一个名为: `.restfulapi.authentication.ini` 的文件（文件名以'.'号开始），并复制粘贴以下内容。
```ini{5-6}
;配置项名称
[APPLICATION_DEMO]
;WSO2的OAuth认证接口
gatewayAuthUrl="https://172.16.1.94:9443/oauth2"
;WSO2的Oauth帐号信息
consumerKey="Gyf9T2mZRqiyC7z7kw8_g8ngxnoa"
consumerSecret="Xh6_eLPWaPBbUMfkUld72GG6JL4a"
;WSO2中的API接口地址
gatewayRecourceUrl="https://172.16.1.94:8243"
```
- 配置项名称对应 Application 的名称
- consumerKey 对应 OAuth2 的 `Consumer Key` 和 `Consumer Secret`

### 发送请求

在项目中新建一个 `web/wso2.php` 的测试文件，并复制粘贴以下代码。

```php
<?php

const NO_USER_REQUIRED       = true;
const NO_PERMISSION_REQUIRED = true;

require_once("{$_SERVER['DOCUMENT_ROOT']}/../sys/libs/init.lib");
require_once("{$_SERVER['DOCUMENT_ROOT']}/../sys/libs/logic/Util/Gateway/ViewGateway.lib");

use VIEW\Util\Gateway\ViewGateway;

// .ini文件中的配置项名称
const CONFIG_NAME = 'APPLICATION_DEMO';
// API名称
const API_NAME = 'Demo';
// API路径(context)
const API_URI = '/demo';
// API版本
const API_VERSION = '1.0';

try {
    $viewGateway = new ViewGateway(CONFIG_NAME, "");

    // 发送请求
    $result = $viewGateway->post(API_NAME, [], 0, null, null, API_VERSION, true, 2, API_URI);

    if (empty($result)) {
        // 接口请求失败，记录日志
    }
} catch (Exception $e) {
    var_dump($e);
}
```

### 处理响应
创建处理文件: `sys/libs/logic/Util/Gateway/Handler/DemoGatewayBizHandler.php`

*文件命名规范：<App名称>GatewayBizHandler.php*

```php
<?php

namespace VIEW\Util\Gateway\Handler;

require_once("{$_SERVER['DOCUMENT_ROOT']}/../sys/libs/curl_api_adapter/curl.lib");
require_once("{$_SERVER['DOCUMENT_ROOT']}/../sys/libs/view_exceptions/autoloader.php");
require_once(SYSTEM_DIR . '/libs/logic/external_access_logger/bo/ExternalAccessLogger.lib');
require_once SYSTEM_DIR . '/libs/jwt_wrapper/autoloader.php';

use VIEW\Util\Gateway\ViewGatewayBizHandlerBaseService;

class DemoGatewayBizHandler extends ViewGatewayBizHandlerBaseService
{
    /**
     * Demo
     *
     * @param $applicationName
     * @param $apiName
     * @param $requestMethod
     * @param $requestData
     * @param $version
     * @param $retutrnValue
     * @param $identifier
     */
    public function onFinish($applicationName, $apiName, $requestMethod, $requestData, $version, $retutrnValue, $identifier)
    {
        var_dump($retutrnValue);
        parent::onFinish($applicationName, $apiName, $requestMethod, $requestData, $version, $retutrnValue, $identifier);
    }
}
```

## 6.接口调试

### 获取AccessToken

1.打开调试工具，使用 `POST` 方法请求URL: `https://localhost:9443/oauth2/token`
<br>
2.认证方式选择 `Basic Auth`，账号密码填写 OAuth2 的 `Key` 和 `Secret`
![](/image/screenshots/wso2/user/14.png)
在请求的 `Body` 中添加 `grant_type:client_credentials` 信息
![](/image/screenshots/wso2/user/15.png)

### 请求API(WSO2直连)
1.打开调试工具，使用 `POST` 方法请求URL: `https://localhost:8243/demo/1.0`
<br>
2.认证方式选择 `Bearer Token`，Token内容使用上面获取的 `access_token`

### 请求API(View中使用WSO2)
访问你的URL如: `https://localhost:8243/wso2.php`