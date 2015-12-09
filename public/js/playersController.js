'use strict';
angular.module('one-mean-app', [])
  .controller('PlayersController', PlayersController);

PlayersController.$inject = ['$http'];

function PlayersController($http){
  let self = this;
  /* our crudy functions */
  self.all = [];
  self.getPlayers = getPlayers;

  getPlayers();
  function getPlayers(){
    $http
      .get('http://localhost:3000/players')
      .then(function(response){
        self.all = response.data.players;
      });
  }
}
