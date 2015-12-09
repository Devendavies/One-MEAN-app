'use strict'

const mongoose = require('mongoose');
let playerSchema = require('./player.js');

var userPlayerSchema = new mongoose.Schema({
  roll:          Number,
  board_url:     String,
  players:       [
    { type: mongoose.Schema.Types.ObjectId,
      ref: 'Player'
    }
  ],
  turn:          Number,
  last_roll:     Number,
  team_scores:   Number,
  winners:       String;
});

GameSchema.methods.round = function(players, roll, lastRoll) {
  Survey.findById(id, function(err, survey) {
    if(err) throw err;

        this.roll = Math.ceil(Math.random()*6);

    if (this.roll != this.lastRoll && this.players[turn].initialRoll == true){
      this.scoreUpdate(players[turn], roll, turn);
    }
  }
  turn = (turn%4) + 1; // sets turn to 1 - 4
}

module.exports = mongoose.model('Player', userPlayerSchema);
