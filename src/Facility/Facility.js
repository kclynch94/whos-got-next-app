import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import './Facility.css';
import Court from '../Court/Court';

class Facility extends Component {
    static contextType = ApiContext;

    render() { 
        const { facilityId, facilityName } = this.props
        const { courts=[] } = this.context
        const courtsList = courts.filter(court => court.facility_id === facilityId).map(c => (
            <li className='Facility_court' key={c.id}>
                <Court 
                    court_name = {c.court_name}
                    courtId = {c.id}
                    activeGame = {c.activegame}
                    facilityId = {c.facilityId}
                />
            </li>
        ));
            
        return(
            <div className='facility'>
                <h2>{facilityName}</h2>
                <ul className='Facility_list'>
                    {courtsList}
                </ul>
            </div>
        )
    }
}

export default Facility;