# JavaSript面向对象精要

## 类型

- 原始类型保存为简单数值 引用类型保存为对象
- 函数的字面形式定义
- 正则表达式的字面形式定义
- instanceof所有引用类型亦可被鉴别为object
- typeof只可以鉴别的引用类型只有函数，其他均返回object，为了鉴别其他引用类型，需要instanceof
- instanceof Array在不同frame之间无法识别，所以需要Array.isArray()
- 为了让原始类型看上去更像引用类型，提供了特殊的引用类型：三种原始封装类型String Number Boolean 原始类型添加的自定义属性会在添加后立刻被销毁 临时对象只在被读取时创建 instanceof Object 得到false 手工创建则得到true避免手工创建原始类型

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
