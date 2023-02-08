# 在View中的用法

## 1.配置数据源

在目录`sys/libs/SearchEngine/schema/solr`中创建项目目录，同时在该目录中创建`scope.properties`、`managed-schema.tmpl.xml`、`db-data-config.tmpl.xml`3个文件

示例:
![](/image/screenshots/solr/2.png)

### db-data-config.tmpl.xml
该文件用于配置集合的数据源和字段。

- `Query`中的`sql`是集合的数据源，`pk`是集合的主键。
- `Deltaquery`和`deltaImportQuery`用来批量更新集合。
- `Field`用来定义集合字段名称。


> 脚本`sys/bin/RebuildSolrCollections.php`会在每天的23:00去批量更新集合数据的`deltaQuery`和`deltaImportQuery`。`deltaQuery`会搜索需要更新的数据，`deltaImportQuery`会将搜索结果更新到集合中。

::: details 文件示例:
```xml
<dataConfig>
    <document>
        <entity name="unit" 
            query="SELECT  u.id, 
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT b.Premises_en SEPARATOR '|'), GROUP_CONCAT(DISTINCT b.Premises_local SEPARATOR '|'), GROUP_CONCAT(DISTINCT b.Address_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT b.BuildingNumber SEPARATOR '|'),
                    GROUP_CONCAT(DISTINCT u.UnitNumber SEPARATOR '|'),GROUP_CONCAT(DISTINCT u.LiftNumber SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.StreetAddress_en SEPARATOR '|'),
                    GROUP_CONCAT(DISTINCT StreetAddress_local SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.Name_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT u.RegisteredNumber SEPARATOR '|')) as BuildingName,
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT b.Premises_en SEPARATOR '|'), GROUP_CONCAT(DISTINCT b.Premises_local SEPARATOR '|'), GROUP_CONCAT(DISTINCT b.Address_val SEPARATOR '|')) as PremisesName,
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT br.Code_en SEPARATOR '|'),GROUP_CONCAT(DISTINCT br.Code_local SEPARATOR '|'),GROUP_CONCAT(DISTINCT o.Name_en SEPARATOR '|'),GROUP_CONCAT(DISTINCT o.Name_local SEPARATOR '|')) as Branches,
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT b.City_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT b.Suburb_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.City_en SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.City_local SEPARATOR '|'),
                    GROUP_CONCAT(DISTINCT k.Suburb_en SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.Suburb_local SEPARATOR '|')) as CitySuburb,
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT b.Postcode_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.Postcode_val SEPARATOR '|')) as Postcode,
                    CONCAT_WS('|', GROUP_CONCAT(DISTINCT u.UnitNumber SEPARATOR '|'),GROUP_CONCAT(DISTINCT u.LiftNumber SEPARATOR '|')) as UnitNumber,
                    GROUP_CONCAT(DISTINCT u.LiftNumber SEPARATOR '|') as UnitliftNumber,
                    GROUP_CONCAT(DISTINCT ci.ContractNumber SEPARATOR '|') as ContractNumber,
                    GROUP_CONCAT(DISTINCT u.BranchID SEPARATOR '|') as BranchId
                    FROM unit u
                    JOIN bank k ON k.id = u.BankID
                    JOIN building b ON b.id = k.BuildingID
                    LEFT JOIN office o ON u.OfficeID = o.id
                    LEFT JOIN branch br ON u.BranchID = br.id
                    LEFT JOIN contract_unit cui ON cui.UnitID = u.id
                    LEFT JOIN contract ci ON ci.id = cui.ContractID
                    WHERE u.InService = 1
                    GROUP BY u.id" pk="id"
            deltaQuery="SELECT id FROM unit WHERE  DATE_ADD(LastModified, INTERVAL 12 HOUR) >
                            if('${dataimporter.request.customize_startdate}' != '', '${dataimporter.request.customize_startdate}', '${dataimporter.last_index_time}')"
            deletedPkQuery="SELECT id FROM unit WHERE InService = 0 AND DATE_ADD(LastModified, INTERVAL 12 HOUR) >
                            if('${dataimporter.request.customize_startdate}' != '', '${dataimporter.request.customize_startdate}', '${dataimporter.last_index_time}')"
            deltaImportQuery="SELECT  u.id, 
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT b.Premises_en SEPARATOR '|'), GROUP_CONCAT(DISTINCT b.Premises_local SEPARATOR '|'), GROUP_CONCAT(DISTINCT b.Address_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT b.BuildingNumber SEPARATOR '|'),
                    GROUP_CONCAT(DISTINCT u.UnitNumber SEPARATOR '|'),GROUP_CONCAT(DISTINCT u.LiftNumber SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.StreetAddress_en SEPARATOR '|'),
                    GROUP_CONCAT(DISTINCT StreetAddress_local SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.Name_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT u.RegisteredNumber SEPARATOR '|')) as BuildingName,
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT b.Premises_en SEPARATOR '|'), GROUP_CONCAT(DISTINCT b.Premises_local SEPARATOR '|'), GROUP_CONCAT(DISTINCT b.Address_val SEPARATOR '|')) as PremisesName,
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT br.Code_en SEPARATOR '|'),GROUP_CONCAT(DISTINCT br.Code_local SEPARATOR '|'),GROUP_CONCAT(DISTINCT o.Name_en SEPARATOR '|'),GROUP_CONCAT(DISTINCT o.Name_local SEPARATOR '|')) as Branches,
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT b.City_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT b.Suburb_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.City_en SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.City_local SEPARATOR '|'),
                    GROUP_CONCAT(DISTINCT k.Suburb_en SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.Suburb_local SEPARATOR '|')) as CitySuburb,
                    CONCAT_WS('|',GROUP_CONCAT(DISTINCT b.Postcode_val SEPARATOR '|'),GROUP_CONCAT(DISTINCT k.Postcode_val SEPARATOR '|')) as Postcode,
                    CONCAT_WS('|', GROUP_CONCAT(DISTINCT u.UnitNumber SEPARATOR '|'),GROUP_CONCAT(DISTINCT u.LiftNumber SEPARATOR '|')) as UnitNumber,
                    GROUP_CONCAT(DISTINCT u.LiftNumber SEPARATOR '|') as UnitliftNumber,
                    GROUP_CONCAT(DISTINCT ci.ContractNumber SEPARATOR '|') as ContractNumber,
                    GROUP_CONCAT(DISTINCT u.BranchID SEPARATOR '|') as BranchId
                    FROM unit u
                    JOIN bank k ON k.id = u.BankID
                    JOIN building b ON b.id = k.BuildingID
                    LEFT JOIN office o ON u.OfficeID = o.id
                    LEFT JOIN branch br ON u.BranchID = br.id
                    LEFT JOIN contract_unit cui ON cui.UnitID = u.id
                    LEFT JOIN contract ci ON ci.id = cui.ContractID
                    WHERE u.id = '${dataimporter.delta.id}'
                    GROUP BY u.id"
                   transformer="RegexTransformer">
            <field column="id" name="id" />
            <field column="BuildingName" name="buildingName" splitBy="\|"/>
            <field column="PremisesName" name="premisesName" splitBy="\|"/>
            <field column="Branches" name="branches" splitBy="\|"/>
            <field column="CitySuburb" name="citySuburb" splitBy="\|"/>
            <field column="Postcode" name="postcode" splitBy="\|"/>
            <field column="UnitNumber" name="unitNumber" splitBy="\|"/>
            <field column="UnitliftNumber" name="unitliftNumber"/>
            <field column="ContractNumber" name="contractNumber"/>
            <field column="BranchId" name="branchId"/>
        </entity>
    </document>
</dataConfig>
```
:::

