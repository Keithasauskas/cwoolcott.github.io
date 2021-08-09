

// Says Hi Function; send name and get hi name back

function sayHi(name) {
    console.log("Hi " + name);
}

var sayHi2 = function (name) {
    console.log("Hi " + name);
}

var sayHi3 = (name) => {
    console.log("Hi " + name);
}

var sayHi4 = name => {
    console.log("Hi " + name);
}

var sayHi5 = function (name) {
    return "Hi " + name;
}

var sayHi6 = (name) => "Hi " + name;

var multiply = (a, b) => a * b;


//sayHi4("Chris");

//console.log(sayHi6("chris"));

var carObject = {
    make: "Mazda",
    model: "Rx-7",
    honk: function () {
        console.log(this.model + " GOES BEEP!");
    }
}

carObject.honk();
