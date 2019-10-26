import React from "react";
import PropTypes from "prop-types";
import Button from "./elements";

Button.defaultProps = {
  uppercase: true,
  color: "default"
};

Button.propTypes = {
  uppercase: PropTypes.bool,
  children: PropTypes.any.isRequired,
  color: PropTypes.string
};

export default Button;
