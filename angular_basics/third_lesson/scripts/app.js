angular.module('todoListApp', [])

.controller('mainCtrl', function($scope) {

  $scope.todos = [
    {"name": "clean the house"},
    {"name": "wash the self"},
    {"name": "wash blackylin"},
    {"name": "wash silverin"},
    {"name": "wash kikolin"}
  ]

});
