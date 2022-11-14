# 常见问题

## 1.Windows系统运行Docker Desktop，启动Hyper-V实例失败

![](/image/screenshots/docker/errors/1.png)

原因：可能禁用了Hyper-V 或 未运行Hypervisor代理。

### 解决方案A（如果Hyper-V完全禁用或未安装）

以管理员身份打开PowerShell，启用Hyper-V

```sh
dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All
```

### 解决方案B（如果已启用Hyper-V功能但不起作用）

以管理员身份打开PowerShell，启用Hypervisor

```sh
bcdedit /set hypervisorlaunchtype auto
```

重启系统即可。