class Animal {
    constructor(sound) {
        this.legs = "4";
        this.tail = true;
        this.noise = sound;
        this.tailString = this.tail ? "a tail" : "no tail";
    }

    displayAnimalInfo() {
        console.log(
            `${this.name} says ${this.noise}, he/she also has ${this.legs} legs and ${this.tailString}.`
        );
    }
}

class Cat extends Animal {
    constructor(name) {
        //const sound = "MEOW!" + " ";
        super("MEOW!");
        this.name = "Cat Named: " + name;
    }
    purr() {
        console.log("PURRR!");
    }
};

class Fish extends Animal {
    constructor(name) {
        super("BLUB!");
        this.name = "A fish called " + name;
        this.legs = "0";
    }
}

//const mrPants = new Cat("Mr. Pants");
const norm = new Fish("Norm");

norm.displayAnimalInfo();