#!/bin/sh
# /run/init.sh preview 80000110

if [ ! $1 ]; then
    echo '缺少环境参数，支持:preview/dev2/rc/live';
    exit 1;
fi

if [ ! $2 ]; then
    echo '缺少8ID参数，如：80000110';
    exit 1;
fi

corePath=/home/tke/${1}/core
userId=${2}

if [ ! "$(ls -A $corePath)" ]; then
    echo "${corePath}目录不存在，请确认是否已经映射代码到容器中";
    exit 1;
fi

# tke_config.php
if [ ! -f ${corePath}/sys/includes/tke_config.php ]; then
    echo "${corePath}/sys/includes/tke_config.php文件不存在";
    exit 1;
fi
cp /run/init/tke_config.php ${corePath}/sys/includes/tke_config.php
echo "edit ${corePath}/sys/includes/tke_config.php";

# login.php
if [ ! -f ${corePath}/web/login.php ]; then
    echo "${corePath}/web/login.php文件不存在";
    exit 1;
fi
cp /run/init/login.php ${corePath}/web/login.php
sed -i "s/{8ID}/\$userId/g" ${corePath}/web/login.php
echo "edit ${corePath}/web/login.php";

# ErrorController.php
cp /run/init/ErrorController.php ${corePath}/web/sharp/modules/default/controllers/ErrorController.php
echo "edit ${corePath}/web/sharp/modules/default/controllers/ErrorController.php";

# error.phtml
cp /run/init/error.phtml ${corePath}/web/sharp/modules/default/views/scripts/error/error.phtml
echo "edit ${corePath}/web/sharp/modules/default/views/scripts/error/error.phtml";

# ViewLoggerConfig.php
cp /run/init/ViewLoggerConfig.php ${corePath}/ViewLoggerConfig.php
echo "new ${corePath}/ViewLoggerConfig.php";

echo "success!";