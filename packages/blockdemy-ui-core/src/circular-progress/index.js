import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { Label, IndicatorCircle, TrackCircle, Svg, Container } from './elements';

const CircularProgress = forwardRef(
  (
    {
      size,
      max,
      min,
      indeterminate,
      strokeWidth,
      value,
      angle,
      lineCap,
      children,
      trackColor,
      color,
      ...props
    },
    ref
  ) => {
    const radius = 50;
    const diameter = radius * 2;
    const circumference = diameter * Math.PI;
    const strokeDasharray = Math.round(circumference * 1000) / 1000;

    const viewBox = diameter / (1 - strokeWidth / 2);
    const viewBoxAttr = `${viewBox / 2} ${viewBox / 2} ${viewBox} ${viewBox}`;
    const width = (strokeWidth / 2) * viewBox;
    const progress = 1 - (value - min) / (max - min);
    const strokeDashoffset = progress * circumference;

    return (
      <Container
        role="progressbar"
        aria-valuemin={min}
        aria-valuemax={max}
        aria-valuenow={indeterminate ? null : value}
        ref={ref}
        fontSize={size}
        height={size}
        width={size}
        {...props}
      >
        <Svg viewBox={viewBoxAttr} indeterminate={indeterminate} size="100%" angle={angle}>
          <TrackCircle
            color={trackColor}
            strokeWidth={width}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            viewBox={viewBox}
            radius={radius}
            data-progress-track
          />
          <IndicatorCircle
            color={color}
            strokeWidth={width}
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            viewBox={viewBox}
            radius={radius}
            lineCap={lineCap}
            indeterminate={indeterminate}
            data-progress-indicator
          />
        </Svg>
        {children}
      </Container>
    );
  }
);

const CircularProgressLabel = ({ children, fontSize, ...props }) => (
  <Label fontSize={fontSize} {...props}>
    {children}
  </Label>
);

CircularProgressLabel.defaultProps = {
  fontSize: '0.5rem'
};

CircularProgressLabel.propTypes = {
  children: PropTypes.node.isRequired,
  fontSize: PropTypes.oneOfType([PropTypes.number, PropTypes.string])
};

CircularProgress.defaultProps = {
  size: 48,
  max: 100,
  min: 0,
  value: 0,
  indeterminate: false,
  strokeWidth: 0.1,
  angle: 0,
  lineCap: 'square',
  children: undefined,
  trackColor: 'veryLightGrey',
  color: 'default'
};

CircularProgress.propTypes = {
  size: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  max: PropTypes.number,
  min: PropTypes.number,
  value: PropTypes.number,
  indeterminate: PropTypes.bool,
  strokeWidth: PropTypes.number,
  angle: PropTypes.number,
  lineCap: PropTypes.string,
  children: PropTypes.node,
  trackColor: PropTypes.string,
  color: PropTypes.string
};

export { CircularProgressLabel };

export default CircularProgress;
