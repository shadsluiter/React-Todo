
var expect = require('expect');
var TestUtils = require('react-addons-test-utils');
var TodoAPI = require('TodoApi');

describe('TodoAPI', () => {
  beforeEach(() => {
    localStorage.removeItem('todos');
  });

  it('should exist', () => {
    expect(TodoAPI).toExist();
  });

  describe('setTodos', () => {
    it('should set valid todos array', () => {
      var todos = [ {
        id: 111,
        text: "do something",
        completed: false
      }];
      TodoAPI.setTodos(todos);

      var actualTodos = JSON.parse(localStorage.getItem('todos'));
      expect(actualTodos).toEqual(todos);
    });
    it('should not set an invalid array', () => {
      var badTodos = {a: 'b'};
      TodoAPI.setTodos(badTodos);
      expect(localStorage.getItem('todos')).toBe(null);
    });
  });
  describe('getTodos', () => {
    it('should return empty array for bad localStorage data', () => {
      var actualTodos = TodoAPI.getTodos();
      expect(actualTodos).toEqual([]);
    });

    it('should return an array for valid localStorage data', () => {
      var todos = [ {
        id: 111,
        text: "do something",
        completed: false
      },
      {
        id: 112,
        text: "do something else",
        completed: true
      }
    ];
    localStorage.setItem('todos', JSON.stringify(todos));
    var actualTodos = TodoAPI.getTodos();
    expect(actualTodos).toEqual(todos);
    });
  });

  describe('filterTodos', function() {
    var todos = [ {
      id: 1,
      text: 'something to do',
      completed: true
    },
    {
      id: 2,
      text: 'walk the dog',
      completed: false
    },
    {
      id: 3,
      text: 'feed the cat',
      completed: true
    }
  ];

  it('should return all items if showCompleted is true', function() {
    var filterTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filterTodos.length).toBe(3);
  });

  it('should return only unfinished items if showCompleted is false', function() {
    var filterTodos = TodoAPI.filterTodos(todos, false, '');
    expect(filterTodos.length).toBe(1);
  });

  it('should only return items that contain search text keyword and showCompleted is true', function() {
    var filterTodos = TodoAPI.filterTodos(todos, true, 'dog');
    expect(filterTodos.length).toBe(1);
  });


  it('should sort the items with completed items last in the list', function() {
    var filterTodos = TodoAPI.filterTodos(todos, false, '');
    expect(filterTodos[0].completed).toBe(false);
  });

  it('should return all todos with empty search text', function() {
    var filterTodos = TodoAPI.filterTodos(todos, true, '');
    expect(filterTodos.length).toBe(todos.length);
  });

  it('should return only todos that match search text', function() {
    var filterTodos = TodoAPI.filterTodos(todos, false, 'dog');
    expect(filterTodos.length).toBe(1);
  });
  });
});
