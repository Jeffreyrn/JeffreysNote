## vue实例的生命周期

1. new Vue()初始化实例 开始事件和生命周期的初始化 之后触发beforeCreate
2. 响应式数据 method computed watch的初始化 之后触发created
3. el（挂载节点）的初始化 模板编译到render中 之后触发beforeMounted
4. el被替换 开始渲染render 数据挂载 之后触发mounted
5. 渲染完毕 data更新后 触发beforeUpdate
6. 重新编译虚拟dom 重新渲染和patch 触发updated

真实场景下的业务应用
created：进行ajax请求异步数据的获取、初始化数据
mounted：挂载元素内dom节点的获取
nextTick：针对单一事件更新数据后立即操作dom
updated：任何数据的更新，如果要做统一的业务逻辑处理
watch：监听具体数据变化，并做相应的处理

## $options

包含了vue组件实例中所有的初始化option合集

## vue plugin
```js
myPlugin = {
  install(Vue) {
    Vue.mixin({
      created() {}
    })
  }
}
```
##render function
template ->
compile to render function ->
return virtual dom -> generate actual dom

虚拟dom
- 把渲染逻辑从真实dom中解耦/分离出来，便于代码移植到非浏览器环境中，比如服务端，native端
- 降低了大量dom操作的消耗

基于模板的vue，不灵活但利于优化；基于function的react灵活，因此较难优化；
```js
render: h => h(App);
```
h的命名是一种传统，It comes from the term "hyperscript", which is commonly used in many virtual-dom implementations. "Hyperscript" itself stands for "script that generates HTML structures" because HTML is the acronym for "hyper-text markup language".

## 异步请求尽量放到created里