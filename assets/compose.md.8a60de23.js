import{_ as s,c as n,o as a,a as l}from"./app.327dae30.js";const d=JSON.parse('{"title":"Docker Compose","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u73AF\u5883","slug":"\u521B\u5EFA\u73AF\u5883","link":"#\u521B\u5EFA\u73AF\u5883","children":[]},{"level":2,"title":"\u5E38\u7528\u547D\u4EE4","slug":"\u5E38\u7528\u547D\u4EE4","link":"#\u5E38\u7528\u547D\u4EE4","children":[]}],"relativePath":"compose.md"}'),p={name:"compose.md"},o=l(`<h1 id="docker-compose" tabindex="-1">Docker Compose <a class="header-anchor" href="#docker-compose" aria-hidden="true">#</a></h1><p>\u4F7F\u7528 <a href="https://docs.docker.com/compose/" target="_blank" rel="noreferrer">Docker Compose</a> \u5DE5\u5177\uFF0C\u53EF\u4EE5\u4E00\u6B21\u6027\u521B\u5EFA\u6240\u6709docker\u670D\u52A1\uFF0C\u4E00\u52B3\u6C38\u9038\u3002</p><h2 id="\u521B\u5EFA\u73AF\u5883" tabindex="-1">\u521B\u5EFA\u73AF\u5883 <a class="header-anchor" href="#\u521B\u5EFA\u73AF\u5883" aria-hidden="true">#</a></h2><p>1.\u5728\u672C\u5730\u521B\u5EFA\u65B0\u7684 <code>view.yml</code> \u6587\u4EF6\uFF0C\u5199\u5165\u4EE5\u4E0B\u5185\u5BB9\u3002</p><div class="tip custom-block"><p class="custom-block-title">\u6E29\u99A8\u63D0\u793A</p><p>1.\u6839\u636E\u4E1A\u52A1\u9700\u6C42\u4FEE\u6539\u914D\u7F6E\uFF0C\u9700\u8981\u542F\u7528\u7684\u670D\u52A1\uFF0C\u5728\u914D\u7F6E\u9879 <code>service</code> \u4E2D\u53BB\u6389\u5BF9\u5E94\u7684\u6CE8\u91CA\u5373\u53EF\u3002<br> 2.\u5728 <code>volumes</code> \u914D\u7F6E\u9879\u4E2D\u4FEE\u6539\u4EE3\u7801\u76EE\u5F55\u3002</p></div><div class="language-yaml"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki has-highlighted-lines"><code><span class="line"><span style="color:#F07178;">version</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">3</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line highlighted"><span style="color:#F07178;">services</span><span style="color:#89DDFF;">:</span></span>
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
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># selenium:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   image: selenium/standalone-edge</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   container_name: selenium</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   networks:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     tke:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#       ipv4_address: 172.16.1.44</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   environment:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - VNC_NO_PASSWORD=1</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - SE_NODE_MAX_SESSIONS=5</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   ports:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - &quot;4444:4444&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - &quot;7900:7900&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># autotest:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   image: rtwadewang/autotest</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   container_name: autotest</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   networks:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - tke</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   volumes:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - dev2:/home/tke/code</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   depends_on:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - selenium</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># autotest-rc:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   container_name: autotest-rc</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   image: rtwadewang/autotest</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   networks:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - tke</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   volumes:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - rc:/home/tke/code</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   depends_on:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - selenium</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># rabbitmq:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   image: rabbitmq:3.9-management-alpine</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   container_name: rabbitmq</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   networks:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     tke:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#       ipv4_address: 172.16.1.56</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   ports:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - &quot;5672:5672&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - &quot;15672:15672&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># solr:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   image: solr</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   container_name: solr</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   command: solr-precreate view</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   networks:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     tke:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#       ipv4_address: 172.16.1.89</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   ports:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     - &quot;8983:8983&quot;</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span></span>
<span class="line"><span style="color:#F07178;">networks</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">tke</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">tke</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">ipam</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">default</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">config</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">-</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">subnet</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">172.16.1.0/24</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F07178;">volumes</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">local</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver_opts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">D:\\tke\\local</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">preview</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">preview</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">local</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">driver_opts</span><span style="color:#89DDFF;">:</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">type</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">none</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">o</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">bind</span></span>
<span class="line"><span style="color:#A6ACCD;">      </span><span style="color:#F07178;">device</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">D:\\tke\\preview</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># dev2:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: dev2</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: D:\\tke\\dev2</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># rc:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: rc</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: D:\\tke\\rc</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;"># live:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   name: live</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver: local</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#   driver_opts:</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     type: none</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     o: bind</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">#     device: D:\\tke\\live</span></span>
<span class="line"></span></code></pre></div><p><code>autotest</code> \u548C <code>autotest-rc</code> \u5BB9\u5668\u4F9D\u8D56\u4E8E <code>selenium</code> \u5BB9\u5668</p><p>2.\u5728\u7EC8\u7AEF\u4E2D\u5207\u6362\u5230 <code>view.yml</code> \u6587\u4EF6\u6240\u5728\u76EE\u5F55\uFF0C\u4F8B\u5982\uFF1A</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ </span><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/Desktop/</span></span>
<span class="line"></span></code></pre></div><p>3.\u8FD0\u884C\u547D\u4EE4\uFF08\u521B\u5EFA\u5BB9\u5668\u540C\u65F6\u5728\u540E\u53F0\u8FD0\u884C\uFF09</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker-compose -p view -f ./view.yml up -d</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5E38\u7528\u547D\u4EE4" tabindex="-1">\u5E38\u7528\u547D\u4EE4 <a class="header-anchor" href="#\u5E38\u7528\u547D\u4EE4" aria-hidden="true">#</a></h2><p>\u67E5\u770B\u6B63\u5728\u8FD0\u884C\u7684\u5BB9\u5668</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker compose ps</span></span>
<span class="line"></span></code></pre></div><p>\u505C\u6B62\u670D\u52A1</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker compose stop</span></span>
<span class="line"></span></code></pre></div><p>\u5220\u9664\u5BB9\u5668</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker compose down</span></span>
<span class="line"></span></code></pre></div><p>\u5220\u9664\u5BB9\u5668\u540C\u65F6\u6E05\u9664\u6570\u636E</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker compose down --volumes</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u66F4\u591A\u53EF\u7528\u547D\u4EE4</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker compose --help</span></span>
<span class="line"></span></code></pre></div>`,22),e=[o];function c(t,r,y,D,i,F){return a(),n("div",null,e)}const A=s(p,[["render",c]]);export{d as __pageData,A as default};
