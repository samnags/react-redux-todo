import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addTodo } from '../actions'

class AddTodo extends Component {
  constructor(props) {
    super();

    this.state = { term: '' }

    this.handleTodoSubmit = this.handleTodoSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(ev) {
    this.setState({
      term: ev.target.value
    })
  }

  handleTodoSubmit() {
    this.props.addTodo(this.state.term)
    this.setState({
      term: ''
    })
  }

  render() {
    return(
      <div className='row'>
        <div className='col-md-6'>
          <input placeholder="Add your to do" onChange={this.handleChange} value={this.state.term} ></input>
          <input type="submit" onClick={this.handleTodoSubmit}></input>
        </div>
      </div>
    )
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ addTodo }, dispatch)
}

export default connect(null, mapDispatchToProps)(AddTodo);
