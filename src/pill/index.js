import React from "react";
import PropTypes from "prop-types";
import PillContainer from "./elements";

const Pill = ({
  children,
  size,
  color,
  fontColor,
  variant,
  className,
  ...props
}) => (
  <PillContainer
    color={color}
    fontColor={fontColor}
    size={size}
    variant={variant}
    className={className}
    {...props}
  >
    {children}
  </PillContainer>
);

Pill.defaultProps = {
  size: "",
  variant: "",
  color: "primary",
  fontColor: null,
  className: null
};

Pill.propTypes = {
  children: PropTypes.any.isRequired,
  size: PropTypes.string,
  variant: PropTypes.string,
  color: PropTypes.string,
  fontColor: PropTypes.string,
  className: PropTypes.string
};

export default Pill;
