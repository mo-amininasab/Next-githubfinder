import { combineReducers } from 'redux';
import matchedUsersReducer from './matchedUsersReducer';
import alertReducer from './alertReducer';
import userDetailsReducer from './userDetailsReducer';

const reducer = combineReducers({
  matchedUsers: matchedUsersReducer,
  alert: alertReducer,
  userDetail: userDetailsReducer,
});

export default reducer;
