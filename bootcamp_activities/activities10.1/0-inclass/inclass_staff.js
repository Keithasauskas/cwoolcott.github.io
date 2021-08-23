let admin = true;


//Create Staff
function Staff(name, doctor) {
    this.name = name;
    this.accessToForthFloor = true;
    this.doctor = doctor;
    this.employeeOfTheMonth = false;
    this.paging = function () {
        if (this.doctor) {
            console.log("Paging Dr." + this.name)
        }
        else {
            console.log("No Beeper for " + this.name)
        }
    }

}

const izzy = new Staff("Izzy", true);
const kabao = new Staff("Kabao", false);



Staff.prototype.performanceReview = function () {
    console.log(` NAME IS: ${this.name} : And THEY ARE DOING GREAT!`)
}
Staff.prototype.benefits = ["DENTAL", "MEDICAL", "VSP", "401K MATCH 8%"]


// console.log(izzy.benefits);

console.log(izzy)
console.log(izzy.__proto__)

// let numbers = [4, 6, 3, 4, 7, 3, 2];

// Array.prototype.sayHello = function () {
//     console.log("Hello!");
// }

// numbers.sayHello();




