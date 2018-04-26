function debounce(func, timeout) {
  var timer
  return function(...args) {
    var self = this
    clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(self, args)
    }, timeout)
  }
}
function throttle(func, wait) {
  var timer
  var start= new Date()
  return function(...args) {
    var self= this
    var now = new Date()
    if (now-start>wait){
      func.apply(self, args)
    }
    else {
      clearTimeout(timer)
      timer=setTimeout(() => {
        func.apply(self, args)
      }, wait)
    }
  }
}
function throttle(func, wait) {
  var timer
  var start=new Date()
  return function(...args){
    var now = new Date()
    var self = this
    if(now-start > wait) {
      func.apply(self, args)
    }
    else {
      clearTimeout(timer)
      timer=setTimeout(()=>{
        func.apply(self, args)
      }, wait)
    }
  }
}
Function.prototype.mybind=(that, ...args)=>{
  const self = this
  return function(){
    self.apply(that, args)
  }
}