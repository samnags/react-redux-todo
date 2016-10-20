import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super();

    this.state = { term: '' }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      term: ev.target.value
    })
  }

  handleSubmit(ev) {
    ev.preventDefault()
    debugger
  }

  render() {
    return(
      <div>
        <input placeholder="Add your to do" onChange={this.handleChange} value={this.state.term} ></input>
        <input type="submit" onClick={this.handleSubmit}></input>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo })
}

export default connect(mapDispatchToProps)(AddTodo)
