#!/bin/bash
/etc/init.d/memcached start
/etc/init.d/php{version}-fpm start
/etc/init.d/apache2 start
tail -f /var/log/apache2/error.log
