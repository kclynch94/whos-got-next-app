import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import CourtList from './CourtList/CourtList';
import LandingPage from './LandingPage/LandingPage';
import JoinTeam from './JoinTeam/JoinTeam';
import TeamBuildingForm from './TeamBuildingForm/TeamBuildingForm';
import config from './config';
import ApiContext from './ApiContext';
import './App.css';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      organizations: [],
      facilities: [],
      courts: [],
      teams: [],
    }
  }

  componentDidMount() {
    Promise.all([
      fetch(`${config.API_ENDPOINT}/organizations`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      }),
      fetch(`${config.API_ENDPOINT}/facilities`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      }),
      fetch(`${config.API_ENDPOINT}/courts`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      }),
      fetch(`${config.API_ENDPOINT}/teams`, {
        method: 'GET',
        headers: {
          'content-type': 'application/json',
          'Authorization': `Bearer ${config.API_KEY}`
        }
      })
    ])
      .then(([organizationsRes, facilitiesRes, courtsRes, teamsRes]) => {
        if (!organizationsRes.ok)
          return organizationsRes.json().then(e => Promise.reject(e))
        if (!facilitiesRes.ok)
          return facilitiesRes.json().then(e => Promise.reject(e))
        if (!courtsRes.ok)
          return courtsRes.json().then(e => Promise.reject(e))
        if (!teamsRes.ok)
          return teamsRes.json().then(e => Promise.reject(e))
        
        return Promise.all([
          organizationsRes.json(),
          facilitiesRes.json(),
          courtsRes.json(),
          teamsRes.json(),
        ])
      })
      .then(([organizations, facilities, courts, teams]) => {
        this.setState({ organizations, facilities, courts, teams })
      })
      .catch(error => {
        console.error({ error })
      })
  }

  deleteTeam = teamId => {
    const newTeams = this.state.teams.filter(t =>
      t.id !== teamId
    )
    this.setState({
      teams: newTeams
    })
  }

  updateCourt = updatedCourt => {
    this.setState({
      courts: this.state.courts.map(c =>
        (c.id !== updatedCourt.id) ? c : updatedCourt
      )
    })
  }

  updateTeam = updatedTeam => {
    this.setState({
      teams: this.state.teams.map(t =>
        (t.id !== updatedTeam.id) ? t : updatedTeam
      )
    })
  }

  addTeam = team => {
    this.setState({
      teams: [ ...this.state.teams, team ],
    })
  }

  setSelectedOrganization = courtId => {
    const court = this.state.courts.find(c => c.id === +courtId)
    const facility = this.state.facilities.find(f => f.id === court.facility_id)
    this.setState({
      selectedOrganization: this.state.organizations.find(o => o.id === facility.org_id)
    })
  }

  render () {
    const value = {
      organizations: this.state.organizations,
      facilities: this.state.facilities,
      courts: this.state.courts,
      teams: this.state.teams,
      updateCourt: this.updateCourt,
      deleteTeam: this.deleteTeam,
      updateTeam: this.updateTeam,
      addTeam: this.addTeam,
      setSelectedOrganization: this.setSelectedOrganization,
      selectedOrganization: this.state.selectedOrganization,
    }
    return (
      <ApiContext.Provider value={value}>
        <div className='App'>
          <header className='App_header'>
                <h1>
                  <Link className='header_link' to='/'>Who's Got Next?</Link>
                </h1>
            </header>
          <main className='App_main'>
            <Route
              exact path='/'
              component={LandingPage}
            />
            <Route
              path='/courts'
              component={CourtList}
            />
            <Route
              path='/team-builder/:courtId'
              component={TeamBuildingForm}
            />
            <Route
              path='/join-team/:teamId'
              component={JoinTeam}
            />
          </main>
        </div>
      </ApiContext.Provider>
    );
  }
}


export default App;
