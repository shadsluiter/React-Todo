var redux = require('redux');
var {searchTextReducer, showCompletedReducer, todosReducer} = require('reducers');
require('reducers');

export var configure = () => {
  var reducer = redux.combineReducers({
    searchText: searchTextReducer,
    showCompleted: showCompletedReducer,
    todos: todosReducer
  });

  var store = redux.createStore(reducer, redux.compose(
    window.devTooslExtension ? window.devTooslExtension() : f => f
  ));

  return store;
};
