import React from 'react';
import ReactDOM from 'react-dom';
import Court from './Court';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Court />, div);
  ReactDOM.unmountComponentAtNode(div);
});