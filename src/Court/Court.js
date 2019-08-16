import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import config from '../config';
import './Court.css';
import ApiContext from '../ApiContext';

class Court extends Component {
    static contextType = ApiContext;

    state = {
        error: null,
    }

    handleStartGame = e => {
        e.preventDefault()
        const activegame = true
        const { court_name, courtId, facilityId } = this.props
        const newCourt = { courtId, court_name, activegame, facilityId }

        fetch(`${config.API_ENDPOINT}/courts/${courtId}`, {
            method: 'PATCH',
            body: JSON.stringify(newCourt),
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
          .then((court) => {
            this.context.updateCourt(court)
          })
          .catch(error => {
            console.error(error)
            this.setState({ error })
          })
    }

    handleNextGame = e => {
        e.preventDefault()
        const courtId= this.props.courtId
        const teams = this.context.teams
        const courtTeams = teams.filter(t => t.court_id === courtId)
        if (courtTeams.length === 0) {
          const activegame = false
          const newCourt = { courtId, activegame }

          fetch(`${config.API_ENDPOINT}/courts/${courtId}`, {
              method: 'PATCH',
              body: JSON.stringify(newCourt),
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
            .then((court) => {
              this.context.updateCourt(court)
            })
            .catch(error => {
              console.error(error)
              this.setState({ error })
            })
      } else if (courtTeams.length > 0) {
        const teamId = courtTeams[0].id

        fetch(`${config.API_ENDPOINT}/teams/${teamId}`, {
            method: 'DELETE',
            headers: {
              'content-type': 'application/json',
              'authorization': `bearer ${config.API_KEY}`
            },
          })
          .then(res => {
            if (!res.ok)
              return res.json().then(error => Promise.reject(error))
          })
          .then(() => {
            this.context.deleteTeam(teamId)
        })
        .catch(error => {
          console.error(error)
          this.setState({ error })
        })
    }
  }
    

    render() {
        const { court_name, courtId, activeGame } = this.props
        const teams = this.context.teams
        const courtTeams = teams.filter(t => +t.court_id === +courtId)
        const teamId = courtTeams.length ? courtTeams[0].id : null
        const emptySpot = courtTeams.length ? 5-courtTeams[0].players.split(',').length : 0
        if (courtId===11) {
            console.log(courtTeams)
        }
        if (!activeGame) {
            return(
                <div className='court'>
                    <h3>{court_name}</h3>
                    <button className='button' onClick={this.handleStartGame}>START GAME</button>
                </div>
            )
        } else if (activeGame && courtTeams.length === 0) {
            return(
                <div className='court'>
                    <h3>{court_name}</h3>
                    <NavLink className='likeAButton' to={`/team-builder/${courtId}`}>CLAIM NEXT</NavLink>
                    <button className='button' onClick={this.handleNextGame}>NEXT GAME ></button>
                </div>
            )
        } else if (activeGame && courtTeams.length && emptySpot>0) {
            return(
                <div className='court'>
                    <h3>{court_name}</h3>
                    <p className='next_team'>Team {courtTeams[0].team_name} has next. They have {emptySpot} spot(s) available</p>
                    <NavLink className='likeAButton' to={`/join-team/${teamId}`}>JOIN TEAM</NavLink>
                    <NavLink className='likeAButton' to={`/team-builder/${courtId}`}>CLAIM NEXT</NavLink>
                    <button className='button' onClick={this.handleNextGame}>NEXT GAME  ></button>
                </div>
            )
        } else if (activeGame && courtTeams.length && emptySpot === 0) {
            return(
                <div className='court'>
                    <h3>{court_name}</h3>
                    <p className='next_team'>Team {courtTeams[0].team_name} has next. Their team is full.</p>
                    <NavLink className='likeAButton' to={`/team-builder/${courtId}`}>CLAIM NEXT</NavLink>
                    <button className='button' onClick={this.handleNextGame}>NEXT GAME ></button>
                </div>
            )
        } else {
            return <p>nothing</p>
        }

    }

}

export default Court;