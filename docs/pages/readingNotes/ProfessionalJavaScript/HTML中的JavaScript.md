---
title: HTML中的Javascript
date: 2021-02-09
categories:
 - frontEnd
 - 读书笔记
tags:
 - JavaScript高级程序设计
 - 读书笔记
publish: true
---

## 1. `<script>`元素

* 拥有8个属性，如下：
<table>
<tr>
    <th colspan="2" style="text-align:center">script8个属性值</th>
</tr>
<tr>
    <td>async</td>
    <td>可选。表示应该立即开始下载脚本，但不能阻止其他页面动作，比如下载资源或等待其
他脚本加载。只对外部脚本文件有效</td>
</tr>
<tr>
    <td>defer</td>
    <td>可选。表示脚本可以延迟到文档完全被解析和显示之后再执行。只对外部脚本文件有效。</td>
</tr>
<tr>
    <td>src</td>
    <td>可选。表示包含要执行的代码的外部文件。</td>
</tr>
<tr>
    <td>type</td>
    <td>可选。代替 language，表示代码块中脚本语言的内容类型（也称 MIME 类型）。一般为"text/javascript"</td>
</tr>
<tr>
    <td>crossorigin</td>
    <td>可选。配置相关请求的CORS（跨源资源共享）设置。默认不使用CORS。crossorigin="anonymous"配置文件请求不必设置凭据标志。crossorigin="use-credentials"设置凭据标志，意味着出站请求会包含凭据。</td>
</tr>
<tr>
    <td>integrity</td>
    <td>可选。允许比对接收到的资源和指定的加密签名以验证子资源完整性</td>
</tr>
<tr>
    <td>charset</td>
    <td>可选。使用 src 属性指定的代码字符集。这个属性很少使用，因为大多数浏览器不在乎它的值。</td>
</tr>
<tr>
    <td>language</td>
    <td>废弃</td>
</tr>
</table>

* 标签位置：现代 Web 应用程序通常将所有 JavaScript 引用放在`<body>`元素中的页面内容后面
* 推迟执行脚本：在`<script>`元素上设置 defer 属性，相当于告诉浏览器立即下载，但延迟执行。
* 异步执行脚本：添加 async 属性的目的是告诉浏览器，不必等脚本下载和执行完后再加载页面，同样也不必等到该异步脚本下载和执行后再加载其他脚本。正因为如此，异步脚本不应该在加载期间修改 DOM。
* 动态加载脚本：使用DOM API动态添加`<script>`，但这常常需要利用`<link>`的`rel='preload'`声明预加载来保证资源获取优先级。

## 2. 行内代码与外部文件

* 推荐使用外部文件，可维护性，缓存，适应未来。

## 3. 文档模式

* 混杂模式与标准模式
* 这两种模式的主要区别只体现在通过 CSS 渲染的内容方面，但对JavaScript 也有一些关联影响，或称为副作用
* 混杂模式在所有浏览器中都以省略文档开头的 doctype 声明作为开关。这种约定并不合理，因为混杂模式在不同浏览器中的差异非常大
* 标准模式有以下几种文档类型

  ```html
  <!-- HTML 4.01 Strict -->
  <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN"
  "http://www.w3.org/TR/html4/strict.dtd">
  <!-- XHTML 1.0 Strict -->
  <!DOCTYPE html PUBLIC
  "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
  <!-- HTML5 -->
  <!DOCTYPE html>
  ```

## 4. `<noscript>`元素

* `<noscript>`元素被用于给不支持 JavaScript 的浏览器提供替代内容。
* 浏览器不支持脚本，浏览器对脚本的支持被关闭。以上任何一个条件被满足，包含在`<noscript>`中的内容就会被渲染。否则，浏览器不会渲染`<noscript>`中的内容。

## 5. 小结

Javascript是通过`<script>`元素插入到HTML页面中的。这个元素可用于把 Javascript代码嵌入到HTML页面中，跟其他标记混合在一起，也可用于引入保存在外部文件中的 Javascript。本章的重点可以总结如下。

* 要包含外部 Javascript 文件，必须将 src 属性设置为要包含文件的 URL。文件可以跟网页在同一台服务器上，也可以位于完全不同的域。
* 所有`<script>`元素会依照它们在网页中出现的次序被解释。在不使用 defer 和 async 属性的情况下，包含在`<script>`元素中的代码必须严格按次序解释。
* 对不推迟执行的脚本，浏览器必须解释完位于`<script>`元素中的代码，然后才能继续渲染页面的剩余部分。为此，通常应该把`<script>`元素放到页面末尾，介于主内容之后及body标签
之前。
* 可以使用 defer 属性把脚本推迟到文档渲染完毕后再执行。推迟的脚本原则上按照它们被列出的次序执行。
* 可以使用 async 属性表示脚本不需要等待其他脚本，同时也不阻塞文档渲染，即异步加载。异步脚本不能保证按照它们在页面中出现的次序执行。
* 通过使用`<noscript>`元素，可以指定在浏览器不支持脚本时显示的内容。如果浏览器支持并启用脚本，则`<noscript>`元素中的任何内容都不会被渲染。
