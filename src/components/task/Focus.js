import React, { Component } from 'react';
import { Link } from 'react-router'
import db from '../../db.js';

class Edit extends Component {
    render() {
        let task = db.tasks.find((task) => task.id === Number(this.props.params.id));
        return (
            <div id='focus'>
                <Link to='/' id='overlay'></Link>
                <div id='focus_content'>
                    <span>{task.title}</span>
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
