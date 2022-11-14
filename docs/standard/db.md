# 数据库操作

## 创建表

CREATE TABLE IF NOT EXISTS `table_name`

```sql
CREATE TABLE IF NOT EXISTS `table_name`
(
    `Id`               int(10) NOT NULL AUTO_INCREMENT,
    `HoursPerVisit`    decimal(3, 1) DEFAULT '0.0',
    `UnitTypeId`       int(10)       DEFAULT '0',
    `Description`      varchar(255)  DEFAULT NULL,
    `Comments`         text          DEFAULT NULL,
    `IsActive`         tinyint(1)    DEFAULT '1',
    `IsDeleted`        tinyint(1)    DEFAULT '0',
    `CreatedBy`        int(10)       DEFAULT NULL,
    `CreatedDate`      DATETIME      DEFAULT CURRENT_TIMESTAMP,
    `LastModifiedBy`   int(10)       DEFAULT NULL,
    `LastModifiedDate` DATETIME      DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
```

## 删除表

```sql
DROP TABLE IF EXISTS `table_name`;
```

## 添加子菜单及权限(permission)

级别: `all_center`

以 Service Database => Timesheet => Cost Correction Report 菜单为例:

```sql
-- Cost Correction Report

SET @pc := (
    SELECT pc.id AS id
    FROM `permissioncategory` pc
             LEFT JOIN `permissionsection` ps ON ps.id = pc.PermissionSectionID
    WHERE ps.`Name` = 'Service Database'
      AND pc.`Name` = 'Timesheet'
);
SET @rank := (
    SELECT max(`Rank`) + 1
    FROM `permission`
);

-- permission
INSERT INTO `permission`
SET `Name`                   = 'Cost Correction Report',
    `PermissionCategoryID`   = @pc,
    `URL`                    = '/sharp/ServiceActivity/CostCorrectionReport',
    `ShowInMenu`             = 1,
    `RequireTKGlobal`        = 0,
    `GlobalVisible`          = 0,
    `SiteVisible`            = 1,
    `BranchVisible`          = 1,
    `Rank`                   = @rank,
    `onClick`                = NULL,
    `DevelopmentOnly`        = 0,
    `SuperUserOnly`          = NULL,
    `RequiredConstant`       = '',
    `PermissionSubCategoryID`= 0,
    `ManualURL`= '';

SET @permissionId := (SELECT `id` FROM permission WHERE `Name` = 'Cost Correction Report' AND `PermissionCategoryID` = @pc);

-- permission action
INSERT IGNORE INTO permissionaction(`Name`, `DefineSymbol`, `PermissionID`, `IsVisible`)
VALUES ('View', 'VIEW_COST_CORRECTION_REPORT', @permissionId, 1);

-- multi language
INSERT IGNORE INTO `staticcatalogue` (`Source`, `Val_en`, `PermissionID`, `ModuleID`, `IsMaster`, `CreatedDate`)
VALUES ('Cost Correction Report', 'Cost Correction Report', @permissionId, '1', '1', NOW());
```

## 添加字段控制(restriction)

级别: `all_country`

```sql
SELECT id
INTO @restrictionPId
FROM permission
WHERE URL = '/service/contracts.php';

INSERT
IGNORE INTO `restriction` (`FieldName`, `FieldLabel`, `PermissionID`, `URL`, `Message`, `IsLoadable`, `GroupHeader`, `AlwaysRequired`, `SequenceNo`)
VALUES ('SLAPenaltyPenalty', 'Penalty', @restrictionPId, '/service/contracts.php', 'Please enter penalty value', 1, 'Contracts (Edit)', 0, 0);
INSERT
IGNORE INTO `restriction_regex` (`RestrictionID`, `Regex`, `RegexDefine`, `IsVisible`, `IsRequired`, `IsReadOnly`, `TargetTable`, `TargetID`, `DateAdded`, `AddedBy`, `DateModified`, `ModifiedBy`, `IsDeleted`)
VALUES ((SELECT id FROM restriction WHERE FieldName = 'SLAPenaltyPenalty' AND URL = '/service/contracts.php'), NULL, NULL, 0, 0, 0, NULL, NULL, NOW(), 0, NOW(), 0, 0);
```

## 添加开关(system setting)

级别: `all_country`

```sql
-- insert system setting
SELECT `id`
INTO @SettingGroupId
FROM systemsettinggroup
WHERE `DefineSymbol` = 'SERVICENOW_INTEGRATION';

INSERT IGNORE INTO systemsetting
SET `Name`         = 'Service tender won integration',
    `DefineSymbol` = 'SERVICE_TENDER_WON_INTEGRATION',
    `Value`        = 0,
    `IsVisible`    = 1,
    `IsDefinable`  = 1,
    `GroupID`      = @SettingGroupId,
    `FieldType`    = 'checkbox',
    `Description`  = 'Ticket to create a SNOW ticket when win a service tender.',
    `ItcmNumber`   = '88888888',
    `Rank`         = 0;
```

## 添加下拉列表(general options)

级别: `all_country`

```sql
-- general options
DELETE FROM general_optiontypes WHERE `TypeName` = 'EXAMPLE_DROPDOWN';
DELETE FROM general_options WHERE `OptionType` = 'EXAMPLE_DROPDOWN';

INSERT IGNORE INTO `general_optiontypes` (`TypeName`, `Title_en`, `Title_local`, `Description`, `IsMaintable`, `IsOptionDefineSymbolEditable`, `IsSupportDefault`, `PermissionActionId`)
VALUES ('EXAMPLE_DROPDOWN', 'Example Dropdown', 'Example Dropdown', 'Example Dropdown', 1, 1, 0, 0);

INSERT IGNORE INTO `general_options` ( `OptionType`, `DefineSymbol`, `Title_en`, `Title_local`, `Rank`, `DateAdded`, `DateModified`)
VALUES ('EXAMPLE_DROPDOWN', 'Option1', 'Option1', 'Option1', 0, NOW(), NOW());
INSERT IGNORE INTO `general_options` ( `OptionType`, `DefineSymbol`, `Title_en`, `Title_local`, `Rank`, `DateAdded`, `DateModified`)
VALUES ('EXAMPLE_DROPDOWN', 'Option2', 'Option2', 'Option2', 0, NOW(), NOW());
```

## 添加新字段

```sql
CALL AddColumn('table_name', 'ColumnName', 'int(10) DEFAULT 0 AFTER `Id`');
```

## 添加多语言翻译

级别: `all_center`

```sql
-- multi language
INSERT IGNORE INTO `staticcatalogue` (`Source`, `Val_en`, `ModuleID`, `CreatedDate`)
VALUES ('This is a multilingual message.', 'This is a multilingual message.', 1, NOW());
```