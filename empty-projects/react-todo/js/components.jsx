/** @jsx React.DOM */

var app = app || {}; 
app.components = app.components || {};

(function(){
  'use strict';

  var TodoApp = app.components.TodoApp = React.createClass({
    render: function() {
      return (
        <div className="outer-container">
          <NewTodo />
          <TodoList />
          <ClearCompleted />
        </div>
      );
    }
  });

  var NewTodo = app.components.NewTodo = React.createClass({
    render: function() {
      return(
        <h1> Todo List </h1>
      );
    }
  });

  var TodoList = app.components.TodoList = React.createClass({
    render: function() {
      return(
        <h1> Clear Completed </h1>
      );
    }
  });

    var ClearCompleted = app.components.ClearCompleted = React.createClass({
    render: function() {
      return(
        <h1> New Todo </h1>
      );
    }
  });
})();