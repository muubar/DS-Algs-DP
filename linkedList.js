class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }


  add(value) {
    const node = new LinkedListNode(value);

    if (!this.head) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  }


  prepend(value) {
    const node = new LinkedListNode(value, this.head);
    head = node;
    if (!tail) tail = node;
  }


  [Symbol.iterator]() {
    var currentNode = this.head;

    return {
      next() {
        if (currentNode) {
          let val = {
            value: currentNode.value,
            done: false
          };
          currentNode = currentNode.next;
          return val;
        }
        return {
          value: null,
          done: true
        };
      }
    }
  }


  search(value) {
    var currentNode = this.head;
    while (currentNode) {
      if (currentNode.value === value) return true;
      currentNode = currentNode.next;
    }
    return false;
  }


  delete(value) {
    var currentNode = this.head;

    if (currentNode.value === value) {
      if (this.head === this.tail) {
        this.head = null;
        this.tail = null;
      } else {
        this.head = currentNode.next;
        return true;
      }

      while (currentNode.next) {
        if (currentNode.next.value === value) {
          currentNode.next = currentNode.next.next;
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    }
  }
}