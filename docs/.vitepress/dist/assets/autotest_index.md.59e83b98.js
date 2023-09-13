import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.26d96b30.js";const u=JSON.parse('{"title":"搭建环境","description":"","frontmatter":{},"headers":[],"relativePath":"autotest/index.md","filePath":"autotest/index.md"}'),l={name:"autotest/index.md"},o=p(`<h1 id="搭建环境" tabindex="-1">搭建环境 <a class="header-anchor" href="#搭建环境" aria-label="Permalink to &quot;搭建环境&quot;">​</a></h1><p>1.在本地创建一个名为 <code>autotest.yml</code> 的文件，并复制粘贴以下内容。</p><div class="language-yaml vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">yaml</span><pre class="shiki github-dark has-highlighted-lines vp-code-dark"><code><span class="line"><span style="color:#85E89D;">version</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#85E89D;">services</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">selenium</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">selenium/standalone-edge</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">selenium</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">tke</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#85E89D;">ipv4_address</span><span style="color:#E1E4E8;">: </span><span style="color:#79B8FF;">172.16.1.44</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">environment</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">VNC_NO_PASSWORD=1</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">SE_NODE_MAX_SESSIONS=5</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ports</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;4444:4444&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">&quot;7900:7900&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">shm_size</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;2gb&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">autotest</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rtwadewang/autotest:1.0.3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">autotest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">tke</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">autotest:/home/tke/autotest</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">dev2:/home/tke/core</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">selenium</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">autotest-rc</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">container_name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">autotest-rc</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">image</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">rtwadewang/autotest:1.0.3</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">tke</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">autotest-rc:/home/tke/autotest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">depends_on</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      - </span><span style="color:#9ECBFF;">selenium</span></span>
<span class="line"><span style="color:#85E89D;">networks</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">tke</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">tke</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">ipam</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">default</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">config</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">        - </span><span style="color:#85E89D;">subnet</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">172.16.1.0/24</span></span>
<span class="line"><span style="color:#85E89D;">volumes</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">autotest</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">autotest</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">local</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver_opts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">o</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bind</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">device</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Dev2的Autotest目录</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">dev2</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">dev2</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">local</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver_opts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">o</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bind</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">device</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">Dev2的代码目录</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#85E89D;">autotest-rc</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">autotest-rc</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">local</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#85E89D;">driver_opts</span><span style="color:#E1E4E8;">:</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">type</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">none</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">o</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">bind</span></span>
<span class="line highlighted"><span style="color:#E1E4E8;">      </span><span style="color:#85E89D;">device</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">RC的Autotest目录</span></span></code></pre><pre class="shiki github-light has-highlighted-lines vp-code-light"><code><span class="line"><span style="color:#22863A;">version</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&quot;3&quot;</span></span>
<span class="line"><span style="color:#22863A;">services</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">selenium</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">selenium/standalone-edge</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">selenium</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">tke</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#22863A;">ipv4_address</span><span style="color:#24292E;">: </span><span style="color:#005CC5;">172.16.1.44</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">environment</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">VNC_NO_PASSWORD=1</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">SE_NODE_MAX_SESSIONS=5</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ports</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;4444:4444&quot;</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">&quot;7900:7900&quot;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">shm_size</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;2gb&#39;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">autotest</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rtwadewang/autotest:1.0.3</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">autotest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">tke</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">autotest:/home/tke/autotest</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">dev2:/home/tke/core</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">selenium</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">autotest-rc</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">container_name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">autotest-rc</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">image</span><span style="color:#24292E;">: </span><span style="color:#032F62;">rtwadewang/autotest:1.0.3</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">tke</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">autotest-rc:/home/tke/autotest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">depends_on</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      - </span><span style="color:#032F62;">selenium</span></span>
<span class="line"><span style="color:#22863A;">networks</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">tke</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">tke</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">ipam</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">default</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">config</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">        - </span><span style="color:#22863A;">subnet</span><span style="color:#24292E;">: </span><span style="color:#032F62;">172.16.1.0/24</span></span>
<span class="line"><span style="color:#22863A;">volumes</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">autotest</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">autotest</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">local</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver_opts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">none</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">o</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bind</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#22863A;">device</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Dev2的Autotest目录</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">dev2</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">dev2</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">local</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver_opts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">none</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">o</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bind</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#22863A;">device</span><span style="color:#24292E;">: </span><span style="color:#032F62;">Dev2的代码目录</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#22863A;">autotest-rc</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">autotest-rc</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver</span><span style="color:#24292E;">: </span><span style="color:#032F62;">local</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#22863A;">driver_opts</span><span style="color:#24292E;">:</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">type</span><span style="color:#24292E;">: </span><span style="color:#032F62;">none</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#22863A;">o</span><span style="color:#24292E;">: </span><span style="color:#032F62;">bind</span></span>
<span class="line highlighted"><span style="color:#24292E;">      </span><span style="color:#22863A;">device</span><span style="color:#24292E;">: </span><span style="color:#032F62;">RC的Autotest目录</span></span></code></pre></div><p>注意修改 <code>dev2</code> 和 <code>rc</code> 的代码目录</p><p>2.在终端中切换到 <code>autotest.yml</code> 文件所在的目录。例如：</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">cd</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">~/Desktop/</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">cd</span><span style="color:#24292E;"> </span><span style="color:#032F62;">~/Desktop/</span></span></code></pre></div><p>3.创建并启动服务。</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker-compose</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-p</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">autotest</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-f</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">./autotest.yml</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">up</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-d</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker-compose</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-p</span><span style="color:#24292E;"> </span><span style="color:#032F62;">autotest</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-f</span><span style="color:#24292E;"> </span><span style="color:#032F62;">./autotest.yml</span><span style="color:#24292E;"> </span><span style="color:#032F62;">up</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-d</span></span></code></pre></div><p>4.使用 <code>docker ps</code> 命令验证容器是否创建成功</p><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">$</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docker</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">ps</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">$</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docker</span><span style="color:#24292E;"> </span><span style="color:#032F62;">ps</span></span></code></pre></div>`,10),e=[o];function t(c,E,r,y,i,d){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{u as __pageData,h as default};
