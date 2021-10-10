import {
  GET_USERS,
  GET_USERS_SUCCESS,
  GET_USERS_ERROR,
  CLEAR_USERS,
} from '../constants/matchedUsersConstants';

const initialState = {
  loading: false,
  error: null,
  data: {},
};

const matchedUsersReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case GET_USERS:
      return { ...state, loading: true, error: null };

    case GET_USERS_SUCCESS:
      return { ...state, loading: false, error: null, data: payload };

    case GET_USERS_ERROR:
      return { ...state, loading: false, error: payload };

    case CLEAR_USERS:
      return { ...state, data: {} };

    default:
      return state;
  }
};
export default matchedUsersReducer;
