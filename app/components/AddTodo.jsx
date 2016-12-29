var React = require('react');

var AddTodo = React.createClass( {
  onFormSubmit: function(e) {
      e.preventDefault();

      var newTask = this.refs.task.value;
      if (newTask.length > 0 ) {
         this.refs.task.value = "";
         this.props.onAddNewTask(newTask);
      } else {
        this.refs.task.focus();
      }
    },

  render: function() {
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
                <div>
                <input type="text" placeholder = "Enter a new task" ref="task"></input>
              </div>
              <div>
                <button className = "button expanded hollow">Submit</button>
              </div>
         </form>
      </div>
    )
  }
});

module.exports = AddTodo;
