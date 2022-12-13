import{_ as e,c as s,o as a,a as r}from"./app.0e944977.js";const n="/tke-view/image/screenshots/docker/errors/1.png",u=JSON.parse('{"title":"常见问题","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.Windows系统运行Docker Desktop，启动Hyper-V实例失败","slug":"_1-windows系统运行docker-desktop-启动hyper-v实例失败","link":"#_1-windows系统运行docker-desktop-启动hyper-v实例失败","children":[{"level":3,"title":"解决方案A（如果Hyper-V完全禁用或未安装）","slug":"解决方案a-如果hyper-v完全禁用或未安装","link":"#解决方案a-如果hyper-v完全禁用或未安装","children":[]},{"level":3,"title":"解决方案B（如果已启用Hyper-V功能但不起作用）","slug":"解决方案b-如果已启用hyper-v功能但不起作用","link":"#解决方案b-如果已启用hyper-v功能但不起作用","children":[]}]}],"relativePath":"docker/question.md"}'),o={name:"docker/question.md"},t=r('<h1 id="常见问题" tabindex="-1">常见问题 <a class="header-anchor" href="#常见问题" aria-hidden="true">#</a></h1><h2 id="_1-windows系统运行docker-desktop-启动hyper-v实例失败" tabindex="-1">1.Windows系统运行Docker Desktop，启动Hyper-V实例失败 <a class="header-anchor" href="#_1-windows系统运行docker-desktop-启动hyper-v实例失败" aria-hidden="true">#</a></h2><p><img src="'+n+`" alt=""></p><p>原因：可能禁用了Hyper-V 或 未运行Hypervisor代理。</p><h3 id="解决方案a-如果hyper-v完全禁用或未安装" tabindex="-1">解决方案A（如果Hyper-V完全禁用或未安装） <a class="header-anchor" href="#解决方案a-如果hyper-v完全禁用或未安装" aria-hidden="true">#</a></h3><p>以管理员身份打开PowerShell，启用Hyper-V</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All</span></span>
<span class="line"></span></code></pre></div><h3 id="解决方案b-如果已启用hyper-v功能但不起作用" tabindex="-1">解决方案B（如果已启用Hyper-V功能但不起作用） <a class="header-anchor" href="#解决方案b-如果已启用hyper-v功能但不起作用" aria-hidden="true">#</a></h3><p>以管理员身份打开PowerShell，启用Hypervisor</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">bcdedit /set hypervisorlaunchtype auto</span></span>
<span class="line"></span></code></pre></div><p>重启系统即可。</p>`,11),p=[t];function i(l,c,d,h,_,y){return a(),s("div",null,p)}const k=e(o,[["render",i]]);export{u as __pageData,k as default};
