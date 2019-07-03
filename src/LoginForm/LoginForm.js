import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LoginForm.css';

class LoginForm extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='LoginForm'>
                <p>Login Form</p>
            </div>
        )
    }
}

export default LoginForm;