import React from "react";
import PropTypes from "prop-types";
import { Container, Content } from "./elements";

const Navbar = ({ children, shrink, color, hideBg, hideNavbar, ...props }) => (
  <Container color={color} hideBg={hideBg} hideNavbar={hideNavbar} {...props}>
    <Content shrink={shrink}>{children}</Content>
  </Container>
);

Navbar.defaultProps = {
  shrink: true,
  color: "lighter",
  hideBg: false,
  hideNavbar: false
};

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
  shrink: PropTypes.bool,
  color: PropTypes.string.isRequired
  hideBg: PropTypes.bool,
  hideNavbar: PropTypes.bool,
};

export default Navbar;
