export default function changeCity(city) {
  return {
    type: 'CHANGE_CITY',
    payload: city.toUpperCase(),
  };
}
