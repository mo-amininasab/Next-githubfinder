import { combineReducers } from 'redux';
import matchedUsersReducer from './matchedUsersReducer';
import alertReducer from './alertReducer';

const reducer = combineReducers({
  matchedUsers: matchedUsersReducer,
  alert: alertReducer,
});

export default reducer;
