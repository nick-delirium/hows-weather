const initialState = {
  ip: "",
  location: {
    latitude: null,
    longitude: null
  },
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case 'CHANGE_USER_IP':
      return { ...state, ip: action.payload };
    case 'CHANGE_USER_LOCATION':
      return { ...state, location: action.payload };
    default:
      return state;
  }
}
