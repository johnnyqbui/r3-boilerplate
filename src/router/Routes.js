import React, { lazy, Suspense } from 'react';
import { Router } from '@reach/router';

const Home = lazy(() => import("containers/Home"));
const About = lazy(() => import("containers/About"));
const NotFound = lazy(() => import("containers/NotFound"));

const Routes = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <Router>
      <Home path="/" />
      <About path="/about" />
      <NotFound default />
    </Router>
  </Suspense>
);

export default Routes
