import React, { forwardRef, useRef, useState, useCallback, createContext, useContext } from 'react';
import PropTypes from 'prop-types';
import { ThumbBox, TrackBox, FilledTrackBox, SliderBox } from './elements';
import { valueToPercent } from '../utils/helpers';
import { percentToValue, roundValueToStep, clampValue, useForkRef } from './utils/functions';

const Thumb = forwardRef((props, ref) => {
  const {
    thumbRef,
    disabled,
    onFocus,
    onThumbKeyDown: onKeyDown,
    min,
    max,
    valueText,
    orientation,
    trackPercent,
    size,
    color,
    value,
    ariaLabelledBy
  } = useSliderContext();

  const sliderThumbRef = useForkRef(thumbRef, ref);
  return (
    <ThumbBox
      data-slider-thumb=""
      d="flex"
      alignItems="center"
      outline="none"
      justifyContent="center"
      onFocus={onFocus}
      ref={sliderThumbRef}
      role="slider"
      tabIndex={disabled ? undefined : 0}
      aria-disabled={disabled}
      aria-valuemin={min}
      aria-valuetext={valueText}
      aria-orientation={orientation}
      aria-valuenow={value}
      aria-valuemax={max}
      aria-labelledby={ariaLabelledBy}
      onKeyDown={onKeyDown}
      trackPercent={trackPercent}
      size={size}
      color={color}
      {...props}
    />
  );
});

const Track = props => {
  const { trackRef, disabled, size, color } = useSliderContext();
  return (
    <TrackBox
      data-slider-track=""
      aria-disabled={disabled}
      ref={trackRef}
      color={color}
      size={size}
      {...props}
    />
  );
};

const FilledTrack = props => {
  const { disabled, trackPercent, size, color } = useSliderContext();
  return (
    <FilledTrackBox
      aria-disabled={disabled}
      trackPercent={trackPercent}
      size={size}
      color={color}
      data-slider-filled-track=""
      {...props}
    />
  );
};

const SliderContext = createContext();
const useSliderContext = () => useContext(SliderContext);

const Slider = forwardRef(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      onKeyDown,
      onFocus,
      onBlur,
      onMouseDown,
      disabled,
      max = 100,
      min = 0,
      step = 1,
      size = 'md',
      color = 'blue',
      name,
      id,
      children,
      ...rest
    },
    ref
  ) => {
    const { current: isControlled } = useRef(controlledValue != null);
    const [value, setValue] = useState(defaultValue || 0);

    const valueToClamp = isControlled ? controlledValue : value;
    const actualValue = clampValue(valueToClamp, min, max);

    const trackPercent = valueToPercent(actualValue, min, max);

    const trackRef = useRef();
    const thumbRef = useRef();

    // eslint-disable-next-line consistent-return
    const getNewValue = event => {
      if (trackRef.current) {
        const { left, width } = trackRef.current.getBoundingClientRect();
        const { clientX } = event.touches ? event.touches[0] : event;
        const diffX = clientX - left;
        const percent = diffX / width;
        let newValue = percentToValue(percent, min, max);

        if (step) {
          newValue = roundValueToStep(newValue, step);
        }

        newValue = clampValue(newValue, min, max);

        return newValue;
      }
    };

    const updateValue = useCallback(
      newValue => {
        if (!isControlled) {
          setValue(newValue);
        }
        if (onChange) {
          onChange(newValue);
        }
      },
      [isControlled, onChange]
    );

    const handleThumbKeyDown = event => {
      let flag = false;
      let newValue;
      const tenSteps = (max - min) / 10;

      switch (event.key) {
        case 'ArrowLeft':
        case 'ArrowDown':
          newValue = actualValue - step;
          flag = true;
          break;
        case 'ArrowRight':
        case 'ArrowUp':
          newValue = actualValue + step;
          flag = true;
          break;
        case 'PageDown':
          newValue = actualValue - tenSteps;
          flag = true;
          break;
        case 'PageUp':
          newValue = actualValue + tenSteps;
          flag = true;
          break;
        case 'Home':
          newValue = min;
          flag = true;
          break;
        case 'End':
          newValue = max;
          flag = true;
          break;
        default:
          return;
      }

      if (flag) {
        event.preventDefault();
        event.stopPropagation();
      }
      if (step) {
        newValue = roundValueToStep(newValue, step);
      }
      newValue = clampValue(newValue, min, max);
      updateValue(newValue);

      if (onKeyDown) onKeyDown(event);
    };

    const handleMouseUp = () => {
      document.body.removeEventListener('mousemove', handleMouseMove);
      document.body.removeEventListener('touchmove', handleMouseMove);
      document.body.removeEventListener('mouseup', handleMouseUp);
      document.body.removeEventListener('touchend', handleMouseUp);
    };

    // TODO: Optimize this mouseMove event

    const handleMouseMove = event => {
      const newValue = getNewValue(event);
      updateValue(newValue);
    };

    const handleMouseDown = event => {
      if (disabled) return;
      if (onMouseDown) onMouseDown(event);
      event.preventDefault();

      const newValue = getNewValue(event);
      if (newValue !== actualValue) {
        updateValue(newValue);
      }

      document.body.addEventListener('mousemove', handleMouseMove);
      document.body.addEventListener('touchmove', handleMouseMove);
      document.body.addEventListener('mouseup', handleMouseUp);
      document.body.addEventListener('touchend', handleMouseUp);
      if (thumbRef.current) thumbRef.current.focus();
    };

    const context = {
      trackRef,
      thumbRef,
      onThumbKeyDown: handleThumbKeyDown,
      onFocus,
      trackPercent,
      disabled,
      size,
      color,
      min,
      max,
      value: actualValue
    };

    return (
      <SliderContext.Provider value={context}>
        <SliderBox
          role="presentation"
          tabIndex="-1"
          onMouseDown={handleMouseDown}
          onTouchStart={handleMouseDown}
          onMouseLeave={handleMouseUp}
          onTouchEnd={handleMouseUp}
          onBlur={event => {
            handleMouseUp();
            if (onBlur) onBlur(event);
          }}
          py="0.75rem"
          aria-disabled={disabled}
          ref={ref}
          {...rest}
        >
          {children}
          <input type="hidden" value={actualValue} name={name} id={id} />
        </SliderBox>
      </SliderContext.Provider>
    );
  }
);

Slider.defaultProps = {
  onChange: () => {},
  onKeyDown: () => {},
  onFocus: () => {},
  onBlur: () => {},
  onMouseDown: () => {},
  disabled: false,
  max: 100,
  min: 0,
  step: 1,
  size: 'normal',
  color: 'primary',
  name: undefined,
  id: undefined,
  defaultValue: 0
};

Slider.propTypes = {
  value: PropTypes.number.isRequired,
  defaultValue: PropTypes.number,
  onChange: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onMouseDown: PropTypes.func,
  disabled: PropTypes.bool,
  max: PropTypes.number,
  min: PropTypes.number,
  step: PropTypes.number,
  size: PropTypes.oneOf(['small', 'normal', 'large']),
  color: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  children: PropTypes.node.isRequired
};

export { Thumb, Track, FilledTrack };

Slider.Thumb = Thumb;
Slider.Track = Track;
Slider.FilledTrack = FilledTrack;
export default Slider;
