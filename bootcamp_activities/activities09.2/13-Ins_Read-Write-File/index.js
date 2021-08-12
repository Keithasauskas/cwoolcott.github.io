// fs is a Node standard library package for reading and writing files
const fs = require('fs');



fs.writeFile('pass.txt', 'PASSWORD2', function (err) {
  err ? console.log(err) : console.log('Success!')
});

// fs.appendFile('message.txt', '\nHow Are You', (err) =>
//   err ? console.log(err) : console.log('Success!')
// );

fs.readFile('pass.txt', 'utf8', (err, data) => {
  //err ? console.log(err) : console.log(data)
  if (data === "PASSWORD1") {
    console.log("WERE IN!");
  }
  else {
    console.log("Nuh Uh Uh");
  }
})

// fs.unlink('message.txt', (err) => {
//   err ? console.log(err) : console.log("Success")
// })






// Return the contents of 'data.csv' as a string in the variable "data"
// "utf8" encodes the raw buffer data in human-readable format
// fs.readFile('data.csv', 'utf8', (error, data) =>
//   error ? console.error(error) : console.log(data)
// );

// Uncomment this next function to write to the file with anything you pass in as process.argv[2]

// fs.writeFile('log.txt', process.argv[2], (err) =>
//   err ? console.error(err) : console.log('Success!')
// );
