#!/bin/bash
export DEBIAN_FRONTEND=noninteractive
# ---------- timezone ----------
apt-get install -y tzdata
ln -fs /usr/share/zoneinfo/Asia/Shanghai /etc/localtime
dpkg-reconfigure -f noninteractive tzdata
# ---------- php ----------
apt-get install -y software-properties-common
add-apt-repository -y ppa:ondrej/php
apt-get update
apt-get install -y \
php${1} \
php${1}-fpm \
php${1}-amqp \
php${1}-ast \
php${1}-bcmath \
php${1}-bz2 \
php${1}-curl \
php${1}-gd \
php${1}-gmp \
php${1}-imap \
php${1}-ldap \
php${1}-mbstring \
php${1}-mcrypt \
php${1}-memcache \
php${1}-memcached \
php${1}-mongodb \
php${1}-mysql \
php${1}-sqlite3 \
php${1}-xdebug \
php${1}-xml \
php${1}-xmlrpc \
php${1}-soap \
php${1}-solr \
php${1}-zip
# ---------- apache2 ----------
apt-get install -y apache2
mv /tmp/apache2.conf /etc/apache2/apache2.conf
sed -i "s/{version}/${1}/g" /etc/apache2/apache2.conf
cp /etc/apache2/mods-available/allowmethods.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/ext_filter.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/include.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/vhost_alias.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/asis.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/expires.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/proxy_fcgi.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/proxy.load /etc/apache2/mods-enabled/
rm /etc/apache2/sites-enabled/000-default.conf
mv /tmp/sites/* /etc/apache2/sites-enabled
# ---------- memcached ----------
apt-get install -y memcached
# ---------- php.ini ----------
mv /tmp/php.ini /etc/php/${1}/cli/php.ini
mv /tmp/www.conf /etc/php/${1}/fpm/pool.d/www.conf
cp -f /etc/php/${1}/cli/php.ini /etc/php/${1}/fpm/php.ini
sed -i "s/{version}/${1}/g" /etc/php/${1}/fpm/pool.d/www.conf
# XDEBUG
mv /tmp/xdebug.ini /etc/php/${1}/mods-available/xdebug.ini
# ---------- composer ----------
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- init ----------
mv /tmp/entrypoint.sh /run/entrypoint.sh
sed -i "s/{version}/${1}/g" /run/entrypoint.sh
chmod +x /run/entrypoint.sh
# ---------- clear works ----------
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*
