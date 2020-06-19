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
<style>
  .p1 {
  list-style-type: none;
}

.p1::after {
  content: "";
  display: block;
  clear: both;
}

.p1 li {
  float: left;
  width: 292px;
  height: 48px;
  padding: 38px 34px;
  border-radius: 8px;
  background-color: #e8e9e9;
  position: relative;
  overflow: hidden;
  margin: 10px;
}

.p1 li:hover .left {
  left: 0;
}

.p1 li:hover .right {
  right: 0;
}

.p1 li img {
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
}

.p1 li h1 {
  margin: 0;
  font-size: 30px;
  font-weight: 600;
  color: #13222d;
  position: relative;
  z-index: 1;
}

.p1 li p {
  font-size: 12px;
  color: #a4a7a8;
  position: relative;
  z-index: 1;
}

.p1 .left,.p1 .right {
  z-index: 3;
  position: absolute;
  top: 0;
  transition: all .5s;
  height: 125px;
}

.p1 .left {
  left: -240px;
  width: 240px;
}

.p1 .left-1 {
  background: #1A2934 url(https://wavedanger.github.io/blog/article/folder1/cssp1/ywz_font.png);
}

.p1 .left-2 {
  background: #1A2934 url(https://wavedanger.github.io/blog/article/folder1/cssp1/yz_font.png);
}

.p1 .right {
  right: -120px;
  padding: 34px 0 0 21px;
  width: 99px;
  height: 91px;
  background-color: #4E9ED5;
}

.p1 .right a {
  text-decoration: none;
  display: block;
  font-size: 12px;
  padding: 7px 15px;
  width: 48px;
  margin-bottom: 5px;
  line-height: 12px;
  text-align: center;
  border-radius: 6px;
  border: 1px solid #bad9ef;
  color: #fff;
}

.p1 .right a:hover {
  background-color: #d4af46;
  border-color: #d4af46;
}
</style>
<ul class="p1">
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

---

## 心形动画
### 效果图
<!-- ![心形动画](../../.vuepress/public/article/folder1/cssheart/heart.gif) -->
<img src="../../.vuepress/public/article/folder1/cssheart/heart.gif" alt="" width="400px">

### 完整代码
[代码链接](https://codepen.io/wavedanger/pen/MWKJQqa?editors=1100)


