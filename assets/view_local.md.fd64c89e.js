import{_ as s,c as a,o as n,a as l}from"./app.f41101da.js";const d=JSON.parse('{"title":"Local\u73AF\u5883","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u670D\u52A1","slug":"\u521B\u5EFA\u670D\u52A1","link":"#\u521B\u5EFA\u670D\u52A1","children":[]},{"level":2,"title":"\u914D\u7F6E\u7AD9\u70B9","slug":"\u914D\u7F6E\u7AD9\u70B9","link":"#\u914D\u7F6E\u7AD9\u70B9","children":[]}],"relativePath":"view/local.md"}'),e={name:"view/local.md"},p=l(`<h1 id="local\u73AF\u5883" tabindex="-1">Local\u73AF\u5883 <a class="header-anchor" href="#local\u73AF\u5883" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u670D\u52A1" tabindex="-1">\u521B\u5EFA\u670D\u52A1 <a class="header-anchor" href="#\u521B\u5EFA\u670D\u52A1" aria-hidden="true">#</a></h2><p>1.\u6253\u5F00\u4E00\u4E2A\u7EC8\u7AEF\u7A97\u53E3</p><p>2.\u4F7F\u7528\u4E0B\u9762\u7684 <code>docker network create</code> \u547D\u4EE4\u5728Docker\u4E2D\u521B\u5EFA\u7C7B\u578B\u4E3A <code>bridge</code> \u7684\u7F51\u7EDC:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker network create --subnet=172.16.1.0/24 tke</span></span>
<span class="line"></span></code></pre></div><p>3.\u4F7F\u7528\u4E0B\u9762\u7684 <code>docker run</code> \u547D\u4EE4\u5C06\u5176\u4F5C\u4E3ADocker\u4E2D\u7684\u5BB9\u5668\u8FD0\u884C:</p><p>Windows</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name view ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  --network tke ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  --ip 172.16.1.80 ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  --restart always ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 80:80 ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Alocal\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/view ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Apreview\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/preview ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Adev2\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/dev2 ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Arc\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/rc ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Alive\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/live ^</span></span>
<span class="line"><span style="color:#A6ACCD;">  rtwadewang/view</span></span>
<span class="line"></span></code></pre></div><p>MacOS/Linux</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name view \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --network tke \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --ip 172.16.1.80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 80:80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Alocal\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/view \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Apreview\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/preview \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Adev2\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/dev2 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Arc\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/rc \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">\u672C\u673Alive\u4EE3\u7801\u76EE\u5F55</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/live \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  rtwadewang/view</span></span>
<span class="line"></span></code></pre></div><p>4.\u6D4B\u8BD5\u5BB9\u5668\u662F\u5426\u521B\u5EFA\u6210\u529F</p><p>\u5C1D\u8BD5\u8BBF\u95EE: <a href="http://localhost" target="_blank" rel="noreferrer">http://localhost</a></p><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>\u5982\u679C\u8FD0\u884C\u5931\u8D25\uFF0C\u68C0\u67E5\u672C\u673A\u768480\u7AEF\u53E3\u662F\u5426\u88AB\u5360\u7528\u3002<br> \u5BF9\u4E8EWSL2\u5F00\u53D1\u73AF\u5883\uFF0C\u5E94\u8BE5\u4F7F\u7528 linux \u4E2D\u7684\u9879\u76EE\u8DEF\u5F84\u5982\uFF1A<code>/var/web/local</code>\uFF0C\u53C2\u8003: <a href="https://docs.docker.com/desktop/windows/wsl/" target="_blank" rel="noreferrer">Docker Desktop WSL 2 backend on Windows</a></p></div><h2 id="\u914D\u7F6E\u7AD9\u70B9" tabindex="-1">\u914D\u7F6E\u7AD9\u70B9 <a class="header-anchor" href="#\u914D\u7F6E\u7AD9\u70B9" aria-hidden="true">#</a></h2><div class="language-ini"><button title="Copy Code" class="copy"></button><span class="lang">ini</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Local\u7AD9\u70B9</span></span>
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
<span class="line"></span></code></pre></div><p>\u81F3\u6B64Local\u73AF\u5883\u5DF2\u7ECF\u642D\u5EFA\u597D\u4E86\uFF0C\u5C1D\u8BD5\u8BBF\u95EE: <a href="http://hk.local.test" target="_blank" rel="noreferrer">http://hk.local.test</a></p>`,16),o=[p];function t(c,r,i,C,A,D){return n(),a("div",null,o)}const h=s(e,[["render",t]]);export{d as __pageData,h as default};
