import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo } from '../components/todo'
import { bindActionCreators } from 'redux';


class TodoList extends Component {

  changeStatus() {
    console.log("i was clicked")
  }


  render() {
    return (
      <div>
        <ul>
        {this.props.todos.map((todo) =>
          <Todo
            key={todo.id}
            text={todo.text}
            onClick={this.changeStatus.bind(this)} />
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

}

export default connect(mapStateToProps)(TodoList);
