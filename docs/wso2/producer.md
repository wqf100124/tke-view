# 服务提供者

> View 通过 WSO2 提供 API 给第三方使用

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

## 1.创建接口文件

示例: `core/web/sharp/modules/api/controllers/DemoController.php`

```php
<?php

include_once(dirname(__FILE__) . '/RestfulController.php');

class Api_DemoController extends Api_RestfulController
{
    protected $scope = 'Demo';

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

        return $this->success(
            [
                'id'   => 888,
                'name' => 'Demo'
            ],
            'success'
        );
    }
}
```

## 2.跳过本地认证
修改: `core/web/sharp/modules/api/controllers/RestfulController.php` 文件

![](/image/screenshots/wso2/provider/1.png)


## 3.接口调试

接口地址: [http://hk.preview.test/sharp/api/demo](http://hk.preview.test/sharp/api/demo)

![](/image/screenshots/wso2/provider/2.png)