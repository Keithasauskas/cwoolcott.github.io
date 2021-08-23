// TODO: Import the parent class
const Vehicle = require('./vehicle');

// TODO: Create a `Boat` class that extends the `Vehicle` class

class Boat extends Vehicle {
  constructor(id, type, crew) {
    super(id, 0, 'BWOMP');
    this.type = type;
    this.crew = crew;
  }

  useBoatHorn() {
    console.log(`The ${this.type} Goes ${this.sound}`)
  }

  crewSoundOff() {
    this.crew.forEach(function (crewMember) {
      console.log(`${crewMember} reporting for duty!`);
    })
    // this.crew.forEach((crewMember) => {
    //   console.log(`${crewMember} reporting for duty!`);
    // })

  }


}

const boatPassengers = [
  'Blackbeard',
  'Mary Read',
  'Henry Morgan',
  'Madame Cheng',
];

const boat = new Boat(16, 'sailboat', boatPassengers);

console.log('---BOAT---');
boat.printInfo();
boat.useBoatHorn();
boat.crewSoundOff();
