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

---

## 太极图
### 效果图
<style>
.wrap{
  position:relative;
  width:200px;
  height:100px;
  background-color:white;
  border-width:1px 1px 100px 1px;
  border-color:black;
  border-style:solid;
  border-radius:50%;
  animation:run 2s linear infinite;
}
.wrap::before,.wrap::after{
   content:'';
  width:20px;
  height:20px;
  position:absolute;
  top:50%;
  border-radius:50%;
}
.wrap::before{ 
  left:0;
  background-color:black;
  border:40px solid white;
}
.wrap::after{
  right:0;
  background-color:white;
  border:40px solid black;
}
@keyframes run{
  0%{
    transform:rotate(0)
  }
  100%{
    transform:rotate(360deg)
  }
}
</style>

<div class="wrap">
</div>

### 完整代码
[代码链接](https://codepen.io/wavedanger/pen/dyGNLxp?editors=1100)

---

## 守望先锋英雄选择
### 效果图
<style>
.heroes{
  background-color:#ADBEDC;
  text-align:center;
  padding:30px;
}
.heroes a{
  text-decoration:none;
  position:relative;
  display:inline-block;
      border: 2px solid rgba(255,255,255,.4);
    border-radius: 1px;
  transition: all .1s;
    background-color:#2E2A2E;
  cursor: pointer;
}
.heroes a:hover{
  transform: scale(1.15);
  border-color: #fff;
  z-index:10;
}
.heroes a:hover .container{
  background-color:#fff;
}
.heroes a:hover .title{
  color: #1a325e;
}
.heroes a:hover .icon{
  fill: #1a325e;
}
.heroes .container{
  position: absolute;
  bottom: 0;
  left: 0;
  display: block;
  width: 100%;
  text-align: center;
  height: 70px;
  background: rgba(40,53,79,.9);
}
.heroes .icon{
  position:absolute;
  top:8px;
  left:8px;
  fill:#fff;
}
.heroes .icon svg{
  width:18px;
  height:18px;
}
.heroes .title{
  font-size:25px;
  font-family: "Big Noodle Too","microsoft yahei",impact,sans-serif;
    font-style: italic;
    color: #d0d0dc;
    width: 100%;
    position: absolute;
    left: 0;
    bottom: 6px;
}
</style>

<div class="heroes">
  <a href="https://ow.blizzard.cn/heroes/genji" class="hero">
    <img src="https://wavedanger.github.io/blog/article/folder1/owhero/genji.png" alt="">
    <span class="container">
      <span class="icon"> <svg viewBox="0 0 32 32" role="presentation" class="icon">
              <g>
                  <path d="M2.1 28.1h7.1V32H2.1z"></path>
                  <path d="M9.1 7v-.7C8.6 1.5 5.6 0 5.6 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
              </g>
              <g>
                  <path d="M12.5 28.1h7.1V32h-7.1z"></path>
                  <path d="M19.5 7v-.7C19 1.5 16 0 16 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
              </g>
              <g>
                  <path d="M22.9 28.1H30V32h-7.1z"></path>
                  <path d="M29.9 7v-.7C29.4 1.5 26.4 0 26.4 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
              </g>
        </svg></span><span class="title">源氏</span>
    </span>
   </a>
    <a href="https://ow.blizzard.cn/heroes/doomfist" class="hero">
    <img src="https://wavedanger.github.io/blog/article/folder1/owhero/mo.png" alt="">
    <span class="container">
      <span class="icon"><svg viewBox="0 0 32 32" role="presentation" class="icon">
            <g>
                <path d="M2.1 28.1h7.1V32H2.1z"></path>
                <path d="M9.1 7v-.7C8.6 1.5 5.6 0 5.6 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
            <g>
                <path d="M12.5 28.1h7.1V32h-7.1z"></path>
                <path d="M19.5 7v-.7C19 1.5 16 0 16 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
            <g>
                <path d="M22.9 28.1H30V32h-7.1z"></path>
                <path d="M29.9 7v-.7C29.4 1.5 26.4 0 26.4 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
        </svg></span>
      <span class="title">末日铁拳</span>
    </span>
   </a>
  <a href="https://ow.blizzard.cn/heroes/soldier-76" class="hero">
    <img src="https://wavedanger.github.io/blog/article/folder1/owhero/soldier-76.png" alt="">
    <span class="container">
      <span class="icon"><svg viewBox="0 0 32 32" role="presentation" class="icon">
            <g>
                <path d="M2.1 28.1h7.1V32H2.1z"></path>
                <path d="M9.1 7v-.7C8.6 1.5 5.6 0 5.6 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
            <g>
                <path d="M12.5 28.1h7.1V32h-7.1z"></path>
                <path d="M19.5 7v-.7C19 1.5 16 0 16 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
            <g>
                <path d="M22.9 28.1H30V32h-7.1z"></path>
                <path d="M29.9 7v-.7C29.4 1.5 26.4 0 26.4 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
        </svg></span>
      <span class="title">士兵76</span>
    </span>
   </a>
  <a href="https://ow.blizzard.cn/heroes/mccree" class="hero">
    <img src="https://wavedanger.github.io/blog/article/folder1/owhero/mccree.png" alt="">
    <span class="container">
      <span class="icon"><svg viewBox="0 0 32 32" role="presentation" class="icon">
            <g>
                <path d="M2.1 28.1h7.1V32H2.1z"></path>
                <path d="M9.1 7v-.7C8.6 1.5 5.6 0 5.6 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
            <g>
                <path d="M12.5 28.1h7.1V32h-7.1z"></path>
                <path d="M19.5 7v-.7C19 1.5 16 0 16 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
            <g>
                <path d="M22.9 28.1H30V32h-7.1z"></path>
                <path d="M29.9 7v-.7C29.4 1.5 26.4 0 26.4 0s-3 1.5-3.5 6.3V25.4h7V7z"></path>
            </g>
        </svg></span>
      <span class="title">麦克雷</span>
    </span>
   </a>
</div>

### 完整代码
[代码链接](https://codepen.io/wavedanger/pen/YzwNbrr?editors=1100)