const inquirer = require('inquirer');
const fs = require('fs');


function carWriteUp(fileBody) {
    fs.writeFile("car-write-up.txt", fileBody, (err) => {
        err ? console.log(err) : console.log("Success Car Write Up Complete!");
    })
}

const carPrompts = [
    {
        type: 'input',
        name: 'carModel',
        message: 'What model of car are you looking for?'
    },
    {
        type: 'password',
        name: 'passwordInput',
        message: 'Whats your password?'
    },
    {
        type: 'checkbox',
        name: 'carColor',
        message: 'What color car would you like?',
        choices: ['red', 'blue', 'yellow', 'gray', 'indigo', 'reb-purple', 'mauve']
    },
    {
        type: 'list',
        name: 'carPrice',
        message: 'How much would you like to spend?',
        choices: ['$5 - $1,000', '$1,001 - $5,000', '$5,001 - $10,000', '$10,001 - $20,000', '$20,001+']
    }
];

inquirer.prompt(carPrompts).then((responseObj) => {
    //console.log(responseObj)
    let fileBody = `User is looking for a ${responseObj.carModel ? responseObj.carModel : "car"} that has the color(s) `;

    responseObj.carColor.forEach(color => {
        fileBody += `${color}, `; //color + ", ";
    })

    fileBody += `They want to purchase ${responseObj.carPrice === '$20,001+' ? 'a luxury vehicle' : 'an affordable vehicle'}.`;

    carWriteUp(fileBody)


});


