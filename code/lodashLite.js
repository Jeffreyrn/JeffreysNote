// search input, button click
function debounce(func, timeout) {
  var timer
  return function(...args) {
    clearTimeout(timer)
    timer = setTimeout(()=>{
      func.apply(this, args)
    }, timeout)
  }
}

// window resize, button clicked
function throttle(func, wait) {
  var timer
  var start= new Date()
  return function(...args) {
    var now = new Date()
    if (now-start>wait){
      func.apply(this, args)
    }
    else {
      clearTimeout(timer)
      timer=setTimeout(() => {
        func.apply(this, args)
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