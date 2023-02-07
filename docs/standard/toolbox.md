# VIEW develop team toolbox talk <Badge type="tip" text="v1.4" />

> 本文档的目的是简单地回顾开发规范，能让开发人员注意到那些在日常工作中很重要但又经常被忽略的点。为了达到这一目标，我们要求开发团队负责人在每次会议开始时与开发人员一起审阅文档中的主题，以加强开发规范。

在线文档: [VIEW develop team toolbox talk v1.4.pptx](https://tke.sharepoint.com/:p:/r/sites/tkeapitapplication/view/Shared%20Documents/Guidelines%20and%20Standards/VIEW%20develop%20team%20toolbox%20talk%20v1.4.pptx?d=wf3ae10c2fb114ee8b5855301a37c6a61&csf=1&web=1&e=dskURI)

## 1.命名规范(Naming Convention)

> 如何在不同的场景下命名?

### 变量名

小驼峰

`$iUnitId` `$sBuildingName`

### 方法/函数名

小驼峰

`createUnit()` `createBuilding()`

**注意：Controller中的action写法**

```php
public function showactivitylistAction()
{
    // ...
}
```

### 类名

大驼峰

`ConfigParser{}` `UnitDao{}`

### 文件/文件夹

大驼峰

`UnitDao.php` `BizLogic`

### 字段名

大驼峰

`UnitId` `BuildingName`

### 表名

小写,使用下划线连接

`unit` `contract_unit`

### 标签

标题: 大驼峰,使用空格连接

`Unit Id` `Building Name`

描述文字: 首字母大写

`Translation may take few minutes to be effective.`

::: warning 注意
避免在PHP代码和MySql中使用任何关键字，如`date`等。
:::

## 2.缩进和空格(INDENTION AND WHITESPACE)

> 如何使代码更漂亮?

- 使用4个空格缩进，切勿使用tab键（在编辑器中设置）
- 在变量和语句之间使用适当的空格
- 在提交代码前，使用格式化工具进行代码格式化

示例:

```php
if ($yes) {
    print "OK";
} else if ($no) {
    print "I don't think so";
} else {
    print "How should I know?";
}
```

## 3.注释(Comment)

> 代码是最好的文档，注释是代码的一部分。如何使代码易于理解和维护?

- 为`类`、`方法`、`逻辑块`、`条件语句`甚至`变量`添加足够的注释
- 使用适当的标签对`类`、`方法`进行注释，生成技术文档([API文档](https://apidocjs.com/))
- 删除不必要的注释
- 注释必须使用**英文**

## 4.错误处理和日志记录(Error process and Logging)

> 用户报告了错误，但不能提供更详细的信息，该如何处理?

- 不要在没有任何逻辑(处理日志和错误消息)的情况下捕获错误
- 如果系统不知道如何处理，应该显示通用的错误页面，并退出异常以便进一步调查(log4php->Zabbix/Centralized error dashboard, debug table)
- 注意区分日志的级别：`debug`、`info`、`warning`、`error/critical`
- 尽可能地提前去对数据进行校验（前端），并在页面上提醒用户如：`必填项`，`格式`，`数值/日期范围`等....
- :new: 日志记录的规范：不要在`message`中包含任何数据信息，数据应该放在`additionInfo`参数中，同时注意添加标识符`identifier`，方便去快速的定位错误)

当前系统中可用的日志记录方法: <br>
`logger_debug`、`logger_warn`、`logger_info`、`logger_error`、`logger_integrationError`、`logger_fatal`

例如: 当 ContractId 为 88888888 的合同数据推送到MQ队列失败时
```php
logger_error(
  'Description Failed to push to the MQ queue',
  'reference id',
  888888,
  'Service Sales',
  'Service Sales Management',
  ['ContractId' => 88888888, 'ConformDate' => '2022-10-10'],
)
```

## 5.删除未使用的代码(REMOVE UNUSED CODE)

> 删除不必要的代码以保持代码整洁。删除的代码可以通过SVN日志找到。

- 一旦逻辑不再使用，就删除不使用的代码，以保持代码文件的整洁

## 6.系统开关(SYSTEM SETTING)

> 保持系统的灵活性，我们能把所有东西都设置成可配置的吗? 

- 避免在代码中使用硬编码，应该使用可配置的`system setting`
- 尽可能地去协调代码逻辑，减少创建新的`system setting`，使系统逻辑简单
- 一个开关应该只控制一个逻辑，不要把太大的范围和不相关的逻辑放在一个开关中
- 提供有意义的开关名称和描述信息(针对于BA和TKE)，并且要在技术文档/Review中体现出来
- 注意`system setting`表中的`IsTestConfigRequired`属性（如果开启，则不会把live中的配置同步到测试环境中）

  ::: details 举例说明
  dev2的 BU_SITE_URL 配置为 https://dev2.fos.tkeasia.com ，在数据reload后，它的配置依然是 https://dev2.fos.tkeasia.com，而不是live环境的 https://apac.fos.tkeasia.com
  :::

## 7.数据库设计(DATABASE DESIGN)

> 在VIEW这样的操作系统中，数据结构是最重要的，应该遵循什么基本规则?

- 总是包含自增字段`Id`，并且将它作为主键
- 总是包含`CreatedBy`, `CreatedDate(UTC)`, `LastModifiedBy`, `LastModifiedDate(UTC)`等标准字段
- 考虑是否需要状态字段(`IsDeleted`, `isActivated`...)，根据表的设计酌情使用软删除
- 如果没有性能方面的要求，应该使用 **外键索引** 来保持数据一致性

`CreatedDate` 和 `LastModifiedDate` 字段规范
```sql
-- 错误
`CreatedDate` DATETIME DEFAULT NULL,
`LastModifiedDate` DATETIME DEFAULT NULL,
-- 正确
`CreatedDate` DATETIME DEFAULT CURRENT_TIMESTAMP,
`LastModifiedDate` DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
```

## 8.SQL语句(SQL STATEMENT)

> SQL在业务中消耗的时间最多，如何去提高系统性能？

- Group by 规则
- 如果sql中用到了索引，应该使用explain去分析sql语句
- 查询时需要考虑数据量，评估1年、3年、5年后的性能(特别是report)
- 使用slave(从库)进行导出操作
- 必要时应该对查询的数据进行缓存，以提高的sql性能
- 在更新子表数据时不要这样写: 删除所有，然后再插入，这是一种有风险的方法，因为一些字段的数据可能被删除，无法再恢复
- :new: 当sql中有更新或删除操作时，在部署patch的时候应该经过 **特殊的team leader** 的批准，避免由于错误的sql语句导致大量数据出现问题。例如：大部分用户组被删除

## 9.UI设计(UI DESIGN)

> 如何让用户乐于使用我们开发的功能?

- 按照VIEW标准UI模板设计新页面，具体可以参考: [VIEW_UI_standard_web](https://tech.tkeasia.com/tk_VIEW_UI_standard_web_2.53/formelements.html)
- 注意页面上元素的对齐方式(数字-右，字符串-左)
- 遵循`system setting`的日期和货币格式(十进制，千位分隔符)，以支持全球化
- 在一次操作中尽可能地计算和保存单击次数
- 新页面的设计和Review应该让UI设计师参与

## 10.VIEW公共组件和库(GENERIC VIEW COMPONENT AND LIBRARIES)

> VIEW中有哪些公共组件可以被复用?

- VIEW公共组件
  - File upload
  - Building/Bank/Unit Chooser
  - Contract
  - Unit Search
  - Employee/Salesman chooser
- Controller/Drive Type/Model/Manufacture/Factory chooser
- 公共页面
   - 404
   - Unauthorized access(403未授权)
   - Exception(通用错误页面)
- Branch pilot(某个功能在某个branch可以优先使用或者只能在country或者branch级别显示，通过设置日期来实现)
- 如果新代码或逻辑块可以作为组件实现并且可能被其他人重用，就需要考虑构建它
- 引入公共的第三方库，新库或新版本需经过SHARP团队的批准
  - TCPDF/SPOUT/PHPOffice/etc…
  - JQuery/Bootstrap/etc…
- 鼓励引入库来解决常见问题，比如前端的datetime库(moment.js已经在混合开发中使用了)

## 11.VIEW代码(VIEW SNIPPET)

> VIEW代码中需要注意的一些细节

- 在日期/时间相关的业务逻辑中，要特别考虑时区/夏令时等相关因素的影响
- 日期、时间、货币的格式(千位分隔符等)
- 不要在PHP代码调试中使用echo，因为它会将内容输出到页面中，从而影响其他人的使用
- Azure环境中的session有效期为5分钟，尽可能的提高页面性能
- 所有的标签都应该添加静态多语言并且关联了合适的模块
- 邮件API(是否在测试环境中直接向真实用户发送邮件)
- 使用[SharePoint](https://tke.sharepoint.com/:p:/r/sites/tkeapitapplication/view/Shared%20Documents/Guidelines%20and%20Standards)上的最新文档模板
- 在PHP代码的CURL调用中显示超时时间，否则将导致请求无响应，对用户不友好。
- :new: 保证执行的特性在测试环境和在生产环境是一致的。例如：不要在dev2中使用模拟页面来测试后台任务

错误示例：

1.对日期的加减操作
```js
day = this.commonService.dateformat(new Date(new Date(day.replace(/\-/g, "/")).getTime() + 24 * 60 * 60 * 1000), 'YYYY-MM-DD', false);
```

## 12.开发和部署(DEVOPS AND DEPLOYMENT)

如何使部署和reload(dev2, rc)更加稳定和高效?

- 不要在测试环境中进行调试，确定需要调试的话应该采用适当的方法
- 使用devops工具进行部署(文件差异对比工具，reload机制等)
- 确保patch与开发操作工具兼容
- Dev2数据库reload的时候，应该通过sql脚本，而不是PHP代码去部署sql
- 测试覆盖率(测试用例应该覆盖所有的更改，以实现100%的代码覆盖率)
- 安全部署
  - 确保没有代码遗漏
  - 不包含差异对比工具的代码
- :new: 代码部署必须遵循**dev->dev2->rc->live**的顺序
- :new: 多关注那些状态比较特殊的补丁，比如一个patch持续了3个多月还没有部署
- :new: 代码部署成功后要及时的去进行检验，并且跟进

## 13.VIEW开发环境和结构体系(VIEW ENVIRONMENT AND ARCHITECTURE)

> View环境和架构体系相关的点

- VIEW当前使用的环境有: `dev`、`dev2/opt/opt2`、`rc`、`live`
- VIEW环境Reload机制
  - 数据库从`live`中Reload
  - Reload后会重新部署patch中的sql脚本（自动部署的前提是你的patch选择了`Is-Auto-Redeploy`，并且勾选了需要部署的sql版本）
- VIEW环境Reload周期：Dev -> 半年, dev2 -> 2周, rc -> 每天

- VIEW环境数据库架构
  `Tkglobal`, `tkcountry`以及复制机制

## 14.安全(Security)

> 安全相关的点

- 避免SQL注入，在SQL语句中使用占位符(参数)
- 避免XSS注入，应该使用[NGForm](./html.md)封装的组件(例如: `text`、`textarea`、`select`…)
- 按照规则将外部账户存放在单独的文件中

