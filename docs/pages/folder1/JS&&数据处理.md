# 慕课公开课-"JS内功修炼"1小时学会数据处理-边城-笔记
## 前端做什么
* 收集用户信息，并对用户反馈
* 前端变“大”了，成了大前端
## 前端学什么
* 前端基础技术H/J/C，库Jquery/Lodash/，框架Vue...
* 软件开发技术数据结构，算法...
* 工程化技术Git，Webpack...
## 前端与数据的关系
* 采集与展示
* 以JSON方式存储
## 异步获取数据
* Jquery
```
$.get("data/imooc.json")
  .done(data=>console.log(data))
  .fail((xhr,p2,error)=>{
  console.log("error")
}).always(()=>{
  console.log("done")
  })
```
* axios
```
axios.get("data/imooc.json")
  .then(data=>{
    console.log(data)
  })
```
* async/await
```
async function getData(){
  try{
    const data=await axios.get("data/imooc.json")
    console.log(data)
  }catch(err){
    console.log(err)
  }finally{
    console.log("alldone")  
  }
}
getData()
```
## TypeScript填坑，初探前端工程化
npm工程化目录，并引入对应依赖
```
npm init
npm install -D typescript webpack
```
## Layui呈现数据
本质：获取数据，格式数据，组件传参，呈现
## 处理集合数据方法和技巧
## ECharts图表可视化大屏开发
## 相关链接
[JSON](https://www.json.org/json-en.html)
[layui](https://www.layui.com/doc/element/layout.html)
## 总结
内容是真的多，时间紧，老师也是粗略讲，后续对应课件更新再记录吧。
当然，也真的认识到要学的东西好多啊，听得半知半解。
不过，这次公开课我还是想发表下意见，太多泛泛而谈，不如一点清晰明了。