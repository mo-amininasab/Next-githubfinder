import axios from 'axios';
import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_SUCCUSS,
} from '../constants/userDetailsConstants';

export const getUserDetails = (username) => async (dispatch) => {
  dispatch({ type: GET_USER_DETAILS });

  try {
    const { data } = axios.get(
      `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
    );

    dispatch({ type: GET_USER_DETAILS_SUCCUSS, payload: data });
  } catch (error) {
    dispatch({ type: GET_USER_DETAILS_ERROR, payload: error });
    console.error(error);
  }
};
