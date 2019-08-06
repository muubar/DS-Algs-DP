class observable {
  constructor() {
    this.observersList = [];
  }

  subscribe(...observer) {
    this.observersList.push(...observer);
  }

  unsubscribe(observer) {
    const i = this.observersList.indexOf(observer);
    if (i !== -1) this.observersList.splice(i, 1);
  }

  notifyObservers() {
    this.observersList.forEach((observer) => observer.notify());
  }
}


class observer {
  constructor(num) {
    this.num = num;
  }

  notify() {
    console.log(`observer ${this.num} notified!`);
  }
}

var subject = new observable();
var listener1 = new observer(1);
var listener2 = new observer(2);
var listener3 = new observer(3);

subject.subscribe(listener1, listener2, listener3);
subject.unsubscribe(listener2);
subject.notifyObservers();
