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
function handle(self, deferred){
  while(self._state=3){
    self=self._value
  }
  if (self.state===0){
    self._deferreds.push(deferred)
    return;
  }
  self._handled=true
  Promise._immediateFn(function() {
    var cb=self._state===1?deferred.onFulfilled:deferred.onRejected
    if(cb===null){
      (self._state===1?resolve:reject)(deferred.promise, self._value)
      return;
    }
    var ret;
    try{
      ret= cb(self._value);
    }catch(e){
      reject(deferred.promise,e);
      return;
    }
    resolve(defered.promise,ret)
  })
}
function finale(self){
  for(var i= 0, len=self._deferreds.length;i<len;i++){
    handle(self, self._deferreds[i])
  }
  self._deferreds=null
}