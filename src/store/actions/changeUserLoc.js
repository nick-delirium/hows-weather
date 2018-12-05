export default function changeUserLoc(loc) {
  return {
    type: 'CHANGE_USER_LOCATION',
    payload: loc,
  };
}