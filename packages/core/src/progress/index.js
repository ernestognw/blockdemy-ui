import React from 'react';
import PropTypes from 'prop-types';
import { valueToPercent } from '../utils/helpers';
import { ProgressIndicator, ProgressTrack } from './elements';

const Progress = ({
  color = 'blue',
  min,
  max,
  value,
  height,
  stripe,
  animate,
  indeterminate,
  trackRadius,
  radius,
  ...props
}) => {
  const percent = valueToPercent(value, min, max);

  return (
    <ProgressTrack height={height} bg="veryLight" trackRadius={trackRadius} {...props}>
      <ProgressIndicator
        radius={radius}
        min={min}
        max={max}
        value={value}
        bg={color}
        aria-valuemax={max}
        aria-valuemin={min}
        aria-valuenow={indeterminate ? null : value}
        role="progressbar"
        width={`${percent}%`}
        indeterminate={indeterminate}
        stripe={stripe || animate || indeterminate}
        animate={animate || indeterminate}
      />
    </ProgressTrack>
  );
};

ProgressIndicator.propTypes = {
  min: PropTypes.number.isRequired,
  max: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
  indeterminate: PropTypes.bool.isRequired
};

Progress.defaultProps = {
  color: 'primary',
  min: 0,
  max: 100,
  value: 0,
  height: '0.5rem',
  stripe: false,
  animate: false,
  indeterminate: false,
  trackRadius: undefined,
  radius: undefined
};

Progress.propTypes = {
  color: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  value: PropTypes.number,
  height: PropTypes.any,
  stripe: PropTypes.bool,
  animate: PropTypes.bool,
  indeterminate: PropTypes.bool,
  trackRadius: PropTypes.any,
  radius: PropTypes.any
};

export default Progress;
