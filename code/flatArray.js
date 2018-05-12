function flatArray(arr, result) {
  arr.forEach((key) => {
    if(Array.isArray(arr[key])) {
      flatArray(arr[key], result)
    }
    else {
      result.push(arr[key])
    }
  })
}
var result=[]
var target = [1, 2, [3, 4, [5]], 6, [7, [8, 9, [10, 11, [12]]]]]
flatArray(target, result)

// 只能实现二维数组的扁平化
var result=target.reduce((acc, prev)=>{
  return acc.concat(current)
}, [])

// 寻找两个有序数组最小相同元素
const a = [1, 2, 5, 9, 10]
const b = [3, 4, 6, 9, 10]

function findElement(a, b) {
  let i = j = 0
  while (i < a.length || j < b.length) {
    if (a[i] === b[j]) {
      return a[i]
    } else if (a[i] > b[j]) {
      j++
    } else if (a[i] < b[j]) {
      i++
    }
  }
  return null
}