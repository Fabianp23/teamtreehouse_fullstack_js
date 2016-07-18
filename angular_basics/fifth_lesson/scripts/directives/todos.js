angular.module('todoListApp')
.directive('todos', function(){
    return {
      templateUrl: 'templates/todos.html',
      controller: 'mainCtrl'
      // replace: true // This isn't working but it is supposed to removed the '<todos></todos> tag, but still include the html.'
    }
})
