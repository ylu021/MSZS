import { combineReducers } from 'redux';
import user from './user';
import events from './events';

export default combineReducers({
  user, // only access the key in initial state
  events,
});
