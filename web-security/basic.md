Content Security Policy (CSP)

### jwt
- 因为有时候需要自动登录，jwt 需要保存到客户端
- 保存到localStorage/sessionStorage容易通过xss攻击，被js获取
- jwt保存到cookies容易被csrf攻击获取
- jwt可以放到自定义header的Authorization
- 为了自动登录，jwt放到cookies中，并设置为http-only，再设置一个x-csrf-token放到header里，和jwt里（使用session时则不需要，服务端session会验证该token），首次登录时，返回这个随机生成的token并保存到header，之后每次登录都带上，同时把该token放到一个可读的cookie：csrf-token里面

参考：<https://stormpath.com/blog/angular-xsrf>


### xss csrf
cookies 新属性SameSite=
- Strict
- Lax：只会在使用危险HTTP方法发送跨域cookie的时候进行阻止，例如POST方式