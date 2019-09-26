class Observer {
  constructor(name) {
    this.name = name;
    this.observable = null;
  }

  update(str) {
    console.log(`${this.name} recieved: ${str}`);
  }
}

class Observable {
  constructor() {
    this.observers = new Map();
  }

  subscribe(observer) {
    if (this.observers.has(observer.name)) return false;
    this.observers.set(observer, true);
    return true;
  }

  unsubscribe(observer) {
    if (!this.observers.has(observer)) return false;
    this.observers.delete(observer);
    return true;
  }

  update(str) {
    for (let [key, value] of this.observers) {
      key.update(str);
    }
  }
}