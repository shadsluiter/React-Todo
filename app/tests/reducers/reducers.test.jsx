var expect = require('expect');
var reducers = require('reducers');
var df = require('deep-freeze-strict');

describe('Reducers Tests', () => {
  describe('searchTextReducer', () => {
    it('should set searchText', () => {
      var action = {
          type: 'SET_SEARCH_TEXT',
          searchText: 'dog'
      };
      var res = reducers.searchTextReducer('',action);

      expect(res).toEqual(action.searchText);
    });
  });


  describe('showCompletedReducer', () => {
    it('should change the state to opposite of current', () => {
      var action = {
          type: 'TOGGLE_SHOW_COMPLETED'
      };
      var res = reducers.showCompletedReducer(df(false),df(action));

      expect(res).toEqual(true);
    });
  });

  describe('todosReducer', () => {
    it('should add new todo', () => {
      var action = {
        type: 'ADD_TODO',
        text: 'Walk the dog'
      };
      var res = reducers.todosReducer(df([]), df(action));

      expect(res.length).toEqual(1);
      expect(res[0].text).toEqual(action.text);
    });


    it('should toggle a todo', () => {
      var action = {
        type:'TOGGLE_TODO',
        id:11
      };
      var state = [ {
          id: 11,
          text: 'test features',
          completed: true,
          createdAt: 200,
          completedAt: 210
      }];

      var res = reducers.todosReducer(df(state),df(action));
      expect(res[0].completed).toEqual(false);
      expect(res[0].completedAt).toEqual(undefined);
    });



  });
});
