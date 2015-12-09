angular.module('one-mean-app')
  .directive('player', playerView)
  console.log('in playerView.js')

function playerView() {
  console.log('in playerView')
  var directive = {};

  directive.restrict = 'E';
  directive.replace = true;
  directive.templateUrl = '_playerView.html';
  directive.scope = {
    image: '@',
    name:  '@',
    score: '@'
  }

  return directive;
}
