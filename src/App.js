import React, { Component } from 'react';
import Step from './components/Step';
import config from './config';
import db from './db.js';

const requirements = `
  steps
    step limit (wip limit)
    requirements per step
  tasks
    task types
  swim lanes
`

const qol = `
  full state history
  cumulative flow diagaram
`

class App extends Component {
  render() {
    const style = {
      fontFamily: 'Lato, sans-serif',
      height: '100%'
    }
    const header_style = {
      borderBottom: '1px solid #ccc ',
      backgroundColor: '#fff',
      padding: '0.5rem 5rem',
      fontWeight: '900',
      borderTop: '0px',
      fontSize: '1.5rem',
      height: '2rem'
    }
    const table_style = {
      borderCollapse: 'collapse',
      margin: '2rem auto 0',
      borderSpacing: '0px',
      tableLayout: 'fixed',
      maxWidth: '80rem',
      minWidth: '50rem',
      width: '80%',
      minHeight: 'calc(100% - 8rem)'
    }
    const table_header_style = {
      height: '2rem',
      fontSize: '1.2rem'
    }
    return (
      <div style={style}>
        <div style={header_style}>
          kankan
        </div>
        <table style={table_style}>
          <tbody>
            <tr>
              {config.steps.map((step, i) => (
              <th style={table_header_style} key={i}>
                {step.name}
              </th>
              ))}
            </tr>
            {(config.lanes).map((lane, i) => (
            <tr key={i}>
              {config.steps.map((step, i) => <Step tasks={db.tasks.filter(val => (val.step === step.name && val.lane === lane))} key={i}/>)}
            </tr>
            ))}
            </tbody>
        </table>
      </div>
    );
  }
}

export default App;
