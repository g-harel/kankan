import React, { Component } from 'react';
import config from '../config.js';

class Item extends Component {
    render() {
        return (
            <div style={{
                backgroundColor: config.task_types.find((type) => type.name === this.props.type).color
            }} className='task'>
                This is a task
            </div>
        );
    }
}

export default Item;