### managed-schema.tmpl.xml

该文件用于配置集合的属性，其中的`field`字段应该和`db-data-config.tmpl.xml`文件中的字段保持一致

*字段配置参数说明*

| 属性          | 是否必填 | 描述                      |
|-------------|------|-------------------------|
| name        | 是    | 字段名称                    |
| type	       | 是    | 字段类型                    |
| indexed     | 是    | 是否建立索引（可搜索和排序）          |
| stored      | 是    | 是否应该检索该字段               |
| required    | 否    | 该字段是否为必需的。如果该值不存在，将抛出错误 |
| multivalued | 否    | 该字段是否可能包含多个值            |

文件示例:
```xml
<?xml version="1.0" encoding="UTF-8" ?>
<schema name="example-DIH-db" version="1.6">
    <field name="id" type="string" indexed="true" stored="true" required="true"/>
    <field name="buildingName" type="string_lower" indexed="true" stored="true" multiValued="true"/>
    <field name="premisesName" type="string_lower" indexed="true" stored="true" multiValued="true"/>
    <field name="unitNumber" type="string_lower" indexed="true" stored="true" multiValued="true"/>
    <field name="unitliftNumber" type="string_lower" indexed="true" stored="true"/>
    <field name="contractNumber" type="string_lower" indexed="true" stored="true"/>
    <field name="branches" type="string_lower" indexed="true" stored="true" multiValued="true"/>
    <field name="citySuburb" type="string_lower" indexed="true" stored="true" multiValued="true"/>
    <field name="postcode" type="string" indexed="true" stored="true" multiValued="true"/>
    <field name="branchId" type="string" indexed="true" stored="true"/>
</schema>
```

### scope.properties
该文件用于配置多语言字段。

