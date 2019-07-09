//shallow hash function
function hash(string, max) {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
};


class HashTable {
  constructor() {
    this.STORAGE_LIMIT = 4;
    this.storage = Array(this.STORAGE_LIMIT).fill(undefined);
  }

  add(key, value) {
    const idx = hash(key, this.STORAGE_LIMIT);
    const obj = { key, value };

    if (this.storage[idx]) {
      //collision detected, checking if the passed key already exists, if it does, overwrite it
      for (let i = 0; i < this.storage[idx].length; i++) {
        if (this.storage[idx][i].key === key) {
          this.storage[idx][i] = obj;
          return obj;
        }
      }
      //key not found, it was an honest collision
      return this.storage[idx].push(obj);
    }

    else {
      this.storage[idx] = [obj];
      return obj;
    }
  }


  remove(key) {
    const idx = hash(key, this.STORAGE_LIMIT);
    for (let i = 0; i < this.storage[idx].length; i++) {
      if (storage[idx][i].key === key) {
        return delete storage[idx][i];
      }
    }
    return false;
  }


  search(key) {
    const idx = hash(key, this.STORAGE_LIMIT);
    for (let i = 0; i < this.storage[idx].length; i++) {
      if (this.storage[idx][i].key === key) {
        return this.storage[idx][i];
      }
    }
    return false;
  }
}