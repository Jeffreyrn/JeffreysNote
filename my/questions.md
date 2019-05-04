## react vs vue

- 代码

jsx需要编译才能运行
合成事件 vs directive
渲染数据 jsx vs template ：jsx比较动态、难以优化，template静态、方便优化
更新数据 state props setState 专有接口
method computed watch 而react要手动实现
用户输入 语法糖v-model
github上
vue首屏渲染大量数据慢因为预处理 react改变状态重新渲染慢

- 业务

react + flux 可以大规模复杂项目
vue适合小块灵活

- 人员

## new 发生了什么

1. var o = new Object();
2. o.__proto__ = A.prototype;//这里还记得之那个function里面的默认的属性么?
3. A.call(o)//由于这里this是指向o,可以把什么this.name/getName绑定到o上.
4. 把这个o返回给a;//完成var a = new A()的过程

JavaScript 实际上执行的是：

```javascript
var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);
```

上面所谓的第4步其实是一个简化的说法.真正的过程是在第3步之后,如果发现A返回是一个Object类型(非primitive类型,即非string,boolean,number,null,undefined类型就是Object类型),则直接返回A的返回值,否则把第1步new的Object返回出去.(默认情况下,JS中函数默认返回值是undefined)

[JS中new到底发生了什么](https://warjiang.github.io/devcat/2016/05/12/JS%E4%B8%ADnew%E5%88%B0%E5%BA%95%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88/)

## [千万不要在JS中使用连等赋值操作](https://www.cnblogs.com/xxcanghai/p/4998076.html)

## [TCP连接的“三次握手”与“四次挥手”](https://blog.csdn.net/u011080472/article/details/51207869)

## use strict

## 常见问题
- https
- http code
- url 输入后
- 性能优化
- 跨域
- cookie ** 为什么资源放到其他域名
- 闭包
  JavaScript closure is a function which remembers the environment in which it was created.
  [就是一种允许函数向关联的父级作用域寻址的访问特权](https://www.zhihu.com/question/34547104/answer/59613890)
- 作用域

## 浏览器输入网址后

<http://www.dailichun.com/2018/03/12/whenyouenteraurl.html>