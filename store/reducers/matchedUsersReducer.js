import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
} from '../constants/matchedUsersConstants';

const initialState = {
  loading: false,
  error: null,
  data: {},
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, loading: true, error: null };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, error: null, data: payload };

    case GET_USERS_ERROR:
      return { ...state, loading: false, error: payload };

    default:
      return state;
  }
};
