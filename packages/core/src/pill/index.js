import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import PillContainer from './elements';

const Pill = ({ children, size, color, variant, textTransform, ...props }) => (
  <PillContainer
    color={color}
    size={size}
    variant={variant}
    textTransform={textTransform}
    {...props}
  >
    {children}
  </PillContainer>
);

Pill.defaultProps = {
  size: 'normal',
  variant: '',
  color: 'primary',
  textTransform: 'uppercase'
};

Pill.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  variant: PropTypes.string,
  color: PropTypes.string,
  textTransform: PropTypes.oneOf([
    'none',
    'capitalize',
    'uppercase',
    'lowercase',
    'initial',
    'inherit'
  ]),
  ...propTypes.space,
  ...propTypes.typography,
  ...propTypes.position
};

export default Pill;
