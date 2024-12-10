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
    php \
    php82-fpm \
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
    php82-soap \
    php82-sqlite3 \
    php82-sysvsem \
    php82-tokenizer \
    php82-pecl-xhprof \
    php82-zip
# php82-opcache php82-pecl-ssh2
apk add --no-cache graphviz
# ---------- php.ini ----------
mv /tmp/php.ini /etc/php82/php.ini
mv /tmp/php_pdflib_820_nts.so /usr/lib/php82/modules/pdflib.so
mv /tmp/pdflib.ini /etc/php82/conf.d/pdflib.ini
# ---------- php-fpm ----------
mv /tmp/www.conf /etc/php82/php-fpm.d/www.conf
# ---------- composer ----------
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- memcached ----------
apk add --no-cache memcached
# ---------- init ----------
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
chmod -R 777 /var/log
mv /tmp/init.sh /run/init.sh
chmod +x /run/init.sh
# ---------- clear works ----------
rm -rf /var/cache/apk/* /root/.cache /tmp/*
