const express = require('express');
const router = express.Router();

const shipRouter = require('./ships.routes');
const factionRouter = require('./faction.routes');
// url: /api/v1


router.use('/', shipRouter);
router.use('/', factionRouter);



module.exports = router;