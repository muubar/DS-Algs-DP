class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    const obj = { value, priority }
    if (this.queue.length === 0) return this.queue.push(obj);
    for (let i = 0; i < this.queue.length; i++) {
      if (this.queue[i].priority >= priority) continue;
      this.queue.splice(i, 0, obj);
      return i;
    }
    return this.queue.push(obj);
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