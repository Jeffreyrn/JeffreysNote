### Promise的polyfill与官方版本的区别：

- 官方版本中，是标准的microtask形式
- polyfill，一般都是通过setTimeout模拟的，所以是macrotask形式
- 请特别注意这两点区别


### 使用MutationObserver(微任务)实现microtask

- MutationObserver 模拟 vue nextTick；
- 监听一个DOM变动， 当DOM对象树发生任何变动时，Mutation Observer会得到通知，像以前的Vue源码中就是利用它来模拟nextTick的；
- Vue（2.5+）的nextTick实现移除了MutationObserver的方式，取而代之的是使用宏任务MessageChannel

### 作用
- 使代码方便维护和理解
- 将控制反转，解决了信任问题
- 把各种状态规范化，比如状态变为resolve/reject，就无法再改变，解决了可能发生的重复回调的问题；错误处理

### 特点
- promise 的.then或者.catch可以被调用多次，但这里 Promise 构造函数只执行一次。或者说 promise 内部状态一经改变，并且有了一个值，那么后续每次调用.then 或者.catch都会直接拿到该值
- Promise捕获错误与 try catch 等同
- Promise 方法中的回调是异步的
- Promise 方法每次都返回一个新的Promise
- Promise 会存储返回值
- Promise 拥有状态变化