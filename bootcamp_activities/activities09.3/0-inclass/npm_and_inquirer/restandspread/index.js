//Spread
var myName = ["Chris", "Woolcott", "Panda"];
var newArr = ["Developer", ...myName, "Minnesota"];
console.log(newArr); // ["Chris" , "Woolcott" , "Developer" , "Minnesota"] ;

//Rest
function myData(firstName, State, ...args) {
    console.log(args); // ["Chris","Minnesota","Developer", "Minneapolis"]
}

myData("Chris", "Minnesota", "Developer", "Minneapolis");

//Reduce
function addFunction(total, num) {

    return total + num;
}

const numbers = [5, 10, 15, 20];

// Reduce by means of...
const finalNumber = numbers.reduce(addFunction);

console.log(finalNumber)

//Reduce
function singleString(total, string) {

    return total + ":" + string;

}

const animals = ["pigs", "horses", "cows", "dogs"];

// Reduce by means of...
const allTheAnimals = animals.reduce(singleString);

console.log(allTheAnimals)


