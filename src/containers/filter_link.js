import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVisibilityFilter } from '../actions';

class FilterLink extends Component {
  constructor(props) {
    super();

    // this.setFilter = this.setFilter.bind(this)
  }

  setFilter(filter) {
    console.log(filter)
    this.props.setVisibilityFilter(filter)
  }

  render() {
    debugger
    return (
      <div className='row'>
      <button
        className='btn btn-default'
        onClick={() => this.setFilter(this.props.todoFilter)} >
        {this.props.name}
      </button>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { todoFilter: state.visibilityFilter };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setVisibilityFilter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
