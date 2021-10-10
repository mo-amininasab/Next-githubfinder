import { combineReducers } from 'redux';
import matchedUsersReducer from './matchedUsersReducer';

const reducer = combineReducers({
  matchedUsers: matchedUsersReducer
})

export default reducer;