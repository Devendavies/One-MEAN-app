'use strict'
angular.module('one-mean-app'), [])
  .controller('GameController', GameController)

GameController.$inject = ['$http'];

function GameController($http){
  let self = this;
  /* our crudy functions */
  self.all = [];
  self.getPlayer = getPlayers;

  getPlayers();
  function getPlayers(){
    $http
      .get('http://localhost:3000/players') // see routes in example
      .then(function(response){
        self.all = response.data.players;
      });
  }
} // Can be triggered on button (or at end of game for each player)
