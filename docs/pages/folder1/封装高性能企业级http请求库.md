---
title: 网易云课堂-实战开发，如何封装高性能企业级http请求库-谭金龙-笔记
date: 2020-10-12
categories:
 - 公开课
tags:
 - 公开课
publish: false
---

## 数据请求的进化

1. 前后端分离
   * 开发从职责上进行划分，前端负责交互，后端负责业务处理，分工明确，各司其职。
   * 前端职责：页面的UI，页面的展示，交互，渲染，用户体验等。
   * 后端职责：数据存储，业务逻辑，接口，性能，可用性，伸缩性，扩展性，安全性。
   * 并行开发，前后端几乎互不影响。
2. 前端主要负责浏览器端，小程序等，Nodejs的出现，“大前端”应运而生。
3. 真正的前后端应按运行环境来区分。
4. 涉及到前后端，势必会涉及数据通迅。
5. 浏览器发起请求，服务器返回数据。
6. 以下是浏览器会发起请求的方式：
7. 在没有ajax之前，发起http请求，势必会造成页面跳转。但ajax会产生地狱回调问题，后续有promise，async/await，Generator函数解决这一问题。
   ```js
   let xhr
   ```

## Fetch

* fetch，是一种http数据请求的方式，不是XMLHttpRequest替代方法，也不是ajax的进一步封装。它是原生的，是浏览器内置的。但存在兼容性问题，对IE浏览器不友好，可通过fetch-polyfill解决。
   ```js
   let xhr
   ```

## 封装企业级http请求库

1. axios进行二次封装
   * JQuery中.ajax是对原生XHR进行封装
   * axios本质也是对于原生XHR的封装，只过它是基于promise的

## 总结

* 老师重感冒，坚持公开课，很敬业，但感觉讲得不是很好。。。
