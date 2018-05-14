## 数组

- Array.splice 改变数组内容，slice不改变原数组，返回一个新数组
- Array.reduce 可以实现数组累加
- 数组的遍历方法有filter map some every forEach indexOf lastIndexOf
- **forEach**会遍历数组的每一个值，就算找到了，也无法使用return或break退出，如果只是检查数组中是否包含某个值，建议使用**some**

### 会改变原数组的方法

- splice
- sort / reverse
- push / pop
- shift / unshift
- fill / copyWithin

```javascript
fill(value[, start[, end]])
copyWithin(target, start, end)
```

>target

- Zero based index at which to copy the sequence to. If negative, target will be counted from the end.
- If target is at or greater than arr.length, nothing will be copied. If target is positioned after start, the copied sequence will be trimmed to fit arr.length.
