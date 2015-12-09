'use strict';
var express = require('express'),
    router = express.Router(),
    bodyParser = require('body-parser'), //parses POST info
    methodOverride = require('method-override'); //manipulates POST

var playersController = require('../controllers/player');

// http://127.0.0.1:3000/players
router.route('/players')

  //GET all players
  .get(playersController.getAll)


router.route('/players/:id')

  // GET return specific player
  .get(playersController.getPlayer)

  // PATCH update existing player
  .patch(playersController.updatePlayer)


module.exports = router
