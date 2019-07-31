import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LandingPage.css';

class LandingPage extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='LandingPage'>
                <section>
                    <header>
                        <h2>Claim the court</h2>
                    </header>
                    <p>Who's Got Next? allows you to be be next in line to play on a basketbaall court. Claim the spot for you or your whole team </p>
                </section>
                <section>
                    <header>
                        <h2>See who's playing</h2>
                    </header>
                    <p>Use the app to see what courts near you have active games. Don't drive out to the court just to see no one is there. Find the courts with live games you could join in on. Call up your friends or just find a team the needs an extra player. </p>
                </section>
                <section className= 'to_courts'>
                <NavLink className='to_courts_button' to='/courts'>CHECK OUT THE COURTS!</NavLink>
                </section>
            </div>
        )
    }
}

export default LandingPage;