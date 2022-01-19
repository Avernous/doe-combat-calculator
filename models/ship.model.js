const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shipSchema = new Schema({
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
});

const Ship = mongoose.model('ship', shipSchema);
module.exports = Ship;