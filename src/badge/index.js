import React from 'react';
import PropTypes from 'prop-types';
import Typography from '../typography';
import { Container, Circle } from './elements';

const Badge = ({ number, children, size, fontSize, color, position, distance, numberColor }) => (
  <Container>
    <Circle position={position} size={size} color={color} distance={distance}>
      <Typography fontSize={fontSize} color={numberColor}>
        {number}
      </Typography>
    </Circle>
    {children}
  </Container>
);

Badge.defaultProps = {
  size: '0.7rem',
  fontSize: '0.4rem',
  numberColor: 'lighter',
  color: 'primary',
  number: null,
  position: 'top-right',
  distance: '-4px'
};

Badge.propTypes = {
  number: PropTypes.number,
  children: PropTypes.node.isRequired,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  fontSize: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  numberColor: PropTypes.string,
  color: PropTypes.string,
  position: PropTypes.oneOf(['top-right', 'top-left', 'bottom-right', 'bottom-left']),
  distance: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

export default Badge;
