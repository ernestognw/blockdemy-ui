import React from "react";
import PropTypes from "prop-types";
import { Container, Content } from "./elements";

const Navbar = ({ children, shrink, color, ...props }) => (
  <Container color={color} {...props}>
    <Content shrink={shrink}>{children}</Content>
  </Container>
);

Navbar.defaultProps = {
  shrink: true,
  color: "lighter"
};

Navbar.propTypes = {
  children: PropTypes.any.isRequired,
  shrink: PropTypes.bool,
  color: PropTypes.string.isRequired
};

export default Navbar;
