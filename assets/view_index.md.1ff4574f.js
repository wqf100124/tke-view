import{_ as s,c as n,o as a,a as l}from"./app.523600ac.js";const A=JSON.parse('{"title":"\u672C\u5730\u73AF\u5883","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA View \u5BB9\u5668","slug":"\u521B\u5EFA-view-\u5BB9\u5668","link":"#\u521B\u5EFA-view-\u5BB9\u5668","children":[]},{"level":2,"title":"\u914D\u7F6E\u7AD9\u70B9","slug":"\u914D\u7F6E\u7AD9\u70B9","link":"#\u914D\u7F6E\u7AD9\u70B9","children":[]}],"relativePath":"view/index.md"}'),p={name:"view/index.md"},o=l(`<h1 id="\u672C\u5730\u73AF\u5883" tabindex="-1">\u672C\u5730\u73AF\u5883 <a class="header-anchor" href="#\u672C\u5730\u73AF\u5883" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA-view-\u5BB9\u5668" tabindex="-1">\u521B\u5EFA View \u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA-view-\u5BB9\u5668" aria-hidden="true">#</a></h2><p>1.\u5728\u672C\u5730\u521B\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>docker-compose.yml</code> \u7684\u6587\u4EF6\uFF0C\u5E76\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u5185\u5BB9\u3002</p><p>\u4EE5\u4E0B\u914D\u7F6E\u4EC5\u5305\u542B\u4E86 View \u5BB9\u5668\u3002\u5B8C\u6574\u914D\u7F6E\u8BF7\u53C2\u8003\uFF1A<a href="/tke-view/compose.html">View Docker Compose</a></p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">view</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">image</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">rtwadewang/view</span></span>
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
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">D:\\tke\\local</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">preview</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver_opts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span></span>
<span class="line highlighted"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">D:\\tke\\preview</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># dev2:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: dev2</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: D:\\tke\\dev2</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># rc:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: rc</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: D:\\tke\\rc</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># live:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: live</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line highlighted"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: D:\\tke\\live</span></span>
<span class="line"></span></code></pre></div><ul><li>\u6CE8\u610F\u66FF\u6362\u4EE3\u7801\u8DEF\u5F84\u3002</li><li>\u5BF9\u4E8E <a href="https://learn.microsoft.com/zh-cn/windows/wsl/" target="_blank" rel="noreferrer">WSL2</a> \u5F00\u53D1\u73AF\u5883\uFF0C\u5E94\u8BE5\u4F7F\u7528 linux \u4E2D\u7684\u9879\u76EE\u8DEF\u5F84\u5982\uFF1A<code>/var/tke/local</code>\u3002\u53C2\u8003: <a href="https://docs.docker.com/desktop/windows/wsl/" target="_blank" rel="noreferrer">Docker Desktop WSL 2 backend on Windows</a></li></ul><p>2.\u6253\u5F00\u7EC8\u7AEF\u5DE5\u5177\uFF0C\u5E76\u5207\u6362\u5230 <code>docker-compose.yml</code> \u6587\u4EF6\u6240\u5728\u7684\u76EE\u5F55\u3002\u4F8B\u5982\uFF1A</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Desktop/</span></span>
<span class="line"></span></code></pre></div><p>3.\u521B\u5EFA\u5E76\u542F\u52A8\u670D\u52A1\uFF08<code>-d</code>\u53C2\u6570\u53EF\u4EE5\u8BA9\u670D\u52A1\u5728\u540E\u53F0\u8FD0\u884C\uFF09\u3002</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker-compose -p tke up -d</span></span>
<span class="line"></span></code></pre></div><p>4.\u9A8C\u8BC1\u670D\u52A1\u662F\u5426\u521B\u5EFA\u6210\u529F\u3002</p><p>\u8BBF\u95EE\u672C\u5730\u7AD9\u70B9: <a href="http://localhost" target="_blank" rel="noreferrer">http://localhost</a></p><div class="tip custom-block"><p class="custom-block-title">\u63D0\u793A\uFF1A</p><p>\u5982\u679C\u8FD0\u884C\u5931\u8D25\uFF0C\u8BF7\u68C0\u67E5\u672C\u673A\u768480\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528\u3002</p></div><h2 id="\u914D\u7F6E\u7AD9\u70B9" tabindex="-1">\u914D\u7F6E\u7AD9\u70B9 <a class="header-anchor" href="#\u914D\u7F6E\u7AD9\u70B9" aria-hidden="true">#</a></h2><p>\u6253\u5F00\u672C\u673A\u7684 hosts \u914D\u7F6E\u6587\u4EF6\uFF0C\u5E76\u590D\u5236\u7C98\u8D34\u4EE5\u4E0B\u5185\u5BB9\u3002</p><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Local\u7AD9\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.local.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.local.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.local.test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Preview\u7AD9\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.preview.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.preview.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.preview.test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Dev2\u7AD9\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.dev2.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.dev2.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.dev2.test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># RC\u7AD9\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.rc.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.rc.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.rc.test</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># Live\u7AD9\u70B9</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       hk.live.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       china.live.test</span></span>
<span class="line"><span style="color:#A6ACCD;">127.0.0.1       global.live.test</span></span>
<span class="line"></span></code></pre></div><p>\u81F3\u6B64 Local \u73AF\u5883\u5DF2\u7ECF\u642D\u5EFA\u597D\u4E86\uFF0C\u5C1D\u8BD5\u8BBF\u95EE: <a href="http://hk.local.test" target="_blank" rel="noreferrer">http://hk.local.test</a></p>`,17),e=[o];function c(t,r,y,i,D,C){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
