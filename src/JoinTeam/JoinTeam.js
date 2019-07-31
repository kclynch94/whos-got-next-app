import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import config from '../config';
import './JoinTeam.css';

class JoinTeam extends Component {
    static defaultProps = {
        history: {
            push: () => { }
          },
        match: {
            params: {}
        }
    }

    static contextType = ApiContext;

    handleSubmit = e => {
        e.preventDefault()
        const teamId = this.props.match.params.teamId
        const team = this.context.teams.find(t => +t.id === +teamId)
        const players = team.players.split(',')
        players.push(e.target['player-name'].value)
        const newTeam = {
            id: team.id,
            team_name: team.team_name,
            players: players,
            court_id: team.court_id
        }
        fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
            method: 'PATCH',
            body: JSON.stringify(newTeam),
            headers: {
              'content-type': 'application/json',
              'authorization': `Bearer ${config.API_KEY}`
            },
          })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
          })
          .then(() => {
            newTeam.players = players.join(',')
            this.context.updateTeam(newTeam)
            this.context.setSelectedOrganization(newTeam.court_id)
            this.props.history.push('/courts')
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
    }


    render() {
        
        return(
            <div>
                <form 
                    className='joinTeamForm'
                    onSubmit={this.handleSubmit}
                >
                    <label htmlFor='player-name'>Enter your name: </label>
                    <input type='text' id='player-name' name='player-name' />
                    <button type='submit' >
                        Join Team
                    </button>
                </form>
            </div>
        )
    }
}

export default JoinTeam;