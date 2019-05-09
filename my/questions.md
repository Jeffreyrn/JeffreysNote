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
比如 var bar = new Foo()
1. var o = new Object();
2. o.\_\_proto\_\_ = Foo.prototype;//这里还记得之那个function里面的默认的属性么?
3. Foo.call(o)//由于这里this是指向o, 可以把什么this.name或this.getName绑定到o上.
4. 把这个o返回给bar;//完成var bar = new Foo()的过程

JavaScript 实际上执行的是：

```javascript
var o = new Object();
o.[[Prototype]] = Foo.prototype;
Foo.call(o);
```

上面所谓的第4步其实是一个简化的说法.真正的过程是在第3步之后,如果发现A返回是一个Object类型(非primitive类型,即非string,boolean,number,null,undefined类型就是Object类型)，则不符合new的正常用法，此时会将Foo()的返回值赋予bar；否则就是通常的做法(默认情况下,即没有return时,JS中函数默认返回值是undefined)，把o在执行上述过程后赋予bar.

参考来源：[JS中new到底发生了什么](https://warjiang.github.io/devcat/2016/05/12/JS%E4%B8%ADnew%E5%88%B0%E5%BA%95%E5%8F%91%E7%94%9F%E4%BA%86%E4%BB%80%E4%B9%88/)

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

## 异步有哪几种方式

- generator 
  相当于一个状态机，内部封装了多个状态；形式上表现为function和函数名之间有一个*号，函数内部可以使用yield定义不同的状态

## [为什么会有变量提升](https://blog.csdn.net/qq_24839991/article/details/80199693)
js运行时会有词法分析，生成一个Active Object对象；函数内部，首先分析形参，添加到AO，此时为undefined；然后分析变量，只有在AO上不存在变量名时才添加变量；然后分析函数声明，无论AO上是否存在，都会将函数名添加或覆盖到AO