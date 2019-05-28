

function noop() { }

function myPromise(fn) {
  if (typeof fn !== 'function') throw new TypeError('not a function');
  this._value = undefined
  this._state = 0
  this._handled = false
  this._deferreds = []
  doResolve(this, fn);
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
    if (done) return;
    done = true
    reject(self, err)
  }
}
function resolve(self, value) {
  try {
    if (value === self) {
      throw new TypeError('can not resolve itself')
    }
    //*
    if (value && (typeof value === 'function' || typeof value === 'object')) {
      var then = value.then
      if (value instanceof myPromise) {
        self._state = 3
        self._value = value
        finale(self)
        return;
      }
      else if (typeof then === 'function') {
        doResolve(self, bind(then, value))
      }
    }
    self._state = 1
    self._value = value
    finale(self)
  }
  catch (err) {
    reject(self, err)
  }
}
function reject(self, reason) {
  self._state = 2
  self._value = reason
  finale(self)
}
//*
myPromise.prototype.then = function (onFulfilled, onRejected) {
  let prom = new this.constructor(noop)
  handle(this, new Handler(onFulfilled, onRejected, prom))
  return prom
}
function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null
  this.onRejected = typeof onRejected === 'function' ? onRejected : null
  this.promise = promise
}
function handle(self, deferred) {
  while (self._state === 3) {
    self = self._value
  }
  if (self._state === 0) {
    self._deferreds.push(deferred)
    return;
  }
  self._handled = true
  setTimeout(() => {
    var cb = self._state === 1 ? deferred.onFulfilled : deferred.onRejected
    if (cb === null) {
      (self._state === 1 ? resolve : reject)(deferred.promise, self._value)
      return;
    }
    var ret;
    try {
      ret = cb(self._value)
    }
    catch (e) {
      reject(deferred.promise, err)
    }
    resolve(deferred.promise, ret)
  }, 0)
}
function finale(self) {
  if (self._state === 2 && self._deferreds.length === 0) {
    setTimeout(() => {
      if (!self._handled) {
        console.error('unhandled reject')
      }
    }, 0)
  }
  for (var i = 0, len = self._deferreds.length; i < len; i++) {
    handle(self, self._deferreds[i])
  }
  self._deferreds = null
}
let p = new myPromise((rs, rj) => {
  rj(22)
}).then((v) => {
  console.log('resolve',v)
}, (v) => {
  console.log('reject', v)
})