'use strict';

const express = require('express');
const mongoose = require('mongoose');
const Seeder = require('./seeders/seeder');
const router = require("./routes/routes.js");
const bodyParser = require('body-parser');
require('dotenv').config({ path: './env/.env' });

//Constants
const PORT = 8080;
const HOST = '0.0.0.0';
const mongoDBUsername = process.env.MONGO_KEY
const mongoDBPassword = process.env.MONGO_SECRET
const mongoDBUrl = process.env.MONGO_DB_URL
const mongoDBPort = process.env.MONGO_DB_PORT
const mongoDBName = process.env.MONGO_DB_NAME
var mongoDB = `mongodb://${mongoDBUsername}:${mongoDBPassword}@${mongoDBUrl}:${mongoDBPort}/${mongoDBName}`;

//if buffer commands is set to true and the database is not connected. no errors will be thrown for using model functions
mongoose.set('bufferCommands', false);
//Connect to database
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => { 
  
  
}).catch((err) => {
  console.log(err);
} );

//mongoose database event handling
var db = mongoose.connection;
db.on('connected', () => {
  console.log('Connected to MongoDB');
  console.log('checking if seeding is needed:');
  mongoose.connection.db.listCollections().toArray(function(err, names) {
    if (err) {
        console.log(err);
    } else {
      let isSeeded=false;
      names.forEach((collection, index) =>{
        if(collection.name=="ships"){
          isSeeded = true;
        }
      });

      if(isSeeded == false){
        //Seed the Database
        Seeder();
      }else{
        console.log("Seeding Not Required");
      }

    }
  });
});
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.on('disconnected', () => {console.log('MongoDB disconnected!')});

// App
const app = express();

app.use(bodyParser.json())
app.use('/api/v1', router)

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);