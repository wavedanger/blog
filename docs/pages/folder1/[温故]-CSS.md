---
title: CSS经典知识汇总
date: 2020-09-04
categories:
 - frontEnd
tags:
 - CSS
 - 温故而知新
publish: false
---

## 前言

CSS作为前端三剑客之一，毋庸置疑，在日常开发中是十分重要的。当然CSS世界是博大精深的，这里只挑我们日常开发的来讲，满足大部分应用场景，温故而知新。

## 盒模型

  * 由四部分组成，从外往内依次为
    * 外边距margin
    * 边框border
    * 内边距padding
    * 内容content
  
  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/20201003003637.png =400x)

  * 有两种盒模型，决定不同的元素大小(width,height)
    * W3C盒模型-盒子宽高=content宽高
    * IE盒模型-盒子宽高=content宽高+padding宽高+border宽高

  * 使用box-sizing属性可以在两种盒模型切换
    * box-sizing:border-box切换为IE式，此较为常用
    * box-sizing:content-box切换为W3C式，此为默认值

## BFC

### 什么是BFC

- Block fomatting context，简称BFC，译为块级格式化上下文，是Web页面的可视CSS渲染的一部分，是块盒子的布局过程发生的区域，也是浮动元素与其他元素交互的区域。
- 具有 BFC 特性的元素可以看作是隔离了的独立容器，容器里面的元素不会在布局上影响到外面的元素，并且 BFC 具有普通容器所没有的一些特性。

### 如何创建BFC

- 下列方式会创建块格式化上下文：
  - 根元素（html）
  - 浮动元素（元素的 float 不是 none）
  - 绝对定位元素（元素的 position 为 absolute 或 fixed）
  - 行内块元素（元素的 display 为 inline-block）
  - 表格单元格（元素的 display 为 table-cell，HTML表格单元格默认为该值）
  - 表格标题（元素的 display 为 table-caption，HTML表格标题默认为该值）
  - 匿名表格单元格元素（元素的 display 为 table、table-row、 table-row-group、table-header-group、table-footer-group（分别是HTML table、row、tbody、thead、tfoot 的默认属性）或 inline-table）
  - overflow 值不为 visible 的块元素
  - 弹性元素（display 为 flex 或 inline-flex 元素的直接子元素）
  - 网格元素（display 为 grid 或 inline-grid 元素的直接子元素）

- 注意：块格式化上下文包含创建它的元素内部的所有内容。

### BFC特性和应用

- 同一个BFC下外边距垂直方向会发生重叠
  - 将元素放在不同的BFC中可消除重叠

- BFC可以包含浮动元素
  - 让父元素产生BFC可清除浮动，此时父元素将包裹浮动的子元素，防止高度塌陷

- BFC可以阻止元素被浮动元素覆盖
  - 当两个块级元素水平排列，一个元素浮动时，往往没有浮动的会被覆盖
  - 此时可以使无浮动的元素产生BFC来避免
  - 同时这也是产生两列自适应布局的经典方案


## link和@import

- 从属关系
  - link是HTML提供的标签，不仅可以加载CSS文件，还可以定义RSS、rel连接属性等
  - @import是CSS提供的语法规则，只有导入样式表的作用
- 加载顺序
  - 加载页面时，link标签引入的CSS被同时加载
  - @import引入的 CSS 将在页面加载完毕后被加载
- 兼容性
  - link标签作为HTML元素，不存在兼容性问题
  - @import是CSS2.1才有的，兼容IE5+
- DOM操作
  - link标签可通过JS操作
  - @import无法操作

## 居中布局

直接上图！

![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/middleCenterMindMap.jpg)

