const express = require('express');
const router = express.Router();
const Faction = require('../models/faction.model');
const mongoose = require('mongoose');
// url: /api/v1/ships

router.get('/factions', (req, res) => {
    Faction.find((err, results) => {
        if(err){
            console.log(err.name);
            res.sendStatus(500);
        }
        else{
            res.json(results)
        }
    })
});

router.get('/factions/:id', (req, res) => {
    Faction.findById(req.params.id, (err, results) => {
        if(err){
            if(err.name === "CastError"){
                res.sendStatus(400);
            }
            else{
                res.sendStatus(500);
            } 
        }
        else{
            res.json(results);
        }
    })

});


module.exports = router;