import{_ as a,c as s,o as e,a as n}from"./app.f8e37f6d.js";const A=JSON.parse('{"title":"Memcached","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668"}],"relativePath":"db/memcached.md"}'),c={name:"db/memcached.md"},l=n(`<h1 id="memcached" tabindex="-1">Memcached <a class="header-anchor" href="#memcached" aria-hidden="true">#</a></h1><h2 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --name memcached \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --ip 172.16.0.11 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -p 11211:11211 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -m 64 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    memcached:alpine</span></span>
<span class="line"></span></code></pre></div>`,3),p=[l];function t(r,o,d,i,h,_){return e(),s("div",null,p)}var C=a(c,[["render",t]]);export{A as __pageData,C as default};
