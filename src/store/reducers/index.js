import { combineReducers } from 'redux';

import appState from './appState';
import weather from './weather';

export default combineReducers({
  appState,
  weather,
});
