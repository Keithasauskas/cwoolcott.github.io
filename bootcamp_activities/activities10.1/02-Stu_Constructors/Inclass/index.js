// TODO: Create a constructor function called 'Developer' that takes in 'name' and 'tech'
function Developer(name, tech) {
    this.name = name.trim();
    this.tech = tech;
    this.intro = function () {
        console.log(`Hi my is ${this.name} and my favorite tech is ${this.tech}!`)
    }
}

const jesse = new Developer("Jesse", "Basic");
const gavin = new Developer("Gavin", "Phones");

jesse.intro();
gavin.intro();



// TODO: Include a method called 'introduction()' that introduces the Developer with their name and favorite tech

// TODO: Create a new object using the 'Developer' constructor

// TODO: Call the 'introduction()' method on the new object
