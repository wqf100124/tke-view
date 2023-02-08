#!/bin/sh
# /run/init.sh local 80000110

if [ ! $1 ]; then
    echo '缺少环境参数，支持:local/preview/dev2/rc/live';
    exit 1;
fi

if [ ! $2 ]; then
    echo '缺少8ID参数';
    exit 1;
fi

corePath=/home/tke/${1}
userId=${2}

if [ ! "$(ls -A $corePath)" ]; then
    echo "${corePath}目录不存在，请确认是否已经映射代码到容器中";
    exit 1;
fi

# tke_config.php
configCode='$sPreUrl = substr($_SERVER["HTTP_HOST"], 0, strpos($_SERVER["HTTP_HOST"], "."));\n    $sPreUrl = $sPreUrl ?: "hk";\n    require_once(BASE_DIR . "\/..\/sites\/" . $sPreUrl . "\/config.php");'
sed -i "s/require_once(BASE_DIR . \"\/config.php\");/${configCode}/g" ${corePath}/sys/includes/tke_config.php
sed -i '$s/?>/''/' ${corePath}/sys/includes/tke_config.php
echo "update ${corePath}/sys/includes/tke_config.php";

# http.lib
rm ${corePath}/sys/libs/http.lib
echo "<?php include('./ngcore/http.lib');" >> ${corePath}/sys/libs/http.lib
echo "update ${corePath}/sys/libs/http.lib";

# login.php
loginCode="\    // Use custom 8id automatic login\n    \$user = \$db->get(\"SELECT * FROM \`user\` WHERE \`ActiveDirectoryID\` = '${userId}' LIMIT 1\");\n    userLogin(\$user->id, \$user);\n    die();"
sed -i "/UserInformationService as UserInformationService;/a\ \n${loginCode}" ${corePath}/web/login.php
echo "update ${corePath}/web/login.php";

# ErrorController.php
cp /run/init/ErrorController.php ${corePath}/web/sharp/modules/default/controllers/ErrorController.php
echo "update ${corePath}/web/sharp/modules/default/controllers/ErrorController.php";

# error.phtml
cp /run/init/error.phtml ${corePath}/web/sharp/modules/default/views/scripts/error/error.phtml
echo "update ${corePath}/web/sharp/modules/default/views/scripts/error/error.phtml";

# ViewLoggerConfig.php
cp /run/init/ViewLoggerConfig.php ${corePath}/ViewLoggerConfig.php
echo "create ${corePath}/ViewLoggerConfig.php";

# dbg.lib
dbgCode='\n    echo <<<END\n    <div style="width: 60%;margin: 3rem auto;padding: 1rem 1.5rem;word-break: break-all;font-size: 14px;border-radius: 10px;background: #fff;box-shadow: 0px 4px 10px 1px rgb(123 123 123 / 15%);"><h1>数据库异常</h1>\n    <h3>错误代码:</h3><p>{$db->errno()}</p>\n    <h3>报错信息:</h3><p style="padding: 1rem;background-color: #fff6f6;color: #9f3a38;border-radius: 4px;">{$db->error()}</p>\n    <h3>SQL语句:</h3><pre style="word-break: break-word;white-space: break-spaces;background: #f8f8f9;padding: 1rem;border-radius: 4px;"><code>{$db->getLastSql()}</code></pre>\n    </div>\n    END;\n    die();'
sed -i "/\$iMessageId = errorMessageInfo (\$message,\$type=DBG_USER,\$dbInfor,\$info);/a\ \n${dbgCode}" ${corePath}/sys/libs/dbg.lib
echo "update ${corePath}/sys/libs/dbg.lib";

echo "操作成功!";
echo "警告：以上文件仅可用于本地开发，切勿提交!!!";
echo "警告：以上文件仅可用于本地开发，切勿提交!!!";
echo "警告：以上文件仅可用于本地开发，切勿提交!!!";