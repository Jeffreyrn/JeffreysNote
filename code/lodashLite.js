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
Function.prototype.mybind=(that, ...args)=>{
  var self=this
  return function(){
    self.apply(that, args)
  }
}
function debounce(func, wait) {
  var timer=null
  return function(...args){
    var self= this
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(function(){
      func.apply(self,args)
    }, wait)
  }
}
function throttle(func, wait) {
  var start=new Date()
  var timer
  return function(...args){
    var now= new Date()
    if (now-start > wait) {
      func.apply(this, args)
    }
    else {
      clearTimeout(timer)
      timer=setTimeout((function(){
        func.apply(self,args)
      }),wait)
    }
  }
}