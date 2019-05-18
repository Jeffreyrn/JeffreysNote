[前端异常捕获与上报](https://www.cnblogs.com/luozhihao/p/8635507.html)

## script error

to avoid a script unintentionally leaking potentially sensitive information to an onerror callback that it doesn’t control

browsers only give window.onerror insight into errors originating from the same domain

<https://blog.sentry.io/2016/05/17/what-is-script-error>

## unhandledrejection

The unhandledrejection event is fired when a JavaScript Promise is rejected but there is no rejection handler to deal with the rejection

```js
window.addEventListener("unhandledrejection", function (event) {
  console.warn("WARNING: Unhandled promise rejection. Shame on you! Reason: " + event.reason);
});
```

## TDD vs BDD

TDD(Test Drivin Development)是测试驱动开发，强调的是一种开发方式，以测试来驱动整个项目，即先根据接口完成测试编写，然后在完成功能时要不断通过测试，最终目的是通过所有测试。

BDD(Behavior Drivin Development)行为驱动开发，可以理解为也是TDD的分支，即也是测试驱动，但BDD强调的是写测试的风格，即测试要写得像自然语言，运用一些比如expect、should等跟自然语言相近的断言，让项目的各个成员甚至产品都能看懂测试，甚至编写测试。