const linkedList = require("./linkedList.js");

function hash(string, max) {
  var hash = 0;
  for (var i = 0; i < string.length; i++) {
    hash += string.charCodeAt(i);
  }
  return hash % max;
}

class HashTable {
  constructor() {
    this.SIZE_MAX = 4;
    this.arr = Array(this.SIZE_MAX).fill(null);
  }

  add(value) {
    const i = hash(value, this.SIZE_MAX);
    var currentIndexLL = this.arr[i];
    if (currentIndexLL) {
      if (!currentIndexLL.search(value)) currentIndexLL.add(value);
      return true;
    }
    this.arr[i] = new linkedList();
    this.arr[i].add(value);
    return true;
  }

  has(value) {
    const i = hash(value, this.SIZE_MAX);
    if (this.arr[i]) {
      return this.arr[i].search(value);
    }
    return false;
  }

  remove(value) {
    const i = hash(value, this.SIZE_MAX);
    if (this.arr[i]) return this.arr[i].delete(value);
    else return false;
  }
}