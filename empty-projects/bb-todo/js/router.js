window.TodoApp = new (Backbone.Router.extend({
  routes: { '' : 'index' },
  initialize: function() {
    this.todoItems = new TodoItems();
    this.todosView = new TodosView({collection: this.todoItems});
    this.todosView.render();

    $('.btn-clear').click(function(e) {
      window.TodoApp.todosView.filterCompleted();
    });

    $('.btn-success').click(function(e) {
      window.TodoApp.todoItems.add({val:$("#newTodo").val(), completed: false});
      $("#newTodo").val('');
    });
  },
  index: function() {
    var fixtures = [
    { val: "A new cool thing", completed: false },
    { val: "A newer cool thing", completed: true },
    { val: "A new cooler thing", completed: false },
    { val: "A newer cooler thing", completed: false },
    { val: "A newest cool thing", completed: false },
    { val: "A new coolest thing", completed: true }
  ];

    $('#app').html(this.todosView.el)
    this.todoItems.reset(fixtures);
  },
  start: function() {
    Backbone.history.start();
  }
}));