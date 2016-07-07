angular.module('todoListApp', [])

.controller('mainCtrl', function($scope){
  $scope.helloWorld = function(){
    console.log('Hello there. This is the Hello World controller function, in the mainCtrl.');
  };
})

.controller('coolCtrl', function($scope){
  $scope.whoAmI = function(){
    console.log('this is the coolCtrl function.');
  };
  $scope.helloWorld = function(){
    console.log('this is not the main controller.');
  };
})

.controller('imASiblingCrtl', function($scope){
  $scope.foobar = 1234;
});
