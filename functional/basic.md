## 尾递归

避免递归爆栈的优化方式

<https://blog.csdn.net/github_36487770/article/details/78538231>

<https://www.qdfuns.com/article/27073/5da7da4326cb18d6b0c604fb8c1bbdd3.html>

## 纯函数

相同的输入值总会有相同的输出

## 函数式编程 好处

- 便于调试
- 没有副作用 高阶函数
- map reduce filter
- immutable 引用赋值虽然可以节省内存，但当应用复杂之后，可变状态往往会变成噩梦（Immutable.js），
- 并且便于深拷贝复用

## 概念

- 函子：范畴间的一类映射，数组是一种函子<https://cn.leihuang.dev/async-control-flow-made-easy-with-fp/>