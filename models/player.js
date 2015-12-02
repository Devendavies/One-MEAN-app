'use strict'

const mongoose = require('mongoose');

var userPlayerSchema = new mongoose.Schema({
  name:        String,
  image_url:   String,
  team:        String,
  turn_order:  Number, // 1st - 4th player
  score:       Number,
  initialRoll: Boolean,
  win_status:  Boolean
});

module.exports = mongoose.model('Player', userPlayerSchema);

module.exports.scoreUpdate = function(roll, lastRoll) {
  Survey.findById(id, function(err, survey) {
    if(err) throw err;

    switch (roll) {
      case 1:
      case 2:
      case 3:
        this.score -= 1;
        console.log(this.name + ' moves 1 yard!\n');
        console.log((this.score + 1) + ' >> ' + this.score);
        turn += 1;
        break;
      case 4:
        this.score -= 2;
        console.log(this.name + ' loses 2 points\n');
        console.log((this.score + 2) + ' >> ' + this.score);
        if(this.initialRoll == true){
          turn += 3;
        }
        break;
      case 5:
        this.score -= 2;
        console.log(this.name + ' loses 2 points\n');
        console.log((this.score + 2) + ' >> ' + this.score);
        if(this.initialRoll == true){
          turn += 2;
        }
        break;
      case 6:
        if(this.initialRoll == true){ // Check if first roll this turn                   // Gives same player another roll
          this.score -= 1;
          console.log(this.name + ' loses 1 points and gets to roll again!\n');
          console.log((this.score + 1) + ' >> ' + this.score);
          this.initialRoll = false;
        } else {
          this.score -= 2;
          console.log(this.name + ' loses 2 points!\n');
          console.log((this.score + 2) + ' >> ' + this.score);
          this.initialRoll = true;
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
