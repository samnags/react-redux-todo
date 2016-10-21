import React, { Component } from 'react';
import { connect } from 'react-redux';

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
        {this.props.todos.map((todo) =>
          <li key={todo.id}>
            {todo.text}
          </li>

        )}
      </div>

    )
  }
}

function mapStateToProps(state) {
  return {  todos: state };
}

export default connect(mapStateToProps)(TodoList);
