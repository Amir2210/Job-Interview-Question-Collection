class LRU {
  constructor(capacity) {
    this.capacity = capacity
    this.cache = new Map()
  }

  get(key) {
    if (!this.cache.has(key)) {
      return -1
    }
    const value = this.cache.get(key)
    this.cache.delete(key)
    this.cache.set(key, value)
    return value
  }

  put(key, value) {
    if (this.cache.has(key)) {
      this.cache.delete(key)
    }
    this.cache.set(key, value)
    if (this.cache.size > this.capacity) {
      const oldestKey = this.cache.keys().next().value
      this.cache.delete(oldestKey)
    }
  }
}


const cache = new LRU(2);

cache.put(1, 10); // {1: 10}
cache.put(2, 20); // {2: 20, 1: 10}
console.log(cache.get(1)); // 10 (מעביר את 1 לראש)
cache.put(3, 30); // {3: 30, 1: 10} (2 נמחק כי הוא הכי ישן)
console.log(cache.get(2)); // -1 (לא נמצא)
cache.put(4, 40); // {4: 40, 3: 30} (1 נמחק כי הוא הכי ישן)
console.log(cache.get(1)); // -1 (לא נמצא)
console.log(cache.get(3)); // 30
console.log(cache.get(4)); // 40
