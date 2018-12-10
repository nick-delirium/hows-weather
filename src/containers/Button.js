import { connect } from 'react-redux';

import setWeather from '../store/actions/setWeather';
import toggleProgress from '../store/actions/toggleProgress';
import changeAppState from '../store/actions/changeAppState';

import ButtonComponent from '../components/Button';

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
          alert('Геолокация недоступна.');
          dispatch(toggleProgress(false));
        },
      );
    } else {
      alert('Геолокация недоступна.');
    }
  },
});

export default connect(
  () => ({}),
  mapDispatchToProps,
)(ButtonComponent);
