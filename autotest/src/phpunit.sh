#!/bin/sh
sed -i "9c define('TK_PATH', '/home/tke/code');" /home/tke/code/autotest/phpunit/library/BaseBootstrap.php
sed -i "23c \$_SERVER['DOCUMENT_ROOT'] = '/home/tke/code/core/web';" /home/tke/code/autotest/phpunit/library/BaseBootstrap.php
echo "success!"