[布局源码大全](https://github.com/wavedanger/record/tree/master/cssworld/%E5%B8%83%E5%B1%80)

## 伪类和伪元素

- 在CSS3中，伪类用':'伪元素用'::'，实际开发中都用':'也是可以的
- 伪类可以叠加使用，而伪元素在一个选择器中只能出现一次，并且只能出现在末尾
- 伪类与类优先级相同，伪元素与标签优先级相同
- 样式可能会被后声明的其他链接相关的伪类覆盖，这些伪类包括 (:link, :visited, :hover,和:active)。要适当地设置链接样式，参照 LVHA 顺序::link — :visited — :hover — :active。
- 常见伪类
  
  | 选择器            | 描述                                                                                                         |
  | ----------------- | ------------------------------------------------------------------------------------------------------------ |
  | :link             | 匹配未曾访问的链接                                                                                           |
  | :visited          | 匹配已访问链接。                                                                                             |
  | :hover            | 当用户悬浮到一个元素之上的时候匹配                                                                           |
  | :active           | 在用户激活（例如点击）元素的时候匹配。                                                                       |
  | :checked          | 匹配处于选中状态的单选或者复选框。                                                                           |
  | :disabled         | 匹配处于关闭状态的用户界面元素                                                                               |
  | :enabled          | 匹配处于开启状态的用户界面元素                                                                               |
  | :empty            | 匹配除了可能存在的空格外，没有子元素的元素                                                                   |
  | :focus            | 当一个元素有焦点的时候匹配                                                                                   |
  | :first-child      | 匹配兄弟元素中的第一个元素                                                                                   |
  | :first-of-type    | 匹配兄弟元素中第一个某种类型的元素                                                                           |
  | :last-child       | 匹配兄弟元素中最末的那个元素                                                                                 |
  | :last-of-type     | 匹配兄弟元素中最后一个某种类型的元素                                                                         |
  | :not              | 匹配作为值传入自身的选择器未匹配的物件                                                                       |
  | :nth-child        | 匹配一列兄弟元素中的元素——兄弟元素按照an+b形式的式子进行匹配（比如2n+1匹配元素1、3、5、7等。即所有的奇数个） |
  | :nth-of-type      | 匹配某种类型的一列兄弟元素                                                                                   |
  | :nth-last-child   | 匹配一列兄弟元素，从后往前倒数。兄弟元素按照an+b形式的式子进行匹配                                           |
  | :nth-last-of-type | 匹配某种类型的一列兄弟元素，从后往前倒数                                                                     |

  - 常见伪元素
  
  | 选择器         | 描述                                               |
  | -------------- | -------------------------------------------------- |
  | ::before       | 匹配出现在原有元素的实际内容之前的一个可样式化元素 |
  | ::after        | 匹配出现在原有元素的实际内容之后的一个可样式化元素 |
  | ::first-letter | 匹配元素的第一个字母                               |
  | ::first-line   | 匹配包含此伪元素的元素的第一行                     |

## 选择器优先级

- 优先级就是分配给指定的 CSS 声明的一个权重，它由 匹配的选择器中的 每一种选择器类型的数值决定。

- 而当优先级与多个 CSS 声明中任意一个声明的优先级相等的时候，CSS 中最后的那个声明将会被应用到元素上。

- 当同一个元素有多个声明的时候，优先级才会有意义。因为每一个直接作用于元素的 CSS 规则总是会接管/覆盖（take over）该元素从祖先元素继承而来的规则。

- CSS权重如下：!important->行内样式->ID选择器->Class、属性和伪类选择器->类型(标签)和伪元素选择器
- CSS权重计算我们可以用向量标志表示(0,0,0,0)，四项表示从ID到标签，根据每项选择器类型的数值来判断优先级

![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/fc2c05bc14c154f8bd0e0f584c4ef69.png)
![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/ee48ef20d6e9aa41d995304378a7d1a.png)

## 清浮动

1. 父元素定义高度(前提是子元素内容永不超过父元素，扩展性弱)
2. 在父元素最后添加个空的div做为子元素，添加clear:both(语义化问题)
   ```html
   <div class="father">
    <div class="child"></div>
    <div style="clear:both"></div>
   </div>
   ```
3. 伪元素和IEhack(推荐使用，ie6-7不支持伪元素：after，使用zoom:1触发hasLayout)
   ```css
   .clearfix{
     *zoom:1
   }
   .clearfix::after{
     content:'';
     display:block;
     clear:both;
     height:0;
     line-height;
     visibility:hidden;
   }
   )
   ```
4. 给父元素设置overflow:hidden，触发BFC(子元素内容多时会隐藏)

## 层叠上下文

- 屏幕上的“z”轴，纵深
- 层叠顺序
  
  ![](https://gitee.com/wavedanger/blog-picgo/raw/master/img/2016-01-07_235108.png)

- 层叠顺序准则
  - 谁大谁上 | 同一层叠水平，z-index大的覆盖小的
  - 后来居上 | 同一层叠水平，处于DOM流后的覆盖前的
  - position定位会产生层叠上下文，相当于z-index:auto段

## 等比宽高

- 通过vw视口单位(IE9+)，多用于移动端实现宽高等比自适应容器
  - 以下代码可表示一张宽度100%宽高比3:1的图片
    ```css
    *{
      margin:0;
      padding:0;
    }
    .banner{
      width:100%;
      height:33.3vw;
    }
    ```
- 通过padding
  - padding属性百分比的值是基于其父元素宽度的
  - 以下代码表示宽高2:1的容器
    ```html
    <div class="container">
      <div class="content"></div>
    </div>
    ```
    ```css
    .container{
      width:100%;
    }
    .content{
      width:100%;
      height:0;
      padding-bottom:50%;
    }
    ```
- img、video等替换元素默认就为等比宽高

## 媒体查询

- 使用@media媒体查询可以针对不同的媒体类型定义不同的样式，特别是响应式页面，可以针对不同屏幕的大小，编写多套样式，从而达到自适应的效果。
  
  ```css
  @media screen and (max-width: 960px){
    body{
      background-color:#FF6699
    }
  }

  @media screen and (max-width: 768px){
      body{
        background-color:#00FF66;
      }
  }

  @media screen and (max-width: 550px){
      body{
        background-color:#6633FF;
      }
  }

  @media screen and (max-width: 320px){
      body{
        background-color:#FFFF00;
      }
  }
  ```

- 不同屏幕二倍图与三倍图的实现
- 当样式太多，浏览器改变大小时，多套样式代码会很繁琐

## 单位(px,rem,em,vw,%)

- px,像素
- em,基于上级元素，默认基于浏览器默认字体大小
- %,百分比
- rem,根元素的font-size
- vm,视窗宽度，1vw=视窗宽度的1%
- vh,视窗高度，1vh=视窗高度的1%

## rem适配方案

## 1px

## flex

## grid

## css3新特性

## 动画

## 预处理机制 css-loader

## css module




