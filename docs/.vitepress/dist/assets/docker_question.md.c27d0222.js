import{_ as e,c as s,o as a,a as r}from"./app.55f9ca84.js";const n="/tke-view/image/screenshots/docker/errors/1.png",u=JSON.parse('{"title":"\u5E38\u89C1\u95EE\u9898","description":"","frontmatter":{},"headers":[{"level":2,"title":"1.Windows\u7CFB\u7EDF\u8FD0\u884CDocker Desktop\uFF0C\u542F\u52A8Hyper-V\u5B9E\u4F8B\u5931\u8D25","slug":"_1-windows\u7CFB\u7EDF\u8FD0\u884Cdocker-desktop-\u542F\u52A8hyper-v\u5B9E\u4F8B\u5931\u8D25","link":"#_1-windows\u7CFB\u7EDF\u8FD0\u884Cdocker-desktop-\u542F\u52A8hyper-v\u5B9E\u4F8B\u5931\u8D25","children":[{"level":3,"title":"\u89E3\u51B3\u65B9\u6848A\uFF08\u5982\u679CHyper-V\u5B8C\u5168\u7981\u7528\u6216\u672A\u5B89\u88C5\uFF09","slug":"\u89E3\u51B3\u65B9\u6848a-\u5982\u679Chyper-v\u5B8C\u5168\u7981\u7528\u6216\u672A\u5B89\u88C5","link":"#\u89E3\u51B3\u65B9\u6848a-\u5982\u679Chyper-v\u5B8C\u5168\u7981\u7528\u6216\u672A\u5B89\u88C5","children":[]},{"level":3,"title":"\u89E3\u51B3\u65B9\u6848B\uFF08\u5982\u679C\u5DF2\u542F\u7528Hyper-V\u529F\u80FD\u4F46\u4E0D\u8D77\u4F5C\u7528\uFF09","slug":"\u89E3\u51B3\u65B9\u6848b-\u5982\u679C\u5DF2\u542F\u7528hyper-v\u529F\u80FD\u4F46\u4E0D\u8D77\u4F5C\u7528","link":"#\u89E3\u51B3\u65B9\u6848b-\u5982\u679C\u5DF2\u542F\u7528hyper-v\u529F\u80FD\u4F46\u4E0D\u8D77\u4F5C\u7528","children":[]}]}],"relativePath":"docker/question.md"}'),o={name:"docker/question.md"},t=r('<h1 id="\u5E38\u89C1\u95EE\u9898" tabindex="-1">\u5E38\u89C1\u95EE\u9898 <a class="header-anchor" href="#\u5E38\u89C1\u95EE\u9898" aria-hidden="true">#</a></h1><h2 id="_1-windows\u7CFB\u7EDF\u8FD0\u884Cdocker-desktop-\u542F\u52A8hyper-v\u5B9E\u4F8B\u5931\u8D25" tabindex="-1">1.Windows\u7CFB\u7EDF\u8FD0\u884CDocker Desktop\uFF0C\u542F\u52A8Hyper-V\u5B9E\u4F8B\u5931\u8D25 <a class="header-anchor" href="#_1-windows\u7CFB\u7EDF\u8FD0\u884Cdocker-desktop-\u542F\u52A8hyper-v\u5B9E\u4F8B\u5931\u8D25" aria-hidden="true">#</a></h2><p><img src="'+n+`" alt=""></p><p>\u539F\u56E0\uFF1A\u53EF\u80FD\u7981\u7528\u4E86Hyper-V \u6216 \u672A\u8FD0\u884CHypervisor\u4EE3\u7406\u3002</p><h3 id="\u89E3\u51B3\u65B9\u6848a-\u5982\u679Chyper-v\u5B8C\u5168\u7981\u7528\u6216\u672A\u5B89\u88C5" tabindex="-1">\u89E3\u51B3\u65B9\u6848A\uFF08\u5982\u679CHyper-V\u5B8C\u5168\u7981\u7528\u6216\u672A\u5B89\u88C5\uFF09 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848a-\u5982\u679Chyper-v\u5B8C\u5168\u7981\u7528\u6216\u672A\u5B89\u88C5" aria-hidden="true">#</a></h3><p>\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u6253\u5F00PowerShell\uFF0C\u542F\u7528Hyper-V</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dism.exe /Online /Enable-Feature:Microsoft-Hyper-V /All</span></span>
<span class="line"></span></code></pre></div><h3 id="\u89E3\u51B3\u65B9\u6848b-\u5982\u679C\u5DF2\u542F\u7528hyper-v\u529F\u80FD\u4F46\u4E0D\u8D77\u4F5C\u7528" tabindex="-1">\u89E3\u51B3\u65B9\u6848B\uFF08\u5982\u679C\u5DF2\u542F\u7528Hyper-V\u529F\u80FD\u4F46\u4E0D\u8D77\u4F5C\u7528\uFF09 <a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6848b-\u5982\u679C\u5DF2\u542F\u7528hyper-v\u529F\u80FD\u4F46\u4E0D\u8D77\u4F5C\u7528" aria-hidden="true">#</a></h3><p>\u4EE5\u7BA1\u7406\u5458\u8EAB\u4EFD\u6253\u5F00PowerShell\uFF0C\u542F\u7528Hypervisor</p><div class="language-sh"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">bcdedit /set hypervisorlaunchtype auto</span></span>
<span class="line"></span></code></pre></div><p>\u91CD\u542F\u7CFB\u7EDF\u5373\u53EF\u3002</p>`,11),p=[t];function i(l,c,d,h,_,y){return a(),s("div",null,p)}const k=e(o,[["render",i]]);export{u as __pageData,k as default};
