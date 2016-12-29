
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
});
