import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import Apollo from './Apollo';
import './styless.css';

ReactDOM.render(
  <Apollo>
    <App />
  </Apollo>,
  document.querySelector('#root'),
);
