import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
  return (
    <div className={`alert ${props.customClass} ${!props.visible ? 'd-none' : ''} alert-${props.type}`} role="alert">
      <button type="button" className="close" onClick={() => props.onHideError()}>
        <span>&times;</span>
      </button>
      {props.message}
    </div>
  );
};

Alert.defaultProps = {
  type: 'info',
  message: '',
  visible: false,
  customClass: '',
  onHideError: function () {}
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  visible: PropTypes.bool,
  customClass: PropTypes.string,
  onHideError: PropTypes.func
};

export default Alert;
