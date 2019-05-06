function myPromise(fn){
  if (typeof fn !== 'functin') return;
  this._state=0
  this._handled=false
  this._value=undefined
  this._deferreds=[]
  doResolve(this, fn)
}
myPromise.prototype.then=function(onFulfilled, onRejected){
  var prom = new this.constructor(function(){})
  handle(this, new Handler(onFulfilled, onRejected, prom))
  return prom
}
function Handler(onFulfilled, onRejected, promise){
  this.onFulfilled=typeof onFulfilled === 'function'&&onFulfilled
  this.onRejected=typeof onRejected === 'function'&&onRejected
  this.promise=promise
}
function doResolve(self, fn){
  var done=false
  try{
    fn(
      function(value){
        if (done) return;
        done=true;
        resolve(self, value)
      },
      function(reason){
        if (done) return;
        done=true;
        reject(self,reason)
      }
    )
  } catch (e) {
    if (done) return;
    done = true;
    reject(self, e)
  }
}
function resolve(self, value){
  try{
    if (value===self) throw new Error('can not resolve itself')
    if (value && (typeof value==='object'||typeof value==='function')){
      var then = value.then
      if (value instanceof myPromise){
        self._state=3
        self._value=value
        finale(self)
        return;
      }
      else if (typeof then==='function'){
        doResolve(self, bind(then,value))
        return;
      }
      self._state=1
      self._value=value
      finale(self)
    }
  }catch(err){
    reject(self, err)
  }
}
function reject(self, value){
  self._state=2
  self._value= value
  finale(self)
}
function finale(){

}
function handle(){
  
}
new myPromise((resolve, reject)=>{
  setTimeout(()=>{
    reject(2)
  },1000)
}).then((value)=>{
  console.log(value)
  return value+1
}).then((value)=>{
  console.log(value)
})