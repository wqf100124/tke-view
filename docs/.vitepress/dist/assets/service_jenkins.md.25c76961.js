import{_ as s,c as n,o as a,a as l}from"./app.f8e37f6d.js";const d=JSON.parse('{"title":"Jenkins","description":"","frontmatter":{},"headers":[{"level":2,"title":"Docker\u65B9\u5F0F","slug":"docker\u65B9\u5F0F"},{"level":2,"title":"\u5B89\u88C5\u5305\u65B9\u5F0F","slug":"\u5B89\u88C5\u5305\u65B9\u5F0F"}],"relativePath":"service/jenkins.md"}'),e={name:"service/jenkins.md"},p=l(`<h1 id="jenkins" tabindex="-1">Jenkins <a class="header-anchor" href="#jenkins" aria-hidden="true">#</a></h1><h2 id="docker\u65B9\u5F0F" tabindex="-1">Docker\u65B9\u5F0F <a class="header-anchor" href="#docker\u65B9\u5F0F" aria-hidden="true">#</a></h2><p>\u5185\u5B58\u5C0F\uFF0C\u4E0D\u8981\u88C5</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker run -p 8080:8080 -p 50000:50000 jenkins/jenkins:lts-jdk11</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u5F00\u653E\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d -u root --name jenkins --network web -p 8080:8080 -p 50000:50000 -v /var/web/service/jenkins:/var/jenkins_home -v /var/run/docker.sock:/var/run/docker.sock jenkinsci/blueocean</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># \u4EC5\u63D0\u4F9Bdocker\u5185\u90E8\u7AEF\u53E3</span></span>
<span class="line"><span style="color:#A6ACCD;">docker run -d \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -u root \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --name jenkins \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --network web \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    --ip 172.16.0.201 \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v /var/web/service/jenkins:/var/jenkins_home \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v /var/run/docker.sock:/var/run/docker.sock \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v </span><span style="color:#89DDFF;">~</span><span style="color:#A6ACCD;">/.ssh:/root/.ssh \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    -v /var/web/project:/var/web/project \\</span></span>
<span class="line"><span style="color:#A6ACCD;">    jenkinsci/blueocean</span></span>
<span class="line"></span></code></pre></div><p>\u67E5\u770B\u521D\u59CB\u5316\u5BC6\u7801</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">cat /home/web/service/jenkins/secrets/initialAdminPassword</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">\u6216</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> jenkins cat /var/jenkins_home/secrets/initialAdminPassword</span></span>
<span class="line"></span></code></pre></div><p>\u8BBE\u7F6E\u65F6\u533A</p><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">docker </span><span style="color:#82AAFF;">exec</span><span style="color:#A6ACCD;"> -it jenkins bash</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">cp /usr/share/zoneinfo/Asia/Shanghai /etc/localtime</span></span>
<span class="line"></span>
<span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> Asia/Shanghai </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> /etc/timezone</span></span>
<span class="line"></span></code></pre></div><p>\u914D\u7F6E\u57DF\u540D</p><div class="language-ini"><span class="copy"></span><pre><code><span class="line"><span style="color:#676E95;font-style:italic;"># http</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen       80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name  jenkins.wangqifei.com</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://172.16.0.3:8080</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"># https</span></span>
<span class="line"><span style="color:#A6ACCD;">server {</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      80</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    listen                      443 ssl http2</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    server_name                 jenkins.wangqifei.com</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate             /etc/nginx/conf.d/ssl/jenkins.wangqifei.com.pem</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    ssl_certificate_key         /etc/nginx/conf.d/ssl/jenkins.wangqifei.com.key</span><span style="color:#676E95;font-style:italic;">;</span></span>
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
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    location / {</span></span>
<span class="line"><span style="color:#A6ACCD;">        proxy_pass http://172.16.0.3:8080</span><span style="color:#676E95;font-style:italic;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    }</span></span>
<span class="line"><span style="color:#A6ACCD;">}</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5B89\u88C5\u5305\u65B9\u5F0F" tabindex="-1">\u5B89\u88C5\u5305\u65B9\u5F0F <a class="header-anchor" href="#\u5B89\u88C5\u5305\u65B9\u5F0F" aria-hidden="true">#</a></h2><div class="language-sh"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">wget -q -O - https://pkg.jenkins.io/debian/jenkins.io.key </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> sudo apt-key add -</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo sh -c </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">echo deb http://pkg.jenkins.io/debian-stable binary/ &gt; /etc/apt/sources.list.d/jenkins.list</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get update</span></span>
<span class="line"><span style="color:#A6ACCD;">sudo apt-get install jenkins</span></span>
<span class="line"></span></code></pre></div>`,12),o=[p];function c(t,i,r,A,y,C){return a(),n("div",null,o)}var k=s(e,[["render",c]]);export{d as __pageData,k as default};
