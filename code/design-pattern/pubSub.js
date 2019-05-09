class SubPub {
  constructor() {
    this.subscribers = {}
    this._subId = -1
  }
  publish(topic, args) {
    if (!this.subscribers[topic]) {
      return false
    }
    this.subscribers[topic].forEach((sub) => {
      sub.fn(topic, args)
    })
  }
  subscribe(topic, fn) {
    if (!this.subscribers[topic]) {
      this.subscribers[topic] = []
    }
    let token = ++this._subId
    this.subscribers[topic].push({
      fn: fn,
      token,
    })
    return token
  }
  unsubscribe(token) {
    Object.keys(this.subscribers).forEach((topic) => {
      topic.forEach((sub, key) => {
        if (sub.token === token) {
          topic.splice(key, 1)
          return token
        }
      })
    })
  }
}