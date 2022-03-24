#!/bin/sh
export DEBIAN_FRONTEND=noninteractive
# ---------- timezone ----------
apk add --no-cache tzdata
cp -f /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
# ---------- php ----------
apk add --no-cache \
    php7 \
    php7-bz2 \
    php7-calendar \
    php7-ctype \
    php7-curl \
    php7-dom \
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
    php7-xml \
    php7-xmlrpc \
    php7-xmlreader \
    php7-xmlwriter \
    php7-pecl-redis \
    php7-soap \
    php7-sqlite3 \
    php7-sysvsem \
    php7-tokenizer \
    php7-zip
# ---------- init ----------
mkdir /var/data
mv /tmp/phpunit.tar.gz /var/data/phpunit.tar.gz
mv /tmp/entrypoint.sh /run/entrypoint.sh
mv /tmp/phpunit.sh /run/phpunit.sh
chmod +x /run/entrypoint.sh /run/phpunit.sh
touch /var/log/error.log
# ---------- clear works ----------
rm -rf /var/cache/apk/* /root/.cache /tmp/*