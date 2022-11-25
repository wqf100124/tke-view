import{_ as s,c as n,o as a,a as l}from"./app.d6995509.js";const A=JSON.parse('{"title":"Docker Compose","description":"","frontmatter":{},"headers":[],"relativePath":"view/compose.md"}'),p={name:"view/compose.md"},o=l(`<h1 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a></h1><blockquote><p>\u4F7F\u7528 <a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">Docker Compose</a> \u5DE5\u5177\uFF0C\u53EF\u4EE5\u5FEB\u901F\u521B\u5EFAview\u5F00\u53D1\u73AF\u5883\u3002</p></blockquote><p>1.\u5728\u672C\u5730\u521B\u5EFA\u65B0\u7684 <code>view.yml</code> \u6587\u4EF6\uFF0C\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\uFF08\u6CE8\u610F\u66FF\u6362\u4EE3\u7801\u76EE\u5F55\uFF09\u3002</p><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
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
<span class="line"></span></code></pre></div><p>2.\u5728\u7EC8\u7AEF\u4E2D\u5207\u6362\u5230 <code>view.yml</code> \u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Desktop/</span></span>
<span class="line"></span></code></pre></div><p>3.\u8FD0\u884C\u547D\u4EE4\uFF08\u521B\u5EFA\u5BB9\u5668\u540C\u65F6\u5728\u540E\u53F0\u8FD0\u884C\uFF09</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker-compose -p view -f ./view.yml up -d</span></span>
<span class="line"></span></code></pre></div>`,8),e=[o];function c(t,r,D,y,F,i){return a(),n("div",null,e)}const d=s(p,[["render",c]]);export{A as __pageData,d as default};
