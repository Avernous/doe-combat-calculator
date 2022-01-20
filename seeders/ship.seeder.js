const Ship = require('../models/ship.model');
const fs = require('fs');

module.exports = function (){
    console.log("-ships");
    let ships;
    try{
        let rawdata = fs.readFileSync('json/ships.json', 'utf8');
        ships = JSON.parse(rawdata);
    }
    catch(err){
        console.error(err);
    }

    try{
        Ship.insertMany(ships);
    }
    catch(err){
        console.error(err)
    }
};