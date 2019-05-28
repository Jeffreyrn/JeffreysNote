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
  var lastRan
  return function(...args) {
    if (!lastRan){
      func.apply(this, args)
      lastRan = new Date()
    }
    else {
      clearTimeout(timer)
      timer=setTimeout(() => {
        var current = new Date()
        if (current - lastRan > limit){
          func.apply(this, args)
          lastRan = current
        }
      }, wait - (new Date() - lastRan))
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