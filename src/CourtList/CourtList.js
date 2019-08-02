import React, { Component } from 'react';
import ApiContext from '../ApiContext';
import Facility from '../Facility/Facility';
import './CourtList.css';

class CourtList extends Component {
    static contextType = ApiContext;

    state = {
        facilitiesList: []
    }

    componentDidMount() {
        if (this.context.selectedOrganization) {
            const facilities = this.context.facilities
            this.setState({facilitiesList: facilities.filter(facility => facility.org_id === +this.context.selectedOrganization.id)})
        }
    }

    getFacilitiesList = e => {
        const facilities = this.context.facilities
        this.setState({facilitiesList: facilities.filter(facility => facility.org_id === +e.target.value)}) 
    }

    render() {
        const organizations = this.context.organizations
        const orgList = organizations.map(o => (
            <option key={o.id} value={o.id}>{o.org_name}</option>
        ));
        const facilitiesList = this.state.facilitiesList.map(f => (
            <li className='CourtList_facility' key={f.id}>
                <Facility
                    facilityId={f.id}
                    facilityName={f.facility_name} />
            </li>
        ));
            
        return(
            <div>
                <div className='LocationPicker'>
                <form>
                    <label htmlFor="organization">Where do you play? </label>
                    <select value={this.context.selectedOrganization && this.context.selectedOrganization.id} onChange={this.getFacilitiesList}>
                        <option>Please Select An Organization</option>
                        {orgList}
                    </select>
                </form>
                </div>
                {!!this.state.facilitiesList.length && (<div className='CourtList'>
                    <ul className='CourtList_list'>
                        {facilitiesList}
                    </ul>
                </div>)}
            </div>
        )
    }
}

export default CourtList;