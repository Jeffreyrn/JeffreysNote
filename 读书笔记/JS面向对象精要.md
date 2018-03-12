# JavaSript面向对象精要

## 类型

- 原始类型保存为简单数值 引用类型保存为对象
- [函数](#%E5%87%BD%E6%95%B0)
- [对象](#%E5%AF%B9%E8%B1%A1)
  - [对象的extensible特性](#%E5%AF%B9%E8%B1%A1%E7%9A%84extensible%E7%89%B9%E6%80%A7)
  - [构造函数与原型对象](#%E6%9E%84%E9%80%A0%E5%87%BD%E6%95%B0%E4%B8%8E%E5%8E%9F%E5%9E%8B%E5%AF%B9%E8%B1%A1)
- [继承](#%E7%BB%A7%E6%89%BF)

## 函数

- 函数的两种字面形式：声明 表达式 函数声明有变量提升
- 数组的sort方法可以改变原数组内容，默认是将所有值转化为字符串再比较
- 作为对象的方法被调用时 this指向那个对象 防止改变对象变量名时必须改变方法中的引用名字
- 有三种函数方法改变this的值 call apply bind bind是返回绑定this后的函数

## 对象

- 6种假：null undefined 0 false NaN ‘’
- in 会同时检查object的自有属性和原型属性 hasOwnProperty仅检查自有属性 正如for-in vs Object.keys()
- 属性有两种类型：数据属性(value writable)和访问器属性 访问器属性不包含值 而是定义了一个当属性被读取时调用的函数getter setter
- 前置下划线是一个约定俗成的命名规范 表示该属性是私有的 实际是它还是公开的
- 有两个属性特征是数据属性和访问器属性都具有的 enumerable configurable
- Object.defineProperty 被调用时 如果属性不存在 将根据描述对象创建
- 访问器属性特征比字面形式定义访问器属性的优势在于 可以为已有对象定义这些属性
- 如果创建一个同时具有数据和访问器的属性 将会出错
- Object.defineProperties Object.getOwnPropertyDescriptor

### 对象的extensible特性

- 禁止扩展preventExtensions isExtensible
- 对象封印seal isSealed
- 冻结对象freeze isFrozen

### 构造函数与原型对象

- 函数被new调用时 其中的this指向构造函数
- 所有创建的对象实例共享原型对象

## 继承
