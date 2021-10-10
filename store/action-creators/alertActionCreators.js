import { REMOVE_ALERT, SHOW_ALERT } from '../constants/alertConstants';

export const showAlert = (message, alertType) => ({
  type: SHOW_ALERT,
  payload: { message, alertType },
});

export const removerAlert = () => ({
  type: REMOVE_ALERT,
});
