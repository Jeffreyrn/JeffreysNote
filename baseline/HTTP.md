## HTTP状态码

(x越大 重要性越轻微)

### 10x 临时响应

- 100 继续
- 101 切换协议

### 20x 成功

- 200 (from cache) 成功 服务器已经成功处理了请求
- 201 已创建 请求成功并且服务器创建了新的资源
- 202 已连接 服务器已接受请求，但尚未处理
- 204 无内容

### 30x 重定向

- 301 代表永久性转移(Permanently Moved)
- 302 代表暂时性转移(Temporarily Moved )
- 304 未修改

### 40x 请求错误

- 403 禁止 forbidden  服务器拒绝请求
- 404 未找到  服务器找不到请求的网页

### 5xx 服务器错误

- 500 服务器内部错误  服务器遇到错误，无法完成请求
- 501 尚未实施 服务器不具备完成请求的功能。如服务器无法识别请求方法时可能会返回此代码
- 502 错误网关  服务器作为网关或代理，从上游服务器无法收到无效响应
- 503 服务器不可用  服务器目前无法使用（由于超载或者停机维护）。通常，这只是暂时状态
- 504 网关超时  服务器作为网关代理，但是没有及时从上游服务器收到请求
- 505 HTTP版本不受支持  服务器不支持请求中所用的HTTP协议版本

参考

<https://blog.csdn.net/u014346301/article/details/53995333>

## HTTP 缓存

### 字段

- 公共

cache-control

- 请求

if-match if-none-match if-modifed-since if-unmodified-since
accept accept-encoding accept-charset accept-language
cookies
connection
host
refer
user-agent

- 响应

etag
set-cookies
date
server
connection

- 参考

<https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers>

### 客户端决定是否向服务器发送请求

http1.0 => pragma / expire
http1.1 => cache-control [no-cache, no-store, max-age]

### 客户端与服务器之间的缓存文件验证

[必要性]客户端上某个资源保存的缓存时间过期了，但这时候其实服务器并没有更新过这个资源，如果这个资源数据量很大，客户端要求服务器再把这个东西重新发一遍过来，浪费带宽和时间

- last-modified 一个资源被修改了，但其实际内容根本没发生改变，会因为Last-Modified时间匹配不上而返回了整个实体给客户端
- Etag 服务器会通过某种算法，给资源计算得出一个唯一标志符（比如md5标志），在把资源响应给客户端的时候，会在实体首部加上“ETag: 唯一标识符”一起返回给客户端

服务器会通过某种算法，给资源计算得出一个唯一标志符（比如md5标志），在把资源响应给客户端的时候，会在实体首部加上“ETag: 唯一标识符”一起返回给客户端。

客户端会保留该 ETag 字段，并在下一次请求时将其一并带过去给服务器。服务器只需要比较客户端传来的ETag跟自己服务器上该资源的ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了。

如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可。

参考

<http://www.cnblogs.com/vajoy/p/5341664.html>

### Keep-Alive 模式

我们知道HTTP协议采用“请求-应答”模式，当使用普通模式，即非KeepAlive模式时，每个请求/应答客户和服务器都要新建一个连接，完成 之后立即断开连接（HTTP协议为无连接的协议）；当使用Keep-Alive模式（又称持久连接、连接重用）时，Keep-Alive功能使客户端到服 务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接。

http 1.0中默认是关闭的，需要在http头加入"Connection: Keep-Alive"，才能启用Keep-Alive；http 1.1中默认启用Keep-Alive，如果加入"Connection: close "，才关闭

Keep-Alive模式发送玩数据HTTP服务器不会自动断开连接，所有不能再使用返回EOF（-1）来判断，而是使用消息首部字段Conent-Length

## HTTP请求头详解

<https://hubinwei.me/2017/06/05/http%E8%AF%B7%E6%B1%82%E5%A4%B4%E8%AF%A6%E8%A7%A3/>

## HTTP2 优点

采用二进制传输 节省了带宽
TCP多路复用 多个请求可以并行完成
优先级和流量控制
支持服务器推送 但需要配置
<http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html>
<https://blog.csdn.net/caoxinhui521/article/details/77801976>