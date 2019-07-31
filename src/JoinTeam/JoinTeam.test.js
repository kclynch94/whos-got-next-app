import React from 'react';
import ReactDOM from 'react-dom';
import JoinTeam from './JoinTeam';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = {
    match: { params: {} },
    history: {
      push: () => {}
    },
  }
  ReactDOM.render(<JoinTeam {...props} />, div);
  ReactDOM.unmountComponentAtNode(div);
});