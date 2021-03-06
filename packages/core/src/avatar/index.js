import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import propTypes from '@styled-system/prop-types';
import { ProfilePictureContainer, ProfilePictureImage } from './elements';

const Avatar = forwardRef(({ src, size, alt, borderColor, borderWidth, ...props }, ref) => (
  <ProfilePictureContainer
    borderColor={borderColor}
    borderWidth={borderWidth}
    size={size}
    ref={ref}
    {...props}
  >
    <ProfilePictureImage src={src} alt={alt} />
  </ProfilePictureContainer>
));

Avatar.defaultProps = {
  size: 32,
  alt: '',
  borderColor: 'default',
  borderWidth: '0',
  className: undefined
};

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  alt: PropTypes.string,
  className: PropTypes.string,
  borderColor: PropTypes.string,
  borderWidth: PropTypes.string,
  ...propTypes.space,
  ...propTypes.position
};

export default Avatar;
