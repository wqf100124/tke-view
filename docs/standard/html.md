# Html标签

::: warning
hidden、radio、checkbox等input以及select标签，必须使用封装的API写法
:::

参考文件: `sys/libs/ngform.lib`

## Button

```php
print NGForm::button(
    'id',
    [
		'class'    => 'className',
		'onchange' => 'onchange(this)'
    ],
    html_xlate("Button")
);
```

## Text input
```php
print NGForm::textbox(
	'id',
	[
		'class'    => 'className',
		'onchange' => 'onchange(this)'
	],
	'value'
);
```

## Textarea
```php
print NGForm::textarea(
	'id',
	[
		'class'    => 'className',
		'onchange' => 'onchange(this)',
	],
	'value'
);
```

## Hidden input
```php
print NGForm::hidden(
    'id',
	[
		'class'    => 'className',
		'onchange' => 'onChange(this)'
	],
	'value'
);
```

## Radio
```php
print NGForm::radiobutton(
    'id',
	[
		'class'    => 'className',
		'onchange' => 'onChange(this)',
		'value'    => '1'
	],
	true
);
```

## Checkbox
```php
print NGForm::checkbox(
    'id',
	[
		'class'    => 'className',
		'onchange' => 'onChange(this)',
		'value'    => '1'
	],
	true
);
```

## Select
```php
NGForm::dropbox(
	'id',
	$optionList,
	[
		'class'    => 'className',
		'onchange' => 'onChange(this)'
	],
	'value'
);
```

## 多语言翻译

参考文件: `sys/libs/multilingual.lib`

仅翻译
```php
xlate("Hello World!");
```

翻译的同时会将字符串中的特殊字符转成HTML字符实体(htmlspecialchars())
```php
html_xlate("Hello &lt;b&gt;This&lt;/b&gt; World!");
```