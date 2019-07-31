import React from 'react';
import ReactDOM from 'react-dom';
import CourtList from './CourtList';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CourtList />, div);
  ReactDOM.unmountComponentAtNode(div);
});