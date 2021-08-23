class Vehicle {

  constructor(id, numberOfWheels, sound) {
    this.sound = sound;
    this.numberOfWheels = numberOfWheels;
    this.id = id;
    this.numberOfSeats = 4;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }
}
module.exports = Vehicle;
