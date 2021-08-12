// TODO: Import `maths.js`
const maths = require('./maths')

// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`

const input = process.argv;

const operation = input[2];
const numOne = parseFloat(input[3]);
const numTwo = parseFloat(input[4]);

// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`

switch (operation) {
    case 'sum':
        console.log(maths.sum(numOne, numTwo));
        break;
    case 'difference':
        console.log(maths.difference(numOne, numTwo));
        break;
    case 'product':
        console.log(maths.product(numOne, numTwo));
        break;
    default:
        console.log(maths.quotient(numOne, numTwo));

}



