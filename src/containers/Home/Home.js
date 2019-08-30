import React, { Component } from 'react';
import { Link } from '@reach/router';

import ErrorBoundary from 'shared/ErrorBoundary';
import TestError from 'shared/TestError';
import H1 from 'shared/H1';

export default class Home extends Component {
  componentDidMount() {
    this.props.addInitialLoad();
  }

  render() {
    return (
      <section>
        <H1>Welcome!</H1>
        <Link to="/about">Go to about</Link>
        <Link to="/contact">Go to contact</Link>
        <ErrorBoundary>
          <TestError />
        </ErrorBoundary>
      </section>
    );
  }
}