## 箭头函数

所有的箭头函数都没有自己的this，都指向外层
箭头函数本身没法修改this，所以对this访问永远是它继承外部上下的this
箭头函数里不但没有 this，也没有 arguments super prototype
不可以new yield

## promise 原理

```javascript
function Promise(fn) {
    var value = null,
        callbacks = [];  // callbacks为数组，因为可能同时有很多个回调
    this.then = function (onFulfilled) {
        callbacks.push(onFulfilled);
    };
    function resolve(value) {
        callbacks.forEach(function (callback) {
            callback(value);
        });
    }
    fn(resolve);
}
```