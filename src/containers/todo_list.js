import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo } from '../components/todo'
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions'


class TodoList extends Component {
  changeStatus(todo) {
    this.toggleTodo(todo)
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.todos.map((todo) =>
          <Todo
            key={todo.id}
            text={todo.text}
            onClick={() => this.changeStatus(todo.id)} />
        )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {  todos: state };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ toggleTodo }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
