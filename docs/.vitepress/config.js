import {defineConfig} from 'vitepress';

export default defineConfig({
    title: 'View & Docker',
    description: '基于Docker构建的View系统本地开发环境',
    lang: 'zh-CN',
    base: '/tke-view/',
    head: [
        ['link', {rel: 'shortcut icon', href: '/tke-view/image/logo.svg'}]
    ],
    ignoreDeadLinks: true,
    lastUpdated: false,
    themeConfig: {
        editLink: false,
        logo: {
            light: '/image/logo.svg',
            dark: '/image/logo-dark.svg',
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/wqf100124/tke-view'},
        ],
        docFooter: {
            prev: '上一条',
            next: '下一条'
        },
        lastUpdatedText: '更新时间',
        outlineTitle: '本页目录',
        nav: [
            {
                text: '开发环境',
                items: [
                    {
                        text: 'Local环境',
                        link: '/local/'
                    },
                    {
                        text: 'AutoTesting',
                        link: '/autotest/'
                    },
                    {
                        text: 'RabbitMQ',
                        link: '/rabbitmq/'
                    },
                    {
                        text: 'WSO2',
                        link: '/wso2/'
                    },
                    {
                        text: 'Solr',
                        link: '/solr/'
                    },
                ],
            },
            {
                text: '代码规范',
                items: [
                    {text: '开发规范(Toolbox)', link: '/standard/toolbox'},
                    {text: 'Html标签', link: '/standard/html'},
                    {text: 'UI标准', link: '/standard/ui'},
                    {text: '公共组件', link: '/standard/component'},
                    {text: '数据库操作', link: '/standard/db'},
                ],
            },
            {
                text: '站点导航',
                link: '/sites/',
            },
            {
                text: '开发工具',
                link: '/tools/',
            },
            {
                text: 'Docker Hub',
                link: 'https://hub.docker.com/u/rtwadewang',
            }
        ],
        sidebar: {
            '/docker/': [
                {
                    text: 'Docker开发环境',
                    items: [
                        {
                            text: '介绍',
                            link: '/docker/'
                        },
                        {
                            text: '安装',
                            link: '/docker/setup'
                        },
                        {
                            text: '基础命令',
                            link: '/docker/command'
                        },
                        {
                            text: '常见问题',
                            link: '/docker/question'
                        },
                    ]
                }
            ],
            '/local/': [
                {
                    text: 'Local环境',
                    items: [
                        {
                            text: '运行Local代码',
                            link: '/local/'
                        },
                        {
                            text: '运行Dev/Dev2/RC/Live代码',
                            link: '/local/live'
                        },
                        {
                            text: '基础命令',
                            link: '/local/command'
                        },
                        {
                            text: '常见问题',
                            link: '/local/question'
                        },
                    ]
                }
            ],
            '/autotest/': [
                {
                    text: 'Autotest自动化测试',
                    items: [
                        {
                            text: '基础环境',
                            link: '/autotest/'
                        },
                        {
                            text: 'Selenium',
                            link: '/autotest/selenium'
                        },
                        {
                            text: 'Phpunit',
                            link: '/autotest/phpunit'
                        },
                    ]
                }
            ],
            '/rabbitmq/': [
                {
                    text: 'Rabbitmq消息队列',
                    items: [
                        {
                            text: '创建MQ服务',
                            link: '/rabbitmq/'
                        },
                        {
                            text: '项目配置',
                            link: '/rabbitmq/config'
                        },
                        {
                            text: '代码示例',
                            link: '/rabbitmq/code'
                        },
                        {
                            text: '基本命令',
                            link: '/rabbitmq/command'
                        },
                        {
                            text: '部署',
                            link: '/rabbitmq/deploy'
                        },
                        {
                            text: '常见问题',
                            link: '/rabbitmq/question'
                        },
                    ]
                }
            ],
            '/wso2/': [
                {
                    text: 'WSO2服务',
                    items: [
                        {
                            text: '介绍',
                            link: '/wso2/'
                        },
                        {
                            text: '搭建环境',
                            link: '/wso2/setup'
                        },
                        {
                            text: '服务提供者',
                            link: '/wso2/producer'
                        },
                        {
                            text: '服务消费者',
                            link: '/wso2/consumer'
                        },
                        {
                            text: 'EI开发',
                            link: '/wso2/ei'
                        },
                        {
                            text: '部署',
                            link: '/wso2/deploy'
                        },
                        {
                            text: '测试',
                            link: '/wso2/test'
                        },
                        {
                            text: '参考文档',
                            link: '/wso2/docs'
                        },
                    ]
                }
            ],
            '/solr/': [
                {
                    text: 'Solr全文搜索',
                    items: [
                        {
                            text: '基础环境',
                            link: '/solr/'
                        },
                        {
                            text: '如何使用',
                            link: '/solr/code'
                        },
                        {
                            text: '部署',
                            link: '/solr/deploy'
                        },
                    ]
                }
            ],
            '/standard/': [
                {
                    text: '代码规范',
                    items: [
                        {text: '开发规范(Toolbox)', link: '/standard/toolbox'},
                        {text: 'Html标签', link: '/standard/html'},
                        {text: 'UI标准', link: '/standard/ui'},
                        {text: '公共组件', link: '/standard/component'},
                        {text: '数据库操作', link: '/standard/db'},
                    ]
                }
            ],
            '/db/': [
                {
                    text: '数据库',
                    items: [
                        {text: 'Postgres', link: '/db/pgsql'},
                        {text: 'Mysql', link: '/db/mysql'},
                        {text: 'MariaDB', link: '/db/mariadb'},
                        {text: 'Redis', link: '/db/redis'},
                        {text: 'Memcached', link: '/db/memcached'},
                    ]
                }
            ]
        },
        algolia: {
            appId: 'UX50ABTIAM',
            apiKey: '0130e0698793aef5074149337d077b36',
            indexName: 'tke-view',
            placeholder: '输入关键词搜索',
            translations: {
                button: {
                    buttonText: '搜索文档',
                    buttonAriaLabel: '搜索文档',
                },
                modal: {
                    searchBox: {
                        resetButtonTitle: '清除查询内容',
                        resetButtonAriaLabel: '清除查询内容',
                        cancelButtonText: '取消',
                        cancelButtonAriaLabel: '取消',
                    },
                    startScreen: {
                        recentSearchesTitle: 'Recent',
                        noRecentSearchesText: '暂无内容',
                        saveRecentSearchButtonTitle: '保存搜索记录',
                        removeRecentSearchButtonTitle: '从历史记录中删除',
                        favoriteSearchesTitle: '收藏',
                        removeFavoriteSearchButtonTitle: '移除收藏',
                    },
                    errorScreen: {
                        titleText: '获取搜索结果失败',
                        helpText: '请检查你的网络连接是否正常.',
                    },
                    footer: {
                        selectText: '搜索',
                        selectKeyAriaLabel: '输入关键词',
                        navigateText: '移动',
                        navigateUpKeyAriaLabel: '向上',
                        navigateDownKeyAriaLabel: '向下',
                        closeText: '关闭',
                        closeKeyAriaLabel: 'Escape 键',
                        searchByText: 'View & Docker',
                    },
                    noResultsScreen: {
                        noResultsText: '没有匹配的内容',
                        suggestedQueryText: '尝试搜索',
                        reportMissingResultsText: '确认该搜索有结果?',
                        reportMissingResultsLinkText: '让我们知道.',
                    },
                },
            },
        },
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present rt.evan'
        },
    }
});