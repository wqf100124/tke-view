# EI开发

> [Enterprise Integration(EI)](https://wso2.com/enterprise-integrator/6.6.0) 是以 API 为中心的云原生分布式集成平台。

## 开发工具

::: warning 温馨提示
Integration Studio 和 Visual Studio Code 都可以用来做EI开发，两个工具任选其一即可。
:::

### Integration Studio

> 设计、开发、调试、测试和部署工具

官方下载地址: [https://wso2.com/integration/integration-studio/](https://wso2.com/integration/integration-studio/)

### Visual Studio Code

#### 准备工作

1.安装 [Visual Studio Code](https://code.visualstudio.com/)
<br>
2.在 Visual Studio Code 中添加 [WSO2 Enterprise Integrator](https://marketplace.visualstudio.com/items?itemName=WSO2.wso2ei) 和 [Synapse](https://marketplace.visualstudio.com/items?itemName=nexure.synapse-executor) 扩展
<br>
3.安装`Java JDK`并配置`JAVA_HOME` (参考笔记: [配置 Java 环境](/notes/java.md))
<br>
4.安装 [Maven](https://maven.apache.org/download.cgi) (参考笔记: [安装并配置 Maven](/notes/maven.md))
<br>

#### 操作命令

打开命令面板（macOS 上的 `[Command]` + `[Shift]` + `[P]`，Windows/Linux 上的 `[Ctrl]` + `[Shift]` + `[P]`）

| Command                                     | Description                                                                                |
|---------------------------------------------|--------------------------------------------------------------------------------------------|
| WSO2EI: Activate WSO2 EI Tooling            | 激活WSO2 EI工具                                                                                |
| WSO2EI: Change Language to SynapseXml	      | 将语言模式更改为SynapseXml.                                                                        |
| WSO2EI: Create New Integration Project      | 创建新的EI项目，其中包含`ESB Configs`、`Composite Exporter`、`Registry Resources`、`Connector Exporter`. |
| WSO2EI: Create New ESB Project              | 创建一个新的 `ESB` 项目。                                                                           |
| WSO2EI: Build Integration Project	          | 从打开的EI项目创建可部署的`.car`文件。                                                                    |
| WSO2EI: Build Integration Project from CApp | 使用`.car`文件构建EI项目.                                                                          |
| WSO2EI: Import Integration Project          | 将EI项目导入到VS Code工作区。                                                                        |
| WSO2EI: Create Zip Archive                  | 将EI项目导出为`ZIP`文件.                                                                           |
| WSO2EI: Import Zip Archive                  | 从`ZIP`文件中导入EI项目。                                                                           |

这里仅列出了一些常用的命令，其它命令可以参考 [官方使用手册](https://marketplace.visualstudio.com/items?itemName=WSO2.wso2ei)

## 基础操作

### 对明文密码的加密

1.进入MI容器

```sh
$ docker exec -it mi sh
```

2.查看密钥(`key_password`配置项的值)

```sh
$ cat /home/wso2carbon/wso2mi-4.1.0/conf/deployment.toml
```

示例：

```ini{8}
[server]
hostname = "localhost"

[keystore.tls]  # IMPORTANT! Be sure to change this heading to [keystore.primary] when you use the product.
file_name = "wso2carbon.jks"
password = "wso2carbon"
alias = "wso2carbon"
key_password = "wso2carbon"

# ...
```

3.运行加密命令
```sh
$ /home/wso2carbon/wso2mi-4.1.0/bin/ciphertool.sh -Dconfigure
```
输入密钥: 即`key_password`配置项的值，默认为: `wso2carbon`

## EI代码

REST API

每个 API 必须指定唯一的名称`API_NAME`和唯一的URI`URI_PATH_OF_API`。API 由一个或多个`resource`组成，`resource`是 API 的逻辑组件，可以通过特定的 HTTP `methods`来访问。将请求调度到`resource`后，它将通过`resource`的`inSequence`进行调解。在`inSequence`结束时，可以将请求转发到后端应用程序进行进一步处理。来自后端系统的任何响应都通过资源的`outSequence`进行调解。还可以定义`faultSequence`来处理通过资源调解消息时可能发生的任何错误。

```xml
<api name="API_NAME" context="URI_PATH_OF_API" [hostname="HOST_NAME_OF_SERVER"]  [port="PORT_NUMBER"]>
    <resource [methods="GET|POST|PUT|DELETE|OPTIONS|HEAD|PATCH"] [uri-template="URI_TEMPLATE"|url-mapping="URL_MAPPING"]>
      <inSequence>
         // 对请求参数进行处理
      </inSequence>
      <outSequence>
         // 对响应参数进行处理
      </outSequence>
      <faultSequence>
         // 异常处理
      </faultSequence>
    </resource>
</api>
```

示例 API：

```xml
<api name="API_1" context="/order">
    <resource url-mapping="/list" inSequence="seq1" outSequence="seq2"/>
</api>
  
<api name="API_2" context="/user">
    <resource url-mapping="/list" methods="GET" inSequence="seq3" outSequence="seq4"/>
    <resource uri-template="/edit/{userId}" methods="PUT POST" inSequence="seq5" outSequence="seq6"/>
</api>
 
<api name="API_3" context="/payments">
    <resource url-mapping="/list" methods="GET" inSequence="seq7" outSequence="seq8"/>
    <resource uri-template="/edit/{userId}" methods="PUT POST" outSequence="seq9">
        <inSequence>
             <log/>
             <send>
                 <endpoint key="BackendService"/>
             </send>
        </inSequence>
    </resource>
    <resource inSequence="seq10" outSequence="seq11"/>
</api>
```

## 测试EI请求

请求地址: `http://localhost:8290/<URI_PATH_OF_API>`

示例: `http://localhost:8290/demo`