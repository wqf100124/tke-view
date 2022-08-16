import{_ as s,c as a,o as n,a as l}from"./app.f8e37f6d.js";const d=JSON.parse('{"title":"Laravel Octane","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6784\u5EFA\u955C\u50CF","slug":"\u6784\u5EFA\u955C\u50CF"},{"level":3,"title":"php8.1","slug":"php8-1"},{"level":3,"title":"php8.0","slug":"php8-0"},{"level":2,"title":"\u5B89\u88C5\u4F9D\u8D56","slug":"\u5B89\u88C5\u4F9D\u8D56"},{"level":2,"title":"\u521B\u5EFA\u5BB9\u5668","slug":"\u521B\u5EFA\u5BB9\u5668"},{"level":2,"title":"Nginx\u914D\u7F6E","slug":"nginx\u914D\u7F6E"},{"level":3,"title":"HTTP","slug":"http"}],"relativePath":"prod/octane.md"}'),p={name:"prod/octane.md"},e=l(`<h1 id="laravel-octane" tabindex="-1">Laravel Octane <a class="header-anchor" href="#laravel-octane" aria-hidden="true">#</a></h1><h2 id="\u6784\u5EFA\u955C\u50CF" tabindex="-1">\u6784\u5EFA\u955C\u50CF <a class="header-anchor" href="#\u6784\u5EFA\u955C\u50CF" aria-hidden="true">#</a></h2><h3 id="php8-1" tabindex="-1">php8.1 <a class="header-anchor" href="#php8-1" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/octane:php8.1 -t wangqifei/octane:latest --no-cache ./prod/php/octane</span></span>
<span class="line"></span></code></pre></div><h3 id="php8-0" tabindex="-1">php8.0 <a class="header-anchor" href="#php8-0" aria-hidden="true">#</a></h3><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker build -t wangqifei/octane:php8.0 --build-arg version=8.0 --no-cache ./prod/php/octane</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5\u4F9D\u8D56" tabindex="-1">\u5B89\u88C5\u4F9D\u8D56 <a class="header-anchor" href="#\u5B89\u88C5\u4F9D\u8D56" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ composer require laravel/octane</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">$ php artisan octane:install</span></span>
<span class="line"></span></code></pre></div><p>\u9ED8\u8BA4\u4F7F\u7528swoole\uFF0C\u5982\u679C\u8981\u4F7F\u7528roadrunner\uFF0C\u66FF\u6362supervisor\u547D\u4EE4</p><div class="language-ini"><span class="copy"></span><pre><code><span class="line"><span style="color:#F07178;">command</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">/usr/bin/php -d </span><span style="color:#F07178;">variables_order</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">EGPCS /var/web/project/app/artisan octane:start --</span><span style="color:#F07178;">server</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">roadrunner --</span><span style="color:#F07178;">host</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">0.0.0.0 --</span><span style="color:#F07178;">rpc-port</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">6001 --</span><span style="color:#F07178;">port</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">8000</span></span>
<span class="line"></span></code></pre></div><h2 id="\u521B\u5EFA\u5BB9\u5668" tabindex="-1">\u521B\u5EFA\u5BB9\u5668 <a class="header-anchor" href="#\u521B\u5EFA\u5BB9\u5668" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">$ docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--name app \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">--restart always \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/web/project/app:/var/web/project/app \\</span></span>
<span class="line"><span style="color:#A6ACCD;">-v /var/web/service/supervisor:/etc/supervisor/conf.d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">wangqifei/octane</span></span>
<span class="line"></span></code></pre></div><h2 id="nginx\u914D\u7F6E" tabindex="-1">Nginx\u914D\u7F6E <a class="header-anchor" href="#nginx\u914D\u7F6E" aria-hidden="true">#</a></h2><h3 id="http" tabindex="-1">HTTP <a class="header-anchor" href="#http" aria-hidden="true">#</a></h3><div class="language-ini"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      443 ssl http2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name                 example.com</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate             /etc/nginx/conf.d/ssl/example.com.pem</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key         /etc/nginx/conf.d/ssl/example.com.key</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_protocols               TLSv1 TLSv1.1 TLSv1.2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_ciphers                 EECDH+CHACHA20:EECDH+AES128:RSA+AES128:EECDH+AES256:RSA+AES256:EECDH+3DES:RSA+3DES:!MD5</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_prefer_server_ciphers   on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_session_timeout         10m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_session_cache           builtin:1000 shared:SSL:10m</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_buffer_size             1400</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    add_header                  Strict-Transport-Security </span><span style="color:#F07178;">max-age</span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;">15768000</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_stapling                on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_stapling_verify         on</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log                  off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    if ($</span><span style="color:#F07178;">ssl_protocol</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#A6ACCD;">) {</span></span>
<span class="line"><span style="color:#A6ACCD;">        return 301 https://$host$request_uri</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span></span>
<span class="line"><span style="color:#A6ACCD;">    server_tokens off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    root /var/web/project/example/public</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    index index.php</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    charset utf-8</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location /index.php {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files /not_exists @octane</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        try_files $uri $uri/ @octane</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /favicon.ico { access_log off</span><span style="color:#676E95;font-style:italic;">; log_not_found off; }</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">location</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /robots.txt  { access_log off</span><span style="color:#676E95;font-style:italic;">; log_not_found off; }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    access_log off</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    error_log  /var/log/nginx/example.com-error.log error</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    error_page 404 /index.php</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">    location @octane {</span></span>
<span class="line"><span style="color:#A6ACCD;">        set $suffix </span><span style="color:#89DDFF;">&quot;&quot;</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        if ($</span><span style="color:#F07178;">uri</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> /index.php) {</span></span>
<span class="line"><span style="color:#A6ACCD;">            set $suffix ?$query_string</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        }</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_http_version 1.1</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Host $http_host</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Scheme $scheme</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header SERVER_PORT $server_port</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header REMOTE_ADDR $remote_addr</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Upgrade $http_upgrade</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_set_header Connection $connection_upgrade</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;"> </span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://172.16.0.2:8000$suffix</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div>`,15),o=[e];function t(c,r,i,y,A,C){return n(),a("div",null,o)}var h=s(p,[["render",t]]);export{d as __pageData,h as default};
