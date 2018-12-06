const initialState = [];

export default function weather(state = initialState, action) {
  switch (action.type) {
    case 'SET_WEATHER':
      return [...action.payload];
    default:
      return state;
  }
}
