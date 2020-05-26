import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import Box from '../box';
import VisuallyHidden from '../utils/visually-hidden';
import { CircleBox, ControlBox } from './elements';

const Switch = forwardRef(
  (
    { activeColor, inactiveColor, checked, size, disabled, onChange, circleColor, ...props },
    ref
  ) => {
    return (
      <Box as="label" display="inline-block" verticalAlign="middle" {...props}>
        <VisuallyHidden
          as="input"
          type="checkbox"
          onChange={event =>
            onChange({
              ...event,
              target: { ...event.target, value: event.target.value === 'false' }
            })
          }
          checked={checked}
          value={checked}
          disabled={disabled}
          ref={ref}
          {...props}
        />
        <ControlBox
          checked={checked}
          activeColor={activeColor}
          inactiveColor={inactiveColor}
          size={size}
          disabled={disabled}
        >
          <CircleBox checked={checked} bg={circleColor} size={size} />
        </ControlBox>
      </Box>
    );
  }
);

Switch.defaultProps = {
  activeColor: 'primary',
  inactiveColor: 'veryLightGrey',
  size: 'normal',
  disabled: false,
  circleColor: 'lighter'
};

Switch.propTypes = {
  activeColor: PropTypes.string,
  inactiveColor: PropTypes.string,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  checked: PropTypes.bool.isRequired,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  circleColor: PropTypes.string
};

export default Switch;
