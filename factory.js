class Car {
  constructor(options) {
    this.condition = options.condition || "new",
      this.doors = options.doors || 4,
      this.color = options.color || "silver"
  }
}

class Truck {
  constructor(options) {
    this.condition = options.condition || "used",
      this.doors = options.doors || 2,
      this.color = options.color || "blue"
  }
}

class VehicleFactory {
  constructor() {
    this.vehicleClass = Car;
  }

  createVehicle(options) {
    switch (options.vehicleClass) {
      case "car":
        this.vehicleClass = Car;
        break;
      case "truck":
        this.vehicleClass = Truck
        break;
    }
    return new this.vehicleClass(options);
  }
}


var factory = new VehicleFactory();
var ride1 = factory.createVehicle({
  vehicleClass: "truck",
  color: "white"
})
console.log(ride1 instanceof Truck);