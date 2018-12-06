export default function changeAppState(str) {
  return {
    type: 'CHANGE_APP_STATE',
    payload: str,
  };
}
