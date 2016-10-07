import React, { Component } from 'react';
import config from '../config.js';

class Item extends Component {
    render() {
        return (
            <div className='task'>
                <span className='task_title' style={{
                    backgroundColor: config.task_types.find((type) => type.name === this.props.type).color
                }}>
                    {this.props.title}
                </span><br/><br/>
                {this.props.desc}
            </div>
        );
    }
}

export default Item;
