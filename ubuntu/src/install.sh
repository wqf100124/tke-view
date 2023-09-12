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
php${1}-xml \
php${1}-xmlrpc \
php${1}-redis \
php${1}-soap \
php${1}-solr \
php${1}-zip
# ---------- apache2 ----------
apt-get install -y apache2
cp /etc/apache2/mods-available/allowmethods.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/ext_filter.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/include.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/vhost_alias.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/asis.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/rewrite.load /etc/apache2/mods-enabled/
cp /etc/apache2/mods-available/expires.load /etc/apache2/mods-enabled/
echo "ServerName localhost:80" >> /etc/apache2/apache2.conf
chown -R 777 /run/apache2
# ---------- memcached ----------
apt-get install -y memcached
# ---------- php.ini ----------
sed -i "s/;date.timezone =/date.timezone = Asia\/Shanghai/g" /etc/php/${1}/apache2/php.ini
sed -i "s/display_errors = Off/display_errors = On/g" /etc/php/${1}/apache2/php.ini
sed -i "s/;mbstring.internal_encoding =/mbstring.internal_encoding = \"UTF-8\"/g" /etc/php/${1}/apache2/php.ini
sed -i "s/;mbstring.http_output =/mbstring.http_output = \"UTF-8\"/g" /etc/php/${1}/apache2/php.ini
sed -i "s/short_open_tag = Off/short_open_tag = On/g" /etc/php/${1}/apache2/php.ini
sed -i "s/variables_order = \"GPCS\"/variables_order = \"EGPCS\"/g" /etc/php/${1}/apache2/php.ini
sed -i "s/request_order = \"GP\"/request_order = \"GPC\"/g" /etc/php/${1}/apache2/php.ini
sed -i "s/max_execution_time = 30/max_execution_time = 1800/g" /etc/php/${1}/apache2/php.ini
sed -i "s/error_reporting = E_ALL \& ~E_DEPRECATED \& ~E_STRICT/error_reporting = E_ALL/g" /etc/php/${1}/apache2/php.ini
sed -i "s/register_argc_argv = Off/register_argc_argv = On/g" /etc/php/${1}/apache2/php.ini
sed -i "s/post_max_size = 8M/post_max_size = 200M/g" /etc/php/${1}/apache2/php.ini
sed -i "s/enable_dl = Off/enable_dl = On/g" /etc/php/${1}/apache2/php.ini
sed -i "s/upload_max_filesize = 2M/upload_max_filesize = 200M/g" /etc/php/${1}/apache2/php.ini

if [ $1 == '8.2' ]
then
mv /tmp/php_pdflib_820_nts.so /usr/lib/php/20220829/pdflib.so
else
mv /tmp/php_pdflib_740_nts.so /usr/lib/php/20190902/pdflib.so
fi

echo "extension=pdflib.so" >> /etc/php/${1}/apache2/php.ini
ln --force /etc/php/${1}/apache2/php.ini /etc/php/${1}/cli/php.ini
# ---------- composer ----------
php -r "copy('https://install.phpcomposer.com/installer', 'composer-setup.php');"
php composer-setup.php --install-dir=/usr/bin --filename=composer;
rm composer-setup.php
# ---------- redis ----------
apt-get install -y redis-server
# ---------- project directory ----------
mv /tmp/htdocs /var/www/htdocs
chmod -R 777 /var/www/htdocs
rm /etc/apache2/sites-enabled/000-default.conf
mv /tmp/vhost/* /etc/apache2/sites-enabled
chmod -R 777 /var/log
mv /tmp/entrypoint.sh /run/entrypoint.sh
chmod +x /run/entrypoint.sh
# ---------- init ----------
mv /tmp/init /run/init
mv /tmp/init.sh /run/init.sh
chmod +x /run/init.sh
# ---------- clear works ----------
apt-get remove --yes software-properties-common
apt-get autoremove --yes
apt-get clean
rm -rf /tmp/* /var/lib/apt/lists/*