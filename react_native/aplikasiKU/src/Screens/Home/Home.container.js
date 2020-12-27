import { connect } from 'react-redux';
import HomePage from './Home.screen.component';
import {decrementCount, incrementCount, resetCount} from './Home.actions';

const mapStateToProps = state => ({
  count: state.home_store.count
});

const mapDispatchToProps = dispatch => ({
  increment: () => dispatch(incrementCount()),
  decrement: () => dispatch(decrementCount()),
  resetCount: () => dispatch(resetCount())
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
