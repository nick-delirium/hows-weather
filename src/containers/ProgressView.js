import { connect } from 'react-redux';
import ProgressComponent from '../components/ProgressView';

const mapStateToProps = ({ appState }) => ({ appState});

export const ProgressView = connect(mapStateToProps)(ProgressComponent);