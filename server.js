'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Seeder = require('./seeders/seeder');
const router = require("./routes/routes.js");
const bodyParser = require('body-parser');

//Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
var mongoDB = 'mongodb://doe_backend:AldrichHouse80@10.0.1.42/dusk_of_empires';


//if buffer commands is set to true and the database is not connected. no errors will be thrown for using model functions
mongoose.set('bufferCommands', false);
//Connect to database
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => { 
  //Seed the Database
  Seeder();
}).catch((err) => {
  console.log(err);
} );
//mongoose database connection error handling
var db = mongoose.connection;
db.on('connected', () => {
  console.log('Connected to MongoDB')

});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('disconnected', () => {console.log('MongoDB disconnected!')});

// App
const app = express();

app.use(bodyParser.json())
app.use('/api/v1', router)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);