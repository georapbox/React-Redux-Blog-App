import React from 'react';
import PropTypes from 'prop-types';

const Alert = props => {
  return (
    <div className={`alert ${props.customClass} ${!props.visible ? 'd-none' : ''} alert-${props.type}`} role="alert">
      <button type="button" className={`${props.showCloseButton ? 'close' : 'd-none'}`} onClick={() => props.onHideError()}>
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
  showCloseButton: true,
  onHideError: function () {}
};

Alert.propTypes = {
  type: PropTypes.string,
  message: PropTypes.string,
  visible: PropTypes.bool,
  customClass: PropTypes.string,
  showCloseButton: PropTypes.bool,
  onHideError: PropTypes.func
};

export default Alert;