如果`nameEn`和`nameLocal`是多语言字段，配置内容为: `multilingual.fields=nameEn,nameLocal`

文件示例:
```ini
; indicate the scope of current concept, country/global
concept.scope=country

; multiple languages other than English
; multilingual.fields=PremisesLocal
```

## 2.配置Bo文件

在`sys/libs/SearchEngine/Collections.xml`文件的`collections`中添加新的`collection`

collection配置参数说明:

| 属性	| 描述 |
| --- | ----------- |
| name	| 集合名称 |
| category	| 使用范围 |
| registedPlainObjectClassName	| 关联的BO文件的类名 |
| registedPlainObjectClassPath	| 关联的BO文件路径，文件路径默认为`/web`。例如：文件路径是`sys/libs/logic/Unit/Bo/Unit.php`， 则配置路径应为`/../sys/libs/logic/Unit/Bo/Unit.php`。|

field配置参数说明:

| 属性	| 描述 |
| --- | ----------- |
| name	| 字段名称 |
| key	| 是否主键 |
| plainMapping	| Bo文件对应的属性，必须包含get和set方法 |

`Queries`包括一个或多个`query`，每个`query`表示搜索集合

::: details Collections.xml文件示例:
```xml
<collections>
    <collection name="unit" category="country" registedPlainObjectClassName="Unit" registedPlainObjectClassPath="/../sys/libs/logic/Unit/Bo/Unit.php">
        <fields>
            <field name="id" key="yes" plainMapping="unitId" />
            <field name="firstName" plainMapping="firstName" />
            <field name="lastName" plainMapping="lastName" />
            <field name="phoneNumber" plainMapping="phoneNumber" />
            <field name="email" plainMapping="email" />
            <field name="cellPhone" plainMapping="cellPhone" />
            <field name="uniqueEmail" plainMapping="uniqueEmail" />
        </fields>
        <queries>
            <query name="searchByUnitFields">
                <basicQuery logicalOperator="or">
                    <parameter>
                        <variableName>phoneNumber</variableName>
                        <appliedFields>phoneNumber</appliedFields>
                        <phrase>no</phrase>
                    </parameter>
                    <parameter>
                        <variableName>email</variableName>
                        <appliedFields>email</appliedFields>
                        <phrase>no</phrase>
                    </parameter>
                </basicQuery>
                <filter>
                    <parameter>
                        <variableName>firstName</variableName>
                        <appliedFields>firstName</appliedFields>
                        <phrase>no</phrase>
                    </parameter>
                    <parameter>
                        <variableName>lastName</variableName>
                        <appliedFields>lastName</appliedFields>
                        <phrase>no</phrase>
                    </parameter>
                </filter>
                <response>
                    <responseFields>id</responseFields>
                    <highlightedFields></highlightedFields>
                    <rows>999</rows>
                </response>
            </query>
        </queries>
    </collection>
</collections>
```
:::

::: details Bo文件示例:
```php
<?php

namespace VIEW\Unit\Bo;

/**
 * Class
 * Unit BO
 */
class Unit extends \ViewBaseBO
{
    //Database field
    protected $unitId                    = null;
    protected $externalId                   = null;
    protected $title                        = null;
    protected $firstName                    = null;
    protected $lastName                     = null;
    protected $location                     = null;

    /**
     * Solr : Set unitId
     * @param int $unitId
     */
    public function setUnitId($unitId) {
        $this->unitId = $unitId;
    }
    
    /**
     * Solr : Get unitId
     * @return int
     */
    public function getUnitId() {
        return $this->unitId;
    }
}
```
:::

## 3.使用集合

代码示例:
```php
<?php

namespace VIEW\Unit\Service;

require_once("{$_SERVER['DOCUMENT_ROOT']}/../sys/libs/SearchEngine/CollectionSearchEngine.php");

class UnitService extends \ViewBaseService
{
    public function test()
    {
        // country环境实例
        $collection = CollectionSearchEngine::getNativeInstance("unit");

        // global环境实例，仅可在国家环境下使用
        $collection = CollectionSearchEngine::getGlobalInstance("unit");

        // country环境实例，仅可在global下使用，第二个参数为siteId
        $collection = CollectionSearchEngine::getExternalCountryInstance("unit", 3);

        // 条件查询
        $condition = [
            'name'     => 'test',
            'branchId' => 104,
        ];
        $res = $collection->query('searchByUnitFields', $condition, 0, 100);


        // 更新集合
        $unit = new UnitBo();
        $unit->setUnitId(888888);
        $unit->setFirstName('first name');
        $unit->setLastName($data['last name']);
        $unit->setEmail('test@gmail.com');
        $collection->update($unit);


        // 从集合中删除
        $collection->delete($unitId);
    }
}
```