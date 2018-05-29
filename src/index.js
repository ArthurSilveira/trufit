import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import ScrollToTop from './components/helpers/ScrollToTop.js'
import './index.css';
import './components/styles/animate.min.css'
import 'semantic-ui-css/semantic.min.css'
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render((
  <Router>
    <ScrollToTop>
      <App/>
    </ScrollToTop>
  </Router>
), document.getElementById('root'));
registerServiceWorker();
