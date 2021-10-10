import {
  GET_USER_DETAILS,
  GET_USER_DETAILS_ERROR,
  GET_USER_DETAILS_SUCCUSS,
} from '../constants/userDetailsConstants';

const initialState = {
  loading: false,
  error: null,
  data: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USER_DETAILS:
      return { ...state, loading: true, error: null };

    case GET_USER_DETAILS_SUCCUSS:
      return { ...state, loading: false, error: null, data: payload };

    case GET_USER_DETAILS_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
