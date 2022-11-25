# 服务提供者

> View 通过 WSO2 提供 API 给第三方使用

![](/image/screenshots/wso2/provider/mind.png)

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