import React from 'react';
import { Router } from '@reach/router';

import Home from 'containers/Home';
import About from 'containers/About/';
import NotFound from 'containers/NotFound';

const Routes = () => (
  <Router>
    <Home path="/" />
    <About path="/about" />
    <NotFound default />
  </Router>
);

export default Routes
