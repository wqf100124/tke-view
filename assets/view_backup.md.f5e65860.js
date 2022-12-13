import{_ as s,c as a,o as n,a as l}from"./app.0e944977.js";const d=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[{"level":2,"title":"在Docker中下载并运行View镜像","slug":"在docker中下载并运行view镜像","link":"#在docker中下载并运行view镜像","children":[]}],"relativePath":"view/backup.md"}'),e={name:"view/backup.md"},p=l(`<h2 id="在docker中下载并运行view镜像" tabindex="-1">在Docker中下载并运行View镜像 <a class="header-anchor" href="#在docker中下载并运行view镜像" aria-hidden="true">#</a></h2><p>1.打开一个终端窗口</p><p>2.使用下面的 <code>docker network create</code> 命令在Docker中创建类型为 <code>bridge</code> 的网络:</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker network create --subnet=172.16.1.0/24 tke</span></span>
<span class="line"></span></code></pre></div><p>3.使用下面的 <code>docker run</code> 命令将其作为Docker中的容器运行:</p><p>Windows</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    --name view ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    --network tke ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    --ip 172.16.1.80 ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    --restart always ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 80:80 ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机local代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/local ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机preview代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/preview ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机dev2代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/dev2 ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机rc代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/rc ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机live代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/live ^</span></span>
<span class="line"><span style="color:#A6ACCD;">    rtwadewang/view:1.0.1</span></span>
<span class="line"></span></code></pre></div><p>MacOS/Linux</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --name view \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --network tke \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --ip 172.16.1.80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 80:80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机local代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/local \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机preview代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/preview \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机dev2代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/dev2 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机rc代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/rc \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">本机live代码目录</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">:/home/tke/live \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    rtwadewang/view:1.0.1</span></span>
<span class="line"></span></code></pre></div>`,9),o=[p];function c(t,r,C,A,D,i){return n(),a("div",null,o)}const v=s(e,[["render",c]]);export{d as __pageData,v as default};
