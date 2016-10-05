import React, { Component } from 'react';
import Task from './Task'

class Step extends Component {
    render() {
        const style = {
            backgroundColor: '#fff',
            verticalAlign: 'top',
            minHeight: '480px',
            minWidth: '200px',
            padding: '16px 8px 16px 11px',
        }
        return (
            <td style={style}>
                {this.props.tasks.map((task, i) => <Task {...task} key={i} />) }
            </td>
        );
    }
}

export default Step;
