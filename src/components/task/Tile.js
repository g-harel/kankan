import React, { Component } from 'react';
import { Link } from 'react-router';
import config from '../../config.js';

class Item extends Component {
    render() {
        return (
            <Link to={'task/' + this.props.id}>
                <div className='task'>
                    <span className='task_title' style={{
                        backgroundColor: config.task_types.find((type) => type.name === this.props.type).color
                    }}>
                        {this.props.title}
                    </span><br/><br/>
                    {this.props.desc}
                </div>
            </Link>
        );
    }
}

export default Item;
