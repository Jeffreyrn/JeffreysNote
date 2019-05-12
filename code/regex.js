// 千分位
function thousanddivide(str){
  return str.replace(/(?!^)(?=(\d{3})+$)/g, ',')
}
// 驼峰化
function cameralize(str){
  return str.replace(/-(\w)/g, function(match, c){
    return c? c.toUpperCase():''
  })
}
// url
function urlcheck(str) {
  return str.test(/^((http|ftp|https):\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w\.-]*)*/g)
}