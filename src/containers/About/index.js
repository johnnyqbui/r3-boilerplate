import { connect } from 'react-redux';
import { incrementCounter } from 'redux/actions/sample';
import About from './About';

export const mapStateToProps = state => ({
  counter: state.sample.counter,
});

export default connect(
  mapStateToProps,
  { incrementCounter },
)(About);
