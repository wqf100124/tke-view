<!DOCTYPE html>
<html lang="zh-cmn-Hans">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta name="viewport" content="width=device-width, initial-scale=1, minimum-scale=1, maximum-scale=1">
    <title>View local development environment.</title>
    <link href="/static/css/weui.min.css" rel="stylesheet">
    <style>
        .container {
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0;
            overflow: hidden;
            color: var(--weui-FG-0);
        }

        .weui-footer__links {
            padding: 5px 0;
        }

        .weui-footer__text {
            margin-top: 15px;
        }

        .weui-footer__text a {
            color: #999999;
        }

        .weui-footer__text a:hover {
            color: #aaaaaa;
        }

        .weui-msg__desc.small {
            font-size: 14px;
        }
    </style>
</head>
<body>
<div class="container">
    <div class="weui-msg" style="padding: 50px 0;">
        <div class="weui-msg__icon-area"><i class="weui-icon-success weui-icon_msg"></i></div>
        <div class="weui-msg__text-area">
            <h2 class="weui-msg__title">Successful</h2>
            <p class="weui-msg__desc">
                View local development environment.
            </p>
            <p class="weui-msg__desc">
                <a href="phpinfo.php" target="_blank">PHP <?php echo substr(PHP_VERSION, 0, 6); ?></a>
            </p>
            <p class="weui-msg__desc small">
                <a href="https://wqf100124.github.io/tke-view" target="_blank">
                    Docs
                </a>
            </p>
        </div>
    </div>
</div>
</body>
</html>