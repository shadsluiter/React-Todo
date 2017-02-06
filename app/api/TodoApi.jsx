var $ = require('jQuery');

module.exports = {
  setTodos: function(todos) {
      if ($.isArray(todos)) {
        localStorage.setItem('todos', JSON.stringify(todos));
        console.log(JSON.stringify(todos));

        return todos;
      }
  },
  getTodos: function() {
    var stringTodos = localStorage.getItem('todos');
    var todos = [];
    try {
      todos = JSON.parse(stringTodos);
    } catch (e) {

      }

      if ($.isArray(todos)) {
        return todos;
      } else {
        return [];
      }
},
  filterTodos: function(todos, showCompleted, searchText) {
    var filterTodos = todos;

    // filter by show completed status. return only active items ( i.e. not completed)

    filterTodos = filterTodos.filter( function(todoItem) {
      return !todoItem.completed || showCompleted;
    });

    // filter by search text
    filterTodos = filterTodos.filter( function(todoItem) {
      return todoItem.text.toLowerCase().indexOf(searchText.toLowerCase()) >= 0 || searchText.length == 0;
    });

    // sort.  non-completed first

  filterTodos.sort(function(a,b) {
      if ((a.completed == false) && (b.completed == true)) {
        return -1;
      } else if ((a.completed == true) && (b.completed == false)){
        return 1;
      } else {
        return 0;
      }
    });


    return filterTodos;
  }
};
