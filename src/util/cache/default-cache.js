/**
 * Created by gexuhui on 17/9/26.
 */
class DefaultCache {
  constructor() {
    this.store = {}
  }
  get(key) {
    return this.store[key]
  }
  remove(key) {
    delete this.store[key]
  }
  set(key, value) {
    this.store[key] = value
  }
  clear() {
    this.store = {}
  }
}

export default DefaultCache;
