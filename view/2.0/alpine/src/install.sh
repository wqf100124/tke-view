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
    php \
    php82-apache2 \
    php82-pecl-amqp \
    php82-pecl-ast \
    php82-bcmath \
    php82-bz2 \
    php82-calendar \
    php82-ctype \
    php82-curl \
    php82-dom \
    php82-exif \
    php82-ffi \
    php82-fileinfo \
    php82-ftp \
    php82-gd \
    php82-gettext \
    php82-gmp \
    php82-iconv \
    php82-imap \
    php82-json \
    php82-ldap \
    php82-mbstring \
    php82-pecl-mcrypt \
    php82-pecl-memcache \
    php82-pecl-memcached \
    php82-pecl-mongodb \
    php82-pecl-msgpack \
    php82-mysqli \
    php82-openssl \
    php82-pcntl \
    php82-pdo_mysql \
    php82-pdo_sqlite \
    php82-phar \
    php82-posix \
    php82-session \
    php82-shmop \
    php82-simplexml \
    php82-sockets \
    php82-sodium \
    php82-sysvmsg \
    php82-xml \
    php82-xmlreader \
    php82-xmlwriter \
    php82-xsl \
    php82-pecl-redis \
    php82-soap \
    php82-sqlite3 \
    php82-sysvsem \
    php82-tokenizer \
    php82-zip
# php82-opcache php82-pecl-ssh2
# ---------- php.ini ----------
sed -i "s/;date.timezone =/date.timezone = Asia\/Shanghai/g" /etc/php82/php.ini
sed -i "s/display_errors = Off/display_errors = On/g" /etc/php82/php.ini
# sed -i "s/;mbstring.func_overload = 0/mbstring.func_overload = 7/g" /etc/php82/php.ini
sed -i "s/;mbstring.internal_encoding =/mbstring.internal_encoding = \"UTF-8\"/g" /etc/php82/php.ini
sed -i "s/;mbstring.http_output =/mbstring.http_output = \"UTF-8\"/g" /etc/php82/php.ini
sed -i "s/short_open_tag = Off/short_open_tag = On/g" /etc/php82/php.ini
sed -i "s/variables_order = \"GPCS\"/variables_order = \"EGPCS\"/g" /etc/php82/php.ini
sed -i "s/request_order = \"GP\"/request_order = \"GPC\"/g" /etc/php82/php.ini
sed -i "s/max_execution_time = 30/max_execution_time = 1800/g" /etc/php82/php.ini
sed -i "s/error_reporting = E_ALL \& ~E_DEPRECATED \& ~E_STRICT/error_reporting = E_ALL/g" /etc/php82/php.ini
sed -i "s/register_argc_argv = Off/register_argc_argv = On/g" /etc/php82/php.ini
sed -i "s/post_max_size = 8M/post_max_size = 150M/g" /etc/php82/php.ini
sed -i "s/enable_dl = Off/enable_dl = On/g" /etc/php82/php.ini
sed -i "s/upload_max_filesize = 2M/upload_max_filesize = 150M/g" /etc/php82/php.ini
mv /tmp/php_pdflib_820_nts.so /usr/lib/php82/modules/pdflib.so
echo "extension=pdflib.so" >> /etc/php82/conf.d/00_pdflib.ini
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
mv /tmp/init.sh /run/init.sh
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh /run/init.sh
chmod -R 777 /var/log
# ---------- clear works ----------
rm -rf /var/cache/apk/* /root/.cache /tmp/*
