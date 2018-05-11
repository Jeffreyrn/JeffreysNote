## xhr vs fetch

xhr = xmlHttpRequest
两者都可以实现ajax(不是一种技术，是术语，Asynchronous JavaScript + XML)
ajax(jQuery) vs axios(vue)
fetch可以流式传输数据 xhr性能不好
[fetch 能做哪些 XHR 不能做的事](https://brooch.me/2017/03/10/difference-between-fetch-and-XHR/)

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
[MIME types](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Basics_of_HTTP/MIME_types)
<https://blog.csdn.net/wangjun5159/article/details/49644507>
<http://homeway.me/2015/07/19/understand-http-about-content-type/>
[四种常见的 POST 提交数据方式](https://imququ.com/post/four-ways-to-post-data-in-http.html)
<https://banzhenyu.github.io/2017/04/21/web-ajax-post/>

# responseType

'' 默认 字符串
arraybuffer 二进制
blob
document
json
text 字符串
<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest>
[你不知道的 XMLHttpRequest](https://segmentfault.com/a/1190000008950789)

## 收发二进制

设置responseType = arraybuffer 然后使用 new Blob()
或设置responseType = blob 然后直接读取response

可以直接发送二进制
<https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest/Sending_and_Receiving_Binary_Data>

## 进度接口

```javascript
var req = new XMLHttpRequest();

req.addEventListener("progress", updateProgress, false);
req.addEventListener("load", transferComplete, false);
req.addEventListener("error", transferFailed, false);
req.addEventListener("abort", transferCanceled, false);

req.open();
```

## 跨域

- 反向代理

委托nginx 设置proxy_pass 服务器不存在跨域
普通的代理设备是内网用户通过代理设备出外网进行访问，而工作在这种模式下的负载均衡设备，则是外网用户通过代理设备访问内网，因此称之为反向代理

- jsonp
- websocket
- node中间件
- CORS