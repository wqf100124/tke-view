#!/bin/sh
sed -i "9c define('TK_PATH', '/home/tke/core');" /opt/autotest/phpunit/library/BaseBootstrap.php
sed -i "23c \$_SERVER['DOCUMENT_ROOT'] = '/home/tke/core/web';" /opt/autotest/phpunit/library/BaseBootstrap.php
echo "success!"