class Grandparent {
    constructor() {
        this.name = "Grandpa";
        this.hobby = "Whittle";
    }

    hobbyDisplay() {
        console.log(`${this.name} likes to ${this.hobby}`)
    }

}

class Parent extends Grandparent {
    constructor() {
        super();
        this.name = "Bob";
    }
    parentMessage() {
        console.log(this.name + " Hello From Parent")
    }
}



// const grandpa = new Grandparent();
// grandpa.hobbyDisplay();


const bob = new Parent();
bob.parentMessage()