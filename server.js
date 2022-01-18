'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Faction = require('./models/faction.model.js');
const Seeder = require('./seeders/seeder');

//Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
var mongoDB = 'mongodb://doe_backend:AldrichHouse80@10.0.1.42/dusk_of_empires';

//Connect to database
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => { 
  console.log('connected to DB');
}).catch((err) => {
  console.log(err);
} );
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

//Seed the Database
Seeder();

// App
const app = express();


app.get('/', (req, res) => {
  res.send("<html><h1>Hello World</h1></html>");
});

app.get('/faction', (req, res) => {
  let faction = new Faction({
    faction_name:"The Imperial College",
    player_name:"Connor F"
  });
  faction.save(function (err, results) {
    console.error(err);
    if(results._id){
      res.send(`<html><h1>Faction ID: ${results._id}</h1></html>`);
    }else{
      res.send(`<html><h1>Failed</h1></html>`);
    }
  });
  
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);