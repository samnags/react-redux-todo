import React, { Component } from 'react';

export const Todo = (props) => {
  return (
    <li
      key={props.id}
      onClick={props.onClick}
      >
        {props.text}
    </li>
  )
}
