import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import config from '../config';
import './TeamBuildingForm.css';

class TeamBuildingForm extends Component {
    static defaultProps = {
        history: {
            push: () => { }
          },
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    state = {}

    handleSubmit = e => {
        e.preventDefault()
        const court_id = this.props.match.params.courtId
        let players = []
        let i = 0
        const playerCount = e.target['player-count'].value
        while(i < playerCount){
            players.push(e.target[`player_name${i+1}`].value)
            i++
        }
        const { team_name } = e.target
        const newTeam = {
            team_name: team_name.value,
            players: players,
            court_id: court_id,
        }
        fetch(`${config.API_ENDPOINT}/teams`, {
            method: 'POST',
            body: JSON.stringify(newTeam),
            headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${config.API_KEY}`
            },
          })
          .then(res => {
            if (!res.ok){
              return res.json().then(error => Promise.reject(error))
            }
            return res.json()
          })
          .then((team) => {
            this.context.addTeam(team)
            this.context.setSelectedOrganization(court_id)
            this.props.history.push('/courts')
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
    }

    getPlayerFields = e => {
        let playerFields = []
        let i = 0;
        while(i < e.target.value){
            playerFields.push(
                <div key={i}>
                    <label htmlFor={`player_name${i+1}`}>Player {i+1}: </label>
                    <input type='text' id={`player_name${i+1}`} name={`player_name${i+1}`} />
                </div>
            )
            i++
        }
        this.setState({playerFields: playerFields})
    }


    render() {
        
        return(
            <div>
                <form 
                    className='TeamBuildingForm'
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor='team_name'>Enter your team's name: </label>
                    <input type='text' id='team_name' name='team_name' />

                    <label htmlFor="player-count">How many players do you have?</label>
                    <select id='player-count' name='player-count' onChange={this.getPlayerFields}>
                        <option>Please select an amount</option>
                        <option value={1} >1</option>
                        <option value={2}>2</option>
                        <option value={3}>3</option>
                        <option value={4}>4</option>
                        <option value={5}>5</option>
                    </select>
                    {this.state.playerFields}
                    <button className='button' type='submit' >
                        Claim Next
                    </button>
                </form>
            </div>
        )
    }
}

export default TeamBuildingForm;