const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const factionSchema = new Schema({
    faction_name: {
        type: String,
        required: true
    },
    player_name: {
        type: String,
        required: true
    }
});

const Faction = mongoose.model('faction', factionSchema);
module.exports = Faction;