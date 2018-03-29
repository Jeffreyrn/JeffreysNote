## 深拷贝

```javascript
JSON.parse(JSON.stringify(obj))
// JSON.stringify搞不定循环引用的问题
// or
function deepClone(obj) {
  if (!obj && typeof obj!== 'object') {
    return ;
  }
  var newObj = obj.constructor===Object?{}:[]
  Object.keys(obj).forEach((key)=>{
    newObj[key]= (obj[key]&&typeof obj[key]==='object')?clone(obj[key]):obj[key]
  })
  return newObj
}
```
