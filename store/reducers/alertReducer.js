import { REMOVE_ALERT, SHOW_ALERT } from '../constants/alertConstants';

const initialState = {
  message: '',
  type: '',
};

const alertReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SHOW_ALERT:
      return { ...state, message: payload.message, type: payload.alertType };

    case REMOVE_ALERT:
      return { ...state, message: '', type: '' };

    default:
      return state;
  }
};
export default alertReducer;
