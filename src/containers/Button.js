import { connect } from 'react-redux';

import changeUserIp from '../store/actions/changeUserIp';
import changeUserLoc from '../store/actions/changeUserLoc';
import toggleProgress from '../store/actions/toggleProgress';

import ButtonComponent from '../components/Button.js';

const mapDispatchToProps = dispatch => ({
  changeIp: ip => {
    dispatch(changeUserIp(ip));
  },
  changeLocation: loc => {
    dispatch(changeUserLoc(loc));
  },
  inProgress: bool => {
    dispatch(toggleProgress(bool));
  },
});
const mapStateToProps = ({ user }) => ({
  user,
});

export const Button = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonComponent);
