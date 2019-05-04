# server side event

html5 基于http 服务器主动推送消息 流信息推送到浏览器
支持断线重连 而websocket需要自己实现
一般只用来传送文本，二进制数据需要编码后传送 websocket默认二进制

```javascript
new EventSource(url)
```

服务端

```
Content-Type: text/event-stream
Cache-Control: no-cache
Connection: keep-alive
```



[Server-Sent Events 教程](http://www.ruanyifeng.com/blog/2017/05/server-sent_events.html)

