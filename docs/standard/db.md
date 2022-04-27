# 数据库的操作

### Restriction

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

### System Setting

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
    `Rank`         = 0;
```

### General Options

级别: `all_country`

```sql
INSERT
IGNORE INTO `general_options` (`OptionType`, `DefineSymbol`, `Title_en`, `Title_local`, `DateAdded`, `DateModified`) VALUES ('CONTRACT_SERVICE_EXTRA_INCLUSION_TYPE', 'Inclusion', 'Inclusion', 'Inclusion', NOW(), NOW());
INSERT
IGNORE INTO `general_options` (`OptionType`, `DefineSymbol`, `Title_en`, `Title_local`, `DateAdded`, `DateModified`) VALUES ('CONTRACT_SERVICE_EXTRA_INCLUSION_TYPE', 'Exclusion', 'Exclusion', 'Exclusion', NOW(), NOW());
```

### 添加字段

```sql
CALL AddColumn('contract_branch_unit_extra_service', 'ExtraInclusionId', 'int(10) DEFAULT 0 AFTER `ContractId`');
```

### 添加翻译

级别: `all_center`

```sql
INSERT
IGNORE INTO `staticcatalogue` (`Source`,`Val_en`,CreatedDate) VALUES('Service Opportunities', 'Service Opportunities', NOW());
```

### 创建表

CREATE TABLE IF NOT EXISTS `table_name`

```sql
CREATE TABLE IF NOT EXISTS `contract_extra_visit`
(
    `Id`               int(10) NOT NULL AUTO_INCREMENT,
    `Frequency`        int(10)       DEFAULT '0',
    `HoursPerVisit`    decimal(3, 1) DEFAULT '0.0',
    `UnitTypeId`       int(10)       DEFAULT '0',
    `Comments`         text          DEFAULT NULL,
    `CreatedBy`        int(10)       DEFAULT NULL,
    `CreatedDate`      datetime      DEFAULT NULL,
    `LastModifiedBy`   int(10)       DEFAULT NULL,
    `LastModifiedDate` datetime      DEFAULT NULL,
    `IsActive`         tinyint(1)    DEFAULT '1',
    PRIMARY KEY (`Id`) USING BTREE
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
```

### 删除表

```sql
DROP TABLE IF EXISTS `contract_extra_visit`;
```