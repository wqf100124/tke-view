import{_ as a,c as s,o as e,a as n}from"./app.f8e37f6d.js";const C=JSON.parse('{"title":"PHP\u5F00\u53D1\u73AF\u5883","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6784\u5EFA\u955C\u50CF","slug":"\u6784\u5EFA\u955C\u50CF"},{"level":2,"title":"\u521B\u5EFA\u7F51\u7EDC","slug":"\u521B\u5EFA\u7F51\u7EDC"},{"level":2,"title":"\u8FD0\u884C\u5BB9\u5668","slug":"\u8FD0\u884C\u5BB9\u5668"},{"level":3,"title":"nginx","slug":"nginx"},{"level":2,"title":"Laravel Octane","slug":"laravel-octane"}],"relativePath":"dev/php.md"}'),p={name:"dev/php.md"},l=n(`<h1 id="php\u5F00\u53D1\u73AF\u5883" tabindex="-1">PHP\u5F00\u53D1\u73AF\u5883 <a class="header-anchor" href="#php\u5F00\u53D1\u73AF\u5883" aria-hidden="true">#</a></h1><p>\u5305\u542B\u8F6F\u4EF6</p><ul><li>nginx</li><li>php</li><li>composer</li><li>npm</li></ul><h2 id="\u6784\u5EFA\u955C\u50CF" tabindex="-1">\u6784\u5EFA\u955C\u50CF <a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a></h2><p>php8.1</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/dev:php8.1 -t wangqifei/dev:latest --no-cache ./dev</span></span>
<span class="line"></span></code></pre></div><p>php8.0</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/dev:php8.0 --build-arg version=8.0 --no-cache ./dev</span></span>
<span class="line"></span></code></pre></div><p>php7.4</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/dev:php7.4 --build-arg version=7.4 --no-cache ./dev</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u7F51\u7EDC" tabindex="-1">\u521B\u5EFA\u7F51\u7EDC <a class="header-anchor" href="#\u521B\u5EFA\u7F51\u7EDC" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker network create --subnet=172.16.0.0/24 web</span></span>
<span class="line"></span></code></pre></div><h2 id="\u8FD0\u884C\u5BB9\u5668" tabindex="-1">\u8FD0\u884C\u5BB9\u5668 <a class="header-anchor" href="#\u8FD0\u884C\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name dev \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-p 80:80 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/web/project:/var/web/project \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/web/service/nginx/conf.d:/etc/nginx/conf.d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">wangqifei/dev</span></span>
<span class="line"></span></code></pre></div><h3 id="nginx" tabindex="-1">nginx <a class="header-anchor" href="#nginx" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> web nginx -s {stop</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">quit</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">reopen</span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;">reload}</span></span>
<span class="line"></span></code></pre></div><h2 id="laravel-octane" tabindex="-1">Laravel Octane <a class="header-anchor" href="#laravel-octane" aria-hidden="true">#</a></h2><p>\u5B89\u88C5\u4F9D\u8D56</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ npm install --save-dev chokidar</span></span>
<span class="line"></span></code></pre></div><p>\u4EE3\u7801\u70ED\u52A0\u8F7D</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ php artisan octane:start --server=swoole --host=0.0.0.0 --port=8000 --watch</span></span>
<span class="line"></span></code></pre></div>`,21),c=[l];function o(r,i,t,d,h,v){return e(),s("div",null,c)}var g=a(p,[["render",o]]);export{C as __pageData,g as default};
