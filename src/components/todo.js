import React from 'react'

export const Todo = (props) => {
  return (
    <li
      onClick={props.onClick}
      style={{textDecoration: props.todo.completed ? 'line-through' : 'none'}}
      >
        {props.todo.text}
    </li>
  )
}


// onClick={this.handleClick(idx)}
