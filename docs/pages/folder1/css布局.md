---
title: css布局精髓
date: 2020-09-02
categories:
 - frontEnd
tags:
 - CSS
---

## 前言

- CSS虽说作为HTML的化妆师，便实际上随着float、position、flex、grid的推出，CSS将承担越来越重的布局功能。

- 我们通常提到的布局大多数用于PC端，因为PC端屏幕像素宽度够大，可布局的空间也大；而且网页的设计遵从横向不滚动，纵向无限延伸，所以大部分所说的布局是针对水平方向进行分割。

## 水平布局

- 水平方向常见的布局有单列布局、双列布局、三列布局以及多列布局。

### 单列布局

- 单列布局是最常用的一种布局，它通常是通过设置一个较小的相对大的宽度来保证不同像素宽度屏幕下显示一致。
- 常见的单列布局方向有水平居中和水平左对齐，如网易云音乐和谷歌搜索。

  <img src="https://gitee.com/wavedanger/blog-picgo/raw/master/img/20201002130817.png" width="600px">

  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/20201002130953.png =600x)

- 由上图很显示看到单列布局主要靠margin来控制方向。

- 单列布局的缺点显而易见，无论在么屏幕下宽度一致，在大屏幕下会造成大量的空白冗余，但实际情况网站并不是单一的单列布局，会有其它解决方案，如使用媒体查询。

### 双列布局

- 双列布局使用频率较高，实现效果就是将页面分割成左右宽度不等的两列。
- 宽度较小的列设置为固定宽度，剩余宽度用另一列撑满。
- 一般较大一列为主要内容，较小一列为次要内容。
- 常见的有后台管理，左侧为菜单栏，右侧为配置页面。文档类网站，左侧为导航栏，右侧为内容描述。当然本博客也采用了典型的双列布局。

  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/20201002132645.png =600x)

- 当屏幕宽度够时，优先显示主要内容，次要内容隐藏或垂直方向显示。
- 有时也会和单列布局配合使用，作为单列布局的子布局使用。

### 三列布局

- 三列布局一般中间最宽，左右次之。
- Github就是经典的三列布局。
- CSDN首页是三列布局的另一种方式，算是两种双列布局的嵌套，有明确的主次关系。
  
  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/20201002134139.png =600x)
  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/20201002134020.png =600x)

## 布局实现

- 单列布局主要是通过设置布局容器宽度以及左右边距为auto或者具体数值即可实现。
- 双列布局和三列布局之前在网站看过一篇好文，主要有以下五个步骤：
  1. 为了保证主要布局容器优先级，应将主要布局容器写在次要容器之前。
  2. 将布局容器进行水平排列。
  3. 设置宽度，即次要容器宽度固定，主要容器撑满。
  4. 消除布局方式的副作用，如浮动造成的高度塌陷。
  5. 为了在窄屏下也能正常显示，可以通过媒体查询进行优化。

