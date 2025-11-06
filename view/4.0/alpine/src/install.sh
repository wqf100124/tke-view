#!/bin/sh
export DEBIAN_FRONTEND=noninteractive
# ---------- timezone ----------
apk add --no-cache tzdata
cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# ---------- apache2 ----------
apk add --no-cache apache2 apache2-proxy
chown -R apache:apache /run/apache2
mv /tmp/httpd.conf /etc/apache2/httpd.conf
mv /tmp/vhost/* /etc/apache2/conf.d/
# ---------- php ----------
apk add --no-cache \
    php84 \
    php84-fpm \
    php84-pecl-amqp \
    php84-pecl-ast \
    php84-bcmath \
    php84-bz2 \
    php84-calendar \
    php84-ctype \
    php84-curl \
    php84-dom \
    php84-exif \
    php84-ffi \
    php84-fileinfo \
    php84-ftp \
    php84-gd \
    php84-gettext \
    php84-gmp \
    php84-iconv \
    php84-imap \
    php84-json \
    php84-ldap \
    php84-mbstring \
    php84-pecl-mcrypt \
    php84-pecl-memcache \
    php84-pecl-memcached \
    php84-pecl-mongodb \
    php84-pecl-msgpack \
    php84-mysqli \
    php84-openssl \
    php84-pcntl \
    php84-pdo_mysql \
    php84-pdo_sqlite \
    php84-phar \
    php84-posix \
    php84-pecl-redis \
    php84-session \
    php84-shmop \
    php84-simplexml \
    php84-sockets \
    php84-sodium \
    php84-sysvmsg \
    php84-xml \
    php84-xmlreader \
    php84-xmlwriter \
    php84-xsl \
    php84-soap \
    php84-sqlite3 \
    php84-sysvsem \
    php84-tokenizer \
    php84-pecl-xhprof \
    php84-zip
# php84-opcache php84-pecl-ssh2
apk add --no-cache graphviz
# ---------- php.ini ----------
mv /tmp/php.ini /etc/php84/php.ini
mv /tmp/php_pdflib_840_nts.so /usr/lib/php84/modules/pdflib.so
mv /tmp/pdflib.ini /etc/php84/conf.d/pdflib.ini
# ---------- php-fpm ----------
mv /tmp/www.conf /etc/php84/php-fpm.d/www.conf
# ---------- composer ----------
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- memcached ----------
apk add --no-cache memcached
# ---------- project directory ----------
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
chmod -R 777 /var/log
# ---------- init ----------
mv /tmp/init /run/init
mv /tmp/init.sh /run/init.sh
chmod +x /run/init.sh
# ---------- clear works ----------
rm -rf /var/cache/apk/* /root/.cache /tmp/*
