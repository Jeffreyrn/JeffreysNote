function Promise(fn){
  if (!(this instanceof Promise)) throw new TypeError('promise existed')
  if (typeof fn !== 'function') {
    throw new TypeError('not a function')
  }
  this._state=0
  this._handled=false
  this._value=undefined
  this._deferreds=[]
  doResolve(fn, this)
}
function doResolve(fn, self){
  var done = false
  try{
    fn(
      function(value){
        if (done) return ;
        done = true
        resolve(self, value)
      },
      function(value){
        if (done) return;
        done = true
        reject(self, value)
      }
    )
  }
  catch(err){
    if (done) return ;
    done = true
    reject(self, err)
  }
}
Promise.prototype.then = function(onFulfilled, onRejected) {
 var prom = new this.constructor(function(){})
 handle(this, new Handler(onFulfilled,onRejected,prom))
 return prom
}
function Handler(promise, onFulfilled, onRejected){
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled:null
  this.onRejected = typeof onRejected === 'function' ? onRejected:null
  this.promise = promise
}
function resolve(self, newValue){
  try{
    if(newValue===self) throw new TypeError('promise can not resolve itself')
    if (newValue && (typeof newValue === 'object' || typeof newValue === 'function')){

    }
    self.state = 1
    self._value = newValue
    finale(self)
  }catch(e){
    reject(self,e)
  }
}
function reject(self, newValue){
  self.state=2
  self._value=newValue
  finale(self)
}
function handle(self, deferred){}