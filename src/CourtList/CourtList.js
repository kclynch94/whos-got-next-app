import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import Court from '../Court/Court';
import './CourtList.css';

class CourtList extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='CourtList'>
                <section>
                    <header>
                        <h2>Gym 1</h2>
                    </header>
                    <section>
                        <header>
                            <h2>Court 1</h2>
                            <p><em>Live game indicator</em></p>
                        </header>
                        <span>Martin1423's got next!</span>
                        <button>Join his team. 1 spot</button>
                        <NavLink to='/team-builder'>Got Next?</NavLink>
                    </section>
                    <section>
                        <header>
                            <h2>Court 2</h2>
                            <p><em>Live game indicator</em>></p>
                        </header>
                        <NavLink to='/team-builder'>Got Next?</NavLink>
                    </section>
                    <section>
                        <header>
                            <h2>Court 3</h2>
                            <button>START GAME</button>
                        </header>
                    </section>
                </section>
                <section>
                    <header>
                        <h2>Gym 2</h2>
                    </header>
                    <section>
                        <header>
                            <h2>Court 1</h2>
                            <p><em>Live game indicator</em></p>
                        </header>
                        <span>Martin1423's got next!</span>
                        <button>Join his team. 1 spot</button>
                        <NavLink to='/team-builder'>Got Next?</NavLink>
                    </section>
                    <section>
                        <header>
                            <h2>Court 2</h2>
                        </header>
                        <button>START GAME</button>
                    </section>
                </section>
            </div>
        )
    }
}

export default CourtList;