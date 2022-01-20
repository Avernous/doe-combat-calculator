'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Faction = require('./models/faction.model.js');
const Seeder = require('./seeders/seeder');
const router = require("./routes/routes.js");
const bodyParser = require('body-parser');

//Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
var mongoDB = 'mongodb://doe_backend:AldrichHouse80@10.0.1.42/dusk_of_empires';

//Connect to database
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => { 
  console.log('connected to DB');
  //Seed the Database
  Seeder();
}).catch((err) => {
  console.log(err);
} );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// App
const app = express();

app.use(bodyParser.json())
app.use('/api/v1', router)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);