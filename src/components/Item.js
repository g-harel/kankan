import React, { Component } from 'react';

class Item extends Component {
  render() {
    const style = {
      backgroundColor: '#dddddd',
      borderRadius: '0.1rem',
      margin: '0.5rem 0',
    }
    return (
      <div style={style}>
        {this.props.title}
      </div>
    );
  }
}

export default Item;
