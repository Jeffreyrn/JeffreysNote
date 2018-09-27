# Node.js

- Node不是语言，不是框架，只是基于V8运行时环境

<http://www.cnblogs.com/xing901022/p/4905971.html>

<https://cnodejs.org/topic/560dbc826a1ed28204a1e7de>

## Event Loop

- timers: 这个阶段执行定时器队列中的回调如 setTimeout() 和 setInterval()。
- I/O callbacks: 这个阶段执行几乎所有的回调。但是不包括close事件，定时器和setImmediate()的回调。
- idle, prepare: 这个阶段仅在内部使用，可以不必理会。
- poll: 等待新的I/O事件，node在一些特殊情况下会阻塞在这里。
- check: setImmediate()的回调会在这个阶段执行。
- close callbacks: 例如socket.on('close', ...)这种close事件的回调

## Promise

[Node.js最新技术栈之Promise篇](https://cnodejs.org/topic/560dbc826a1ed28204a1e7de)

[理解 Promise 的工作原理](https://cnodejs.org/topic/569c8226adf526da2aeb23fd)

[Promise 迷你书](http://liubin.github.io/promises-book/)