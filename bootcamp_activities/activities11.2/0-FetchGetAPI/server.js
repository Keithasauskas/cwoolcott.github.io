const express = require('express');
const { fstat } = require('fs');
const path = require('path');
const carsData = require('./data/cars.json')

const PORT = 3001;

const app = express();

// Middleware for parsing application/json and urlencoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));

app.get(["/", "/cars"], (req, res) => {
    res.sendFile(path.join(__dirname, 'public/home.html'))
})

app.get("/api/cars", (req, res) => {
    res.status(200).json(carsData);
})

app.post("/api/cars", (req, res) => {

    console.log(req.body);
    if (req.body && req.body.carMake) {

        const { carMake, carModel, carYear } = req.body;

        res.json(`ADDED A CAR ${carYear} ${carMake}, ${carModel}`)


    }
    else {
        res.json("NO CAR ADDED")
    }

    res.json(`${req.method} was used on api/cars!`)

})

app.put("/api/cars", (req, res) => {
    res.json(`${req.method} was used on api/cars!`)
})

app.delete("/api/cars", (req, res) => {
    res.json(`${req.method} was used on api/cars!`)
})



app.get("*", (req, res) => {
    res.status(404).send("404 NOTHING HERE!")
})

app.listen(PORT, () => {
    console.log(`listening on PORT ${PORT}`);
})