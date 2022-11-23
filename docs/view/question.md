# 常见问题

## 1.执行php脚本时报错

在运行php脚本如`php sys/lib/test.php`时会报错，这是因为这些脚本的代码中大部分都使用了类似于`$_ENV['HOME']`的环境变量。这时可以使用 **特定用户** 进入容器，以preview用户为例:

进入容器
```sh
$ docker exec --user preview -it view bash
```
查看当前的系统环境变量，(将会输出/home/tke/preview/core)
```sh
$ echo $HOME
```

已经存在的用户和其对应的目录

| 用户名     | 用户目录                   |
|---------|------------------------|
| local   | /home/tke/local/core   |
| preview | /home/tke/preview/core |
| dev2    | /home/tke/dev2/core    |
| rc      | /home/tke/rc/core      |
| live    | /home/tke/live/core    |

## 2.如何让 Windows/macOs 系统区分大小写 (FOO ≠ foo)

### Windows

参考文档: [https://learn.microsoft.com/zh-cn/windows/wsl/case-sensitivity](https://learn.microsoft.com/zh-cn/windows/wsl/case-sensitivity)

#### 检查目录是否区分大小写
```sh
$ fsutil.exe file queryCaseSensitiveInfo <path>
```
将 `<path>` 替换为文件路径。 对于 Windows (NTFS) 文件系统中的目录，`<path>` 将如下所示：`D:\tke`

#### 修改区分大小写
更改目录，使其区分大小写 (FOO ≠ foo)，请以管理员身份运行 `PowerShell` 并使用以下命令：
```sh
$ fsutil.exe file setCaseSensitiveInfo <path> enable
```

若要将目录更改回默认设置不区分大小写 (FOO = foo)，请以管理员身份运行 `PowerShell` 并使用以下命令：
```sh
$ fsutil.exe file setCaseSensitiveInfo <path> disable
```

#### 区分大小写的继承性
创建新目录时，这些目录将继承其父目录的区分大小写。

### macOs

1.打开磁盘工具<br>
2.创建一个新的 `APFS（区分大小写）` 格式的分区或卷宗<br>
3.在该分区下重新拉取项目代码<br>