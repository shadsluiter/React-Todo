var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');


var TodoList = require('TodoList');
var Todo = require('Todo');
describe('TodoList', () => {
  it('should exist', () => {
    expect(TodoList).toExist();
  });

  it('should render one Todo component for each todo item', () => {
    var todos = [
      {
        id: 1,
        text: "Do something"
      },
      {
        id: 2,
        text: "Do something else"
      }];
      var toDoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
      var todosComponents = TestUtils.scryRenderedComponentsWithType(toDoList,Todo);

      expect(todosComponents.length).toBe(todos.length);

  });

  it('should show a message if no todos are in the list yet', () => {
    var todos = [];
      var toDoList = TestUtils.renderIntoDocument(<TodoList todos={todos}/>);
     var $el = $(ReactDOM.findDOMNode(toDoList));

     expect($el.find('.container__message').length).toBe(1);

  });
});
