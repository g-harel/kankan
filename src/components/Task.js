import React, { Component } from 'react';
import config from '../config.js';

class Item extends Component {
  render() {
    const style = {
      backgroundColor: '#fff',
      border: '1px solid #ccc',
      borderLeft: `2px solid ${config.task_types.find((type) => type.name === this.props.type).color}`,
      borderRadius: '0 0.2rem 0.2rem 0',
      margin: '0.5rem 0',
      minHeight: '3rem',
      padding: '0.5rem'
    }
    return (
      <div style={style}>
        This is a task
      </div>
    );
  }
}

export default Item;
