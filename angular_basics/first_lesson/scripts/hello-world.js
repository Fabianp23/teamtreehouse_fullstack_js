angular.module('todoListApp')
  .directive('helloWorld', function(){
    return {
      template: 'This is the hello word directive!',
      restrict: 'E'
    };
  });
