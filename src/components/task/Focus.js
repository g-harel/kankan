import React, { Component } from 'react';
import { Link } from 'react-router';
import State from '../../State.js';
import config from '../../config.js';

class Edit extends Component {
    render() {
        let task = State.tasks.find((task) => task.id === Number(this.props.params.id));
        return (
            <div id='focus'>
                <Link to='/' id='focus_overlay'></Link>
                <div id='focus_content'>
                    <span className='task_title' style={{
                        backgroundColor: config.task_types[task.type].color
                    }}>
                        {task.title}
                    </span><br/><br/>
                    <span>{task.desc}</span>
                    <span>{task.lane}</span>
                    <span>{task.step}</span>
                    <span>{task.type}</span>
                </div>
            </div>
        );
    }
}

export default Edit;
