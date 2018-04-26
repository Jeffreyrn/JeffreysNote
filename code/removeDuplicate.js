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
var array = ['true', true, false, '1', 1, '', 'sss', " ", 1, 34, , , { x: 1 }, { x: 2 }]

Array.prototype.unique = function () {

  //利用对象的hash存储特性去重
  var object = {}, result = [];

  for (var i = 0, length = this.length; i < length; i++) {

    var temp = this[i], key;

    if ((typeof temp) == 'object') {
      key = JSON.stringify(temp); //若为对象类型，将对象序列化为字符串
    } else {
      key = typeof temp + temp;
    }

    if (!object[key]) {
      object[key] = true;  //若object中已经存在此键值，则证明此元素在数组中已经存在
      result.push(temp);

    }

  }

  return result;

}

console.log(array.unique());
//["true", true, false, "1", 1, "", "sss", " ", 34, undefined, Object { x=1}, Object { x=2}]