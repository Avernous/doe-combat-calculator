const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const fleetSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    faction: {
        faction_name: {
            type: String,
            required: true
        },
        player_name: {
            type: String,
            required: true
        }
    },
    ships:[
        {
            name: {
                type: String,
                required: true
            },
            health: {
                type: Number,
                required: true
            },
            attack: {
                type: Number,
                required: true
            },
            evasion: {
                type: Number,
                required: true
            }
        }
    ],
    fleet_bonus:{
        description: {
            type: String,
            trim: true,
            required: [true, "description required"]
        },
        derived_from: {
            type: String,
            trim: true,
            required: [true, "'derived from' required"]
        },
        modifier:{
            attribute:{
                type: String,
                trim: true,
                required: [true, "attribute name required"]
            },
            is_percent:{
                type: Boolean,
                default: false,
                required: [true, "true or false required"]
            },
            is_variable:{
                type: Boolean,
                default: false,
                required: [true, "true or false required"]
            },
            min:{
                type: Number,
                required: false
            },
            max:{
                type: Number,
                required: false
            },
            step:{
                //this is the ammount to step-up by until the max is reached
                type: Number,
                required: false
            },
            value:{
                type: Number,
                required: [true, "modifier value required"]
            }
        }
    },
    notes: {
        type: String,
        required: true
    }

});

const Fleet = mongoose.model('fleet', fleetSchema);
module.exports = Fleet;