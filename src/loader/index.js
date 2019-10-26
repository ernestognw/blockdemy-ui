import React from "react";
import PropTypes from "prop-types";
import { LoaderWrapper, LoaderContainer } from "./elements";

const Loader = ({ size, alignSelf, className, ...props }) => (
  <LoaderWrapper
    className={className}
    size={size}
    alignSelf={alignSelf}
    {...props}
  >
    <div />
    <div />
    <div />
    <div />
  </LoaderWrapper>
);

Loader.defaultProps = {
  size: "",
  alignSelf: "",
  className: ""
};

Loader.propTypes = {
  size: PropTypes.string,
  alignSelf: PropTypes.string,
  className: PropTypes.string
};

export { LoaderContainer };

export default Loader;
