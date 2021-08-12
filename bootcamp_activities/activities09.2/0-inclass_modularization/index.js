const cars = require('./carsinfo');
const randomRickandMorty = require('random-rick-and-morty-character');

//console.log(cars.address);
console.log(cars.storeName);
console.log(cars.carsInShop[2].make);
rickAndMortyCharacter = randomRickandMorty.rickAndMortyCharacter(); //Jan-Michael Vincent

console.log(rickAndMortyCharacter);

switch (cars.carsInShop[1].make) {
    case "Mazda":
        console.log("This is the Mazda");
        break;
    case "Ford":
        console.log("This is the Ford");
        break;
    default:
        console.log("It's Something ELSE!")
}
