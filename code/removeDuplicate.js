function removeDuplicate1(arr) {
  let newarr = []
  let i, j
  for(i=0; i<arr.length;i++) {
    for(j=0; j< newarr.length; j++)
      if(arr[i] === newarr[j])
        break;
    if(newarr.length===j)
      newarr.push(arr[i])
  }
  return newarr
}
function removeDuplicate2(arr) {
  let newarr=[]
  let i
  for(i=0; i<arr.length;i++){
    let addit = newarr.every((item) => {
      return item !== arr[i]
    })
    if (addit) {
      newarr.push(arr[i])
    }
  }
  return newarr
}
function removeDuplicate3(arr) {
  arr.sort()
  let newarr=[]
  for(let i=0; i< arr.length;i++){
    if(arr[i]!==arr[i+1])
      newarr.push(arr[i])
  }
  return newarr
}
function removeDuplicate4(arr){
  return new Array(...new Set(arr))
}
function removeDuplicate5(arr) {
  return arr.filter((item, index) => {
    return arr.indexOf(item) === index
  })
}
function removeDuplicate6(arr) {
  let obj = {}
  return arr.filter((item) => {
    return obj.hasOwnProperty(item) ? false:(obj[item]=item)
  })
}