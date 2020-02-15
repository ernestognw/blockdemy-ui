import React from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import StyledBox from './elements';

const Box = ({ clickable, ...props }) => <StyledBox clickable={clickable} {...props} />;

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
  clickable: PropTypes.bool
};

export default Box;
