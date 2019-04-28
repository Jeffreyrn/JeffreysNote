function MyPromise(excutor) {
  let successCallback, failCallback
  this.then = function(fulfilled, rejected) {
    successCallback = fulfilled
    failCallBack = rejected
  }
  setTimeout(() => {
    function resolve(value) {
      console.log('resolve')
      successCallback(value)
    }
    function reject(value) {
      failCallback(value)
    }
    excutor(resolve, reject)
  }, 0)
  
}
new MyPromise((resolve, reject) => {
  resolve(11)
}).then((data)=>{
  console.log(data)
})