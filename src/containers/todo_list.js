import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo } from '../components/todo'
import { bindActionCreators } from 'redux';
import { toggleTodo } from '../actions'


class TodoList extends Component {
  changeStatus(todo) {
    this.props.toggleTodo(todo)
  }

  render() {
    return (
      <div>
        <ul>
        {this.props.todos.map((todo) =>
          <Todo todo={todo}
            key={todo.id}
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
