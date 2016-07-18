'use strict';

angular.module('todoListApp')
.controller('mainCtrl', function($scope, dataService){

  $scope.addTodo = function(){
    var todo = {name: 'This is a new todo.'}
    $scope.todos.unshift(todo);
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
  $scope.saveTodos = function(){
    var filteredTodos = $scope.todos.filter(function(todo){
      if (todo.edited){
        return todo;
      };
    })
    dataService.saveTodos(filteredTodos);
  };

})
