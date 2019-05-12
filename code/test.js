function thousandDivide(str)
{
  return str.replace(/(?!^)(?=(\d{3})+$)/g, ',')
}
console.log(thousandDivide('2434234234348'))
function swap(){}
function partition(arr, left, right){
  var pivoit=left, index=left+1
  for(var i=index;i<right;i++){
    if(arr[i]<arr[pivoit]){
      swap(arr, i, pivoit)
      index++
    }
  }
  swap(arr, pivoit, index-1)
  return index-1
}
function quickSort(arr, left, right){
  if(!left) left=0
  if(!right) right=arr.length
  if (left< right){

    var partitionIndex = partition(arr, left, right)
    quickSort(arr, left, partitionIndex)
    quickSort(arr, partitionIndex, right)
  }
}
function thDivide(str){
  return str.replace(/(?!^)(?=(\d{3})+$)/g, ',')
}
console.log(thDivide('32342323234234'))