- 双列布局-flex实现
  
  主要代码实现

  ```html
  <!-- html -->
   <div class="wrap">
    <div class="main">主要布局</div>
    <div class="aside">次要布局</div>
  </div>

  ```
  ```css
  /*css*/
   .wrap {
      display: flex;
      height: 100px;
      flex-direction: row-reverse;
      flex-wrap: wrap;
    }

    .main {
      flex: 1;
      background: aqua;
    }

    .aside {
      width: 200px;
      background: pink;
    }

    @media only screen and (max-width:1000px) {
      .wrap {
        flex-direction: row;
      }

      .main {
        flex: 100%;
      }
    }
  ```

  [原码链接](https://github.com/wavedanger/record/blob/master/cssworld/%E5%B8%83%E5%B1%80%E7%B2%BE%E9%AB%93/col2-5step.html)

- 三列布局-圣杯布局提升版

  主要代码实现

  ```html
  <!-- html -->
   <div class="wrap">
    <div class="main"></div>
    <div class="left"></div>
    <div class="right"></div>
  </div>
  ```

   ```css
  /*css*/
  .wrap {
      padding: 0 300px 0 200px;
    }
    /*清除浮动*/
    .wrap::after {
      content: "";
      display: block;
      clear: both;
    }

    .left,
    .main,
    .right {
      float: left;
      height: 100px;
    }

    .left {
      margin-left: -100%;
      position: relative;
      left: -200px;
      width: 200px;
      background-color: red;
    }

    .right {
      margin-left: -300px;
      position: relative;
      right: -300px;
      width: 300px;
      background-color: yellowgreen;
    }

    .main {
      width: 100%;
      background: green;
    }

    @media only screen and (max-width: 776px) {
      .wrap {
        padding: 0;
      }

      .left {
        margin-left: 0;
        left: 0;
      }

      .right {
        margin-left: 0;
        right: 0;
      }
    }
  ```

  [原码链接](https://github.com/wavedanger/record/blob/master/cssworld/%E5%B8%83%E5%B1%80%E7%B2%BE%E9%AB%93/col3-5step.html)

## 垂直布局

- 垂直方向的布局大部分将页面分成上、中、下三个部分，上下部分高度固定，中间部分高度不定。
- 当页面高度小于浏览器高度时，下部分应固定在屏幕底部；当页面高度超出浏览器高度时，下部分应该随中间部分被撑开，显示在页面最底部。

主要代码实现-flex

- 思路为将布局容器的父元素设置为flex，伸缩方向改为垂直，高度撑满页面，再将中间布局容器flex属性设置为1，让其自适应即可

::: danger
兼容ie10+，懂的都懂
:::

```html
  <div class="wrap">
    <header></header>
    <main></main>
    <footer></footer>
  </div>
```

```css
 html,
    body {
      margin: 0;
      padding: 0;
      overflow: auto;
      height: 100vh;
    }

    .wrap {
      display: flex;
      height: 100%;
      flex-direction: column;
    }

    header,
    footer {
      min-height: 100px;
      background: pink;
    }

    main {
      flex: 1;
      background: purple;
    }
```

[原码链接](https://github.com/wavedanger/record/blob/master/cssworld/%E5%B8%83%E5%B1%80%E7%B2%BE%E9%AB%93/row3-flex.html)

主要代码实现-兼容版

- 将上部分容器与中间部分容器放入共同的父元素中，并让父元素撑满，然后设置内下边距给下部分容器预留空间，下部分布局容器设置上外边距“嵌入”父元素中。

::: warning
兼容ie8+，可以接受吧靓仔
:::

```html
  <div class="wrap">
    <header></header>
    <main> </main>
  </div>
  <footer></footer>
```

```css
  .wrap {
      box-sizing: border-box;
      min-height: 100vh;
      padding-bottom: 100px;
    }

    header,
    footer {
      min-height: 100px;
      background: pink;
    }

    footer {
      margin-top: -100px;
    }

    main {
      background: purple;
    }
```

[原码链接](https://github.com/wavedanger/record/blob/master/cssworld/%E5%B8%83%E5%B1%80%E7%B2%BE%E9%AB%93/row3-relative.html)

## 总结

- 本文介绍了单列，双列，多列及垂直三栏布局的基本解决方案，也是大多数布局的基本思路。
- 具体详细的布局可参考文章[你不知道的栅格布局技巧](https://wavedanger.gitee.io/blog/pages/folder1/%E5%BF%AB%E9%80%9F%E6%8E%8C%E6%8F%A1%E4%BD%A0%E4%B8%8D%E7%9F%A5%E9%81%93%E7%9A%84%E6%A0%85%E6%A0%BC%E5%B8%83%E5%B1%80%E6%8A%80%E5%B7%A7.html)可以了解到多列布局等。
- 思路在这里，结合与运用到实际的工作场景中非常重要。