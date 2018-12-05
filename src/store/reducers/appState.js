const initialState = {
  city: '',
  progress: false,
  finished: false,
  error: {
    status: false,
    text: '',
  },
};

export default function appState(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_PROGRESS_STATE':
      return { ...state, progress: action.payload };
    case 'CHANGE_FINISH_STATE':
      return { ...state, finished: action.payload };
    case 'CHANGE_CITY':
      return { ...state, city: action.payload };
    default:
      return state;
  }
}
