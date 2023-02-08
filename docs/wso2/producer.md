# 对外提供接口

> 第三方系统 通过 WSO2 请求 View API

```mermaid
flowchart LR
D[[第三方系统A]] & E[[第三方系统B]] & F[[第三方系统C]] ---> C([WSO2]) ---> A(View) & B(VFM)
style A fill:#7b1fa2,color:#fff,stroke-width:0
style B fill:#4caf50,color:#fff,stroke-width:0
style C fill:#ff7300,color:#fff,stroke-width:0
style D fill:#3a49ab,color:#fff,stroke-width:0
style E fill:#3a49ab,color:#fff,stroke-width:0
style F fill:#3a49ab,color:#fff,stroke-width:0
```

## 1.创建接口

在 `web/sharp/modules/api/controllers` 目录下创建一个名为 `DemoController.php` 的文件，复制并粘贴以下内容。
```php
<?php

include_once(dirname(__FILE__) . '/RestfulController.php');

class Api_DemoController extends Api_RestfulController
{
    protected $scope = 'Demo';

    /**
     * Demo
     */
    public function indexAction()
    {
        if ($_GET['status'] === 'error') {
            return $this->error('invalid phone number.', 422);
        }

        return $this->success(
            [
                'userId'      => 888,
                'nickName'    => 'Demo',
                'phoneNumber' => '12345678910'
            ],
            'success'
        );
    }
}
```

## 2.配置账号

在 `core` 目录下创建一个名为: `.restfulapi.authentication.ini` 的文件（文件名以'.'号开始），并复制粘贴以下内容。
```ini
;API账号信息
[API_DEMO]
password="123456"
scopes="Demo,Test"
```
- API_DEMO 将作为 `Basic Auth` 认证的账号
- scopes 填写接口文件中的 `$scope` 变量，多个scope可以使用","号隔开

## 3.接口调试

> 本地开发不需要经过WSO2，可以直接进行测试

接口地址: `http://hk.preview.test/sharp/api/demo`

认证方式选择 `Basic Auth`，账号密码使用上面配置的信息