import{_ as n,c as l,e as p,b as s,d as o,a as e,o as t,r as c}from"./app.ecc521ad.js";const r="/tke-view/image/screenshots/wso2/user/3.png",i="/tke-view/image/screenshots/wso2/user/4.png",D="/tke-view/image/screenshots/wso2/user/5.png",y="/tke-view/image/screenshots/wso2/user/6.png",F="/tke-view/image/screenshots/wso2/user/7.png",A="/tke-view/image/screenshots/wso2/user/8.png",C="/tke-view/image/screenshots/wso2/user/oauth-1.png",h="/tke-view/image/screenshots/wso2/user/oauth-2.png",d="/tke-view/image/screenshots/wso2/user/oauth-3.png",u="/tke-view/image/screenshots/wso2/user/subscribe-1.png",_="/tke-view/image/screenshots/wso2/user/subscribe-2.png",E="/tke-view/image/screenshots/wso2/user/14.png",f="/tke-view/image/screenshots/wso2/user/15.png",P=JSON.parse('{"title":"使用外部接口","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.创建Api","slug":"_1-创建api","link":"#_1-创建api","children":[]},{"level":2,"title":"2.创建App","slug":"_2-创建app","link":"#_2-创建app","children":[]},{"level":2,"title":"3.生成OAuth认证密钥","slug":"_3-生成oauth认证密钥","link":"#_3-生成oauth认证密钥","children":[]},{"level":2,"title":"4.绑定Api和App","slug":"_4-绑定api和app","link":"#_4-绑定api和app","children":[]},{"level":2,"title":"5.在View中使用","slug":"_5-在view中使用","link":"#_5-在view中使用","children":[{"level":3,"title":"添加配置信息","slug":"添加配置信息","link":"#添加配置信息","children":[]},{"level":3,"title":"发送请求","slug":"发送请求","link":"#发送请求","children":[]},{"level":3,"title":"处理响应","slug":"处理响应","link":"#处理响应","children":[]}]},{"level":2,"title":"6.接口调试","slug":"_6-接口调试","link":"#_6-接口调试","children":[{"level":3,"title":"获取AccessToken","slug":"获取accesstoken","link":"#获取accesstoken","children":[]},{"level":3,"title":"请求API(WSO2直连)","slug":"请求api-wso2直连","link":"#请求api-wso2直连","children":[]},{"level":3,"title":"请求API(View中使用WSO2)","slug":"请求api-view中使用wso2","link":"#请求api-view中使用wso2","children":[]}]}],"relativePath":"wso2/consumer.md"}'),m={name:"wso2/consumer.md"},w=s("h1",{id:"使用外部接口",tabindex:"-1"},[o("使用外部接口 "),s("a",{class:"header-anchor",href:"#使用外部接口","aria-hidden":"true"},"#")],-1),g=s("blockquote",null,[s("p",null,"View 通过 WSO2 请求第三方系统 API")],-1),B=e('<h2 id="_1-创建api" tabindex="-1">1.创建Api <a class="header-anchor" href="#_1-创建api" aria-hidden="true">#</a></h2><p>打开 Api 管理页面并登录: <a href="https://localhost:9443/publisher" target="_blank" rel="noreferrer">https://localhost:9443/publisher</a><br> 账号: <code>admin</code><br> 密码: <code>admin</code></p><p>选择【REST API】类型的接口 <img src="'+r+'" alt=""></p><p>点击【Start From Scratch】 创建新的 API <img src="'+i+'" alt=""> 填入接口信息 <img src="'+D+'" alt=""></p><p>配置第三方接口的认证信息 <img src="'+y+'" alt=""></p><h2 id="_2-创建app" tabindex="-1">2.创建App <a class="header-anchor" href="#_2-创建app" aria-hidden="true">#</a></h2><p>打开 App 管理页面: <a href="https://localhost:9443/devportal/applications" target="_blank" rel="noreferrer">https://localhost:9443/devportal/applications</a></p><p>点击【ADD NEW APPLICATION】按钮 <img src="'+F+'" alt=""> 填入信息并保存 <img src="'+A+'" alt=""></p><h2 id="_3-生成oauth认证密钥" tabindex="-1">3.生成OAuth认证密钥 <a class="header-anchor" href="#_3-生成oauth认证密钥" aria-hidden="true">#</a></h2><p>切换到【Oauth2 Tokens】菜单栏 <img src="'+C+'" alt=""> 点击【GENERATE KEYS】生成新的认证密钥 <img src="'+h+'" alt=""> 查看新生成的密钥信息 <img src="'+d+'" alt=""></p><h2 id="_4-绑定api和app" tabindex="-1">4.绑定Api和App <a class="header-anchor" href="#_4-绑定api和app" aria-hidden="true">#</a></h2><p>切换到【Subscriptions】菜单栏，然后点击页面上的【+SUBSCRIBE APIS】按钮 <img src="'+u+'" alt=""> 在弹出的页面中选择需要绑定的API，点击【SUBSCRIBE】按钮 <img src="'+_+`" alt=""></p><h2 id="_5-在view中使用" tabindex="-1">5.在View中使用 <a class="header-anchor" href="#_5-在view中使用" aria-hidden="true">#</a></h2><h3 id="添加配置信息" tabindex="-1">添加配置信息 <a class="header-anchor" href="#添加配置信息" aria-hidden="true">#</a></h3><p>在项目的 <code>core</code> 文件夹下新建一个名为: <code>.restfulapi.authentication.ini</code> 的文件（文件名以&#39;.&#39;号开始），并复制粘贴以下内容。</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki material-theme-palenight has-highlighted-lines"><code><span class="line"><span style="color:#676E95;font-style:italic;">;配置项名称</span></span>
<span class="line"><span style="color:#89DDFF;">[APPLICATION_DEMO]</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">;WSO2的OAuth认证接口</span></span>
<span class="line"><span style="color:#F07178;">gatewayAuthUrl</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://172.16.1.94:9443/oauth2</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#676E95;font-style:italic;">;WSO2的Oauth帐号信息</span></span>
<span class="line highlighted"><span style="color:#F07178;">consumerKey</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Gyf9T2mZRqiyC7z7kw8_g8ngxnoa</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">consumerSecret</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">Xh6_eLPWaPBbUMfkUld72GG6JL4a</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">;WSO2中的API接口地址</span></span>
<span class="line"><span style="color:#F07178;">gatewayRecourceUrl</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">https://172.16.1.94:8243</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre></div><ul><li>配置项名称对应 Application 的名称</li><li>consumerKey 对应 OAuth2 的 <code>Consumer Key</code> 和 <code>Consumer Secret</code></li></ul><h3 id="发送请求" tabindex="-1">发送请求 <a class="header-anchor" href="#发送请求" aria-hidden="true">#</a></h3><p>在项目中新建一个 <code>web/wso2.php</code> 的测试文件，并复制粘贴以下代码。</p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> NO_USER_REQUIRED       </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> NO_PERMISSION_REQUIRED </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">require_once</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;{$</span><span style="color:#A6ACCD;">_SERVER</span><span style="color:#89DDFF;">[&#39;</span><span style="color:#C3E88D;">DOCUMENT_ROOT</span><span style="color:#89DDFF;">&#39;]}</span><span style="color:#C3E88D;">/../sys/libs/init.lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">require_once</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;{$</span><span style="color:#A6ACCD;">_SERVER</span><span style="color:#89DDFF;">[&#39;</span><span style="color:#C3E88D;">DOCUMENT_ROOT</span><span style="color:#89DDFF;">&#39;]}</span><span style="color:#C3E88D;">/../sys/libs/logic/Util/Gateway/ViewGateway.lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">VIEW</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Util</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Gateway</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">ViewGateway</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// .ini文件中的配置项名称</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> CONFIG_NAME </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">APPLICATION_DEMO</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// API名称</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> API_NAME </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// API路径(context)</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> API_URI </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/demo</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// API版本</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> API_VERSION </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1.0</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">try</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">viewGateway </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ViewGateway</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">CONFIG_NAME</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// 发送请求</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">result </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">viewGateway</span><span style="color:#89DDFF;">-&gt;</span><span style="color:#82AAFF;">post</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">API_NAME</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[],</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">0</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">null,</span><span style="color:#A6ACCD;"> API_VERSION</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">true,</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">2</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> API_URI</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;font-style:italic;">if</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#82AAFF;">empty</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">result</span><span style="color:#89DDFF;">))</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// 接口请求失败，记录日志</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">catch</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">Exception</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">e</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="处理响应" tabindex="-1">处理响应 <a class="header-anchor" href="#处理响应" aria-hidden="true">#</a></h3><p>创建处理文件: <code>sys/libs/logic/Util/Gateway/Handler/DemoGatewayBizHandler.php</code></p><p><em>文件命名规范：&lt;App名称&gt;GatewayBizHandler.php</em></p><div class="language-php"><button title="Copy Code" class="copy"></button><span class="lang">php</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;?</span><span style="color:#A6ACCD;">php</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">namespace</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">VIEW</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Util</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Gateway</span><span style="color:#89DDFF;">\\</span><span style="color:#FFCB6B;">Handler</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">require_once</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;{$</span><span style="color:#A6ACCD;">_SERVER</span><span style="color:#89DDFF;">[&#39;</span><span style="color:#C3E88D;">DOCUMENT_ROOT</span><span style="color:#89DDFF;">&#39;]}</span><span style="color:#C3E88D;">/../sys/libs/curl_api_adapter/curl.lib</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">require_once</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;{$</span><span style="color:#A6ACCD;">_SERVER</span><span style="color:#89DDFF;">[&#39;</span><span style="color:#C3E88D;">DOCUMENT_ROOT</span><span style="color:#89DDFF;">&#39;]}</span><span style="color:#C3E88D;">/../sys/libs/view_exceptions/autoloader.php</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">require_once</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">SYSTEM_DIR </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/libs/logic/external_access_logger/bo/ExternalAccessLogger.lib</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">require_once</span><span style="color:#A6ACCD;"> SYSTEM_DIR </span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/libs/jwt_wrapper/autoloader.php</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F78C6C;">use</span><span style="color:#FFCB6B;"> </span><span style="color:#A6ACCD;">VIEW</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Util</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">Gateway</span><span style="color:#89DDFF;">\\</span><span style="color:#A6ACCD;">ViewGatewayBizHandlerBaseService</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">DemoGatewayBizHandler</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">extends</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ViewGatewayBizHandlerBaseService</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * Demo</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     *</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $applicationName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $apiName</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $requestMethod</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $requestData</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $version</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $retutrnValue</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     * </span><span style="color:#F78C6C;font-style:italic;">@param</span><span style="color:#676E95;font-style:italic;"> $identifier</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">     */</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">onFinish</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">applicationName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">apiName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">requestMethod</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">requestData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">retutrnValue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">identifier</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">var_dump</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">retutrnValue</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#C792EA;">parent</span><span style="color:#89DDFF;">::</span><span style="color:#82AAFF;">onFinish</span><span style="color:#89DDFF;">($</span><span style="color:#A6ACCD;">applicationName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">apiName</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">requestMethod</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">requestData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">version</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">retutrnValue</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">$</span><span style="color:#A6ACCD;">identifier</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="_6-接口调试" tabindex="-1">6.接口调试 <a class="header-anchor" href="#_6-接口调试" aria-hidden="true">#</a></h2><h3 id="获取accesstoken" tabindex="-1">获取AccessToken <a class="header-anchor" href="#获取accesstoken" aria-hidden="true">#</a></h3><p>1.打开调试工具，使用 <code>POST</code> 方法请求URL: <code>https://localhost:9443/oauth2/token</code><br> 2.认证方式选择 <code>Basic Auth</code>，账号密码填写 OAuth2 的 <code>Key</code> 和 <code>Secret</code><img src="`+E+'" alt=""> 在请求的 <code>Body</code> 中添加 <code>grant_type:client_credentials</code> 信息 <img src="'+f+'" alt=""></p><h3 id="请求api-wso2直连" tabindex="-1">请求API(WSO2直连) <a class="header-anchor" href="#请求api-wso2直连" aria-hidden="true">#</a></h3><p>1.打开调试工具，使用 <code>POST</code> 方法请求URL: <code>https://localhost:8243/demo/1.0</code><br> 2.认证方式选择 <code>Bearer Token</code>，Token内容使用上面获取的 <code>access_token</code></p><h3 id="请求api-view中使用wso2" tabindex="-1">请求API(View中使用WSO2) <a class="header-anchor" href="#请求api-view中使用wso2" aria-hidden="true">#</a></h3><p>访问你的URL如: <code>https://localhost:8243/wso2.php</code></p>',31);function v(b,k,I,S,O,$){const a=c("Mermaid");return t(),l("div",null,[w,g,p(a,{id:"mermaid_1a962852",graph:"flowchart%20LR%0AA(View)%20%26%20B(VFM)%20---%3E%20C(%5BWSO2%5D)%20---%3E%20D%5B%5B%E7%AC%AC%E4%B8%89%E6%96%B9%E7%B3%BB%E7%BB%9FA%5D%5D%20%26%20E%5B%5B%E7%AC%AC%E4%B8%89%E6%96%B9%E7%B3%BB%E7%BB%9FB%5D%5D%20%26%20F%5B%5B%E7%AC%AC%E4%B8%89%E6%96%B9%E7%B3%BB%E7%BB%9FC%5D%5D%0Astyle%20A%20fill%3A%237b1fa2%2Ccolor%3A%23fff%2Cstroke-width%3A0%0Astyle%20B%20fill%3A%234caf50%2Ccolor%3A%23fff%2Cstroke-width%3A0%0Astyle%20C%20fill%3A%23ff7300%2Ccolor%3A%23fff%2Cstroke-width%3A0%0Astyle%20D%20fill%3A%233a49ab%2Ccolor%3A%23fff%2Cstroke-width%3A0%0Astyle%20E%20fill%3A%233a49ab%2Ccolor%3A%23fff%2Cstroke-width%3A0%0Astyle%20F%20fill%3A%233a49ab%2Ccolor%3A%23fff%2Cstroke-width%3A0"}),B])}const q=n(m,[["render",v]]);export{P as __pageData,q as default};