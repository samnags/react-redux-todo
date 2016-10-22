import React, { Component } from 'react';
import FilterLink  from '../containers/filter_link'

export const Footer = () => {
  return (
    <div className='row'>
      <div className='col-md-3'>
        <FilterLink />
        <FilterLink />
        <FilterLink />
      </div>
    </div>
  )
}
