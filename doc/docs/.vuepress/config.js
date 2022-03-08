module.exports = {
    // 站点配置
    lang: 'zh-CN',
    title: 'Docker开发环境',
    description: '学习如春起之苗，不见其长，日有所长',
  
    // 主题和它的配置
    theme: '@vuepress/theme-default',
    themeConfig: {
      contributors: false,
      lastUpdated: false,
      logo: '/images/tke_logo.png',
      navbar: [
        {
          text: "参考文档",
          link: "/docs/View本地开发环境.md",
        },
        {
          text: 'Docker镜像',
          link: 'https://hub.docker.com/r/rtwadewang/tke',
        }
      ],
      sidebar: {
        '/docs/': [
          {
            collapsible: false,
            children: [
              '/docs/View本地开发环境.md',
              '/docs/Selenium自动化测试环境.md',
              '/docs/RabbitMQ环境.md',
              '/docs/WSO2环境的搭建和使用.md'
            ],
          }
        ],
      },
    },
    markdown: {
        code: {
            lineNumbers: 10
        }
    },
    base: '/',
    dest: './htdocs'
}