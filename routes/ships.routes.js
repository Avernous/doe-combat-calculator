const express = require('express');
const router = express.Router();
const Ship = require('../models/ship.model');
const mongoose = require('mongoose');
// url: /api/v1/ships

router.get('/ships', (req, res) => {
    Ship.find((err, results) => {
        if(err){
            console.log(err.name);
            res.sendStatus(500);
        }
        else{
            res.json(results)
        }
    })
});

router.get('/ships/:id', (req, res) => {
    Ship.findById(req.params.id, (err, results) => {
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