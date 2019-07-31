import React from 'react';
import ReactDOM from 'react-dom';
import TeamBuildingForm from './TeamBuildingForm';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    },
  }
  ReactDOM.render(<TeamBuildingForm {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});