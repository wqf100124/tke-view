import {copyCode} from "vuepress-plugin-copy-code2";
const { docsearchPlugin } = require('@vuepress/plugin-docsearch');

module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'View & Docker',
    description: '基于Docker搭建的View系统本地开发环境',
    head: [['link', {rel: 'shortcut icon', href: '/tke-view/assets/images/favicon.ico'}]],
    theme: '@vuepress/theme-default',
    themeConfig: {
        logo: '/assets/images/logo.png',
        // logoDark: '/assets/images/logo-dark.svg',
        // repo: 'wqf100124/tke-view',
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
                text: '常用站点',
                link: '/sites/',
            },
            {
                text: '开发工具',
                link: '/tools/',
            },
            {
                text: 'Docker Hub',
                link: 'https://hub.docker.com/r/rtwadewang/tke',
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
    },
    markdown: {
        EmojiPluginOptions: true,
        code: {
            lineNumbers: 10
        }
    },
    plugins: [
        copyCode({
        }),
        docsearchPlugin({
            // 配置项
            appId: 'O4VL4CD63V',
            apiKey: 'd0f222e3bebb69442f1388e8b432b3a6',
            indexName: 'tke-view',
            locales: {
                '/': {
                    placeholder: '搜索文档',
                    translations: {
                        button: {
                            buttonText: '搜索文档',
                        },
                    },
                }
            },
        }),
    ],
    base: '/tke-view/'
}