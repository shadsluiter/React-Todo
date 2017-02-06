var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');

describe('TodoApp', () => {
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('should add todo to the todos state on handleAddTodo', () => {
    var todoText = "something to do";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({
      todos: []
    });
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);

    // expect createdAt to be a number
    expect(todoApp.state.todos[0].createdAt).toBeA('number');
  });

  it('should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: false,
      createdAt: 200,
      completedAt: undefined
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState( {todos: [todoData]});
    // check that the first iem is false completed
    expect(todoApp.state.todos[0].completed).toBe(false);
    // call handleToggle with id 11
    todoApp.handleToggle(11);
    // varify that the value completed changed
    expect(todoApp.state.todos[0].completed).toBe(true);
    expect(todoApp.state.todos[0].completedAt).toBeA('number');


  });

  // when completed is toggled from true to false, the completedAt property gets removed (undefined)
  it('should remove the completeAt property when toggled from true (completed) to false (not completed)', function() {
    var todoData = {
      id: 11,
      text: 'test features',
      completed: true,
      createdAt: 200,
      completedAt: 30000
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);
    todoApp.setState( {todos: [todoData]});
    expect(todoApp.state.todos[0].completed).toBe(true);
    todoApp.handleToggle(11);
    expect(todoApp.state.todos[0].completed).toBe(false);
    expect(todoApp.state.todos[0].completedAt).toNotBeA('number');

  });
});
