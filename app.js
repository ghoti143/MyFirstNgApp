var app = angular.module('todoApp', []);

app.filter("archived", function () {
    return function (items, isArchived) {
        var resultArr = [];
        angular.forEach(items, function (item) {
            if (item.ach == isArchived) {
                resultArr.push(item);
            }
        });
        return resultArr;
    }
});

app.controller('TodoCtrl', function($scope) {
  $scope.todos = [
    {text:'learn angular', done:true, ach: false},
    {text:'build an angular app', done:false, ach: false}];

  $scope.todoText = '';

  $scope.addTodo = function() {
    $scope.todos.push({text:$scope.todoText, done:false, ach: false});
    $scope.todoText = '';
  };

  $scope.remaining = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      if (!todo.done) { count++ }
    });
    return count;
  };

  $scope.activeTodos = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      if (!todo.ach) { count++ }
    });
    return count;
  };

  $scope.archive = function() {
    angular.forEach($scope.todos, function(todo) {
      todo.ach = todo.done;
    });
  };
  
  $scope.archivedTodos = function() {
    var count = 0;
    angular.forEach($scope.todos, function(todo) {
      if (todo.ach) { count++ }
    });
    return count;
  };

});
