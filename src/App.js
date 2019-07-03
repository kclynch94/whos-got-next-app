import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Nav from './Nav/Nav';
import CourtList from './CourtList/CourtList';
import LandingPage from './LandingPage/LandingPage';
import LoginForm from './LoginForm/LoginForm';
import ScheduleGameForm from './ScheduleGameForm/ScheduleGameForm';
import TeamBuildingForm from './TeamBuildingForm/TeamBuildingForm';
import ClaimNextForm from './ClaimNextForm/ClaimNextForm';
import LocationPicker from './LocationPicker/LocationPicker';
import Footer from './Footer/Footer';
import './App.css';


class App extends Component {

  render () {
    return (
      <div className='App'>
        <header className='App_header'>
              <h1>
                <Link to='/'>Who's Got Next?</Link>
              </h1>
          </header>
        <main className='App_main'>
          <Route
            exact path='/'
            component={LandingPage}
          />
          <Route
            path='/pick-your-courts'
            render={() =>
              <LocationPicker
                organizations={this.props.organizations}
              />
            }
          />
          <Route
            path='/courts'
            component={CourtList}
          />
          <Route
            path='/schedule-game'
            component={ScheduleGameForm}
          />
          <Route
            path='/claim-next'
            component={ClaimNextForm}
          />
          <Route
            path='/team-builder'
            component={TeamBuildingForm}
          />
          <Route
            path='/login'
            component={LoginForm}
          />
        </main>
        <footer>
          <Route
            path='/'
            component={Footer}
          />
        </footer>
      </div>
    );
  }
}


export default App;
