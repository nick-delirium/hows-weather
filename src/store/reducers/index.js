import { combineReducers } from 'redux';

import user from './user.js';
import appState from './appState.js';

export default combineReducers({
  user,
  appState
});