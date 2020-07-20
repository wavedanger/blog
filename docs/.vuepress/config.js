const valineConf = require("./config/secret")
module.exports = {
  //reco 主题
  theme: 'reco',
  // 博客配置
  blogConfig: {
    category: {
      location: 2,     // 在导航栏菜单中所占的位置，默认2
      text: 'Category' // 默认文案 “分类”
    },
    tag: {
      location: 3,     // 在导航栏菜单中所占的位置，默认3
      text: 'Tag'      // 默认文案 “标签”
    }
  },
  //reco 主题
  base: '/blog/',
  title: '浪险',
  description: '前端 记录 快乐',
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }],
    ['link', { rel: 'stylesheet', href: "/article/font.css" }],
    ['meta', { name: 'author', content: '浪险' }],
    ['meta', { name: 'keywords', content: '浪险 vuepress 前端 记录 笔记' }],
    ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
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
    ]
    // ['@vuepress/back-to-top']
  ],
  themeConfig: {
    type: 'blog',//reco 主题类
    author: '浪险',
    authorAvatar: '/logo.png',//reco 右侧头像
    lastUpdated: '更新时间',
    logo: '/logo.png',
    nav: [
      { text: 'Home', link: '/', icon: 'reco-home' },
      {
        text: '文章',
        ariaLabel: '文章',
        icon: 'reco-category',
        items: [
          { text: '简介', link: '/pages/folder1/introduce.md', icon: 'reco-faq' },
          { text: '分享', link: '/pages/folder1/share.md', icon: 'reco-document' },
        ]
      },
      { text: '浪记', link: '/pages/folder2/daily.md', icon: 'reco-suggestion' },
      { text: '浪享', link: '/pages/folder3/share.md', icon: 'reco-three' },
      { text: 'TimeLine', link: '/timeline/', icon: 'reco-date' },
      { text: 'Github', link: 'https://github.com/wavedanger', icon: 'reco-github' },
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
            ['share.md', '个人向汇总'],
            ['前端知识图谱.md', '前端知识图谱']
          ]
        },
        {
          title: 'css',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['css.md', 'css动画']
          ]
        },
        {
          title: '公开课笔记',
          collapsable: false,
          sidebarDepth: 1,
          children: [
            // ['JS&&数据处理.md', 'JS&&数据处理'],
            ['编码规范.md', '编程思想&&编程规范'],
            ['揭秘ES6的块级作用域的真相.md', '揭秘ES6的块级作用域'],
            ['通用支付模块的设计与开发.md', '通用支付的设计与开发'],
            ['前端也能写后台？.md', '前端也能写后台？']
          ]
        },
        {
          title: '其它',
          collapsable: false,
          sidebarDepth: 1,
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
          collapsable: false,
          sidebarDepth: 1,
          children: [
            ['share.md', '福利向']
          ]
        }
      ]
    },
    //评论
    valineConfig: valineConf
  }
}