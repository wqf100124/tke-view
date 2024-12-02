# 常见问题

## 1.执行php脚本时报错

在运行php脚本如 `php sys/lib/test.php` 时会报错，这是因为这些脚本的代码中使用了类似 `$_ENV['HOME']` 的环境变量，所以需要使用 **特定用户** 进入容器。
<br><br>
```shell
docker exec --user tk -it local bash
```

验证 `$HOME` 环境变量（输出 /opt/tk）
```shell
echo $HOME
```

容器中的用户和其对应的目录

| 用户名 | 用户目录    |
|-----|---------|
| tk  | /opt/tk |

## 2.如何让 Windows/macOs 系统区分大小写 (FOO ≠ foo)

### Windows

参考文档: [https://learn.microsoft.com/zh-cn/windows/wsl/case-sensitivity](https://learn.microsoft.com/zh-cn/windows/wsl/case-sensitivity)

#### 检查目录是否区分大小写
```shell
fsutil.exe file queryCaseSensitiveInfo <path>
```
将 `<path>` 替换为文件路径。例如：`D:\tke`

#### 设置区分大小写
更改目录，使其区分大小写 (FOO ≠ foo)，请以管理员身份运行 `PowerShell` 并使用以下命令：
```shell
fsutil.exe file setCaseSensitiveInfo <path> enable
```

#### 取消区分大小写
若要将目录更改回默认设置不区分大小写 (FOO = foo)，请以管理员身份运行 `PowerShell` 并使用以下命令：
```shell
fsutil.exe file setCaseSensitiveInfo <path> disable
```

#### 继承性
创建新目录时，这些目录将继承其父目录的区分大小写。

### MacOs

1.打开磁盘工具<br>
2.创建一个新的 `APFS（区分大小写）` 格式的分区或卷宗<br>
3.在该分区下重新拉取项目代码<br>
