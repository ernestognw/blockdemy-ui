import React from "react";
import StyledBox from "./elements";
import propTypes from "@styled-system/prop-types";

const Box = ({ ...props }) => <StyledBox {...props} />;

Box.propTypes = {
  ...propTypes.space,
  ...propTypes.layout,
  ...propTypes.color,
  ...propTypes.typography,
  ...propTypes.flexbox,
  ...propTypes.grid
};

export default Box;
