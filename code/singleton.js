console.log(11)
function defineReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: function() {
      return val;
    },
    set: function(newval) {
      val = newval
    }
  })
}
var o = {}
defineReactive(o, 'haha', 'd')
console.log(o.haha)
o.haha = 's'
console.log(o.haha)