import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Footer.css';

class Footer extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='Footer'>
                <p>Footer</p>
            </div>
        )
    }
}

export default Footer;