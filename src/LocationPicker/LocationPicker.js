import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './LocationPicker.css';

class LocationPicker extends Component {
    static defaultProps = {
        match: {
            params: {}
        }
    }

    render() {
        const orgList = this.props.organizations.map(o => (
            <option value={o.name}>{o.name}</option>
        ));
        return(
            <div className='LocationPicker'>
               <form>
                   <label for="organization">Where do you play?</label>
                   <select>
                       {orgList}
                   </select>
                   <NavLink to='/courts'>See Courts</NavLink>
               </form>
            </div>
        )
    }
}

export default LocationPicker;