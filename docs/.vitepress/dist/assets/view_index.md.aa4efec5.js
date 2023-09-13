import{_ as l,C as p,o,c as e,k as a,a as s,H as c,Q as t}from"./chunks/framework.26d96b30.js";const m=JSON.parse('{"title":"本地环境","description":"","frontmatter":{},"headers":[],"relativePath":"view/index.md","filePath":"view/index.md"}'),r={name:"view/index.md"},E={id:"本地环境",tabindex:"-1"},i=a("a",{class:"header-anchor",href:"#本地环境","aria-label":'Permalink to "本地环境 <Badge type="tip" text="v1.0.5" />"'},"​",-1),y=t(`<div class="tip custom-block"><p class="custom-block-title">提示：</p><p>现已支持 <code>PHP8.2</code> 的环境，设置镜像的版本为 <code>2.0.0</code> 以上即可！</p></div><p>新的目录结构如下：</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">sites</span></span>
<span class="line"><span style="color:#E1E4E8;">  global</span></span>
<span class="line"><span style="color:#E1E4E8;">  hk</span></span>
<span class="line"><span style="color:#E1E4E8;">  china</span></span>
<span class="line"><span style="color:#E1E4E8;">  ...</span></span>
<span class="line"><span style="color:#E1E4E8;">local</span></span>
<span class="line"><span style="color:#E1E4E8;">  sys</span></span>
<span class="line"><span style="color:#E1E4E8;">  web</span></span>
<span class="line"><span style="color:#E1E4E8;">  ...</span></span>
<span class="line"><span style="color:#E1E4E8;">preview</span></span>
<span class="line"><span style="color:#E1E4E8;">  sys</span></span>
<span class="line"><span style="color:#E1E4E8;">  web</span></span>
<span class="line"><span style="color:#E1E4E8;">  ...</span></span>
<span class="line"><span style="color:#E1E4E8;">...</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">sites</span></span>
<span class="line"><span style="color:#24292E;">  global</span></span>
<span class="line"><span style="color:#24292E;">  hk</span></span>
<span class="line"><span style="color:#24292E;">  china</span></span>
<span class="line"><span style="color:#24292E;">  ...</span></span>
<span class="line"><span style="color:#24292E;">local</span></span>
<span class="line"><span style="color:#24292E;">  sys</span></span>
<span class="line"><span style="color:#24292E;">  web</span></span>
<span class="line"><span style="color:#24292E;">  ...</span></span>
<span class="line"><span style="color:#24292E;">preview</span></span>
<span class="line"><span style="color:#24292E;">  sys</span></span>
<span class="line"><span style="color:#24292E;">  web</span></span>
<span class="line"><span style="color:#24292E;">  ...</span></span>
<span class="line"><span style="color:#24292E;">...</span></span></code></pre></div><h2 id="创建-view-容器" tabindex="-1">创建 View 容器 <a class="header-anchor" href="#创建-view-容器" aria-label="Permalink to &quot;创建 View 容器&quot;">​</a></h2><div class="tip custom-block"><p class="custom-block-title">提示</p><p>在开始配置环境前，建议设置项目目录为 区分大小写 模式，参考：<a href="https://learn.microsoft.com/zh-cn/windows/wsl/case-sensitivity" target="_blank" rel="noreferrer">https://learn.microsoft.com/zh-cn/windows/wsl/case-sensitivity</a></p></div><p>1.在本地创建一个名为 <code>docker-compose.yml</code> 的文件，并复制粘贴以下内容。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">view</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rtwadewang/view:1.0.5</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">view</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">sites:/home/tke/sites</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">local:/home/tke/local</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tke</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">ipv4_address</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">172.16.1.80</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;80:80&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">restart</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">always</span></span>
<span class="line"><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tke</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">tke</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ipam</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">default</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">config</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">subnet</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">172.16.1.0/24</span></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">sites</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">sites</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">local</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver_opts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">o</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bind</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">device</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">site站点路径如：D:/tke/sites</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">local</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">local</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">local</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver_opts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">o</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bind</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">device</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">local代码路径如：D:/tke/local</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">view</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rtwadewang/view:1.0.5</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">view</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">sites:/home/tke/sites</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">local:/home/tke/local</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tke</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">ipv4_address</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">172.16.1.80</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;80:80&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">restart</span><span style="color:#24292E;">: </span><span style="color:#032F62;">always</span></span>
<span class="line"><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tke</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">tke</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ipam</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">default</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">config</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">subnet</span><span style="color:#24292E;">: </span><span style="color:#032F62;">172.16.1.0/24</span></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">sites</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">sites</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">local</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver_opts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">none</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">o</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bind</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#22863A;">device</span><span style="color:#24292E;">: </span><span style="color:#032F62;">site站点路径如：D:/tke/sites</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">local</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">local</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">local</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver_opts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">none</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">o</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bind</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#22863A;">device</span><span style="color:#24292E;">: </span><span style="color:#032F62;">local代码路径如：D:/tke/local</span></span></code></pre></div><p>以上配置仅包含 View 容器。完整配置请参考：<a href="/tke-view/compose.html">View Docker Compose</a></p><ul><li>site站点存放各个国家的配置文件，例如global,hk,china等。</li><li>对于 <a href="https://learn.microsoft.com/zh-cn/windows/wsl/" target="_blank" rel="noreferrer">WSL2</a> 运行模式，应该使用 linux 中的项目路径如：<code>/var/tke/local</code>。参考: <a href="https://docs.docker.com/desktop/windows/wsl/" target="_blank" rel="noreferrer">Docker Desktop WSL 2 backend on Windows</a></li></ul><p>2.打开终端工具，并切换到 <code>docker-compose.yml</code> 文件所在的目录。例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/Desktop/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/Desktop/</span></span></code></pre></div><p>3.创建并启动服务（<code>-d</code>参数可以让服务在后台运行）。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">tke</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">tke</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span></span></code></pre></div><p>4.验证服务是否创建成功。</p><p>访问本地站点: <a href="http://localhost" target="_blank" rel="noreferrer">http://localhost</a></p><div class="tip custom-block"><p class="custom-block-title">提示：</p><p>如果运行失败，请检查本机的80端口是否被占用。</p></div><h2 id="配置站点" tabindex="-1">配置站点 <a class="header-anchor" href="#配置站点" aria-label="Permalink to &quot;配置站点&quot;">​</a></h2><p>打开本机的 hosts 配置文件，并复制粘贴以下内容。</p><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Local站点</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       hk.local.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       china.local.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       global.local.test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Local站点</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       hk.local.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       china.local.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       global.local.test</span></span></code></pre></div><details class="details custom-block"><summary>配置Dev/Dev2/RC/Live等环境（可选）:</summary><div class="language-ini vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;"># Preview站点</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       hk.preview.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       china.preview.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       global.preview.test</span></span>
<span class="line"><span style="color:#6A737D;"># Dev2站点</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       hk.dev2.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       china.dev2.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       global.dev2.test</span></span>
<span class="line"><span style="color:#6A737D;"># RC站点</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       hk.rc.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       china.rc.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       global.rc.test</span></span>
<span class="line"><span style="color:#6A737D;"># Live站点</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       hk.live.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       china.live.test</span></span>
<span class="line"><span style="color:#E1E4E8;">127.0.0.1       global.live.test</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;"># Preview站点</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       hk.preview.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       china.preview.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       global.preview.test</span></span>
<span class="line"><span style="color:#6A737D;"># Dev2站点</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       hk.dev2.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       china.dev2.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       global.dev2.test</span></span>
<span class="line"><span style="color:#6A737D;"># RC站点</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       hk.rc.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       china.rc.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       global.rc.test</span></span>
<span class="line"><span style="color:#6A737D;"># Live站点</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       hk.live.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       china.live.test</span></span>
<span class="line"><span style="color:#24292E;">127.0.0.1       global.live.test</span></span></code></pre></div></details><h2 id="项目初始化" tabindex="-1">项目初始化 <a class="header-anchor" href="#项目初始化" aria-label="Permalink to &quot;项目初始化&quot;">​</a></h2><p>运行命令 <code>docker exec -it view /run/init.sh &lt;local|preview|dev2|rc|live&gt; &lt;8ID&gt;</code></p><p>以 local 环境为例:</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">exec</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-it</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">view</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">/run/init.sh</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">local</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">80000570</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">exec</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-it</span><span style="color:#24292E;"> </span><span style="color:#032F62;">view</span><span style="color:#24292E;"> </span><span style="color:#032F62;">/run/init.sh</span><span style="color:#24292E;"> </span><span style="color:#032F62;">local</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">80000570</span></span></code></pre></div><p>注意替换8ID，它将被用于站点的自动登录。</p><div class="warning custom-block"><p class="custom-block-title">警告：</p><p>以上操作会修改 <code>login.php</code>、<code>tke_config.php</code>、<code>error.phtml</code> 等核心文件，这些文件仅可用于本地开发，切勿提交版本库！</p></div><p>至此 Local 环境已经搭建好了，尝试访问: <a href="http://hk.local.test" target="_blank" rel="noreferrer">http://hk.local.test</a></p>`,27);function d(h,v,F,k,g,u){const n=p("Badge");return o(),e("div",null,[a("h1",E,[s("本地环境 "),c(n,{type:"tip",text:"v1.0.5"}),s(),i]),y])}const C=l(r,[["render",d]]);export{m as __pageData,C as default};
