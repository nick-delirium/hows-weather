export default function changeFinish(finished) {
  return {
    type: 'CHANGE_FINISH_STATE',
    payload: finished,
  };
}
