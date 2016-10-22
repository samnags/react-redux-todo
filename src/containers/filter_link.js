import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterLink extends Component {

  render() {
    debugger
    return (
      <div>Hello</div>
    )
  }
}


function mapStateToProps(state) {
  debugger
  return { filter: state };
}

export default connect(mapStateToProps)(FilterLink);
