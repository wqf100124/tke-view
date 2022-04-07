#	WSO2

Api: Interface communication services between WSO2 and external systems   
Application: Used to group APIs, authorize, limit current, etc.

example:

![](../static/images/screenshots/wso2/WSO2.png)

##  Create Enviroment

###  AM(API Manager)

*Tools for deploying and managing APIs, providing various controls required for the entire life cycle of the API, including controlling access permissions, access traffic, monitoring API calls, version control, etc.*

DockerHub: [https://hub.docker.com/r/wso2/wso2am](https://hub.docker.com/r/wso2/wso2am)

Create and run the AM container (*The container startup process takes about 2~3 minutes, just wait patiently.*)
```shell
docker run -d --network tke --ip 172.16.1.94 -p 8280:8280 -p 8243:8243 -p 9443:9443 --name api-manager wso2/wso2am
```
Api manager: [https://localhost:9443/publisher/apis](https://localhost:9443/publisher/apis)	  
App manager: [https://localhost:9443/devportal/applications](https://localhost:9443/devportal/applications) 	
username: admin 
password: admin

### Swagger Editor(API doc editor)
Office docs: [https://swagger.io/docs/](https://swagger.io/docs/)	     
DockerHub: [https://hub.docker.com/r/swaggerapi/swagger-editor/](https://hub.docker.com/r/swaggerapi/swagger-editor/)        	   
Online editor: [https://editor.swagger.io/](https://editor.swagger.io/)

```shell
docker run -d -p 8080:8080 --name swagger-editor swaggerapi/swagger-editor
```
Use the local editor: [http://localhost:8080/](http://localhost:8080/)


##  Local development steps

###  View system provides API to third parties

![](../static/images/screenshots/wso2/provider/mind.png)

#### 1.Create interface file in View


example:
core/web/sharp/modules/api/controllers/DemoController.php

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

#### 2.skip local authentication
Modify the file:
core/web/sharp/modules/api/controllers/RestfulController.php 文件

![](../static/images/screenshots/wso2/provider/1.png)


#### 3.Interface debugging

interface url: [http://hk.preview.test/sharp/api/demo](http://hk.preview.test/sharp/api/demo)

![](../static/images/screenshots/wso2/provider/2.png)


###  View system requests third-party API

![](../static/images/screenshots/wso2/user/mind.png)

#### 1.Create Api in AM

Open the API management page: [https://localhost:9443/publisher](https://localhost:9443/publisher)

![](../static/images/screenshots/wso2/user/3.png)
![](../static/images/screenshots/wso2/user/4.png)
![](../static/images/screenshots/wso2/user/5.png)

Configuring Authentication Information for Third-Party Interfaces
![](../static/images/screenshots/wso2/user/6.png)

#### 2.Create Application in AM

Application management page:[https://localhost:9443/devportal/applications](https://localhost:9443/devportal/applications)

![](../static/images/screenshots/wso2/user/7.png)
![](../static/images/screenshots/wso2/user/8.png)

#### 3.Generate OAuth authentication key
![](../static/images/screenshots/wso2/user/oauth-1.png)
![](../static/images/screenshots/wso2/user/oauth-2.png)
![](../static/images/screenshots/wso2/user/oauth-3.png)

#### 4.Bind Api and App
![](../static/images/screenshots/wso2/user/subscribe-1.png)
![](../static/images/screenshots/wso2/user/subscribe-2.png)


#### 5.Create an OAuth configuration file locally

Create file: core/.restfulapi.authentication.ini (Note that the file name contains .)，Fill in the following

```ini
[VIEW_DEMO_APPLICATION]
;OAuth authentication interface of WSO2
gatewayAuthUrl="https://172.16.1.94:9443/oauth2"
;Oauth account information for WSO2
consumerKey="xdv5SZLHEIR4Ux8jc14ugJLWDD4a"
consumerSecret="kvsoaXylTKa2X9HvCepn9bfrYyoa"
;API interface url in WSO2
gatewayRecourceUrl="https://172.16.1.94:8243"
```

#### 6.Use in the view system

core/web/wso2.php

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

// Configuration name in ini configuration file
CONST CONFIG_NAME = 'VIEW_DEMO_APPLICATION';
// Api name
CONST API_NAME = 'Demo';
// Api context
CONST API_URI = '/demo';
// Api version
CONST API_VERSION = '1.0';

try {

    $viewGateway = new ViewGateway(CONFIG_NAME, "");

    // send reauest
    $result = $viewGateway->post(API_NAME, [], 0, null, null, API_VERSION, true, 2, API_URI);
    if (!$result) {
        echo 'request fail';
    }
} catch (Exception $e) {
    var_dump($e);
}
```

#### 7.Process the data returned by the interface
Create processing files: core/sys/libs/logic/Util/Gateway/Handler/DemoGatewayBizHandler.php

*file naming convention：<App Name>GatewayBizHandler.php*

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

#### 8.Interface debugging of WSO2

Get the AccessToken
![](../static/images/screenshots/wso2/user/14.png)
![](../static/images/screenshots/wso2/user/15.png)

Test in View
![](../static/images/screenshots/wso2/user/16.png)

##  Deployment steps

![](../static/images/screenshots/wso2/deploy/WSO2部署流程.png)

Svn address

```ini
# Dev/Dev2/Opt
svn://10.251.68.174/view_repos/fos/GatewayDev
# RC
svn://10.251.68.174/view_repos/fos/GatewayStaging
```

### 1.Create and deploy apps

#### Create App Profile

*Note: In principle, one BU corresponds to one Application. If the Application already exists, use the existing one.*

example：
Create an App configuration file in the CommonAssets/ApplicationSetting/AP directory

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

#### Deploy the App using Jenkins

*You need to enable the deployment permission of the corresponding account for operation and maintenance*

Dev enviroment:
[https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Dev/](https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Dev/)

RC enviroment:
[https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Staging/](https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Staging/)

deploy page

![](../static/images/screenshots/wso2/deploy/1.png)

After the deployment is successful, the account information of the application will be sent to the user mailbox in the above configuration file.

![](../static/images/screenshots/wso2/deploy/2.png)

You need to let the operation and maintenance add the configuration information of the App in the corresponding environment (.restfulapi.authentication.ini）
Format:
```ini
[VIEW_AP_APPLICATION]
name="VIEW_AP_APPLICATION"
consumerKey="<Key>"
consumerSecret="<Secret>"
gatewayAuthUrl="https://apiapdev.fos.tkeasia.com"
gatewayRecourceUrl="https://apiapdev.fos.tkeasia.com"
```

### 2.Create and deploy APIs

Create the following two files in the root directory

Demo/API_Managment/V1/apiConfig.xml	
Demo/API_Managment/V1/swagger.json

![](../static/images/screenshots/wso2/deploy/3.png)

apiConfig.xml file example
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
		<url>Third-party interface url</url>
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

swagger.json file example

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

Before deploying these two files with jenkins, you must let the operation and maintenance configure the account information of the third-party API (obtained from Tke Leader)           
Format:   
demo.auth.basic.username username   
demo.auth.basic.password password

![](../static/images/screenshots/wso2/deploy/4.png)

	
## Online environment test

### Dev environment

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

### live environment

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

Take AP countries as an example:

Get the AccessToken: [https://apiapdev.fos.tkeasia.com/token](https://apiapdev.fos.tkeasia.com/token)	  
Api test url: [https://apiapdev.fos.tkeasia.com](https://apiapdev.fos.tkeasia.com)

![](../static/images/screenshots/wso2/deploy/5.png)