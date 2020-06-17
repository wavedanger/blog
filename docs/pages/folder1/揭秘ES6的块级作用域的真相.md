---
title: 慕课公开课-揭秘ES6块级作用域的真相-李游Leo-笔记
date: 2020-06-17
categories:
 - 公开课
tags:
 - 公开课
---
## 介绍
* Javascript作用域是可访问变量的集合
* 块级作用域是ES6出现之后新出现的一种作用域
## 先上代码
* 先想想以下代码的输出结果，如果你觉得so easy，那没事了，congratulation！如若没有思路，请继续往下看。
  ```javascript
  var a=10;
  {
    a=30;
    function a(){};
    a=90;
  };
  console.log(a);
  ```
  ::: details 答案
  30(主流浏览器下，谷歌火狐等)
  90(safari)
  :::
## js基础

* 在解决以上问题前，我们得先了解下js报错、预解析、变量提升、作用域

### js报错
* 分为两种
  * 运行错误(出错前的语句会输出)
     ```javascript
    console.log(10);//10
    alert(a);//Uncaught ReferenceError: a is not defined
    console.log(10);
    ```
  * 语法错误(无论怎样语句都不会输出)
    ```javascript
    console.log(10);//"SyntaxError: Invalid or unexpected token"
    123456wavedanger
    console.log(10);
    ```

### 预解析
*  js会通过预解析读两遍我们的代码，第一遍检查是否有语法错误，会触发变量提升(var变量提升)，如有错误就中止并报错，没有则运行js代码，接下来就要看是否有运行时的错误了

### 变量提升
  * 初阶
  ```javascript
  b();
  console.log(a);
  var a=1;
  function b(){
    console.log("b")
  }
  ```
  ::: details 解析
  ```javascript
  //相当于
  //var a;
  //var b=function(){console.log("b")}
  b();//"b"
  console.log(a);//undefined
  var a=1;
  function b(){
    console.log("b")
  }
  ```
  :::
  * 进阶
  ```javascript
  console.log(b);
  var b=10;
  function b(){}
  console.log(b);
  ```
  ::: details 解析
  ```javascript
  //相当于，函数提升优先级大于变量有这么一种说法
  //老师也没否认，只是说记住是以下这么写
  //var b
  //var b=function(){}
  console.log(b);//ƒ b(){}
  var b=10;//此时b赋值为10
  function b(){}
  console.log(b);//10
  ```
  :::

### 作用域
  * 作用域包括全局作用域(script标签)、函数作用域(function(){})、eval作用域(少用)
  * 函数作用域-初阶
  ```javascript
  function a(){
    console.log(b);
    var b=10;
  }
  a();
  ```
  ::: details 解析
  ```javascript
  function a(){
    //var b
    console.log(b);//undefined
    var b=10;
  }
  a();
  ```
  :::

  * 函数作用域-进阶
  ```javascript
  var b=20;
  function a(){
    console.log(b);
    var b=10;
  }
  a();
  ```
  ::: details 解析
  因为是函数作用域其实这里跟以上初阶的一样，仍是undefined
  :::

  * 函数作用域-进阶-this
  ```javascript
  var b=20;
  function a(){
    console.log(this.b);
    var b=10;
  }
  a();
  ```
  ::: details 解析
  这是老师没有讲的，我自己之前在某个地方看过的，这里的this只有调用时才知道指向，而a()是在全局作用域下的，所以指向window，即window.b，也就是20
  :::

  * 函数作用域-进阶-实参
  ```
  var b=20;
  function a(b){
    console.log(b);
    var b=10;
  }
  a(30);
  ```
  ::: details 解析
  实参赋值在变量提升之后
  ```javascript
    var b=20;
    function a(b){
      //var b;
      //var b=30;
      console.log(b);//30
      var b=10;
    }
    a(30);
  ```
  :::

  * 函数作用域-进阶-实参-函数
  ```javascript
  var b=20;
  function a(b){
    console.log(b);
    var b=10;
    function b(){};
  }
  a(30);
  ```
  ::: details 解析
  提升顺序为：变量-实参-函数
  ```javascript
  var b=20;
  function a(b){
    //var b;
    //var b=30;
    //var b=function(){};
    console.log(b);//ƒ b(){}
    var b=10;
    function b(){};
  }
  a(30);
  ```
  :::
## 块级作用域
* 从以上我们知道了var提升，那么块级作用域{}是否会影响变量的提升呢，答案是不会的，如下代码，除了提升到内部作用域顶部也提升到外部作用域
  ```javascript
  //var a;
  console.log(a)//undefined
  {
    console.log(a)//undefined
    var a=30;
  }
  ```
* 那么如何利用该块级作用域呢，用let就ok了
  ```javascript
  console.log(a)//ReferenceError: a is not defined
  {
    console.log(a)//因为是运行时错误让所以这里的不会输出
    let a=30;
  }
  ```
* 我们来看下函数提升是否也会受块级作用域影响，事实证明也不会
  ```javascript
  //var a=function(){}
  console.log(a);//ƒ a(){}
  {
    //var a=function(){}
    console.log(a);//ƒ a(){}
    function a(){}
  }
  console.log(a);//ƒ a(){}
  ```
* 最后冲刺
  * 以下结果是
  ```javascript
  console.log(a);
  {
    console.log(a);
    function a(){}
    let a=3;
  }
  console.log(a);
  ```
  ::: details 解析
  主流浏览器会报语法错误Uncaught SyntaxError: Identifier 'a' has already been declared

  块级作用域中let会提升一次，而let a只能存在一次，无法再赋值，而我们此时又进行了let a=3所以会出现语法错误

  而在safari浏览器就不存在let a函数提升，会报运行时错误a is no define
  ```javascript
  //var a=function(){}
  console.log(a);
  {
    //var a=function(){}
    console.log(a);
    //let a=function(){} safari没有这一步
    function a(){}
    let a=3;
  }
  console.log(a);
  ```
  :::

## 总结
* 重温js基础
  * 报错
    * 语法
    * 运行
  * 作用域
    * 全局
    * 函数
  * 预解析
    * 第一遍检查语法
    * 第二遍运行js
  * 变量提升
    * 提升顺序为：变量-实参-函数
* 块级作用域注意存在三级提升
  * 主流浏览器适用
  * var会提升到块级作用域顶部和外部作用域顶部
  * let会提升到块级作用域顶部
  * 未来应该会统一，目前是深坑，我们需了解主流运行情况。

## 评价
* 此次公开课全程可以说是流畅，用代码直接演示讲解，非常实用且易懂
* 总的来说，还是很正的！