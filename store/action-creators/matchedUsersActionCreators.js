import axios from 'axios';
import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
} from '../constants/matchedUsersConstants';
export const getMatchedUsers = (term) => async (dispatch, getState) => {
  dispatch({ type: GET_USERS });

  try {
    const { data } = axios.get(
      `https://api.github.com/search/users?q=${term}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USERS_ERROR, payload: error });
  }
};
