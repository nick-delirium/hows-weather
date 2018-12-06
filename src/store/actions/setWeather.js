import axios from 'axios';

const monthNames = [
  'Янв.',
  'Фев.',
  'Марта',
  'Апр.',
  'Мая',
  'Июня',
  'Июля',
  'Авг.',
  'Сен.',
  'Окт.',
  'Нояб.',
  'Дек.',
];

const getDate = ({ applicable_date }) => {
  const monthNum = parseInt(applicable_date.slice(-5, -3), 10);
  const month = monthNames[monthNum - 1];
  const day = parseInt(applicable_date.slice(-2), 10);
  return `${day} ${month}`;
};

export default function setWeather(pos) {
  return (dispatch) => {
    dispatch({ type: 'CHANGE_APP_STATE', payload: 'Определяем город' });
    axios
      .get(`/api/city?lat=${pos.latitude}&long=${pos.longitude}`)
      .then((r) => {
        const cityId = r.data[0].woeid;
        dispatch({ type: 'CHANGE_CITY', payload: r.data[0].title });
        dispatch({ type: 'CHANGE_APP_STATE', payload: 'Спрашиваем погоду у местных' });
        axios
          .get(`/api/weather?city=${cityId}`)
          .then((w) => {
            const consolidated_weather = w.data;
            const weatherList = consolidated_weather.map((day) => {
              const correctDay = day;
              correctDay.applicable_date = getDate(day);
              return day;
            });
            dispatch({ type: 'CHANGE_PROGRESS_STATE', payload: false });
            dispatch({ type: 'CHANGE_FINISH_STATE', payload: true });
            dispatch({ type: 'SET_WEATHER', payload: weatherList });
          })
          .catch(() => {
            dispatch({ type: 'CHANGE_PROGRESS_STATE', payload: false });
            dispatch({ type: 'CHANGE_FINISH_STATE', payload: false });
          });
      })
      .catch(() => {
        dispatch({ type: 'CHANGE_PROGRESS_STATE', payload: false });
        dispatch({ type: 'CHANGE_FINISH_STATE', payload: false });
      });
  };
}
