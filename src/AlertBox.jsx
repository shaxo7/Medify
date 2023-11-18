import React from 'react';
import PropTypes from 'prop-types';

const AlertBox = ({ message, type, onClose }) => {
  return (
    <div className={`alert-box ${type}`} role="alert">
      <p>{message}</p>
      <button onClick={onClose} className="close-button">
        Close
      </button>
    </div>
  );
};

AlertBox.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['success', 'error']).isRequired,
  onClose: PropTypes.func.isRequired,
};

export default AlertBox;
