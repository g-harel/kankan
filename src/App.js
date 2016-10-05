import React, { Component } from 'react';
import Step from './components/Step';
import config from './config';
import db from './db.js';

let requirements = `
  steps
    step limit (wip limit)
    requirements per step
  tasks
    task types
  swim lanes
`

let qol = `
  full state history
  cumulative flow diagaram
`

// unused var error workaround
requirements = qol;
qol = requirements;

class App extends Component {
    render() {
        const style = {
            fontFamily: 'Lato, sans-serif',
            height: '100%'
        }
        const header_style = {
            boxShadow: '3px 3px rgba(0,0,0,0.05)',
            textShadow: '3px 3px rgba(0,0,0,0.03)',
            backgroundColor: '#fff',
            padding: '8px 80px',
            fontWeight: '900',
            borderTop: '0px',
            fontSize: '20px',
            height: '24px'
        }
        const table_style = {
            borderCollapse: 'collapse',
            margin: '16px auto 0',
            borderSpacing: '0px',
            minWidth: '80%',
        }
        const table_header_style = {
            height: '32px',
            fontSize: '18px',
            textAlign: 'left',
            padding: '0 20px',
            /*textTransform: 'uppercase',*/
            fontWeight: '900',
            textShadow: '3px 3px rgba(0,0,0,0.03)'
        }
        const table_rowhead_style = {
            padding: '0 16px 0 6px',
            verticalAlign: 'top',
            color: '#fff',
            fontWeight: '900'
        }
        const row_style = {
            borderTop: '3px solid #ff6e00'
        }
        const lane_label_style = {
            boxShadow: '3px 3px rgba(0,0,0,0.05)',
            padding: '4px 6px 6px',
            borderRadius: '8px 0 8px 8px',
            backgroundColor: '#ff6e00',
            position: 'relative',
            left: '-12px',
            top: '-3px'
        }
        return (
            <div style={style}>
                <div style={header_style}>
                    kankan
                </div>
                <table style={table_style}>
                    <tbody>
                        <tr>
                            <th></th>
                            {config.steps.map((step, i) => (
                                <th style={table_header_style} key={i}>
                                    {step.name}
                                </th>
                            )) }
                        </tr>
                        {(config.lanes).map((lane, i) => (
                            <tr key={i} style={row_style}>
                                <td style={table_rowhead_style}>
                                    <div style={lane_label_style}>
                                        {lane}
                                    </div>
                                </td>
                                {config.steps.map((step, i) =>
                                    <Step tasks={db.tasks.filter(val => (val.step === step.name && val.lane === lane)) } key={i}/>
                                ) }
                            </tr>
                        )) }
                    </tbody>
                </table>
            </div>
        );
    }
}

export default App;
