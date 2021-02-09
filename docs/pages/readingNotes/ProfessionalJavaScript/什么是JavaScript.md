---
title: 什么是 JavaScript
date: 2021-02-08
categories:
 - frontEnd
 - 读书笔记
tags:
 - JavaScript高级程序设计
 - 读书笔记
publish: true
---

## 1. 简短的历史回顾

* 随着 Web 日益流行，对客户端脚本语言的需求也越来越强烈
* 开发一个客户端脚本语言来处理简单的数据验证
* 搭上Java的顺风车，网景取名为JavaScript，将其比喻为雷锋与雷锋塔的关系尤为贴切
* 网景的JavaScript和微软的JScript两个版本的并在促进了ECMAScript标准化的产生
* 自此以后，各家浏览器均以 ECMAScript 作为自己 JavaScript 实现的依据

## 2. JavaScript 实现

主要包含三部分：

<table>
<tr>
    <th colspan="3" style="text-align:center">JavaScript</th>
</tr>
<tr>
    <td>ECMAScript</td>
    <td>DOM</td>
    <td>BOM</td>
</tr>
</table>

### 2.1 ECMASCript

* 在基本的层面，它描述这门语言的如下部分：
    * 语法
    * 类型
    * 语句
    * 关键字
    * 保留字
    * 操作符
    * 全局对象
* ECMAScript 只是对实现这个规范描述的所有方面的一门语言的称呼。JavaScript 实现了
ECMAScript
* ECMAScript 版本更新迭代，可用数字递增表示ES1~ES10，也可用年份ES2015~ES2019，像我们熟知的ES6也可称为ES2015
* 各浏览器版本对ESMAScript标准支持不同，但大部分主流浏览器已支持ES6以上

### 2.2 DOM
* 文档对象模型（DOM，Document Object Model）是一个应用编程接口（API），用于在 HTML 中使用扩展的 XML。DOM 将整个页面抽象为一组分层节点。HTML 或 XML 页面的每个组成部分都是一种节点，包含不同的数据。
* DOM 通过创建表示文档的树，让开发者可以随心所欲地控制网页的内容和结构。使用 DOM API，可以轻松地删除、添加、替换、修改节点。
* DOM也有多个版本，支持 DOM 是浏览器厂商的重中之重，每个版本发布都会改进支持度。

### 2.3 BOM
* 浏览器对象模型（BOM） API，用于支持访问和操作浏览器的窗口。
* 使用 BOM，开发者可以操控浏览器显示页面之外的部分。

## 3. JavaScript 版本
* 作为网景的继承者，Mozilla 是唯一仍在延续最初 JavaScript 版本编号的浏览器厂商。
* 多数浏览器对 JavaScript 的支持，指的是实现 ECMAScript 和 DOM 的程度。

## 4. 小结
JavaScript 是一门用来与网页交互的脚本语言，包含以下三个组成部分：
* ECMAScript：由 ECMA-262 定义并提供核心功能。
* 文档对象模型（DOM）：提供与网页内容交互的方法和接口。
* 浏览器对象模型（BOM）：提供与浏览器交互的方法和接口。

JavaScript 的这三个部分得到了五大 Web 浏览器（IE、Firefox、Chrome、Safari 和    Opera）不同程度的支持。所有浏览器基本上对 ES5（ECMAScript 5）提供了完善的支持，而对 ES6（ECMAScript 6）和ES7（ECMAScript 7）的支持度也在不断提升。这些浏览器对 DOM 的支持各不相同，但对 Level 3 的支持日益趋于规范。HTML5 中收录的 BOM 会因浏览器而异，不过开发者仍然可以假定存在很大一部分公共特性。