---
title: PicGo图床搭建
date: 2020-09-10
categories:
 - 其它
tags:
 - 实用工具
---

## 前言

日常的博客工作总需要使用到图片，之前的我一直将图片直接git上传图片到github或者码云，再通过https协议访问，但总归有些麻烦，也比较零乱，而且最近github老是拒绝了我的请求，相对路径访问正常，但https访问会导致图片访问出错，可能是我不够靓仔吧！又由于我博文有些用到[codepen](https://codepen.io)，不得不使用网络图片。因此，我开始寻找解决方案，于是就找到了PicGo图床。

## 简介

* [PicGo](https://github.com/Molunerfinn/PicGo) 一个用于快速上传图片并获取图片 URL 链接的工具
* PicGo 本体支持如下图床：
  - 七牛图床 v1.0
  - 腾讯云 COS v4\v5 版本 v1.1 & v1.5.0
  - 又拍云 v1.2.0
  - GitHub v1.5.0
  - SM.MS V2 v2.3.0-beta.0
  - 阿里云 OSS v1.6.0
  - Imgur v1.6.0
  - 支持gitee插件
* 这里是[使用文档](https://picgo.github.io/PicGo-Doc/zh/guide/getting-started.html)，因为文档使用的是github pages，如果打不开，应该是被墙了，写这篇文章时github.io后缀的网站我都访问不了
* github仓库里有下载链接，我这里以window为例

## 使用

* 新建图床仓库（这里以码云为例）
  * 码云主页->新建仓库
  
  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/1601522318.png =400x)

* 创建私人令牌
  * 点击右上角头像->设置->找到左侧导航栏的私人令牌->点击生成新令牌

  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/1601519651(1).png =400x)
  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/1601519784(1).png =400x)

* 配置Gitee图床
  * 下载PicGo，[传送门](https://github.com/Molunerfinn/PicGo/releases)
    
  * 打开软件->找到插件设置->搜索gitee->选择第二个进行安装

    ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/1601520165(1).png =400x)


  * 在图床设置里找到gitee选项卡，填补以下参数

    ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/1601520827(1).png =400x)

    | x          |         y          |
    | ---------- | :----------------: |
    | repo       |      仓库路径      |
    | branch     |        分支        |
    | token      |        令牌        |
    | path       |      图片路径      |
    | customPath | 图片提交时时间格式 |
    | customUrl  |      不用填写      |

* 上传图片
  * 切换至上传区选项卡，将文件上传后，再markdown右键粘贴即可使用，也可在PicGo选项卡修改上传快捷键及其它
  * 我通常是直接Ctrl+Shift+P然后再接粘贴到Markdown使用，具体操作看[使用文档](https://picgo.github.io/PicGo-Doc/zh/guide/getting-started.html)
  * 这里插个题外话，由于markdown上默认无法修改图片大小，除了使用原生的width标签，而我这里是用vuepress，所以我去找到了 [vuepress-plugin-image](https://developer.aliyun.com/mirror/npm/package/vuepress-plugin-image)支持设置宽度和懒加载。
  
    ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/20201001112746.png =400x)

## 总结

* PicGo相当于可视化上传我们图片到线上仓库，方便管理和使用
* 码云相对于github国内访问速度较快，但github容量更大
* github pages最近一直被墙，码云或许是更优的选择
* PicGo实际来说简化了我上传的操作，当然也方便了管理