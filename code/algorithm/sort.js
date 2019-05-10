function bubbleSort(arr) {
  for (var i = 0; i < arr.length - 1; i++)
    for (var j = 0; j < arr.length - 1 - i; j++)
      if (arr[j] > arr[j + 1]) {
        swap(arr, j, j + 1)
      }
  return arr
}
function selectSort(arr) {
  // 相比冒泡排序节省了交换的开销
  for (let i = 0; i < arr.length - 1; i++) {
    let min = i
    let j
    for (j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min])
        min = j
    }
    swap(arr, j, min)
  }
}
function swap(arr, i, pivot) {
  var temp = arr[i]
  arr[i] = arr[pivot]
  arr[pivot] = temp
}
function partition(arr, left, right) {
  let pivot = left, index = left + 1
  for (let i = index; i < right; i++) {
    if (arr[i] < arr[pivot]) {
      swap(arr, i, index)
      index++
    }
  }
  swap(arr, pivot, index - 1)
  return index - 1
}
function quickSort(arr, left, right) {
  if (!left)
    left = 0
  if (!right)
    right = arr.length
  if (left < right) {
    let partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex)
    quickSort(arr, partitionIndex, right)
  }
}
function countSort(arr) {
  // 计数排序适合1-100的数字排序 时间复杂度n
  let temparr = []
  for (let i = 0; i < arr.length; i++) {
    temparr[i]++
  }
  let newarr = []
  temparr.forEach((index) => {
    for (let i = 0; i < temparr[index]; i++) {
      newarr.push(index)
    }
  })
}