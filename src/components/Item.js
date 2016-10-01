import React, { Component } from 'react';

class Item extends Component {
  render() {
    const style = {
      
    }
    return (
      <div style={style}>
        {this.props.title}
      </div>
    );
  }
}

export default Item;
