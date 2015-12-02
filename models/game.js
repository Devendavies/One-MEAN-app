'use strict'

const mongoose = require('mongoose');

var userPlayerSchema = new mongoose.Schema({
  board_url:     String,
  players:       [
    
  ],
  turn_idicator: Number,
  last_roll:     Number,
  team_scores:   Number,
  winners:       String;
});

module.exports = mongoose.model('Player', userPlayerSchema);
