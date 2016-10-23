import React, { Component } from 'react';
import FilterLink  from '../containers/filter_link'
// import VisibilityFilters from '../actions/index'



export const Footer = () => {
  return (
    <div className='row'>
      <div className='col-md-12'>
        <FilterLink todofilter='SHOW_ALL'>
          All
        </FilterLink>
        <FilterLink todofilter='SHOW_COMPLETED'>
          Completed
        </FilterLink>
        <FilterLink todofilter='SHOW_ACTIVE'>
          Active
        </FilterLink>
      </div>
    </div>
  )
}
