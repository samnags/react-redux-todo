import React, { Component } from 'react';
import FilterLink  from '../containers/filter_link'
// import VisibilityFilters from '../actions/index'



export const Footer = () => {
  return (
    <div>
        <FilterLink className="col-md-4" todofilter='SHOW_ALL'>
          All
        </FilterLink>
        <FilterLink className="col-md-4" todofilter='SHOW_COMPLETED'>
          Completed
        </FilterLink>
        <FilterLink className="col-md-4" todofilter='SHOW_ACTIVE'>
          Active
        </FilterLink>
    </div>
  )
}
