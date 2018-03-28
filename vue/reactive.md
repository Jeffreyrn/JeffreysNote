# 响应式
```
function observer(value, cb) {
  // cb is callback
  Object.keys(value).forEach((key) => defineReactive(value, key, value[key], cb))
}
function defineReactive(obj, key, val, cb){
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      /* 依赖收集 */
    },
    set: () => {
      cb()
    },
  })
}
```
