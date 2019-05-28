function throttle(fn, wait){
  var timer
  var lastRan
  return function(...args){
    if(!lastRan){
      fn.apply(this, args)
      lastRan = new Date()
    }
    else{
      clearTimeout(timer)
      timer = setTimeout(() => {
        var current = new Date()
        if( (current - lastRan) > wait){
          fn.apply(this, args)
          lastRan = current
        }
      }, wait - (new Date() - lastRan))
    }
  }
}