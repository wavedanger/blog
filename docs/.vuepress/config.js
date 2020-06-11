module.exports = {
  base: '/blog/',
  title: '浪险的首页',
  description: '浪险 前端 记录 快乐',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['meta', { name: 'author', content: '浪险' }],
    ['meta', { name: 'keywords', content: '浪险 vuepress 前端 记录 笔记' }]
  ],
  plugins: [
    [
      '@vuepress/last-updated',
      {
        transformer: (timestamp) => {
          // 不要忘了安装 moment
          const moment = require('moment')
          moment.locale('zh-cn')
          return moment(timestamp).format("LLLL")
        }
      }
    ],
    ['@vuepress/back-to-top']
  ],
  themeConfig: {
    lastUpdated: '更新时间',
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/' },
      {
        text: '文章',
        ariaLabel: '文章',
        items: [
          { text: '简介', link: '/pages/folder1/introduce.md' },
          { text: '分享', link: '/pages/folder1/share.md' },
        ]
      },
      { text: '浪记', link: '/pages/folder2/daily.md' },
      { text: '浪享', link: '/pages/folder3/share.md' },
      { text: 'Github', link: 'https://github.com/wavedanger' },
    ],
    sidebar: {
      '/pages/folder1/': [
        {
          title: '浪险',
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['introduce.md', '关于我']
          ]
        },
        {
          title: '学习分享',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['share.md', '个人向汇总']
          ]
        },
        {
          title: 'css',
          collapsable: false,
          children: [
            ['css.md', 'css世界']
          ]
        },
        {
          title: '公开课笔记',
          collapsable: false,
          children: [
            // ['JS&&数据处理.md', 'JS&&数据处理'],
            ['编码规范.md', '编程思想&&编程规范']
          ]
        },
        {
          title: '其它',
          collapsable: false,
          children: [
            ['useVuePress.md', '使用VuePress+github搭建个人博客'],
            ['百度AI-植物识别初探.md', '百度AI-植物识别初探'],
            ['小程序简历.md', '微信小程序-个人简历']
          ]
        }
      ],
      '/pages/folder2/': [
        {
          title: '浪记',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['daily.md', '喋喋不休']
          ]
        }
      ],
      '/pages/folder3/': [
        {
          title: '浪享',
          collapsable: false, // false为默认展开菜单, 默认值true是折叠,
          sidebarDepth: 1,    //  设置侧边导航自动提取markdown文件标题的层级，默认1为h2层级
          children: [
            ['share.md', '福利向']
          ]
        }
      ]
    }
  }
}