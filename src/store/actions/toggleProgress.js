export default function toggleProgress(bool) {
  return {
    type: 'CHANGE_PROGRESS_STATE',
    payload: bool,
  };
}