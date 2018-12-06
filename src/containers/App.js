import { connect } from 'react-redux';

import AppComponent from '../components/App';

const mapStateToProps = ({ appState, weather }) => ({ appState, weather });

export default connect(mapStateToProps)(AppComponent);
