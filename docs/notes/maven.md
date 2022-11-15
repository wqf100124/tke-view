# 安装并配置 Apache Maven

确保你已经安装了 `java` 环境并配置好了 `JAVA_HOME`

下载源码包

官方网站: [https://maven.apache.org/download.cgi](https://maven.apache.org/download.cgi)

## MacOs/Linux

1.切换到 `/opt` 目录

```sh
$ cd /opt/
```

2.下载源码
```sh
$ wget https://dlcdn.apache.org/maven/maven-3/3.8.6/binaries/apache-maven-3.8.6-bin.tar.gz
```

3.解压
```sh
$ tar xzvf apache-maven-3.8.6-bin.tar.gz
```

4.编辑 `~/.zshrc` 文件
```sh
$ vim ~/.zshrc
```

5.添加到环境变量
```ini
export PATH=/opt/apache-maven-3.8.6/bin:$PATH
```

6.让配置立即生效
```sh
$ source ~/.zshrc
```

7.验证是否安装成功
```sh
$ mvn -v
```

输出以下信息代表成功
```sh
Apache Maven 3.8.6 (84538c9988a25aec085021c365c560670ad80f63)
Maven home: /opt/apache-maven-3.8.6
Java version: 17.0.5, vendor: Eclipse Adoptium, runtime: /Library/Java/JavaVirtualMachines/temurin-17.jdk/Contents/Home
Default locale: zh_CN_#Hans, platform encoding: UTF-8
OS name: "mac os x", version: "13.0.1", arch: "x86_64", family: "mac"
```

8.删除源码包

```sh
$ rm apache-maven-3.8.6-bin.tar.gz
```

## Windows

1.下载并解压源码包

2.按住 `Win` + `Pause` 键打开系统属性面板，进入 `高级系统设置`

3.切换到 `高级` 选项，点击 `环境变量` 按钮

4.选中 `Path` 配置项，添加新的路径: `C:\Program Files\apache-maven-3.8.6\bin`

5.打开cmd窗口，输入下面的命令验证是否安装成功
```sh
$ mvn -v
```

6.验证是否安装成功
```sh
$ mvn -v
```