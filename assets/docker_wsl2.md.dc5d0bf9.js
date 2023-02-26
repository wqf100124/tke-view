import{_ as s,c as a,o as e,a as n}from"./app.0dad63c0.js";const y=JSON.parse('{"title":"基于 WSL2 的 Docker 环境","description":"","frontmatter":{},"headers":[{"level":2,"title":"Docker","slug":"docker","link":"#docker","children":[]},{"level":2,"title":"WSL2","slug":"wsl2","link":"#wsl2","children":[{"level":3,"title":"常用命令","slug":"常用命令","link":"#常用命令","children":[]}]},{"level":2,"title":"Linux","slug":"linux","link":"#linux","children":[{"level":3,"title":"Alpine","slug":"alpine","link":"#alpine","children":[]},{"level":3,"title":"Ubuntu","slug":"ubuntu","link":"#ubuntu","children":[]},{"level":3,"title":"Centos","slug":"centos","link":"#centos","children":[]}]}],"relativePath":"docker/wsl2.md"}'),l={name:"docker/wsl2.md"},p=n(`<h1 id="基于-wsl2-的-docker-环境" tabindex="-1">基于 WSL2 的 Docker 环境 <a class="header-anchor" href="#基于-wsl2-的-docker-环境" aria-hidden="true">#</a></h1><h2 id="docker" tabindex="-1">Docker <a class="header-anchor" href="#docker" aria-hidden="true">#</a></h2><p>下载安装包: <a href="https://www.docker.com/get-started" target="_blank" rel="noreferrer">Docker Desktop (Windows/MacOs/Linux)</a></p><h2 id="wsl2" tabindex="-1">WSL2 <a class="header-anchor" href="#wsl2" aria-hidden="true">#</a></h2><p>请参考官方文档：<a href="https://docs.microsoft.com/zh-cn/windows/wsl/setup/environment" title="设置 WSL 开发环境的最佳做法" target="_blank" rel="noreferrer">WSL 2 (Linux 的 Windows 子系统)</a></p><p>将 WSL2 设置为默认版本</p><div class="language-"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#A6ACCD;">wsl --set-default-version 2</span></span>
<span class="line"><span style="color:#A6ACCD;"></span></span></code></pre></div><h3 id="常用命令" tabindex="-1">常用命令 <a class="header-anchor" href="#常用命令" aria-hidden="true">#</a></h3><p>参考：<a href="https://docs.microsoft.com/zh-cn/windows/wsl/reference" target="_blank" rel="noreferrer">官方手册</a></p><p>查看运行中的系统</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-l</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--running</span></span>
<span class="line"></span></code></pre></div><p>启动</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alpine</span></span>
<span class="line"></span></code></pre></div><p>停止</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-t</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alpine</span></span>
<span class="line"></span></code></pre></div><p>移除</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--unregister</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alpine</span></span>
<span class="line"></span></code></pre></div><h2 id="linux" tabindex="-1">Linux <a class="header-anchor" href="#linux" aria-hidden="true">#</a></h2><h3 id="alpine" tabindex="-1">Alpine <a class="header-anchor" href="#alpine" aria-hidden="true">#</a></h3><blockquote><p><a href="https://www.alpinelinux.org/" target="_blank" rel="noreferrer">Alpine</a> 操作系统是一个面向安全的轻型 Linux 发行版。它不同于通常 Linux 发行版，Alpine 采用了 musl libc 和 busybox 以减小系统的体积和运行时资源消耗，但功能上又比 busybox 完善的多，因此得到开源社区越来越多的青睐。</p></blockquote><h4 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-hidden="true">#</a></h4><p>方式一：</p><p>在 Windows 应用商店中搜索 Alpine WSL 并安装。</p><p>方式二：</p><p>打开 <a href="https://alpinelinux.org/downloads/" target="_blank" rel="noreferrer">官方下载地址</a> ，选择 <code>MINI ROOT FILESYSTEM</code> =&gt; <code>x86_64</code> 类型的版本包，下载到本机。</p><p>示例：<a href="https://dl-cdn.alpinelinux.org/alpine/v3.15/releases/x86_64/alpine-minirootfs-3.15.0-x86_64.tar.gz" target="_blank" rel="noreferrer">https://dl-cdn.alpinelinux.org/alpine/v3.15/releases/x86_64/alpine-minirootfs-3.15.0-x86_64.tar.gz</a></p><p>导入该镜像</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--import</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alpine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">D:</span><span style="color:#A6ACCD;">\\w</span><span style="color:#C3E88D;">sl</span><span style="color:#A6ACCD;">\\a</span><span style="color:#C3E88D;">lpine</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">./alpine-minirootfs-3.14.0-x86_64.tar.gz</span></span>
<span class="line"></span></code></pre></div><h4 id="运行" tabindex="-1">运行 <a class="header-anchor" href="#运行" aria-hidden="true">#</a></h4><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">wsl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">alpine</span></span>
<span class="line"></span></code></pre></div><h4 id="配置" tabindex="-1">配置 <a class="header-anchor" href="#配置" aria-hidden="true">#</a></h4><p>1.安装glibc扩展，参考文档: <a href="https://github.com/sgerrand/alpine-pkg-glibc" target="_blank" rel="noreferrer">alpine-pkg-glibc</a></p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#82AAFF;">cd</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/tmp</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-q</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-O</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/apk/keys/sgerrand.rsa.pub</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://alpine-pkgs.sgerrand.com/sgerrand.rsa.pub</span></span>
<span class="line"><span style="color:#FFCB6B;">wget</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/sgerrand/alpine-pkg-glibc/releases/download/</span><span style="color:#F78C6C;">2.33</span><span style="color:#C3E88D;">-r0/glibc-</span><span style="color:#F78C6C;">2.33</span><span style="color:#C3E88D;">-r0.apk</span></span>
<span class="line"><span style="color:#FFCB6B;">apk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">glibc-</span><span style="color:#F78C6C;">2.33</span><span style="color:#C3E88D;">-r0.apk</span></span>
<span class="line"></span></code></pre></div><p>2.在 Docker 面板中打开 alpine 开关，重启！</p><h4 id="加速" tabindex="-1">加速 <a class="header-anchor" href="#加速" aria-hidden="true">#</a></h4><p>替换国内源并更新依赖包</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">sed</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">s/dl-cdn.alpinelinux.org/mirrors.cloud.tencent.com/g</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">/etc/apk/repositories</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&amp;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">apk</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">update</span></span>
<span class="line"></span></code></pre></div><h4 id="验证" tabindex="-1">验证 <a class="header-anchor" href="#验证" aria-hidden="true">#</a></h4><p>输入以下命令验证 docker 是否配置成功</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki material-theme-palenight" tabindex="0"><code><span class="line"><span style="color:#FFCB6B;">docker</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ps</span></span>
<span class="line"></span></code></pre></div><h3 id="ubuntu" tabindex="-1">Ubuntu <a class="header-anchor" href="#ubuntu" aria-hidden="true">#</a></h3><p>1.在 Windows 应用商店中搜索 Ubuntu20.04 并安装。</p><p>2.在 Docker 面板中打开 Ubuntu20.04 开关，重启即可！</p><h3 id="centos" tabindex="-1">Centos <a class="header-anchor" href="#centos" aria-hidden="true">#</a></h3><p>待完善...</p>`,45),o=[p];function t(r,c,i,d,h,C){return e(),a("div",null,o)}const g=s(l,[["render",t]]);export{y as __pageData,g as default};
