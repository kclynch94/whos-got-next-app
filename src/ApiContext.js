import React from 'react'

export default React.createContext({
  organizations: [],
  facilities: [],
  courts: [],
  teams: [],
  updateCourt: () => {},
  deleteTeam: () => {},
  updateTeam: () => {},
  addTeam: () => {},
  setSelectedOrganization: () => {},
  selectedOrganization: null,
})