import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import PillContainer from './elements';

const Pill = ({ children, size, color, variant, ...props }) => (
  <PillContainer color={color} size={size} variant={variant} {...props}>
    {children}
  </PillContainer>
);

Pill.defaultProps = {
  size: 'normal',
  variant: '',
  color: 'primary'
};

Pill.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  variant: PropTypes.string,
  color: PropTypes.string,
  ...propTypes.space
};

export default Pill;
