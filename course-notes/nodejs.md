## event loop
官方文档解释

[node事件循环](http://menzhongxin.com/2017/05/18/node%E4%BA%8B%E4%BB%B6%E5%BE%AA%E7%8E%AF(EventLoop)/)

[Node.js Event Loop 的理解 Timers，process.nextTick()](https://cnodejs.org/topic/57d68794cb6f605d360105bf)
## nodejs

- 读github上的node**源码**，建议阅读文件目录lib里的各个js
- node版本 0.12(2015.02)直接跳到4.0(2015.09) 半年一个版本 每四个月发布偶数版本 偶数版本是LTS
- 生产环境选择LTS版本 支持时间会更长 <github.com/nodejs/release>
- REPL模式 read eval 用来调试代码

## [npm](www.npmjs.com)

- npm publish 很方便其他项目引入
- 私有 共有仓库
- left-pad事件后 不允许作者发布24小时后unpublish
- 潜在的安全问题 选择模块时要注意 看下载数 活跃度

## 构建工具

grunt - gulp - webpack - parcel

## http server

### nodejs 好处

- 高并发
- 内存占用小
- 支持async await异步
- 微服务化

http express koa eggjs
中间件：是一个函数，拦截响应和对象请求，处理之后，或者接受响应，或者传递给下一个中间件
 requeset response
ctx.set x-response-time

## cache

lru-cache
redis<https://www.npmjs.com/package/redis>

## database

mongo
mongoose
crud(create read update delete)

## 有用的资料

<https://gist.github.com/anvaka/8e8fa57c7ee1350e3491>
<https://github.com/parro-it/awesome-micro-npm-packages>

## 答疑

- 双向绑定适合表单
- ssr react15 -> react16 不可以做实时渲染 渲染以后变成静态文件
- 很多自己的价值就是自己的价值，但是很多时候我们依托的是平台 
- 跟对老大很重要。
- 3年解决专业问题，3年后别再是问题就好