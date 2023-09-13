import{_ as s,o as n,c as a,Q as l}from"./chunks/framework.26d96b30.js";const o="/tke-view/image/screenshots/wso2/deploy/WSO2部署流程.png",p="/tke-view/image/screenshots/wso2/deploy/1.png",t="/tke-view/image/screenshots/wso2/deploy/2.png",e="/tke-view/image/screenshots/wso2/deploy/3.png",c="/tke-view/image/screenshots/wso2/deploy/4.png",m=JSON.parse('{"title":"部署","description":"","frontmatter":{},"headers":[],"relativePath":"wso2/deploy.md","filePath":"wso2/deploy.md"}'),r={name:"wso2/deploy.md"},E=l('<h1 id="部署" tabindex="-1">部署 <a class="header-anchor" href="#部署" aria-label="Permalink to &quot;部署&quot;">​</a></h1><p>部署流程：</p><p><img src="'+o+`" alt=""></p><p>SVN地址:</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># dev环境代码(用于部署Dev/Dev2/Opt环境)</span></span>
<span class="line"><span style="color:#E1E4E8;">svn://10.251.68.174/view_repos/fos/GatewayDev</span></span>
<span class="line"><span style="color:#6A737D;"># dev2代码(用于部署RC和Live环境)</span></span>
<span class="line"><span style="color:#E1E4E8;">svn://10.251.68.174/view_repos/fos/GatewayStaging</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># dev环境代码(用于部署Dev/Dev2/Opt环境)</span></span>
<span class="line"><span style="color:#24292E;">svn://10.251.68.174/view_repos/fos/GatewayDev</span></span>
<span class="line"><span style="color:#6A737D;"># dev2代码(用于部署RC和Live环境)</span></span>
<span class="line"><span style="color:#24292E;">svn://10.251.68.174/view_repos/fos/GatewayStaging</span></span></code></pre></div><h2 id="_1-创建并部署app" tabindex="-1">1.创建并部署App <a class="header-anchor" href="#_1-创建并部署app" aria-label="Permalink to &quot;1.创建并部署App&quot;">​</a></h2><h2 id="创建app配置文件" tabindex="-1">创建App配置文件 <a class="header-anchor" href="#创建app配置文件" aria-label="Permalink to &quot;创建App配置文件&quot;">​</a></h2><p><em>注意：原则上一个BU对应一个Application，如果该Application已经存在，使用现有的即可。</em></p><p>示例： 在 <code>CommonAssets/ApplicationSetting/AP</code> 目录下创建App配置文件</p><p>VIEW_AP_APPLICATION.xml</p><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">applicationConfig</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;VIEW_AP_APPLICATION&lt;/</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">throttlingPolicy</span><span style="color:#E1E4E8;">&gt;Unlimited&lt;/</span><span style="color:#85E89D;">throttlingPolicy</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">&gt;For VIEW AP WSO2 API APPLICATION&lt;/</span><span style="color:#85E89D;">description</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">tokenType</span><span style="color:#E1E4E8;">&gt;Client_Credentials&lt;/</span><span style="color:#85E89D;">tokenType</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">   &lt;</span><span style="color:#85E89D;">notificationUser</span><span style="color:#E1E4E8;">&gt;samwang@rayootech.com,wadewang@rayootech.com,janms@rayootech.com&lt;/</span><span style="color:#85E89D;">notificationUser</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">applicationConfig</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">applicationConfig</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;VIEW_AP_APPLICATION&lt;/</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">throttlingPolicy</span><span style="color:#24292E;">&gt;Unlimited&lt;/</span><span style="color:#22863A;">throttlingPolicy</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">description</span><span style="color:#24292E;">&gt;For VIEW AP WSO2 API APPLICATION&lt;/</span><span style="color:#22863A;">description</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">tokenType</span><span style="color:#24292E;">&gt;Client_Credentials&lt;/</span><span style="color:#22863A;">tokenType</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">   &lt;</span><span style="color:#22863A;">notificationUser</span><span style="color:#24292E;">&gt;samwang@rayootech.com,wadewang@rayootech.com,janms@rayootech.com&lt;/</span><span style="color:#22863A;">notificationUser</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">applicationConfig</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="使用jenkins部署app" tabindex="-1">使用Jenkins部署App <a class="header-anchor" href="#使用jenkins部署app" aria-label="Permalink to &quot;使用Jenkins部署App&quot;">​</a></h2><p><em>需要运维开启对应帐号的部署权限</em></p><p>Dev环境: <a href="https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Dev/" target="_blank" rel="noreferrer">https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Dev/</a></p><p>RC环境: <a href="https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Staging/" target="_blank" rel="noreferrer">https://jenkins.tkeasia.com/view/WSO2_DEPLOY/job/WSO2%20Deploy%20Staging/</a></p><p>部署页面</p><p><img src="`+p+'" alt=""></p><p>部署成成功后，application的账号信息会发送到上面配置文件中的用户邮箱里。</p><p><img src="'+t+`" alt=""></p><p>需要让运维在对应的环境中添加App的配置信息<code>.restfulapi.authentication.ini</code>文件 格式：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">[VIEW_AP_APPLICATION]</span></span>
<span class="line"><span style="color:#F97583;">name</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;VIEW_AP_APPLICATION&quot;</span></span>
<span class="line"><span style="color:#F97583;">consumerKey</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&lt;Key&gt;&quot;</span></span>
<span class="line"><span style="color:#F97583;">consumerSecret</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;&lt;Secret&gt;&quot;</span></span>
<span class="line"><span style="color:#F97583;">gatewayAuthUrl</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://apiapdev.fos.tkeasia.com&quot;</span></span>
<span class="line"><span style="color:#F97583;">gatewayRecourceUrl</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;https://apiapdev.fos.tkeasia.com&quot;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">[VIEW_AP_APPLICATION]</span></span>
<span class="line"><span style="color:#D73A49;">name</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;VIEW_AP_APPLICATION&quot;</span></span>
<span class="line"><span style="color:#D73A49;">consumerKey</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&lt;Key&gt;&quot;</span></span>
<span class="line"><span style="color:#D73A49;">consumerSecret</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;&lt;Secret&gt;&quot;</span></span>
<span class="line"><span style="color:#D73A49;">gatewayAuthUrl</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://apiapdev.fos.tkeasia.com&quot;</span></span>
<span class="line"><span style="color:#D73A49;">gatewayRecourceUrl</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;https://apiapdev.fos.tkeasia.com&quot;</span></span></code></pre></div><h2 id="_2-创建并部署api" tabindex="-1">2.创建并部署Api <a class="header-anchor" href="#_2-创建并部署api" aria-label="Permalink to &quot;2.创建并部署Api&quot;">​</a></h2><p>在根目录创建如下两个文件</p><p><code>Demo/API_Managment/V1/apiConfig.xml</code><code>Demo/API_Managment/V1/swagger.json</code></p><p><img src="`+e+`" alt=""></p><details class="details custom-block"><summary>apiConfig.xml 文件示例</summary><div class="language-xml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;?</span><span style="color:#85E89D;">xml</span><span style="color:#B392F0;"> version</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#B392F0;"> encoding</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;UTF-8&quot;</span><span style="color:#E1E4E8;">?&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">apiConfig</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- The name of the API (needed)     --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;Demo&lt;/</span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- Version of the API (needed)    --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;1.0&lt;/</span><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- The request path of the API (needed)  --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">context</span><span style="color:#E1E4E8;">&gt;/suburi&lt;/</span><span style="color:#85E89D;">context</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- The rateLimit info of the API --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">rateLimit</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- The speed limit of the API. Available setting: Unlimited/10000/20000/50000.Default is Unlimited --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- &lt;policies&gt;Unlimited&lt;/policies&gt; --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- The TPS(Maximum back-end transactions per second in integers) of the API. default is Unlimited--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!--&lt;TPS&gt;Unlimited&lt;/TPS&gt;       --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- The subscription policies of the API. Available setting: Unlimited/Gold(5000)/Silver(2000)/Brozen(1000).Default is Unlimited --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!--                           --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!--&lt;subscriptionPolicies&gt;Unlimited&lt;/subscriptionPolicies&gt;--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- If the endpoint is VIEW, if Y, will force set rate limit to 50.Available Value:Y/N.Default is Y --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">isViewEndPoint</span><span style="color:#E1E4E8;">&gt;Y&lt;/</span><span style="color:#85E89D;">isViewEndPoint</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">rateLimit</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- The endpoint info of the API--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">endpointInfo</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- The endpoint url info of the API,default is the EI path of the value set in context.  --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- Or you can set as:{EI_URL}/Maintenancecntry  to connect to other path of the EI,or set the full path of other endpoint,like:&lt;url&gt;https://www.baidu.com/Maintenancecntry&lt;/url&gt; --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">&gt;第三方接口地址&lt;/</span><span style="color:#85E89D;">url</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- The endpoint Auth type,None:means no Auth, Basic:means use basic Auth, Oauth:means Oauth --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">authInfo</span><span style="color:#E1E4E8;">&gt;Basic&lt;/</span><span style="color:#85E89D;">authInfo</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- The endpoint Auth info,if set &quot;Basic&quot; in authInfo will use as basic Auth username &amp; password, &quot;Oauth&quot; will use as Oauth client-id&amp;client-secret  --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">authName</span><span style="color:#E1E4E8;">&gt;demo.auth.basic.username&lt;/</span><span style="color:#85E89D;">authName</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">authPwd</span><span style="color:#E1E4E8;">&gt;demo.auth.basic.password&lt;/</span><span style="color:#85E89D;">authPwd</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">endpointInfo</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- The bind application of this API.One API could bind to multiple application.Value get from CommonAssets\\ApplicationSetting,File name in each BU folder. If bind to multiple application,add this section.--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- Rules:  --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- VIEW-&gt;WSO2/WSO2-&gt;VIEW : 1:All API of each country under same bu share same application.                                                               --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- ExternalSystem-&gt;WSO2 :  2:Different API of Same System under same country share same application.                                                     --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">applicationInfo</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        &lt;</span><span style="color:#85E89D;">bindApplication</span><span style="color:#E1E4E8;">&gt;VIEW_AP_APPLICATION&lt;/</span><span style="color:#85E89D;">bindApplication</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!-- The application subscription policies of the API. Available setting: Unlimited/Gold(5000)/Silver(2000)/Brozen(1000).Default is Unlimited --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">&lt;!--&lt;applicationPolicies&gt;10&lt;/applicationPolicies&gt;--&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;/</span><span style="color:#85E89D;">applicationInfo</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- Decide which BU this API will apply to. Could apply to multiple BU,use &quot;,&quot; as separator.Available value:AP/NA/EA/SA   --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">applyBU</span><span style="color:#E1E4E8;">&gt;AP&lt;/</span><span style="color:#85E89D;">applyBU</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- The realted endpoint config file folder of this api,under path &quot;CommonAssets\\Enterprise_integrator\\{BU}\\EndPoint&quot;     --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- {BU} related to config value of line64 &quot;applyBU&quot;,multiple use &quot;,&quot; as separator --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">endPointConfig</span><span style="color:#E1E4E8;">&gt;Oz&lt;/</span><span style="color:#85E89D;">endPointConfig</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">apiConfig</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;?</span><span style="color:#22863A;">xml</span><span style="color:#6F42C1;"> version</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#6F42C1;"> encoding</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;UTF-8&quot;</span><span style="color:#24292E;">?&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">apiConfig</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- The name of the API (needed)     --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;Demo&lt;/</span><span style="color:#22863A;">name</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- Version of the API (needed)    --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;1.0&lt;/</span><span style="color:#22863A;">version</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- The request path of the API (needed)  --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">context</span><span style="color:#24292E;">&gt;/suburi&lt;/</span><span style="color:#22863A;">context</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- The rateLimit info of the API --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">rateLimit</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- The speed limit of the API. Available setting: Unlimited/10000/20000/50000.Default is Unlimited --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- &lt;policies&gt;Unlimited&lt;/policies&gt; --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- The TPS(Maximum back-end transactions per second in integers) of the API. default is Unlimited--&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!--&lt;TPS&gt;Unlimited&lt;/TPS&gt;       --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- The subscription policies of the API. Available setting: Unlimited/Gold(5000)/Silver(2000)/Brozen(1000).Default is Unlimited --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!--                           --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!--&lt;subscriptionPolicies&gt;Unlimited&lt;/subscriptionPolicies&gt;--&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- If the endpoint is VIEW, if Y, will force set rate limit to 50.Available Value:Y/N.Default is Y --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">isViewEndPoint</span><span style="color:#24292E;">&gt;Y&lt;/</span><span style="color:#22863A;">isViewEndPoint</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">rateLimit</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- The endpoint info of the API--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">endpointInfo</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- The endpoint url info of the API,default is the EI path of the value set in context.  --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- Or you can set as:{EI_URL}/Maintenancecntry  to connect to other path of the EI,or set the full path of other endpoint,like:&lt;url&gt;https://www.baidu.com/Maintenancecntry&lt;/url&gt; --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">url</span><span style="color:#24292E;">&gt;第三方接口地址&lt;/</span><span style="color:#22863A;">url</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- The endpoint Auth type,None:means no Auth, Basic:means use basic Auth, Oauth:means Oauth --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">authInfo</span><span style="color:#24292E;">&gt;Basic&lt;/</span><span style="color:#22863A;">authInfo</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- The endpoint Auth info,if set &quot;Basic&quot; in authInfo will use as basic Auth username &amp; password, &quot;Oauth&quot; will use as Oauth client-id&amp;client-secret  --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">authName</span><span style="color:#24292E;">&gt;demo.auth.basic.username&lt;/</span><span style="color:#22863A;">authName</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">authPwd</span><span style="color:#24292E;">&gt;demo.auth.basic.password&lt;/</span><span style="color:#22863A;">authPwd</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">endpointInfo</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- The bind application of this API.One API could bind to multiple application.Value get from CommonAssets\\ApplicationSetting,File name in each BU folder. If bind to multiple application,add this section.--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- Rules:  --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- VIEW-&gt;WSO2/WSO2-&gt;VIEW : 1:All API of each country under same bu share same application.                                                               --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- ExternalSystem-&gt;WSO2 :  2:Different API of Same System under same country share same application.                                                     --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">applicationInfo</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        &lt;</span><span style="color:#22863A;">bindApplication</span><span style="color:#24292E;">&gt;VIEW_AP_APPLICATION&lt;/</span><span style="color:#22863A;">bindApplication</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!-- The application subscription policies of the API. Available setting: Unlimited/Gold(5000)/Silver(2000)/Brozen(1000).Default is Unlimited --&gt;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">&lt;!--&lt;applicationPolicies&gt;10&lt;/applicationPolicies&gt;--&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;/</span><span style="color:#22863A;">applicationInfo</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- Decide which BU this API will apply to. Could apply to multiple BU,use &quot;,&quot; as separator.Available value:AP/NA/EA/SA   --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">applyBU</span><span style="color:#24292E;">&gt;AP&lt;/</span><span style="color:#22863A;">applyBU</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- The realted endpoint config file folder of this api,under path &quot;CommonAssets\\Enterprise_integrator\\{BU}\\EndPoint&quot;     --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- {BU} related to config value of line64 &quot;applyBU&quot;,multiple use &quot;,&quot; as separator --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">endPointConfig</span><span style="color:#24292E;">&gt;Oz&lt;/</span><span style="color:#22863A;">endPointConfig</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">apiConfig</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></details><details class="details custom-block"><summary>swagger.json 文件示例</summary><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;swagger&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;2.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;info&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;The Api doc for the Demo,For outside system to post paitent info to FR.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;version&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;1.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;title&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Demo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;termsOfService&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://swagger.io/terms/&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;contact&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;email&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;wadewang@rayootech.com&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;license&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Apache 2.0&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://www.apache.org/licenses/LICENSE-2.0.html&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;host&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Demo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;basePath&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;/ServiceNow&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;tags&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Hospital&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Everything about the hospital info in this Demo&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;externalDocs&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Find out more&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://swagger.io&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;schemes&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#9ECBFF;">&quot;https&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;paths&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;/*&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;post&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;tags&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;Hospital&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;summary&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Send paitent info to us.&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;send the paient info to us,detail as below&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;operationId&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;sendPaitent&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;produces&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#9ECBFF;">&quot;application/json&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;parameters&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;in&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;body&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;body&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Patient info to add&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;required&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;schema&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">&quot;$ref&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/definitions/Patient&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;responses&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;200&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;successful operation&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;schema&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">              </span><span style="color:#79B8FF;">&quot;$ref&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;#/definitions/ApiResponse&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">            }</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;400&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Hospital dose not match&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          },</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;500&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;System Error&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;security&quot;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">          {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#79B8FF;">&quot;api_key&quot;</span><span style="color:#E1E4E8;">: []</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ]</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;definitions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;Patient&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;object&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;properties&quot;</span><span style="color:#E1E4E8;">: {}</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ApiResponse&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;object&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;properties&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;code&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;integer&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;format&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;int32&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;message&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;string&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;externalDocs&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;description&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;Find out more about Swagger&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;url&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;http://swagger.io&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#79B8FF;">&quot;securityDefinitions&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;ServiceNow&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;oauth2&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;authorizationUrl&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;https://tkelevatordev01.service-now.com/api/now/table/sn_hr_core_obp_repair&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;flow&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;implicit&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;scopes&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">&quot;add:Paitent&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;send the patient info&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#79B8FF;">&quot;api_key&quot;</span><span style="color:#E1E4E8;">: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;type&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;apiKey&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;name&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;api_key&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#79B8FF;">&quot;in&quot;</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;header&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;swagger&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;2.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;info&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;The Api doc for the Demo,For outside system to post paitent info to FR.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;version&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;1.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;title&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Demo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;termsOfService&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://swagger.io/terms/&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;contact&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;email&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;wadewang@rayootech.com&quot;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;license&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Apache 2.0&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://www.apache.org/licenses/LICENSE-2.0.html&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;host&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Demo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;basePath&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;/ServiceNow&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;tags&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Hospital&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Everything about the hospital info in this Demo&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;externalDocs&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Find out more&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://swagger.io&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;schemes&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#032F62;">&quot;https&quot;</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;paths&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;/*&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;post&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;tags&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;Hospital&quot;</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;summary&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Send paitent info to us.&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;send the paient info to us,detail as below&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;operationId&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;sendPaitent&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;produces&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#032F62;">&quot;application/json&quot;</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;parameters&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;in&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;body&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;body&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Patient info to add&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;required&quot;</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;schema&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">&quot;$ref&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/definitions/Patient&quot;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;responses&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;200&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;successful operation&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;schema&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">              </span><span style="color:#005CC5;">&quot;$ref&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;#/definitions/ApiResponse&quot;</span></span>
<span class="line"><span style="color:#24292E;">            }</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;400&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Hospital dose not match&quot;</span></span>
<span class="line"><span style="color:#24292E;">          },</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;500&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;System Error&quot;</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;security&quot;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">          {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#005CC5;">&quot;api_key&quot;</span><span style="color:#24292E;">: []</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        ]</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;definitions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;Patient&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;object&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;properties&quot;</span><span style="color:#24292E;">: {}</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ApiResponse&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;object&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;properties&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;code&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;integer&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;format&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;int32&quot;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;message&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;string&quot;</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;externalDocs&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;description&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;Find out more about Swagger&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;url&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;http://swagger.io&quot;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#005CC5;">&quot;securityDefinitions&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;ServiceNow&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;oauth2&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;authorizationUrl&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;https://tkelevatordev01.service-now.com/api/now/table/sn_hr_core_obp_repair&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;flow&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;implicit&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;scopes&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">&quot;add:Paitent&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;send the patient info&quot;</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#005CC5;">&quot;api_key&quot;</span><span style="color:#24292E;">: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;type&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;apiKey&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;name&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;api_key&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#005CC5;">&quot;in&quot;</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;header&quot;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div></details><p>在使用jenkins部署这两个文件之前，必须先让运维配置第三方API的帐号信息 （从Tke Leader处获取）<br> 配置格式：<br><code>demo.auth.basic.username &lt;帐号&gt;</code> <br><code>demo.auth.basic.password &lt;密码&gt;</code></p><p><img src="`+c+'" alt=""></p>',29),y=[E];function i(u,q,d,F,g,h){return n(),a("div",null,y)}const A=s(r,[["render",i]]);export{m as __pageData,A as default};
