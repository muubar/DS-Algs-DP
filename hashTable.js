function hash(key, max) {
  const acc = key.split("").reduce((acc, val) => {
    return acc + val.charCodeAt(0);
  }, 0)
  return acc % max;
}

class HashTable {
  constructor(size = 4) {
    this.MAX_LENGTH = size;
    this.buckets = Array(this.MAX_LENGTH).fill(null);
  }

  set(key, value) {
    const i = hash(key, this.MAX_LENGTH);
    const obj = { key, value };
    const currentBucket = this.buckets[i];

    if (!currentBucket) {
      this.buckets[i] = [obj];
      return this.buckets[i];
    }

    for (let innerIndex = 0; innerIndex < currentBucket.length; innerIndex++) {
      if (currentBucket[innerIndex].key === key) {
        if (currentBucket[innerIndex].value === value) return currentBucket;
        currentBucket[innerIndex].value = value;
        return currentBucket;
      }
    }
    currentBucket.push(obj);
    return currentBucket;
  }

  get(key) {
    const i = hash(key, this.MAX_LENGTH);
    const currentBucket = this.buckets[i];

    if (!currentBucket) {
      return undefined;
    }

    for (let innerIndex = 0; innerIndex < currentBucket.length; innerIndex++) {
      if (currentBucket[innerIndex].key === key) return currentBucket[innerIndex].value;
    }
  }

  has(key) {
    const i = hash(key, this.MAX_LENGTH);
    const currentBucket = this.buckets[i];

    if (!currentBucket) {
      return false;
    }

    for (let innerIndex = 0; innerIndex < currentBucket.length; innerIndex++) {
      if (currentBucket[innerIndex].key === key) return true;
    }
    return false;
  }

  delete(key) {
    const i = hash(key, this.MAX_LENGTH);
    const currentBucket = this.buckets[i];

    if (!currentBucket) {
      return false;
    }

    for (let innerIndex = 0; innerIndex < currentBucket.length; innerIndex++) {
      if (currentBucket[innerIndex].key === key) {
        currentBucket.splice(innerIndex, 1);
        return true;
      }
    }
  }
}