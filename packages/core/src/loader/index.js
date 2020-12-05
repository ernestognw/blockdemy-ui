import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { AiOutlineLoading } from 'react-icons/ai';
import LoaderWrapper from './elements';
import Box from '../box';

const Loader = forwardRef(({ size, color, ...props }, ref) => (
  <LoaderWrapper ref={ref} as={AiOutlineLoading} size={size} color={color} {...props} />
));

const LoaderContainer = forwardRef(({ children, ...props }, ref) => (
  <Box ref={ref} display="flex" alignItems="center" justifyContent="center" {...props}>
    {children}
  </Box>
));

LoaderContainer.propTypes = {
  children: PropTypes.any.isRequired
};

Loader.defaultProps = {
  size: '35',
  color: 'primary'
};

Loader.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  ...propTypes.space
};

export { LoaderContainer };

Loader.LoaderContainer = LoaderContainer;
export default Loader;
