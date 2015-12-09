'use strict';
var Player = require('../models/Player');

// GET
function getAll(request, response) {
  Player.find(function(error, players) {
    console.log(players);
    if(error) response.json({message: 'Could not find any player'});

    response.json({players: players});
  });
}

// GET
function getPlayer(request, response) {
  var id = request.params.id;

  Player.findById({_id: id}, function(error, player) {
    if(error) response.json({message: 'Could not find player b/c:' + error});
    response.json({player: player});
  });
}

function updatePlayer(request, response) {
  var id = request.params.id;

  Player.findById({_id: id}, function(error, player) {
    if(error) response.json({message: 'Could not find player b/c:' + error});
    if(request.body.name) player.name = request.body.name;
    if(request.body.start) player.start = request.body.start;
    if(request.body.end) player.end = request.body.end;

    player.save(function(error) {
      if(error) response.json({messsage: 'Could not update player b/c:' + error});

      response.json({message: 'Player successfully updated', player: player});
    });
  });
}

module.exports = {
  getAll: getAll,
  getPlayer: getPlayer,
  updatePlayer: updatePlayer
}
