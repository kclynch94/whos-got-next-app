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
                        <h3>Claim the court</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of court scheduling interface</em>]</p>
                    <p>Who's Got Next? allows you to be be next in line to play on a basketbaall court. Claim the spot for your whole team or join up with other players near by to create a team.</p>
                </section>
                <section>
                    <header>
                        <h3>See who's playing</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of live games interface</em>]</p>
                    <p>Use the app to see what courts near you have active players. Don't drive out to the court just to see no one is there. Find the courts with live games you could join in on. </p>
                </section>
                <section>
                    <header>
                        <h3>Plan ahead</h3>
                    </header>
                    <p>[<em>placeholder for screenshot of dream stats UI</em>]</p>
                    <p>Schedule a game with your friends. Pick a court and time, then build out the teams with players.</p>
                </section>
                <section>
                <NavLink to='/pick-your-courts'>Check out the courts!</NavLink>
                </section>
            </div>
        )
    }
}

export default LandingPage;