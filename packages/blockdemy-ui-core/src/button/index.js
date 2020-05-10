import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import DefaultButton from './elements';

const Button = ({ children, color, uppercase, fullWidth, disabled, ...props }) => (
  <DefaultButton
    color={color}
    uppercase={uppercase}
    fullWidth={fullWidth}
    disabled={disabled}
    {...props}
  >
    {children}
  </DefaultButton>
);

Button.defaultProps = {
  uppercase: true,
  color: 'default',
  fullWidth: false,
  disabled: false,
  size: 'normal'
};

Button.propTypes = {
  children: PropTypes.any.isRequired,
  color: PropTypes.string,
  uppercase: PropTypes.bool,
  fullWidth: PropTypes.bool,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.position
};

export default Button;
