import { connect } from 'react-redux';

import setWeather from '../store/actions/setWeather';
import toggleProgress from '../store/actions/toggleProgress';
import changeAppState from '../store/actions/changeAppState';

import ButtonComponent from '../components/Button';

const throwFail = (dsptch, progress, str) => {
  alert(str);
  dsptch(progress(false));
};

const mapDispatchToProps = dispatch => ({
  findWeather: () => {
    dispatch(toggleProgress(true));
    dispatch(changeAppState('Ищем вас'));

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          const { latitude, longitude } = pos.coords;
          dispatch(setWeather({ latitude, longitude }));
        },
        () => {
          throwFail(dispatch, toggleProgress, 'Геолокация недоступна или отключена в настройках браузера');
        },
      );
    } else {
      throwFail(dispatch, toggleProgress, 'Геолокация недоступна.');
    }
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(ButtonComponent);
