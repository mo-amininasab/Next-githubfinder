import axios from 'axios';
import {
  GET_USERS,
  GET_USERS_ERROR,
  GET_USERS_SUCCESS,
  CLEAR_USERS,
} from '../constants/matchedUsersConstants';
import { SHOW_ALERT, REMOVE_ALERT } from '../constants/alertConstants';

export const getMatchedUsers = (term) => async (dispatch) => {
  dispatch({ type: GET_USERS });

  try {
    const { data } = await axios.get(
      `https://api.github.com/search/users?q=${term}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_USERS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USERS_ERROR, payload: error });
    dispatch({
      type: SHOW_ALERT,
      payload: { message: error.message, type: 'ERROR' },
    });

    setTimeout(() => {
      dispatch({ type: REMOVE_ALERT });
    }, 5000);
    console.error(error);
  }
};

export const clearMatchedUsers = () => {
  return {
    type: CLEAR_USERS,
  };
};
