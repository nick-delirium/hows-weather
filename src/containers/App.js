import { connect } from 'react-redux';

import AppComponent from '../components/App.js';

const mapStateToProps = ({ appState }) => ({
  appState,
});

export const App = connect(
  mapStateToProps
)(AppComponent);
