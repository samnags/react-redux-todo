import React, { Component } from 'react';
import { Todo } from './todo'

const TodoList = (props, todoClick) => (
  <ul>
    {props.todos.map((todo) =>
      <Todo
          className='row'
          todo={todo}
          key={todo.id}
          onClick={() => props.toggleTodo(todo.id)} />
        )}
  </ul>
)

export default TodoList
