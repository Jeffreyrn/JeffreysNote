// class app {
//   onClick(){
//     console.log(1,this)
//   }
// }
function app(){}
app.prototype.onClick=function(){
  console.log(this)
}
var a=new app()

var b=a.onClick

console.log(typeof b)
b()

var app2={
  onClick() {
    console.log(this)
  }
}

var b2 = app2.onClick

console.log(typeof b2)

b2()