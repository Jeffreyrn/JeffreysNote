## render 模板编译

[Vue 模板编译原理](http://www.codedata.cn/hacknews/152110789460328114)

## vdom diff

[理解Vue 2.5的Diff算法](http://www.cnblogs.com/isLiu/p/7909889.html)
[VirtualDOM与diff(Vue实现)](https://juejin.im/post/59bfbd736fb9a00a52065ec7)

## nextTick

[nextTick](https://juejin.im/entry/5ac97cab51882555635e94c2)
[简单理解Vue中的nextTick](https://www.jianshu.com/p/a7550c0e164f)
[为什么Vue使用异步更新队列？](http://www.codedata.cn/hacknews/152242063854728792)

在数据变化后要执行的某个操作，而这个操作需要使用随数据改变而改变的DOM结构的时候，这个操作都应该放进Vue.nextTick()的回调函数中。

Vue 异步执行 DOM 更新。只要观察到数据变化，Vue 将开启一个队列，并缓冲在同一事件循环中发生的所有数据改变。如果同一个 watcher 被多次触发，只会被推入到队列中一次。这种在缓冲时去除重复数据对于避免不必要的计算和 DOM 操作上非常重要。然后，在下一个的事件循环“tick”中，Vue 刷新队列并执行实际 (已去重的) 工作。