import React, { Component } from 'react';
import Board from './components/Board'

let boards = ['one','two','three', 'four'];
let items = [
  {
    status: 'one',
    title: 'Test'
  },
  {
    status: 'one',
    title: 'test'
  },
  {
    status: 'two',
    title: 'test'
  },
  {
    status: 'three',
    title: 'Test'
  },
  {
    status: 'two',
    title: 'test'
  },
  {
    status: 'three',
    title: 'Test'
  },
  {
    status: 'one',
    title: 'test'
  },
  {
    status: 'four',
    title: 'Test'
  },
  {
    status: 'one',
    title: 'test'
  },
]

class App extends Component {
  render() {
    const style = {
      fontFamily: 'Lato, sans-serif'
    }
    const header_style = {
      backgroundColor: '#eeeeee',
      fontSize: '2rem',
      fontWeight: '900',
      padding: '1rem 2.5rem'
    }
    const board_container_style = {
      minWidth: '70em',
      padding: '2rem'
    }
    return (
      <div style={style}>
        <div style={header_style}>kankan</div>
        <div style={board_container_style}>
          {boards.map(function(board, i) {
            return <Board title={board} items={items.filter(val => val.status === board)} key={i}/>;
          })}
        </div>
      </div>
    );
  }
}

export default App;
