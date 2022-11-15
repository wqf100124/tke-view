# 安装 Java JDK 并配置 JAVA_HOME

## 安装jdk

下载地址: [https://adoptium.net/zh-CN/temurin/releases/](https://adoptium.net/zh-CN/temurin/releases/)

## MacOs

1.查找 `JAVA_HOME` 路径
```sh
$ /usr/libexec/java_home
```

2.编辑 `~/.zshrc` 文件
```sh
$ vim ~/.zshrc
```

3.添加到环境变量
```ini
export JAVA_HOME=/Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
```

4.让配置立即生效
```sh
$ source ~/.zshrc
```

5.查看已插入的 `JAVA_HOME`
```sh
$  echo $JAVA_HOME
```

## Windows

参考文档: [Windows 配置 Java 环境变量](https://www.jianshu.com/p/9fc41ea941aa)

## Linux

待完善...