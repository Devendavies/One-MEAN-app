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

GameSchema.methods.round = function(players, roll, last_roll) { /* Do I need to pass? (would include "this"s) */
  if(err) throw err;
  this.roll = Math.ceil(Math.random()*6);

  if (this.roll != this.last_roll && this.players[turn].initialRoll == true){
    this.scoreUpdate(players[turn], roll, turn);
  }
  turn = (turn%4) + 1; // sets turn to 1 - 4
}

GameSchema.methods.firstRound = function (){
  turn = Math.ceil(Math.random()*4); // Can be improved to actually see 4 rolls later
  roll = Math.ceil(Math.random()*6); // Bonus roll
  players[turn%4].score -= roll;
  hideButton(turn%4 + 1);
  roll = Math.ceil(Math.random()*6);
  updateScores(player[turn]);
  showButton(turn%4 + 1);
  // moveFeed(player[turn%5].id + 'has won the roll with a ' + roll)
  console.log(players[turn%4].id + ' has rolled a ' + roll);
};

GameSchema.methods.scoreUpdate = function(player, roll, turn) {
  if(err) throw err;

  switch (roll) {
    case 1:
    case 2:
    case 3:
      player.score -= 1;
      console.log(player.name + ' moves 1 yard!\n');
      console.log((player.score + 1) + ' >> ' + player.score);
      turn += 1;
      break;
    case 4:
      player.score -= 2;
      console.log(player.name + ' loses 2 points\n');
      console.log((player.score + 2) + ' >> ' + player.score);
      if(player.initialRoll == true){
        turn += 3;
      }
      break;
    case 5:
      player.score -= 2;
      console.log(player.name + ' loses 2 points\n');
      console.log((player.score + 2) + ' >> ' + player.score);
      if(player.initialRoll == true){
        turn += 2;
      }
      break;
    case 6:
      if(player.initialRoll == true){ // Check if first roll this turn                   // Gives same player another roll
        player.score -= 1;
        console.log(player.name + ' loses 1 points and gets to roll again!\n');
        console.log((player.score + 1) + ' >> ' + player.score);
        player.initialRoll = false;
        player.scoreupdate(player, roll, turn);
      } else {
        player.score -= 2;
        console.log(player.name + ' loses 2 points!\n');
        console.log((player.score + 2) + ' >> ' + player.score);
        player.initialRoll = true;
        turn += 1;
      }
      break;
    default: console.log('Roll error'); // Dice error throw
  }
});

GameSchema.methods.winCheck = function(){
  if ((players[0].score <= players[1].score) ||
      (players[0].score <= players[3].score) ||
      (players[2].score <= players[1].score) ||
      (players[2].score <= players[3].score)) {
    winners = 'cops';
    return 'Sweet Justice...';
  } else if ((players[1].score <= 0) && (players[3].score <= 0)){
    winners = 'robbers';
    return 'Evil as a cookie...';
  } else { return null; }
}

GameSchema.methods.missCheck = function(){
  if (roll == last_roll){
    return true;
  } else { return false; }
};

// Hide a button
GameSchema.methods.hideButton = function(button){
  $('#button' + button).css('display', 'none');
};

// Show a button
GameSchema.methods.showButton = function(button){
  $('#button' + button).css('display', '');
}


module.exports = mongoose.model('Player', userPlayerSchema);
