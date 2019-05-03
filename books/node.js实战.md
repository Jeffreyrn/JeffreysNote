### 简介

node使用的是为chrome提供动力的v8虚拟机，v8去掉了中间环节，不是执行字节码，也不通过解释器，直接编译为机器码

事件轮询 异步io

node适合数据密集型实时程序，data intensive real time（DIRT）

cookieParser bodyparse limit methodOverride method->_method
vhost

### node 适合的项目类型
anything that is not CPU intensive
### node世界里流行着2中响应逻辑管理方式：回调、事件监听

回调用来定义一次性的响应逻辑，比如文件读写、数据库查询；

事件监听器，也是一个回调，但是重复性的事件，比如http请求、(TCP)socket.on、流；

一个node http服务器就是一个事件发射器（EventEmitter）

### 其他
- 所有的ReadableStream都能接入任何一个WriteableStream，比如http请求中的req res
### 流程控制分为串行和并行，series vs parallel，
实现方式：
- series
```javascript
function do1() {
  fs.readFile('file1', function(err, data) {
    if (err) return next(err)
    next(null, data)
  })
}
function do2() {
  fs.readFile('file2', function(err, data) {
    if (err) return next(err)
    next(null, data)
  })
}
var tasks = [do1, do2]
function next(err, data) {
  if (err) throw err
  var currentTask = tasks.shift()
  if (currentTask) {
    currentTask(data)
  }
}
next()
```
- parallel

```javascript
var completedTask = 0
var tasks = []
```
