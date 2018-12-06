import { connect } from 'react-redux';
import ProgressComponent from '../components/ProgressView';

const mapStateToProps = ({ appState }) => ({ appState });

export default connect(mapStateToProps)(ProgressComponent);
