import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import StyledBox from './elements';

const Box = forwardRef(({ clickable, ...props }, ref) => (
  <StyledBox ref={ref} clickable={clickable ? 'true' : undefined} {...props} />
));

Box.defaultProps = {
  clickable: false
};

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.flexbox,
  ...propTypes.grid,
  ...propTypes.background,
  clickable: PropTypes.bool
};

export default Box;
