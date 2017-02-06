var React = require('react');
var Todo = require('Todo');

var TodoList = React.createClass( {
  render: function() {
    var {todos} = this.props;
    var renderTodos = () => {
      if (todos.length == 0) {
        return (<p className="container__message">Nothing entered yet</p>);
      }
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
