import React, { Component } from 'react';
import Board from './components/Board'

let boards = ['pending','started','almost', 'done'];
let items = [
  {
    status: 'pending',
    title: 'test'
  },
  {
    status: 'pending',
    title: 'test'
  },
  {
    status: 'started',
    title: 'test'
  },
  {
    status: 'almost',
    title: 'test'
  },
  {
    status: 'started',
    title: 'test'
  },
  {
    status: 'almost',
    title: 'test'
  },
  {
    status: 'pending',
    title: 'test'
  },
  {
    status: 'done',
    title: 'test'
  },
  {
    status: 'pending',
    title: 'test'
  },
]

class App extends Component {
  render() {
    const style = {
      fontFamily: 'Lato, sans-serif',
      padding: '0.5rem',
      minWidth: '70em'
    }
    return (
      <div className='board_container' style={style}>
        {boards.map(function(board, i) {
          return <Board title={board} items={items.filter(val => val.status === board)} key={i}/>;
        })}
      </div>
    );
  }
}

export default App;
