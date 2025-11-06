#!/bin/sh
httpd
php-fpm82
memcached -d -m 1024 -u root -p 11211 -c 1024 -P /tmp/memcached.pid
tail -f /var/log/apache2/error.log
