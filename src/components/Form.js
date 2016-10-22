import React, { Component } from 'react';
import config from '../config.js';

class Form extends Component {
    render() {
        let that = this;
        let fields = [];
        let pastlane = false;
        config.steps.forEach(function(step) {
            step.requirements.forEach(function(curr_step) {
                curr_step.past = !pastlane;
                fields.push(curr_step);
            });
            if (step.name === that.props.step) {
                pastlane = true;
            }
        });
        return (
            <div>
                {fields.map((field, id) => {
                    //var props = {};
                    return <span key={id}>{field.name}:  {field.type}, {that.props[field.name]}<br/></span>
                })}
            </div>
        );
    }
}

export default Form;
