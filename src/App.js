import React, { Component } from 'react';
import './App.css';
import AddTodo from './containers/add_todo'

class App extends Component {
  render() {
    return (
      <div>
          <AddTodo />
      </div>
    );
  }
}

export default App;
