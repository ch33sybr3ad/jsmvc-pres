ngTodo.controller('NgTodoCtrl', function NgTodoCtrl($scope) {
  $scope.todos = [
    { val: "A new cool thing", completed: false },
    { val: "A newer cool thing", completed: true },
    { val: "A new cooler thing", completed: false },
    { val: "A newer cooler thing", completed: false },
    { val: "A newest cool thing", completed: false },
    { val: "A new coolest thing", completed: true },
  ];

  $scope.addNewTask = function() {
    $scope.todos.unshift({ completed: false, val: $scope.newTask });
    $scope.newTask = '';
  };

  $scope.clearCompleted = function() {
    $scope.todos = $scope.todos.filter(function(el, index) {
      return !el.completed;
    });
  };

  $scope.removeTodo = function(index) {
    $scope.todos.splice(index, 1);
  };

});
