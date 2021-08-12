// Template literals
// Template literals are string literals allowing embedded expressions. 
// You can use multi-line strings 
// and string interpolation features with them.



let firstName = `Chris`;

let greeting = "Hi My name is " + firstName + "!";

let greeting2 = `Hi My name is ${firstName}!`

let value1 = 5;
let value2 = 1;

let operation = `${value1} + ${value2} = ${value1 + value2}`;
console.log(operation);

let madlib = {
    name: "Winston",
    lang: "Node",
    action: "Take a Break",
    isHappy: true
}

let bioStatement = `The Developer named ${madlib.name}, is great at ${madlib.lang} 
and I think he/she should ${madlib.action}. ${madlib.isHappy ? " They are happy to join! " : "They are sad today!"}`;

console.log(bioStatement);

console.log(`This is a 'Great' Day!`);
