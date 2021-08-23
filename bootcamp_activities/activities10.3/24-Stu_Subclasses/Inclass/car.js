// TODO: Import the parent class
const Vehicle = require('./vehicle');
const vehicle = require('./vehicle')

// TODO: Create a `Car` class that extends the `Vehicle` class
class Car extends Vehicle {
  constructor(id, color, passengers) {
    const carSound = "Beep Beep";
    super(id, 4, carSound);
    this.color = color;
    this.passengers = passengers;
  }

  useCarHorn() {
    console.log(this.sound);
  }

  checkPassengers() {
    if (this.passengers.length > this.numberOfSeats) {
      console.log(`Only Seats ${this.numberOfSeats} People!`)
    }
    else {
      console.log(`You have room for ${this.numberOfSeats - this.passengers.length} People.`)
    }
  }


}
const carPassengers = [
  'Aristotle',
  'Confucius',
  'Socrates',
  'Lao-Tzu',
  'Plato',
];

const car = new Car(15, 'blue', carPassengers);

console.log('---CAR---');
car.printInfo();
car.useCarHorn();
car.checkPassengers();
