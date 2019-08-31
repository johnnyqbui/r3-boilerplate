import React from 'react';
import { Router } from '@reach/router';

import Home from './containers/Home/Home';
import About from './containers/About/About';
import NotFound from './containers/NotFound';

export default (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <NotFound default />
  </Router>
);
