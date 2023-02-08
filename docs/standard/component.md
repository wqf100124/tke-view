# 公共组件

## 日期选择

类文件: `sys/libs/ui.lib`, `web/js/general.js`

```php
<?php
print dateChooser(string $name, string $attrs = '', string $default = null, string $onclick = null, string $onevent = '');
?>
```

使用方法
```php
print dateChooser('frm_start_date', 'size:=8, onchange:=onChange(this)', $data['StartDate'], 'onStartDateClick(this)');
```

生成Html
```html
<input type="text" name="frm_start_date" id="frm_start_date" size="8" onchange="onChange(this);" value="01/01/15">
```

## 导出Excel

类文件: `sys/bin/exportdata.php`

使用方法
```php
csvencode(array $data, $delimiter="\t", $lineEnding="\n", $encoding="UTF-16LE")
```

```php
$exportoption = $db->get("SELECT *, IFNULL(LastModifiedFilter,CURDATE()) AS LastModifiedFilter FROM exportoption");
	switch ($exportoption->CSVDelimiter) {
		case 'COMMA':
			$exportoption->CSVDelimiter = ",";
			break;
		case 'SPACE':
			$exportoption->CSVDelimiter = " ";
			break;
		default:
		case 'TAB':
			$exportoption->CSVDelimiter = "\t";
			break;
	}

	$exportoption->LineEnding = $exportoption->LineEnding == 'LF' ? "\n" : "\r\n";

do {
    $row = $db->getnext("repair_unitlist");
    fwrite( $fp, csvencode($row));
}
while($row);
```

## 导出PDF

类文件: `sys/libs/report.lib`, `web/common/report.php`

使用方法

```php
// 待完善...
```

## 搜索Unit

类文件: `web/common/unit_list.php`

```php
print textbox("frm_unit_id", "size:=45, readonly:=1");

print button("op", "onclick:=popup('/common/employee_list.php?openerFormElementName=frm_employee_id',550,400); return false;", xlate("Choose"));
```

## 搜索Salesman

类文件: `web/common/employee_list.php`

```php
print textbox("frm_employee_id", "size:=45, readonly:=1");

print button("op", "onclick:=popup('/common/employee_list.php?openerFormElementName=frm_employee_id',550,400); return false;", xlate("Choose"));
```

## 弹出新窗口

```js
popup('/common/unit_list.php?openerFormElementName=frm_unit_id', 550, 400);
```