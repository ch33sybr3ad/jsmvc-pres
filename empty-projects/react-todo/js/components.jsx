/** @jsx React.DOM */

var app = app || {}; 
app.components = app.components || {};

(function(){
  'use strict';

  var TodoApp = app.components.TodoApp = React.createClass({
    getInitialState: function() {
      return {
        todos: []
      };
    },
    componentDidMount: function() {
      var data = app.retrieveData();
      this.setState({todos: data});
    },
    updateVal: function(val, index) {
      var state = this.state;
      state.todos[index].val = val;
      this.setState(state);
    },  
    toggleCompleted: function(index) {
      var state = this.state;
      state.todos[index].completed = !state.todos[index].completed;
      this.setState(state);
      console.log(this.todos);
      console.log('hello')
    }, 
    deleteTodo: function(val, index) {
      var state = this.state;
      state.todos.splice(index, 1);
      this.setState(state);
    },
    render: function() {
      return (
        <div className="outer-container">
          <NewTodo />
          <TodoList 
            todos={this.state.todos}
            updateVal={this.updateVal} 
            toggleCompleted={this.toggleCompleted}
            deleteTodo={this.deleteTodo}
          />
          <ClearCompleted />
        </div>
      );
    }
  });

  var NewTodo = app.components.NewTodo = React.createClass({
    render: function() {
      return(
        <h1> New Todo </h1>
      );
    }
  });

  var TodoList = app.components.TodoList = React.createClass({
    render: function() {
      return(
        <div className="todos">
          {this.props.todos.map(function(el, index) {
            return (
              <TodoItem 
                todo={el}
                index={index}
                updateVal={this.props.updateVal}
                toggleCompleted={this.props.toggleCompleted}
                deleteTodo={this.props.deleteTodo}
              />
            );
          }.bind(this))}
        </div>
      );
    }
  });

  var TodoItem = app.components.TodoItem = React.createClass({
    handleVal: function(e) {
      this.props.updateVal(e.target.value, this.props.index);
    },
    handleToggle: function(e) {
      this.props.toggleCompleted(this.props.index);
    },
    handleDelete: function(e) {
      this.props.deleteTodo(this.props.index);
    },
    render: function() {
      var inputClassName = "form-control";
      if (this.props.todo.completed) {
        inputClassName += " finished";
      }
      return (
        <div className="input-group input-group-lg">
          <span className="input-group-addon">
            <input onChange={this.handleToggle} checked={this.props.todo.completed} type="checkbox" />
          </span>
          <input onChange={this.handleVal} value={this.props.todo.val} className={inputClassName} type="text" />
          <span className="input-group-btn">
            <button onClick={this.handleDelete} className="btn btn-danger" type="button">
              <i className="glyphicon glyphicon-remove"></i>
            </button>
          </span>
        </div>
      );
    }
  });

  var ClearCompleted = app.components.ClearCompleted = React.createClass({
    render: function() {
      return(
        <h1> Clear Complete </h1>
      );
    }
  });
})();