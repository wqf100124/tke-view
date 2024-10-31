#!/bin/bash
/etc/init.d/apache2 start
/etc/init.d/memcached start
/etc/init.d/redis-server start
tail -f /var/log/apache2/error.log