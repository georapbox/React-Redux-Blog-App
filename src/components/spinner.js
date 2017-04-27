import '../styles/spinner.scss';
import React from 'react';
import PropTypes from 'prop-types';

const Spinner = props => {
  return (
    <div
      className={`sk-fading-circle ${props.customClass} ${!props.visible ? 'd-none' : ''}`}
      style={{width: props.width, height: props.height}}>
      <div className="sk-circle1 sk-circle"></div>
      <div className="sk-circle2 sk-circle"></div>
      <div className="sk-circle3 sk-circle"></div>
      <div className="sk-circle4 sk-circle"></div>
      <div className="sk-circle5 sk-circle"></div>
      <div className="sk-circle6 sk-circle"></div>
      <div className="sk-circle7 sk-circle"></div>
      <div className="sk-circle8 sk-circle"></div>
      <div className="sk-circle9 sk-circle"></div>
      <div className="sk-circle10 sk-circle"></div>
      <div className="sk-circle11 sk-circle"></div>
      <div className="sk-circle12 sk-circle"></div>
    </div>
  );
};

Spinner.defaultProps = {
  customClass: '',
  visible: false,
  width: '40px',
  height: '40px'
};

Spinner.propTypes = {
  customClass: PropTypes.string,
  visible: PropTypes.bool,
  width: PropTypes.string,
  height: PropTypes.string
};

export default Spinner;
