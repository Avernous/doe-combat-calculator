const aptitudeSeeder = require('./combat_modifier.seeder');
const shipSeeder = require('./ship.seeder');

module.exports = function (){
    console.log("Now Seeding:")
    aptitudeSeeder();
    shipSeeder();
}