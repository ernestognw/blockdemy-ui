import React from 'react';
import PropTypes from 'prop-types';
import { Container, Content } from './elements';

const Navbar = ({ children, shrink, color, hideBg, hideNavbar, shadow, justify, ...props }) => (
  <Container color={color} hideBg={hideBg} hideNavbar={hideNavbar} shadow={shadow} {...props}>
    <Content justify={justify} shrink={shrink}>
      {children}
    </Content>
  </Container>
);

Navbar.defaultProps = {
  shrink: true,
  color: 'lighter',
  hideBg: false,
  hideNavbar: false,
  shadow: true,
  justify: 'space-between'
};

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
  justify: PropTypes.oneOf([
    'space-between',
    'space-around',
    'space-evenly',
    'center',
    'flex-end',
    'flex-start'
  ]),
  shrink: PropTypes.bool,
  color: PropTypes.string,
  hideBg: PropTypes.bool,
  hideNavbar: PropTypes.bool,
  shadow: PropTypes.bool
};

export default Navbar;
