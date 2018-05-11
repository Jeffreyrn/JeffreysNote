function mainChar(str) {
  // 找出字符串中重复最多的字符
  let arr = str.split('')
  let objCount = arr.reduce((obj, current) => {
    return (obj[current]++||(obj[current]=1), obj)
  }, {})
  //Math.prototype.max.apply(null, )
  let main, count= 0
  Object.keys(objCount).forEach((index) => {
    if(objCount[index]>count) {
      count = objCount[index]
      main = index
    }
  })
  return main
}

// regex
var temp = {};
'abcdaabc'.replace(/(\w{1})/g, function ($1) {
  temp[$1] ? temp[$1] += 1 : temp[$1] = 1;
})
console.log(temp) // {a: 3, b: 2, c: 2, d: 1}
function mainChar(str){
  var arr = str.split('')
  var objCount = arr.reduce((p, current) => {
    return p.hasOwnProperty(current)? p[current]++:(p[current]=1, p) // ?
  }, {})
}
