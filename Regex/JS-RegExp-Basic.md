# 正则基础

## 字面量vs构造函数定义

### 字面量

``
var regex = /pattern/[g|i|m]
``

### 构造函数

``
var regex = new RegExp(['pattern', ['g'|'i'|'m']])
``

## 末尾可选字符 g i m 含义

- g: 模式执行一个全局匹配，找到所有的匹配，而不是找到一个后停止
- i: 模式执行不区分大小写的匹配
- m: 多行模式，^与$匹配开头和结尾之外，还匹配每行的开头和结尾

---

## 参考链接

- [简短-上篇](http://www.cnblogs.com/giggle/p/5532453.html)
- [完整教程](https://juejin.im/post/5965943ff265da6c30653879)