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


PlayerSchema.methods.scoreUpdate = function(player, roll, turn) {
  Survey.findById(id, function(err, survey) {
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
    survey.save(function(err) {
      if(err) throw err;
    });
  });
}

// Export Player Model to Game
var Player = mongoose.model('Player', PlayerSchema)
module.exports = Player;
