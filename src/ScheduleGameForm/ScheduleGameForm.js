import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ScheduleGameForm.css';

class ScheduleGameForm extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='ScheduleGameForm'>
                <p>Schedule Game Form</p>
            </div>
        )
    }
}

export default ScheduleGameForm;