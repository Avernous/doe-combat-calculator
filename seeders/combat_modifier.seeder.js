const CombatModifier = require('../models/combat_modifier.model.js');
const fs = require('fs');

module.exports = function (){
    console.log("-combat_modifier");
    let modifiers;
    try{
        let rawdata = fs.readFileSync('json/combat_modifier.json', 'utf8');
        modifiers = JSON.parse(rawdata);
    }
    catch(err){
        console.error(err);
    }

    try{
        CombatModifier.insertMany(modifiers);
    }
    catch(err){
        console.error(err)
    }
};