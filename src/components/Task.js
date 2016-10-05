import React, { Component } from 'react';
import config from '../config.js';

class Item extends Component {
    render() {
        const style = {
            backgroundColor: `${config.task_types.find((type) => type.name === this.props.type).color}`,
            boxShadow: '3px 3px 0 rgba(0,0,0,0.05)',
            borderRadius: '3px',
            fontSize: '16px',
            margin: '4px 0',
            minHeight: '140px',
            padding: '8px'
        }
        return (
            <div style={style}>
                This is a task
            </div>
        );
    }
}

export default Item;
