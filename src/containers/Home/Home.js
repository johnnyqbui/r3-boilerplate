import React, { Component } from 'react';
import { Link } from '@reach/router';

import ErrorBoundary from 'components/ErrorBoundary';
import TestError from 'components/TestError';
import H1 from 'components/H1';

export default class Home extends Component {
  componentDidMount() {
    this.props.addInitialLoad();
  }

  render() {
    return (
      <section>
        <H1>Welcome!</H1>
        <Link to="/about">Go to about</Link>

        <ErrorBoundary>
          <TestError />
        </ErrorBoundary>
      </section>
    );
  }
}