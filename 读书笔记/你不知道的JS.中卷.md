# 你不知道的JavaScript 中卷

## 类型

* js的七种内置类型 null undefined string Boolean number object symbol(es6) typeof null === “object” bug
* Check null !a && typeof a === “object”
* typeof function(){} === “function” function是object的子类型 bug
* js中变量是没有类型的 值才有
* 声明未赋值为undefined 未声明的为undeclared报错is not defined typeof undeclared === undefined bug因为typeof有特殊的安全防范机制
* 类数组转换 Array.prototype.slice.call(arguments) 或 Array.from(arguments) ES6

## 值

* 42.toFixed(3) SyntaxError 因为 . 是一个数字字符 会被优先识别为数字常量的一部分 以下三个则有效 (42).toFixed(3) 0.42.toFixed(3) 42..toFixed(3)
* 考虑到易读性 数字0与字母O容易混淆 尽量使用小写的0x 0b 0o
* Number.MAX_SAFE_INTEGER = 2^53 - 1 = 9007199254740991
* Void _  === undefined
* typeof NaN === “number” NaN自身不相等 唯一一个非自反的值 ！NaN!=NaN
* 函数参数也是一个引用 参数在函数内重新赋新对象 原对象不会变 function f(x){x=[2]} var a=[1] foo(a) 依然是1而不是2

## 语法

* do｛ ｝会执行一个代码块 返回语句结果值 ES7 取代eval
* else if方便省掉代码缩进 其实并没有else if 等价于 else ｛if …｝
* ASL 自动分号插入 automatic semicolon insertion 

## 异步

* 控制台IO异步 对于对象避免使用console.log 最好选择断点调试
* 事件循环就是不断执行事件队列中的事件 Promise之前 事件只能由宿主环境即浏览器来管理 ES6精确定义了事件循环的工作细节 实现了精细控制
* 异步是关于现在和将来的时间间隙 并行是关于同时发生的事情执行栈与事件队列
* 事件循环的每一轮称为一个tick 用户交互 io 定时器会向事件队列加入事件 任意时刻 一次只能处理一个事件 执行事件的时候 可能直接或间接引发多个后续事件
* es6中 引入一个建立在事件循环队列之上的新概念 任务队列 带来了promise异步 事件循环需要重新排到执行栈队尾 任务队列可以插队
* 微任务 micro task 有process.nextTick, Promises, Object.observe, MutationObserver
* 宏任务 macro task 有setTimeout, setInterval, setImmediate, I/O, UI rendering
* 当当前执行栈执行完毕时会立刻先处理所有微任务队列中的事件，然后再去宏任务队列中取出一个事件。同一次事件循环中，微任务永远在宏任务之前执行<https://zhuanlan.zhihu.com/p/33058983>
## 回调

* 我们的大脑假装并行执行多个任务时 实际上极有可能是在进行快速的上下文切换 切换的如此之快 以至于对外界来说 我们就像并行的执行所有任务 就像js引擎 单线程运行事件循环队列
* 大脑思维或计划方式是同步执行的 表达异步的方式并不能很好的映射到同步的大脑计划行为 但大脑实际执行时 是异步的
* 在代码中跳来跳去查看流程 预先计划了所有事件和路径 代码就会变的非常复杂 这才是回调地狱的真正问题所在 我们顺序阻塞式大脑无法很好的映射到面向回调的异步代码 我们的大脑需要努力才能同步得上
* 两种回调模式 分离模式 一个用于成功通知 一个用于出错通知 promise使用 error first风格 node使用 回调第一个参数保留用作错误对象 如果有的话 如果成功 这个参数就会被清空
* 回调表达的两个缺陷 缺乏顺序性和可信任性
* 付款之后获得的小票就是一个IOU的promise

## Promise

* 术语 决议resolve 完成fulfill 拒绝reject resolve既可以表示完成或拒绝 比fulfill更恰当
* promise没有采用error first 而是采用了分离回调split callback
* promise.race竞态