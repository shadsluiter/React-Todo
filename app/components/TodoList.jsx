var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass( {
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      return todos.map((todoItem) => {
        return (
          <Todo key={todoItem.id} {...todoItem} onToggle={this.props.onToggle}/>
        )
      });
    };

    return(
      <div>
        {renderTodos()}
      </div>
    )
  }
});

module.exports = TodoList;
