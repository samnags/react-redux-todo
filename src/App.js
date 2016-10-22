import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/add_todo';
import TodoList from './containers/todo_list';
import {Footer} from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
          <AddTodo />
          <TodoList />
          <Footer />
      </div>
    );
  }
}

export default App;
