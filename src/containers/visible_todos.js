import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import TodoList from '../components/todo_list'
import { toggleTodo } from '../actions'

const getTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(todo => todo.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(todo => !todo.completed)
  }
}


function mapStateToProps(state) {
  return {
    todos: getTodos(state.todos, state.visibilityFilter)
  }
}

function mapDispatchToProps(dispatch) {  
  return bindActionCreators({ toggleTodo }, dispatch)
}

const VisibleTodos = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodos
