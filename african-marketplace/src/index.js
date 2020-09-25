import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';
import './sass/index.scss';
import App from './App';

ReactDOM.render(
  <Router>
 <App />
    {/* </React.StrictMode>, */}
  </Router>,
  // <React.StrictMode>
  document.getElementById('root')
);

