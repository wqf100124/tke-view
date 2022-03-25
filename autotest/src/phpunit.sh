#!/bin/sh
sed -i "9c define('TK_PATH', '/home/tke/dev2');" /home/tke/dev2/autotest/phpunit/library/BaseBootstrap.php
sed -i "23c \$_SERVER['DOCUMENT_ROOT'] = '/home/tke/dev2/core/web';" /home/tke/dev2/autotest/phpunit/library/BaseBootstrap.php
tar -xzvf /var/data/phpunit.tar.gz -C /home/tke/dev2/autotest/phpunit
chmod -R 755 /home/tke/dev2/autotest/phpunit/vendor/phpunit/phpunit/phpunit
echo "success!"