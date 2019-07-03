import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './TeamBuildingForm.css';

class TeamBuildingForm extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        return(
            <div className='TeamBuildingForm'>
                <section>
                    <header>
                        <h2>Team Builder</h2>
                    </header>
                    <form>
                        <label for='team-name'>Team Name:</label>
                        <input type="text" placeholder='Team 1' name='team-name' id='team-name' />
                        <br></br>
                        <label for='player-total'>How many players do you have?</label>
                        <input type="number" name='player-total' id='player-total' />

                        <div>
                            <label for="player-name">Player 1</label>
                            <input placeholder='Player 1' type="text" name='player-name' id='player-name' />
                        </div>
                        <div>
                            <label for="player-name">Player 2</label>
                            <input placeholder='Player 2' type="text" name='player-name' id='player-name' />
                        </div>
                        <div>
                            <label for="player-name">Player 3</label>
                            <input placeholder='Player 3' type="text" name='player-name' id='player-name' />
                        </div>
                        <div>
                            <label for="player-name">Player 4</label>
                            <input placeholder='Player 4' type="text" name='player-name' id='player-name' />
                        </div>
                        <div>
                            <label for="player-name">Player 5</label>
                            <input placeholder='Player 5' type="text" name='player-name' id='player-name' />
                        </div>
                        <NavLink to='/courts'>Claim Next Game</NavLink>
                    </form>
                </section>
            </div>
        )
    }
}

export default TeamBuildingForm;