function deepCopy2(obj) {
  let newobj = new obj.constructor
  Object.keys(obj).forEach((key) => {
    if (obj[key] && typeof obj[key]==='object'){
      newobj[key] = deepCopy(obj[key])
    }
    else {
      newobj[key] = obj[key]
    }
  })
  return newobj
}

function deepCopy3(obj) {
  return JSON.parse(JSON.stringify(obj))
}

// 利用messageChannel
function deepCopy5(obj) {
  return new Promise(resolve => {
    const {port1, port2} = new MessageChannel()
    port2.onmessage = evt => resolve(evt.data)
    port1.postMessage(obj)
   })
}
let newobj
let obj ={1:undefined,2:null,3:[1,3]}
deepCopy5(obj).then(data => {
  newobj = data
  console.log(newobj)
})