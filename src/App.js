import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/add_todo';
import TodoList from './components/todo_list';
import { Footer } from './components/footer';
import VisibleTodos from './containers/visible_todos'


class App extends Component {
  render() {
    return (
      <div>
          <AddTodo />
          <VisibleTodos />
          <Footer />
      </div>
    );
  }
}

export default App;
