class Colleague {
  constructor(name) {
    this.name = name
    this.mediator = null;
  }

  recieve(msg, from) {
    console.log(`${from.name} to ${this.name}: ${msg}`);
  }

  send(msg, to) {
    if (this.mediator) {
      this.mediator.send(msg, this, to);
    }
    else throw Error('colleague not registered with a mediator');
  }
}

class Mediator {
  constructor() {
    this.colleagues = {};
  }

  register(colleague) {
    this.colleagues[colleague.name] = colleague;
    colleague.mediator = this;
  }

  send(msg, from, to) {
    if (to) to.recieve(msg, from);
    else {
      for (var key in this.colleagues) {
        if (this.colleagues[key] !== from) this.colleagues[key].recieve(msg, from);
      }
    }
  }
}


var m = new Mediator();
var col1 = new Colleague('steve');
var col2 = new Colleague('john');
var col3 = new Colleague('smith');
m.register(col1);
m.register(col2);
m.register(col3);
col1.send('hello world');
col2.send('how are you doing stevey boi', col1);
