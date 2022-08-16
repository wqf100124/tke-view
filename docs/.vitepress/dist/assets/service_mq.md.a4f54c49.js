import{_ as a,c as s,o as e,a as n}from"./app.f8e37f6d.js";const A=JSON.parse('{"title":"MQ","description":"","frontmatter":{},"headers":[{"level":2,"title":"RabbitMQ","slug":"rabbitmq"},{"level":3,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668"}],"relativePath":"service/mq.md"}'),t={name:"service/mq.md"},l=n(`<h1 id="mq" tabindex="-1">MQ <a class="header-anchor" href="#mq" aria-hidden="true">#</a></h1><h2 id="rabbitmq" tabindex="-1">RabbitMQ <a class="header-anchor" href="#rabbitmq" aria-hidden="true">#</a></h2><h3 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --name rabbitmq \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  --ip 172.16.0.56 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 5672:5672 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  -p 15672:15672 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">  rabbitmq:3.9-management-alpine</span></span>
<span class="line"></span></code></pre></div>`,4),r=[l];function p(c,i,o,d,_,h){return e(),s("div",null,r)}var b=a(t,[["render",p]]);export{A as __pageData,b as default};
