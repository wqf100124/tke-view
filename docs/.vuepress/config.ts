import {copyCodePlugin} from "vuepress-plugin-copy-code2";

const {docsearchPlugin} = require('@vuepress/plugin-docsearch');
const {defaultTheme} = require('@vuepress/theme-default');
const {prismjsPlugin} = require('@vuepress/plugin-prismjs');

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'View & Docker',
    description: '基于Docker搭建的View系统本地开发环境',
    head: [['link', {rel: 'shortcut icon', href: '/tke-view/assets/images/favicon.ico'}]],
    base: '/tke-view/',
    markdown: {
        EmojiPluginOptions: true,
        code: {
            lineNumbers: 5
        }
    },
    theme: defaultTheme({
        logo: '/assets/images/logo.png',
        // logoDark: '/assets/images/logo-dark.svg',
        repo: 'wqf100124/tke-view',
        contributors: false,
        lastUpdated: false,
        lastUpdatedText: '最近更新',
        editLink: false,
        navbar: [
            {
                text: '开发环境',
                children: [
                    '/guide/view.md',
                    '/guide/autotest.md',
                    '/guide/rabbitmq.md',
                    '/guide/wso2.md',
                    '/guide/solr.md',
                ],
            },
            {
                text: '代码规范',
                link: '/standard/html.md',
                children: [
                    '/standard/html.md',
                    '/standard/ui.md',
                    '/standard/component.md',
                    '/standard/db.md',
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
                    children: [
                        '/guide/README.md',
                        '/guide/view.md',
                        '/guide/autotest.md',
                        '/guide/rabbitmq.md',
                        '/guide/wso2.md',
                        '/guide/solr.md',
                    ],
                },
            ],
            '/standard/': [
                {
                    children: [
                        '/standard/html.md',
                        '/standard/ui.md',
                        '/standard/component.md',
                        '/standard/db.md',
                    ],
                },
            ],
            '/tools/': [
                {
                    children: [
                        '/tools/',
                    ],
                },
            ],
            '/sites/': [
                {
                    children: [
                        '/sites/README.md',
                    ],
                },
            ],
        },
        tip: '提示：',
        warning: '注意：',
        danger: '错误：',
        notFound: ['页面不存在', '页面找不到了'],
        backToHome: '返回首页'
    }),
    plugins: [
        copyCodePlugin({
            // 是否生成样式纯净的小而简单的复制按钮。
            pure: false,
        }),
        prismjsPlugin({
            // 配置项
            preloadLanguages: ['markdown', 'jsdoc', 'yaml', 'php', 'editorconfig', 'ini']
        }),
        docsearchPlugin({
            // 配置项
            appId: 'UX50ABTIAM',
            apiKey: '0130e0698793aef5074149337d077b36',
            indexName: 'tke-view',
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
        }),
    ]
}