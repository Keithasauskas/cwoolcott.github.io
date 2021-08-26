const diagnostics = require('express').Router();
const { v4: uuidv4 } = require('uuid');
const { readAndAppend, readFromFile } = require('../helpers/fsUtils');

// GET Route for retrieving diagnostic information
diagnostics.get('/', (req, res) => {
  // TODO: Logic for sending all the content of db/diagnostics.json
  readFromFile('./db/diagnostics.json').then(function (data) {
    res.json(JSON.parse(data))
  })
});

// POST Route for a error logging
diagnostics.post('/', (req, res) => {
  console.log(req.body);

  const { isValid, errors } = req.body;

  // {
  //   "time": 1616087173408,
  //   "error_id": "249911fc-ce9d-4905-a934-745845b41c7a",
  //   "errors": {
  //     "tip:": "",
  //     "topic": "Gaming is not a valid topic",
  //     "username": ""
  //   }

  const payload = {
    time: Date.now(),
    error_id: uuidv4(),
    errors
  }

  if (!isValid) {
    readAndAppend(payload, './db/diagnostics.json');
    res.json('diagnostics info ADDED!')
  }
  else {
    res.json('Object is valid! No logging needed!')
  }
  // TODO: Logic for appending data to the db/diagnostics.json file
});

module.exports = diagnostics;
