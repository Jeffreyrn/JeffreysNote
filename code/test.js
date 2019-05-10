function observer(obj){
  Object.keys(obj).forEach(key =>{
    let currentValue=obj[key]
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      get(){
        console.log('get')
        dep.depend()
        return currentValue
      },
      set(newValue){
        console.log('set')
        if (newValue !== currentValue) {
          currentValue = newValue
          dep.notify()
        }
      }
    })
  })
}
class Dep{
  constructor(){
    this.subsciber=new Set()
  }
  depend(){
    if(activeUpdate){
      this.subsciber.add(activeUpdate)
    }
  }
  notify(){
    this.subsciber.forEach(sub => sub())
  }
}
let activeUpdate
function autorun(update){
  function wrapUpdate(){
    activeUpdate=wrapUpdate
    update()
    activeUpdate=null
  }
  wrapUpdate()
}
let data={
  foo: 1
}
observer(data)
// autorun(()=>{
//   console.log(data.foo)
// })

//console.log(data.foo)
data.foo++