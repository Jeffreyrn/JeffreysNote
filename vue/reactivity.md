## 响应式

```javascript
function observer(value, cb) {
  // cb is callback
  Object.keys(value).forEach((key) => defineReactive(value, key, value[key], cb))
}
function defineReactive(obj, key, val, cb){
  Object.defineProperty(obj, key, {
    enumerable: true,
    configurable: true,
    get: () => {
      /* 依赖收集 */
    },
    set: () => {
      cb()
    },
  })
}
```

## Mini Observer by Evan You 
- `observe()` converts the properties in the received object and make them
  reactive. For each converted property, it gets assigned a `Dep` instance which keeps track of a list of subscribing update functions, and triggers them to re-run when its setter is invoked.

- `autorun()` takes an update function and re-runs it when properties that the
  update function subscribes to have been mutated. An update function is said
  to be "subscribing" to a property if it relies on that property during its
  evaluation.
```javascript
function isObject (obj) {
    return typeof obj === 'object'
      && !Array.isArray(obj)
      && obj !== null
      && obj !== undefined
}

function observe (obj) {
  if (!isObject(obj)) {
    throw new TypeError()
  }

  Object.keys(obj).forEach(key => {
    let internalValue = obj[key]
    let dep = new Dep()
    Object.defineProperty(obj, key, {
      get () {
        dep.depend()
        return internalValue
      },
      set (newValue) {
        const isChanged = internalValue !== newValue
        if (isChanged) {
          internalValue = newValue
          dep.notify()
        }
      }
    })
  })
}

window.Dep = class Dep {
  constructor () {
    this.subscribers = new Set()
  }

  depend () {
    if (activeUpdate) {
      // register the current active update as a subscriber
      this.subscribers.add(activeUpdate)
    }
  }

  notify () {
    // run all subscriber functions
    this.subscribers.forEach(subscriber => subscriber())
  }
}

let activeUpdate

function autorun (update) {
  function wrappedUpdate () {
    activeUpdate = wrappedUpdate
    update()
    activeUpdate = null
  }
  wrappedUpdate()
}
```

