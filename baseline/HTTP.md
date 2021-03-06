## HTTP状态码

(x越大 重要性越轻微)

### 10x 临时响应

- 100 继续
- 101 切换协议

### 20x 成功

- 200 (from cache) 成功 服务器已经成功处理了请求
- 201 已创建 请求成功并且服务器创建了新的资源
- 202 已连接 服务器已接受请求，但尚未处理
- 204 无内容 页面不会跳转，停留在当前页面

### 30x 重定向

- 301 代表永久性转移(Permanently Moved)
- 302 代表暂时性转移(Temporarily Moved )
- 304 未修改

### 40x 请求错误

- 401.1 未授权：登录失败
- 403 禁止 forbidden  服务器拒绝请求
- 404 未找到  服务器找不到请求的网页

### 5xx 服务器内部错误

- 501 尚未实施 服务器不具备完成请求的功能。如服务器无法识别请求方法时可能会返回此代码
- 502 网关错误  服务器作为网关或代理，从上游服务器无法收到无效响应
- 503 服务器不可用  服务器*暂时*无法使用（由于超载或者停机维护）
- 504 网关超时  服务器作为网关代理，但是没有及时从上游服务器收到请求
- 505 HTTP版本不受支持  服务器不支持请求中所用的HTTP协议版本

参考

<https://blog.csdn.net/u014346301/article/details/53995333>

## HTTP 缓存

### 字段

- 缓存开关：pragma、cache-control![关系图](https://img-blog.csdn.net/20180923144907652?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTIzNzU5MjQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)
- 缓存校验：expire last-modified etag
- 关系图:![](https://img-blog.csdn.net/20180923144742898?watermark/2/text/aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3UwMTIzNzU5MjQ=/font/5a6L5L2T/fontsize/400/fill/I0JBQkFCMA==/dissolve/70)

- 请求

  if-none-match if-modifed-since if-unmodified-since if-match *cache-control*
  accept-encoding accept-language accept-charset accept 
  cookies
  *connection*(close/Keep-Alive)
  host
  refer
  user-agent

- 响应

  etag last-modified expire *cache-control*
  content-encoding content-language content-type
  set-cookies
  *connection*(close/Keep-Alive)
  Keep-Alive: timeout=5, max=1000
  date
  server

- 参考

  <https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers>

### 客户端决定是否向服务器发送请求

http1.0 => pragma / expire
http1.1 => cache-control [no-cache, no-store, max-age]
![](https://dailc.github.io/staticResource/blog/basicKnowledge/whenyouenteraurl/http_cache.png)

### 客户端与服务器之间的缓存文件验证

[必要性]客户端上某个资源保存的缓存时间过期了，但这时候其实服务器并没有更新过这个资源，如果这个资源数据量很大，客户端要求服务器再把这个东西重新发一遍过来，浪费带宽和时间

- last-modified 一个资源被修改了，但其实际内容根本没发生改变，会因为Last-Modified时间匹配不上而返回了整个实体给客户端
- Etag 服务器会通过某种算法，给资源计算得出一个唯一标志符（比如md5标志），在把资源响应给客户端的时候，会在实体首部加上“ETag: 唯一标识符”一起返回给客户端

服务器会通过某种算法，给资源计算得出一个唯一标志符（比如md5标志），在把资源响应给客户端的时候，会在实体首部加上“ETag: 唯一标识符”一起返回给客户端。

客户端会保留该 ETag 字段，并在下一次请求时将其一并带过去给服务器。服务器只需要比较客户端传来的ETag跟自己服务器上该资源的ETag是否一致，就能很好地判断资源相对客户端而言是否被修改过了。

如果服务器发现ETag匹配不上，那么直接以常规GET 200回包形式将新的资源（当然也包括了新的ETag）发给客户端；如果ETag是一致的，则直接返回304知会客户端直接使用本地缓存即可。

参考

[浅谈浏览器http的缓存机制](https://www.cnblogs.com/vajoy/p/5341664.html)

[http请求头详解](https://hubinwei.me/2017/06/05/http请求头详解/)

### Keep-Alive 模式

我们知道HTTP协议采用“请求-应答”模式，当使用普通模式，即非Keep-Alive模式时，每个请求/应答客户和服务器都要新建一个连接，完成之后立即断开连接（HTTP协议为无连接的协议）；当使用Keep-Alive模式（又称持久连接、连接重用）时，Keep-Alive功能使客户端到服务器端的连接持续有效，当出现对服务器的后继请求时，Keep-Alive功能避免了建立或者重新建立连接。

http 1.0中默认是关闭的，需要在http头加入"Connection: Keep-Alive"，才能启用Keep-Alive；http 1.1中默认启用Keep-Alive，如果加入"Connection: close "，才关闭

Keep-Alive模式发送数据结束前HTTP服务器不会自动断开连接，所有不再使用返回EOF（-1）来判断，而是使用消息首部字段Conent-Length

Keep-Alive断开：由TCP的keepAlive心跳检测断开

## HTTP vs HTTPS

- port 80 443
- http->tcp https->ssl/tls->tcp
- pwa

## HTTP2 优点

- 采用二进制传输 节省了带宽
- TCP多路复用 多个请求可以并行完成
- header 压缩
- 优先级和流量控制
- 支持服务器推送 但需要配置

ref

- [HTTP,HTTP2.0,SPDY,HTTPS你应该知道的一些事](http://www.alloyteam.com/2016/07/httphttp2-0spdyhttps-reading-this-is-enough/)
- <http://www.ruanyifeng.com/blog/2018/03/http2_server_push.html>
- <https://blog.csdn.net/caoxinhui521/article/details/77801976>

## 强缓存vs协商缓存

大部分web服务器都默认开启协商缓存，而且是同时启用Last-Modified/If-Modified-Since 和 ETag/If-None-Match

分布式系统里多台机器间文件的Last-Modified必须保持一致，以免负载均衡到不同机器导致比对失败；

分布式系统尽量关闭掉ETag(每台机器生成的ETag都会不一样）

- 当ctrl+f5强制刷新网页时，直接从服务器加载，跳过强缓存和协商缓存；
- 当f5刷新网页时，跳过强缓存，但是会检查协商缓存

[浏览器缓存知识小结及应用](https://www.cnblogs.com/lyzg/p/5125934.html)

## 三种缓存策略

- 缓存开关

  缓存存储策略：no-store private public
  [no-cache max-age]

- 缓存校验

  缓存过期策略：expire max-age
  缓存对比策略： last-modified/if-modified-since etag/if-none-match

