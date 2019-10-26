import React from "react";
import PropTypes from "prop-types";
import { ProfilePictureContainer, ProfilePictureImage } from "./elements";

const Avatar = ({ src, size, alt, ...props }) => (
  <ProfilePictureContainer size={size} {...props}>
    <ProfilePictureImage src={src} alt={alt} />
  </ProfilePictureContainer>
);

Avatar.defaultProps = {
  size: 32,
  alt: ""
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.string,
  alt: PropTypes.string,
  className: PropTypes.string
};

export default Avatar;
