- MutationObserver 模拟 vue nextTick
  监听一个DOM变动， 当DOM对象树发生任何变动时，Mutation Observer会得到通知，像以前的Vue源码中就是利用它来模拟nextTick的；Vue（2.5+）的nextTick实现移除了MutationObserver的方式，取而代之的是使用宏任务MessageChannel