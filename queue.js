class Queue {
  constructor() {
    this.queue = [];
  }

  enqueue(value) {
    return this.queue.push(value);
  }

  dequeue() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  isEmpty() {
    return (this.queue.length === 0);
  }
}

var q = new Queue()
q.enqueue(5);
q.dequeue();
module.exports = Queue;