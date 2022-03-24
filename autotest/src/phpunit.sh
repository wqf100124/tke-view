#!/bin/sh
sed -i "9c define('TK_PATH', '/var/tke/dev2');" /var/tke/dev2/autotest/phpunit/library/BaseBootstrap.php
sed -i "23c \$_SERVER['DOCUMENT_ROOT'] = '/var/tke/dev2/core/web';" /var/tke/dev2/autotest/phpunit/library/BaseBootstrap.php
tar -xzvf /var/data/phpunit.tar.gz -C /var/tke/dev2/autotest/phpunit
echo "success!"