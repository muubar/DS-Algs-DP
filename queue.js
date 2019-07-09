class Queue {
  queue = [];

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