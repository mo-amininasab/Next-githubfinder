import React from 'react';

const Alert = ({ message, type }) => {
  let alertColor;
  let icon;
  if (type === 'ERROR') {
    alertColor = 'danger';
    icon = 'fas fa-exclamation-circle';
  } else if (type === 'WARNING') {
    alertColor = 'light';
    icon = 'fas fa-info-circle mr-2';
  }

  return (
    <div
      className={`flex space-x-1 items-center bg-${alertColor} text-dark px-2 py-4 rounded-sm`}
    >
      <i class={icon} />
      <h1>{message}</h1>
    </div>
  );
};

export default Alert;

Alert.defaultProps = {
  message: 'Something wrong',
  icon: 'fas fa-info-circle mr-2',
  type: 'WARNING',
};
