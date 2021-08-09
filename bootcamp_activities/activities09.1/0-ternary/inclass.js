const greeting = "night";
let helloMessage;

if (greeting === "day") {
    helloMessage = "Good Afternoon!";
}
else {
    helloMessage = "Good Morning/Evening!";
}

//console.log(helloMessage);

// CONDITION ? VALUE1 : VALUE2

helloMessage = (greeting === "day") ? "Good Afternoon!" : "Good Morning/Evening!";


//console.log(helloMessage);

let goodDay = false;

let message = goodDay ? "Its a Good Day" : "Its not a good Day";

let coin = "heads";

let coinflip = Math.floor(Math.random() * 2) + 1;

let flipResults = (coinflip === 1) ? "HEADS!" : "TAILS!";


//let someValue = [];
//let someValue = "";
//let someValue = 0;
let someValue = "0";

if (someValue) {
    console.log("TRUE")
}
else {
    console.log("FALSE");
}

