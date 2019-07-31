import React from 'react';
import ReactDOM from 'react-dom';
import Facility from './Facility';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Facility />, div);
  ReactDOM.unmountComponentAtNode(div);
});