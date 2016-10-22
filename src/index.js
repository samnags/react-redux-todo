import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { todosReducer } from './reducers/todo_reducer'

let store = createStore(todosReducer);


ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
