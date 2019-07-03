import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Court.css';

class Court extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='Court'>
                
            </div>
        )
    }
}

export default Court;