const initialState = {
  progress: false,
  error: {
    status: false,
    text: ""
  }
}

export default function appState(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_PROGRESS_STATE':
      return { ...state, progress: action.payload };
    default:
      return state;
  }
}