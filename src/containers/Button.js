import { connect } from 'react-redux';

import setWeather from '../store/actions/setWeather';
import toggleProgress from '../store/actions/toggleProgress';
import changeFinish from '../store/actions/changeFinish'

import ButtonComponent from '../components/Button';

const mapDispatchToProps = dispatch => ({
  changeFinishSt: st => {
    dispatch(changeFinish(st));
  },
  setWeather: pos => {
    dispatch(setWeather(pos));
  },
  inProgress: bool => {
    dispatch(toggleProgress(bool));
  },

});



export const Button = connect(
  () => ({}),
  mapDispatchToProps
)(ButtonComponent);
