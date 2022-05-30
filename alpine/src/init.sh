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
configCode='$sPreUrl = substr($_SERVER["HTTP_HOST"], 0, strpos($_SERVER["HTTP_HOST"], "."));\n    $sPreUrl = $sPreUrl ?: "hk";\n    require_once(BASE_DIR . "\/..\/" . $sPreUrl . "\/config.php");'
sed -i "s/require_once(BASE_DIR . \"\/config.php\");/${configCode}/g" ${corePath}/sys/includes/tke_config.php
sed -i '$s/?>/''/' ${corePath}/sys/includes/tke_config.php
echo "edit ${corePath}/sys/includes/tke_config.php";

# http.lib
rm ${corePath}/sys/libs/http.lib
echo "<?php include('./ngcore/http.lib');" >> ${corePath}/sys/libs/http.lib
echo "edit ${corePath}/sys/libs/http.lib";

# login.php
loginCode="\    // Use custom 8id automatic login\n    \$user = \$db->get(\"SELECT * FROM \`user\` WHERE \`ActiveDirectoryID\` = '${userId}' LIMIT 1\");\n    userLogin(\$user->id, \$user);\n    die();"
sed -i "/UserInformationService as UserInformationService;/a\ \n${loginCode}" ${corePath}/web/login.php
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

echo "操作成功!";
echo "警告：以上文件仅可用于本地开发，切勿提交到SVN!!!";
echo "警告：以上文件仅可用于本地开发，切勿提交到SVN!!!";
echo "警告：以上文件仅可用于本地开发，切勿提交到SVN!!!";