'use strict';

const express = require('express');
const mongoose = require('mongoose');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';
var mongoDB = 'mongodb://10.0.1.42/dusk_of_empires';
mongoose.connect(mongoDB, {useNewUrlParser: true, useUnifiedTopology: true})
.then((result) => { 
  console.log('connected to DB');
});
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// App
const app = express();


app.get('/', (req, res) => {
  res.send("<html><h1>Hello World</h1></html>");
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);