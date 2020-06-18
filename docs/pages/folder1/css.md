---
title: css世界
date: 2020-06-07
categories:
 - frontEnd
tags:
 - CSS
---

## 梦幻西游官网走灯人
### 资源图
![](../../.vuepress/public/article/folder1/csswalkflash/monkey.png)
### 效果图
<style>
@keyframes move {
  from {
    background-position-x: 0
  }
  to {
    background-position-x: -1600px
  }
}
</style>
<div style="
width:200px;
height:200px;
background:url(https://wavedanger.github.io/blog/article/folder1/csswalkflash/monkey.png) no-repeat left top;animation:move 1.4s steps(8) infinite;"></div>

### 完整代码
[代码链接](https://codepen.io/wavedanger/pen/abdOEpK?editors=1100)

---

## 冰川网络图片关门效果
### 效果图

<link rel="stylesheet" type="text/css" href="./../../.vuepress/public/article/folder1/cssp1/index.css">
<ul>
  <li>
    <img src="https://wavedanger.github.io/blog/article/folder1/cssp1/ywz_game.jpg" alt="">
    <h1>影武者</h1>
    <p>MMORPG</p>
     <div class="left left-1"></div>
     <div class="right">
       <a href="">进入官网</a>
       <a href="">游戏论坛</a>
    </div>
  </li>
  <li>
     <img src="https://wavedanger.github.io/blog/article/folder1/cssp1/yz_game.jpg" alt="">
    <h1>远征</h1>
    <p>MMORPG</p>
     <div class="left left-2"></div>
     <div class="right">
       <a href="">进入官网</a>
       <a href="">游戏论坛</a>
    </div>
  </li>
</ul>

### 完整代码
[代码链接](https://codepen.io/wavedanger/pen/oNbYaRy)