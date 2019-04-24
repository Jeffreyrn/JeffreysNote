### Promise的polyfill与官方版本的区别：

- 官方版本中，是标准的microtask形式
- polyfill，一般都是通过setTimeout模拟的，所以是macrotask形式
- 请特别注意这两点区别


### 使用MutationObserver(微任务)实现microtask