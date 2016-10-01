import React, { Component } from 'react';
import Item from './Item'

class Board extends Component {
  render() {
    const style = {
      border: '0.5em solid white',
      backgroundColor: '#eeeeee',
      boxSizing: 'border-box',
      display: 'inline-block',
      borderRadius: '0.8em',
      textAlign: 'center',
      minHeight: '30rem',
      padding: '0.5em',
      width: '25%'
    }
    const title_style = {
      fontSize: '1.4rem'
    }
    return (
      <div style={style}>
        <span style={title_style}>{this.props.title}</span>
        {this.props.items.map((item, i) => <Item {...item} key={i} />)}
      </div>
    );
  }
}

export default Board;
