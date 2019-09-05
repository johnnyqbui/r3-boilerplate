import React, { Component } from 'react';

import ErrorBoundary from 'shared/ErrorBoundary';
import TestError from 'shared/TestError';
import H1 from 'shared/H1';

export default class Home extends Component {
  componentDidMount() {
    this.props.addInitialLoad();
  }

  render() {
    console.log(this.props)
    return (
      <section>
        <H1>Welcome to the home page</H1>
        <ErrorBoundary>
          <TestError />
        </ErrorBoundary>
      </section>
    );
  }
}