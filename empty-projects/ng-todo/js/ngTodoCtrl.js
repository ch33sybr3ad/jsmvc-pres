ngTodo.controller('ngTodoCtrl', function NgTodoCtrl($scope) {
  $scope.todo = [
    { val: "A new cool thing", completed: false }
    { val: "A newwe cool thing", completed: true }
    { val: "A new cooler thing", completed: false }
    { val: "A newer cooler thing", completed: false }
    { val: "A newest cool thing", completed: false }
    { val: "A new coolest thing", completed: true }
  ];

  
});