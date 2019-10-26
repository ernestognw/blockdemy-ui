import React from "react";
import PropTypes from "prop-types";
import { Container, Content } from "./elements";

const Navbar = ({ children, shrink, ...props }) => (
  <Container {...props}>
    <Content shrink={shrink}>{children}</Content>
  </Container>
);

Navbar.defaultProps = {
  shrink: true
};

Navbar.propTypes = {
  children: PropTypes.object.isRequired,
  shrink: PropTypes.bool
};

export default Navbar;
