import axios from 'axios';

const weatherApi = 'https://cors-anywhere.herokuapp.com/https://www.metaweather.com/api/location';


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
  const monthNum = parseInt(applicable_date.slice(-5, -4));
  const month = monthNames[monthNum-1];
  const day = parseInt(applicable_date.slice(-2));
  return `${day} ${month}`
}

export default function setWeather(pos) {
  console.log('hello2');
  return function(dispatch) {
    axios
      .get(`${weatherApi}/search/?lattlong=${pos.latitude},${pos.longitude}`)
      .then(r => {
        const cityId = r.data[0].woeid;
        dispatch({ type: 'CHANGE_CITY', payload: r.data[0].title })
        axios
          .get(`${weatherApi}/${cityId}`)
          .then(r => {
            const { consolidated_weather } = r.data;
            const weatherList = consolidated_weather.map(day => {
              day.applicable_date = getDate(day)
              return day;
            }) 
            dispatch({ type: 'CHANGE_PROGRESS_STATE', payload: false });
            dispatch({ type: 'CHANGE_FINISH_STATE', payload: true });
            dispatch({ type: 'SET_WEATHER', payload: weatherList });
          })
          .catch(e => {
            dispatch({ type: 'CHANGE_PROGRESS_STATE', payload: false });
            dispatch({ type: 'CHANGE_FINISH_STATE', payload: false });
          });
      })
      .catch(e => {
        dispatch({ type: 'CHANGE_PROGRESS_STATE', payload: false });
        dispatch({ type: 'CHANGE_FINISH_STATE', payload: false });
      });
  };
}

// export default function getBreeds() {
//   return function(dispatch, getState) {
//     const { animal } = getState();
//     petfinder.breed.list({ animal }).then(data => {
//       let breeds = [];
//       if (
//         data.petfinder &&
//         data.petfinder.breeds &&
//         Array.isArray(data.petfinder.breeds.breed)
//       ) {
//         breeds = data.petfinder.breeds.breed;
//       }
//       dispatch({ type: "CHANGE_BREEDS", payload: breeds });
//     });
//   };
// }
