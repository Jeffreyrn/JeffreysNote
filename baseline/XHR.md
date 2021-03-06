## xhr vs fetch
参考课程异步讲解
- xhr = xmlHttpRequest
- 两者都可以实现ajax(不是一种技术，是术语, Asynchronous JavaScript XML)
- jQuery时代是ajax， vue时代是axios

fetch 能做哪些 XHR 不能做的事
- fetch更加底层，可以流式传输数据 xhr性能不好

- fetch 支持promise

- with fetch, we can perform no-cors requests, getting a response from a server that doesn't implement CORS

- Fetch API 并不是指仅仅一个 fetch 方法，还包括 Request、 Response、Headers、Body都一系列原生对象

xhr 能做，fetch不能

- abort request

- report progress

## [get和post区别](https://www.zhihu.com/question/28586791/answer/145424285)

- post比get安全：url暴露参数

- get比post安全：GET的语义是请求获取指定的资源。GET方法是安全、幂等(幂等是指同一个请求方法执行多次和仅执行一次的效果完全相同)   、可缓存的（除非有 Cache-Control Header的约束）, GET方法的报文主体没有任何语义。POST的语义是根据请求负荷（报文主体）对指 定的资源做出处理变更，具体的处理方式视资源类型而不同。POST不安全，不幂等，（大部分实现）不可缓存。
- get大小最大1024字节，post没有限制

## POST 数据提交格式 content-type

- multipart/form-data 消息主体里按照字段个数又分为多个结构类似的部分，每部分都是以 --boundary 开始，紧接着是内容描述信息，然后是回车，最后是字段具体内容（文本或二进制）

```text
POST http://www.example.com HTTP/1.1
Content-Type:multipart/form-data; boundary=----WebKitFormBoundaryrGKCBY7qhFd3TrwA

------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name="text"

title
------WebKitFormBoundaryrGKCBY7qhFd3TrwA
Content-Disposition: form-data; name="file"; filename="chrome.png"
Content-Type: image/png

PNG ... content of chrome.png ...
------WebKitFormBoundaryrGKCBY7qhFd3TrwA--
```

- application/x-www-form-urlencoded
- application/json (raw)
- text/xml (微信)
- application/octet-stream (binary http规范)

参考

- [MIME types](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
- <https://blog.csdn.net/wangjun5159/article/details/49644507>
- <http://homeway.me/2015/07/19/understand-http-about-content-type/>
- [四种常见的 POST 提交数据方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)
- <https://banzhenyu.github.io/2017/04/21/web-ajax-post/>

# responseType

'' 默认 字符串
arraybuffer 二进制
blob
document
json
text 字符串

- <https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest>
- [你不知道的 XMLHttpRequest](https://segmentfault.com/a/1190000008950789)

## 收发二进制

- 设置responseType = arraybuffer 然后使用 new Blob()
- 或设置responseType = blob 然后直接读取response

可以直接[发送二进制](https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data)

## 进度接口

```javascript
var req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress, false);
req.addEventListener("load", transferComplete, false);
req.addEventListener("error", transferFailed, false);
req.addEventListener("abort", transferCanceled, false);

req.open();
```
