import React, { Component } from 'react';
import Step from './components/Step';
import config from './config';
import db from './db.js';

let requirements = `
  steps
    step limit (wip limit)
    requirements per step
        user restrictions
  tasks
    task types
    numbered
    assignees
    watchers
    comments
  swim lanes
    lane collapse
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
        return (
            <div id='container'>
                <div id='header'>kankan</div>
                <div id='scrollbox'>
                    <table id='board'>
                        <tbody>
                            <tr>
                                <th></th>
                                {config.steps.map((step, i) => (
                                    <th className='board_headers' key={i}>
                                        {step.name}
                                    </th>
                                ))}
                            </tr>
                            {(config.lanes).map((lane, i) => (
                                <tr className='lane' key={i}>
                                    <td className='label_container'>
                                        <div className='label'>
                                            {lane}
                                        </div>
                                    </td>
                                    {config.steps.map((step, i, steps) =>
                                        <Step tasks={db.tasks.filter(val => (val.step === step.name && val.lane === lane))} wide={100/steps.length+'%'} key={i}/>
                                    )}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default App;
