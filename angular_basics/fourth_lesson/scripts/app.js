angular.module('todoListApp', [])

.controller('mainCtrl', function($scope, dataService){

  $scope.addTodo = function(){
    var todo = {name: 'This is a new todo.'}
    $scope.todos.push(todo);
  };

  dataService.getTodos(function(response){
    $scope.todos = response.data;
  });

  $scope.deleteTodo = function(todo, $index){
    dataService.deleteTodo(todo);
    console.log($scope.todos.splice($index, 1));
  }

  // This function doesn't really do anything.
  // Since the ng-blur directive was already asigned the 'saveTodo' is taking advantage of that.
  $scope.saveTodo = function(todo){
    dataService.saveTodo(todo);
  }

})
.service('dataService', function($http){

  this.getTodos = function(callback){
    $http.get('mock/todos.json').then(callback);
  };

  this.deleteTodo = function(todo){
    console.log('The ' + todo.name + ' has been deleted.')
  }

  this.saveTodo = function(todo){
    console.log('The ' + todo.name + ' todo has been saved');
  };

});
