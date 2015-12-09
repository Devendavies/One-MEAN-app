'use strict'
const mongoose = require('mongoose');

var PlayerSchema = new mongoose.Schema({
  name:        String,
  image    :   String,
  team:        String,
  turn_order:  Number, // 1st - 4th player
  score:       Number,
  initialRoll: Boolean,
  win_status:  Boolean
});

// Export Player Model to Game
var Player = mongoose.model('Player', PlayerSchema)
module.exports = Player;
