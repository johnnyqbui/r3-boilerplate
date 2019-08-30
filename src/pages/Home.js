import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from '@reach/router';

import ErrorBoundary from '../components/ErrorBoundary';
import TestError from '../components/TestError';
import { addInitialLoad } from '../redux/actions/sample';
import H1 from '../components/H1';

export class Home extends Component {
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

        <style jsx>{`
          .title {
            color: red;
          }
        `}</style>
      </section>
    );
  }
}

export default connect(
  null,
  { addInitialLoad },
)(Home);
