import React, { Component } from 'react';
import Task from './Task'

class Step extends Component {
  render() {
    const style = {
      backgroundColor: '#fff',
      border: 'solid #ccc',
      borderWidth: '0px 1px',
      verticalAlign: 'top',
      minHeight: '30rem',
      padding: '1rem',
    }
    return (
      <td style={style}>
        {this.props.tasks.map((task, i) => <Task {...task} key={i} />)}
      </td>
    );
  }
}

export default Step;
