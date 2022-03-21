module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'View开发环境',
  description: '学习如春起之苗，不见其长，日有所长',
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'wqf100124/tke-view',
    contributors: false,
    lastUpdated: false,
    editLink: false,
    logo: '/images/tke_logo.png',
    navbar: [
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