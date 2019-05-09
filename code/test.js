function myPromise(fn){
  if(typeof fn!=='function') throw new TypeError('no fn')
  this._state=0
  this._value=undefined
  this._handled=false
  this._deferreds=[]
  doResolve(this, fn)
}
function doResolve(self, fn) {
  var done = false;
  try {
    fn(
      function (value) {
        if (done) return;
        done = true;
        resolve(self, value);
      },
      function (reason) {
        if (done) return;
        done = true
        reject(self, reason)
      },
    );
  } catch (err) {
    if (done = true) return;
    done = true
    reject(self, err)
  }
}
function noop() { }
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null
  this.onRejected = typeof onRejected === 'function' ? onRejected : null
  this.promise = promise
}
myPromise.prototype.then=function(onFulfilled, onRejected){
  var prom = new this.constructor(noop)
  handle(this, new Handler(onFulfilled, onRejected, prom))
  return prom
}
function resolve(self, value){
  try{
    if (self===value) throw new TypeError('itself')
    self._state=1
    self._value=value
    finale(self)
  }catch(err){
    reject(self, err)
  }
}
function reject(self, reason) {
  self._state = 2
  self._value = reason
  finale(self)
}
function handle(self, deferred){
  if (self._state===0){
    self._deferreds.push(deferred)
    return;
  }
  self._handled=true
  setTimeout(() => {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value)
      return;
    }
    var ret
    try{
      
        ret = cb(self._value)
      
    }catch(err){
      reject(deferred.promise, err)
    }
    resolve(deferred.promise, ret)
  })
}
function finale(self){
  if (self._state===2|| self._deferreds.length===0){
    setTimeout(()=>{
      if (!self._handled){

        console.error('not handle')
      }
    },0)
  }
  for(let i=0,len=self._deferreds.length;i<len;i++){
    handle(self, self._deferreds[i])
  }
  self._deferreds=null
}
let p = new myPromise((rs, rj) => {
  rj(22)
}).then((v) => {
  console.log('resolve', v)
})