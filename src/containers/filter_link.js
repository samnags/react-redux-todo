import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { setVisibilityFilter } from '../actions';

class FilterLink extends Component {
  constructor(props) {
    super();

  }

  setFilter(filter) {
    console.log(filter)
    this.props.setVisibilityFilter(filter)
  }

  render() {
    return (
      <button
        className={this.props.active ? 'btn btn-default active' : 'btn btn-default' }
        onClick={() => this.setFilter(this.props.todofilter)}
        >
        {this.props.children}
      </button>
    )
  }
}

function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.todofilter === state.visibilityFilter ? true : false
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setVisibilityFilter}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterLink);
