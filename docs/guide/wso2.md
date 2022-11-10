# WSO2

> WSO2的应用服务器是一个轻量级，高性能和高集成的Web服务的中间件平台。

Api: WSO2和外部系统的接口通信服务   
Application: 用来为Api分组以及授权、限流等

两者关系示例:

![](/image/screenshots/wso2/WSO2.png)

## 搭建本地环境

需要的镜像/软件

- AM(API管理工具)
- Swagger Editor(文档工具)
- Integration Studio(拖放式图形开发工具)

### AM(API Manager)

官方镜像: [https://hub.docker.com/r/wso2/wso2am](https://hub.docker.com/r/wso2/wso2am)

*部署和管理 API 的工具，提供了 API 整个生命周期所需要的各种控制，包含控制访问权限，访问流量，监控 API 的调用，版本控制等，最新的4.1.0版本已经集成了MI(Micro Integrator)。*

::: tip 温馨提示
如果你的本地没有使用[Local环境](./view.md)，请先执行`docker network create --subnet=172.16.1.0/24 tke`命令来创建网络。
:::

创建并运行AM容器(*容器启动过程大约需要2~3分钟，耐心等待即可。*)
```sh
$ docker run -d --network tke --ip 172.16.1.94 -p 8280:8280 -p 8243:8243 -p 9443:9443 --name api-manager wso2/wso2am
```
Api管理: [https://localhost:9443/publisher/apis](https://localhost:9443/publisher/apis)	  
App管理: [https://localhost:9443/devportal/applications](https://localhost:9443/devportal/applications)

账号: `admin`     
密码: `admin`

### Integration Studio

> 设计、开发、调试、测试和部署工具

官方下载地址: [https://wso2.com/integration/integration-studio/](https://wso2.com/integration/integration-studio/)

::: warning 注意：
仅当你的项目需要根据业务去对API数据进行转换(格式、字段等)，才需要使用本软件，一般业务无需安装。
:::

### Swagger Editor(API文档编辑器)
官方镜像: [https://hub.docker.com/r/swaggerapi/swagger-editor/](https://hub.docker.com/r/swaggerapi/swagger-editor/)       
官方文档: [https://swagger.io/docs/](https://swagger.io/docs/)	      	   
在线编辑: [https://editor.swagger.io/](https://editor.swagger.io/)

```sh
$ docker run -d -p 8080:8080 --name swagger-editor swaggerapi/swagger-editor
```
使用本地编辑器: [http://localhost:8080/](http://localhost:8080/)

## View提供API给第三方

![](/image/screenshots/wso2/provider/mind.png)

### 1.在View中创建接口文件

示例: `core/web/sharp/modules/api/controllers/DemoController.php`

```php
<?php

include_once(dirname(__FILE__) . '/RestfulController.php');

class Api_DemoController extends Api_RestfulController
{
    protected string $scope = 'Demo';

    /**
     *
     * @author wadewang
     * @date 2022-02-21
     */
    public function indexAction()
    {
        if ($_GET['status'] === 'error') {
            return $this->error('invalid phone number.', 422);
        }

        return $this->success([
            'id'   => 888,
            'name' => 'Demo'
        ], 'success');
    }
}
```

### 2.跳过本地认证
修改: `core/web/sharp/modules/api/controllers/RestfulController.php` 文件

![](/image/screenshots/wso2/provider/1.png)


### 3.接口调试

接口地址: [http://hk.preview.test/sharp/api/demo](http://hk.preview.test/sharp/api/demo)

![](/image/screenshots/wso2/provider/2.png)


## View请求第三方API

![](/image/screenshots/wso2/user/mind.png)

### 1.在WSO2中创建Api

打开API管理页面: [https://localhost:9443/publisher](https://localhost:9443/publisher)

![](/image/screenshots/wso2/user/3.png)
![](/image/screenshots/wso2/user/4.png)
![](/image/screenshots/wso2/user/5.png)

配置第三方接口的认证信息
![](/image/screenshots/wso2/user/6.png)

### 2.在WSO2中创建App

App管理页面:[https://localhost:9443/devportal/applications](https://localhost:9443/devportal/applications)

![](/image/screenshots/wso2/user/7.png)
![](/image/screenshots/wso2/user/8.png)

### 3.生成OAuth认证密钥
![](/image/screenshots/wso2/user/oauth-1.png)
![](/image/screenshots/wso2/user/oauth-2.png)
![](/image/screenshots/wso2/user/oauth-3.png)

### 4.绑定Api和App
![](/image/screenshots/wso2/user/subscribe-1.png)
![](/image/screenshots/wso2/user/subscribe-2.png)


### 5.本地创建OAuth配置文件

手动创建: `core/.restfulapi.authentication.ini` 文件(注意文件名包含.号)，填入如下内容

```ini
[VIEW_DEMO_APPLICATION]
;WSO2的OAuth认证接口
gatewayAuthUrl="https://172.16.1.94:9443/oauth2"
;WSO2的Oauth帐号信息
consumerKey="xdv5SZLHEIR4Ux8jc14ugJLWDD4a"
consumerSecret="kvsoaXylTKa2X9HvCepn9bfrYyoa"
;WSO2中的API接口地址
gatewayRecourceUrl="https://172.16.1.94:8243"
```

### 6.在项目中使用

`core/web/wso2.php`

```php
<?php

define('NO_USER_REQUIRED', true);
define('NO_PERMISSION_REQUIRED', true);
ini_set("display_errors", true);
error_reporting(E_ALL);
ini_set('default_socket_timeout', 300);
ini_set('soap.wsdl_cache_enabled', '0');
ini_set('soap.wsdl_cache_ttl', '0');

require_once("{$_SERVER['DOCUMENT_ROOT']}/../sys/libs/init.lib");
require_once("{$_SERVER['DOCUMENT_ROOT']}/../sys/libs/logic/Util/Gateway/ViewGateway.lib");

use VIEW\Util\Gateway\ViewGateway;

// .ini配置文件中配置名称
CONST CONFIG_NAME = 'VIEW_DEMO_APPLICATION';
// WSO2中创建的API名称
CONST API_NAME = 'Demo';
// API路径
CONST API_URI = '/demo';
// API版本
CONST API_VERSION = '1.0';

try {

    $viewGateway = new ViewGateway(CONFIG_NAME, "");

    // 发送请求
    $result = $viewGateway->post(API_NAME, [], 0, null, null, API_VERSION, true, 2, API_URI);
    if (!$result) {
        echo 'request fail';
    }
} catch (Exception $e) {
    var_dump($e);
}
```

### 7.处理接口返回的数据
创建处理文件: `core/sys/libs/logic/Util/Gateway/Handler/DemoGatewayBizHandler.php`

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
     *
     * @author wadewang
     * @date 2022-02-25
     */
    public function onFinish($applicationName, $apiName, $requestMethod, $requestData, $version, $retutrnValue, $identifier)
    {
        var_dump($retutrnValue);
        parent::onFinish($applicationName, $apiName, $requestMethod, $requestData, $version, $retutrnValue, $identifier);
    }
}
```

### 8.WSO2的接口调试

获取AccessToken的接口
![](/image/screenshots/wso2/user/14.png)
![](/image/screenshots/wso2/user/15.png)

在View中测试
![](/image/screenshots/wso2/user/16.png)

## API数据转换(EI)

请确保已安装 **Integration Studio** 工具

待更新...

## 部署

部署流程：

![](/image/screenshots/wso2/deploy/WSO2部署流程.png)

SVN地址:

```ini
# dev环境代码(用于部署Dev/Dev2/Opt环境)
svn://10.251.68.174/view_repos/fos/GatewayDev
# dev2代码(用于部署RC和Live环境)
svn://10.251.68.174/view_repos/fos/GatewayStaging
```

### 1.创建并部署App

#### 创建App配置文件

*注意：原则上一个BU对应一个Application，如果该Application已经存在，使用现有的即可。*

示例：
在 `CommonAssets/ApplicationSetting/AP` 目录下创建App配置文件

VIEW_AP_APPLICATION.xml	
 ```xml
<?xml version="1.0" encoding="UTF-8"?>
<applicationConfig>
    <name>VIEW_AP_APPLICATION</name>
	<throttlingPolicy>Unlimited</throttlingPolicy>  
	<description>For VIEW AP WSO2 API APPLICATION</description>
	<tokenType>Client_Credentials</tokenType>
	<notificationUser>samwang@rayootech.com,wadewang@rayootech.com,janms@rayootech.com</notificationUser>
</applicationConfig>
```

#### 使用Jenkins部署App

*需要运维开启对应帐号的部署权限*

Dev环境:
[https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Dev/](https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Dev/)

RC环境:
[https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Staging/](https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Staging/)

部署页面

![](/image/screenshots/wso2/deploy/1.png)

部署成成功后，application的账号信息会发送到上面配置文件中的用户邮箱里。

![](/image/screenshots/wso2/deploy/2.png)

需要让运维在对应的环境中添加App的配置信息`.restfulapi.authentication.ini`文件
格式：
```ini
[VIEW_AP_APPLICATION]
name="VIEW_AP_APPLICATION"
consumerKey="<Key>"
consumerSecret="<Secret>"
gatewayAuthUrl="https://apiapdev.fos.tkeasia.com"
gatewayRecourceUrl="https://apiapdev.fos.tkeasia.com"
```

### 2.创建并部署Api

在根目录创建如下两个文件

`Demo/API_Managment/V1/apiConfig.xml`
`Demo/API_Managment/V1/swagger.json`

![](/image/screenshots/wso2/deploy/3.png)

::: details apiConfig.xml 文件示例

```xml
<?xml version="1.0" encoding="UTF-8"?>
<apiConfig>
    <!-- The name of the API (needed)     -->
    <name>Demo</name>
    <!-- Version of the API (needed)    -->
    <version>1.0</version>
    <!-- The request path of the API (needed)  -->
    <context>/suburi</context>
	<!-- The rateLimit info of the API -->
	<rateLimit>
		<!-- The speed limit of the API. Available setting: Unlimited/10000/20000/50000.Default is Unlimited -->
		<!-- <policies>Unlimited</policies> -->
		<!-- The TPS(Maximum back-end transactions per second in integers) of the API. default is Unlimited-->
		<!--<TPS>Unlimited</TPS>       -->
		<!-- The subscription policies of the API. Available setting: Unlimited/Gold(5000)/Silver(2000)/Brozen(1000).Default is Unlimited -->
		<!--                           -->
		<!--<subscriptionPolicies>Unlimited</subscriptionPolicies>-->
		<!-- If the endpoint is VIEW, if Y, will force set rate limit to 50.Available Value:Y/N.Default is Y -->
		<isViewEndPoint>Y</isViewEndPoint>
	</rateLimit>
	<!-- The endpoint info of the API-->
	<endpointInfo>
		<!-- The endpoint url info of the API,default is the EI path of the value set in context.  -->
		<!-- Or you can set as:{EI_URL}/Maintenancecntry  to connect to other path of the EI,or set the full path of other endpoint,like:<url>https://www.baidu.com/Maintenancecntry</url> -->
		<url>第三方接口地址</url>
		<!-- The endpoint Auth type,None:means no Auth, Basic:means use basic Auth, Oauth:means Oauth -->
		<authInfo>Basic</authInfo>
		<!-- The endpoint Auth info,if set "Basic" in authInfo will use as basic Auth username & password, "Oauth" will use as Oauth client-id&client-secret  -->
		<authName>demo.auth.basic.username</authName>
		<authPwd>demo.auth.basic.password</authPwd>
	</endpointInfo>
    <!-- The bind application of this API.One API could bind to multiple application.Value get from CommonAssets\ApplicationSetting,File name in each BU folder. If bind to multiple application,add this section.--> 
    <!-- Rules:  --> 
    <!-- VIEW->WSO2/WSO2->VIEW : 1:All API of each country under same bu share same application.                                                               --> 
    <!-- ExternalSystem->WSO2 :  2:Different API of Same System under same country share same application.                                                     --> 
	<applicationInfo>
		<bindApplication>VIEW_AP_APPLICATION</bindApplication>
		<!-- The application subscription policies of the API. Available setting: Unlimited/Gold(5000)/Silver(2000)/Brozen(1000).Default is Unlimited -->
		<!--<applicationPolicies>10</applicationPolicies>-->
	</applicationInfo>
    <!-- Decide which BU this API will apply to. Could apply to multiple BU,use "," as separator.Available value:AP/NA/EA/SA   -->
    <applyBU>AP</applyBU>
	<!-- The realted endpoint config file folder of this api,under path "CommonAssets\Enterprise_integrator\{BU}\EndPoint"     --> 
    <!-- {BU} related to config value of line64 "applyBU",multiple use "," as separator -->
    <endPointConfig>Oz</endPointConfig>
</apiConfig>
```
:::

::: details swagger.json 文件示例

```json
{
  "swagger": "2.0",
  "info": {
    "description": "The Api doc for the Demo,For outside system to post paitent info to FR.",
    "version": "1.0",
    "title": "Demo",
    "termsOfService": "http://swagger.io/terms/",
    "contact": {
      "email": "wadewang@rayootech.com"
    },
    "license": {
      "name": "Apache 2.0",
      "url": "http://www.apache.org/licenses/LICENSE-2.0.html"
    }
  },
  "host": "Demo",
  "basePath": "/ServiceNow",
  "tags": [
    {
      "name": "Hospital",
      "description": "Everything about the hospital info in this Demo",
      "externalDocs": {
        "description": "Find out more",
        "url": "http://swagger.io"
      }
    }
  ],
  "schemes": [
    "https"
  ],
  "paths": {
    "/*": {
      "post": {
        "tags": [
          "Hospital"
        ],
        "summary": "Send paitent info to us.",
        "description": "send the paient info to us,detail as below",
        "operationId": "sendPaitent",
        "produces": [
          "application/json"
        ],
        "parameters": [
          {
            "in": "body",
            "name": "body",
            "description": "Patient info to add",
            "required": true,
            "schema": {
              "$ref": "#/definitions/Patient"
            }
          }
        ],
        "responses": {
          "200": {
            "description": "successful operation",
            "schema": {
              "$ref": "#/definitions/ApiResponse"
            }
          },
          "400": {
            "description": "Hospital dose not match"
          },
          "500": {
            "description": "System Error"
          }
        },
        "security": [
          {
            "api_key": []
          }
        ]
      }
    }
  },
  "definitions": {
    "Patient": {
      "type": "object",
      "properties": {}
    },
    "ApiResponse": {
      "type": "object",
      "properties": {
        "code": {
          "type": "integer",
          "format": "int32"
        },
        "message": {
          "type": "string"
        }
      }
    }
  },
  "externalDocs": {
    "description": "Find out more about Swagger",
    "url": "http://swagger.io"
  },
  "securityDefinitions": {
    "ServiceNow": {
      "type": "oauth2",
      "authorizationUrl": "https://tkelevatordev01.service-now.com/api/now/table/sn_hr_core_obp_repair",
      "flow": "implicit",
      "scopes": {
        "add:Paitent": "send the patient info"
      }
    },
    "api_key": {
      "type": "apiKey",
      "name": "api_key",
      "in": "header"
    }
  }
}
```

:::


在使用jenkins部署这两个文件之前，必须先让运维配置第三方API的帐号信息	（从Tke Leader处获取）        
配置格式：   
`demo.auth.basic.username <帐号>`	  
`demo.auth.basic.password <密码>`

![](/image/screenshots/wso2/deploy/4.png)

	
## 线上测试环境地址

### Dev环境

```ini
# AP	
https://apiapdev.fos.tkeasia.com
# EA
https://apieadev.tkeview.com
# NA
https://apinadev.tkeview.com
# SA
https://apisadev.tkeview.com
```

### live环境

```ini
# AP	
https://apiap.fos.tkeasia.com
# EA
https://apiea.tkeview.com
# NA
https://apina.tkeview.com
# SA
https://apisa.tkeview.com
```

以AP国家为例:

获取Token: [https://apiapdev.fos.tkeasia.com/token](https://apiapdev.fos.tkeasia.com/token)	  
API接口: [https://apiapdev.fos.tkeasia.com](https://apiapdev.fos.tkeasia.com)

![](/image/screenshots/wso2/deploy/5.png)