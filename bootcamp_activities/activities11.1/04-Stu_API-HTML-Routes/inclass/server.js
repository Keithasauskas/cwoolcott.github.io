// TODO: Import express
const { response } = require('express');
const express = require('express');


// TODO: Import 'terms.json' file
const terms = require("./terms.json")

const PORT = 3001;

// TODO: Initialize app variable
const app = express();

app.get('/', (req, res) => {
  res.send("Visit <a href='http://localhost:3001/api/terms'>localhost:3001/api/terms</a>")
})

// TODO: Create a route for a GET request that will return the content of our `termData.json` file
app.get('/api/terms', (req, res) => {
  res.json(terms);
})



app.get('*', (req, res) => {
  res.send("404 NOT FOUND!!!!")
})

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
