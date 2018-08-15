const express = require('express');
const MongoClient = require('mongodb').MongoClient;
const bodyParser = require('body-parser');
const db = require('./config/db');

// initialize app as an instance of Express
const app = express();

const port = 8000;

// add bodyParser
app.use(bodyParser.urlencoded({ extended: true }));

// connect to mongodb
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err);
  // db = database.db('notes-node-api');
  require('./app/routes')(app, db);
  app.listen(port, () => {
    console.log(`live on port ${port}`);
  });
}); 



