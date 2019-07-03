import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './ClaimNextForm.css';

class ClaimNextForm extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='ClaimNextForm'>
                <p>Claim Next Form</p>
            </div>
        )
    }
}

export default ClaimNextForm;