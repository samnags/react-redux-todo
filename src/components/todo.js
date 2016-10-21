import React, { Component } from 'react';

export const Todo = (props) => {
  return (
    <li key={props.key}>
      {props.text}
    </li>
  )
}
