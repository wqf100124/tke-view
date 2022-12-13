import{_ as s,c as n,o as a,a as l}from"./app.0e944977.js";const A=JSON.parse('{"title":"本地环境","description":"","frontmatter":{},"headers":[{"level":2,"title":"创建 View 容器","slug":"创建-view-容器","link":"#创建-view-容器","children":[]},{"level":2,"title":"配置站点","slug":"配置站点","link":"#配置站点","children":[]}],"relativePath":"view/index.md"}'),p={name:"view/index.md"},o=l(`<h1 id="本地环境" tabindex="-1">本地环境 <a class="header-anchor" href="#本地环境" aria-hidden="true">#</a></h1><h2 id="创建-view-容器" tabindex="-1">创建 View 容器 <a class="header-anchor" href="#创建-view-容器" aria-hidden="true">#</a></h2><p>1.在本地创建一个名为 <code>docker-compose.yml</code> 的文件，并复制粘贴以下内容。</p><p>以下配置仅包含了 View 容器。完整配置请参考：<a href="/tke-view/compose.html">View Docker Compose</a></p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rtwadewang/view:1.0.1</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">container_name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">view</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local:/home/tke/local</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview:/home/tke/preview</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># - dev2:/home/tke/dev2</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># - rc:/home/tke/rc</span></span>
<span class="line"><span style="color:#89DDFF;">      </span><span style="color:#676E95;"># - live:/home/tke/live</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">tke</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">ipv4_address</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">172.16.1.80</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ports</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">80:80</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">restart</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">always</span></span>
<span class="line"><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tke</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tke</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ipam</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">subnet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">172.16.1.0/24</span></span>
<span class="line"><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">local</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver_opts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local代码路径</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">preview</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver_opts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dev代码路径</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># dev2:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: dev2</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: dev2代码路径</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># rc:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: rc</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: rc代码路径</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># live:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: live</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: live代码路径</span></span>
<span class="line"></span></code></pre></div><ul><li>注意替换代码路径。</li><li>对于 <a href="https://learn.microsoft.com/zh-cn/windows/wsl/" target="_blank" rel="noreferrer">WSL2</a> 开发环境，应该使用 linux 中的项目路径如：<code>/var/tke/local</code>。参考: <a href="https://docs.docker.com/desktop/windows/wsl/" target="_blank" rel="noreferrer">Docker Desktop WSL 2 backend on Windows</a></li></ul><p>2.打开终端工具，并切换到 <code>docker-compose.yml</code> 文件所在的目录。例如：</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Desktop/</span></span>
<span class="line"></span></code></pre></div><p>3.创建并启动服务（<code>-d</code>参数可以让服务在后台运行）。</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker-compose -p tke up -d</span></span>
<span class="line"></span></code></pre></div><p>4.验证服务是否创建成功。</p><p>访问本地站点: <a href="http://localhost" target="_blank" rel="noreferrer">http://localhost</a></p><div class="tip custom-block"><p class="custom-block-title">提示：</p><p>如果运行失败，请检查本机的80端口是否被占用。</p></div><h2 id="配置站点" tabindex="-1">配置站点 <a class="header-anchor" href="#配置站点" aria-hidden="true">#</a></h2><p>打开本机的 hosts 配置文件，并复制粘贴以下内容。</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Local站点</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.local.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.local.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.local.test</span></span>
<span class="line"><span style="color:#676E95;"># Preview站点</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.preview.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.preview.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.preview.test</span></span>
<span class="line"><span style="color:#676E95;"># Dev2站点</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.dev2.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.dev2.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.dev2.test</span></span>
<span class="line"><span style="color:#676E95;"># RC站点</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.rc.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.rc.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.rc.test</span></span>
<span class="line"><span style="color:#676E95;"># Live站点</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.live.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.live.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.live.test</span></span>
<span class="line"></span></code></pre></div><p>至此 Local 环境已经搭建好了，尝试访问: <a href="http://hk.local.test" target="_blank" rel="noreferrer">http://hk.local.test</a></p>`,17),e=[o];function c(t,r,y,i,D,C){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
