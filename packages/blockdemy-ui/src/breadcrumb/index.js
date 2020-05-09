import React, { Children } from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import Box from '../box';
import { Container, Route } from './elements';

const Breadcrumb = ({ children, p, bg, fontSize, prevColor, lastColor, ...props }) => (
  <Container bg={bg} p={p} {...props}>
    <Box display="flex">
      {Children.map(children, (child, index) => (
        <Route
          prevColor={prevColor}
          lastColor={lastColor}
          fontSize={fontSize}
          last={index === children.length - 1}
        >
          {child}
        </Route>
      ))}
    </Box>
  </Container>
);

Breadcrumb.defaultProps = {
  p: 15,
  bg: 'light',
  prevColor: 'default',
  lastColor: 'primary'
};

Breadcrumb.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  p: PropTypes.number,
  bg: PropTypes.string,
  prevColor: PropTypes.string,
  lastColor: PropTypes.string,
  ...propTypes.space,
  ...propTypes.font
};

export default Breadcrumb;
