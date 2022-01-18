const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const combatModifierSchema = new Schema({
    isDeleted: {
        /*
        this value is to support soft-delete. 
        soft-delete is when a file is marked deleted in the database
        and no longer shows up on the front end, but is still held in 
        the database for safety or archival purposes.
        */
        type: Boolean,
        default: false,
        required: true
    },
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
});

const CombatModifier = mongoose.model('combat_modifier', combatModifierSchema);
module.exports = CombatModifier;