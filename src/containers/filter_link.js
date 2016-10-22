import React, { Component } from 'react';
import { connect } from 'react-redux';

class FilterLink extends Component {

  render() {
    return (
      <div>
        <a href='#'></a>
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { filter: state };
}

export default connect(mapStateToProps)(FilterLink);
