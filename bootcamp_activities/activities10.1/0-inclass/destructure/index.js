
const carObj = {
    make: "Mazda",
    model: "Rx7",
    year: "1995"
}

// const year = carObj.year;

const { make, model, year } = carObj;

console.log(make, model, year)

const sampleArray = [5, 7, 45, 83, 2, 7, 2];

const [a, b, d, e, ...rest] = sampleArray;

function test(a, c, ...rest) {
    console.log(rest)
}

test(1, 2, 4, 5, 6, 7, 8);

console.log(a + b);

//console.log(a, b);

//console.log(rest)



