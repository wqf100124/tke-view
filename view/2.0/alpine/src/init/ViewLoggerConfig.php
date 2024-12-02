<?php
/*
 * Warning: This file is only for local development and testing, do not commit to svn
 */
$viewLoggerConfigurators = array(
    'MQProducerLogger' => array(
        'Implementation' => 'KLogger',
        'Level'          => 'debug',
        'Directory'      => '/var/log/View',
        'FilePrefix'     => 'MessageQueue_Producer_hk_daily_',
    ),
    'MQConsumerLogger' => array(
        'Implementation' => 'KLogger',
        'Level'          => 'info',
        'Directory'      => '/var/log/View',
        'FilePrefix'     => 'MessageQueue_Consumer_hk_daily_',
    ),
);