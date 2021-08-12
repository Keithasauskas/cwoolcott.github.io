// importing FS module (File System)
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// 1. Location/Name of File
// 2. Content coming from User process.argv 
// 3. Error Callback

fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) => {
  //Ternary operator if error is true console log the err 
  err ? console.log(err) : console.log('Commit logged!')
});
// fs.appendFile('log.txt', `${process.argv[2]}\n`);

console.log(true ? "This is TRUE" : "This is False")
