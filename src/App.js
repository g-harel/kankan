import React, { Component } from 'react';
import Step from './components/Step';
import config from './config';
import { Link } from 'react-router';
import { get, set } from './State.js';

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
                {this.props.children}
                <div id='header'><Link to='/'>kankan</Link></div>
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
                                        <Step tasks={get.intersect([['step', step.name], ['lane', lane]])} width={100/steps.length+'%'} key={i}/>
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
