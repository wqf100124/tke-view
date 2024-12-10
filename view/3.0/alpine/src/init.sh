#!/bin/sh

if [ ! "$1" ]; then
    echo '缺少8ID参数，例如: /run/init.sh 80000110';
    exit 1;
fi

corePath=/opt/tk
user8ID=${1}

if [ ! "$(ls -A $corePath)" ]; then
    echo "${corePath}目录不存在";
    exit 1;
fi

cd ${corePath} || exit

ln -s /opt/tk/web/nimod /opt/tk/web/servicesales
printf "\033[32mCreated symlink /opt/tk/web/servicesales -> /opt/tk/web/nimod \033[0m\n"

# tke_config.php
configCode='$sPreUrl = substr($_SERVER["HTTP_HOST"], 0, strpos($_SERVER["HTTP_HOST"], "."));\n    $sPreUrl = $sPreUrl ?: "hk";\n    require_once(BASE_DIR . "\/..\/sites\/" . $sPreUrl . "\/config.php");'
sed -i "s/require_once(BASE_DIR . \"\/config.php\");/${configCode}/g" ${corePath}/sys/includes/tke_config.php
sed -i '$s/?>/''/' sys/includes/tke_config.php
printf "\033[32mModified sys/includes/tke_config.php \033[0m\n"

# http.lib
rm sys/libs/http.lib
echo "<?php include('./ngcore/http.lib');" >> sys/libs/http.lib
printf "\033[32mModified sys/libs/http.lib \033[0m\n"

# login.php
loginCode="\    // Use custom 8id automatic login\n    \$user = \$db->get(\"SELECT id FROM \`user\` WHERE \`ActiveDirectoryID\` = '${user8ID}' LIMIT 1\");\n    userLogin(\$user->id);\n    die();"
sed -i "/UserInformationService as UserInformationService;/a\ \n${loginCode}" web/login.php
sed -i 's/use SystemAdmin\\User\\Service\\UserInformationService as UserInformationService;/use SystemAdmin\\User\\Service\\UserInformationService as UserInformationService ;/' web/login.php
printf "\033[32mModified web/login.php \033[0m\n"

# Handler.php
sed -i "s/function render(/function renderBackup(/g" vivid/app/Exceptions/Handler.php
printf "\033[32mModified vivid/app/Exceptions/Handler.php \033[0m\n"

printf "\033[32m初始化操作完成 \033[0m\n"
printf "\033[33m警告：以上文件仅用于本地开发，请勿提交到Git仓库! \033[0m\n"
printf "\033[33m警告：以上文件仅用于本地开发，请勿提交到Git仓库! \033[0m\n"
printf "\033[33m警告：以上文件仅用于本地开发，请勿提交到Git仓库! \033[0m\n"
cat << EOF
如果希望忽略对这些文件的更改，请运行以下命令：
git update-index --skip-worktree 文件1 文件2 ...

如果需要恢复对这些文件的跟踪，请运行以下命令：
git update-index --no-skip-worktree 文件1 文件2 ...
EOF
