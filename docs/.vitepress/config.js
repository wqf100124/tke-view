import {defineConfig} from 'vitepress';

export default defineConfig({
    title: 'View & Docker',
    description: '基于Docker搭建的View系统本地开发环境',
    lang: 'zh-CN',
    base: '/tke-view/',
    head: [
        ['link', {rel: 'shortcut icon', href: '/logo.svg'}]
    ],
    markdown: {
        theme: 'github-dark',
        lineNumbers: false
    },
    themeConfig: {
        editLink: false,
        logo: {
            light: '/logo.svg',
            dark: '/logo-dark.svg',
        },
        socialLinks: [
            {icon: 'github', link: 'https://github.com/wqf100124/tke-view'},
        ],
        docFooter: {
            prev: '上一条',
            next: '下一条'
        },
        nav: [
            {
                text: '开发环境',
                items: [
                    {text: 'Local环境', link: '/guide/view'},
                    {text: 'AutoTesting', link: '/guide/autotest'},
                    {text: 'RabbitMQ', link: '/guide/rabbitmq'},
                    {text: 'WSO2', link: '/guide/wso2'},
                    {text: 'Solr', link: '/guide/solr'},
                ],
            },
            {
                text: '代码规范',
                items: [
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
            '/guide/': [
                {
                    text: '开发环境',
                    items: [
                        {text: 'Local环境', link: '/guide/view'},
                        {text: 'AutoTesting', link: '/guide/autotest'},
                        {text: 'RabbitMQ', link: '/guide/rabbitmq'},
                        {text: 'WSO2', link: '/guide/wso2'},
                        {text: 'Solr', link: '/guide/solr'},
                    ]
                }
            ],
            '/standard/': [
                {
                    text: '代码规范',
                    items: [
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
        footer: {
            message: 'Released under the MIT License.',
            copyright: 'Copyright © 2022-present Wade Wang'
        },

        algolia: {
            appId: 'UX50ABTIAM',
            apiKey: '0130e0698793aef5074149337d077b36',
            indexName: 'tke-view',
            searchParameters: {
                facetFilters: ['tags:en']
            },
            locales: {
                '/': {
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
                                searchByText: '搜索引擎基于',
                            },
                            noResultsScreen: {
                                noResultsText: '没有匹配的内容',
                                suggestedQueryText: '尝试搜索',
                                reportMissingResultsText: '确认该搜索有结果?',
                                reportMissingResultsLinkText: '让我们知道.',
                            },
                        },
                    },
                }
            },
        },
    }
});