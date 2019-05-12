
class ObserverList {
  constructor() {
    this.list = []
  }
  add(obj) {
    this.list.push(obj)
  }
  get(index) {
    if (index < 0 || index > this.list.length) return null
    return this.list[index]
  }
  count() {
    return this.list.length
  }
  remove(index) {
    this.list.splice(index, 1)
  }
}
class Subject {
  constructor() {
    this.observers = new ObserverList()
  }
  add(observer) {
    this.observers.add(observer)
  }
  remove(observer) {
    let index = this.observers.indexOf(observer)
    this.observers.remove(index)
  }
  notify(context) {
    const count = this.observers.count()
    for (let i = 0; i < count; i++) {
      this.observers.get(i).update(context)
    }
  }
}
class Observer {
  constructor(id) {
    this.id = id
  }
  update(context) {
    console.log(context, this.id)
  }
}

let s = new Subject()
let o = new Observer(1)
let o2 = new Observer(2)
s.add(o)
s.add(o2)
s.notify('lol')
// TODO: EventEmitter