const express = require('express');
const path = require('path');
const pets = require('./pets.json')

const app = express();
const PORT = 3001;

app.use(express.static('public'))

app.get("/", (req, res) => {
    console.log(req.query);
    //REQUEST QUERY / QUERYSTRING
    const firstName = req.query.firstName ? req.query.firstName : "Someone";
    const car = req.query.car ? req.query.car : " car";
    res.send(`<h1>HI, ${firstName}! I want a ${car}!</h1>`);
})

app.get("/cars/:model?/:make?", (req, res) => {
    //REQUEST PARAMS
    console.log(req.params)
    const model = req.params.model;
    const make = req.params.make;

    res.send(`<h1>I want a  ${model} ${make}!</h1>`);
})

app.get("/api/greeting", (req, res) => {
    res.json({
        message: "HELLO",
        firstName: "Chris"
    })
})
app.get("/api/listofanimals", (req, res) => {
    res.json(pets)
})


app.get("/hello", (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'hello.html'));
})

app.get("/bye", (req, res) => {
    res.sendFile(path.join(__dirname, 'htmlfiles/bye.html'));
})

app.listen(PORT, function () {
    console.log("We are listening!");
})
