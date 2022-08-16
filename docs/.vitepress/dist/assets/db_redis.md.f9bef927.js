import{_ as s,c as a,o as e,a as n}from"./app.f8e37f6d.js";const C=JSON.parse('{"title":"Redis","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668"}],"relativePath":"db/redis.md"}'),r={name:"db/redis.md"},l=n(`<h1 id="redis" tabindex="-1">Redis <a class="header-anchor" href="#redis" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --name redis \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --ip 172.16.0.63 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 6379:6379 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    redis:alpine</span></span>
<span class="line"></span></code></pre></div>`,3),p=[l];function t(c,i,o,d,_,h){return e(),a("div",null,p)}var u=s(r,[["render",t]]);export{C as __pageData,u as default};
