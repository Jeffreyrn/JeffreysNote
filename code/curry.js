function nest(fn, i, args) {
  return function(x) {
    args.push(x)
    if(i===fn.length)
      return fn(...args)
    else
      return nest(fn, i+1, args)
  }
}
function curry(fn) {
  if(fn.length ===0)
    return fn
  var args = []
  return nest(fn, 1, args)
}