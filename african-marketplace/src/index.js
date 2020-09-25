import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, withRouter } from 'react-router-dom';
import './sass/index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from 'react-router-dom';

ReactDOM.render(
  <Router>
 <App />
    {/* </React.StrictMode>, */}
  </Router>,
  // <React.StrictMode>
  document.getElementById('root')
);

