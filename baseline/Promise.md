### Promise的polyfill与官方版本的区别：

- 官方版本中，是标准的microtask形式
- polyfill，一般都是通过setTimeout模拟的，所以是macrotask形式
- 请特别注意这两点区别


### 使用MutationObserver(微任务)实现microtask

- MutationObserver 模拟 vue nextTick；
- 监听一个DOM变动， 当DOM对象树发生任何变动时，Mutation Observer会得到通知，像以前的Vue源码中就是利用它来模拟nextTick的；
- Vue（2.5+）的nextTick实现移除了MutationObserver的方式，取而代之的是使用宏任务MessageChannel