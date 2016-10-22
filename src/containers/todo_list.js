import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Todo }  from '../components/todo'
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions'


class TodoList extends Component {
  changeStatus(todo) {
    this.props.toggleTodo(todo)
  }

  setFilter() {
    console.log("I was clicked")
  }

  render() {
    return (
      <div className='row'>
        <ul>
        {this.props.todos.map((todo) =>
          <Todo className='row' todo={todo}
            key={todo.id}
            onClick={() => this.changeStatus(todo.id)} />
        )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {  todos: state.todos };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
