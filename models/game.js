'use strict'

const mongoose = require('mongoose');
let playerSchema = require('./player.js');

var userPlayerSchema = new mongoose.Schema({
  board_url:     String,
  players:       [
    { type: mongoose.Schema.Types.ObjectId,
      ref: 'Player'
    }
  ],
  turn_idicator: Number,
  last_roll:     Number,
  team_scores:   Number,
  winners:       String;
});

module.exports = mongoose.model('Player', userPlayerSchema);
