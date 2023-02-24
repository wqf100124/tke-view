#!/bin/sh
export DEBIAN_FRONTEND=noninteractive
# ---------- timezone ----------
apk add --no-cache tzdata
cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# ---------- apache2 ----------
apk add --no-cache apache2
chown -R apache:apache /run/apache2
sed -i "s/#LoadModule allowmethods_module/LoadModule allowmethods_module/g" /etc/apache2/httpd.conf
sed -i "s/#LoadModule ext_filter_module/LoadModule ext_filter_module/g" /etc/apache2/httpd.conf
sed -i "s/#LoadModule include_module/LoadModule include_module/g" /etc/apache2/httpd.conf
sed -i "s/#LoadModule deflate_module/LoadModule deflate_module/g" /etc/apache2/httpd.conf
sed -i "s/#LoadModule vhost_alias_module/LoadModule vhost_alias_module/g" /etc/apache2/httpd.conf
sed -i "s/#LoadModule asis_module/LoadModule asis_module/g" /etc/apache2/httpd.conf
sed -i "s/#LoadModule rewrite_module/LoadModule rewrite_module/g" /etc/apache2/httpd.conf
sed -i "s/#LoadModule expires_module/LoadModule expires_module/g" /etc/apache2/httpd.conf
mv /tmp/vhost/* /etc/apache2/conf.d/
# ---------- php ----------
apk add --no-cache \
    php7 \
    php7-apache2 \
    php7-pecl-amqp \
    php7-pecl-ast \
    php7-bcmath \
    php7-bz2 \
    php7-calendar \
    php7-ctype \
    php7-curl \
    php7-dom \
    php7-exif \
    php7-ffi \
    php7-fileinfo \
    php7-ftp \
    php7-gd \
    php7-gettext \
    php7-gmp \
    php7-iconv \
    php7-imap \
    php7-json \
    php7-ldap \
    php7-mbstring \
    php7-pecl-mcrypt \
    php7-pecl-memcache \
    php7-pecl-memcached \
    php7-pecl-mongodb \
    php7-pecl-msgpack \
    php7-mysqli \
    php7-openssl \
    php7-pcntl \
    php7-pdo_mysql \
    php7-pdo_sqlite \
    php7-phar \
    php7-posix \
    php7-session \
    php7-shmop \
    php7-simplexml \
    php7-sockets \
    php7-sodium \
    php7-sysvmsg \
    php7-xml \
    php7-xmlrpc \
    php7-xmlreader \
    php7-xmlwriter \
    php7-xsl \
    php7-pecl-redis \
    php7-soap \
    php7-sqlite3 \
    php7-sysvsem \
    php7-tokenizer \
    php7-zip
# php7-opcache php7-pecl-ssh2
# ---------- php.ini ----------
sed -i "s/;date.timezone =/date.timezone = Asia\/Shanghai/g" /etc/php7/php.ini
sed -i "s/display_errors = Off/display_errors = On/g" /etc/php7/php.ini
# sed -i "s/;mbstring.func_overload = 0/mbstring.func_overload = 7/g" /etc/php7/php.ini
sed -i "s/;mbstring.internal_encoding =/mbstring.internal_encoding = \"UTF-8\"/g" /etc/php7/php.ini
sed -i "s/;mbstring.http_output =/mbstring.http_output = \"UTF-8\"/g" /etc/php7/php.ini
sed -i "s/short_open_tag = Off/short_open_tag = On/g" /etc/php7/php.ini
sed -i "s/variables_order = \"GPCS\"/variables_order = \"EGPCS\"/g" /etc/php7/php.ini
sed -i "s/request_order = \"GP\"/request_order = \"GPC\"/g" /etc/php7/php.ini
sed -i "s/max_execution_time = 30/max_execution_time = 1800/g" /etc/php7/php.ini
sed -i "s/error_reporting = E_ALL \& ~E_DEPRECATED \& ~E_STRICT/error_reporting = E_ALL/g" /etc/php7/php.ini
sed -i "s/register_argc_argv = Off/register_argc_argv = On/g" /etc/php7/php.ini
sed -i "s/post_max_size = 8M/post_max_size = 150M/g" /etc/php7/php.ini
sed -i "s/enable_dl = Off/enable_dl = On/g" /etc/php7/php.ini
sed -i "s/upload_max_filesize = 2M/upload_max_filesize = 150M/g" /etc/php7/php.ini
mv /tmp/php_pdflib.so /usr/lib/php7/modules/pdflib.so
echo "extension=pdflib.so" >> /etc/php7/conf.d/00_pdflib.ini
# ---------- composer ----------
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- memcached ----------
apk add --no-cache memcached
# ---------- redis ----------
apk add --no-cache redis
# # ---------- openssh ----------
# apk add --no-cache openssh-server
# sed -i "s/#PermitRootLogin.*/PermitRootLogin yes/g" /etc/ssh/sshd_config
# ssh-keygen -t dsa -f /etc/ssh/ssh_host_dsa_key
# ssh-keygen -t rsa -f /etc/ssh/ssh_host_rsa_key
# echo "root:123456" | chpasswd
# ---------- project directory ----------
mv /tmp/htdocs /var/www/htdocs
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
chmod -R 777 /var/log
# ---------- init ----------
mv /tmp/init /run/init
mv /tmp/init.sh /run/init.sh
chmod +x /run/init.sh
# ---------- clear works ----------
rm -rf /var/cache/apk/* /root/.cache /tmp/*