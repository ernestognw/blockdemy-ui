import React from "react";
import PropTypes from "prop-types";
import Box from "../box";
import propTypes from "@styled-system/prop-types";
import { Container, Route } from "./elements";

const Breadcrumb = ({ children, p, bg, prevColor, lastColor, ...props }) => (
  <Container bg={bg} p={p} {...props}>
    <Box display="flex">
      {React.Children.map(children, (child, index) => (
        <Route
          prevColor={prevColor}
          lastColor={lastColor}
          last={index === children.length - 1}
        >
          {child}
        </Route>
      ))}
    </Box>
  </Container>
);

Breadcrumb.defaultProps = {
  p: 20,
  bg: "light",
  prevColor: "default",
  lastColor: "primary"
};

Breadcrumb.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  p: PropTypes.number,
  bg: PropTypes.string,
  prevColor: PropTypes.string,
  lastColor: PropTypes.string,
  ...propTypes.space
};

export default Breadcrumb;
