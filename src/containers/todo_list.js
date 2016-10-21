import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Todo } from '../components/todo'

class TodoList extends Component {

  // componentWillReceiveProps(){
  //   this.setState({})
  // }
  //
  // renderTodos() {
  //   if (!this.props.todo){
  //     return <div> LOADING TODOS</div>
  //   } else {
  //   return this.props.todos.map((todo)=>{
  //     return <div></div>
  //   })
  // }
  // }

  render() {    
    return (
      <div>
        <ul>
        {this.props.todos.map((todo) =>
          <Todo key={todo.id} text={todo.text} />
        )}
        </ul>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {  todos: state };
}

export default connect(mapStateToProps)(TodoList);
