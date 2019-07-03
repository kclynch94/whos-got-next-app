import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

class Nav extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='Nav'>
                <ul>
                    <li>
                        <NavLink to='/courts'>
                            Courts
                        </NavLink>
                    </li>
                </ul>
            </div>
        )
    }
}

export default Nav;