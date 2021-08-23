
class Simpsons {

	constructor(firstName) {
		this.firstName = firstName
		this.lastName = "Simpson";
		this.street = "Evergreen Terrace";
		this.hair = true;
	};

	printName(justFirst) {
		if (justFirst) {
			console.log(this.firstName);
		}
		else {
			console.log(this.firstName + ' ' + this.lastName);
		}
	};

	sayHi() {
		console.log("HI!");
	};
}

const homer = new Simpsons("Homer");
console.log(homer.street);
const lisa = new Simpsons("Lisa");

homer.printName(true);
lisa.printName();