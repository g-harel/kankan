import React, { Component } from 'react';
import Task from './Task'

class Step extends Component {
    render() {
        return (
            <td className='step'>
                {this.props.tasks.map((task, i) => <Task {...task} key={i} />) }
            </td>
        );
    }
}

export default Step;
