# Html标签

::: warning
hidden、radio、checkbox等input以及select标签，必须使用封装的API写法
:::

## Text input
```php
NGForm::textbox(
	'id',
	[
		'class'    => 'className',
		'onchange' => 'onchange(this)'
	],
	$value
);
```

## Textarea
```php
// Example
NGForm::textarea(
	'id',
	[
		'class'    => 'className',
		'onchange' => 'onInclusionTriggerChange(this)',
		'style'    => 'width: 260px;'
	],
	$value
);
```

## Hidden input
```php
NGForm::hidden($name, $attributes=NULL, $value = NULL);
```

## Radio
```php
NGForm::radiobutton($name, $attributes=[], $checked = NULL);
```

## Checkbox
```php
NGForm::checkbox($name, $attributes=NULL, $checked = NULL);
```

## Select
```php
NGForm::dropbox($name, $attributes=NULL, $value = NULL);

// Example
NGForm::dropbox(
	'id',
	$optionList,
	[
		'class'    => 'InclusionSelect',
		'onchange' => 'onInclusionRequiredChange(this)'
	],
	$row->InclusionTypeId
);
```