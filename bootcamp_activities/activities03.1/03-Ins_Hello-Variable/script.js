// Declares student variable using var keyword 
var studentName = "Abdul";

// Uses assignment operator(=) to assign a value

var studentAge = 32;
var beenInSchoolYears = 4;
var currentlyInSchool = true;

console.log(studentName);

// To re-assign a variable, use only the variable's name  
studentName = "Tonya";
studentAge = 52;

// To access a value stored in a variable, use the variable's name
console.log(studentName);

//To combine the message with a variable value use the concatenation operator(+)
//Logs "My name is "
console.log("My name is ");

// Logs "My name is Tonya"
console.log("My name is " + studentName + ". I'm " + studentAge);

console.log(studentAge + beenInSchoolYears)

console.log(currentlyInSchool);