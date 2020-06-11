# hello vuepress
## 前言
* 记录第一次使用vuepress
## 参考资料
  * [VuePress中文](https://vuepress.vuejs.org/zh/)
  * [1小时搞定vuepress快速制作vue文档/博客+免费部署预览](https://juejin.im/post/5dce1e0e5188254eda3936c5)
  * 环境
    * npm or yarn
    * markdown
## 安装
1. 创建本地文件夹并进入
   ```
   mkdir my-vuepress
   cd my-vuepress
   ```
2. npm全局安装vuepress
    ```
    npm install -g vuepress
   ```
3. 初始化项目
    ```
    npm init -y//得到package.json
   ```
4. 初始化得到package.json，进入修改scripts
     ```
    "scripts": {
    "dev": "vuepress dev docs",         //用于实时预览
    "build": "vuepress build docs"      //用于打包项目
      }
   ```
5. 接下来就是重点了，创建vuepress的项目文件夹和文件，以下为官网推荐目录[官网目录](https://vuepress.vuejs.org/zh/guide/directory-structure.html)
      ```
      ├── docs
      │   ├── .vuepress (可选的)
      │   │   ├── components (可选的)
      │   │   ├── theme (可选的)
      │   │   │   └── Layout.vue
      │   │   ├── public (可选的)
      │   │   ├── styles (可选的)
      │   │   │   ├── index.styl
      │   │   │   └── palette.styl
      │   │   ├── templates (可选的, 谨慎配置)
      │   │   │   ├── dev.html
      │   │   │   └── ssr.html
      │   │   ├── config.js (可选的)
      │   │   └── enhanceApp.js (可选的)
      │   │ 
      │   ├── README.md
      │   ├── guide
      │   │   └── README.md
      │   └── config.md
      │ 
      └── package.json


      ```
6. 这里我们可以先创建以上的docs->README.md，在编辑README.md后，运行npm run dev即可打开初始页面，后续配置详细看[官网](https://vuepress.vuejs.org/zh/guide/directory-structure.html)