import React from 'react';
import PropTypes from 'prop-types';
import { SkeletonContainer, ContentContainer } from './elements';

const Skeleton = ({ firstColor, lastColor, loading, fadeInDuration, speed, ...props }) =>
  loading ? (
    <SkeletonContainer speed={speed} firstColor={firstColor} lastColor={lastColor} {...props} />
  ) : (
    <ContentContainer fadeInDuration={fadeInDuration} {...props} />
  );

Skeleton.defaultProps = {
  firstColor: 'veryLightGrey',
  lastColor: 'lightGrey',
  fadeInDuration: 0.4,
  speed: 0.8
};

Skeleton.propTypes = {
  firstColor: PropTypes.string,
  lastColor: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  fadeInDuration: PropTypes.number,
  speed: PropTypes.number
};

export default Skeleton;
