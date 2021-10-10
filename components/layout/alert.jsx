import React from 'react';

const Alert = ({message, type}) => {
  let alertColor;
  if (type === 'ERROR') {
    alertColor = 'danger'
  } else if (type === 'WARNING') {
    alertColor = 'light'
  }

  return (
    <div
      className={`flex items-center bg-${alertColor} text-dark px-2 py-4 rounded-sm`}
    >
      <i className="fas fa-info-circle mr-2" />
      <h1>{message}</h1>
    </div>
  );
};

export default Alert;
