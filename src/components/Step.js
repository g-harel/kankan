import React, { Component } from 'react';
import Tile from './task/Tile';

class Step extends Component {
    render() {
        return (
            <td className='step' style={{width: this.props.wide}}>
                {this.props.tasks.map((task, i) => <Tile {...task} key={i} />) }
            </td>
        );
    }
}

export default Step;
