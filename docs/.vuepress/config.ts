import { copyCode } from "vuepress-plugin-copy-code2";

module.exports = {
  // 站点配置
  lang: 'zh-CN',
  title: 'View Docs',
  description: '基于Docker搭建的View系统本地开发环境',
  theme: '@vuepress/theme-default',
  themeConfig: {
    repo: 'wqf100124/tke-view',
    contributors: false,
    lastUpdated: false,
    editLink: false,
    navbar: [
      {
        text: 'Docker镜像',
        link: 'https://hub.docker.com/r/rtwadewang/tke',
      }
    ],
    sidebar: {
      '/guide/': [
        {
          children: [
            '/guide/view.md',
            '/guide/autotest.md',
            '/guide/rabbitmq.md',
            '/guide/wso2.md',
            '/guide/solr.md',
          ],
        },
      ],
      // '/guide/': [
      //   {
      //     collapsible: false,
      //     children: [
      //       {
      //         text: 'View本地开发环境',
      //         link: '/guide/view.md',
      //         children: [],
      //       },
      //       {
      //         text: 'Autotest自动化测试环境',
      //         link: '/guide/autotest.md',
      //         children: [],
      //       },
      //       {
      //         text: 'RabbitMQ消息队列',
      //         link: '/guide/rabbitmq.md',
      //         children: [],
      //       },
      //       {
      //         text: 'WSO2服务',
      //         link: '/guide/wso2.md',
      //         children: [],
      //       },
      //       {
      //         text: 'Solr服务',
      //         link: '/guide/solr.md',
      //         children: [],
      //       }
      //     ]
      //   }
      // ],
    },
  },
  markdown: {
    code: {
      lineNumbers: 10
    }
  },
  plugins: [
    copyCode({
      pure: true
    }),
  ],
  base: '/',
  dest: './dist'
}